# hapi-webserver
Membangun Web Server menggunakan Framework Hapi
default response:
{
"statusCode": 404,
"error": "Not Found",
"message": "Not Found"
}

<!-- cek koneksi menggunakan terminal -->
curl -X POST http://127.0.0.1:5000/ -i

Step for using Hapi:

1. npm install @hapi/hapi
2. request handler dituliskan di dalam route configuration? Yap benar! Handler pada Hapi dipisahkan berdasarkan route yang ada. Setiap spesifikasi route memiliki handler-nya masing-masing. Dengan begitu, tentu kode akan lebih mudah dikelola. Anda bisa mengatakan selamat tinggal pada if else yang bersarang.
3. menetapkan lebih dari satu route configuration dalam method server.route()
4. Baca dokumentasi: https://hapi.dev/api/?v=20.3.0#response-toolkit 
