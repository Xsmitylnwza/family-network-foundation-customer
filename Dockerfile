###############################
# Stage 1 : deps (cache‑friendly)
###############################
FROM node:18-alpine AS deps
WORKDIR /app

# 1) copy เฉพาะ manifest เพื่อ cache install
COPY package.json package-lock.json* ./

# 2) ติดตั้ง dependencies
RUN npm ci --legacy-peer-deps

###############################
# Stage 2 : builder
###############################
FROM node:18-alpine AS builder
WORKDIR /app

# 3) ดึง node_modules จาก deps stage
COPY --from=deps /app/node_modules ./node_modules

# 4) copy โค้ดทั้งหมด + ตั้งเจ้าของไฟล์ก่อน build
COPY . .  
RUN chown -R node:node /app

USER node
# 5) สั่ง build
RUN npm run build

###############################
# Stage 3 : runtime
###############################
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# 6) ใช้งาน user ปลอดภัย
USER node

# 7) copy artifacts ที่จำเป็นจริงๆ ไปยัง runtime
COPY --from=builder --chown=node:node /app/public      ./public
COPY --from=builder --chown=node:node /app/.next       ./.next
COPY --from=deps    --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/package.json ./package.json

EXPOSE 3000
CMD ["npm","start"]
