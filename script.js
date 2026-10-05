const elem3 = document.getElementById("ex3_element");
const kont2 = document.getElementById("ex3_two");
const kont = document.getElementById("ex3_one");

kont.ondragover = (e) => e.preventDefault();
kont.ondrop = () => kont.appendChild(elem3);

kont2.ondragover = (e) => e.preventDefault();
kont2.ondrop = () => kont2.appendChild(elem3);
