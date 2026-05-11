const opening = document.getElementById("opening");

const main = document.getElementById("main");

const bgm = document.getElementById("bgm");

const video = document.querySelector(".bg-video");



window.addEventListener("load", async () => {

    alert("Haii 💖");

    alert("Aku punya sesuatu untuk kamu 🎓");

    alert("Klik untuk membuka surprise ✨");


    opening.style.display = "flex";

    main.classList.remove("hidden");


    try{

        await video.play();

        await bgm.play();

    }catch(err){

        console.log(err);

    }


    confetti({
        particleCount:150,
        spread:100,
        origin:{ y:0.6 }
    });

});
