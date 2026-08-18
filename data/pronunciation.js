/* English Hub — data/pronunciation.js
   Bảng 44 âm IPA, cặp âm tối thiểu, quy tắc đuôi -s/-ed, trọng âm và nối âm. */

window.PRON = {

  /* ---------- 20 NGUYÊN ÂM ---------- */
  vowels: [
    { g:'Nguyên âm ngắn', note:'Bật ra thật nhanh, không kéo dài. Người Việt hay kéo dài quá nên nghe thành âm khác.', items:[
      { ipa:'/ɪ/', words:['sit','big','this'], vi:'như “i” nhưng ngắn, môi thả lỏng, không kéo cười' },
      { ipa:'/e/', words:['bed','men','said'], vi:'như “e” trong “em”, miệng mở vừa' },
      { ipa:'/æ/', words:['cat','bad','hat'], vi:'giữa “e” và “a”, miệng mở rộng theo chiều ngang' },
      { ipa:'/ʌ/', words:['cup','love','money'], vi:'như “â” trong “ân”, gọn và ngắn' },
      { ipa:'/ɒ/', words:['hot','not','want'], vi:'như “o” trong “con”, môi tròn' },
      { ipa:'/ʊ/', words:['book','put','could'], vi:'như “u” ngắn, môi hơi tròn' },
      { ipa:'/ə/', words:['about','teacher','computer'], vi:'âm schwa — yếu nhất và phổ biến nhất tiếng Anh', star:true }
    ]},
    { g:'Nguyên âm dài', note:'Phải kéo dài gấp đôi âm ngắn tương ứng. Đặt tay trước miệng và đếm nhịp để kiểm tra.', items:[
      { ipa:'/iː/', words:['see','meat','key'], vi:'môi kéo ngang như đang cười, kéo dài' },
      { ipa:'/ɑː/', words:['car','father','heart'], vi:'miệng mở to, lưỡi hạ thấp' },
      { ipa:'/ɔː/', words:['door','four','talk'], vi:'môi tròn, đẩy ra phía trước' },
      { ipa:'/uː/', words:['food','blue','soup'], vi:'môi tròn nhỏ, đẩy mạnh ra trước' },
      { ipa:'/ɜː/', words:['bird','work','learn'], vi:'như /ə/ nhưng kéo dài, lưỡi ở giữa khoang miệng' }
    ]},
    { g:'Nguyên âm đôi', note:'Là MỘT âm trượt từ vị trí này sang vị trí khác, không phải hai âm rời nhau.', items:[
      { ipa:'/eɪ/', words:['day','make','rain'], vi:'trượt từ /e/ sang /ɪ/' },
      { ipa:'/aɪ/', words:['my','time','high'], vi:'trượt từ /a/ sang /ɪ/' },
      { ipa:'/ɔɪ/', words:['boy','coin','noise'], vi:'trượt từ /ɔ/ sang /ɪ/' },
      { ipa:'/əʊ/', words:['go','home','show'], vi:'trượt từ /ə/ sang /ʊ/, môi tròn dần lại' },
      { ipa:'/aʊ/', words:['now','house','loud'], vi:'trượt từ /a/ sang /ʊ/' },
      { ipa:'/ɪə/', words:['here','near','year'], vi:'trượt từ /ɪ/ sang /ə/' },
      { ipa:'/eə/', words:['hair','where','care'], vi:'trượt từ /e/ sang /ə/' },
      { ipa:'/ʊə/', words:['tour','poor','sure'], vi:'trượt từ /ʊ/ sang /ə/' }
    ]}
  ],

  /* ---------- 24 PHỤ ÂM ---------- */
  consonants: [
    { g:'Cặp vô thanh – hữu thanh', note:'Khẩu hình giống hệt nhau, chỉ khác ở chỗ dây thanh có rung hay không. Đặt tay lên cổ họng để kiểm tra.', pairs:true, items:[
      { ipa:'/p/', words:['pen','happy','stop'], vi:'vô thanh — bật hơi mạnh', pair:'/b/' },
      { ipa:'/b/', words:['bed','about','job'], vi:'hữu thanh — có rung', pair:'/p/' },
      { ipa:'/t/', words:['ten','water','sit'], vi:'vô thanh — lưỡi chạm lợi trên', pair:'/d/' },
      { ipa:'/d/', words:['day','ready','red'], vi:'hữu thanh — có rung', pair:'/t/' },
      { ipa:'/k/', words:['cold','school','book'], vi:'vô thanh — cuống lưỡi chạm vòm mềm', pair:'/ɡ/' },
      { ipa:'/ɡ/', words:['gold','again','bag'], vi:'hữu thanh — có rung', pair:'/k/' },
      { ipa:'/f/', words:['fan','coffee','life'], vi:'vô thanh — răng trên chạm môi dưới', pair:'/v/' },
      { ipa:'/v/', words:['van','never','love'], vi:'hữu thanh — có rung', pair:'/f/' },
      { ipa:'/θ/', words:['think','three','bath'], vi:'ĐƯA LƯỠI GIỮA HAI HÀM RĂNG, thổi hơi, không rung', pair:'/ð/', hard:true },
      { ipa:'/ð/', words:['this','mother','breathe'], vi:'lưỡi giữa răng, CÓ rung dây thanh', pair:'/θ/', hard:true },
      { ipa:'/s/', words:['sip','city','bus'], vi:'vô thanh — hơi rít qua khe răng', pair:'/z/' },
      { ipa:'/z/', words:['zip','busy','rise'], vi:'hữu thanh — có rung', pair:'/s/' },
      { ipa:'/ʃ/', words:['she','nation','fish'], vi:'vô thanh — như “s” nhưng môi chu ra', pair:'/ʒ/' },
      { ipa:'/ʒ/', words:['vision','measure','usual'], vi:'hữu thanh — có rung', pair:'/ʃ/' },
      { ipa:'/tʃ/', words:['chair','teacher','watch'], vi:'vô thanh — như “ch” tiếng Việt nhưng bật mạnh', pair:'/dʒ/' },
      { ipa:'/dʒ/', words:['jar','age','bridge'], vi:'hữu thanh — có rung', pair:'/tʃ/' }
    ]},
    { g:'Các phụ âm còn lại', note:'Chú ý /r/ và /l/ cuối từ — đây là hai âm người Việt hay phát sai hoặc nuốt mất nhất.', items:[
      { ipa:'/m/', words:['man','summer','time'], vi:'ngậm hai môi, hơi thoát qua mũi' },
      { ipa:'/n/', words:['no','dinner','run'], vi:'lưỡi chạm lợi trên, hơi thoát qua mũi' },
      { ipa:'/ŋ/', words:['sing','think','long'], vi:'như “ng” tiếng Việt, cuống lưỡi nâng lên' },
      { ipa:'/l/', words:['love','yellow','feel'], vi:'đầu lưỡi chạm lợi trên và GIỮ NGUYÊN, nhất là ở cuối từ', hard:true },
      { ipa:'/r/', words:['red','very','sorry'], vi:'CUỘN LƯỠI lên, không chạm vòm, KHÔNG rung như “r” tiếng Việt', hard:true },
      { ipa:'/h/', words:['hot','behind','ahead'], vi:'chỉ là luồng hơi thở ra' },
      { ipa:'/w/', words:['we','what','away'], vi:'môi tròn lại rồi mở ra' },
      { ipa:'/j/', words:['yes','use','beyond'], vi:'như “d” trong “da” nhưng nhẹ và lướt' }
    ]}
  ],

  /* ---------- CẶP ÂM TỐI THIỂU ---------- */
  minimalPairs: [
    { t:'/ɪ/ – /iː/  ngắn – dài', pairs:[['sit','seat'],['ship','sheep'],['live','leave'],['fit','feet'],['bin','bean']] },
    { t:'/æ/ – /e/', pairs:[['bad','bed'],['sad','said'],['man','men'],['bat','bet'],['pan','pen']] },
    { t:'/ʊ/ – /uː/  ngắn – dài', pairs:[['full','fool'],['pull','pool'],['look','Luke'],['should','shooed']] },
    { t:'/θ/ – /t/  và  /θ/ – /s/', pairs:[['think','tink'],['three','tree'],['thin','tin'],['thick','sick'],['path','pass']] },
    { t:'/ð/ – /d/', pairs:[['they','day'],['there','dare'],['then','den'],['breathe','breed']] },
    { t:'/r/ – /l/', pairs:[['right','light'],['road','load'],['rice','lice'],['grow','glow'],['fry','fly']] },
    { t:'/ʃ/ – /s/', pairs:[['ship','sip'],['she','see'],['wash','was'],['shell','sell']] },
    { t:'/b/ – /p/  hữu – vô thanh', pairs:[['bear','pear'],['big','pig'],['buy','pie'],['cab','cap']] },
    { t:'/v/ – /f/  hữu – vô thanh', pairs:[['van','fan'],['very','ferry'],['leave','leaf'],['save','safe']] },
    { t:'/əʊ/ – /ɔː/', pairs:[['boat','bought'],['coat','caught'],['so','saw'],['low','law']] }
  ],

  /* ---------- ĐUÔI -S và -ED ---------- */
  endings: {
    s: [
      { read:'/ɪz/', when:'sau âm rít: s, ss, sh, ch, x, ge, ce', words:['buses','watches','boxes','changes','places'] },
      { read:'/s/', when:'sau âm VÔ THANH: p, t, k, f, θ', words:['books','cats','maps','laughs','months'] },
      { read:'/z/', when:'sau tất cả các âm còn lại (hữu thanh và nguyên âm)', words:['dogs','pens','boys','lives','cars'] }
    ],
    ed: [
      { read:'/ɪd/', when:'sau âm /t/ hoặc /d/ — TẠO THÊM một âm tiết', words:['wanted','needed','decided','started','ended'] },
      { read:'/t/', when:'sau âm VÔ THANH: p, k, f, s, ʃ, tʃ, θ', words:['worked','stopped','watched','washed','asked'] },
      { read:'/d/', when:'sau tất cả các âm còn lại', words:['played','lived','opened','called','moved'] }
    ]
  },

  /* ---------- TRỌNG ÂM ---------- */
  stress: {
    byType: [
      ['Danh từ & tính từ 2 âm tiết','trọng âm thứ **1**','**TA**ble · **HAP**py · **DOC**tor · **BEAU**tiful'],
      ['Động từ 2 âm tiết','trọng âm thứ **2**','be**GIN** · for**GET** · a**GREE** · de**CIDE**'],
      ['Từ vừa danh vừa động','danh nhấn đầu, động nhấn sau','**RE**cord (n) / re**CORD** (v)'],
      ['Từ ghép danh từ','nhấn phần **đầu**','**BLACK**board · **AIR**port · **BOOK**shop'],
      ['Từ ghép tính từ','nhấn phần **sau**','old-**FASHIONED** · well-**KNOWN**']
    ],
    bySuffix: [
      ['-tion, -sion, -cian','âm tiết **ngay trước** hậu tố','edu**CA**tion · deci**SION** · musi**CIAN**'],
      ['-ic, -ical','âm tiết **ngay trước**','eco**NO**mic · his**TO**rical · scien**TI**fic'],
      ['-ity, -ify, -ogy, -graphy','âm tiết **thứ ba từ cuối**','a**BI**lity · **CLA**rify · bi**O**logy · pho**TO**graphy'],
      ['-ee, -eer, -ese, -ette','nhấn **chính hậu tố**','employ**EE** · engin**EER** · Vietnam**ESE**'],
      ['-ment, -ness, -ful, -less, -ly, -ing, -ed','**không đổi** trọng âm gốc','**HAP**py → **HAP**piness']
    ],
    families: [
      ['**PHO**tograph','pho**TO**grapher','photo**GRA**phic'],
      ['**E**conomy','eco**NO**mic','eco**NO**mical'],
      ['**A**nalyse','a**NA**lysis','ana**LY**tical'],
      ['**PO**litics','po**LI**tical','poli**TI**cian']
    ]
  },

  /* ---------- NỐI ÂM & DẠNG YẾU ---------- */
  connected: {
    rules: [
      { t:'Nối âm (linking)', d:'Phụ âm cuối + nguyên âm đầu thì dính vào nhau thành một khối.',
        ex:[['an apple','/əˈnæpl/'],['pick it up','/pɪˈkɪdʌp/'],['turn it off','/ˈtɜːnɪˈtɒf/'],['a lot of it','/əˈlɒdəvɪt/']] },
      { t:'Nuốt âm (elision)', d:'Âm /t/ hoặc /d/ nằm giữa hai phụ âm thì biến mất.',
        ex:[['next day','/neksdeɪ/'],['must be','/məsbi/'],['last night','/lɑːsnaɪt/'],['sandwich','/ˈsænwɪdʒ/']] },
      { t:'Đồng hoá (assimilation)', d:'Âm biến đổi theo âm đứng liền sau nó.',
        ex:[['don’t you','/ˈdəʊntʃə/'],['would you','/ˈwʊdʒə/'],['did you','/ˈdɪdʒə/'],['meet you','/ˈmiːtʃə/']] },
      { t:'Nhược hoá (reduction)', d:'Từ chức năng bị co lại thành âm /ə/.',
        ex:[['going to','/ˈɡənə/ (gonna)'],['want to','/ˈwɒnə/ (wanna)'],['got to','/ˈɡɒtə/ (gotta)'],['kind of','/ˈkaɪndə/ (kinda)']] },
      { t:'Chèn âm', d:'Giữa hai nguyên âm, người bản xứ chèn thêm /w/ hoặc /j/ cho mượt.',
        ex:[['go on','/ɡəʊ**w**ɒn/'],['I am','/aɪ**j**æm/'],['do it','/duː**w**ɪt/']] }
    ],
    weakForms: [
      ['to','/tuː/','/tə/'], ['for','/fɔː/','/fə/'], ['of','/ɒv/','/əv/'],
      ['and','/ænd/','/ən/'], ['can','/kæn/','/kən/'], ['are','/ɑː/','/ə/'],
      ['was','/wɒz/','/wəz/'], ['have','/hæv/','/həv/'], ['at','/æt/','/ət/'],
      ['you','/juː/','/jə/'], ['them','/ðem/','/ðəm/'], ['as','/æz/','/əz/']
    ],
    examples: [
      ['What do you want to do?','/ˈwɒdʒə ˈwɒnə duː/'],
      ['I am going to eat.','/aɪm ˈɡənə iːt/'],
      ['Did you get it?','/ˈdɪdʒə ˈɡedɪt/'],
      ['I want to go home.','/aɪ ˈwɒnə ɡəʊ həʊm/']
    ]
  },

  /* ---------- LỖI NGƯỜI VIỆT HAY MẮC ---------- */
  commonErrors: [
    ['Nuốt âm cuối','*boo(k)*, *nice(s)*, *worke(d)*','Phát âm rõ /k/, /s/, /d/ — âm cuối mang thông tin ngữ pháp'],
    ['Không phân biệt âm dài – ngắn','*sit* đọc thành *seat*','Kéo dài gấp đôi với các âm /iː/, /uː/, /ɑː/, /ɔː/, /ɜː/'],
    ['Phát âm /θ/, /ð/ thành /t/, /d/, /s/','*think* → *tink*','Đưa lưỡi ra giữa hai hàm răng rồi thổi hơi'],
    ['Rung lưỡi khi đọc /r/','*right* đọc như “r” tiếng Việt','Cuộn lưỡi lên nhưng không chạm vòm, không rung'],
    ['Nuốt /l/ cuối từ','*feel*, *call*, *little*','Đầu lưỡi chạm lợi trên và giữ nguyên ở đó'],
    ['Đọc đều mọi âm tiết','*com-piu-tơ*','Chỉ nhấn âm tiết mang trọng âm, các âm còn lại nhược thành /ə/'],
    ['Thêm nguyên âm sau phụ âm cuối','*book* → *bốc-cơ*','Phụ âm cuối bật ra rồi dừng, không thêm nguyên âm']
  ],

  /* ---------- BÀI LUYỆN 15 PHÚT ---------- */
  routine: [
    ['0–3 phút','Đọc to bảng cặp âm tối thiểu, mỗi cặp 5 lần'],
    ['3–6 phút','Đọc 20 từ vựng của buổi đang học, nhấn rõ âm cuối'],
    ['6–11 phút','Shadowing: mở đoạn audio 30 giây, nghe và nói đuổi CÙNG LÚC, lặp 5 lần'],
    ['11–14 phút','Ghi âm bản thân đọc lại, nghe và tự chấm âm cuối, trọng âm'],
    ['14–15 phút','Ghi ra 3 từ mình phát âm sai để hôm sau luyện riêng']
  ]
};
