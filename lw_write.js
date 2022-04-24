let fs = require("fs");

/**
 * 读文件
 */
function read(filePath) {
    let data = fs.readFileSync(filePath, "utf8");
    if (typeof data === "string") {
        try {
            return JSON.parse(data);
        } catch (e) {
            return null
        }
    }
    return null;
}

/**
 * 写文件
 */
function write(list, filePath) {
    let data = JSON.stringify(list);
    fs.writeFileSync(filePath, data, "utf-8");
}


/**
 * 操作邀请码
 * @param remoteCodes 获取的邀请码
 * @param user 需要提到首位的ck名称
 * @param filePath 路径
 * @param user 用户名
 * @returns {*[]}
 */
function dealCodes(remoteCodes, filePath, user = null) {
    let codes = [];
    let localCodes = read(filePath);
    //保证远端的code放到最前面。便于后面的去重
    codes = codes.concat(remoteCodes);
    if (Array.isArray(localCodes) && localCodes.length > 0) {
        //让localCodes的第一个元素保留到前面
        let firstCode = localCodes.splice(0, 1)[0];
        codes.splice(0, 0, firstCode)
        codes = codes.concat(localCodes);
    }
    //codes去重
    let users = codes.reduce((pre, cur) => {
        if (pre.indexOf(cur.user) === -1) {
            pre.push(cur.user)
        }
        return pre;
    }, [])
    codes = codes.filter(item => {
        let idx = users.indexOf(item.user);
        if (idx !== -1) {
            users.splice(idx, 1)
            return true
        }
        return false
    })
    //排序 将大号提到首位
    if (user !== null) {
        let swpArr = codes.filter(item => {
            return (item.user === user)
        })
        if (swpArr.length > 0) {
            codes.splice(codes.indexOf(swpArr[0]), 1);
            codes.splice(0, 0, swpArr[0]);
        }
    }
    write(codes, filePath);
    return codes;
}

module.exports.dealCodes = dealCodes;
module.exports.read = read;
module.exports.write = write;

// const FILE = './tyt.json'
// let ss = [  {
//     "user": "婷婷玉立789",
//     "packetId": "55a9e29ad6e34aec81858e78dfd2d52f-66656565",
//     "ok": false
// },
//     {
//         "user": "wdiXmBKQrKBGZQ99",
//         "packetId": "ee4b8aacc2b94e95897b0e727709b734-d2RpWG1CS1FyS0JHWlE!",
//         "ok": false
//     },
//     {
//         "user": "jd_YhpNXRevsGBY999",
//         "packetId": "78c9c488c17b4bb68e15b67d9a388eca-amRfWWhwTlhSZXZzR0JZ",
//         "ok": false
//     }]
// dealCodes(ss, FILE, '婷婷玉立789')

const FILEPATH = './shoptoken.json';
console.log(read(FILEPATH));

write(["6A7CD06046134C5EEDEBCB11EE4DA525", "6DAD8A8B77EC507D6513DE633CCB6406", "35D4DA3E0543F4E5BE9B064A168EB8FC", "1839C304BF5FC0DD8BE3962A941BA26D", "BEDA253B1EEC9AE327205E1EC5A6507E", "52BFD44493EF44683C6EDB371C180FCF", "77B55D285165B2A29B4AE71793DE0248"
    ],
    FILEPATH
)
console.log(read(FILEPATH));