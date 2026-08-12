/* English Hub — Cấp độ B1 (Buổi 21–28) */
Object.assign(window.LESSONS, {

/* ============================ BUỔI 21 ============================ */
'b1-01': {
  id:'b1-01', level:'B1', no:21,
  title:'Hiện tại hoàn thành vs Quá khứ đơn',
  subtitle:'Điểm ngữ pháp người Việt sai nhiều nhất — xử lý dứt điểm.',
  goals:[
    'Chọn đúng thì theo dấu hiệu thời gian',
    'Dùng for / since / how long chuẩn xác',
    'Dùng hiện tại hoàn thành tiếp diễn cơ bản'
  ],
  vocab:[
    {w:'since', ipa:'/sɪns/', pos:'prep', vi:'kể từ (mốc thời gian)', ex:'I have lived here since 2019.', exvi:'Tôi sống ở đây từ 2019.'},
    {w:'for', ipa:'/fɔː(r)/', pos:'prep', vi:'trong (khoảng thời gian)', ex:'She has worked here for five years.', exvi:'Cô ấy làm ở đây được 5 năm.'},
    {w:'recently / lately', ipa:'/ˈriːsntli/', pos:'adv', vi:'gần đây', ex:'Have you seen him lately?', exvi:'Gần đây bạn có gặp anh ấy không?'},
    {w:'career', ipa:'/kəˈrɪə(r)/', pos:'n', vi:'sự nghiệp', ex:'She has had a long career.', exvi:'Cô ấy có sự nghiệp dài.'},
    {w:'achieve', ipa:'/əˈtʃiːv/', pos:'v', vi:'đạt được', ex:'He has achieved a lot.', exvi:'Anh ấy đã đạt được nhiều thứ.'},
    {w:'progress', ipa:'/ˈprəʊɡres/', pos:'n', vi:'sự tiến bộ', ex:'You have made good progress.', exvi:'Bạn tiến bộ tốt đấy.'},
    {w:'develop', ipa:'/dɪˈveləp/', pos:'v', vi:'phát triển', ex:'The city has developed fast.', exvi:'Thành phố phát triển nhanh.'},
    {w:'increase', ipa:'/ɪnˈkriːs/', pos:'v', vi:'tăng lên', ex:'Prices have increased.', exvi:'Giá cả đã tăng.'},
    {w:'decrease / fall', ipa:'/dɪˈkriːs/', pos:'v', vi:'giảm xuống', ex:'Sales have fallen.', exvi:'Doanh số đã giảm.'},
    {w:'graduate', ipa:'/ˈɡrædʒueɪt/', pos:'v', vi:'tốt nghiệp', ex:'I graduated in 2021.', exvi:'Tôi tốt nghiệp năm 2021.'},
    {w:'apply', ipa:'/əˈplaɪ/', pos:'v', vi:'nộp đơn', ex:'I have applied for three jobs.', exvi:'Tôi đã nộp đơn ba nơi.'},
    {w:'so far', ipa:'/səʊ fɑː/', pos:'phr', vi:'cho tới nay', ex:'So far we have sold 100 units.', exvi:'Tới nay chúng tôi bán được 100 sản phẩm.'},
    {w:'ever since', ipa:'/ˈevə sɪns/', pos:'phr', vi:'từ đó tới nay', ex:'Ever since then, he has been careful.', exvi:'Từ đó tới giờ anh ấy luôn cẩn thận.'},
    {w:'the first time', ipa:'/ðə fɜːst taɪm/', pos:'phr', vi:'lần đầu tiên', ex:'It is the first time I have flown.', exvi:'Đây là lần đầu tôi đi máy bay.'},
    {w:'nowadays', ipa:'/ˈnaʊədeɪz/', pos:'adv', vi:'ngày nay', ex:'Nowadays people work online.', exvi:'Ngày nay người ta làm việc online.'},
    {w:'used to be', ipa:'/juːst tə biː/', pos:'phr', vi:'trước đây từng là', ex:'This used to be a farm.', exvi:'Chỗ này từng là nông trại.'}
  ],
  grammar:[
    {
      t:'1. Bảng phân biệt cốt lõi',
      table:[
        ['','QUÁ KHỨ ĐƠN','HIỆN TẠI HOÀN THÀNH'],
        ['Thời điểm','**xác định**, đã kết thúc','**không xác định** hoặc còn kéo dài'],
        ['Liên hệ hiện tại','không còn liên quan','có kết quả/ảnh hưởng tới hiện tại'],
        ['Ví dụ','I **lost** my keys yesterday. (đã tìm lại rồi)','I **have lost** my keys. (giờ vẫn chưa có)'],
        ['','She **lived** in Hue for 5 years. (giờ không còn)','She **has lived** in Hue for 5 years. (vẫn đang sống)'],
        ['Dấu hiệu','yesterday, last week, in 2020, ago, when I was…','since, for, already, yet, just, ever, never, recently, so far, this week']
      ],
      notes:[
        {type:'warn', text:'Có **thời gian quá khứ cụ thể** → bắt buộc quá khứ đơn: *I have seen him **yesterday*** ❌ → *I **saw** him yesterday* ✔'},
        {type:'tip', text:'Câu hỏi **When…?** luôn dùng quá khứ đơn. Câu hỏi **How long…?** thường dùng hiện tại hoàn thành.'}
      ]
    },
    {
      t:'2. FOR vs SINCE',
      formula:'FOR   + KHOẢNG thời gian : for two hours, for a week, for ten years, for ages\nSINCE + MỐC thời gian    : since 2019, since Monday, since I was a child, since he left',
      ex:[
        ['We have known each other **for** ten years.','Chúng tôi quen nhau 10 năm rồi.'],
        ['I haven’t seen her **since** last Christmas.','Tôi không gặp cô ấy từ Giáng sinh năm ngoái.'],
        ['**How long have** you **studied** English? — For three years.','Bạn học tiếng Anh bao lâu rồi? — Ba năm.']
      ]
    },
    {
      t:'3. Hiện tại hoàn thành tiếp diễn (have been + V-ing)',
      formula:'S + have/has been + V-ing\n→ nhấn mạnh QUÁ TRÌNH và tính LIÊN TỤC, thường trả lời “How long…?”',
      table:[
        ['','HIỆN TẠI HOÀN THÀNH','HTHT TIẾP DIỄN'],
        ['Nhấn mạnh','**kết quả**, số lượng','**quá trình**, thời lượng'],
        ['Ví dụ','I **have written** three emails. (xong 3 cái)','I **have been writing** emails all morning. (viết suốt sáng)'],
        ['','She **has read** the book. (đọc xong)','She **has been reading** it. (đang đọc dở)']
      ],
      ex:[
        ['It **has been raining** all day.','Trời mưa suốt cả ngày.'],
        ['I’m tired because I **have been working** since 6 a.m.','Tôi mệt vì làm việc từ 6 giờ sáng.']
      ],
      notes:[{type:'warn', text:'Động từ trạng thái (know, like, be, have = sở hữu) **không** dùng dạng tiếp diễn: *I have **known** him for years* ✔'}]
    }
  ],
  phrases:[
    ['How long have you been in Vietnam?','Bạn ở Việt Nam bao lâu rồi?'],
    ['I have been here for six months.','Tôi ở đây được sáu tháng.'],
    ['When did you arrive?','Bạn đến khi nào?'],
    ['I arrived last March.','Tôi đến hồi tháng Ba năm ngoái.'],
    ['I haven’t seen you for ages!','Lâu lắm rồi không gặp bạn!'],
    ['What have you been up to?','Dạo này bạn làm gì?'],
    ['I have been working a lot lately.','Dạo này tôi làm việc nhiều.'],
    ['It is the first time I have tried this.','Đây là lần đầu tôi thử món này.'],
    ['Things have changed a lot since then.','Mọi thứ thay đổi nhiều từ hồi đó.'],
    ['I used to live there, but I moved in 2022.','Tôi từng sống ở đó, nhưng chuyển đi năm 2022.']
  ],
  exercises:[
    {type:'mc', q:'I ___ him yesterday.', opts:['have seen','saw','have been seeing','see'], a:1, ex:'*yesterday* = thời gian xác định → **quá khứ đơn**.'},
    {type:'mc', q:'She ___ in this company since 2018.', opts:['works','worked','has worked','is working'], a:2, ex:'*since* → **hiện tại hoàn thành**.'},
    {type:'mc', q:'___ did you buy that car?', opts:['How long','When','Since when','For how long'], a:1, ex:'**When** đi với quá khứ đơn.'},
    {type:'mc', q:'We have known each other ___ ten years.', opts:['since','for','from','during'], a:1, ex:'Khoảng thời gian → **for**.'},
    {type:'mc', q:'I’m exhausted. I ___ all morning.', opts:['have cleaned','cleaned','have been cleaning','clean'], a:2, ex:'Nhấn mạnh quá trình kéo dài → **have been cleaning**.'},
    {type:'fill', q:'Điền for/since: They have lived here ___ 2015.', a:['since'], ex:'Mốc thời gian → **since**.'},
    {type:'fill', q:'Chia động từ: I ___ (not / see) her since June. (2 từ)', a:["haven't seen",'have not seen'], ex:'*since* → hiện tại hoàn thành.'},
    {type:'fill', q:'Chia động từ: He ___ (graduate) from university in 2021.', a:['graduated'], ex:'*in 2021* → quá khứ đơn.'},
    {type:'fill', q:'Chia động từ: How long ___ you ___ (study) English? (dùng HTHT, 2 từ)', a:['have studied'], ex:'**have studied** — hoặc *have been studying*.'},
    {type:'mc', q:'Câu nào SAI?', opts:['I have finished my work.','I have finished my work last night.','I finished my work last night.','I have just finished my work.'], a:1, ex:'Không dùng thời gian quá khứ cụ thể với hiện tại hoàn thành.'},
    {type:'mc', q:'“She has lived in Hue for 5 years” hàm ý:', opts:['Cô ấy đã rời Huế','Cô ấy vẫn đang sống ở Huế','Cô ấy sắp tới Huế','Cô ấy chỉ ở Huế 5 ngày'], a:1, ex:'Hiện tại hoàn thành + for → hành động **còn tiếp diễn tới nay**.'},
    {type:'mc', q:'I ___ three cups of coffee today. (đếm được kết quả)', opts:['have been drinking','have drunk','drink','was drinking'], a:1, ex:'Nhấn mạnh **số lượng hoàn tất** → hiện tại hoàn thành thường.'}
  ]
},

/* ============================ BUỔI 22 ============================ */
'b1-02': {
  id:'b1-02', level:'B1', no:22,
  title:'Quá khứ hoàn thành & kể chuyện nhiều lớp thời gian',
  subtitle:'Had + V3: việc xảy ra TRƯỚC một việc quá khứ khác.',
  goals:[
    'Dùng quá khứ hoàn thành để sắp xếp trình tự sự kiện',
    'Kết hợp 3 thì quá khứ trong một câu chuyện',
    'Dùng by the time, after, before, already'
  ],
  vocab:[
    {w:'realise', ipa:'/ˈriːəlaɪz/', pos:'v', vi:'nhận ra', ex:'I realised I had forgotten my wallet.', exvi:'Tôi nhận ra mình quên ví.'},
    {w:'discover', ipa:'/dɪˈskʌvə(r)/', pos:'v', vi:'phát hiện', ex:'We discovered that he had lied.', exvi:'Chúng tôi phát hiện anh ta đã nói dối.'},
    {w:'by the time', ipa:'/baɪ ðə taɪm/', pos:'phr', vi:'vào lúc mà', ex:'By the time I arrived, they had left.', exvi:'Lúc tôi tới thì họ đã đi.'},
    {w:'already', ipa:'/ɔːlˈredi/', pos:'adv', vi:'đã… rồi', ex:'The film had already started.', exvi:'Phim đã bắt đầu rồi.'},
    {w:'previously', ipa:'/ˈpriːviəsli/', pos:'adv', vi:'trước đó', ex:'He had previously worked in Japan.', exvi:'Trước đó anh ấy làm ở Nhật.'},
    {w:'miss the flight', ipa:'/mɪs ðə flaɪt/', pos:'phr', vi:'lỡ chuyến bay', ex:'We missed the flight.', exvi:'Chúng tôi lỡ chuyến bay.'},
    {w:'book', ipa:'/bʊk/', pos:'v', vi:'đặt trước', ex:'I had booked a room.', exvi:'Tôi đã đặt phòng.'},
    {w:'prepare', ipa:'/prɪˈpeə(r)/', pos:'v', vi:'chuẩn bị', ex:'She had prepared everything.', exvi:'Cô ấy đã chuẩn bị mọi thứ.'},
    {w:'expect', ipa:'/ɪkˈspekt/', pos:'v', vi:'mong đợi, dự kiến', ex:'It was better than I had expected.', exvi:'Tốt hơn tôi tưởng.'},
    {w:'explain', ipa:'/ɪkˈspleɪn/', pos:'v', vi:'giải thích', ex:'He explained what had happened.', exvi:'Anh ấy giải thích chuyện đã xảy ra.'},
    {w:'apologise', ipa:'/əˈpɒlədʒaɪz/', pos:'v', vi:'xin lỗi', ex:'She apologised for being late.', exvi:'Cô ấy xin lỗi vì tới muộn.'},
    {w:'exhausted', ipa:'/ɪɡˈzɔːstɪd/', pos:'adj', vi:'kiệt sức', ex:'I was exhausted because I hadn’t slept.', exvi:'Tôi kiệt sức vì chưa ngủ.'},
    {w:'disappointed', ipa:'/ˌdɪsəˈpɔɪntɪd/', pos:'adj', vi:'thất vọng', ex:'He was disappointed with the result.', exvi:'Anh ấy thất vọng với kết quả.'},
    {w:'relieved', ipa:'/rɪˈliːvd/', pos:'adj', vi:'nhẹ nhõm', ex:'I felt relieved.', exvi:'Tôi thấy nhẹ cả người.'},
    {w:'in the end', ipa:'/ɪn ði end/', pos:'phr', vi:'cuối cùng thì', ex:'In the end, everything was fine.', exvi:'Cuối cùng mọi thứ đều ổn.'},
    {w:'meanwhile', ipa:'/ˈmiːnwaɪl/', pos:'adv', vi:'trong khi đó', ex:'Meanwhile, she was waiting outside.', exvi:'Trong khi đó cô ấy đợi bên ngoài.'}
  ],
  grammar:[
    {
      t:'1. Quá khứ hoàn thành — cấu trúc',
      formula:'(+) S + had + V3            → I had finished.\n(–) S + hadn’t + V3         → She hadn’t arrived.\n(?) Had + S + V3?           → Had you seen it before?\n\n“had” dùng chung cho MỌI ngôi.',
      ex:[
        ['When I arrived, the train **had** already **left**.','Khi tôi tới thì tàu đã chạy rồi.'],
        ['She was sad because she **had failed** the exam.','Cô ấy buồn vì đã trượt kỳ thi.'],
        ['I couldn’t get in — I **had forgotten** my key.','Tôi không vào được — tôi quên chìa khoá.']
      ]
    },
    {
      t:'2. Trục thời gian: việc nào trước, việc nào sau',
      intro:'Khi kể chuyện quá khứ, dùng **quá khứ hoàn thành** cho việc xảy ra **trước**, và **quá khứ đơn** cho việc xảy ra **sau**.',
      formula:'   ┌─ had + V3 ─┐   ┌─ V2 ─┐   ┌─ NOW ─┐\n   việc XA hơn      việc GẦN hơn   hiện tại\n\nBy the time she CAME (V2), we HAD EATEN (had V3).',
      ex:[
        ['The film **had started** when we **got** there.','Phim đã chiếu rồi lúc chúng tôi tới.'],
        ['After he **had finished** work, he **went** home.','Sau khi làm xong việc, anh ấy về nhà.'],
        ['I **didn’t know** her because we **had** never **met**.','Tôi không biết cô ấy vì chúng tôi chưa từng gặp.']
      ],
      notes:[
        {type:'tip', text:'Nếu đã có **before / after** làm rõ thứ tự, có thể dùng quá khứ đơn cho cả hai vế: *After he **finished**, he **left**.* ✔'},
        {type:'warn', text:'Chỉ dùng quá khứ hoàn thành khi có **mốc quá khứ khác** để so. Câu đứng một mình *I had gone to school* nghe rất kỳ.'}
      ]
    },
    {
      t:'3. Quá khứ hoàn thành tiếp diễn',
      formula:'S + had been + V-ing → nhấn mạnh quá trình kéo dài TRƯỚC một mốc quá khứ',
      ex:[
        ['He **had been driving** for six hours when he finally stopped.','Anh ấy đã lái xe 6 tiếng thì mới dừng lại.'],
        ['Her eyes were red — she **had been crying**.','Mắt cô ấy đỏ — cô ấy đã khóc.']
      ]
    },
    {
      t:'4. Bốn thì quá khứ đứng cạnh nhau',
      table:[
        ['Thì','Công thức','Vai trò trong câu chuyện'],
        ['Quá khứ đơn','V2','các sự kiện chính, nối tiếp nhau'],
        ['Quá khứ tiếp diễn','was/were + V-ing','bối cảnh, hành động dài bị cắt ngang'],
        ['Quá khứ hoàn thành','had + V3','việc đã xảy ra TRƯỚC đó'],
        ['QK hoàn thành tiếp diễn','had been + V-ing','quá trình kéo dài trước một mốc quá khứ']
      ],
      ex:[
        ['It **was raining** (bối cảnh) when I **left** (sự kiện) the house. I **had forgotten** (trước đó) my umbrella, and I **had been walking** (quá trình) for ten minutes when a taxi **stopped**.','Trời đang mưa khi tôi ra khỏi nhà. Tôi đã quên ô, và tôi đi bộ được mười phút thì một chiếc taxi dừng lại.']
      ]
    }
  ],
  phrases:[
    ['By the time we arrived, the party had finished.','Lúc chúng tôi tới thì bữa tiệc đã tan.'],
    ['I had never seen anything like it.','Tôi chưa từng thấy thứ gì như thế.'],
    ['She told me what had happened.','Cô ấy kể tôi nghe chuyện đã xảy ra.'],
    ['We had already eaten when they came.','Chúng tôi đã ăn xong khi họ tới.'],
    ['He said he had forgotten his wallet.','Anh ấy nói đã quên ví.'],
    ['It was the best trip I had ever taken.','Đó là chuyến đi tuyệt nhất tôi từng có.'],
    ['I was tired because I hadn’t slept well.','Tôi mệt vì ngủ không ngon.'],
    ['After I had checked in, I went to the gate.','Sau khi làm thủ tục, tôi ra cửa lên máy bay.'],
    ['Luckily, I had booked in advance.','May là tôi đã đặt trước.'],
    ['In the end, everything worked out.','Cuối cùng thì mọi việc cũng ổn.']
  ],
  exercises:[
    {type:'mc', q:'When we arrived, the film ___ already ___ .', opts:['has / started','had / started','was / starting','did / start'], a:1, ex:'Việc xảy ra trước → **had started**.'},
    {type:'mc', q:'I couldn’t enter because I ___ my key.', opts:['forget','forgot','had forgotten','have forgotten'], a:2, ex:'Quên trước khi tới cửa → **had forgotten**.'},
    {type:'mc', q:'She was tired because she ___ all night.', opts:['worked','had been working','works','is working'], a:1, ex:'Quá trình kéo dài trước đó → **had been working**.'},
    {type:'mc', q:'Chọn câu ĐÚNG:', opts:['By the time I came, he already left.','By the time I came, he had already left.','By the time I had come, he left.','By the time I come, he had left.'], a:1, ex:'*by the time* + quá khứ đơn, vế kia **had + V3**.'},
    {type:'mc', q:'It was the first time I ___ sushi.', opts:['ate','have eaten','had eaten','eat'], a:2, ex:'“lần đầu” trong ngữ cảnh quá khứ → **had eaten**.'},
    {type:'fill', q:'Chia động từ: When I got home, my wife ___ (cook) dinner already. (2 từ)', a:['had cooked'], ex:'Việc xảy ra trước → **had cooked**.'},
    {type:'fill', q:'Chia động từ: He told me he ___ (lose) his phone. (2 từ)', a:['had lost'], ex:'Mất trước khi kể → **had lost**.'},
    {type:'fill', q:'Chia động từ: After she ___ (finish) her homework, she watched TV. (2 từ)', a:['had finished','finished'], ex:'**had finished** (hoặc *finished* vì đã có “after”).'},
    {type:'fill', q:'Chia động từ: They ___ (not / meet) before that day. (2 từ)', a:["hadn't met",'had not met'], ex:'Trước mốc quá khứ → **hadn’t met**.'},
    {type:'mc', q:'Câu nào nhấn mạnh QUÁ TRÌNH kéo dài trước một mốc quá khứ?', opts:['He had written a letter.','He had been writing for hours.','He wrote a letter.','He was writing a letter.'], a:1, ex:'**had been + V-ing** = quá khứ hoàn thành tiếp diễn.'}
  ]
},

/* ============================ BUỔI 23 ============================ */
'b1-03': {
  id:'b1-03', level:'B1', no:23,
  title:'Câu bị động (Passive Voice)',
  subtitle:'Khi hành động quan trọng hơn người thực hiện.',
  goals:[
    'Chuyển câu chủ động sang bị động ở mọi thì',
    'Biết khi nào nên dùng bị động',
    'Dùng bị động với động từ có hai tân ngữ'
  ],
  vocab:[
    {w:'produce', ipa:'/prəˈdjuːs/', pos:'v', vi:'sản xuất', ex:'Coffee is produced in Dak Lak.', exvi:'Cà phê được trồng ở Đắk Lắk.'},
    {w:'build', ipa:'/bɪld/', pos:'v', vi:'xây (built – built)', ex:'The bridge was built in 1990.', exvi:'Cây cầu được xây năm 1990.'},
    {w:'invent', ipa:'/ɪnˈvent/', pos:'v', vi:'phát minh', ex:'The phone was invented by Bell.', exvi:'Điện thoại do Bell phát minh.'},
    {w:'discover', ipa:'/dɪˈskʌvə(r)/', pos:'v', vi:'khám phá', ex:'America was discovered in 1492.', exvi:'Châu Mỹ được tìm ra năm 1492.'},
    {w:'design', ipa:'/dɪˈzaɪn/', pos:'v', vi:'thiết kế', ex:'It was designed by a Vietnamese architect.', exvi:'Nó do một kiến trúc sư Việt thiết kế.'},
    {w:'repair / fix', ipa:'/rɪˈpeə(r)/', pos:'v', vi:'sửa chữa', ex:'My car is being repaired.', exvi:'Xe tôi đang được sửa.'},
    {w:'deliver', ipa:'/dɪˈlɪvə(r)/', pos:'v', vi:'giao hàng', ex:'Your order will be delivered tomorrow.', exvi:'Đơn của bạn sẽ được giao ngày mai.'},
    {w:'complete', ipa:'/kəmˈpliːt/', pos:'v', vi:'hoàn thành', ex:'The project has been completed.', exvi:'Dự án đã hoàn thành.'},
    {w:'publish', ipa:'/ˈpʌblɪʃ/', pos:'v', vi:'xuất bản', ex:'The book was published last year.', exvi:'Cuốn sách xuất bản năm ngoái.'},
    {w:'organise', ipa:'/ˈɔːɡənaɪz/', pos:'v', vi:'tổ chức', ex:'The event is organised by our company.', exvi:'Sự kiện do công ty chúng tôi tổ chức.'},
    {w:'damage', ipa:'/ˈdæmɪdʒ/', pos:'v/n', vi:'làm hư hại', ex:'The house was damaged by the storm.', exvi:'Ngôi nhà bị bão làm hư hại.'},
    {w:'steal', ipa:'/stiːl/', pos:'v', vi:'trộm (stole – stolen)', ex:'My bike was stolen.', exvi:'Xe đạp tôi bị trộm.'},
    {w:'allow', ipa:'/əˈlaʊ/', pos:'v', vi:'cho phép', ex:'Smoking is not allowed here.', exvi:'Ở đây không được hút thuốc.'},
    {w:'require', ipa:'/rɪˈkwaɪə(r)/', pos:'v', vi:'yêu cầu', ex:'A visa is required.', exvi:'Cần phải có visa.'},
    {w:'be based on', ipa:'/beɪst ɒn/', pos:'phr', vi:'dựa trên', ex:'The film is based on a true story.', exvi:'Phim dựa trên chuyện có thật.'},
    {w:'be known as', ipa:'/nəʊn əz/', pos:'phr', vi:'được biết đến như là', ex:'He is known as “the King”.', exvi:'Ông ấy được gọi là “Vua”.'}
  ],
  grammar:[
    {
      t:'1. Nguyên tắc chuyển đổi',
      formula:'CHỦ ĐỘNG:  S    +  V     +  O\nBỊ ĐỘNG:    O  + be + V3 + (by S)\n\nThey BUILT this house in 1990.\n→ This house WAS BUILT in 1990.',
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
      ],
      notes:[
        {type:'tip', text:'Công thức bất biến: **be (chia đúng thì) + V3**. Chỉ có chữ “be” thay đổi, V3 luôn giữ nguyên.'}
      ]
    },
    {
      t:'2. Khi nào dùng bị động?',
      table:[
        ['Trường hợp','Ví dụ'],
        ['Không biết / không cần biết ai làm','My wallet **was stolen**.'],
        ['Người làm quá hiển nhiên','He **was arrested** yesterday. (bởi cảnh sát)'],
        ['Muốn nhấn mạnh **đối tượng chịu tác động**','This temple **was built** in the 11th century.'],
        ['Văn phong khoa học, báo chí, trang trọng','The samples **were analysed** in the lab.'],
        ['Tránh nêu trách nhiệm','A mistake **was made**.']
      ],
      notes:[
        {type:'warn', text:'Chỉ **ngoại động từ** (có tân ngữ) mới chuyển sang bị động được. *Happen, arrive, go, come, sleep, die* → **không có bị động**: *The accident was happened* ❌'},
        {type:'tip', text:'Chỉ giữ **by + người làm** khi thông tin đó quan trọng: *Hamlet was written **by Shakespeare*** ✔ ; *My car was stolen (by someone)* → bỏ.'}
      ]
    },
    {
      t:'3. Động từ có HAI tân ngữ',
      formula:'They gave ME a prize.  → hai cách bị động:\n  ① **I was given** a prize.        (lấy người làm chủ ngữ — phổ biến hơn)\n  ② **A prize was given** to me.    (lấy vật làm chủ ngữ)\nÁp dụng với: give, send, offer, tell, show, teach, pay, lend, promise',
      ex:[
        ['**I was told** to wait outside.','Tôi được bảo đợi bên ngoài.'],
        ['**She was offered** a new job.','Cô ấy được mời một công việc mới.']
      ]
    },
    {
      t:'4. Bị động với mệnh đề: It is said that…',
      formula:'People say that he is rich.\n→ **It is said that** he is rich.\n→ **He is said to be** rich.\n\nTương tự: believe, think, report, know, expect, consider',
      ex:[
        ['**It is believed that** the temple is 800 years old.','Người ta tin ngôi đền có 800 năm tuổi.'],
        ['He **is thought to have** left the country.','Người ta cho rằng ông ta đã rời khỏi đất nước.']
      ]
    }
  ],
  phrases:[
    ['My phone was stolen last night.','Điện thoại tôi bị trộm tối qua.'],
    ['The room is being cleaned.','Phòng đang được dọn.'],
    ['Your order will be delivered tomorrow.','Đơn hàng sẽ được giao ngày mai.'],
    ['English is spoken all over the world.','Tiếng Anh được nói khắp thế giới.'],
    ['This dish is made with fresh herbs.','Món này được làm với rau thơm tươi.'],
    ['Photos are not allowed inside.','Không được chụp ảnh bên trong.'],
    ['I was given a second chance.','Tôi được cho một cơ hội nữa.'],
    ['The film is based on a true story.','Phim dựa trên chuyện có thật.'],
    ['It is said to be the best in town.','Nghe nói đó là chỗ ngon nhất vùng.'],
    ['The problem has been solved.','Vấn đề đã được giải quyết.']
  ],
  exercises:[
    {type:'mc', q:'This house ___ in 1985.', opts:['built','was built','is built','has built'], a:1, ex:'Quá khứ bị động → **was built**.'},
    {type:'mc', q:'English ___ in many countries.', opts:['speaks','is spoken','was spoken','is speaking'], a:1, ex:'Hiện tại đơn bị động → **is spoken**.'},
    {type:'mc', q:'The road ___ at the moment.', opts:['is repairing','is being repaired','was repaired','repairs'], a:1, ex:'Hiện tại tiếp diễn bị động → **is being repaired**.'},
    {type:'mc', q:'The work ___ already ___ .', opts:['has / finished','has been / finished','was / finish','is / finishing'], a:1, ex:'Hiện tại hoàn thành bị động → **has been finished**.'},
    {type:'mc', q:'Câu nào KHÔNG thể chuyển sang bị động?', opts:['They built a bridge.','She wrote a letter.','The accident happened yesterday.','He cleaned the room.'], a:2, ex:'*happen* là nội động từ → **không có bị động**.'},
    {type:'fill', q:'Chuyển bị động: Someone stole my bike. → My bike ___ ___ . (2 từ)', a:['was stolen'], ex:'Quá khứ đơn bị động.'},
    {type:'fill', q:'Chia động từ: The letter ___ (send) tomorrow. (3 từ, dùng will)', a:['will be sent'], ex:'Tương lai bị động: **will be sent**.'},
    {type:'fill', q:'Chia động từ: The room must ___ (clean) before the meeting. (2 từ)', a:['be cleaned'], ex:'Modal bị động: **must be cleaned**.'},
    {type:'fill', q:'Chuyển bị động: They gave her a prize. → She ___ ___ a prize. (2 từ)', a:['was given'], ex:'Người làm chủ ngữ → **was given**.'},
    {type:'fill', q:'Điền: Hamlet was written ___ Shakespeare.', a:['by'], ex:'Người thực hiện dùng **by**.'},
    {type:'mc', q:'“It is said that he is very rich” viết lại là:', opts:['He says to be very rich.','He is said to be very rich.','He is said that very rich.','It says he to be rich.'], a:1, ex:'Cấu trúc **S + is said + to V**.'},
    {type:'mc', q:'The house ___ when we arrived. (đang được xây)', opts:['was building','was being built','had built','is being built'], a:1, ex:'Quá khứ tiếp diễn bị động → **was being built**.'}
  ]
},

/* ============================ BUỔI 24 ============================ */
'b1-04': {
  id:'b1-04', level:'B1', no:24,
  title:'Mệnh đề quan hệ (Relative Clauses)',
  subtitle:'Who, which, that, whose, where — nối câu ngắn thành câu dài.',
  goals:[
    'Dùng đúng who / which / that / whose / where / when',
    'Phân biệt mệnh đề xác định và không xác định',
    'Rút gọn mệnh đề quan hệ'
  ],
  vocab:[
    {w:'who', ipa:'/huː/', pos:'pron', vi:'người mà (làm chủ ngữ/tân ngữ)', ex:'The man who called me…', exvi:'Người đàn ông đã gọi tôi…'},
    {w:'which', ipa:'/wɪtʃ/', pos:'pron', vi:'cái mà (vật)', ex:'The book which I bought…', exvi:'Quyển sách mà tôi mua…'},
    {w:'that', ipa:'/ðæt/', pos:'pron', vi:'mà (người hoặc vật)', ex:'The film that we saw…', exvi:'Bộ phim mà chúng tôi xem…'},
    {w:'whose', ipa:'/huːz/', pos:'pron', vi:'của người/vật mà', ex:'The girl whose father is a doctor…', exvi:'Cô gái có bố là bác sĩ…'},
    {w:'where', ipa:'/weə(r)/', pos:'adv', vi:'nơi mà', ex:'The café where we met…', exvi:'Quán cà phê nơi chúng tôi gặp nhau…'},
    {w:'when', ipa:'/wen/', pos:'adv', vi:'khi mà', ex:'The day when we met…', exvi:'Ngày mà chúng tôi gặp nhau…'},
    {w:'colleague', ipa:'/ˈkɒliːɡ/', pos:'n', vi:'đồng nghiệp', ex:'A colleague who helped me.', exvi:'Một đồng nghiệp đã giúp tôi.'},
    {w:'neighbour', ipa:'/ˈneɪbə(r)/', pos:'n', vi:'hàng xóm', ex:'My neighbour whose dog barks.', exvi:'Hàng xóm có con chó hay sủa.'},
    {w:'author', ipa:'/ˈɔːθə(r)/', pos:'n', vi:'tác giả', ex:'The author who wrote it.', exvi:'Tác giả viết cuốn đó.'},
    {w:'company', ipa:'/ˈkʌmpəni/', pos:'n', vi:'công ty', ex:'The company where I work.', exvi:'Công ty nơi tôi làm việc.'},
    {w:'device', ipa:'/dɪˈvaɪs/', pos:'n', vi:'thiết bị', ex:'A device which measures speed.', exvi:'Thiết bị đo tốc độ.'},
    {w:'reason', ipa:'/ˈriːzn/', pos:'n', vi:'lý do', ex:'The reason why I left.', exvi:'Lý do tôi rời đi.'},
    {w:'opportunity', ipa:'/ˌɒpəˈtjuːnəti/', pos:'n', vi:'cơ hội', ex:'An opportunity that changed my life.', exvi:'Cơ hội đã thay đổi đời tôi.'},
    {w:'situation', ipa:'/ˌsɪtʃuˈeɪʃn/', pos:'n', vi:'tình huống', ex:'A situation which is difficult.', exvi:'Một tình huống khó khăn.'},
    {w:'experience', ipa:'/ɪkˈspɪəriəns/', pos:'n', vi:'trải nghiệm', ex:'An experience I will never forget.', exvi:'Trải nghiệm tôi không bao giờ quên.'},
    {w:'talented', ipa:'/ˈtæləntɪd/', pos:'adj', vi:'tài năng', ex:'A talented singer whose songs are famous.', exvi:'Ca sĩ tài năng có các bài hát nổi tiếng.'}
  ],
  grammar:[
    {
      t:'1. Đại từ quan hệ — dùng cái nào?',
      table:[
        ['Đại từ','Thay cho','Chức năng','Ví dụ'],
        ['**who**','người','chủ ngữ / tân ngữ','The woman **who** lives next door is a nurse.'],
        ['**whom**','người','tân ngữ (trang trọng)','The man **whom** I met yesterday…'],
        ['**which**','vật, con vật','chủ ngữ / tân ngữ','The car **which** he bought is red.'],
        ['**that**','người hoặc vật','chủ ngữ / tân ngữ (chỉ mệnh đề xác định)','The book **that** I read was great.'],
        ['**whose**','người/vật (sở hữu)','thay cho his/her/its/their','The boy **whose** father is a pilot…'],
        ['**where**','nơi chốn','= in/at which','The hotel **where** we stayed…'],
        ['**when**','thời gian','= on/in which','The year **when** I was born…'],
        ['**why**','lý do','= for which','The reason **why** she left…']
      ]
    },
    {
      t:'2. Mệnh đề XÁC ĐỊNH vs KHÔNG XÁC ĐỊNH',
      table:[
        ['','XÁC ĐỊNH (defining)','KHÔNG XÁC ĐỊNH (non-defining)'],
        ['Vai trò','**bắt buộc** — không có thì câu vô nghĩa','bổ sung thông tin thêm, bỏ đi vẫn hiểu'],
        ['Dấu phẩy','KHÔNG có','**CÓ** dấu phẩy hai đầu'],
        ['Dùng “that”','✔ được','✘ **không được**'],
        ['Ví dụ','The man **who** called you is my boss.','My father, **who** is 60, still works.'],
        ['','Students **who** study hard pass.','Ha Long Bay, **which** is in the north, is beautiful.']
      ],
      ex:[
        ['My brother **who lives in Hue** is a teacher. (tôi có nhiều anh em — cái ông ở Huế ấy)','Anh trai tôi — người sống ở Huế — là giáo viên.'],
        ['My brother, **who lives in Hue**, is a teacher. (tôi chỉ có một anh trai)','Anh trai tôi, người mà đang sống ở Huế, là giáo viên.']
      ],
      notes:[
        {type:'warn', text:'Với mệnh đề **không xác định** (có dấu phẩy) **tuyệt đối không dùng *that***: *Hanoi, that is the capital…* ❌ → *Hanoi, **which** is the capital…* ✔'}
      ]
    },
    {
      t:'3. Lược bỏ đại từ quan hệ',
      formula:'Bỏ được KHI đại từ quan hệ làm TÂN NGỮ trong mệnh đề xác định:\n  The book (which/that) I bought is good.  ← bỏ được\nKHÔNG bỏ được khi nó làm CHỦ NGỮ:\n  The man **who** called me… ← phải giữ',
      ex:[
        ['The film **(that) we watched** last night was boring.','Bộ phim chúng tôi xem tối qua chán.'],
        ['The woman **who works** here is very kind. (không bỏ được *who*)','Người phụ nữ làm việc ở đây rất tốt bụng.']
      ]
    },
    {
      t:'4. Rút gọn mệnh đề quan hệ',
      formula:'Chủ động → V-ing:      The man **who is waiting** outside = The man **waiting** outside\nBị động → V3:          The car **which was stolen** = The car **stolen**\nCó to be + tính từ:    The only person **who was** available = The only person **available**',
      ex:[
        ['The people **living** next door are very friendly.','Những người sống nhà bên rất thân thiện.'],
        ['The letter **written** by my grandfather is precious.','Lá thư ông tôi viết rất quý giá.']
      ]
    }
  ],
  phrases:[
    ['This is the person who helped me.','Đây là người đã giúp tôi.'],
    ['That’s the restaurant where we had dinner.','Đó là nhà hàng nơi chúng tôi ăn tối.'],
    ['Do you know the girl whose bag was stolen?','Bạn biết cô gái bị mất túi không?'],
    ['The book that I recommended is on sale.','Cuốn sách tôi giới thiệu đang giảm giá.'],
    ['Hanoi, which is the capital, is very old.','Hà Nội, thủ đô, rất cổ kính.'],
    ['That’s the reason why I called.','Đó là lý do tôi gọi.'],
    ['I remember the day when we first met.','Tôi nhớ ngày đầu chúng ta gặp nhau.'],
    ['Anyone who is interested can join.','Ai quan tâm đều có thể tham gia.'],
    ['The company I work for is growing.','Công ty tôi làm đang phát triển.'],
    ['It is something I will never forget.','Đó là điều tôi không bao giờ quên.']
  ],
  exercises:[
    {type:'mc', q:'The man ___ lives next door is a doctor.', opts:['which','who','whose','where'], a:1, ex:'Chỉ người, làm chủ ngữ → **who**.'},
    {type:'mc', q:'This is the book ___ I told you about.', opts:['who','whose','which','where'], a:2, ex:'Chỉ vật → **which** (hoặc *that*).'},
    {type:'mc', q:'The girl ___ father is a pilot is my friend.', opts:['who','which','whose','whom'], a:2, ex:'Sở hữu → **whose**.'},
    {type:'mc', q:'That’s the hotel ___ we stayed last year.', opts:['which','that','where','who'], a:2, ex:'Nơi chốn → **where**.'},
    {type:'mc', q:'Câu nào ĐÚNG?', opts:['My mother, that is 55, works here.','My mother, who is 55, works here.','My mother who is 55, works here.','My mother, which is 55, works here.'], a:1, ex:'Mệnh đề không xác định về người → **who**, không dùng *that*.'},
    {type:'fill', q:'Điền đại từ quan hệ: The car ___ he bought is very expensive.', a:['which','that'], ex:'Chỉ vật → **which / that**.'},
    {type:'fill', q:'Điền: Do you know the woman ___ is talking to Nam?', a:['who','that'], ex:'Chỉ người, chủ ngữ → **who / that**.'},
    {type:'fill', q:'Điền: I remember the day ___ we met.', a:['when'], ex:'Chỉ thời gian → **when**.'},
    {type:'fill', q:'Rút gọn: The man who is standing there → The man ___ there. (1 từ)', a:['standing'], ex:'Chủ động → **V-ing**.'},
    {type:'mc', q:'Trong câu nào có thể LƯỢC BỎ đại từ quan hệ?', opts:['The man who called me.','The book which I read.','The woman who lives here.','The car which is red.'], a:1, ex:'Bỏ được khi đại từ làm **tân ngữ**: *The book I read*.'},
    {type:'mc', q:'Rút gọn bị động: The letter which was sent yesterday → ', opts:['The letter sending yesterday','The letter sent yesterday','The letter send yesterday','The letter was sent yesterday'], a:1, ex:'Bị động → dùng **V3**.'},
    {type:'mc', q:'Da Nang, ___ is in central Vietnam, is a coastal city.', opts:['that','which','where','who'], a:1, ex:'Mệnh đề không xác định chỉ vật/nơi → **which**.'}
  ]
},

/* ============================ BUỔI 25 ============================ */
'b1-05': {
  id:'b1-05', level:'B1', no:25,
  title:'Câu tường thuật (Reported Speech)',
  subtitle:'Thuật lại lời người khác — lùi thì và đổi đại từ.',
  goals:[
    'Lùi thì đúng khi chuyển sang câu tường thuật',
    'Tường thuật câu hỏi, mệnh lệnh, đề nghị',
    'Dùng động từ tường thuật đa dạng (say, tell, ask, advise…)'
  ],
  vocab:[
    {w:'say', ipa:'/seɪ/', pos:'v', vi:'nói (không có tân ngữ người)', ex:'He said (that) he was busy.', exvi:'Anh ấy nói anh ấy bận.'},
    {w:'tell', ipa:'/tel/', pos:'v', vi:'bảo ai (có tân ngữ người)', ex:'He told me he was busy.', exvi:'Anh ấy bảo tôi anh ấy bận.'},
    {w:'ask', ipa:'/ɑːsk/', pos:'v', vi:'hỏi; yêu cầu', ex:'She asked me where I lived.', exvi:'Cô ấy hỏi tôi sống ở đâu.'},
    {w:'explain', ipa:'/ɪkˈspleɪn/', pos:'v', vi:'giải thích', ex:'He explained that it was broken.', exvi:'Anh ấy giải thích rằng nó hỏng.'},
    {w:'advise', ipa:'/ədˈvaɪz/', pos:'v', vi:'khuyên', ex:'She advised me to rest.', exvi:'Cô ấy khuyên tôi nghỉ ngơi.'},
    {w:'warn', ipa:'/wɔːn/', pos:'v', vi:'cảnh báo', ex:'He warned us not to go.', exvi:'Anh ấy cảnh báo chúng tôi đừng đi.'},
    {w:'suggest', ipa:'/səˈdʒest/', pos:'v', vi:'đề nghị', ex:'She suggested going out.', exvi:'Cô ấy đề nghị đi ra ngoài.'},
    {w:'offer', ipa:'/ˈɒfə(r)/', pos:'v', vi:'ngỏ ý, mời', ex:'He offered to help.', exvi:'Anh ấy ngỏ ý giúp.'},
    {w:'refuse', ipa:'/rɪˈfjuːz/', pos:'v', vi:'từ chối', ex:'She refused to answer.', exvi:'Cô ấy từ chối trả lời.'},
    {w:'admit', ipa:'/ədˈmɪt/', pos:'v', vi:'thừa nhận', ex:'He admitted making a mistake.', exvi:'Anh ấy thừa nhận đã sai.'},
    {w:'deny', ipa:'/dɪˈnaɪ/', pos:'v', vi:'phủ nhận', ex:'She denied taking the money.', exvi:'Cô ấy phủ nhận lấy tiền.'},
    {w:'complain', ipa:'/kəmˈpleɪn/', pos:'v', vi:'phàn nàn', ex:'They complained about the noise.', exvi:'Họ phàn nàn về tiếng ồn.'},
    {w:'remind', ipa:'/rɪˈmaɪnd/', pos:'v', vi:'nhắc nhở', ex:'Remind me to call her.', exvi:'Nhắc tôi gọi cô ấy nhé.'},
    {w:'promise', ipa:'/ˈprɒmɪs/', pos:'v', vi:'hứa', ex:'He promised to come.', exvi:'Anh ấy hứa sẽ đến.'},
    {w:'agree', ipa:'/əˈɡriː/', pos:'v', vi:'đồng ý', ex:'She agreed to help us.', exvi:'Cô ấy đồng ý giúp chúng tôi.'},
    {w:'apologise', ipa:'/əˈpɒlədʒaɪz/', pos:'v', vi:'xin lỗi', ex:'He apologised for being late.', exvi:'Anh ấy xin lỗi vì đến muộn.'}
  ],
  grammar:[
    {
      t:'1. Quy tắc LÙI THÌ',
      table:[
        ['Lời nói trực tiếp','Câu tường thuật'],
        ['hiện tại đơn (V / V-s)','**quá khứ đơn** (V2)'],
        ['hiện tại tiếp diễn (am/is/are V-ing)','**quá khứ tiếp diễn** (was/were V-ing)'],
        ['hiện tại hoàn thành (have V3)','**quá khứ hoàn thành** (had V3)'],
        ['quá khứ đơn (V2)','**quá khứ hoàn thành** (had V3)'],
        ['will','**would**'],
        ['can','**could**'],
        ['may','**might**'],
        ['must','**had to**'],
        ['am/is/are','**was/were**']
      ],
      ex:[
        ['“I **am** tired.” → He said (that) he **was** tired.','Anh ấy nói anh ấy mệt.'],
        ['“I **will** call you.” → She said she **would** call me.','Cô ấy nói sẽ gọi tôi.'],
        ['“I **have finished**.” → He said he **had finished**.','Anh ấy nói đã xong.']
      ],
      notes:[
        {type:'tip', text:'**Không cần lùi thì** khi: nói về sự thật hiển nhiên (*He said the Earth **is** round*), hoặc động từ tường thuật ở **hiện tại** (*He **says** he **is** busy*).'}
      ]
    },
    {
      t:'2. Đổi đại từ và trạng từ thời gian – nơi chốn',
      table:[
        ['Trực tiếp','Tường thuật','Trực tiếp','Tường thuật'],
        ['I / we','he, she / they','now','then'],
        ['my / our','his, her / their','today','that day'],
        ['you','me / him / her','tomorrow','the next day / the following day'],
        ['this / these','that / those','yesterday','the day before / the previous day'],
        ['here','there','next week','the following week'],
        ['—','—','last week','the week before']
      ],
      ex:[
        ['“I saw **you here yesterday**.” → He said he had seen **me there the day before**.','Anh ấy nói đã gặp tôi ở đó hôm trước.']
      ]
    },
    {
      t:'3. Tường thuật CÂU HỎI',
      formula:'Câu hỏi WH-:  S + asked (+ O) + WH-word + S + V (trật tự câu KỂ)\n  “Where do you live?”  → She asked me **where I lived**.\n\nCâu hỏi Yes/No: S + asked (+ O) + **if / whether** + S + V\n  “Do you like it?”     → He asked **if I liked** it.',
      ex:[
        ['“What time does the meeting start?” → She asked what time the meeting **started**.','Cô ấy hỏi cuộc họp bắt đầu lúc mấy giờ.'],
        ['“Are you coming?” → He asked **whether I was** coming.','Anh ấy hỏi tôi có đến không.']
      ],
      notes:[
        {type:'warn', text:'Câu hỏi tường thuật **không đảo ngữ, không dùng do/does/did, không có dấu hỏi**: *She asked where **did I live*** ❌ → *She asked where **I lived*** ✔'}
      ]
    },
    {
      t:'4. Tường thuật MỆNH LỆNH & lời đề nghị',
      formula:'Mệnh lệnh:      S + told/asked + O + **to V**       → “Sit down.” → He told me **to sit down**.\nPhủ định:       S + told/asked + O + **not to V**   → “Don’t go.” → She told me **not to go**.\nLời khuyên:     advised + O + to V\nLời hứa/từ chối: promised / refused + **to V**\nĐề nghị:        suggested + **V-ing** (hoặc *that S should V*)',
      ex:[
        ['“Please help me.” → She asked me **to help** her.','Cô ấy nhờ tôi giúp.'],
        ['“Don’t be late!” → He warned us **not to be** late.','Anh ấy dặn chúng tôi đừng trễ.'],
        ['“Let’s go out.” → She suggested **going** out.','Cô ấy đề nghị đi ra ngoài.']
      ]
    },
    {
      t:'5. SAY vs TELL',
      formula:'say + (that) + mệnh đề      → He **said** (that) he was tired.   ✔\nsay TO somebody             → He **said to me** that…            ✔\ntell + somebody + (that)    → He **told me** (that) he was tired. ✔\ntell + somebody + to V      → He **told me to** wait.             ✔\n\n✘ He said me…   ✘ He told that…',
      notes:[{type:'warn', text:'Nhớ ngắn gọn: **tell** luôn có người đứng ngay sau; **say** thì không.'}]
    }
  ],
  phrases:[
    ['He said he was busy.','Anh ấy nói anh ấy bận.'],
    ['She told me she would come later.','Cô ấy bảo tôi cô ấy sẽ đến sau.'],
    ['They asked me where I was from.','Họ hỏi tôi từ đâu đến.'],
    ['He asked if I could help him.','Anh ấy hỏi tôi có giúp được không.'],
    ['She advised me to see a doctor.','Cô ấy khuyên tôi đi khám.'],
    ['He told me not to worry.','Anh ấy bảo tôi đừng lo.'],
    ['She apologised for being late.','Cô ấy xin lỗi vì đến muộn.'],
    ['He promised to call me back.','Anh ấy hứa sẽ gọi lại.'],
    ['They suggested going by train.','Họ đề nghị đi bằng tàu.'],
    ['She refused to answer the question.','Cô ấy từ chối trả lời câu hỏi.']
  ],
  exercises:[
    {type:'mc', q:'“I am tired.” → He said he ___ tired.', opts:['is','was','has been','will be'], a:1, ex:'Hiện tại đơn → **quá khứ đơn**.'},
    {type:'mc', q:'“I will help you.” → She said she ___ help me.', opts:['will','would','can','had'], a:1, ex:'will → **would**.'},
    {type:'mc', q:'“Where do you live?” → He asked me where ___ .', opts:['do I live','did I live','I lived','I did live'], a:2, ex:'Câu hỏi tường thuật dùng **trật tự câu kể**.'},
    {type:'mc', q:'“Don’t touch it!” → She told me ___ it.', opts:['not touch','to not touch','not to touch','don’t touch'], a:2, ex:'Mệnh lệnh phủ định → **not to V**.'},
    {type:'mc', q:'Câu nào ĐÚNG?', opts:['He said me he was tired.','He told me he was tired.','He told that he was tired.','He said to that he was tired.'], a:1, ex:'**tell + người**; *say* không đi trực tiếp với người.'},
    {type:'fill', q:'“I have finished.” → He said he ___ ___ . (2 từ)', a:['had finished'], ex:'Hiện tại hoàn thành → **had finished**.'},
    {type:'fill', q:'“Do you like coffee?” → She asked ___ I liked coffee. (1 từ)', a:['if','whether'], ex:'Câu hỏi Yes/No → **if / whether**.'},
    {type:'fill', q:'“Please wait here.” → He asked me ___ ___ there. (2 từ)', a:['to wait'], ex:'Lời yêu cầu → **to wait**.'},
    {type:'fill', q:'“I saw her yesterday.” → He said he had seen her ___ ___ ___ . (3 từ)', a:['the day before','the previous day'], ex:'*yesterday* → **the day before**.'},
    {type:'mc', q:'“I can swim.” → He said he ___ swim.', opts:['can','could','would','might'], a:1, ex:'can → **could**.'},
    {type:'mc', q:'“Let’s go to the cinema.” → She suggested ___ to the cinema.', opts:['to go','go','going','went'], a:2, ex:'*suggest* + **V-ing**.'},
    {type:'fill', q:'“I am living here now.” → She said she ___ ___ there then. (2 từ)', a:['was living'], ex:'Hiện tại tiếp diễn → **was living**.'}
  ]
},

/* ============================ BUỔI 26 ============================ */
'b1-06': {
  id:'b1-06', level:'B1', no:26,
  title:'Câu điều kiện loại 2 và loại 3',
  subtitle:'Giả định không có thật ở hiện tại và tiếc nuối về quá khứ.',
  goals:[
    'Dùng điều kiện loại 2 để giả định hiện tại',
    'Dùng điều kiện loại 3 để nói về tiếc nuối quá khứ',
    'Dùng If I were you để đưa lời khuyên'
  ],
  vocab:[
    {w:'win the lottery', ipa:'/wɪn ðə ˈlɒtəri/', pos:'phr', vi:'trúng xổ số', ex:'If I won the lottery, I would travel.', exvi:'Nếu trúng số tôi sẽ đi du lịch.'},
    {w:'imagine', ipa:'/ɪˈmædʒɪn/', pos:'v', vi:'tưởng tượng', ex:'Imagine you were rich.', exvi:'Tưởng tượng bạn giàu.'},
    {w:'regret', ipa:'/rɪˈɡret/', pos:'v/n', vi:'hối tiếc', ex:'I regret not studying harder.', exvi:'Tôi tiếc vì không học chăm hơn.'},
    {w:'advice', ipa:'/ədˈvaɪs/', pos:'n', vi:'lời khuyên', ex:'If I were you, I would accept.', exvi:'Nếu tôi là bạn, tôi sẽ nhận.'},
    {w:'opportunity', ipa:'/ˌɒpəˈtjuːnəti/', pos:'n', vi:'cơ hội', ex:'I missed the opportunity.', exvi:'Tôi đã bỏ lỡ cơ hội.'},
    {w:'mistake', ipa:'/mɪˈsteɪk/', pos:'n', vi:'sai lầm', ex:'It was a big mistake.', exvi:'Đó là sai lầm lớn.'},
    {w:'succeed', ipa:'/səkˈsiːd/', pos:'v', vi:'thành công', ex:'He would have succeeded.', exvi:'Lẽ ra anh ấy đã thành công.'},
    {w:'afford', ipa:'/əˈfɔːd/', pos:'v', vi:'đủ khả năng chi trả', ex:'If I had money, I could afford it.', exvi:'Nếu có tiền tôi đã mua nổi.'},
    {w:'quit', ipa:'/kwɪt/', pos:'v', vi:'bỏ, nghỉ việc', ex:'I would quit my job.', exvi:'Tôi sẽ nghỉ việc.'},
    {w:'abroad', ipa:'/əˈbrɔːd/', pos:'adv', vi:'ở nước ngoài', ex:'I would study abroad.', exvi:'Tôi sẽ đi du học.'},
    {w:'invest', ipa:'/ɪnˈvest/', pos:'v', vi:'đầu tư', ex:'I would invest the money.', exvi:'Tôi sẽ đầu tư số tiền đó.'},
    {w:'donate', ipa:'/dəʊˈneɪt/', pos:'v', vi:'quyên góp', ex:'I would donate to charity.', exvi:'Tôi sẽ quyên góp từ thiện.'},
    {w:'accept', ipa:'/əkˈsept/', pos:'v', vi:'chấp nhận', ex:'I would accept the offer.', exvi:'Tôi sẽ nhận lời.'},
    {w:'behave', ipa:'/bɪˈheɪv/', pos:'v', vi:'cư xử', ex:'I would have behaved differently.', exvi:'Lẽ ra tôi đã cư xử khác.'},
    {w:'wish', ipa:'/wɪʃ/', pos:'v', vi:'ước', ex:'I wish I were taller.', exvi:'Ước gì tôi cao hơn.'},
    {w:'otherwise', ipa:'/ˈʌðəwaɪz/', pos:'adv', vi:'nếu không thì', ex:'Hurry, otherwise we will be late.', exvi:'Nhanh lên, không thì trễ mất.'}
  ],
  grammar:[
    {
      t:'1. Điều kiện loại 2 — giả định KHÔNG CÓ THẬT ở hiện tại',
      formula:'If + S + V2/V-ed (quá khứ đơn),  S + WOULD/COULD/MIGHT + V\n\nIf I HAD a car, I WOULD drive to work.  (thực tế: tôi không có xe)',
      ex:[
        ['**If** I **were** rich, I **would** travel the world.','Nếu tôi giàu, tôi sẽ đi khắp thế giới. (thực tế không giàu)'],
        ['**If** she **knew** the answer, she **would** tell you.','Nếu cô ấy biết đáp án, cô ấy đã nói cho bạn.'],
        ['I **would** buy that house **if** I **had** enough money.','Tôi sẽ mua căn nhà đó nếu đủ tiền.']
      ],
      notes:[
        {type:'tip', text:'Với động từ *be*, câu điều kiện loại 2 dùng **were** cho mọi ngôi (kể cả I/he/she): *If I **were** you…* Đây là dạng giả định (subjunctive).'},
        {type:'warn', text:'**If I was you** là dạng khẩu ngữ; trong bài thi và văn viết hãy dùng **If I were you**.'}
      ]
    },
    {
      t:'2. Điều kiện loại 3 — tiếc nuối QUÁ KHỨ',
      formula:'If + S + HAD + V3,  S + WOULD/COULD/MIGHT + HAVE + V3\n\nIf I HAD STUDIED harder, I WOULD HAVE PASSED the exam.\n(thực tế: tôi đã không học chăm và đã trượt)',
      ex:[
        ['**If** we **had left** earlier, we **wouldn’t have missed** the flight.','Nếu chúng tôi đi sớm hơn thì đã không lỡ chuyến bay.'],
        ['She **would have come if** you **had invited** her.','Cô ấy đã đến nếu bạn mời.'],
        ['**If** I **had known**, I **would have helped** you.','Nếu tôi biết, tôi đã giúp bạn rồi.']
      ],
      notes:[{type:'warn', text:'Cấu trúc cứng: vế if = **had + V3**; vế chính = **would have + V3**. Không viết *If I would have known* ❌ (lỗi rất phổ biến).'}]
    },
    {
      t:'3. Bảng so sánh 4 loại câu điều kiện',
      table:[
        ['Loại','Mệnh đề IF','Mệnh đề chính','Ý nghĩa'],
        ['**0**','hiện tại đơn','hiện tại đơn','sự thật, quy luật'],
        ['**1**','hiện tại đơn','will + V','có thể xảy ra trong tương lai'],
        ['**2**','quá khứ đơn (were)','would + V','không có thật ở hiện tại / khó xảy ra'],
        ['**3**','had + V3','would have + V3','không có thật trong quá khứ, tiếc nuối'],
        ['**Hỗn hợp**','had + V3','would + V','quá khứ ảnh hưởng tới hiện tại']
      ],
      ex:[
        ['**Hỗn hợp:** If I **had studied** medicine, I **would be** a doctor now.','Nếu hồi đó tôi học y thì bây giờ tôi đã là bác sĩ.']
      ]
    },
    {
      t:'4. WISH — ước',
      formula:'wish + quá khứ đơn        → ước ở hiện tại : I **wish** I **had** more time.\nwish + had + V3           → tiếc quá khứ   : I **wish** I **had studied** harder.\nwish + would + V          → mong người khác đổi : I **wish** you **would** stop smoking.\n(“If only…” dùng y hệt, nhấn mạnh hơn)',
      ex:[
        ['I **wish** I **were** taller.','Ước gì tôi cao hơn.'],
        ['**If only** I **hadn’t said** that!','Giá mà tôi đã không nói câu đó!']
      ]
    }
  ],
  phrases:[
    ['If I were you, I would take the job.','Nếu tôi là bạn, tôi sẽ nhận việc đó.'],
    ['What would you do if you won the lottery?','Bạn sẽ làm gì nếu trúng số?'],
    ['I would travel around the world.','Tôi sẽ đi vòng quanh thế giới.'],
    ['If I had more time, I would learn the guitar.','Nếu có thêm thời gian, tôi sẽ học ghi-ta.'],
    ['If I had known, I would have told you.','Nếu tôi biết thì đã báo bạn rồi.'],
    ['We would have arrived on time if the traffic had been better.','Chúng tôi đã đến đúng giờ nếu đường không tắc.'],
    ['I wish I could help you.','Ước gì tôi giúp được bạn.'],
    ['I wish I hadn’t said that.','Ước gì tôi đã không nói vậy.'],
    ['If only I had listened to you!','Giá mà tôi đã nghe bạn!'],
    ['It would be better to wait.','Đợi thì tốt hơn.']
  ],
  exercises:[
    {type:'mc', q:'If I ___ rich, I would buy a big house.', opts:['am','was','were','will be'], a:2, ex:'Điều kiện loại 2 → **were** cho mọi ngôi.'},
    {type:'mc', q:'If she had studied, she ___ the exam.', opts:['would pass','would have passed','passed','will pass'], a:1, ex:'Loại 3 → **would have + V3**.'},
    {type:'mc', q:'If I had more money, I ___ a new car.', opts:['will buy','would buy','would have bought','bought'], a:1, ex:'Loại 2 → **would + V**.'},
    {type:'mc', q:'Câu nào SAI?', opts:['If I had known, I would have come.','If I would have known, I would have come.','If I knew, I would come.','If I know, I will come.'], a:1, ex:'Vế *if* của loại 3 phải là **had + V3**, không dùng *would have*.'},
    {type:'mc', q:'I wish I ___ speak French fluently.', opts:['can','could','will','would have'], a:1, ex:'*wish* ở hiện tại → dùng dạng quá khứ: **could**.'},
    {type:'fill', q:'Chia động từ: If I ___ (be) you, I would apologise.', a:['were','was'], ex:'Chuẩn mực là **were**.'},
    {type:'fill', q:'Chia động từ: If they ___ (leave) earlier, they wouldn’t have missed the train. (2 từ)', a:['had left'], ex:'Loại 3 → **had left**.'},
    {type:'fill', q:'Chia động từ: If it ___ (not / rain), we would go out. (2 từ)', a:["didn't rain",'did not rain'], ex:'Loại 2 → quá khứ đơn **didn’t rain**.'},
    {type:'fill', q:'Chia động từ: I wish I ___ (study) harder at school. (2 từ)', a:['had studied'], ex:'Tiếc quá khứ → **had studied**.'},
    {type:'fill', q:'Hoàn thành: If I had known about the meeting, I ___ ___ ___ . (would/attend, 3 từ)', a:['would have attended'], ex:'Loại 3 → **would have attended**.'},
    {type:'mc', q:'“If I had studied medicine, I would be a doctor now” là câu điều kiện:', opts:['loại 1','loại 2','loại 3','hỗn hợp'], a:3, ex:'Vế if quá khứ + vế chính hiện tại → **hỗn hợp**.'},
    {type:'mc', q:'I wish you ___ making that noise!', opts:['stop','would stop','stopped','had stopped'], a:1, ex:'Mong người khác thay đổi → **wish + would**.'}
  ]
},

/* ============================ BUỔI 27 ============================ */
'b1-07': {
  id:'b1-07', level:'B1', no:27,
  title:'Modal suy đoán & modal quá khứ',
  subtitle:'Must be, can’t be, might have been — đoán và nhận xét việc đã qua.',
  goals:[
    'Suy đoán mức độ chắc chắn ở hiện tại và quá khứ',
    'Dùng should have / could have / must have đúng nghĩa',
    'Diễn đạt trách móc, tiếc nuối lịch sự'
  ],
  vocab:[
    {w:'certain / sure', ipa:'/ˈsɜːtn/', pos:'adj', vi:'chắc chắn', ex:'I am certain he is right.', exvi:'Tôi chắc anh ấy đúng.'},
    {w:'possible', ipa:'/ˈpɒsəbl/', pos:'adj', vi:'có thể xảy ra', ex:'It is possible.', exvi:'Điều đó có thể.'},
    {w:'impossible', ipa:'/ɪmˈpɒsəbl/', pos:'adj', vi:'không thể', ex:'That is impossible.', exvi:'Không thể nào.'},
    {w:'guess', ipa:'/ɡes/', pos:'v', vi:'đoán', ex:'I guess he is at home.', exvi:'Tôi đoán anh ấy ở nhà.'},
    {w:'assume', ipa:'/əˈsjuːm/', pos:'v', vi:'cho rằng', ex:'I assume you agree.', exvi:'Tôi cho là bạn đồng ý.'},
    {w:'evidence', ipa:'/ˈevɪdəns/', pos:'n', vi:'bằng chứng', ex:'There is no evidence.', exvi:'Không có bằng chứng.'},
    {w:'obvious', ipa:'/ˈɒbviəs/', pos:'adj', vi:'hiển nhiên', ex:'It is obvious.', exvi:'Rõ ràng là vậy.'},
    {w:'unlikely', ipa:'/ʌnˈlaɪkli/', pos:'adj', vi:'khó có khả năng', ex:'It is unlikely to happen.', exvi:'Khó mà xảy ra.'},
    {w:'blame', ipa:'/bleɪm/', pos:'v', vi:'đổ lỗi', ex:'Don’t blame yourself.', exvi:'Đừng tự trách mình.'},
    {w:'warn', ipa:'/wɔːn/', pos:'v', vi:'cảnh báo', ex:'You should have warned me.', exvi:'Lẽ ra bạn phải cảnh báo tôi.'},
    {w:'oversleep', ipa:'/ˌəʊvəˈsliːp/', pos:'v', vi:'ngủ quên', ex:'He must have overslept.', exvi:'Chắc anh ấy ngủ quên.'},
    {w:'traffic jam', ipa:'/ˈtræfɪk dʒæm/', pos:'n', vi:'tắc đường', ex:'There must have been a traffic jam.', exvi:'Chắc là tắc đường.'},
    {w:'run out of', ipa:'/rʌn aʊt əv/', pos:'phr v', vi:'hết (nhiên liệu, tiền)', ex:'We ran out of petrol.', exvi:'Chúng tôi hết xăng.'},
    {w:'break down', ipa:'/breɪk daʊn/', pos:'phr v', vi:'hỏng (xe, máy)', ex:'The car broke down.', exvi:'Xe bị hỏng.'},
    {w:'get lost', ipa:'/ɡet lɒst/', pos:'phr', vi:'bị lạc', ex:'They might have got lost.', exvi:'Có thể họ bị lạc.'},
    {w:'on purpose', ipa:'/ɒn ˈpɜːpəs/', pos:'phr', vi:'cố ý', ex:'He didn’t do it on purpose.', exvi:'Anh ấy không cố ý.'}
  ],
  grammar:[
    {
      t:'1. Suy đoán ở HIỆN TẠI',
      table:[
        ['Modal','Mức chắc chắn','Ví dụ'],
        ['**must be**','~95% chắc là đúng','The lights are on — he **must be** home.'],
        ['**may / might / could be**','~40–50% có thể','She **might be** in a meeting.'],
        ['**can’t / couldn’t be**','~95% chắc là KHÔNG','That **can’t be** true — I saw her yesterday.']
      ],
      ex:[
        ['You haven’t eaten all day — you **must be** hungry.','Bạn chưa ăn cả ngày — chắc đói lắm.'],
        ['He **can’t be** at work; it’s Sunday.','Anh ấy không thể đang ở chỗ làm; hôm nay Chủ nhật.']
      ],
      notes:[{type:'warn', text:'Phủ định của *must be* (suy đoán) là **can’t be**, KHÔNG phải *mustn’t be*. *Mustn’t* mang nghĩa cấm.'}]
    },
    {
      t:'2. Suy đoán về QUÁ KHỨ: modal + have + V3',
      formula:'must have + V3      → chắc chắn đã…    : He **must have forgotten**.\nmight/may have + V3 → có thể đã…      : She **might have missed** the bus.\ncan’t have + V3     → chắc chắn không… : He **can’t have said** that.\ncould have + V3     → lẽ ra đã có thể  : You **could have told** me!',
      ex:[
        ['The road is wet — it **must have rained** last night.','Đường ướt — chắc đêm qua trời mưa.'],
        ['She isn’t here yet. She **may have got** stuck in traffic.','Cô ấy chưa tới. Có thể kẹt xe.'],
        ['He **can’t have finished** already — he only started ten minutes ago.','Anh ấy không thể xong rồi — mới bắt đầu 10 phút trước.']
      ]
    },
    {
      t:'3. SHOULD HAVE / SHOULDN’T HAVE — trách móc, tiếc nuối',
      formula:'should have + V3      = lẽ ra nên làm (nhưng đã không làm)\nshouldn’t have + V3   = lẽ ra không nên làm (nhưng đã làm rồi)',
      ex:[
        ['You **should have told** me earlier!','Lẽ ra bạn phải nói với tôi sớm hơn!'],
        ['I **shouldn’t have eaten** so much.','Lẽ ra tôi không nên ăn nhiều thế.'],
        ['We **should have booked** a table.','Lẽ ra chúng ta nên đặt bàn trước.']
      ],
      notes:[{type:'tip', text:'Cách nói tự nhiên trong hội thoại: *I **should’ve** called* — /ʃʊdəv/, nghe như “shoulda”.'}]
    },
    {
      t:'4. Tổng hợp modal + have + V3',
      table:[
        ['Cấu trúc','Nghĩa','Ví dụ'],
        ['must have + V3','chắc chắn đã xảy ra','She **must have left** early.'],
        ['can’t have + V3','chắc chắn đã không xảy ra','He **can’t have known**.'],
        ['may/might have + V3','có lẽ đã','They **might have forgotten**.'],
        ['should have + V3','lẽ ra nên (nhưng không)','I **should have studied**.'],
        ['shouldn’t have + V3','lẽ ra không nên (nhưng đã)','You **shouldn’t have shouted**.'],
        ['could have + V3','đã có thể (nhưng không); trách nhẹ','You **could have helped** me!'],
        ['needn’t have + V3','đã không cần (nhưng vẫn làm)','You **needn’t have paid** — it was free.']
      ]
    }
  ],
  phrases:[
    ['He must be very tired.','Chắc anh ấy mệt lắm.'],
    ['That can’t be right.','Không thể đúng được.'],
    ['She might be stuck in traffic.','Có thể cô ấy đang kẹt xe.'],
    ['It must have been a mistake.','Chắc là có nhầm lẫn gì đó.'],
    ['You should have told me.','Lẽ ra bạn phải nói với tôi.'],
    ['I shouldn’t have done that.','Lẽ ra tôi không nên làm vậy.'],
    ['They may have forgotten the meeting.','Có thể họ quên cuộc họp.'],
    ['You could have called me!','Bạn đã có thể gọi tôi mà!'],
    ['He can’t have finished so quickly.','Anh ấy không thể xong nhanh thế được.'],
    ['I guess we will never know.','Chắc chúng ta sẽ không bao giờ biết.']
  ],
  exercises:[
    {type:'mc', q:'The lights are on. Someone ___ at home.', opts:['must be','can’t be','should be','must have been'], a:0, ex:'Bằng chứng rõ → **must be**.'},
    {type:'mc', q:'That ___ be Nam — he is in Japan right now.', opts:['must','can’t','should','might'], a:1, ex:'Chắc chắn không phải → **can’t be**.'},
    {type:'mc', q:'The ground is wet. It ___ last night.', opts:['must rain','must have rained','should rain','can’t have rained'], a:1, ex:'Suy đoán quá khứ → **must have + V3**.'},
    {type:'mc', q:'I failed the test. I ___ harder.', opts:['should study','should have studied','must study','could study'], a:1, ex:'Tiếc nuối quá khứ → **should have studied**.'},
    {type:'mc', q:'You ___ so rude to her. Now she is upset.', opts:['shouldn’t be','shouldn’t have been','can’t have been','mustn’t be'], a:1, ex:'Đã làm rồi và hối tiếc → **shouldn’t have been**.'},
    {type:'fill', q:'Hoàn thành: She isn’t answering. She ___ ___ ___ asleep. (might/be, 3 từ)', a:['might have been','may have been'], ex:'Suy đoán quá khứ → **might have been**.'},
    {type:'fill', q:'Hoàn thành: You look exhausted. You ___ ___ working all night. (must/be, 2 từ)', a:['must have been'], ex:'**must have been** working.'},
    {type:'fill', q:'Hoàn thành: I ___ ___ ___ you earlier, sorry. (should/tell, 3 từ)', a:['should have told'], ex:'**should have told**.'},
    {type:'fill', q:'Hoàn thành: He ___ ___ ___ that — he wasn’t even there. (can’t/say, 3 từ)', a:["can't have said",'cannot have said'], ex:'**can’t have said**.'},
    {type:'mc', q:'“You needn’t have paid” nghĩa là:', opts:['Bạn không được trả tiền','Bạn đã trả tiền nhưng đáng lẽ không cần','Bạn nên trả tiền','Bạn chưa trả tiền'], a:1, ex:'**needn’t have + V3** = đã làm nhưng không cần thiết.'}
  ]
},

/* ============================ BUỔI 28 ============================ */
'b1-08': {
  id:'b1-08', level:'B1', no:28,
  title:'Used to, be used to & ôn tập B1',
  subtitle:'Thói quen xưa – kia, sự quen thuộc, và tổng kết trình độ trung cấp.',
  goals:[
    'Phân biệt used to / be used to / get used to',
    'Dùng would để kể thói quen quá khứ',
    'Tổng ôn toàn bộ ngữ pháp B1'
  ],
  vocab:[
    {w:'used to', ipa:'/ˈjuːst tə/', pos:'phr', vi:'đã từng (nay không còn)', ex:'I used to smoke.', exvi:'Tôi từng hút thuốc.'},
    {w:'be used to', ipa:'/biː ˈjuːst tə/', pos:'phr', vi:'đã quen với', ex:'I am used to the noise.', exvi:'Tôi quen với tiếng ồn rồi.'},
    {w:'get used to', ipa:'/ɡet ˈjuːst tə/', pos:'phr', vi:'dần quen với', ex:'You will get used to it.', exvi:'Rồi bạn sẽ quen thôi.'},
    {w:'childhood', ipa:'/ˈtʃaɪldhʊd/', pos:'n', vi:'tuổi thơ', ex:'In my childhood, we played outside.', exvi:'Hồi nhỏ chúng tôi chơi ngoài trời.'},
    {w:'countryside', ipa:'/ˈkʌntrisaɪd/', pos:'n', vi:'nông thôn', ex:'We used to live in the countryside.', exvi:'Chúng tôi từng sống ở quê.'},
    {w:'tradition', ipa:'/trəˈdɪʃn/', pos:'n', vi:'truyền thống', ex:'It is an old tradition.', exvi:'Đó là truyền thống lâu đời.'},
    {w:'generation', ipa:'/ˌdʒenəˈreɪʃn/', pos:'n', vi:'thế hệ', ex:'The younger generation.', exvi:'Thế hệ trẻ.'},
    {w:'lifestyle', ipa:'/ˈlaɪfstaɪl/', pos:'n', vi:'lối sống', ex:'A healthy lifestyle.', exvi:'Lối sống lành mạnh.'},
    {w:'adapt', ipa:'/əˈdæpt/', pos:'v', vi:'thích nghi', ex:'It takes time to adapt.', exvi:'Cần thời gian để thích nghi.'},
    {w:'routine', ipa:'/ruːˈtiːn/', pos:'n', vi:'thói quen hằng ngày', ex:'My daily routine.', exvi:'Thói quen hằng ngày của tôi.'},
    {w:'nostalgic', ipa:'/nɒˈstældʒɪk/', pos:'adj', vi:'hoài niệm', ex:'It makes me nostalgic.', exvi:'Điều đó khiến tôi hoài niệm.'},
    {w:'gradually', ipa:'/ˈɡrædʒuəli/', pos:'adv', vi:'dần dần', ex:'I gradually got used to it.', exvi:'Tôi dần quen với nó.'},
    {w:'no longer', ipa:'/nəʊ ˈlɒŋɡə(r)/', pos:'adv', vi:'không còn nữa', ex:'He no longer works here.', exvi:'Anh ấy không còn làm ở đây.'},
    {w:'these days', ipa:'/ðiːz deɪz/', pos:'phr', vi:'dạo này', ex:'These days I work from home.', exvi:'Dạo này tôi làm việc ở nhà.'},
    {w:'back then', ipa:'/bæk ðen/', pos:'phr', vi:'hồi đó', ex:'Back then, life was simpler.', exvi:'Hồi đó cuộc sống đơn giản hơn.'},
    {w:'compared to', ipa:'/kəmˈpeəd tə/', pos:'phr', vi:'so với', ex:'Compared to before, it is better.', exvi:'So với trước thì tốt hơn.'}
  ],
  grammar:[
    {
      t:'1. USED TO + V — thói quen quá khứ nay không còn',
      formula:'(+) S + used to + V         → I used to play football.\n(–) S + didn’t use to + V   → I didn’t use to like coffee.\n(?) Did + S + use to + V?   → Did you use to live here?\n\n⚠ Phủ định và nghi vấn dùng **use to** (không có “d”).',
      ex:[
        ['I **used to** live in Hue, but now I live in Hanoi.','Tôi từng sống ở Huế, giờ sống ở Hà Nội.'],
        ['She **used to be** very shy.','Cô ấy từng rất nhút nhát.'],
        ['**Did** you **use to** have long hair?','Trước đây bạn để tóc dài à?']
      ],
      notes:[{type:'tip', text:'**would + V** cũng kể thói quen quá khứ, nhưng chỉ dùng cho **hành động**, không dùng cho **trạng thái**: *We **would** go fishing every Sunday* ✔ — *I would be shy* ❌ (phải dùng *used to be*).'}]
    },
    {
      t:'2. BE USED TO / GET USED TO + V-ing hoặc N',
      table:[
        ['Cấu trúc','Nghĩa','Ví dụ'],
        ['**used to** + V nguyên mẫu','đã từng (quá khứ, nay không còn)','I **used to drive** to work.'],
        ['**be used to** + V-ing / N','đã quen với (trạng thái hiện tại)','I **am used to driving** in heavy traffic.'],
        ['**get used to** + V-ing / N','dần quen với (quá trình)','I **am getting used to** the weather here.']
      ],
      ex:[
        ['He **is used to working** night shifts. (đã quen rồi)','Anh ấy quen làm ca đêm rồi.'],
        ['It took me a month **to get used to** the new job.','Tôi mất một tháng để quen việc mới.']
      ],
      notes:[{type:'warn', text:'Điểm bẫy: *used to* + **V nguyên mẫu**, nhưng *be/get used to* + **V-ing**. So sánh: *I used to **live** here* vs *I am used to **living** here*.'}]
    },
    {
      t:'3. ÔN TẬP B1 — bảng tổng kết',
      table:[
        ['Chủ điểm','Công thức cốt lõi','Buổi'],
        ['HTHT vs QKĐ','has/have V3 (since, for) vs V2 (yesterday, ago)','21'],
        ['Quá khứ hoàn thành','had + V3 — việc xảy ra trước','22'],
        ['Câu bị động','be (chia thì) + V3 (+ by O)','23'],
        ['Mệnh đề quan hệ','who / which / that / whose / where','24'],
        ['Câu tường thuật','lùi thì, đổi đại từ, ask + if / to V','25'],
        ['Điều kiện 2','If + V2, would + V','26'],
        ['Điều kiện 3','If + had V3, would have + V3','26'],
        ['Modal suy đoán','must be / can’t be / might have + V3','27'],
        ['Used to','used to + V ; be used to + V-ing','28']
      ]
    }
  ],
  phrases:[
    ['I used to play football every weekend.','Tôi từng chơi bóng mỗi cuối tuần.'],
    ['I didn’t use to like vegetables.','Trước đây tôi không thích rau.'],
    ['Did you use to live in Saigon?','Bạn từng sống ở Sài Gòn à?'],
    ['I am used to getting up early now.','Giờ tôi quen dậy sớm rồi.'],
    ['It takes time to get used to a new city.','Cần thời gian để quen với thành phố mới.'],
    ['Things are not what they used to be.','Mọi thứ không còn như xưa.'],
    ['Back then, we didn’t have smartphones.','Hồi đó chúng tôi không có điện thoại thông minh.'],
    ['These days everything is online.','Dạo này mọi thứ đều online.'],
    ['I would spend hours reading as a child.','Hồi bé tôi hay ngồi đọc sách hàng giờ.'],
    ['Compared to before, life is much easier.','So với trước, cuộc sống dễ hơn nhiều.']
  ],
  exercises:[
    {type:'mc', q:'I ___ smoke, but I stopped last year.', opts:['use to','used to','am used to','was used to'], a:1, ex:'Thói quen quá khứ → **used to + V**.'},
    {type:'mc', q:'I am used to ___ up early.', opts:['get','to get','getting','got'], a:2, ex:'*be used to* + **V-ing**.'},
    {type:'mc', q:'Did you ___ play the piano?', opts:['used to','use to','used','using to'], a:1, ex:'Sau *did* dùng **use to**.'},
    {type:'mc', q:'It took me weeks to ___ the new schedule.', opts:['used to','get used to','use to','be used'], a:1, ex:'Quá trình dần quen → **get used to**.'},
    {type:'mc', q:'Câu nào ĐÚNG?', opts:['I used to living here.','I am used to live here.','I am used to living here.','I use to living here.'], a:2, ex:'*be used to* + **V-ing**.'},
    {type:'fill', q:'Điền: She ___ ___ be very shy when she was young. (2 từ)', a:['used to'], ex:'**used to be**.'},
    {type:'fill', q:'Chia động từ: He is used to ___ (work) at night.', a:['working'], ex:'Sau *be used to* → **V-ing**.'},
    {type:'mc', q:'ÔN TẬP: The house ___ in 1920.', opts:['built','was built','has built','is building'], a:1, ex:'Bị động quá khứ → **was built**.'},
    {type:'mc', q:'ÔN TẬP: If I ___ you, I would take the job.', opts:['am','was','were','had been'], a:2, ex:'Điều kiện loại 2 → **were**.'},
    {type:'mc', q:'ÔN TẬP: He said he ___ tired.', opts:['is','was','has been','will be'], a:1, ex:'Lùi thì: is → **was**.'},
    {type:'fill', q:'ÔN TẬP: The man ___ lives next door is a doctor. (1 từ)', a:['who','that'], ex:'Chỉ người, chủ ngữ → **who**.'},
    {type:'fill', q:'ÔN TẬP: I ___ (live) here since 2019. (2 từ)', a:['have lived',"'ve lived"], ex:'*since* → hiện tại hoàn thành.'},
    {type:'fill', q:'ÔN TẬP: When I arrived, the train ___ ___ (already / leave). (3 từ)', a:['had already left'], ex:'Việc xảy ra trước → **had already left**.'},
    {type:'mc', q:'ÔN TẬP: The lights are off — they ___ be out.', opts:['must','can’t','should','would'], a:0, ex:'Suy đoán chắc chắn → **must be**.'}
  ]
}

});
