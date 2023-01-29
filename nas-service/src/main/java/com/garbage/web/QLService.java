package com.garbage.web;

import cn.hutool.json.JSONObject;

public interface QLService {
    /**
     * 获取token
     *
     * @param url           url
     * @param client_id     id
     * @param client_secret secret
     * @return
     */
    public JSONObject getToken(String url, String client_id, String client_secret);

    /**
     * 获取env
     *
     * @param url
     * @param token
     * @return
     */
    public JSONObject getEnvs(String url, String token);

    /**
     * 添加ck
     *
     * @param url
     * @param token
     * @param cookie  ck
     * @param remarks 备注
     * @return
     */
    public JSONObject addCk(String url, String token, String cookie, String remarks);

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
    public JSONObject updateCk(String url, String token, String cookie, String eid, String remarks);

    /**
     * 使ck有效华
     *
     * @param url
     * @param token
     * @param eid
     * @return
     */
    public JSONObject enableCk(String url, String token, String eid);

}
