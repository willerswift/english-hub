/* English Hub — Cấp độ A1 (Buổi 1–10) */
Object.assign(window.LESSONS, {

/* ============================ BUỔI 1 ============================ */
'a1-01': {
  id:'a1-01', level:'A1', no:1,
  title:'Bảng chữ cái, âm cơ bản & chào hỏi',
  subtitle:'Buổi đầu tiên: đọc đúng 26 chữ cái, biết chào hỏi và giới thiệu tên.',
  goals:[
    'Đọc đúng tên 26 chữ cái tiếng Anh',
    'Phân biệt nguyên âm ngắn – dài cơ bản',
    'Chào hỏi và giới thiệu tên mình',
    'Dùng đúng 8 đại từ nhân xưng'
  ],
  pron:{
    t:'26 chữ cái và 5 nguyên âm',
    intro:'Tiếng Anh có 26 chữ cái nhưng **44 âm**. Chữ cái là thứ bạn *viết*; âm là thứ bạn *nói*. Vì thế phải học phiên âm IPA ngay từ buổi 1.',
    table:[
      ['Chữ','Đọc là','Chữ','Đọc là','Chữ','Đọc là'],
      ['A','/eɪ/','J','/dʒeɪ/','S','/es/'],
      ['B','/biː/','K','/keɪ/','T','/tiː/'],
      ['C','/siː/','L','/el/','U','/juː/'],
      ['D','/diː/','M','/em/','V','/viː/'],
      ['E','/iː/','N','/en/','W','/ˈdʌbəljuː/'],
      ['F','/ef/','O','/əʊ/','X','/eks/'],
      ['G','/dʒiː/','P','/piː/','Y','/waɪ/'],
      ['H','/eɪtʃ/','Q','/kjuː/','Z','/zed/ (Anh) – /ziː/ (Mỹ)'],
      ['I','/aɪ/','R','/ɑː/','','']
    ],
    ex:[
      ['/ɪ/ ngắn vs /iː/ dài: **sit** /sɪt/ – **seat** /siːt/','ngồi – chỗ ngồi. Sai âm này là sai nghĩa hẳn.'],
      ['/ʊ/ ngắn vs /uː/ dài: **full** /fʊl/ – **fool** /fuːl/','đầy – kẻ ngốc.'],
      ['/æ/ vs /e/: **bad** /bæd/ – **bed** /bed/','tồi – cái giường.']
    ],
    notes:[
      {type:'warn', text:'**Lỗi người Việt hay mắc:** nuốt âm cuối. *Book* phải nghe rõ /k/, *nice* phải rõ /s/. Người nghe phân biệt số ít/số nhiều, hiện tại/quá khứ hoàn toàn nhờ âm cuối.'},
      {type:'tip', text:'Mẹo luyện: đặt tay trước miệng. Âm dài (/iː/, /uː/, /ɑː/) phải kéo gấp đôi âm ngắn.'}
    ]
  },
  vocab:[
    {w:'hello', ipa:'/həˈləʊ/', pos:'excl', vi:'xin chào', ex:'Hello, my name is Nam.', exvi:'Xin chào, tôi tên Nam.'},
    {w:'hi', ipa:'/haɪ/', pos:'excl', vi:'chào (thân mật)', ex:'Hi! Nice to meet you.', exvi:'Chào! Rất vui được gặp bạn.'},
    {w:'goodbye', ipa:'/ˌɡʊdˈbaɪ/', pos:'excl', vi:'tạm biệt', ex:'Goodbye, see you tomorrow.', exvi:'Tạm biệt, hẹn mai gặp lại.'},
    {w:'name', ipa:'/neɪm/', pos:'n', vi:'tên', ex:'What is your name?', exvi:'Tên bạn là gì?'},
    {w:'please', ipa:'/pliːz/', pos:'adv', vi:'làm ơn, xin vui lòng', ex:'Sit down, please.', exvi:'Mời ngồi ạ.'},
    {w:'thank you', ipa:'/ˈθæŋk juː/', pos:'phr', vi:'cảm ơn', ex:'Thank you very much.', exvi:'Cảm ơn bạn rất nhiều.'},
    {w:'sorry', ipa:'/ˈsɒri/', pos:'adj', vi:'xin lỗi', ex:'Sorry, I am late.', exvi:'Xin lỗi, tôi đến muộn.'},
    {w:'yes', ipa:'/jes/', pos:'adv', vi:'vâng, có', ex:'Yes, I am a student.', exvi:'Vâng, tôi là học sinh.'},
    {w:'no', ipa:'/nəʊ/', pos:'adv', vi:'không', ex:'No, he is not here.', exvi:'Không, anh ấy không ở đây.'},
    {w:'friend', ipa:'/frend/', pos:'n', vi:'bạn bè', ex:'She is my friend.', exvi:'Cô ấy là bạn tôi.'},
    {w:'teacher', ipa:'/ˈtiːtʃə(r)/', pos:'n', vi:'giáo viên', ex:'My teacher is very kind.', exvi:'Giáo viên của tôi rất tốt bụng.'},
    {w:'student', ipa:'/ˈstjuːdnt/', pos:'n', vi:'học sinh, sinh viên', ex:'I am a student.', exvi:'Tôi là sinh viên.'},
    {w:'morning', ipa:'/ˈmɔːnɪŋ/', pos:'n', vi:'buổi sáng', ex:'Good morning, everyone!', exvi:'Chào buổi sáng cả nhà!'},
    {w:'afternoon', ipa:'/ˌɑːftəˈnuːn/', pos:'n', vi:'buổi chiều', ex:'Good afternoon, sir.', exvi:'Chào buổi chiều, thưa ông.'},
    {w:'evening', ipa:'/ˈiːvnɪŋ/', pos:'n', vi:'buổi tối', ex:'Good evening, Mrs. Lan.', exvi:'Chào buổi tối, cô Lan.'},
    {w:'meet', ipa:'/miːt/', pos:'v', vi:'gặp gỡ', ex:'Nice to meet you.', exvi:'Rất vui được gặp bạn.'},
    {w:'spell', ipa:'/spel/', pos:'v', vi:'đánh vần', ex:'How do you spell your name?', exvi:'Tên bạn đánh vần thế nào?'},
    {w:'repeat', ipa:'/rɪˈpiːt/', pos:'v', vi:'nhắc lại', ex:'Could you repeat that, please?', exvi:'Bạn nhắc lại giúp được không?'}
  ],
  grammar:[
    {
      t:'1. Đại từ nhân xưng (Personal pronouns)',
      intro:'Đại từ nhân xưng thay cho tên người/vật, luôn đứng **đầu câu** làm chủ ngữ. Tiếng Anh **bắt buộc phải có chủ ngữ** — không được bỏ như tiếng Việt.',
      table:[
        ['Đại từ','Nghĩa','Dùng khi'],
        ['**I**','tôi','nói về chính mình — *luôn viết hoa*'],
        ['**you**','bạn / các bạn','1 người hoặc nhiều người nghe'],
        ['**he**','anh ấy','1 người nam'],
        ['**she**','cô ấy','1 người nữ'],
        ['**it**','nó','vật, con vật, thời tiết, thời gian'],
        ['**we**','chúng tôi / chúng ta','từ 2 người trở lên, có mình'],
        ['**they**','họ / chúng nó','từ 2 người/vật trở lên, không có mình']
      ],
      ex:[
        ['**I** am Nam.','Tôi là Nam.'],
        ['**She** is my teacher.','Cô ấy là giáo viên của tôi.'],
        ['**It** is hot today.','Hôm nay trời nóng.'],
        ['**They** are my friends.','Họ là bạn của tôi.']
      ],
      notes:[
        {type:'warn', text:'Tiếng Việt nói “Đẹp quá!” nhưng tiếng Anh **phải** nói *It is beautiful!* — không được viết “Is beautiful!”.'}
      ]
    },
    {
      t:'2. Chào hỏi theo thời điểm trong ngày',
      formula:'Good morning   → từ khi thức dậy đến 12:00\nGood afternoon → 12:00 – 18:00\nGood evening   → sau 18:00 (lời CHÀO khi gặp)\nGood night     → lời TẠM BIỆT / chúc ngủ ngon',
      ex:[
        ['**Good morning**, Miss Lan!','Chào buổi sáng cô Lan!'],
        ['**Good night**, sleep well.','Chúc ngủ ngon nhé.']
      ],
      notes:[
        {type:'warn', text:'**Good night** KHÔNG dùng để chào khi mới gặp. Gặp buổi tối thì nói *Good evening*.'}
      ]
    },
    {
      t:'3. Hỏi – đáp cơ bản về tên',
      formula:"What's your name?      → My name is + [tên].\nHow do you spell it?   → It's N-A-M.\nNice to meet you.      → Nice to meet you, too.\nHow are you?           → I'm fine, thank you. And you?",
      ex:[
        ["A: **What's your name?**  B: **My name's** Linh.",'A: Bạn tên gì? B: Tôi tên Linh.'],
        ["A: **How are you?**  B: **I'm** fine, thanks.",'A: Bạn khoẻ không? B: Tôi khoẻ, cảm ơn.']
      ],
      notes:[
        {type:'tip', text:"Dạng rút gọn nghe tự nhiên hơn: *What is* → **What's**, *I am* → **I'm**, *My name is* → **My name's**."}
      ]
    }
  ],
  phrases:[
    ['Hello! / Hi there!','Xin chào!'],
    ["What's your name?",'Bạn tên là gì?'],
    ["My name's Nam. / I'm Nam.",'Tôi tên Nam.'],
    ['Nice to meet you.','Rất vui được gặp bạn.'],
    ['Nice to meet you, too.','Tôi cũng vậy.'],
    ['How are you?','Bạn khoẻ không?'],
    ["I'm fine, thank you. And you?",'Tôi khoẻ, cảm ơn. Còn bạn?'],
    ['Not bad, thanks.','Cũng ổn, cảm ơn.'],
    ['Where are you from?','Bạn từ đâu đến?'],
    ["I'm from Vietnam.",'Tôi đến từ Việt Nam.'],
    ['How do you spell that?','Cái đó đánh vần thế nào?'],
    ['Sorry, could you repeat that?','Xin lỗi, bạn nhắc lại được không?'],
    ["I don't understand.",'Tôi không hiểu.'],
    ['See you later! / See you tomorrow!','Hẹn gặp lại! / Hẹn mai gặp!'],
    ['Have a nice day!','Chúc một ngày tốt lành!']
  ],
  dialogue:[
    ['Mai','Hi! Good morning. My name is Mai.','Chào! Chào buổi sáng. Tôi tên Mai.'],
    ['John','Good morning, Mai. I am John. Nice to meet you.','Chào buổi sáng Mai. Tôi là John. Rất vui được gặp bạn.'],
    ['Mai','Nice to meet you, too. How do you spell your name?','Tôi cũng vậy. Tên bạn đánh vần sao?'],
    ['John','J-O-H-N. Where are you from?','J-O-H-N. Bạn từ đâu đến?'],
    ['Mai','I am from Hanoi, Vietnam. And you?','Tôi từ Hà Nội, Việt Nam. Còn bạn?'],
    ['John','I am from London. See you later, Mai!','Tôi từ London. Hẹn gặp lại, Mai!']
  ],
  exercises:[
    {type:'mc', q:'Chọn đại từ đúng: ___ is my sister.', opts:['He','She','It','They'], a:1, ex:'“sister” là nữ, số ít → **she**.'},
    {type:'mc', q:'Gặp thầy giáo lúc 8 giờ sáng, bạn nói:', opts:['Good night','Good evening','Good morning','Good afternoon'], a:2, ex:'Trước 12h trưa dùng **Good morning**.'},
    {type:'mc', q:'Đại từ nào thay cho “Nam and I”?', opts:['They','We','You','He'], a:1, ex:'Có “I” trong nhóm → **we** (chúng tôi).'},
    {type:'mc', q:'“Nice to meet you.” — Trả lời tự nhiên nhất là:', opts:['Yes, I am.','Nice to meet you, too.','Thank you very well.','I am fine name.'], a:1, ex:'Câu đáp chuẩn là *Nice to meet you, too.*'},
    {type:'mc', q:'Từ nào có nguyên âm DÀI /iː/?', opts:['sit','ship','seat','six'], a:2, ex:'**seat** /siːt/ có /iː/ dài; ba từ còn lại là /ɪ/ ngắn.'},
    {type:'fill', q:'Điền đại từ: Lan and Hoa are here. ___ are my friends.', a:['they','They'], ex:'Hai người, không có mình → **they**.'},
    {type:'fill', q:'Điền dạng rút gọn của "I am": ___ a student.', a:["i'm","I'm"], ex:'*I am* → **I’m**.'},
    {type:'fill', q:'Hoàn thành câu hỏi: What ___ your name?', a:['is','is?',"'s"], ex:'Chủ ngữ *your name* số ít → **is**.'},
    {type:'fill', q:'Điền đại từ cho “the book”: ___ is on the table.', a:['it','It'], ex:'Đồ vật → **it**.'},
    {type:'mc', q:'Trước khi đi ngủ, bạn nói với người nhà:', opts:['Good evening','Good night','Good afternoon','Good morning'], a:1, ex:'**Good night** là lời chúc ngủ ngon / tạm biệt buổi tối.'}
  ]
},

/* ============================ BUỔI 2 ============================ */
'a1-02': {
  id:'a1-02', level:'A1', no:2,
  title:'Động từ TO BE — thì hiện tại',
  subtitle:'Am / Is / Are: viên gạch đầu tiên của mọi câu tiếng Anh.',
  goals:[
    'Chia đúng am / is / are với mọi chủ ngữ',
    'Đặt câu phủ định và câu hỏi với TO BE',
    'Giới thiệu quốc tịch, nghề nghiệp, tuổi tác',
    'Trả lời ngắn Yes/No đúng cách'
  ],
  vocab:[
    {w:'doctor', ipa:'/ˈdɒktə(r)/', pos:'n', vi:'bác sĩ', ex:'My mother is a doctor.', exvi:'Mẹ tôi là bác sĩ.'},
    {w:'nurse', ipa:'/nɜːs/', pos:'n', vi:'y tá', ex:'She is a nurse at City Hospital.', exvi:'Cô ấy là y tá ở Bệnh viện Thành phố.'},
    {w:'engineer', ipa:'/ˌendʒɪˈnɪə(r)/', pos:'n', vi:'kỹ sư', ex:'They are engineers.', exvi:'Họ là kỹ sư.'},
    {w:'worker', ipa:'/ˈwɜːkə(r)/', pos:'n', vi:'công nhân', ex:'He is a factory worker.', exvi:'Anh ấy là công nhân nhà máy.'},
    {w:'farmer', ipa:'/ˈfɑːmə(r)/', pos:'n', vi:'nông dân', ex:'My grandfather is a farmer.', exvi:'Ông tôi là nông dân.'},
    {w:'driver', ipa:'/ˈdraɪvə(r)/', pos:'n', vi:'tài xế', ex:'Is he a taxi driver?', exvi:'Anh ấy là tài xế taxi à?'},
    {w:'country', ipa:'/ˈkʌntri/', pos:'n', vi:'đất nước', ex:'Which country are you from?', exvi:'Bạn đến từ nước nào?'},
    {w:'city', ipa:'/ˈsɪti/', pos:'n', vi:'thành phố', ex:'Hanoi is a big city.', exvi:'Hà Nội là một thành phố lớn.'},
    {w:'Vietnamese', ipa:'/ˌvjetnəˈmiːz/', pos:'adj', vi:'thuộc Việt Nam, người Việt', ex:'I am Vietnamese.', exvi:'Tôi là người Việt Nam.'},
    {w:'English', ipa:'/ˈɪŋɡlɪʃ/', pos:'adj/n', vi:'thuộc Anh; tiếng Anh', ex:'She is English.', exvi:'Cô ấy là người Anh.'},
    {w:'American', ipa:'/əˈmerɪkən/', pos:'adj', vi:'thuộc Mỹ', ex:'Tom is American.', exvi:'Tom là người Mỹ.'},
    {w:'old', ipa:'/əʊld/', pos:'adj', vi:'già; cũ', ex:'How old are you?', exvi:'Bạn bao nhiêu tuổi?'},
    {w:'young', ipa:'/jʌŋ/', pos:'adj', vi:'trẻ', ex:'My brother is young.', exvi:'Em trai tôi còn nhỏ.'},
    {w:'married', ipa:'/ˈmærid/', pos:'adj', vi:'đã kết hôn', ex:'Are you married?', exvi:'Bạn kết hôn chưa?'},
    {w:'single', ipa:'/ˈsɪŋɡl/', pos:'adj', vi:'độc thân', ex:'No, I am single.', exvi:'Chưa, tôi độc thân.'},
    {w:'busy', ipa:'/ˈbɪzi/', pos:'adj', vi:'bận rộn', ex:'I am busy today.', exvi:'Hôm nay tôi bận.'},
    {w:'tired', ipa:'/ˈtaɪəd/', pos:'adj', vi:'mệt', ex:'They are tired.', exvi:'Họ mệt.'},
    {w:'happy', ipa:'/ˈhæpi/', pos:'adj', vi:'vui, hạnh phúc', ex:'She is very happy.', exvi:'Cô ấy rất vui.'},
    {w:'hungry', ipa:'/ˈhʌŋɡri/', pos:'adj', vi:'đói', ex:'Are you hungry?', exvi:'Bạn đói không?'},
    {w:'late', ipa:'/leɪt/', pos:'adj', vi:'muộn, trễ', ex:'Sorry, I am late.', exvi:'Xin lỗi, tôi đến muộn.'}
  ],
  grammar:[
    {
      t:'1. TO BE: bảng chia đầy đủ',
      intro:'TO BE nghĩa là “thì, là, ở”. Nhớ khẩu quyết: **I – am, He/She/It – is, You/We/They – are.**',
      table:[
        ['Chủ ngữ','Khẳng định','Rút gọn','Phủ định rút gọn'],
        ['I','I am','I’m','I’m not'],
        ['He / She / It','He is','He’s','He isn’t (= He’s not)'],
        ['You / We / They','You are','You’re','You aren’t (= You’re not)'],
        ['Nam (tên riêng)','Nam is','Nam’s','Nam isn’t'],
        ['Nam and Lan','… are','—','… aren’t']
      ],
      formula:'(+) S + am/is/are + ...\n(–) S + am/is/are + NOT + ...\n(?) Am/Is/Are + S + ...?',
      ex:[
        ['I **am** a student.','Tôi là sinh viên.'],
        ['She **is not** (isn’t) at home.','Cô ấy không có ở nhà.'],
        ['**Are** they your friends?','Họ là bạn của bạn à?'],
        ['The books **are** on the desk.','Mấy quyển sách ở trên bàn.']
      ],
      notes:[
        {type:'warn', text:'Không có dạng rút gọn **amn’t**. Phủ định ngôi I luôn là *I’m not*.'},
        {type:'warn', text:'Lỗi rất phổ biến: “I am study English” ❌. Có TO BE rồi thì **không thêm động từ thường**. Đúng: *I study English.* hoặc *I am a student.*'}
      ]
    },
    {
      t:'2. Trả lời ngắn Yes / No',
      formula:'Are you a teacher?  → Yes, I am.      /  No, I’m not.\nIs he Vietnamese?   → Yes, he is.     /  No, he isn’t.\nAre they students?  → Yes, they are.  /  No, they aren’t.',
      ex:[
        ['A: **Is** she your sister?  B: **Yes, she is.**','A: Cô ấy là chị bạn à? B: Đúng vậy.'],
        ['A: **Are** you tired?  B: **No, I’m not.**','A: Bạn mệt không? B: Không.']
      ],
      notes:[
        {type:'warn', text:'Câu trả lời khẳng định **không rút gọn**: *Yes, I am.* ✔ — *Yes, I’m.* ❌'}
      ]
    },
    {
      t:'3. Câu hỏi WH- với TO BE',
      formula:'WH-word + am/is/are + S ?\n\nWho   – ai        What  – cái gì\nWhere – ở đâu     When  – khi nào\nHow   – như thế nào   How old – bao nhiêu tuổi',
      ex:[
        ['**Where are** you from? — I’m from Da Nang.','Bạn từ đâu đến? — Tôi từ Đà Nẵng.'],
        ['**How old is** your brother? — He’s twelve.','Em trai bạn mấy tuổi? — 12 tuổi.'],
        ['**Who is** that man? — He’s my uncle.','Người đàn ông đó là ai? — Chú tôi.'],
        ['**What is** your job? — I’m an engineer.','Bạn làm nghề gì? — Tôi là kỹ sư.']
      ],
      notes:[
        {type:'tip', text:'Nói tuổi: *I am 20.* hoặc *I am 20 years old.* — Tuyệt đối **không** nói “I have 20 years” (đó là cách của tiếng Pháp/Việt).'}
      ]
    }
  ],
  phrases:[
    ['Where are you from?','Bạn từ đâu đến?'],
    ["I'm from Vietnam. I'm Vietnamese.",'Tôi từ Việt Nam. Tôi là người Việt.'],
    ['What do you do? / What is your job?','Bạn làm nghề gì?'],
    ["I'm a teacher.",'Tôi là giáo viên.'],
    ['How old are you?','Bạn bao nhiêu tuổi?'],
    ["I'm twenty-five (years old).",'Tôi 25 tuổi.'],
    ['Are you married?','Bạn lập gia đình chưa?'],
    ["No, I'm single.",'Chưa, tôi độc thân.'],
    ['This is my friend, Nam.','Đây là bạn tôi, Nam.'],
    ["He's not here at the moment.",'Anh ấy không có ở đây lúc này.'],
    ["I'm sorry, I'm late.",'Xin lỗi, tôi tới muộn.'],
    ['Are you OK?','Bạn ổn chứ?'],
    ["I'm very tired today.",'Hôm nay tôi rất mệt.'],
    ['It is very nice!','Cái đó đẹp lắm!']
  ],
  exercises:[
    {type:'mc', q:'My parents ___ doctors.', opts:['am','is','are','be'], a:2, ex:'*My parents* số nhiều → **are**.'},
    {type:'mc', q:'___ she your teacher?', opts:['Am','Is','Are','Do'], a:1, ex:'*she* → **Is** đứng đầu câu hỏi.'},
    {type:'mc', q:'Câu nào ĐÚNG?', opts:['I am not hungry.','I amn’t hungry.','I not am hungry.','I no am hungry.'], a:0, ex:'Không tồn tại *amn’t*; phủ định là **I am not / I’m not**.'},
    {type:'mc', q:'A: Are you a student? — B: ___', opts:['Yes, I’m.','Yes, I am.','Yes, I are.','Yes, am I.'], a:1, ex:'Trả lời ngắn khẳng định không được rút gọn.'},
    {type:'mc', q:'___ old is your sister?', opts:['What','Who','How','Where'], a:2, ex:'Hỏi tuổi dùng **How old**.'},
    {type:'fill', q:'Điền am/is/are: Nam and I ___ friends.', a:['are'], ex:'*Nam and I* = we → **are**.'},
    {type:'fill', q:'Điền am/is/are: It ___ very cold today.', a:['is'], ex:'*It* → **is**.'},
    {type:'fill', q:'Viết phủ định rút gọn: She ___ (not be) at school.', a:["isn't", 'is not'], ex:'*She is not* → **isn’t**.'},
    {type:'fill', q:'Đặt câu hỏi: ___ they from Japan?', a:['are','Are'], ex:'*they* → **Are**.'},
    {type:'fill', q:'Điền từ hỏi: ___ are you from? — I’m from Hue.', a:['where','Where'], ex:'Hỏi nơi chốn → **Where**.'},
    {type:'mc', q:'Câu nào SAI?', opts:['He is a driver.','They are busy.','I am study English.','We aren’t late.'], a:2, ex:'Đã có *am* thì không dùng thêm động từ thường. Đúng: *I study English.*'},
    {type:'fill', q:'Hỏi nghề nghiệp: What ___ your job?', a:['is',"'s"], ex:'*your job* số ít → **is**.'}
  ]
},

/* ============================ BUỔI 3 ============================ */
'a1-03': {
  id:'a1-03', level:'A1', no:3,
  title:'Danh từ số nhiều & mạo từ a / an / the',
  subtitle:'Khi nào thêm -s, khi nào dùng a/an, khi nào dùng the.',
  goals:[
    'Tạo danh từ số nhiều đúng quy tắc (kể cả bất quy tắc)',
    'Phát âm đúng đuôi -s: /s/, /z/, /ɪz/',
    'Phân biệt a / an / the và trường hợp không dùng mạo từ'
  ],
  pron:{
    t:'Ba cách đọc đuôi -s',
    formula:'/ɪz/  sau các âm rít: s, ss, sh, ch, x, ge, ce  →  buses, watches, boxes\n/s/   sau âm VÔ THANH: p, t, k, f, th   →  books, cats, maps\n/z/   sau các âm còn lại (hữu thanh + nguyên âm) →  dogs, pens, boys',
    ex:[
      ['book**s** /bʊks/ – /s/','sách (số nhiều)'],
      ['pen**s** /penz/ – /z/','bút'],
      ['box**es** /ˈbɒksɪz/ – /ɪz/','hộp']
    ],
    notes:[{type:'tip', text:'Mẹo kiểm tra: đặt tay lên cổ họng. Âm cuối **rung** → đọc /z/; **không rung** → đọc /s/.'}]
  },
  vocab:[
    {w:'book', ipa:'/bʊk/', pos:'n', vi:'quyển sách', ex:'I have three books.', exvi:'Tôi có ba quyển sách.'},
    {w:'pen', ipa:'/pen/', pos:'n', vi:'bút mực', ex:'These pens are new.', exvi:'Mấy cây bút này mới.'},
    {w:'table', ipa:'/ˈteɪbl/', pos:'n', vi:'cái bàn', ex:'The table is big.', exvi:'Cái bàn thì to.'},
    {w:'chair', ipa:'/tʃeə(r)/', pos:'n', vi:'cái ghế', ex:'There are six chairs.', exvi:'Có sáu cái ghế.'},
    {w:'window', ipa:'/ˈwɪndəʊ/', pos:'n', vi:'cửa sổ', ex:'Open the window, please.', exvi:'Làm ơn mở cửa sổ.'},
    {w:'door', ipa:'/dɔː(r)/', pos:'n', vi:'cửa ra vào', ex:'Close the door.', exvi:'Đóng cửa lại.'},
    {w:'bag', ipa:'/bæɡ/', pos:'n', vi:'cái túi, cặp', ex:'Is this your bag?', exvi:'Đây là túi của bạn à?'},
    {w:'watch', ipa:'/wɒtʃ/', pos:'n', vi:'đồng hồ đeo tay', ex:'He has two watches.', exvi:'Anh ấy có hai cái đồng hồ.'},
    {w:'box', ipa:'/bɒks/', pos:'n', vi:'cái hộp', ex:'The boxes are heavy.', exvi:'Mấy cái hộp thì nặng.'},
    {w:'city', ipa:'/ˈsɪti/', pos:'n', vi:'thành phố (số nhiều: cities)', ex:'Vietnam has many big cities.', exvi:'Việt Nam có nhiều thành phố lớn.'},
    {w:'knife', ipa:'/naɪf/', pos:'n', vi:'con dao (số nhiều: knives)', ex:'Be careful with the knives.', exvi:'Cẩn thận với mấy con dao.'},
    {w:'child', ipa:'/tʃaɪld/', pos:'n', vi:'đứa trẻ (số nhiều: children)', ex:'The children are playing.', exvi:'Bọn trẻ đang chơi.'},
    {w:'man', ipa:'/mæn/', pos:'n', vi:'người đàn ông (số nhiều: men)', ex:'Two men are waiting.', exvi:'Hai người đàn ông đang đợi.'},
    {w:'woman', ipa:'/ˈwʊmən/', pos:'n', vi:'phụ nữ (số nhiều: women /ˈwɪmɪn/)', ex:'The women are teachers.', exvi:'Những phụ nữ đó là giáo viên.'},
    {w:'person', ipa:'/ˈpɜːsn/', pos:'n', vi:'người (số nhiều: people)', ex:'Ten people are here.', exvi:'Có mười người ở đây.'},
    {w:'apple', ipa:'/ˈæpl/', pos:'n', vi:'quả táo', ex:'I eat an apple every day.', exvi:'Tôi ăn một quả táo mỗi ngày.'},
    {w:'orange', ipa:'/ˈɒrɪndʒ/', pos:'n', vi:'quả cam; màu cam', ex:'She wants an orange.', exvi:'Cô ấy muốn một quả cam.'},
    {w:'hour', ipa:'/ˈaʊə(r)/', pos:'n', vi:'giờ, tiếng đồng hồ', ex:'I wait for an hour.', exvi:'Tôi đợi một tiếng.'},
    {w:'university', ipa:'/ˌjuːnɪˈvɜːsəti/', pos:'n', vi:'trường đại học', ex:'He studies at a university.', exvi:'Anh ấy học ở một trường đại học.'},
    {w:'new', ipa:'/njuː/', pos:'adj', vi:'mới', ex:'This is a new phone.', exvi:'Đây là điện thoại mới.'}
  ],
  grammar:[
    {
      t:'1. Quy tắc tạo danh từ số nhiều',
      table:[
        ['Trường hợp','Quy tắc','Ví dụ'],
        ['Thông thường','+ **s**','book → book**s**, pen → pen**s**'],
        ['Tận cùng s, ss, sh, ch, x, z','+ **es**','bus → bus**es**, watch → watch**es**, box → box**es**'],
        ['Phụ âm + y','bỏ **y** → **ies**','city → cit**ies**, baby → bab**ies**'],
        ['Nguyên âm + y','+ **s** bình thường','boy → boy**s**, day → day**s**'],
        ['Tận cùng f / fe','đổi thành **ves**','knife → kni**ves**, leaf → lea**ves**'],
        ['Tận cùng o','+ **es** (một số từ)','tomato → tomato**es**, potato → potato**es**'],
        ['Bất quy tắc','học thuộc','man→**men**, woman→**women**, child→**children**, foot→**feet**, tooth→**teeth**, mouse→**mice**, person→**people**'],
        ['Không đổi','giữ nguyên','fish, sheep, deer, aircraft']
      ],
      notes:[
        {type:'warn', text:'Sau số đếm > 1 **bắt buộc** thêm -s: *five book**s***, không phải “five book”. Đây là lỗi số 1 của người Việt vì tiếng Việt không chia số nhiều.'}
      ]
    },
    {
      t:'2. Mạo từ A / AN — “một” (chưa xác định)',
      intro:'Dùng khi nhắc đến một thứ **lần đầu**, hoặc nói về một cá thể bất kỳ. Chỉ dùng với danh từ **đếm được số ít**.',
      formula:'a  + phụ ÂM:      a book, a car, a university /ju-/, a European\nan + nguyên ÂM:   an apple, an egg, an hour /aʊə/, an MBA /em-/',
      ex:[
        ['I have **a** dog.','Tôi có một con chó.'],
        ['She is **an** engineer.','Cô ấy là kỹ sư.'],
        ['Wait **an** hour.','Đợi một tiếng.']
      ],
      notes:[
        {type:'warn', text:'Quy tắc dựa vào **ÂM đầu, không phải chữ cái**: *an hour* (h câm), nhưng *a university* (đọc /juː/), *a one-way ticket* (đọc /wʌn/).'}
      ]
    },
    {
      t:'3. Mạo từ THE — “cái đó” (đã xác định)',
      table:[
        ['Dùng THE khi','Ví dụ'],
        ['Đã nhắc đến trước đó','I see a cat. **The** cat is black.'],
        ['Cả hai bên đều biết là cái nào','Close **the** door, please.'],
        ['Vật duy nhất trên đời','**the** sun, **the** moon, **the** Earth'],
        ['Có so sánh nhất / số thứ tự','**the** best, **the** first day'],
        ['Sông, biển, dãy núi, nhóm đảo','**the** Mekong, **the** Pacific, **the** Alps']
      ],
      formula:'KHÔNG dùng mạo từ với:\n• Tên riêng: Nam, Vietnam, Hanoi\n• Danh từ số nhiều/không đếm được nói CHUNG: I like coffee. Dogs are friendly.\n• Bữa ăn, môn thể thao, ngôn ngữ: have breakfast, play football, speak English',
      ex:[
        ['There is **a** book on the table. **The** book is mine.','Có một quyển sách trên bàn. Quyển sách đó là của tôi.'],
        ['I like **music**. (nói chung — không mạo từ)','Tôi thích âm nhạc.'],
        ['**The** music in this café is great. (cụ thể)','Nhạc trong quán này hay lắm.']
      ]
    }
  ],
  phrases:[
    ['This is a book.','Đây là một quyển sách.'],
    ['These are my books.','Đây là mấy quyển sách của tôi.'],
    ['How many books are there?','Có bao nhiêu quyển sách?'],
    ['There are five students in the class.','Có năm học sinh trong lớp.'],
    ['Open the door, please.','Làm ơn mở cửa.'],
    ['Can I have an apple?','Cho tôi xin một quả táo được không?'],
    ['I have a question.','Tôi có một câu hỏi.'],
    ['The weather is nice today.','Hôm nay thời tiết đẹp.'],
    ['She is a good teacher.','Cô ấy là một giáo viên giỏi.'],
    ['I like coffee.','Tôi thích cà phê.']
  ],
  exercises:[
    {type:'mc', q:'Chọn số nhiều đúng của “city”:', opts:['citys','cityes','cities','cityies'], a:2, ex:'Phụ âm + y → bỏ y thêm **ies**.'},
    {type:'mc', q:'Chọn mạo từ: She is ___ engineer.', opts:['a','an','the','x (không cần)'], a:1, ex:'*engineer* bắt đầu bằng nguyên âm /e/ → **an**.'},
    {type:'mc', q:'Chọn mạo từ: He studies at ___ university.', opts:['a','an','the','x'], a:0, ex:'*university* đọc là /juːnɪ-/ — âm phụ âm /j/ → **a**.'},
    {type:'mc', q:'Số nhiều của “child” là:', opts:['childs','childes','children','childrens'], a:2, ex:'Bất quy tắc: child → **children** (không có “s” thêm).'},
    {type:'mc', q:'Đuôi -s trong “books” đọc là:', opts:['/s/','/z/','/ɪz/','không đọc'], a:0, ex:'Sau /k/ vô thanh → đọc **/s/**.'},
    {type:'mc', q:'Đuôi -s trong “watches” đọc là:', opts:['/s/','/z/','/ɪz/','/tʃ/'], a:2, ex:'Sau âm rít /tʃ/ → **/ɪz/**.'},
    {type:'fill', q:'Viết số nhiều: one knife → two ___', a:['knives'], ex:'f/fe → **ves**.'},
    {type:'fill', q:'Viết số nhiều: one person → ten ___', a:['people','persons'], ex:'Dạng thông dụng là **people**.'},
    {type:'fill', q:'Điền a/an/the: I see ___ cat. ___ cat is white. (điền từ thứ HAI)', a:['the','The'], ex:'Nhắc lại lần thứ hai → **the**.'},
    {type:'fill', q:'Điền a/an: Please wait ___ hour.', a:['an'], ex:'*hour* có h câm, đọc /aʊə/ → **an**.'},
    {type:'mc', q:'Câu nào ĐÚNG?', opts:['I have three book.','I have three books.','I have three bookes.','I have a three books.'], a:1, ex:'Số > 1 phải có **-s** và không dùng *a*.'},
    {type:'mc', q:'Câu nào ĐÚNG khi nói chung về sở thích?', opts:['I like the music.','I like a music.','I like music.','I like musics.'], a:2, ex:'Danh từ không đếm được, nói chung → **không mạo từ**.'}
  ]
},

/* ============================ BUỔI 4 ============================ */
'a1-04': {
  id:'a1-04', level:'A1', no:4,
  title:'This / That / These / Those, số đếm & màu sắc',
  subtitle:'Chỉ trỏ đồ vật, đếm số, mô tả màu — nói được về mọi thứ quanh bạn.',
  goals:[
    'Dùng đúng this/that/these/those theo khoảng cách và số lượng',
    'Đếm từ 1 đến 1.000.000 và đọc số điện thoại, giá tiền',
    'Mô tả đồ vật bằng màu sắc, kích cỡ'
  ],
  vocab:[
    {w:'this', ipa:'/ðɪs/', pos:'det', vi:'này (gần, số ít)', ex:'This is my phone.', exvi:'Đây là điện thoại của tôi.'},
    {w:'that', ipa:'/ðæt/', pos:'det', vi:'kia (xa, số ít)', ex:'That car is expensive.', exvi:'Chiếc xe kia đắt.'},
    {w:'these', ipa:'/ðiːz/', pos:'det', vi:'này (gần, số nhiều)', ex:'These shoes are new.', exvi:'Đôi giày này mới.'},
    {w:'those', ipa:'/ðəʊz/', pos:'det', vi:'kia (xa, số nhiều)', ex:'Those people are tourists.', exvi:'Những người kia là khách du lịch.'},
    {w:'red', ipa:'/red/', pos:'adj', vi:'màu đỏ', ex:'I have a red bag.', exvi:'Tôi có một cái túi đỏ.'},
    {w:'blue', ipa:'/bluː/', pos:'adj', vi:'màu xanh dương', ex:'The sky is blue.', exvi:'Bầu trời màu xanh.'},
    {w:'green', ipa:'/ɡriːn/', pos:'adj', vi:'màu xanh lá', ex:'Green tea is popular.', exvi:'Trà xanh rất phổ biến.'},
    {w:'yellow', ipa:'/ˈjeləʊ/', pos:'adj', vi:'màu vàng', ex:'A yellow taxi.', exvi:'Một chiếc taxi vàng.'},
    {w:'black', ipa:'/blæk/', pos:'adj', vi:'màu đen', ex:'He wears a black shirt.', exvi:'Anh ấy mặc áo đen.'},
    {w:'white', ipa:'/waɪt/', pos:'adj', vi:'màu trắng', ex:'White rice.', exvi:'Cơm trắng.'},
    {w:'brown', ipa:'/braʊn/', pos:'adj', vi:'màu nâu', ex:'Brown eyes.', exvi:'Mắt nâu.'},
    {w:'big', ipa:'/bɪɡ/', pos:'adj', vi:'to, lớn', ex:'This is a big house.', exvi:'Đây là căn nhà to.'},
    {w:'small', ipa:'/smɔːl/', pos:'adj', vi:'nhỏ', ex:'A small problem.', exvi:'Một vấn đề nhỏ.'},
    {w:'expensive', ipa:'/ɪkˈspensɪv/', pos:'adj', vi:'đắt', ex:'That phone is expensive.', exvi:'Cái điện thoại kia đắt.'},
    {w:'cheap', ipa:'/tʃiːp/', pos:'adj', vi:'rẻ', ex:'This shirt is cheap.', exvi:'Cái áo này rẻ.'},
    {w:'phone', ipa:'/fəʊn/', pos:'n', vi:'điện thoại', ex:'Where is my phone?', exvi:'Điện thoại tôi đâu?'},
    {w:'money', ipa:'/ˈmʌni/', pos:'n', vi:'tiền', ex:'I need some money.', exvi:'Tôi cần ít tiền.'},
    {w:'price', ipa:'/praɪs/', pos:'n', vi:'giá', ex:'What is the price?', exvi:'Giá bao nhiêu?'},
    {w:'number', ipa:'/ˈnʌmbə(r)/', pos:'n', vi:'con số', ex:'What is your phone number?', exvi:'Số điện thoại của bạn là gì?'},
    {w:'hundred', ipa:'/ˈhʌndrəd/', pos:'num', vi:'trăm', ex:'Two hundred people.', exvi:'Hai trăm người.'}
  ],
  grammar:[
    {
      t:'1. This / That / These / Those',
      table:[
        ['','GẦN (here)','XA (there)'],
        ['**Số ít**','**this** — cái này','**that** — cái kia'],
        ['**Số nhiều**','**these** — những cái này','**those** — những cái kia']
      ],
      formula:'This / That  + IS  + danh từ số ít\nThese / Those + ARE + danh từ số NHIỀU',
      ex:[
        ['**This is** a book. / **These are** books.','Đây là quyển sách. / Đây là mấy quyển sách.'],
        ['**That is** my car. / **Those are** my cars.','Kia là xe tôi. / Kia là mấy chiếc xe của tôi.'],
        ['**Is this** your bag? — Yes, it is.','Đây là túi của bạn à? — Vâng.']
      ],
      notes:[
        {type:'tip', text:'Khi gọi điện, người Anh nói: *Hello, **this is** Nam.* (Đây là Nam) — không nói “I am Nam”.'},
        {type:'warn', text:'Trả lời cho *Is this…?* là **it**, không lặp lại “this”: *Yes, **it** is.* ✔'}
      ]
    },
    {
      t:'2. Số đếm (Cardinal numbers)',
      table:[
        ['0–10','11–20','Chục','Lớn'],
        ['0 zero / oh','11 eleven','20 twenty','100 a/one hundred'],
        ['1 one','12 twelve','30 thirty','1,000 a/one thousand'],
        ['2 two','13 thirteen','40 forty *(không có u)*','10,000 ten thousand'],
        ['3 three','14 fourteen','50 fifty','100,000 a hundred thousand'],
        ['4 four','15 fifteen','60 sixty','1,000,000 a/one million'],
        ['5 five','16 sixteen','70 seventy','1,000,000,000 a billion'],
        ['6 six','17 seventeen','80 eighty','—'],
        ['7 seven','18 eighteen','90 ninety *(không có e)*','—'],
        ['8 eight','19 nineteen','—','—'],
        ['9 nine','20 twenty','—','—'],
        ['10 ten','—','—','—']
      ],
      formula:'21 → twenty-one   35 → thirty-five   99 → ninety-nine  (có dấu gạch nối)\n248 → two hundred AND forty-eight  (tiếng Anh-Anh có “and”)\n1,500 → one thousand five hundred / fifteen hundred',
      ex:[
        ['My phone number is 0912 345 678 → “oh nine one two, three four five, six seven eight”.','Đọc từng chữ số một.'],
        ['It costs 250,000 VND → “two hundred and fifty thousand dong”.','Giá 250 nghìn đồng.']
      ],
      notes:[
        {type:'warn', text:'**hundred / thousand / million KHÔNG thêm -s** khi có số đứng trước: *two hundred* ✔, *two hundreds* ❌. Chỉ thêm -s khi nói phỏng chừng: *hundreds of people* (hàng trăm người).'},
        {type:'warn', text:'Dễ nhầm: **thirteen** /θɜːˈtiːn/ (13, trọng âm cuối) vs **thirty** /ˈθɜːti/ (30, trọng âm đầu).'}
      ]
    },
    {
      t:'3. Trật tự tính từ đứng trước danh từ',
      intro:'Trong tiếng Anh, **tính từ luôn đứng TRƯỚC danh từ** — ngược hoàn toàn với tiếng Việt.',
      formula:'Ý kiến → Kích cỡ → Tuổi → Hình dáng → Màu sắc → Nguồn gốc → Chất liệu → DANH TỪ\n(nice – big – old – round – red – Vietnamese – wooden – table)',
      ex:[
        ['a **beautiful big red** car','một chiếc xe hơi đỏ to đẹp'],
        ['a **small black** bag','một cái túi đen nhỏ'],
        ['an **old wooden** house','một ngôi nhà gỗ cũ']
      ],
      notes:[
        {type:'warn', text:'Tính từ tiếng Anh **không thêm -s**: *two big cars* ✔ — *two bigs cars* ❌.'}
      ]
    }
  ],
  phrases:[
    ['What is this? / What are these?','Đây là cái gì? / Đây là những cái gì?'],
    ["It's a pen. / They're pens.",'Đó là cái bút. / Đó là những cái bút.'],
    ['Is this yours?','Cái này của bạn à?'],
    ['How much is it?','Cái này bao nhiêu tiền?'],
    ["It's fifty thousand dong.",'Năm mươi nghìn đồng.'],
    ["That's too expensive!",'Đắt quá!'],
    ['Can you give me a discount?','Bạn giảm giá được không?'],
    ['What colour is your car?','Xe bạn màu gì?'],
    ["It's dark blue.",'Màu xanh đậm.'],
    ['What is your phone number?','Số điện thoại của bạn là gì?'],
    ['I like this one, not that one.','Tôi thích cái này, không phải cái kia.'],
    ['How many do you want?','Bạn muốn mấy cái?']
  ],
  dialogue:[
    ['Customer','Excuse me, how much is this bag?','Xin lỗi, cái túi này bao nhiêu tiền?'],
    ['Seller','This one? It is four hundred thousand dong.','Cái này ạ? 400 nghìn đồng.'],
    ['Customer','Oh, that is expensive. How about those small bags?','Ồ, đắt quá. Còn mấy cái túi nhỏ kia thì sao?'],
    ['Seller','Those are two hundred thousand. We have red, black and brown.','Mấy cái đó 200 nghìn. Chúng tôi có màu đỏ, đen và nâu.'],
    ['Customer','I will take the black one. Thank you!','Tôi lấy cái đen. Cảm ơn!']
  ],
  exercises:[
    {type:'mc', q:'___ are my friends. (chỉ những người đứng cạnh bạn)', opts:['This','That','These','It'], a:2, ex:'Gần + số nhiều → **These**.'},
    {type:'mc', q:'Chọn câu ĐÚNG:', opts:['These is my book.','This are my books.','These are my books.','This is my books.'], a:2, ex:'*These* + **are** + danh từ số nhiều.'},
    {type:'mc', q:'Số 40 viết là:', opts:['fourty','forty','fourteen','fortty'], a:1, ex:'**forty** — không có chữ “u”.'},
    {type:'mc', q:'Cách viết đúng của 365:', opts:['three hundreds sixty five','three hundred and sixty-five','three hundred sixty five and','threehundred sixtyfive'], a:1, ex:'*hundred* không thêm -s; có gạch nối ở **sixty-five**.'},
    {type:'mc', q:'Trật tự tính từ đúng:', opts:['a red big car','a big red car','a car big red','a red car big'], a:1, ex:'Kích cỡ trước màu sắc: **big red**.'},
    {type:'fill', q:'Điền this/that/these/those: ___ book here is mine.', a:['this','This'], ex:'*here* = gần, số ít → **this**.'},
    {type:'fill', q:'Điền: ___ shoes over there are expensive.', a:['those','Those'], ex:'*over there* = xa, số nhiều → **those**.'},
    {type:'fill', q:'Viết bằng chữ số: “ninety-nine” = ___', a:['99'], ex:'ninety = 90, nine = 9.'},
    {type:'fill', q:'A: Is this your pen? B: Yes, ___ is.', a:['it','It'], ex:'Trả lời dùng **it**, không lặp “this”.'},
    {type:'mc', q:'Hỏi giá dùng câu nào?', opts:['How many is it?','How much is it?','What many is it?','How price is it?'], a:1, ex:'Hỏi giá tiền → **How much**.'}
  ]
},

/* ============================ BUỔI 5 ============================ */
'a1-05': {
  id:'a1-05', level:'A1', no:5,
  title:'HAVE / HAS — gia đình & sở hữu',
  subtitle:'Nói về gia đình, ngoại hình và những gì bạn có.',
  goals:[
    'Chia đúng have / has và dạng phủ định, nghi vấn',
    'Dùng tính từ sở hữu my/your/his/her… và sở hữu cách ’s',
    'Giới thiệu gia đình và mô tả ngoại hình'
  ],
  vocab:[
    {w:'family', ipa:'/ˈfæməli/', pos:'n', vi:'gia đình', ex:'I have a small family.', exvi:'Tôi có một gia đình nhỏ.'},
    {w:'parents', ipa:'/ˈpeərənts/', pos:'n', vi:'bố mẹ', ex:'My parents live in Hue.', exvi:'Bố mẹ tôi sống ở Huế.'},
    {w:'father / dad', ipa:'/ˈfɑːðə(r)/', pos:'n', vi:'bố', ex:'My father is a teacher.', exvi:'Bố tôi là giáo viên.'},
    {w:'mother / mum', ipa:'/ˈmʌðə(r)/', pos:'n', vi:'mẹ', ex:'Her mother is very kind.', exvi:'Mẹ cô ấy rất tốt bụng.'},
    {w:'brother', ipa:'/ˈbrʌðə(r)/', pos:'n', vi:'anh/em trai', ex:'I have two brothers.', exvi:'Tôi có hai anh em trai.'},
    {w:'sister', ipa:'/ˈsɪstə(r)/', pos:'n', vi:'chị/em gái', ex:'My sister is a nurse.', exvi:'Chị tôi là y tá.'},
    {w:'son', ipa:'/sʌn/', pos:'n', vi:'con trai', ex:'They have one son.', exvi:'Họ có một con trai.'},
    {w:'daughter', ipa:'/ˈdɔːtə(r)/', pos:'n', vi:'con gái', ex:'Their daughter is five.', exvi:'Con gái họ 5 tuổi.'},
    {w:'grandfather', ipa:'/ˈɡrænfɑːðə(r)/', pos:'n', vi:'ông', ex:'My grandfather is 80.', exvi:'Ông tôi 80 tuổi.'},
    {w:'grandmother', ipa:'/ˈɡrænmʌðə(r)/', pos:'n', vi:'bà', ex:'My grandmother cooks well.', exvi:'Bà tôi nấu ăn ngon.'},
    {w:'husband', ipa:'/ˈhʌzbənd/', pos:'n', vi:'chồng', ex:'Her husband works in a bank.', exvi:'Chồng cô ấy làm ở ngân hàng.'},
    {w:'wife', ipa:'/waɪf/', pos:'n', vi:'vợ', ex:'His wife is Vietnamese.', exvi:'Vợ anh ấy là người Việt.'},
    {w:'uncle', ipa:'/ˈʌŋkl/', pos:'n', vi:'chú, bác, cậu', ex:'My uncle lives in Japan.', exvi:'Chú tôi sống ở Nhật.'},
    {w:'aunt', ipa:'/ɑːnt/', pos:'n', vi:'cô, dì, bác gái', ex:'Aunt Mai is coming.', exvi:'Cô Mai sắp đến.'},
    {w:'tall', ipa:'/tɔːl/', pos:'adj', vi:'cao', ex:'He is tall and thin.', exvi:'Anh ấy cao và gầy.'},
    {w:'short', ipa:'/ʃɔːt/', pos:'adj', vi:'thấp; ngắn', ex:'She has short hair.', exvi:'Cô ấy tóc ngắn.'},
    {w:'thin', ipa:'/θɪn/', pos:'adj', vi:'gầy, mỏng', ex:'My brother is thin.', exvi:'Em trai tôi gầy.'},
    {w:'fat', ipa:'/fæt/', pos:'adj', vi:'béo', ex:'The cat is fat.', exvi:'Con mèo béo.'},
    {w:'hair', ipa:'/heə(r)/', pos:'n', vi:'tóc', ex:'She has long black hair.', exvi:'Cô ấy có mái tóc đen dài.'},
    {w:'eyes', ipa:'/aɪz/', pos:'n', vi:'đôi mắt', ex:'He has brown eyes.', exvi:'Anh ấy có đôi mắt nâu.'}
  ],
  grammar:[
    {
      t:'1. HAVE / HAS — sở hữu',
      table:[
        ['Chủ ngữ','Khẳng định','Phủ định','Nghi vấn'],
        ['I / You / We / They','**have**','don’t have','**Do** … have …?'],
        ['He / She / It','**has**','doesn’t have','**Does** … have …?']
      ],
      formula:'(+) S + have/has + N\n(–) S + don’t/doesn’t + HAVE + N   ← quay về “have”, KHÔNG dùng “has”\n(?) Do/Does + S + HAVE + N?',
      ex:[
        ['I **have** two brothers.','Tôi có hai anh em trai.'],
        ['She **has** a new car.','Cô ấy có xe mới.'],
        ['He **doesn’t have** any children.','Anh ấy không có con.'],
        ['**Do** you **have** a pen?','Bạn có bút không?']
      ],
      notes:[
        {type:'warn', text:'Sai kinh điển: “She doesn’t **has** a car” ❌ → đúng là *doesn’t **have***. Sau *do/does* động từ luôn về nguyên mẫu.'},
        {type:'tip', text:'Anh-Anh còn dùng **have got**: *I’ve got two brothers = I have two brothers*. Phủ định: *I haven’t got…*, hỏi: *Have you got…?*'}
      ]
    },
    {
      t:'2. Tính từ sở hữu (my, your, his, her…)',
      table:[
        ['Đại từ','Tính từ sở hữu','Ví dụ'],
        ['I','**my** (của tôi)','my book'],
        ['you','**your** (của bạn)','your name'],
        ['he','**his** (của anh ấy)','his car'],
        ['she','**her** (của cô ấy)','her bag'],
        ['it','**its** (của nó)','its colour'],
        ['we','**our** (của chúng tôi)','our house'],
        ['they','**their** (của họ)','their children']
      ],
      ex:[
        ['This is **my** sister and that is **her** husband.','Đây là chị tôi và kia là chồng chị ấy.'],
        ['**Their** house is very big.','Nhà của họ rất to.']
      ],
      notes:[
        {type:'warn', text:'**its** (của nó) ≠ **it’s** (= it is). Đây là lỗi chính tả phổ biến nhất trong tiếng Anh.'},
        {type:'warn', text:'Sở hữu theo **người sở hữu**, không theo vật: *Lan and **her** brother* (Lan là nữ → her), dù “brother” là nam.'}
      ]
    },
    {
      t:'3. Sở hữu cách ’s (Possessive case)',
      formula:'Người số ít       + ’s   → Nam’s bike, my sister’s name\nSố nhiều có -s    + ’    → my parents’ house, the students’ books\nSố nhiều không -s + ’s  → the children’s toys, the men’s room\nĐồ vật → dùng OF     → the door of the car, the end of the film',
      ex:[
        ['This is **Nam’s** motorbike.','Đây là xe máy của Nam.'],
        ['**My parents’** house is in Hue.','Nhà bố mẹ tôi ở Huế.'],
        ['The name **of the book** is “Sapiens”.','Tên của quyển sách là “Sapiens”.']
      ]
    },
    {
      t:'4. Mô tả ngoại hình',
      formula:'BE + tính từ:  He IS tall / thin / handsome.\nHAVE + bộ phận: She HAS long hair / blue eyes.\nLook like:      He LOOKS LIKE his father.  (trông giống)',
      ex:[
        ['My sister **is** short and **has** long black hair.','Chị tôi thấp và có mái tóc đen dài.'],
        ['He **looks like** his mother.','Anh ấy trông giống mẹ.']
      ],
      notes:[
        {type:'warn', text:'Không nói “I have 20 years old” ❌ hay “She has tall” ❌. Tuổi và tính từ đi với **BE**; bộ phận cơ thể đi với **HAVE**.'}
      ]
    }
  ],
  phrases:[
    ['How many people are there in your family?','Gia đình bạn có mấy người?'],
    ['There are four people in my family.','Gia đình tôi có bốn người.'],
    ['Do you have any brothers or sisters?','Bạn có anh chị em không?'],
    ['I have one older brother.','Tôi có một anh trai.'],
    ["I'm the only child.",'Tôi là con một.'],
    ['What does your father do?','Bố bạn làm nghề gì?'],
    ['He works for a company.','Ông ấy làm cho một công ty.'],
    ['What does she look like?','Cô ấy trông thế nào?'],
    ["She's tall with long hair.",'Cô ấy cao, tóc dài.'],
    ['He looks like his father.','Anh ấy trông giống bố.'],
    ['This is my wife, Lan.','Đây là vợ tôi, Lan.'],
    ['Do you have children?','Bạn có con chưa?']
  ],
  exercises:[
    {type:'mc', q:'My sister ___ a beautiful voice.', opts:['have','has','haves','having'], a:1, ex:'*My sister* ngôi thứ 3 số ít → **has**.'},
    {type:'mc', q:'He ___ any money.', opts:['doesn’t have','doesn’t has','don’t have','not have'], a:0, ex:'Sau *doesn’t* dùng động từ nguyên mẫu **have**.'},
    {type:'mc', q:'Lan is here with ___ brother.', opts:['his','her','their','its'], a:1, ex:'Lan là nữ → **her**.'},
    {type:'mc', q:'Chọn cách viết ĐÚNG:', opts:['the childrens toys','the children’s toys','the childrens’ toys','the toys of children’s'], a:1, ex:'*children* là số nhiều không có -s → thêm **’s**.'},
    {type:'mc', q:'Câu nào ĐÚNG?', opts:['She has 25 years old.','She is 25 years old.','She have 25 years.','She is 25 years.'], a:1, ex:'Tuổi dùng **BE + số + years old**.'},
    {type:'fill', q:'Điền have/has: They ___ two children.', a:['have'], ex:'*They* → **have**.'},
    {type:'fill', q:'Điền have/has: My father ___ a black car.', a:['has'], ex:'Ngôi 3 số ít → **has**.'},
    {type:'fill', q:'Điền tính từ sở hữu: We love ___ teacher. (của chúng tôi)', a:['our','Our'], ex:'we → **our**.'},
    {type:'fill', q:'Viết sở hữu cách: the bike of Nam → ___ bike', a:["nam's","Nam's"], ex:'Người số ít → thêm **’s**.'},
    {type:'fill', q:'Đặt câu hỏi: ___ she have a laptop?', a:['does','Does'], ex:'Ngôi 3 số ít → **Does**.'},
    {type:'mc', q:'Chọn từ đúng: The dog wags ___ tail.', opts:['it’s','its','his','their'], a:1, ex:'**its** = của nó (không có dấu phẩy trên).'},
    {type:'mc', q:'“What does she look like?” hỏi về:', opts:['tính cách','sở thích','ngoại hình','nghề nghiệp'], a:2, ex:'*look like* = trông như thế nào → hỏi **ngoại hình**.'}
  ]
},

/* ============================ BUỔI 6 ============================ */
'a1-06': {
  id:'a1-06', level:'A1', no:6,
  title:'Thì hiện tại đơn (Present Simple)',
  subtitle:'Thì quan trọng nhất tiếng Anh: nói về thói quen và sự thật.',
  goals:[
    'Chia động từ ngôi thứ 3 số ít đúng (thêm -s/-es)',
    'Dùng do/does trong câu phủ định và câu hỏi',
    'Kể về thói quen, lịch sinh hoạt hằng ngày'
  ],
  pron:{
    t:'Đuôi -s của động từ đọc giống đuôi -s của danh từ',
    formula:'works /wɜːks/ – /s/       plays /pleɪz/ – /z/       watches /ˈwɒtʃɪz/ – /ɪz/',
    notes:[{type:'tip', text:'Nhiều người Việt nói *“He work”* vì bỏ mất /s/. Người bản xứ nghe là **sai ngữ pháp** ngay lập tức. Hãy tập nói rõ /s/, /z/.'}]
  },
  vocab:[
    {w:'get up', ipa:'/ɡet ʌp/', pos:'phr v', vi:'thức dậy', ex:'I get up at 6 a.m.', exvi:'Tôi dậy lúc 6 giờ sáng.'},
    {w:'have breakfast', ipa:'/hæv ˈbrekfəst/', pos:'phr', vi:'ăn sáng', ex:'She has breakfast at 7.', exvi:'Cô ấy ăn sáng lúc 7 giờ.'},
    {w:'go to work', ipa:'/ɡəʊ tə wɜːk/', pos:'phr', vi:'đi làm', ex:'He goes to work by bus.', exvi:'Anh ấy đi làm bằng xe buýt.'},
    {w:'start', ipa:'/stɑːt/', pos:'v', vi:'bắt đầu', ex:'Work starts at 8.', exvi:'Công việc bắt đầu lúc 8 giờ.'},
    {w:'finish', ipa:'/ˈfɪnɪʃ/', pos:'v', vi:'kết thúc', ex:'I finish at 5 p.m.', exvi:'Tôi xong việc lúc 5 giờ chiều.'},
    {w:'study', ipa:'/ˈstʌdi/', pos:'v', vi:'học', ex:'She studies English.', exvi:'Cô ấy học tiếng Anh.'},
    {w:'work', ipa:'/wɜːk/', pos:'v/n', vi:'làm việc; công việc', ex:'I work in an office.', exvi:'Tôi làm ở văn phòng.'},
    {w:'live', ipa:'/lɪv/', pos:'v', vi:'sống, ở', ex:'They live in Da Nang.', exvi:'Họ sống ở Đà Nẵng.'},
    {w:'eat', ipa:'/iːt/', pos:'v', vi:'ăn', ex:'We eat rice every day.', exvi:'Chúng tôi ăn cơm mỗi ngày.'},
    {w:'drink', ipa:'/drɪŋk/', pos:'v', vi:'uống', ex:'He drinks coffee.', exvi:'Anh ấy uống cà phê.'},
    {w:'watch', ipa:'/wɒtʃ/', pos:'v', vi:'xem', ex:'I watch TV at night.', exvi:'Tôi xem TV buổi tối.'},
    {w:'listen to', ipa:'/ˈlɪsn tə/', pos:'v', vi:'nghe', ex:'She listens to music.', exvi:'Cô ấy nghe nhạc.'},
    {w:'read', ipa:'/riːd/', pos:'v', vi:'đọc', ex:'I read books.', exvi:'Tôi đọc sách.'},
    {w:'sleep', ipa:'/sliːp/', pos:'v', vi:'ngủ', ex:'He sleeps eight hours.', exvi:'Anh ấy ngủ 8 tiếng.'},
    {w:'cook', ipa:'/kʊk/', pos:'v', vi:'nấu ăn', ex:'My mother cooks dinner.', exvi:'Mẹ tôi nấu bữa tối.'},
    {w:'go home', ipa:'/ɡəʊ həʊm/', pos:'phr', vi:'về nhà', ex:'I go home at 6.', exvi:'Tôi về nhà lúc 6 giờ.'},
    {w:'every day', ipa:'/ˈevri deɪ/', pos:'adv', vi:'mỗi ngày', ex:'I exercise every day.', exvi:'Tôi tập thể dục mỗi ngày.'},
    {w:'weekend', ipa:'/ˌwiːkˈend/', pos:'n', vi:'cuối tuần', ex:'At the weekend I relax.', exvi:'Cuối tuần tôi nghỉ ngơi.'},
    {w:'office', ipa:'/ˈɒfɪs/', pos:'n', vi:'văn phòng', ex:'Our office is in District 1.', exvi:'Văn phòng chúng tôi ở Quận 1.'},
    {w:'homework', ipa:'/ˈhəʊmwɜːk/', pos:'n', vi:'bài tập về nhà', ex:'I do my homework at night.', exvi:'Tôi làm bài tập buổi tối.'}
  ],
  grammar:[
    {
      t:'1. Hiện tại đơn dùng khi nào?',
      table:[
        ['Trường hợp','Ví dụ'],
        ['Thói quen, việc lặp lại','I **go** to the gym every morning.'],
        ['Sự thật hiển nhiên','Water **boils** at 100°C.'],
        ['Tình trạng lâu dài','She **lives** in Hanoi.'],
        ['Lịch trình cố định (tàu, xe, phim)','The train **leaves** at 7:30.'],
        ['Cảm xúc, suy nghĩ (stative verbs)','I **like** coffee. He **knows** the answer.']
      ]
    },
    {
      t:'2. Công thức đầy đủ',
      formula:'(+)  I/You/We/They + V         |  He/She/It + V-s/es\n(–)  I/You/We/They + don’t + V |  He/She/It + doesn’t + V\n(?)  Do + I/you/we/they + V?    |  Does + he/she/it + V?',
      table:[
        ['','I / You / We / They','He / She / It'],
        ['Khẳng định','I **work** here.','He **works** here.'],
        ['Phủ định','I **don’t work** here.','He **doesn’t work** here.'],
        ['Nghi vấn','**Do** you **work** here?','**Does** he **work** here?'],
        ['Trả lời ngắn','Yes, I do. / No, I don’t.','Yes, he does. / No, he doesn’t.']
      ],
      notes:[
        {type:'warn', text:'Nguyên tắc **“chỉ một chỗ mang -s”**: đã có *does/doesn’t* thì động từ chính về nguyên mẫu. *He doesn’t **works*** ❌ → *He doesn’t **work*** ✔'}
      ]
    },
    {
      t:'3. Cách thêm -s / -es cho ngôi thứ 3 số ít',
      table:[
        ['Trường hợp','Quy tắc','Ví dụ'],
        ['Đa số','+ **s**','work → works, live → lives'],
        ['Tận cùng s, sh, ch, x, o','+ **es**','watch → watch**es**, go → go**es**, do → do**es**'],
        ['Phụ âm + y','bỏ y → **ies**','study → stud**ies**, fly → fl**ies**'],
        ['Nguyên âm + y','+ **s**','play → play**s**, buy → buy**s**'],
        ['Đặc biệt','','have → **has**']
      ]
    },
    {
      t:'4. Câu hỏi WH- ở hiện tại đơn',
      formula:'WH + do/does + S + V (nguyên mẫu) ?\n\nWhat time do you get up?   → I get up at six.\nWhere does she work?       → She works in a bank.\nHow do you go to school?   → By bike.\nWhy do you study English?  → Because I want a better job.',
      ex:[
        ['**What do you do?** — I’m an accountant.','Bạn làm nghề gì? — Tôi là kế toán.'],
        ['**How often does he** play football? — Twice a week.','Anh ấy chơi bóng bao lâu một lần? — Hai lần một tuần.']
      ],
      notes:[
        {type:'tip', text:'*What do you do?* = hỏi **nghề nghiệp**. *What are you doing?* = hỏi **đang làm gì lúc này**. Đừng nhầm hai câu này.'}
      ]
    }
  ],
  phrases:[
    ['What time do you get up?','Bạn dậy lúc mấy giờ?'],
    ['I usually get up at six.','Tôi thường dậy lúc 6 giờ.'],
    ['What do you do in your free time?','Lúc rảnh bạn làm gì?'],
    ['I go to work by motorbike.','Tôi đi làm bằng xe máy.'],
    ['She works from Monday to Friday.','Cô ấy làm từ thứ Hai đến thứ Sáu.'],
    ["I don't drink coffee.",'Tôi không uống cà phê.'],
    ['Do you speak English?','Bạn có nói tiếng Anh không?'],
    ['Yes, a little.','Có, một chút.'],
    ['He lives with his parents.','Anh ấy sống với bố mẹ.'],
    ['We have lunch at twelve.','Chúng tôi ăn trưa lúc 12 giờ.'],
    ['I go to bed at eleven.','Tôi đi ngủ lúc 11 giờ.'],
    ['What does this word mean?','Từ này nghĩa là gì?']
  ],
  dialogue:[
    ['Anna','What do you do, Minh?','Bạn làm nghề gì vậy Minh?'],
    ['Minh','I work in a bank. I am an accountant.','Mình làm ở ngân hàng. Mình là kế toán.'],
    ['Anna','What time do you start work?','Bạn bắt đầu làm lúc mấy giờ?'],
    ['Minh','I start at 8 and finish at 5. I go to work by motorbike.','Mình bắt đầu lúc 8 giờ và xong lúc 5 giờ. Mình đi làm bằng xe máy.'],
    ['Anna','Do you work at the weekend?','Cuối tuần bạn có làm không?'],
    ['Minh','No, I don’t. I usually stay home and read books.','Không. Mình thường ở nhà và đọc sách.']
  ],
  exercises:[
    {type:'mc', q:'She ___ in a hospital.', opts:['work','works','working','is work'], a:1, ex:'*She* → thêm **-s**.'},
    {type:'mc', q:'They ___ TV in the evening.', opts:['watches','watch','watching','is watch'], a:1, ex:'*They* → động từ nguyên mẫu.'},
    {type:'mc', q:'___ he like Vietnamese food?', opts:['Do','Does','Is','Are'], a:1, ex:'Ngôi 3 số ít + động từ thường → **Does**.'},
    {type:'mc', q:'My brother ___ coffee.', opts:['doesn’t drinks','don’t drink','doesn’t drink','not drink'], a:2, ex:'Sau *doesn’t* → **drink** nguyên mẫu.'},
    {type:'mc', q:'Dạng ngôi 3 số ít của “study” là:', opts:['studys','studyes','studies','studdies'], a:2, ex:'Phụ âm + y → bỏ y thêm **ies**.'},
    {type:'mc', q:'Dạng ngôi 3 số ít của “go” là:', opts:['gos','goes','goies','goo'], a:1, ex:'Tận cùng -o → thêm **es**.'},
    {type:'fill', q:'Chia động từ: He ___ (have) lunch at 12.', a:['has'], ex:'have → **has** ở ngôi 3 số ít.'},
    {type:'fill', q:'Chia động từ: We ___ (not / live) in Hanoi.', a:["don't live",'do not live'], ex:'*We* → **don’t live**.'},
    {type:'fill', q:'Đặt câu hỏi: ___ your parents live in Hue?', a:['do','Do'], ex:'*your parents* số nhiều → **Do**.'},
    {type:'fill', q:'Chia động từ: My sister ___ (watch) TV every night.', a:['watches'], ex:'Tận cùng -ch → thêm **es**.'},
    {type:'mc', q:'Câu nào ĐÚNG?', opts:['Does she works here?','Does she work here?','Do she work here?','Is she work here?'], a:1, ex:'Đã có *Does* thì động từ giữ nguyên mẫu.'},
    {type:'mc', q:'“What do you do?” nghĩa là gì?', opts:['Bạn đang làm gì đó?','Bạn làm nghề gì?','Bạn muốn gì?','Bạn làm sao vậy?'], a:1, ex:'Đây là câu hỏi chuẩn về **nghề nghiệp**.'}
  ]
},

/* ============================ BUỔI 7 ============================ */
'a1-07': {
  id:'a1-07', level:'A1', no:7,
  title:'Trạng từ tần suất, giờ giấc & ngày tháng',
  subtitle:'Always, usually, never… và cách nói giờ, thứ, ngày, tháng.',
  goals:[
    'Đặt trạng từ tần suất đúng vị trí trong câu',
    'Đọc giờ theo hai cách (kiểu Anh và kiểu số)',
    'Dùng đúng giới từ thời gian in / on / at'
  ],
  vocab:[
    {w:'always', ipa:'/ˈɔːlweɪz/', pos:'adv', vi:'luôn luôn (100%)', ex:'I always brush my teeth.', exvi:'Tôi luôn đánh răng.'},
    {w:'usually', ipa:'/ˈjuːʒuəli/', pos:'adv', vi:'thường (80%)', ex:'She usually walks to school.', exvi:'Cô ấy thường đi bộ tới trường.'},
    {w:'often', ipa:'/ˈɒfn/', pos:'adv', vi:'hay, thường (60%)', ex:'We often eat out.', exvi:'Chúng tôi hay ăn ngoài.'},
    {w:'sometimes', ipa:'/ˈsʌmtaɪmz/', pos:'adv', vi:'thỉnh thoảng (40%)', ex:'Sometimes I take a taxi.', exvi:'Thỉnh thoảng tôi đi taxi.'},
    {w:'rarely / seldom', ipa:'/ˈreəli/', pos:'adv', vi:'hiếm khi (10%)', ex:'He rarely gets angry.', exvi:'Anh ấy hiếm khi giận.'},
    {w:'never', ipa:'/ˈnevə(r)/', pos:'adv', vi:'không bao giờ (0%)', ex:'I never smoke.', exvi:'Tôi không bao giờ hút thuốc.'},
    {w:"o'clock", ipa:'/əˈklɒk/', pos:'adv', vi:'giờ đúng', ex:"It's seven o'clock.", exvi:'Bây giờ là 7 giờ.'},
    {w:'half past', ipa:'/hɑːf pɑːst/', pos:'phr', vi:'rưỡi (30 phút)', ex:"It's half past six.", exvi:'6 giờ rưỡi.'},
    {w:'quarter', ipa:'/ˈkwɔːtə(r)/', pos:'n', vi:'15 phút, một phần tư', ex:"It's a quarter to nine.", exvi:'9 giờ kém 15.'},
    {w:'Monday', ipa:'/ˈmʌndeɪ/', pos:'n', vi:'thứ Hai', ex:'I work on Monday.', exvi:'Tôi làm việc vào thứ Hai.'},
    {w:'Tuesday', ipa:'/ˈtjuːzdeɪ/', pos:'n', vi:'thứ Ba', ex:'See you on Tuesday.', exvi:'Hẹn gặp thứ Ba.'},
    {w:'Wednesday', ipa:'/ˈwenzdeɪ/', pos:'n', vi:'thứ Tư (đọc “WEN-zday”)', ex:'The meeting is on Wednesday.', exvi:'Cuộc họp vào thứ Tư.'},
    {w:'Thursday', ipa:'/ˈθɜːzdeɪ/', pos:'n', vi:'thứ Năm', ex:'Thursday is busy.', exvi:'Thứ Năm bận.'},
    {w:'Friday', ipa:'/ˈfraɪdeɪ/', pos:'n', vi:'thứ Sáu', ex:'Friday night.', exvi:'Tối thứ Sáu.'},
    {w:'Saturday', ipa:'/ˈsætədeɪ/', pos:'n', vi:'thứ Bảy', ex:'On Saturday I relax.', exvi:'Thứ Bảy tôi nghỉ.'},
    {w:'Sunday', ipa:'/ˈsʌndeɪ/', pos:'n', vi:'Chủ nhật', ex:'Sunday is a holiday.', exvi:'Chủ nhật là ngày nghỉ.'},
    {w:'month', ipa:'/mʌnθ/', pos:'n', vi:'tháng', ex:'Next month I travel.', exvi:'Tháng sau tôi đi du lịch.'},
    {w:'year', ipa:'/jɪə(r)/', pos:'n', vi:'năm', ex:'This year is 2026.', exvi:'Năm nay là 2026.'},
    {w:'birthday', ipa:'/ˈbɜːθdeɪ/', pos:'n', vi:'sinh nhật', ex:'My birthday is in May.', exvi:'Sinh nhật tôi vào tháng Năm.'},
    {w:'holiday', ipa:'/ˈhɒlədeɪ/', pos:'n', vi:'kỳ nghỉ, ngày lễ', ex:'We have a long holiday.', exvi:'Chúng tôi có kỳ nghỉ dài.'}
  ],
  grammar:[
    {
      t:'1. Vị trí trạng từ tần suất',
      formula:'TRƯỚC động từ thường:   I **always** get up early.\nSAU động từ TO BE:      He **is always** late.\nGIỮA trợ động từ và V:  I **don’t usually** work on Sunday.',
      table:[
        ['Trạng từ','Mức độ','Ví dụ'],
        ['always','100%','She **always** helps me.'],
        ['usually','~80%','I **usually** walk to work.'],
        ['often','~60%','They **often** go out.'],
        ['sometimes','~40%','He **sometimes** calls me.'],
        ['rarely / seldom','~10%','We **rarely** eat fast food.'],
        ['never','0%','I **never** drink beer.']
      ],
      notes:[
        {type:'warn', text:'**never** đã mang nghĩa phủ định — không dùng thêm *don’t*: *I don’t never go* ❌ → *I **never** go* ✔'},
        {type:'tip', text:'*sometimes* và *usually* có thể đứng đầu câu để nhấn mạnh: ***Sometimes** I work at home.*'}
      ]
    },
    {
      t:'2. Hỏi tần suất: How often…?',
      formula:'How often + do/does + S + V?\n→ once a day / twice a week / three times a month / every day / every morning',
      ex:[
        ['**How often do** you exercise? — **Three times a week**.','Bạn tập thể dục mấy lần một tuần? — Ba lần.'],
        ['**How often does** she visit her parents? — **Once a month**.','Cô ấy về thăm bố mẹ mấy lần một tháng? — Một lần.']
      ],
      notes:[{type:'tip', text:'1 lần = **once**, 2 lần = **twice**, từ 3 trở đi = **three/four… times**.'}]
    },
    {
      t:'3. Cách nói giờ',
      formula:'CÁCH 1 (đọc số, dễ nhất):\n  7:15 → seven fifteen        8:45 → eight forty-five\n  6:05 → six oh five          10:30 → ten thirty\n\nCÁCH 2 (kiểu Anh, dùng past / to):\n  Phút ≤ 30 → dùng PAST:  7:15 → a quarter PAST seven\n  Phút > 30 → dùng TO:    8:45 → a quarter TO nine  (kém 15 phút của 9 giờ)\n  X:00 → o’clock   X:30 → half past X',
      table:[
        ['Giờ','Cách 1','Cách 2'],
        ['3:00','three o’clock','three o’clock'],
        ['3:15','three fifteen','a quarter past three'],
        ['3:30','three thirty','half past three'],
        ['3:45','three forty-five','a quarter to four'],
        ['3:50','three fifty','ten to four']
      ],
      notes:[
        {type:'tip', text:'a.m. = sáng (0h–12h), p.m. = chiều/tối (12h–24h). *7 a.m.* = 7 giờ sáng, *7 p.m.* = 7 giờ tối.'},
        {type:'warn', text:'Hỏi giờ: *What time is it?* hoặc *What’s the time?* — Trả lời **It’s** + giờ.'}
      ]
    },
    {
      t:'4. Giới từ thời gian IN / ON / AT',
      formula:'AT + giờ, thời điểm:      at 7 o’clock, at noon, at night, at the weekend\nON + ngày, thứ, ngày tháng: on Monday, on 5th May, on Christmas Day\nIN + tháng, năm, mùa, buổi: in May, in 2026, in summer, in the morning',
      table:[
        ['AT','ON','IN'],
        ['at 6:30','on Sunday','in July'],
        ['at midnight','on Monday morning','in 2026'],
        ['at lunchtime','on my birthday','in the evening'],
        ['at the weekend *(Anh)*','on the weekend *(Mỹ)*','in winter']
      ],
      notes:[
        {type:'warn', text:'Không dùng giới từ trước: **every** day, **next** week, **last** month, **this** morning, **tomorrow**, **yesterday**. → *I see him **every day*** ✔ (không “in every day”).'}
      ]
    }
  ],
  phrases:[
    ['What time is it?','Mấy giờ rồi?'],
    ["It's half past nine.",'9 rưỡi.'],
    ['What time do you start work?','Bạn bắt đầu làm việc lúc mấy giờ?'],
    ['How often do you go to the gym?','Bạn tới phòng gym mấy lần?'],
    ['Twice a week.','Hai lần một tuần.'],
    ['I am always busy on Monday.','Thứ Hai tôi lúc nào cũng bận.'],
    ['What day is it today?','Hôm nay thứ mấy?'],
    ["It's Wednesday.",'Thứ Tư.'],
    ["What's the date today?",'Hôm nay ngày mấy?'],
    ["It's the twelfth of August.",'Ngày 12 tháng Tám.'],
    ['When is your birthday?','Sinh nhật bạn ngày nào?'],
    ['My birthday is on 3rd March.','Sinh nhật tôi ngày 3 tháng Ba.'],
    ['See you on Friday!','Hẹn gặp thứ Sáu!'],
    ['I am never late for work.','Tôi không bao giờ đi làm trễ.']
  ],
  exercises:[
    {type:'mc', q:'Chọn câu ĐÚNG:', opts:['I go always to school by bus.','I always go to school by bus.','Always I go to school by bus.','I go to always school by bus.'], a:1, ex:'Trạng từ tần suất đứng **trước động từ thường**.'},
    {type:'mc', q:'Chọn câu ĐÚNG:', opts:['He always is late.','He is always late.','Always he is late.','He is late always.'], a:1, ex:'Sau động từ **TO BE**.'},
    {type:'mc', q:'8:45 đọc theo kiểu Anh là:', opts:['a quarter past eight','a quarter to nine','half past eight','a quarter to eight'], a:1, ex:'Còn 15 phút nữa là 9 giờ → **a quarter to nine**.'},
    {type:'mc', q:'Điền giới từ: The meeting is ___ Monday.', opts:['in','on','at','of'], a:1, ex:'Thứ trong tuần → **on**.'},
    {type:'mc', q:'Điền giới từ: I was born ___ 1998.', opts:['in','on','at','since'], a:0, ex:'Năm → **in**.'},
    {type:'mc', q:'Điền giới từ: The film starts ___ 8 p.m.', opts:['in','on','at','to'], a:2, ex:'Giờ cụ thể → **at**.'},
    {type:'fill', q:'Điền trạng từ nghĩa “không bao giờ”: I ___ eat raw fish.', a:['never'], ex:'0% → **never**.'},
    {type:'fill', q:'Hỏi tần suất: ___ ___ do you go swimming? (2 từ)', a:['how often','How often'], ex:'**How often** = bao lâu một lần.'},
    {type:'fill', q:'“2 lần một tuần” = ___ a week (1 từ)', a:['twice'], ex:'2 lần = **twice**.'},
    {type:'fill', q:'Điền in/on/at: I usually read ___ the evening.', a:['in'], ex:'Buổi trong ngày → **in the evening**.'},
    {type:'mc', q:'Câu nào SAI?', opts:['I go there every day.','I go there in every day.','She calls me every morning.','We meet every Sunday.'], a:1, ex:'Không dùng giới từ trước **every**.'},
    {type:'fill', q:'9:30 viết là: It is ___ past nine.', a:['half'], ex:'30 phút = **half past**.'}
  ]
},

/* ============================ BUỔI 8 ============================ */
'a1-08': {
  id:'a1-08', level:'A1', no:8,
  title:'There is / There are & giới từ nơi chốn',
  subtitle:'Mô tả căn phòng, ngôi nhà, khu phố — nói cái gì ở đâu.',
  goals:[
    'Phân biệt There is / There are và dạng phủ định, nghi vấn',
    'Dùng đúng in / on / at / under / behind / between…',
    'Mô tả nhà cửa và hỏi đường cơ bản'
  ],
  vocab:[
    {w:'house', ipa:'/haʊs/', pos:'n', vi:'ngôi nhà', ex:'Their house is big.', exvi:'Nhà họ to.'},
    {w:'flat / apartment', ipa:'/flæt/', pos:'n', vi:'căn hộ', ex:'I live in a small flat.', exvi:'Tôi sống trong căn hộ nhỏ.'},
    {w:'room', ipa:'/ruːm/', pos:'n', vi:'căn phòng', ex:'There are three rooms.', exvi:'Có ba phòng.'},
    {w:'kitchen', ipa:'/ˈkɪtʃɪn/', pos:'n', vi:'nhà bếp', ex:'The kitchen is clean.', exvi:'Nhà bếp sạch sẽ.'},
    {w:'bedroom', ipa:'/ˈbedruːm/', pos:'n', vi:'phòng ngủ', ex:'My bedroom is upstairs.', exvi:'Phòng ngủ tôi ở tầng trên.'},
    {w:'bathroom', ipa:'/ˈbɑːθruːm/', pos:'n', vi:'phòng tắm', ex:'Where is the bathroom?', exvi:'Nhà vệ sinh ở đâu?'},
    {w:'living room', ipa:'/ˈlɪvɪŋ ruːm/', pos:'n', vi:'phòng khách', ex:'We watch TV in the living room.', exvi:'Chúng tôi xem TV ở phòng khách.'},
    {w:'garden', ipa:'/ˈɡɑːdn/', pos:'n', vi:'vườn', ex:'There is a small garden.', exvi:'Có một khu vườn nhỏ.'},
    {w:'wall', ipa:'/wɔːl/', pos:'n', vi:'bức tường', ex:'A picture is on the wall.', exvi:'Có bức tranh trên tường.'},
    {w:'floor', ipa:'/flɔː(r)/', pos:'n', vi:'sàn nhà; tầng', ex:'I live on the third floor.', exvi:'Tôi sống ở tầng ba.'},
    {w:'in', ipa:'/ɪn/', pos:'prep', vi:'ở trong', ex:'The keys are in the bag.', exvi:'Chìa khoá ở trong túi.'},
    {w:'on', ipa:'/ɒn/', pos:'prep', vi:'ở trên (bề mặt)', ex:'The book is on the table.', exvi:'Quyển sách ở trên bàn.'},
    {w:'under', ipa:'/ˈʌndə(r)/', pos:'prep', vi:'ở dưới', ex:'The cat is under the chair.', exvi:'Con mèo ở dưới ghế.'},
    {w:'behind', ipa:'/bɪˈhaɪnd/', pos:'prep', vi:'phía sau', ex:'The garden is behind the house.', exvi:'Vườn ở sau nhà.'},
    {w:'in front of', ipa:'/ɪn frʌnt əv/', pos:'prep', vi:'phía trước', ex:'A car is in front of the door.', exvi:'Có xe trước cửa.'},
    {w:'next to', ipa:'/nekst tə/', pos:'prep', vi:'bên cạnh', ex:'The bank is next to the post office.', exvi:'Ngân hàng cạnh bưu điện.'},
    {w:'between', ipa:'/bɪˈtwiːn/', pos:'prep', vi:'ở giữa (2 vật)', ex:'It is between the shop and the café.', exvi:'Nó ở giữa cửa hàng và quán cà phê.'},
    {w:'opposite', ipa:'/ˈɒpəzɪt/', pos:'prep', vi:'đối diện', ex:'The school is opposite the park.', exvi:'Trường học đối diện công viên.'},
    {w:'near', ipa:'/nɪə(r)/', pos:'prep', vi:'gần', ex:'Is there a bank near here?', exvi:'Gần đây có ngân hàng không?'},
    {w:'street', ipa:'/striːt/', pos:'n', vi:'đường phố', ex:'I live on Le Loi Street.', exvi:'Tôi sống trên đường Lê Lợi.'}
  ],
  grammar:[
    {
      t:'1. There is / There are — “có”',
      intro:'Dùng để nói **sự tồn tại** của cái gì đó ở đâu đó. Động từ chia theo danh từ đứng NGAY SAU nó.',
      formula:'(+) There IS  + N số ít / N không đếm được   → There is a book on the desk.\n    There ARE + N số nhiều                    → There are two books.\n(–) There isn’t / There aren’t              → There aren’t any chairs.\n(?) Is there…? / Are there…?                → Is there a bank near here?\n    Yes, there is. / No, there isn’t.',
      ex:[
        ['**There is** a big park in my city.','Ở thành phố tôi có một công viên lớn.'],
        ['**There are** four people in my family.','Gia đình tôi có bốn người.'],
        ['**There isn’t** any milk in the fridge.','Trong tủ lạnh không còn sữa.'],
        ['**Are there** any questions? — Yes, there are.','Có câu hỏi nào không? — Có.']
      ],
      notes:[
        {type:'warn', text:'Người Việt hay dịch thẳng “Trong phòng có 3 người” thành “In the room have 3 people” ❌. Đúng: ***There are** three people in the room.*'},
        {type:'tip', text:'Khi liệt kê nhiều thứ, chia theo **danh từ đầu tiên**: *There **is** a table and four chairs.*'}
      ]
    },
    {
      t:'2. How many / How much',
      formula:'How many + N số nhiều + are there?   → How many rooms are there?\nHow much + N không đếm được + is there? → How much water is there?',
      ex:[
        ['**How many** students **are there** in your class? — There are 30.','Lớp bạn có bao nhiêu học sinh? — Có 30.'],
        ['**How much** money **is there** in your wallet?','Trong ví bạn có bao nhiêu tiền?']
      ]
    },
    {
      t:'3. Giới từ chỉ nơi chốn',
      table:[
        ['Giới từ','Nghĩa','Ví dụ'],
        ['**in**','trong (không gian kín)','in the room, in the box, in Hanoi'],
        ['**on**','trên bề mặt','on the table, on the wall, on the second floor'],
        ['**at**','tại (một điểm)','at home, at school, at the bus stop'],
        ['**under**','dưới','under the bed'],
        ['**above / over**','phía trên (không chạm)','a lamp above the table'],
        ['**behind**','sau','behind the door'],
        ['**in front of**','trước mặt','in front of the school'],
        ['**next to / beside**','bên cạnh','next to the window'],
        ['**between A and B**','giữa hai thứ','between the bank and the shop'],
        ['**opposite**','đối diện','opposite my house'],
        ['**near / close to**','gần','near the market']
      ],
      notes:[
        {type:'warn', text:'**in the car / on the bus**: phương tiện nhỏ dùng *in*, phương tiện lớn (bus, train, plane) dùng *on*.'},
        {type:'tip', text:'*at home / at work / at school* — **không** có “the”.'}
      ]
    }
  ],
  phrases:[
    ['Is there a bank near here?','Gần đây có ngân hàng không?'],
    ['Yes, there is one on Le Loi Street.','Có, có một cái trên đường Lê Lợi.'],
    ['How many rooms are there in your house?','Nhà bạn có mấy phòng?'],
    ['There are two bedrooms and one bathroom.','Có hai phòng ngủ và một phòng tắm.'],
    ['Where is the bathroom?','Nhà vệ sinh ở đâu?'],
    ["It's next to the kitchen.",'Nó ở cạnh nhà bếp.'],
    ['Excuse me, where is the post office?','Xin lỗi, bưu điện ở đâu ạ?'],
    ["It's opposite the market.",'Nó đối diện chợ.'],
    ['Go straight and turn left.','Đi thẳng rồi rẽ trái.'],
    ["It's about five minutes on foot.",'Đi bộ khoảng 5 phút.'],
    ['There is no water in the bottle.','Trong chai không còn nước.'],
    ['I live on the fifth floor.','Tôi sống ở tầng 5.']
  ],
  dialogue:[
    ['Tourist','Excuse me, is there a coffee shop near here?','Xin lỗi, gần đây có quán cà phê không?'],
    ['Local','Yes, there is one on this street, next to the bookshop.','Có, có một quán trên phố này, cạnh hiệu sách.'],
    ['Tourist','Is it far?','Có xa không ạ?'],
    ['Local','No, it is very near. Go straight, then turn right. It is opposite the bank.','Không, gần lắm. Đi thẳng rồi rẽ phải. Nó đối diện ngân hàng.'],
    ['Tourist','Thank you very much!','Cảm ơn nhiều ạ!']
  ],
  exercises:[
    {type:'mc', q:'___ a computer on the desk.', opts:['There is','There are','There have','It has'], a:0, ex:'*a computer* số ít → **There is**.'},
    {type:'mc', q:'___ many people in the park.', opts:['There is','There are','There has','Have'], a:1, ex:'*many people* số nhiều → **There are**.'},
    {type:'mc', q:'Chọn câu ĐÚNG:', opts:['In my class have 30 students.','My class has 30 students there.','There are 30 students in my class.','Have 30 students in my class.'], a:2, ex:'Cấu trúc chuẩn là **There are + N + nơi chốn**.'},
    {type:'mc', q:'The cat is ___ the table (nằm dưới gầm bàn).', opts:['on','in','under','above'], a:2, ex:'Dưới gầm → **under**.'},
    {type:'mc', q:'The bank is ___ the school and the park.', opts:['among','between','next','behind'], a:1, ex:'Giữa **hai** thứ → **between**.'},
    {type:'fill', q:'Điền is/are: There ___ some milk in the fridge.', a:['is'], ex:'*milk* không đếm được → **is**.'},
    {type:'fill', q:'Điền is/are: ___ there any chairs in the room?', a:['are','Are'], ex:'*chairs* số nhiều → **Are**.'},
    {type:'fill', q:'Điền giới từ: The picture is ___ the wall.', a:['on'], ex:'Trên bề mặt tường → **on**.'},
    {type:'fill', q:'Điền giới từ: She is ___ home now.', a:['at'], ex:'**at home** — không có “the”.'},
    {type:'fill', q:'Hỏi số lượng: ___ ___ students are there? (2 từ)', a:['how many','How many'], ex:'Danh từ đếm được → **How many**.'},
    {type:'mc', q:'Điền giới từ: My office is ___ the third floor.', opts:['in','on','at','to'], a:1, ex:'Tầng lầu dùng **on the … floor**.'},
    {type:'mc', q:'A: Is there a hospital near here? B: ___', opts:['Yes, there is.','Yes, it is.','Yes, there are.','Yes, have.'], a:0, ex:'Trả lời ngắn lặp lại **there is**.'}
  ]
},

/* ============================ BUỔI 9 ============================ */
'a1-09': {
  id:'a1-09', level:'A1', no:9,
  title:'CAN / CAN’T & câu mệnh lệnh',
  subtitle:'Nói về khả năng, xin phép, đề nghị và ra chỉ dẫn.',
  goals:[
    'Dùng can / can’t để nói khả năng và xin phép',
    'Đặt câu mệnh lệnh khẳng định và phủ định',
    'Đưa ra lời mời, lời đề nghị lịch sự'
  ],
  pron:{
    t:'can mạnh và can yếu',
    formula:'Khẳng định: can đọc YẾU /kən/ → “I can swim” nghe như /aɪ kən swɪm/\nPhủ định:   can’t đọc MẠNH /kɑːnt/ (Anh) – /kænt/ (Mỹ)',
    notes:[{type:'tip', text:'Người bản xứ phân biệt *can* / *can’t* chủ yếu nhờ **trọng âm và độ dài**, không phải nhờ chữ “t”. Nếu nghe âm rõ và dài → đó là **can’t**.'}]
  },
  vocab:[
    {w:'can', ipa:'/kæn/', pos:'modal', vi:'có thể', ex:'I can speak English.', exvi:'Tôi có thể nói tiếng Anh.'},
    {w:'swim', ipa:'/swɪm/', pos:'v', vi:'bơi', ex:'Can you swim?', exvi:'Bạn biết bơi không?'},
    {w:'drive', ipa:'/draɪv/', pos:'v', vi:'lái xe', ex:'He can drive a car.', exvi:'Anh ấy biết lái ô tô.'},
    {w:'ride', ipa:'/raɪd/', pos:'v', vi:'đi (xe đạp, xe máy)', ex:'She can ride a motorbike.', exvi:'Cô ấy biết đi xe máy.'},
    {w:'cook', ipa:'/kʊk/', pos:'v', vi:'nấu ăn', ex:'I can cook Vietnamese food.', exvi:'Tôi biết nấu món Việt.'},
    {w:'sing', ipa:'/sɪŋ/', pos:'v', vi:'hát', ex:'They can sing very well.', exvi:'Họ hát rất hay.'},
    {w:'dance', ipa:'/dɑːns/', pos:'v', vi:'nhảy, múa', ex:'Can she dance?', exvi:'Cô ấy biết nhảy không?'},
    {w:'play', ipa:'/pleɪ/', pos:'v', vi:'chơi (thể thao, nhạc cụ)', ex:'He can play the guitar.', exvi:'Anh ấy biết chơi ghi-ta.'},
    {w:'help', ipa:'/help/', pos:'v', vi:'giúp đỡ', ex:'Can you help me?', exvi:'Bạn giúp tôi được không?'},
    {w:'use', ipa:'/juːz/', pos:'v', vi:'sử dụng', ex:'Can I use your phone?', exvi:'Tôi dùng điện thoại bạn được không?'},
    {w:'borrow', ipa:'/ˈbɒrəʊ/', pos:'v', vi:'mượn', ex:'Can I borrow your pen?', exvi:'Cho tôi mượn bút được không?'},
    {w:'turn left', ipa:'/tɜːn left/', pos:'phr', vi:'rẽ trái', ex:'Turn left at the corner.', exvi:'Rẽ trái ở góc đường.'},
    {w:'turn right', ipa:'/tɜːn raɪt/', pos:'phr', vi:'rẽ phải', ex:'Turn right after the bridge.', exvi:'Rẽ phải sau cây cầu.'},
    {w:'go straight', ipa:'/ɡəʊ streɪt/', pos:'phr', vi:'đi thẳng', ex:'Go straight for 200 metres.', exvi:'Đi thẳng 200 mét.'},
    {w:'wait', ipa:'/weɪt/', pos:'v', vi:'chờ, đợi', ex:'Please wait here.', exvi:'Vui lòng đợi ở đây.'},
    {w:'sit down', ipa:'/sɪt daʊn/', pos:'phr v', vi:'ngồi xuống', ex:'Sit down, please.', exvi:'Mời ngồi.'},
    {w:'stand up', ipa:'/stænd ʌp/', pos:'phr v', vi:'đứng lên', ex:'Stand up, everyone.', exvi:'Cả lớp đứng dậy.'},
    {w:'open', ipa:'/ˈəʊpən/', pos:'v', vi:'mở', ex:'Open your books.', exvi:'Mở sách ra.'},
    {w:'close', ipa:'/kləʊz/', pos:'v', vi:'đóng', ex:'Close the door, please.', exvi:'Làm ơn đóng cửa.'},
    {w:'quickly', ipa:'/ˈkwɪkli/', pos:'adv', vi:'nhanh chóng', ex:'Come here quickly!', exvi:'Đến đây nhanh lên!'}
  ],
  grammar:[
    {
      t:'1. CAN — khả năng',
      formula:'(+) S + can + V (nguyên mẫu)      → I can swim.\n(–) S + can’t / cannot + V       → She can’t drive.\n(?) Can + S + V?                 → Can you help me?\n    Yes, I can. / No, I can’t.',
      ex:[
        ['I **can** speak English but I **can’t** speak French.','Tôi nói được tiếng Anh nhưng không nói được tiếng Pháp.'],
        ['**Can** he play the piano? — Yes, he **can**.','Anh ấy chơi được piano không? — Có.']
      ],
      notes:[
        {type:'warn', text:'**can KHÔNG BAO GIỜ thêm -s**, kể cả ngôi 3 số ít: *He **can*** ✔ — *He cans* ❌'},
        {type:'warn', text:'Sau *can* luôn là **động từ nguyên mẫu không TO**: *I can **swim*** ✔ — *I can to swim* ❌'}
      ]
    },
    {
      t:'2. CAN — xin phép, yêu cầu, đề nghị',
      table:[
        ['Chức năng','Mẫu câu','Ví dụ'],
        ['Xin phép','**Can I** …?','Can I sit here? — Sure, go ahead.'],
        ['Nhờ vả','**Can you** …?','Can you open the window?'],
        ['Đề nghị giúp','**Can I help** you?','Can I help you? — Yes, please.'],
        ['Lịch sự hơn','**Could I / Could you** …?','Could you speak more slowly, please?'],
        ['Rất lịch sự','**Would you mind** + V-ing?','Would you mind closing the door?']
      ],
      notes:[
        {type:'tip', text:'Muốn lịch sự hơn: thay *can* bằng **could** và thêm **please**. *Could you help me, please?* nghe nhã nhặn hơn hẳn.'}
      ]
    },
    {
      t:'3. Câu mệnh lệnh (Imperative)',
      intro:'Câu ra lệnh, chỉ dẫn, mời mọc — **không có chủ ngữ**, bắt đầu ngay bằng động từ nguyên mẫu.',
      formula:'(+) V + …            → Open the door.   Come in.   Turn left.\n(–) Don’t + V + …    → Don’t worry.   Don’t be late.   Don’t touch it.\nLịch sự: thêm PLEASE → Please sit down.  /  Sit down, please.\nRủ rê: Let’s + V     → Let’s go!   Let’s have lunch.',
      ex:[
        ['**Turn** right at the traffic lights.','Rẽ phải ở đèn giao thông.'],
        ['**Don’t** forget your keys!','Đừng quên chìa khoá!'],
        ['**Let’s** watch a film tonight.','Tối nay xem phim đi.']
      ],
      notes:[
        {type:'warn', text:'Phủ định của câu mệnh lệnh với TO BE vẫn dùng *don’t*: ***Don’t be** afraid.* ✔ — *Not be afraid* ❌'}
      ]
    }
  ],
  phrases:[
    ['Can you help me, please?','Bạn giúp tôi được không?'],
    ['Of course. / Sure, no problem.','Tất nhiên rồi. / Được thôi.'],
    ["Sorry, I can't.",'Xin lỗi, tôi không giúp được.'],
    ['Can I ask you a question?','Tôi hỏi một câu được không?'],
    ['Can I use your phone?','Tôi dùng điện thoại bạn được không?'],
    ['Could you speak more slowly, please?','Bạn nói chậm hơn được không?'],
    ['Could you say that again?','Bạn nhắc lại giúp được không?'],
    ['I can speak a little English.','Tôi nói được chút tiếng Anh.'],
    ["I can't hear you.",'Tôi không nghe rõ bạn.'],
    ['Go straight, then turn left.','Đi thẳng rồi rẽ trái.'],
    ['Please wait a moment.','Vui lòng đợi một lát.'],
    ["Don't worry!",'Đừng lo!'],
    ["Let's go!",'Đi thôi!'],
    ['Take care!','Giữ gìn sức khoẻ nhé!']
  ],
  exercises:[
    {type:'mc', q:'She ___ play the piano very well.', opts:['can','cans','can to','is can'], a:0, ex:'*can* không chia, không thêm *to*.'},
    {type:'mc', q:'Chọn câu ĐÚNG:', opts:['He can to swim.','He cans swim.','He can swim.','He can swims.'], a:2, ex:'**can + V nguyên mẫu**.'},
    {type:'mc', q:'Xin phép ngồi cùng bàn, bạn nói:', opts:['Can I sit here?','I can sit here!','Can sit I here?','Do I can sit here?'], a:0, ex:'Xin phép → **Can I + V…?**'},
    {type:'mc', q:'Câu mệnh lệnh phủ định của “Be late” là:', opts:['Not be late.','Don’t be late.','No be late.','Doesn’t be late.'], a:1, ex:'Mệnh lệnh phủ định luôn dùng **Don’t + V**.'},
    {type:'mc', q:'A: Can you swim? B: ___', opts:['Yes, I can.','Yes, I can swim it.','Yes, I do.','Yes, I am.'], a:0, ex:'Trả lời ngắn lặp lại **can**.'},
    {type:'fill', q:'Viết phủ định: I ___ (not can) drive a car.', a:["can't",'cannot','can not'], ex:'Phủ định là **can’t / cannot**.'},
    {type:'fill', q:'Đặt câu hỏi: ___ you help me, please?', a:['can','Can','could','Could'], ex:'**Can/Could you…?** dùng để nhờ vả.'},
    {type:'fill', q:'Rủ bạn đi ăn: ___ have lunch together! (1 từ)', a:["let's","Let's",'lets'], ex:'**Let’s + V** = cùng làm gì.'},
    {type:'fill', q:'Chỉ đường: ___ straight for 100 metres.', a:['go','Go'], ex:'Câu mệnh lệnh bắt đầu bằng động từ **Go**.'},
    {type:'mc', q:'Cách nhờ vả LỊCH SỰ NHẤT là:', opts:['Open the window!','Can you open the window?','Could you open the window, please?','You open the window.'], a:2, ex:'**Could + please** là mức lịch sự cao nhất trong các lựa chọn.'}
  ]
},

/* ============================ BUỔI 10 ============================ */
'a1-10': {
  id:'a1-10', level:'A1', no:10,
  title:'Hiện tại tiếp diễn & ôn tập A1',
  subtitle:'Nói về việc đang xảy ra ngay lúc này — và tổng kết toàn bộ cấp A1.',
  goals:[
    'Chia đúng V-ing và cấu trúc am/is/are + V-ing',
    'Phân biệt hiện tại đơn và hiện tại tiếp diễn',
    'Nói về thời tiết, hoạt động đang diễn ra',
    'Tự kiểm tra toàn bộ kiến thức A1'
  ],
  vocab:[
    {w:'now', ipa:'/naʊ/', pos:'adv', vi:'bây giờ', ex:'I am working now.', exvi:'Tôi đang làm việc bây giờ.'},
    {w:'at the moment', ipa:'/ət ðə ˈməʊmənt/', pos:'phr', vi:'lúc này', ex:'She is busy at the moment.', exvi:'Cô ấy đang bận.'},
    {w:'today', ipa:'/təˈdeɪ/', pos:'adv', vi:'hôm nay', ex:'It is raining today.', exvi:'Hôm nay trời mưa.'},
    {w:'wear', ipa:'/weə(r)/', pos:'v', vi:'mặc, đeo', ex:'He is wearing a blue shirt.', exvi:'Anh ấy đang mặc áo xanh.'},
    {w:'run', ipa:'/rʌn/', pos:'v', vi:'chạy (running)', ex:'The children are running.', exvi:'Bọn trẻ đang chạy.'},
    {w:'sit', ipa:'/sɪt/', pos:'v', vi:'ngồi (sitting)', ex:'We are sitting outside.', exvi:'Chúng tôi đang ngồi ngoài.'},
    {w:'write', ipa:'/raɪt/', pos:'v', vi:'viết (writing)', ex:'She is writing an email.', exvi:'Cô ấy đang viết email.'},
    {w:'talk', ipa:'/tɔːk/', pos:'v', vi:'nói chuyện', ex:'They are talking on the phone.', exvi:'Họ đang nói chuyện điện thoại.'},
    {w:'wait for', ipa:'/weɪt fə(r)/', pos:'v', vi:'đợi ai/cái gì', ex:'I am waiting for the bus.', exvi:'Tôi đang đợi xe buýt.'},
    {w:'look at', ipa:'/lʊk ət/', pos:'v', vi:'nhìn vào', ex:'Look at the board!', exvi:'Nhìn lên bảng!'},
    {w:'weather', ipa:'/ˈweðə(r)/', pos:'n', vi:'thời tiết', ex:'What is the weather like?', exvi:'Thời tiết thế nào?'},
    {w:'sunny', ipa:'/ˈsʌni/', pos:'adj', vi:'nắng', ex:'It is sunny today.', exvi:'Hôm nay trời nắng.'},
    {w:'rainy / raining', ipa:'/ˈreɪni/', pos:'adj', vi:'mưa', ex:'It is raining outside.', exvi:'Ngoài trời đang mưa.'},
    {w:'windy', ipa:'/ˈwɪndi/', pos:'adj', vi:'có gió', ex:'It is very windy.', exvi:'Trời gió lắm.'},
    {w:'cloudy', ipa:'/ˈklaʊdi/', pos:'adj', vi:'nhiều mây', ex:'It is cloudy this morning.', exvi:'Sáng nay trời nhiều mây.'},
    {w:'hot', ipa:'/hɒt/', pos:'adj', vi:'nóng', ex:'Summer is very hot here.', exvi:'Mùa hè ở đây rất nóng.'},
    {w:'cold', ipa:'/kəʊld/', pos:'adj', vi:'lạnh', ex:'It is cold in winter.', exvi:'Mùa đông trời lạnh.'},
    {w:'warm', ipa:'/wɔːm/', pos:'adj', vi:'ấm áp', ex:'Spring is warm.', exvi:'Mùa xuân ấm áp.'},
    {w:'cool', ipa:'/kuːl/', pos:'adj', vi:'mát mẻ', ex:'Autumn is cool.', exvi:'Mùa thu mát mẻ.'},
    {w:'outside', ipa:'/ˌaʊtˈsaɪd/', pos:'adv', vi:'bên ngoài', ex:'The kids are playing outside.', exvi:'Bọn trẻ đang chơi ngoài kia.'}
  ],
  grammar:[
    {
      t:'1. Hiện tại tiếp diễn — cấu trúc',
      formula:'(+) S + am/is/are + V-ing      → I am eating.\n(–) S + am/is/are + not + V-ing → She isn’t working.\n(?) Am/Is/Are + S + V-ing?      → Are you listening?',
      ex:[
        ['I **am studying** English now.','Bây giờ tôi đang học tiếng Anh.'],
        ['They **aren’t watching** TV.','Họ không đang xem TV.'],
        ['**Is** she **cooking** dinner? — Yes, she is.','Cô ấy đang nấu bữa tối à? — Vâng.']
      ],
      notes:[
        {type:'warn', text:'**Không được thiếu TO BE**: *I studying* ❌ → *I **am** studying* ✔. Đây là lỗi phổ biến nhất ở thì này.'}
      ]
    },
    {
      t:'2. Cách thêm -ing',
      table:[
        ['Trường hợp','Quy tắc','Ví dụ'],
        ['Thông thường','+ **ing**','work → working, play → playing'],
        ['Tận cùng -e câm','bỏ **e** + ing','write → writ**ing**, make → mak**ing**, come → com**ing**'],
        ['1 nguyên âm + 1 phụ âm cuối (âm tiết nhấn)','gấp đôi phụ âm','run → ru**nn**ing, sit → si**tt**ing, stop → sto**pp**ing, get → ge**tt**ing'],
        ['Tận cùng -ie','đổi thành **y** + ing','lie → l**y**ing, die → d**y**ing'],
        ['Tận cùng -ee','giữ nguyên + ing','see → see**ing**, agree → agree**ing**']
      ]
    },
    {
      t:'3. Hiện tại đơn vs Hiện tại tiếp diễn',
      table:[
        ['','HIỆN TẠI ĐƠN','HIỆN TẠI TIẾP DIỄN'],
        ['Ý nghĩa','thói quen, sự thật lâu dài','đang xảy ra ngay lúc nói / giai đoạn này'],
        ['Ví dụ','I **work** in a bank.','I **am working** at home this week.'],
        ['','It **rains** a lot in summer.','Look! It **is raining**.'],
        ['Dấu hiệu','always, usually, every day, on Mondays','now, at the moment, today, look!, listen!']
      ],
      ex:[
        ['She **speaks** three languages. (khả năng lâu dài)','Cô ấy nói được ba thứ tiếng.'],
        ['She **is speaking** to her boss. (ngay lúc này)','Cô ấy đang nói chuyện với sếp.']
      ],
      notes:[
        {type:'warn', text:'**Động từ trạng thái (stative verbs) KHÔNG chia tiếp diễn**: like, love, hate, want, need, know, understand, believe, have (sở hữu), see, hear. → *I am knowing* ❌ → *I **know*** ✔'},
        {type:'tip', text:'Ngoại lệ quen thuộc: *I’m loving it!* (khẩu ngữ quảng cáo) và *I’m having lunch* (have = ăn, là hành động nên chia được).'}
      ]
    },
    {
      t:'4. Nói về thời tiết',
      formula:'What’s the weather like (today)?  → It’s sunny / hot / cold.\nHow’s the weather?               → It’s raining.\nDùng “IT” làm chủ ngữ giả cho thời tiết, thời gian, khoảng cách.',
      ex:[
        ['**It’s** very hot today.','Hôm nay trời rất nóng.'],
        ['**It’s** raining, take an umbrella.','Trời đang mưa, mang ô đi.']
      ]
    }
  ],
  phrases:[
    ['What are you doing?','Bạn đang làm gì đấy?'],
    ["I'm reading a book.",'Tôi đang đọc sách.'],
    ['Where are you going?','Bạn đang đi đâu vậy?'],
    ["I'm on my way.",'Tôi đang trên đường tới.'],
    ["I'm waiting for you.",'Tôi đang đợi bạn.'],
    ['Hold on, I am coming!','Chờ chút, tôi tới ngay!'],
    ["What's the weather like today?",'Hôm nay thời tiết thế nào?'],
    ["It's sunny and hot.",'Trời nắng và nóng.'],
    ["It's raining heavily.",'Trời đang mưa to.'],
    ['Are you listening to me?','Bạn có đang nghe tôi nói không?'],
    ["Sorry, I'm busy right now.",'Xin lỗi, giờ tôi đang bận.'],
    ['He is not working today.','Hôm nay anh ấy không đi làm.']
  ],
  dialogue:[
    ['Lan','Hi Nam! What are you doing?','Chào Nam! Cậu đang làm gì đó?'],
    ['Nam','I am sitting in a café and studying English. What about you?','Mình đang ngồi quán cà phê học tiếng Anh. Còn cậu?'],
    ['Lan','I am waiting for the bus. It is raining and the bus is late!','Mình đang đợi xe buýt. Trời mưa mà xe thì trễ!'],
    ['Nam','Oh no. Do you usually go to work by bus?','Ôi. Cậu thường đi làm bằng xe buýt à?'],
    ['Lan','Yes, I always take the bus, but today it is very slow.','Ừ, mình luôn đi xe buýt, nhưng hôm nay chậm quá.']
  ],
  exercises:[
    {type:'mc', q:'Look! The baby ___ .', opts:['sleeps','is sleeping','sleep','sleeping'], a:1, ex:'*Look!* = ngay lúc này → **hiện tại tiếp diễn**.'},
    {type:'mc', q:'My father ___ to work by car every day.', opts:['is going','goes','go','going'], a:1, ex:'*every day* = thói quen → **hiện tại đơn**.'},
    {type:'mc', q:'Dạng V-ing của “run” là:', opts:['runing','running','runnning','runeing'], a:1, ex:'1 nguyên âm + 1 phụ âm → gấp đôi: **running**.'},
    {type:'mc', q:'Dạng V-ing của “write” là:', opts:['writeing','writting','writing','writeng'], a:2, ex:'Bỏ **e** câm rồi thêm ing.'},
    {type:'mc', q:'Câu nào SAI?', opts:['I am knowing the answer.','I know the answer.','I am learning English.','She is having lunch.'], a:0, ex:'*know* là động từ trạng thái, **không chia tiếp diễn**.'},
    {type:'fill', q:'Chia động từ: She ___ (cook) dinner now.', a:['is cooking'], ex:'*now* → am/is/are + V-ing.'},
    {type:'fill', q:'Chia động từ: We ___ (not / watch) TV at the moment.', a:["aren't watching",'are not watching'], ex:'Phủ định: are + not + V-ing.'},
    {type:'fill', q:'Đặt câu hỏi: What ___ you ___ (do) now? (điền cả hai từ, cách nhau 1 dấu cách)', a:['are doing'], ex:'What **are** you **doing**?'},
    {type:'fill', q:'Chia động từ: He usually ___ (get) up at 6.', a:['gets'], ex:'*usually* → hiện tại đơn, ngôi 3 số ít thêm -s.'},
    {type:'fill', q:'Hỏi thời tiết: What is the weather ___ today?', a:['like'], ex:'Cấu trúc **What’s the weather like?**'},
    {type:'mc', q:'ÔN TẬP: Chọn câu ĐÚNG hoàn toàn.', opts:['She don’t have any brother.','There are three peoples in my family.','My sister has long black hair.','He can to speak English.'], a:2, ex:'A sai *doesn’t*; B sai *people*; D thừa *to*.'},
    {type:'mc', q:'ÔN TẬP: Điền: ___ there any milk in the fridge?', opts:['Is','Are','Have','Do'], a:0, ex:'*milk* không đếm được → **Is there**.'},
    {type:'mc', q:'ÔN TẬP: I ___ get up at 5 a.m. — I hate mornings!', opts:['always','never','usually','often'], a:1, ex:'Ghét buổi sáng → **never** (không bao giờ).'},
    {type:'fill', q:'ÔN TẬP: Điền in/on/at — The meeting is ___ 9 o’clock ___ Monday. (viết 2 giới từ cách nhau dấu cách)', a:['at on'], ex:'Giờ → **at**; thứ → **on**.'}
  ]
}

});
