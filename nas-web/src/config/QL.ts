// @ts-ignore
import axios from "axios";

let configures = [] as any[];

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
        try {
            let res = await api({url: `${configure.baseUrl}/open/auth/token?client_id=${configure.client_id}&client_secret=${configure.client_secret}`, method: "get"}) as any;
            token = res.data.token;
        } catch (e) {
            // @ts-ignore
            console.error(e.message)
            throw e
        }
    }
    configure.token = token;
    return token
}

let addCk = async (url: string, token: string, cookie: string, remarks: string = '新增账号') => {
    const body = await api({
        method: 'post',
        url: `${url}/open/envs`,
        params: {t: Date.now()},
        data: [{
            name: 'JD_COOKIE',
            value: cookie,
            remarks,
        }],
        headers: {
            Accept: 'application/json',
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    })
    return body;
};
let updateCk = async (url: string, token: string, cookie: string, eid: string, remarks: string) => {
    const body = await api({
        method: 'put',
        url: `${url}/open/envs`,
        params: {t: Date.now()},
        data: {
            name: 'JD_COOKIE',
            value: cookie,
            id: eid,
            remarks: remarks,
        },
        headers: {
            Accept: 'application/json',
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
    return body
}

let enableCk = async (url: string, token: string, eid: string) => {
    const body = await api({
        method: 'put',
        url: `${url}/open/envs/enable`,
        params: {t: Date.now()},
        data: JSON.stringify([eid]),
        headers: {
            Accept: 'application/json',
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
    return body;
};
let getEnvs = async () => {
    let envs = [] as any[]
    for (let configure of configures) {
        let token = await getToken(configure);
        let url = configure.baseUrl;
        try {
            const body = await api({
                url: `${url}/open/envs`,
                method: "get",
                headers: {
                    Accept: 'application/json',
                    authorization: `Bearer ${token}`,
                },
                params: {
                    searchValue: 'JD_COOKIE',
                    t: Date.now(),
                }
            })
            envs.push(body.data);
        } catch (e) {
            // @ts-ignore
            console.error(e.message)
            throw e
        }
    }
    return envs
};

let updateEnv = async (cookie: string, remarks: string | null = null, eid: string | null = null) => {
    debugger
    let [env, index] = await searchEnv(cookie);
    let configure = configures[index === -1 ? 0 : index];
    if (index === -1) {
        return await addCk(configure.baseUrl, configure.token, cookie, remarks ?? "新增账号");
    } else {
        await updateCk(configure.baseUrl, configure.token, cookie, eid as string, remarks as string);
        return await enableCk(configure.baseUrl, configure.token, env.id)
    }
};
const searchEnv = async (cookie: string) => {
    debugger
    let envs = await getEnvs() as [[any]]
    let index: number, env: any;
    index = envs.findIndex(subEnvs => {
        return subEnvs.some(aa => {
            const envPins = (aa.value.match(/(pt_key|pt_pin)=.+?;/g) ?? []) as any[];
            const ckPins = (cookie.match(/(pt_key|pt_pin)=.+?;/g) ?? []) as any[];
            if (envPins.length === 2 && ckPins.length === 2) {
                if (envPins[1] === ckPins[1]) {
                    env = aa
                    return true
                }
                return false
            }
            return false
        })
    })
    if (index === -1) {
        return [null, index]
    }
    return [env, index];
}
let getConfigures = async () => {
    let arr = new Array<any>()
    let res = await axios.get('/configure.json')
    let list: Array<any> = res.data;
    arr.push(...list)
    configures = arr;
    return arr
}
//TODO:
const delConfigure = async (configure: any) => {

}
//TODO:
const saveConfigure = (configure: any) => {

}
export {getConfigures, updateEnv, searchEnv}