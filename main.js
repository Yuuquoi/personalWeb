const TagCloud = window.TagCloud;

const intro = document.querySelector(".intro");
const sphere1 = document.querySelector(".sphere1");
const sphere2 = document.querySelector(".sphere2");
const sphere3 = document.querySelector(".sphere3");
const textBlock = document.querySelector(".textBlock");
const tagcloudItem = document.querySelector(".tagcloud--item");

/*************** intro 介面 ***************/
// 介面變數
let interface;

function init(){
    clear();
    reset();
    intro.style.display = "block";
}
init();

function clear(){
    // clear display
    intro.style.display = "none";
    sphere1.style.display = "none";
    sphere2.style.display = "none";
    sphere3.style.display = "none";
    textBlock.style.display = "none";
}

// reset: 將所有屬性重置
function reset(){
    // clear tagCloud
    sphere1.innerHTML = '';
    sphere2.innerHTML = '';
    sphere3.innerHTML = '';
    // clear style
    for(let name in sphere1.classList){
        if(name !== "sphere1"){
            name = "";
        }
    }
    for(let name in sphere2.classList){
        if(name !== "sphere2"){
            name = "";
        }
    }
    for(let name in sphere3.classList){
        if(name !== "sphere3"){
            name = "";
        }
    }
}

/*************** 球介面 ***************/
// Text 介面的變數
let currentText;
let currentContent;

let clickNum;

intro.addEventListener(("click"), ()=>{
    intro.style.display = "none";
    clickSphere(1, text1, content1);
});
sphere2.addEventListener(("click"), (e)=>{
    // sphere2.style.animationName = "moveToMain";
    // sphere2.style.animationDuration = "2s";
    clickNum++;
    if (interface === 2){
        return;
    }
    clickSphere(2, text2, content2);
});
sphere3.addEventListener(("click"), ()=>{
    clickNum++;
    if (interface === 3){
        return;
    }
    clickSphere(3, text3, content3);
});

function clickSphere(no, text, content){
    clear();
    reset();
    interface = no;
    currentText = text;
    currentContent = content;
    buildBall(interface);
}

//  Setting 值: [css, radius]
const set = [["main", 300], ["second", 150], ["third", 90]];
let i;
function buildBall(interface){
    i = 0;
    switch(interface){
        case 1:
            sphere1.style.display = "inline-block";
            sphere1.classList.add(set[i][0]);
            callCloud(".sphere1", text1, set[i][1]);
            i++;
        case 2:
            sphere2.style.display = "inline-block";
            sphere2.classList.add(set[i][0]);
            callCloud(".sphere2", text2, set[i][1]);
            i++;
        case 3:
            sphere3.style.display = "inline-block";
            sphere3.classList.add(set[i][0]);
            callCloud(".sphere3", text3, set[i][1]);
    }
    if (interface > 1){
        clickNum = -1;
    }
}

function callCloud(s, t, r){
    let tagCloud = TagCloud(s, t, {
        // Sphere radius in px
        radius: r,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'normal',
        initSpeed: 'slow',

        // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
        direction: 135,

        // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
        keep: true
    });
    let tagcloudItem  = document.getElementsByClassName("tagcloud--item");
    tagcloudItem[0].style.color = "#FFD700";
}

/*************** Text 介面 ***************/
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const textContent = document.querySelector(".textContent");
const body = document.querySelector("body");
const back = document.querySelector(".back");

body.addEventListener('click', function clickEventHandler(e) {
    if(e.target.className === "back"){
        textBlock.style.display = "none";
        body.style.backgroundImage = "url(./pic/mainFinal.gif)";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "contain";
        switch(interface){
            case 1:
                sphere1.style.display = "inline-block";
            case 2:
                sphere2.style.display = "inline-block";
            case 3:
                sphere3.style.display = "inline-block";            
        }
        return;
    }
    if (clickNum < 0 || e.target.className !== 'tagcloud--item') {
        return;
    }
    if ( !currentText.includes(e.target.innerText)) {
        return;
    }
    initText(currentText.indexOf(e.target.innerText));
});

function initText(index){
    clear();
    textBlock.style.display = "flex";
    body.style.backgroundImage = "url(./pic/textFinal.gif)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "contain";
    showChange(index);
}

textBlock.addEventListener('click', function clickEventHandler(e) {
    console.dir(e.target);
    if (e.target.className.includes('alfred')) {
        showChange(currentText.indexOf(e.target.innerText));
    }
});

function showChange(index){
    three.innerText = currentText[index];
    one.innerText = currentText[(index-2 + currentText.length) % currentText.length];
    two.innerText = currentText[(index-1 + currentText.length) % currentText.length];
    four.innerText = currentText[(index+1) % currentText.length];
    five.innerText = currentText[(index+2) % currentText.length];
    textContent.innerText = currentContent[currentText[index]];
}

// 謹以此致敬前端：
//
// ............//¯/)
// .........../.../
// ........../.../
// ....../´¯/'../¯`.
// .../'/../.../.../¨¯\
// .('(.......... .......)
// ..\................../
// ...\................/
// ....\..............(
// .....\..............\..
//                          2024.4.1 高雄