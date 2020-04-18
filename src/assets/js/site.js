// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function() {
  /***** dropdown menu start *****/
  for (let el of document.querySelectorAll(".js-dropdown")) {
    el.addEventListener("click", function () {
      el.querySelector(".js-menu").classList.add("block");
    });
  }
  document.addEventListener("click", function (e) {
    for (let el of document.querySelectorAll(".js-dropdown")) {
      var isClickInside = el.contains(event.target);

      if (!isClickInside) {
        el.querySelector(".js-menu").classList.remove("block");
      }
    }
  });
  /***** dropdown menu end *****/
});

function copyToClipboard(text) {
  var input = document.createElement("input");
  input.value = text;
  document.body.append(input);
  input.select();
  input.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  input.remove();
  displayMessage("Copied to clipboard!");
}

function displayMessage(message) {
  var el = document.createElement("div");
  el.setAttribute("class", "message");
  el.innerText = message;
  document.body.append(el);
  setTimeout(function(){ el.remove() }, (message.length / 20) * 4000);
}