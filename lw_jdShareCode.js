/**
 * 生成100个数据,不足的用第一个元素代替
 * @param shareCodes
 * @returns {*[]|any}
 */
export function moreShareCode(shareCodes) {
    if (shareCodes == null || shareCodes.length == 0) {
        return [];
    }
    let moreList = JSON.parse(JSON.stringify(shareCodes));
    for (let i = shareCodes.length; i < 100; i++) {
        moreList.push(shareCodes[0]);
    }
    return moreList;
}
