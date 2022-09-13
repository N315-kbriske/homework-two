import * as MODEL from "./model.js";

function initListeners() {
  $("nav a").click((e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;
    console.log(btnID);

    MODEL.setCurrentPageContent(btnID);
  });
}

$(document).ready(function () {
  // sets the current refreshed page to "home"
  // comment this out when you want to work on something within div -> app
  MODEL.setCurrentPageContent("home");
  initListeners();
});