FROM java:8
LABEL maintainer=yurekesley@gmail.com
WORKDIR app
EXPOSE 8080
COPY ./target/carros-web-api-0.0.1-SNAPSHOT.jar /app/carros-web-api.jar
ENTRYPOINT ["java","-jar","carros-web-api.jar"]