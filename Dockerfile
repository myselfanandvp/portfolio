FROM oven/bun:alpine

LABEL maintainer="Anand"

WORKDIR /app/frontend

COPY ./frontend/bun.lock ./

# COPY ./frontend ./

EXPOSE 5173 

RUN bun add  --frozen-lockfile



CMD [ "sh", "-c", "bun run dev --host"]

