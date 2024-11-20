window.addEventListener("load", () => {
    const loadingS = document.querySelector (".loadingS");

    loadingS.classList.add("loadingS--END");

    loadingS.addEventListener("transitionend", () => {
            document.body.removeChild(loadingS);
    });
});