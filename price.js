const btn = document.getElementById("check");
btn.addEventListener("click", btntoggle);
function btntoggle(){
    if (btn.classList.contains("checked")){
        document.getElementById("basic").innerHTML="&dollar;19.99"
        document.getElementById("pro").innerHTML="&dollar;24.99"
        document.getElementById("master").innerHTML="&dollar;39.99"
          btn.classList.remove("checked");
    }else{
        document.getElementById("basic").innerHTML="&dollar;199.99"
        document.getElementById("pro").innerHTML="&dollar;249.99"
        document.getElementById("master").innerHTML="&dollar;399.99"
        btn.classList.add("checked")
    }
}