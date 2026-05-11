const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const main = document.getElementById("main");
const bgm = document.getElementById("bgm");


openBtn.addEventListener("click", () => {

  opening.style.display = "none";

  main.classList.remove("hidden");

  bgm.play();

});



window.addEventListener("load", async () => {

    const video = document.querySelector(".bg-video");

    try{
        await video.play();
    }catch(err){
        console.log("autoplay blocked");
    }

});

  // CONFETTI
  confetti({
    particleCount:180,
    spread:120,origin:{ y:0.6 }
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
