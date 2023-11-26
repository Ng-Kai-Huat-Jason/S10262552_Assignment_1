let popup = document.getElementById("popup");
let btnopenPopup = document.getElementById("openPopup")

function openPopup(){
  popup.classList.add("open-popup");
  document.getElementById("textbox1").value = "";
  document.getElementById("textbox2").value = "";
  document.getElementById("textbox3").value = "";
  document.getElementById("textbox4").value = "";

}

function closePopup(){
  popup.classList.remove("open-popup");
}