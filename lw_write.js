let fs = require("fs");

/**
 * 读文件
 */
export function readTyt(filePath) {
    let data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
}

/**
 * 写文件
 */
export function writeTyt(list, filePath) {
    let data = JSON.stringify(list);
    fs.writeFileSync(filePath, data, "utf-8");
}
