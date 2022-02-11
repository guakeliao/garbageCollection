#!/bin/sh
##对比文件
function diff2Files() {
  local path1=$1
  local path2=$2
  local data1=$(wc -c <$path1)
  local data2=$(wc -c <$path2)
  if [ $data1 != $data2 ]; then
    #不相等,迁移覆盖
    echo "不相等,迁移覆盖$path1,$path2"
    cp -f $path1 $path2
  fi
}

function synchro() {
  starttime=$(date +%Y-%m-%d\ %H:%M:%S)
  echo $starttime
  local name1 name2 match
  for file1 in $1/*; do
    match=false
    name1=$(basename $file1)
    #    echo $name1
    for file2 in $2/*; do
      name2=$(basename $file2)
      #      echo $name2
      if [ $name1 = $name2 ]; then
        match=true
        diff2Files $1/${name1} $2/${name2}
      fi
    done
    if [ $match = false ]; then
      echo "$1/${name1}"
      cp -f -R  $1/${name1} $2
    fi
  done
  endtime=$(date +%Y-%m-%d\ %H:%M:%S)
  echo $endtime
}
synchro $1 $2
