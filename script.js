const startBtn = document.getElementById("startBtn");

const opening = document.getElementById("opening");

const main = document.getElementById("main");

const bgm = document.getElementById("bgm");

const video = document.querySelector(".bg-video");



startBtn.addEventListener("click", async () => {

    try{

        await video.play();

        await bgm.play();

    }catch(err){

        console.log(err);

    }


    opening.style.display = "none";

    main.classList.remove("hidden");


    confetti({
        particleCount:150,
        spread:100,
        origin:{ y:0.6 }
    });

});
