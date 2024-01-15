#!/bin/bash

# 定义一个函数来检查并删除空目录
function removeEmptyDirectories() {

    local directory=$1
    echo "进入: $directory"
    # 遍历目录中的所有文件和子目录
    for file in "$directory"/*; do
        if [ -d "$file" ]; then
            # 如果是目录，则递归调用
            removeEmptyDirectories "$file"
        fi
    done

    # 检查目录是否为空
    if [ -z "$(ls -A "$directory")" ]; then
        # 如果目录为空，则删除目录
        rmdir "$directory"
        echo "Deleted: $directory"
    fi
}

# 使用方法：将下面的路径替换为你想要清理的目录路径
removeEmptyDirectories $1