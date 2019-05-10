FROM jenkins/jnlp-slave:3.27-1

USER root
RUN apt update && apt install build-essential -y
USER jenkins

ENTRYPOINT ["jenkins-slave"]
