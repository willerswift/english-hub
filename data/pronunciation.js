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

/* ---------- CHI TIẾT TỪNG ÂM: khẩu hình, từ mở rộng, câu luyện, lỗi hay mắc ---------- */
window.PRON.detail = {
  '/ɪ/':{mouth:'Miệng hé nhỏ, lưỡi nâng nhẹ về phía trước. Môi THẢ LỎNG, không kéo cười. Bật ra thật nhanh.',more:['big','fish','give','million','build','women'],sent:'This little fish is in the big ship.',err:'Kéo dài thành /iː/ — “sit” nghe thành “seat”.'},
  '/e/':{mouth:'Miệng mở vừa, lưỡi ở giữa và hơi trước. Giống “e” trong “em” tiếng Việt.',more:['red','head','friend','many','any','ready'],sent:'Ted said his friend went to bed.',err:'Đọc thành /æ/ — “bed” nghe thành “bad”.'},
  '/æ/':{mouth:'Miệng mở RỘNG THEO CHIỀU NGANG, hàm hạ xuống, lưỡi thấp và trước. Âm nằm giữa “e” và “a”.',more:['man','apple','back','happy','travel','stand'],sent:'That man has a black bag and a hat.',err:'Đọc thành /e/ hoặc “a” tiếng Việt — “bad” nghe thành “bed”.'},
  '/ʌ/':{mouth:'Miệng mở vừa, lưỡi ở giữa, môi thả lỏng. Giống “â” trong “ân” nhưng gọn hơn.',more:['sun','bus','young','country','enough','trouble'],sent:'My brother runs to the bus in the sun.',err:'Đọc thành “ơ” dài hoặc /ɒ/.'},
  '/ɒ/':{mouth:'Môi TRÒN, hàm hạ, lưỡi lùi về sau. Giống “o” trong “con”.',more:['dog','shop','watch','because','office','problem'],sent:'The dog got a lot of hot soup.',err:'Đọc thành /ɔː/ dài — “not” nghe thành “naught”.'},
  '/ʊ/':{mouth:'Môi hơi tròn nhưng KHÔNG đẩy ra trước, lưỡi lùi sau. Rất ngắn.',more:['good','look','woman','full','sugar','would'],sent:'She took a good look at the cookbook.',err:'Kéo dài thành /uː/ — “full” nghe thành “fool”.'},
  '/ə/':{mouth:'ÂM YẾU NHẤT. Miệng gần như không làm gì, lưỡi ở vị trí nghỉ. Chỉ xuất hiện ở âm tiết KHÔNG mang trọng âm.',more:['about','banana','support','again','police','around'],sent:'A banana and a computer are on the table.',err:'Đọc rõ mọi âm tiết — “computer” thành “com-piu-tơ” thay vì /kəmˈpjuːtə/.'},
  '/iː/':{mouth:'Môi KÉO NGANG như đang cười, lưỡi nâng cao và trước. Kéo dài gấp đôi /ɪ/.',more:['tree','please','people','machine','believe','field'],sent:'Please keep these three green sheets.',err:'Rút ngắn thành /ɪ/ — “seat” nghe thành “sit”.'},
  '/ɑː/':{mouth:'Miệng mở TO nhất, hàm hạ hẳn, lưỡi thấp và lùi sau. Kéo dài.',more:['park','start','half','laugh','answer','glass'],sent:'My father parked the car in the dark yard.',err:'Rút ngắn hoặc đọc thành /æ/.'},
  '/ɔː/':{mouth:'Môi TRÒN và ĐẨY RA TRƯỚC, lưỡi lùi sau, hàm hạ vừa. Kéo dài.',more:['walk','morning','bought','water','because','floor'],sent:'I saw four tall walls in the hall.',err:'Đọc thành /ɒ/ ngắn.'},
  '/uː/':{mouth:'Môi TRÒN NHỎ và đẩy mạnh ra trước như huýt sáo, lưỡi cao và lùi sau.',more:['moon','school','through','juice','group','choose'],sent:'Two blue shoes are in the room.',err:'Rút ngắn thành /ʊ/ — “fool” nghe thành “full”.'},
  '/ɜː/':{mouth:'Lưỡi ở CHÍNH GIỮA khoang miệng, môi thả lỏng, kéo dài. Giống /ə/ nhưng dài và rõ hơn.',more:['girl','turn','word','early','nurse','search'],sent:'The nurse heard the first word early.',err:'Đọc thành “ơ” ngắn hoặc thêm âm /r/ rung.'},
  '/eɪ/':{mouth:'Bắt đầu ở /e/ rồi TRƯỢT lên /ɪ/. Miệng khép dần lại trong lúc phát âm.',more:['name','wait','eight','they','break','station'],sent:'They came late to the same place today.',err:'Đọc thành “ê” một âm, không trượt.'},
  '/aɪ/':{mouth:'Bắt đầu ở /a/ miệng mở rộng, rồi TRƯỢT lên /ɪ/ khép lại.',more:['five','night','buy','write','island','height'],sent:'I like to write nine lines at night.',err:'Đọc thành “ai” cụt, không trượt mượt.'},
  '/ɔɪ/':{mouth:'Bắt đầu ở /ɔ/ môi tròn, rồi TRƯỢT sang /ɪ/ môi dẹt.',more:['boy','voice','choice','enjoy','point','avoid'],sent:'The boy enjoyed the noise of his toy.',err:'Đọc thành “oi” tiếng Việt, thiếu độ trượt.'},
  '/əʊ/':{mouth:'Bắt đầu ở /ə/ môi thả lỏng, rồi TRƯỢT sang /ʊ/ môi tròn dần lại.',more:['no','open','both','although','follow','coat'],sent:'I know most of those old roads.',err:'Đọc thành “ô” một âm — lỗi phổ biến nhất của người Việt.'},
  '/aʊ/':{mouth:'Bắt đầu ở /a/ miệng mở rộng, rồi TRƯỢT sang /ʊ/ môi tròn lại.',more:['down','out','about','flower','count','around'],sent:'How now, the brown cow is out of town.',err:'Đọc thành “ao” cụt.'},
  '/ɪə/':{mouth:'Bắt đầu ở /ɪ/ rồi TRƯỢT về /ə/. Miệng mở dần ra.',more:['ear','clear','idea','serious','career','appear'],sent:'I hear a clear idea here.',err:'Thêm âm /r/ rung ở cuối (giọng Anh-Anh không đọc /r/).'},
  '/eə/':{mouth:'Bắt đầu ở /e/ rồi TRƯỢT về /ə/.',more:['air','chair','share','parents','careful','various'],sent:'Their parents share a chair over there.',err:'Đọc thành /e/ ngắn.'},
  '/ʊə/':{mouth:'Bắt đầu ở /ʊ/ môi tròn, rồi TRƯỢT về /ə/ môi thả lỏng.',more:['tour','pure','cure','during','curious','Europe'],sent:'The tourist was sure about the tour.',err:'Đọc thành /ɔː/.'},

  '/p/':{mouth:'Ngậm hai môi rồi BẬT MẠNH hơi ra. Đặt tay trước miệng phải cảm nhận được luồng hơi.',more:['paper','open','help','stop','pepper','sleep'],sent:'Peter put a pepper pot on the paper.',err:'Không bật hơi, nghe thành /b/.'},
  '/b/':{mouth:'Giống /p/ nhưng dây thanh RUNG, ít hơi bật hơn.',more:['book','about','job','baby','table','club'],sent:'Bob bought a big blue book.',err:'Nuốt mất /b/ ở cuối từ.'},
  '/t/':{mouth:'Đầu lưỡi chạm lợi trên rồi BẬT hơi ra mạnh.',more:['table','water','sit','little','better','left'],sent:'Tom took ten tickets to the theatre.',err:'Nuốt /t/ cuối từ — “sit” nghe thành “si”.'},
  '/d/':{mouth:'Giống /t/ nhưng dây thanh RUNG.',more:['door','ready','red','under','model','word'],sent:'Dad did a good deed on Sunday.',err:'Nuốt /d/ cuối từ, làm mất dấu hiệu quá khứ.'},
  '/k/':{mouth:'Cuống lưỡi chạm vòm mềm phía sau rồi BẬT hơi.',more:['cat','school','book','because','make','ask'],sent:'Kate can cook a cake quickly.',err:'Nuốt /k/ cuối — “book” nghe thành “boo”.'},
  '/ɡ/':{mouth:'Giống /k/ nhưng dây thanh RUNG.',more:['go','again','bag','begin','forget','big'],sent:'The girl gave a green bag to Greg.',err:'Nuốt /ɡ/ cuối từ.'},
  '/f/':{mouth:'Răng cửa TRÊN chạm nhẹ môi DƯỚI, thổi hơi qua khe. Không rung.',more:['fine','before','life','laugh','photo','enough'],sent:'Five friends found a fine photo.',err:'Đọc thành “ph” bật hơi kiểu tiếng Việt.'},
  '/v/':{mouth:'Giống /f/ nhưng dây thanh RUNG rõ.',more:['very','never','love','give','have','over'],sent:'Vicky never leaves the village.',err:'Đọc thành /f/ hoặc /w/ — “very” thành “ferry”.'},
  '/θ/':{mouth:'ĐƯA ĐẦU LƯỠI RA GIỮA HAI HÀM RĂNG, thổi hơi qua. Dây thanh KHÔNG rung. Nhìn gương phải thấy đầu lưỡi.',more:['thank','birthday','math','something','healthy','south'],sent:'I think Thursday is the thirtieth.',err:'Đọc thành /t/ hoặc /s/ — “think” thành “tink” hoặc “sink”.'},
  '/ð/':{mouth:'Lưỡi giữa hai hàm răng như /θ/, nhưng dây thanh RUNG. Sờ cổ họng phải thấy rung.',more:['the','they','other','weather','together','with'],sent:'They gathered there with their mother.',err:'Đọc thành /d/ hoặc /z/ — “they” thành “day”.'},
  '/s/':{mouth:'Đầu lưỡi gần lợi trên, hơi rít qua khe hẹp. Không rung.',more:['see','also','bus','price','answer','famous'],sent:'Sam sees six small snakes.',err:'Nuốt /s/ cuối, mất dấu hiệu số nhiều.'},
  '/z/':{mouth:'Giống /s/ nhưng dây thanh RUNG.',more:['zoo','busy','rise','because','always','music'],sent:'Zoe closes his eyes and dozes.',err:'Đọc thành /s/ — “rise” thành “rice”.'},
  '/ʃ/':{mouth:'Lưỡi lùi sau hơn /s/, MÔI CHU RA phía trước. Không rung.',more:['show','station','fish','sure','machine','special'],sent:'She should share the fresh fish.',err:'Đọc thành /s/ — “ship” thành “sip”.'},
  '/ʒ/':{mouth:'Giống /ʃ/ nhưng dây thanh RUNG. Âm hiếm, thường nằm giữa từ.',more:['vision','measure','usual','decision','pleasure','garage'],sent:'It was a pleasure to measure the treasure.',err:'Đọc thành /z/ hoặc /dʒ/.'},
  '/tʃ/':{mouth:'Lưỡi chạm lợi rồi bật ra thành âm xát, môi chu. Mạnh hơn “ch” tiếng Việt nhiều.',more:['chair','teacher','watch','question','future','catch'],sent:'The children watched a chess match.',err:'Đọc nhẹ như “ch” tiếng Việt, không bật.'},
  '/dʒ/':{mouth:'Giống /tʃ/ nhưng dây thanh RUNG.',more:['job','age','bridge','general','change','village'],sent:'John enjoyed a large orange juice.',err:'Đọc thành “gi” tiếng Việt hoặc /z/.'},
  '/m/':{mouth:'Ngậm hai môi, hơi thoát ra qua MŨI, dây thanh rung.',more:['make','summer','time','remember','come','room'],sent:'My mum makes me some warm milk.',err:'Nuốt /m/ cuối từ.'},
  '/n/':{mouth:'Đầu lưỡi chạm lợi trên, hơi thoát qua MŨI.',more:['name','dinner','run','answer','know','then'],sent:'Nine new nurses need a nap.',err:'Lẫn với /ŋ/ ở cuối từ.'},
  '/ŋ/':{mouth:'CUỐNG LƯỠI nâng chạm vòm mềm, hơi thoát qua mũi. Đầu lưỡi KHÔNG chạm đâu cả.',more:['sing','thing','long','young','English','bring'],sent:'The young king is singing a long song.',err:'Thêm âm /ɡ/ ở cuối — “sing” thành “sing-g”.'},
  '/l/':{mouth:'Đầu lưỡi chạm lợi trên và GIỮ NGUYÊN ở đó, hơi thoát ra hai bên lưỡi. Ở cuối từ phải giữ lâu hơn.',more:['light','yellow','feel','little','people','careful'],sent:'Lily will fill the little bottle.',err:'Nuốt /l/ cuối từ — “feel” thành “fiu”.'},
  '/r/':{mouth:'CUỘN đầu lưỡi lên nhưng KHÔNG chạm vòm, môi hơi tròn. Tuyệt đối không rung lưỡi.',more:['red','very','sorry','around','write','three'],sent:'Robert rarely rides a red bike.',err:'Rung lưỡi như “r” tiếng Việt, hoặc đọc thành /z/ kiểu miền Bắc.'},
  '/h/':{mouth:'Chỉ là luồng hơi thở ra, miệng đã ở sẵn vị trí của nguyên âm theo sau.',more:['house','behind','ahead','who','whole','perhaps'],sent:'Harry has a huge house here.',err:'Đọc quá nặng như “kh” tiếng Việt.'},
  '/w/':{mouth:'Môi TRÒN LẠI rồi mở ra nhanh, giống bắt đầu huýt sáo.',more:['want','away','question','one','quick','wood'],sent:'We were watching the white swans.',err:'Đọc thành /v/ — “went” thành “vent”.'},
  '/j/':{mouth:'Lưỡi nâng cao gần vòm cứng rồi lướt xuống. Nhẹ và nhanh.',more:['yes','use','beyond','music','few','university'],sent:'Yesterday you used your new yellow yo-yo.',err:'Đọc thành “gi” hoặc “d” nặng.'}
};

/* ---------- NGÂN HÀNG CÂU LUYỆN ĐỌC ---------- */
window.PRON.sentences = [
  { g:'Luyện âm cuối', ic:'volume',
    note:'Đọc chậm, bật rõ phụ âm cuối của TỪNG từ. Đặt tay trước miệng để cảm nhận luồng hơi.',
    items:[
      ['She works at a bank and stops at six.','Cô ấy làm ở ngân hàng và nghỉ lúc 6 giờ.'],
      ['He asked for six books and two maps.','Anh ấy xin sáu quyển sách và hai tấm bản đồ.'],
      ['The students watched the films last night.','Các sinh viên đã xem phim tối qua.'],
      ['My friends helped me move the boxes.','Bạn bè giúp tôi chuyển mấy cái hộp.'],
      ['It costs about five pounds and lasts months.','Nó tốn khoảng 5 bảng và dùng được vài tháng.'],
      ['She finished her tasks and left the office.','Cô ấy làm xong việc và rời văn phòng.']
    ]},
  { g:'Luyện nhịp điệu câu', ic:'chart',
    note:'Chỉ NHẤN các từ mang nghĩa, nuốt nhẹ các từ chức năng. Vỗ tay theo mỗi trọng âm khi đọc.',
    items:[
      ['I WANT to GO to the CInema with my FRIENDS.','Tôi muốn đi xem phim với bạn bè.'],
      ['She BOUGHT a NEW car for her DAUGHter.','Cô ấy mua một chiếc xe mới cho con gái.'],
      ['We SHOULD have FInished the REport by NOW.','Lẽ ra giờ này chúng ta phải xong báo cáo.'],
      ['The MEEting will STArt at THREE in the AFternoon.','Cuộc họp sẽ bắt đầu lúc 3 giờ chiều.'],
      ['I have been WORking HERE for about FIVE years.','Tôi làm ở đây được khoảng 5 năm.']
    ]},
  { g:'Luyện ngữ điệu lên xuống', ic:'route',
    note:'Câu kể và câu hỏi WH- thì XUỐNG giọng. Câu hỏi Yes/No thì LÊN giọng. Liệt kê thì lên rồi cái cuối xuống.',
    items:[
      ['I live in Hanoi. (xuống giọng)','Tôi sống ở Hà Nội.'],
      ['Where do you work? (xuống giọng)','Bạn làm việc ở đâu?'],
      ['Do you like coffee? (lên giọng)','Bạn có thích cà phê không?'],
      ['Could you help me, please? (lên giọng)','Bạn giúp tôi được không?'],
      ['I study English, Japanese and Korean. (lên, lên, xuống)','Tôi học tiếng Anh, Nhật và Hàn.'],
      ['The food was… fine. (xuống rồi lên — hàm ý không ngon lắm)','Đồ ăn thì… cũng được.']
    ]},
  { g:'Luyện nối âm', ic:'link',
    note:'Đọc liền một hơi, không tách rời từng từ. Phụ âm cuối dính vào nguyên âm đầu của từ sau.',
    items:[
      ['Pick it up and put it away.','Nhặt lên rồi cất đi.'],
      ['I need an apple and an orange.','Tôi cần một quả táo và một quả cam.'],
      ['Turn it off in an hour.','Một tiếng nữa tắt nó đi.'],
      ['What do you want to do this evening?','Tối nay bạn muốn làm gì?'],
      ['I am going to eat a lot of it.','Tôi sẽ ăn kha khá món đó.'],
      ['Would you like a cup of tea?','Bạn dùng một tách trà nhé?']
    ]},
  { g:'Câu giao tiếp hằng ngày', ic:'chat',
    note:'Đọc trôi chảy như đang nói thật, không đọc từng từ một.',
    items:[
      ['Nice to meet you. How are you doing?','Rất vui được gặp bạn. Bạn khoẻ không?'],
      ['Could you say that again, please?','Bạn nói lại được không?'],
      ['I am sorry, I did not catch that.','Xin lỗi, tôi không nghe rõ.'],
      ['Excuse me, how do I get to the station?','Xin lỗi, tới nhà ga đi thế nào?'],
      ['I would like to book a table for two.','Tôi muốn đặt bàn cho hai người.'],
      ['Thank you so much. I really appreciate it.','Cảm ơn nhiều. Tôi thật sự trân trọng.'],
      ['Let me know if you need anything else.','Cần gì thêm cứ báo tôi nhé.'],
      ['I am afraid I have to go now.','Tôi e là giờ tôi phải đi.']
    ]},
  { g:'Câu IELTS Speaking Part 1', ic:'cap',
    note:'Đây là các câu trả lời mẫu. Đọc và bắt chước nhịp điệu, sau đó tự thay nội dung của mình vào.',
    items:[
      ['I am currently a final-year student majoring in economics.','Hiện tôi là sinh viên năm cuối ngành kinh tế.'],
      ['To be honest, I have mixed feelings about that.','Thật lòng thì tôi có cảm xúc lẫn lộn về điều đó.'],
      ['I would say I do, yes, though not very often.','Tôi cho là có, dù không thường xuyên lắm.'],
      ['What I enjoy most is that no two days are the same.','Điều tôi thích nhất là không ngày nào giống ngày nào.'],
      ['That said, meeting tight deadlines can be stressful.','Dù vậy, chạy kịp hạn chót cũng khá căng.'],
      ['It really depends on the situation, I suppose.','Cái đó thật sự tuỳ tình huống.']
    ]},
  { g:'Câu học thuật cho Writing & Part 3', ic:'type',
    note:'Câu dài, nhiều âm tiết. Đọc chậm, giữ nhịp, chú ý trọng âm của các từ dài.',
    items:[
      ['A growing body of evidence suggests that this is beneficial.','Ngày càng nhiều bằng chứng cho thấy điều này có lợi.'],
      ['This can be attributed to a combination of several factors.','Điều này có thể quy cho tổ hợp nhiều yếu tố.'],
      ['While it is true that costs are high, the benefits outweigh them.','Dù đúng là chi phí cao, lợi ích vẫn lớn hơn.'],
      ['Governments should implement stricter environmental policies.','Chính phủ nên triển khai chính sách môi trường chặt hơn.'],
      ['The data demonstrate a significant upward trend over the period.','Dữ liệu cho thấy xu hướng tăng đáng kể trong giai đoạn này.'],
      ['On balance, I firmly believe that the advantages are greater.','Cân nhắc tổng thể, tôi tin chắc lợi ích lớn hơn.']
    ]},
  { g:'Câu luyện âm khó /θ/ /ð/ /r/ /l/', ic:'mic',
    note:'Đọc thật chậm lúc đầu, chú ý vị trí lưỡi. Nhanh dần khi đã quen.',
    items:[
      ['I think this Thursday is the third of the month.','Tôi nghĩ thứ Năm này là ngày mùng ba.'],
      ['They thought their mother was there with them.','Họ tưởng mẹ họ ở đó cùng họ.'],
      ['Really lovely little yellow flowers.','Những bông hoa vàng nhỏ xinh thật đáng yêu.'],
      ['The girl will fill the small bottle of milk.','Cô bé sẽ rót đầy chai sữa nhỏ.'],
      ['Robert rarely reads the whole report.','Robert hiếm khi đọc hết báo cáo.'],
      ['Three thin brothers threw the ball together.','Ba anh em gầy cùng nhau ném quả bóng.']
    ]}
];

/* ---------- ĐỌC SỐ, NGÀY THÁNG, GIÁ TIỀN ---------- */
window.PRON.numbers = [
  { g:'Số dễ nhầm — teen và ty', note:'Khác nhau ở TRỌNG ÂM: “-teen” nhấn cuối, “-ty” nhấn đầu.',
    items:[['13 – 30','thirteen – thirty'],['14 – 40','fourteen – forty'],['15 – 50','fifteen – fifty'],
           ['16 – 60','sixteen – sixty'],['17 – 70','seventeen – seventy'],['18 – 80','eighteen – eighty'],['19 – 90','nineteen – ninety']] },
  { g:'Số lớn', note:'hundred, thousand, million KHÔNG thêm -s khi có số đứng trước.',
    items:[['248','two hundred and forty-eight'],['1,500','one thousand five hundred'],
           ['25,000','twenty-five thousand'],['3,200,000','three point two million'],['0.75','nought point seven five']] },
  { g:'Năm', note:'Trước 2000 đọc theo cặp hai chữ số; từ 2000 đọc theo cách khác.',
    items:[['1995','nineteen ninety-five'],['1807','eighteen oh seven'],['2008','two thousand and eight'],
           ['2019','twenty nineteen'],['2026','twenty twenty-six']] },
  { g:'Giá tiền', note:'Đọc đơn vị tiền sau con số.',
    items:[['£50','fifty pounds'],['£2.50','two pounds fifty'],['$19.99','nineteen dollars ninety-nine'],
           ['250,000 VND','two hundred and fifty thousand dong']] },
  { g:'Ngày tháng', note:'Kiểu Anh đọc ngày trước, kiểu Mỹ đọc tháng trước.',
    items:[['3 March','the third of March'],['21 June','the twenty-first of June'],
           ['5 December','the fifth of December'],['12 August','the twelfth of August']] },
  { g:'Giờ', note:'Phút từ 1 đến 30 dùng PAST, từ 31 đến 59 dùng TO.',
    items:[['7:00','seven o’clock'],['7:15','a quarter past seven'],['7:30','half past seven'],
           ['7:45','a quarter to eight'],['8:50','ten to nine']] },
  { g:'Số điện thoại', note:'Đọc từng chữ số. Số 0 đọc là “oh”. Hai số giống nhau liền nhau đọc “double”.',
    items:[['0912 345 678','oh nine one two, three four five, six seven eight'],
           ['07946 231 007','oh seven nine four six, two three one, double oh seven']] }
];

/* ---------- ĐÁNH VẦN ---------- */
window.PRON.spelling = {
  note:'Trong bài nghe IELTS Part 1, tên riêng luôn được đánh vần. Sáu nhóm chữ cái dưới đây dễ nghe nhầm nhất — luyện riêng từng nhóm.',
  groups:[
    ['A – E – I','/eɪ/ – /iː/ – /aɪ/'],
    ['B – P – V – D – T – G','/biː/ – /piː/ – /viː/ – /diː/ – /tiː/ – /dʒiː/'],
    ['M – N','/em/ – /en/'],
    ['S – F – X','/es/ – /ef/ – /eks/'],
    ['J – K','/dʒeɪ/ – /keɪ/'],
    ['U – W – Y','/juː/ – /ˈdʌbəljuː/ – /waɪ/']
  ],
  names:['SMITH','JOHNSON','WILLIAMS','TAYLOR','BROWN','DAVIES','WILSON','EVANS','THOMAS','ROBERTS','MURPHY','WRIGHT']
};

/* ---------- CÂU LUYỆN LƯỠI ---------- */
window.PRON.twisters = [
  { s:'She sells shells by the seashore.', f:'/ʃ/ và /s/', vi:'Luyện phân biệt hai âm rít.' },
  { s:'Thirty-three thirsty travellers thought about it.', f:'/θ/', vi:'Lưỡi ra giữa hai hàm răng.' },
  { s:'Red lorry, yellow lorry, red lorry.', f:'/r/ và /l/', vi:'Cặp âm khó nhất với người Việt.' },
  { s:'Brothers and mothers gather together.', f:'/ð/', vi:'Lưỡi giữa răng, có rung.' },
  { s:'A big black bug bit a big black bear.', f:'/b/', vi:'Bật hơi rõ, không nuốt âm cuối.' },
  { s:'Whether the weather is warm or wet.', f:'/w/ và /ð/', vi:'Môi tròn cho /w/, lưỡi giữa răng cho /ð/.' },
  { s:'Peter picked a perfect purple pepper.', f:'/p/', vi:'Bật hơi mạnh, đặt tay trước miệng để kiểm tra.' },
  { s:'Six thick sticks stick together.', f:'/θ/ và /s/ và /k/', vi:'Cụm phụ âm khó, đọc chậm trước.' }
];
