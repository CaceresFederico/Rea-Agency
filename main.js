// THIS WILL RETURN AN HTML COLECTION
const profiles = document.getElementsByClassName("profile-thumbnail");
const tooltips = document.getElementsByClassName("tooltip");
// CONVERT TO ARRAY TO WORK WITH THE DATA WITH SPREAD OPERATOR
const tooltipArray = [...tooltips];
const profilesArray = [...profiles];
// NAV BUTTON
const navbarLinks = document.querySelector(".navbar-links")
const navButton = document.querySelector(".nav-menu-button")
navButton.addEventListener("click", ()=>{
  console.log(navbarLinks.classList.toggle("show"))
})

// SHOWING TOOLTIPS MOUSEOVER AND MOUSEOUT
profilesArray.forEach((profile) => {
  profile.addEventListener("mouseover", function () {
    tooltipArray.forEach((item) => {
      item.classList.toggle("hidden");
    });
  });
  profile.addEventListener("mouseout", () => {
    tooltipArray.forEach((item) => {
      item.classList.toggle("hidden");
    });
  });
});

