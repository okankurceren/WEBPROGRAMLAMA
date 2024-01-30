# Başlangıçta, resmi Node.js imajını kullan
FROM node:14

# Uygulama dosyalarını /app klasörüne kopyala
WORKDIR /app
COPY . .

# Gerekli bağımlılıkları yükle
RUN npm install

# Uygulamayı çalıştır
CMD ["npm", "start"]
