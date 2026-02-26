# 1. ใช้ Base Image เป็น Node.js 20 (บังคับสำหรับ Next.js เวอร์ชันใหม่)
FROM node:20-alpine AS base

# 2. ชั้นติดตั้ง Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# 3. ชั้น Build โปรเจกต์
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# ปิด Telemetry ของ Next.js
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 4. ชั้น Production (Image จริงที่จะนำไปรัน)
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# คัดลอกโฟลเดอร์ public (รูปภาพต่างๆ)
COPY --from=builder /app/public ./public

# คัดลอกเฉพาะไฟล์ Standalone ที่จำเป็นสำหรับการรัน
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# เปิด Port 80 (ให้ตรงกับ server.js เดิม)
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# คำสั่งเริ่มทำงานเมื่อเปิดกล่อง (ใช้ไฟล์ server.js ที่ Next.js สร้างให้)
CMD ["node", "server.js"]
