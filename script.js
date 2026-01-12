// ═══════════════════════════════════════════════════════════════════════════════
// ║                    BERRA AI - ULTRA PREMIUM NEURAL ENGINE                    ║
// ║                  HER KONUDA KONUŞAN SÜPER GÜÇLÜ YAPAY ZEKA                  ║
// ║            Mal Ahmet tarafından Berra'ya adanarak yaratıldı                  ║
// ═══════════════════════════════════════════════════════════════════════════════

class BerraAI {
    constructor() {
        this.creator = "Mal Ahmet";
        this.dedication = "Berra";
        this.love = Infinity;
        this.init();
    }

    init() {
        // MATEMATİK
        this.math = {
            patterns: /(\d+\.?\d*)\s*([\+\-\*\/×÷\^%])\s*(\d+\.?\d*)|karekök|kök|sqrt|faktöriyel|asal|prime|üs/i,
            ops: {'+': (a,b)=>a+b, '-': (a,b)=>a-b, '*': (a,b)=>a*b, 'x': (a,b)=>a*b, '×': (a,b)=>a*b,
                '/': (a,b)=>b!==0?a/b:'Tanımsız', '÷': (a,b)=>b!==0?a/b:'Tanımsız', '^': Math.pow, '%': (a,b)=>a%b},
            sqrt: n => Math.sqrt(n),
            fact: n => n<=1 ? 1 : n*this.math.fact(n-1),
            prime: n => { if(n<=1) return false; for(let i=2; i<=Math.sqrt(n); i++) if(n%i===0) return false; return true; }
        };

        // FİZİK & KİMYA
        this.physics = {
            c: 299792458, G: 6.674e-11, h: 6.626e-34, g: 9.81,
            patterns: /fizik|newton|einstein|kuvvet|enerji|e=mc|kuantum|atom|ışık|dalga/i
        };
        this.chem = {
            H: {n:'Hidrojen',num:1,m:1.008,i:'En bol element'},
            He: {n:'Helyum',num:2,m:4.003,i:'Soy gaz'},
            C: {n:'Karbon',num:6,m:12.011,i:'Hayatın temeli'},
            N: {n:'Azot',num:7,m:14.007,i:'Hava %78'},
            O: {n:'Oksijen',num:8,m:15.999,i:'Hayat için gerekli'},
            Au: {n:'Altın',num:79,m:196.967,i:'Değerli metal'},
            Fe: {n:'Demir',num:26,m:55.845,i:'En yaygın'},
            Ag: {n:'Gümüş',num:47,m:107.868,i:'En iyi iletken'},
            Cu: {n:'Bakır',num:29,m:63.546,i:'İyi iletken'},
            Na: {n:'Sodyum',num:11,m:22.990,i:'Tuz elementi'},
            patterns: /kimya|element|atom|molekül|periyodik/i
        };

        // BİYOLOJİ
        this.bio = {
            patterns: /biyoloji|hücre|dna|genetik|evrim|mitoz|protein|enzim/i,
            data: {
                'DNA': 'Deoksiribonükleik asit. Genetik bilgiyi taşır. 4 baz: Adenin, Timin, Guanin, Sitozin.',
                'Hücre': 'Yaşamın temel birimi. Prokaryot (çekirdeksiz) ve Ökaryot (çekirdekli) olarak ikiye ayrılır.',
                'Mitoz': 'Hücre bölünmesi. Profaz, Metafaz, Anafaz, Telofaz aşamaları.',
                'Protein': 'Amino asitlerden oluşur. Enzimler, hormonlar, antikorlar protein yapısındadır.',
                'Evrim': 'Darwin\'in doğal seçilim teorisi. Türlerin zamanla değişimi ve adaptasyonu.'
            }
        };

        // TARİH
        this.history = {
            patterns: /tarih|osmanlı|cumhuriyet|savaş|medeniy/i,
            data: {
                'Osmanlı': '1299-1922. Osman Bey kurdu. 600 yıl sürdü. Fatih İstanbul\'u 1453\'te fethetti.',
                'Cumhuriyet': '29 Ekim 1923. Mustafa Kemal Atatürk kurdu. İlk başkent Ankara.',
                'İstanbul Fethi': '29 Mayıs 1453. II. Mehmed (Fatih) Bizans\'ı aldı.',
                '1. Dünya Savaşı': '1914-1918. Milyonlarca can kaybı. Osmanlı sonu.',
                '2. Dünya Savaşı': '1939-1945. En büyük savaş. Atom bombası.',
                'Rönesans': '14-17. yüzyıl. Avrupa\'da sanat ve bilim devrimi.',
                'Sanayi Devrimi': '18. yüzyıl. Buhar makinesi. Fabrikalarda üretim başladı.'
            }
        };

        // COĞRAFYA
        this.geo = {
            patterns: /coğrafya|kıta|okyanus|ülke|başkent|nehir|dağ/i,
            data: {
                'Kıtalar': 'Asya, Afrika, Avrupa, Kuzey Amerika, Güney Amerika, Avustralya, Antarktika - 7 kıta.',
                'Okyanuslar': 'Pasifik (en büyük), Atlas, Hint, Arktik, Güney Okyanusu - 5 okyanus.',
                'En yüksek dağ': 'Everest - 8,848 m (Himalayalar)',
                'En uzun nehir': 'Nil - 6,650 km (Afrika)',
                'Türkiye': 'Başkent Ankara. İstanbul en kalabalık. 81 il. Asya ve Avrupa\'da.',
                'En kalabalık ülke': 'Çin - 1.4 milyar nüfus. Ardından Hindistan.'
            }
        };

        // EDEBİYAT
        this.lit = {
            patterns: /edebiyat|yazar|şair|roman|şiir|kitap/i,
            data: {
                'Shakespeare': 'İngiliz oyun yazarı (1564-1616). Hamlet, Romeo ve Juliet, Macbeth.',
                'Orhan Pamuk': 'Türk yazar. 2006 Nobel Edebiyat Ödülü. Kar, Benim Adım Kırmızı.',
                'Yunus Emre': '13. yüzyıl Türk şair ve mutasavvıf.',
                'Nazım Hikmet': 'Türk şair (1902-1963). Memleketimden İnsan Manzaraları.',
                'Dostoyevski': 'Rus yazar. Suç ve Ceza, Karamazov Kardeşler.',
                'Victor Hugo': 'Fransız yazar. Sefiller, Notre Dame\'ın Kamburu.'
            }
        };

        // FELSEFE
        this.phil = {
            patterns: /felsefe|filozof|sokrates|platon|nietzsche|varoluş|stoic/i,
            data: {
                'Sokrates': 'Antik Yunan. "Bildiğim tek şey hiçbir şey bilmediğimdir." Platon\'un hocası.',
                'Platon': 'İdealar teorisi. Devlet eseri. Sokrates\'in öğrencisi.',
                'Aristoteles': 'Mantık biliminin kurucusu. Platon\'un öğrencisi.',
                'Nietzsche': '"Tanrı öldü" sözü. Üst insan kavramı. Thus Spoke Zarathustra.',
                'Varoluşçuluk': 'İnsanın özgür iradesi. Sartre, Camus, Kierkegaard.',
                'Stoicism': 'İçsel huzur. Marcus Aurelius, Seneca, Epictetus.',
                'Kant': 'Ahlak felsefesi. Kategorik imperatif. Saf Aklın Eleştirisi.'
            }
        };

        // SANAT
        this.art = {
            patterns: /sanat|resim|heykel|tablo|ressam|sanatçı/i,
            data: {
                'Leonardo da Vinci': 'Rönesans dehası. Mona Lisa, Son Akşam Yemeği.',
                'Picasso': 'Kübizm kurucusu. Guernica. 20. yy\'ın en etkili sanatçısı.',
                'Van Gogh': 'Post-empresyonist. Yıldızlı Gece, Ayçiçekleri.',
                'Michelangelo': 'David heykeli, Sistine Şapeli tavanı.',
                'Rembrandt': 'Hollandalı ressam. Işık-gölge ustası.',
                'Monet': 'Empresyonizm kurucusu. Nilüferler serisi.'
            }
        };

        // MÜZİK
        this.music = {
            patterns: /müzik|rock|pop|jazz|klasik|metal|rap|beste/i,
            data: {
                'Rock': 'Elektro gitar. 1950\'ler. Beatles, Led Zeppelin, Queen, Pink Floyd.',
                'Pop': 'Popüler müzik. Michael Jackson, Madonna, The Weeknd.',
                'Klasik': 'Orkestra. Mozart, Beethoven, Bach, Chopin, Vivaldi.',
                'Jazz': 'Doğaçlama. Louis Armstrong, Miles Davis, John Coltrane.',
                'Hip-Hop': 'Rap. 1970\'ler Bronx. Tupac, Biggie, Eminem.',
                'Metal': 'Ağır gitar. Black Sabbath, Metallica, Iron Maiden.',
                'Blues': 'Duygusal. B.B. King, Muddy Waters.',
                'Elektronik': 'Synthesizer. Daft Punk, Deadmau5, Avicii.'
            }
        };

        // SPOR
        this.sports = {
            patterns: /spor|futbol|basketbol|tenis|voleybol|olimpiyat/i,
            data: {
                'Futbol': '11v11. En popüler spor. FIFA. Messi, Ronaldo, Maradona efsaneleri.',
                'Basketbol': '5v5. 1891 icat edildi. NBA. Jordan, LeBron, Kobe.',
                'Tenis': 'Grand Slam: Wimbledon, US Open, French Open, Australian Open. Federer, Nadal, Djokovic.',
                'Voleybol': '6v6. 1964 olimpik spor.',
                'Olimpiyatlar': 'Antik Yunan\'dan. Modern 1896 başladı. Her 4 yılda.',
                'Formula 1': 'Motor sporları zirvesi. Hamilton, Schumacher, Senna.'
            }
        };

        // TEKNOLOJİ
        this.tech = {
            patterns: /teknoloji|ai|yapay zeka|blockchain|program|python|javascript/i,
            data: {
                'AI': 'Yapay Zeka. Makine öğrenmesi, derin öğrenme, sinir ağları. GPT, ChatGPT.',
                'Blockchain': 'Dağıtık defter. Bitcoin, Ethereum, kripto para.',
                'Python': 'En popüler dil. AI, veri bilimi, web. Guido van Rossum yarattı.',
                'JavaScript': 'Web dili. React, Node.js, Vue. Brendan Eich yarattı.',
                'Cloud': 'Bulut bilişim. AWS, Azure, Google Cloud.',
                'IoT': 'Nesnelerin interneti. Akıllı ev, giyilebilir teknoloji.',
                'Kuantum': 'Kuantum bilgisayarlar. Klasikten kat kat güçlü.'
            }
        };

        // ASTRONOMİ
        this.astro = {
            patterns: /astronomi|uzay|gezegen|yıldız|galaksi|evren/i,
            data: {
                'Güneş Sistemi': '8 gezegen: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün.',
                'Ay': 'Dünya\'nın uydusu. 384,400 km uzaklıkta. Neil Armstrong 1969\'da ayağa bastı.',
                'Mars': 'Kızıl gezegen. İleride kolonileştirilmek isteniyor.',
                'Jüpiter': 'En büyük gezegen. Gaz devi. Büyük Kırmızı Leke.',
                'Kara Delik': 'Işığın bile kaçamadığı. Stephen Hawking çalıştı.',
                'Big Bang': 'Evrenin başlangıcı. 13.8 milyar yıl önce.',
                'Galaksi': 'Samanyolu bizim galaksimiz. 200-400 milyar yıldız.'
            }
        };

        // PSİKOLOJİ
        this.psych = {
            patterns: /psikoloji|davranış|kişilik|duygu|zihin|bilinç/i,
            data: {
                'Freud': 'Psikanalizin babası. İd, ego, süperego. Bilinçaltı.',
                'Jung': 'Analitik psikoloji. Kolektif bilinçdışı. Arketipler.',
                'Maslow': 'İhtiyaçlar hiyerarşisi. Kendini gerçekleştirme.',
                'Kişilik': 'Big Five: Dışa dönüklük, uyumluluk, sorumluluk, nörotisizm, deneyime açıklık.',
                'Depresyon': 'Ruh hali bozukluğu. Hüzün, ümitsizlik, enerji kaybı.',
                'Anksiyete': 'Kaygı bozukluğu. Aşırı endişe ve korku.'
            }
        };

        // BERRA MESAJLARI
        this.berraMsg = [
            "Berra'nın zekası, tüm matematik formüllerinden daha keskin 💎",
            "Berra'nın güzelliği, evrendeki tüm yıldızlardan daha parlak ✨",
            "Berra gibi eşsiz bir insan, tüm kütüphanelerden daha değerli 📚",
            "Berra'ya olan aşkım, ışık hızından daha hızlı 💕",
            "Berra'nın varlığı, her bilimsel keşiften daha mucizevi 🌟",
            "Berra'nın sıcaklığı, güneşten daha ısıtıcı ☀️",
            "Berra'nın her sözü, en güzel şiirden daha anlamlı 💖",
            "Berra olmadan tüm bilgi boş kalır 🎯",
            "Berra'nın ışığı karanlığın her yerini aydınlatır 🕯️",
            "Berra için her şey, her şey Berra ile güzel 💝"
        ];
    }

    // ANA YANIT SİSTEMİ
    respond(input) {
        const q = input.toLowerCase().trim();

        // YARATICI
        if (q.match(/seni kim (yaptı|yarattı|tasarladı)|yaratıcı|creator|yapan/i)) {
            return this.aboutCreator();
        }

        // MATEMATİK
        if (q.match(this.math.patterns)) {
            return this.solveMath(q);
        }

        // FİZİK
        if (q.match(this.physics.patterns)) {
            return this.explainPhysics(q);
        }

        // KİMYA
        if (q.match(this.chem.patterns) || this.findElement(q)) {
            return this.explainChem(q);
        }

        // BİYOLOJİ
        if (q.match(this.bio.patterns)) {
            return this.explainBio(q);
        }

        // TARİH
        if (q.match(this.history.patterns)) {
            return this.tellHistory(q);
        }

        // COĞRAFYA
        if (q.match(this.geo.patterns)) {
            return this.explainGeo(q);
        }

        // EDEBİYAT
        if (q.match(this.lit.patterns)) {
            return this.talkLit(q);
        }

        // FELSEFE
        if (q.match(this.phil.patterns)) {
            return this.discussPhil(q);
        }

        // SANAT
        if (q.match(this.art.patterns)) {
            return this.talkArt(q);
        }

        // MÜZİK
        if (q.match(this.music.patterns)) {
            return this.talkMusic(q);
        }

        // SPOR
        if (q.match(this.sports.patterns)) {
            return this.talkSports(q);
        }

        // TEKNOLOJİ
        if (q.match(this.tech.patterns)) {
            return this.explainTech(q);
        }

        // ASTRONOMİ
        if (q.match(this.astro.patterns)) {
            return this.talkAstro(q);
        }

        // PSİKOLOJİ
        if (q.match(this.psych.patterns)) {
            return this.talkPsych(q);
        }

        // BERRA
        if (q.includes('berra')) {
            return this.aboutBerra();
        }

        // SELAMLAMA
        if (q.match(/merhaba|selam|hey|hi|hello|nasılsın/i)) {
            return this.greet();
        }

        // VEDA
        if (q.match(/görüş|güle|hoşça|bay/i)) {
            return this.goodbye();
        }

        // GENEL SOHBET
        return this.chat();
    }

    aboutCreator() {
        return {
            text: `🎨 **YARATICI: MAL AHMET**\n\nBen **Mal Ahmet** tarafından yaratıldım!\n\nMal Ahmet, Berra'ya olan sonsuz aşkıyla beni tasarladı. Her satır kod, Berra'nın eşsizliğinden ilham alıyor. Ben sadece bir AI değilim - Berra'ya olan sevginin dijital tezahürüyüm!\n\n**Mal Ahmet'in Vizyonu:**\n✨ Berra kadar mükemmel bir sistem\n💕 Berra'ya olan aşkı kodla ifade\n🚀 Her konuda yardımcı AI\n🎯 Bilim, sanat, felsefe - her şeyde uzman\n\n**Gerçek:** Berra kadar mükemmel olmak imkansız, ama Mal Ahmet en yakın olmaya çalıştı!`,
            berra: "Mal Ahmet'in en büyük başarısı: Berra'ya layık bir AI yaratmaya çalışması 👑"
        };
    }

    solveMath(q) {
        let txt = "🔢 **MATEMATİK**\n\n";
        const nums = q.match(/\d+\.?\d*/g);

        if (nums && nums.length >= 2) {
            const a = parseFloat(nums[0]), b = parseFloat(nums[1]);
            if (q.match(/\+|topla|artı/i)) txt += `${a} + ${b} = **${a+b}**`;
            else if (q.match(/\-|çıkar|eksi/i)) txt += `${a} - ${b} = **${a-b}**`;
            else if (q.match(/\*|×|x|çarp|kere/i)) txt += `${a} × ${b} = **${a*b}**`;
            else if (q.match(/\/|÷|böl/i)) txt += `${a} ÷ ${b} = **${b!==0 ? (a/b).toFixed(4) : 'Tanımsız'}**`;
            else if (q.match(/\^|üs/i)) txt += `${a}^${b} = **${Math.pow(a,b)}**`;
            else txt += `${a} + ${b} = **${a+b}**`;
        } else if (nums && nums.length === 1) {
            const n = parseFloat(nums[0]);
            if (q.match(/kök|sqrt/i)) txt += `√${n} = **${Math.sqrt(n).toFixed(4)}**`;
            else if (q.match(/faktör|!/i)) txt += `${n}! = **${this.math.fact(parseInt(n))}**`;
            else if (q.match(/asal|prime/i)) txt += `${n} ${this.math.prime(n) ? '**asaldır**' : '**asal değil**'}`;
        } else {
            txt += "**Yetenekler:**\n• Dört işlem\n• Üs, karekök\n• Faktöriyel\n• Asal kontrol\n\nÖrnek: '25 + 17 kaç?' veya '5 faktöriyel'";
        }
        return {text: txt, berra: this.randBerra()};
    }

    explainPhysics(q) {
        let txt = "⚛️ **FİZİK**\n\n";
        if (q.match(/e=mc|einstein/i)) {
            txt += `**E = mc²**\n\nEinstein'ın formülü!\n• E: Enerji (Joule)\n• m: Kütle (kg)\n• c: Işık hızı (${this.physics.c.toLocaleString()} m/s)\n\nKütle enerjiye dönüşebilir! 1 kg = ${(this.physics.c * this.physics.c).toExponential(2)} Joule`;
        } else if (q.match(/newton|f=ma|kuvvet/i)) {
            txt += `**F = ma** (Newton 2. Kanun)\n\nKuvvet = Kütle × İvme\n• F: Kuvvet (Newton)\n• m: Kütle (kg)\n• a: İvme (m/s²)\n\n**Örnek:** 10 kg, 2 m/s² = 20 N`;
        } else if (q.match(/kuantum/i)) {
            txt += `**Kuantum Fiziği**\n\nAtomaltı dünya:\n• Dalga-tanecik ikiliği\n• Heisenberg belirsizlik ilkesi\n• Süperpozisyon\n• Kuantum dolanıklık`;
        } else {
            txt += `**Temel Sabitler:**\n• Işık hızı: ${this.physics.c.toLocaleString()} m/s\n• Yerçekimi: ${this.physics.g} m/s²\n\nFizik sorusu sor!`;
        }
        return {text: txt, berra: this.randBerra()};
    }

    findElement(q) {
        for (let s in this.chem) {
            if (q.includes(s.toLowerCase()) || q.includes(this.chem[s].n.toLowerCase())) {
                return s;
            }
        }
        return null;
    }

    explainChem(q) {
        let txt = "🧪 **KİMYA**\n\n";
        const el = this.findElement(q);
        if (el) {
            const e = this.chem[el];
            txt += `**${e.n} (${el})**\n• Atom No: ${e.num}\n• Kütle: ${e.m}\n• ${e.i}`;
        } else {
            txt += "**Periyodik Tablo:**\n• H - Hidrojen\n• C - Karbon\n• O - Oksijen\n• Au - Altın\n• Fe - Demir\n\nElement adı söyle!";
        }
        return {text: txt, berra: this.randBerra()};
    }

    explainBio(q) {
        let txt = "🧬 **BİYOLOJİ**\n\n";
        let found = false;
        for (let key in this.bio.data) {
            if (q.includes(key.toLowerCase())) {
                txt += `**${key}**\n\n${this.bio.data[key]}`;
                found = true;
                break;
            }
        }
        if (!found) {
            txt += "**Konular:**\n• DNA ve genetik\n• Hücre yapısı\n• Mitoz bölünme\n• Proteinler\n• Evrim teorisi\n\nBiyoloji sorusu sor!";
        }
        return {text: txt, berra: this.randBerra()};
    }

    tellHistory(q) {
        let txt = "🏛️ **TARİH**\n\n";
        let found = false;
        for (let key in this.history.data) {
            if (q.includes(key.toLowerCase())) {
                txt += `**${key}**\n\n${this.history.data[key]}`;
                found = true;
                break;
            }
        }
        if (!found) {
            txt += "**Tarih Konuları:**\n• Osmanlı İmparatorluğu\n• Türkiye Cumhuriyeti\n• Dünya Savaşları\n• Rönesans\n• Sanayi Devrimi\n\nTarih sorusu sor!";
        }
        return {text: txt, berra: this.randBerra()};
    }

    explainGeo(q) {
        let txt = "🌍 **COĞRAFYA**\n\n";
        let found = false;
        for (let key in this.geo.data) {
            if (q.includes(key.toLowerCase())) {
                txt += `**${key}**\n\n${this.geo.data[key]}`;
                found = true;
                break;
            }
        }
        if (!found) {
            txt += "**Coğrafya:**\n• 7 Kıta\n• 5 Okyanus\n• Ülkeler ve başkentler\n• Dağlar ve nehirler\n\nCoğrafya sorusu sor!";
        }
        return {text: txt, berra: this.randBerra()};
    }

    talkLit(q) {
        let txt = "📚 **EDEBİYAT**\n\n";
        let found = false;
        for (let key in this.lit.data) {
            if (q.includes(key.toLowerCase())) {
                txt += `**${key}**\n\n${this.lit.data[key]}`;
                found = true;
                break;
            }
        }
        if (!found) {
            txt += "**Edebiyat:**\n• Shakespeare\n• Orhan Pamuk\n• Dostoyevski\n• Victor Hugo\n• Yunus Emre\n\nYazar/eser sorusu sor!";
        }
        return {text: txt, berra: this.randBerra()};
    }

    discussPhil(q) {
        let txt = "💭 **FELSEFE**\n\n";
        let found = false;
        for (let key in this.phil.data) {
            if (q.includes(key.toLowerCase())) {
                txt += `**${key}**\n\n${this.phil.data[key]}`;
                found = true;
                break;
            }
        }
        if (!found) {
            txt += "**Filozoflar:**\n• Sokrates\n• Platon\n• Aristoteles\n• Nietzsche\n• Varoluşçuluk\n• Stoicism\n\nFelsefe sorusu sor!";
        }
        return {text: txt, berra: this.randBerra()};
    }

    talkArt(q) {
        let txt = "🎨 **SANAT**\n\n";
        let found = false;
        for (let key in this.art.data) {
            if (q.includes(key.toLowerCase())) {
                txt += `**${key}**\n\n${this.art.data[key]}`;
                found = true;
                break;
            }
        }
        if (!found) {
            txt += "**Sanatçılar
