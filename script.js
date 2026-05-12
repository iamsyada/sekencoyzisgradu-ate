const main = document.getElementById("main");

const bgm = document.getElementById("bgm");

const video = document.querySelector(".bg-video");



window.addEventListener("load", async () => {

    alert("Halo bub 💖");

    alert("Ciye udah lulus aje nih 🎓");

    alert("Selamatt yep, aku kasih sesuatu deh, jangan nangis yaah 😜");


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
