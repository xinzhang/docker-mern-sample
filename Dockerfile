FROM node:6.11.2-alpine
#RUN mkdir /var/app

WORKDIR /var/app

COPY package.json .

RUN npm install --loglevel warn

COPY server server

#RUN npm run start

EXPOSE 3500

CMD ["npm", "start"]

#CMD node ./server/bin/www
