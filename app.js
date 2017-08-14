const word = document.getElementById('word');
const input = word.querySelector('.input');

const wordB = document.getElementById('wordB');
const inputB = wordB.querySelector('.inputB');

const wordC = document.getElementById('wordC'); 
const inputC = wordC.querySelector('.inputC');

const wordD = document.getElementById('wordD'); 
const inputD = wordD.querySelector('.inputD');

const wordE = document.getElementById('wordE'); 
const inputE = wordE.querySelector('.inputE');  

// reverse me
word.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const text = input.value; 
  const reverse = text.split('').reverse().join('');
  const p = document.getElementById('answer');
  p.textContent = reverse; 
 }); 

  
// palindrone
wordB.addEventListener('submit', (e) => {
   e.preventDefault();
 
   const textB = inputB.value;
   const re = /[\W_]/g;
   const lowRegStr = textB.toLowerCase().replace(re, '');
   const backwards = lowRegStr.split('').reverse().join(''); 
    
  if (backwards === lowRegStr) {
    document.getElementById('answer').innerHTML = '<p style="color:green;"><strong>Yes, it is a palindrone</strong></p>';
  } else {
    document.getElementById('answer').innerHTML = '<p style="color:red;"><strong>No, not a palindrone</strong></p>';
  }
 }); 
  
//uppercase
  
wordC.addEventListener('submit', (e) => {
   e.preventDefault();
   const textC = inputC.value;
   const titleCase = textC.toLowerCase().split(', ');
    for (let i = 0; i < titleCase.length; i++) {
      titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1); 
     }
  const p = document.getElementById('answer');
  p.textContent = titleCase; 
  });  
  
  
//pig latin
  
 wordD.addEventListener('submit', (e) => {
   e.preventDefault();
   const textD = inputD.value;
 function translate(string) {
     string = string.toLowerCase();
     const n = string.search(/[aeiuo]/);
     switch (n) {
       case 0: string = string+"way"; break;
       case -1: string = string+"ay"; break;
       default :
         //string= string.substr(n)+str.substr(0,n)+"ay";
         string=string.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
       break;
    }
    return string;
  }                    
const pigLatin = translate(textD); 
const p = document.getElementById('answer');
p.textContent = pigLatin;    
}); 

//the name game

wordE.addEventListener('submit', (e) => {
 
  e.preventDefault(); 
  let str = inputE.value.toLowerCase();
  let str2 = str.substring(1); 
 
const p = document.getElementById('answer');
  p.textContent = str + ", " + str + ", bo-b" + str2 + ", banana-fana fo-f" + str2 + ", fee fy mo-m" + str2 + ", ... " + str +"!";  
 }); 




  
 