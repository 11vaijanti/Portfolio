var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("activel");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("activet");
  }
  event.currentTarget.classList.add("activel");
  document.getElementById(tabname).classList.add("activet");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycby4K--nNnZEla2SwMef0GPxvYbKbnw5avveb4jbG4cBMdqfaE_WpfdXZea-VtDK7lqiYg/exec'; 

  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="message sent succesfully!"
        setTimeout (function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
