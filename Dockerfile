FROM node
RUN npm i -g node-static
RUN mkdir /landing-page
ADD ./ /landing-page/
WORKDIR /landing-page/
EXPOSE 8080
ENTRYPOINT ["static", ".", "-a", "0.0.0.0"]
