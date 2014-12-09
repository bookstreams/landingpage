FROM node
RUN npm i -g node-static
RUN mkdir /landingpage
ADD ./ /landingpage/
WORKDIR /landingpage/
EXPOSE 8080
ENTRYPOINT ["static", ".", "-a", "0.0.0.0"]
