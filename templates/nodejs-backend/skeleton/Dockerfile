# Create a layer to install dependencies
FROM registry.access.redhat.com/ubi9/nodejs-22 as deps

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci

# Use a minimal image for runtime
FROM registry.access.redhat.com/ubi9/nodejs-22-minimal

ENV NODE_ENV=production
EXPOSE 3000

COPY --from=deps /opt/app-root/src/node_modules ./node_modules
COPY index.js ./

CMD [ "node", "index.js" ]