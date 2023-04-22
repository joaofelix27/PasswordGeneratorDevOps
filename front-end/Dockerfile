FROM node:16

WORKDIR /tmp/react

COPY . .

RUN yarn install --silent --ignore-scripts

RUN yarn build

EXPOSE 3000

RUN mkdir -p /var/www/html

RUN mv dist/* /var/www/html

WORKDIR /   

RUN rm -rf /tmp/react
