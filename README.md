# Push notifications express

## Config Telegram

### Create Telegram application

https://my.telegram.org/

### Telegram flow:

- Bước 1: user vào subscrive bot @snestbot bằng cách type /dangky @email(unique)
  - Node sẽ gửi request đến api xem thằng @email đã có hay chưa và save chat id vào DB
  - đăng ký thành công => Lưu vào DB hoặc redis
- Bước 2: Khi có thông báo, tìm kiếm theo user_id, tìm được chat_id
- Bước 3: Gửi tin nhắn đến chatId

### https

https://certbot.eff.org/lets-encrypt/centosrhel7-nginx
