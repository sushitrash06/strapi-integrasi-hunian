# Gunakan image Node.js versi 18
FROM node:18

# Set working directory di dalam container
WORKDIR /app

# Copy file package.json dan package-lock.json untuk install dependencies dulu
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy semua file proyek ke dalam container
COPY . .

# Build Strapi
RUN npm run build

# Ekspos port 1337 (default port Strapi)
EXPOSE 1337

# Perintah untuk menjalankan Strapi saat container dijalankan
CMD ["npm", "start"]
