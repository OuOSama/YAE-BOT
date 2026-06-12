# Stage 1: Build
FROM oven/bun AS builder
WORKDIR /app
COPY . .
RUN bun install
RUN bunx tsc

# Stage 2: Prepare
FROM oven/bun:alpine
WORKDIR /app
COPY --from=builder /app/build .
COPY --from=builder /app/seyfert.config.mjs .
COPY --from=builder /app/bun.lock .
COPY --from=builder /app/package.json .
COPY --from=builder /app/.env.local .
COPY --from=builder /app/tsconfig.json .

# Deploy! 🥳
CMD ["bun", "run", "start"]
