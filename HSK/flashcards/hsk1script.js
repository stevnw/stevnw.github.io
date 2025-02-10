// This is probably a really fucking stupid way to do it - but I do not want it to need a local http server running to use it - I just want something that runs at a click with no extra bollocks.
const wordSets = { // 1 - 25
    1: [
        { simp:"爱", trad: "愛", pinyin: "ài", pinyinalt: "ai4", zhuyin: "ㄞˋ", meaning: "to love, affection, to be fond of, to like"},
        { simp:"爱好", trad: "愛好", pinyin: "ài hǎo", pinyinalt: "ai4 hao3", zhuyin: "ㄞˋ ㄏㄠˇˋ", meaning: "to like, to take pleasure in, keen on, fond of, interest"},
		{ simp:"八", trad: "八", pinyin: "bā", pinyinalt: "ba1", zhuyin: "ㄅㄚ", meaning: "eight / 8"},
		{ simp:"爸爸 / 爸", trad: "爸", pinyin: "bà", pinyinalt: "ba4", zhuyin: "ㄅㄚˋ", meaning: "father, dad, pa, papa"},		
		{ simp:"吧", trad: "吧", pinyin: "ba", pinyinalt: "ba", zhuyin: "ㄅㄚ", meaning: "modal particle indicating suggestion or surmise: ...ok?, ...right?"},
		{ simp:"白", trad: "白", pinyin: "bái", pinyinalt: "bai2", zhuyin: "ㄅㄞˊ", meaning: "white, snowy, empty, blank, clear, bright"},
		{ simp:"白天", trad: "白天", pinyin: "bái tiān", pinyinalt: "bai2 tian1", zhuyin: "ㄅㄞˊ ㄊㄧㄢ", meaning: "daytime, during the day"},
		{ simp:"百", trad: "百", pinyin: "bǎi", pinyinalt: "bai3", zhuyin: "ㄅㄞˇ", meaning: "hundred"},
		{ simp:"班", trad: "班", pinyin: "bān", pinyinalt: "ban1", zhuyin: "ㄅㄢ", meaning: "team, class, rank, squad, a work shift"},
		{ simp:"半", trad: "半", pinyin: "bàn ", pinyinalt: "ban4", zhuyin: "ㄅㄢˋ", meaning: "half, semi-, incomplete, x and a half"},
		{ simp:"半年", trad: "半年", pinyin: "bàn nián ", pinyinalt: "ban4 nian2", zhuyin: "ㄅㄢˋ ㄋㄧㄢˊ", meaning: "half a year"},
		{ simp:"半天", trad: "半天", pinyin: "bàn tiān ", pinyinalt: "ban4 tian1", zhuyin: "ㄅㄢˋ ㄊㄧㄢ", meaning: "half of the day, a long time, quite a while, midair"},
		{ simp:"帮", trad: "幫", pinyin: "bāng ", pinyinalt: "bang1", zhuyin: "ㄅㄤ", meaning: "to assist, to support, to help, group, gang, party"},
		{ simp:"帮忙", trad: "幫忙", pinyin: "bāng  máng", pinyinalt: "bang1 mang2", zhuyin: "ㄅㄤ ㄇㄤˊ", meaning: "to help, to lend a hand, to do a favor"},
		{ simp:"包", trad: "包", pinyin: "bāo", pinyinalt: "bao1", zhuyin: "ㄅㄠ", meaning: "to cover, to wrap, to hold, to include, package, wrapper, container"},
		{ simp:"包子", trad: "包子", pinyin: "bāo zi", pinyinalt: "bao1 zi", zhuyin: "ㄅㄠ ㄗ˙", meaning: "steamed stuffed bun"},
		{ simp:"杯", trad: "杯", pinyin: "bēi", pinyinalt: "bei1", zhuyin: "ㄅㄟ", meaning: "cup (e.g. trophy, container of liquid)"},
		{ simp:"杯子", trad: "杯子", pinyin: "bēi zi", pinyinalt: "bei1 zi", zhuyin: "ㄅㄟ ㄗ˙", meaning: "cup, glass"},
		{ simp:"北", trad: "北", pinyin: "běi", pinyinalt: "bei3", zhuyin: "ㄅㄟˇ", meaning: "north"},
		{ simp:"北边", trad: "北邊", pinyin: "běi biān", pinyinalt: "bei3 bian1", zhuyin: "ㄅㄟˇ ㄅㄧㄢ", meaning: "north, north side, northern part, to the north of"},
		{ simp:"北京", trad: "北京", pinyin: "běi jīng", pinyinalt: "bei3 jing1", zhuyin: "ㄅㄟˇ ㄐㄧㄥ", meaning: "Beijing, capital of China" },
		{ simp:"本", trad: "本", pinyin: "běn", pinyinalt: "ben3", zhuyin: "ㄅㄣˇ", meaning: "origin, source, roots/stems of pants, basis, foundation"},
		{ simp:"本子", trad: "本子", pinyin: "běn zi", pinyinalt: "ben3 zi", zhuyin: "ㄅㄣˇ ㄗ˙", meaning: "book, notebook, edition" , audio: "../audio/zh-ben3zi.mp3"},
		{ simp:"比", trad: "比", pinyin: "bǐ", pinyinalt: "bi3", zhuyin: "ㄅㄧˇ", meaning: "particle: for comparison and '-er than', to compare, to contrast, associated with "},
		{ simp:"別", trad: "別", pinyin: "bié", pinyinalt: "bie2", zhuyin: "ㄅㄧㄝˊ", meaning: "leave, depart, seperate, distinguish, seperate, classify, do not, must not" }
	],
    2: [ // 26 - 50
        
		{ simp:"别的", trad: "別的", pinyin: "bié de", pinyinalt: "bie2 de", zhuyin: "ㄅㄧㄝˊ ㄉㄜ˙", meaning: "else, other"},
		{ simp:"别人", trad: "別人", pinyin: "bié rén", pinyinalt: "bie2 ren2", zhuyin: "ㄅㄧㄝˊ ㄖㄣˊ", meaning: "other people, others, other person" },
		{ simp:"病", trad: "病", pinyin: "bìng", pinyinalt: "bing4", zhuyin: "ㄅㄧㄥˋ", meaning: "ailment, sickness, illness, disease" },
		{ simp:"病人", trad: "病人", pinyin: "bìng rén", pinyinalt: "bing4 ren2", zhuyin: "ㄅㄧㄥˋ ㄖㄣˊ", meaning: "sick person, patient" },
		{ simp:"不大", trad: "不大", pinyin: "bù dà", pinyinalt: "bu4 da4", zhuyin: "ㄅㄨˋ ㄉㄚˋ", meaning: "not very, not too, not often" },
		{ simp:"不对", trad: "不對", pinyin: "bù duì", pinyinalt: "bu4 dui4", zhuyin: "ㄅㄨˋ ㄉㄨㄟˋ", meaning: "incorrect, wrong, amiss, abnormal, queer" },
		{ simp:"不客气", trad: "不客氣", pinyin: "bù kè qì", pinyinalt: "bu4 ke4 qi4", zhuyin: "ㄅㄨˋ ㄎㄜˋ ㄑㄧˋ", meaning: "you're welcome, don't mention it, impolite, rude, blunt" },
		{ simp:"不用", trad: "不用", pinyin: "bù yòng", pinyinalt: "bu4 yong4", zhuyin: "ㄅㄨˋ ㄩㄥˋ", meaning: "need not" },
		{ simp:"不", trad: "不", pinyin: "bù", pinyinalt: "bu4", zhuyin: "ㄅㄨˋ", meaning: "(negative prefix), not, no" },
		{ simp:"菜", trad: "菜", pinyin: "cài", pinyinalt: "cai4", zhuyin: "ㄘㄞˋ", meaning: "dish (type of food), vegetables" },
		{ simp:"茶", trad: "茶", pinyin: "chá", pinyinalt: "cha2", zhuyin: "ㄔㄚˊ", meaning: "tea, tea plant" },
		{ simp:"差", trad: "差", pinyin: "chà", pinyinalt: "cha4", zhuyin: "ㄔㄚˋ", meaning: "difference, discrepancy, to differ, error, short of, uneven" },
		{ simp:"常", trad: "常", pinyin: "cháng", pinyinalt: "chang2", zhuyin: "ㄔㄤˊ", meaning: "always, ever, often, frequently, common" },
		{ simp:"常常", trad: "常常", pinyin: "cháng cháng", pinyinalt: "chang2 chang2", zhuyin: "ㄔㄤˊ ㄔㄤˊ", meaning: "frequently, often" },
		{ simp:"唱", trad: "唱", pinyin: "chàng", pinyinalt: "chang4", zhuyin: "ㄔㄤˋ", meaning: "sing, to call loudly, to chant" },
		{ simp:"唱歌", trad: "唱歌", pinyin: "chàng gē", pinyinalt: "chang4 ge1", zhuyin: "ㄔㄤˋ ㄍㄜ", meaning: "to sing a song" },
		{ simp:"车", trad: "車", pinyin: "chē", pinyinalt: "che1", zhuyin: "ㄔㄜ", meaning: "car, a vehicle, machine" },
		{ simp:"车票", trad: "車票", pinyin: "chē piào", pinyinalt: "che1 piao4", zhuyin: "ㄔㄜ ㄆㄧㄠˋ", meaning: "ticket (for a bus or train)" },
		{ simp:"车上", trad: "車上", pinyin: "chē shàng", pinyinalt: "che1 shang4", zhuyin: "ㄔㄜ ㄕㄤˋ", meaning: "in the car" },
		{ simp:"车站", trad: "車站", pinyin: "chē zhàn", pinyinalt: "che1 zhan4", zhuyin: "ㄔㄜ ㄓㄢˋ", meaning: "rail station, bus stop" },
		{ simp:"吃", trad: "吃", pinyin: "chī", pinyinalt: "chi1", zhuyin: "ㄔ", meaning: "eat, eradicate, destroy, receive" },
		{ simp:"吃饭", trad: "吃飯", pinyin: "chī fàn", pinyinalt: "chi1 fan4", zhuyin: "ㄔ ㄈㄢˋ", meaning: "to have a meal, to eat, to make a living" },
		{ simp:"出", trad: "出", pinyin: "chū", pinyinalt: "chu1", zhuyin: "ㄔㄨ", meaning: "to go out, to come out, to occur, to produce" },
		{ simp:"出来", trad: "出來", pinyin: "chū lái", pinyinalt: "chu1 lai2", zhuyin: "ㄔㄨ ㄌㄞˊ", meaning: "to come out, to appear, to arise" },
		{ simp:"出去", trad: "出去", pinyin: "chū qù", pinyinalt: "chu1 qu4", zhuyin: "ㄔㄨ ㄑㄩˋ", meaning: "to go out" }

    ],
	3: [ // 51 - 75
		{ simp:"穿", trad: "穿", pinyin: "chuān", pinyinalt: "chuan1", zhuyin: "ㄔㄨㄢ", meaning: "to wear, to put on, to bore through, pierce" },
		{ simp:"床", trad: "床 / 牀", pinyin: "chuáng", pinyinalt: "chuang2", zhuyin: "ㄔㄨㄤˊ", meaning: "bed, couch" },
		{ simp:"次", trad: "次（量）", pinyin: "cì", pinyinalt: "ci4", zhuyin: "ㄘㄨㄛˋ", meaning: "order, sequence, number (of times), nth" },
		{ simp:"从", trad: "從", pinyin: "cóng", pinyinalt: "cong2", zhuyin: "ㄘㄨㄥˊ", meaning: "from, through, via, to follow, to obey, to engage in (an activity)" },
		{ simp:"错", trad: "錯", pinyin: "cuò", pinyinalt: "cuo4", zhuyin: "ㄘㄨㄛˋ", meaning: "mistake, error, blunder, fault, cross, uneven, wrong" },
		{ simp:"打", trad: "打（动）", pinyin: "dǎ", pinyinalt: "da3", zhuyin: "ㄉㄚˇ", meaning: "to beat, to hit, to strike, to build, to fight, to fetch" },
		{ simp:"打车", trad: "打車", pinyin: "dǎ chē", pinyinalt: "da3 che1", zhuyin: "ㄉㄚˇ ㄔㄜ", meaning: "to take a taxi (in town), to hitch a lift" },
		{ simp:"打电话", trad: "打電話", pinyin: "dǎ diàn huà", pinyinalt: "da3 dian4 hua4", zhuyin: "ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ", meaning: "to make a telephone call" },
		{ simp:"打开", trad: "打開", pinyin: "dǎ kāi", pinyinalt: "da3 kai1", zhuyin: "ㄉㄚˇ ㄎㄞ", meaning: "to open, to show (a ticket), to turn on, to switch on" },
		{ simp:"打球", trad: "打球", pinyin: "dǎ qiú", pinyinalt: "da3 qiu2", zhuyin: "ㄉㄚˇ ㄑㄧㄡˊ", meaning: "to play ball, to play with a ball" },
		{ simp:"大", trad: "大", pinyin: "dà", pinyinalt: "da4", zhuyin: "ㄉㄚˋ", meaning: "big, huge, large, great" },
		{ simp:"大学", trad: "大學", pinyin: "dà xué", pinyinalt: "da4 xue2", zhuyin: "ㄉㄚˋ ㄒㄩㄝˊ", meaning: "university/college" },
		{ simp:"大学生", trad: "大學生", pinyin: "dà xué shēng", pinyinalt: "da4 xue2 sheng1", zhuyin: "ㄉㄚˋ ㄒㄩㄝˊ ㄕㄥ", meaning: "university student/college student" },
		{ simp:"到", trad: "到", pinyin: "dào", pinyinalt: "dao4", zhuyin: "ㄉㄠˋ", meaning: "to go, to arrive, to (a place)" },
		{ simp:"得到", trad: "得到", pinyin: "dé dào", pinyinalt: "de2 dao4", zhuyin: "ㄉㄜˊ ㄉㄠˋ", meaning: "to get, to obtain, to receive" },
		{ simp:"地", trad: "地", pinyin: "de", pinyinalt: "de", zhuyin: "ㄉㄜ˙", meaning: "structural particle: used before a verb or adjective" },
		{ simp:"的", trad: "的", pinyin: "de", pinyinalt: "de", zhuyin: "ㄉㄜ˙", meaning: "possessive particle" },
		{ simp:"等", trad: "等（动）", pinyin: "děng", pinyinalt: "deng3", zhuyin: "ㄉㄥˇ", meaning: "class, rank, grade, equal to, same as" },
		{ simp:"地", trad: "地", pinyin: "de", pinyinalt: "de", zhuyin: "ㄉㄜ˙", meaning: "structural particle: used before a verb or adjective" },
		{ simp:"地点", trad: "地點", pinyin: "dì diǎn", pinyinalt: "di4 dian3", zhuyin: "ㄉㄜ˙ ㄉㄧㄢˇ", meaning: "place, site, location, venue" },
		{ simp:"地方", trad: "地方", pinyin: "dì fang", pinyinalt: "di4 fang", zhuyin: "ㄉㄧˋ ㄈㄤ", meaning: "region, regional (away from central administration), local, area, place, space, room" },
		{ simp:"地上", trad: "地上", pinyin: "dì shàng", pinyinalt: "di4 shang4", zhuyin: "ㄉㄧˋ ㄕㄤˋ", meaning: "on the ground, on the floor" },
		{ simp:"地图", trad: "地圖", pinyin: "dì tú", pinyinalt: "di4 tu2", zhuyin: "ㄉㄧˋ ㄊㄨˊ", meaning: "map" },
		{ simp:"弟", trad: "弟弟｜弟", pinyin: "dì", pinyinalt: "di4", zhuyin: "ㄉㄧˋ", meaning: "younger brother" },
		{ simp:"第", trad: "第（第二）", pinyin: "dì", pinyinalt: "di4", zhuyin: "ㄉㄧˋ", meaning: "(prefix before a number, for ordering numbers - e.g. 第二 = second)" }

	],
	4: [
		
		{ trad:"服務", simp: "服务", pinyin: "fúwù", meaning: "be in the service of, serve" }
	],
	
	5: [
		
		{ trad:"一定", simp: "一定", pinyin: "yīdìng", meaning: "must" }
	],
	6: [
		
		{ trad:"十", simp: "十", pinyin: "shí", meaning: "det.: ten" }
	]
};




let selectedSets = [];
let randomSequence = [];
let currentIndex = 0;

// Loads the word sets based on selected checkboxes :)
function loadWordSet(setNumber) {
    if (selectedSets.includes(setNumber)) {
        // Deselect the set
        selectedSets = selectedSets.filter((num) => num !== setNumber);
        } 
	else {
        // Select the set
        selectedSets.push(setNumber);
        }

    generateRandomSequence();
    displayWord();
}

// Generate a random sequence from the selected sets
 function generateRandomSequence() {
    const combinedWords = selectedSets.flatMap((setNumber) => wordSets[setNumber] || []);
        randomSequence = shuffleArray(combinedWords);
        currentIndex = 0;
}

// Shuffle them words randomly :)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// This should display the current word :)
function displayWord() {
    if (randomSequence.length === 0) {
        document.getElementById("character").innerText = "-";
        document.getElementById("pinyin").innerText = "";
        document.getElementById("meaning").classList.add("hidden");
        document.getElementById("meaning").innerText = "No words to display";
        return;
    }

    const word = randomSequence[currentIndex];
        document.getElementById("character").innerText = word.simp;
        document.getElementById("pinyin").innerText = word.pinyin;
        document.getElementById("meaning").classList.add("hidden");
        document.getElementById("meaning").innerText = word.meaning;
}

// This Reveals the meaning :)
function revealMeaning() {
    document.getElementById("meaning").classList.remove("hidden");
}

// This Move to the next word :)
function nextWord() {
    if (randomSequence.length === 0) return;

		currentIndex = (currentIndex + 1) % randomSequence.length;
        displayWord();
}

function speak() {
    const text = document.getElementById('character').innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; // Set the language to Chinese
    window.speechSynthesis.speak(utterance);
}
