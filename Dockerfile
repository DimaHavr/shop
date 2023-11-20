# Build Stage
FROM node:latest AS runner

WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY .env.example ./.env
RUN npm install sharp
RUN npm install

COPY . .

RUN npm run build

# Production Stage
FROM node:latest AS production
WORKDIR /app

# Copy artifacts from the "runner" stage
COPY --from=runner /app/next.config.js ./
COPY --from=runner /app/package*.json ./
COPY --from=runner /app/.next ./.next
COPY --from=runner /app/out ./out
COPY --from=runner /app/public ./public
COPY --from=runner /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
EXPOSE 3001

# CMD to run build and start
CMD ["npm", "run", "start"]
