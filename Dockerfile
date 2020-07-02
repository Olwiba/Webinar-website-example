# Simplified build step
FROM ubuntu:latest
RUN apt-get update && apt-get install -y && apt install curl -y
RUN curl -X POST -H "Content-Type: application/json" -d "{apiKey: 'EjA63mvyeuilmKMfdHtiPg',version: '1.0.2',ownerName: 'Ollie Bannister',emailAddress: 'ollie@raygun.com',comment: 'Some generic comment'}" https://app.raygun.com/deployments?authToken=vZAY6DVe9nDo3Ddg5q3H83YNZQZvUfqK
RUN echo 'All built!'