let closeIcon = document.querySelector('.close')
let nav = document.getElementById('navList')

function openNav(){
    if (nav.style.display === "none") {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
}

closeIcon.addEventListener('click', openNav);

