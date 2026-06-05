function openLetter(){

    document.getElementById("welcome").style.display = "none";

    document.getElementById("content").classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}