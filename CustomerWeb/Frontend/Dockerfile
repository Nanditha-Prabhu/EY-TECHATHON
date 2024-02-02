FROM node

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

CMD ["npm", "run", "dev", "--", "--host"]