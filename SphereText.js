const content1 = {
    'About Me': "關於我的基本介紹",
    'Background': "．生長在臺南\n．排行第二，擅長協調合作\n．家庭背景單純，無不良嗜好", 
    'Education': "．107/09-111/06 國立陽明交通大學\n．113/02-113/06 Java培訓班",
    'Personal Traits': "．樂觀開朗、充滿好奇心的人\n．以積極的態度去面對生活中的挑戰", 
    'Interests': "．邏輯思考\n．閱讀新知", 
    'Work Experience': "．111/09-112/03 國立臺灣大學醫學院附設醫院腫瘤病房"
}

const content2 = {
    'About Programming': "關於程式相關的介紹",
    'Inspiration': "．Scratch", 
    'Skill': "．前端：HTML、SCSS、Vue.js\n．後端：Java、MySQL、JavaScript",
    'Knowledge': "．基礎學科知識，諸如資料結構、演算法、計算機概論、作業系統\n．術科知識，諸如設計書撰寫、專案開發", 
    'Project': "．個人網頁\n．動態問卷\n．螺絲工廠的生產效能追蹤",
    'Objective': "．為社會和公司創造價值\n．研究所進修", 
    'Learning Experience': "．自學資工研究所課程"
}

const content3 = {
    'About Here': "關於此處的程式碼架構", 
    '3D Tag Cloud': "．運用套件 3D Tag Cloud，將文字傳入便會產生文字雲", 
    'Change keyword': "．根據文字的 index 自動去變換相鄰的文字內容，做到類似轉盤的效果", 
    'Background': "．背景動畫是先以 keynote 製作滾動效果，再以 imovie 綠幕產生交替閃爍的星星",
    'What To Do Next': "．使用 three.js 開發個人網站2.0\n．"
}

function getkey(content){
    let text = Object.keys(content);
    return text.concat(text);
}

const text1 = getkey(content1);
const text2 = getkey(content2);
const text3 = getkey(content3);

// Giving color to each text in sphere
var color = '#FFFFFF';
document.querySelector('.sphere1').style.color = color;
document.querySelector('.sphere2').style.color = color;
document.querySelector('.sphere3').style.color = color;