FROM ubuntu:18.04

RUN mkdir -p /app
WORKDIR /app

RUN apt update && \
    apt install build-essential git -y && \
    git clone https://github.com/allyusd/helloworld.cpp.git && \
    cd helloworld.cpp && \
    g++ helloworld.cpp -o helloworld && \
    ./helloworld
