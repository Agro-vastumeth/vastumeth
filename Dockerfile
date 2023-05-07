FROM node:14-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY ./backend /home/app

COPY ./client /home/app

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app/client 

# will execute npm install in /home/app because of WORKDIR
# go to frontend
RUN npm install

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app/backend 


# go to backend
RUN npm install

# no need for /home/app/server.js because of WORKDIR
CMD ["node", "server.js"]

