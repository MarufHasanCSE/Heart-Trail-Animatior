const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
const xPos = event.offsetX;
const yPos = event.offsetY;

const spanElem = document.createElement("span");
spanElem.style.left = xPos + "px";
spanElem.style.top = yPos + "px";
bodyEl.appendChild(spanElem);


});