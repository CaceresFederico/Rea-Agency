// THIS RETURNING HTML COLECTION
const profiles = document.getElementsByClassName("profile-thumbnail");
const tooltips = document.getElementsByClassName("tooltip");
// CONVERT TO ARRAY TO WORK WITH THE DATA WITH SPREAD OPERATOR
const tooltipArray = [...tooltips];
const profilesArray = [...profiles];

// SHOWING TOOLTIPS MOUSEOVER AND MOUSEOUT
// TO FIX SHOW INDIVIDUAL TOOLTIPS
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

