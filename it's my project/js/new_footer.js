ajax("http://localhost:63342/xin/lulu/it's%20my%20project/new_footer.html")
.then(res=>{
    document.getElementById("new_footer")
    .innerHTML=res;
});