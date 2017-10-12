// # toggle
//
// Toggles the open and closed state for an element.
//
function $toggle(selector) { document.querySelector(selector).classList.toggle("is-opened"); }

// # reset
//
// Reset the state for the drawer.
//
function $reset(selector) { document.querySelector(selector).classList.remove("is-opened"); }
