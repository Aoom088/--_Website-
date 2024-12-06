const News_content = document.getElementById("News_content4");
const CSR_content = document.getElementById("CSR_content4");

function content4_select(button) {
    if (button == "News_content") {
        News_content.style.display = "block";
        CSR_content.style.display = "none";
    } 
    if(button == "CSR_content"){
        News_content.style.display = "none";
        CSR_content.style.display = "block";
    }
  }

const nav_bar = document.querySelector("Header");

window.onscroll = function nav_bar_fix() {
   if (window.scrollY > 50) {
    nav_bar.classList.add("sticky");
   }else{
    nav_bar.classList.remove("sticky");
   }
   console.log("aaa")
}
