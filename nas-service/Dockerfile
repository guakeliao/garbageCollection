# Docker image for springboot file run
# VERSION 1.0.0
# Author: Felix
# 基础镜像使用java
FROM java:8
# 作者
MAINTAINER Lw<guakeliao@gmail.com>
# VOLUME 指定了临时文件目录为/tmp。
# 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp
VOLUME /tmp
EXPOSE 8080
# 将jar包添加到容器中并更名为nas-service.jar
ADD nas-service-1.0-SNAPSHOT.jar nas-service.jar
# 运行jar包
RUN bash -c 'touch /nas-service.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/nas-service.jar"]