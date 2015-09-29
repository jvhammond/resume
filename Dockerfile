FROM node:0.10

EXPOSE 3000

# Install dependencies
COPY package.json /src/
RUN cd /src && npm install

# Bundle app source
COPY . /src

# NPM commands must be run from the node project root
WORKDIR /src

# Make `npm` the default executable
ENTRYPOINT ["npm"]

# Run
CMD ["start"]
