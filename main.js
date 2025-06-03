// ! Html´den Js´e elemanlarin cekilmesi

const addBox = document.querySelector(".add-box");
const popupContainer = document.querySelector(".popup-box");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector("#close-btn");

// addBox elemaninin tiklanma olayini izle
addBox.addEventListener("click", () => {
    // Popup´i aktif et --> popup elemanlarina show class´i ekle
    popupContainer.classList.add("show");
    popup.classList.add("show");
   });

   // closeBtn elemaninin tiklama olayini izle

closeBtn.addEventListener("click", () => {
    // Popup´i eski haline cevir --> popupContainer ve popup elemanlarindan show class´ini kaldir
    popupContainer.classList.remove("show");
    popup.classList.remove("show");
});





