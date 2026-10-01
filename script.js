/* =====================================================
   MATHLEARN 2.0
   20 MATERI × 20 SOAL = 400 SOAL
===================================================== */


/* =====================================================
   DATA MATERI
===================================================== */

const materials = [

    {
        id: 0,
        name: "Persamaan Linear",
        category: "Aljabar",
        description:
            "Mempelajari persamaan dengan variabel berpangkat satu.",
        formula: "ax + b = c"
    },

    {
        id: 1,
        name: "Persamaan Kuadrat",
        category: "Aljabar",
        description:
            "Mempelajari persamaan dengan pangkat tertinggi dua.",
        formula: "x = (-b ± √D) / 2a"
    },

    {
        id: 2,
        name: "Fungsi",
        category: "Aljabar",
        description:
            "Mempelajari hubungan antara input dan output.",
        formula: "f(x) = ax + b"
    },

    {
        id: 3,
        name: "Pertidaksamaan",
        category: "Aljabar",
        description:
            "Mempelajari hubungan menggunakan tanda <, >, ≤ dan ≥.",
        formula: "ax + b > c"
    },

    {
        id: 4,
        name: "Sistem Persamaan Linear",
        category: "Aljabar",
        description:
            "Menyelesaikan dua atau lebih persamaan linear.",
        formula: "ax + by = c"
    },

    {
        id: 5,
        name: "Eksponen",
        category: "Aljabar",
        description:
            "Mempelajari operasi bilangan berpangkat.",
        formula: "aᵐ × aⁿ = aᵐ⁺ⁿ"
    },

    {
        id: 6,
        name: "Logaritma",
        category: "Aljabar",
        description:
            "Mempelajari operasi kebalikan dari perpangkatan.",
        formula: "logₐ x = y"
    },

    {
        id: 7,
        name: "Barisan Aritmetika",
        category: "Barisan",
        description:
            "Mempelajari barisan dengan beda yang tetap.",
        formula: "Un = a + (n - 1)b"
    },

    {
        id: 8,
        name: "Barisan Geometri",
        category: "Barisan",
        description:
            "Mempelajari barisan dengan rasio yang tetap.",
        formula: "Un = arⁿ⁻¹"
    },

    {
        id: 9,
        name: "Matriks",
        category: "Aljabar",
        description:
            "Mempelajari operasi dan elemen pada matriks.",
        formula: "A + B"
    },

    {
        id: 10,
        name: "Trigonometri",
        category: "Trigonometri",
        description:
            "Mempelajari hubungan sisi dan sudut pada segitiga.",
        formula: "sin θ = depan / miring"
    },

    {
        id: 11,
        name: "Vektor",
        category: "Geometri",
        description:
            "Mempelajari besaran yang memiliki nilai dan arah.",
        formula: "|v| = √(x² + y²)"
    },

    {
        id: 12,
        name: "Statistika",
        category: "Statistika",
        description:
            "Mempelajari pengolahan dan analisis data.",
        formula: "Mean = Σx / n"
    },

    {
        id: 13,
        name: "Peluang",
        category: "Peluang",
        description:
            "Mempelajari kemungkinan terjadinya suatu kejadian.",
        formula: "P(A) = n(A) / n(S)"
    },

    {
        id: 14,
        name: "Limit",
        category: "Kalkulus",
        description:
            "Mempelajari nilai yang didekati suatu fungsi.",
        formula: "lim f(x)"
    },

    {
        id: 15,
        name: "Turunan",
        category: "Kalkulus",
        description:
            "Mempelajari laju perubahan suatu fungsi.",
        formula: "d(xⁿ)/dx = nxⁿ⁻¹"
    },

    {
        id: 16,
        name: "Integral",
        category: "Kalkulus",
        description:
            "Mempelajari anti-turunan dan luas.",
        formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C"
    },

    {
        id: 17,
        name: "Geometri",
        category: "Geometri",
        description:
            "Mempelajari bentuk, luas dan volume.",
        formula: "L = ½ × a × t"
    },

    {
        id: 18,
        name: "Program Linear",
        category: "Aljabar",
        description:
            "Mempelajari optimasi menggunakan pertidaksamaan.",
        formula: "Z = ax + by"
    },

    {
        id: 19,
        name: "Transformasi Geometri",
        category: "Geometri",
        description:
            "Mempelajari perubahan posisi dan bentuk objek.",
        formula: "(x,y) → (x',y')"
    }

];


/* =====================================================
   RUMUS
===================================================== */

const formulas = [

    ["Persamaan Linear", "ax + b = c", "Menentukan nilai variabel.", "Aljabar"],

    ["Persamaan Kuadrat", "ax² + bx + c = 0", "Bentuk umum persamaan kuadrat.", "Aljabar"],

    ["Rumus ABC", "x = (-b ± √(b² - 4ac)) / 2a", "Mencari akar persamaan kuadrat.", "Aljabar"],

    ["Diskriminan", "D = b² - 4ac", "Menentukan jenis akar.", "Aljabar"],

    ["Fungsi Linear", "f(x) = ax + b", "Fungsi dengan grafik garis lurus.", "Aljabar"],

    ["Eksponen", "aᵐ × aⁿ = aᵐ⁺ⁿ", "Perkalian bilangan berpangkat.", "Eksponen"],

    ["Eksponen", "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", "Pembagian bilangan berpangkat.", "Eksponen"],

    ["Logaritma", "logₐ x = y ⇔ aʸ = x", "Hubungan logaritma dan eksponen.", "Logaritma"],

    ["Barisan Aritmetika", "Un = a + (n - 1)b", "Suku ke-n barisan aritmetika.", "Barisan"],

    ["Jumlah Aritmetika", "Sn = n/2(2a + (n-1)b)", "Jumlah n suku.", "Barisan"],

    ["Barisan Geometri", "Un = arⁿ⁻¹", "Suku ke-n barisan geometri.", "Barisan"],

    ["Jumlah Geometri", "Sn = a(rⁿ - 1)/(r - 1)", "Jumlah n suku geometri.", "Barisan"],

    ["Peluang", "P(A) = n(A)/n(S)", "Peluang kejadian.", "Peluang"],

    ["Mean", "x̄ = Σx/n", "Rata-rata data.", "Statistika"],

    ["Pythagoras", "c² = a² + b²", "Sisi miring segitiga siku-siku.", "Geometri"],

    ["Luas Segitiga", "L = ½ × a × t", "Luas segitiga.", "Geometri"],

    ["Luas Lingkaran", "L = πr²", "Luas lingkaran.", "Geometri"],

    ["Keliling Lingkaran", "K = 2πr", "Keliling lingkaran.", "Geometri"],

    ["Turunan", "d(xⁿ)/dx = nxⁿ⁻¹", "Turunan fungsi pangkat.", "Kalkulus"],

    ["Integral", "∫xⁿdx = xⁿ⁺¹/(n+1)+C", "Integral fungsi pangkat.", "Kalkulus"],

    ["Sinus", "sin θ = depan/miring", "Perbandingan trigonometri.", "Trigonometri"],

    ["Cosinus", "cos θ = samping/miring", "Perbandingan trigonometri.", "Trigonometri"],

    ["Tangen", "tan θ = depan/samping", "Perbandingan trigonometri.", "Trigonometri"],

    ["Vektor", "|v| = √(x²+y²)", "Panjang vektor dua dimensi.", "Vektor"]

];


/* =====================================================
   STATE
===================================================== */

let currentMaterial = 0;

let currentQuestion = 0;

let currentScore = 0;

let currentCorrect = 0;

let currentWrong = 0;

let selectedAnswer = null;

let answerChecked = false;

let currentQuestions = [];


/* =====================================================
   USER
===================================================== */

let user = JSON.parse(
    localStorage.getItem("mathlearn_user")
) || null;


/* =====================================================
   SOAL GENERATOR
===================================================== */

function generateQuestions(materialId) {

    const questions = [];

    for (let i = 1; i <= 20; i++) {

        questions.push(
            createQuestion(materialId, i)
        );

    }

    return questions;
}


/* =====================================================
   PEMBUAT SOAL
===================================================== */

function createQuestion(id, number) {

    switch (id) {

        /* ---------------------------------------------
           1. PERSAMAAN LINEAR
        --------------------------------------------- */

        case 0: {

            const a = number + 1;

            const x = number + 2;

            const b = number;

            const c = a * x + b;

            return {

                question:
                    `Tentukan nilai x dari ${a}x + ${b} = ${c}.`,

                answer: x,

                options:
                    createOptions(x),

                explanation: [

                    `${a}x + ${b} = ${c}`,

                    `${a}x = ${c} - ${b}`,

                    `${a}x = ${c - b}`,

                    `x = ${c - b} ÷ ${a}`,

                    `<b>x = ${x}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           2. PERSAMAAN KUADRAT
        --------------------------------------------- */

        case 1: {

            const x = number % 5 + 1;

            const other = x + 2;

            const b = -(x + other);

            const c = x * other;

            return {

                question:
                    `Salah satu akar dari x² ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x + ${c} = 0 adalah ...`,

                answer: x,

                options:
                    createOptions(x),

                explanation: [

                    `Persamaan dapat difaktorkan menjadi:`,

                    `(x - ${x})(x - ${other}) = 0`,

                    `Maka salah satu kemungkinan akar adalah x = ${x}.`,

                    `<b>Jawaban: x = ${x}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           3. FUNGSI
        --------------------------------------------- */

        case 2: {

            const a = number;

            const b = number + 2;

            const x = 3;

            const answer = a * x + b;

            return {

                question:
                    `Jika f(x) = ${a}x + ${b}, tentukan f(${x}).`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `f(x) = ${a}x + ${b}`,

                    `Masukkan x = ${x}.`,

                    `f(${x}) = ${a}(${x}) + ${b}`,

                    `f(${x}) = ${answer}`,

                    `<b>Jadi f(${x}) = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           4. PERTIDAKSAMAAN
        --------------------------------------------- */

        case 3: {

            const a = 2;

            const b = number;

            const limit = number + 4;

            const answer = (limit - b) / a;

            return {

                question:
                    `Nilai x yang memenuhi ${a}x + ${b} > ${limit} adalah ...`,

                answer: `x > ${answer}`,

                options: [

                    `x > ${answer}`,

                    `x < ${answer}`,

                    `x = ${answer}`,

                    `x ≥ ${answer + 1}`

                ],

                explanation: [

                    `${a}x + ${b} > ${limit}`,

                    `${a}x > ${limit} - ${b}`,

                    `${a}x > ${limit - b}`,

                    `x > ${(limit - b) / a}`,

                    `<b>Jadi x > ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           5. SPLDV
        --------------------------------------------- */

        case 4: {

            const x = number;

            const y = 2;

            const a = x + y;

            const b = x - y;

            return {

                question:
                    `Jika x + y = ${a} dan x - y = ${b}, maka nilai x adalah ...`,

                answer: x,

                options:
                    createOptions(x),

                explanation: [

                    `x + y = ${a}`,

                    `x - y = ${b}`,

                    `Jumlahkan kedua persamaan.`,

                    `2x = ${a + b}`,

                    `x = ${a + b} ÷ 2`,

                    `<b>x = ${x}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           6. EKSPONEN
        --------------------------------------------- */

        case 5: {

            const exponent = number;

            const answer = Math.pow(2, exponent);

            return {

                question:
                    `Berapakah nilai 2^${exponent}?`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `2^${exponent}`,

                    `= 2 × `.repeat(
                        Math.max(0, exponent - 1)
                    ) + `2`,

                    `Hasilnya adalah ${answer}.`,

                    `<b>Jawaban = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           7. LOGARITMA
        --------------------------------------------- */

        case 6: {

            const exponent = number % 5 + 1;

            const answer = exponent;

            const value = Math.pow(10, exponent);

            return {

                question:
                    `Tentukan nilai log₁₀ ${value}.`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `log₁₀ ${value} = x`,

                    `Artinya 10ˣ = ${value}.`,

                    `Karena 10^${exponent} = ${value},`,

                    `maka x = ${exponent}.`,

                    `<b>Jawaban = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           8. BARISAN ARITMETIKA
        --------------------------------------------- */

        case 7: {

            const a = number;

            const b = 3;

            const n = 5;

            const answer =
                a + (n - 1) * b;

            return {

                question:
                    `Barisan aritmetika memiliki suku pertama ${a} dan beda ${b}. Tentukan U${n}.`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `Rumus: Un = a + (n - 1)b`,

                    `U${n} = ${a} + (${n} - 1)(${b})`,

                    `U${n} = ${a} + ${((n - 1) * b)}`,

                    `<b>U${n} = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           9. BARISAN GEOMETRI
        --------------------------------------------- */

        case 8: {

            const a = 2;

            const r = 2;

            const n = number % 5 + 2;

            const answer =
                a * Math.pow(r, n - 1);

            return {

                question:
                    `Barisan geometri memiliki a = ${a} dan r = ${r}. Tentukan U${n}.`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `Rumus: Un = arⁿ⁻¹`,

                    `U${n} = ${a}(${r})^${n - 1}`,

                    `U${n} = ${answer}`,

                    `<b>Jawaban = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           10. MATRIKS
        --------------------------------------------- */

        case 9: {

            const a = number;

            const b = number + 1;

            const answer = a + b;

            return {

                question:
                    `Jika A = [${a}] dan B = [${b}], maka A + B = ...`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `A + B = [${a}] + [${b}]`,

                    `Jumlahkan elemen yang bersesuaian.`,

                    `[${a} + ${b}]`,

                    `<b>Hasil = [${answer}]</b>`

                ]

            };

        }


        /* ---------------------------------------------
           11. TRIGONOMETRI
        --------------------------------------------- */

        case 10: {

            const values = [

                {
                    angle: "30°",
                    answer: "1/2"
                },

                {
                    angle: "45°",
                    answer: "√2/2"
                },

                {
                    angle: "60°",
                    answer: "√3/2"
                }

            ];

            const item =
                values[number % values.length];

            return {

                question:
                    `Nilai sin ${item.angle} adalah ...`,

                answer: item.answer,

                options: [

                    item.answer,

                    "1",

                    "0",

                    "√2"

                ],

                explanation: [

                    `Gunakan nilai sudut istimewa.`,

                    `sin ${item.angle} = ${item.answer}.`,

                    `<b>Jawaban = ${item.answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           12. VEKTOR
        --------------------------------------------- */

        case 11: {

            const x = number;

            const y = number;

            const squared =
                x * x + y * y;

            const answer =
                Math.sqrt(squared);

            return {

                question:
                    `Tentukan panjang vektor v = (${x}, ${y}).`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `Rumus |v| = √(x² + y²)`,

                    `|v| = √(${x}² + ${y}²)`,

                    `|v| = √${squared}`,

                    `<b>|v| = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           13. STATISTIKA
        --------------------------------------------- */

        case 12: {

            const data = [
                number,
                number + 2,
                number + 4,
                number + 6
            ];

            const sum =
                data.reduce(
                    (a, b) => a + b,
                    0
                );

            const answer =
                sum / data.length;

            return {

                question:
                    `Tentukan mean dari data ${data.join(", ")}.`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `Jumlah data = ${sum}`,

                    `Banyak data = ${data.length}`,

                    `Mean = jumlah data / banyak data`,

                    `Mean = ${sum} / ${data.length}`,

                    `<b>Mean = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           14. PELUANG
        --------------------------------------------- */

        case 13: {

            const total = 10;

            const favorable =
                number % 5 + 1;

            const answer =
                `${favorable}/${total}`;

            return {

                question:
                    `Sebuah kejadian memiliki ${favorable} hasil yang diinginkan dari ${total} kemungkinan. Peluangnya adalah ...`,

                answer,

                options: [

                    answer,

                    `${favorable + 1}/${total}`,

                    `${favorable}/${total + 1}`,

                    `1/${total}`

                ],

                explanation: [

                    `P(A) = n(A) / n(S)`,

                    `P(A) = ${favorable} / ${total}`,

                    `<b>P(A) = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           15. LIMIT
        --------------------------------------------- */

        case 14: {

            const a = number;

            const answer =
                a * a + 2 * a;

            return {

                question:
                    `Tentukan lim(x→${a}) (x² + 2x).`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `Substitusi x = ${a}.`,

                    `(${a})² + 2(${a})`,

                    `= ${a * a} + ${2 * a}`,

                    `<b>= ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           16. TURUNAN
        --------------------------------------------- */

        case 15: {

            const n = number % 5 + 2;

            return {

                question:
                    `Turunan dari f(x) = x^${n} adalah ...`,

                answer:
                    `${n}x^${n - 1}`,

                options: [

                    `${n}x^${n - 1}`,

                    `x^${n + 1}`,

                    `${n - 1}x^${n}`,

                    `x^${n}`

                ],

                explanation: [

                    `Gunakan aturan pangkat:`,

                    `d(xⁿ)/dx = nxⁿ⁻¹`,

                    `f(x) = x^${n}`,

                    `f'(x) = ${n}x^${n - 1}`,

                    `<b>Jawaban = ${n}x^${n - 1}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           17. INTEGRAL
        --------------------------------------------- */

        case 16: {

            const n = number % 4 + 1;

            const newPower = n + 1;

            return {

                question:
                    `Integral dari x^${n} dx adalah ...`,

                answer:
                    `x^${newPower}/${newPower} + C`,

                options: [

                    `x^${newPower}/${newPower} + C`,

                    `${n}x + C`,

                    `x^${n} + C`,

                    `x/${newPower} + C`

                ],

                explanation: [

                    `Gunakan rumus:`,

                    `∫xⁿ dx = xⁿ⁺¹/(n+1) + C`,

                    `n = ${n}`,

                    `∫x^${n} dx = x^${newPower}/${newPower} + C`,

                    `<b>Jawaban benar.</b>`

                ]

            };

        }


        /* ---------------------------------------------
           18. GEOMETRI
        --------------------------------------------- */

        case 17: {

            const base = number + 2;

            const height = 4;

            const answer =
                0.5 * base * height;

            return {

                question:
                    `Sebuah segitiga memiliki alas ${base} cm dan tinggi ${height} cm. Berapakah luasnya?`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `Rumus luas segitiga:`,

                    `L = ½ × alas × tinggi`,

                    `L = ½ × ${base} × ${height}`,

                    `L = ${answer} cm²`,

                    `<b>Jawaban = ${answer} cm²</b>`

                ]

            };

        }


        /* ---------------------------------------------
           19. PROGRAM LINEAR
        --------------------------------------------- */

        case 18: {

            const x = number;

            const y = 2;

            const a = 3;

            const b = 4;

            const answer =
                a * x + b * y;

            return {

                question:
                    `Jika Z = ${a}x + ${b}y, x = ${x}, dan y = ${y}, maka nilai Z adalah ...`,

                answer,

                options:
                    createOptions(answer),

                explanation: [

                    `Z = ${a}x + ${b}y`,

                    `Z = ${a}(${x}) + ${b}(${y})`,

                    `Z = ${a * x} + ${b * y}`,

                    `<b>Z = ${answer}</b>`

                ]

            };

        }


        /* ---------------------------------------------
           20. TRANSFORMASI
        --------------------------------------------- */

        case 19: {

            const x = number;

            const y = number + 1;

            const answer = `(${x}, ${-y})`;

            return {

                question:
                    `Titik P(${x}, ${y}) dicerminkan terhadap sumbu X. Koordinat bayangannya adalah ...`,

                answer,

                options: [

                    answer,

                    `(${-x}, ${y})`,

                    `(${y}, ${x})`,

                    `(${-x}, ${-y})`

                ],

                explanation: [

                    `Pencerminan terhadap sumbu X menggunakan aturan:`,

                    `(x, y) → (x, -y)`,

                    `P(${x}, ${y}) → (${x}, ${-y})`,

                    `<b>Jadi bayangannya ${answer}</b>`

                ]

            };

        }

    }

}


/* =====================================================
   OPTIONS
===================================================== */

function createOptions(answer) {

    const numeric =
        Number(answer);

    if (!Number.isNaN(numeric)) {

        const values = new Set();

        values.add(numeric);

        values.add(numeric + 2);

        values.add(numeric - 2);

        values.add(numeric + 5);

        return [...values]
            .sort(() => Math.random() - .5)
            .map(String);

    }


    return [

        String(answer),

        "2",

        "4",

        "6"

    ];

}


/* =====================================================
   LOGIN
===================================================== */

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document
                    .getElementById("namaInput")
                    .value
                    .trim();

            const kelas =
                document
                    .getElementById("kelasInput")
                    .value;


            if (!name || !kelas) {

                alert(
                    "Silakan isi nama dan kelas."
                );

                return;

            }


            user = {
                name,
                kelas
            };


            localStorage.setItem(
                "mathlearn_user",
                JSON.stringify(user)
            );


            startApp();

        }
    );


/* =====================================================
   START APP
===================================================== */

function startApp() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");


    document
        .getElementById("app")
        .classList.remove("hidden");


    updateProfile();

    renderMaterials();

    renderExercises();

    renderFormulas();

    renderScores();

    updateDashboard();

    showPage("dashboardPage");

}


/* =====================================================
   PROFILE
===================================================== */

function updateProfile() {

    if (!user) return;


    document
        .getElementById("namaUser")
        .textContent =
        user.name;


    const initial =
        user.name
            .charAt(0)
            .toUpperCase();


    document
        .getElementById("profileInitial")
        .textContent =
        initial;


    document
        .getElementById("profileLargeInitial")
        .textContent =
        initial;


    document
        .getElementById("profileName")
        .textContent =
        user.name;


    document
        .getElementById("profileClass")
        .textContent =
        user.kelas;

}


/* =====================================================
   NAVIGATION
===================================================== */

function showPage(id) {

    document
        .querySelectorAll(".app-page")
        .forEach(page => {

            page.classList.remove(
                "active"
            );

        });


    const page =
        document.getElementById(id);


    if (page) {

        page.classList.add(
            "active"
        );

    }


    document
        .querySelectorAll(".nav-item")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    if (id === "dashboardPage") {

        document
            .querySelectorAll(".nav-item")[0]
            .classList.add("active");

    }

    if (id === "materiPage") {

        document
            .querySelectorAll(".nav-item")[1]
            .classList.add("active");

    }

    if (id === "latihanPage") {

        document
            .querySelectorAll(".nav-item")[2]
            .classList.add("active");

    }

    if (id === "rumusPage") {

        document
            .querySelectorAll(".nav-item")[3]
            .classList.add("active");

    }

    if (id === "nilaiPage") {

        document
            .querySelectorAll(".nav-item")[4]
            .classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   MATERIAL RENDER
===================================================== */

function renderMaterials(
    search = ""
) {

    const container =
        document.getElementById(
            "materiContainer"
        );


    container.innerHTML = "";


    const filtered =
        materials.filter(item =>

            item.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );


    filtered.forEach(item => {

        const favorite =
            isFavorite(item.id);


        const progress =
            getMaterialProgress(
                item.id
            );


        container.innerHTML += `

            <div class="material-card">

                <button
                    class="favorite-btn"
                    onclick="toggleFavorite(event, ${item.id})"
                >
                    ${favorite ? "⭐" : "☆"}
                </button>

                <div class="material-number">
                    MATERI ${String(item.id + 1).padStart(2, "0")}
                    • ${item.category}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <div class="material-bottom">

                    <span>
                        Progress ${progress}%
                    </span>

                    <span
                        class="open-material"
                        onclick="openMaterial(${item.id})"
                    >
                        Pelajari →
                    </span>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   DETAIL MATERIAL
===================================================== */

function openMaterial(id) {

    currentMaterial = id;

    const item =
        materials[id];


    const detail =
        document.getElementById(
            "detailContainer"
        );


    detail.innerHTML = `

        <div class="detail-hero">

            <span>
                ${item.category.toUpperCase()}
            </span>

            <h1>
                ${item.name}
            </h1>

            <p>
                ${item.description}
            </p>

        </div>


        <div class="detail-section">

            <h2>
                📖 Pengertian
            </h2>

            <p>
                ${item.description}
                Pada materi ini kamu akan
                mempelajari konsep dasar,
                rumus dan cara mengerjakan
                soal yang berkaitan dengan
                ${item.name}.
            </p>

        </div>


        <div class="detail-section">

            <h2>
                📐 Rumus Utama
            </h2>

            <div class="formula-main">
                ${item.formula}
            </div>

        </div>


        <div class="detail-section">

            <h2>
                💡 Contoh Soal
            </h2>

            ${getExample(item.id)}

        </div>


        <div class="detail-section">

            <h2>
                🧠 Yang Perlu Diingat
            </h2>

            <div class="step">
                <strong>1. Pahami soal</strong><br>
                Tentukan informasi yang diketahui
                dan apa yang ditanyakan.
            </div>

            <div class="step">
                <strong>2. Pilih rumus</strong><br>
                Gunakan rumus yang sesuai dengan
                konsep materi.
            </div>

            <div class="step">
                <strong>3. Hitung dengan teliti</strong><br>
                Masukkan nilai dan lakukan
                perhitungan secara bertahap.
            </div>

            <div class="step">
                <strong>4. Periksa kembali</strong><br>
                Pastikan hasil akhir sesuai
                dengan pertanyaan.
            </div>

        </div>


        <div class="detail-actions">

            <button
                class="primary-btn"
                onclick="startQuiz(${item.id})"
            >
                📝 Kerjakan 20 Soal
            </button>

            <button
                class="secondary-btn"
                onclick="toggleFavorite(null, ${item.id})"
            >
                ${isFavorite(item.id)
                    ? "⭐ Hapus Favorit"
                    : "☆ Tambah Favorit"}
            </button>

        </div>

    `;


    showPage("detailPage");

    saveLastMaterial(id);

}


/* =====================================================
   CONTOH SOAL
===================================================== */

function getExample(id) {

    const q =
        createQuestion(id, 3);


    return `

        <div class="example-question">

            <strong>
                Soal:
            </strong>

            <br><br>

            ${q.question}

        </div>


        <br>

        <strong>
            Pembahasan:
        </strong>


        ${q.explanation.map(
            (step, index) => `

                <div class="step">

                    <strong>
                        Langkah ${index + 1}
                    </strong>

                    <br>

                    ${step}

                </div>

            `
        ).join("")}

    `;

}


/* =====================================================
   EXERCISE RENDER
===================================================== */

function renderExercises() {

    const container =
        document.getElementById(
            "latihanContainer"
        );


    container.innerHTML = "";


    materials.forEach(item => {

        const progress =
            getMaterialProgress(
                item.id
            );


        container.innerHTML += `

            <div class="material-card">

                <div class="material-number">
                    ${String(item.id + 1).padStart(2, "0")}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <div class="material-bottom">

                    <span>
                        ${progress}% selesai
                    </span>

                    <span
                        class="open-material"
                        onclick="startQuiz(${item.id})"
                    >
                        20 Soal →
                    </span>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   START QUIZ
===================================================== */

function startQuiz(id) {

    currentMaterial = id;

    currentQuestion = 0;

    currentScore = 0;

    currentCorrect = 0;

    currentWrong = 0;

    selectedAnswer = null;

    answerChecked = false;


    currentQuestions =
        generateQuestions(id);


    document
        .getElementById("quizMaterial")
        .textContent =
        materials[id].name;


    document
        .getElementById("quizCategory")
        .textContent =
        materials[id].category.toUpperCase();


    renderQuestion();

    showPage("quizPage");

}


/* =====================================================
   RENDER QUESTION
===================================================== */

function renderQuestion() {

    const q =
        currentQuestions[
            currentQuestion
        ];


    selectedAnswer = null;

    answerChecked = false;


    document
        .getElementById("quizNumber")
        .textContent =
        `Soal ${currentQuestion + 1} dari 20`;


    document
        .getElementById("quizScore")
        .textContent =
        `Nilai: ${currentScore}`;


    document
        .getElementById("quizProgress")
        .style.width =
        `${((currentQuestion + 1) / 20) * 100}%`;


    document
        .getElementById("questionText")
        .innerHTML =
        q.question;


    const options =
        document.getElementById(
            "optionsContainer"
        );


    options.innerHTML = "";


    q.options.forEach(
        (option, index) => {

            options.innerHTML += `

                <button
                    class="option"
                    onclick="selectOption(${index})"
                >

                    <strong>
                        ${String.fromCharCode(65 + index)}.
                    </strong>

                    ${option}

                </button>

            `;

        }
    );


    const feedback =
        document.getElementById(
            "answerFeedback"
        );


    feedback.classList.add(
        "hidden"
    );

    feedback.classList.remove(
        "wrong-feedback"
    );


    document
        .getElementById("checkAnswerBtn")
        .classList.remove(
            "hidden"
        );


    document
        .getElementById("nextQuestionBtn")
        .classList.add(
            "hidden"
        );

}


/* =====================================================
   SELECT OPTION
===================================================== */

function selectOption(index) {

    if (answerChecked) return;


    selectedAnswer = index;


    document
        .querySelectorAll(".option")
        .forEach(
            (button, i) => {

                button.classList.toggle(
                    "selected",
                    i === index
                );

            }
        );

}


/* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer() {

    if (selectedAnswer === null) {

        alert(
            "Pilih jawaban terlebih dahulu."
        );

        return;

    }


    const q =
        currentQuestions[
            currentQuestion
        ];


    answerChecked = true;


    const selected =
        q.options[
            selectedAnswer
        ];


    const correct =
        String(selected) ===
        String(q.answer);


    if (correct) {

        currentScore += 5;

        currentCorrect++;

    } else {

        currentWrong++;

    }


    document
        .querySelectorAll(".option")
        .forEach(
            (button, index) => {

                const value =
                    q.options[index];


                if (
                    String(value) ===
                    String(q.answer)
                ) {

                    button.classList.add(
                        "correct"
                    );

                }


                if (
                    index === selectedAnswer &&
                    !correct
                ) {

                    button.classList.add(
                        "wrong"
                    );

                }

            }
        );


    const feedback =
        document.getElementById(
            "answerFeedback"
        );


    feedback.innerHTML = `

        <h3>
            ${correct
                ? "✅ Jawaban Benar!"
                : "❌ Jawaban Belum Tepat"
            }
        </h3>

        <p>
            Jawaban yang benar:
            <strong>
                ${q.answer}
            </strong>
        </p>

        <br>

        <strong>
            💡 Langkah Pengerjaan
        </strong>

        ${q.explanation.map(
            (step, index) => `

                <div class="explanation-step">

                    <strong>
                        ${index + 1}.
                    </strong>

                    ${step}

                </div>

            `
        ).join("")}

    `;


    if (!correct) {

        feedback.classList.add(
            "wrong-feedback"
        );

    }


    feedback.classList.remove(
        "hidden"
    );


    document
        .getElementById("checkAnswerBtn")
        .classList.add(
            "hidden"
        );


    document
        .getElementById("nextQuestionBtn")
        .classList.remove(
            "hidden"
        );


    document
        .getElementById("quizScore")
        .textContent =
        `Nilai: ${currentScore}`;

}


/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {

    if (currentQuestion < 19) {

        currentQuestion++;

        renderQuestion();

    } else {

        finishQuiz();

    }

}


/* =====================================================
   FINISH QUIZ
===================================================== */

function finishQuiz() {

    const score =
        currentScore;


    const oldBest =
        Number(
            localStorage.getItem(
                `best_${currentMaterial}`
            ) || 0
        );


    if (score > oldBest) {

        localStorage.setItem(
            `best_${currentMaterial}`,
            score
        );

    }


    localStorage.setItem(
        `progress_${currentMaterial}`,
        "100"
    );


    localStorage.setItem(
        `done_${currentMaterial}`,
        "20"
    );


    localStorage.setItem(
        `score_${currentMaterial}`,
        score
    );


    document
        .getElementById("resultMaterial")
        .textContent =
        materials[currentMaterial].name;


    document
        .getElementById("resultScore")
        .textContent =
        score;


    document
        .getElementById("resultCorrect")
        .textContent =
        currentCorrect;


    document
        .getElementById("resultWrong")
        .textContent =
        currentWrong;


    let description;


    if (score >= 90) {

        description =
            "Luar biasa! Pemahamanmu sudah sangat baik. 🏆";

    } else if (score >= 75) {

        description =
            "Bagus! Terus berlatih agar hasilnya semakin baik. 💪";

    } else if (score >= 60) {

        description =
            "Cukup baik. Coba pelajari kembali pembahasannya.";

    } else {

        description =
            "Jangan menyerah. Pelajari materi lalu coba lagi.";

    }


    document
        .getElementById("resultDescription")
        .textContent =
        description;


    updateDashboard();

    renderScores();

    renderMaterials();

    renderExercises();


    showPage("resultPage");

}


/* =====================================================
   RETRY
===================================================== */

function retryQuiz() {

    startQuiz(
        currentMaterial
    );

}


/* =====================================================
   EXIT QUIZ
===================================================== */

function keluarQuiz() {

    if (
        confirm(
            "Keluar dari latihan? Progress latihan saat ini tidak disimpan."
        )
    ) {

        showPage("latihanPage");

    }

}


/* =====================================================
   FORMULA RENDER
===================================================== */

function renderFormulas(
    search = ""
) {

    const container =
        document.getElementById(
            "rumusContainer"
        );


    container.innerHTML = "";


    formulas
        .filter(item => {

            const text =
                item.join(" ")
                    .toLowerCase();

            return text.includes(
                search.toLowerCase()
            );

        })
        .forEach(item => {

            container.innerHTML += `

                <div class="formula-card">

                    <div class="formula-category">
                        ${item[3]}
                    </div>

                    <h3>
                        ${item[0]}
                    </h3>

                    <div class="formula">
                        ${item[1]}
                    </div>

                    <p>
                        ${item[2]}
                    </p>

                </div>

            `;

        });

}


/* =====================================================
   SCORE
===================================================== */

function renderScores() {

    const container =
        document.getElementById(
            "nilaiContainer"
        );


    container.innerHTML = "";


    materials.forEach(item => {

        const score =
            Number(
                localStorage.getItem(
                    `score_${item.id}`
                ) || 0
            );


        container.innerHTML += `

            <div class="score-row">

                <div class="score-row-top">

                    <strong>
                        ${item.name}
                    </strong>

                    <strong>
                        ${score}
                    </strong>

                </div>

                <div class="score-bar">

                    <div
                        style="width:${score}%"
                    ></div>

                </div>

            </div>

        `;

    });


    updateOverallScore();

}


/* =====================================================
   OVERALL SCORE
===================================================== */

function updateOverallScore() {

    let scores = [];


    materials.forEach(item => {

        const score =
            Number(
                localStorage.getItem(
                    `score_${item.id}`
                ) || 0
            );


        if (score > 0) {

            scores.push(score);

        }

    });


    const average =
        scores.length
            ? Math.round(
                scores.reduce(
                    (a, b) => a + b,
                    0
                ) / scores.length
            )
            : 0;


    document
        .getElementById("overallScore")
        .textContent =
        average;


    document
        .getElementById("overallPercent")
        .textContent =
        average + "%";

}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    let completed = 0;

    let questions = 0;

    let scores = [];


    materials.forEach(item => {

        const score =
            Number(
                localStorage.getItem(
                    `score_${item.id}`
                ) || 0
            );


        const done =
            Number(
                localStorage.getItem(
                    `done_${item.id}`
                ) || 0
            );


        if (score > 0) {

            completed++;

            scores.push(score);

        }


        questions += done;

    });


    const average =
        scores.length
            ? Math.round(
                scores.reduce(
                    (a, b) => a + b,
                    0
                ) / scores.length
            )
            : 0;


    const highest =
        scores.length
            ? Math.max(...scores)
            : 0;


    document
        .getElementById("statMateri")
        .textContent =
        completed;


    document
        .getElementById("statSoal")
        .textContent =
        questions;


    document
        .getElementById("statNilai")
        .textContent =
        average;


    document
        .getElementById("statTertinggi")
        .textContent =
        highest;


    const last =
        Number(
            localStorage.getItem(
                "last_material"
            ) || 0
        );


    document
        .getElementById("lastMaterial")
        .textContent =
        materials[last].name;


    document
        .getElementById("lastProgress")
        .style.width =
        getMaterialProgress(last) + "%";

}


/* =====================================================
   LAST MATERIAL
===================================================== */

function saveLastMaterial(id) {

    localStorage.setItem(
        "last_material",
        id
    );


    updateDashboard();

}


function continueLearning() {

    const last =
        Number(
            localStorage.getItem(
                "last_material"
            ) || 0
        );


    openMaterial(last);

}


/* =====================================================
   PROGRESS
===================================================== */

function getMaterialProgress(id) {

    return Number(
        localStorage.getItem(
            `progress_${id}`
        ) || 0
    );

}


/* =====================================================
   FAVORITES
===================================================== */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem(
            "mathlearn_favorites"
        ) || "[]"
    );

}


function isFavorite(id) {

    return getFavorites()
        .includes(id);

}


function toggleFavorite(event, id) {

    if (event) {

        event.stopPropagation();

    }


    let favorites =
        getFavorites();


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "mathlearn_favorites",
        JSON.stringify(
            favorites
        )
    );


    renderMaterials();

    renderFavorites();


    if (
        document
            .getElementById("detailPage")
            .classList.contains("active")
    ) {

        openMaterial(id);

    }

}


/* =====================================================
   FAVORITES PAGE
===================================================== */

function renderFavorites() {

    const container =
        document.getElementById(
            "favoritContainer"
        );


    const favorites =
        getFavorites();


    if (!favorites.length) {

        container.innerHTML = `

            <div class="detail-section">

                <h2>
                    ⭐ Belum ada favorit
                </h2>

                <p>
                    Tandai materi dengan tombol ☆
                    untuk menyimpannya di sini.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    favorites.forEach(id => {

        const item =
            materials[id];


        container.innerHTML += `

            <div
                class="material-card"
                onclick="openMaterial(${id})"
            >

                <div class="material-number">
                    MATERI ${id + 1}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <div class="material-bottom">

                    <span>
                        ⭐ Favorit
                    </span>

                    <span class="open-material">
                        Buka →
                    </span>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   SEARCH
===================================================== */

document
    .getElementById("searchMateri")
    .addEventListener(
        "input",
        function() {

            renderMaterials(
                this.value
            );

        }
    );


document
    .getElementById("searchRumus")
    .addEventListener(
        "input",
        function() {

            renderFormulas(
                this.value
            );

        }
    );


/* =====================================================
   DARK MODE
===================================================== */

document
    .getElementById("darkModeBtn")
    .addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "dark"
            );


            const dark =
                document.body.classList.contains(
                    "dark"
                );


            localStorage.setItem(
                "mathlearn_dark",
                dark
            );


            this.textContent =
                dark ? "☀️" : "🌙";

        }
    );


/* =====================================================
   PROFILE MODAL
===================================================== */

document
    .getElementById("profileBtn")
    .addEventListener(
        "click",
        function() {

            document
                .getElementById(
                    "profileModal"
                )
                .classList.remove(
                    "hidden"
                );

        }
    );


function closeProfile() {

    document
        .getElementById(
            "profileModal"
        )
        .classList.add(
            "hidden"
        );

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    if (
        confirm(
            "Yakin ingin keluar?"
        )
    ) {

        localStorage.removeItem(
            "mathlearn_user"
        );


        location.reload();

    }

}


/* =====================================================
   DARK MODE LOAD
===================================================== */

if (
    localStorage.getItem(
        "mathlearn_dark"
    ) === "true"
) {

    document.body.classList.add(
        "dark"
    );


    document
        .getElementById(
            "darkModeBtn"
        )
        .textContent =
        "☀️";

}


/* =====================================================
   INITIALIZE
===================================================== */

renderFavorites();


if (user) {

    startApp();

}