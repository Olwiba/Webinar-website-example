# Simplified build step
FROM ubuntu:latest
RUN apt-get update && apt-get install -y && apt install curl -y
RUN curl -X POST -H "Content-Type: application/json" -d "{apiKey: 'EjA63mvyeuilmKMfdHtiPg',version: '1.0.1',ownerName: 'Ollie Bannister',emailAddress: 'ollie@raygun.com',comment: 'Some generic comment',createdAt: 22:35:01Z}" https://app.raygun.com/deployments?authToken=NOd1Z4M2d2Gww7kHqH9Ae4A3zZMPa5h3
RUN echo 'All built!'