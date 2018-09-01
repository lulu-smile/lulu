function ajax(url){
    return new Promise(function(open,err){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                open(xhr.responseText);
            }
        }
        xhr.open("get",url,true);
        xhr.send(null);
    })
}