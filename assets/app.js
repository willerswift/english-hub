/* English Hub — app.js  (v5)
   Nhớ tăng ?v= trong index.html mỗi khi sửa file này. */
(function () {
  'use strict';

  var L = window.LESSONS || {};
  var CUR = window.CURRICULUM;
  var REF = window.REFERENCE || {};
  var IT = window.IELTS_TRACK || { phases: [], lessons: {} };
  var PR = window.PRON || {};
  var STORE = 'englishhub.v1';

  /* ================= BỘ ICON ================= */
  var ICONS = {
    home: '<path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-4v-6h-5v6h-4A1.5 1.5 0 0 1 4 19z"/>',
    route: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5"/>',
    book: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H19v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M4 16.5A1.5 1.5 0 0 1 5.5 15H19"/>',
    bookOpen: '<path d="M12 6.5C10.5 5.2 8.4 4.6 6 4.7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1c2.3-.1 4.4.5 6 1.8 1.6-1.3 3.7-1.9 6-1.8a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1c-2.4-.1-4.5.5-6 1.8z"/><path d="M12 6.5v12.9"/>',
    type: '<path d="M5 6.5V4.5h14v2M12 4.5V19M9 19h6"/>',
    layers: '<rect x="7" y="4" width="13" height="14" rx="2"/><path d="M4 7v11a2 2 0 0 0 2 2h10"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v3H9z"/><path d="M9 13l2 2 4-4"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.6 2.6 0 1 1 3.4 2.5c-.6.2-.9.8-.9 1.4v.4"/><circle cx="12" cy="17" r=".8" fill="currentColor" stroke="none"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M2.5 12h2M19.5 12h2M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4"/>',
    play: '<path d="M8 5.4v13.2L19 12z" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    right: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    left: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    check: '<path d="M4.5 12.5 9 17 19.5 6.5"/>',
    rotate: '<path d="M3.5 12a8.5 8.5 0 1 0 2.9-6.4"/><path d="M3 4v5h5"/>',
    shuffle: '<path d="M16 3.5l3.5 3.5L16 10.5"/><path d="M16 13.5l3.5 3.5L16 20.5"/><path d="M4 7h3.2c1.2 0 2.3.6 3 1.6l4 5.8c.7 1 1.8 1.6 3 1.6h2.3"/><path d="M4 17h3.2c1.2 0 2.3-.6 3-1.6l.7-1"/><path d="M14.1 9.6l.7-1c.7-1 1.8-1.6 3-1.6h1.7"/>',
    volume: '<path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15.3 9.2a4 4 0 0 1 0 5.6"/><path d="M18 6.5a7.6 7.6 0 0 1 0 11"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
    bulb: '<path d="M9.5 17.5h5M10 20.5h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8v.3h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.3l3.2 2"/>',
    letters: '<path d="M3.2 18 7.7 7l4.5 11M5 14.4h5.4"/><circle cx="17.6" cy="15" r="3.2"/><path d="M20.8 11.5V18"/>',
    chart: '<path d="M4 4v16h16"/><path d="M8 16v-4M12.5 16V8M17 16v-6"/>',
    list: '<path d="M8.5 6h11M8.5 12h11M8.5 18h11"/><circle cx="4.4" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.4" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.4" cy="18" r="1.1" fill="currentColor" stroke="none"/>',
    chat: '<path d="M20 15a3 3 0 0 1-3 3H8.5L4 21V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z"/>',
    pencil: '<path d="M4 20h4L19.4 8.6a2.1 2.1 0 0 0-3-3L5 17z"/><path d="M14.6 6.4l3 3"/>',
    mic: '<rect x="9" y="3" width="6" height="10.5" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6"/>',
    printer: '<path d="M7 9V4h10v5"/><rect x="4" y="9" width="16" height="7" rx="2"/><path d="M7 14h10v6H7z"/>',
    cap: '<path d="M12 4 2.5 8.5 12 13l9.5-4.5z"/><path d="M6.5 10.8V16c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-5.2"/>',
    link: '<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7l-1.3 1.3"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 0 0 5.7 5.7l1.3-1.3"/>',
    compass: '<circle cx="12" cy="12" r="8.5"/><path d="m15.4 8.6-1.9 4.9-4.9 1.9 1.9-4.9z"/>',
    trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4.5v1.3A3.5 3.5 0 0 0 8 10.8M17 6h2.5v1.3A3.5 3.5 0 0 1 16 10.8"/><path d="M12 14v3M9.5 20.5h5l-.5-3h-4z"/>',
    thumb: '<path d="M7.5 21V10l4.3-6.8A2.1 2.1 0 0 1 15 5.6L14 9.5h4.9a2 2 0 0 1 2 2.4l-1.3 6.6a2 2 0 0 1-2 1.6z"/><path d="M3.2 10h4.3v11H3.2z"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".9" fill="currentColor" stroke="none"/>'
  };
  function ic(n, cls) {
    return '<svg class="' + (cls || 'ic') + '" viewBox="0 0 24 24" aria-hidden="true">' +
      (ICONS[n] || '') + '</svg>';
  }
  function icS(n) { return ic(n, 'ic ic-sm'); }

  /* ================= state ================= */
  var state = load();
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE)) || {};
      s.done = s.done || {};
      /* Mặc định là giao diện sáng; chỉ giữ chế độ tối khi người dùng tự bấm chọn */
      if (!s.themeChosen) s.theme = 'light';
      return s;
    } catch (e) { return { done: {}, theme: 'light' }; }
  }
  function save() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {} }

  /* ================= helpers ================= */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function attr(s) { return esc(s).replace(/'/g, '&#39;'); }
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(/(^|[^*])\*([^*]+?)\*/g, '$1<i>$2</i>');
  }
  var _sorted = null;
  function lessonList() {
    if (!_sorted) {
      _sorted = Object.keys(L).map(function (k) { return L[k]; })
        .sort(function (a, b) { return a.no - b.no; });
    }
    return _sorted;
  }
  function levelOf(id) {
    for (var i = 0; i < CUR.levels.length; i++) if (CUR.levels[i].id === id) return CUR.levels[i];
    return null;
  }
  var _ieSorted = null;
  function ieltsList() {
    if (!_ieSorted) {
      _ieSorted = Object.keys(IT.lessons).map(function (k) { return IT.lessons[k]; })
        .sort(function (a, b) { return a.no - b.no; });
    }
    return _ieSorted;
  }
  function phaseOf(id) {
    for (var i = 0; i < IT.phases.length; i++) if (IT.phases[i].id === id) return IT.phases[i];
    return null;
  }
  function ieDone(phaseId) {
    return ieltsList().filter(function (x) {
      return (!phaseId || x.phase === phaseId) && state.done[x.id];
    }).length;
  }

  function doneCount(levelId) {
    return lessonList().filter(function (x) {
      return (!levelId || x.level === levelId) && state.done[x.id];
    }).length;
  }
  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.88;
    window.speechSynthesis.speak(u);
  }
  window.__speak = speak;
  function speakBtn(text) {
    return ' <button class="speak" aria-label="Nghe phát âm" onclick="__speak(&#39;' +
      attr(String(text).replace(/'/g, "\\'")) + '&#39;)">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS.volume + '</svg></button>';
  }

  /* ================= theme ================= */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    $('#themeBtn').innerHTML = ic(state.theme === 'dark' ? 'sun' : 'moon', 'ic ic-solo');
  }
  $('#themeBtn').onclick = function () {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    state.themeChosen = true;
    save(); applyTheme();
  };

  /* ================= drawer ================= */
  var sidebar = $('#sidebar'), scrim = $('#scrim');
  function openMenu() {
    sidebar.classList.add('open'); scrim.classList.add('on');
    document.body.classList.add('no-scroll');
  }
  function closeMenu() {
    sidebar.classList.remove('open'); scrim.classList.remove('on');
    document.body.classList.remove('no-scroll');
  }
  function toggleMenu() { sidebar.classList.contains('open') ? closeMenu() : openMenu(); }
  $('#menuBtn').onclick = toggleMenu;
  $('#tabLessons').onclick = toggleMenu;
  $('#closeMenu').onclick = closeMenu;
  scrim.onclick = closeMenu;

  var searchWrap = $('.search-wrap'), si = $('#globalSearch'), sr = $('#searchResults');
  $('#searchBtn').onclick = function () {
    searchWrap.classList.toggle('open');
    if (searchWrap.classList.contains('open')) si.focus();
  };

  /* ================= sidebar nav ================= */
  function buildNav(currentId) {
    var wrap = $('#lessonNav'); wrap.innerHTML = '';
    var cur = currentId ? L[currentId] : null;
    CUR.levels.forEach(function (lv) {
      var ls = lessonList().filter(function (x) { return x.level === lv.id; });
      var d = ls.filter(function (x) { return state.done[x.id]; }).length;
      var open = cur ? cur.level === lv.id : false;

      var g = document.createElement('div');
      g.className = 'nav-group' + (open ? ' open' : '');
      g.innerHTML =
        '<div class="nav-group-head"><span class="chev">' +
        '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></span>' +
        '<span class="lv-dot" style="background:' + lv.color + '"></span>' +
        '<span>' + lv.id + '</span><span class="lv-meta">' + d + '/' + ls.length + '</span></div>' +
        '<div class="nav-group-body"></div>';
      $('.nav-group-head', g).onclick = function () { g.classList.toggle('open'); };

      var body = $('.nav-group-body', g);
      ls.forEach(function (x) {
        var it = document.createElement('div');
        it.className = 'nav-lesson' + (state.done[x.id] ? ' done' : '') +
          (currentId === x.id ? ' active' : '');
        it.dataset.id = x.id;
        it.innerHTML = '<span class="num">' + x.no + '</span><span>' + esc(x.title) + '</span>';
        it.onclick = function () { location.hash = '#/lesson/' + x.id; closeMenu(); };
        body.appendChild(it);
      });
      wrap.appendChild(g);
    });
    buildIeltsNav(currentId);
    updateProgress();
  }

  function buildIeltsNav(currentId) {
    var wrap = $('#ieltsNav'); if (!wrap) return;
    wrap.innerHTML = '';
    var cur = currentId ? IT.lessons[currentId] : null;
    IT.phases.forEach(function (ph) {
      var ls = ieltsList().filter(function (x) { return x.phase === ph.id; });
      var d = ls.filter(function (x) { return state.done[x.id]; }).length;
      var open = cur ? cur.phase === ph.id : false;

      var g = document.createElement('div');
      g.className = 'nav-group' + (open ? ' open' : '');
      g.innerHTML =
        '<div class="nav-group-head"><span class="chev">' +
        '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></span>' +
        '<span class="lv-dot" style="background:' + ph.color + '"></span>' +
        '<span>' + ph.id + ' · ' + esc(ph.months) + '</span>' +
        '<span class="lv-meta">' + d + '/' + ls.length + '</span></div>' +
        '<div class="nav-group-body"></div>';
      $('.nav-group-head', g).onclick = function () { g.classList.toggle('open'); };

      var body = $('.nav-group-body', g);
      ls.forEach(function (x) {
        var it = document.createElement('div');
        it.className = 'nav-lesson' + (state.done[x.id] ? ' done' : '') +
          (currentId === x.id ? ' active' : '');
        it.innerHTML = '<span class="num">' + x.no + '</span><span>' + esc(x.title) + '</span>';
        it.onclick = function () { location.hash = '#/ielts/lesson/' + x.id; closeMenu(); };
        body.appendChild(it);
      });
      wrap.appendChild(g);
    });
  }
  function updateProgress() {
    var all = lessonList().length || 1, d = doneCount();
    var p = Math.round(d / all * 100);
    $('#progressPct').textContent = p + '% · ' + d + '/' + all;
    $('#progressFill').style.width = p + '%';

    var next = lessonList().filter(function (x) { return !state.done[x.id]; })[0] || lessonList()[0];
    var cta = $('#railCta');
    cta.href = '#/lesson/' + next.id;
    $('span', cta).textContent = d ? 'Học tiếp Buổi ' + next.no : 'Bắt đầu Buổi 1';
  }
  $('#resetProgress').onclick = function () {
    if (confirm('Xoá toàn bộ tiến độ đã học?')) { state.done = {}; save(); route(); }
  };

  /* ================= render blocks ================= */
  function vocabTable(vocab, showLesson) {
    var h = '<div class="table-scroll"><table class="vocab-table"><thead><tr>' +
      '<th>Từ</th><th>Phiên âm</th><th>Loại</th><th>Nghĩa &amp; ví dụ</th>' +
      (showLesson ? '<th>Buổi</th>' : '') + '</tr></thead><tbody>';
    vocab.forEach(function (r) {
      var v = showLesson ? r[1] : r, ls = showLesson ? r[0] : null;
      h += '<tr><td class="w">' + esc(v.w) + speakBtn(v.w) + '</td>' +
        '<td class="ipa">' + esc(v.ipa || '') + '</td>' +
        '<td class="c-pos"><span class="pos">' + esc(v.pos || '') + '</span></td>' +
        '<td class="c-vi">' + md(v.vi) +
        (v.ex ? '<span class="ex">' + md(v.ex) + (v.exvi ? ' — ' + md(v.exvi) : '') + '</span>' : '') +
        '</td>' +
        (showLesson ? '<td class="c-no"><a href="#/lesson/' + ls.id + '">' + ls.no + '</a></td>' : '') +
        '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  function grammarBlocks(gr) {
    var h = '';
    gr.forEach(function (g) {
      h += '<div class="gr-block">' + (g.t ? '<h3>' + md(g.t) + '</h3>' : '');
      if (g.intro) h += '<p>' + md(g.intro) + '</p>';
      if (g.formula) h += '<div class="formula">' + esc(g.formula) + '</div>';
      if (g.table) {
        h += '<div class="table-scroll"><table class="ref-table"><thead><tr>';
        g.table[0].forEach(function (c) { h += '<th>' + md(c) + '</th>'; });
        h += '</tr></thead><tbody>';
        g.table.slice(1).forEach(function (row) {
          h += '<tr>'; row.forEach(function (c) { h += '<td>' + md(c) + '</td>'; }); h += '</tr>';
        });
        h += '</tbody></table></div>';
      }
      if (g.ex && g.ex.length) {
        h += '<ul class="ex-list">';
        g.ex.forEach(function (e) {
          h += '<li>' + md(e[0]) + (e[1] ? '<br><span class="vi">' + md(e[1]) + '</span>' : '') + '</li>';
        });
        h += '</ul>';
      }
      (g.notes || []).forEach(function (n) {
        h += '<div class="note ' + (n.type || '') + '">' + md(n.text) + '</div>';
      });
      h += '</div>';
    });
    return h;
  }

  function phraseList(ps) {
    return ps.map(function (p) {
      return '<div class="phrase"><span class="en">' + md(p[0]) + speakBtn(p[0]) + '</span>' +
        '<span class="vi">' + md(p[1]) + '</span></div>';
    }).join('');
  }

  function exerciseBlock(exs) {
    var h = '<div class="ex-wrap">';
    exs.forEach(function (q, i) {
      h += '<div class="q"><div class="q-title"><span class="n">' + (i + 1) + '</span>' + md(q.q) + '</div>';
      if (q.opts) {
        h += '<div class="opts">';
        q.opts.forEach(function (o, j) {
          h += '<div class="opt" data-j="' + j + '">' + String.fromCharCode(65 + j) + '. ' + md(o) + '</div>';
        });
        h += '</div>';
      } else {
        h += '<input class="fill-in" placeholder="Nhập câu trả lời…" autocapitalize="off" autocomplete="off">';
      }
      h += '<div class="explain" style="display:none"></div></div>';
    });
    return h + '<div class="btn-row"><button class="btn primary act-check">' + ic('check') + 'Kiểm tra</button>' +
      '<button class="btn act-reset">' + ic('rotate') + 'Làm lại</button></div>' +
      '<div class="score-box"></div></div>';
  }

  function wireExercises(root, exs, onScore) {
    var wrap = $('.ex-wrap', root); if (!wrap) return;
    $$('.opt', wrap).forEach(function (o) {
      o.onclick = function () {
        $$('.opt', o.parentNode).forEach(function (x) { x.classList.remove('sel'); });
        o.classList.add('sel');
      };
    });
    $('.act-check', wrap).onclick = function () {
      var right = 0;
      $$('.q', wrap).forEach(function (qn, i) {
        var q = exs[i], ok = false;
        if (q.opts) {
          var sel = $('.opt.sel', qn);
          $$('.opt', qn).forEach(function (o, j) {
            o.classList.remove('correct', 'wrong');
            if (j === q.a) o.classList.add('correct');
            else if (sel === o) o.classList.add('wrong');
          });
          ok = !!sel && +sel.dataset.j === q.a;
        } else {
          var inp = $('.fill-in', qn);
          if (inp.dataset.raw != null) inp.value = inp.dataset.raw; else inp.dataset.raw = inp.value;
          var val = (inp.value || '').trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?]+$/, '');
          var answers = (Array.isArray(q.a) ? q.a : [q.a]).map(function (x) {
            return String(x).trim().toLowerCase().replace(/[.!?]+$/, '');
          });
          ok = answers.indexOf(val) > -1;
          inp.classList.remove('correct', 'wrong');
          inp.classList.add(ok ? 'correct' : 'wrong');
          if (!ok) inp.value = inp.value + '   ✗ → ' + (Array.isArray(q.a) ? q.a[0] : q.a);
        }
        if (ok) right++;
        var exd = $('.explain', qn);
        if (q.ex) { exd.innerHTML = icS('bulb') + md(q.ex); exd.style.display = 'block'; }
      });
      var box = $('.score-box', wrap);
      box.className = 'score-box show';
      if (onScore) { box.innerHTML = onScore(right, exs.length); return; }
      var pct = Math.round(right / exs.length * 100);
      box.innerHTML = ic(pct >= 80 ? 'trophy' : pct >= 50 ? 'thumb' : 'info') +
        'Kết quả: <b>' + right + '/' + exs.length + '</b> (' + pct + '%) — ' +
        (pct >= 80 ? 'Xuất sắc, sang buổi tiếp theo được rồi!'
          : pct >= 50 ? 'Khá ổn. Xem lại các câu sai rồi làm lại nhé.'
            : 'Nên đọc lại phần Ngữ pháp của buổi này trước khi đi tiếp.');
    };
    $('.act-reset', wrap).onclick = function () {
      $$('.opt', wrap).forEach(function (o) { o.className = 'opt'; });
      $$('.fill-in', wrap).forEach(function (o) { o.value = ''; o.className = 'fill-in'; delete o.dataset.raw; });
      $$('.explain', wrap).forEach(function (o) { o.style.display = 'none'; });
      $('.score-box', wrap).className = 'score-box';
      window.scrollTo({ top: root.offsetTop - 80, behavior: 'smooth' });
    };
  }

  /* ================= pages ================= */
  function pageHome() {
    var all = lessonList();
    var nv = all.reduce(function (s, x) { return s + (x.vocab || []).length; }, 0);
    var ng = all.reduce(function (s, x) { return s + (x.grammar || []).length; }, 0);
    var nq = all.reduce(function (s, x) { return s + (x.exercises || []).length; }, 0);
    var d = doneCount();
    var next = all.filter(function (x) { return !state.done[x.id]; })[0] || all[0];

    var h = '<section class="hero"><h1>Học tiếng Anh từ con số 0 đến nâng cao</h1>' +
      '<p>Một lộ trình duy nhất, 40 buổi có thứ tự, biên soạn theo khung CEFR và các bộ học liệu chuẩn quốc tế. ' +
      'Mỗi buổi đủ 4 phần: từ vựng có phiên âm → ngữ pháp có công thức → mẫu câu giao tiếp → bài tập tự chấm.</p>' +
      '<div class="btn-row">' +
      '<button class="btn yellow" onclick="location.hash=\'#/lesson/' + next.id + '\'">' + ic('play') +
      (d ? 'Học tiếp Buổi ' + next.no : 'Bắt đầu Buổi 1') + '</button>' +
      '<button class="btn" onclick="location.hash=\'#/exam\'">' + ic('clipboard') + 'Kiểm tra trình độ</button>' +
      '<button class="btn" onclick="location.hash=\'#/roadmap\'">' + ic('route') + 'Xem lộ trình</button></div>' +
      '<div class="stat-row">' +
      '<div class="stat"><b>' + all.length + '</b><span>buổi học</span></div>' +
      '<div class="stat"><b>' + nv + '</b><span>từ có IPA</span></div>' +
      '<div class="stat"><b>' + ng + '</b><span>điểm ngữ pháp</span></div>' +
      '<div class="stat"><b>' + nq + '</b><span>câu bài tập</span></div>' +
      '<div class="stat"><b>5</b><span>cấp độ CEFR</span></div>' +
      '<div class="stat"><b>' + d + '</b><span>buổi đã xong</span></div>' +
      '</div></section>';

    h += '<div class="section-head"><div><h2>Chọn cấp độ của bạn</h2>' +
      '<span class="sub">5 cấp độ theo khung CEFR, học lần lượt từ trái sang phải</span></div>' +
      '<span class="side">Chưa rõ mình ở đâu? <a href="#/exam">Làm bài kiểm tra 30 câu ' +
      icS('right') + '</a></span></div><div class="covers">';
    CUR.levels.forEach(function (lv) {
      var ls = all.filter(function (x) { return x.level === lv.id; });
      var dn = ls.filter(function (x) { return state.done[x.id]; }).length;
      var pct = Math.round(dn / ls.length * 100);
      h += '<a class="cover cv-' + lv.id.toLowerCase() + '" href="#/level/' + lv.id + '">' +
        '<span class="cover-badge">Buổi ' + lv.range[0] + '–' + lv.range[1] + '</span>' +
        '<span class="cover-lv">' + lv.id + '</span>' +
        '<span class="cover-title">' + esc(lv.short) + '</span>' +
        '<span class="cover-bar"><div style="width:' + pct + '%"></div></span>' +
        '<span class="cover-foot">' + dn + '/' + ls.length + ' buổi · ' + lv.words + '</span></a>';
    });
    h += '</div>';

    h += '<div class="section-head"><div><h2>Học mỗi buổi thế nào cho hiệu quả</h2>' +
      '<span class="sub">Quy trình 6 bước, khoảng 60–70 phút mỗi buổi</span></div></div>' +
      '<div class="grid grid-3">';
    CUR.method.forEach(function (m, i) {
      h += '<article class="card step-card"><span class="step-n">' + (i + 1) + '</span>' +
        '<h3>' + esc(m.t.replace(/^\d+\.\s*/, '')) + '</h3><p>' + esc(m.d) + '</p></article>';
    });
    h += '</div>';

    h += '<div class="section-head"><div><h2>Nguồn tổng hợp</h2>' +
      '<span class="sub">Biên soạn theo chuẩn của các bộ học liệu quốc tế</span></div></div>' +
      '<div class="card"><h3>' + ic('compass') + 'Tham chiếu</h3>' +
      '<p class="muted" style="font-size:.88rem">Nội dung được biên soạn lại theo chuẩn và cách tổ chức của các bộ học liệu sau (không sao chép nguyên văn):</p><ul>';
    CUR.sources.forEach(function (s) {
      h += '<li><b>' + esc(s[0]) + '</b> — <span class="muted">' + esc(s[1]) + '</span></li>';
    });
    return h + '</ul></div>';
  }

  function pageRoadmap() {
    var h = '<h1>Lộ trình 40 buổi</h1>' +
      '<p class="muted">Học đúng thứ tự. Mỗi buổi 60–70 phút, tuần 3–4 buổi. Hết lộ trình khoảng 8–10 tháng cho người mất gốc.</p>';
    CUR.levels.forEach(function (lv) {
      var ls = lessonList().filter(function (x) { return x.level === lv.id; });
      h += '<section class="card"><h2><span class="tag ' + lv.id.toLowerCase() + '">' + lv.id + '</span> ' +
        esc(lv.name) + '</h2><p>' + esc(lv.desc) + '</p>' +
        '<div class="muted" style="font-size:.85rem">' + icS('clock') + lv.hours +
        ' &nbsp;·&nbsp; ' + icS('letters') + lv.words + '</div>' +
        '<h3 style="margin-top:16px">' + ic('target') + 'Sau cấp độ này bạn làm được</h3><ul>';
      lv.can.forEach(function (c) { h += '<li>' + esc(c) + '</li>'; });
      h += '</ul><h3>' + ic('list') + 'Các buổi</h3><div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th style="width:58px">Buổi</th><th>Tên buổi</th><th>Trọng tâm ngữ pháp</th></tr></thead><tbody>';
      ls.forEach(function (x) {
        h += '<tr><td><a href="#/lesson/' + x.id + '">' + x.no + '</a></td>' +
          '<td><a href="#/lesson/' + x.id + '">' + esc(x.title) + '</a>' +
          (state.done[x.id] ? ' <span style="color:var(--green)">' + icS('check') + '</span>' : '') + '</td>' +
          '<td class="muted">' + esc((x.grammar || []).map(function (g) {
            return g.t.replace(/^\d+\.\s*/, '').replace(/\*/g, '');
          }).join(' · ') || '—') + '</td></tr>';
      });
      h += '</tbody></table></div></section>';
    });
    return h;
  }

  function pageLevel(id) {
    var lv = levelOf(id); if (!lv) return '<p>Không tìm thấy cấp độ.</p>';
    var ls = lessonList().filter(function (x) { return x.level === id; });
    var h = '<div class="crumb"><a href="#/roadmap">Lộ trình</a> / ' + lv.id + '</div>' +
      '<h1>' + esc(lv.name) + '</h1><p>' + esc(lv.desc) + '</p>' +
      '<div class="card"><h3>' + ic('target') + 'Mục tiêu đầu ra</h3><ul>';
    lv.can.forEach(function (c) { h += '<li>' + esc(c) + '</li>'; });
    h += '</ul></div><div class="grid grid-2">';
    ls.forEach(function (x) {
      h += '<article class="card level-card" onclick="location.hash=\'#/lesson/' + x.id + '\'">' +
        '<div class="muted" style="font-size:.75rem;letter-spacing:.06em;font-weight:800">BUỔI ' + x.no +
        (state.done[x.id] ? ' · <span style="color:var(--green)">ĐÃ HỌC</span>' : '') + '</div>' +
        '<h3 style="margin:6px 0">' + esc(x.title) + '</h3>' +
        '<p class="lc-desc">' + esc(x.subtitle || '') + '</p>' +
        '<div class="lc-meta"><span>' + icS('bookOpen') + (x.vocab || []).length + ' từ</span>' +
        '<span>' + icS('type') + (x.grammar || []).length + ' điểm NP</span>' +
        '<span>' + icS('pencil') + (x.exercises || []).length + ' bài tập</span></div></article>';
    });
    return h + '</div>';
  }

  function pageLesson(ls, tab) {
    var lv = levelOf(ls.level), all = lessonList(), idx = all.indexOf(ls);
    var h = '<div class="lesson-head">' +
      '<div class="crumb"><a href="#/level/' + ls.level + '">' + esc(lv.name) + '</a> / Buổi ' + ls.no + '</div>' +
      '<h1><span class="tag ' + ls.level.toLowerCase() + '">' + ls.level + '</span> ' + esc(ls.title) + '</h1>' +
      '<p class="muted">' + esc(ls.subtitle || '') + '</p>';
    if (ls.goals) {
      h += '<div class="goal-box"><b>' + ic('target') + 'Kết thúc buổi này bạn sẽ:</b><ul>';
      ls.goals.forEach(function (g) { h += '<li>' + esc(g) + '</li>'; });
      h += '</ul></div>';
    }
    h += '</div><div class="tabs">';
    [['vocab', 'bookOpen', 'Từ vựng', (ls.vocab || []).length],
     ['grammar', 'type', 'Ngữ pháp', (ls.grammar || []).length],
     ['phrases', 'chat', 'Mẫu câu', (ls.phrases || []).length],
     ['exercises', 'pencil', 'Bài tập', (ls.exercises || []).length]]
      .forEach(function (t) {
        h += '<button class="tab' + (tab === t[0] ? ' active' : '') + '" data-tab="' + t[0] + '">' +
          ic(t[1]) + t[2] + ' <span class="muted">' + t[3] + '</span></button>';
      });
    h += '</div><div id="tabBody"></div>';

    h += '<div class="lesson-footer">';
    h += idx > 0
      ? '<button class="btn" onclick="location.hash=\'#/lesson/' + all[idx - 1].id + '\'">' +
        ic('left') + 'Buổi ' + all[idx - 1].no + '</button>'
      : '<span class="spacer"></span>';
    h += '<button class="btn ' + (state.done[ls.id] ? '' : 'primary') + '" id="doneBtn">' + ic('check') +
      (state.done[ls.id] ? 'Đã hoàn thành' : 'Đánh dấu đã học xong') + '</button>';
    h += idx < all.length - 1
      ? '<button class="btn" onclick="location.hash=\'#/lesson/' + all[idx + 1].id + '\'">Buổi ' +
        all[idx + 1].no + ic('right') + '</button>'
      : '<span class="spacer"></span>';
    return h + '</div>';
  }

  function renderTab(ls, tab) {
    var body = $('#tabBody'); if (!body) return;
    var h = '';
    if (tab === 'vocab') {
      h = '<div class="card"><h2>' + ic('bookOpen') + 'Từ vựng buổi ' + ls.no + '</h2>' +
        '<p class="muted" style="font-size:.87rem">Bấm nút loa để nghe và nhắc lại thành tiếng. Học theo cụm ví dụ, đừng học từ rời.</p>' +
        vocabTable(ls.vocab || []) + '</div>' +
        '<div class="btn-row"><button class="btn primary" onclick="location.hash=\'#/flashcards/' + ls.id + '\'">' +
        ic('layers') + 'Luyện flashcard bộ từ này</button></div>';
    } else if (tab === 'grammar') {
      if (ls.pron) h += '<div class="card"><h2>' + ic('mic') + 'Phát âm: ' + md(ls.pron.t) + '</h2>' +
        grammarBlocks([{ intro: ls.pron.intro, formula: ls.pron.formula, table: ls.pron.table, ex: ls.pron.ex, notes: ls.pron.notes, t: '' }]) + '</div>';
      h += '<div class="card"><h2>' + ic('type') + 'Ngữ pháp trọng tâm</h2>' + grammarBlocks(ls.grammar || []) + '</div>';
    } else if (tab === 'phrases') {
      h = '<div class="card"><h2>' + ic('chat') + 'Mẫu câu giao tiếp</h2>' +
        '<p class="muted" style="font-size:.87rem">Học thuộc nguyên cụm — đây là phần giúp bạn nói được ngay.</p>' +
        phraseList(ls.phrases || []) + '</div>';
      if (ls.dialogue) {
        h += '<div class="card"><h2>' + ic('chat') + 'Hội thoại mẫu</h2>';
        ls.dialogue.forEach(function (d) {
          h += '<div class="phrase"><span class="en"><b>' + esc(d[0]) + ':</b> ' + md(d[1]) +
            speakBtn(d[1]) + '</span><span class="vi">' + md(d[2] || '') + '</span></div>';
        });
        h += '</div>';
      }
    } else {
      h = '<div class="card"><h2>' + ic('pencil') + 'Bài tập</h2>' +
        '<p class="muted" style="font-size:.87rem">Làm hết rồi bấm <b>Kiểm tra</b>. Phần điền từ: gõ đúng dạng từ, không cần viết hoa.</p>' +
        exerciseBlock(ls.exercises || []) + '</div>';
    }
    body.innerHTML = h;
    if (tab === 'exercises') wireExercises(body, ls.exercises || []);
  }

  function pageVocab() {
    var h = '<h1>Kho từ vựng</h1><p class="muted">Toàn bộ từ vựng của 40 buổi. Dùng ô tìm kiếm ở trên để tra nhanh một từ bất kỳ.</p>' +
      '<div class="chip-row" id="vChips"><span class="chip active" data-lv="all">Tất cả</span>';
    CUR.levels.forEach(function (lv) { h += '<span class="chip" data-lv="' + lv.id + '">' + lv.id + '</span>'; });
    return h + '</div><div id="vBody"></div>';
  }
  function renderVocabBody(lvId) {
    var rows = [];
    lessonList().forEach(function (ls) {
      if (lvId !== 'all' && ls.level !== lvId) return;
      (ls.vocab || []).forEach(function (v) { rows.push([ls, v]); });
    });
    $('#vBody').innerHTML = '<div class="card">' +
      '<div class="muted" style="font-size:.85rem;margin-bottom:10px">' + icS('bookOpen') + rows.length + ' từ</div>' +
      vocabTable(rows, true) + '</div>';
  }

  function pageGrammar() {
    var h = '<h1>Tra ngữ pháp</h1><p class="muted">Toàn bộ điểm ngữ pháp trong chương trình, xếp theo thứ tự học.</p>';
    CUR.levels.forEach(function (lv) {
      var items = [];
      lessonList().filter(function (x) { return x.level === lv.id; }).forEach(function (ls) {
        (ls.grammar || []).forEach(function (g) { items.push([ls, g]); });
      });
      if (!items.length) return;
      h += '<section class="card"><h2><span class="tag ' + lv.id.toLowerCase() + '">' + lv.id + '</span> ' +
        esc(lv.short) + '</h2><ul class="ex-list">';
      items.forEach(function (it) {
        h += '<li><b>' + md(it[1].t) + '</b> ' +
          '<a href="#/lesson/' + it[0].id + '/grammar" class="muted" style="font-size:.82rem">Buổi ' +
          it[0].no + ' ' + icS('right') + '</a>' +
          (it[1].formula ? '<br><span class="vi">' + esc(it[1].formula.split('\n')[0]) + '</span>' : '') + '</li>';
      });
      h += '</ul></section>';
    });
    if (REF.tenses) {
      h += '<section class="card"><h2>' + ic('chart') + 'Bảng 12 thì tiếng Anh</h2><div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th>Thì</th><th>Công thức</th><th>Dùng khi</th><th>Ví dụ</th></tr></thead><tbody>';
      REF.tenses.forEach(function (t) {
        h += '<tr><td><b>' + esc(t[0]) + '</b></td><td><code>' + esc(t[1]) + '</code></td>' +
          '<td>' + esc(t[2]) + '</td><td><i>' + esc(t[3]) + '</i></td></tr>';
      });
      h += '</tbody></table></div></section>';
    }
    if (REF.irregular) {
      h += '<section class="card"><h2>' + ic('list') + 'Động từ bất quy tắc (' + REF.irregular.length + ')</h2>' +
        '<div class="table-scroll"><table class="ref-table"><thead><tr><th>V1</th><th>V2</th><th>V3</th><th>Nghĩa</th></tr></thead><tbody>';
      REF.irregular.forEach(function (r) {
        h += '<tr><td><b>' + esc(r[0]) + '</b></td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) +
          '</td><td class="muted">' + esc(r[3]) + '</td></tr>';
      });
      h += '</tbody></table></div></section>';
    }
    return h;
  }

  /* ----- flashcards ----- */
  var fc = { deck: [], i: 0, flipped: false };
  function pageFlash(scope) {
    var h = '<h1>Flashcard</h1><p class="muted">Bấm vào thẻ để lật, vuốt trái/phải để chuyển. Học 20 thẻ mỗi lần, ôn lại sau 1 – 3 – 7 – 14 – 30 ngày.</p>' +
      '<div class="chip-row" id="fChips"><span class="chip' + (scope === 'all' ? ' active' : '') + '" data-s="all">Tất cả</span>';
    CUR.levels.forEach(function (lv) {
      h += '<span class="chip' + (scope === lv.id ? ' active' : '') + '" data-s="' + lv.id + '">' + lv.id + '</span>';
    });
    return h + '</div><div class="fc-stage"><div class="fc-card" id="fcCard"></div>' +
      '<div class="fc-meta" id="fcMeta"></div>' +
      '<div class="btn-row fc-btn-row" style="justify-content:center">' +
      '<button class="btn" id="fcPrev" aria-label="Thẻ trước">' + ic('left', 'ic ic-solo') + '</button>' +
      '<button class="btn primary" id="fcNext">Thẻ tiếp' + ic('right') + '</button>' +
      '<button class="btn" id="fcShuffle" aria-label="Xáo thẻ">' + ic('shuffle', 'ic ic-solo') + '</button>' +
      '<button class="btn" id="fcSpeak" aria-label="Nghe">' + ic('volume', 'ic ic-solo') + '</button></div></div>';
  }
  function buildDeck(scope) {
    var d = [];
    lessonList().forEach(function (ls) {
      if (scope && scope !== 'all' && scope !== ls.level && scope !== ls.id) return;
      (ls.vocab || []).forEach(function (v) { d.push(v); });
    });
    fc.deck = d; fc.i = 0; fc.flipped = false;
  }
  function drawCard() {
    var c = $('#fcCard'); if (!c) return;
    if (!fc.deck.length) { c.innerHTML = '<div class="muted">Không có thẻ nào.</div>'; return; }
    var v = fc.deck[fc.i];
    c.innerHTML = fc.flipped
      ? '<div class="back">' + md(v.vi) +
        (v.ex ? '<span class="ex">' + md(v.ex) + (v.exvi ? '<br>' + md(v.exvi) : '') + '</span>' : '') + '</div>'
      : '<div class="front">' + esc(v.w) + '<span class="ipa">' + esc(v.ipa || '') + '</span>' +
        '<div class="fc-hint">bấm để lật</div></div>';
    $('#fcMeta').textContent = 'Thẻ ' + (fc.i + 1) + ' / ' + fc.deck.length;
  }
  function wireFlash() {
    var c = $('#fcCard'); if (!c) return;
    c.onclick = function () { fc.flipped = !fc.flipped; drawCard(); };
    $('#fcNext').onclick = function () { fc.i = (fc.i + 1) % fc.deck.length; fc.flipped = false; drawCard(); };
    $('#fcPrev').onclick = function () { fc.i = (fc.i - 1 + fc.deck.length) % fc.deck.length; fc.flipped = false; drawCard(); };
    $('#fcShuffle').onclick = function () {
      for (var i = fc.deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)), t = fc.deck[i]; fc.deck[i] = fc.deck[j]; fc.deck[j] = t;
      }
      fc.i = 0; fc.flipped = false; drawCard();
    };
    $('#fcSpeak').onclick = function () { speak(fc.deck[fc.i].w); };
    $$('#fChips .chip').forEach(function (ch) {
      ch.onclick = function () {
        $$('#fChips .chip').forEach(function (x) { x.classList.remove('active'); });
        ch.classList.add('active'); buildDeck(ch.dataset.s); drawCard();
      };
    });
    var x0 = null;
    c.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    c.addEventListener('touchend', function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 55) $(dx < 0 ? '#fcNext' : '#fcPrev').click();
      x0 = null;
    }, { passive: true });
    drawCard();
  }

  /* ----- trình đọc Markdown cho bộ tài liệu ----- */
  function mdInline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(/(^|[^*])\*([^*\n]+?)\*/g, '$1<i>$2</i>')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  function mdRow(l) {
    return l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|')
      .map(function (x) { return x.trim(); });
  }
  function mdToHtml(src) {
    var lines = String(src).replace(/\r\n?/g, '\n').split('\n');
    var out = [], i = 0;
    var stop = /^(#{1,6}\s|\s*[-*+]\s|\s*\d+\.\s|\s*>|```|\s*\||-{3,}\s*$)/;

    while (i < lines.length) {
      var l = lines[i];

      if (/^```/.test(l)) {
        var buf = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
        i++;
        out.push('<pre><code>' + esc(buf.join('\n')) + '</code></pre>');
        continue;
      }
      if (/^\s*$/.test(l)) { i++; continue; }
      if (/^\s*(-{3,}|\*{3,})\s*$/.test(l)) { out.push('<hr>'); i++; continue; }

      var hm = l.match(/^(#{1,6})\s+(.*)$/);
      if (hm) {
        var lv = Math.min(hm[1].length, 4);
        out.push('<h' + lv + '>' + mdInline(hm[2]) + '</h' + lv + '>');
        i++; continue;
      }

      if (/^\s*\|/.test(l) && i + 1 < lines.length && /^[\s|:-]+$/.test(lines[i + 1]) && /-/.test(lines[i + 1])) {
        var head = mdRow(l); i += 2;
        var t = '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
          head.map(function (c) { return '<th>' + mdInline(c) + '</th>'; }).join('') +
          '</tr></thead><tbody>';
        while (i < lines.length && /^\s*\|/.test(lines[i])) {
          t += '<tr>' + mdRow(lines[i++]).map(function (c) {
            return '<td>' + mdInline(c) + '</td>';
          }).join('') + '</tr>';
        }
        out.push(t + '</tbody></table></div>');
        continue;
      }

      if (/^\s*>/.test(l)) {
        var bq = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) bq.push(lines[i++].replace(/^\s*>\s?/, ''));
        out.push('<blockquote>' + mdInline(bq.join(' ')) + '</blockquote>');
        continue;
      }

      if (/^\s*[-*+]\s+/.test(l)) {
        var ul = [];
        while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i]))
          ul.push(lines[i++].replace(/^\s*[-*+]\s+/, '').replace(/^\[([ xX])\]\s*/, function (m, c) {
            return c === ' ' ? '☐ ' : '☑ ';
          }));
        out.push('<ul>' + ul.map(function (x) { return '<li>' + mdInline(x) + '</li>'; }).join('') + '</ul>');
        continue;
      }

      if (/^\s*\d+\.\s+/.test(l)) {
        var ol = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i]))
          ol.push(lines[i++].replace(/^\s*\d+\.\s+/, ''));
        out.push('<ol>' + ol.map(function (x) { return '<li>' + mdInline(x) + '</li>'; }).join('') + '</ol>');
        continue;
      }

      var p = [];
      while (i < lines.length && !/^\s*$/.test(lines[i]) && !stop.test(lines[i])) p.push(lines[i++]);
      if (p.length) out.push('<p>' + mdInline(p.join(' ')) + '</p>');
      else i++;
    }
    return out.join('\n');
  }

  function pageDoc(file) {
    var meta = DOCS.filter(function (d) { return d[0] === file; })[0];
    var title = meta ? meta[2] : file;
    var c = $('#content');
    c.innerHTML = '<div class="crumb"><a href="#/docs">Bộ tài liệu</a> / ' + esc(title) + '</div>' +
      '<h1>' + esc(title) + '</h1>' +
      '<div class="btn-row" style="margin-top:0">' +
      '<button class="btn" onclick="location.hash=\'#/docs\'">' + ic('left') + 'Tất cả tài liệu</button>' +
      '<a class="btn" href="docs/' + encodeURIComponent(file) + '" download>' + ic('folder') + 'Tải file gốc</a>' +
      '<button class="btn" onclick="window.print()">' + ic('printer') + 'In / lưu PDF</button></div>' +
      '<div class="card md-body" id="mdBody"><p class="muted">Đang tải tài liệu…</p></div>';

    fetch('docs/' + encodeURIComponent(file))
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        return r.arrayBuffer();
      })
      .then(function (buf) {
        var text = new TextDecoder('utf-8').decode(buf);
        $('#mdBody').innerHTML = mdToHtml(text);
      })
      .catch(function () {
        $('#mdBody').innerHTML =
          '<h3>' + ic('info') + 'Không đọc được tài liệu</h3>' +
          '<p>Trình duyệt chặn việc đọc file khi mở web bằng đường dẫn <code>file://</code>. ' +
          'Hãy chạy web qua một máy chủ cục bộ rồi mở lại:</p>' +
          '<pre><code>cd ~/Desktop/english-hub\npython3 -m http.server 5173</code></pre>' +
          '<p>Sau đó vào <b>http://localhost:5173</b>. Hoặc mở thẳng file ' +
          '<code>docs/' + esc(file) + '</code> bằng trình soạn thảo văn bản.</p>';
      });
  }

  function pageExam() {
    return '<h1>Kiểm tra trình độ đầu vào</h1>' +
      '<p class="muted">30 câu, độ khó tăng dần từ A1 đến C1, khoảng 15 phút. Làm hết rồi bấm Kiểm tra để biết nên bắt đầu từ buổi nào.</p>' +
      '<div class="card">' + exerciseBlock(REF.placement || []) + '</div>';
  }

  var DOCS = [
      ['00-huong-dan-hoc.md', 'compass', 'Hướng dẫn học & phương pháp', 'Cách dùng web, lịch học mẫu 8 tháng, lịch ôn ngắt quãng, 7 lỗi người Việt hay mắc'],
      ['01-phat-am-ipa.md', 'mic', 'Phát âm & bảng IPA đầy đủ', '44 âm, trọng âm từ và câu, đuôi -s/-ed, nối âm – nuốt âm'],
      ['02-ngu-phap-toan-tap.md', 'type', 'Ngữ pháp toàn tập A1–C1', '12 thì, bị động, mệnh đề quan hệ, tường thuật, điều kiện, đảo ngữ'],
      ['03-tu-vung-theo-chu-de.md', 'bookOpen', 'Từ vựng theo 30 chủ đề', 'Hơn 900 từ có phiên âm, nhóm theo chủ đề đời sống & công việc'],
      ['04-dong-tu-bat-quy-tac.md', 'list', 'Động từ bất quy tắc', '94 động từ V1–V2–V3 xếp theo nhóm âm, kèm lịch học 2 tuần'],
      ['05-phrasal-verbs-idioms.md', 'link', 'Phrasal verbs & thành ngữ', '150 cụm động từ, collocation và idiom thông dụng nhất'],
      ['06-mau-cau-giao-tiep.md', 'chat', '500 mẫu câu giao tiếp', '25 tình huống: chào hỏi, đi ăn, sân bay, công sở, phỏng vấn…'],
      ['07-luyen-thi-ielts-toeic.md', 'cap', 'Định hướng luyện thi', 'Quy đổi CEFR–IELTS–TOEIC, khung Writing Task 1/2, chiến lược Speaking'],
      ['08-bai-tap-tong-hop.md', 'pencil', 'Bài tập tổng hợp', '200 câu theo 10 chuyên đề, có đáp án và giải thích']
  ];

  function pageDocs() {
    var h = '<h1>Bộ tài liệu đi kèm</h1>' +
      '<p class="muted">Bấm vào một tài liệu để đọc ngay trong web. File gốc định dạng Markdown nằm trong thư mục <code>docs/</code>, cạnh file index.html.</p>' +
      '<div class="grid grid-2">';
    DOCS.forEach(function (d) {
      h += '<a class="doc-item" href="#/doc/' + d[0] + '">' +
        '<span class="doc-ic">' + ic(d[1], 'ic ic-solo') + '</span>' +
        '<span><strong>' + esc(d[2]) + '</strong><small>' + esc(d[3]) + '</small>' +
        '<small class="path">docs/' + d[0] + '</small></span></a>';
    });
    return h + '</div><div class="card" style="margin-top:18px"><h3>' + ic('printer') + 'In tài liệu</h3>' +
      '<p class="muted" style="margin:0;font-size:.9rem">Mở một tài liệu hoặc buổi học bất kỳ rồi bấm <b>Ctrl/Cmd + P</b> — trang đã có sẵn CSS in ấn, phần menu sẽ tự ẩn.</p></div>';
  }

  /* ================= PHÁT ÂM (IPA) ================= */
  function soundCard(x) {
    var w = x.words.join(', ');
    return '<div class="snd' + (x.hard ? ' snd-hard' : '') + (x.star ? ' snd-star' : '') + '" ' +
      'onclick="__speak(&#39;' + attr(x.words.join('. ')) + '&#39;)">' +
      '<div class="snd-top"><b class="snd-ipa">' + esc(x.ipa) + '</b>' +
      '<span class="speak">' + ic('volume', 'ic ic-solo') + '</span></div>' +
      '<div class="snd-words">' + esc(w) + '</div>' +
      '<div class="snd-vi">' + md(x.vi) + '</div>' +
      (x.pair ? '<div class="snd-pair">cặp với ' + esc(x.pair) + '</div>' : '') + '</div>';
  }
  function soundGroups(groups) {
    return groups.map(function (g) {
      return '<section class="card"><h2>' + ic('mic') + esc(g.g) +
        ' <span class="muted" style="font-weight:500;font-size:.8rem">(' + g.items.length + ' âm)</span></h2>' +
        (g.note ? '<p class="muted" style="font-size:.88rem">' + esc(g.note) + '</p>' : '') +
        '<div class="snd-grid">' + g.items.map(soundCard).join('') + '</div></section>';
    }).join('');
  }

  function pagePron(tab) {
    tab = tab || 'vowels';
    var tabs = [['vowels', 'mic', 'Nguyên âm', 20], ['consonants', 'volume', 'Phụ âm', 24],
                ['pairs', 'shuffle', 'Cặp âm', PR.minimalPairs.length],
                ['endings', 'list', 'Đuôi -s / -ed', 6],
                ['stress', 'chart', 'Trọng âm', 0], ['linking', 'link', 'Nối âm', 0],
                ['errors', 'info', 'Lỗi hay mắc', PR.commonErrors.length]];

    var h = '<h1>' + ic('mic') + 'Phát âm — Bảng IPA</h1>' +
      '<p class="muted">Tiếng Anh có 26 chữ cái nhưng <b>44 âm</b>. Bấm vào bất kỳ ô âm nào để nghe các từ ví dụ. ' +
      'Luyện 15 phút mỗi ngày theo lịch ở cuối trang.</p><div class="chip-row" id="pChips">';
    tabs.forEach(function (t) {
      h += '<span class="chip' + (tab === t[0] ? ' active' : '') + '" data-p="' + t[0] + '">' +
        ic(t[1], 'ic ic-sm') + t[2] + (t[3] ? ' <span class="muted">' + t[3] + '</span>' : '') + '</span>';
    });
    h += '</div><div id="pBody"></div>';
    return h;
  }

  function renderPron(tab) {
    var b = $('#pBody'); if (!b) return;
    var h = '';

    if (tab === 'vowels') {
      h = soundGroups(PR.vowels);
    } else if (tab === 'consonants') {
      h = soundGroups(PR.consonants);
    } else if (tab === 'pairs') {
      h = '<div class="card"><h2>' + ic('shuffle') + 'Cặp âm tối thiểu</h2>' +
        '<p class="muted" style="font-size:.88rem">Hai từ chỉ khác nhau đúng một âm. Đọc to từng cặp 5 lần, ' +
        'bấm vào cặp để nghe. Đây là bài luyện hiệu quả nhất để sửa âm sai.</p>';
      PR.minimalPairs.forEach(function (g) {
        h += '<h3 style="margin-top:18px">' + esc(g.t) + '</h3><div class="pair-row">';
        g.pairs.forEach(function (pr) {
          h += '<button class="pair" onclick="__speak(&#39;' + attr(pr[0] + '. ' + pr[1]) + '&#39;)">' +
            '<span>' + esc(pr[0]) + '</span><i>—</i><span>' + esc(pr[1]) + '</span></button>';
        });
        h += '</div>';
      });
      h += '</div>';
    } else if (tab === 'endings') {
      h = '<div class="card"><h2>' + ic('list') + 'Ba cách đọc đuôi -S</h2>' +
        '<p class="muted" style="font-size:.88rem">Áp dụng cho danh từ số nhiều và động từ ngôi thứ ba số ít.</p>' +
        '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th style="width:80px">Đọc là</th><th>Khi âm trước là</th><th>Ví dụ</th></tr></thead><tbody>';
      PR.endings.s.forEach(function (r) {
        h += '<tr><td><b class="ipa">' + esc(r.read) + '</b></td><td>' + esc(r.when) + '</td>' +
          '<td>' + r.words.map(function (w) {
            return '<button class="wchip" onclick="__speak(&#39;' + attr(w) + '&#39;)">' + esc(w) + '</button>';
          }).join('') + '</td></tr>';
      });
      h += '</tbody></table></div></div>' +
        '<div class="card"><h2>' + ic('list') + 'Ba cách đọc đuôi -ED</h2>' +
        '<p class="muted" style="font-size:.88rem">Áp dụng cho quá khứ đơn và quá khứ phân từ của động từ có quy tắc.</p>' +
        '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th style="width:80px">Đọc là</th><th>Khi âm trước là</th><th>Ví dụ</th></tr></thead><tbody>';
      PR.endings.ed.forEach(function (r) {
        h += '<tr><td><b class="ipa">' + esc(r.read) + '</b></td><td>' + esc(r.when) + '</td>' +
          '<td>' + r.words.map(function (w) {
            return '<button class="wchip" onclick="__speak(&#39;' + attr(w) + '&#39;)">' + esc(w) + '</button>';
          }).join('') + '</td></tr>';
      });
      h += '</tbody></table></div>' +
        '<div class="note warn">Chỉ <b>/t/</b> và <b>/d/</b> mới tạo thêm âm tiết. ' +
        '<i>Watched</i> chỉ có <b>1</b> âm tiết /wɒtʃt/, không phải “watch-ed”.</div></div>';
    } else if (tab === 'stress') {
      h = '<div class="card"><h2>' + ic('chart') + 'Trọng âm theo loại từ</h2>' +
        '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th>Loại từ</th><th>Quy tắc</th><th>Ví dụ</th></tr></thead><tbody>';
      PR.stress.byType.forEach(function (r) {
        h += '<tr><td>' + md(r[0]) + '</td><td>' + md(r[1]) + '</td><td>' + md(r[2]) + '</td></tr>';
      });
      h += '</tbody></table></div></div>' +
        '<div class="card"><h2>' + ic('chart') + 'Trọng âm theo hậu tố</h2>' +
        '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th>Hậu tố</th><th>Trọng âm rơi vào</th><th>Ví dụ</th></tr></thead><tbody>';
      PR.stress.bySuffix.forEach(function (r) {
        h += '<tr><td><code>' + esc(r[0]) + '</code></td><td>' + md(r[1]) + '</td><td>' + md(r[2]) + '</td></tr>';
      });
      h += '</tbody></table></div></div>' +
        '<div class="card"><h2>' + ic('route') + 'Họ từ chuyển trọng âm</h2>' +
        '<p class="muted" style="font-size:.88rem">Cùng một gốc từ nhưng trọng âm dịch chuyển khi đổi loại từ. ' +
        'Đây là bẫy hay gặp trong bài nghe.</p><ul class="ex-list">';
      PR.stress.families.forEach(function (f) {
        h += '<li>' + f.map(function (x) { return md(x); }).join('  →  ') + '</li>';
      });
      h += '</ul></div>';
    } else if (tab === 'linking') {
      h = '<div class="card"><h2>' + ic('link') + 'Năm hiện tượng biến âm khi nói nhanh</h2>' +
        '<p class="muted" style="font-size:.88rem">Đây là lý do bạn biết từ đó mà nghe không ra: ' +
        'người bản xứ không đọc rời từng từ.</p>';
      PR.connected.rules.forEach(function (r) {
        h += '<div class="gr-block"><h3>' + esc(r.t) + '</h3><p>' + esc(r.d) + '</p><div class="pair-row">';
        r.ex.forEach(function (e) {
          h += '<button class="pair pair-wide" onclick="__speak(&#39;' + attr(e[0]) + '&#39;)">' +
            '<span>' + md(e[0]) + '</span><i>→</i><span class="ipa">' + md(e[1]) + '</span></button>';
        });
        h += '</div></div>';
      });
      h += '</div><div class="card"><h2>' + ic('volume') + 'Dạng yếu của từ chức năng</h2>' +
        '<p class="muted" style="font-size:.88rem">Trong câu nói tự nhiên, các từ này gần như luôn đọc ở dạng yếu.</p>' +
        '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th>Từ</th><th>Dạng mạnh (đọc rời)</th><th>Dạng yếu (trong câu)</th></tr></thead><tbody>';
      PR.connected.weakForms.forEach(function (r) {
        h += '<tr><td><b>' + esc(r[0]) + '</b></td><td class="muted">' + esc(r[1]) + '</td>' +
          '<td class="ipa">' + esc(r[2]) + '</td></tr>';
      });
      h += '</tbody></table></div></div>' +
        '<div class="card"><h2>' + ic('chat') + 'Câu đầy đủ nghe thật ra thế nào</h2><ul class="ex-list">';
      PR.connected.examples.forEach(function (e) {
        h += '<li><b>' + esc(e[0]) + '</b><br><span class="vi ipa">' + esc(e[1]) + '</span></li>';
      });
      h += '</ul></div>';
    } else {
      h = '<div class="card"><h2>' + ic('info') + 'Bảy lỗi phát âm người Việt hay mắc</h2>' +
        '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th>Lỗi</th><th>Ví dụ sai</th><th>Cách sửa</th></tr></thead><tbody>';
      PR.commonErrors.forEach(function (r) {
        h += '<tr><td><b>' + esc(r[0]) + '</b></td><td class="muted"><i>' + md(r[1]) + '</i></td>' +
          '<td>' + esc(r[2]) + '</td></tr>';
      });
      h += '</tbody></table></div></div>';
    }

    /* Lịch luyện tập — luôn hiện ở cuối */
    h += '<div class="card"><h2>' + ic('clock') + 'Bài luyện 15 phút mỗi ngày</h2>' +
      '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
      '<th style="width:110px">Thời gian</th><th>Việc cần làm</th></tr></thead><tbody>';
    PR.routine.forEach(function (r) {
      h += '<tr><td><b>' + esc(r[0]) + '</b></td><td>' + esc(r[1]) + '</td></tr>';
    });
    h += '</tbody></table></div>' +
      '<div class="note tip"><b>Shadowing</b> là kỹ thuật hiệu quả nhất: mở một đoạn 30 giây, ' +
      'nghe và nói đuổi theo <b>cùng lúc</b>, bắt chước cả ngữ điệu. Làm 10 phút mỗi ngày trong một tháng, ' +
      'khả năng nghe và độ tự nhiên khi nói sẽ khác hẳn.</div>' +
      '<div class="btn-row">' +
      '<button class="btn" onclick="location.hash=\'#/doc/01-phat-am-ipa.md\'">' + ic('folder') + 'Tài liệu phát âm đầy đủ</button>' +
      '<button class="btn" onclick="location.hash=\'#/ielts/lesson/ie-01\'">' + ic('cap') + 'Buổi phát âm trong lộ trình IELTS</button>' +
      '</div></div>';

    b.innerHTML = h;
  }

  /* ================= LỘ TRÌNH IELTS ================= */
  function pageIelts() {
    var all = ieltsList();
    var nv = all.reduce(function (s, x) { return s + (x.vocab || []).length; }, 0);
    var nq = all.reduce(function (s, x) { return s + (x.exercises || []).length; }, 0);
    var d = ieDone();
    var next = all.filter(function (x) { return !state.done[x.id]; })[0] || all[0];

    var h = '<section class="hero hero-ielts"><span class="hero-badge">Lộ trình riêng</span>' +
      '<h1>' + esc(IT.name) + '</h1><p>' + esc(IT.intro) + '</p>' +
      '<div class="btn-row">' +
      '<button class="btn yellow" onclick="location.hash=\'#/ielts/lesson/' + next.id + '\'">' +
      ic('play') + (d ? 'Học tiếp Buổi ' + next.no : 'Bắt đầu Buổi 1') + '</button>' +
      '<button class="btn" onclick="location.hash=\'#/home\'">' + ic('route') + 'Xem lộ trình CEFR</button></div>' +
      '<div class="stat-row">' +
      '<div class="stat"><b>' + all.length + '</b><span>buổi học</span></div>' +
      '<div class="stat"><b>2</b><span>giai đoạn</span></div>' +
      '<div class="stat"><b>6</b><span>tháng</span></div>' +
      '<div class="stat"><b>' + nv + '</b><span>từ có IPA</span></div>' +
      '<div class="stat"><b>' + nq + '</b><span>câu bài tập</span></div>' +
      '<div class="stat"><b>' + d + '</b><span>buổi đã xong</span></div>' +
      '</div></section>';

    h += '<div class="section-head"><div><h2>Hai giai đoạn</h2>' +
      '<span class="sub">Ba tháng đầu xây nền, ba tháng sau vào thẳng 4 kỹ năng</span></div></div>' +
      '<div class="covers covers-2">';
    IT.phases.forEach(function (ph) {
      var ls = all.filter(function (x) { return x.phase === ph.id; });
      var dn = ls.filter(function (x) { return state.done[x.id]; }).length;
      var pct = Math.round(dn / ls.length * 100);
      h += '<a class="cover cv-' + ph.id.toLowerCase() + '" href="#/ielts/phase/' + ph.id + '">' +
        '<span class="cover-badge">' + esc(ph.months) + '</span>' +
        '<span class="cover-lv">' + ph.id + '</span>' +
        '<span class="cover-title">' + esc(ph.short) + '</span>' +
        '<span class="cover-bar"><div style="width:' + pct + '%"></div></span>' +
        '<span class="cover-foot">Buổi ' + ph.range[0] + '–' + ph.range[1] + ' · ' + dn + '/' + ls.length +
        ' · mục tiêu ' + esc(ph.target) + '</span></a>';
    });
    h += '</div>';

    IT.phases.forEach(function (ph) {
      var ls = all.filter(function (x) { return x.phase === ph.id; });
      h += '<div class="section-head"><div><h2>' + esc(ph.name) + '</h2>' +
        '<span class="sub">' + esc(ph.months) + ' · Buổi ' + ph.range[0] + '–' + ph.range[1] +
        ' · mục tiêu ' + esc(ph.target) + '</span></div></div>' +
        '<section class="card"><p>' + esc(ph.desc) + '</p>' +
        '<h3>' + ic('target') + 'Kết thúc giai đoạn này bạn làm được</h3><ul>';
      ph.can.forEach(function (c) { h += '<li>' + esc(c) + '</li>'; });
      h += '</ul><h3>' + ic('clock') + 'Việc cần làm hằng ngày</h3>' +
        '<div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th>Kỹ năng</th><th style="width:90px">Thời lượng</th><th>Nội dung</th></tr></thead><tbody>';
      ph.daily.forEach(function (r) {
        h += '<tr><td><b>' + esc(r[0]) + '</b></td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>';
      });
      h += '</tbody></table></div>' +
        '<h3>' + ic('list') + 'Các buổi</h3><div class="table-scroll"><table class="ref-table"><thead><tr>' +
        '<th style="width:58px">Buổi</th><th>Tên buổi</th><th>Nội dung</th></tr></thead><tbody>';
      ls.forEach(function (x) {
        h += '<tr><td><a href="#/ielts/lesson/' + x.id + '">' + x.no + '</a></td>' +
          '<td><a href="#/ielts/lesson/' + x.id + '">' + esc(x.title) + '</a>' +
          (state.done[x.id] ? ' <span style="color:var(--green)">' + icS('check') + '</span>' : '') + '</td>' +
          '<td class="muted">' + esc(x.subtitle || '') + '</td></tr>';
      });
      h += '</tbody></table></div></section>';
    });
    return h;
  }

  function pageIeltsPhase(id) {
    var ph = phaseOf(id); if (!ph) return '<p>Không tìm thấy giai đoạn.</p>';
    var ls = ieltsList().filter(function (x) { return x.phase === id; });
    var h = '<div class="crumb"><a href="#/ielts">IELTS từ số 0</a> / ' + ph.id + '</div>' +
      '<h1><span class="tag ie">IELTS</span> ' + esc(ph.name) + '</h1>' +
      '<p class="muted">' + esc(ph.months) + ' · Buổi ' + ph.range[0] + '–' + ph.range[1] +
      ' · mục tiêu ' + esc(ph.target) + '</p><p>' + esc(ph.desc) + '</p>' +
      '<div class="card"><h3>' + ic('target') + 'Mục tiêu đầu ra</h3><ul>';
    ph.can.forEach(function (c) { h += '<li>' + esc(c) + '</li>'; });
    h += '</ul></div><div class="grid grid-2">';
    ls.forEach(function (x) {
      h += '<article class="card level-card" onclick="location.hash=\'#/ielts/lesson/' + x.id + '\'">' +
        '<div class="muted" style="font-size:.75rem;letter-spacing:.06em;font-weight:800">BUỔI ' + x.no +
        (state.done[x.id] ? ' · <span style="color:var(--green)">ĐÃ HỌC</span>' : '') + '</div>' +
        '<h3 style="margin:6px 0">' + esc(x.title) + '</h3>' +
        '<p class="lc-desc">' + esc(x.subtitle || '') + '</p>' +
        '<div class="lc-meta"><span>' + icS('bookOpen') + (x.vocab || []).length + ' từ</span>' +
        '<span>' + icS('type') + (x.grammar || []).length + ' phần lý thuyết</span>' +
        '<span>' + icS('pencil') + (x.exercises || []).length + ' bài tập</span></div></article>';
    });
    return h + '</div>';
  }

  function pageIeltsLesson(ls, tab) {
    var ph = phaseOf(ls.phase), all = ieltsList(), idx = all.indexOf(ls);
    var h = '<div class="lesson-head">' +
      '<div class="crumb"><a href="#/ielts">IELTS từ số 0</a> / ' +
      '<a href="#/ielts/phase/' + ph.id + '">' + esc(ph.name) + '</a> / Buổi ' + ls.no + '</div>' +
      '<h1><span class="tag ie">IELTS</span> ' + esc(ls.title) + '</h1>' +
      '<p class="muted">' + esc(ls.subtitle || '') + '</p>';
    if (ls.goals) {
      h += '<div class="goal-box"><b>' + ic('target') + 'Kết thúc buổi này bạn sẽ:</b><ul>';
      ls.goals.forEach(function (g) { h += '<li>' + esc(g) + '</li>'; });
      h += '</ul></div>';
    }
    h += '</div><div class="tabs">';
    [['vocab', 'bookOpen', 'Từ vựng', (ls.vocab || []).length],
     ['grammar', 'type', 'Lý thuyết', (ls.grammar || []).length],
     ['phrases', 'chat', 'Mẫu câu', (ls.phrases || []).length],
     ['exercises', 'pencil', 'Bài tập', (ls.exercises || []).length]]
      .forEach(function (t) {
        h += '<button class="tab' + (tab === t[0] ? ' active' : '') + '" data-tab="' + t[0] + '">' +
          ic(t[1]) + t[2] + ' <span class="muted">' + t[3] + '</span></button>';
      });
    h += '</div><div id="tabBody"></div>';

    h += '<div class="lesson-footer">';
    h += idx > 0
      ? '<button class="btn" onclick="location.hash=\'#/ielts/lesson/' + all[idx - 1].id + '\'">' +
        ic('left') + 'Buổi ' + all[idx - 1].no + '</button>'
      : '<span class="spacer"></span>';
    h += '<button class="btn ' + (state.done[ls.id] ? '' : 'primary') + '" id="doneBtn">' + ic('check') +
      (state.done[ls.id] ? 'Đã hoàn thành' : 'Đánh dấu đã học xong') + '</button>';
    h += idx < all.length - 1
      ? '<button class="btn" onclick="location.hash=\'#/ielts/lesson/' + all[idx + 1].id + '\'">Buổi ' +
        all[idx + 1].no + ic('right') + '</button>'
      : '<span class="spacer"></span>';
    return h + '</div>';
  }

  /* ================= search ================= */
  si.addEventListener('input', function () {
    var q = si.value.trim().toLowerCase();
    if (q.length < 2) { sr.hidden = true; return; }
    var out = [];
    lessonList().forEach(function (ls) {
      if (ls.title.toLowerCase().indexOf(q) > -1)
        out.push(['book', ls.title, 'Buổi ' + ls.no + ' · ' + ls.level, '#/lesson/' + ls.id]);
      (ls.grammar || []).forEach(function (g) {
        if (g.t.toLowerCase().indexOf(q) > -1)
          out.push(['type', g.t.replace(/\*/g, ''), 'Ngữ pháp · Buổi ' + ls.no, '#/lesson/' + ls.id + '/grammar']);
      });
      (ls.vocab || []).forEach(function (v) {
        if (v.w.toLowerCase().indexOf(q) > -1 || (v.vi || '').toLowerCase().indexOf(q) > -1)
          out.push(['bookOpen', v.w + '  ' + (v.ipa || ''), v.vi + ' · Buổi ' + ls.no, '#/lesson/' + ls.id]);
      });
    });
    ieltsList().forEach(function (ls) {
      if (ls.title.toLowerCase().indexOf(q) > -1)
        out.push(['cap', 'IELTS · ' + ls.title, 'Buổi ' + ls.no + ' · ' + ls.phase, '#/ielts/lesson/' + ls.id]);
      (ls.vocab || []).forEach(function (v) {
        if (v.w.toLowerCase().indexOf(q) > -1 || (v.vi || '').toLowerCase().indexOf(q) > -1)
          out.push(['cap', v.w + '  ' + (v.ipa || ''), v.vi + ' · IELTS Buổi ' + ls.no, '#/ielts/lesson/' + ls.id]);
      });
    });
    sr.innerHTML = out.length
      ? out.slice(0, 40).map(function (o) {
        return '<a class="sr-item" href="' + o[3] + '"><b>' + icS(o[0]) + esc(o[1]) + '</b>' +
          '<small>' + esc(o[2]) + '</small></a>';
      }).join('')
      : '<div class="sr-item muted">Không tìm thấy “' + esc(q) + '”</div>';
    sr.hidden = false;
  });
  sr.addEventListener('click', function () {
    sr.hidden = true; searchWrap.classList.remove('open'); si.blur();
  });
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!searchWrap.contains(t) && !(t.closest && t.closest('#searchBtn'))) sr.hidden = true;
  });
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault(); searchWrap.classList.add('open'); si.focus(); si.select();
    }
    if (e.key === 'Escape') { sr.hidden = true; closeMenu(); searchWrap.classList.remove('open'); }
  });

  /* ================= router ================= */
  function route() {
    var p = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
    var c = $('#content');
    closeMenu();
    window.scrollTo(0, 0);

    var isLesson = p[0] === 'lesson' && L[p[1]];
    var isIeLesson = p[0] === 'ielts' && p[1] === 'lesson' && IT.lessons[p[2]];
    buildNav(isLesson ? p[1] : (isIeLesson ? p[2] : null));

    $$('.nav-item').forEach(function (n) { n.classList.toggle('active', n.dataset.route === p[0]); });
    $$('.tabbar [data-route]').forEach(function (n) { n.classList.toggle('active', n.dataset.route === p[0]); });
    $('#tabLessons').classList.toggle('active', !!isLesson || p[0] === 'level');
    $$('.nav-ielts').forEach(function (n) { n.classList.toggle('active', p[0] === 'ielts'); });

    if (p[0] === 'ielts') {
      if (isIeLesson) {
        var iel = IT.lessons[p[2]], itab = p[3] || 'vocab';
        c.innerHTML = pageIeltsLesson(iel, itab);
        renderTab(iel, itab);
        $$('.tab', c).forEach(function (t) {
          t.onclick = function () {
            $$('.tab', c).forEach(function (x) { x.classList.remove('active'); });
            t.classList.add('active');
            renderTab(iel, t.dataset.tab);
          };
        });
        $('#doneBtn').onclick = function () {
          state.done[iel.id] = !state.done[iel.id]; save(); route();
        };
      } else if (p[1] === 'phase') {
        c.innerHTML = pageIeltsPhase(p[2]);
      } else {
        c.innerHTML = pageIelts();
      }
      return;
    }

    if (isLesson) {
      var ls = L[p[1]], tab = p[2] || 'vocab';
      c.innerHTML = pageLesson(ls, tab);
      renderTab(ls, tab);
      $$('.tab', c).forEach(function (t) {
        t.onclick = function () {
          $$('.tab', c).forEach(function (x) { x.classList.remove('active'); });
          t.classList.add('active');
          renderTab(ls, t.dataset.tab);
        };
      });
      $('#doneBtn').onclick = function () {
        state.done[ls.id] = !state.done[ls.id]; save(); route();
      };
    } else if (p[0] === 'level') {
      c.innerHTML = pageLevel(p[1]);
    } else if (p[0] === 'roadmap') {
      c.innerHTML = pageRoadmap();
    } else if (p[0] === 'vocab') {
      c.innerHTML = pageVocab(); renderVocabBody('all');
      $$('#vChips .chip').forEach(function (ch) {
        ch.onclick = function () {
          $$('#vChips .chip').forEach(function (x) { x.classList.remove('active'); });
          ch.classList.add('active'); renderVocabBody(ch.dataset.lv);
        };
      });
    } else if (p[0] === 'grammar') {
      c.innerHTML = pageGrammar();
    } else if (p[0] === 'pron') {
      var ptab = p[1] || 'vowels';
      c.innerHTML = pagePron(ptab); renderPron(ptab);
      $$('#pChips .chip').forEach(function (ch) {
        ch.onclick = function () {
          $$('#pChips .chip').forEach(function (x) { x.classList.remove('active'); });
          ch.classList.add('active'); renderPron(ch.dataset.p);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
      });
    } else if (p[0] === 'flashcards') {
      var scope = p[1] || 'all';
      c.innerHTML = pageFlash(L[scope] ? 'none' : scope);
      buildDeck(scope); wireFlash();
    } else if (p[0] === 'exam') {
      var exs = REF.placement || [];
      c.innerHTML = pageExam();
      wireExercises(c, exs, function (right, total) {
        var lv = right <= 7 ? ['A1', 'a1-01', 'Bạn đang ở mức khởi đầu. Hãy bắt đầu từ Buổi 1 — đừng bỏ qua phần phát âm.']
          : right <= 14 ? ['A2', 'a2-01', 'Bạn đã nắm cơ bản. Nên ôn nhanh A1 rồi vào Buổi 11.']
            : right <= 21 ? ['B1', 'b1-01', 'Bạn ở mức sơ–trung cấp. Vào thẳng Buổi 21, ôn lại A2 khi cần.']
              : right <= 26 ? ['B2', 'b2-01', 'Nền tảng tốt. Bắt đầu từ Buổi 29 để lên trình độ thi cử.']
                : ['C1', 'c1-01', 'Trình độ cao. Vào Buổi 36 để hoàn thiện văn phong và sắc thái.'];
        return ic('trophy') + 'Kết quả: <b>' + right + '/' + total + '</b><br>Trình độ ước lượng: ' +
          '<span class="tag ' + lv[0].toLowerCase() + '">' + lv[0] + '</span><br>' +
          '<span style="font-weight:400">' + lv[2] + '</span>' +
          '<div class="btn-row"><button class="btn primary" onclick="location.hash=\'#/lesson/' + lv[1] +
          '\'">' + ic('play') + 'Bắt đầu từ đây</button></div>';
      });
    } else if (p[0] === 'docs') {
      c.innerHTML = pageDocs();
    } else if (p[0] === 'doc' && p[1]) {
      pageDoc(decodeURIComponent(p.slice(1).join('/')));
    } else {
      c.innerHTML = pageHome();
    }
  }

  $('#toTop').onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  window.addEventListener('hashchange', route);
  applyTheme();
  route();
})();
