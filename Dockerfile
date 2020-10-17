FROM alpine:3.7

RUN apk update && apk add -U nodejs yarn
RUN node --version
RUN yarn --version

RUN mkdir -p /var/www/api/

COPY . /var/www/api/

RUN cd /var/www/api && yarn

WORKDIR /var/www/api

EXPOSE 3000
CMD ["node", "build/index.js"]