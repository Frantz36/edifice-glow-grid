# Reproduces Vercel's production flow: install from the lockfile, then run
# the same command declared in vercel.json (npm run build).
FROM node:22-bookworm-slim AS build

WORKDIR /app

# Keep dependency installation cacheable and deterministic.
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# `vite preview` is the preview command emitted by Nitro for this project. It
# serves the generated .output bundle and is therefore a useful local
# equivalent of the deployed production application.
FROM node:22-bookworm-slim AS runtime

WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

COPY --from=build --chown=node:node /app /app

USER node
EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
