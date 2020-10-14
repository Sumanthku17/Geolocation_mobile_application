document.getElementById("id9").addEventListener("click",hello);
    function hello(){
        console.log('ouhwfuirfib');
        var my=document.getElementById("id8");
        var lat=document.getElementById("id6").value;
        var lon=document.getElementById("id7").value;
        if((lat && lon)=="")
        {
            alert("Please enter the valid latitude and longitude")
        }
        else{
        var atag=document.createElement('a');
        
    atag.setAttribute('href','https://maps.google.com/?q='+lat+','+lon);
    atag.innerHTML="Get your map" ;
    my.appendChild(atag);
        }
        
    }