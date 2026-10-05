const elem3 = document.getElementById("ex3_element");
const kont = document.getElementById("ex3_two");

kont.ondragover = (e) => e.preventDefault();

kont.ondrop = () => kont.appendChild(elem3);
