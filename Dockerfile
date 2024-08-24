FROM node:20-alpine

RUN apk --no-cache add curl make g++ python3 git
RUN npm i -g node-pre-gyp

# Create app directory
WORKDIR /app

COPY package*.json .

# Install dependencies and clean cache to reduce image size
RUN npm ci && npm cache clean --force

# Copy all files
COPY .eslintrc.json .
COPY next-env.d.ts .
COPY next.config.js .
COPY postcss.config.js .
COPY tailwind.config.ts .
COPY tsconfig.json .
COPY .env.local .

# Copy all folders
COPY public ./public
COPY src ./src

# Start the app in dev mode
CMD ["npm", "run", "dev"]