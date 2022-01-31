//'show' is defined on the css stylesheet.

// This will return all the elements that have the class dropbtn
const dropDownMenus = document.querySelectorAll(".dropbtn");

// Loops through all the dropdown classes to return all of them
// the event listner will add a click handler to the class
for (let i = 0; i < dropDownMenus.length; i++) {
  let dropDownMenu = dropDownMenus[i];
  dropDownMenu.addEventListener("click", onDropdownClicked);
}

//When the user clicks the toggle it will hide/show content
// the targetElement is drilled down to the appropriate element that we are trying to render
function onDropdownClicked(evt) {
  let targetElement = evt.target.nextElementSibling;
  targetElement.classList.toggle("show");
}

//This will close the dropdown if user clicks outside of dropdown area
window.onclick = function (evt) {
  if (!evt.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropDown = dropdowns[i];
      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
};
