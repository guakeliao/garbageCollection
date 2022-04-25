/*

一共有2个变量
jd_zdjr_activityId  活动ID 必需
jd_zdjr_activityUrl 活动地址 必需

已适配docker

需要配合重写获取=>活动id、活动地址

https://\w+-isv.isvjcloud.com/wxTeam/shopInfo url script-request-body jd_zdjr.js

mitm
*-isv.isvjcloud.com
[task_local]
组队瓜分京豆
40 11 * * * jd_zdjr.js, tag=组队瓜分京豆, enabled=true
================Loon==============
[Script]
cron "40 11 * * *" script-path=jd_zdjr.js,tag=组队瓜分京豆

*/

let jd_zdjr_activityId = ""; // 活动ID
let jd_zdjr_activityUrl = ""; // 活动地址

const $ = new Env("lw-组队瓜分京豆");
const notify = $["isNode"]() ? require("./sendNotify") : "";
const jdCookieNode = $["isNode"]() ? require("./jdCookie.js") : "";
let headCount = process["env"]["headCount"] ?
    parseInt(process["env"]["headCount"]) :
    5;
let cookiesArr = [],
    cookie = "",
    message = "",
    messageTitle = "";
activityId = $["getdata"]("jd_smiek_zdjr_activityId") ?
    $["getdata"]("jd_smiek_zdjr_activityId") :
    jd_zdjr_activityId;
activityUrl = $["getdata"]("jd_smiek_zdjr_activityUrl") ?
    $["getdata"]("jd_smiek_zdjr_activityUrl") :
    jd_zdjr_activityUrl;
let activityCookie = "";
if ($["isNode"]()) {
    var nsbZrP = "1|3|2|4|0"["split"]("|"),
        pKPxGS = 0x0;
    while (!![]) {
        switch (nsbZrP[pKPxGS++]) {
            case "0":
                if (JSON["stringify"](process["env"])["indexOf"]("GITHUB") > -0x1)
                    process["exit"](0x0);
                continue;
            case "1":
                if (process["env"]["jd_zdjr_activityId"])
                    activityId = process["env"]["jd_zdjr_activityId"];
                continue;
            case "2":
                Object["keys"](jdCookieNode)["forEach"]((_0x3a3a91) => {
                    cookiesArr["push"](jdCookieNode[_0x3a3a91]);
                });
                continue;
            case "3":
                if (process["env"]["jd_zdjr_activityUrl"])
                    activityUrl = process["env"]["jd_zdjr_activityUrl"];
                continue;
            case "4":
                if (
                    process["env"]["JD_DEBUG"] &&
                    process["env"]["JD_DEBUG"] === "false"
                )
                    console["log"] = () => {
                    };
                continue;
        }
        break;
    }
} else {
    let cookiesData = $["getdata"]("CookiesJD") || "[]";
    cookiesData = jsonParse(cookiesData);
    cookiesArr = cookiesData["map"]((_0x452c83) => _0x452c83["cookie"]);
    cookiesArr["reverse"]();
    cookiesArr["push"](...[$["getdata"]("CookieJD2"), $["getdata"]("CookieJD")]);
    cookiesArr["reverse"]();
    cookiesArr = cookiesArr["filter"](
        (_0x7f89dd) =>
            _0x7f89dd !== "" && _0x7f89dd !== null && _0x7f89dd !== undefined
    );
}
const JD_API_HOST = "https://api.m.jd.com/client.action";
let isGetCookie = typeof $request !== "undefined";
if (isGetCookie) {
    GetCookie();
    $["done"]();
}
!(async () => {
    var _0x35c223 = {
        HzUUv: "hLTYH",
        zKHsd: "【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取",
        pUyyi: "https://bean.m.jd.com/",
        dubFr: function (_0x46c83f, _0x156a29) {
            return _0x46c83f < _0x156a29;
        },
        UOMIN: function (_0x4408e0, _0x301fa7) {
            return _0x4408e0 !== _0x301fa7;
        },
        YNkKP: "kVPPs",
        sQrWx: function (_0x44f3e6, _0x3887de) {
            return _0x44f3e6 !== _0x3887de;
        },
        RhFQH: "Kcyle",
        cQdlH: function (_0x46439b) {
            return _0x46439b();
        },
    };
    if (!activityId) {
        $["msg"]($["name"], "", "活动id不存在");
        $["done"]();
        return;
    }
    if (!cookiesArr[0x0]) {
        if (_0x35c223["HzUUv"] !== _0x35c223["HzUUv"]) {
            console["log"](e);
            console["log"]("京东服务器访问数据为空，请检查自身设备网络情况");
            return ![];
        } else {
            $["msg"]($["name"], _0x35c223["zKHsd"], _0x35c223["pUyyi"], {
                "open-url": "https://bean.m.jd.com/",
            });
            return;
        }
    }
    let headCookies = cookiesArr.splice(0, headCount);
    let followcount = Math.floor((cookiesArr.length - headCount) / headCount);
    console.log("\n******共有车头" + headCount + "*********\n");
    console.log("\n******共有尾随账号" + cookiesArr.length + "个*********\n");
    console.log("\n******平均车头" + followcount + "个*********\n");
    for (let i = 0; i < headCount; i++) {
        console.log("\n******开始车头" + (i + 1) + "*********\n");
        $["maxTeam"] = ![];
        messageTitle = "";
        message = "";
        messageTitle += "活动id: " + activityId + "\x0a";
        $["toactivity"] = !![];
        cookie = headCookies[i];
        $["index"] = i + 1;
        for (let j = -1; j < followcount; j++) {
            if (j != -1) {
                cookie = cookiesArr[i * followcount + j];
                $["index"] = i * followcount + headCount + j + 1;
            }
            $["UserName"] = decodeURIComponent(
                cookie["match"](/pt_pin=(.+?);/) &&
                cookie["match"](/pt_pin=(.+?);/)[0x1]
            );
            $["isLogin"] = !![];
            $["nickName"] = "";
            console["log"](
                "\n******开始【京东账号" +
                $["index"] +
                "】" +
                ($["nickName"] || $["UserName"]) +
                "*********\n"
            );
            if (!$["isLogin"]) {
                $["msg"](
                    $["name"],
                    "【提示】cookie已失效",
                    "京东账号" +
                    $["index"] +
                    " " +
                    ($["nickName"] || $["UserName"]) +
                    "\n请重新登录获取\nhttps://bean.m.jd.com/", {
                        "open-url": _0x35c223["pUyyi"],
                    }
                );
                if ($["isNode"]()) {
                    if (_0x35c223["sQrWx"](_0x35c223["RhFQH"], "pOQQY")) {
                        await notify["sendNotify"](
                            $["name"] + "cookie已失效 - " + $["UserName"],
                            "京东账号" +
                            $["index"] +
                            " " +
                            $["UserName"] +
                            "\n请重新登录获取cookie"
                        );
                    } else {
                        console["log"]("异常1：" + JSON["stringify"](data));
                    }
                }
                continue;
            }
            await _0x35c223["cQdlH"](jrzd);
            if (!$["toactivity"] || $["maxTeam"]) {
                break;
            }
        }
        messageTitle += "队伍人数 " + $["memberCount"] + "\x0a";
        await showMsg();
    }
})()["catch"]((_0x4160a2) => {
    $["log"]("", "❌ " + $["name"] + ", 失败! 原因: " + _0x4160a2 + "!", "");
})["finally"](() => {
    $["done"]();
});

async function jrzd() {

    var _0x3c1ba3 = {
        gRgxo: "jd_smiek_zdjr_activityId",
        myUbH: "jd_smiek_zdjr_activityUrl",
        pxxlq: function (_0x1bd427) {
            return _0x1bd427();
        },
        mBVBz: function (_0x42da36) {
            return _0x42da36();
        },
        Mizwa: function (_0xfb1c7b, _0x5e5b70) {
            return _0xfb1c7b + _0x5e5b70;
        },
        taeIP: "pin:",
        TIMAc: function (_0xd86a9c) {
            return _0xd86a9c();
        },
        uoOCA: function (_0x38dc74, _0x52b026) {
            return _0x38dc74 === _0x52b026;
        },
        bIkJf: "tzCkn",
        dZnQd: "队伍已满员",
    };
    ($["sid"] = ""), ($["userId"] = ""), ($["Token"] = ""), ($["Pin"] = "");
    $["saveTeam"] = ![];
    await getCk();
    await _0x3c1ba3["pxxlq"](getshopInfo);
    if ($["sid"] && $["userId"]) {
        await _0x3c1ba3["mBVBz"](getToken);
        if ($["Token"]) await getPin();
        console["log"](_0x3c1ba3["Mizwa"](_0x3c1ba3["taeIP"], $["Pin"]));
        await _0x3c1ba3["mBVBz"](getUserInfo);
        await _0x3c1ba3["TIMAc"](getTeam);
        await $["wait"](0x3e8);
        if ($["maxTeam"]) {
            if (_0x3c1ba3["uoOCA"](_0x3c1ba3["bIkJf"], "tzCkn")) {
                console["log"](_0x3c1ba3["dZnQd"]);
                return;
            } else {
                if ($request["body"]) {
                    let _0x2540e6 = $request["body"]["match"](
                        /activityId=([a-zA-Z0-9._-]+)/
                    );
                    if (_0x2540e6) {
                        let _0x3cd53a = $request["url"]["split"]("/");
                        console["log"]("activityId: " + _0x2540e6[0x1]);
                        console["log"](
                            "activityUrl: " + _0x3cd53a[0x0] + "//" + _0x3cd53a[0x2]
                        );
                        $["setdata"](_0x2540e6[0x1], _0x3c1ba3["gRgxo"]);
                        $["setdata"](
                            _0x3cd53a[0x0] + "//" + _0x3cd53a[0x2],
                            _0x3c1ba3["myUbH"]
                        );
                        $["msg"](
                            $["name"],
                            "获取activityId: 成功🎉",
                            "activityId:" +
                            _0x2540e6[0x1] +
                            "\x0aactivityUrl:" +
                            _0x3cd53a[0x0] +
                            "//" +
                            _0x3cd53a[0x2]
                        );
                    } else {
                        $["msg"]($["name"], "找不到activityId", "");
                    }
                }
            }
        }
    } else {
        console["log"]("【京东账号" + $["index"] + "】 未能获取活动信息");
        message += "【京东账号" + $["index"] + "】 未能获取活动信息\n";
    }
}

function showMsg() {
    var _0x595fc0 = {
        YLoGD: function (_0x517613) {
            return _0x517613();
        },
    };
    return new Promise((_0x5e1092) => {
        let _0x3f1238 = _0x595fc0["YLoGD"](openAppUrl);
        console["log"]("运行完毕");
        console["log"](_0x3f1238);
        $["msg"](
            $["name"],
            "" + $["shopName"],
            "" + messageTitle + message + " \n点击弹窗跳转到京东APP活动页面", {
                "open-url": _0x3f1238,
            }
        );
        _0x595fc0["YLoGD"](_0x5e1092);
    });
}

function openAppUrl() {
    var _0x1feb91 = {
        xVdDq: function (_0x3c2c10, _0x5d0f75) {
            return _0x3c2c10 === _0x5d0f75;
        },
        DCBgj: "https",
        tfKmN: "jump",
        BYZlg: "getCoupon",
        izqVn: function (_0x51e2c2, _0x2945db) {
            return _0x51e2c2(_0x2945db);
        },
        mOcGT: function (_0x390807, _0x4ff69a) {
            return _0x390807 === _0x4ff69a;
        },
        tYLqB: "http",
    };
    let _0x2736f1 = activityUrl + "/wxTeam/activity?activityId=" + activityId;
    let _0x1cda78 = _0x2736f1;
    if (_0x1feb91["xVdDq"](_0x2736f1["substr"](0x0, 0x5), _0x1feb91["DCBgj"])) {
        let _0x53f3b9 = {
            category: _0x1feb91["tfKmN"],
            des: _0x1feb91["BYZlg"],
            url: _0x2736f1["substr"](0x8),
        };
        _0x1cda78 =
            "openApp.jdMobile://virtual?params=" +
            _0x1feb91["izqVn"](encodeURIComponent, JSON["stringify"](_0x53f3b9));
    } else if (
        _0x1feb91["mOcGT"](_0x2736f1["substr"](0x0, 0x4), _0x1feb91["tYLqB"])
    ) {
        let _0x1c5b66 = {
            category: "jump",
            des: _0x1feb91["BYZlg"],
            url: _0x2736f1["substr"](0x7),
        };
        _0x1cda78 =
            "openApp.jdMobile://virtual?params=" +
            encodeURIComponent(JSON["stringify"](_0x1c5b66));
    }
    return _0x1cda78;
}

function getCk() {
    var _0x3416fd = {
        goUoq: "gzip, deflate, br",
        uvuaw: "zh-cn",
        XKRHJ: "keep-alive",
        MjLaW: "application/x-www-form-urlencoded",
        JyUpf: function (_0x29deb8, _0x915d92) {
            return _0x29deb8 + _0x915d92;
        },
        ourFf: "JDUA",
        ijByC: function (_0x5f5cfe, _0x5a5200) {
            return _0x5f5cfe == _0x5a5200;
        },
        dvvle: function (_0x490018, _0x35e9d7) {
            return _0x490018 && _0x35e9d7;
        },
        AonzE: function (_0x5084a7, _0x4fb10c) {
            return _0x5084a7 !== _0x4fb10c;
        },
        TLVLJ: function (_0x4b16d8, _0x582f82) {
            return _0x4b16d8 === _0x582f82;
        },
        LzenF: "EQFgn",
        UocVz: function (_0x4d2017, _0x3ec525) {
            return _0x4d2017 == _0x3ec525;
        },
        JbbhN: "swLtG",
        aIssq: "jtyig",
        wMqFf: "siGVG",
        LdAkP: function (_0x107f13) {
            return _0x107f13();
        },
        Fbofi: "JbKwc",
        OKLzl: "sLWQi",
        PGCup: "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    };
    return new Promise((_0x5c0114) => {
        var _0x3cf605 = {
            oVOtK: "application/json",
            GOCjN: _0x3416fd["goUoq"],
            rSWGA: _0x3416fd["uvuaw"],
            tClaB: _0x3416fd["XKRHJ"],
            oaLwX: _0x3416fd["MjLaW"],
            lBUPJ: function (_0x364fb8, _0x58a1e0) {
                return _0x3416fd["JyUpf"](_0x364fb8, _0x58a1e0);
            },
            qfVqj: "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
            EHNvC: _0x3416fd["ourFf"],
            vGKmQ: function (_0x125a16, _0x54a179) {
                return _0x3416fd["ijByC"](_0x125a16, _0x54a179);
            },
            HmcTU: function (_0x21cd1e, _0x3e4e3c) {
                return _0x3416fd["dvvle"](_0x21cd1e, _0x3e4e3c);
            },
            kcxOe: "LkUYc",
            oGXzV: function (_0x27ee3b, _0x5278e4) {
                return _0x3416fd["AonzE"](_0x27ee3b, _0x5278e4);
            },
            ziotb: "LVfdJ",
            ttuTi: function (_0x173c5b, _0x550cf0) {
                return _0x3416fd["TLVLJ"](_0x173c5b, _0x550cf0);
            },
            jWdpS: _0x3416fd["LzenF"],
            SBuRb: function (_0x1f1cca, _0xb19733) {
                return _0x3416fd["UocVz"](_0x1f1cca, _0xb19733);
            },
            PfAms: _0x3416fd["JbbhN"],
            ZTufL: function (_0xebcfa7, _0x2b157d) {
                return _0x3416fd["dvvle"](_0xebcfa7, _0x2b157d);
            },
            VicwM: _0x3416fd["aIssq"],
            OfasK: _0x3416fd["wMqFf"],
            NcrfG: function (_0x4981c6) {
                return _0x3416fd["LdAkP"](_0x4981c6);
            },
        };
        if (_0x3416fd["AonzE"](_0x3416fd["Fbofi"], _0x3416fd["OKLzl"])) {
            let _0x1421ee = {
                url: activityUrl + "/wxTeam/activity?activityId=" + activityId,
                headers: {
                    Cookie: cookie,
                    "User-Agent": $["isNode"]() ?
                        process["env"]["JD_USER_AGENT"] ?
                            process["env"]["JD_USER_AGENT"] :
                            _0x3416fd["PGCup"] : $["getdata"]("JDUA") ?
                            $["getdata"]("JDUA") : _0x3416fd["PGCup"],
                },
            };
            $["get"](_0x1421ee, async (_0x58d7c7, _0xcd85c5, _0x3f505b) => {
                if ("LkUYc" === _0x3cf605["kcxOe"]) {
                    try {
                        if (_0x3cf605["oGXzV"](_0x3cf605["ziotb"], _0x3cf605["ziotb"])) {
                            return {
                                url: "" + activityUrl + url,
                                body: body,
                                headers: {
                                    Accept: _0x3cf605["oVOtK"],
                                    "Accept-Encoding": _0x3cf605["GOCjN"],
                                    "Accept-Language": _0x3cf605["rSWGA"],
                                    Connection: _0x3cf605["tClaB"],
                                    "Content-Type": _0x3cf605["oaLwX"],
                                    Referer: activityUrl + "/wxTeam/activity?activityId=" + activityId,
                                    Cookie: _0x3cf605["lBUPJ"](cookie, activityCookie),
                                    "User-Agent": $["isNode"]() ?
                                        process["env"]["JD_USER_AGENT"] ?
                                            process["env"]["JD_USER_AGENT"] :
                                            _0x3cf605["qfVqj"] : $["getdata"](_0x3cf605["EHNvC"]) ?
                                            $["getdata"]("JDUA") : "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                                },
                            };
                        } else {
                            if (_0x58d7c7) {
                                if (
                                    _0x3cf605["ttuTi"](_0x3cf605["jWdpS"], _0x3cf605["jWdpS"])
                                ) {
                                    console["log"]("" + JSON["stringify"](_0x58d7c7));
                                    console["log"](
                                        $["name"] + " cookie API请求失败，请检查网路重试"
                                    );
                                } else {
                                    $["done"]();
                                }
                            } else {
                                if (_0x3cf605["SBuRb"](_0xcd85c5["status"], 0xc8)) {
                                    if (_0x3cf605["PfAms"] === _0x3cf605["PfAms"]) {
                                        let _0x38a232 = JSON["stringify"](_0xcd85c5)["match"](
                                            /LZ_TOKEN_KEY=[a-zA-Z0-9._-]+;/
                                        );
                                        let _0x1dccee = JSON["stringify"](_0xcd85c5)["match"](
                                            /LZ_TOKEN_VALUE=[\+a-zA-Z0-9._-]+/
                                        );
                                        if (_0x3cf605["ZTufL"](_0x38a232, _0x1dccee))
                                            activityCookie = "" + _0x38a232 + _0x1dccee + "==";
                                    } else {
                                        console["log"]("异常5：" + JSON["stringify"](_0x3f505b));
                                    }
                                }
                            }
                        }
                    } catch (_0x2b4965) {
                        if (_0x3cf605["VicwM"] !== _0x3cf605["OfasK"]) {
                            $["logErr"](_0x2b4965, _0xcd85c5);
                        } else {
                            _0x5c0114();
                        }
                    } finally {
                        _0x3cf605["NcrfG"](_0x5c0114);
                    }
                } else {
                    if (_0x3cf605["vGKmQ"](_0xcd85c5["status"], 0xc8)) {
                        let _0x3b983f = JSON["stringify"](_0xcd85c5)["match"](
                            /LZ_TOKEN_KEY=[a-zA-Z0-9._-]+;/
                        );
                        let _0x2f86c3 = JSON["stringify"](_0xcd85c5)["match"](
                            /LZ_TOKEN_VALUE=[\+a-zA-Z0-9._-]+/
                        );
                        if (_0x3cf605["HmcTU"](_0x3b983f, _0x2f86c3))
                            activityCookie = "" + _0x3b983f + _0x2f86c3 + "==";
                    }
                }
            });
        } else {
            console["log"]("" + JSON["stringify"](err));
            console["log"]($["name"] + " 5 API请求失败，请检查网路重试");
        }
    });
}

function getToken() {

    var _0x12a6be = {
        UUhsc: function (_0x4e274a) {
            return _0x4e274a();
        },
        cEiqA: "jd_smiek_zdjr_activityId",
        fIedn: "jd_smiek_zdjr_activityUrl",
        tDwJO: function (_0x105bc1, _0x478bca) {
            return _0x105bc1 !== _0x478bca;
        },
        pzcNg: "yCnPe",
        STqNz: function (_0x27c4fc, _0xc4683c) {
            return _0x27c4fc(_0xc4683c);
        },
        ehSaT: function (_0x1a6776, _0xf43249) {
            return _0x1a6776 === _0xf43249;
        },
        dUJFY: "jsZOu",
        aDamP: function (_0x5c29f9, _0xe6d54a) {
            return _0x5c29f9 == _0xe6d54a;
        },
        jdPHe: "UiCYv",
    };
    return new Promise((_0x109c10) => {
        var _0x21a602 = {
            waBHc: function (_0x73f93a) {
                return _0x12a6be["UUhsc"](_0x73f93a);
            },
            GYdzA: _0x12a6be["cEiqA"],
            sXgEq: _0x12a6be["fIedn"],
            nynuL: function (_0xb72f7b, _0x1ad085) {
                return _0x12a6be["tDwJO"](_0xb72f7b, _0x1ad085);
            },
            HvMAw: _0x12a6be["pzcNg"],
            ylMWm: function (_0x2af415, _0x1fe454) {
                return _0x12a6be["STqNz"](_0x2af415, _0x1fe454);
            },
            uDKpd: function (_0x1714d1, _0x3551e5) {
                return _0x12a6be["ehSaT"](_0x1714d1, _0x3551e5);
            },
            ulUwM: _0x12a6be["dUJFY"],
            AsFKn: "IMHAw",
            HzCXB: function (_0x137722, _0x5d6fee) {
                return _0x12a6be["aDamP"](_0x137722, _0x5d6fee);
            },
            pLghj: function (_0x559e44, _0x5b994f) {
                return _0x12a6be["ehSaT"](_0x559e44, _0x5b994f);
            },
            UMJHC: _0x12a6be["jdPHe"],
        };
        let _0x26a814 =
            "adid=7B411CD9-D62C-425B-B083-9AFC49B94228&area=16_1332_42932_43102&body=%7B%22url%22%3A%22https%3A%5C/%5C/cjhydz-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167541&client=apple&clientVersion=9.4.0&d_brand=apple&d_model=iPhone8%2C1&eid=eidId10b812191seBCFGmtbeTX2vXF3lbgDAVwQhSA8wKqj6OA9J4foPQm3UzRwrrLdO23B3E2wCUY/bODH01VnxiEnAUvoM6SiEnmP3IPqRuO%2By/%2BZo&isBackground=N&joycious=48&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=2f7578cb634065f9beae94d013f172e197d62283&osVersion=13.1.2&partner=apple&rfs=0000&scope=11&screen=750%2A1334&sign=60bde51b4b7f7ff6e1bc1f473ecf3d41&st=1613720203903&sv=110&uts=0f31TVRjBStG9NoZJdXLGd939Wv4AlsWNAeL1nxafUsZqiV4NLsVElz6AjC4L7tsnZ1loeT2A8Z5/KfI/YoJAUfJzTd8kCedfnLG522ydI0p40oi8hT2p2sNZiIIRYCfjIr7IAL%2BFkLsrWdSiPZP5QLptc8Cy4Od6/cdYidClR0NwPMd58K5J9narz78y9ocGe8uTfyBIoA9aCd/X3Muxw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=9cf90c586c4468e00678545b16176ed2";
        $["post"](
            taskUrl("?functionId=isvObfuscator", _0x26a814),
            async (_0x31d790, _0x447d8a, _0x2343f2) => {
                try {
                    if (_0x31d790) {
                        if (_0x21a602["nynuL"]("yCnPe", _0x21a602["HvMAw"])) {
                            _0x21a602["waBHc"](_0x109c10);
                        } else {
                            console["log"]("" + JSON["stringify"](_0x31d790));
                            console["log"]($["name"] + " 2 API请求失败，请检查网路重试");
                        }
                    } else {
                        if (_0x21a602["ylMWm"](safeGet, _0x2343f2)) {
                            if (_0x21a602["uDKpd"](_0x21a602["ulUwM"], _0x21a602["AsFKn"])) {
                                let _0x26e794 = $request["body"]["match"](
                                    /activityId=([a-zA-Z0-9._-]+)/
                                );
                                if (_0x26e794) {
                                    let _0x56bfd1 = $request["url"]["split"]("/");
                                    console["log"]("activityId: " + _0x26e794[0x1]);
                                    console["log"](
                                        "activityUrl: " + _0x56bfd1[0x0] + "//" + _0x56bfd1[0x2]
                                    );
                                    $["setdata"](_0x26e794[0x1], _0x21a602["GYdzA"]);
                                    $["setdata"](
                                        _0x56bfd1[0x0] + "//" + _0x56bfd1[0x2],
                                        _0x21a602["sXgEq"]
                                    );
                                    $["msg"](
                                        $["name"],
                                        "获取activityId: 成功🎉",
                                        "activityId:" +
                                        _0x26e794[0x1] +
                                        "\nactivityUrl:" +
                                        _0x56bfd1[0x0] +
                                        "//" +
                                        _0x56bfd1[0x2]
                                    );
                                } else {
                                    $["msg"]($["name"], "找不到activityId", "");
                                }
                            } else {
                                _0x2343f2 = JSON["parse"](_0x2343f2);
                                if (
                                    _0x21a602["HzCXB"](_0x2343f2["code"], 0x0) &&
                                    _0x2343f2["token"]
                                ) {
                                    if (_0x21a602["pLghj"]("ZqBuQ", _0x21a602["UMJHC"])) {
                                        console["log"]("" + JSON["stringify"](_0x31d790));
                                        console["log"](
                                            $["name"] + " 1 API请求失败，请检查网路重试"
                                        );
                                    } else {
                                        $["Token"] = _0x2343f2["token"];
                                    }
                                } else {
                                    console["log"]("异常2：" + JSON["stringify"](_0x2343f2));
                                }
                            }
                        }
                    }
                } catch (_0xa4cde0) {
                    $["logErr"](_0xa4cde0, _0x447d8a);
                } finally {
                    _0x21a602["waBHc"](_0x109c10);
                }
            }
        );
    });
}

function getPin() {

    var _0x4b8c4e = {
        ddqdb: function (_0xa40847) {
            return _0xa40847();
        },
        PSBry: "OsJPf",
        bhIma: function (_0x339ca8, _0x57fb71) {
            return _0x339ca8 === _0x57fb71;
        },
        Bmofv: "xSdSp",
        DTRJv: function (_0x176277, _0x1fcea9) {
            return _0x176277(_0x1fcea9);
        },
        iaeNY: "TJoMk",
        gQbbU: "aDuKf",
        OWbLS: function (_0x2a5032, _0x1749b3, _0xf9faaf) {
            return _0x2a5032(_0x1749b3, _0xf9faaf);
        },
        zWTFG: "/customer/getMyPing",
    };
    return new Promise((_0x24dbe7) => {
        var _0x506943 = {
            MlSrT: function (_0x4b5409, _0x17fdc5) {
                return _0x4b5409 === _0x17fdc5;
            },
            tZruy: "jjfBl",
            fEPfw: _0x4b8c4e["PSBry"],
            Xuhoi: function (_0x270220, _0x154ad9) {
                return _0x4b8c4e["bhIma"](_0x270220, _0x154ad9);
            },
            QePmg: _0x4b8c4e["Bmofv"],
            kDhIF: function (_0x2d00c6, _0x4fa794) {
                return _0x4b8c4e["DTRJv"](_0x2d00c6, _0x4fa794);
            },
            SMHaD: function (_0x5373f2, _0x1bb86d) {
                return _0x4b8c4e["bhIma"](_0x5373f2, _0x1bb86d);
            },
            WdelH: "fdfBs",
            wszsQ: function (_0x116b45) {
                return _0x4b8c4e["ddqdb"](_0x116b45);
            },
        };
        if (_0x4b8c4e["iaeNY"] === _0x4b8c4e["gQbbU"]) {
            _0x4b8c4e["ddqdb"](_0x24dbe7);
        } else {
            let _0x17c57b =
                "userId=" + $["userId"] + "&token=" + $["Token"] + "&fromType=APP";
            $["post"](
                _0x4b8c4e["OWbLS"](taskPostUrl, _0x4b8c4e["zWTFG"], _0x17c57b),
                async (_0x39696a, _0x49556b, _0x1ca88f) => {
                    try {
                        if (_0x506943["MlSrT"](_0x506943["tZruy"], _0x506943["fEPfw"])) {
                            $["logErr"](e, _0x49556b);
                        } else {
                            if (_0x39696a) {
                                if (_0x506943["Xuhoi"]("xSdSp", _0x506943["QePmg"])) {
                                    console["log"]("" + JSON["stringify"](_0x39696a));
                                    console["log"]($["name"] + " 3 API请求失败，请检查网路重试");
                                } else {
                                    console["log"]("异常6-2：" + JSON["stringify"](_0x1ca88f));
                                }
                            } else {
                                if (_0x506943["kDhIF"](safeGet, _0x1ca88f)) {
                                    _0x1ca88f = JSON["parse"](_0x1ca88f);
                                    if (_0x1ca88f["result"] && _0x1ca88f["data"]) {
                                        if (_0x506943["SMHaD"]("fdfBs", _0x506943["WdelH"])) {
                                            $["Pin"] = _0x1ca88f["data"]["secretPin"];
                                        } else {
                                            $["log"](
                                                "",
                                                "❌ " + $["name"] + ", 失败! 原因: " + e + "!",
                                                ""
                                            );
                                        }
                                    } else {
                                        console["log"]("异常3：" + JSON["stringify"](_0x1ca88f));
                                    }
                                }
                            }
                        }
                    } catch (_0x884b80) {
                        $["logErr"](_0x884b80, _0x49556b);
                    } finally {
                        _0x506943["wszsQ"](_0x24dbe7);
                    }
                }
            );
        }
    });
}

function getshopInfo() {

    var _0x1d9b4f = {
        cZUOK: function (_0x2c1d11) {
            return _0x2c1d11();
        },
        EbGYz: function (_0x5c1764, _0xbc8c33) {
            return _0x5c1764 === _0xbc8c33;
        },
        CYHQt: "HByGf",
        WFSRI: "eoGhL",
        mssvF: "Hnlry",
        joyxF: function (_0x4a3436, _0x4335f7) {
            return _0x4a3436 !== _0x4335f7;
        },
        kBlrm: "iycBn",
        ypKbq: function (_0x5b4dbe, _0x305f7a, _0x2124da) {
            return _0x5b4dbe(_0x305f7a, _0x2124da);
        },
    };
    return new Promise((_0x55df75) => {
        var _0xd98dc7 = {
            sxQzp: function (_0x227298) {
                return _0x1d9b4f["cZUOK"](_0x227298);
            },
            ysSAY: function (_0x54cbfb, _0x25c3ac) {
                return _0x1d9b4f["EbGYz"](_0x54cbfb, _0x25c3ac);
            },
            EiNFE: _0x1d9b4f["CYHQt"],
            tDQZG: _0x1d9b4f["WFSRI"],
            Kjlld: "UfOHv",
            rLDzO: _0x1d9b4f["mssvF"],
        };
        if (_0x1d9b4f["joyxF"](_0x1d9b4f["kBlrm"], "gcWtP")) {
            $["post"](
                _0x1d9b4f["ypKbq"](
                    taskPostUrl,
                    "/wxTeam/shopInfo",
                    "activityId=" + activityId
                ),
                async (_0x36e0ae, _0x40da01, _0x22237a) => {
                    var _0x447dab = {
                        FZKsO: function (_0x3209e3) {
                            return _0xd98dc7["sxQzp"](_0x3209e3);
                        },
                    };
                    if (_0xd98dc7["ysSAY"](_0xd98dc7["EiNFE"], _0xd98dc7["tDQZG"])) {
                        $["logErr"](e, _0x40da01);
                    } else {
                        try {
                            if ("UfOHv" !== _0xd98dc7["Kjlld"]) {
                                console["log"]("" + JSON["stringify"](_0x36e0ae));
                                console["log"]($["name"] + " 6 API请求失败，请检查网路重试");
                            } else {
                                if (_0x36e0ae) {
                                    if (_0xd98dc7["ysSAY"]("Hnlry", _0xd98dc7["rLDzO"])) {
                                        console["log"]("" + JSON["stringify"](_0x36e0ae));
                                        console["log"](
                                            $["name"] + " 1 API请求失败，请检查网路重试"
                                        );
                                    } else {
                                        $["logErr"](e, _0x40da01);
                                    }
                                } else {
                                    if (_0x22237a && safeGet(_0x22237a)) {
                                        _0x22237a = JSON["parse"](_0x22237a);
                                        if (_0x22237a["data"]) {
                                            $["sid"] = _0x22237a["data"]["sid"];
                                            $["userId"] = _0x22237a["data"]["userId"];
                                            $["shopName"] = _0x22237a["data"]["shopName"];
                                        } else {
                                            console["log"]("异常1：" + JSON["stringify"](_0x22237a));
                                        }
                                    }
                                }
                            }
                        } catch (_0x53e118) {
                            $["logErr"](_0x53e118, _0x40da01);
                        } finally {
                            if ("dCQrD" === "GmiHY") {
                                _0x447dab["FZKsO"](_0x55df75);
                            } else {
                                _0x55df75();
                            }
                        }
                    }
                }
            );
        } else {
            return JSON["parse"](str);
        }
    });
}

function joinShop() {
    var _0x44ddd5 = {
        fHkvy: function (_0x140d2f, _0x103cba) {
            return _0x140d2f != _0x103cba;
        },
        xBpvm: "https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg",
        zDPtH: function (_0x5d06c1, _0x7e5396) {
            return _0x5d06c1 == _0x7e5396;
        },
        uSeeb: function (_0x53cafb, _0x475c12) {
            return _0x53cafb === _0x475c12;
        },
        VOQyl: function (_0x5c7f3d, _0x52620e) {
            return _0x5c7f3d !== _0x52620e;
        },
        RQnoR: function (_0x3bd61b, _0x4f8cfb) {
            return _0x3bd61b === _0x4f8cfb;
        },
        LTbiP: "rNVRO",
        xhECR: function (_0x299520, _0x39c94c) {
            return _0x299520 === _0x39c94c;
        },
        DXuMc: "false",
        DYPgx: function (_0x20f29b, _0xe4e2d7) {
            return _0x20f29b > _0xe4e2d7;
        },
        niNHz: "GITHUB",
        GzyAj: "VcAbh",
        yhFLp: function (_0x52c93c, _0xae0fa0) {
            return _0x52c93c(_0xae0fa0);
        },
    };
    return new Promise((_0xad9328) => {
        var _0xd93107 = {
            iRBNx: function (_0x4efdb2, _0xaa5fb6) {
                return _0x4efdb2(_0xaa5fb6);
            },
            hTHau: function (_0x3e4aa4, _0x544eeb) {
                return _0x44ddd5["fHkvy"](_0x3e4aa4, _0x544eeb);
            },
            pfseL: _0x44ddd5["xBpvm"],
            BWYJK: function (_0x4dd5f5, _0x5801cf) {
                return _0x44ddd5["zDPtH"](_0x4dd5f5, _0x5801cf);
            },
            qNIKN: function (_0xd38f9d, _0xa2f23c) {
                return _0x44ddd5["uSeeb"](_0xd38f9d, _0xa2f23c);
            },
            VFLlP: function (_0x556671, _0x2f6172) {
                return _0x44ddd5["uSeeb"](_0x556671, _0x2f6172);
            },
            vBuHm: function (_0x1883ee, _0x5012d2) {
                return _0x44ddd5["VOQyl"](_0x1883ee, _0x5012d2);
            },
            setPs: "DFZsQ",
            VSPcv: "ubdyI",
            WQCys: "LmwAG",
            hUdVi: function (_0x59b0ee, _0x22c9a2) {
                return _0x44ddd5["RQnoR"](_0x59b0ee, _0x22c9a2);
            },
            SvNET: _0x44ddd5["LTbiP"],
            WsaiA: "OkMWX",
            CEnte: "ByBjk",
            uUMlg: "qWscL",
            MaEBI: function (_0x2fb2be, _0x46250c) {
                return _0x44ddd5["VOQyl"](_0x2fb2be, _0x46250c);
            },
            xQqCc: "KdKDV",
            uEeIN: function (_0x2af2ec) {
                return _0x2af2ec();
            },
            nFnmt: function (_0xe37611, _0x52741f) {
                return _0x44ddd5["xhECR"](_0xe37611, _0x52741f);
            },
            jHuFP: _0x44ddd5["DXuMc"],
            DgHPb: function (_0x2746a8, _0x4917d0) {
                return _0x44ddd5["DYPgx"](_0x2746a8, _0x4917d0);
            },
            PVqtV: _0x44ddd5["niNHz"],
        };
        if (_0x44ddd5["xhECR"](_0x44ddd5["GzyAj"], "VcAbh")) {
            let _0x4e7b5a =
                "venderId=" +
                $["userId"] +
                "&buyerPin=" +
                _0x44ddd5["yhFLp"](encodeURIComponent, $["Pin"]);
            $["post"](
                taskPostUrl(
                    "/mc/new/brandCard/common/shopAndBrand/getOpenCardInfo",
                    _0x4e7b5a
                ),
                async (_0x57cdf5, _0x53f161, _0x1ac107) => {
                    var _0x4776c4 = {
                        rgVst: "https://bean.m.jd.com/",
                        jzjXS: function (_0x3d3bf8, _0x5a0d26) {
                            return _0xd93107["BWYJK"](_0x3d3bf8, _0x5a0d26);
                        },
                    };
                    if (_0xd93107["qNIKN"]("xZPbj", "Hrpob")) {
                        if (_0xd93107["iRBNx"](safeGet, _0x1ac107)) {
                            _0x1ac107 = JSON["parse"](_0x1ac107);
                            if (_0x1ac107["result"] && _0x1ac107["data"]) {
                                $["attrTouXiang"] = _0xd93107["hTHau"](
                                    _0x1ac107["data"]["yunMidImageUrl"],
                                    _0x1ac107["data"]["yunMidImageUrl"]
                                ) ?
                                    ($["attrTouXiang"] = _0x1ac107["data"]["yunMidImageUrl"]) :
                                    ($["attrTouXiang"] = _0xd93107["pfseL"]);
                            } else {
                                console["log"]("异常6-2：" + JSON["stringify"](_0x1ac107));
                            }
                        }
                    } else {
                        try {
                            if (_0x57cdf5) {
                                if (_0xd93107["VFLlP"]("iUXgn", "PbWDL")) {
                                    $["logErr"](e, _0x53f161);
                                } else {
                                    console["log"]("" + JSON["stringify"](_0x57cdf5));
                                    console["log"]($["name"] + " 4 API请求失败，请检查网路重试");
                                }
                            } else {
                                if (safeGet(_0x1ac107)) {
                                    if (_0xd93107["vBuHm"](_0xd93107["setPs"], "DFZsQ")) {
                                        $["maxTeam"] = !![];
                                    } else {
                                        _0x1ac107 = JSON["parse"](_0x1ac107);
                                        if (_0x1ac107["result"] && _0x1ac107["data"]) {
                                            if (
                                                _0xd93107["VFLlP"](
                                                    _0xd93107["VSPcv"],
                                                    _0xd93107["WQCys"]
                                                )
                                            ) {
                                                $["msg"](
                                                    $["name"],
                                                    "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
                                                    "https://bean.m.jd.com/", {
                                                        "open-url": _0x4776c4["rgVst"],
                                                    }
                                                );
                                                return;
                                            } else {
                                                if (_0x1ac107["data"]["openCardLink"]) {
                                                    if (
                                                        _0xd93107["hUdVi"](
                                                            _0xd93107["SvNET"],
                                                            _0xd93107["WsaiA"]
                                                        )
                                                    ) {
                                                        return !![];
                                                    } else {
                                                        let _0x2b47ad =
                                                            _0x1ac107["data"]["openCardLink"]["match"](
                                                                /channel=(\d+)/
                                                            );
                                                        const _0x326ed3 = {
                                                            venderId: $["userId"],
                                                            shopId: $["sid"],
                                                            bindByVerifyCodeFlag: 0x1,
                                                            registerExtend: {},
                                                            writeChildFlag: 0x0,
                                                            channel: _0x2b47ad[0x1],
                                                        };
                                                        let _0x1324f5 =
                                                            "https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=" +
                                                            encodeURIComponent(JSON["stringify"](_0x326ed3)) +
                                                            "&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1613718333317_54489";
                                                        let _0x21c3ee =
                                                            "" + _0x1ac107["data"]["openCardLink"];
                                                        await jiaru(_0x1324f5, _0x21c3ee);
                                                    }
                                                }
                                            }
                                        } else {
                                            if (
                                                _0xd93107["hUdVi"](
                                                    _0xd93107["CEnte"],
                                                    _0xd93107["uUMlg"]
                                                )
                                            ) {
                                                if (safeGet(_0x1ac107)) {
                                                    _0x1ac107 = JSON["parse"](_0x1ac107);
                                                    if (
                                                        _0x4776c4["jzjXS"](_0x1ac107["code"], 0x0) &&
                                                        _0x1ac107["token"]
                                                    ) {
                                                        $["Token"] = _0x1ac107["token"];
                                                    } else {
                                                        console["log"](
                                                            "异常2：" + JSON["stringify"](_0x1ac107)
                                                        );
                                                    }
                                                }
                                            } else {
                                                console["log"](
                                                    "异常4：" + JSON["stringify"](_0x1ac107)
                                                );
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (_0x14db99) {
                            $["logErr"](_0x14db99, _0x53f161);
                        } finally {
                            if (_0xd93107["MaEBI"](_0xd93107["xQqCc"], _0xd93107["xQqCc"])) {
                                console["log"]("" + JSON["stringify"](_0x57cdf5));
                                console["log"]($["name"] + " 3 API请求失败，请检查网路重试");
                            } else {
                                _0xd93107["uEeIN"](_0xad9328);
                            }
                        }
                    }
                }
            );
        } else {
            if (process["env"]["jd_zdjr_activityId"])
                activityId = process["env"]["jd_zdjr_activityId"];
            if (process["env"]["jd_zdjr_activityUrl"])
                activityUrl = process["env"]["jd_zdjr_activityUrl"];
            Object["keys"](jdCookieNode)["forEach"]((_0xab312e) => {
                cookiesArr["push"](jdCookieNode[_0xab312e]);
            });
            if (
                process["env"]["JD_DEBUG"] &&
                _0xd93107["nFnmt"](process["env"]["JD_DEBUG"], _0xd93107["jHuFP"])
            )
                console["log"] = () => {
                };
            if (
                _0xd93107["DgHPb"](
                    JSON["stringify"](process["env"])["indexOf"](_0xd93107["PVqtV"]), -0x1
                )
            )
                process["exit"](0x0);
        }
    });
}

function jiaru(_0x44818b, _0x18f4bb) {
    var _0x24b01d = {
        jdZjk: "ExPGF",
        BBHfO: "*/*",
        zpmTT: "gzip, deflate, br",
        wNqKa: "JDUA",
    };
    return new Promise((_0x1159f9) => {
        var _0x13c79e = {
            eDVmA: function (_0xd84e68, _0x107282) {
                return _0xd84e68 === _0x107282;
            },
            JGDrz: _0x24b01d["jdZjk"],
        };
        let _0x1ffa51 = {
            url: _0x44818b,
            headers: {
                Accept: _0x24b01d["BBHfO"],
                "Accept-Encoding": _0x24b01d["zpmTT"],
                "Accept-Language": "zh-cn",
                Connection: "keep-alive",
                Host: "api.m.jd.com",
                Referer: _0x18f4bb,
                Cookie: cookie,
                "User-Agent": $["isNode"]() ?
                    process["env"]["JD_USER_AGENT"] ?
                        process["env"]["JD_USER_AGENT"] :
                        "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1" : $["getdata"](_0x24b01d["wNqKa"]) ?
                        $["getdata"](_0x24b01d["wNqKa"]) : "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
            },
        };
        $["get"](_0x1ffa51, async (_0x1b6eb6, _0x33d202, _0x2235d4) => {
            try {
                if (_0x1b6eb6) {
                    if (_0x13c79e["eDVmA"](_0x13c79e["JGDrz"], _0x13c79e["JGDrz"])) {
                        console["log"]("" + JSON["stringify"](_0x1b6eb6));
                        console["log"]($["name"] + " 入会 API请求失败，请检查网路重试");
                    } else {
                        $["logErr"](e, _0x33d202);
                    }
                } else {
                    $["log"](_0x2235d4);
                }
            } catch (_0x2454de) {
                $["logErr"](_0x2454de, _0x33d202);
            } finally {
                _0x1159f9();
            }
        });
    });
}

function getUserInfo() {

    var _0x78e031 = {
        VxSbr: "*/*",
        Ujkvo: "keep-alive",
        Xvwkz: "api.m.jd.com",
        NzMJE: "JDUA",
        QhTaw: "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        FkLcV: "kqbIn",
        TkHuj: function (_0x6975db, _0x40dc02) {
            return _0x6975db !== _0x40dc02;
        },
        mOnQe: "rtXCM",
        DEcbi: function (_0x41a3b2, _0x143ebb) {
            return _0x41a3b2(_0x143ebb);
        },
        qPuMV: function (_0x1e9ec9, _0xe34516) {
            return _0x1e9ec9 === _0xe34516;
        },
        HWPeH: "LNkEK",
        JGIPj: function (_0x34e8eb, _0x3917e1) {
            return _0x34e8eb != _0x3917e1;
        },
        VlHyl: "https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg",
        snXcw: "PMIgb",
        poQjc: function (_0x4aeac8) {
            return _0x4aeac8();
        },
        NFncM: "SPeGP",
        rAqPX: function (_0x50bf1f, _0x3b6d17) {
            return _0x50bf1f(_0x3b6d17);
        },
        hGdCD: function (_0x2b87d4, _0x33eb9c, _0x361a59) {
            return _0x2b87d4(_0x33eb9c, _0x361a59);
        },
    };
    return new Promise((_0x4f6b7a) => {
        if (_0x78e031["NFncM"] !== _0x78e031["NFncM"]) {
            $["teamNum"] = $["teamNum"][0x1];
            messageTitle += "最多可以组建" + $["teamNum"] + "个战队\n";
        } else {
            let _0x3f860c = "pin=" + _0x78e031["rAqPX"](encodeURIComponent, $["Pin"]);
            $["post"](
                _0x78e031["hGdCD"](
                    taskPostUrl,
                    "/wxActionCommon/getUserInfo",
                    _0x3f860c
                ),
                async (_0x1040f0, _0x5b65b4, _0x5b3351) => {
                    var _0x5c296a = {
                        IWjpz: _0x78e031["VxSbr"],
                        LFcUF: "zh-cn",
                        fPXKW: _0x78e031["Ujkvo"],
                        tyPaw: _0x78e031["Xvwkz"],
                        nEbDb: _0x78e031["NzMJE"],
                        nSngQ: _0x78e031["QhTaw"],
                    };
                    try {
                        if ("atlwS" === _0x78e031["FkLcV"]) {
                            return {
                                url: "https://api.m.jd.com/client.action" + url,
                                body: _0x3f860c,
                                headers: {
                                    Accept: _0x5c296a["IWjpz"],
                                    "Accept-Encoding": "gzip, deflate, br",
                                    "Accept-Language": _0x5c296a["LFcUF"],
                                    Connection: _0x5c296a["fPXKW"],
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    Host: _0x5c296a["tyPaw"],
                                    Cookie: cookie,
                                    "User-Agent": $["isNode"]() ?
                                        process["env"]["JD_USER_AGENT"] ?
                                            process["env"]["JD_USER_AGENT"] :
                                            "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1" : $["getdata"](_0x5c296a["nEbDb"]) ?
                                            $["getdata"](_0x5c296a["nEbDb"]) : _0x5c296a["nSngQ"],
                                },
                            };
                        } else {
                            if (_0x1040f0) {
                                if (_0x78e031["TkHuj"](_0x78e031["mOnQe"], "rtXCM")) {
                                    console["log"]("" + JSON["stringify"](_0x1040f0));
                                    console["log"]($["name"] + " 7 API请求失败，请检查网路重试");
                                } else {
                                    console["log"]("" + JSON["stringify"](_0x1040f0));
                                    console["log"](
                                        $["name"] + " 6-1 API请求失败，请检查网路重试"
                                    );
                                }
                            } else {
                                if (_0x78e031["DEcbi"](safeGet, _0x5b3351)) {
                                    _0x5b3351 = JSON["parse"](_0x5b3351);
                                    if (_0x5b3351["result"] && _0x5b3351["data"]) {
                                        if (_0x78e031["qPuMV"](_0x78e031["HWPeH"], "CGNFW")) {
                                            _0x4f6b7a();
                                        } else {
                                            $["attrTouXiang"] = _0x78e031["JGIPj"](
                                                _0x5b3351["data"]["yunMidImageUrl"],
                                                _0x5b3351["data"]["yunMidImageUrl"]
                                            ) ?
                                                ($["attrTouXiang"] =
                                                    _0x5b3351["data"]["yunMidImageUrl"]) :
                                                ($["attrTouXiang"] = _0x78e031["VlHyl"]);
                                        }
                                    } else {
                                        if (_0x78e031["snXcw"] === "PMIgb") {
                                            console["log"](
                                                "异常6-2：" + JSON["stringify"](_0x5b3351)
                                            );
                                        } else {
                                            _0x4f6b7a();
                                        }
                                    }
                                }
                            }
                        }
                    } catch (_0x15a33d) {
                        $["logErr"](_0x15a33d, _0x5b65b4);
                    } finally {
                        _0x78e031["poQjc"](_0x4f6b7a);
                    }
                }
            );
        }
    });
}

function getTeam() {

    var _0x16367e = {
        iHRed: "不要在BoxJS手动复制粘贴修改cookie",
        OZaFt: "https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg",
        kkvRH: "jd_smiek_zdjr_activityId",
        bGcdn: "jd_smiek_zdjr_activityUrl",
        lhQtO: function (_0x2873f4, _0x2a339f) {
            return _0x2873f4 !== _0x2a339f;
        },
        ihYdC: "YYFKa",
        QOqwe: "usmXA",
        zRrxG: "NqGRz",
        LDNin: function (_0x391c88, _0x217409) {
            return _0x391c88 === _0x217409;
        },
        fxMpn: "tZvwI",
        NatvH: function (_0x36ef46, _0x371738) {
            return _0x36ef46 < _0x371738;
        },
        MLYnB: "活动结束",
        taVWY: "MEIIe",
        tMmyv: function (_0xc7f0fb, _0x230867) {
            return _0xc7f0fb + _0x230867;
        },
        qCQxt: function (_0xbfa896, _0xc1b18b, _0x55474b) {
            return _0xbfa896(_0xc1b18b, _0x55474b);
        },
        Nacpk: "BMRXi",
        shHQe: "zMwrI",
        CFsGd: function (_0x2024bd, _0x9481f0) {
            return _0x2024bd(_0x9481f0);
        },
        XWAmK: function (_0x39a385, _0x1c87e0, _0x5273f9) {
            return _0x39a385(_0x1c87e0, _0x5273f9);
        },
        VTdPT: "/wxTeam/activityContent",
    };
    return new Promise((_0x33a3ce) => {
        var _0x37250d = {
            VfACV: _0x16367e["iHRed"],
            ENdur: _0x16367e["OZaFt"],
            bInDr: function (_0x2c6c97) {
                return _0x2c6c97();
            },
            oXBtE: _0x16367e["kkvRH"],
            koPLi: _0x16367e["bGcdn"],
            hwHyy: function (_0x1abb0b, _0x3f7b99) {
                return _0x16367e["lhQtO"](_0x1abb0b, _0x3f7b99);
            },
            mQHIV: _0x16367e["ihYdC"],
            hOauG: _0x16367e["QOqwe"],
            pkyxW: _0x16367e["zRrxG"],
            oLuwO: function (_0xd7cfcd, _0x27414a) {
                return _0xd7cfcd(_0x27414a);
            },
            fBqeo: function (_0x339991, _0x3ecf60) {
                return _0x16367e["lhQtO"](_0x339991, _0x3ecf60);
            },
            HylQo: function (_0x47c827, _0x5c41ba) {
                return _0x16367e["LDNin"](_0x47c827, _0x5c41ba);
            },
            AmSNj: _0x16367e["fxMpn"],
            ScoDf: function (_0x112203, _0xc5f71b) {
                return _0x16367e["NatvH"](_0x112203, _0xc5f71b);
            },
            gvQdM: _0x16367e["MLYnB"],
            qeZcF: function (_0x320127) {
                return _0x320127();
            },
            CQyPE: function (_0xaa7a39, _0x413d59) {
                return _0xaa7a39 == _0x413d59;
            },
            wJCNm: function (_0x5c9ea7, _0x27cbf9) {
                return _0x5c9ea7 == _0x27cbf9;
            },
            PitVg: _0x16367e["taVWY"],
            jAWDy: function (_0x526dda, _0x3542c9) {
                return _0x16367e["tMmyv"](_0x526dda, _0x3542c9);
            },
            gmEcn: function (_0x3be96f, _0x1f8f8e, _0x203095) {
                return _0x16367e["qCQxt"](_0x3be96f, _0x1f8f8e, _0x203095);
            },
            NIPvF: function (_0x5448a5, _0x4b11cc) {
                return _0x5448a5 != _0x4b11cc;
            },
            muiGu: "WHtDB",
            UymOv: _0x16367e["Nacpk"],
            AAxGC: _0x16367e["shHQe"],
            wjlQr: function (_0x17e887, _0x5b5fbf) {
                return _0x16367e["lhQtO"](_0x17e887, _0x5b5fbf);
            },
            xklHs: "drlQI",
        };
        let _0x979688 =
            "activityId=" +
            activityId +
            "&pin=" +
            _0x16367e["CFsGd"](encodeURIComponent, $["Pin"]);
        if ($["signUuid"]) _0x979688 += "&signUuid=" + $["signUuid"];
        $["post"](
            _0x16367e["XWAmK"](taskPostUrl, _0x16367e["VTdPT"], _0x979688),
            async (_0x4b830d, _0xfcd685, _0x28a585) => {
                var _0x2e962f = {
                    xKdil: function (_0x2d0bdb) {
                        return _0x2d0bdb();
                    },
                    KXBDI: "队伍已满员",
                    KksJe: _0x37250d["oXBtE"],
                    gkWWw: _0x37250d["koPLi"],
                };
                if (_0x37250d["hwHyy"]("YYFKa", _0x37250d["mQHIV"])) {
                    _0x2e962f["xKdil"](GetCookie);
                    $["done"]();
                } else {
                    try {
                        if (_0x37250d["hOauG"] !== "Bngdk") {
                            if (_0x4b830d) {
                                if ("LdhCz" !== _0x37250d["pkyxW"]) {
                                    console["log"]("" + JSON["stringify"](_0x4b830d));
                                    console["log"]($["name"] + " 5 API请求失败，请检查网路重试");
                                } else {
                                    $["logErr"](e, _0xfcd685);
                                }
                            } else {
                                if (_0x37250d["oLuwO"](safeGet, _0x28a585)) {
                                    if (_0x37250d["fBqeo"]("JgBaM", "JgBaM")) {
                                        try {
                                            return JSON["parse"](str);
                                        } catch (_0x249c60) {
                                            console["log"](_0x249c60);
                                            $["msg"]($["name"], "", _0x37250d["VfACV"]);
                                            return [];
                                        }
                                    } else {
                                        _0x28a585 = JSON["parse"](_0x28a585);
                                        if (_0x28a585["result"] && _0x28a585["data"]) {
                                            if (_0x37250d["HylQo"](_0x37250d["AmSNj"], "tZvwI")) {
                                                if (
                                                    _0x37250d["ScoDf"](
                                                        new Date(
                                                            _0x28a585["data"]["active"]["endTimeStr"][
                                                                "replace"
                                                                ](/-/g, "/")
                                                        )["getTime"](),
                                                        new Date()["getTime"]()
                                                    )
                                                ) {
                                                    $["toactivity"] = ![];
                                                    console["log"](_0x37250d["gvQdM"]);
                                                    messageTitle += "活动结束\n";
                                                    _0x37250d["qeZcF"](_0x33a3ce);
                                                } else {
                                                    if (
                                                        _0x37250d["CQyPE"](
                                                            _0x28a585["data"]["canCreate"], ![]
                                                        ) &&
                                                        _0x37250d["wJCNm"](_0x28a585["data"]["list"], null)
                                                    )
                                                        message += "人数已满\n";
                                                    if (_0x28a585["data"]["share"]) {
                                                        if (
                                                            _0x37250d["fBqeo"]("RNcYT", _0x37250d["PitVg"])
                                                        ) {
                                                            $["memberCount"] = _0x37250d["jAWDy"](
                                                                _0x37250d["gmEcn"](
                                                                    parseInt,
                                                                    _0x28a585["data"]["share"]["memberCount"],
                                                                    0xa
                                                                ),
                                                                0x1
                                                            );
                                                        } else {
                                                            $["logErr"](e, _0xfcd685);
                                                        }
                                                    } else {
                                                        $["memberCount"] = 0x0;
                                                    }
                                                    if ($["index"] <= headCount) {
                                                        $["saveTeam"] = !![];
                                                        $["teamNum"] =
                                                            _0x28a585["data"]["active"]["actRule"]["match"](
                                                                /最多可以组建(\d+)个战队/
                                                            );
                                                        if ($["teamNum"]) {
                                                            $["teamNum"] = $["teamNum"][0x1];
                                                            messageTitle +=
                                                                "最多可以组建" + $["teamNum"] + "个战队\x0a";
                                                        }
                                                    }
                                                    if ($["signUuid"] && $["index"] > headCount) {
                                                        if (_0x37250d["muiGu"] === _0x37250d["UymOv"]) {
                                                            _0x28a585 = JSON["parse"](_0x28a585);
                                                            if (_0x28a585["result"] && _0x28a585["data"]) {
                                                                $["attrTouXiang"] =
                                                                    _0x28a585["data"]["yunMidImageUrl"] !=
                                                                    _0x28a585["data"]["yunMidImageUrl"] ?
                                                                        ($["attrTouXiang"] =
                                                                            _0x28a585["data"]["yunMidImageUrl"]) :
                                                                        ($["attrTouXiang"] = _0x37250d["ENdur"]);
                                                            } else {
                                                                console["log"](
                                                                    "异常6-2：" + JSON["stringify"](_0x28a585)
                                                                );
                                                            }
                                                        } else {
                                                            $["log"]("加入队伍 id: " + $["signUuid"]);
                                                            await joinTeam();
                                                        }
                                                    }
                                                    if ($["saveTeam"]) {
                                                        if (_0x28a585["data"]["canCreate"]) {
                                                            if (_0x37250d["HylQo"]("xrThz", "xrThz")) {
                                                                await _0x37250d["qeZcF"](saveTeam);
                                                            } else {
                                                                console["log"](_0x2e962f["KXBDI"]);
                                                                return;
                                                            }
                                                        } else {
                                                            if (
                                                                _0x37250d["fBqeo"]("HssHc", _0x37250d["AAxGC"])
                                                            ) {
                                                                $["signUuid"] = _0x28a585["data"]["signUuid"];
                                                                messageTitle +=
                                                                    "队伍id: " + $["signUuid"] + "\x0a";
                                                                message +=
                                                                    "【京东账号" +
                                                                    $["index"] +
                                                                    "】 创建队伍id: " +
                                                                    $["signUuid"] +
                                                                    "\x0a";
                                                                $["log"]("队伍id: " + $["signUuid"]);
                                                            } else {
                                                                _0x37250d["bInDr"](_0x33a3ce);
                                                            }
                                                        }
                                                    }
                                                }
                                            } else {
                                                let _0x122201 = $request["url"]["split"]("/");
                                                console["log"]("activityId: " + activityId[0x1]);
                                                console["log"](
                                                    "activityUrl: " +
                                                    _0x122201[0x0] +
                                                    "//" +
                                                    _0x122201[0x2]
                                                );
                                                $["setdata"](activityId[0x1], _0x2e962f["KksJe"]);
                                                $["setdata"](
                                                    _0x122201[0x0] + "//" + _0x122201[0x2],
                                                    _0x2e962f["gkWWw"]
                                                );
                                                $["msg"](
                                                    $["name"],
                                                    "获取activityId: 成功🎉",
                                                    "activityId:" +
                                                    activityId[0x1] +
                                                    "\nactivityUrl:" +
                                                    _0x122201[0x0] +
                                                    "//" +
                                                    _0x122201[0x2]
                                                );
                                            }
                                        } else {
                                            console["log"]("异常5：" + JSON["stringify"](_0x28a585));
                                        }
                                    }
                                }
                            }
                        } else {
                            cookiesArr["push"](jdCookieNode[item]);
                        }
                    } catch (_0x3c19ca) {
                        $["logErr"](_0x3c19ca, _0xfcd685);
                    } finally {
                        if (_0x37250d["wjlQr"]("drlQI", _0x37250d["xklHs"])) {
                            _0x37250d["bInDr"](_0x33a3ce);
                        } else {
                            _0x37250d["qeZcF"](_0x33a3ce);
                        }
                    }
                }
            }
        );
    });
}

function saveTeam(_0x3b216f = 0x0) {
    var _0x18a1e4 = {
        qEdqj: "ykYYg",
        KDUxB: "wTRIh",
        Etqlc: function (_0x2f4135, _0x4d4b43) {
            return _0x2f4135 > _0x4d4b43;
        },
        oNEBe: "不是店铺会员",
        GReNK: "奖品与您擦肩而过",
        OmyFw: function (_0x574123, _0x452697) {
            return _0x574123 == _0x452697;
        },
        RXMlw: function (_0x95ef01, _0x36adca) {
            return _0x95ef01(_0x36adca);
        },
        AZpGe: "iTGpo",
        msoXa: function (_0x4aa2c7) {
            return _0x4aa2c7();
        },
        nhDhM: function (_0x538904, _0x47fac5) {
            return _0x538904 === _0x47fac5;
        },
        RjKLP: "jwPYZ",
        ywkbW: function (_0x83fcbf, _0x2f6dfd) {
            return _0x83fcbf(_0x2f6dfd);
        },
        CdWgb: function (_0x197778, _0x54d8cd, _0x193f8d) {
            return _0x197778(_0x54d8cd, _0x193f8d);
        },
        szoMN: "/wxTeam/saveCaptain",
    };
    return new Promise((_0x26e343) => {
        var _0x31d091 = {
            IUmhS: function (_0x489bb6) {
                return _0x489bb6();
            },
            xuohr: function (_0x194de1, _0x5119d0) {
                return _0x194de1 === _0x5119d0;
            },
            altKr: _0x18a1e4["qEdqj"],
            DpBNC: _0x18a1e4["KDUxB"],
            djLqs: function (_0x135070, _0x9d6036) {
                return _0x18a1e4["Etqlc"](_0x135070, _0x9d6036);
            },
            qMSox: _0x18a1e4["oNEBe"],
            SyUCo: function (_0x52c7ce, _0x514399) {
                return _0x52c7ce != _0x514399;
            },
            ztflx: _0x18a1e4["GReNK"],
            bEegh: function (_0x178e8e, _0x5e7c21) {
                return _0x18a1e4["OmyFw"](_0x178e8e, _0x5e7c21);
            },
            CStnI: function (_0x507b95, _0x307e08) {
                return _0x18a1e4["RXMlw"](_0x507b95, _0x307e08);
            },
            joSpZ: _0x18a1e4["AZpGe"],
            AMWWP: function (_0x1f66cd) {
                return _0x18a1e4["msoXa"](_0x1f66cd);
            },
        };
        if (_0x18a1e4["nhDhM"](_0x18a1e4["RjKLP"], _0x18a1e4["RjKLP"])) {
            let _0x5a4995 = encodeURIComponent($["Pin"]);
            if (_0x3b216f == 0x1)
                _0x5a4995 = encodeURIComponent(encodeURIComponent($["Pin"]));
            let _0x598a25 =
                "activityId=" +
                activityId +
                "&pin=" +
                _0x5a4995 +
                "&pinImg=" +
                _0x18a1e4["ywkbW"](encodeURIComponent, $["attrTouXiang"]);
            $["post"](
                _0x18a1e4["CdWgb"](taskPostUrl, _0x18a1e4["szoMN"], _0x598a25),
                async (_0x44a0af, _0x284baf, _0x3b79c1) => {
                    if (_0x31d091["xuohr"](_0x31d091["altKr"], _0x31d091["DpBNC"])) {
                        if (safeGet(_0x3b79c1)) {
                            _0x3b79c1 = JSON["parse"](_0x3b79c1);
                            if (_0x3b79c1["result"] && _0x3b79c1["data"]) {
                                $["Pin"] = _0x3b79c1["data"]["secretPin"];
                            } else {
                                console["log"]("异常3：" + JSON["stringify"](_0x3b79c1));
                            }
                        }
                    } else {
                        try {
                            if (_0x44a0af) {
                                console["log"]("" + JSON["stringify"](_0x44a0af));
                                console["log"]($["name"] + " 6 API请求失败，请检查网路重试");
                            } else {
                                if (safeGet(_0x3b79c1)) {
                                    _0x3b79c1 = JSON["parse"](_0x3b79c1);
                                    if (_0x3b79c1["result"] && _0x3b79c1["data"]) {
                                        message +=
                                            "【京东账号" +
                                            $["index"] +
                                            "】 创建队伍id: " +
                                            _0x3b79c1["data"]["signUuid"] +
                                            "\x0a";
                                        console["log"](
                                            "创建队伍成功 id: " + _0x3b79c1["data"]["signUuid"]
                                        );
                                        $["signUuid"] = _0x3b79c1["data"]["signUuid"];
                                        messageTitle += "队伍id: " + $["signUuid"] + "\x0a";
                                    } else {
                                        console["log"]("异常6：" + JSON["stringify"](_0x3b79c1));
                                        if (
                                            _0x31d091["djLqs"](
                                                _0x3b79c1["errorMessage"]["indexOf"](
                                                    _0x31d091["qMSox"]
                                                ), -0x1
                                            ) &&
                                            _0x31d091["SyUCo"](_0x3b216f, 0x3)
                                        ) {
                                            await joinShop();
                                            await saveTeam(0x3);
                                        } else if (
                                            _0x31d091["djLqs"](
                                                _0x3b79c1["errorMessage"]["indexOf"](
                                                    _0x31d091["ztflx"]
                                                ), -0x1
                                            ) &&
                                            _0x31d091["bEegh"](_0x3b216f, 0x0)
                                        ) {
                                            await _0x31d091["CStnI"](saveTeam, 0x1);
                                        }
                                    }
                                }
                            }
                        } catch (_0x51bd62) {
                            $["logErr"](_0x51bd62, _0x284baf);
                        } finally {
                            if (_0x31d091["xuohr"]("hpIIq", _0x31d091["joSpZ"])) {
                                $["toactivity"] = ![];
                                console["log"]("活动结束");
                                messageTitle += "活动结束\n";
                                _0x31d091["IUmhS"](_0x26e343);
                            } else {
                                _0x31d091["AMWWP"](_0x26e343);
                            }
                        }
                    }
                }
            );
        } else {
            if (data && safeGet(data)) {
                data = JSON["parse"](data);
                if (data["data"]) {
                    $["sid"] = data["data"]["sid"];
                    $["userId"] = data["data"]["userId"];
                    $["shopName"] = data["data"]["shopName"];
                } else {
                    console["log"]("异常1：" + JSON["stringify"](data));
                }
            }
        }
    });
}

function joinTeam(_0x5d5fb6 = 0x0) {
    var _0x2e7fb6 = {
        JmwET: function (_0x5bf22b) {
            return _0x5bf22b();
        },
        Dqfmb: "jump",
        SjIVq: function (_0x3bc4d2, _0x3621dd) {
            return _0x3bc4d2(_0x3621dd);
        },
        OBVfY: function (_0x4af82, _0x44f335) {
            return _0x4af82(_0x44f335);
        },
        XbfPg: "CookieJD2",
        YXQDR: function (_0x39271c, _0x24eb4f) {
            return _0x39271c === _0x24eb4f;
        },
        UwsYK: function (_0x273f89, _0x184ff3) {
            return _0x273f89 !== _0x184ff3;
        },
        NaGLB: "KLWGo",
        XCUBz: "aclIK",
        pbodv: "Wndsg",
        kXXSH: "队伍已经满员",
        JWqgf: function (_0x286e2f, _0x22cc52) {
            return _0x286e2f > _0x22cc52;
        },
        MzDCI: "奖品与您擦肩而过",
        LwgKu: "WrrhH",
        ogEwv: "tRVYX",
        lmwud: "GXGIz",
        iysGP: function (_0x59c48c, _0xf7148b) {
            return _0x59c48c == _0xf7148b;
        },
        BjBPi: function (_0x32c296, _0x2285ff) {
            return _0x32c296(_0x2285ff);
        },
        wmOvq: function (_0x98781, _0x48e34e, _0x332cc4) {
            return _0x98781(_0x48e34e, _0x332cc4);
        },
        gKnTl: "/wxTeam/saveMember",
    };
    return new Promise((_0x3471e7) => {
        var _0x1464df = {
            aukpX: function (_0x303ef4) {
                return _0x2e7fb6["JmwET"](_0x303ef4);
            },
            OZxWv: _0x2e7fb6["Dqfmb"],
            Fnnzp: function (_0x13e770, _0x476714) {
                return _0x2e7fb6["SjIVq"](_0x13e770, _0x476714);
            },
            Bvqjd: function (_0x224fd1, _0x505a30) {
                return _0x224fd1 === _0x505a30;
            },
            ykEBM: function (_0x69e974, _0x383694) {
                return _0x2e7fb6["OBVfY"](_0x69e974, _0x383694);
            },
            rouKD: _0x2e7fb6["XbfPg"],
            GasZA: function (_0x24dfff, _0x5e9ca2) {
                return _0x2e7fb6["YXQDR"](_0x24dfff, _0x5e9ca2);
            },
            chZdH: "RXVLS",
            HfBpS: function (_0x1f2654, _0xf41321) {
                return _0x2e7fb6["UwsYK"](_0x1f2654, _0xf41321);
            },
            SKyBg: _0x2e7fb6["NaGLB"],
            OvHKo: _0x2e7fb6["XCUBz"],
            jdDhm: _0x2e7fb6["pbodv"],
            JrtJi: "不是店铺会员",
            aKHWA: _0x2e7fb6["kXXSH"],
            GdMew: function (_0x1f5942, _0x1a1377) {
                return _0x2e7fb6["JWqgf"](_0x1f5942, _0x1a1377);
            },
            UXMmS: _0x2e7fb6["MzDCI"],
            auroB: function (_0x471258, _0x429888) {
                return _0x471258 !== _0x429888;
            },
            ZTNWe: _0x2e7fb6["LwgKu"],
            NOhZx: _0x2e7fb6["ogEwv"],
        };
        if (_0x2e7fb6["YXQDR"](_0x2e7fb6["lmwud"], "CyTRJ")) {
            _0x1464df["aukpX"](_0x3471e7);
        } else {
            let _0x1b200c = _0x2e7fb6["OBVfY"](
                encodeURIComponent,
                encodeURIComponent($["Pin"])
            );
            if (_0x2e7fb6["iysGP"](_0x5d5fb6, 0x1))
                _0x1b200c = encodeURIComponent($["Pin"]);
            let _0x1bd3fe =
                "activityId=" +
                activityId +
                "&signUuid=" +
                $["signUuid"] +
                "&pin=" +
                _0x1b200c +
                "&pinImg=" +
                _0x2e7fb6["BjBPi"](encodeURIComponent, $["attrTouXiang"]);
            $["post"](
                _0x2e7fb6["wmOvq"](taskPostUrl, _0x2e7fb6["gKnTl"], _0x1bd3fe),
                async (_0x163909, _0x39e7e5, _0x32054d) => {
                    var _0x107dc1 = {
                        enJXV: function (_0x5f3ea1, _0x5de5a9) {
                            return _0x1464df["Bvqjd"](_0x5f3ea1, _0x5de5a9);
                        },
                        mFrLD: "retcode",
                        BdZDw: function (_0x5537ed, _0x754f0d) {
                            return _0x1464df["ykEBM"](_0x5537ed, _0x754f0d);
                        },
                        KCOWl: _0x1464df["rouKD"],
                    };
                    if (_0x1464df["GasZA"](_0x1464df["chZdH"], _0x1464df["chZdH"])) {
                        try {
                            if (_0x1464df["HfBpS"](_0x1464df["SKyBg"], _0x1464df["OvHKo"])) {
                                if (_0x163909) {
                                    console["log"]("" + JSON["stringify"](_0x163909));
                                    console["log"]($["name"] + " 7 API请求失败，请检查网路重试");
                                } else {
                                    if (_0x1464df["GasZA"](_0x1464df["jdDhm"], "Wndsg")) {
                                        if (_0x1464df["ykEBM"](safeGet, _0x32054d)) {
                                            _0x32054d = JSON["parse"](_0x32054d);
                                            if (_0x32054d["result"] && _0x32054d["data"]) {
                                                message += "【京东账号" + $["index"] + "】 加入队伍\n";
                                                $["log"]("加入队伍成功");
                                            } else {
                                                if (
                                                    _0x32054d["errorMessage"]["indexOf"](
                                                        _0x1464df["JrtJi"]
                                                    ) > -0x1 &&
                                                    _0x5d5fb6 != 0x3
                                                ) {
                                                    await joinShop();
                                                    await _0x1464df["ykEBM"](joinTeam, 0x3);
                                                } else if (
                                                    _0x32054d["errorMessage"]["indexOf"](
                                                        _0x1464df["aKHWA"]
                                                    ) > -0x1
                                                ) {
                                                    $["maxTeam"] = !![];
                                                } else if (
                                                    _0x1464df["GdMew"](
                                                        _0x32054d["errorMessage"]["indexOf"](
                                                            _0x1464df["UXMmS"]
                                                        ), -0x1
                                                    ) &&
                                                    _0x5d5fb6 == 0x0
                                                ) {
                                                    if (_0x1464df["auroB"]("OIEtL", _0x1464df["ZTNWe"])) {
                                                        await joinTeam(0x1);
                                                    } else {
                                                        if (_0x32054d) {
                                                            _0x32054d = JSON["parse"](_0x32054d);
                                                            if (
                                                                _0x107dc1["enJXV"](
                                                                    _0x32054d[_0x107dc1["mFrLD"]],
                                                                    0xd
                                                                )
                                                            ) {
                                                                $["isLogin"] = ![];
                                                                return;
                                                            }
                                                        } else {
                                                            console["log"]("京东服务器返回空数据");
                                                        }
                                                    }
                                                } else {
                                                    if ("tRVYX" !== _0x1464df["NOhZx"]) {
                                                        let _0xf6b9ed = $["getdata"]("CookiesJD") || "[]";
                                                        _0xf6b9ed = _0x107dc1["BdZDw"](
                                                            jsonParse,
                                                            _0xf6b9ed
                                                        );
                                                        cookiesArr = _0xf6b9ed["map"](
                                                            (_0x2038e6) => _0x2038e6["cookie"]
                                                        );
                                                        cookiesArr["reverse"]();
                                                        cookiesArr["push"](
                                                            ...[
                                                                $["getdata"](_0x107dc1["KCOWl"]),
                                                                $["getdata"]("CookieJD"),
                                                            ]
                                                        );
                                                        cookiesArr["reverse"]();
                                                        cookiesArr = cookiesArr["filter"](
                                                            (_0x4007cc) =>
                                                                _0x4007cc !== "" &&
                                                                _0x4007cc !== null &&
                                                                _0x4007cc !== undefined
                                                        );
                                                    } else {
                                                        console["log"](
                                                            "异常7：" + JSON["stringify"](_0x32054d)
                                                        );
                                                        message +=
                                                            "【京东账号" +
                                                            $["index"] +
                                                            "】 " +
                                                            _0x32054d["errorMessage"] +
                                                            "\x0a";
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        let _0x2bffc3 = {
                                            category: _0x1464df["OZxWv"],
                                            des: "getCoupon",
                                            url: url["substr"](0x7),
                                        };
                                        openUrl =
                                            "openApp.jdMobile://virtual?params=" +
                                            _0x1464df["Fnnzp"](
                                                encodeURIComponent,
                                                JSON["stringify"](_0x2bffc3)
                                            );
                                    }
                                }
                            } else {
                                console["log"](e);
                                $["msg"]($["name"], "", "不要在BoxJS手动复制粘贴修改cookie");
                                return [];
                            }
                        } catch (_0x3b40cd) {
                            $["logErr"](_0x3b40cd, _0x39e7e5);
                        } finally {
                            _0x3471e7();
                        }
                    } else {
                        console["log"]("异常4：" + JSON["stringify"](_0x32054d));
                    }
                }
            );
        }
    });
}

function taskPostUrl(_0x4e85b6, _0x1f0e72) {
    var _0x291590 = {
        DOPQX: "application/json",
        KRtvl: "gzip, deflate, br",
        wPIUL: "application/x-www-form-urlencoded",
        INIZv: function (_0xfffa53, _0x3e82ed) {
            return _0xfffa53 + _0x3e82ed;
        },
        QMayw: "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        YvGpY: "JDUA",
    };
    return {
        url: "" + activityUrl + _0x4e85b6,
        body: _0x1f0e72,
        headers: {
            Accept: _0x291590["DOPQX"],
            "Accept-Encoding": _0x291590["KRtvl"],
            "Accept-Language": "zh-cn",
            Connection: "keep-alive",
            "Content-Type": _0x291590["wPIUL"],
            Referer: activityUrl + "/wxTeam/activity?activityId=" + activityId,
            Cookie: _0x291590["INIZv"](cookie, activityCookie),
            "User-Agent": $["isNode"]() ?
                process["env"]["JD_USER_AGENT"] ?
                    process["env"]["JD_USER_AGENT"] :
                    _0x291590["QMayw"] : $["getdata"]("JDUA") ?
                    $["getdata"](_0x291590["YvGpY"]) : "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        },
    };
}

function taskUrl(_0x4a2b20, _0x290f26) {
    var _0x10c7c5 = {
        jjdtV: "gzip, deflate, br",
        vbcMe: "application/x-www-form-urlencoded",
        FPOpB: "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        HPNEy: "JDUA",
    };
    return {
        url: "https://api.m.jd.com/client.action" + _0x4a2b20,
        body: _0x290f26,
        headers: {
            Accept: "*/*",
            "Accept-Encoding": _0x10c7c5["jjdtV"],
            "Accept-Language": "zh-cn",
            Connection: "keep-alive",
            "Content-Type": _0x10c7c5["vbcMe"],
            Host: "api.m.jd.com",
            Cookie: cookie,
            "User-Agent": $["isNode"]() ?
                process["env"]["JD_USER_AGENT"] ?
                    process["env"]["JD_USER_AGENT"] :
                    _0x10c7c5["FPOpB"] : $["getdata"](_0x10c7c5["HPNEy"]) ?
                    $["getdata"](_0x10c7c5["HPNEy"]) : _0x10c7c5["FPOpB"],
        },
    };
}

function TotalBean() {
    var _0x5f18a7 = {
        RLKFg: function (_0x211d34, _0x29f52d) {
            return _0x211d34 === _0x29f52d;
        },
        ilcee: "yLtJL",
        mImmL: "BywBZ",
        rivFo: "application/json,text/plain, */*",
        hBFDV: "application/x-www-form-urlencoded",
        gIPNt: "gzip, deflate, br",
        kEzFL: "zh-cn",
        WvVqS: "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        qJLtW: "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    };
    return new Promise(async (_0x4d5146) => {
        var _0x1d14db = {
            ugogt: function (_0x2f91cc, _0x5aefb4) {
                return _0x5f18a7["RLKFg"](_0x2f91cc, _0x5aefb4);
            },
            qmeoK: _0x5f18a7["ilcee"],
        };
        if (_0x5f18a7["mImmL"] === "BywBZ") {
            const _0x25151 = {
                url: "https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2",
                headers: {
                    Accept: _0x5f18a7["rivFo"],
                    "Content-Type": _0x5f18a7["hBFDV"],
                    "Accept-Encoding": _0x5f18a7["gIPNt"],
                    "Accept-Language": _0x5f18a7["kEzFL"],
                    Connection: "keep-alive",
                    Cookie: cookie,
                    Referer: _0x5f18a7["WvVqS"],
                    "User-Agent": $["isNode"]() ?
                        process["env"]["JD_USER_AGENT"] ?
                            process["env"]["JD_USER_AGENT"] :
                            _0x5f18a7["qJLtW"] : $["getdata"]("JDUA") ?
                            $["getdata"]("JDUA") : "jdapp;iPhone;9.4.0;13.1.2;2f7578cb634065f9beae94d013f172e197d62283;network/wifi;ADID/7B411CD9-D62C-425B-B083-9AFC49B94228;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,1;addressid/2474290248;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/80.1;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/2f7578cb634065f9beae94d013f172e197d62283|138;jdv/0|kong|t_1000170135|tuiguang|notset|1611219732062|1611219732;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 13.1.2;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                },
            };
            $["post"](_0x25151, (_0x6dc3a7, _0x542754, _0x51b420) => {
                try {
                    if (_0x6dc3a7) {
                        console["log"]("" + JSON["stringify"](_0x6dc3a7));
                        console["log"]($["name"] + " API请求失败，请检查网路重试");
                    } else {
                        if (_0x51b420) {
                            _0x51b420 = JSON["parse"](_0x51b420);
                            if (_0x51b420["retcode"] === 0xd) {
                                $["isLogin"] = ![];
                                return;
                            }
                        } else {
                            console["log"]("京东服务器返回空数据");
                        }
                    }
                } catch (_0x36cdb2) {
                    $["logErr"](_0x36cdb2, _0x542754);
                } finally {
                    if (_0x1d14db["ugogt"](_0x1d14db["qmeoK"], "yLtJL")) {
                        _0x4d5146();
                    } else {
                        console["log"]("" + JSON["stringify"](_0x6dc3a7));
                        console["log"]($["name"] + " cookie API请求失败，请检查网路重试");
                    }
                }
            });
        } else {
            $["msg"]($["name"], "找不到activityId", "");
        }
    });
}

function safeGet(_0x480f9b) {
    var _0x13119b = {
        ygwmJ: "object",
        ApeVF: function (_0xed43a8, _0x3ca044) {
            return _0xed43a8 !== _0x3ca044;
        },
        JQQzU: "nlCPK",
    };
    try {
        if (typeof JSON["parse"](_0x480f9b) == _0x13119b["ygwmJ"]) {
            if (_0x13119b["ApeVF"]("XZrxz", _0x13119b["JQQzU"])) {
                return !![];
            } else {
                $["logErr"](e, resp);
            }
        }
    } catch (_0x1f914e) {
        console["log"](_0x1f914e);
        console["log"]("京东服务器访问数据为空，请检查自身设备网络情况");
        return ![];
    }
}

function jsonParse(_0x9ce96) {
    var _0x4caaed = {
        hsSBh: function (_0x35b704, _0x4370f9) {
            return _0x35b704 == _0x4370f9;
        },
        kPDpU: "string",
        QLVwa: function (_0x1f14f6, _0x30cbf9) {
            return _0x1f14f6 === _0x30cbf9;
        },
        cSaqy: "tLDGs",
        rsIgw: "不要在BoxJS手动复制粘贴修改cookie",
    };
    if (_0x4caaed["hsSBh"](typeof _0x9ce96, _0x4caaed["kPDpU"])) {
        try {
            if (_0x4caaed["QLVwa"](_0x4caaed["cSaqy"], _0x4caaed["cSaqy"])) {
                return JSON["parse"](_0x9ce96);
            } else {
                console["log"]("异常3：" + JSON["stringify"](data));
            }
        } catch (_0x3cda17) {
            console["log"](_0x3cda17);
            $["msg"]($["name"], "", _0x4caaed["rsIgw"]);
            return [];
        }
    }
}

function GetCookie() {
    var _0x15dc54 = {
        DbpkS: function (_0x425e8e, _0x56bb71) {
            return _0x425e8e > _0x56bb71;
        },
        WtvLn: "/wxTeam/shopInfo",
        lYaUQ: function (_0x4565ab, _0x198056) {
            return _0x4565ab === _0x198056;
        },
        EyNXl: "jd_smiek_zdjr_activityId",
    };
    if (
        _0x15dc54["DbpkS"]($request["url"]["indexOf"](_0x15dc54["WtvLn"]), -0x1)
    ) {
        if ($request["body"]) {
            let _0x20d309 = $request["body"]["match"](/activityId=([a-zA-Z0-9._-]+)/);
            if (_0x20d309) {
                if (_0x15dc54["lYaUQ"]("pLSKw", "tkQhX")) {
                    $["log"](data);
                } else {
                    let _0x3ed1f9 = $request["url"]["split"]("/");
                    console["log"]("activityId: " + _0x20d309[0x1]);
                    console["log"](
                        "activityUrl: " + _0x3ed1f9[0x0] + "//" + _0x3ed1f9[0x2]
                    );
                    $["setdata"](_0x20d309[0x1], _0x15dc54["EyNXl"]);
                    $["setdata"](
                        _0x3ed1f9[0x0] + "//" + _0x3ed1f9[0x2],
                        "jd_smiek_zdjr_activityUrl"
                    );
                    $["msg"](
                        $["name"],
                        "获取activityId: 成功🎉",
                        "activityId:" +
                        _0x20d309[0x1] +
                        "\nactivityUrl:" +
                        _0x3ed1f9[0x0] +
                        "//" +
                        _0x3ed1f9[0x2]
                    );
                }
            } else {
                $["msg"]($["name"], "找不到activityId", "");
            }
        }
    }
}

// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
