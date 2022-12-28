// @ts-ignore
import axios from "axios";

const baseUrl1 = "http://192.168.31.253:5801"
const client_id1 = "-cpU5VyR2IlQ"
const client_secret1 = "F1-QJ0eMrqwlGZrBi3L5Jj3Q"
// const baseUrl2 = "http://192.168.31.253:5802"
const api = axios.create({baseURL: baseUrl1, method: "post", timeout: 10000})
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

async function getToken() {
    // @ts-ignore
    try {
        let res = await api({url: `${baseUrl1}/open/auth/token?client_id=${client_id1}&client_secret=${client_secret1}`, method: "get"}) as any;
        return res.data.token;
    } catch (e) {
        // @ts-ignore
        console.error(e.message)
        throw e
    }
}

let getEnvs = async () => {
    const token = await getToken();
    try {
        const body = await api({
            url: "/open/envs",
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
        return body.data;
    } catch (e) {
        // @ts-ignore
        console.error(e.message)
        throw e
    }
};

let getEnvsCount = async () => {
    const data = await getEnvs();
    return data.length;
};

let addEnv = async (cookie: string, remarks: string = '新增账号') => {
    const token = await getToken();
    const body = await api({
        method: 'post',
        url: 'open/envs',
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
let updateEnv = async (cookie: string, eid: string, remarks: string) => {
    const token = await getToken();
    const body = await api({
        method: 'put',
        url: 'open/envs',
        params: {t: Date.now()},
        data: {
            name: 'JD_COOKIE',
            value: cookie,
            _id: eid,
            remarks,
        },
        headers: {
            Accept: 'application/json',
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
    return body;
};
//
// module.exports.updateEnv11 = async (cookie: string, eid: string, remarks: string) => {
//     const token = await getToken();
//     const body = await api({
//         method: 'put',
//         url: 'open/envs',
//         params: {t: Date.now()},
//         json: {
//             name: 'JD_COOKIE',
//             value: cookie,
//             id: eid,
//             remarks,
//         },
//         headers: {
//             Accept: 'application/json',
//             authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json;charset=UTF-8',
//         },
//     }).json();
//     return body;
// };
//
// module.exports.DisableCk = async (eid: string) => {
//     const token = await getToken();
//     const body = await api({
//         method: 'put',
//         url: 'open/envs/disable',
//         params: {t: Date.now()},
//         body: JSON.stringify([eid]),
//         headers: {
//             Accept: 'application/json',
//             authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json;charset=UTF-8',
//         },
//     }).json();
//     return body;
// };
//
// module.exports.EnableCk = async (eid: string) => {
//     const token = await getToken();
//     const body = await api({
//         method: 'put',
//         url: 'open/envs/enable',
//         params: {t: Date.now()},
//         body: JSON.stringify([eid]),
//         headers: {
//             Accept: 'application/json',
//             authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json;charset=UTF-8',
//         },
//     }).json();
//     return body;
// };
//
// module.exports.getstatus = async (eid: string) => {
//     const envs = await this.getEnvs();
//     var tempid = 0;
//     for (let i = 0; i < envs.length; i++) {
//         tempid = 0;
//         if (envs[i]._id) {
//             tempid = envs[i]._id;
//         }
//         if (envs[i].id) {
//             tempid = envs[i].id;
//         }
//         if (tempid == eid) {
//             return envs[i].status;
//         }
//     }
//     return 99;
// };
//
// module.exports.getEnvById = async (eid: string) => {
//     const envs = await this.getEnvs();
//     var tempid = 0;
//     for (let i = 0; i < envs.length; i++) {
//         tempid = 0;
//         if (envs[i]._id) {
//             tempid = envs[i]._id;
//         }
//         if (envs[i].id) {
//             tempid = envs[i].id;
//         }
//         if (tempid == eid) {
//             return envs[i].value;
//         }
//     }
//     return "";
// };
//
// module.exports.getEnvByPtPin = async (Ptpin: string) => {
//     const envs = await this.getEnvs();
//     for (let i = 0; i < envs.length; i++) {
//         var tempptpin = decodeURIComponent(envs[i].value.match(/pt_pin=([^; ]+)(?=;?)/) && envs[i].value.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
//         if (tempptpin == Ptpin) {
//             return envs[i];
//         }
//     }
//     return "";
// };
//
// module.exports.delEnv = async (eid: string) => {
//     const token = await getToken();
//     const body = await api({
//         method: 'delete',
//         url: 'open/envs',
//         params: {t: Date.now()},
//         body: JSON.stringify([eid]),
//         headers: {
//             Accept: 'application/json',
//             authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json;charset=UTF-8',
//         },
//     }).json();
//     return body;
// };
//

export {getEnvs, getEnvsCount, addEnv, updateEnv}