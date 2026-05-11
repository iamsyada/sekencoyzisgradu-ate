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

        video.play();

    }catch(err){

        console.log(err);

    }


    confetti({
        particleCount:150,
        spread:100,
        origin:{ y:0.6 }
    });

});



const startMusic = async () => {

    try{

        await bgm.play();

        await video.play();

    }catch(err){

        console.log(err);

    }

};


document.body.addEventListener("touchstart", startMusic, { once:true });

document.body.addEventListener("click", startMusic, { once:true });
