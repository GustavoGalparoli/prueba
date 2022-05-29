const a = "holaaaaaaaaa";
console.log(a);

let b = 10;
b = 10 + 20;
console.log(b);

function onclickButton1() {
  // console.log("SIIIIIIII");

  const ct1 = document.getElementById("cajadetexto1");
  
  console.log(ct1.maxLength);

  console.log("valor de cajadetexto1:", ct1.value);
}

function onclickButton2() {

  const ct2 = document.getElementById("cajadetexto2");

  const ul1 = document.getElementById("ul1");
  
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.text= ct2.value;

  const ct3 = document.getElementById ("cajadetexto3");
  console.log(ct3);
  a.href = ct3.value;
  li.appendChild(a);

  ul1.appendChild(li);




  /*
  ul
    li
      a




  */

}
