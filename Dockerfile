ARG NODE_VERSION=lts

FROM node:${NODE_VERSION} AS builder

# Use production node environment by default.
ENV NODE_ENV=production
RUN --mount=type=cache,target=/root/.nest \
    npm install -g @nestjs/cli

WORKDIR /tmp

COPY . .
RUN --mount=type=cache,target=/root/.npm \
    npm ci
RUN npm run build


FROM node:${NODE_VERSION}
ENV NODE_ENV=production
# Run the application as a non-root user.
USER node
# Use default node dir in node image
WORKDIR /home/node/app

# Create dir for data that use when create database
RUN mkdir data

COPY --from=builder --chown=node:node /tmp/dist .
COPY --from=builder --chown=node:node /tmp/package*.json .

RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

RUN npm cache clean --force

EXPOSE 3000

CMD ["node", "main.js"]
