
const $ = (selector) => document.querySelector(selector);

const topics = [
  {id:1,grade:10,name:"Eksponen",emoji:"⚡",desc:"Pangkat, sifat eksponen, dan bentuk pangkat.",example:"2³ × 2²",steps:["Jika basis sama, pangkat dijumlahkan.","2³ × 2² = 2⁽³⁺²⁾","Hasilnya adalah 2⁵ = 32."],answer:"32"},
  {id:2,grade:10,name:"Bentuk Akar",emoji:"🌱",desc:"Menyederhanakan dan menghitung bentuk akar.",example:"√49 + √16",steps:["√49 = 7 dan √16 = 4.","Jumlahkan kedua hasil: 7 + 4.","Hasilnya adalah 11."],answer:"11"},
  {id:3,grade:10,name:"Logaritma",emoji:"📐",desc:"Sifat dan operasi logaritma.",example:"log₂ 8",steps:["Tulis sebagai 2ˣ = 8.","Karena 2³ = 8, maka x = 3.","Jadi log₂ 8 = 3."],answer:"3"},
  {id:4,grade:10,name:"Persamaan Linear",emoji:"⚖️",desc:"Persamaan linear satu variabel.",example:"3x + 5 = 20",steps:["Kurangi kedua ruas dengan 5: 3x = 15.","Bagi kedua ruas dengan 3.","Jadi x = 5."],answer:"5"},
  {id:5,grade:10,name:"Sistem Persamaan Linear",emoji:"🔢",desc:"Metode substitusi dan eliminasi.",example:"x + y = 7, x − y = 1",steps:["Jumlahkan kedua persamaan: 2x = 8.","Diperoleh x = 4.","Substitusi: 4 + y = 7, sehingga y = 3."],answer:"x = 4, y = 3"},
  {id:6,grade:10,name:"Fungsi Kuadrat",emoji:"🪂",desc:"Grafik, akar, dan titik puncak parabola.",example:"Akar x² − 5x + 6 = 0",steps:["Faktorkan menjadi (x − 2)(x − 3) = 0.","x − 2 = 0 atau x − 3 = 0.","Jadi x = 2 atau x = 3."],answer:"2 dan 3"},
  {id:7,grade:10,name:"Persamaan Kuadrat",emoji:"🧩",desc:"Akar-akar persamaan kuadrat.",example:"x² − 9 = 0",steps:["Pindahkan sehingga x² = 9.","Ambil akar kedua ruas.","Jadi x = 3 atau x = −3."],answer:"3 dan −3"},
  {id:8,grade:10,name:"Trigonometri Dasar",emoji:"📏",desc:"Sinus, cosinus, dan tangen.",example:"sin 30°",steps:["Ingat nilai sudut istimewa.","sin 30° = 1/2.","Jadi nilainya 0,5."],answer:"1/2"},
  {id:9,grade:10,name:"Nilai Mutlak",emoji:"🎯",desc:"Persamaan dan pertidaksamaan nilai mutlak.",example:"|−8|",steps:["Nilai mutlak adalah jarak dari nol.","Jarak tidak bernilai negatif.","Jadi |−8| = 8."],answer:"8"},
  {id:10,grade:10,name:"Statistika Dasar",emoji:"📊",desc:"Mean, median, dan modus.",example:"Mean dari 2, 4, 6",steps:["Jumlahkan data: 2 + 4 + 6 = 12.","Banyak data ada 3.","Mean = 12 ÷ 3 = 4."],answer:"4"},
  {id:11,grade:11,name:"Komposisi Fungsi",emoji:"🔗",desc:"Menggabungkan dua fungsi.",example:"f(x)=2x, g(x)=x+3. Tentukan f(g(2)).",steps:["g(2) = 2 + 3 = 5.","Masukkan hasil ke f: f(5) = 2 × 5.","Jadi hasilnya 10."],answer:"10"},
  {id:12,grade:11,name:"Fungsi Invers",emoji:"🔄",desc:"Menentukan fungsi kebalikan.",example:"f(x) = 2x + 4",steps:["Tulis y = 2x + 4.","Tukar x dan y: x = 2y + 4.","Maka y = (x − 4)/2."],answer:"(x − 4)/2"},
  {id:13,grade:11,name:"Lingkaran",emoji:"⭕",desc:"Sudut pusat, sudut keliling, dan busur.",example:"Sudut pusat 80°. Sudut keliling menghadap busur sama.",steps:["Sudut keliling = ½ × sudut pusat.","= ½ × 80°.","Hasilnya 40°."],answer:"40°"},
  {id:14,grade:11,name:"Matriks",emoji:"🔲",desc:"Operasi penjumlahan dan pengurangan matriks.",example:"[1 2] + [3 4]",steps:["Jumlahkan elemen yang bersesuaian.","1 + 3 = 4 dan 2 + 4 = 6.","Hasilnya [4 6]."],answer:"[4 6]"},
  {id:15,grade:11,name:"Transformasi Geometri",emoji:"🪞",desc:"Translasi, refleksi, rotasi, dan dilatasi.",example:"Titik (2, 3) ditranslasi (4, −1).",steps:["Tambahkan koordinat x dengan 4: 2 + 4 = 6.","Tambahkan koordinat y dengan −1: 3 − 1 = 2.","Hasilnya (6, 2)."],answer:"(6, 2)"},
  {id:16,grade:11,name:"Barisan Aritmetika",emoji:"🪜",desc:"Pola bilangan dengan beda tetap.",example:"2, 5, 8, 11, ...",steps:["Beda antarangka adalah 3.","Suku berikutnya = 11 + 3.","Hasilnya 14."],answer:"14"},
  {id:17,grade:11,name:"Barisan Geometri",emoji:"🧬",desc:"Pola bilangan dengan rasio tetap.",example:"3, 6, 12, 24, ...",steps:["Rasio setiap suku adalah 2.","Kalikan suku terakhir dengan 2.","Hasilnya 48."],answer:"48"},
  {id:18,grade:11,name:"Limit Fungsi",emoji:"🚀",desc:"Nilai fungsi ketika mendekati suatu titik.",example:"lim x→2 (x + 3)",steps:["Fungsi ini kontinu di x = 2.","Substitusikan x = 2.","Hasilnya 2 + 3 = 5."],answer:"5"},
  {id:19,grade:11,name:"Turunan Dasar",emoji:"📈",desc:"Turunan fungsi pangkat.",example:"f(x) = x³",steps:["Gunakan aturan turunan xⁿ = nxⁿ⁻¹.","Turunan x³ adalah 3x².","Jadi f′(x) = 3x²."],answer:"3x²"},
  {id:20,grade:11,name:"Peluang",emoji:"🎲",desc:"Peluang kejadian sederhana.",example:"Peluang muncul angka genap pada dadu.",steps:["Angka genap: 2, 4, dan 6.","Ada 3 hasil yang diinginkan dari 6 hasil.","Peluang = 3/6 = 1/2."],answer:"1/2"},
  {id:21,grade:12,name:"Integral Dasar",emoji:"∫",desc:"Integral tak tentu fungsi pangkat.",example:"∫ 2x dx",steps:["Gunakan ∫xⁿ dx = xⁿ⁺¹/(n+1) + C.","∫ 2x dx = 2 × x²/2 + C.","Hasilnya x² + C."],answer:"x² + C"},
  {id:22,grade:12,name:"Statistika Lanjutan",emoji:"📉",desc:"Varians dan simpangan baku.",example:"Data 2, 4, 6. Varians populasi.",steps:["Mean = 4.","Kuadrat selisih: 4, 0, 4.","Varians = 8/3."],answer:"8/3"},
  {id:23,grade:12,name:"Distribusi Peluang",emoji:"🎯",desc:"Distribusi peluang dan nilai harapan.",example:"X bernilai 0 atau 1 dengan peluang sama.",steps:["E(X) = Σ xP(x).","E(X) = 0 × ½ + 1 × ½.","Hasilnya ½."],answer:"1/2"},
  {id:24,grade:12,name:"Dimensi Tiga",emoji:"🧊",desc:"Jarak titik dan diagonal ruang.",example:"Diagonal ruang kubus sisi 2.",steps:["Rumus diagonal ruang: d = s√3.","Masukkan s = 2.","d = 2√3."],answer:"2√3"},
  {id:25,grade:12,name:"Vektor",emoji:"➡️",desc:"Operasi vektor dan panjang vektor.",example:"Panjang vektor (3, 4)",steps:["Rumus panjang = √(x² + y²).","= √(9 + 16).","= √25 = 5."],answer:"5"},
  {id:26,grade:12,name:"Matriks Lanjutan",emoji:"🧮",desc:"Determinan matriks 2 × 2.",example:"Determinan [[2,1],[3,4]]",steps:["Rumus ad − bc.","= 2 × 4 − 1 × 3.","= 8 − 3 = 5."],answer:"5"},
  {id:27,grade:12,name:"Trigonometri Lanjutan",emoji:"🌐",desc:"Identitas dan persamaan trigonometri.",example:"sin²x + cos²x",steps:["Gunakan identitas dasar trigonometri.","sin²x + cos²x = 1.","Nilainya selalu 1."],answer:"1"},
  {id:28,grade:12,name:"Aplikasi Turunan",emoji:"🏎️",desc:"Gradien garis singgung dan nilai ekstrem.",example:"f(x)=x². Tentukan f′(3).",steps:["f′(x) = 2x.","Substitusi x = 3.","f′(3) = 6."],answer:"6"},
  {id:29,grade:12,name:"Aplikasi Integral",emoji:"🖼️",desc:"Luas daerah di bawah kurva.",example:"∫₀² 2x dx",steps:["Integral 2x adalah x².","Substitusi batas: 2² − 0².","Luas = 4."],answer:"4"},
  {id:30,grade:12,name:"Kombinatorika",emoji:"🧠",desc:"Permutasi dan kombinasi.",example:"Memilih 2 orang dari 4 orang.",steps:["Gunakan kombinasi C(4,2).","C(4,2) = 4!/(2!2!).","Hasilnya 6 cara."],answer:"6"}
];

const examples = [
  {q:"Hitung 3² + 4².",steps:["3² = 9.","4² = 16.","9 + 16 = 25."],answer:"25"},
  {q:"Tentukan x jika 2x + 6 = 18.",steps:["Kurangi kedua ruas dengan 6: 2x = 12.","Bagi kedua ruas dengan 2.","Jadi x = 6."],answer:"6"},
  {q:"Hitung rata-rata dari 5, 7, dan 9.",steps:["Jumlah data = 5 + 7 + 9 = 21.","Banyak data = 3.","Rata-rata = 21 ÷ 3 = 7."],answer:"7"},
  {q:"Tentukan luas segitiga dengan alas 10 cm dan tinggi 6 cm.",steps:["Rumus luas = ½ × alas × tinggi.","Luas = ½ × 10 × 6.","Luas = 30 cm²."],answer:"30 cm²"},
  {q:"Jika f(x) = 2x + 1, tentukan f(4).",steps:["Ganti x dengan 4.","f(4) = 2 × 4 + 1.","Hasilnya 9."],answer:"9"}
];

const quizBank = [
  {q:"Hasil dari 2³ adalah ...",o:["6","8","9","12"],a:1,e:"2 × 2 × 2 = 8."},
  {q:"Hasil dari √64 adalah ...",o:["6","7","8","9"],a:2,e:"Karena 8 × 8 = 64, maka √64 = 8."},
  {q:"Jika 3x = 21, nilai x adalah ...",o:["6","7","8","9"],a:1,e:"x = 21 ÷ 3 = 7."},
  {q:"Hasil dari 5² − 3² adalah ...",o:["8","12","16","25"],a:1,e:"25 − 9 = 16."},
  {q:"Rata-rata dari 4, 6, dan 8 adalah ...",o:["5","6","7","8"],a:1,e:"(4 + 6 + 8) ÷ 3 = 6."},
  {q:"Peluang muncul angka pada koin adil adalah ...",o:["0","1/4","1/2","1"],a:2,e:"Ada satu hasil yang diinginkan dari dua kemungkinan."},
  {q:"Hasil dari 12 ÷ 3 + 2 adalah ...",o:["4","6","8","10"],a:1,e:"Kerjakan pembagian dahulu: 4 + 2 = 6."},
  {q:"Keliling persegi dengan sisi 5 cm adalah ...",o:["10 cm","15 cm","20 cm","25 cm"],a:2,e:"Keliling = 4 × 5 = 20 cm."},
  {q:"Jika y = 2x dan x = 6, nilai y adalah ...",o:["8","10","12","14"],a:2,e:"y = 2 × 6 = 12."},
  {q:"Sudut siku-siku besarnya ...",o:["45°","60°","90°","180°"],a:2,e:"Sudut siku-siku memiliki besar 90°."}
];

const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { alert("Penyimpanan browser penuh atau tidak tersedia."); }
  }
};

let student = storage.get("mathlearnStudent", null);
let historyScores = storage.get("mathlearnScores", []);
let currentPage = "home";
let activeTopic = null;
let quiz = null;
let quizIndex = 0;
let quizScore = 0;
let selectedAnswer = null;
let checkedAnswer = false;
let quizQuestions = [];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[ch]);
}

function init() {
  $("#loginForm").addEventListener("submit", event => {
    event.preventDefault();
    student = {
      name: $("#studentName").value.trim(),
      grade: $("#studentClass").value
    };
    if (!student.name || !student.grade) return;
    storage.set("mathlearnStudent", student);
    showApp();
  });

  $("#logoutBtn").addEventListener("click", () => {
    if (!confirm("Keluar dari MathLearn? Riwayat nilai tetap tersimpan di browser.")) return;
    student = null;
    $("#app").classList.add("hidden");
    $("#loginPage").classList.remove("hidden");
    $("#studentName").value = "";
    $("#studentClass").value = "";
  });

  $("#navigation").addEventListener("click", event => {
    const button = event.target.closest("[data-page]");
    if (button) goTo(button.dataset.page);
  });

  $("#menuToggle").addEventListener("click", () => {
    $(".sidebar").classList.toggle("open");
  });

  $("#pageContent").addEventListener("click", handleAction);

  if (student) showApp();
}
function showApp() {
  $("#loginPage").classList.add("hidden");
  $("#app").classList.remove("hidden");
  $("#sideName").textContent = student.name;
  $("#sideClass").textContent = "Kelas " + student.grade;
  goTo("home");
}

function goTo(page) {
  currentPage = page;
  quiz = null;
  $(".sidebar").classList.remove("open");
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });

  const pages = {
    home: renderHome,
    materials: renderMaterials,
    practice: renderPractice,
    examples: renderExamples,
    scores: renderScores
  };
  (pages[page] || renderHome)();
  window.scrollTo({top:0, behavior:"smooth"});
}

function renderHome() {
  $("#pageContent").innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">✨ DUNIA BELAJAR BARU</span>
        <h1>Halo, ${escapeHTML(student.name)}! 👋</h1>
        <p>Selamat datang di MathLearn! Siap menjelajahi matematika dan mengasah kemampuanmu hari ini?</p>
        <button class="primary-btn" data-action="open-materials">Mulai Belajar →</button>
      </div>
      <div class="hero-art" aria-label="Siswa belajar">🧑🏻‍🎓</div>
      <div class="hero-doodle">x² + y² = ? ✨</div>
    </section>

    <div class="section-heading">
      <div><h2>Mau belajar apa hari ini? 🌈</h2><p>Pilih petualanganmu di bawah ini.</p></div>
    </div>

    <section class="menu-grid">
      <button class="menu-card purple" data-action="open-materials">
        <div class="menu-info"><div class="menu-icon">📖</div><h3>Belajar Materi</h3><p>Temukan konsep dan rumus matematika.</p><span class="menu-arrow">→</span></div>
        <div class="menu-art">👩🏻‍🏫</div>
      </button>
      <button class="menu-card yellow" data-action="open-practice">
        <div class="menu-info"><div class="menu-icon">✏️</div><h3>Latihan Soal</h3><p>Uji kemampuanmu dengan kuis seru.</p><span class="menu-arrow">→</span></div>
        <div class="menu-art">🧑🏻‍💻</div>
      </button>
      <button class="menu-card green" data-action="open-examples">
        <div class="menu-info"><div class="menu-icon">📝</div><h3>Contoh Soal</h3><p>Pahami langkah pengerjaan satu per satu.</p><span class="menu-arrow">→</span></div>
        <div class="menu-art">🐱</div>
      </button>
      <button class="menu-card blue" data-action="open-scores">
        <div class="menu-info"><div class="menu-icon">📊</div><h3>Nilai Saya</h3><p>Lihat nilai dan perkembangan belajarmu.</p><span class="menu-arrow">→</span></div>
        <div class="menu-art">🏆</div>
      </button>
    </section>

    <section class="motivation">
      <div><h3>Terus belajar, raih cita-citamu! ⭐</h3><p>Setiap soal yang kamu coba membuatmu semakin hebat.</p></div>
      <span>🐈📚</span>
    </section>`;
}

function pageHeader(title, subtitle) {
  return `<div class="page-title"><h1>${title}</h1><p>${subtitle}</p></div>`;
}

function renderMaterials() {
  const list = topics.filter(t => t.grade === Number(student.grade));
  $("#pageContent").innerHTML = pageHeader("📚 Materi Matematika", `Jelajahi materi pilihan untuk kelas ${student.grade}. Pilih satu untuk mulai belajar.`) + `
    <div class="toolbar">
      <input id="materialSearch" placeholder="🔍 Cari materi..." aria-label="Cari materi">
      <select id="gradeFilter" aria-label="Filter kelas">
        <option value="${student.grade}">Kelas ${student.grade}</option>
        <option value="10">Kelas 10</option><option value="11">Kelas 11</option><option value="12">Kelas 12</option>
      </select>
    </div>
    <div id="materialList" class="material-grid"></div>`;
  $("#gradeFilter").value = student.grade;
  $("#gradeFilter").addEventListener("change", () => drawMaterials());
  $("#materialSearch").addEventListener("input", () => drawMaterials());
  drawMaterials();
}

function drawMaterials() {
  const grade = Number($("#gradeFilter").value);
  const term = $("#materialSearch").value.toLowerCase().trim();
  const list = topics.filter(t => t.grade === grade && (t.name + " " + t.desc).toLowerCase().includes(term));
  $("#materialList").innerHTML = list.length ? list.map(t => `
    <article class="material-card">
      <div class="emoji">${t.emoji}</div><span class="pill">Kelas ${t.grade}</span>
      <h3>${t.name}</h3><p>${t.desc}</p>
      <button class="small-btn" data-action="topic" data-id="${t.id}">Pelajari →</button>
      <button class="small-btn" data-action="topic-quiz" data-id="${t.id}">Latihan soal ✏️</button>
    </article>`).join("") : `<div class="empty-state"><div class="emoji">🔎</div><h3>Materi belum ditemukan</h3><p>Coba kata pencarian lain.</p></div>`;
}

function renderTopic(id) {
  const t = topics.find(item => item.id === Number(id));
  if (!t) return;
  activeTopic = t;
  currentPage = "topic";
  $("#pageContent").innerHTML = pageHeader(`${t.emoji} ${t.name}`, `Materi matematika kelas ${t.grade}`) + `
    <article class="example-box">
      <span class="pill">MATERI PEMBELAJARAN</span>
      <h2>${t.name}</h2><p>${t.desc}</p>
      <h3>Contoh pembahasan</h3><p><strong>${t.example}</strong></p>
      <ol class="steps">${t.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      <p><strong>Kesimpulan:</strong> ${t.answer}</p>
      <button class="primary-btn" data-action="topic-quiz" data-id="${t.id}">Coba 10 Soal →</button>
      <button class="small-btn" data-action="back-materials">← Kembali ke materi</button>
    </article>`;
}

function renderExamples() {
  $("#pageContent").innerHTML = pageHeader("📝 Contoh Soal", "Pelajari cara mengerjakan soal secara bertahap.") + `
    <div class="toolbar"><select id="exampleFilter" aria-label="Pilih contoh soal">
      ${examples.map((e,i) => `<option value="${i}">Contoh ${i+1}</option>`).join("")}
    </select></div><div id="exampleContent"></div>`;
  $("#exampleFilter").addEventListener("change", drawExample);
  drawExample();
}

function drawExample() {
  const e = examples[Number($("#exampleFilter").value)];
  $("#exampleContent").innerHTML = `<article class="example-box">
    <span class="pill">CONTOH DAN PEMBAHASAN</span>
    <h2>${e.q}</h2><ol class="steps">${e.steps.map(s => `<li>${s}</li>`).join("")}</ol>
    <p><strong>Jawaban akhir: ${e.answer}</strong></p>
  </article>`;
}

function renderPractice() {
  $("#pageContent").innerHTML = pageHeader("✏️ Latihan Soal", "Pilih materi, jawab 10 pertanyaan, lalu lihat hasilnya.") + `
    <div class="material-grid">
      ${topics.filter(t => t.grade === Number(student.grade)).map(t => `
        <article class="material-card"><div class="emoji">${t.emoji}</div><h3>${t.name}</h3>
        <p>${t.desc}</p><button class="primary-btn" data-action="topic-quiz" data-id="${t.id}">Mulai 10 Soal</button></article>
      `).join("")}
    </div>`;
}

function makeQuizQuestions(topic) {
  // Soal dasar untuk sesi latihan; bank soal dapat diperluas per materi.
  const shift = (topic.id - 1) % quizBank.length;
  return Array.from({length:10}, (_, i) => {
    const item = quizBank[(i + shift) % quizBank.length];
    return {...item, o:[...item.o], originalIndex:i};
  });
}

function startQuiz(id) {
  activeTopic = topics.find(t => t.id === Number(id));
  if (!activeTopic) return;
  quizQuestions = makeQuizQuestions(activeTopic);
  quizIndex = 0;
  quizScore = 0;
  selectedAnswer = null;
  checkedAnswer = false;
  quiz = {topic:activeTopic};
  currentPage = "quiz";
  drawQuiz();
}

function drawQuiz() {
  const q = quizQuestions[quizIndex];
  if (!q) return finishQuiz();
  $("#pageContent").innerHTML = pageHeader(`✏️ ${quiz.topic.name}`, "Jawab pertanyaan berikut dengan teliti.") + `
    <section class="quiz-box">
      <div class="quiz-top"><span>Soal ${quizIndex+1} dari ${quizQuestions.length}</span><span>Skor sementara: ${quizScore}</span></div>
      <div class="progress"><div class="progress-bar" style="width:${(quizIndex/quizQuestions.length)*100}%"></div></div>
      <h2>${q.q}</h2>
      <div class="options">${q.o.map((option,i) => `
        <button class="option-btn ${selectedAnswer===i?"selected":""}" data-action="answer" data-index="${i}" ${checkedAnswer?"disabled":""}>${String.fromCharCode(65+i)}. ${option}</button>
      `).join("")}</div>
      <div id="feedback"></div>
      ${checkedAnswer
        ? `<button class="primary-btn" data-action="next-question">${quizIndex===quizQuestions.length-1?"Lihat Hasil 🎉":"Soal Berikutnya →"}</button>`
        : `<button class="primary-btn" data-action="check-answer" ${selectedAnswer===null?"disabled":""}>Periksa Jawaban</button>`}
    </section>`;
  if (checkedAnswer) {
    const correct = selectedAnswer === q.a;
    $("#feedback").innerHTML = `<div class="feedback ${correct?"good":"bad"}">${correct?"🎉 Benar! Hebat!":"💡 Belum tepat."} ${q.e}</div>`;
  }
}

function finishQuiz() {
  const result = {
    topic:quiz.topic.name,
    grade:student.grade,
    score:quizScore * 10,
    correct:quizScore,
    total:quizQuestions.length,
    date:new Date().toLocaleDateString("id-ID")
  };
  historyScores.unshift(result);
  historyScores = historyScores.slice(0,100);
  storage.set("mathlearnScores", historyScores);
  quiz = null;
  currentPage = "result";
  $("#pageContent").innerHTML = pageHeader("🎉 Latihan Selesai!", "Setiap latihan adalah langkah menuju lebih hebat.") + `
    <section class="score-box" style="text-align:center">
      <div style="font-size:65px">🏆</div><h2>Hasil Latihanmu</h2>
      <div class="score-number">${result.score}</div><p>Nilai dari 100</p>
      <p>Kamu menjawab benar <strong>${result.correct} dari ${result.total} soal</strong>.</p>
      <div class="progress"><div class="progress-bar" style="width:${result.score}%"></div></div>
      <p>${result.score>=80?"Luar biasa! Pertahankan prestasimu! 🌟":result.score>=60?"Bagus! Terus berlatih agar semakin mahir. 💪":"Jangan menyerah! Pelajari materinya lalu coba lagi. 📚"}</p>
      <button class="primary-btn" data-action="open-scores">Lihat Nilai Saya</button>
      <button class="small-btn" data-action="topic-quiz" data-id="${activeTopic.id}">Coba Lagi ↻</button>
      <button class="small-btn" data-action="back-materials">Kembali ke Materi</button>
    </section>`;
}

function renderScores() {
  historyScores = storage.get("mathlearnScores", []);
  const scores = historyScores.filter(s => s.grade === student.grade);
  const average = scores.length ? Math.round(scores.reduce((sum,s) => sum+s.score,0)/scores.length) : 0;
  $("#pageContent").innerHTML = pageHeader("📊 Nilai Saya", "Pantau hasil latihanmu dan terus tingkatkan kemampuan.") + `
    <section class="score-box">
      <div class="menu-grid">
        <div class="material-card"><div class="emoji">🏅</div><p>Jumlah latihan</p><div class="score-number" style="font-size:35px">${scores.length}</div></div>
        <div class="material-card"><div class="emoji">⭐</div><p>Rata-rata nilai</p><div class="score-number" style="font-size:35px">${average}</div></div>
      </div>
      <div class="section-heading"><div><h2>Riwayat Latihan</h2><p>Nilai tersimpan di browser yang kamu gunakan.</p></div></div>
      <div class="score-list">
        ${scores.length ? scores.map(s => `<div class="score-row"><div><strong>${escapeHTML(s.topic)}</strong><small>${escapeHTML(s.date)} · Benar ${s.correct}/${s.total}</small></div><span class="pill">${s.score}/100</span></div>`).join("") : `<div class="empty-state"><div class="emoji">🐱</div><h3>Belum ada nilai</h3><p>Yuk, kerjakan latihan pertama kamu!</p><button class="primary-btn" data-action="open-practice">Mulai Latihan</button></div>`}
      </div>
    </section>`;
}

function handleAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === "open-materials") goTo("materials");
  else if (action === "open-practice") goTo("practice");
  else if (action === "open-examples") goTo("examples");
  else if (action === "open-scores") goTo("scores");
  else if (action === "topic") renderTopic(id);
  else if (action === "topic-quiz") startQuiz(id);
  else if (action === "back-materials") goTo("materials");
  else if (action === "answer" && !checkedAnswer) {
    selectedAnswer = Number(button.dataset.index);
    drawQuiz();
  } else if (action === "check-answer" && selectedAnswer !== null && !checkedAnswer) {
    checkedAnswer = true;
    if (selectedAnswer === quizQuestions[quizIndex].a) quizScore++;
    drawQuiz();
  } else if (action === "next-question" && checkedAnswer) {
    quizIndex++;
    selectedAnswer = null;
    checkedAnswer = false;
    drawQuiz();
  }
}

init();
