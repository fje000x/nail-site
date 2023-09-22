let checked = document.getElementById("fasfa-bars");

checked.addEventListener("click", freeze);
let isfrozen = false;
function freeze() {
  if (isfrozen == false) {
    document.body.style.overflow = "hidden";
    document.getElementsByTagName("main")[0].style.overflow = "hidden";
    isfrozen = true;
  } else {
    document.body.style.overflow = "auto";
    document.getElementsByTagName("main")[0].style.overflow = "auto";
    isfrozen = false;
  }
}


