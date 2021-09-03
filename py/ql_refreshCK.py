# 在这里输入青龙面板用户名密码，如果不填写，就自动从auth.json中读取
username = ""
password = ""

import requests
import time
import json
from urllib.parse import urlencode
import re
requests.packages.urllib3.disable_warnings()

token=""
if username == "" or password == "":
    f = open("/ql/config/auth.json")
    auth = f.read()
    auth = json.loads(auth)
    username = auth["username"]
    password = auth["password"]
    token=auth["token"]
    f.close()


def gettimestamp():
    return str(int(time.time() * 1000))


def login(username, password):
    url = "http://127.0.0.1:5700/api/login?t=%s" % gettimestamp()
    data = {"username": username, "password": password}
    r = s.post(url, data)
    s.headers.update({"authorization": "Bearer " + json.loads(r.text)["data"]["token"]})


def getitem(key):
    url = "http://127.0.0.1:5700/api/envs?searchValue=%s&t=%s" % (key, gettimestamp())
    r = s.get(url)
    item = json.loads(r.text)["data"]
    return item

def update(ck, qlid):
    url = "http://127.0.0.1:5700/api/envs?t=%s" % gettimestamp()
    s.headers.update({"Content-Type": "application/json;charset=UTF-8"})
    data = {
        "name": "JD_COOKIE",
        "value": ck,
        "status": 0,
        "_id": qlid
    }
    r = s.put(url, data=json.dumps(data))
    if json.loads(r.text)["code"] == 200:
        return True
    else:
        return False

def disable(qlid):
    url = "http://127.0.0.1:5700/api/envs?t=%s" % gettimestamp()
    s.headers.update({"Content-Type": "application/json;charset=UTF-8"})
    data = {
        "status": 1,
        "_id": qlid
    }
    r = s.put(url, data=json.dumps(data))
    if json.loads(r.text)["code"] == 200:
        return True
    else:
        return False

def insert(ck):
    url = "http://127.0.0.1:5700/api/envs?t=%s" % gettimestamp()
    s.headers.update({"Content-Type": "application/json;charset=UTF-8"})
    data = []
    data_json = {
        "value": ck,
        "name": "JD_COOKIE"
    }
    data.append(data_json)
    r = s.post(url, json.dumps(data))
    if json.loads(r.text)["code"] == 200:
        return True
    else:
        return False

def check_ck(ck):
    url='https://wq.jd.com/user_new/info/GetJDUserInfoUnion?orgFlag=JD_PinGou_New&callSource=mainorder'
    headers={'Cookie':ck,'Referer':'https://home.m.jd.com/myJd/home.action','User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',}
    res=requests.get(url=url,headers=headers,verify=False,timeout=30)
    if res.status_code==200:
        code=int(json.loads(res.text)['retcode'])
        if code==0:
            return True
        else:
            return False
    else:
        return False

def ws_key_to_pt_key(pt_pin, ws_key):
    """
    ws_key换pt_key
    :return:
    """
    cookies = {
        'pin': pt_pin,
        'wskey': ws_key,
    }
    headers = {
        'user-agent': 'okhttp/3.12.1;jdmall;android;version/10.1.2;build/89743;screen/1080x2293;os/11;network/wifi;',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    }
    url = 'https://api.m.jd.com/client.action?functionId=genToken&clientVersion=10.1.2&build=89743&client=android' \
          '&d_brand=&d_model=&osVersion=&screen=&partner=&oaid=&openudid=a27b83d3d1dba1cc&eid=&sdkVersion=30&lang' \
          '=zh_CN&uuid=a27b83d3d1dba1cc&aid=a27b83d3d1dba1cc&area=19_1601_36953_50397&networkType=wifi&wifiBssid=&uts' \
          '=&uemps=0-2&harmonyOs=0&st=1630413012009&sign=ca712dabc123eadd584ce93f63e00207&sv=121'
    body = 'body=%7B%22to%22%3A%22https%253a%252f%252fplogin.m.jd.com%252fjd-mlogin%252fstatic%252fhtml' \
           '%252fappjmp_blank.html%22%7D&'
    response = requests.post(url, data=body, headers=headers, cookies=cookies, verify=False)
    data = json.loads(response.text)
    if data.get('code') != '0':
        return None
    token = data.get('tokenKey')
    url = data.get('url')
    session = requests.session()
    params = {
        'tokenKey': token,
        'to': 'https://plogin.m.jd.com/jd-mlogin/static/html/appjmp_blank.html'
    }
    url += '?' + urlencode(params)
    session.get(url, allow_redirects=True)
    for k, v in session.cookies.items():
        if k == 'pt_key':
            return v
    return None

if __name__ == '__main__':
    s = requests.session()
    if token =="":
        login(username, password)
    else:
        s.headers.update({"authorization": "Bearer " + token})
    wsKeys = getitem("JD_WSCK")
    jdCookies = getitem('JD_COOKIE')
    # 检查过期情况
    offCookies = []
    for cookie in jdCookies:
        if cookie['starus'] == 0:
            alive = check_ck(cookie['value'])
            if alive == False:
                # 然后禁用
                if disable(cookie['_id']):
                    print('禁用%s:成功' % (cookie['remarks']))
                else:
                    print('禁用%s:失败' % (cookie['remarks']))
                offCookies.append(cookie)
    print(offCookies)
    #wskeys获取新的ck
    # for off in offCookies:
    #     off_pt_pin = re.findall(r"pt_pin=(.*?);", off['value'])[0]
    #     off_pt_key = re.findall(r"pt_key=(.*?);", off['value'])[0]
    #     off_nickname =  off['remarks']
    #     for key in wsKeys:
    #         if re.findall(r"pt_pin=(.*?);", key['value'])[0] == off_pt_pin:
    #             ws_key = re.findall(r"ws_key=(.*?);", key['value'])[0]
    #             pt_key = ws_key_to_pt_key(off_pt_pin, ws_key)
    #             if pt_key is None:
    #                 print("账号%s-%s:wskey可能过期了" % (off_nickname,off_pt_pin))
    #             else:
    #                 ptck = 'pt_key='+pt_key+';'+'pt_pin='+off_pt_pin+';'
    #                 off['value']=ptck
    #                 off['status']=0
    #                 if update(off):
    #                     print("账号%s-%s:更新成功" % (off_nickname,off_pt_pin))
    #                 else:
    #                     print("账号%s-%s:更新失败" % (off_nickname,off_pt_pin))
    # # 检查新增情况
    # newSks = []
    # for wk in wsKeys:
    #     exist = False
    #     for ck in jdCookies:
    #         if re.findall(r"pt_pin=(.*?);", wk['value'])[0] == re.findall(r"pt_pin=(.*?);", ck['value'])[0]:
    #             exist = True
    #             break
    #     if(exist != True):
    #         newSks.append(wk)
    # # 新增账号
    # for sk in newSks:
    #     ws_key = re.findall(r"ws_key=(.*?);", sk['value'])[0]
    #     pt_pin = re.findall(r"pt_pin=(.*?);", sk['value'])[0]
    #     pt_key = ws_key_to_pt_key(pt_pin, ws_key)
    #     if pt_key is None:
    #         print("账号%s:wskey可能过期了" % off_pt_pin)
    #     else:
    #         ptck = 'pt_key='+pt_key+';'+'pt_pin='+pt_pin+';'
    #         if insert(sk):
    #             print("账号%s:新增成功" % pt_pin)
    #         else:
    #             print("账号%s:新增失败" % pt_pin)
    #


