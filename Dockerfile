FROM node:slim

RUN mkdir /usr/share/mean-server
WORKDIR /usr/share/mean-server
COPY . /usr/share/mean-server
RUN yarn

CMD ["yarn", "run", "bss"]