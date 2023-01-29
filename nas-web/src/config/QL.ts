// @ts-ignore
import axios from "axios";

const api = axios.create({method: "post", timeout: 10000});
// 添加响应拦截器
api.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}, function (error) {
    return Promise.reject(error);
});

let getTokenCache = (configure: any) => {
    if (configure.token != null && configure.token.length > 0) {
        return configure.token
    }
    return null
}
let getToken = async (configure: any) => {
    let token = getTokenCache(configure);
    if (token == null) {
        const res = await api({
            method: 'post',
            url: `/api/getToken`,
            data: {
                url: configure.baseUrl + '/open/auth/token',
                client_id: configure.client_id,
                client_secret: configure.client_secret,
            }
        })
        token = res.data.token;
    }
    configure.token = token;
    return token
}

let addCk = async (baseUrl: string, token: string, cookie: string, remarks: string = '新增账号') => {
    const body = await api({
        method: 'post',
        url: `/api/addCk`,
        data: {
            url: baseUrl + "/open/envs",
            token: token,
            cookie: cookie,
            remarks: remarks
        },
    })
    return body;
};
let updateCk = async (baseUrl: string, token: string, cookie: string, eid: string, remarks: string) => {
    const body = await api({
        method: 'post',
        url: `/api/updateCk`,
        data: {
            url: baseUrl + "/open/envs",
            token: token,
            cookie: cookie,
            remarks: remarks,
            eid: eid
        }
    });
    return body
}

let enableCk = async (baseUrl: string, token: string, eid: string) => {
    const body = await api({
        method: 'post',
        url: `/api/enableCk`,
        data: {
            url: baseUrl + "/open/envs/enable",
            token: token,
            eid: eid
        }
    });
    return body;
};
let getEnvs = async () => {
    let envs = [] as any[]
    for (let configure of await getConfigures()) {
        let token = await getToken(configure);
        try {
            const body = await api({
                url: `/api/getEnvs`,
                method: "post",
                data: {
                    url: configure.baseUrl + "/open/envs",
                    token: token
                }
            })
            for (let env of body.data as any []) {
                env.configure = configure
                envs.push(env);
            }
        } catch (e) {
            // @ts-ignore
            console.error(e.message)
            throw e
        }
    }
    return envs
};

let updateEnv = async (env: any) => {
    let configure = env.configure
    if (configure == null) {
        configure = (await getConfigures())[0]
        return await addCk(configure.baseUrl, configure.token, env.value, env.remarks ?? "新增账号");
    } else {
        await updateCk(configure.baseUrl, configure.token, env.value, env.id, env.remarks);
        return await enableCk(configure.baseUrl, configure.token, env.id)
    }
};
const searchEnvs = async (cookies: [string]) => {
    let sEnvs = [] as any[]
    let envs = await getEnvs()
    for (let cookie of cookies) {
        const ckPins = (cookie.match(/(pt_pin)=.+?;/g) ?? []) as any[];
        let env = envs.find(e => {
            const ePins = (e.value.match(/(pt_pin)=.+?;/g) ?? []) as any[];
            return ePins[0] === ckPins[0]
        })
        let needUpdate = false
        if (env == null) {
            env = {"value": cookie, "remarks": "新增账号"}
            needUpdate = true
        } else {
            const pt_keys0 = (cookie.match(/(pt_key)=.+?;/g) ?? []) as any[];
            const pt_keys1 = (env.value.match(/(pt_key)=.+?;/g) ?? []) as any[];
            needUpdate = pt_keys0[0] !== pt_keys1[0]
        }
        env.value = cookie
        env.needUpdate = needUpdate
        sEnvs.push(env)
    }
    return sEnvs;
}

const searchDisableEnvs = async () => {
    let sEnvs = [] as any[]
    let envs = await getEnvs()
    console.log(envs)
    envs.forEach(e => {
        console.log(e.status)
        if (e.status != '0') {
            sEnvs.push(e);
        }
    })
    return sEnvs;
}

let getConfigures = async () => {
    let arr = new Array<any>()
    let res = await axios.get('/configure.json')
    let list: Array<any> = res.data;
    arr.push(...list)
    return arr
}
//TODO:
const delConfigure = async (configure: any) => {

}
//TODO:
const saveConfigure = (configure: any) => {

}
export {getConfigures, updateEnv, searchEnvs, searchDisableEnvs}