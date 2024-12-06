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