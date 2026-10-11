
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const topics = [
{g:10,n:"Eksponen",e:"⚡",f:"aᵐ × aⁿ = aᵐ⁺ⁿ",d:"Eksponen menyatakan perkalian berulang dengan bilangan yang sama.",ex:"2³ × 2²",st:["Basisnya sama, yaitu 2.","Jumlahkan pangkat: 3 + 2 = 5.","Hasilnya 2⁵ = 32."],q:[["2³ × 2² = ...",["16","32","64","10"],1],["3² = ...",["6","9","12","8"],1],["5⁰ = ...",["0","1","5","25"],1]]},
{g:10,n:"Bentuk Akar",e:"🌱",f:"√(ab) = √a × √b",d:"Bentuk akar digunakan untuk menyatakan akar kuadrat atau akar lainnya.",ex:"√36 + √16",st:["√36 = 6.","√16 = 4.","6 + 4 = 10."],q:[["√49 = ...",["6","7","8","9"],1],["√81 = ...",["7","8","9","10"],2],["√25 + √9 = ...",["6","7","8","9"],1]]},
{g:10,n:"Logaritma",e:"🪄",f:"logₐ b = c ⇔ aᶜ = b",d:"Logaritma mencari pangkat yang diperlukan agar suatu bilangan menghasilkan bilangan lain.",ex:"log₂ 8",st:["Tanyakan 2 pangkat berapa sama dengan 8.","Karena 2³ = 8, hasilnya 3."],q:[["log₂ 8 = ...",["2","3","4","8"],1],["log₁₀ 100 = ...",["1","2","10","100"],1],["log₃ 9 = ...",["1","2","3","9"],1]]},
{g:10,n:"Persamaan Linear",e:"📏",f:"ax + b = 0 → x = −b/a",d:"Persamaan linear satu variabel memiliki pangkat tertinggi variabel satu.",ex:"2x + 6 = 14",st:["Kurangi kedua ruas dengan 6: 2x = 8.","Bagi kedua ruas dengan 2.","Jadi x = 4."],q:[["x + 5 = 12, x = ...",["5","6","7","8"],2],["3x = 18, x = ...",["3","6","9","15"],1],["2x − 4 = 10, x = ...",["3","5","7","9"],2]]},
{g:10,n:"Persamaan Kuadrat",e:"🟣",f:"ax² + bx + c = 0",d:"Persamaan kuadrat adalah persamaan dengan pangkat tertinggi variabel dua.",ex:"x² − 5x + 6 = 0",st:["Faktorkan menjadi (x − 2)(x − 3) = 0.","Maka x − 2 = 0 atau x − 3 = 0.","Jadi x = 2 atau x = 3."],q:[["Akar x² − 5x + 6 = 0 adalah ...",["1 dan 6","2 dan 3","−2 dan −3","3 dan 5"],1],["Diskriminan b² − 4ac untuk x² − 4x + 4 = 0 adalah ...",["0","4","8","16"],0],["x² = 25, x positif adalah ...",["3","4","5","25"],2]]},
{g:10,n:"Fungsi Kuadrat",e:"📈",f:"f(x) = ax² + bx + c",d:"Fungsi kuadrat memiliki grafik berbentuk parabola.",ex:"f(x) = x² + 2x + 1, cari f(2)",st:["Ganti x dengan 2.","f(2) = 2² + 2(2) + 1.","Hasilnya 4 + 4 + 1 = 9."],q:[["Jika f(x)=x², f(3)=...",["6","9","12","3"],1],["Grafik fungsi kuadrat berbentuk ...",["Garis lurus","Lingkaran","Parabola","Segitiga"],2],["Jika f(x)=x+4, f(2)=...",["2","4","6","8"],2]]},
{g:10,n:"Sistem Persamaan Linear",e:"🧮",f:"Eliminasi atau substitusi",d:"SPLDV terdiri dari dua persamaan linear dengan dua variabel.",ex:"x + y = 7 dan x − y = 1",st:["Jumlahkan kedua persamaan: 2x = 8.","Maka x = 4.","Substitusikan ke x + y = 7, sehingga y = 3."],q:[["x+y=5 dan x−y=1, nilai x adalah ...",["1","2","3","4"],2],["Jika x=2 dan y=3, x+y=...",["1","5","6","−1"],1],["SPLDV memiliki ... variabel utama",["1","2","3","4"],1]]},
{g:10,n:"Nilai Mutlak",e:"💎",f:"|x| = x jika x ≥ 0",d:"Nilai mutlak menyatakan jarak bilangan dari nol sehingga tidak negatif.",ex:"|−7| + |3|",st:["|−7| = 7.","|3| = 3.","7 + 3 = 10."],q:[["|−8| = ...",["−8","0","8","16"],2],["|4| = ...",["−4","4","0","8"],1],["|−3| + |2| = ...",["1","5","−1","6"],1]]},
{g:10,n:"Trigonometri Dasar",e:"📐",f:"sin = depan/miring; cos = samping/miring",d:"Trigonometri menghubungkan sudut dan perbandingan sisi segitiga siku-siku.",ex:"Segitiga dengan sisi depan 3 dan miring 5",st:["sin θ = sisi depan / sisi miring.","sin θ = 3/5.","Jadi sin θ = 0,6."],q:[["sin θ adalah ...",["samping/miring","depan/miring","depan/samping","miring/depan"],1],["cos θ adalah ...",["samping/miring","depan/miring","miring/samping","depan/miring"],0],["tan θ adalah ...",["depan/samping","samping/miring","miring/depan","depan/miring"],0]]},
{g:10,n:"Statistika Dasar",e:"📊",f:"Rata-rata = jumlah data / banyak data",d:"Statistika membantu mengumpulkan, menyajikan, dan menganalisis data.",ex:"Data 4, 6, 8",st:["Jumlahkan data: 4 + 6 + 8 = 18.","Ada 3 data.","Rata-rata = 18/3 = 6."],q:[["Rata-rata 2, 4, 6 adalah ...",["3","4","5","6"],1],["Median dari 1, 3, 9 adalah ...",["1","3","9","13"],1],["Modus adalah nilai yang ...",["Terbesar","Terkecil","Paling sering muncul","Di tengah"],2]]},

{g:11,n:"Komposisi Fungsi",e:"🔗",f:"(f ∘ g)(x) = f(g(x))",d:"Komposisi fungsi berarti memasukkan hasil fungsi pertama ke fungsi berikutnya.",ex:"f(x)=2x, g(x)=x+3. Cari f(g(2))",st:["g(2) = 2 + 3 = 5.","f(5) = 2 × 5.","Jadi hasilnya 10."],q:[["f(x)=2x, g(x)=x+1. f(g(2))=...",["4","5","6","8"],2],["f(x)=x+3, f(2)=...",["3","4","5","6"],2],["Komposisi f setelah g ditulis ...",["g+f","f∘g","f−g","fg saja"],1]]},
{g:11,n:"Fungsi Invers",e:"🔄",f:"Jika y=f(x), tukar x dan y lalu cari y",d:"Fungsi invers membalik pemetaan fungsi, jika inversnya ada.",ex:"f(x)=x+4",st:["Tulis y = x + 4.","Tukar x dan y: x = y + 4.","Maka y = x − 4, jadi f⁻¹(x)=x−4."],q:[["Invers f(x)=x+2 adalah ...",["x+2","x−2","2x","−x"],1],["Jika f(x)=3x, maka f(2)=...",["5","6","3","9"],1],["Invers membalik ...",["Grafik saja","Pemetaan fungsi","Penjumlahan","Pangkat"],1]]},
{g:11,n:"Barisan Aritmetika",e:"🪜",f:"Uₙ = a + (n−1)b",d:"Barisan aritmetika memiliki selisih tetap antara dua suku berurutan.",ex:"3, 7, 11, 15, ... cari suku ke-5",st:["Suku pertama a = 3 dan beda b = 4.","U₅ = 3 + (5−1)4.","U₅ = 19."],q:[["Barisan 2, 5, 8, ... bedanya ...",["2","3","5","8"],1],["Suku ke-4 dari 1, 3, 5, ... adalah ...",["5","6","7","9"],2],["Rumus suku ke-n aritmetika ...",["a rⁿ","a+(n−1)b","a×b","n²"],1]]},
{g:11,n:"Barisan Geometri",e:"🧁",f:"Uₙ = a × rⁿ⁻¹",d:"Barisan geometri memiliki rasio tetap, yaitu hasil pembagian suku berurutan.",ex:"2, 6, 18, ... cari suku ke-4",st:["a = 2 dan rasio r = 3.","U₄ = 2 × 3³.","U₄ = 54."],q:[["Rasio 3, 6, 12, ... adalah ...",["2","3","6","12"],0],["Suku ke-4 dari 1, 2, 4, ... adalah ...",["4","6","8","16"],2],["Rumus geometri ...",["a+(n−1)b","arⁿ⁻¹","a/r","a+n"],1]]},
{g:11,n:"Deret Aritmetika",e:"📚",f:"Sₙ = n/2 (a + Uₙ)",d:"Deret aritmetika adalah jumlah suku-suku dari barisan aritmetika.",ex:"Jumlah 2 + 4 + 6 + 8",st:["Ada 4 suku, suku pertama 2 dan terakhir 8.","S₄ = 4/2 × (2 + 8).","S₄ = 20."],q:[["Jumlah 1+2+3+4 = ...",["8","9","10","11"],2],["Jumlah 2+4+6 = ...",["10","12","14","16"],1],["Suku pertama disebut ...",["a","b","n","r"],0]]},
{g:11,n:"Trigonometri Sudut Istimewa",e:"🌙",f:"sin 30° = 1/2; cos 60° = 1/2",d:"Sudut istimewa memiliki nilai sinus, cosinus, dan tangen yang umum digunakan.",ex:"sin 30° + cos 60°",st:["sin 30° = 1/2.","cos 60° = 1/2.","Jumlahnya 1."],q:[["sin 30° = ...",["0","1/2","√2/2","1"],1],["cos 0° = ...",["0","1/2","1","−1"],2],["tan 45° = ...",["0","1/2","1","√3"],2]]},
{g:11,n:"Lingkaran",e:"⭕",f:"Keliling = 2πr; luas = πr²",d:"Lingkaran adalah kumpulan titik yang berjarak sama dari pusat.",ex:"Luas lingkaran dengan r = 7, π = 22/7",st:["L = πr².","L = 22/7 × 7 × 7.","L = 154 satuan²."],q:[["Jika r=7 dan π=22/7, luasnya ...",["44","77","154","308"],2],["Diameter sama dengan ...",["r/2","2r","πr","r²"],1],["Keliling lingkaran ...",["πr²","2πr","r³","π+r"],1]]},
{g:11,n:"Matriks",e:"▦",f:"Penjumlahan matriks dilakukan pada elemen seposisi",d:"Matriks adalah susunan bilangan dalam baris dan kolom.",ex:"[1 2] + [3 4]",st:["Jumlahkan elemen pertama: 1 + 3 = 4.","Jumlahkan elemen kedua: 2 + 4 = 6.","Hasilnya [4 6]."],q:[["[1,2]+[3,4] = ...",["[3,6]","[4,6]","[4,8]","[2,2]"],1],["Matriks tersusun atas ...",["Sudut","Baris dan kolom","Kurva","Sisi"],1],["Ordo matriks menyatakan ...",["Jumlah sudut","Baris × kolom","Nilai terbesar","Determinan saja"],1]]},
{g:11,n:"Transformasi Geometri",e:"🪞",f:"Translasi (x,y) → (x+a,y+b)",d:"Transformasi geometri mengubah posisi atau ukuran objek pada bidang.",ex:"Titik (2,3) ditranslasi (1,−2)",st:["Tambahkan 1 pada koordinat x: 2 + 1 = 3.","Tambahkan −2 pada koordinat y: 3 − 2 = 1.","Titik baru adalah (3,1)."],q:[["(1,2) ditranslasi (2,1) menjadi ...",["(3,3)","(2,3)","(−1,1)","(1,1)"],0],["Pencerminan disebut ...",["Rotasi","Refleksi","Translasi","Dilatasi"],1],["Rotasi adalah ...",["Pergeseran","Perputaran","Pencerminan","Perbesaran"],1]]},
{g:11,n:"Peluang",e:"🍀",f:"P(A) = n(A)/n(S)",d:"Peluang menyatakan kemungkinan suatu kejadian terjadi.",ex:"Peluang mendapat angka genap saat melempar dadu",st:["Angka genap: 2, 4, 6, ada 3 hasil.","Semua kemungkinan ada 6.","Peluang = 3/6 = 1/2."],q:[["Peluang muncul angka 6 pada dadu adalah ...",["1/2","1/3","1/6","1"],2],["Peluang kejadian pasti ...",["0","1/4","1/2","1"],3],["Koin punya berapa sisi hasil umum?",["1","2","3","6"],1]]},

{g:12,n:"Limit Fungsi",e:"🌊",f:"limₓ→ₐ f(x) = nilai yang didekati f(x)",d:"Limit mempelajari nilai yang didekati fungsi saat variabel mendekati angka tertentu.",ex:"lim x→2 (x+3)",st:["Masukkan x = 2 jika fungsi kontinu.","2 + 3 = 5.","Jadi limitnya 5."],q:[["lim x→2 (x+1) = ...",["2","3","4","5"],2],["lim x→3 (2x) = ...",["3","5","6","9"],2],["Limit mengkaji nilai yang ...",["Dijauhi","Didekati","Dikalikan saja","Dikuadratkan"],1]]},
{g:12,n:"Turunan",e:"🚀",f:"Jika f(x)=xⁿ, f′(x)=nxⁿ⁻¹",d:"Turunan menyatakan laju perubahan sesaat suatu fungsi.",ex:"f(x)=x³, cari f′(x)",st:["Gunakan aturan pangkat.","Kalikan pangkat 3 dengan koefisien 1.","Turunkan pangkat menjadi 2: f′(x)=3x²."],q:[["Turunan x² adalah ...",["x","2x","x²","2"],1],["Turunan 5x adalah ...",["5","x","5x","0"],0],["Turunan konstanta 7 adalah ...",["7","1","0","−7"],2]]},
{g:12,n:"Integral Tak Tentu",e:"🪄",f:"∫xⁿ dx = xⁿ⁺¹/(n+1) + C",d:"Integral tak tentu adalah salah satu cara menemukan antiturunan fungsi.",ex:"∫2x dx",st:["Naikkan pangkat x dari 1 menjadi 2.","Bagi koefisien 2 dengan pangkat baru 2.","Hasilnya x² + C."],q:[["∫2x dx = ...",["2x²","x²+C","2+C","x+C"],1],["Integral dari 1 dx adalah ...",["x+C","1+C","0","x²"],0],["C pada integral tak tentu adalah ...",["Konstanta integrasi","Koefisien x","Pangkat","Limit"],0]]},
{g:12,n:"Integral Tentu",e:"📐",f:"∫ₐᵇ f(x)dx = F(b) − F(a)",d:"Integral tentu menghitung akumulasi nilai fungsi pada interval tertentu.",ex:"∫₀² 2x dx",st:["Antiturunan 2x adalah x².","Masukkan batas atas: 2² = 4.","Kurangi nilai batas bawah: 4 − 0 = 4."],q:[["∫₀¹ 2x dx = ...",["0","1","2","4"],1],["Integral tentu memiliki ...",["Batas bawah dan atas","Hanya variabel","Hanya konstanta","Tidak ada batas"],0],["Jika F(x)=x², F(3)=...",["6","9","3","12"],1]]},
{g:12,n:"Statistika Lanjutan",e:"📊",f:"Varians = rata-rata kuadrat selisih dari mean",d:"Statistika lanjutan mempelajari penyebaran data, misalnya varians dan simpangan baku.",ex:"Data 2 dan 4",st:["Rata-rata = (2+4)/2 = 3.","Kuadrat selisih: (2−3)²=1 dan (4−3)²=1.","Varians populasi = (1+1)/2 = 1."],q:[["Rata-rata 2, 4, 6 adalah ...",["3","4","5","6"],1],["Simpangan baku merupakan akar dari ...",["Mean","Median","Varians","Modus"],2],["Median dari 2, 5, 9 adalah ...",["2","5","9","16"],1]]},
{g:12,n:"Distribusi Peluang",e:"🎲",f:"Jumlah peluang seluruh hasil = 1",d:"Distribusi peluang memasangkan setiap hasil dengan peluang terjadinya.",ex:"Dua hasil A dan B memiliki peluang 0,4 dan 0,6",st:["Jumlah peluang harus 1.","0,4 + 0,6 = 1.","Jadi distribusi ini memenuhi syarat."],q:[["Jumlah semua peluang hasil yang mungkin adalah ...",["0","0,5","1","2"],2],["Jika P(A)=0,3 maka P(bukan A)=...",["0,3","0,7","1,3","1"],1],["Peluang tidak mungkin adalah ...",["0","0,5","1","2"],0]]},
{g:12,n:"Vektor",e:"➡️",f:"(a,b)+(c,d) = (a+c,b+d)",d:"Vektor memiliki besar dan arah, serta dapat dinyatakan dengan komponen.",ex:"(2,3) + (1,4)",st:["Jumlahkan komponen pertama: 2 + 1 = 3.","Jumlahkan komponen kedua: 3 + 4 = 7.","Hasilnya (3,7)."],q:[["(1,2)+(3,4) = ...",["(4,6)","(3,8)","(2,2)","(4,8)"],0],["Vektor memiliki ...",["Arah dan besar","Warna","Luas saja","Keliling"],0],["Besar vektor (3,4) adalah ...",["4","5","7","12"],1]]},
{g:12,n:"Dimensi Tiga",e:"🧊",f:"Diagonal kubus = s√3",d:"Dimensi tiga membahas jarak dan sudut pada bangun ruang.",ex:"Diagonal ruang kubus dengan sisi 2",st:["Gunakan rumus d = s√3.","Masukkan s = 2.","Diagonal ruang = 2√3."],q:[["Volume kubus sisi 3 adalah ...",["9","18","27","36"],2],["Diagonal bidang kubus sisi s adalah ...",["s√2","s√3","2s","s²"],0],["Bangun ruang memiliki ...",["Panjang saja","Dua dimensi","Tiga dimensi","Satu sisi"],2]]},
{g:12,n:"Program Linear",e:"📍",f:"Nilai optimum diuji pada titik pojok daerah feasible",d:"Program linear mencari nilai maksimum atau minimum dengan kendala linear.",ex:"Fungsi objektif Z=2x+y pada titik (2,1)",st:["Masukkan x=2 dan y=1.","Z = 2(2) + 1.","Z = 5."],q:[["Z=2x+y di titik (1,3) adalah ...",["4","5","6","7"],1],["Program linear menggunakan kendala ...",["Linear","Eksponensial saja","Akar saja","Trigonometri saja"],0],["Titik pojok dipakai untuk menguji nilai ...",["Optimum","Warna grafik","Panjang judul","Nama variabel"],0]]},
{g:12,n:"Kombinatorika",e:"🧩",f:"P(n,r) = n!/(n−r)!",d:"Kombinatorika menghitung cara menyusun atau memilih objek.",ex:"Banyak susunan 2 objek berbeda dari 3 objek",st:["Gunakan permutasi P(3,2).","P(3,2) = 3!/(3−2)! = 3!/1!.","Hasilnya 3 × 2 = 6."],q:[["3! = ...",["3","5","6","9"],2],["Banyak susunan 2 objek dari 3 objek berbeda adalah ...",["3","6","9","12"],1],["4! = ...",["8","12","16","24"],3]]},
{g:12,n:"Barisan dan Deret Tak Hingga",e:"♾️",f:"S∞ = a/(1−r), untuk |r| < 1",d:"Deret geometri tak hingga dapat memiliki jumlah terbatas jika rasio absolutnya kurang dari satu.",ex:"2 + 1 + 1/2 + ...",st:["Suku pertama a = 2 dan r = 1/2.","Karena |r| < 1, jumlah tak hingga ada.","S∞ = 2/(1−1/2) = 4."],q:[["Deret geometri tak hingga konvergen jika ...",["r>2","|r|<1","r=3","r<−2"],1],["Jumlah 1+1/2+1/4+... adalah ...",["1","2","3","4"],1],["Jika a=3 dan r=1/2, S∞ = ...",["3","4","6","9"],2]]}
];

let student = {name:"", grade:"10"};
let currentTopic = null;
let currentQuiz = [];
let answers = {};
let quizSubmitted = false;
let currentPage = "home";

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}
function loadScores() {
  try { return JSON.parse(localStorage.getItem("mathlearn_scores") || "[]"); }
  catch { return []; }
}
function saveScore(record) {
  const scores = loadScores();
  scores.unshift(record);
  localStorage.setItem("mathlearn_scores", JSON.stringify(scores.slice(0,100)));
}
function myScores() {
  return loadScores().filter(s => s.name.toLowerCase() === student.name.toLowerCase());
}
function setPage(page) {
  currentPage = page;
  $$(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.page === page));
  $("#sidebar").classList.remove("open");
  renderPage();
}
function pageHeader(title, desc) {
  return `<h1 class="page-title">${title}</h1><p class="page-desc">${desc}</p>`;
}
function renderHome() {
  const scores = myScores();
  const best = scores.length ? Math.max(...scores.map(s=>s.score)) : 0;
  return `
    <div class="hero">
      <div><h2>Hai, ${escapeHTML(student.name)}! 🌷</h2>
      <p>Siap belajar matematika hari ini? Pelan-pelan juga tidak apa-apa. Kamu pasti bisa!</p></div>
      <div class="hero-art">🐰📚</div>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><strong>30</strong><span>Materi tersedia</span></div>
      <div class="stat-card"><strong>${scores.length}</strong><span>Latihan selesai</span></div>
      <div class="stat-card"><strong>${best}</strong><span>Nilai terbaik</span></div>
    </div>
    <h3 class="section-heading">Mau belajar apa hari ini? 💜</h3>
    <div class="menu-grid">
      <div class="menu-card" data-go="materials"><div class="big-emoji">📚</div><h3>Materi</h3><p>Pelajari konsep dan rumus matematika.</p></div>
      <div class="menu-card" data-go="examples"><div class="big-emoji">✏️</div><h3>Contoh Soal</h3><p>Lihat contoh lengkap dengan langkah pengerjaan.</p></div>
      <div class="menu-card" data-go="practice"><div class="big-emoji">🧩</div><h3>Latihan Soal</h3><p>Uji pemahamanmu dan dapatkan nilai.</p></div>
    </div>
    <div class="content-card"><b>🌟 Tips hari ini</b><p>Jangan hanya menghafal rumus. Coba pahami kapan dan bagaimana rumus itu digunakan.</p></div>`;
}
function renderMaterials() {
  const grade = $("#gradeFilter")?.value || student.grade;
  const search = ($("#materialSearch")?.value || "").toLowerCase();
  const filtered = topics.filter(t => String(t.g) === grade && t.n.toLowerCase().includes(search));
  return `${pageHeader("Perpustakaan Materi 📚","Pilih topik untuk membaca penjelasan, rumus, dan contoh pengerjaannya.")}
    <div class="toolbar">
      <select id="gradeFilter" aria-label="Pilih kelas">
        ${[10,11,12].map(g=>`<option value="${g}" ${String(g)===grade?"selected":""}>Kelas ${g}</option>`).join("")}
      </select>
      <input id="materialSearch" placeholder="🔎 Cari materi..." value="${escapeHTML(search)}">
    </div>
    <p class="page-desc">Menampilkan ${filtered.length} materi untuk kelas ${grade}.</p>
    <div class="material-grid">
      ${filtered.map(t=>`<article class="material-card">
        <div class="material-emoji">${t.e}</div><span class="pill">Kelas ${t.g}</span>
        <h3>${t.n}</h3><p>${t.d}</p>
        <button class="small-btn" data-lesson="${t.n}">Pelajari materi →</button>
      </article>`).join("") || `<div class="empty-state">Materi tidak ditemukan 🌷</div>`}
    </div>`;
}
function renderLesson(t) {
  currentTopic = t;
  return `${pageHeader(`${t.e} ${t.n}`,`Materi matematika kelas ${t.g}`)}
    <button class="secondary-btn" id="backMaterials">← Kembali ke materi</button>
    <div class="content-card"><h3>🌷 Penjelasan</h3><p>${t.d}</p></div>
    <div class="content-card"><h3>💜 Rumus penting</h3><div class="formula-box">${t.f}</div></div>
    <div class="example-box"><h3>✏️ Contoh soal</h3><p><b>${t.ex}</b></p><h3>Langkah pengerjaan</h3>
    <ol class="steps">${t.st.map(s=>`<li>${s}</li>`).join("")}</ol></div>
    <button class="primary-btn" id="practiceThis">Coba latihan topik ini ✨</button>`;
}
function renderExamples() {
  return `${pageHeader("Contoh Soal ✏️","Belajar dari contoh soal yang disertai langkah pengerjaan.")}
  <div class="toolbar"><select id="exampleGrade">${[10,11,12].map(g=>`<option value="${g}" ${String(g)===student.grade?"selected":""}>Kelas ${g}</option>`).join("")}</select></div>
  <div id="exampleList">${exampleList(student.grade)}</div>`;
}
function exampleList(g) {
  return topics.filter(t=>String(t.g)===String(g)).map(t=>`<div class="content-card">
    <span class="pill">Kelas ${t.g}</span><h3>${t.e} ${t.n}</h3>
    <p><b>Soal:</b> ${t.ex}</p><p><b>Rumus:</b> ${t.f}</p>
    <b>Langkah pengerjaan:</b><ol class="steps">${t.st.map(s=>`<li>${s}</li>`).join("")}</ol>
  </div>`).join("");
}
function renderPractice() {
  const gradeTopics = topics.filter(t=>String(t.g)===student.grade);
  return `${pageHeader("Latihan Soal 🧩","Pilih materi lalu jawab pertanyaannya. Nilaimu akan tersimpan di browser ini.")}
    <div class="toolbar"><select id="practiceTopic">
      ${gradeTopics.map(t=>`<option value="${t.n}" ${currentTopic?.n===t.n?"selected":""}>${t.n}</option>`).join("")}
    </select><button id="startQuiz" class="small-btn">Mulai latihan ✨</button></div>
    <div id="quizArea" class="content-card"><div class="empty-state">Pilih materi dan tekan “Mulai latihan” untuk memulai. 🐱</div></div>`;
}
function startQuiz(topicName) {
  currentTopic = topics.find(t=>t.n===topicName) || topics.find(t=>String(t.g)===student.grade);
  // Gunakan semua soal yang tersedia pada topik ini, dengan urutan diacak.
  currentQuiz = [...currentTopic.q].sort(()=>Math.random()-.5);
  answers = {};
  quizSubmitted = false;
  renderQuizArea();
}
function renderQuizArea() {
  const area = $("#quizArea");
  if (!area || !currentTopic) return;
  area.innerHTML = `<h3>${currentTopic.e} Latihan: ${currentTopic.n}</h3>
    <p class="page-desc">Jawab semua ${currentQuiz.length} soal berikut, lalu periksa nilaimu.</p>
    ${currentQuiz.map((q,i)=>`<div class="content-card">
      <div class="quiz-question">${i+1}. ${q[0]}</div>
      <div class="options">${q[1].map((option,j)=>{
        let cls = "option-btn";
        if (quizSubmitted && j===q[2]) cls += " correct";
        else if (quizSubmitted && answers[i]===j && j!==q[2]) cls += " wrong";
        else if (answers[i]===j) cls += " selected";
        return `<button class="${cls}" data-q="${i}" data-a="${j}" ${quizSubmitted?"disabled":""}>${String.fromCharCode(65+j)}. ${option}</button>`;
      }).join("")}</div>
      ${quizSubmitted?`<p class="feedback">${answers[i]===q[2]?"Benar! Hebat! 🌟":`Jawaban yang benar: ${q[1][q[2]]}`}</p>`:""}
    </div>`).join("")}
    ${quizSubmitted?`<div class="formula-box">Nilaimu: ${Math.round(currentQuiz.filter((q,i)=>answers[i]===q[2]).length/currentQuiz.length*100)}</div>
      <button id="retryQuiz" class="primary-btn">Coba lagi 🔄</button>`:
      `<button id="submitQuiz" class="primary-btn">Periksa jawaban 🏆</button>`}`;
}
function submitQuiz() {
  if (Object.keys(answers).length < currentQuiz.length) {
    alert("Jawab semua soal dulu, ya! 💜");
    return;
  }
  quizSubmitted = true;
  const correct = currentQuiz.filter((q,i)=>answers[i]===q[2]).length;
  const score = Math.round(correct/currentQuiz.length*100);
  saveScore({name:student.name,grade:student.grade,topic:currentTopic.n,score,correct,total:currentQuiz.length,date:new Date().toLocaleDateString("id-ID")});
  renderQuizArea();
}
function renderScores() {
  const scores = myScores();
  const best = scores.length ? Math.max(...scores.map(s=>s.score)) : 0;
  const avg = scores.length ? Math.round(scores.reduce((a,s)=>a+s.score,0)/scores.length) : 0;
  return `${pageHeader("Nilai Saya 🏆","Lihat riwayat hasil latihan yang tersimpan di perangkat ini.")}
    <div class="stats-grid">
      <div class="stat-card"><strong>${scores.length}</strong><span>Latihan selesai</span></div>
      <div class="stat-card"><strong>${best}</strong><span>Nilai tertinggi</span></div>
      <div class="stat-card"><strong>${avg}</strong><span>Rata-rata nilai</span></div>
    </div>
    <div class="content-card"><h3>📒 Riwayat latihan</h3>
    ${scores.length?scores.map(s=>`<div class="score-row"><div><b>${escapeHTML(s.topic)}</b><br><small>${s.date} · Kelas ${s.grade}</small></div><b>${s.score}/100</b></div>`).join(""):`<div class="empty-state">Belum ada nilai. Yuk, kerjakan latihan pertamamu! 🌸</div>`}
    </div>`;
}
function renderPage() {
  const root = $("#pageContent");
  if (!root) return;
  if (currentPage==="home") root.innerHTML=renderHome();
  else if (currentPage==="materials") root.innerHTML=renderMaterials();
  else if (currentPage==="examples") root.innerHTML=renderExamples();
  else if (currentPage==="practice") root.innerHTML=renderPractice();
  else if (currentPage==="scores") root.innerHTML=renderScores();
}
$("#loginForm").addEventListener("submit", e=>{
  e.preventDefault();
  const name=$("#studentName").value.trim();
  const grade=$("#studentClass").value;
  if(!name || !grade) return;
  student={name,grade};
  $("#sideName").textContent=name;
  $("#sideClass").textContent="Kelas "+grade;
  $("#greeting").textContent="Halo, "+name+"! 🌸";
  $("#loginPage").classList.add("hidden");
  $("#app").classList.remove("hidden");
  setPage("home");
});
$$(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>setPage(btn.dataset.page)));
$("#logoutBtn").addEventListener("click",()=>{
  $("#app").classList.add("hidden");
  $("#loginPage").classList.remove("hidden");
  $("#studentName").value="";
  $("#studentClass").value="";
});
$("#menuToggle").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));

$("#pageContent").addEventListener("click",e=>{
  const go=e.target.closest("[data-go]");
  if(go) return setPage(go.dataset.go);

  const lesson=e.target.closest("[data-lesson]");
  if(lesson) {
    const t=topics.find(t=>t.n===lesson.dataset.lesson);
    if(t) $("#pageContent").innerHTML=renderLesson(t);
    return;
  }
  if(e.target.closest("#backMaterials")) return setPage("materials");
  if(e.target.closest("#practiceThis")) return setPage("practice");
  if(e.target.closest("#startQuiz")) return startQuiz($("#practiceTopic").value);
  if(e.target.closest("#submitQuiz")) return submitQuiz();
  if(e.target.closest("#retryQuiz")) return startQuiz(currentTopic.n);

  const option=e.target.closest("[data-q][data-a]");
  if(option && !quizSubmitted) {
    answers[Number(option.dataset.q)]=Number(option.dataset.a);
    renderQuizArea();
  }
});
$("#pageContent").addEventListener("change",e=>{
  if(e.target.id==="gradeFilter") {
    const search=$("#materialSearch")?.value||"";
    $("#pageContent").innerHTML=renderMaterials();
    const inp=$("#materialSearch");
    if(inp) inp.value=search;
  }
  if(e.target.id==="exampleGrade") $("#exampleList").innerHTML=exampleList(e.target.value);
});
$("#pageContent").addEventListener("input",e=>{
  if(e.target.id==="materialSearch") {
    const grade=$("#gradeFilter").value;
    const search=e.target.value.toLowerCase();
    const filtered=topics.filter(t=>String(t.g)===grade && t.n.toLowerCase().includes(search));
    const grid=$("#pageContent .material-grid");
    if(grid) grid.innerHTML=filtered.map(t=>`<article class="material-card">
      <div class="material-emoji">${t.e}</div><span class="pill">Kelas ${t.g}</span>
      <h3>${t.n}</h3><p>${t.d}</p><button class="small-btn" data-lesson="${t.n}">Pelajari materi →</button>
    </article>`).join("")||`<div class="empty-state">Materi tidak ditemukan 🌷</div>`;
  }
});
