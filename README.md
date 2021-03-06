# Node Camp 03

## Yêu cầu:

Cho một tài liệu API sau, viết một ứng dụng web server thỏa mãn những điều kiện đã cho:

| STT | Method | Route              | Body Data       |  Response                           |
|-----|--------|--------------------|-----------------|-------------------------------------|
| 1   | GET    |/                   |                 |Hello, world!                        |
| 2   | POST   |/todos              |{title: 'Task 1'}|{success: true, data: TodoObject*}   |
| 3   | GET    |/todos/:id          |                 |{success: true, data: TodoObject*}   |                                   |
| 4   | POST   |/todos/:id          |{title: 'Task 2'}|{success: true, data: TodoObject*}   |
| 5   | POST   |/todos/:id/toogle   |                 |{success: true, data: TodoObject*}   |
| 6   | DELETE |/todos/:id          |                 |{success: true, data: true}          |

- TodoObject có format như sau:
```json
{
    "_id": "5cb34ce29b6b4856a3f20c7a",
    "title": "Task 1",
    "completed": false,
    "created": "2019-04-04 13:17:31.000Z"
}
```

## Chú ý:
 
- Bài tập yêu cầu sử dụng các thư viện: `express`, `mongoose`.

- Sử dụng biến môi trường để nhận vào `HOST` và `PORT` khi khởi động ứng dụng.

- Sử dụng 2 biến môi trường `MONGO_PATH` và `MONGO_PORT`. Ví dụ `MONGO_PATH=localhost`, `MONGO_PORT=27017`.

- Sử dụng npm script để chạy ứng dụng (`npm start`).

- Tạo issue mới với **Tiêu đề** (title) là Họ tên của bạn, và **nội dung** (content) là đường dẫn tới repo bài làm.

- Phần mềm chấm tự động sẽ tự xuất biến môi trường và sử dụng câu lệnh `npm start` để khởi động server và chạy những test case tương ứng. Nếu repo không thỏa mãn yêu cầu sẽ không thể chạy và không được tính điểm.

## Wall of fame

https://fame.hackermind.dev

## Đọc thêm

- https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

- https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633

- Code mẫu sử dụng biến môi trường, npm scripts: https://github.com/minhnt95/hello-world-crud


