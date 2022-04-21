let fs = require("fs");

/**
 * 读文件
 */
exports.readTyt = function (filePath) {
    console.log('readTyt开始');
    let data = fs.readFileSync(filePath, "utf8");
    if (typeof data === "string") {
        return JSON.parse(data);
    }
    console.log('readTyt结束');
    return null;
}

/**
 * 写文件
 */
exports.writeTyt = function (list, filePath) {
    let data = JSON.stringify(list);
    fs.writeFileSync(filePath, data, "utf-8");
}

