/* =====================================================
   ASIA EXPLORER
   JAVASCRIPT
===================================================== */


/* =====================================================
   DATA NEGARA ASIA
===================================================== */

const countries = [

    {
        name: "Indonesia",
        flag: "🇮🇩",
        region: "Asia Tenggara",
        capital: "Jakarta",
        currency: "Rupiah (IDR)",
        population: "± 280 juta",
        language: "Bahasa Indonesia",
        leader: "Presiden Republik Indonesia",
        ethnic: "Jawa, Sunda, Batak, Madura, Bugis, Dayak, Papua, dll.",
        food: "Nasi goreng, rendang, sate, gado-gado",
        history:
            "Indonesia memiliki sejarah panjang yang dipengaruhi kerajaan Hindu-Buddha, kerajaan Islam, kolonialisme Eropa, dan perjuangan kemerdekaan. Indonesia memproklamasikan kemerdekaan pada 17 Agustus 1945.",
        culture:
            "Indonesia memiliki ribuan pulau dan keragaman budaya yang sangat besar, termasuk batik, wayang, gamelan, tari tradisional, dan berbagai upacara adat."
    },

    {
        name: "Malaysia",
        flag: "🇲🇾",
        region: "Asia Tenggara",
        capital: "Kuala Lumpur",
        currency: "Ringgit (MYR)",
        population: "± 35 juta",
        language: "Bahasa Melayu",
        leader: "Perdana Menteri",
        ethnic: "Melayu, Tionghoa, India, Iban, Kadazan-Dusun",
        food: "Nasi lemak, roti canai, laksa",
        history:
            "Malaysia berkembang dari berbagai kesultanan Melayu dan kemudian mengalami pengaruh Portugis, Belanda, serta Inggris. Federasi Malaysia dibentuk pada tahun 1963.",
        culture:
            "Budaya Malaysia merupakan perpaduan tradisi Melayu, Tionghoa, India dan berbagai masyarakat pribumi."
    },

    {
        name: "Singapura",
        flag: "🇸🇬",
        region: "Asia Tenggara",
        capital: "Singapura",
        currency: "Dolar Singapura (SGD)",
        population: "± 6 juta",
        language: "Melayu, Inggris, Mandarin, Tamil",
        leader: "Perdana Menteri",
        ethnic: "Tionghoa, Melayu, India, dan kelompok lainnya",
        food: "Hainanese chicken rice, laksa, chili crab",
        history:
            "Singapura merupakan pusat perdagangan penting di Asia Tenggara. Negara ini menjadi negara merdeka pada 9 Agustus 1965.",
        culture:
            "Singapura dikenal sebagai masyarakat multikultural dengan perpaduan budaya Asia dan pengaruh global."
    },

    {
        name: "Thailand",
        flag: "🇹🇭",
        region: "Asia Tenggara",
        capital: "Bangkok",
        currency: "Baht (THB)",
        population: "± 71 juta",
        language: "Bahasa Thai",
        leader: "Perdana Menteri",
        ethnic: "Thai, Lao, Melayu, Karen, Hmong",
        food: "Pad Thai, Tom Yum, Green Curry",
        history:
            "Thailand sebelumnya dikenal sebagai Siam dan merupakan salah satu kerajaan di Asia Tenggara yang mempertahankan kemerdekaannya dari kolonialisme Eropa.",
        culture:
            "Budaya Thailand sangat dipengaruhi Buddhisme Theravada, tradisi kerajaan, seni, musik, dan kuliner."
    },

    {
        name: "Vietnam",
        flag: "🇻🇳",
        region: "Asia Tenggara",
        capital: "Hanoi",
        currency: "Dong (VND)",
        population: "± 100 juta",
        language: "Bahasa Vietnam",
        leader: "Presiden",
        ethnic: "Kinh, Tay, Thai, Muong, Khmer",
        food: "Pho, Banh Mi, Bun Cha",
        history:
            "Vietnam memiliki sejarah panjang kerajaan dan mengalami masa kolonial Prancis. Setelah berbagai konflik dan perjuangan kemerdekaan, Vietnam bersatu pada tahun 1975.",
        culture:
            "Budaya Vietnam memiliki pengaruh kuat dari tradisi lokal, Konfusianisme, Buddhisme dan sejarah Asia Timur."
    },

    {
        name: "Filipina",
        flag: "🇵🇭",
        region: "Asia Tenggara",
        capital: "Manila",
        currency: "Peso Filipina (PHP)",
        population: "± 115 juta",
        language: "Filipino dan Inggris",
        leader: "Presiden",
        ethnic: "Tagalog, Cebuano, Ilocano, Bisaya, dan lainnya",
        food: "Adobo, Sinigang, Lechon",
        history:
            "Filipina memiliki sejarah masyarakat Austronesia, kemudian mengalami kolonisasi Spanyol dan Amerika sebelum memperoleh kemerdekaan pada 1946.",
        culture:
            "Budaya Filipina merupakan perpaduan tradisi Austronesia, Spanyol, Amerika dan berbagai kebudayaan lokal."
    },

    {
        name: "Brunei",
        flag: "🇧🇳",
        region: "Asia Tenggara",
        capital: "Bandar Seri Begawan",
        currency: "Dolar Brunei (BND)",
        population: "± 450 ribu",
        language: "Bahasa Melayu",
        leader: "Sultan",
        ethnic: "Melayu Brunei, Kedayan, Dusun, Belait",
        food: "Ambuyat, nasi katok",
        history:
            "Brunei memiliki sejarah kesultanan yang panjang dan pernah menjadi pusat perdagangan penting di kawasan Borneo.",
        culture:
            "Budaya Brunei sangat dipengaruhi tradisi Melayu dan Islam."
    },

    {
        name: "Kamboja",
        flag: "🇰🇭",
        region: "Asia Tenggara",
        capital: "Phnom Penh",
        currency: "Riel (KHR)",
        population: "± 17 juta",
        language: "Bahasa Khmer",
        leader: "Perdana Menteri",
        ethnic: "Khmer, Cham, Vietnam",
        food: "Amok, Lok Lak, Nom Banh Chok",
        history:
            "Kamboja merupakan pusat Kekaisaran Khmer yang membangun Angkor dan berbagai kompleks candi besar.",
        culture:
            "Budaya Kamboja sangat dipengaruhi Buddhisme Theravada, seni Khmer, tari tradisional dan warisan Angkor."
    },

    {
        name: "Laos",
        flag: "🇱🇦",
        region: "Asia Tenggara",
        capital: "Vientiane",
        currency: "Kip (LAK)",
        population: "± 8 juta",
        language: "Bahasa Khamer"
    }   