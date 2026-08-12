/* English Hub — curriculum.js
   Khung chương trình: 5 cấp độ (CEFR) × 40 buổi học.
   Mọi buổi học nằm trong window.LESSONS (các file lessons-*.js). */

window.LESSONS = window.LESSONS || {};

window.CURRICULUM = {
  levels: [
    {
      id: 'A1',
      name: 'A1 — Khởi đầu (Beginner)',
      short: 'Mất gốc → nói được câu đầu tiên',
      color: 'var(--green)',
      range: [1, 10],
      hours: '30–40 giờ',
      words: '~350 từ',
      desc: 'Dành cho người chưa biết gì. Học phát âm chuẩn ngay từ đầu, động từ TO BE, thì hiện tại đơn, hiện tại tiếp diễn, danh từ, mạo từ, giới từ. Kết thúc A1 bạn tự giới thiệu, hỏi đường, mua hàng, nói về gia đình và thói quen hằng ngày.',
      can: [
        'Chào hỏi, giới thiệu bản thân và người khác',
        'Nói về gia đình, nghề nghiệp, nơi ở',
        'Hỏi giá, đặt món ăn, hỏi giờ và đường đi',
        'Viết được đoạn 4–5 câu về bản thân'
      ]
    },
    {
      id: 'A2',
      name: 'A2 — Sơ cấp (Elementary)',
      short: 'Kể chuyện quá khứ & dự định tương lai',
      color: 'var(--brand)',
      range: [11, 20],
      hours: '40–50 giờ',
      words: '~400 từ',
      desc: 'Mở rộng trục thời gian: quá khứ đơn, quá khứ tiếp diễn, tương lai (will / be going to), hiện tại hoàn thành cơ bản, so sánh, danh từ đếm được – không đếm được, động từ khuyết thiếu và câu điều kiện loại 1.',
      can: [
        'Kể lại một chuyến đi, một ngày đã qua',
        'So sánh hai người / hai vật / hai lựa chọn',
        'Nói về kế hoạch, dự định, lời hứa',
        'Viết email ngắn, tin nhắn, nhật ký'
      ]
    },
    {
      id: 'B1',
      name: 'B1 — Trung cấp (Intermediate)',
      short: 'Diễn đạt trôi chảy, nối câu dài',
      color: 'var(--amber)',
      range: [21, 28],
      hours: '60–80 giờ',
      words: '~450 từ',
      desc: 'Xử lý các điểm ngữ pháp khiến người Việt hay sai nhất: hiện tại hoàn thành vs quá khứ đơn, quá khứ hoàn thành, câu bị động, mệnh đề quan hệ, câu tường thuật, câu điều kiện loại 2–3 và động từ khuyết thiếu suy đoán.',
      can: [
        'Trình bày quan điểm và giải thích lý do',
        'Viết đoạn văn 150–200 từ mạch lạc',
        'Hiểu hội thoại tốc độ thường về chủ đề quen thuộc',
        'Xử lý tình huống khi đi du lịch / làm việc'
      ]
    },
    {
      id: 'B2',
      name: 'B2 — Trung cao (Upper-Intermediate)',
      short: 'Tranh luận, viết luận, tiếng Anh công việc',
      color: 'var(--purple)',
      range: [29, 35],
      hours: '80–100 giờ',
      words: '~400 từ',
      desc: 'Các thì hoàn thành tiếp diễn, câu điều kiện hỗn hợp, wish / if only, thể sai khiến, mệnh đề phân từ, từ nối học thuật, phrasal verb và collocation nâng cao — nền tảng cho IELTS 6.0–7.0.',
      can: [
        'Tranh luận, bảo vệ ý kiến bằng lập luận có cấu trúc',
        'Viết báo cáo, email công việc, essay 250 từ',
        'Hiểu phim, podcast, tin tức không cần phụ đề nhiều',
        'Diễn đạt sắc thái: lịch sự, trang trọng, hàm ý'
      ]
    },
    {
      id: 'C1',
      name: 'C1 — Cao cấp (Advanced)',
      short: 'Văn phong tự nhiên như người bản xứ',
      color: 'var(--red)',
      range: [36, 40],
      hours: '100+ giờ',
      words: '~300 từ',
      desc: 'Đảo ngữ và nhấn mạnh, danh từ hoá và văn phong học thuật, thành ngữ – collocation cao cấp, ngôn ngữ giảm nhẹ (hedging), và bộ khung viết – nói chuẩn IELTS 7.0+.',
      can: [
        'Viết học thuật / chuyên môn với văn phong tự nhiên',
        'Dùng thành ngữ, cách nói ẩn ý đúng ngữ cảnh',
        'Thuyết trình, phỏng vấn, đàm phán bằng tiếng Anh',
        'Đọc hiểu văn bản dài, trừu tượng'
      ]
    }
  ],

  /* Gợi ý cách học mỗi buổi — hiển thị ở trang Lộ trình */
  method: [
    { t: '1. Khởi động (5 phút)', d: 'Mở buổi trước, bấm Flashcard ôn 10 từ cũ. Không ôn = quên 70% sau 48 giờ.' },
    { t: '2. Từ vựng (15 phút)', d: 'Đọc bảng từ vựng, bấm 🔊 nghe và NHẮC LẠI THÀNH TIẾNG từng từ 3 lần. Chép ví dụ ra vở.' },
    { t: '3. Ngữ pháp (20 phút)', d: 'Đọc công thức, che phần ví dụ và tự đặt 2 câu của riêng bạn cho mỗi cấu trúc.' },
    { t: '4. Mẫu câu (10 phút)', d: 'Học thuộc cả cụm, đừng học từng từ rời. Cụm mới là thứ giúp bạn nói nhanh.' },
    { t: '5. Bài tập (15 phút)', d: 'Làm hết, bấm Kiểm tra. Câu nào sai → đọc giải thích → làm lại sau 1 ngày.' },
    { t: '6. Đầu ra (5 phút)', d: 'Nói hoặc viết 5 câu dùng từ/ngữ pháp vừa học. Đây là bước quyết định việc nhớ lâu.' }
  ],

  sources: [
    ['Khung tham chiếu CEFR (Council of Europe)', 'Chuẩn phân cấp A1–C1 và mô tả năng lực “can-do”'],
    ['Oxford 3000 / 5000 & New General Service List', 'Danh sách từ vựng ưu tiên theo tần suất'],
    ['English Grammar in Use — R. Murphy', 'Cách trình bày điểm ngữ pháp theo đơn vị bài'],
    ['British Council LearnEnglish & BBC Learning English', 'Chủ đề hội thoại và mẫu câu giao tiếp thực tế'],
    ['Cambridge English (KET–PET–FCE–CAE) & IELTS', 'Dạng bài kiểm tra và tiêu chí đầu ra từng cấp'],
    ['Bảng ký hiệu IPA (International Phonetic Alphabet)', 'Phiên âm chuẩn Anh–Anh / Anh–Mỹ'],
    ['Nguyên lý lặp lại ngắt quãng (Ebbinghaus / SRS)', 'Lịch ôn tập 1–3–7–14–30 ngày']
  ]
};
