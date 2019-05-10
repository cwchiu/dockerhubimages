```
docker run \
    --name jenkins_agent_cpp \
    -d --restart always \
    chuiwenchiu/jenkins-agent-gcc \
    -url http://192.168.43.140:8080 \
    951ac478b69131e43fb2cfb6d201ecf789ba388a759ea946d7ab62aac55227a7 \
    agent-cpp
```    
