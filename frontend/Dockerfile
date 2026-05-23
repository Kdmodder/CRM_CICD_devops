# =========================
# Stage 1 - Install Dependencies
# =========================
FROM node:20 AS builder

WORKDIR /app

# Copy frontend package files
COPY frontend/package*.json ./

RUN npm install

# Copy frontend source
COPY frontend .

# =========================
# Stage 2 - Runtime
# =========================
FROM node:20

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host","0.0.0.0"]
