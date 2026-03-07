FROM node:20-alpine AS base
WORKDIR /app/public-resume
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY public-resume/package.json public-resume/package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/public-resume/node_modules ./node_modules
COPY public-resume/ ./
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
COPY public-resume/package.json public-resume/package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=builder /app/public-resume/.next ./.next
COPY --from=builder /app/public-resume/public ./public
COPY --from=builder /app/public-resume/next.config.mjs ./next.config.mjs
COPY --from=builder /app/public-resume/src/app/work/projects ./src/app/work/projects

EXPOSE 3000
CMD ["npm", "run", "start"]
