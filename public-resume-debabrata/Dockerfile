FROM node:20-alpine AS base
WORKDIR /app/public-resume-debabrata
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY public-resume-debabrata/package.json public-resume-debabrata/package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/public-resume-debabrata/node_modules ./node_modules
COPY public-resume-debabrata/ ./
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
COPY public-resume-debabrata/package.json public-resume-debabrata/package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=builder /app/public-resume-debabrata/.next ./.next
COPY --from=builder /app/public-resume-debabrata/public ./public
COPY --from=builder /app/public-resume-debabrata/next.config.mjs ./next.config.mjs

EXPOSE 3000
CMD ["npm", "run", "start"]
