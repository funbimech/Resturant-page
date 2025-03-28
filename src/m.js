const container = document.querySelector(".container");
const btn1 = document.getElementById("btn1");
const lastbtn = document.getElementById("menubtn");
const content = document.querySelector(".content");
const contents = document.querySelector(".contents");
const menubtn = document.getElementById("menubtn");
const menus = document.querySelector(".menus");

function activatebutton() {
  btn1.addEventListener("click", () => {
    content.style.display = "flex";
    contents.style.display = "none";
    menus.style.display = "none";
  });
}
// const newelement = document.createElement("div");
function createElement(element, classname, textcontent) {
  // const newelement = document.createElement(element);
  element = newelement;
  // newelement.classlist.add(classname);
  newelement.classname = classname;
  newelement.textcontent = textcontent;
  content.appendChild(newelement);
}
export { activatebutton, createElement };
