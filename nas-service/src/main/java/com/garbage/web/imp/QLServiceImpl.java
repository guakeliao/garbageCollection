package com.garbage.web.imp;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpResponse;
import cn.hutool.json.JSONObject;
import com.alibaba.fastjson.JSONArray;
import com.garbage.web.QLService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class QLServiceImpl implements QLService {

    /**
     * 获取token
     *
     * @param url           url
     * @param client_id     id
     * @param client_secret secret
     * @return
     */
    @Override
    public JSONObject getToken(String url, String client_id, String client_secret) {
        url = String.format("%s?client_id=%s&client_secret=%s", url, client_id, client_secret);
        HttpRequest httpRequest = HttpRequest.get(url);
        HttpResponse httpResponse = httpRequest.execute();
        return new JSONObject(httpResponse.body());
    }

    /**
     * 获取env
     *
     * @param url
     * @param token
     * @return
     */
    @Override
    public JSONObject getEnvs(String url, String token) {
        url = String.format("%s?searchValue=%s&t=%s", url, "JD_COOKIE", new Date().getTime());
        HttpRequest httpRequest = HttpRequest.get(url).header("Accept", "application/json").header("authorization", String.format("Bearer %s", token));
        HttpResponse httpResponse = httpRequest.execute();
        return new JSONObject(httpResponse.body());
    }

    /**
     * 添加ck
     *
     * @param url
     * @param token
     * @param cookie  ck
     * @param remarks 备注
     * @return
     */
    @Override
    public JSONObject addCk(String url, String token, String cookie, String remarks) {
        ArrayList arrayList = new ArrayList<>();
        HashMap hashMap = new HashMap();
        hashMap.put("name", "JD_COOKIE");
        hashMap.put("value", cookie);
        hashMap.put("remarks", remarks);
        arrayList.add(hashMap);
        JSONArray jsonArray = new JSONArray(arrayList);

        url = String.format("%s?t=%s", url, new Date().getTime());
        HttpRequest httpRequest = HttpRequest.post(url)
                .header("Accept", "application/json")
                .header("authorization", String.format("Bearer %s", token))
                .header("Content-Type", "application/json;charset=UTF-8")
                .body(jsonArray.toJSONString());
        HttpResponse httpResponse = httpRequest.execute();
        return new JSONObject(httpResponse.body());
    }

    /**
     * 更新已有ck
     *
     * @param url
     * @param token
     * @param cookie
     * @param eid
     * @param remarks
     * @return
     */
    @Override
    public JSONObject updateCk(String url, String token, String cookie, String eid, String remarks) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.set("name", "JD_COOKIE");
        jsonObject.set("value", cookie);
        jsonObject.set("id", eid);
        jsonObject.set("remarks", remarks);

        url = String.format("%s?t=%s", url, new Date().getTime());
        HttpRequest httpRequest = HttpRequest.put(url)
                .header("Accept", "application/json")
                .header("authorization", String.format("Bearer %s", token))
                .header("Content-Type", "application/json;charset=UTF-8")
                .body(jsonObject.toStringPretty());
        HttpResponse httpResponse = httpRequest.execute();
        return new JSONObject(httpResponse.body());
    }

    /**
     * 使ck有效华
     *
     * @param url
     * @param token
     * @param eid
     * @return
     */
    @Override
    public JSONObject enableCk(String url, String token, String eid) {
        ArrayList arrayList = new ArrayList<>();
        arrayList.add(eid);
        JSONArray jsonArray = new JSONArray(arrayList);

        url = String.format("%s?t=%s", url, new Date().getTime());
        HttpRequest httpRequest = HttpRequest.put(url)
                .header("Accept", "application/json")
                .header("authorization", String.format("Bearer %s", token))
                .header("Content-Type", "application/json;charset=UTF-8")
                .body(jsonArray.toJSONString());
        HttpResponse httpResponse = httpRequest.execute();
        return new JSONObject(httpResponse.body());
    }
}
