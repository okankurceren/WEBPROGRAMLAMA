# Başlangıçta, resmi PHP ve Apache imajını kullan
FROM php:7.4-apache

# Laravel gerekli genişletmeleri yükle
RUN docker-php-ext-install pdo pdo_mysql

# Composer'ı yükle
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Apache'i yapılandır ve Laravel dosyalarını kopyala
COPY . /var/www/html
COPY vhost.conf /etc/apache2/sites-available/000-default.conf

# Composer ile bağımlılıkları yükle
RUN composer install

# Uygulamayı çalıştır
CMD ["apache2-foreground"]
