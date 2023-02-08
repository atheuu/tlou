const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const youtubeVideo = document.getElementById("youtube-video");
const urlVideo = youtubeVideo.src;

function alterarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alterarModal();
})

fecharModal.addEventListener("click", () => {
    alterarModal();
    youtubeVideo.setAttribute("src", "");
    youtubeVideo.setAttribute("src", urlVideo);
})