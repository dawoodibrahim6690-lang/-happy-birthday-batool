// Gift Open Animation

const gift = document.getElementById("gift");
const hero = document.getElementById("hero");
const giftPage = document.querySelector(".gift-page");

gift.addEventListener("click", () => {

    gift.style.transform = "scale(1.4) rotate(15deg)";
    gift.style.opacity = "0";

    setTimeout(() => {
        giftPage.style.display = "none";
        hero.style.display = "flex";
        startHearts();
        typeEffect();
        playMusic();
    }, 900);

});

// Floating Hearts

function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = ["❤️","💕","💖","💗"][Math.floor(Math.random()*4)];

        heart.style.left = Math.random()*100 + "vw";

        heart.style.fontSize = (20 + Math.random()*25) + "px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },8000);

    },250);

}

// Typing Effect

const message =
"May Allah bless you with happiness, success and endless smiles. Happy Birthday Batool ❤️";

function typeEffect(){

    const p=document.querySelector(".content p");

    p.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        p.innerHTML += message.charAt(i);

        i++;

        if(i>=message.length){
            clearInterval(timer);
        }

    },45);

}

// Background Music

let music;

function playMusic(){

    music = new Audio("assets/music.mp3");

    music.loop = true;

    music.volume = 0.4;

    music.play().catch(()=>{});

}

// Continue Button

document.getElementById("continue").addEventListener("click",()=>{

    alert("Next page: Our Story ❤️ (Coming in Part 4)");

});
