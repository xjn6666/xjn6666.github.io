/* let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */


/* let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');    
} else {
  alert('但是巧克力才是我的最爱呀……');    
} */


/* document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
} */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'http://qdyfufbhj.bkt.clouddn.com/xjn-logo.png') {
      myImage.setAttribute('src', 'images/hardware-group.jpg');
    } else {
      myImage.setAttribute('src', 'http://qdyfufbhj.bkt.clouddn.com/xjn-logo.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}