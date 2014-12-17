FROM node
RUN mkdir /landingpage
ADD ./ /landingpage/
WORKDIR /landingpage/
RUN npm i
EXPOSE 8080
ENTRYPOINT ["npm", "start"]
