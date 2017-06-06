FROM java:7

WORKDIR /home/root/site/client

COPY src /home/root/site/client/src
COPY pom.xml /home/root/site/client/pom.xml

RUN apt-get update && apt-get install -y maven
RUN mvn package

ENTRYPOINT ["mvn", "spring-boot:run"]
