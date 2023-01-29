package com.garbage;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSON;
import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.garbage.web.QLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@org.springframework.stereotype.Controller
@RequestMapping("/api")
public class Controller {
    @Autowired
    private QLService qlService;

    @PostMapping(value = "/getToken")
    @ResponseBody
    public JSONObject getToken(HttpServletRequest request, @RequestBody String requestString) {
        JSONObject requestJSON = new JSONObject(requestString);
        String url = (String) requestJSON.get("url");
        String client_id = (String) requestJSON.get("client_id");
        String client_secret = (String) requestJSON.get("client_secret");

        return qlService.getToken(url, client_id, client_secret);
    }

    @PostMapping(value = "/getEnvs")
    @ResponseBody
    public JSONObject getEnvs(HttpServletRequest request, @RequestBody String requestString) {
        JSONObject requestJSON = new JSONObject(requestString);
        String url = (String) requestJSON.get("url");
        String token = (String) requestJSON.get("token");

        return qlService.getEnvs(url, token);
    }

    @PostMapping(value = "/addCk")
    @ResponseBody
    public JSONObject addCk(HttpServletRequest request, @RequestBody String requestString) {
        JSONObject requestJSON = new JSONObject(requestString);
        String url = (String) requestJSON.get("url");
        String token = (String) requestJSON.get("token");
        String cookie = (String) requestJSON.get("cookie");
        String remarks = (String) requestJSON.get("remarks");
        return qlService.addCk(url, token, cookie, remarks);
    }

    @PostMapping(value = "/updateCk")
    @ResponseBody
    public JSONObject updateCk(HttpServletRequest request, @RequestBody String requestString) {
        JSONObject requestJSON = new JSONObject(requestString);
        String url = (String) requestJSON.get("url");
        String token = (String) requestJSON.get("token");
        String cookie = (String) requestJSON.get("cookie");
        String eid = Convert.toStr(requestJSON.get("eid"));
        String remarks = (String) requestJSON.get("remarks");
        return qlService.updateCk(url, token, cookie, eid, remarks);
    }

    @PostMapping(value = "/enableCk")
    @ResponseBody
    public JSONObject enableCk(HttpServletRequest request, @RequestBody String requestString) {
        JSONObject requestJSON = new JSONObject(requestString);
        String url = (String) requestJSON.get("url");
        String token = (String) requestJSON.get("token");
        String eid = Convert.toStr(requestJSON.get("eid"));
        return qlService.enableCk(url, token, eid);
    }
}
