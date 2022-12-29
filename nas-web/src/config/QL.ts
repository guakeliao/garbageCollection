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

async function getToken(configure: any) {
    // @ts-ignore
    if (configure.token == null || configure.token === "") {
        try {
            let res = await api({url: `${configure.baseUrl}/open/auth/token?client_id=${configure.client_id}&client_secret=${configure.client_secret}`, method: "get"}) as any;
            configure.token = res.data.token;
        } catch (e) {
            // @ts-ignore
            console.error(e.message)
            throw e
        }
    }
}

let getEnvs = async () => {
    let envs = [] as any[]
    for (let configure of configures) {
        await getToken(configure);
        try {
            const body = await api({
                url: `${configure.baseUrl}/open/envs`,
                method: "get",
                headers: {
                    Accept: 'application/json',
                    authorization: `Bearer ${configure.token}`,
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


let addEnv = async (cookie: string, remarks: string = '新增账号') => {
    let configure = configures[0]
    await getToken(configure);
    const body = await api({
        method: 'post',
        url: `${configure.baseUrl}/open/envs`,
        params: {t: Date.now()},
        data: [{
            name: 'JD_COOKIE',
            value: cookie,
            remarks,
        }],
        headers: {
            Accept: 'application/json',
            authorization: `Bearer ${configure.token}`,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    })
    return body;
};
let updateEnv = async (cookie: string, eid: string | null = null, remarks: string | null = null) => {
    let envs = await getEnvs()
    let index, env;
    index = envs.findIndex(subEnvs => {
        return (subEnvs as any[]).some(aa => {
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
        return await addEnv(cookie)
    }
    let configure = configures[index];
    const body = await api({
        method: 'put',
        url: `${configure.baseUrl}/open/envs`,
        params: {t: Date.now()},
        data: {
            name: 'JD_COOKIE',
            value: cookie,
            // @ts-ignore
            id: env.id,
            // @ts-ignore
            remarks: env.remarks,
        },
        headers: {
            Accept: 'application/json',
            authorization: `Bearer ${configure.token}`,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
    // @ts-ignore
    return await enableCk(env.id, configure)
};

let enableCk = async (eid: string, configure: any) => {
    const body = await api({
        method: 'put',
        url: `${configure.baseUrl}/open/envs/enable`,
        params: {t: Date.now()},
        data: JSON.stringify([eid]),
        headers: {
            Accept: 'application/json',
            authorization: `Bearer ${configure.token}`,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
    return body;
};


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
export {getConfigures, updateEnv}