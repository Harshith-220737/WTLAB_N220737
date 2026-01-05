console.log("Welcome to console");

// alert("yeah!Button clicked!");
document.getElementById("clickbutton").addEventListener("click",function(){
    document.body.style.backgroundColor="skyblue";
});

document.getElementById("textchange").addEventListener("click",function(){
    document.getElementById("para").innerHTML="Hello Harshith";
});

