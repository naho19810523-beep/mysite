// フェードイン
const fade = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

fade.forEach((el) => observer.observe(el));


// トップへ戻るボタン
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.classList.add("visible");
    } else {
        topBtn.classList.remove("visible");
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// ギャラリー画像の拡大
const imgs = document.querySelectorAll(".gallery img");

imgs.forEach((img) => {

    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.08)";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });

});


// 背景の光
for (let i = 0; i < 25; i++) {

    const star = document.createElement("span");

    star.className = "spark";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = 5 + Math.random() * 8 + "s";

    document.body.appendChild(star);
}

// =====================
// 足あとエフェクト
// =====================

document.addEventListener("mousemove", function(e){

    const paw = document.createElement("div");

    paw.className = "paw";

    paw.style.left = e.pageX + "px";
    paw.style.top = e.pageY + "px";

    document.body.appendChild(paw);

    setTimeout(function(){

        paw.remove();

    },800);

});

// =====================
// 花びら
// =====================

for(let i=0;i<20;i++){

createPetal();

}

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=6+Math.random()*6+"s";

petal.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(petal);

}