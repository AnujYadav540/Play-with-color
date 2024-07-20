let h1 = document.querySelector("#h1");

h1.addEventListener("onload" , changecolor);

function changecolor(color , delay)
{
setTimeout(()=>
{
    h1.style.color = color;
},delay);
}
   
changecolor("blue",1000);
changecolor("red",3000);
changecolor("green",5000);
changecolor("voilet",7000);
changecolor("pink",9000);
changecolor("brown",11000);
changecolor("gray",12000);
changecolor("gold",14000);
changecolor("silver",16000);
changecolor("darkblue",18000);