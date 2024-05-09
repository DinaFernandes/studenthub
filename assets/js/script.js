console.log("hello");

if (jQuery) {
    console.log("jquery loaded")
}
else {
    console.log("no jquery")
}

function dontClick() {
    alert("This page does not exist.");
}

function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
  }