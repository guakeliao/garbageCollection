#!/usr/bin/env bash

diff2Files() {
  local file1=$1;
  local file2=$2;
  local data1=$(wc -c < $file1)
  local data2=$(wc -c < $file2)
  if [ $data1 != $data2 ]; then
      #不相等,迁移覆盖
      echo "not equal"
      cp -f $file1 $file2
  fi
}
diff2Files $1 $2
