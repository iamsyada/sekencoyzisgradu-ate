const startBtn = document.getElementById("startBtn");

const popup = document.getElementById("popup");

const openBtn = document.getElementById("openBtn");

const opening = document.getElementById("opening");

const main = document.getElementById("main");

const bgm = document.getElementById("bgm");

const video = document.querySelector(".bg-video");


// STEP 1
startBtn.addEventListener("click", async () => {

    try{

        await video.play();

        await bgm.play();

    }catch(err){

        console.log("media blocked");

    }

    popup.classList.remove("hidden");

});


// STEP 2
openBtn.addEventListener("click", () => {

    opening.style.display = "none";

    main.classList.remove("hidden");



    confetti({
        particleCount:150,
        spread:100,
        origin:{ y:0.6 }
    });

});
  setTimeout(() => {

    confetti({
      particleCount:100,
      angle:60,
      spread:80,
      origin:{ x:0 }
    });

    confetti({
      particleCount:100,
      angle:120,
      spread:80,
      origin:{ x:1 }
    });

  },500);

});


// TYPING EFFECT
const text =
`Happy Gradu-atee Sekencoyz! 💖

Semua perjuangan, lelah, dan air mata akhirnya terbayar.
Aku bangga melihatmu sampai di titik ini.

Semoga langkahmu berikutnya dipenuhi kebahagiaan, kesuksesan, dan hal-hal indah lainnya ✨`;

let i = 0;

function typing(){

  if(i < text.length){

    document.getElementById("typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(typing,45);
  }

}

typing();
