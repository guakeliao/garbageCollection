#!/bin/sh

## 递归扫描文件
function scandir() {
    local cur_dir parent_dir workdir
    workdir=$1
    cd ${workdir}
    if [ ${workdir} = "/" ]
    then
        cur_dir=""
    else
        cur_dir=$(pwd)
    fi

    for dirlist in $(ls ${cur_dir})
    do
        if test -d ${dirlist};then
            cd ${dirlist}
            scandir ${cur_dir}/${dirlist}
            cd ..
        else
            echo ${cur_dir}/${dirlist}
        fi
    done
}

##对比文件
function diff2Files() {
  local path1=$1;
  local path2=$2;
  local data1=$(wc -c < $path1)
  local data2=$(wc -c < $path2)
  if [ $data1 != $data2 ]; then
      #不相等,迁移覆盖
      cp -f $path1 $path2
  fi
}


function diff2dir() {
    starttime=$(date +%Y-%m-%d\ %H:%M:%S)
    echo $starttime
    local filePaths1 filePaths2 fileName1 fileName2
    filePaths1=$(scandir $1)
    filePaths2=$(scandir $2)    
    for path1 in ${filePaths1}; do
        echo "================="
        echo $path1
        fileName1=${path1##*/}
        for path2 in ${filePaths2}; do
            fileName2=${path2##*/}
            if [ $fileName1 = $fileName2 ]; then
                echo $path2
                diff2Files $path1 $path2
            fi
        done
    done
    endtime=$(date +%Y-%m-%d\ %H:%M:%S)
    echo $endtime
}
diff2dir $1 $2