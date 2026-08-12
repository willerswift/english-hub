# English Hub — Học tiếng Anh từ số 0 đến nâng cao

Web học tiếng Anh **chạy offline**, không cần cài đặt, không cần internet.
Lộ trình **40 buổi** theo khung CEFR: A1 → A2 → B1 → B2 → C1.

## Mở web

Nhấp đúp vào **`index.html`** — thế là xong. Chạy được trên Chrome, Safari, Edge, Firefox, cả máy tính lẫn điện thoại.

## Có gì trong này

| | |
|---|---|
| **40 buổi học** | mỗi buổi: mục tiêu → từ vựng có IPA → ngữ pháp có công thức → mẫu câu → hội thoại → bài tập tự chấm |
| **726 từ vựng** | có phiên âm IPA, nghĩa tiếng Việt, ví dụ song ngữ, nút 🔊 nghe phát âm |
| **149 điểm ngữ pháp** | bảng công thức, ví dụ song ngữ, ghi chú lỗi người Việt hay mắc |
| **447 mẫu câu** | giao tiếp thực tế theo tình huống |
| **463 câu bài tập** | trắc nghiệm và điền từ, tự chấm điểm kèm giải thích |
| **Kiểm tra trình độ** | 30 câu, gợi ý đúng buổi cần bắt đầu |
| **Flashcard** | lọc theo cấp độ, lật thẻ, xáo thẻ, nghe phát âm |
| **Tra cứu** | bảng 12 thì, 94 động từ bất quy tắc, tìm kiếm toàn bộ nội dung (Ctrl+K) |
| **Bộ tài liệu** | 9 file Markdown trong `docs/` — in ra hoặc chuyển PDF được |

Tiến độ học lưu tự động trong trình duyệt. Giao diện có chế độ sáng/tối.

## Cấu trúc thư mục

```
english-hub/
├── index.html              ← mở file này
├── assets/
│   ├── style.css
│   └── app.js
├── data/
│   ├── curriculum.js       khung chương trình 5 cấp độ
│   ├── lessons-a1.js       Buổi 1–10
│   ├── lessons-a2.js       Buổi 11–20
│   ├── lessons-b1.js       Buổi 21–28
│   ├── lessons-b2.js       Buổi 29–35
│   ├── lessons-c1.js       Buổi 36–40
│   └── reference.js        12 thì · động từ bất quy tắc · đề đầu vào
└── docs/                   bộ tài liệu Markdown
    ├── 00-huong-dan-hoc.md
    ├── 01-phat-am-ipa.md
    ├── 02-ngu-phap-toan-tap.md
    ├── 03-tu-vung-theo-chu-de.md
    ├── 04-dong-tu-bat-quy-tac.md
    ├── 05-phrasal-verbs-idioms.md
    ├── 06-mau-cau-giao-tiep.md
    ├── 07-luyen-thi-ielts-toeic.md
    └── 08-bai-tap-tong-hop.md
```

## Lộ trình

| Cấp | Buổi | Trọng tâm |
|---|---|---|
| **A1** | 1–10 | phát âm IPA, TO BE, danh từ, mạo từ, hiện tại đơn, there is/are, can, hiện tại tiếp diễn |
| **A2** | 11–20 | quá khứ đơn & tiếp diễn, so sánh, lượng từ, tương lai, hiện tại hoàn thành, modal, to V / V-ing, điều kiện 0–1 |
| **B1** | 21–28 | HTHT vs QKĐ, quá khứ hoàn thành, bị động, mệnh đề quan hệ, câu tường thuật, điều kiện 2–3, modal suy đoán, used to |
| **B2** | 29–35 | 12 thì đầy đủ, điều kiện hỗn hợp & đảo ngữ, thể sai khiến, mệnh đề phân từ, từ nối, phrasal verbs, collocation |
| **C1** | 36–40 | đảo ngữ & câu chẻ, danh từ hoá & văn phong học thuật, thành ngữ & sắc thái, viết email/báo cáo/luận, kỹ năng nói & nghe |

## In tài liệu

Mở bất kỳ buổi học nào rồi bấm **Ctrl/Cmd + P** — CSS in ấn đã sẵn sàng, menu sẽ tự ẩn.

## Sửa nội dung

Muốn thêm/sửa bài học: mở file `data/lessons-*.js`, mỗi buổi là một object với các trường `vocab`, `grammar`, `phrases`, `dialogue`, `exercises`.

> **Lưu ý:** sau khi sửa `style.css` hoặc `app.js`, nhớ tăng số `?v=` trong `index.html` — nếu không, trình duyệt sẽ dùng bản cũ đã cache.

## Nguồn tổng hợp

Nội dung được biên soạn lại theo chuẩn và cách tổ chức của: **CEFR** (Council of Europe), **Oxford 3000/5000**, **English Grammar in Use** (Murphy), **British Council LearnEnglish**, **BBC Learning English**, **Cambridge English & IELTS**, bảng **IPA**, và nguyên lý **lặp lại ngắt quãng** (Ebbinghaus). Không sao chép nguyên văn từ nguồn nào.
