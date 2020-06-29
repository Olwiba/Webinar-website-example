# Simplified build step
FROM ubuntu:latest

RUN echo 'All built!'
RUN curl -X POST -H "Content-Type: application/json" -d {apiKey: 'EjA63mvyeuilmKMfdHtiPg',version: '1.0.1',ownerName: 'Ollie Bannister',emailAddress: 'ollie@raygun.com',comment: 'Some generic comment',createdAt: 22:35:01Z} https://app.raygun.com/deployments?authToken=p4o1zGcUjOMNDsE3WDv9H0tYV6TSgB4I