/* English Hub — data/ielts.js
   LỘ TRÌNH IELTS TỪ SỐ 0 — tách riêng khỏi lộ trình CEFR 40 buổi.
   Cấu trúc buổi học giống hệt lessons-*.js để dùng chung bộ hiển thị. */

window.IELTS_TRACK = {
  name: 'IELTS từ con số 0',
  subtitle: 'Lộ trình 6 tháng · 24 buổi · Nền tảng → 4 kỹ năng',
  intro: 'Lộ trình dành cho người bắt đầu từ số 0 và muốn thi IELTS. Ba tháng đầu xây nền ' +
    '(phát âm, ngữ pháp, từ vựng, làm quen thụ động), ba tháng sau vào thẳng 4 kỹ năng của bài thi. ' +
    'Học tuần 4 buổi, mỗi buổi 60–90 phút, cộng thêm 20–30 phút luyện hằng ngày.',

  phases: [
    {
      id: 'P1',
      name: 'Giai đoạn 1 — Xây dựng nền tảng',
      months: 'Tháng 1 – 3',
      short: 'Phát âm, ngữ pháp, từ vựng, làm quen thụ động',
      color: '#0d9488',
      range: [1, 12],
      target: 'IELTS 3.0 → 4.5',
      desc: 'Không đụng đến đề thi trong giai đoạn này. Mục tiêu là đọc đúng, nghe ra được âm, ' +
        'nắm chắc bộ khung ngữ pháp và có vốn từ lõi để dùng được ở cả 4 kỹ năng về sau.',
      can: [
        'Đọc đúng 44 âm IPA, phát âm rõ âm cuối và đặt đúng trọng âm',
        'Dùng chắc 12 thì, câu bị động, mệnh đề quan hệ, câu ghép – câu phức',
        'Có khoảng 1.200 từ vựng lõi theo chủ đề quen thuộc',
        'Nghe quen tốc độ nói tự nhiên, không còn sợ khi nghe tiếng Anh'
      ],
      daily: [
        ['Phát âm', '15 phút', 'Luyện cặp âm tối thiểu + shadowing một đoạn 30 giây'],
        ['Từ vựng', '20 phút', '15–20 từ mới theo chủ đề, ôn flashcard theo lịch 1–3–7–14–30 ngày'],
        ['Ngữ pháp', '20 phút', 'Học 1 điểm ngữ pháp, tự đặt 5 câu của riêng mình'],
        ['Nghe thụ động', '15 phút', 'Podcast hoặc video đơn giản, không cần hiểu hết']
      ]
    },
    {
      id: 'P2',
      name: 'Giai đoạn 2 — Phát triển 4 kỹ năng',
      months: 'Tháng 4 – 6',
      short: 'Listening · Reading · Speaking · Writing',
      color: '#7c3aed',
      range: [13, 24],
      target: 'IELTS 5.0 → 6.0',
      desc: 'Chuyển từ học ngôn ngữ sang luyện kỹ năng làm bài. Mỗi kỹ năng 3 buổi, ' +
        'học kỹ thuật trước rồi áp dụng vào dạng bài thật.',
      can: [
        'Nghe chép chính tả đúng âm cuối, số, ngày tháng và tên riêng đánh vần',
        'Đọc lướt – đọc quét, xử lý được True/False/Not Given và Matching headings',
        'Trả lời trôi chảy Speaking Part 1 và nói được 2 phút ở Part 2',
        'Viết Task 1 mô tả biểu đồ 150 từ và Task 2 bài luận 250 từ đúng bố cục'
      ],
      daily: [
        ['Listening', '20 phút', 'Nghe chép chính tả một đoạn ngắn, đối chiếu transcript'],
        ['Reading', '20 phút', '1 bài đọc bấm giờ, ghi lại 10 từ paraphrase mới'],
        ['Speaking', '15 phút', 'Trả lời 3 câu Part 1 hoặc 1 cue card, tự ghi âm nghe lại'],
        ['Writing', '25 phút', '3 buổi/tuần: 1 bài Task 1 hoặc Task 2, tự soát theo checklist']
      ]
    }
  ],

  lessons: {}
};
/* ===== GIAI ĐOẠN 1 — Buổi 1–6 ===== */
Object.assign(window.IELTS_TRACK.lessons, {

'ie-01': {
  id:'ie-01', track:'ielts', phase:'P1', no:1,
  title:'Bảng IPA — 20 nguyên âm',
  subtitle:'Buổi đầu tiên: đọc đúng nguyên âm là nền của cả nghe lẫn nói.',
  goals:[
    'Đọc đúng 7 nguyên âm ngắn, 5 nguyên âm dài và 8 nguyên âm đôi',
    'Phân biệt được các cặp nguyên âm dễ nhầm',
    'Hiểu vì sao âm /ə/ quyết định độ tự nhiên khi nói'
  ],
  vocab:[
    {w:'sit – seat', ipa:'/sɪt/ – /siːt/', pos:'pair', vi:'ngồi – chỗ ngồi', ex:'Please sit on this seat.', exvi:'Mời ngồi vào ghế này.'},
    {w:'ship – sheep', ipa:'/ʃɪp/ – /ʃiːp/', pos:'pair', vi:'con tàu – con cừu', ex:'The sheep are on the ship.', exvi:'Mấy con cừu ở trên tàu.'},
    {w:'full – fool', ipa:'/fʊl/ – /fuːl/', pos:'pair', vi:'đầy – kẻ ngốc', ex:'Don’t be a fool.', exvi:'Đừng ngốc thế.'},
    {w:'bad – bed', ipa:'/bæd/ – /bed/', pos:'pair', vi:'tồi – cái giường', ex:'A bad night in bed.', exvi:'Một đêm khó ngủ.'},
    {w:'cup – cap', ipa:'/kʌp/ – /kæp/', pos:'pair', vi:'cái cốc – cái mũ', ex:'Put the cap on the cup.', exvi:'Đậy nắp lên cốc.'},
    {w:'work', ipa:'/wɜːk/', pos:'v/n', vi:'làm việc; công việc', ex:'I work from home.', exvi:'Tôi làm việc ở nhà.'},
    {w:'about', ipa:'/əˈbaʊt/', pos:'prep', vi:'về, khoảng', ex:'It is about ten minutes.', exvi:'Khoảng mười phút.'},
    {w:'teacher', ipa:'/ˈtiːtʃə(r)/', pos:'n', vi:'giáo viên', ex:'My teacher is patient.', exvi:'Giáo viên của tôi kiên nhẫn.'},
    {w:'computer', ipa:'/kəmˈpjuːtə(r)/', pos:'n', vi:'máy tính', ex:'I need a new computer.', exvi:'Tôi cần máy tính mới.'},
    {w:'father', ipa:'/ˈfɑːðə(r)/', pos:'n', vi:'bố', ex:'My father is a farmer.', exvi:'Bố tôi là nông dân.'},
    {w:'door', ipa:'/dɔː(r)/', pos:'n', vi:'cửa', ex:'Close the door, please.', exvi:'Làm ơn đóng cửa.'},
    {w:'bird', ipa:'/bɜːd/', pos:'n', vi:'con chim', ex:'A bird is singing.', exvi:'Có con chim đang hót.'},
    {w:'day', ipa:'/deɪ/', pos:'n', vi:'ngày', ex:'Have a nice day.', exvi:'Chúc một ngày tốt lành.'},
    {w:'time', ipa:'/taɪm/', pos:'n', vi:'thời gian', ex:'What time is it?', exvi:'Mấy giờ rồi?'},
    {w:'home', ipa:'/həʊm/', pos:'n', vi:'nhà', ex:'I go home at six.', exvi:'Tôi về nhà lúc 6 giờ.'},
    {w:'house', ipa:'/haʊs/', pos:'n', vi:'ngôi nhà', ex:'Their house is big.', exvi:'Nhà họ to.'},
    {w:'here', ipa:'/hɪə(r)/', pos:'adv', vi:'ở đây', ex:'Come here, please.', exvi:'Lại đây nào.'},
    {w:'hair', ipa:'/heə(r)/', pos:'n', vi:'tóc', ex:'She has long hair.', exvi:'Cô ấy tóc dài.'}
  ],
  grammar:[
    {
      t:'1. Bảy nguyên âm NGẮN',
      intro:'Nguyên âm ngắn phải bật ra thật nhanh, không kéo dài. Người Việt hay kéo dài quá nên nghe thành âm khác.',
      table:[
        ['IPA','Ví dụ','Cách tạo âm'],
        ['**/ɪ/**','s**i**t, b**i**g, th**i**s','như “i” nhưng ngắn, môi thả lỏng, không cười'],
        ['**/e/**','b**e**d, m**e**n, s**ai**d','như “e” trong “em”, miệng mở vừa'],
        ['**/æ/**','c**a**t, b**a**d, h**a**t','giữa “e” và “a”, miệng mở rộng ngang'],
        ['**/ʌ/**','c**u**p, l**o**ve, m**o**ney','như “â” trong “ân”, gọn và ngắn'],
        ['**/ɒ/**','h**o**t, n**o**t, w**a**nt','như “o” trong “con”, môi tròn'],
        ['**/ʊ/**','b**oo**k, p**u**t, c**ou**ld','như “u” ngắn, môi hơi tròn'],
        ['**/ə/**','**a**bout, teach**er**, comput**er**','âm schwa — yếu nhất, phổ biến nhất']
      ],
      notes:[
        {type:'tip', text:'**/ə/ là âm quan trọng nhất tiếng Anh.** Mọi âm tiết KHÔNG mang trọng âm đều có xu hướng biến thành /ə/. Nói được /ə/ tự nhiên là giọng bạn “Tây” hẳn lên.'},
        {type:'warn', text:'Người Việt hay đọc *computer* thành “com-piu-tơ” với cả 3 âm tiết đều rõ. Người bản xứ đọc /kəmˈpjuːtə/ — âm đầu và âm cuối bị nuốt thành /ə/, chỉ âm giữa được nhấn.'}
      ]
    },
    {
      t:'2. Năm nguyên âm DÀI',
      formula:'Quy tắc: âm dài phải kéo GẤP ĐÔI âm ngắn tương ứng.\n\n/iː/  s**ee**, m**ea**t, k**ey**      – môi kéo ngang như đang cười\n/ɑː/  c**a**r, f**a**ther, h**ea**rt   – miệng mở to, lưỡi hạ thấp\n/ɔː/  d**oo**r, f**ou**r, t**al**k     – môi tròn, đẩy ra trước\n/uː/  f**oo**d, bl**ue**, s**ou**p     – môi tròn nhỏ, đẩy mạnh ra trước\n/ɜː/  b**ir**d, w**or**k, l**ear**n    – như /ə/ nhưng kéo dài',
      notes:[
        {type:'tip', text:'Mẹo kiểm tra: đặt tay trước miệng và đếm thầm. Âm ngắn = 1 nhịp, âm dài = 2 nhịp. *sit* 1 nhịp, *seat* 2 nhịp.'}
      ]
    },
    {
      t:'3. Tám nguyên âm ĐÔI (diphthongs)',
      intro:'Nguyên âm đôi là **một âm trượt từ vị trí này sang vị trí khác**, không phải hai âm rời.',
      table:[
        ['IPA','Ví dụ','Trượt từ → đến'],
        ['**/eɪ/**','d**ay**, m**a**ke, r**ai**n','/e/ → /ɪ/'],
        ['**/aɪ/**','m**y**, t**i**me, h**i**gh','/a/ → /ɪ/'],
        ['**/ɔɪ/**','b**oy**, c**oi**n, n**oi**se','/ɔ/ → /ɪ/'],
        ['**/əʊ/**','g**o**, h**o**me, sh**ow**','/ə/ → /ʊ/'],
        ['**/aʊ/**','n**ow**, h**ou**se, l**ou**d','/a/ → /ʊ/'],
        ['**/ɪə/**','h**ere**, n**ear**, y**ear**','/ɪ/ → /ə/'],
        ['**/eə/**','h**air**, wh**ere**, c**are**','/e/ → /ə/'],
        ['**/ʊə/**','t**our**, p**oor**, s**ure**','/ʊ/ → /ə/']
      ],
      notes:[
        {type:'warn', text:'Lỗi hay gặp: đọc *go* thành “gô” (một âm). Đúng phải là /ɡəʊ/ — bắt đầu ở /ə/ rồi trượt sang /ʊ/, môi tròn dần lại.'}
      ]
    },
    {
      t:'4. Bài luyện 15 phút mỗi ngày',
      table:[
        ['Phút','Việc cần làm'],
        ['0–4','Đọc to bảng cặp âm tối thiểu bên dưới, mỗi cặp 5 lần'],
        ['4–8','Đọc 18 từ vựng của buổi này, bấm nút loa nghe rồi nhắc lại'],
        ['8–13','Shadowing: mở 1 đoạn video 30 giây, nghe và nói đuổi CÙNG LÚC, lặp 5 lần'],
        ['13–15','Ghi âm bản thân đọc lại, nghe và tự chấm']
      ],
      formula:'CẶP ÂM TỐI THIỂU ĐỂ LUYỆN\n/ɪ/ – /iː/   sit–seat   ship–sheep   live–leave   fit–feet\n/æ/ – /e/    bad–bed    sad–said    man–men     bat–bet\n/ʊ/ – /uː/   full–fool  pull–pool   look–Luke\n/ʌ/ – /ɑː/   cup–carp   hut–heart   much–march\n/əʊ/ – /ɔː/  boat–bought  coat–caught  so–saw'
    }
  ],
  phrases:[
    ['How do you pronounce this word?','Từ này đọc thế nào?'],
    ['Could you say that again, please?','Bạn đọc lại giúp được không?'],
    ['Is the vowel long or short?','Nguyên âm này dài hay ngắn?'],
    ['I always mix up these two sounds.','Tôi cứ lẫn lộn hai âm này.'],
    ['Let me record myself and listen back.','Để tôi ghi âm rồi nghe lại.'],
    ['My weak point is ending sounds.','Điểm yếu của tôi là âm cuối.'],
    ['I need to practise minimal pairs.','Tôi cần luyện các cặp âm tối thiểu.'],
    ['Where is the stress in this word?','Trọng âm từ này nằm ở đâu?'],
    ['It sounds natural now.','Giờ nghe tự nhiên rồi.'],
    ['I will do shadowing for ten minutes.','Tôi sẽ shadowing mười phút.']
  ],
  exercises:[
    {type:'mc', q:'Từ nào chứa nguyên âm DÀI /iː/?', opts:['sit','ship','seat','big'], a:2, ex:'**seat** /siːt/ có /iː/ dài; ba từ kia dùng /ɪ/ ngắn.'},
    {type:'mc', q:'Âm /ə/ (schwa) xuất hiện ở đâu trong từ “computer” /kəmˈpjuːtə/?', opts:['chỉ âm tiết đầu','chỉ âm tiết cuối','cả âm tiết đầu và cuối','không có'], a:2, ex:'Cả /kə/ và /tə/ đều là schwa vì không mang trọng âm.'},
    {type:'mc', q:'“go” phiên âm đúng là:', opts:['/ɡo/','/ɡəʊ/','/ɡɔː/','/ɡuː/'], a:1, ex:'Nguyên âm đôi **/əʊ/** trượt từ /ə/ sang /ʊ/.'},
    {type:'mc', q:'Cặp nào KHÁC nhau về độ dài nguyên âm?', opts:['bad – bed','full – fool','cat – hat','men – pen'], a:1, ex:'**full** /fʊl/ ngắn, **fool** /fuːl/ dài.'},
    {type:'mc', q:'Tiếng Anh có bao nhiêu nguyên âm đôi?', opts:['5','7','8','12'], a:2, ex:'**8** nguyên âm đôi: /eɪ aɪ ɔɪ əʊ aʊ ɪə eə ʊə/.'},
    {type:'fill', q:'Điền IPA của nguyên âm trong từ “bird”: /b__d/ (viết ký hiệu, ví dụ ɜː)', a:['ɜː'], ex:'*bird* /bɜːd/.'},
    {type:'fill', q:'Âm yếu nhất và phổ biến nhất tiếng Anh có tên là gì? (1 từ)', a:['schwa'], ex:'Âm **schwa** /ə/.'},
    {type:'fill', q:'“house” chứa nguyên âm đôi nào? (viết ký hiệu)', a:['aʊ'], ex:'*house* /haʊs/ → **/aʊ/**.'},
    {type:'mc', q:'Kỹ thuật nghe và nói đuổi theo cùng lúc gọi là:', opts:['dictation','shadowing','skimming','scanning'], a:1, ex:'**Shadowing** — hiệu quả nhất để cải thiện nghe và ngữ điệu.'},
    {type:'mc', q:'Vì sao phải học IPA trước khi luyện kỹ năng IELTS?', opts:['Để viết đẹp hơn','Để đọc đúng và nghe ra được âm','Để nhớ ngữ pháp','Để thi nhanh hơn'], a:1, ex:'Phát âm sai thì **nghe cũng sai** — não không nhận ra âm mà miệng chưa từng tạo được.'}
  ]
},

'ie-02': {
  id:'ie-02', track:'ielts', phase:'P1', no:2,
  title:'IPA — 24 phụ âm & âm cuối',
  subtitle:'Âm cuối là thứ người Việt hay nuốt nhất, và là thứ giám khảo nghe rõ nhất.',
  goals:[
    'Phân biệt phụ âm vô thanh và hữu thanh',
    'Phát âm được 4 âm khó nhất: /θ/, /ð/, /r/, /l/ cuối',
    'Đọc đúng đuôi -s và -ed'
  ],
  vocab:[
    {w:'think – sink', ipa:'/θɪŋk/ – /sɪŋk/', pos:'pair', vi:'nghĩ – bồn rửa', ex:'I think the sink is broken.', exvi:'Tôi nghĩ bồn rửa hỏng rồi.'},
    {w:'three – tree', ipa:'/θriː/ – /triː/', pos:'pair', vi:'số ba – cái cây', ex:'Three trees.', exvi:'Ba cái cây.'},
    {w:'they – day', ipa:'/ðeɪ/ – /deɪ/', pos:'pair', vi:'họ – ngày', ex:'They come every day.', exvi:'Họ đến mỗi ngày.'},
    {w:'right – light', ipa:'/raɪt/ – /laɪt/', pos:'pair', vi:'đúng, phải – ánh sáng', ex:'Turn right at the light.', exvi:'Rẽ phải ở chỗ đèn.'},
    {w:'rice – lice', ipa:'/raɪs/ – /laɪs/', pos:'pair', vi:'gạo – chấy', ex:'We eat rice every day.', exvi:'Chúng tôi ăn cơm mỗi ngày.'},
    {w:'book', ipa:'/bʊk/', pos:'n', vi:'quyển sách (bật rõ /k/)', ex:'I read a book.', exvi:'Tôi đọc sách.'},
    {w:'watched', ipa:'/wɒtʃt/', pos:'v', vi:'đã xem (chỉ 1 âm tiết)', ex:'I watched a film.', exvi:'Tôi đã xem phim.'},
    {w:'wanted', ipa:'/ˈwɒntɪd/', pos:'v', vi:'đã muốn (2 âm tiết)', ex:'She wanted to go.', exvi:'Cô ấy muốn đi.'},
    {w:'played', ipa:'/pleɪd/', pos:'v', vi:'đã chơi', ex:'They played football.', exvi:'Họ đã chơi bóng.'},
    {w:'boxes', ipa:'/ˈbɒksɪz/', pos:'n', vi:'những cái hộp', ex:'The boxes are heavy.', exvi:'Mấy cái hộp nặng.'},
    {w:'clothes', ipa:'/kləʊðz/', pos:'n', vi:'quần áo', ex:'I bought new clothes.', exvi:'Tôi mua quần áo mới.'},
    {w:'months', ipa:'/mʌnθs/', pos:'n', vi:'các tháng (cụm phụ âm khó)', ex:'Six months ago.', exvi:'Sáu tháng trước.'},
    {w:'asked', ipa:'/ɑːskt/', pos:'v', vi:'đã hỏi', ex:'He asked me a question.', exvi:'Anh ấy hỏi tôi một câu.'},
    {w:'world', ipa:'/wɜːld/', pos:'n', vi:'thế giới', ex:'Around the world.', exvi:'Vòng quanh thế giới.'},
    {w:'people', ipa:'/ˈpiːpl/', pos:'n', vi:'mọi người (/l/ cuối)', ex:'Many people came.', exvi:'Nhiều người đã đến.'},
    {w:'careful', ipa:'/ˈkeəfl/', pos:'adj', vi:'cẩn thận', ex:'Be careful!', exvi:'Cẩn thận!'}
  ],
  grammar:[
    {
      t:'1. Tám cặp phụ âm vô thanh – hữu thanh',
      intro:'Đặt tay lên cổ họng: **rung** là hữu thanh, **không rung** là vô thanh. Khẩu hình hoàn toàn giống nhau.',
      table:[
        ['Vô thanh (không rung)','Hữu thanh (rung)','Cặp từ để luyện'],
        ['/p/','/b/','**p**en – **b**en'],
        ['/t/','/d/','**t**en – **d**en'],
        ['/k/','/ɡ/','**c**old – **g**old'],
        ['/f/','/v/','**f**an – **v**an'],
        ['/θ/','/ð/','**th**ink – **th**is'],
        ['/s/','/z/','**s**ip – **z**ip'],
        ['/ʃ/','/ʒ/','**sh**e – vi**si**on'],
        ['/tʃ/','/dʒ/','**ch**air – **j**ar']
      ]
    },
    {
      t:'2. Bốn âm khó nhất với người Việt',
      table:[
        ['Âm','Cách tạo','Sai phổ biến','Cặp luyện'],
        ['**/θ/**','Đặt **lưỡi giữa hai hàm răng**, thổi hơi, KHÔNG rung','phát thành /t/ hoặc /s/','think–sink, three–tree, thin–tin'],
        ['**/ð/**','Lưỡi giữa răng, **có rung** dây thanh','phát thành /d/ hoặc /z/','they–day, there–dare, breathe–breeze'],
        ['**/r/**','**Cuộn lưỡi lên**, không chạm vòm, không rung lưỡi','rung lưỡi như “r” tiếng Việt','right–light, road–load, rice–lice'],
        ['**/l/** cuối','Đầu lưỡi **chạm lợi trên và giữ nguyên**','bị nuốt mất','feel, call, little, people, careful']
      ],
      notes:[
        {type:'warn', text:'Trong IELTS Speaking, tiêu chí **Pronunciation** chiếm 25% điểm nói. Bốn âm này sai liên tục là mất band ngay ở tiêu chí đó.'}
      ]
    },
    {
      t:'3. Âm cuối — thứ mang thông tin ngữ pháp',
      intro:'Tiếng Việt không có phụ âm cuối bật hơi nên người Việt hay “nuốt”. Nhưng trong tiếng Anh **âm cuối mang nghĩa ngữ pháp**.',
      table:[
        ['Nếu mất âm cuối','Người nghe không phân biệt được'],
        ['/s/, /z/','số ít ↔ số nhiều (*book / books*), ngôi 3 số ít (*work / works*)'],
        ['/t/, /d/','hiện tại ↔ quá khứ (*work / worked*)'],
        ['/k/, /p/, /f/','nghĩa của từ (*bat / back / bag*)']
      ],
      formula:'BÀI TẬP BẮT BUỘC — đọc to, mỗi từ 5 lần, bật rõ âm cuối:\nbooks · cats · maps · dogs · pens · boys\nworked · stopped · watched · played · lived · opened\nmonths · asked · texts · clothes · world · sixth',
      notes:[{type:'tip', text:'Mẹo: đặt bàn tay trước miệng. Đọc *book* mà không thấy luồng hơi bật vào tay là bạn đang nuốt /k/.'}]
    },
    {
      t:'4. Ba cách đọc đuôi -S và đuôi -ED',
      table:[
        ['Đuôi','Đọc là','Khi âm trước là','Ví dụ'],
        ['**-s**','/ɪz/','âm rít: s, ss, sh, ch, x, ge, ce','bus**es**, watch**es**, box**es**'],
        ['**-s**','/s/','âm vô thanh: p, t, k, f, θ','book**s**, cat**s**, map**s**'],
        ['**-s**','/z/','các âm còn lại','dog**s**, pen**s**, boy**s**'],
        ['**-ed**','/ɪd/','/t/ hoặc /d/','want**ed**, need**ed**, decid**ed**'],
        ['**-ed**','/t/','âm vô thanh: p, k, f, s, ʃ, tʃ, θ','work**ed**, stopp**ed**, watch**ed**'],
        ['**-ed**','/d/','các âm còn lại','play**ed**, liv**ed**, open**ed**']
      ],
      notes:[
        {type:'warn', text:'**Chỉ /t/ và /d/ mới tạo thêm âm tiết.** *Watched* có **1** âm tiết /wɒtʃt/, không phải “watch-ed”. Đây là lỗi rất hay gặp và làm mất điểm Fluency.'}
      ]
    }
  ],
  phrases:[
    ['I have trouble with the “th” sound.','Tôi gặp khó với âm “th”.'],
    ['Put your tongue between your teeth.','Đặt lưỡi giữa hai hàm răng.'],
    ['Don’t swallow the ending sound.','Đừng nuốt âm cuối.'],
    ['Does it end with a /t/ or a /d/?','Nó kết thúc bằng /t/ hay /d/?'],
    ['That word has only one syllable.','Từ đó chỉ có một âm tiết.'],
    ['Can you hear the difference?','Bạn nghe ra khác biệt không?'],
    ['My tongue position is wrong.','Vị trí lưỡi của tôi sai.'],
    ['Let me try it slowly first.','Để tôi thử chậm trước đã.'],
    ['I keep confusing /r/ and /l/.','Tôi cứ nhầm /r/ với /l/.'],
    ['Practice makes perfect.','Có công mài sắt có ngày nên kim.']
  ],
  exercises:[
    {type:'mc', q:'Đuôi -ed trong “watched” đọc là:', opts:['/ɪd/','/t/','/d/','không đọc'], a:1, ex:'Sau /tʃ/ vô thanh → **/t/**, và chỉ có 1 âm tiết.'},
    {type:'mc', q:'Đuôi -ed trong “wanted” đọc là:', opts:['/ɪd/','/t/','/d/','/ed/'], a:0, ex:'Sau /t/ → **/ɪd/**, thành 2 âm tiết.'},
    {type:'mc', q:'Đuôi -s trong “boxes” đọc là:', opts:['/s/','/z/','/ɪz/','/ks/'], a:2, ex:'Sau âm rít /ks/ → **/ɪz/**.'},
    {type:'mc', q:'Âm /θ/ được tạo bằng cách:', opts:['Đưa lưỡi giữa hai hàm răng, thổi hơi','Chạm lưỡi vào lợi trên','Rung lưỡi','Tròn môi'], a:0, ex:'**/θ/** là âm răng–lưỡi, không rung.'},
    {type:'mc', q:'Cặp nào là cặp vô thanh – hữu thanh?', opts:['/p/ – /t/','/f/ – /v/','/s/ – /ʃ/','/m/ – /n/'], a:1, ex:'**/f/ – /v/** cùng khẩu hình, khác ở chỗ rung hay không.'},
    {type:'fill', q:'“played” đọc đuôi -ed là gì? (viết /t/, /d/ hoặc /ɪd/)', a:['/d/','d'], ex:'Sau /eɪ/ hữu thanh → **/d/**.'},
    {type:'fill', q:'Số âm tiết của từ “stopped” là: ___', a:['1','một','mot'], ex:'/stɒpt/ — **1 âm tiết**.'},
    {type:'fill', q:'Âm cuối của “book” là gì? (viết ký hiệu IPA)', a:['/k/','k'], ex:'*book* /bʊk/ — phải bật rõ **/k/**.'},
    {type:'mc', q:'Vì sao không được nuốt âm cuối /s/?', opts:['Nghe không hay','Mất thông tin số nhiều và ngôi 3 số ít','Sai chính tả','Không sao cả'], a:1, ex:'Âm cuối mang **thông tin ngữ pháp** — mất nó là người nghe hiểu sai.'},
    {type:'mc', q:'Tiêu chí Pronunciation chiếm bao nhiêu phần điểm IELTS Speaking?', opts:['10%','25%','40%','50%'], a:1, ex:'Speaking có 4 tiêu chí, mỗi tiêu chí **25%**.'}
  ]
},

'ie-03': {
  id:'ie-03', track:'ielts', phase:'P1', no:3,
  title:'Trọng âm & ngữ điệu',
  subtitle:'Đặt sai trọng âm thì dù đọc đúng từng âm, người nghe vẫn không hiểu.',
  goals:[
    'Đặt đúng trọng âm từ theo loại từ và theo hậu tố',
    'Nắm nhịp điệu câu: từ nào nhấn, từ nào nuốt',
    'Dùng ngữ điệu lên – xuống đúng chỗ'
  ],
  vocab:[
    {w:'record (n) – record (v)', ipa:'/ˈrekɔːd/ – /rɪˈkɔːd/', pos:'pair', vi:'kỷ lục – ghi âm', ex:'He broke the record. / Please record it.', exvi:'Anh ấy phá kỷ lục. / Hãy ghi âm lại.'},
    {w:'present (n) – present (v)', ipa:'/ˈpreznt/ – /prɪˈzent/', pos:'pair', vi:'món quà – trình bày', ex:'A nice present. / I will present the data.', exvi:'Món quà đẹp. / Tôi sẽ trình bày số liệu.'},
    {w:'increase (n) – increase (v)', ipa:'/ˈɪnkriːs/ – /ɪnˈkriːs/', pos:'pair', vi:'sự tăng – tăng lên', ex:'A sharp increase. / Prices increase.', exvi:'Mức tăng mạnh. / Giá tăng.'},
    {w:'photograph', ipa:'/ˈfəʊtəɡrɑːf/', pos:'n', vi:'bức ảnh', ex:'A family photograph.', exvi:'Ảnh gia đình.'},
    {w:'photographer', ipa:'/fəˈtɒɡrəfə(r)/', pos:'n', vi:'nhiếp ảnh gia', ex:'She is a photographer.', exvi:'Cô ấy là nhiếp ảnh gia.'},
    {w:'photographic', ipa:'/ˌfəʊtəˈɡræfɪk/', pos:'adj', vi:'thuộc nhiếp ảnh', ex:'Photographic memory.', exvi:'Trí nhớ như chụp ảnh.'},
    {w:'education', ipa:'/ˌedʒuˈkeɪʃn/', pos:'n', vi:'giáo dục', ex:'Higher education.', exvi:'Giáo dục bậc cao.'},
    {w:'economic', ipa:'/ˌiːkəˈnɒmɪk/', pos:'adj', vi:'thuộc kinh tế', ex:'Economic growth.', exvi:'Tăng trưởng kinh tế.'},
    {w:'ability', ipa:'/əˈbɪləti/', pos:'n', vi:'khả năng', ex:'The ability to learn.', exvi:'Khả năng học hỏi.'},
    {w:'employee', ipa:'/ɪmˈplɔɪiː/', pos:'n', vi:'nhân viên', ex:'A new employee.', exvi:'Một nhân viên mới.'},
    {w:'engineer', ipa:'/ˌendʒɪˈnɪə(r)/', pos:'n', vi:'kỹ sư', ex:'A software engineer.', exvi:'Kỹ sư phần mềm.'},
    {w:'Vietnamese', ipa:'/ˌvjetnəˈmiːz/', pos:'adj', vi:'thuộc Việt Nam', ex:'Vietnamese food.', exvi:'Món ăn Việt.'},
    {w:'comfortable', ipa:'/ˈkʌmftəbl/', pos:'adj', vi:'thoải mái (3 âm tiết)', ex:'A comfortable chair.', exvi:'Cái ghế thoải mái.'},
    {w:'interesting', ipa:'/ˈɪntrəstɪŋ/', pos:'adj', vi:'thú vị (3 âm tiết)', ex:'An interesting book.', exvi:'Cuốn sách thú vị.'},
    {w:'vegetable', ipa:'/ˈvedʒtəbl/', pos:'n', vi:'rau củ (3 âm tiết)', ex:'Eat more vegetables.', exvi:'Ăn nhiều rau hơn.'},
    {w:'temperature', ipa:'/ˈtemprətʃə(r)/', pos:'n', vi:'nhiệt độ (3 âm tiết)', ex:'The temperature rose.', exvi:'Nhiệt độ tăng.'}
  ],
  grammar:[
    {
      t:'1. Trọng âm theo loại từ',
      table:[
        ['Quy tắc','Ví dụ'],
        ['Danh từ & tính từ 2 âm tiết → nhấn âm **thứ 1**','**TA**ble, **HAP**py, **DOC**tor, **BEAU**tiful'],
        ['Động từ 2 âm tiết → nhấn âm **thứ 2**','be**GIN**, for**GET**, a**GREE**, de**CIDE**'],
        ['Từ vừa danh vừa động → danh nhấn đầu, động nhấn sau','**RE**cord (n) / re**CORD** (v)'],
        ['Từ ghép danh từ → nhấn **phần đầu**','**BLACK**board, **AIR**port, **BOOK**shop'],
        ['Từ ghép tính từ → nhấn **phần sau**','old-**FASHIONED**, well-**KNOWN**']
      ],
      notes:[{type:'tip', text:'Cặp danh–động này hay xuất hiện trong Listening. Nghe *an **IN**crease* là danh từ, *prices in**CREASE*** là động từ.'}]
    },
    {
      t:'2. Trọng âm theo hậu tố — quy tắc ăn điểm',
      table:[
        ['Hậu tố','Trọng âm rơi vào','Ví dụ'],
        ['-tion, -sion, -cian','âm tiết **ngay trước** hậu tố','edu**CA**tion, deci**SION**, musi**CIAN**'],
        ['-ic, -ical','âm tiết **ngay trước**','eco**NO**mic, his**TO**rical, scien**TI**fic'],
        ['-ity, -ify, -ogy, -graphy','âm tiết **thứ ba từ cuối**','a**BI**lity, **CLA**rify, bi**O**logy, pho**TO**graphy'],
        ['-ee, -eer, -ese, -ette','**chính hậu tố** được nhấn','employ**EE**, engin**EER**, Vietnam**ESE**'],
        ['-ment, -ness, -ful, -less, -ly, -ing, -ed','**không đổi** trọng âm gốc','**HAP**py → **HAP**piness']
      ],
      formula:'HỌ TỪ CHUYỂN TRỌNG ÂM — nghe kỹ sự dịch chuyển:\n**PHO**tograph  →  pho**TO**grapher  →  photo**GRA**phic\n**E**conomy    →  eco**NO**mic     →  eco**NO**mical\n**A**nalyse    →  a**NA**lysis     →  ana**LY**tical'
    },
    {
      t:'3. Nhịp điệu câu — nhấn từ nghĩa, nuốt từ chức năng',
      intro:'Tiếng Anh có **nhịp theo trọng âm**: các trọng âm cách nhau đều đặn, còn từ ở giữa bị nén lại.',
      table:[
        ['Được NHẤN (content words)','Bị NUỐT (function words)'],
        ['danh từ, động từ chính, tính từ, trạng từ, từ để hỏi','mạo từ, giới từ, trợ động từ, đại từ, liên từ'],
        ['book, study, beautiful, quickly, what','a, the, to, for, of, is, do, can, and, but']
      ],
      formula:'Ví dụ — 10 từ nhưng chỉ 4 trọng âm:\nI **WANT** to **GO** to the **CI**nema with my **FRIENDS**.\n\nDẠNG YẾU của từ chức năng:\nto → /tə/     for → /fə/     of → /əv/     and → /ən/\ncan → /kən/   are → /ə/      you → /jə/    at → /ət/',
      notes:[{type:'warn', text:'Đọc đều tăm tắp mọi từ là dấu hiệu rõ nhất của người mới học. Nhấn đúng chỗ quan trọng hơn đọc đúng từng âm.'}]
    },
    {
      t:'4. Ngữ điệu (Intonation)',
      formula:'XUỐNG giọng ↘  – câu kể, câu hỏi WH-, ý đã trọn\n   I live in Hanoi. ↘        Where do you work? ↘\n\nLÊN giọng ↗   – câu hỏi Yes/No, chưa nói hết, lịch sự\n   Do you like it? ↗         Could you help me? ↗\n\nLÊN rồi XUỐNG ↗↘ – liệt kê: cái cuối xuống giọng\n   I study English ↗, Japanese ↗ and Korean ↘.\n\nXUỐNG rồi LÊN ↘↗ – hàm ý còn điều chưa nói\n   The food was… fine ↘↗  (ngụ ý: không ngon lắm)',
      notes:[{type:'tip', text:'Trong IELTS Speaking, ngữ điệu phẳng lì bị đánh giá là “monotone” và trừ điểm Pronunciation. Cứ lên xuống rõ ràng, thà hơi quá còn hơn phẳng.'}]
    }
  ],
  phrases:[
    ['Where does the stress fall?','Trọng âm rơi vào đâu?'],
    ['The stress moves when you add a suffix.','Trọng âm dịch chuyển khi thêm hậu tố.'],
    ['Stress the second syllable.','Nhấn vào âm tiết thứ hai.'],
    ['You sound a bit monotone.','Bạn nói hơi đều đều.'],
    ['Raise your voice at the end.','Lên giọng ở cuối câu.'],
    ['Which words should I emphasise?','Tôi nên nhấn những từ nào?'],
    ['Function words are usually unstressed.','Từ chức năng thường không được nhấn.'],
    ['Say it with more rhythm.','Nói có nhịp điệu hơn đi.'],
    ['Listen to the melody of the sentence.','Nghe giai điệu của câu.'],
    ['That sounds much more natural.','Nghe tự nhiên hơn nhiều rồi.']
  ],
  exercises:[
    {type:'mc', q:'Trọng âm của danh từ “record” rơi vào:', opts:['âm tiết 1','âm tiết 2','cả hai','không có'], a:0, ex:'Danh từ **RE**cord; động từ re**CORD**.'},
    {type:'mc', q:'Trọng âm của “education” rơi vào âm tiết thứ mấy?', opts:['1','2','3','4'], a:2, ex:'Hậu tố *-tion* → nhấn âm **ngay trước**: edu-**CA**-tion (thứ 3).'},
    {type:'mc', q:'Từ nào nhấn vào CHÍNH hậu tố?', opts:['happiness','employee','national','careful'], a:1, ex:'Hậu tố *-ee* được nhấn: employ**EE**.'},
    {type:'mc', q:'Trong câu “I want to go to the cinema”, từ nào KHÔNG được nhấn?', opts:['want','go','to','cinema'], a:2, ex:'*to* là giới từ — từ chức năng, đọc yếu thành /tə/.'},
    {type:'mc', q:'Câu hỏi Yes/No thường có ngữ điệu:', opts:['xuống giọng','lên giọng','phẳng','xuống rồi lên'], a:1, ex:'Câu hỏi Yes/No → **lên giọng** ở cuối.'},
    {type:'fill', q:'“photographer” nhấn âm tiết thứ mấy? (viết số)', a:['2','hai'], ex:'pho-**TO**-gra-pher → âm tiết **2**.'},
    {type:'fill', q:'Dạng yếu của “to” khi nói nhanh là gì? (viết ký hiệu IPA)', a:['/tə/','tə'], ex:'*to* → **/tə/**.'},
    {type:'fill', q:'“comfortable” có mấy âm tiết khi người bản xứ đọc? (viết số)', a:['3','ba'], ex:'/ˈkʌmftəbl/ — **3** âm tiết, không phải 4.'},
    {type:'mc', q:'Câu hỏi WH- (What, Where…) có ngữ điệu:', opts:['lên giọng','xuống giọng','phẳng','tuỳ ý'], a:1, ex:'Câu hỏi WH- → **xuống giọng**.'},
    {type:'mc', q:'Nói đều tăm tắp mọi từ sẽ bị đánh giá là:', opts:['rõ ràng','trang trọng','monotone và mất điểm','tự nhiên'], a:2, ex:'Giọng phẳng bị trừ điểm ở tiêu chí **Pronunciation**.'}
  ]
}

});
/* ===== GIAI ĐOẠN 1 — Buổi 4–8 ===== */
Object.assign(window.IELTS_TRACK.lessons, {

'ie-04': {
  id:'ie-04', track:'ielts', phase:'P1', no:4,
  title:'Nối âm, nuốt âm & dạng yếu',
  subtitle:'Lý do bạn biết từ đó mà nghe không ra: người bản xứ không đọc rời từng từ.',
  goals:[
    'Nhận ra 4 hiện tượng biến âm khi nói nhanh',
    'Nghe được các cụm bị dính vào nhau',
    'Nói tự nhiên hơn nhờ nối âm'
  ],
  vocab:[
    {w:'an apple', ipa:'/əˈnæpl/', pos:'phr', vi:'một quả táo (nối âm)', ex:'I eat an apple.', exvi:'Tôi ăn một quả táo.'},
    {w:'pick it up', ipa:'/pɪˈkɪdʌp/', pos:'phr', vi:'nhặt nó lên', ex:'Pick it up, please.', exvi:'Nhặt lên giúp nhé.'},
    {w:'a lot of it', ipa:'/əˈlɒdəvɪt/', pos:'phr', vi:'rất nhiều thứ đó', ex:'We used a lot of it.', exvi:'Chúng tôi dùng khá nhiều.'},
    {w:'next day', ipa:'/neksdeɪ/', pos:'phr', vi:'ngày hôm sau (nuốt /t/)', ex:'The next day was better.', exvi:'Hôm sau khá hơn.'},
    {w:'must be', ipa:'/məsbi/', pos:'phr', vi:'chắc là (nuốt /t/)', ex:'It must be true.', exvi:'Chắc là thật.'},
    {w:'don’t you', ipa:'/ˈdəʊntʃə/', pos:'phr', vi:'bạn không… à (đồng hoá)', ex:'Don’t you agree?', exvi:'Bạn không đồng ý à?'},
    {w:'would you', ipa:'/ˈwʊdʒə/', pos:'phr', vi:'bạn có… không', ex:'Would you like tea?', exvi:'Bạn dùng trà nhé?'},
    {w:'going to', ipa:'/ˈɡənə/', pos:'phr', vi:'sắp, định (gonna)', ex:'I’m going to leave.', exvi:'Tôi sắp đi.'},
    {w:'want to', ipa:'/ˈwɒnə/', pos:'phr', vi:'muốn (wanna)', ex:'Do you want to come?', exvi:'Bạn muốn đến không?'},
    {w:'got to', ipa:'/ˈɡɒtə/', pos:'phr', vi:'phải (gotta)', ex:'I’ve got to go.', exvi:'Tôi phải đi đây.'},
    {w:'kind of', ipa:'/ˈkaɪndə/', pos:'phr', vi:'kiểu như, hơi hơi', ex:'It’s kind of hard.', exvi:'Nó hơi khó.'},
    {w:'a cup of tea', ipa:'/əˈkʌpəvˈtiː/', pos:'phr', vi:'một tách trà', ex:'I’d love a cup of tea.', exvi:'Tôi muốn một tách trà.'},
    {w:'in an hour', ipa:'/ɪnəˈnaʊə/', pos:'phr', vi:'trong một tiếng nữa', ex:'See you in an hour.', exvi:'Một tiếng nữa gặp.'},
    {w:'come on', ipa:'/kʌˈmɒn/', pos:'phr', vi:'thôi nào', ex:'Come on, hurry up!', exvi:'Nào, nhanh lên!'},
    {w:'at all', ipa:'/əˈtɔːl/', pos:'phr', vi:'chút nào', ex:'Not at all.', exvi:'Không có gì đâu.'},
    {w:'this evening', ipa:'/ðɪˈsiːvnɪŋ/', pos:'phr', vi:'tối nay', ex:'I’m free this evening.', exvi:'Tối nay tôi rảnh.'}
  ],
  grammar:[
    {
      t:'1. Bốn hiện tượng biến âm',
      table:[
        ['Hiện tượng','Mô tả','Ví dụ'],
        ['**Nối âm** (linking)','phụ âm cuối + nguyên âm đầu → dính lại','*an apple* → /əˈnæpl/ ; *pick it up* → /pɪˈkɪdʌp/'],
        ['**Nuốt âm** (elision)','/t/, /d/ giữa hai phụ âm biến mất','*next day* → /neksdeɪ/ ; *must be* → /məsbi/'],
        ['**Đồng hoá** (assimilation)','âm biến đổi theo âm liền sau','*don’t you* → /dəʊntʃə/ ; *would you* → /wʊdʒə/'],
        ['**Nhược hoá** (reduction)','từ chức năng co lại thành /ə/','*going to* → /ˈɡənə/ ; *want to* → /ˈwɒnə/']
      ],
      formula:'VÍ DỤ TỔNG HỢP\nViết:  What do you want to do?\nNghe:  /ˈwɒdʒə ˈwɒnə duː/     ← “Whatcha wanna do?”\n\nViết:  I am going to eat a lot of it.\nNghe:  /aɪm ˈɡənə iːdəˈlɒdəvɪt/'
    },
    {
      t:'2. Ba quy tắc nối âm cần thuộc',
      formula:'① PHỤ ÂM + NGUYÊN ÂM → dính\n   look at it     → /lʊˈkæˈdɪt/\n   turn it off    → /ˈtɜːnɪˈtɒf/\n\n② NGUYÊN ÂM + NGUYÊN ÂM → chèn /w/ hoặc /j/\n   go on          → /ɡəʊ**w**ɒn/\n   I am           → /aɪ**j**æm/\n\n③ HAI PHỤ ÂM GIỐNG NHAU → đọc một lần, kéo dài\n   bus stop       → /bʌsːtɒp/\n   big girl       → /bɪɡːɜːl/',
      notes:[{type:'tip', text:'Nối âm không chỉ giúp NGHE — nó còn giúp NÓI trôi chảy hơn, ăn điểm tiêu chí Fluency trong Speaking.'}]
    },
    {
      t:'3. Dạng yếu của từ chức năng',
      table:[
        ['Từ','Dạng mạnh (đọc rời)','Dạng yếu (trong câu)'],
        ['to','/tuː/','**/tə/**'],
        ['for','/fɔː/','**/fə/**'],
        ['of','/ɒv/','**/əv/** hoặc /ə/'],
        ['and','/ænd/','**/ən/** hoặc /n/'],
        ['can','/kæn/','**/kən/**'],
        ['are','/ɑː/','**/ə/**'],
        ['was','/wɒz/','**/wəz/**'],
        ['have','/hæv/','**/həv/** hoặc /əv/'],
        ['at','/æt/','**/ət/**'],
        ['you','/juː/','**/jə/**']
      ],
      notes:[
        {type:'warn', text:'Phân biệt **can** /kən/ và **can’t** /kɑːnt/ chủ yếu nhờ **độ dài và trọng âm**, không phải nhờ chữ “t”. Nghe âm rõ và dài → đó là *can’t*.'}
      ]
    },
    {
      t:'4. Bài luyện nghe chép chính tả (dictation)',
      formula:'QUY TRÌNH 5 BƯỚC — làm 10 phút mỗi ngày\n① Chọn đoạn audio 20–30 giây có transcript\n② Nghe lần 1: nắm ý chung, chưa viết\n③ Nghe lần 2–4: viết ra từng chữ nghe được, để trống chỗ chưa nghe rõ\n④ Nghe lần 5–6: điền nốt chỗ trống\n⑤ Đối chiếu transcript, KHOANH TRÒN chỗ sai và ghi lý do:\n   – không biết từ đó?  → học từ mới\n   – biết từ nhưng không nhận ra? → lỗi nối/nuốt âm, luyện lại đoạn đó',
      notes:[{type:'tip', text:'Bước ⑤ mới là bước có giá trị. Chép xong mà không phân tích lỗi thì chỉ tốn thời gian.'}]
    }
  ],
  phrases:[
    ['I know the word but I can’t hear it.','Tôi biết từ đó mà nghe không ra.'],
    ['They speak too fast for me.','Họ nói nhanh quá với tôi.'],
    ['Could you slow down a bit?','Bạn nói chậm lại chút được không?'],
    ['The words all run together.','Các từ dính hết vào nhau.'],
    ['I missed the beginning.','Tôi nghe hụt đoạn đầu.'],
    ['Let me listen one more time.','Cho tôi nghe thêm lần nữa.'],
    ['Now I can hear it clearly.','Giờ tôi nghe rõ rồi.'],
    ['I’ll check the transcript.','Tôi sẽ xem lại transcript.'],
    ['That is a linking sound.','Đó là hiện tượng nối âm.'],
    ['Native speakers reduce these words.','Người bản xứ nói lướt những từ này.']
  ],
  exercises:[
    {type:'mc', q:'Trong “an apple”, hiện tượng xảy ra là:', opts:['nối âm','nuốt âm','đồng hoá','nhược hoá'], a:0, ex:'Phụ âm cuối /n/ + nguyên âm đầu /æ/ → **nối âm**.'},
    {type:'mc', q:'“don’t you” → /dəʊntʃə/ là hiện tượng:', opts:['nối âm','nuốt âm','đồng hoá','nhược hoá'], a:2, ex:'Âm biến đổi theo âm sau → **đồng hoá**.'},
    {type:'mc', q:'“next day” → /neksdeɪ/ là hiện tượng:', opts:['nối âm','nuốt âm','đồng hoá','chèn âm'], a:1, ex:'/t/ giữa hai phụ âm biến mất → **nuốt âm**.'},
    {type:'mc', q:'Dạng yếu của “and” trong câu là:', opts:['/ænd/','/ən/','/eɪnd/','/ɑːnd/'], a:1, ex:'*and* → **/ən/** hoặc chỉ còn /n/.'},
    {type:'mc', q:'Người bản xứ phân biệt “can” và “can’t” chủ yếu nhờ:', opts:['chữ t ở cuối','độ dài và trọng âm','ngữ điệu lên xuống','tốc độ nói'], a:1, ex:'*can* đọc yếu /kən/, *can’t* đọc mạnh và dài /kɑːnt/.'},
    {type:'fill', q:'“going to” nói nhanh thành gì? (viết theo cách thông dụng)', a:['gonna'], ex:'**gonna** /ˈɡənə/.'},
    {type:'fill', q:'“want to” nói nhanh thành gì?', a:['wanna'], ex:'**wanna** /ˈwɒnə/.'},
    {type:'fill', q:'Kỹ thuật nghe rồi viết lại từng chữ gọi là gì? (1 từ tiếng Anh)', a:['dictation'], ex:'**Dictation** — nghe chép chính tả.'},
    {type:'mc', q:'Bước quan trọng nhất khi chép chính tả là:', opts:['Nghe thật nhiều lần','Viết thật nhanh','Đối chiếu transcript và phân tích lỗi','Chọn bài thật dài'], a:2, ex:'Không phân tích lỗi thì chép bao nhiêu cũng không tiến bộ.'},
    {type:'mc', q:'Giữa hai nguyên âm, người bản xứ thường chèn thêm âm gì?', opts:['/t/ hoặc /d/','/w/ hoặc /j/','/s/ hoặc /z/','không chèn gì'], a:1, ex:'*go on* → /ɡəʊ**w**ɒn/ ; *I am* → /aɪ**j**æm/.'}
  ]
},

'ie-05': {
  id:'ie-05', track:'ielts', phase:'P1', no:5,
  title:'Ngữ pháp nền — 12 thì (phần 1)',
  subtitle:'Hiện tại và quá khứ: 6 thì chiếm hơn 80% số câu bạn dùng.',
  goals:[
    'Chia đúng 6 thì hiện tại và quá khứ',
    'Chọn thì theo dấu hiệu thời gian',
    'Tránh 4 lỗi chia thì người Việt hay mắc'
  ],
  vocab:[
    {w:'currently', ipa:'/ˈkʌrəntli/', pos:'adv', vi:'hiện tại, hiện nay', ex:'I am currently studying IELTS.', exvi:'Hiện tôi đang học IELTS.'},
    {w:'usually', ipa:'/ˈjuːʒuəli/', pos:'adv', vi:'thường', ex:'I usually get up at six.', exvi:'Tôi thường dậy lúc 6 giờ.'},
    {w:'recently', ipa:'/ˈriːsntli/', pos:'adv', vi:'gần đây', ex:'I have recently moved.', exvi:'Gần đây tôi mới chuyển nhà.'},
    {w:'since', ipa:'/sɪns/', pos:'prep', vi:'kể từ (mốc)', ex:'I have lived here since 2020.', exvi:'Tôi sống ở đây từ 2020.'},
    {w:'for', ipa:'/fɔː(r)/', pos:'prep', vi:'trong (khoảng)', ex:'For three years.', exvi:'Trong ba năm.'},
    {w:'ago', ipa:'/əˈɡəʊ/', pos:'adv', vi:'cách đây', ex:'Two years ago.', exvi:'Cách đây hai năm.'},
    {w:'graduate', ipa:'/ˈɡrædʒueɪt/', pos:'v', vi:'tốt nghiệp', ex:'I graduated in 2022.', exvi:'Tôi tốt nghiệp năm 2022.'},
    {w:'improve', ipa:'/ɪmˈpruːv/', pos:'v', vi:'cải thiện', ex:'My English has improved.', exvi:'Tiếng Anh tôi đã khá lên.'},
    {w:'attend', ipa:'/əˈtend/', pos:'v', vi:'tham dự', ex:'I attend classes twice a week.', exvi:'Tôi đi học hai buổi/tuần.'},
    {w:'commute', ipa:'/kəˈmjuːt/', pos:'v', vi:'đi làm hằng ngày', ex:'I commute by bus.', exvi:'Tôi đi làm bằng xe buýt.'},
    {w:'take part in', ipa:'/teɪk pɑːt ɪn/', pos:'phr', vi:'tham gia vào', ex:'I took part in a contest.', exvi:'Tôi đã tham gia một cuộc thi.'},
    {w:'used to', ipa:'/ˈjuːst tə/', pos:'phr', vi:'đã từng (nay không còn)', ex:'I used to live in Hue.', exvi:'Tôi từng sống ở Huế.'},
    {w:'while', ipa:'/waɪl/', pos:'conj', vi:'trong khi', ex:'While I was cooking, he called.', exvi:'Lúc tôi nấu ăn thì anh ấy gọi.'},
    {w:'by the time', ipa:'/baɪ ðə taɪm/', pos:'phr', vi:'vào lúc mà', ex:'By the time I arrived, they had left.', exvi:'Lúc tôi tới thì họ đã đi.'},
    {w:'so far', ipa:'/səʊ fɑː/', pos:'phr', vi:'cho tới nay', ex:'So far, so good.', exvi:'Tới giờ vẫn ổn.'},
    {w:'lately', ipa:'/ˈleɪtli/', pos:'adv', vi:'dạo gần đây', ex:'I have been busy lately.', exvi:'Dạo này tôi bận.'}
  ],
  grammar:[
    {
      t:'1. Ba thì HIỆN TẠI',
      table:[
        ['Thì','Công thức','Dùng khi','Dấu hiệu'],
        ['**Hiện tại đơn**','S + V(-s/es)','thói quen, sự thật, lịch cố định','always, usually, every day, on Mondays'],
        ['**Hiện tại tiếp diễn**','S + am/is/are + V-ing','đang xảy ra; giai đoạn tạm thời','now, at the moment, currently, this week'],
        ['**Hiện tại hoàn thành**','S + have/has + V3','kinh nghiệm; kết quả tới hiện tại; kéo dài tới nay','since, for, ever, never, just, already, yet, recently, so far']
      ],
      ex:[
        ['I **work** in a bank. (nghề nghiệp lâu dài)','Tôi làm ở ngân hàng.'],
        ['I **am working** from home this week. (tạm thời)','Tuần này tôi làm ở nhà.'],
        ['I **have worked** here for five years. (từ quá khứ tới nay)','Tôi làm ở đây được 5 năm.']
      ],
      notes:[
        {type:'warn', text:'**Động từ trạng thái không chia tiếp diễn:** be, have (sở hữu), like, love, want, need, know, understand, believe, remember, seem. → *I am knowing* ❌ → *I **know*** ✔'}
      ]
    },
    {
      t:'2. Ba thì QUÁ KHỨ',
      table:[
        ['Thì','Công thức','Dùng khi','Dấu hiệu'],
        ['**Quá khứ đơn**','S + V2/V-ed','xong ở thời điểm xác định','yesterday, last week, in 2020, ago, when I was…'],
        ['**Quá khứ tiếp diễn**','S + was/were + V-ing','đang diễn ra tại mốc quá khứ; dựng bối cảnh','while, at 8 p.m. yesterday'],
        ['**Quá khứ hoàn thành**','S + had + V3','xảy ra TRƯỚC một mốc quá khứ khác','before, after, by the time, already']
      ],
      formula:'TRỤC THỜI GIAN\n  ┌─ had + V3 ─┐   ┌─ V2 ─┐   ┌─ NOW ─┐\n    việc XA hơn      việc GẦN hơn    hiện tại\n\nBy the time she CAME (V2), we HAD EATEN (had + V3).\nWhile I WAS COOKING, the phone RANG.',
      ex:[
        ['I **was walking** home **when** it **started** to rain.','Tôi đang đi bộ về thì trời đổ mưa.'],
        ['When I **arrived**, the film **had** already **started**.','Khi tôi tới thì phim đã chiếu rồi.']
      ]
    },
    {
      t:'3. Cặp dễ nhầm nhất: Hiện tại hoàn thành vs Quá khứ đơn',
      table:[
        ['','QUÁ KHỨ ĐƠN','HIỆN TẠI HOÀN THÀNH'],
        ['Thời điểm','**xác định**, đã kết thúc','**không xác định** hoặc còn kéo dài'],
        ['Liên hệ hiện tại','không còn','có kết quả/ảnh hưởng tới hiện tại'],
        ['Ví dụ','I **lost** my keys yesterday. (đã tìm lại)','I **have lost** my keys. (giờ vẫn chưa có)'],
        ['','She **lived** in Hue for 5 years. (giờ không còn)','She **has lived** in Hue for 5 years. (vẫn đang sống)']
      ],
      notes:[
        {type:'warn', text:'Có **thời gian quá khứ cụ thể** thì bắt buộc quá khứ đơn: *I have seen him **yesterday*** ❌ → *I **saw** him yesterday* ✔'},
        {type:'tip', text:'Câu hỏi **When…?** luôn dùng quá khứ đơn. Câu hỏi **How long…?** thường dùng hiện tại hoàn thành.'}
      ]
    },
    {
      t:'4. Bốn lỗi chia thì người Việt hay mắc',
      table:[
        ['Lỗi','Sai','Đúng'],
        ['Quên -s ngôi 3 số ít','He *work* here','He **works** here'],
        ['Dùng tiếp diễn với động từ trạng thái','I *am knowing* him','I **know** him'],
        ['Trộn thì trong cùng một đoạn','Yesterday I go to school and studied','Yesterday I **went** to school and **studied**'],
        ['Dùng HTHT với thời gian xác định','I *have finished* it last night','I **finished** it last night']
      ],
      notes:[{type:'tip', text:'Trong IELTS Writing Task 2, **giữ thì nhất quán** trong cả đoạn là một phần của tiêu chí Grammatical Range & Accuracy.'}]
    }
  ],
  phrases:[
    ['I am currently preparing for IELTS.','Hiện tôi đang ôn IELTS.'],
    ['I have been learning English for two years.','Tôi học tiếng Anh được hai năm rồi.'],
    ['I graduated from university in 2022.','Tôi tốt nghiệp đại học năm 2022.'],
    ['I used to be afraid of speaking.','Trước đây tôi từng sợ nói.'],
    ['My English has improved a lot recently.','Gần đây tiếng Anh tôi tiến bộ nhiều.'],
    ['I usually study in the evening.','Tôi thường học buổi tối.'],
    ['I had never travelled abroad before that trip.','Trước chuyến đó tôi chưa từng ra nước ngoài.'],
    ['While I was studying, my phone rang.','Lúc tôi đang học thì điện thoại reo.'],
    ['I have not taken the test yet.','Tôi vẫn chưa thi.'],
    ['How long have you been studying?','Bạn học bao lâu rồi?']
  ],
  exercises:[
    {type:'mc', q:'I ___ English for two years and I still study it.', opts:['learn','learned','have been learning','was learning'], a:2, ex:'Kéo dài tới hiện tại, nhấn quá trình → **have been learning**.'},
    {type:'mc', q:'She ___ to Da Nang last summer.', opts:['has gone','went','goes','had gone'], a:1, ex:'*last summer* — thời gian xác định → **quá khứ đơn**.'},
    {type:'mc', q:'When I arrived, the meeting ___ already ___.', opts:['has / started','had / started','was / starting','did / start'], a:1, ex:'Việc xảy ra trước mốc quá khứ → **had started**.'},
    {type:'mc', q:'Look! It ___.', opts:['rains','is raining','has rained','rained'], a:1, ex:'*Look!* = ngay lúc này → **hiện tại tiếp diễn**.'},
    {type:'mc', q:'Câu nào SAI?', opts:['I know him well.','I am knowing him well.','I have known him for years.','I knew him at school.'], a:1, ex:'*know* là động từ trạng thái, **không chia tiếp diễn**.'},
    {type:'fill', q:'Chia động từ: He ___ (work) here since 2019. (2 từ)', a:['has worked',"'s worked"], ex:'*since* → **hiện tại hoàn thành**.'},
    {type:'fill', q:'Chia động từ: While she ___ (cook), the baby woke up. (2 từ)', a:['was cooking'], ex:'Sau *while* → **quá khứ tiếp diễn**.'},
    {type:'fill', q:'Chia động từ: My father ___ (go) to work by car every day.', a:['goes'], ex:'*every day* → hiện tại đơn, ngôi 3 số ít thêm **-s**.'},
    {type:'fill', q:'Điền for/since: I have known her ___ ten years.', a:['for'], ex:'Khoảng thời gian → **for**.'},
    {type:'mc', q:'“She has lived in Hue for 5 years” hàm ý:', opts:['Cô ấy đã rời Huế','Cô ấy vẫn đang sống ở Huế','Cô ấy sắp tới Huế','Cô ấy chỉ ở 5 ngày'], a:1, ex:'HTHT + *for* → hành động **còn tiếp diễn tới nay**.'}
  ]
},

'ie-06': {
  id:'ie-06', track:'ielts', phase:'P1', no:6,
  title:'Ngữ pháp nền — 12 thì (phần 2)',
  subtitle:'Tương lai và các thì hoàn thành tiếp diễn — hoàn tất bộ khung 12 thì.',
  goals:[
    'Phân biệt will, be going to và hiện tại tiếp diễn chỉ tương lai',
    'Dùng đúng tương lai hoàn thành và các thì hoàn thành tiếp diễn',
    'Nắm trọn bảng 12 thì để tra khi cần'
  ],
  vocab:[
    {w:'be about to', ipa:'/əˈbaʊt tə/', pos:'phr', vi:'sắp sửa', ex:'I am about to leave.', exvi:'Tôi sắp đi đây.'},
    {w:'be due to', ipa:'/djuː tə/', pos:'phr', vi:'dự kiến sẽ', ex:'The train is due to arrive at 6.', exvi:'Tàu dự kiến tới lúc 6 giờ.'},
    {w:'anticipate', ipa:'/ænˈtɪsɪpeɪt/', pos:'v', vi:'dự kiến, lường trước', ex:'We anticipate strong growth.', exvi:'Chúng tôi dự kiến tăng trưởng mạnh.'},
    {w:'estimate', ipa:'/ˈestɪmeɪt/', pos:'v', vi:'ước tính', ex:'It is estimated at 5%.', exvi:'Ước tính khoảng 5%.'},
    {w:'by then', ipa:'/baɪ ðen/', pos:'phr', vi:'tính tới lúc đó', ex:'By then I will have finished.', exvi:'Tới lúc đó tôi sẽ xong.'},
    {w:'deadline', ipa:'/ˈdedlaɪn/', pos:'n', vi:'hạn chót', ex:'We must meet the deadline.', exvi:'Phải kịp hạn chót.'},
    {w:'schedule', ipa:'/ˈʃedjuːl/', pos:'n/v', vi:'lịch trình; xếp lịch', ex:'A tight schedule.', exvi:'Lịch trình dày đặc.'},
    {w:'postpone', ipa:'/pəˈspəʊn/', pos:'v', vi:'hoãn lại', ex:'They postponed the exam.', exvi:'Họ hoãn kỳ thi.'},
    {w:'eventually', ipa:'/ɪˈventʃuəli/', pos:'adv', vi:'rốt cuộc', ex:'Eventually he agreed.', exvi:'Cuối cùng anh ấy đồng ý.'},
    {w:'steadily', ipa:'/ˈstedɪli/', pos:'adv', vi:'đều đặn', ex:'Sales have been rising steadily.', exvi:'Doanh số tăng đều.'},
    {w:'in the meantime', ipa:'/ˈmiːntaɪm/', pos:'phr', vi:'trong lúc chờ', ex:'In the meantime, please wait.', exvi:'Trong lúc đó xin đợi.'},
    {w:'sooner or later', ipa:'/ˈsuːnər ɔː ˈleɪtə/', pos:'phr', vi:'sớm muộn gì', ex:'Sooner or later it will happen.', exvi:'Sớm muộn cũng xảy ra.'},
    {w:'launch', ipa:'/lɔːntʃ/', pos:'v', vi:'ra mắt', ex:'They will launch it in June.', exvi:'Họ ra mắt vào tháng Sáu.'},
    {w:'complete', ipa:'/kəmˈpliːt/', pos:'v', vi:'hoàn thành', ex:'The project has been completed.', exvi:'Dự án đã hoàn thành.'},
    {w:'exhausted', ipa:'/ɪɡˈzɔːstɪd/', pos:'adj', vi:'kiệt sức', ex:'I am exhausted.', exvi:'Tôi kiệt sức.'},
    {w:'ongoing', ipa:'/ˈɒnɡəʊɪŋ/', pos:'adj', vi:'đang diễn ra', ex:'An ongoing project.', exvi:'Dự án đang triển khai.'}
  ],
  grammar:[
    {
      t:'1. Bốn cách nói về tương lai',
      table:[
        ['Cấu trúc','Dùng khi','Ví dụ'],
        ['**will + V**','quyết định ngay lúc nói; dự đoán theo cảm nhận; lời hứa','The phone is ringing — I **’ll get** it.'],
        ['**be going to + V**','kế hoạch đã có sẵn; dự đoán có bằng chứng','I **’m going to** study abroad next year.'],
        ['**hiện tại tiếp diễn**','lịch hẹn đã sắp xếp cụ thể (có vé, có hẹn)','I **’m meeting** the doctor at 3 tomorrow.'],
        ['**hiện tại đơn**','lịch trình cố định của tàu xe, rạp chiếu','The train **leaves** at 7:30.']
      ],
      notes:[
        {type:'warn', text:'Sau *will* luôn là **động từ nguyên mẫu không to**: *I will **go*** ✔ — *I will to go* ❌'},
        {type:'tip', text:'Trong IELTS Speaking Part 1 khi hỏi về kế hoạch, dùng *be going to* nghe tự nhiên hơn *will*: “I’m going to take the test in June.”'}
      ]
    },
    {
      t:'2. Tương lai tiếp diễn & tương lai hoàn thành',
      formula:'will be + V-ing        → đang diễn ra tại một mốc tương lai\n   This time tomorrow I **will be flying** to Da Nang.\n\nwill have + V3         → hoàn tất TRƯỚC một mốc tương lai\n   By 2030 I **will have finished** my degree.\n\nwill have been + V-ing → nhấn thời lượng tính tới mốc tương lai\n   By June I **will have been working** here for ten years.',
      ex:[
        ['**By the time** you arrive, we **will have eaten**.','Lúc bạn tới thì chúng tôi đã ăn xong.'],
        ['Don’t call at 8 — I **will be having** dinner.','Đừng gọi lúc 8 giờ, tôi sẽ đang ăn tối.']
      ],
      notes:[{type:'tip', text:'Dấu hiệu nhận biết: **by + mốc thời gian tương lai** (by then, by 2030, by the time…) → dùng *will have + V3*.'}]
    },
    {
      t:'3. Các thì hoàn thành tiếp diễn — nhấn QUÁ TRÌNH',
      table:[
        ['','HOÀN THÀNH (perfect)','HOÀN THÀNH TIẾP DIỄN'],
        ['Nhấn mạnh','**kết quả**, số lượng đếm được','**quá trình**, thời lượng'],
        ['Hiện tại','I **have written** three emails. (xong 3 cái)','I **have been writing** all morning. (viết suốt sáng)'],
        ['Quá khứ','She **had finished** by then.','She **had been waiting** for an hour.'],
        ['Tương lai','I **will have finished** by Friday.','I **will have been living** here for 5 years.']
      ],
      ex:[
        ['Your hands are dirty. — I **have been gardening**.','Tay bạn bẩn kìa. — Tôi vừa làm vườn.'],
        ['He was tired because he **had been driving** for six hours.','Anh ấy mệt vì đã lái xe 6 tiếng liền.']
      ],
      notes:[{type:'warn', text:'Động từ trạng thái (know, like, be, have = sở hữu) **không dùng dạng tiếp diễn**: *I have **known** him for years* ✔'}]
    },
    {
      t:'4. Bảng tra 12 thì',
      table:[
        ['','ĐƠN','TIẾP DIỄN','HOÀN THÀNH','HT TIẾP DIỄN'],
        ['**Hiện tại**','V / V-s','am/is/are + V-ing','have/has + V3','have/has been + V-ing'],
        ['**Quá khứ**','V2','was/were + V-ing','had + V3','had been + V-ing'],
        ['**Tương lai**','will + V','will be + V-ing','will have + V3','will have been + V-ing']
      ],
      formula:'CÁCH ĐỌC BẢNG\nperfect     = have + V3     → nhìn lại từ một mốc\ncontinuous  = be + V-ing    → đang diễn ra\nghép cả hai = have been + V-ing'
    }
  ],
  phrases:[
    ['I am going to take the test in June.','Tôi định thi vào tháng Sáu.'],
    ['I will let you know as soon as possible.','Tôi sẽ báo bạn sớm nhất có thể.'],
    ['By then I will have finished the course.','Tới lúc đó tôi sẽ học xong khoá này.'],
    ['This time next year I will be studying abroad.','Giờ này năm sau tôi sẽ đang du học.'],
    ['I have been studying since this morning.','Tôi học từ sáng tới giờ.'],
    ['The exam is due to start at nine.','Kỳ thi dự kiến bắt đầu lúc 9 giờ.'],
    ['I am about to leave.','Tôi sắp đi đây.'],
    ['We will have to postpone it.','Chúng ta sẽ phải hoãn lại.'],
    ['Sales have been rising steadily.','Doanh số tăng đều.'],
    ['In the meantime, keep practising.','Trong lúc đó cứ luyện tiếp nhé.']
  ],
  exercises:[
    {type:'mc', q:'Look at those clouds! It ___ rain.', opts:['will','is going to','goes to','will be'], a:1, ex:'Có bằng chứng nhìn thấy → **be going to**.'},
    {type:'mc', q:'By next June, she ___ here for ten years.', opts:['will work','will have worked','works','worked'], a:1, ex:'*by + mốc tương lai* → **will have worked**.'},
    {type:'mc', q:'This time tomorrow I ___ on a plane.', opts:['will sit','will be sitting','will have sat','sit'], a:1, ex:'*This time tomorrow* → **tương lai tiếp diễn**.'},
    {type:'mc', q:'Câu nào dùng cho LỊCH TRÌNH tàu xe?', opts:['The train will leave at 7.','The train is going to leave at 7.','The train leaves at 7.','The train is leaving now at 7.'], a:2, ex:'Lịch trình cố định → **hiện tại đơn**.'},
    {type:'mc', q:'He was tired because he ___ all night.', opts:['worked','had been working','has worked','works'], a:1, ex:'Quá trình kéo dài trước mốc quá khứ → **had been working**.'},
    {type:'fill', q:'Chia động từ: I ___ ___ ___ (write) emails all morning. (3 từ)', a:['have been writing'], ex:'Nhấn quá trình kéo dài → **have been writing**.'},
    {type:'fill', q:'Chia động từ: By 2030 they ___ ___ ___ (find) a solution. (3 từ)', a:['will have found'], ex:'**will have found**.'},
    {type:'fill', q:'Chia động từ: I ___ (meet) my tutor at 3 tomorrow. (dùng hiện tại tiếp diễn, 2 từ)', a:['am meeting',"'m meeting"], ex:'Lịch hẹn cố định → **am meeting**.'},
    {type:'mc', q:'Câu nào nhấn mạnh KẾT QUẢ đếm được?', opts:['I have been reading that book.','I have read three books this month.','I was reading a book.','I read books.'], a:1, ex:'Đếm được số lượng → **hiện tại hoàn thành thường**.'},
    {type:'mc', q:'Tiếng Anh có tổng cộng bao nhiêu thì?', opts:['8','10','12','16'], a:2, ex:'**12 thì** = 3 mốc thời gian × 4 dạng.'}
  ]
},

'ie-07': {
  id:'ie-07', track:'ielts', phase:'P1', no:7,
  title:'Câu bị động',
  subtitle:'Cấu trúc bắt buộc cho Writing Task 1 và văn phong học thuật.',
  goals:[
    'Chuyển chủ động sang bị động ở mọi thì',
    'Biết khi nào NÊN dùng bị động trong bài thi',
    'Dùng bị động với động từ tường thuật'
  ],
  vocab:[
    {w:'be made of', ipa:'/meɪd əv/', pos:'phr', vi:'được làm bằng', ex:'It is made of wood.', exvi:'Nó làm bằng gỗ.'},
    {w:'be known as', ipa:'/nəʊn æz/', pos:'phr', vi:'được biết đến như là', ex:'It is known as the Old Quarter.', exvi:'Nơi đó gọi là Phố Cổ.'},
    {w:'be based on', ipa:'/beɪst ɒn/', pos:'phr', vi:'dựa trên', ex:'The film is based on a true story.', exvi:'Phim dựa trên chuyện có thật.'},
    {w:'be regarded as', ipa:'/rɪˈɡɑːdɪd/', pos:'phr', vi:'được xem là', ex:'He is regarded as an expert.', exvi:'Ông ấy được xem là chuyên gia.'},
    {w:'be expected to', ipa:'/ɪkˈspektɪd/', pos:'phr', vi:'được dự kiến sẽ', ex:'Demand is expected to double.', exvi:'Nhu cầu dự kiến tăng gấp đôi.'},
    {w:'produce', ipa:'/prəˈdjuːs/', pos:'v', vi:'sản xuất', ex:'Coffee is produced in Dak Lak.', exvi:'Cà phê được trồng ở Đắk Lắk.'},
    {w:'construct', ipa:'/kənˈstrʌkt/', pos:'v', vi:'xây dựng', ex:'The bridge was constructed in 1990.', exvi:'Cầu được xây năm 1990.'},
    {w:'conduct', ipa:'/kənˈdʌkt/', pos:'v', vi:'tiến hành', ex:'A survey was conducted.', exvi:'Một khảo sát đã được tiến hành.'},
    {w:'implement', ipa:'/ˈɪmplɪment/', pos:'v', vi:'triển khai', ex:'The policy was implemented.', exvi:'Chính sách đã được triển khai.'},
    {w:'allocate', ipa:'/ˈæləkeɪt/', pos:'v', vi:'phân bổ', ex:'Funds were allocated to schools.', exvi:'Ngân sách được phân bổ cho trường học.'},
    {w:'require', ipa:'/rɪˈkwaɪə(r)/', pos:'v', vi:'yêu cầu', ex:'A visa is required.', exvi:'Cần phải có visa.'},
    {w:'permit', ipa:'/pəˈmɪt/', pos:'v', vi:'cho phép', ex:'Smoking is not permitted.', exvi:'Không được hút thuốc.'},
    {w:'replace', ipa:'/rɪˈpleɪs/', pos:'v', vi:'thay thế', ex:'It was replaced last year.', exvi:'Nó được thay năm ngoái.'},
    {w:'transform', ipa:'/trænsˈfɔːm/', pos:'v', vi:'biến đổi', ex:'The area was transformed.', exvi:'Khu vực đó đã đổi khác.'},
    {w:'damage', ipa:'/ˈdæmɪdʒ/', pos:'v/n', vi:'làm hư hại', ex:'The house was damaged by the storm.', exvi:'Ngôi nhà bị bão làm hư hại.'},
    {w:'be attributed to', ipa:'/əˈtrɪbjuːtɪd/', pos:'phr', vi:'được quy cho', ex:'The rise is attributed to demand.', exvi:'Mức tăng được quy cho nhu cầu.'}
  ],
  grammar:[
    {
      t:'1. Nguyên tắc chuyển đổi',
      formula:'CHỦ ĐỘNG:  S    +   V    +  O\nBỊ ĐỘNG:    O  +  be + V3 + (by S)\n\nThey BUILT this house in 1990.\n→ This house WAS BUILT in 1990.\n\nCông thức bất biến: **be (chia đúng thì) + V3**.\nChỉ chữ “be” thay đổi, V3 luôn giữ nguyên.',
      table:[
        ['Thì','Chủ động','Bị động'],
        ['Hiện tại đơn','They **make** cars.','Cars **are made**.'],
        ['Hiện tại tiếp diễn','They **are making** it.','It **is being made**.'],
        ['Quá khứ đơn','They **built** it.','It **was built**.'],
        ['Quá khứ tiếp diễn','They **were building** it.','It **was being built**.'],
        ['Hiện tại hoàn thành','They **have finished** it.','It **has been finished**.'],
        ['Quá khứ hoàn thành','They **had sold** it.','It **had been sold**.'],
        ['Tương lai','They **will send** it.','It **will be sent**.'],
        ['be going to','They **are going to open** it.','It **is going to be opened**.'],
        ['Modal','They **must clean** it.','It **must be cleaned**.']
      ]
    },
    {
      t:'2. Khi nào dùng bị động trong bài thi IELTS',
      table:[
        ['Trường hợp','Ví dụ'],
        ['Không biết / không cần biết ai làm','My wallet **was stolen**.'],
        ['Nhấn mạnh đối tượng chịu tác động','This temple **was built** in the 11th century.'],
        ['**Writing Task 1** — mô tả quy trình (process)','The beans **are dried** and then **roasted**.'],
        ['**Writing Task 2** — văn phong khách quan','It **is widely believed that**… / Measures **should be taken** to…'],
        ['Tránh nêu trách nhiệm cụ thể','A mistake **was made**.']
      ],
      notes:[
        {type:'warn', text:'Chỉ **ngoại động từ** (có tân ngữ) mới chuyển được sang bị động. *happen, arrive, go, come, die, sleep, seem* → **không có bị động**: *The accident was happened* ❌'},
        {type:'tip', text:'Chỉ giữ **by + người làm** khi thông tin đó quan trọng: *Hamlet was written **by Shakespeare*** ✔ ; *My car was stolen (by someone)* → bỏ.'}
      ]
    },
    {
      t:'3. Động từ có hai tân ngữ',
      formula:'They gave ME a prize.  → hai cách bị động:\n  ① **I was given** a prize.        (lấy người làm chủ ngữ — phổ biến hơn)\n  ② **A prize was given** to me.    (lấy vật làm chủ ngữ)\n\nÁp dụng với: give, send, offer, tell, show, teach, pay, lend, promise',
      ex:[
        ['**I was told** to wait outside.','Tôi được bảo đợi bên ngoài.'],
        ['**She was offered** a scholarship.','Cô ấy được cấp học bổng.']
      ]
    },
    {
      t:'4. Bị động với mệnh đề — cấu trúc ăn điểm Writing',
      formula:'People say that he is rich.\n→ **It is said that** he is rich.\n→ **He is said to be** rich.\n\nThey believed that she had left.\n→ **It was believed that** she had left.\n→ **She was believed to have left.**\n\nDùng với: say, believe, think, know, report, expect, consider, claim',
      ex:[
        ['**It is widely believed that** technology improves productivity.','Người ta tin rằng công nghệ giúp tăng năng suất.'],
        ['The population **is expected to** double by 2050.','Dân số dự kiến tăng gấp đôi vào năm 2050.']
      ],
      notes:[{type:'tip', text:'Ba mẫu câu này dùng được cho **hầu hết mọi đề Task 2**. Học thuộc và thay chủ đề vào.'}]
    }
  ],
  phrases:[
    ['It is widely believed that…','Người ta tin rằng…'],
    ['Measures should be taken to…','Cần có biện pháp để…'],
    ['This can be attributed to several factors.','Điều này có thể quy cho vài yếu tố.'],
    ['The data were collected in 2024.','Dữ liệu được thu thập năm 2024.'],
    ['A survey was conducted among students.','Một khảo sát được tiến hành với sinh viên.'],
    ['The problem has not been solved yet.','Vấn đề vẫn chưa được giải quyết.'],
    ['English is spoken all over the world.','Tiếng Anh được nói khắp thế giới.'],
    ['The beans are dried and then roasted.','Hạt được phơi khô rồi đem rang.'],
    ['Photos are not permitted inside.','Không được chụp ảnh bên trong.'],
    ['It is said to be the best in the city.','Nghe nói đó là chỗ tốt nhất thành phố.']
  ],
  exercises:[
    {type:'mc', q:'This house ___ in 1985.', opts:['built','was built','is built','has built'], a:1, ex:'Quá khứ bị động → **was built**.'},
    {type:'mc', q:'The road ___ at the moment.', opts:['is repairing','is being repaired','was repaired','repairs'], a:1, ex:'Hiện tại tiếp diễn bị động → **is being repaired**.'},
    {type:'mc', q:'The report ___ already ___.', opts:['has / finished','has been / finished','was / finish','is / finishing'], a:1, ex:'Hiện tại hoàn thành bị động → **has been finished**.'},
    {type:'mc', q:'Câu nào KHÔNG thể chuyển sang bị động?', opts:['They built a bridge.','She wrote a letter.','The accident happened yesterday.','He cleaned the room.'], a:2, ex:'*happen* là nội động từ → **không có bị động**.'},
    {type:'mc', q:'“It is said that he is rich” viết lại là:', opts:['He says to be rich.','He is said to be rich.','He is said that rich.','It says he to be rich.'], a:1, ex:'Cấu trúc **S + is said + to V**.'},
    {type:'fill', q:'Chuyển bị động: Someone stole my bike. → My bike ___ ___ . (2 từ)', a:['was stolen'], ex:'Quá khứ đơn bị động.'},
    {type:'fill', q:'Chia động từ: The letter ___ ___ ___ (send) tomorrow. (3 từ, dùng will)', a:['will be sent'], ex:'Tương lai bị động.'},
    {type:'fill', q:'Chia động từ: The room must ___ ___ (clean) before the meeting. (2 từ)', a:['be cleaned'], ex:'Modal bị động: **must be cleaned**.'},
    {type:'fill', q:'Chuyển bị động: They gave her a prize. → She ___ ___ a prize. (2 từ)', a:['was given'], ex:'Lấy người làm chủ ngữ → **was given**.'},
    {type:'mc', q:'Bị động đặc biệt hữu ích ở phần nào của IELTS Writing?', opts:['Task 1 mô tả quy trình','Task 2 nêu ý kiến cá nhân','Cả hai đều không dùng','Chỉ dùng ở Speaking'], a:0, ex:'Mô tả **process** trong Task 1 gần như toàn bộ dùng bị động.'}
  ]
},

'ie-08': {
  id:'ie-08', track:'ielts', phase:'P1', no:8,
  title:'Mệnh đề quan hệ',
  subtitle:'Công cụ nối câu ngắn thành câu dài — thứ giám khảo tìm ở tiêu chí ngữ pháp.',
  goals:[
    'Dùng đúng who, which, that, whose, where, when',
    'Phân biệt mệnh đề xác định và không xác định',
    'Rút gọn mệnh đề quan hệ cho câu gọn hơn'
  ],
  vocab:[
    {w:'who', ipa:'/huː/', pos:'pron', vi:'người mà', ex:'The man who called me.', exvi:'Người đàn ông đã gọi tôi.'},
    {w:'which', ipa:'/wɪtʃ/', pos:'pron', vi:'cái mà (vật)', ex:'The book which I bought.', exvi:'Quyển sách tôi mua.'},
    {w:'whose', ipa:'/huːz/', pos:'pron', vi:'của người/vật mà', ex:'The girl whose father is a doctor.', exvi:'Cô gái có bố là bác sĩ.'},
    {w:'where', ipa:'/weə(r)/', pos:'adv', vi:'nơi mà', ex:'The café where we met.', exvi:'Quán cà phê nơi chúng tôi gặp.'},
    {w:'colleague', ipa:'/ˈkɒliːɡ/', pos:'n', vi:'đồng nghiệp', ex:'A colleague who helped me.', exvi:'Đồng nghiệp đã giúp tôi.'},
    {w:'opportunity', ipa:'/ˌɒpəˈtjuːnəti/', pos:'n', vi:'cơ hội', ex:'An opportunity that changed my life.', exvi:'Cơ hội đã thay đổi đời tôi.'},
    {w:'facility', ipa:'/fəˈsɪləti/', pos:'n', vi:'cơ sở vật chất', ex:'Facilities which are well maintained.', exvi:'Cơ sở vật chất được bảo trì tốt.'},
    {w:'resident', ipa:'/ˈrezɪdənt/', pos:'n', vi:'cư dân', ex:'Residents who live nearby.', exvi:'Cư dân sống gần đó.'},
    {w:'device', ipa:'/dɪˈvaɪs/', pos:'n', vi:'thiết bị', ex:'A device which measures speed.', exvi:'Thiết bị đo tốc độ.'},
    {w:'circumstance', ipa:'/ˈsɜːkəmstəns/', pos:'n', vi:'hoàn cảnh', ex:'Circumstances that we cannot control.', exvi:'Hoàn cảnh ta không kiểm soát được.'},
    {w:'aspect', ipa:'/ˈæspekt/', pos:'n', vi:'khía cạnh', ex:'An aspect which is often ignored.', exvi:'Khía cạnh thường bị bỏ qua.'},
    {w:'factor', ipa:'/ˈfæktə(r)/', pos:'n', vi:'yếu tố', ex:'The factor that matters most.', exvi:'Yếu tố quan trọng nhất.'},
    {w:'background', ipa:'/ˈbækɡraʊnd/', pos:'n', vi:'nền tảng, xuất thân', ex:'Students whose background differs.', exvi:'Học sinh có xuất thân khác nhau.'},
    {w:'community', ipa:'/kəˈmjuːnəti/', pos:'n', vi:'cộng đồng', ex:'A community where people help each other.', exvi:'Cộng đồng nơi mọi người giúp nhau.'},
    {w:'period', ipa:'/ˈpɪəriəd/', pos:'n', vi:'giai đoạn', ex:'The period when I studied abroad.', exvi:'Giai đoạn tôi đi du học.'},
    {w:'approach', ipa:'/əˈprəʊtʃ/', pos:'n', vi:'cách tiếp cận', ex:'An approach which works well.', exvi:'Cách làm hiệu quả.'}
  ],
  grammar:[
    {
      t:'1. Đại từ quan hệ — dùng cái nào?',
      table:[
        ['Đại từ','Thay cho','Ví dụ'],
        ['**who**','người','The woman **who** lives next door is a nurse.'],
        ['**which**','vật, con vật','The car **which** he bought is red.'],
        ['**that**','người hoặc vật (chỉ mệnh đề xác định)','The book **that** I read was great.'],
        ['**whose**','sở hữu (thay his/her/its/their)','The boy **whose** father is a pilot…'],
        ['**where**','nơi chốn (= in/at which)','The hotel **where** we stayed…'],
        ['**when**','thời gian (= on/in which)','The year **when** I was born…'],
        ['**why**','lý do (= for which)','The reason **why** she left…']
      ]
    },
    {
      t:'2. Xác định vs Không xác định — khác nhau ở dấu phẩy',
      table:[
        ['','XÁC ĐỊNH (defining)','KHÔNG XÁC ĐỊNH (non-defining)'],
        ['Vai trò','**bắt buộc** — bỏ đi thì câu vô nghĩa','bổ sung thông tin thêm, bỏ vẫn hiểu'],
        ['Dấu phẩy','KHÔNG có','**CÓ** dấu phẩy hai đầu'],
        ['Dùng “that”','✔ được','✘ **không được**'],
        ['Ví dụ','Students **who** study hard pass.','My father, **who** is 60, still works.']
      ],
      ex:[
        ['My brother **who lives in Hue** is a teacher. (tôi có nhiều anh em — ông ở Huế ấy)','Anh trai tôi — người sống ở Huế — là giáo viên.'],
        ['My brother, **who lives in Hue**, is a teacher. (tôi chỉ có một anh trai)','Anh trai tôi, người đang sống ở Huế, là giáo viên.']
      ],
      notes:[
        {type:'warn', text:'Với mệnh đề **không xác định** (có dấu phẩy) tuyệt đối **không dùng *that***: *Hanoi, that is the capital…* ❌ → *Hanoi, **which** is the capital…* ✔'}
      ]
    },
    {
      t:'3. Lược bỏ và rút gọn',
      formula:'BỎ ĐƯỢC khi đại từ quan hệ làm TÂN NGỮ trong mệnh đề xác định:\n   The book (which/that) I bought is good.   ← bỏ được\nKHÔNG BỎ khi nó làm CHỦ NGỮ:\n   The man **who** called me…                ← phải giữ\n\nRÚT GỌN:\n   Chủ động → V-ing:  The man **who is waiting** = The man **waiting**\n   Bị động  → V3:     The car **which was stolen** = The car **stolen**\n   Sau so sánh nhất / số thứ tự → to V:\n                      the first person **who arrived** = the first person **to arrive**',
      ex:[
        ['The people **living** next door are very friendly.','Những người sống nhà bên rất thân thiện.'],
        ['The measures **taken** by the government were effective.','Các biện pháp chính phủ đưa ra rất hiệu quả.']
      ]
    },
    {
      t:'4. Dùng trong bài thi IELTS thế nào',
      formula:'SPEAKING — biến câu ngắn thành câu dài, ăn điểm Grammatical Range:\n  Cụt:  I like my job. It gives me freedom.\n  Hay:  I like my job, **which** gives me a lot of freedom.\n\nWRITING — gộp hai ý thành một câu phức:\n  Cụt:  Many students study abroad. They face culture shock.\n  Hay:  Many students **who study abroad** face culture shock.\n\nMẫu câu dùng được cho mọi đề Task 2:\n  … , **which** is one of the main reasons why …\n  People **whose** … are more likely to …\n  In countries **where** … , …',
      notes:[{type:'warn', text:'Đừng lồng quá 2 mệnh đề quan hệ trong một câu — câu sẽ rối và dễ sai ngữ pháp, phản tác dụng.'}]
    }
  ],
  phrases:[
    ['This is the person who helped me.','Đây là người đã giúp tôi.'],
    ['That is the place where I grew up.','Đó là nơi tôi lớn lên.'],
    ['I remember the day when we first met.','Tôi nhớ ngày đầu chúng ta gặp nhau.'],
    ['The company I work for is expanding.','Công ty tôi làm đang mở rộng.'],
    ['Anyone who is interested can join.','Ai quan tâm đều tham gia được.'],
    ['People whose jobs are repetitive get bored.','Người làm công việc lặp đi lặp lại dễ chán.'],
    ['In countries where wages are low…','Ở những nước lương thấp…'],
    ['…, which is one of the main reasons why…','…, đó là một trong những lý do chính khiến…'],
    ['That is the reason why I chose this course.','Đó là lý do tôi chọn khoá này.'],
    ['It is something I will never forget.','Đó là điều tôi không bao giờ quên.']
  ],
  exercises:[
    {type:'mc', q:'The man ___ lives next door is a doctor.', opts:['which','who','whose','where'], a:1, ex:'Chỉ người, làm chủ ngữ → **who**.'},
    {type:'mc', q:'The girl ___ father is a pilot is my friend.', opts:['who','which','whose','whom'], a:2, ex:'Sở hữu → **whose**.'},
    {type:'mc', q:'That is the hotel ___ we stayed last year.', opts:['which','that','where','who'], a:2, ex:'Nơi chốn → **where**.'},
    {type:'mc', q:'Câu nào ĐÚNG?', opts:['My mother, that is 55, works here.','My mother, who is 55, works here.','My mother who is 55, works here.','My mother, which is 55, works here.'], a:1, ex:'Mệnh đề không xác định về người → **who**, không dùng *that*.'},
    {type:'mc', q:'Trong câu nào có thể LƯỢC BỎ đại từ quan hệ?', opts:['The man who called me.','The book which I read.','The woman who lives here.','The car which is red.'], a:1, ex:'Bỏ được khi đại từ làm **tân ngữ**.'},
    {type:'fill', q:'Điền đại từ: The car ___ he bought is expensive.', a:['which','that'], ex:'Chỉ vật → **which / that**.'},
    {type:'fill', q:'Rút gọn: The man who is standing there → The man ___ there. (1 từ)', a:['standing'], ex:'Chủ động → **V-ing**.'},
    {type:'fill', q:'Rút gọn: The letter which was sent yesterday → The letter ___ yesterday. (1 từ)', a:['sent'], ex:'Bị động → **V3**.'},
    {type:'fill', q:'Điền: I remember the day ___ we met.', a:['when'], ex:'Chỉ thời gian → **when**.'},
    {type:'mc', q:'Rút gọn “the first person who arrived” thành:', opts:['the first person arriving','the first person to arrive','the first person arrived','the first person arrive'], a:1, ex:'Sau số thứ tự / so sánh nhất → **to V**.'}
  ]
}

});
/* ===== GIAI ĐOẠN 1 — Buổi 9–12 ===== */
Object.assign(window.IELTS_TRACK.lessons, {

'ie-09': {
  id:'ie-09', track:'ielts', phase:'P1', no:9,
  title:'Câu đơn – câu ghép – câu phức',
  subtitle:'Trộn được ba loại câu là ăn nửa số điểm ngữ pháp trong Writing.',
  goals:[
    'Nhận ra và viết đúng ba loại câu',
    'Dùng liên từ đúng chức năng và đúng dấu câu',
    'Tránh lỗi câu cụt và lỗi dính câu'
  ],
  vocab:[
    {w:'although', ipa:'/ɔːlˈðəʊ/', pos:'conj', vi:'mặc dù (+ mệnh đề)', ex:'Although it rained, we went out.', exvi:'Dù mưa, chúng tôi vẫn ra ngoài.'},
    {w:'despite', ipa:'/dɪˈspaɪt/', pos:'prep', vi:'mặc dù (+ danh từ)', ex:'Despite the rain, we went out.', exvi:'Dù trời mưa, chúng tôi vẫn ra ngoài.'},
    {w:'whereas', ipa:'/weərˈæz/', pos:'conj', vi:'trong khi (đối lập)', ex:'He likes tea, whereas she prefers coffee.', exvi:'Anh ấy thích trà, còn cô ấy thích cà phê.'},
    {w:'therefore', ipa:'/ˈðeəfɔː(r)/', pos:'adv', vi:'do đó', ex:'Therefore, we must act now.', exvi:'Do đó ta phải hành động ngay.'},
    {w:'moreover', ipa:'/mɔːrˈəʊvə(r)/', pos:'adv', vi:'hơn nữa', ex:'Moreover, it is cheaper.', exvi:'Hơn nữa, nó rẻ hơn.'},
    {w:'however', ipa:'/haʊˈevə(r)/', pos:'adv', vi:'tuy nhiên', ex:'However, there are risks.', exvi:'Tuy nhiên vẫn có rủi ro.'},
    {w:'as a result', ipa:'/əz ə rɪˈzʌlt/', pos:'phr', vi:'kết quả là', ex:'As a result, prices rose.', exvi:'Kết quả là giá tăng.'},
    {w:'in addition', ipa:'/ɪn əˈdɪʃn/', pos:'phr', vi:'ngoài ra', ex:'In addition, we offer support.', exvi:'Ngoài ra chúng tôi có hỗ trợ.'},
    {w:'unless', ipa:'/ənˈles/', pos:'conj', vi:'trừ khi', ex:'Unless you hurry, you will be late.', exvi:'Trừ khi nhanh lên, bạn sẽ trễ.'},
    {w:'as long as', ipa:'/əz lɒŋ əz/', pos:'conj', vi:'miễn là', ex:'As long as you try, it is fine.', exvi:'Miễn bạn cố gắng là được.'},
    {w:'due to', ipa:'/djuː tə/', pos:'prep', vi:'do, vì (+ danh từ)', ex:'Due to heavy rain, the match was cancelled.', exvi:'Do mưa lớn, trận đấu bị huỷ.'},
    {w:'so that', ipa:'/səʊ ðæt/', pos:'conj', vi:'để mà', ex:'I study hard so that I can pass.', exvi:'Tôi học chăm để đỗ.'},
    {w:'in order to', ipa:'/ɪn ˈɔːdə tə/', pos:'phr', vi:'để', ex:'In order to improve, you must practise.', exvi:'Để tiến bộ, bạn phải luyện tập.'},
    {w:'clause', ipa:'/klɔːz/', pos:'n', vi:'mệnh đề', ex:'A relative clause.', exvi:'Mệnh đề quan hệ.'},
    {w:'conjunction', ipa:'/kənˈdʒʌŋkʃn/', pos:'n', vi:'liên từ', ex:'Use the right conjunction.', exvi:'Dùng đúng liên từ.'},
    {w:'concise', ipa:'/kənˈsaɪs/', pos:'adj', vi:'súc tích', ex:'Keep your writing concise.', exvi:'Viết cho súc tích.'}
  ],
  grammar:[
    {
      t:'1. Ba loại câu',
      table:[
        ['Loại câu','Cấu tạo','Ví dụ'],
        ['**Câu đơn** (simple)','1 mệnh đề độc lập','I study English every day.'],
        ['**Câu ghép** (compound)','2 mệnh đề độc lập nối bằng *and, but, so, or, yet*','I study English, **but** I find grammar difficult.'],
        ['**Câu phức** (complex)','1 mệnh đề chính + 1 mệnh đề phụ','**Although** I study every day, I still make mistakes.'],
        ['**Câu phức hợp** (compound-complex)','ghép cả hai kiểu trên','**Although** I study daily, I make mistakes, **so** I need a tutor.']
      ],
      notes:[
        {type:'tip', text:'Tiêu chí **Grammatical Range** trong IELTS yêu cầu “a variety of complex structures”. Bài toàn câu đơn khó vượt band 6.0, dù không sai ngữ pháp.'},
        {type:'warn', text:'Ngược lại, đừng viết câu nào cũng dài 3 dòng. Tỉ lệ đẹp là khoảng **60% câu phức / 40% câu đơn và ghép**, xen kẽ nhau.'}
      ]
    },
    {
      t:'2. Bảy liên từ ghép câu (FANBOYS)',
      formula:'For   – vì (trang trọng)      : He stayed home, **for** he was ill.\nAnd   – và                    : She reads **and** she writes.\nNor   – cũng không            : He doesn’t smoke, **nor** does he drink.\nBut   – nhưng                 : It is cheap, **but** it is not good.\nOr    – hoặc                  : Study now, **or** you will fail.\nYet   – thế mà                : It is expensive, **yet** popular.\nSo    – nên                   : It rained, **so** we stayed in.\n\nDẤU CÂU: mệnh đề 1 **, + FANBOYS +** mệnh đề 2',
      notes:[{type:'warn', text:'Lỗi **dính câu** (run-on): *It rained, we stayed in.* ❌ — hai mệnh đề độc lập không được nối bằng mỗi dấu phẩy. Phải thêm *so* hoặc đổi thành dấu chấm/chấm phẩy.'}]
    },
    {
      t:'3. Liên từ phụ thuộc — tạo câu phức',
      table:[
        ['Chức năng','Liên từ','Ví dụ'],
        ['Thời gian','when, while, before, after, as soon as, until','**When** I finish work, I go to the gym.'],
        ['Nguyên nhân','because, since, as','I stayed home **because** I was tired.'],
        ['Nhượng bộ','although, though, even though, while','**Although** it is expensive, it is worth it.'],
        ['Điều kiện','if, unless, as long as, provided that','**Unless** you practise, you will not improve.'],
        ['Mục đích','so that, in order that','I saved money **so that** I could travel.'],
        ['Kết quả','so … that, such … that','It was **so** cold **that** we stayed in.']
      ],
      formula:'HAI CÁCH ĐẶT — khác nhau ở dấu phẩy\n**Although** it rained, we went out.     ← mệnh đề phụ trước → CÓ phẩy\nWe went out **although** it rained.      ← mệnh đề phụ sau  → KHÔNG phẩy'
    },
    {
      t:'4. Ba cặp dễ sai nhất',
      table:[
        ['Cặp','Theo sau là','Ví dụ đúng'],
        ['**although / despite**','although + **mệnh đề** ; despite + **danh từ / V-ing**','*Although it rained…* / *Despite the rain…*'],
        ['**because / because of**','because + **mệnh đề** ; because of + **danh từ**','*Because it rained…* / *Because of the rain…*'],
        ['**however / but**','however là **trạng từ** (cần dấu chấm hoặc chấm phẩy trước) ; but là **liên từ**','*It was late. **However,** we stayed.* / *It was late, **but** we stayed.*']
      ],
      notes:[
        {type:'warn', text:'Lỗi rất phổ biến: *It was late, however we stayed.* ❌ — đây là lỗi **comma splice**, bị trừ điểm Coherence trong Writing.'},
        {type:'tip', text:'Muốn dùng mệnh đề sau *despite* thì thêm **the fact that**: *Despite **the fact that** it rained, …* ✔'}
      ]
    }
  ],
  phrases:[
    ['Although it is expensive, it is worth it.','Dù đắt nhưng đáng tiền.'],
    ['Despite the difficulties, she succeeded.','Bất chấp khó khăn, cô ấy đã thành công.'],
    ['I study hard so that I can pass the test.','Tôi học chăm để thi đỗ.'],
    ['Unless we act now, the problem will get worse.','Nếu không hành động ngay, vấn đề sẽ tệ hơn.'],
    ['He likes tea, whereas she prefers coffee.','Anh ấy thích trà, còn cô ấy thích cà phê.'],
    ['As a result, many people lost their jobs.','Kết quả là nhiều người mất việc.'],
    ['In addition, it saves a lot of time.','Ngoài ra, nó tiết kiệm nhiều thời gian.'],
    ['This is one of the main reasons why…','Đây là một trong những lý do chính khiến…'],
    ['On the one hand… on the other hand…','Một mặt… mặt khác…'],
    ['To sum up, the benefits outweigh the drawbacks.','Tóm lại, lợi ích lớn hơn bất lợi.']
  ],
  exercises:[
    {type:'mc', q:'___ the bad weather, the match went ahead.', opts:['Although','Despite','However','Because'], a:1, ex:'*the bad weather* là danh từ → **Despite**.'},
    {type:'mc', q:'___ it was raining, we went for a walk.', opts:['Despite','In spite of','Although','Because of'], a:2, ex:'Theo sau là mệnh đề → **Although**.'},
    {type:'mc', q:'Câu nào SAI ngữ pháp?', opts:['It was late, but we stayed.','It was late. However, we stayed.','It was late, however we stayed.','Although it was late, we stayed.'], a:2, ex:'*however* không nối hai mệnh đề bằng dấu phẩy — lỗi **comma splice**.'},
    {type:'mc', q:'“I study hard ___ I can pass.” (để mà)', opts:['so that','so','because','although'], a:0, ex:'Chỉ mục đích → **so that**.'},
    {type:'mc', q:'Câu “Although I study daily, I make mistakes, so I need a tutor” thuộc loại:', opts:['câu đơn','câu ghép','câu phức','câu phức hợp'], a:3, ex:'Có cả mệnh đề phụ và mệnh đề ghép → **câu phức hợp**.'},
    {type:'fill', q:'Điền: ___ ___ the rain, the event was cancelled. (2 từ, nghĩa “do”)', a:['due to','because of'], ex:'**Due to / Because of** + danh từ.'},
    {type:'fill', q:'Điền liên từ: ___ you practise, you will not improve. (1 từ, nghĩa “trừ khi”)', a:['unless','Unless'], ex:'**Unless** = if…not.'},
    {type:'fill', q:'Sửa lỗi dính câu: “It rained, we stayed in.” → It rained, ___ we stayed in. (1 từ)', a:['so'], ex:'Thêm liên từ **so** để nối hai mệnh đề độc lập.'},
    {type:'mc', q:'Tỉ lệ câu hợp lý trong bài IELTS Writing là:', opts:['100% câu đơn','100% câu phức','Trộn xen kẽ, khoảng 60% phức','Càng dài càng tốt'], a:2, ex:'Trộn xen kẽ để vừa đa dạng vừa dễ đọc.'},
    {type:'mc', q:'Muốn dùng mệnh đề sau “despite”, phải thêm:', opts:['that','the fact that','which','because'], a:1, ex:'*Despite **the fact that** it rained…* ✔'}
  ]
},

'ie-10': {
  id:'ie-10', track:'ielts', phase:'P1', no:10,
  title:'Từ vựng lõi — Bản thân, gia đình, nhà cửa',
  subtitle:'Chủ đề chắc chắn xuất hiện ở Speaking Part 1 — học kỹ một lần dùng mãi.',
  goals:[
    'Nắm 16 từ lõi và cách dùng trong câu trả lời thật',
    'Học từ theo cụm (collocation) thay vì từ rời',
    'Áp dụng phương pháp 15–20 từ mỗi ngày'
  ],
  vocab:[
    {w:'extended family', ipa:'/ɪkˈstendɪd ˈfæməli/', pos:'n', vi:'gia đình nhiều thế hệ', ex:'I live with my extended family.', exvi:'Tôi sống cùng đại gia đình.'},
    {w:'nuclear family', ipa:'/ˈnjuːkliə ˈfæməli/', pos:'n', vi:'gia đình hạt nhân', ex:'We are a nuclear family of four.', exvi:'Nhà tôi là gia đình hạt nhân bốn người.'},
    {w:'take after', ipa:'/teɪk ˈɑːftə/', pos:'phr v', vi:'giống (người thân)', ex:'I take after my mother.', exvi:'Tôi giống mẹ.'},
    {w:'get along with', ipa:'/ɡet əˈlɒŋ wɪð/', pos:'phr v', vi:'hoà hợp với', ex:'I get along well with my siblings.', exvi:'Tôi hợp với anh chị em.'},
    {w:'bring up', ipa:'/brɪŋ ʌp/', pos:'phr v', vi:'nuôi dạy', ex:'I was brought up in the countryside.', exvi:'Tôi lớn lên ở quê.'},
    {w:'close-knit', ipa:'/kləʊs nɪt/', pos:'adj', vi:'gắn bó khăng khít', ex:'We are a close-knit family.', exvi:'Nhà tôi rất gắn bó.'},
    {w:'sibling', ipa:'/ˈsɪblɪŋ/', pos:'n', vi:'anh chị em ruột', ex:'I have two siblings.', exvi:'Tôi có hai anh chị em.'},
    {w:'household chores', ipa:'/ˈhaʊshəʊld tʃɔːz/', pos:'n', vi:'việc nhà', ex:'We share the household chores.', exvi:'Chúng tôi chia nhau việc nhà.'},
    {w:'spacious', ipa:'/ˈspeɪʃəs/', pos:'adj', vi:'rộng rãi', ex:'The living room is spacious.', exvi:'Phòng khách rộng rãi.'},
    {w:'cosy', ipa:'/ˈkəʊzi/', pos:'adj', vi:'ấm cúng', ex:'My bedroom is small but cosy.', exvi:'Phòng tôi nhỏ nhưng ấm cúng.'},
    {w:'well-equipped', ipa:'/wel ɪˈkwɪpt/', pos:'adj', vi:'đầy đủ tiện nghi', ex:'A well-equipped kitchen.', exvi:'Bếp đầy đủ tiện nghi.'},
    {w:'neighbourhood', ipa:'/ˈneɪbəhʊd/', pos:'n', vi:'khu dân cư', ex:'It is a quiet neighbourhood.', exvi:'Đó là khu yên tĩnh.'},
    {w:'move house', ipa:'/muːv haʊs/', pos:'phr', vi:'chuyển nhà', ex:'We moved house last year.', exvi:'Năm ngoái chúng tôi chuyển nhà.'},
    {w:'rent', ipa:'/rent/', pos:'v/n', vi:'thuê; tiền thuê', ex:'I rent a small flat.', exvi:'Tôi thuê một căn hộ nhỏ.'},
    {w:'upbringing', ipa:'/ˈʌpbrɪŋɪŋ/', pos:'n', vi:'sự dạy dỗ, nuôi nấng', ex:'I had a strict upbringing.', exvi:'Tôi được dạy dỗ nghiêm khắc.'},
    {w:'run in the family', ipa:'/rʌn ɪn ðə ˈfæməli/', pos:'phr', vi:'di truyền trong nhà', ex:'Musical talent runs in the family.', exvi:'Nhà tôi có gen âm nhạc.'}
  ],
  grammar:[
    {
      t:'1. Phương pháp học 15–20 từ mỗi ngày',
      table:[
        ['Bước','Việc làm','Thời gian'],
        ['1','Chọn 15–20 từ **cùng một chủ đề** (không lấy từ rời rạc)','2 phút'],
        ['2','Ghi: từ – IPA – nghĩa – **1 câu ví dụ của chính bạn**','8 phút'],
        ['3','Đọc to mỗi từ 3 lần, chú ý trọng âm','5 phút'],
        ['4','Che nghĩa, tự kiểm tra ngược xuôi','3 phút'],
        ['5','Buổi tối: ôn flashcard 20 thẻ cũ + 20 thẻ mới','10 phút']
      ],
      notes:[
        {type:'warn', text:'**Không học từ rời.** Học *decision* một mình gần như vô dụng; học **make a decision** thì dùng được ngay.'},
        {type:'tip', text:'Lịch ôn ngắt quãng: ôn lại sau **1 – 3 – 7 – 14 – 30 ngày**. Dùng mục Flashcard trên web để làm việc này.'}
      ]
    },
    {
      t:'2. Collocation chủ đề gia đình & nhà cửa',
      table:[
        ['Cụm','Nghĩa'],
        ['a close-knit family','gia đình gắn bó'],
        ['to be brought up in…','được nuôi lớn ở…'],
        ['to take after someone','giống ai đó'],
        ['to get along with someone','hoà hợp với ai'],
        ['to share household chores','chia sẻ việc nhà'],
        ['to run in the family','di truyền trong gia đình'],
        ['a spacious / cosy room','phòng rộng rãi / ấm cúng'],
        ['a quiet neighbourhood','khu dân cư yên tĩnh'],
        ['within walking distance of…','cách… vài bước chân'],
        ['to move house','chuyển nhà']
      ]
    },
    {
      t:'3. Áp dụng vào Speaking Part 1',
      formula:'CÂU HỎI: Do you live in a house or a flat?\n\nCỤT (band 4–5):\n  I live in a house. It is big.\n\nHAY (band 6.5–7):\n  I live in a **fairly spacious** house **on the outskirts of** Hanoi\n  **with my extended family**. What I like most about it is that\n  it is **within walking distance of** a park, **which** makes\n  morning runs really convenient.\n\nCÔNG THỨC: câu trả lời + chi tiết cụ thể + lý do/cảm nhận',
      ex:[
        ['**Q:** Tell me about your family. — **A:** We are quite a **close-knit family** of four. I **take after** my mother in terms of personality, and I **get along really well with** my younger sister.','Mẫu trả lời có collocation, tự nhiên và đủ dài.']
      ]
    },
    {
      t:'4. Sổ từ vựng nên ghi thế nào',
      formula:'MẪU GHI CHÉP — mỗi từ 4 dòng:\n\n  take after (phr v)  /teɪk ˈɑːftə/\n  = giống ai đó về ngoại hình hoặc tính cách\n  I **take after** my mother — we are both very stubborn.\n  ≠ look after (chăm sóc)\n\nDòng cuối rất quan trọng: ghi từ DỄ NHẦM để tách bạch ngay từ đầu.',
      notes:[{type:'tip', text:'Mỗi tuần dành 30 phút đọc lại sổ từ và **gạch bỏ** những từ đã thuộc chắc, để lần sau chỉ ôn phần còn lại.'}]
    }
  ],
  phrases:[
    ['We are quite a close-knit family.','Nhà tôi khá gắn bó.'],
    ['I take after my father in many ways.','Tôi giống bố ở nhiều điểm.'],
    ['I was brought up in the countryside.','Tôi lớn lên ở quê.'],
    ['I get along really well with my sister.','Tôi rất hợp với chị gái.'],
    ['We share the household chores.','Chúng tôi chia nhau việc nhà.'],
    ['My flat is small but very cosy.','Căn hộ tôi nhỏ nhưng ấm cúng.'],
    ['It is within walking distance of the market.','Nó cách chợ vài bước chân.'],
    ['I live on the outskirts of the city.','Tôi sống ở ngoại ô thành phố.'],
    ['We moved house about three years ago.','Chúng tôi chuyển nhà khoảng ba năm trước.'],
    ['Musical talent runs in my family.','Nhà tôi có gen âm nhạc.']
  ],
  exercises:[
    {type:'mc', q:'“I ___ my mother — we look very similar.”', opts:['look after','take after','get along','bring up'], a:1, ex:'**take after** = giống ai đó.'},
    {type:'mc', q:'“We are a ___ family” nghĩa là gia đình gắn bó:', opts:['close-knit','well-equipped','spacious','extended'], a:0, ex:'**close-knit** = khăng khít.'},
    {type:'mc', q:'Từ nào mô tả phòng nhỏ nhưng dễ chịu?', opts:['spacious','cosy','crowded','bare'], a:1, ex:'**cosy** = nhỏ mà ấm cúng.'},
    {type:'mc', q:'“within walking distance of” nghĩa là:', opts:['rất xa','đi bộ tới được','phải đi xe','ngay trong nhà'], a:1, ex:'Cách đó một quãng đi bộ.'},
    {type:'mc', q:'Cách học từ vựng hiệu quả nhất là:', opts:['Học từ rời theo bảng chữ cái','Học theo cụm và theo chủ đề','Chép lại 50 lần','Chỉ đọc không viết'], a:1, ex:'Học **collocation theo chủ đề** để dùng được ngay.'},
    {type:'fill', q:'Điền phrasal verb: I ___ ___ well with my colleagues. (2 từ, nghĩa “hoà hợp”)', a:['get along','get on'], ex:'**get along / get on with**.'},
    {type:'fill', q:'Điền: I was ___ ___ in a small village. (2 từ, nghĩa “được nuôi lớn”)', a:['brought up'], ex:'**brought up**.'},
    {type:'fill', q:'Anh chị em ruột, tiếng Anh là gì? (1 từ)', a:['sibling','siblings'], ex:'**sibling(s)**.'},
    {type:'fill', q:'Việc nhà, tiếng Anh là ___ chores. (1 từ)', a:['household'], ex:'**household chores**.'},
    {type:'mc', q:'Lịch ôn ngắt quãng chuẩn là:', opts:['mỗi ngày một lần mãi mãi','1–3–7–14–30 ngày','chỉ ôn trước kỳ thi','mỗi tháng một lần'], a:1, ex:'Theo đường cong quên Ebbinghaus.'}
  ]
},

'ie-11': {
  id:'ie-11', track:'ielts', phase:'P1', no:11,
  title:'Từ vựng lõi — Công việc & học tập',
  subtitle:'Chủ đề số một trong Speaking Part 1 và hay gặp ở Task 2.',
  goals:[
    'Nắm 16 từ và collocation về công việc, học tập',
    'Trả lời được câu hỏi nghề nghiệp một cách tự nhiên',
    'Biết cách nâng cấp từ thường lên từ học thuật'
  ],
  vocab:[
    {w:'career path', ipa:'/kəˈrɪə pɑːθ/', pos:'n', vi:'con đường sự nghiệp', ex:'I chose this career path early.', exvi:'Tôi chọn hướng nghề này từ sớm.'},
    {w:'work–life balance', ipa:'/wɜːk laɪf ˈbæləns/', pos:'n', vi:'cân bằng công việc – cuộc sống', ex:'I value work–life balance.', exvi:'Tôi coi trọng cân bằng công việc và cuộc sống.'},
    {w:'demanding', ipa:'/dɪˈmɑːndɪŋ/', pos:'adj', vi:'đòi hỏi cao, vất vả', ex:'My job is quite demanding.', exvi:'Công việc của tôi khá vất vả.'},
    {w:'rewarding', ipa:'/rɪˈwɔːdɪŋ/', pos:'adj', vi:'đáng công, mang lại thoả mãn', ex:'Teaching is very rewarding.', exvi:'Dạy học rất đáng công.'},
    {w:'colleague', ipa:'/ˈkɒliːɡ/', pos:'n', vi:'đồng nghiệp', ex:'My colleagues are supportive.', exvi:'Đồng nghiệp tôi rất hỗ trợ.'},
    {w:'deadline', ipa:'/ˈdedlaɪn/', pos:'n', vi:'hạn chót', ex:'We have to meet tight deadlines.', exvi:'Chúng tôi phải kịp hạn chót gấp.'},
    {w:'workload', ipa:'/ˈwɜːkləʊd/', pos:'n', vi:'khối lượng công việc', ex:'My workload is heavy.', exvi:'Khối lượng công việc của tôi nặng.'},
    {w:'promotion', ipa:'/prəˈməʊʃn/', pos:'n', vi:'sự thăng chức', ex:'She got a promotion.', exvi:'Cô ấy được thăng chức.'},
    {w:'apply for', ipa:'/əˈplaɪ fɔː/', pos:'v', vi:'nộp đơn xin', ex:'I applied for three jobs.', exvi:'Tôi nộp đơn ba nơi.'},
    {w:'major in', ipa:'/ˈmeɪdʒər ɪn/', pos:'v', vi:'học chuyên ngành', ex:'I majored in economics.', exvi:'Tôi học chuyên ngành kinh tế.'},
    {w:'assignment', ipa:'/əˈsaɪnmənt/', pos:'n', vi:'bài tập lớn', ex:'I have an assignment due Friday.', exvi:'Tôi có bài nộp thứ Sáu.'},
    {w:'lecture', ipa:'/ˈlektʃə(r)/', pos:'n', vi:'bài giảng', ex:'The lecture was fascinating.', exvi:'Bài giảng rất hấp dẫn.'},
    {w:'keep up with', ipa:'/kiːp ʌp wɪð/', pos:'phr v', vi:'theo kịp', ex:'It is hard to keep up with the course.', exvi:'Khó theo kịp khoá học.'},
    {w:'hands-on experience', ipa:'/hændz ɒn/', pos:'n', vi:'kinh nghiệm thực tế', ex:'I gained hands-on experience.', exvi:'Tôi có kinh nghiệm thực tế.'},
    {w:'transferable skills', ipa:'/trænsˈfɜːrəbl/', pos:'n', vi:'kỹ năng dùng được ở nhiều nghề', ex:'Communication is a transferable skill.', exvi:'Giao tiếp là kỹ năng linh hoạt.'},
    {w:'further study', ipa:'/ˈfɜːðə ˈstʌdi/', pos:'n', vi:'học lên cao', ex:'I am considering further study.', exvi:'Tôi đang tính học lên.'}
  ],
  grammar:[
    {
      t:'1. Collocation về công việc',
      table:[
        ['Cụm','Nghĩa'],
        ['to pursue a career in…','theo đuổi sự nghiệp trong ngành…'],
        ['to meet a deadline','kịp hạn chót'],
        ['to handle a heavy workload','xử lý khối lượng việc lớn'],
        ['to work under pressure','làm việc dưới áp lực'],
        ['to gain hands-on experience','tích luỹ kinh nghiệm thực tế'],
        ['to climb the career ladder','thăng tiến trong nghề'],
        ['to strike a work–life balance','tạo được cân bằng công việc – cuộc sống'],
        ['a nine-to-five job','công việc hành chính'],
        ['job satisfaction','sự hài lòng với công việc'],
        ['career prospects','triển vọng nghề nghiệp']
      ]
    },
    {
      t:'2. Collocation về học tập',
      table:[
        ['Cụm','Nghĩa'],
        ['to major in / to specialise in','học chuyên ngành'],
        ['to keep up with the coursework','theo kịp chương trình'],
        ['to meet the requirements','đáp ứng yêu cầu'],
        ['to hand in an assignment','nộp bài'],
        ['to attend lectures','dự giảng'],
        ['to take notes','ghi chép'],
        ['to sit an exam','dự thi'],
        ['to pass with flying colours','đỗ xuất sắc'],
        ['a heavy academic workload','khối lượng học tập nặng'],
        ['to pursue further study','học lên cao']
      ]
    },
    {
      t:'3. Nâng cấp từ thường lên từ học thuật',
      table:[
        ['Từ thường (band 5)','Từ nâng cấp (band 7)'],
        ['a good job','a **rewarding / well-paid** job'],
        ['a hard job','a **demanding / challenging** job'],
        ['a lot of work','a **heavy workload**'],
        ['get a better job','**climb the career ladder**'],
        ['learn by doing','gain **hands-on experience**'],
        ['important skills','**essential / transferable** skills'],
        ['study more','pursue **further study**'],
        ['finish on time','**meet the deadline**']
      ],
      notes:[{type:'warn', text:'Đừng nhồi từ khó không đúng ngữ cảnh. Tiêu chí Lexical Resource chấm cả **độ chính xác**, dùng sai còn bị trừ nhiều hơn dùng từ đơn giản mà đúng.'}]
    },
    {
      t:'4. Áp dụng vào Speaking Part 1 — câu hỏi nghề nghiệp',
      formula:'Q: Do you work or are you a student?\n\nCỤT (band 4–5):\n  I am a student. I study economics.\n\nHAY (band 6.5–7):\n  I am currently a final-year student **majoring in** economics\n  at Hanoi University. The **workload** is fairly **demanding**,\n  especially around exam season, but I find the subject\n  genuinely **rewarding** because it helps me make sense of\n  what is happening in the real economy.\n\nQ: What do you like about your job?\n  What I enjoy most is that it is quite **varied** — no two days\n  are the same, **which** keeps me motivated. That said, **meeting\n  tight deadlines** can be stressful at times.',
      notes:[{type:'tip', text:'Công thức an toàn cho Part 1: **trả lời thẳng → chi tiết cụ thể → mặt trái nhẹ**. Có mặt trái thì câu trả lời nghe thật hơn hẳn.'}]
    }
  ],
  phrases:[
    ['I am currently working as a marketing executive.','Hiện tôi làm chuyên viên marketing.'],
    ['I am a final-year student majoring in economics.','Tôi là sinh viên năm cuối ngành kinh tế.'],
    ['My job is demanding but rewarding.','Công việc vất vả nhưng đáng công.'],
    ['I have to work under a lot of pressure.','Tôi phải làm việc dưới nhiều áp lực.'],
    ['It is hard to keep up with the coursework.','Khó theo kịp chương trình học.'],
    ['I would like to climb the career ladder.','Tôi muốn thăng tiến trong nghề.'],
    ['Work–life balance matters a lot to me.','Cân bằng công việc – cuộc sống rất quan trọng với tôi.'],
    ['I gained hands-on experience during my internship.','Tôi có kinh nghiệm thực tế trong kỳ thực tập.'],
    ['I am considering further study abroad.','Tôi đang tính học lên ở nước ngoài.'],
    ['No two days are the same, which keeps me motivated.','Không ngày nào giống ngày nào, nên tôi luôn có động lực.']
  ],
  exercises:[
    {type:'mc', q:'“My job is ___” nghĩa là công việc đòi hỏi cao:', opts:['rewarding','demanding','relaxing','boring'], a:1, ex:'**demanding** = đòi hỏi nhiều, vất vả.'},
    {type:'mc', q:'“to meet a deadline” nghĩa là:', opts:['gặp hạn chót','kịp hạn chót','lỡ hạn chót','đặt hạn chót'], a:1, ex:'**meet a deadline** = hoàn thành đúng hạn.'},
    {type:'mc', q:'Cách nói nâng cấp của “a lot of work” là:', opts:['many works','a heavy workload','much work','big work'], a:1, ex:'*work* không đếm được → **a heavy workload**.'},
    {type:'mc', q:'“I ___ in economics” (học chuyên ngành):', opts:['majored','specialized to','studied in','learned'], a:0, ex:'**major in** + ngành.'},
    {type:'mc', q:'“transferable skills” nghĩa là:', opts:['kỹ năng chuyển giao dữ liệu','kỹ năng dùng được ở nhiều nghề','kỹ năng chuyển việc','kỹ năng dịch thuật'], a:1, ex:'Kỹ năng mang theo được sang nghề khác.'},
    {type:'fill', q:'Điền: It is difficult to ___ ___ ___ the coursework. (3 từ, nghĩa “theo kịp”)', a:['keep up with'], ex:'**keep up with**.'},
    {type:'fill', q:'Điền: I gained ___ experience during my internship. (nghĩa “thực tế”, viết có gạch nối)', a:['hands-on'], ex:'**hands-on experience**.'},
    {type:'fill', q:'Điền: I want to strike a better work–life ___ . (1 từ)', a:['balance'], ex:'**work–life balance**.'},
    {type:'mc', q:'Công thức trả lời an toàn cho Speaking Part 1 là:', opts:['Trả lời một từ','Trả lời thẳng → chi tiết → mặt trái nhẹ','Nói càng lâu càng tốt','Học thuộc lòng đoạn văn'], a:1, ex:'Có chi tiết và mặt trái thì câu trả lời tự nhiên hơn.'},
    {type:'mc', q:'Vì sao không nên nhồi từ khó vào bài?', opts:['Vì mất thời gian','Vì dùng sai ngữ cảnh bị trừ điểm','Vì giám khảo không hiểu','Vì không được phép'], a:1, ex:'Lexical Resource chấm cả **độ chính xác**, không chỉ độ khó.'}
  ]
},

'ie-12': {
  id:'ie-12', track:'ielts', phase:'P1', no:12,
  title:'Làm quen thụ động — tạo môi trường tiếng Anh',
  subtitle:'Buổi khép giai đoạn 1: xây thói quen nghe mỗi ngày để chuẩn bị vào 4 kỹ năng.',
  goals:[
    'Chọn đúng nguồn nghe theo trình độ',
    'Phân biệt nghe thụ động và nghe chủ động',
    'Có lịch nghe 30 ngày cụ thể để bước sang giai đoạn 2'
  ],
  vocab:[
    {w:'immerse yourself in', ipa:'/ɪˈmɜːs/', pos:'v', vi:'đắm mình vào', ex:'Immerse yourself in English daily.', exvi:'Hãy đắm mình trong tiếng Anh mỗi ngày.'},
    {w:'exposure', ipa:'/ɪkˈspəʊʒə(r)/', pos:'n', vi:'sự tiếp xúc (với ngôn ngữ)', ex:'You need daily exposure.', exvi:'Bạn cần tiếp xúc hằng ngày.'},
    {w:'transcript', ipa:'/ˈtrænskrɪpt/', pos:'n', vi:'bản chép lời', ex:'Check the transcript afterwards.', exvi:'Xem transcript sau khi nghe.'},
    {w:'subtitles', ipa:'/ˈsʌbtaɪtlz/', pos:'n', vi:'phụ đề', ex:'Watch without subtitles first.', exvi:'Xem không phụ đề trước.'},
    {w:'gist', ipa:'/dʒɪst/', pos:'n', vi:'ý chính', ex:'Listen for the gist.', exvi:'Nghe lấy ý chính.'},
    {w:'accent', ipa:'/ˈæksent/', pos:'n', vi:'giọng vùng miền', ex:'Get used to different accents.', exvi:'Làm quen với nhiều giọng.'},
    {w:'pace', ipa:'/peɪs/', pos:'n', vi:'tốc độ nói', ex:'The pace is quite fast.', exvi:'Tốc độ khá nhanh.'},
    {w:'consistency', ipa:'/kənˈsɪstənsi/', pos:'n', vi:'sự đều đặn', ex:'Consistency beats intensity.', exvi:'Đều đặn thắng dồn dập.'},
    {w:'habit', ipa:'/ˈhæbɪt/', pos:'n', vi:'thói quen', ex:'Build a listening habit.', exvi:'Xây thói quen nghe.'},
    {w:'motivation', ipa:'/ˌməʊtɪˈveɪʃn/', pos:'n', vi:'động lực', ex:'Track progress to keep motivation.', exvi:'Theo dõi tiến độ để giữ động lực.'},
    {w:'overwhelmed', ipa:'/ˌəʊvəˈwelmd/', pos:'adj', vi:'quá tải, ngộp', ex:'Do not get overwhelmed.', exvi:'Đừng để bị ngộp.'},
    {w:'bite-sized', ipa:'/baɪt saɪzd/', pos:'adj', vi:'nhỏ gọn, vừa sức', ex:'Bite-sized lessons work best.', exvi:'Bài ngắn dễ tiếp thu nhất.'},
    {w:'stick with it', ipa:'/stɪk wɪð ɪt/', pos:'phr', vi:'kiên trì với nó', ex:'Just stick with it.', exvi:'Cứ kiên trì đi.'},
    {w:'plateau', ipa:'/ˈplætəʊ/', pos:'n', vi:'giai đoạn chững', ex:'Everyone hits a plateau.', exvi:'Ai cũng có lúc chững lại.'},
    {w:'benchmark', ipa:'/ˈbentʃmɑːk/', pos:'n', vi:'mốc đối chiếu', ex:'Set a monthly benchmark.', exvi:'Đặt mốc đối chiếu hằng tháng.'},
    {w:'authentic material', ipa:'/ɔːˈθentɪk/', pos:'n', vi:'tài liệu thật (không chỉnh sửa)', ex:'Move on to authentic material.', exvi:'Chuyển sang tài liệu thật.'}
  ],
  grammar:[
    {
      t:'1. Nghe thụ động vs nghe chủ động',
      table:[
        ['','NGHE THỤ ĐỘNG','NGHE CHỦ ĐỘNG'],
        ['Mục đích','làm quen âm, nhịp, ngữ điệu','hiểu chi tiết, nhặt từ mới'],
        ['Cách làm','bật nền khi nấu ăn, đi đường, dọn nhà','ngồi tập trung, có giấy bút, dừng lại tra từ'],
        ['Thời lượng','30–60 phút/ngày','15–20 phút/ngày'],
        ['Yêu cầu hiểu','không cần hiểu hết','cố hiểu càng nhiều càng tốt'],
        ['Tác dụng','quen tốc độ, bớt sợ','tăng vốn từ, luyện nghe chi tiết']
      ],
      notes:[
        {type:'warn', text:'Chỉ nghe thụ động thì tiến bộ rất chậm. Phải có **cả hai**: thụ động để quen tai, chủ động để thực sự tiến bộ.'}
      ]
    },
    {
      t:'2. Chọn nguồn nghe theo trình độ',
      table:[
        ['Trình độ','Nên nghe','Đặc điểm cần có'],
        ['**Mới bắt đầu**','Bài học phát âm, hội thoại chậm có transcript','nói chậm, rõ, có phụ đề tiếng Anh'],
        ['**Sơ cấp**','Podcast học tiếng Anh cho người mới, video 3–5 phút','chủ đề đời thường, từ vựng lặp lại nhiều'],
        ['**Trung cấp**','Tin ngắn, podcast học thuật cấp độ nhập môn','tốc độ gần tự nhiên, có transcript đối chiếu'],
        ['**Sẵn sàng thi**','Bài nghe IELTS thật, phỏng vấn, bài giảng','nhiều giọng, tốc độ tự nhiên, không phụ đề']
      ],
      formula:'QUY TẮC CHỌN BÀI — “i + 1”\nChọn bài mà bạn hiểu được khoảng **70–80%**.\n  Hiểu dưới 50% → quá khó, bỏ cuộc sớm, không học được gì\n  Hiểu trên 95% → quá dễ, không tiến bộ\n\nBẮT BUỘC: bài nghe phải **có transcript** để đối chiếu.'
    },
    {
      t:'3. Quy trình nghe chủ động 5 bước',
      formula:'① Nghe lần 1 — KHÔNG phụ đề, chỉ nắm ý chính (gist)\n② Nghe lần 2–3 — ghi lại từ khoá, số liệu, tên riêng\n③ Nghe lần 4 — dừng từng câu, chép chính tả đoạn khó\n④ Đọc transcript — khoanh chỗ nghe sai, phân loại lỗi:\n     · không biết từ       → ghi vào sổ từ\n     · biết từ không nhận ra → lỗi nối/nuốt âm, nghe lại đoạn đó 5 lần\n⑤ Shadowing — nói đuổi theo cả đoạn, bắt chước ngữ điệu\n\nTổng: 15–20 phút cho một đoạn 1–2 phút.',
      notes:[{type:'tip', text:'Bước ④ là bước tạo ra tiến bộ. Nghe 10 bài mà không phân tích lỗi thua xa nghe 1 bài mà mổ xẻ kỹ.'}]
    },
    {
      t:'4. Lịch 30 ngày khép giai đoạn 1',
      table:[
        ['Tuần','Nghe thụ động','Nghe chủ động','Mục tiêu'],
        ['Tuần 1','30 phút/ngày, bài rất chậm','1 đoạn 30 giây/ngày','quen tai, không sợ tiếng Anh'],
        ['Tuần 2','40 phút/ngày','1 đoạn 45 giây/ngày','bắt được từ khoá'],
        ['Tuần 3','45 phút/ngày, thêm giọng khác','1 đoạn 1 phút/ngày','chép đúng 70% nội dung'],
        ['Tuần 4','60 phút/ngày, tốc độ tự nhiên','1 đoạn 1–2 phút/ngày','chép đúng 85%, sẵn sàng vào Listening IELTS']
      ],
      formula:'CÁCH CHÈN TIẾNG ANH VÀO NGÀY BÌNH THƯỜNG\n  Sáng, khi vệ sinh cá nhân   → podcast nền, 15 phút\n  Trên đường đi làm/đi học    → nghe lại đoạn hôm qua, 20 phút\n  Giờ nghỉ trưa               → 1 video ngắn có phụ đề, 10 phút\n  Tối, trước khi học bài      → nghe chủ động + chép chính tả, 20 phút\n  Trước khi ngủ               → shadowing đoạn quen thuộc, 10 phút',
      notes:[
        {type:'tip', text:'Hết 30 ngày này là kết thúc Giai đoạn 1. Sang **Buổi 13** bạn bắt đầu luyện đúng dạng bài Listening của IELTS.'}
      ]
    }
  ],
  phrases:[
    ['I listen to English every single day.','Ngày nào tôi cũng nghe tiếng Anh.'],
    ['I try to immerse myself in the language.','Tôi cố đắm mình trong ngôn ngữ đó.'],
    ['Listen for the gist first.','Trước hết cứ nghe lấy ý chính.'],
    ['I could not catch that word.','Tôi không nghe ra từ đó.'],
    ['Let me check the transcript.','Để tôi xem lại transcript.'],
    ['Watch it without subtitles first.','Xem không phụ đề trước đã.'],
    ['The pace is a bit fast for me.','Tốc độ hơi nhanh với tôi.'],
    ['I need to get used to different accents.','Tôi cần quen với các giọng khác nhau.'],
    ['Consistency matters more than intensity.','Đều đặn quan trọng hơn dồn dập.'],
    ['Everyone hits a plateau at some point.','Ai cũng có lúc chững lại.'],
    ['Just stick with it and you will improve.','Cứ kiên trì rồi sẽ khá lên.']
  ],
  exercises:[
    {type:'mc', q:'Nghe thụ động có tác dụng chính là:', opts:['Học từ mới nhanh','Quen tốc độ và ngữ điệu','Luyện viết','Nhớ ngữ pháp'], a:1, ex:'Nghe thụ động giúp **quen tai**, không thay được nghe chủ động.'},
    {type:'mc', q:'Theo quy tắc “i + 1”, nên chọn bài nghe mà bạn hiểu khoảng:', opts:['30–40%','50–60%','70–80%','95–100%'], a:2, ex:'**70–80%** là vùng vừa sức để tiến bộ.'},
    {type:'mc', q:'Bước tạo ra tiến bộ nhiều nhất khi nghe chủ động là:', opts:['Nghe thật nhiều lần','Đối chiếu transcript và phân loại lỗi','Bật phụ đề ngay từ đầu','Nghe bài thật dài'], a:1, ex:'Phân loại lỗi mới biết cần sửa gì.'},
    {type:'mc', q:'Bài nghe dùng để nghe chủ động BẮT BUỘC phải có:', opts:['phụ đề tiếng Việt','transcript','nhạc nền','giọng Anh-Anh'], a:1, ex:'Không có **transcript** thì không đối chiếu được lỗi.'},
    {type:'mc', q:'“gist” nghĩa là:', opts:['chi tiết','ý chính','từ mới','giọng nói'], a:1, ex:'*listen for the gist* = nghe lấy ý chính.'},
    {type:'fill', q:'Kỹ thuật nghe và nói đuổi theo cùng lúc gọi là ___ (1 từ tiếng Anh)', a:['shadowing'], ex:'**Shadowing**.'},
    {type:'fill', q:'Bản chép lời của bài nghe gọi là gì? (1 từ tiếng Anh)', a:['transcript'], ex:'**Transcript**.'},
    {type:'fill', q:'Điền: Consistency ___ intensity. (1 từ, nghĩa “thắng, hơn”)', a:['beats'], ex:'**beats** = quan trọng hơn.'},
    {type:'mc', q:'Giai đoạn chững lại, không thấy tiến bộ gọi là:', opts:['plateau','benchmark','exposure','gist'], a:0, ex:'**plateau** — ai học ngoại ngữ cũng gặp.'},
    {type:'mc', q:'Sau khi hoàn thành Buổi 12, bước tiếp theo là:', opts:['Học lại từ Buổi 1','Sang Giai đoạn 2 luyện 4 kỹ năng','Đi thi luôn','Nghỉ 1 tháng'], a:1, ex:'Kết thúc nền tảng → vào **Giai đoạn 2** từ Buổi 13.'}
  ]
}

});
/* ===== GIAI ĐOẠN 2 — Buổi 13–18 ===== */
Object.assign(window.IELTS_TRACK.lessons, {

'ie-13': {
  id:'ie-13', track:'ielts', phase:'P2', no:13,
  title:'Listening 1 — Cấu trúc bài thi & chép chính tả',
  subtitle:'Vào giai đoạn 2: làm quen 4 phần của bài nghe và xây kỹ năng lõi.',
  goals:[
    'Nắm cấu trúc 4 phần bài nghe IELTS',
    'Thành thạo quy trình chép chính tả 5 bước',
    'Biết cách đọc trước câu hỏi và đoán dạng đáp án'
  ],
  vocab:[
    {w:'enrol', ipa:'/ɪnˈrəʊl/', pos:'v', vi:'ghi danh, đăng ký', ex:'I want to enrol on the course.', exvi:'Tôi muốn đăng ký khoá học.'},
    {w:'membership', ipa:'/ˈmembəʃɪp/', pos:'n', vi:'tư cách hội viên', ex:'An annual membership.', exvi:'Hội viên theo năm.'},
    {w:'deposit', ipa:'/dɪˈpɒzɪt/', pos:'n', vi:'tiền đặt cọc', ex:'A deposit of fifty pounds.', exvi:'Đặt cọc 50 bảng.'},
    {w:'refund', ipa:'/ˈriːfʌnd/', pos:'n', vi:'tiền hoàn lại', ex:'You can get a full refund.', exvi:'Bạn được hoàn tiền đầy đủ.'},
    {w:'venue', ipa:'/ˈvenjuː/', pos:'n', vi:'địa điểm tổ chức', ex:'The venue has changed.', exvi:'Địa điểm đã đổi.'},
    {w:'facility', ipa:'/fəˈsɪləti/', pos:'n', vi:'cơ sở vật chất', ex:'The sports facilities are new.', exvi:'Cơ sở thể thao mới.'},
    {w:'available', ipa:'/əˈveɪləbl/', pos:'adj', vi:'có sẵn, còn trống', ex:'No rooms are available.', exvi:'Không còn phòng trống.'},
    {w:'brochure', ipa:'/ˈbrəʊʃə(r)/', pos:'n', vi:'tờ rơi giới thiệu', ex:'Take a brochure.', exvi:'Lấy một tờ giới thiệu.'},
    {w:'timetable', ipa:'/ˈtaɪmteɪbl/', pos:'n', vi:'thời khoá biểu', ex:'Check the timetable.', exvi:'Xem thời khoá biểu.'},
    {w:'assignment', ipa:'/əˈsaɪnmənt/', pos:'n', vi:'bài tập lớn', ex:'Hand in your assignment.', exvi:'Nộp bài tập.'},
    {w:'tutorial', ipa:'/tjuːˈtɔːriəl/', pos:'n', vi:'buổi hướng dẫn nhóm nhỏ', ex:'We have a tutorial on Friday.', exvi:'Thứ Sáu có buổi hướng dẫn.'},
    {w:'reference', ipa:'/ˈrefrəns/', pos:'n', vi:'tài liệu tham khảo', ex:'Add your references.', exvi:'Thêm phần tài liệu tham khảo.'},
    {w:'canteen', ipa:'/kænˈtiːn/', pos:'n', vi:'căng tin', ex:'The canteen closes at six.', exvi:'Căng tin đóng lúc 6 giờ.'},
    {w:'notice board', ipa:'/ˈnəʊtɪs bɔːd/', pos:'n', vi:'bảng thông báo', ex:'Check the notice board.', exvi:'Xem bảng thông báo.'}
  ],
  grammar:[
    {
      t:'1. Cấu trúc bài Listening IELTS',
      table:[
        ['Phần','Nội dung','Số câu','Độ khó'],
        ['**Part 1**','Hội thoại 2 người, tình huống đời thường (đặt phòng, đăng ký)','10','Dễ nhất — nhiều số, tên, địa chỉ'],
        ['**Part 2**','Độc thoại đời thường (giới thiệu địa điểm, hướng dẫn)','10','Hay có bản đồ, sơ đồ'],
        ['**Part 3**','Hội thoại 2–4 người, chủ đề học thuật','10','Khó nhất về nội dung — phải theo ai nói gì'],
        ['**Part 4**','Bài giảng học thuật một người nói','10','Không nghỉ giữa chừng — phải bám sát']
      ],
      formula:'THỜI GIAN\n30 phút nghe (audio chỉ phát MỘT lần)\n+ 10 phút chép đáp án sang phiếu trả lời (chỉ bài thi giấy)\n\nĐIỂM\n40 câu → quy đổi band. Khoảng 23/40 ≈ band 6.0 ; 30/40 ≈ band 7.0'
    },
    {
      t:'2. Ba nguyên tắc sống còn',
      table:[
        ['Nguyên tắc','Giải thích'],
        ['**Đọc trước câu hỏi**','Tận dụng mọi khoảng nghỉ để đọc trước và gạch từ khoá. Không đọc trước = nghe mò.'],
        ['**Đoán trước dạng đáp án**','Nhìn chỗ trống đoán xem cần điền số, tên riêng, danh từ hay động từ. Có định hướng thì dễ bắt hơn nhiều.'],
        ['**Không dừng lại ở câu đã lỡ**','Lỡ một câu mà tiếc nuối là mất luôn 3 câu sau. Bỏ qua, bám tiếp.']
      ],
      formula:'VÍ DỤ ĐOÁN DẠNG ĐÁP ÁN\n  Name: ____________        → tên riêng, sẽ được ĐÁNH VẦN\n  Date of birth: __________ → ngày tháng\n  Cost: £__________        → số tiền\n  Address: ____ Green ____ → số nhà + Street/Road/Avenue\n  He works as a __________  → nghề nghiệp (danh từ chỉ người)'
    },
    {
      t:'3. Quy trình chép chính tả 5 bước (làm 15 phút mỗi ngày)',
      formula:'① Chọn đoạn 20–30 giây CÓ transcript\n② Nghe lần 1 — chỉ nắm ý chung, chưa viết\n③ Nghe lần 2–4 — viết từng chữ nghe được, để trống chỗ chưa rõ\n④ Nghe lần 5–6 — điền nốt chỗ trống, đoán theo ngữ cảnh\n⑤ Đối chiếu transcript — khoanh lỗi và PHÂN LOẠI:\n     · không biết từ đó           → ghi vào sổ từ vựng\n     · biết từ nhưng không nhận ra → lỗi nối/nuốt âm → nghe lại 5 lần đúng đoạn đó\n     · nghe ra nhưng viết sai      → lỗi chính tả → chép lại 3 lần',
      notes:[
        {type:'tip', text:'Chép chính tả là bài luyện có hiệu quả cao nhất cho Listening, vì nó ép bạn nghe **từng âm** chứ không đoán theo ngữ cảnh.'},
        {type:'warn', text:'Đừng chép bài quá dài. **30 giây mổ xẻ kỹ** hơn hẳn 5 phút nghe lướt.'}
      ]
    },
    {
      t:'4. Quy tắc viết đáp án — mất điểm oan ở đây rất nhiều',
      table:[
        ['Quy tắc','Ví dụ'],
        ['Đúng **số từ tối đa** quy định','“NO MORE THAN TWO WORDS” → viết 3 từ là **sai**, dù đúng nghĩa'],
        ['Số đếm là **một từ**','*twenty-five* = 1 từ ; *£50* = 1 từ'],
        ['**Chính tả phải đúng**','*acommodation* → sai, mất điểm'],
        ['Giữ đúng **dạng số ít/nhiều** nghe được','nghe *books* mà viết *book* → sai'],
        ['Viết **HOA toàn bộ** cho an toàn','tránh tranh cãi về chữ hoa đầu câu'],
        ['Tên riêng viết đúng như **được đánh vần**','nghe “S-M-I-T-H” → *SMITH*']
      ],
      notes:[{type:'warn', text:'Rất nhiều thí sinh nghe đúng nhưng **viết sai chính tả** hoặc **thừa từ** rồi mất điểm. Kiểm tra kỹ ở 10 phút cuối.'}]
    }
  ],
  phrases:[
    ['Could you spell that for me, please?','Bạn đánh vần giúp được không?'],
    ['Let me just write that down.','Để tôi ghi lại đã.'],
    ['Sorry, could you repeat the number?','Xin lỗi, nhắc lại số được không?'],
    ['Is that with a double L?','Có phải hai chữ L không?'],
    ['So that is fifty pounds in total.','Vậy tổng cộng là 50 bảng.'],
    ['I would like to enrol on the course.','Tôi muốn đăng ký khoá học.'],
    ['Do I need to pay a deposit?','Tôi có phải đặt cọc không?'],
    ['What time does it start?','Mấy giờ bắt đầu ạ?'],
    ['Where exactly is the venue?','Địa điểm chính xác ở đâu ạ?'],
    ['That is all the information I need.','Tôi cần chừng đó thông tin thôi.']
  ],
  exercises:[
    {type:'mc', q:'Bài Listening IELTS phát audio mấy lần?', opts:['1 lần','2 lần','3 lần','Tuỳ phần'], a:0, ex:'Chỉ phát **một lần** — nên phải đọc trước câu hỏi.'},
    {type:'mc', q:'Phần nào của bài nghe thường có bản đồ hoặc sơ đồ?', opts:['Part 1','Part 2','Part 3','Part 4'], a:1, ex:'**Part 2** — độc thoại đời thường, hay có map/plan.'},
    {type:'mc', q:'Phần nào khó nhất về nội dung?', opts:['Part 1','Part 2','Part 3','Part 4'], a:2, ex:'**Part 3** có nhiều người nói, phải theo dõi ai nói gì.'},
    {type:'mc', q:'Đề ghi “NO MORE THAN TWO WORDS”, bạn viết 3 từ đúng nghĩa thì:', opts:['Vẫn được điểm','Bị trừ nửa điểm','Sai hoàn toàn','Tuỳ giám khảo'], a:2, ex:'Vượt số từ quy định là **sai**, dù nội dung đúng.'},
    {type:'mc', q:'“twenty-five” được tính là mấy từ?', opts:['1 từ','2 từ','3 từ','không tính'], a:0, ex:'Số đếm có gạch nối tính là **1 từ**.'},
    {type:'fill', q:'Bản chép lời bài nghe gọi là gì? (1 từ tiếng Anh)', a:['transcript'], ex:'**Transcript** — bắt buộc phải có khi luyện.'},
    {type:'fill', q:'Trong Part 1, chỗ trống “Name: ______” thường yêu cầu điền gì? (2 từ tiếng Việt)', a:['tên riêng','ten rieng'], ex:'**Tên riêng** — và sẽ được đánh vần trong bài.'},
    {type:'fill', q:'Bài nghe có tổng cộng bao nhiêu câu? (viết số)', a:['40'], ex:'**40 câu**, mỗi phần 10 câu.'},
    {type:'mc', q:'Khi lỡ mất một câu, nên làm gì?', opts:['Dừng lại nghĩ cho ra','Bỏ qua và bám tiếp câu sau','Tua lại','Bỏ luôn cả phần đó'], a:1, ex:'Tiếc nuối một câu thường làm mất thêm 2–3 câu sau.'},
    {type:'mc', q:'Vì sao chép chính tả hiệu quả hơn nghe lướt?', opts:['Vì nhanh hơn','Vì ép nghe từng âm thay vì đoán','Vì dễ hơn','Vì không cần transcript'], a:1, ex:'Chép chính tả ép bạn nghe **chính xác từng âm**.'}
  ]
},

'ie-14': {
  id:'ie-14', track:'ielts', phase:'P2', no:14,
  title:'Listening 2 — Âm cuối, số, ngày tháng & đánh vần',
  subtitle:'Phần 1 bài nghe gần như chỉ xoay quanh những thứ này — và rất dễ ăn trọn điểm.',
  goals:[
    'Nghe chính xác số, ngày tháng, giá tiền',
    'Bắt được tên riêng khi được đánh vần',
    'Không mất điểm vì bỏ sót âm cuối số nhiều'
  ],
  vocab:[
    {w:'thirteen – thirty', ipa:'/ˌθɜːˈtiːn/ – /ˈθɜːti/', pos:'pair', vi:'13 – 30', ex:'Thirteen, not thirty.', exvi:'Mười ba, không phải ba mươi.'},
    {w:'fourteen – forty', ipa:'/ˌfɔːˈtiːn/ – /ˈfɔːti/', pos:'pair', vi:'14 – 40', ex:'Room fourteen.', exvi:'Phòng số 14.'},
    {w:'fifteen – fifty', ipa:'/ˌfɪfˈtiːn/ – /ˈfɪfti/', pos:'pair', vi:'15 – 50', ex:'Fifty pounds.', exvi:'Năm mươi bảng.'},
    {w:'a quarter past', ipa:'/ˈkwɔːtə pɑːst/', pos:'phr', vi:'hơn 15 phút', ex:'A quarter past seven.', exvi:'7 giờ 15.'},
    {w:'a quarter to', ipa:'/ˈkwɔːtə tə/', pos:'phr', vi:'kém 15 phút', ex:'A quarter to nine.', exvi:'9 giờ kém 15.'},
    {w:'fortnight', ipa:'/ˈfɔːtnaɪt/', pos:'n', vi:'hai tuần', ex:'In a fortnight.', exvi:'Trong hai tuần nữa.'},
    {w:'decade', ipa:'/ˈdekeɪd/', pos:'n', vi:'thập kỷ', ex:'Over the past decade.', exvi:'Trong thập kỷ qua.'},
    {w:'double', ipa:'/ˈdʌbl/', pos:'adj', vi:'gấp đôi; hai chữ giống nhau', ex:'Double L, double seven.', exvi:'Hai chữ L, hai số bảy.'},
    {w:'per cent', ipa:'/pə ˈsent/', pos:'n', vi:'phần trăm', ex:'Twenty per cent.', exvi:'Hai mươi phần trăm.'},
    {w:'approximately', ipa:'/əˈprɒksɪmətli/', pos:'adv', vi:'khoảng chừng', ex:'Approximately fifty people.', exvi:'Khoảng 50 người.'},
    {w:'postcode', ipa:'/ˈpəʊstkəʊd/', pos:'n', vi:'mã bưu chính', ex:'What is your postcode?', exvi:'Mã bưu chính của bạn?'},
    {w:'extension', ipa:'/ɪkˈstenʃn/', pos:'n', vi:'số máy lẻ', ex:'Extension two-four-six.', exvi:'Máy lẻ 246.'},
    {w:'avenue', ipa:'/ˈævənjuː/', pos:'n', vi:'đại lộ', ex:'Twelve Park Avenue.', exvi:'Số 12 đại lộ Park.'},
    {w:'surname', ipa:'/ˈsɜːneɪm/', pos:'n', vi:'họ', ex:'Can I have your surname?', exvi:'Cho tôi xin họ của bạn?'}
  ],
  grammar:[
    {
      t:'1. Cặp số “-teen” và “-ty” — bẫy kinh điển',
      formula:'KHÁC NHAU Ở TRỌNG ÂM:\n  thir**TEEN** /ˌθɜːˈtiːn/   ↔  **THIR**ty /ˈθɜːti/\n  four**TEEN** /ˌfɔːˈtiːn/   ↔  **FOR**ty /ˈfɔːti/\n  fif**TEEN**  /ˌfɪfˈtiːn/   ↔  **FIF**ty /ˈfɪfti/\n\nMẸO NGHE:\n  · “-teen” → trọng âm CUỐI, có âm /n/ rõ ở cuối\n  · “-ty”   → trọng âm ĐẦU, kết thúc bằng /i/ nhẹ',
      notes:[{type:'warn', text:'Nếu vẫn không chắc, nghe **ngữ cảnh**: giá phòng khách sạn khó là £15, nhưng £50 thì hợp lý.'}]
    },
    {
      t:'2. Cách đọc số trong bài nghe',
      table:[
        ['Loại','Cách người Anh đọc','Viết đáp án'],
        ['Số điện thoại','đọc từng chữ số; số 0 đọc **“oh”**','07 946 231 → 07946231'],
        ['Số 0','“oh” (số) hoặc “nil / nought”','—'],
        ['Hai số giống nhau liền nhau','**“double”** + số','“double four” → 44'],
        ['Ba số giống nhau','**“triple”** + số','“triple two” → 222'],
        ['Năm','1995 → “nineteen ninety-five”; 2008 → “two thousand and eight”','1995 / 2008'],
        ['Tiền','£50 → “fifty pounds”; £2.50 → “two pounds fifty”','£50 / £2.50'],
        ['Phân số & thập phân','0.5 → “nought point five”; ½ → “a half”','0.5']
      ]
    },
    {
      t:'3. Ngày tháng — hai cách đọc',
      formula:'KIỂU ANH:  the **third** of March      → viết: 3 March / 3rd March\nKIỂU MỸ:   March the **third**       → viết: March 3\n\nSỐ THỨ TỰ CẦN THUỘC\n1st first · 2nd second · 3rd third · 4th fourth · 5th fifth\n8th eighth · 9th ninth · 12th twelfth · 20th twentieth\n21st twenty-first · 30th thirtieth\n\nBẪY: “the fifth” /fɪfθ/ và “the sixth” /sɪksθ/ rất dễ nghe nhầm —\n     chú ý cụm phụ âm cuối /fθ/ và /ksθ/.',
      notes:[{type:'tip', text:'Trong đáp án, viết **3 March** hay **3rd March** đều được chấp nhận. Nhưng viết sai tháng thì mất điểm.'}]
    },
    {
      t:'4. Đánh vần tên riêng — điểm dễ ăn nhất',
      formula:'CÁC CHỮ CÁI HAY NGHE NHẦM — luyện riêng 6 cặp này:\n  A /eɪ/  – E /iː/  – I /aɪ/\n  B /biː/ – P /piː/ – V /viː/ – D /diː/ – T /tiː/ – G /dʒiː/\n  M /em/  – N /en/\n  S /es/  – F /ef/  – X /eks/\n  J /dʒeɪ/– K /keɪ/\n  U /juː/ – W /ˈdʌbəljuː/\n\nCÁCH LÀM BÀI:\n  · Viết ngay từng chữ khi nghe, ĐỪNG chờ nghe hết rồi mới viết\n  · Nghe “double” thì viết luôn hai chữ giống nhau\n  · Tên riêng luôn viết HOA để an toàn',
      notes:[{type:'warn', text:'Người nói thường **sửa lại giữa chừng**: “It’s Smith — no sorry, S-M-Y-T-H.” Đáp án là cái **sau cùng**.'}]
    }
  ],
  phrases:[
    ['Could you spell your surname, please?','Bạn đánh vần họ giúp được không?'],
    ['That is S for Sugar, M for Mother.','S như trong Sugar, M như trong Mother.'],
    ['Is that double L or single L?','Là hai chữ L hay một chữ L?'],
    ['Sorry, was that thirteen or thirty?','Xin lỗi, 13 hay 30 ạ?'],
    ['Let me read that back to you.','Để tôi đọc lại cho bạn kiểm tra.'],
    ['My phone number is oh seven nine…','Số của tôi là 079…'],
    ['The total comes to fifty pounds.','Tổng cộng là 50 bảng.'],
    ['It is on the third of March.','Vào ngày 3 tháng Ba.'],
    ['What is your postcode?','Mã bưu chính của bạn là gì?'],
    ['Extension two four six, please.','Máy lẻ 246 ạ.']
  ],
  exercises:[
    {type:'mc', q:'Phân biệt “thirteen” và “thirty” chủ yếu nhờ:', opts:['độ dài từ','vị trí trọng âm','ngữ điệu','tốc độ'], a:1, ex:'thir**TEEN** nhấn cuối, **THIR**ty nhấn đầu.'},
    {type:'mc', q:'Nghe “double four” thì viết là:', opts:['4','44','8','24'], a:1, ex:'**double** = hai chữ số giống nhau liền nhau.'},
    {type:'mc', q:'Trong số điện thoại, số 0 thường được đọc là:', opts:['zero','oh','nothing','null'], a:1, ex:'Người Anh đọc **“oh”**.'},
    {type:'mc', q:'“nineteen ninety-five” là năm nào?', opts:['1919','1995','1905','2095'], a:1, ex:'Năm **1995**.'},
    {type:'mc', q:'Người nói: “It is Smith — no sorry, S-M-Y-T-H.” Đáp án đúng là:', opts:['SMITH','SMYTH','cả hai','không có'], a:1, ex:'Luôn lấy thông tin **được sửa lại sau cùng**.'},
    {type:'fill', q:'Viết bằng số: “two thousand and eight” = ___', a:['2008'], ex:'Năm **2008**.'},
    {type:'fill', q:'Viết bằng số: “a quarter to nine” = ___ giờ ___ phút (dạng 8:45 thì viết 8:45)', a:['8:45','845','8h45'], ex:'Kém 15 phút của 9 giờ → **8:45**.'},
    {type:'fill', q:'“fortnight” nghĩa là bao nhiêu tuần? (viết số)', a:['2','hai'], ex:'**2 tuần**.'},
    {type:'mc', q:'Cặp chữ cái nào dễ nghe nhầm nhất?', opts:['A và Z','M và N','Q và R','H và L'], a:1, ex:'**M /em/** và **N /en/** rất giống nhau.'},
    {type:'mc', q:'Vì sao nên viết tên riêng bằng CHỮ HOA?', opts:['Cho đẹp','Để tránh tranh cãi về chữ hoa đầu','Bắt buộc theo quy định','Được cộng điểm'], a:1, ex:'Viết hoa toàn bộ là cách an toàn nhất.'}
  ]
},

'ie-15': {
  id:'ie-15', track:'ielts', phase:'P2', no:15,
  title:'Listening 3 — Dạng bài điền từ',
  subtitle:'Form, note, table, sentence completion — chiếm gần một nửa số câu.',
  goals:[
    'Xử lý được 4 dạng bài điền từ phổ biến nhất',
    'Dự đoán từ loại cần điền trước khi nghe',
    'Nhận ra dấu hiệu báo đáp án sắp tới'
  ],
  vocab:[
    {w:'accommodation', ipa:'/əˌkɒməˈdeɪʃn/', pos:'n', vi:'chỗ ở (hay bị viết sai chính tả)', ex:'Student accommodation.', exvi:'Chỗ ở cho sinh viên.'},
    {w:'application form', ipa:'/ˌæplɪˈkeɪʃn fɔːm/', pos:'n', vi:'đơn đăng ký', ex:'Fill in the application form.', exvi:'Điền vào đơn đăng ký.'},
    {w:'insurance', ipa:'/ɪnˈʃʊərəns/', pos:'n', vi:'bảo hiểm', ex:'Travel insurance is included.', exvi:'Đã bao gồm bảo hiểm du lịch.'},
    {w:'equipment', ipa:'/ɪˈkwɪpmənt/', pos:'n', vi:'thiết bị (không đếm được)', ex:'Bring your own equipment.', exvi:'Mang thiết bị của bạn.'},
    {w:'session', ipa:'/ˈseʃn/', pos:'n', vi:'buổi, phiên', ex:'A two-hour session.', exvi:'Buổi kéo dài hai tiếng.'},
    {w:'compulsory', ipa:'/kəmˈpʌlsəri/', pos:'adj', vi:'bắt buộc', ex:'Attendance is compulsory.', exvi:'Bắt buộc phải có mặt.'},
    {w:'optional', ipa:'/ˈɒpʃənl/', pos:'adj', vi:'tuỳ chọn', ex:'The trip is optional.', exvi:'Chuyến đi là tuỳ chọn.'},
    {w:'in advance', ipa:'/ɪn ədˈvɑːns/', pos:'phr', vi:'trước, sớm', ex:'Book two weeks in advance.', exvi:'Đặt trước hai tuần.'},
    {w:'discount', ipa:'/ˈdɪskaʊnt/', pos:'n', vi:'giảm giá', ex:'A ten per cent discount.', exvi:'Giảm giá 10%.'},
    {w:'receipt', ipa:'/rɪˈsiːt/', pos:'n', vi:'hoá đơn (chữ p câm)', ex:'Keep your receipt.', exvi:'Giữ hoá đơn lại.'},
    {w:'leaflet', ipa:'/ˈliːflət/', pos:'n', vi:'tờ rơi', ex:'Pick up a leaflet.', exvi:'Lấy một tờ rơi.'},
    {w:'waterproof', ipa:'/ˈwɔːtəpruːf/', pos:'adj', vi:'chống thấm nước', ex:'Bring a waterproof jacket.', exvi:'Mang áo khoác chống nước.'},
    {w:'refreshments', ipa:'/rɪˈfreʃmənts/', pos:'n', vi:'đồ ăn nhẹ và nước', ex:'Refreshments are provided.', exvi:'Có phục vụ đồ ăn nhẹ.'},
    {w:'car park', ipa:'/kɑː pɑːk/', pos:'n', vi:'bãi đỗ xe', ex:'The car park is free.', exvi:'Bãi xe miễn phí.'}
  ],
  grammar:[
    {
      t:'1. Bốn dạng bài điền từ',
      table:[
        ['Dạng','Đặc điểm','Mẹo'],
        ['**Form completion**','điền vào biểu mẫu: tên, địa chỉ, số điện thoại','Thường ở Part 1. Đoán trước dạng dữ liệu ở mỗi dòng.'],
        ['**Note completion**','ghi chú dạng gạch đầu dòng theo đề mục','Bám theo đề mục để biết mình đang ở đâu trong bài.'],
        ['**Table completion**','bảng có hàng và cột','Đọc **tiêu đề cột** trước — nó cho biết loại thông tin cần điền.'],
        ['**Sentence completion**','hoàn thành câu cho sẵn','Đọc cả câu để xác định **từ loại** cần điền.']
      ]
    },
    {
      t:'2. Đoán từ loại trước khi nghe — kỹ thuật quan trọng nhất',
      formula:'NHÌN CHỖ TRỐNG VÀ TỰ HỎI: cần loại từ gì?\n\n  The course lasts ____ weeks.          → SỐ\n  Students must bring their own ____.   → DANH TỪ (đồ vật)\n  The museum is closed on ____.         → THỨ hoặc NGÀY\n  You should ____ before the trip.      → ĐỘNG TỪ nguyên mẫu\n  The room was very ____.               → TÍNH TỪ\n  Payment must be made in ____.         → DANH TỪ (cash/advance)\n\nCÓ ĐỊNH HƯỚNG RỒI thì tai bạn sẽ TỰ LỌC đúng loại từ đó.',
      notes:[{type:'tip', text:'Đây là lý do phải đọc trước câu hỏi. Não chỉ bắt được thứ nó **đang tìm**.'}]
    },
    {
      t:'3. Dấu hiệu báo đáp án sắp tới (signposting)',
      table:[
        ['Người nói nói…','Nghĩa là…'],
        ['*Actually…* / *In fact…*','sắp **sửa lại** thông tin vừa nói'],
        ['*Sorry, I mean…*','thông tin trước SAI, cái sau mới đúng'],
        ['*The most important thing is…*','đáp án quan trọng sắp tới'],
        ['*Let me just check…*','sắp đưa ra số liệu chính xác'],
        ['*But…* / *However…*','sắp có thông tin đối lập — thường là đáp án'],
        ['*Don’t forget to…* / *Make sure you…*','yêu cầu bắt buộc — hay được hỏi']
      ],
      formula:'BẪY “ĐỔI Ý” — dạng bẫy phổ biến nhất\n  “I thought Tuesday would work… actually, let’s make it **Wednesday**.”\n  → Đáp án là **Wednesday**\n\n  “The fee is £50 — sorry, that’s for members. For non-members it’s **£75**.”\n  → Tuỳ câu hỏi hỏi ai, nhưng thông tin SAU thường là đáp án.',
      notes:[{type:'warn', text:'Luôn nghe hết câu. Chép vội đáp án đầu tiên nghe được là cách mất điểm nhanh nhất.'}]
    },
    {
      t:'4. Bẫy paraphrase — đáp án không dùng từ trong đề',
      table:[
        ['Trong câu hỏi','Trong bài nghe'],
        ['*children*','*youngsters, kids, under-12s*'],
        ['*free*','*at no cost, complimentary, no charge*'],
        ['*start*','*begin, commence, kick off*'],
        ['*not allowed*','*prohibited, banned, not permitted*'],
        ['*cheap*','*inexpensive, affordable, good value*'],
        ['*near*','*close to, within walking distance, a short walk from*'],
        ['*important*','*essential, crucial, vital, key*']
      ],
      notes:[
        {type:'warn', text:'Nghe thấy **đúng từ trong đề** thường là **bẫy**. Bài nghe hầu như luôn diễn đạt lại bằng từ khác.'},
        {type:'tip', text:'Khi đọc trước câu hỏi, hãy tự nghĩ ngay 2–3 cách nói khác của từ khoá. Đó chính là thứ bạn sẽ nghe thấy.'}
      ]
    }
  ],
  phrases:[
    ['Do I need to book in advance?','Tôi có cần đặt trước không?'],
    ['Is attendance compulsory?','Có bắt buộc tham dự không?'],
    ['Are refreshments provided?','Có phục vụ đồ ăn nhẹ không?'],
    ['Is there a discount for students?','Sinh viên có được giảm giá không?'],
    ['What should I bring with me?','Tôi cần mang theo gì?'],
    ['Bring a waterproof jacket just in case.','Mang áo mưa phòng khi cần.'],
    ['Please keep your receipt.','Vui lòng giữ hoá đơn.'],
    ['The session lasts about two hours.','Buổi học kéo dài khoảng hai tiếng.'],
    ['Actually, let me check that again.','Thật ra để tôi kiểm tra lại.'],
    ['Sorry, I mean Wednesday, not Tuesday.','Xin lỗi, ý tôi là thứ Tư, không phải thứ Ba.']
  ],
  exercises:[
    {type:'mc', q:'“The course lasts ___ weeks.” — chỗ trống cần điền:', opts:['tính từ','số','động từ','tên riêng'], a:1, ex:'Trước *weeks* → cần một **số**.'},
    {type:'mc', q:'“Students must bring their own ___.” — cần điền:', opts:['danh từ','động từ','trạng từ','giới từ'], a:0, ex:'Sau *their own* → **danh từ**.'},
    {type:'mc', q:'Nghe: “I thought Tuesday… actually, let’s make it Wednesday.” Đáp án là:', opts:['Tuesday','Wednesday','cả hai','không có'], a:1, ex:'*actually* báo hiệu **sửa lại** — lấy thông tin sau.'},
    {type:'mc', q:'Nếu nghe thấy đúng từ có trong câu hỏi, nhiều khả năng đó là:', opts:['đáp án chắc chắn','một cái bẫy','lỗi của bài nghe','không liên quan'], a:1, ex:'Bài nghe thường **paraphrase**; trùng từ hay là bẫy.'},
    {type:'mc', q:'Trong bài Table completion, nên đọc trước cái gì?', opts:['Câu cuối bài','Tiêu đề cột','Đáp án mẫu','Tên người nói'], a:1, ex:'**Tiêu đề cột** cho biết loại thông tin cần điền.'},
    {type:'fill', q:'Từ “chỗ ở” trong tiếng Anh viết là gì? (chú ý chính tả)', a:['accommodation'], ex:'**accommodation** — hai chữ c, hai chữ m.'},
    {type:'fill', q:'Cách nói khác của “free” trong bài nghe có thể là “at no ___”. (1 từ)', a:['cost','charge'], ex:'**at no cost / no charge**.'},
    {type:'fill', q:'Từ nào báo hiệu người nói sắp SỬA LẠI thông tin? (1 từ tiếng Anh)', a:['actually','sorry'], ex:'**actually** hoặc **sorry**.'},
    {type:'mc', q:'“compulsory” nghĩa là:', opts:['tuỳ chọn','bắt buộc','miễn phí','khó'], a:1, ex:'**compulsory** = bắt buộc; trái nghĩa là *optional*.'},
    {type:'mc', q:'Vì sao phải đoán từ loại trước khi nghe?', opts:['Để đoán bừa đáp án','Để tai tự lọc đúng loại từ cần tìm','Để viết nhanh hơn','Để không phải nghe'], a:1, ex:'Não chỉ bắt được thứ nó **đang tìm kiếm**.'}
  ]
},

'ie-16': {
  id:'ie-16', track:'ielts', phase:'P2', no:16,
  title:'Listening 4 — Bản đồ, trắc nghiệm & nối thông tin',
  subtitle:'Ba dạng bài còn lại, kèm chiến lược cho Part 3 và Part 4.',
  goals:[
    'Làm được dạng bản đồ và sơ đồ',
    'Xử lý trắc nghiệm nhiều lựa chọn không bị bẫy',
    'Theo dõi được ai nói gì trong hội thoại nhiều người'
  ],
  vocab:[
    {w:'opposite', ipa:'/ˈɒpəzɪt/', pos:'prep', vi:'đối diện', ex:'It is opposite the library.', exvi:'Nó đối diện thư viện.'},
    {w:'adjacent to', ipa:'/əˈdʒeɪsnt/', pos:'prep', vi:'liền kề', ex:'Adjacent to the car park.', exvi:'Liền kề bãi đỗ xe.'},
    {w:'at the far end', ipa:'/ðə fɑː end/', pos:'phr', vi:'ở tít đầu kia', ex:'At the far end of the corridor.', exvi:'Ở cuối hành lang.'},
    {w:'on your left', ipa:'/ɒn jɔː left/', pos:'phr', vi:'bên trái bạn', ex:'It is on your left.', exvi:'Nó ở bên trái bạn.'},
    {w:'take the second turning', ipa:'/ˈtɜːnɪŋ/', pos:'phr', vi:'rẽ ở lối thứ hai', ex:'Take the second turning right.', exvi:'Rẽ phải ở lối thứ hai.'},
    {w:'roundabout', ipa:'/ˈraʊndəbaʊt/', pos:'n', vi:'vòng xuyến', ex:'Go past the roundabout.', exvi:'Đi qua vòng xuyến.'},
    {w:'entrance', ipa:'/ˈentrəns/', pos:'n', vi:'lối vào', ex:'The main entrance is here.', exvi:'Lối vào chính ở đây.'},
    {w:'corridor', ipa:'/ˈkɒrɪdɔː(r)/', pos:'n', vi:'hành lang', ex:'Along the corridor.', exvi:'Dọc hành lang.'},
    {w:'ground floor', ipa:'/ɡraʊnd flɔː/', pos:'n', vi:'tầng trệt', ex:'On the ground floor.', exvi:'Ở tầng trệt.'},
    {w:'behind', ipa:'/bɪˈhaɪnd/', pos:'prep', vi:'phía sau', ex:'Behind the main building.', exvi:'Phía sau toà nhà chính.'},
    {w:'in the corner', ipa:'/ˈkɔːnə(r)/', pos:'phr', vi:'ở góc', ex:'In the top right corner.', exvi:'Ở góc trên bên phải.'},
    {w:'hypothesis', ipa:'/haɪˈpɒθəsɪs/', pos:'n', vi:'giả thuyết', ex:'Test the hypothesis.', exvi:'Kiểm chứng giả thuyết.'},
    {w:'methodology', ipa:'/ˌmeθəˈdɒlədʒi/', pos:'n', vi:'phương pháp nghiên cứu', ex:'Explain your methodology.', exvi:'Trình bày phương pháp.'},
    {w:'findings', ipa:'/ˈfaɪndɪŋz/', pos:'n', vi:'kết quả nghiên cứu', ex:'The findings were surprising.', exvi:'Kết quả gây bất ngờ.'}
  ],
  grammar:[
    {
      t:'1. Dạng bản đồ / sơ đồ (Map & Plan labelling)',
      formula:'QUY TRÌNH 4 BƯỚC\n① Xác định **điểm xuất phát** — thường có chữ “You are here” hoặc lối vào\n② Xác định **hướng**: đâu là bắc/nam, trái/phải so với điểm xuất phát\n③ Gạch sẵn các **mốc cố định** đã ghi trên bản đồ (thư viện, bãi xe…)\n④ Khi nghe, **di chuyển ngón tay** trên bản đồ theo lời người nói\n\nTỪ CHỈ HƯỚNG PHẢI THUỘC\n  go straight / carry on        đi thẳng\n  turn left / right             rẽ trái / phải\n  take the first turning        rẽ ở lối thứ nhất\n  go past…                      đi qua…\n  opposite / facing             đối diện\n  next to / adjacent to         bên cạnh / liền kề\n  between A and B               giữa A và B\n  behind / in front of          sau / trước\n  at the far end of             ở tít đầu kia\n  in the top-left corner        góc trên bên trái',
      notes:[{type:'tip', text:'Người nói mô tả theo **thứ tự đường đi**, không nhảy cóc. Nếu bị lạc, bám vào mốc cố định gần nhất để định vị lại.'}]
    },
    {
      t:'2. Trắc nghiệm nhiều lựa chọn (Multiple choice)',
      table:[
        ['Bẫy','Cách nhận ra'],
        ['**Nhắc cả 3 phương án**','Bài nghe đề cập A, B, C nhưng chỉ **một** cái là câu trả lời thật'],
        ['**Đúng một nửa**','Phương án đúng phần đầu, sai phần sau — phải khớp **toàn bộ**'],
        ['**Đổi ý**','Người nói nêu A rồi bác bỏ: *“I considered A, but in the end…”*'],
        ['**Trùng từ**','Phương án dùng đúng từ trong bài nghe — thường là bẫy']
      ],
      formula:'CHIẾN LƯỢC\n① Đọc **câu hỏi** trước, gạch từ khoá — đừng sa đà đọc kỹ cả 3 phương án\n② Nghe và ghi nhanh ý người nói bằng ký hiệu riêng\n③ Loại dần: gạch phương án chắc chắn sai\n④ Chọn phương án khớp **toàn bộ** nội dung nghe được',
      notes:[{type:'warn', text:'Đọc kỹ cả 3 phương án trước khi nghe dễ khiến bạn **bị dẫn dắt** và chọn theo từ trùng lặp.'}]
    },
    {
      t:'3. Part 3 — hội thoại nhiều người',
      formula:'VẤN ĐỀ: 2–4 người nói, dễ lẫn ai nói gì.\n\nCÁCH XỬ LÝ\n· Ghi ký hiệu người nói bên lề: **M** (nam), **W** (nữ), **T** (giảng viên)\n· Câu hỏi thường hỏi **quan điểm của một người cụ thể** → chỉ bắt lời người đó\n· Chú ý các cụm bày tỏ quan điểm:\n    I reckon… / In my view…        → nêu ý kiến\n    I’m not so sure about that      → phản đối nhẹ\n    That’s a fair point, but…       → đồng ý một phần rồi phản biện\n    Exactly / Absolutely            → đồng tình hoàn toàn\n· Người này nói xong, người kia **phản bác** → đáp án thường nằm ở đoạn phản bác',
      notes:[{type:'tip', text:'Part 3 hay hỏi kiểu “What does the woman think about…?”. Nghe được câu nam nói mà chép vào là sai ngay.'}]
    },
    {
      t:'4. Part 4 — bài giảng học thuật',
      formula:'ĐẶC ĐIỂM\n· Một người nói liên tục, **KHÔNG có nghỉ giữa chừng**\n· Chủ đề học thuật: lịch sử, môi trường, khoa học, xã hội\n· Thường là dạng note completion theo trình tự bài nói\n\nCHIẾN LƯỢC\n① Dùng toàn bộ thời gian đầu để đọc **hết** 10 câu\n② Bám theo **đề mục** của phần ghi chú để biết mình đang ở đâu\n③ Nghe các cụm chuyển ý để định vị:\n     First of all… / Moving on to… / Another factor is…\n     Finally… / To sum up…\n④ Lỡ một câu thì **nhảy ngay** sang câu kế, đừng cố tìm lại',
      notes:[
        {type:'warn', text:'Part 4 là nơi mất điểm nhiều nhất vì không có quãng nghỉ. Nếu tụt lại một câu mà cố đuổi theo, bạn sẽ mất cả cụm 3–4 câu.'}
      ]
    }
  ],
  phrases:[
    ['It is just opposite the library.','Nó ngay đối diện thư viện.'],
    ['Take the second turning on your right.','Rẽ phải ở lối thứ hai.'],
    ['Go past the roundabout and carry on.','Đi qua vòng xuyến rồi đi tiếp.'],
    ['It is at the far end of the corridor.','Nó ở cuối hành lang.'],
    ['You will find it on the ground floor.','Bạn sẽ thấy nó ở tầng trệt.'],
    ['In my view, the second option is better.','Theo tôi, phương án hai tốt hơn.'],
    ['I am not so sure about that.','Tôi không chắc lắm về điều đó.'],
    ['That is a fair point, but…','Ý đó cũng hợp lý, nhưng…'],
    ['Moving on to the next factor…','Chuyển sang yếu tố tiếp theo…'],
    ['To sum up, there are three main causes.','Tóm lại, có ba nguyên nhân chính.']
  ],
  exercises:[
    {type:'mc', q:'Trong dạng bản đồ, việc đầu tiên cần làm là:', opts:['Đọc hết đáp án','Xác định điểm xuất phát và hướng','Nghe trước rồi nhìn sau','Đoán bừa'], a:1, ex:'Không xác định điểm xuất phát thì mọi chỉ dẫn đều vô nghĩa.'},
    {type:'mc', q:'“adjacent to” nghĩa là:', opts:['đối diện','liền kề','phía sau','ở giữa'], a:1, ex:'**adjacent to** = ngay bên cạnh.'},
    {type:'mc', q:'Trong trắc nghiệm, bài nghe nhắc tới cả 3 phương án. Điều đó nghĩa là:', opts:['Cả 3 đều đúng','Đó là bẫy, chỉ 1 phương án đúng','Câu hỏi bị lỗi','Chọn phương án nhắc cuối'], a:1, ex:'Nhắc cả 3 là bẫy kinh điển — phải khớp **toàn bộ** nội dung.'},
    {type:'mc', q:'Câu hỏi Part 3: “What does the woman think?” — bạn phải:', opts:['Nghe lời cả hai người','Chỉ bắt lời người nữ','Nghe lời người nam','Chọn ý chung'], a:1, ex:'Chỉ lấy quan điểm của **đúng người được hỏi**.'},
    {type:'mc', q:'Đặc điểm khiến Part 4 khó nhất là:', opts:['Giọng khó nghe','Không có quãng nghỉ giữa chừng','Nhiều người nói','Câu hỏi dài'], a:1, ex:'Part 4 nói liên tục — tụt lại là mất cả cụm câu.'},
    {type:'fill', q:'“at the far ___ of the corridor” — điền 1 từ.', a:['end'], ex:'**at the far end** = ở tít đầu kia.'},
    {type:'fill', q:'Cụm nào báo hiệu người nói đồng ý một phần rồi phản biện? “That is a fair ___, but…” (1 từ)', a:['point'], ex:'**That’s a fair point, but…**'},
    {type:'fill', q:'Vòng xuyến trong tiếng Anh là gì? (1 từ)', a:['roundabout'], ex:'**roundabout**.'},
    {type:'mc', q:'Khi lỡ một câu ở Part 4, nên:', opts:['Cố nghe lại','Nhảy ngay sang câu kế','Bỏ cả phần','Đoán hết còn lại'], a:1, ex:'Cố đuổi theo sẽ mất thêm nhiều câu nữa.'},
    {type:'mc', q:'Cụm “Moving on to…” có tác dụng gì?', opts:['Kết thúc bài','Báo hiệu chuyển sang ý mới','Nhắc lại ý cũ','Đưa ví dụ'], a:1, ex:'Đây là cụm **chuyển ý** giúp bạn định vị trong bài.'}
  ]
},

'ie-17': {
  id:'ie-17', track:'ielts', phase:'P2', no:17,
  title:'Reading 1 — Skimming & Scanning',
  subtitle:'Hai kỹ thuật quyết định việc bạn có kịp giờ hay không.',
  goals:[
    'Phân biệt và dùng đúng skimming, scanning',
    'Nắm cấu trúc bài Reading và phân bổ thời gian',
    'Đọc hiểu nhanh mà không dịch từng từ'
  ],
  vocab:[
    {w:'skim', ipa:'/skɪm/', pos:'v', vi:'đọc lướt lấy ý chính', ex:'Skim the passage first.', exvi:'Đọc lướt bài trước.'},
    {w:'scan', ipa:'/skæn/', pos:'v', vi:'đọc quét tìm thông tin', ex:'Scan for dates and names.', exvi:'Quét tìm ngày tháng và tên.'},
    {w:'topic sentence', ipa:'/ˈtɒpɪk ˈsentəns/', pos:'n', vi:'câu chủ đề', ex:'The topic sentence comes first.', exvi:'Câu chủ đề đứng đầu đoạn.'},
    {w:'paragraph', ipa:'/ˈpærəɡrɑːf/', pos:'n', vi:'đoạn văn', ex:'Read the first paragraph.', exvi:'Đọc đoạn đầu.'},
    {w:'keyword', ipa:'/ˈkiːwɜːd/', pos:'n', vi:'từ khoá', ex:'Underline the keywords.', exvi:'Gạch chân từ khoá.'},
    {w:'synonym', ipa:'/ˈsɪnənɪm/', pos:'n', vi:'từ đồng nghĩa', ex:'Look for synonyms.', exvi:'Tìm từ đồng nghĩa.'},
    {w:'context', ipa:'/ˈkɒntekst/', pos:'n', vi:'ngữ cảnh', ex:'Guess from context.', exvi:'Đoán theo ngữ cảnh.'},
    {w:'infer', ipa:'/ɪnˈfɜː(r)/', pos:'v', vi:'suy ra', ex:'You can infer the meaning.', exvi:'Bạn có thể suy ra nghĩa.'},
    {w:'summarise', ipa:'/ˈsʌməraɪz/', pos:'v', vi:'tóm tắt', ex:'Summarise each paragraph.', exvi:'Tóm tắt từng đoạn.'},
    {w:'evidence', ipa:'/ˈevɪdəns/', pos:'n', vi:'bằng chứng', ex:'There is little evidence.', exvi:'Có rất ít bằng chứng.'},
    {w:'claim', ipa:'/kleɪm/', pos:'v/n', vi:'khẳng định', ex:'The author claims that…', exvi:'Tác giả khẳng định rằng…'},
    {w:'attitude', ipa:'/ˈætɪtjuːd/', pos:'n', vi:'thái độ', ex:'The writer’s attitude is critical.', exvi:'Thái độ tác giả mang tính phê phán.'},
    {w:'previous', ipa:'/ˈpriːviəs/', pos:'adj', vi:'trước đó', ex:'In previous studies…', exvi:'Trong các nghiên cứu trước…'},
    {w:'significant', ipa:'/sɪɡˈnɪfɪkənt/', pos:'adj', vi:'đáng kể', ex:'A significant increase.', exvi:'Mức tăng đáng kể.'}
  ],
  grammar:[
    {
      t:'1. Cấu trúc bài Reading & phân bổ thời gian',
      table:[
        ['','Academic','General Training'],
        ['Số bài','3 bài đọc học thuật','3 phần: quảng cáo/thông báo → tài liệu công việc → 1 bài dài'],
        ['Số câu','40 câu','40 câu'],
        ['Thời gian','60 phút, **không có thời gian chép đáp án riêng**','60 phút'],
        ['Độ dài','2.150–2.750 từ tổng cộng','tương tự']
      ],
      formula:'PHÂN BỔ 60 PHÚT\n  Bài 1: 17 phút   (dễ nhất — làm nhanh để dành thời gian)\n  Bài 2: 20 phút\n  Bài 3: 20 phút   (khó nhất)\n  Soát lại: 3 phút\n\nQUY TẮC VÀNG: mỗi câu **1 điểm như nhau**.\nĐừng dành 5 phút cho một câu khó trong khi 3 câu dễ đang chờ.',
      notes:[{type:'warn', text:'Khác Listening, Reading **không có 10 phút chép đáp án**. Phải viết thẳng vào phiếu trả lời khi làm.'}]
    },
    {
      t:'2. Skimming — đọc lướt lấy ý chính',
      formula:'MỤC ĐÍCH: nắm bài này nói về gì, mỗi đoạn nói gì. **2–3 phút/bài.**\n\nCÁCH LÀM\n① Đọc **tiêu đề** và câu đầu tiên của bài\n② Đọc **câu đầu và câu cuối** của mỗi đoạn (câu chủ đề thường nằm ở đó)\n③ Lướt mắt qua phần giữa, để ý **tên riêng, số liệu, chữ in nghiêng**\n④ Ghi 2–3 từ tóm tắt bên lề mỗi đoạn\n\nKHÔNG LÀM\n  ✘ đọc từng từ\n  ✘ dừng lại tra từ mới\n  ✘ dịch sang tiếng Việt trong đầu',
      notes:[{type:'tip', text:'Ghi chú bên lề mỗi đoạn giúp bạn quay lại tìm thông tin cực nhanh ở phần Matching headings và Locating information.'}]
    },
    {
      t:'3. Scanning — đọc quét tìm thông tin cụ thể',
      formula:'MỤC ĐÍCH: tìm đúng chỗ chứa đáp án. **Không đọc, chỉ quét.**\n\nDỄ QUÉT NHẤT (nổi bật trên trang giấy)\n  · số liệu, năm, phần trăm      1995, 47%, £3.2 million\n  · tên riêng viết hoa            Darwin, Tokyo, NASA\n  · từ in nghiêng hoặc in đậm\n  · từ chuyên ngành lặp lại\n\nCÁCH LÀM\n① Gạch **từ khoá** trong câu hỏi\n② Nghĩ ngay 2–3 **từ đồng nghĩa** có thể xuất hiện trong bài\n③ Đưa mắt zíc-zắc qua trang, chỉ tìm những từ đó\n④ Tìm thấy rồi mới **đọc kỹ 2–3 câu quanh chỗ đó**',
      notes:[{type:'warn', text:'Bài đọc gần như **không bao giờ** dùng lại đúng từ trong câu hỏi. Phải quét theo **từ đồng nghĩa**.'}]
    },
    {
      t:'4. Quy trình làm một bài đọc',
      formula:'① SKIM toàn bài (2–3 phút) — ghi chú bên lề mỗi đoạn\n② Đọc **nhóm câu hỏi đầu tiên**, gạch từ khoá\n③ SCAN tìm vùng chứa đáp án\n④ Đọc kỹ vùng đó, chọn đáp án, **viết ngay vào phiếu**\n⑤ Chuyển sang nhóm câu hỏi tiếp theo\n\nMẸO: đa số dạng câu hỏi ra **theo thứ tự bài đọc**\n(True/False/Not Given, Sentence completion, Summary completion).\nCâu 3 nằm sau câu 2 → không cần quét lại từ đầu bài.\nRIÊNG **Matching headings** và **Locating information** thì KHÔNG theo thứ tự.',
      notes:[{type:'tip', text:'Câu quá khó thì khoanh lại, đoán tạm một đáp án rồi đi tiếp. **Không bỏ trống câu nào** — đoán sai không bị trừ điểm.'}]
    }
  ],
  phrases:[
    ['Let me skim through it first.','Để tôi đọc lướt qua trước.'],
    ['I will scan for the date.','Tôi sẽ quét tìm ngày tháng.'],
    ['The topic sentence is at the beginning.','Câu chủ đề nằm ở đầu đoạn.'],
    ['I can guess the meaning from context.','Tôi đoán được nghĩa theo ngữ cảnh.'],
    ['This paragraph is about the causes.','Đoạn này nói về nguyên nhân.'],
    ['The writer claims that…','Tác giả khẳng định rằng…'],
    ['There is little evidence for this.','Có rất ít bằng chứng cho điều này.'],
    ['I am running out of time.','Tôi sắp hết giờ rồi.'],
    ['Let me come back to this one later.','Để tôi quay lại câu này sau.'],
    ['Never leave an answer blank.','Đừng bao giờ bỏ trống đáp án.']
  ],
  exercises:[
    {type:'mc', q:'Skimming dùng để làm gì?', opts:['Tìm một con số cụ thể','Nắm ý chính toàn bài','Dịch cả bài','Học từ mới'], a:1, ex:'**Skimming** = đọc lướt lấy ý chính.'},
    {type:'mc', q:'Scanning dùng để làm gì?', opts:['Nắm ý chính','Tìm thông tin cụ thể','Đọc kỹ từng câu','Tóm tắt bài'], a:1, ex:'**Scanning** = quét tìm thông tin cụ thể.'},
    {type:'mc', q:'Câu chủ đề của một đoạn thường nằm ở:', opts:['giữa đoạn','câu đầu hoặc câu cuối','cuối bài','tiêu đề'], a:1, ex:'Thường là **câu đầu**, đôi khi câu cuối.'},
    {type:'mc', q:'Thời gian làm bài Reading là:', opts:['40 phút','50 phút','60 phút','60 phút + 10 phút chép đáp án'], a:2, ex:'**60 phút**, không có thời gian chép đáp án riêng.'},
    {type:'mc', q:'Dạng câu hỏi nào KHÔNG ra theo thứ tự bài đọc?', opts:['True/False/Not Given','Sentence completion','Matching headings','Summary completion'], a:2, ex:'**Matching headings** và Locating information không theo thứ tự.'},
    {type:'fill', q:'Nên dành khoảng bao nhiêu phút cho mỗi bài đọc? (viết số)', a:['20','17','20 phút'], ex:'Khoảng **20 phút** mỗi bài.'},
    {type:'fill', q:'Khi quét bài, dễ tìm nhất là các loại thông tin nào? (1 từ tiếng Việt: “số...”)', a:['số liệu','so lieu','số'], ex:'**Số liệu**, năm, tên riêng — nổi bật trên trang.'},
    {type:'fill', q:'Từ đồng nghĩa trong tiếng Anh gọi là gì? (1 từ)', a:['synonym','synonyms'], ex:'**Synonym**.'},
    {type:'mc', q:'Gặp câu quá khó, nên làm gì?', opts:['Dành 5 phút giải cho ra','Đoán tạm rồi đi tiếp','Bỏ trống','Bỏ cả bài'], a:1, ex:'Mỗi câu 1 điểm như nhau; đoán sai **không bị trừ**.'},
    {type:'mc', q:'Khi skimming thì KHÔNG nên làm gì?', opts:['Đọc tiêu đề','Đọc câu đầu mỗi đoạn','Dừng lại tra từ mới','Ghi chú bên lề'], a:2, ex:'Dừng tra từ sẽ phá vỡ tốc độ đọc lướt.'}
  ]
},

'ie-18': {
  id:'ie-18', track:'ielts', phase:'P2', no:18,
  title:'Reading 2 — True / False / Not Given',
  subtitle:'Dạng bài khiến thí sinh mất điểm nhiều nhất — và cũng dễ gỡ nhất nếu hiểu đúng luật.',
  goals:[
    'Phân biệt dứt điểm FALSE và NOT GIVEN',
    'Nhận ra từ hạn định làm thay đổi đáp án',
    'Áp dụng quy trình 5 bước cho mọi câu'
  ],
  vocab:[
    {w:'claim', ipa:'/kleɪm/', pos:'v', vi:'khẳng định', ex:'The writer claims that…', exvi:'Tác giả khẳng định rằng…'},
    {w:'state', ipa:'/steɪt/', pos:'v', vi:'nêu rõ', ex:'The passage states that…', exvi:'Bài đọc nêu rõ rằng…'},
    {w:'imply', ipa:'/ɪmˈplaɪ/', pos:'v', vi:'ngụ ý', ex:'The author implies…', exvi:'Tác giả ngụ ý…'},
    {w:'contradict', ipa:'/ˌkɒntrəˈdɪkt/', pos:'v', vi:'mâu thuẫn với', ex:'This contradicts the text.', exvi:'Điều này mâu thuẫn với bài đọc.'},
    {w:'mention', ipa:'/ˈmenʃn/', pos:'v', vi:'đề cập', ex:'It is not mentioned.', exvi:'Điều đó không được đề cập.'},
    {w:'all / every', ipa:'/ɔːl/', pos:'det', vi:'tất cả, mọi', ex:'All students must attend.', exvi:'Mọi sinh viên phải dự.'},
    {w:'some / most', ipa:'/sʌm/ /məʊst/', pos:'det', vi:'một số / hầu hết', ex:'Most people agree.', exvi:'Hầu hết mọi người đồng ý.'},
    {w:'always / never', ipa:'/ˈɔːlweɪz/', pos:'adv', vi:'luôn luôn / không bao giờ', ex:'It never happens.', exvi:'Chuyện đó không bao giờ xảy ra.'},
    {w:'often / rarely', ipa:'/ˈɒfn/ /ˈreəli/', pos:'adv', vi:'thường / hiếm khi', ex:'It rarely rains here.', exvi:'Ở đây hiếm khi mưa.'},
    {w:'may / might', ipa:'/meɪ/', pos:'modal', vi:'có thể', ex:'It may cause problems.', exvi:'Nó có thể gây vấn đề.'},
    {w:'the first', ipa:'/ðə fɜːst/', pos:'adj', vi:'đầu tiên', ex:'The first person to do so.', exvi:'Người đầu tiên làm vậy.'},
    {w:'the main', ipa:'/ðə meɪn/', pos:'adj', vi:'chính, chủ yếu', ex:'The main reason is cost.', exvi:'Lý do chính là chi phí.'},
    {w:'entirely', ipa:'/ɪnˈtaɪəli/', pos:'adv', vi:'hoàn toàn', ex:'Entirely different.', exvi:'Hoàn toàn khác.'},
    {w:'partly', ipa:'/ˈpɑːtli/', pos:'adv', vi:'một phần', ex:'Partly true.', exvi:'Đúng một phần.'}
  ],
  grammar:[
    {
      t:'1. Ba đáp án — định nghĩa chính xác',
      table:[
        ['Đáp án','Nghĩa','Cách nhận ra'],
        ['**TRUE**','Bài đọc **khẳng định đúng** như câu hỏi','Tìm được câu trong bài diễn đạt cùng ý (bằng từ khác)'],
        ['**FALSE**','Bài đọc khẳng định **ngược lại**','Tìm được câu trong bài **mâu thuẫn trực tiếp** với câu hỏi'],
        ['**NOT GIVEN**','Bài đọc **không hề nói tới** điều đó','Tìm được vùng liên quan nhưng **không có thông tin** để kết luận']
      ],
      formula:'CÂU HỎI VÀNG ĐỂ PHÂN BIỆT FALSE và NOT GIVEN:\n\n  “Tôi có tìm được câu nào trong bài NÓI NGƯỢC LẠI không?”\n\n     CÓ  → FALSE\n     KHÔNG → NOT GIVEN\n\nFALSE = bài đọc nói NGƯỢC.\nNOT GIVEN = bài đọc IM LẶNG.',
      notes:[
        {type:'warn', text:'**Tuyệt đối không dùng kiến thức bên ngoài.** Câu hỏi có thể đúng trong thực tế nhưng nếu bài đọc không nói thì vẫn là **NOT GIVEN**.'}
      ]
    },
    {
      t:'2. Ví dụ minh hoạ',
      formula:'BÀI ĐỌC: “Coffee was first cultivated in Ethiopia in the 9th century.\nIt spread to Yemen, where it became popular among Sufi monks.”\n\n① Coffee was first grown in Ethiopia.\n   → **TRUE**  (grown = cultivated, cùng ý)\n\n② Coffee was first grown in Yemen.\n   → **FALSE** (bài nói rõ là Ethiopia — mâu thuẫn trực tiếp)\n\n③ Coffee is now the most popular drink in Yemen.\n   → **NOT GIVEN** (bài chỉ nói phổ biến với tu sĩ Sufi thời đó,\n      không nói gì về hiện nay hay về “phổ biến nhất”)\n\n④ Sufi monks disliked coffee.\n   → **FALSE** (bài nói *became popular among* — ngược lại)',
      notes:[{type:'tip', text:'Câu ③ là dạng bẫy điển hình: bài có nhắc tới Yemen và “popular”, nhưng **không đủ thông tin** để kết luận điều câu hỏi nói.'}]
    },
    {
      t:'3. Từ hạn định — thủ phạm làm đổi đáp án',
      table:[
        ['Nhóm từ','Ví dụ','Lưu ý'],
        ['Tuyệt đối','all, every, never, always, none, only','Câu hỏi dùng từ tuyệt đối mà bài đọc dùng từ nhẹ hơn → thường **FALSE**'],
        ['Tương đối','some, most, many, often, usually','Nhẹ hơn — dễ TRUE hơn'],
        ['Khả năng','may, might, could, possibly','Bài nói *may* mà câu hỏi nói *will* → **FALSE**'],
        ['Thứ tự / duy nhất','the first, the only, the main, the largest','Rất hay bị bịa thêm → kiểm tra thật kỹ'],
        ['So sánh','more than, better than, twice as','Phải khớp **chính xác** con số và chiều so sánh']
      ],
      formula:'VÍ DỤ\nBài:      “Some researchers believe the theory is flawed.”\nCâu hỏi:  “**All** researchers believe the theory is flawed.”\n→ **FALSE** (some ≠ all)\n\nBài:      “The drug **may** reduce symptoms.”\nCâu hỏi:  “The drug **will** reduce symptoms.”\n→ **FALSE** (khả năng ≠ chắc chắn)'
    },
    {
      t:'4. Quy trình 5 bước và bốn lỗi hay mắc',
      formula:'QUY TRÌNH\n① Đọc câu hỏi, gạch **danh từ riêng, số liệu, từ hạn định**\n② Nghĩ 2–3 từ đồng nghĩa của từ khoá\n③ Scan tìm vùng chứa thông tin (câu hỏi ra **theo thứ tự** bài đọc)\n④ Đọc kỹ 2–3 câu quanh đó\n⑤ Đặt câu hỏi vàng: có câu nào nói ngược không?',
      table:[
        ['Lỗi','Hậu quả'],
        ['Dùng kiến thức đời thường thay vì bài đọc','Chọn TRUE trong khi đáp án là NOT GIVEN'],
        ['Thấy từ trùng là chọn TRUE ngay','Dính bẫy paraphrase ngược nghĩa'],
        ['Bỏ qua từ hạn định (all, may, only)','Nhầm FALSE thành TRUE'],
        ['Bỏ trống vì không chắc','Mất điểm chắc chắn — đoán còn có 1/3 cơ hội']
      ],
      notes:[{type:'tip', text:'Nếu thật sự bí, **NOT GIVEN** là đáp án được chọn nhiều nhất trong các câu gây phân vân. Nhưng chỉ dùng mẹo này khi đã hết cách.'}]
    }
  ],
  phrases:[
    ['The passage states that…','Bài đọc nêu rõ rằng…'],
    ['This contradicts what the writer says.','Điều này mâu thuẫn với lời tác giả.'],
    ['The text does not mention this.','Bài đọc không đề cập điều này.'],
    ['There is no information about that.','Không có thông tin về điều đó.'],
    ['The writer only says that…','Tác giả chỉ nói rằng…'],
    ['That is true according to the passage.','Điều đó đúng theo bài đọc.'],
    ['I cannot find any evidence for this.','Tôi không tìm thấy bằng chứng nào.'],
    ['Be careful with the word “all”.','Cẩn thận với từ “all”.'],
    ['It says “may”, not “will”.','Bài viết “may”, không phải “will”.'],
    ['Never use outside knowledge.','Đừng bao giờ dùng kiến thức bên ngoài.']
  ],
  exercises:[
    {type:'mc', q:'FALSE nghĩa là:', opts:['Bài đọc không nói tới','Bài đọc nói ngược lại','Bạn không tìm thấy','Câu hỏi sai'], a:1, ex:'**FALSE** = bài đọc **mâu thuẫn trực tiếp** với câu hỏi.'},
    {type:'mc', q:'NOT GIVEN nghĩa là:', opts:['Bài đọc nói ngược lại','Bài đọc im lặng về điều đó','Câu hỏi quá khó','Thông tin sai sự thật'], a:1, ex:'**NOT GIVEN** = bài đọc **không có thông tin** để kết luận.'},
    {type:'mc', q:'Bài: “Some researchers believe X.” Câu hỏi: “All researchers believe X.” Đáp án:', opts:['TRUE','FALSE','NOT GIVEN','Không xác định'], a:1, ex:'*some* ≠ *all* → **FALSE**.'},
    {type:'mc', q:'Bài: “The drug may reduce symptoms.” Câu hỏi: “The drug will reduce symptoms.” Đáp án:', opts:['TRUE','FALSE','NOT GIVEN','TRUE một phần'], a:1, ex:'Khả năng (*may*) ≠ chắc chắn (*will*) → **FALSE**.'},
    {type:'mc', q:'Câu hỏi đúng ngoài đời thực nhưng bài đọc không nhắc tới. Đáp án là:', opts:['TRUE','FALSE','NOT GIVEN','Tuỳ giám khảo'], a:2, ex:'Chỉ căn cứ vào **bài đọc**, không dùng kiến thức bên ngoài.'},
    {type:'fill', q:'Câu hỏi vàng để phân biệt FALSE và NOT GIVEN: “Có câu nào trong bài nói ___ không?” (1 từ)', a:['ngược','nguoc'], ex:'Có nói **ngược** → FALSE; không có → NOT GIVEN.'},
    {type:'fill', q:'Nếu không chắc chắn, tuyệt đối không được làm gì? (2 từ: “bỏ ...”)', a:['bỏ trống','bo trong'], ex:'**Bỏ trống** là mất điểm chắc chắn.'},
    {type:'fill', q:'Nhóm từ như all, every, never, only gọi là từ gì? (2 từ tiếng Việt)', a:['từ hạn định','tu han dinh','hạn định'], ex:'**Từ hạn định** — hay quyết định đáp án.'},
    {type:'mc', q:'Dạng True/False/Not Given ra câu hỏi:', opts:['theo thứ tự bài đọc','ngẫu nhiên','ngược thứ tự','theo độ khó'], a:0, ex:'Ra **theo thứ tự** — câu sau nằm phía dưới câu trước.'},
    {type:'mc', q:'Thấy từ trong câu hỏi trùng y hệt bài đọc thì:', opts:['Chắc chắn TRUE','Cần đọc kỹ, có thể là bẫy','Chắc chắn FALSE','Bỏ qua'], a:1, ex:'Trùng từ nhưng nghĩa có thể ngược — phải đọc kỹ.'}
  ]
}

});
/* ===== GIAI ĐOẠN 2 — Buổi 19–24 ===== */
Object.assign(window.IELTS_TRACK.lessons, {

'ie-19': {
  id:'ie-19', track:'ielts', phase:'P2', no:19,
  title:'Reading 3 — Matching headings & nối thông tin',
  subtitle:'Hai dạng bài không ra theo thứ tự — cần chiến lược riêng.',
  goals:[
    'Chọn đúng tiêu đề cho từng đoạn văn',
    'Định vị thông tin trong đoạn nhanh chóng',
    'Nối tên người với quan điểm của họ'
  ],
  vocab:[
    {w:'heading', ipa:'/ˈhedɪŋ/', pos:'n', vi:'tiêu đề mục', ex:'Choose the correct heading.', exvi:'Chọn tiêu đề đúng.'},
    {w:'main idea', ipa:'/meɪn aɪˈdɪə/', pos:'n', vi:'ý chính', ex:'What is the main idea?', exvi:'Ý chính là gì?'},
    {w:'supporting detail', ipa:'/səˈpɔːtɪŋ/', pos:'n', vi:'chi tiết hỗ trợ', ex:'That is just a supporting detail.', exvi:'Đó chỉ là chi tiết phụ.'},
    {w:'overview', ipa:'/ˈəʊvəvjuː/', pos:'n', vi:'cái nhìn tổng quan', ex:'Give an overview first.', exvi:'Nêu tổng quan trước.'},
    {w:'distinguish', ipa:'/dɪˈstɪŋɡwɪʃ/', pos:'v', vi:'phân biệt', ex:'Distinguish between the two.', exvi:'Phân biệt hai cái đó.'},
    {w:'illustrate', ipa:'/ˈɪləstreɪt/', pos:'v', vi:'minh hoạ', ex:'This example illustrates the point.', exvi:'Ví dụ này minh hoạ cho ý đó.'},
    {w:'outline', ipa:'/ˈaʊtlaɪn/', pos:'v', vi:'phác thảo, nêu khái quát', ex:'The paragraph outlines the causes.', exvi:'Đoạn văn nêu khái quát nguyên nhân.'},
    {w:'compare', ipa:'/kəmˈpeə(r)/', pos:'v', vi:'so sánh', ex:'It compares two methods.', exvi:'Nó so sánh hai phương pháp.'},
    {w:'consequence', ipa:'/ˈkɒnsɪkwəns/', pos:'n', vi:'hệ quả', ex:'The consequences were serious.', exvi:'Hệ quả rất nghiêm trọng.'},
    {w:'solution', ipa:'/səˈluːʃn/', pos:'n', vi:'giải pháp', ex:'A possible solution.', exvi:'Một giải pháp khả dĩ.'},
    {w:'researcher', ipa:'/rɪˈsɜːtʃə(r)/', pos:'n', vi:'nhà nghiên cứu', ex:'Researchers disagree.', exvi:'Các nhà nghiên cứu bất đồng.'},
    {w:'argue', ipa:'/ˈɑːɡjuː/', pos:'v', vi:'lập luận rằng', ex:'She argues that…', exvi:'Bà ấy lập luận rằng…'},
    {w:'suggest', ipa:'/səˈdʒest/', pos:'v', vi:'cho rằng, gợi ý', ex:'The data suggest that…', exvi:'Dữ liệu cho thấy rằng…'},
    {w:'conclude', ipa:'/kənˈkluːd/', pos:'v', vi:'kết luận', ex:'He concluded that…', exvi:'Ông ấy kết luận rằng…'}
  ],
  grammar:[
    {
      t:'1. Matching headings — chọn tiêu đề cho đoạn',
      formula:'ĐẶC ĐIỂM\n· Danh sách tiêu đề (i, ii, iii…) **nhiều hơn** số đoạn → luôn có tiêu đề thừa\n· **KHÔNG ra theo thứ tự** bài đọc\n· Mỗi tiêu đề chỉ dùng **một lần**\n\nQUY TRÌNH\n① Đọc **hết** danh sách tiêu đề trước, gạch từ khoá mỗi tiêu đề\n② Nhóm các tiêu đề **na ná nhau** lại — đây chính là chỗ bẫy\n③ Đọc **câu đầu và câu cuối** của đoạn → thường chứa ý chính\n④ Tự tóm tắt đoạn bằng 3–4 từ CỦA RIÊNG BẠN\n⑤ Mới đối chiếu với danh sách tiêu đề\n⑥ Làm đoạn dễ trước, đoạn khó để sau (loại dần)',
      notes:[
        {type:'warn', text:'**Sai lầm chết người:** đọc tiêu đề rồi đi tìm từ trùng trong đoạn. Tiêu đề đúng nói về **ý chính của cả đoạn**, không phải một chi tiết trong đó.'},
        {type:'tip', text:'Bước ④ rất quan trọng: tự tóm tắt TRƯỚC khi nhìn danh sách để không bị dẫn dắt.'}
      ]
    },
    {
      t:'2. Ý chính vs chi tiết hỗ trợ',
      table:[
        ['','Ý CHÍNH','CHI TIẾT HỖ TRỢ'],
        ['Vị trí','câu đầu hoặc câu cuối đoạn','phần giữa đoạn'],
        ['Tính chất','khái quát, bao trùm cả đoạn','cụ thể: ví dụ, số liệu, tên riêng'],
        ['Dấu hiệu','—','for example, such as, in 1995, according to…'],
        ['Chọn làm tiêu đề','✔','✘ — đây là bẫy phổ biến nhất']
      ],
      formula:'VÍ DỤ\nĐoạn văn: “Cities face growing traffic problems. In Bangkok, drivers\nspend 64 hours a year in jams. Similar figures appear in Manila and\nJakarta. Governments have tried road pricing, but with limited success.”\n\n  Tiêu đề SAI: “Traffic in Bangkok”     ← chỉ là một chi tiết\n  Tiêu đề ĐÚNG: “Urban congestion and attempts to tackle it”'
    },
    {
      t:'3. Locating information — thông tin nằm ở đoạn nào',
      formula:'ĐẶC ĐIỂM\n· Câu hỏi kiểu: “Which paragraph contains the following information?”\n· **KHÔNG theo thứ tự**\n· Một đoạn có thể chứa **nhiều** đáp án\n· Thường hỏi về **chi tiết cụ thể**, ngược hẳn với Matching headings\n\nCHIẾN LƯỢC\n① Đọc hết các câu hỏi trước, gạch từ khoá **cụ thể** (số liệu, tên, ví dụ)\n② Ưu tiên tìm câu hỏi có **danh từ riêng hoặc số** — dễ quét nhất\n③ Dùng ghi chú bên lề (đã ghi lúc skimming) để khoanh vùng\n④ Để dạng này làm **sau cùng** trong bài — lúc đó bạn đã quen bài đọc',
      notes:[{type:'tip', text:'Vì dạng này bắt bạn quét cả bài, hãy làm nó **cuối cùng**, sau khi các dạng theo thứ tự đã giúp bạn nắm bài.'}]
    },
    {
      t:'4. Matching features — nối tên người với quan điểm',
      formula:'ĐẶC ĐIỂM\n· Nối tên nhà nghiên cứu / lý thuyết với phát biểu tương ứng\n· Có thể dùng **một tên nhiều lần** (đề sẽ ghi rõ)\n· Tên riêng viết hoa → **rất dễ scan**\n\nQUY TRÌNH\n① Scan cả bài, khoanh tròn **tất cả tên riêng** trước\n② Đọc kỹ 2–3 câu quanh mỗi tên, tóm tắt quan điểm bằng vài từ\n③ Đối chiếu với danh sách phát biểu\n\nĐỘNG TỪ TƯỜNG THUẬT CẦN PHÂN BIỆT\n  argues / claims      → khẳng định mạnh\n  suggests / proposes  → đề xuất, nhẹ hơn\n  admits / concedes    → thừa nhận điều bất lợi\n  disputes / rejects   → phản bác\n  concludes            → kết luận cuối cùng',
      notes:[{type:'warn', text:'Đề hay bẫy bằng cách để **hai nhà nghiên cứu có quan điểm gần giống nhau**. Phải đọc kỹ sắc thái động từ tường thuật.'}]
    }
  ],
  phrases:[
    ['What is the main idea of this paragraph?','Ý chính của đoạn này là gì?'],
    ['That is only a supporting detail.','Đó chỉ là chi tiết phụ.'],
    ['This paragraph outlines the causes.','Đoạn này nêu khái quát nguyên nhân.'],
    ['The writer compares two approaches.','Tác giả so sánh hai cách tiếp cận.'],
    ['Which paragraph mentions this?','Đoạn nào nhắc tới điều này?'],
    ['Let me summarise it in my own words.','Để tôi tóm tắt bằng lời của mình.'],
    ['Two headings look very similar.','Hai tiêu đề trông rất giống nhau.'],
    ['Smith argues that…','Smith lập luận rằng…'],
    ['However, Jones rejects this view.','Tuy nhiên Jones bác bỏ quan điểm này.'],
    ['I will do this section last.','Tôi sẽ làm phần này sau cùng.']
  ],
  exercises:[
    {type:'mc', q:'Matching headings ra câu hỏi:', opts:['theo thứ tự bài đọc','không theo thứ tự','theo độ khó','ngược thứ tự'], a:1, ex:'Dạng này **không theo thứ tự** — phải xử lý từng đoạn.'},
    {type:'mc', q:'Tiêu đề đúng phải phản ánh:', opts:['một chi tiết nổi bật','ý chính của cả đoạn','câu cuối đoạn','tên riêng trong đoạn'], a:1, ex:'Tiêu đề = **ý chính bao trùm** cả đoạn.'},
    {type:'mc', q:'Ý chính của đoạn thường nằm ở:', opts:['giữa đoạn','câu đầu hoặc câu cuối','phần ví dụ','số liệu'], a:1, ex:'Câu chủ đề thường là **câu đầu**, đôi khi câu cuối.'},
    {type:'mc', q:'Trong Matching headings, số tiêu đề so với số đoạn thường:', opts:['bằng nhau','ít hơn','nhiều hơn','tuỳ đề'], a:2, ex:'Luôn có **tiêu đề thừa** để gây nhiễu.'},
    {type:'mc', q:'Dạng Locating information nên làm vào lúc nào?', opts:['đầu tiên','giữa bài','sau cùng','không làm'], a:2, ex:'Làm **sau cùng** khi đã quen bài đọc.'},
    {type:'fill', q:'Trước khi nhìn danh sách tiêu đề, bạn nên tự làm gì với đoạn văn? (2 từ tiếng Việt)', a:['tóm tắt','tom tat'], ex:'**Tóm tắt** bằng lời của mình để không bị dẫn dắt.'},
    {type:'fill', q:'Trong Matching features, loại thông tin nào dễ quét nhất? (2 từ tiếng Việt)', a:['tên riêng','ten rieng'], ex:'**Tên riêng** viết hoa, nổi bật trên trang.'},
    {type:'fill', q:'Động từ nào mang nghĩa “thừa nhận điều bất lợi”? (1 từ tiếng Anh)', a:['admits','admit','concedes'], ex:'**admits / concedes**.'},
    {type:'mc', q:'Sai lầm phổ biến nhất khi làm Matching headings là:', opts:['Đọc quá kỹ','Tìm từ trùng giữa tiêu đề và đoạn','Làm quá nhanh','Đọc câu cuối'], a:1, ex:'Từ trùng thường thuộc **chi tiết phụ**, không phải ý chính.'},
    {type:'mc', q:'“The data suggest that…” mang sắc thái:', opts:['khẳng định rất mạnh','đề xuất, nhẹ nhàng','phản bác','thừa nhận'], a:1, ex:'*suggest* nhẹ hơn *argue* hay *claim*.'}
  ]
},

'ie-20': {
  id:'ie-20', track:'ielts', phase:'P2', no:20,
  title:'Reading 4 — Paraphrase & quản lý thời gian',
  subtitle:'Kỹ năng nền của mọi dạng bài đọc, cộng chiến lược chạy đủ 40 câu trong 60 phút.',
  goals:[
    'Nhận ra bốn kiểu paraphrase trong bài đọc',
    'Đoán nghĩa từ mới theo ngữ cảnh mà không cần từ điển',
    'Có kế hoạch thời gian rõ ràng cho ngày thi'
  ],
  vocab:[
    {w:'paraphrase', ipa:'/ˈpærəfreɪz/', pos:'v/n', vi:'diễn đạt lại', ex:'The answer is paraphrased.', exvi:'Đáp án được diễn đạt lại.'},
    {w:'prefix', ipa:'/ˈpriːfɪks/', pos:'n', vi:'tiền tố', ex:'The prefix “un-” means not.', exvi:'Tiền tố “un-” nghĩa là không.'},
    {w:'suffix', ipa:'/ˈsʌfɪks/', pos:'n', vi:'hậu tố', ex:'The suffix “-tion” makes nouns.', exvi:'Hậu tố “-tion” tạo danh từ.'},
    {w:'root', ipa:'/ruːt/', pos:'n', vi:'gốc từ', ex:'The root of the word.', exvi:'Gốc của từ.'},
    {w:'diminish', ipa:'/dɪˈmɪnɪʃ/', pos:'v', vi:'giảm bớt', ex:'Interest has diminished.', exvi:'Sự quan tâm đã giảm.'},
    {w:'accelerate', ipa:'/əkˈseləreɪt/', pos:'v', vi:'đẩy nhanh', ex:'It accelerated growth.', exvi:'Nó đẩy nhanh tăng trưởng.'},
    {w:'sustain', ipa:'/səˈsteɪn/', pos:'v', vi:'duy trì', ex:'Hard to sustain that pace.', exvi:'Khó duy trì tốc độ đó.'},
    {w:'undermine', ipa:'/ˌʌndəˈmaɪn/', pos:'v', vi:'làm suy yếu', ex:'It undermines confidence.', exvi:'Nó làm giảm niềm tin.'},
    {w:'reinforce', ipa:'/ˌriːɪnˈfɔːs/', pos:'v', vi:'củng cố', ex:'This reinforces the theory.', exvi:'Điều này củng cố lý thuyết.'},
    {w:'widespread', ipa:'/ˈwaɪdspred/', pos:'adj', vi:'phổ biến rộng rãi', ex:'Widespread use of mobiles.', exvi:'Điện thoại được dùng rộng rãi.'},
    {w:'crucial', ipa:'/ˈkruːʃl/', pos:'adj', vi:'then chốt', ex:'A crucial factor.', exvi:'Một yếu tố then chốt.'},
    {w:'inevitable', ipa:'/ɪnˈevɪtəbl/', pos:'adj', vi:'tất yếu, không tránh khỏi', ex:'Change is inevitable.', exvi:'Thay đổi là tất yếu.'},
    {w:'controversial', ipa:'/ˌkɒntrəˈvɜːʃl/', pos:'adj', vi:'gây tranh cãi', ex:'A controversial policy.', exvi:'Chính sách gây tranh cãi.'},
    {w:'nevertheless', ipa:'/ˌnevəðəˈles/', pos:'adv', vi:'tuy vậy', ex:'Nevertheless, it worked.', exvi:'Tuy vậy, nó vẫn hiệu quả.'}
  ],
  grammar:[
    {
      t:'1. Bốn kiểu paraphrase trong bài đọc',
      table:[
        ['Kiểu','Câu hỏi','Bài đọc'],
        ['**Từ đồng nghĩa**','*children*','*youngsters, minors, the young*'],
        ['**Đổi từ loại**','*The government **decided** to…*','*The government’s **decision** to…*'],
        ['**Đổi chủ động ↔ bị động**','*Scientists discovered X*','*X **was discovered by** scientists*'],
        ['**Đổi cấu trúc câu**','*Because prices rose, demand fell*','*The **rise** in prices **led to** a **fall** in demand*']
      ],
      formula:'VÍ DỤ TỔNG HỢP\nCâu hỏi: “Most people believe that traffic in cities is getting worse.”\nBài đọc: “There is a **widespread perception** that **urban congestion**\n          has **deteriorated**.”\n\n  most people believe  →  widespread perception\n  traffic in cities    →  urban congestion\n  getting worse        →  has deteriorated',
      notes:[{type:'tip', text:'Khi đọc câu hỏi, tập thói quen **tự nghĩ ra 2 cách nói khác** cho mỗi từ khoá. Chính cách nói đó là thứ bạn sẽ tìm thấy trong bài.'}]
    },
    {
      t:'2. Đoán nghĩa từ mới theo ngữ cảnh',
      formula:'BỐN MANH MỐI — dùng theo thứ tự này\n\n① ĐỊNH NGHĨA NGAY TRONG CÂU\n   “Bioluminescence, **the ability of living things to produce light**, is…”\n   → dấu phẩy, dấu gạch ngang, *that is*, *or*, *known as*\n\n② TỪ TRÁI NGHĨA / ĐỐI LẬP\n   “Unlike his **gregarious** brother, Tom was shy and withdrawn.”\n   → *unlike* báo hiệu trái nghĩa với *shy* → gregarious = hoà đồng\n\n③ VÍ DỤ ĐI KÈM\n   “**Precipitation** such as rain, snow and hail…”\n   → precipitation = giáng thuỷ\n\n④ CẤU TẠO TỪ\n   *un-* (không) · *re-* (lại) · *over-* (quá) · *mis-* (sai)\n   *-less* (không có) · *-able* (có thể) · *-tion* (danh từ)\n   → **irreversible** = ir(không) + revers(đảo) + ible(có thể) = không thể đảo ngược',
      notes:[{type:'warn', text:'Trong phòng thi **không có từ điển**. Đoán theo ngữ cảnh là kỹ năng bắt buộc, không phải lựa chọn.'}]
    },
    {
      t:'3. Quản lý thời gian ngày thi',
      table:[
        ['Mốc thời gian','Việc làm'],
        ['0–17 phút','**Bài 1** — dễ nhất, làm nhanh để dành thời gian cho sau'],
        ['17–37 phút','**Bài 2**'],
        ['37–57 phút','**Bài 3** — khó nhất'],
        ['57–60 phút','Soát lại, điền hết ô trống, kiểm tra chính tả']
      ],
      formula:'BỐN QUY TẮC SẮT\n① Mỗi câu **1 điểm như nhau** — đừng dành 5 phút cho một câu khó\n② Quá **90 giây** cho một câu → khoanh lại, đoán tạm, đi tiếp\n③ Viết đáp án **thẳng vào phiếu trả lời** ngay khi làm\n   (Reading KHÔNG có 10 phút chép đáp án như Listening)\n④ **Không bỏ trống câu nào** — đoán sai không bị trừ điểm',
      notes:[{type:'warn', text:'Lỗi mất điểm oan nhất: hết giờ mà còn 8 câu chưa tô. Luôn để lại 2 phút cuối để tô hết mọi ô trống.'}]
    },
    {
      t:'4. Lịch luyện Reading 4 tuần',
      table:[
        ['Tuần','Nội dung luyện','Mục tiêu'],
        ['Tuần 1','Mỗi ngày 1 bài đọc **không bấm giờ**, tra hết từ mới','Hiểu bài, xây vốn từ học thuật'],
        ['Tuần 2','1 bài **bấm 25 phút**, ghi 10 cặp paraphrase mỗi bài','Quen áp lực thời gian'],
        ['Tuần 3','1 bài **bấm 20 phút**, tập trung dạng T/F/NG và headings','Đạt chuẩn thời gian'],
        ['Tuần 4','**Full test 60 phút** 2 lần/tuần, phân tích kỹ mọi câu sai','Sẵn sàng thi thật']
      ],
      formula:'SAU MỖI BÀI — bắt buộc làm 3 việc\n① Ghi lại **10 cặp paraphrase** (từ trong câu hỏi ↔ từ trong bài)\n② Phân loại câu sai: sai vì **không hiểu từ**, sai vì **không tìm ra vùng**,\n   hay sai vì **hiểu sai luật của dạng bài**\n③ Đọc lại bài đó **một lần nữa không bấm giờ** để hiểu trọn vẹn',
      notes:[{type:'tip', text:'Việc ① là thứ nâng band Reading nhanh nhất. Sau 4 tuần bạn sẽ có khoảng 300 cặp paraphrase — đủ để nhận ra hầu hết bẫy.'}]
    }
  ],
  phrases:[
    ['This is a paraphrase of the question.','Đây là cách diễn đạt lại câu hỏi.'],
    ['I can guess the meaning from context.','Tôi đoán được nghĩa theo ngữ cảnh.'],
    ['The prefix tells you it is negative.','Tiền tố cho biết đó là nghĩa phủ định.'],
    ['I am spending too long on this question.','Tôi mất quá nhiều thời gian cho câu này.'],
    ['Let me move on and come back later.','Để tôi làm tiếp rồi quay lại sau.'],
    ['I have five minutes left.','Tôi còn năm phút.'],
    ['Make sure every box is filled in.','Đảm bảo không bỏ trống ô nào.'],
    ['Never leave an answer blank.','Đừng bao giờ bỏ trống đáp án.'],
    ['Write answers straight onto the answer sheet.','Viết đáp án thẳng vào phiếu trả lời.'],
    ['Check your spelling before you finish.','Kiểm tra chính tả trước khi nộp.']
  ],
  exercises:[
    {type:'mc', q:'“most people believe” trong bài đọc có thể thành:', opts:['a few people say','a widespread perception','nobody thinks','some doubt'], a:1, ex:'**widespread perception** = nhận thức phổ biến.'},
    {type:'mc', q:'“Unlike his gregarious brother, Tom was shy.” — gregarious nghĩa là:', opts:['nhút nhát','hoà đồng','thông minh','lười biếng'], a:1, ex:'*Unlike* báo hiệu **trái nghĩa** với *shy*.'},
    {type:'mc', q:'“irreversible” nghĩa là:', opts:['có thể đảo ngược','không thể đảo ngược','đang đảo ngược','đã đảo ngược'], a:1, ex:'ir- (không) + revers (đảo) + -ible (có thể).'},
    {type:'mc', q:'Nên dành tối đa bao lâu cho một câu hỏi khó?', opts:['30 giây','90 giây','3 phút','5 phút'], a:1, ex:'Quá **90 giây** thì khoanh lại và đi tiếp.'},
    {type:'mc', q:'Reading khác Listening ở chỗ:', opts:['ít câu hơn','không có thời gian chép đáp án riêng','được nghe 2 lần','không tính điểm'], a:1, ex:'Phải viết thẳng vào phiếu trong 60 phút.'},
    {type:'fill', q:'Sau mỗi bài đọc nên ghi lại bao nhiêu cặp paraphrase? (viết số)', a:['10','mười'], ex:'**10 cặp** mỗi bài — cách nâng band nhanh nhất.'},
    {type:'fill', q:'Trong phòng thi có được dùng từ điển không? (viết “có” hoặc “không”)', a:['không','khong','ko'], ex:'**Không** — nên phải đoán theo ngữ cảnh.'},
    {type:'fill', q:'Tiền tố “un-”, “ir-”, “im-” mang nghĩa gì? (2 từ tiếng Việt)', a:['phủ định','phu dinh'], ex:'Mang nghĩa **phủ định**.'},
    {type:'mc', q:'Manh mối nào đáng tin nhất khi đoán nghĩa từ mới?', opts:['Định nghĩa ngay trong câu','Cảm giác cá nhân','Từ trông giống tiếng Việt','Đoán bừa'], a:0, ex:'Bài học thuật hay **tự định nghĩa** thuật ngữ ngay sau đó.'},
    {type:'mc', q:'Còn 2 phút cuối giờ, việc ưu tiên nhất là:', opts:['Đọc lại bài 1','Tô hết mọi ô còn trống','Kiểm tra bài 3','Nghỉ ngơi'], a:1, ex:'Bỏ trống là mất điểm chắc; đoán vẫn có cơ hội.'}
  ]
},

'ie-21': {
  id:'ie-21', track:'ielts', phase:'P2', no:21,
  title:'Speaking 1 — Part 1 & tự ghi âm sửa lỗi',
  subtitle:'Câu hỏi về bản thân: dễ nhất nhưng cũng dễ trả lời cụt nhất.',
  goals:[
    'Trả lời Part 1 đủ dài, đủ tự nhiên',
    'Dùng bộ khung câu trả lời áp dụng cho mọi chủ đề',
    'Tự ghi âm và phát hiện lỗi của chính mình'
  ],
  vocab:[
    {w:'to be honest', ipa:'/ˈɒnɪst/', pos:'phr', vi:'thật lòng mà nói', ex:'To be honest, I prefer staying in.', exvi:'Thật lòng thì tôi thích ở nhà hơn.'},
    {w:'I would say', ipa:'/aɪ wəd seɪ/', pos:'phr', vi:'tôi cho là', ex:'I would say it depends.', exvi:'Tôi cho là còn tuỳ.'},
    {w:'as far as I know', ipa:'', pos:'phr', vi:'theo tôi biết', ex:'As far as I know, it is free.', exvi:'Theo tôi biết thì miễn phí.'},
    {w:'it depends on', ipa:'/dɪˈpendz/', pos:'phr', vi:'còn tuỳ vào', ex:'It depends on the weather.', exvi:'Còn tuỳ thời tiết.'},
    {w:'that said', ipa:'/ðæt sed/', pos:'phr', vi:'dù vậy', ex:'That said, it can be tiring.', exvi:'Dù vậy, nó cũng mệt.'},
    {w:'not really into', ipa:'/ˈɪntuː/', pos:'phr', vi:'không mê lắm', ex:'I am not really into sports.', exvi:'Tôi không mê thể thao lắm.'},
    {w:'a huge fan of', ipa:'/hjuːdʒ fæn/', pos:'phr', vi:'rất mê', ex:'I am a huge fan of jazz.', exvi:'Tôi rất mê nhạc jazz.'},
    {w:'now and then', ipa:'/naʊ ən ðen/', pos:'phr', vi:'thỉnh thoảng', ex:'I cook now and then.', exvi:'Thỉnh thoảng tôi nấu ăn.'},
    {w:'on a daily basis', ipa:'/ˈdeɪli ˈbeɪsɪs/', pos:'phr', vi:'hằng ngày', ex:'I use it on a daily basis.', exvi:'Tôi dùng nó hằng ngày.'},
    {w:'unwind', ipa:'/ˌʌnˈwaɪnd/', pos:'v', vi:'thư giãn', ex:'I unwind by reading.', exvi:'Tôi thư giãn bằng cách đọc sách.'},
    {w:'hectic', ipa:'/ˈhektɪk/', pos:'adj', vi:'bận rộn tất bật', ex:'My schedule is hectic.', exvi:'Lịch của tôi kín mít.'},
    {w:'laid-back', ipa:'/leɪd bæk/', pos:'adj', vi:'thư thái, thoải mái', ex:'A laid-back atmosphere.', exvi:'Bầu không khí thư thái.'},
    {w:'nostalgic', ipa:'/nɒˈstældʒɪk/', pos:'adj', vi:'hoài niệm', ex:'It makes me nostalgic.', exvi:'Nó khiến tôi hoài niệm.'},
    {w:'come to think of it', ipa:'', pos:'phr', vi:'nghĩ lại thì', ex:'Come to think of it, yes.', exvi:'Nghĩ lại thì đúng vậy.'}
  ],
  grammar:[
    {
      t:'1. Part 1 — cấu trúc và tiêu chí',
      table:[
        ['Mục','Chi tiết'],
        ['Thời lượng','4–5 phút'],
        ['Nội dung','3 chủ đề quen thuộc: bản thân, nhà cửa, công việc/học tập, sở thích, quê hương…'],
        ['Số câu','khoảng 9–12 câu hỏi ngắn'],
        ['Độ dài trả lời','**2–3 câu** mỗi câu hỏi'],
        ['Mục đích','giám khảo làm quen giọng bạn, chưa chấm nặng — nhưng ấn tượng đầu rất quan trọng']
      ],
      table2:null,
      notes:[
        {type:'warn', text:'Hai lỗi giết điểm ở Part 1: **trả lời một từ** (“Yes.” / “No.”) và **nói lê thê 1 phút** như đang làm Part 2. Cả hai đều bị trừ Fluency.'}
      ]
    },
    {
      t:'2. Bộ khung trả lời — dùng cho mọi câu hỏi Part 1',
      formula:'CÔNG THỨC 3 BƯỚC\n① TRẢ LỜI THẲNG   – nói ngay quan điểm, đừng vòng vo\n② CHI TIẾT CỤ THỂ – thêm ví dụ, con số, tên riêng, thói quen\n③ LÝ DO hoặc MẶT TRÁI – vì sao, hoặc một điểm ngược lại nhẹ\n\nVÍ DỤ — Q: Do you like cooking?\n\nCỤT (band 4–5):\n  Yes, I like cooking. It is fun.\n\nĐẠT (band 6.5–7):\n  ① **I would say I do**, yes —\n  ② I cook dinner for my family **three or four times a week**,\n     usually simple Vietnamese dishes like braised fish.\n  ③ **That said**, I only really enjoy it when I am not in a rush;\n     cooking after a long day at work can feel like a chore.',
      notes:[{type:'tip', text:'Bước ③ là thứ tách band 6 khỏi band 7. Có mặt trái thì câu trả lời nghe **thật**, không như học thuộc.'}]
    },
    {
      t:'3. Ngôn ngữ câu giờ — thay cho “ừm… ừm…”',
      table:[
        ['Tình huống','Cách nói'],
        ['Cần vài giây nghĩ','*That’s an interesting question…* / *Let me think for a second…*'],
        ['Không chắc chắn','*I’m not entirely sure, but I’d imagine…*'],
        ['Đổi hướng giữa chừng','*Actually, thinking about it again…*'],
        ['Không nhớ từ chính xác','*I can’t think of the exact word, but it’s a kind of…*'],
        ['Nói lại cho rõ','*What I mean is… / Let me put it another way…*'],
        ['Chưa từng trải nghiệm','*I’ve never really done that, but if I had to guess…*']
      ],
      notes:[
        {type:'warn', text:'Im lặng dài hoặc “ưm… ưm…” bị trừ điểm **Fluency**. Ngôn ngữ câu giờ thì **không** bị trừ — nó còn được xem là dấu hiệu nói tự nhiên.'},
        {type:'tip', text:'Nhưng đừng lạm dụng: mỗi câu trả lời dùng tối đa **một** cụm câu giờ.'}
      ]
    },
    {
      t:'4. Tự ghi âm và sửa lỗi — quy trình 5 bước',
      formula:'LÀM MỖI NGÀY 15 PHÚT\n① Chọn 3 câu hỏi Part 1 cùng chủ đề\n② **Ghi âm** câu trả lời — nói một mạch, KHÔNG dừng lại sửa\n③ Nghe lại và chấm theo 4 tiêu chí:\n     Fluency      – có ngập ngừng dài không? có bị lặp không?\n     Vocabulary   – có dùng được collocation nào không? có lặp từ không?\n     Grammar      – có sai thì, sai số ít/nhiều, thiếu mạo từ không?\n     Pronunciation– có nuốt âm cuối không? trọng âm đúng chưa?\n④ Ghi ra **3 lỗi cụ thể** (không ghi chung chung kiểu “nói chưa hay”)\n⑤ Ghi âm lại chính 3 câu đó, sửa đúng 3 lỗi vừa ghi\n\nMỗi tuần nghe lại bản ghi của tuần trước để thấy tiến bộ.',
      notes:[{type:'warn', text:'Đừng vừa nói vừa dừng lại sửa. Ghi một mạch mới lộ ra lỗi thật khi bạn ở trong phòng thi.'}]
    }
  ],
  phrases:[
    ['That is an interesting question. Let me think.','Câu hỏi hay đấy. Để tôi nghĩ đã.'],
    ['I would say I do, yes.','Tôi cho là có.'],
    ['To be honest, I have mixed feelings about it.','Thật lòng thì tôi có cảm xúc lẫn lộn.'],
    ['I do that three or four times a week.','Tôi làm việc đó ba bốn lần một tuần.'],
    ['That said, it can be quite tiring.','Dù vậy, nó cũng khá mệt.'],
    ['It really depends on the situation.','Cái đó thật sự tuỳ tình huống.'],
    ['I am not really into that kind of thing.','Tôi không mê kiểu đó lắm.'],
    ['I usually unwind by listening to music.','Tôi thường thư giãn bằng cách nghe nhạc.'],
    ['My schedule is pretty hectic these days.','Dạo này lịch của tôi khá kín.'],
    ['I have never really thought about that before.','Tôi chưa từng nghĩ về điều đó.'],
    ['Come to think of it, that is true.','Nghĩ lại thì đúng thật.']
  ],
  exercises:[
    {type:'mc', q:'Độ dài hợp lý cho một câu trả lời Part 1 là:', opts:['1 từ','1 câu','2–3 câu','1 phút liên tục'], a:2, ex:'**2–3 câu**: trả lời + chi tiết + lý do/mặt trái.'},
    {type:'mc', q:'Part 1 kéo dài bao lâu?', opts:['2 phút','4–5 phút','8 phút','11 phút'], a:1, ex:'**4–5 phút**, khoảng 9–12 câu hỏi.'},
    {type:'mc', q:'Điều gì tách band 6 khỏi band 7 ở Part 1?', opts:['Nói thật to','Thêm chi tiết cụ thể và mặt trái','Dùng từ càng khó càng tốt','Trả lời thật nhanh'], a:1, ex:'Chi tiết cụ thể + mặt trái làm câu trả lời nghe thật.'},
    {type:'mc', q:'“ưm… ưm…” kéo dài bị trừ điểm ở tiêu chí nào?', opts:['Fluency','Vocabulary','Grammar','Pronunciation'], a:0, ex:'Ngập ngừng dài trừ điểm **Fluency & Coherence**.'},
    {type:'mc', q:'Khi ghi âm để tự sửa, nên:', opts:['Dừng lại sửa ngay khi sai','Nói một mạch rồi nghe lại','Chỉ ghi câu dễ','Ghi bằng tiếng Việt'], a:1, ex:'Nói một mạch mới lộ ra lỗi thật.'},
    {type:'fill', q:'Cụm câu giờ: “That is an interesting ___.” (1 từ)', a:['question'], ex:'**That’s an interesting question.**'},
    {type:'fill', q:'Điền: It really ___ on the situation. (1 từ)', a:['depends'], ex:'**depends on**.'},
    {type:'fill', q:'Speaking có bao nhiêu tiêu chí chấm? (viết số)', a:['4','bốn','bon'], ex:'**4 tiêu chí**, mỗi cái 25%.'},
    {type:'mc', q:'Mỗi câu trả lời nên dùng tối đa mấy cụm câu giờ?', opts:['càng nhiều càng tốt','1 cụm','3 cụm','không dùng'], a:1, ex:'Lạm dụng sẽ thành máy móc.'},
    {type:'mc', q:'Câu trả lời “Yes.” cho câu hỏi Part 1 sẽ:', opts:['Được điểm cao vì ngắn gọn','Bị trừ điểm vì quá ngắn','Không ảnh hưởng','Được hỏi lại'], a:1, ex:'Trả lời cụt không cho giám khảo cơ sở để chấm.'}
  ]
},

'ie-22': {
  id:'ie-22', track:'ielts', phase:'P2', no:22,
  title:'Speaking 2 — Part 2 & Part 3',
  subtitle:'Nói một mạch 2 phút và thảo luận chủ đề trừu tượng.',
  goals:[
    'Lập dàn ý cue card trong 1 phút chuẩn bị',
    'Nói liên tục 2 phút không bị hụt ý',
    'Dùng khung PREP cho câu hỏi Part 3'
  ],
  vocab:[
    {w:'memorable', ipa:'/ˈmemərəbl/', pos:'adj', vi:'đáng nhớ', ex:'A memorable trip.', exvi:'Một chuyến đi đáng nhớ.'},
    {w:'turning point', ipa:'/ˈtɜːnɪŋ pɔɪnt/', pos:'n', vi:'bước ngoặt', ex:'It was a turning point.', exvi:'Đó là một bước ngoặt.'},
    {w:'look back on', ipa:'/lʊk bæk/', pos:'phr v', vi:'nhìn lại', ex:'I look back on it fondly.', exvi:'Tôi nhớ về nó với tình cảm đẹp.'},
    {w:'stand out', ipa:'/stænd aʊt/', pos:'phr v', vi:'nổi bật', ex:'One day stands out.', exvi:'Có một ngày nổi bật.'},
    {w:'in hindsight', ipa:'/ˈhaɪndsaɪt/', pos:'phr', vi:'nhìn lại mới thấy', ex:'In hindsight, it was worth it.', exvi:'Nhìn lại thì cũng đáng.'},
    {w:'arguably', ipa:'/ˈɑːɡjuəbli/', pos:'adv', vi:'có thể cho rằng', ex:'Arguably the best option.', exvi:'Có thể xem là lựa chọn tốt nhất.'},
    {w:'to some extent', ipa:'/ɪkˈstent/', pos:'phr', vi:'ở mức độ nào đó', ex:'To some extent, I agree.', exvi:'Ở mức độ nào đó tôi đồng ý.'},
    {w:'generally speaking', ipa:'/ˈdʒenrəli/', pos:'phr', vi:'nói chung', ex:'Generally speaking, yes.', exvi:'Nói chung là có.'},
    {w:'the vast majority', ipa:'/vɑːst məˈdʒɒrəti/', pos:'phr', vi:'đại đa số', ex:'The vast majority of people.', exvi:'Đại đa số mọi người.'},
    {w:'on the whole', ipa:'/ɒn ðə həʊl/', pos:'phr', vi:'nhìn chung', ex:'On the whole, it works.', exvi:'Nhìn chung là ổn.'},
    {w:'drawback', ipa:'/ˈdrɔːbæk/', pos:'n', vi:'nhược điểm', ex:'The main drawback is cost.', exvi:'Nhược điểm chính là chi phí.'},
    {w:'trade-off', ipa:'/ˈtreɪd ɒf/', pos:'n', vi:'sự đánh đổi', ex:'There is always a trade-off.', exvi:'Luôn có sự đánh đổi.'},
    {w:'in the long run', ipa:'/lɒŋ rʌn/', pos:'phr', vi:'về lâu dài', ex:'It pays off in the long run.', exvi:'Về lâu dài sẽ đáng.'},
    {w:'take your point', ipa:'', pos:'phr', vi:'hiểu ý bạn', ex:'I take your point, but…', exvi:'Tôi hiểu ý bạn, nhưng…'}
  ],
  grammar:[
    {
      t:'1. Part 2 — Cue card',
      table:[
        ['Mục','Chi tiết'],
        ['Thời gian chuẩn bị','**1 phút** — có giấy bút để ghi'],
        ['Thời gian nói','**1–2 phút**, nói một mình'],
        ['Cấu trúc thẻ','1 chủ đề + 3–4 gạch đầu dòng gợi ý + 1 câu “and explain why…”'],
        ['Sau khi nói','giám khảo hỏi 1–2 câu ngắn liên quan']
      ],
      formula:'DÙNG 1 PHÚT CHUẨN BỊ THẾ NÀO\n· KHÔNG viết câu hoàn chỉnh — không kịp đâu\n· Ghi **4 nhóm từ khoá**, mỗi gạch đầu dòng một nhóm\n· Thêm 2–3 **tính từ hay** và 1 **collocation** định dùng\n· Chừa chỗ cho phần “explain why” — đây là phần nói lâu nhất\n\nVÍ DỤ GHI CHÚ (thẻ: Describe a memorable trip)\n  where  – Sa Pa, north, 2023, night bus\n  who    – 3 uni friends, first trip w/out family\n  what   – trekking, rice terraces, homestay, sudden rain\n  why    – turning point, more independent, still nostalgic'
    },
    {
      t:'2. Nói đủ 2 phút — bộ khung theo dòng thời gian',
      formula:'MỞ ĐẦU (10 giây)\n  “I’d like to talk about… The reason I’ve chosen this is that…”\n\nTHÂN BÀI (80–90 giây) — bám 4 gạch đầu dòng\n  “It happened back in 2023, when…”\n  “What made it special was…”\n  “I remember quite vividly that…”\n  “At one point, …”\n\nKẾT (20 giây) — trả lời câu “explain why”\n  “Looking back, I’d say it was a real turning point because…”\n  “That’s why it still stands out for me even now.”\n\nMẸO CHỐNG HỤT Ý:\n· Kể theo **dòng thời gian** — trước, trong, sau\n· Thêm **chi tiết giác quan**: trời mưa thế nào, mùi gì, nghe thấy gì\n· Thêm **cảm xúc lúc đó** và **cảm xúc bây giờ** — luôn kéo dài được',
      notes:[
        {type:'tip', text:'Nói tới khi giám khảo bảo dừng. Bị ngắt giữa chừng **không bị trừ điểm**; nói thiếu 40 giây thì bị.'},
        {type:'warn', text:'Đừng học thuộc bài mẫu. Giám khảo nhận ra ngay giọng đọc thuộc lòng và sẽ hỏi thêm câu lạ để kiểm tra.'}
      ]
    },
    {
      t:'3. Part 3 — thảo luận trừu tượng',
      formula:'ĐẶC ĐIỂM: 4–5 phút, câu hỏi mở rộng từ chủ đề Part 2,\nmang tính xã hội chứ không còn về cá nhân bạn.\n**Đây là phần quyết định band 7+.**\n\nKHUNG PREP\n  **P**oint   – “I’d say that…” / “In my view, …”\n  **R**eason  – “The main reason for this is that…”\n  **E**xample – “For instance, in Vietnam…”\n  **P**oint   – “So overall, I think…”\n\nVÍ DỤ — Q: Why do people travel less than before?\n  P: I’d say the main factor is cost.\n  R: Flights and accommodation have become far more expensive,\n     while wages haven’t risen at the same pace.\n  E: For instance, a domestic flight in Vietnam now costs almost\n     twice what it did five years ago.\n  P: So for most families, travelling has simply become a luxury.',
      table:[
        ['Dạng câu hỏi Part 3','Cách xử lý'],
        ['So sánh quá khứ – hiện tại','dùng *used to*, *these days*, hiện tại hoàn thành'],
        ['Dự đoán tương lai','dùng *will probably*, *is likely to*, *I imagine*'],
        ['Nêu ưu – nhược','*On the one hand… on the other hand…*'],
        ['Đề xuất giải pháp','*One way to tackle this would be to…*'],
        ['Ý kiến trái chiều','*Some people argue that… However, I’d say…*']
      ]
    },
    {
      t:'4. Bốn tiêu chí chấm và cách ăn điểm',
      table:[
        ['Tiêu chí','Muốn điểm cao cần'],
        ['**Fluency & Coherence**','Nói liên tục, không ngập ngừng dài; dùng từ nối tự nhiên; ý mạch lạc'],
        ['**Lexical Resource**','Từ vựng đa dạng, có collocation và idiom dùng **đúng chỗ**; biết paraphrase khi bí từ'],
        ['**Grammatical Range**','Trộn nhiều cấu trúc: điều kiện, mệnh đề quan hệ, bị động, so sánh'],
        ['**Pronunciation**','Rõ **âm cuối**, đúng **trọng âm**, có **ngữ điệu** lên xuống']
      ],
      formula:'BA ĐIỀU TUYỆT ĐỐI TRÁNH\n① Học thuộc lòng câu trả lời → trừ nặng Fluency\n② Nói quá ngắn → không đủ dữ liệu để chấm, band thấp\n③ Nhồi từ khó dùng sai ngữ cảnh → trừ Lexical Resource\n\nBA ĐIỀU NÊN LÀM\n① Sai ngữ pháp mà nói trôi chảy vẫn hơn nói đúng mà ngắc ngứ\n② Bí từ thì **mô tả vòng quanh**, đừng im lặng\n③ Ngữ điệu lên xuống rõ ràng — thà hơi quá còn hơn phẳng lì'
    }
  ],
  phrases:[
    ['I would like to talk about…','Tôi muốn nói về…'],
    ['The reason I have chosen this is that…','Lý do tôi chọn điều này là…'],
    ['It happened back in 2023, when…','Chuyện xảy ra hồi 2023, khi…'],
    ['What made it special was…','Điều làm nó đặc biệt là…'],
    ['I remember quite vividly that…','Tôi nhớ rất rõ rằng…'],
    ['Looking back, I would say…','Nhìn lại thì tôi cho rằng…'],
    ['That is why it still stands out for me.','Đó là lý do nó vẫn nổi bật với tôi.'],
    ['In my view, the main factor is…','Theo tôi, yếu tố chính là…'],
    ['For instance, in Vietnam…','Ví dụ như ở Việt Nam…'],
    ['On the one hand… on the other hand…','Một mặt… mặt khác…'],
    ['I take your point, but I see it differently.','Tôi hiểu ý bạn, nhưng tôi nghĩ khác.'],
    ['One way to tackle this would be to…','Một cách giải quyết là…']
  ],
  exercises:[
    {type:'mc', q:'Part 2 cho bao nhiêu thời gian chuẩn bị?', opts:['30 giây','1 phút','2 phút','không có'], a:1, ex:'**1 phút** chuẩn bị, có giấy bút.'},
    {type:'mc', q:'Trong 1 phút chuẩn bị, nên làm gì?', opts:['Viết câu hoàn chỉnh','Ghi 4 nhóm từ khoá','Học thuộc bài mẫu','Ngồi im nghĩ'], a:1, ex:'Viết câu hoàn chỉnh không kịp; ghi **từ khoá** theo 4 gạch đầu dòng.'},
    {type:'mc', q:'Bị giám khảo ngắt lời khi đang nói Part 2 thì:', opts:['Bị trừ điểm','Không bị trừ điểm','Phải nói lại','Mất nửa điểm'], a:1, ex:'Bị ngắt là bình thường; **nói thiếu** mới bị trừ.'},
    {type:'mc', q:'Khung PREP gồm:', opts:['Point – Reason – Example – Point','Plan – Read – Edit – Publish','Practice – Repeat – Explain – Perform','Past – Recent – Every – Present'], a:0, ex:'**P**oint – **R**eason – **E**xample – **P**oint.'},
    {type:'mc', q:'Phần nào quyết định band 7+ trong Speaking?', opts:['Part 1','Part 2','Part 3','Cả ba như nhau'], a:2, ex:'**Part 3** đòi hỏi tư duy và ngôn ngữ trừu tượng.'},
    {type:'fill', q:'Điền: Looking ___, I would say it was a turning point. (1 từ)', a:['back'], ex:'**Looking back** = nhìn lại.'},
    {type:'fill', q:'Điền: To some ___, I agree with that. (1 từ)', a:['extent'], ex:'**To some extent** = ở mức độ nào đó.'},
    {type:'fill', q:'Khi bí từ, thay vì im lặng nên làm gì? (2 từ tiếng Việt: “mô ...”)', a:['mô tả','mo ta'], ex:'**Mô tả** vòng quanh (paraphrase).'},
    {type:'mc', q:'Vì sao không nên học thuộc lòng câu trả lời?', opts:['Mất thời gian','Giám khảo nhận ra và trừ điểm Fluency','Khó nhớ','Không được phép mang giấy'], a:1, ex:'Giọng đọc thuộc lòng bị trừ nặng.'},
    {type:'mc', q:'Cách kéo dài câu trả lời Part 2 hiệu quả nhất là:', opts:['Nói chậm lại','Thêm chi tiết giác quan và cảm xúc','Lặp lại câu đã nói','Đếm số'], a:1, ex:'Chi tiết giác quan và cảm xúc luôn kéo dài được tự nhiên.'}
  ]
},

'ie-23': {
  id:'ie-23', track:'ielts', phase:'P2', no:23,
  title:'Writing 1 — Câu đúng & Task 1 mô tả biểu đồ',
  subtitle:'Viết câu chuẩn trước, rồi ghép thành bài mô tả biểu đồ 150 từ.',
  goals:[
    'Viết câu đơn và câu ghép không lỗi',
    'Nắm bố cục 4 đoạn của Task 1',
    'Dùng đúng từ vựng mô tả xu hướng'
  ],
  vocab:[
    {w:'rise / increase', ipa:'/raɪz/', pos:'v', vi:'tăng', ex:'Sales rose sharply.', exvi:'Doanh số tăng mạnh.'},
    {w:'fall / decline', ipa:'/fɔːl/', pos:'v', vi:'giảm', ex:'Numbers declined steadily.', exvi:'Con số giảm đều.'},
    {w:'soar / surge', ipa:'/sɔː/', pos:'v', vi:'tăng vọt', ex:'Demand soared in 2020.', exvi:'Nhu cầu tăng vọt năm 2020.'},
    {w:'plummet / plunge', ipa:'/ˈplʌmɪt/', pos:'v', vi:'lao dốc', ex:'Prices plummeted.', exvi:'Giá lao dốc.'},
    {w:'peak at', ipa:'/piːk/', pos:'v', vi:'đạt đỉnh ở mức', ex:'It peaked at 80%.', exvi:'Nó đạt đỉnh 80%.'},
    {w:'level off / plateau', ipa:'/ˈplætəʊ/', pos:'v', vi:'chững lại', ex:'The figure levelled off.', exvi:'Con số chững lại.'},
    {w:'fluctuate', ipa:'/ˈflʌktʃueɪt/', pos:'v', vi:'dao động', ex:'Prices fluctuated all year.', exvi:'Giá dao động cả năm.'},
    {w:'remain stable', ipa:'/ˈsteɪbl/', pos:'phr', vi:'giữ ổn định', ex:'It remained stable.', exvi:'Nó giữ ổn định.'},
    {w:'sharply', ipa:'/ˈʃɑːpli/', pos:'adv', vi:'mạnh, đột ngột', ex:'It rose sharply.', exvi:'Nó tăng mạnh.'},
    {w:'steadily', ipa:'/ˈstedɪli/', pos:'adv', vi:'đều đặn', ex:'It grew steadily.', exvi:'Nó tăng đều.'},
    {w:'slightly', ipa:'/ˈslaɪtli/', pos:'adv', vi:'nhẹ', ex:'It fell slightly.', exvi:'Nó giảm nhẹ.'},
    {w:'respectively', ipa:'/rɪˈspektɪvli/', pos:'adv', vi:'lần lượt', ex:'A and B rose 5% and 8% respectively.', exvi:'A và B tăng lần lượt 5% và 8%.'},
    {w:'account for', ipa:'/əˈkaʊnt/', pos:'v', vi:'chiếm (tỷ lệ)', ex:'Exports account for 40%.', exvi:'Xuất khẩu chiếm 40%.'},
    {w:'whereas', ipa:'/weərˈæz/', pos:'conj', vi:'trong khi (đối lập)', ex:'A rose, whereas B fell.', exvi:'A tăng, trong khi B giảm.'}
  ],
  grammar:[
    {
      t:'1. Viết câu đúng — nền của mọi bài viết',
      table:[
        ['Lỗi','Sai','Đúng'],
        ['Thiếu chủ ngữ','*Is important to study.*','**It is** important to study.'],
        ['Thiếu động từ','*The number of students increasing.*','The number of students **is increasing**.'],
        ['Chia sai số ít/nhiều','*The number of people **are** rising.*','The number of people **is** rising.'],
        ['Thiếu mạo từ','*Chart shows…*','**The** chart shows…'],
        ['Dính câu','*It rained, we stayed in.*','It rained, **so** we stayed in.'],
        ['Câu cụt','*Because prices rose.*','**Demand fell** because prices rose.']
      ],
      formula:'BA CẤU TRÚC CÂU AN TOÀN CHO TASK 1\n① S + V + adv + (from X to Y)\n   Sales **rose sharply from** 20% **to** 45%.\n\n② There was + a/an + adj + noun + in + N\n   There was **a sharp rise in** sales.\n\n③ S + V, + V-ing (mệnh đề phân từ nối tiếp)\n   Sales rose to 45% in 2010, **before falling** to 30% in 2015.',
      notes:[{type:'tip', text:'Chỉ cần 3 cấu trúc này, xoay vòng và thay từ vựng là đủ viết trọn Task 1 mà không lặp.'}]
    },
    {
      t:'2. Task 1 — bố cục 4 đoạn (150 từ, 20 phút)',
      formula:'ĐOẠN 1 — PARAPHRASE ĐỀ BÀI (1 câu)\n  The chart **illustrates** the proportion of X **between** 2000 **and** 2020.\n  (đổi: shows→illustrates, percentage→proportion, from…to→between…and)\n\nĐOẠN 2 — OVERVIEW (2 câu, **TUYỆT ĐỐI KHÔNG số liệu**)\n  **Overall**, X increased steadily throughout the period, **whereas**\n  Y showed the opposite trend. The most notable change occurred in 2010.\n\nĐOẠN 3 — CHI TIẾT NHÓM 1 (có số liệu)\n  X **rose sharply from** 20% **to** 45% between 2000 and 2010,\n  **before levelling off at** around 40%.\n\nĐOẠN 4 — CHI TIẾT NHÓM 2 (có số liệu)\n  **In contrast**, Y **fell gradually from** 60% **to** just 25%,\n  **with the sharpest decline occurring after** 2015.',
      table:[
        ['Loại biểu đồ','Cách nhóm thông tin'],
        ['Line graph','theo xu hướng: nhóm tăng / nhóm giảm'],
        ['Bar chart','theo nhóm cao nhất / thấp nhất'],
        ['Pie chart','theo tỷ lệ lớn nhất → nhỏ nhất'],
        ['Table','chọn số cao nhất, thấp nhất, thay đổi lớn nhất'],
        ['Process','theo **thứ tự các bước**, dùng bị động'],
        ['Map','theo **thay đổi trước – sau**, dùng bị động']
      ]
    },
    {
      t:'3. Từ vựng mô tả xu hướng',
      table:[
        ['Xu hướng','Động từ','Danh từ tương ứng'],
        ['Tăng','rise, increase, grow, climb, soar, surge','a rise / an increase **in**'],
        ['Giảm','fall, decline, decrease, drop, plummet','a fall / a decline **in**'],
        ['Ổn định','remain stable, level off, plateau','stability'],
        ['Dao động','fluctuate, vary','a fluctuation'],
        ['Đỉnh / đáy','peak at, bottom out at','a peak of / a low of']
      ],
      formula:'MỨC ĐỘ\n  rất mạnh : dramatically, sharply, significantly, considerably\n  đều đặn  : steadily, gradually, consistently\n  nhẹ      : slightly, marginally\n\nCÂU HAY DÙNG\n  X rose **from** 20% **to** 45% **between** 2000 **and** 2010.\n  There was **a significant increase in** X **over the period**.\n  X **accounted for** 40% **of** the total.\n  X and Y stood at 30% and 45% **respectively**.\n  **Compared with** X, Y remained relatively stable.'
    },
    {
      t:'4. Ba lỗi làm mất band nặng nhất ở Task 1',
      table:[
        ['Lỗi','Hậu quả'],
        ['**Không có Overview**','Mất tối đa 1 band ở tiêu chí Task Achievement — lỗi nặng nhất'],
        ['**Nêu ý kiến / giải thích nguyên nhân**','Task 1 chỉ **mô tả** những gì biểu đồ thể hiện, không bàn luận'],
        ['**Liệt kê hết mọi số liệu**','Bài thành bảng số, mất điểm Coherence — chỉ chọn số **tiêu biểu**']
      ],
      formula:'CHECKLIST 2 PHÚT CUỐI\n  ☐ Đã có đoạn Overview chưa? Có bắt đầu bằng “Overall” không?\n  ☐ Overview có lỡ chèn số liệu không? (không được có)\n  ☐ Đủ 150 từ chưa? (thiếu là bị trừ)\n  ☐ Có dùng lại nguyên văn đề bài không? (phải paraphrase)\n  ☐ Thì có nhất quán không? (quá khứ cho mốc đã qua, tương lai cho dự báo)\n  ☐ Chính tả tên trục, đơn vị, năm có đúng không?',
      notes:[{type:'warn', text:'Viết dưới 150 từ bị trừ điểm tự động. Tập đếm: bài mẫu ở trên khoảng **160–170 từ** là vừa đẹp.'}]
    }
  ],
  phrases:[
    ['The chart illustrates the proportion of…','Biểu đồ minh hoạ tỷ lệ của…'],
    ['Overall, the figures show an upward trend.','Nhìn chung, các con số cho thấy xu hướng tăng.'],
    ['The number rose sharply before levelling off.','Con số tăng mạnh rồi chững lại.'],
    ['In contrast, the figure for B declined.','Ngược lại, con số của B giảm.'],
    ['X accounted for 40% of the total.','X chiếm 40% tổng số.'],
    ['A and B stood at 30% and 45% respectively.','A và B lần lượt là 30% và 45%.'],
    ['There was a significant increase over the period.','Có mức tăng đáng kể trong giai đoạn này.'],
    ['The figure peaked at 80% in 2015.','Con số đạt đỉnh 80% vào năm 2015.'],
    ['It remained relatively stable thereafter.','Sau đó nó khá ổn định.'],
    ['The most notable change occurred in 2010.','Thay đổi đáng chú ý nhất diễn ra năm 2010.']
  ],
  exercises:[
    {type:'mc', q:'Task 1 tối thiểu bao nhiêu từ?', opts:['100','150','200','250'], a:1, ex:'**150 từ** — thiếu là bị trừ tự động.'},
    {type:'mc', q:'Đoạn Overview KHÔNG được chứa:', opts:['xu hướng chung','so sánh tổng quát','số liệu cụ thể','từ “Overall”'], a:2, ex:'Overview nêu **xu hướng chung, không số liệu**.'},
    {type:'mc', q:'Lỗi nào làm mất band nặng nhất ở Task 1?', opts:['Sai một từ vựng','Không có Overview','Viết 170 từ','Dùng nhiều dấu phẩy'], a:1, ex:'Thiếu Overview mất tối đa **1 band** Task Achievement.'},
    {type:'mc', q:'“Sales ___ in July before falling.” (đạt đỉnh)', opts:['plummeted','peaked','plateaued','declined'], a:1, ex:'**peak** = đạt đỉnh.'},
    {type:'mc', q:'Trong Task 1 có được nêu nguyên nhân của xu hướng không?', opts:['Có, càng nhiều càng tốt','Không, chỉ mô tả','Chỉ ở đoạn cuối','Tuỳ loại biểu đồ'], a:1, ex:'Task 1 chỉ **mô tả**, không giải thích hay nêu ý kiến.'},
    {type:'fill', q:'Điền động từ chỉ “tăng vọt” (1 từ): Demand ___ after the launch.', a:['soared','surged','rocketed'], ex:'**soared / surged**.'},
    {type:'fill', q:'Điền trạng từ chỉ “nhẹ” (1 từ): The figure rose ___ , by only 2%.', a:['slightly','marginally'], ex:'**slightly / marginally**.'},
    {type:'fill', q:'Điền: X and Y stood at 30% and 45% ___ . (1 từ)', a:['respectively'], ex:'**respectively** = lần lượt.'},
    {type:'fill', q:'Sửa lỗi: “The number of students are increasing.” → The number of students ___ increasing. (1 từ)', a:['is'], ex:'*The number of…* chia **số ít**.'},
    {type:'mc', q:'Câu nào phù hợp làm câu OVERVIEW?', opts:['In 2010, the figure was 25%.','Overall, X increased steadily while Y declined.','I think the trend is positive.','The chart is about population.'], a:1, ex:'Nêu **xu hướng chung, không số liệu**.'}
  ]
},

'ie-24': {
  id:'ie-24', track:'ielts', phase:'P2', no:24,
  title:'Writing 2 — Task 2 bài luận & kế hoạch thi',
  subtitle:'Buổi cuối lộ trình: viết bài luận 250 từ và chốt kế hoạch bước vào phòng thi.',
  goals:[
    'Nhận dạng 4 kiểu đề Task 2 và chọn đúng bố cục',
    'Viết đoạn thân bài theo khung PEEL',
    'Có kế hoạch 4 tuần cuối trước ngày thi'
  ],
  vocab:[
    {w:'proponent', ipa:'/prəˈpəʊnənt/', pos:'n', vi:'người ủng hộ', ex:'Proponents argue that…', exvi:'Những người ủng hộ cho rằng…'},
    {w:'opponent', ipa:'/əˈpəʊnənt/', pos:'n', vi:'người phản đối', ex:'Opponents claim otherwise.', exvi:'Phe phản đối thì nói ngược lại.'},
    {w:'compelling', ipa:'/kəmˈpelɪŋ/', pos:'adj', vi:'thuyết phục', ex:'A compelling argument.', exvi:'Một lập luận thuyết phục.'},
    {w:'detrimental', ipa:'/ˌdetrɪˈmentl/', pos:'adj', vi:'có hại', ex:'Detrimental to health.', exvi:'Có hại cho sức khoẻ.'},
    {w:'beneficial', ipa:'/ˌbenɪˈfɪʃl/', pos:'adj', vi:'có lợi', ex:'Beneficial for the economy.', exvi:'Có lợi cho nền kinh tế.'},
    {w:'outweigh', ipa:'/ˌaʊtˈweɪ/', pos:'v', vi:'lớn hơn, vượt trội', ex:'The benefits outweigh the drawbacks.', exvi:'Lợi ích lớn hơn bất lợi.'},
    {w:'address an issue', ipa:'/əˈdres/', pos:'phr', vi:'giải quyết vấn đề', ex:'We must address this issue.', exvi:'Ta phải giải quyết vấn đề này.'},
    {w:'implement a policy', ipa:'/ˈɪmplɪment/', pos:'phr', vi:'triển khai chính sách', ex:'Governments should implement policies.', exvi:'Chính phủ nên triển khai chính sách.'},
    {w:'raise awareness', ipa:'/əˈweənəs/', pos:'phr', vi:'nâng cao nhận thức', ex:'Campaigns raise awareness.', exvi:'Chiến dịch nâng cao nhận thức.'},
    {w:'a case in point', ipa:'/keɪs ɪn pɔɪnt/', pos:'phr', vi:'một ví dụ điển hình', ex:'A case in point is Singapore.', exvi:'Ví dụ điển hình là Singapore.'},
    {w:'admittedly', ipa:'/ədˈmɪtɪdli/', pos:'adv', vi:'phải thừa nhận là', ex:'Admittedly, it is costly.', exvi:'Phải thừa nhận là nó tốn kém.'},
    {w:'on balance', ipa:'/ɒn ˈbæləns/', pos:'phr', vi:'cân nhắc tổng thể', ex:'On balance, I support it.', exvi:'Cân nhắc tổng thể, tôi ủng hộ.'},
    {w:'in the long term', ipa:'/lɒŋ tɜːm/', pos:'phr', vi:'về dài hạn', ex:'In the long term, it pays off.', exvi:'Về dài hạn thì đáng.'},
    {w:'a growing body of evidence', ipa:'', pos:'phr', vi:'ngày càng nhiều bằng chứng', ex:'A growing body of evidence suggests…', exvi:'Ngày càng nhiều bằng chứng cho thấy…'}
  ],
  grammar:[
    {
      t:'1. Bốn kiểu đề Task 2',
      table:[
        ['Kiểu đề','Yêu cầu','Bố cục thân bài'],
        ['**Opinion** (agree or disagree)','Nêu và bảo vệ một lập trường','2 đoạn cùng chiều với lập trường của bạn'],
        ['**Discussion** (discuss both views)','Trình bày cả hai quan điểm + ý kiến riêng','đoạn 1: quan điểm A · đoạn 2: quan điểm B + ý kiến bạn'],
        ['**Problem – Solution**','Nêu vấn đề và cách giải quyết','đoạn 1: nguyên nhân/vấn đề · đoạn 2: giải pháp'],
        ['**Advantages – Disadvantages**','Cân nhắc hai mặt','đoạn 1: lợi · đoạn 2: hại · kết luận bên nào nặng hơn']
      ],
      notes:[
        {type:'warn', text:'Đọc **kỹ đề** trước khi viết. Đề hỏi “discuss both views **and give your opinion**” mà bạn quên nêu ý kiến riêng là mất điểm Task Response ngay.'}
      ]
    },
    {
      t:'2. Bố cục chuẩn (250 từ, 40 phút)',
      formula:'MỞ BÀI (2–3 câu, ~40 từ)\n  ① Paraphrase đề bài\n  ② Nêu lập trường / định hướng bài viết\n  Mẫu: “It is often argued that… While there are undoubtedly\n        drawbacks, I believe the advantages are more significant.”\n\nTHÂN BÀI 1 (~90 từ) — khung PEEL\n  **P**oint    câu chủ đề nêu ý chính\n  **E**vidence dẫn chứng, ví dụ, số liệu\n  **E**xplain  giải thích vì sao dẫn chứng ủng hộ ý chính\n  **L**ink     câu chốt hoặc nối sang đoạn sau\n\nTHÂN BÀI 2 (~90 từ) — PEEL với ý thứ hai\n\nKẾT BÀI (2 câu, ~30 từ)\n  ① Tóm lại lập trường  ② Câu chốt hoặc khuyến nghị\n  Mẫu: “In conclusion, although… , I firmly believe that…\n        Governments should therefore…”',
      ex:[
        ['**Đoạn PEEL mẫu:** *Working from home improves productivity.* (P) *A 2023 study found that remote workers completed 13% more tasks than office-based staff.* (E) *This is largely because they face far fewer interruptions and avoid long commutes.* (E) *Therefore, flexible arrangements clearly benefit both employers and employees.* (L)','Bốn câu, đủ một đoạn thân bài chuẩn.']
      ]
    },
    {
      t:'3. Bốn tiêu chí chấm và cách ăn điểm',
      table:[
        ['Tiêu chí (25% mỗi cái)','Muốn điểm cao cần'],
        ['**Task Response**','Trả lời **hết** mọi phần của đề; lập trường rõ ràng, nhất quán từ mở tới kết; có ví dụ cụ thể'],
        ['**Coherence & Cohesion**','Bố cục rõ; **mỗi đoạn một ý chính**; từ nối đúng chức năng và **không lạm dụng**'],
        ['**Lexical Resource**','Từ vựng đa dạng, collocation đúng; **không lặp lại từ trong đề**; paraphrase tốt'],
        ['**Grammatical Range**','Trộn câu đơn – phức; dùng được mệnh đề quan hệ, điều kiện, bị động; ít lỗi']
      ],
      formula:'PHÂN BỔ 40 PHÚT\n  0–5 phút   Đọc kỹ đề, gạch từ khoá, lập dàn ý: 2 ý chính + 2 ví dụ\n  5–35 phút  Viết liền mạch, KHÔNG dừng lại sửa\n  35–40 phút Soát: chia thì, số ít/nhiều, mạo từ, chính tả, đếm số từ',
      notes:[{type:'tip', text:'5 phút lập dàn ý không phải là mất thời gian. Bài có dàn ý rõ luôn ăn điểm Coherence cao hơn hẳn bài viết tới đâu nghĩ tới đó.'}]
    },
    {
      t:'4. Kế hoạch 4 tuần cuối trước ngày thi',
      table:[
        ['Tuần','Trọng tâm','Chỉ tiêu'],
        ['Tuần 1','Ôn lại toàn bộ ngữ pháp Giai đoạn 1 (Buổi 5–9). Làm 1 đề Listening + Reading để đo mốc','Biết mình đang ở band nào'],
        ['Tuần 2','Writing: viết 3 bài Task 1 + 3 bài Task 2, tự soát theo checklist','Quen bố cục, không còn phải nghĩ'],
        ['Tuần 3','Speaking: mỗi ngày 1 cue card + 3 câu Part 1, ghi âm và nghe lại','Nói 2 phút không hụt ý'],
        ['Tuần 4','**2 đề thi thử đầy đủ** đúng điều kiện phòng thi. Sửa lỗi lặp lại. KHÔNG học kiến thức mới','Giữ nhịp, vào phòng thi tự tin']
      ],
      formula:'CHECKLIST TRƯỚC NGÀY THI\n  ☐ Đã làm ít nhất **3 đề thi thử đầy đủ** đúng thời gian\n  ☐ Đã thuộc bố cục Task 1 và Task 2, không cần nghĩ khi vào phòng thi\n  ☐ Có sẵn **10–15 collocation** dùng được cho mọi chủ đề Writing\n  ☐ Đã luyện **shadowing** ít nhất 20 buổi\n  ☐ Đã biết quản lý thời gian: Reading 20 phút/bài, Writing 20 + 40\n  ☐ Đã kiểm tra giấy tờ, địa điểm thi, và ngủ đủ đêm trước',
      notes:[
        {type:'tip', text:'**Chúc mừng — bạn đã hoàn thành lộ trình 24 buổi.** Từ đây hãy duy trì: mỗi ngày 20 phút nghe + 20 phút từ vựng, mỗi tuần 2 bài viết và 2 buổi nói. Đó là thứ giữ band cho bạn.'}
      ]
    }
  ],
  phrases:[
    ['It is often argued that…','Người ta thường cho rằng…'],
    ['While there are undoubtedly drawbacks, I believe…','Dù chắc chắn có bất lợi, tôi tin rằng…'],
    ['The primary reason for this is that…','Lý do chính là…'],
    ['A case in point is Singapore.','Một ví dụ điển hình là Singapore.'],
    ['This is evidenced by recent research.','Điều này được chứng minh qua nghiên cứu gần đây.'],
    ['Admittedly, this approach has limitations.','Phải thừa nhận cách này có hạn chế.'],
    ['While it is true that…, it should be noted that…','Dù đúng là…, cần lưu ý rằng…'],
    ['The benefits clearly outweigh the drawbacks.','Lợi ích rõ ràng lớn hơn bất lợi.'],
    ['Governments should implement stricter policies.','Chính phủ nên triển khai chính sách chặt hơn.'],
    ['On balance, I firmly believe that…','Cân nhắc tổng thể, tôi tin chắc rằng…'],
    ['In conclusion, this trend is likely to continue.','Kết luận, xu hướng này có khả năng tiếp diễn.']
  ],
  exercises:[
    {type:'mc', q:'Task 2 tối thiểu bao nhiêu từ?', opts:['150','200','250','300'], a:2, ex:'**250 từ** — thiếu là bị trừ.'},
    {type:'mc', q:'Task 2 nên dành bao nhiêu phút?', opts:['20 phút','30 phút','40 phút','60 phút'], a:2, ex:'**40 phút** cho Task 2, 20 phút cho Task 1.'},
    {type:'mc', q:'Khung PEEL gồm:', opts:['Point – Evidence – Explain – Link','Plan – Edit – Explain – Learn','Point – Example – End – Link','Practice – Explain – Extend – Learn'], a:0, ex:'**P**oint – **E**vidence – **E**xplain – **L**ink.'},
    {type:'mc', q:'Đề “discuss both views and give your opinion” mà bạn quên nêu ý kiến thì:', opts:['Không sao','Mất điểm Task Response','Mất điểm Grammar','Được cộng điểm'], a:1, ex:'Không trả lời hết đề → trừ **Task Response**.'},
    {type:'mc', q:'Task 2 có mấy tiêu chí chấm?', opts:['2','3','4','5'], a:2, ex:'**4 tiêu chí**, mỗi cái 25%.'},
    {type:'fill', q:'Điền: The benefits clearly ___ the drawbacks. (1 từ)', a:['outweigh'], ex:'**outweigh** = lớn hơn, vượt trội.'},
    {type:'fill', q:'Điền: A case in ___ is Singapore. (1 từ)', a:['point'], ex:'**a case in point** = ví dụ điển hình.'},
    {type:'fill', q:'Điền: On ___ , I firmly believe that… (1 từ)', a:['balance'], ex:'**on balance** = cân nhắc tổng thể.'},
    {type:'mc', q:'Nên dành bao nhiêu phút lập dàn ý cho Task 2?', opts:['0 phút','5 phút','15 phút','20 phút'], a:1, ex:'**5 phút** lập dàn ý giúp ăn điểm Coherence.'},
    {type:'mc', q:'Tuần cuối trước ngày thi nên làm gì?', opts:['Học thật nhiều kiến thức mới','Làm đề thi thử và sửa lỗi lặp lại','Nghỉ hoàn toàn','Đổi sang tài liệu khác'], a:1, ex:'Tuần cuối là để **giữ nhịp**, không nạp kiến thức mới.'}
  ]
}

});
