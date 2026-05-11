const main = document.getElementById("main");

const bgm = document.getElementById("bgm");

const video = document.querySelector(".bg-video");



window.addEventListener("load", async () => {

    alert("Haii 💖");

    alert("Aku punya sesuatu untuk kamu 🎓");

    alert("Tap layar untuk membuka surprise ✨");


    main.classList.remove("hidden");


    try{

        video.muted = true;

        await video.play();

    }catch(err){

        console.log(err);

    }


    confetti({
        particleCount:150,
        spread:100,
        origin:{ y:0.6 }
    });

});



document.addEventListener("click", async () => {

    try{

        await bgm.play();

    }catch(err){

        console.log(err);

    }

}, { once:true });
