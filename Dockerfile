# Simplified build step
FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
curl https://www.google.com/
RUN echo 'All built!'