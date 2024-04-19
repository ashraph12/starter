
const getElement=(selector) => {

    const element=document.querySelector(selector);
    if(element) Error
    throw Error(`Please double check class namees,there is no ${selector} class`)
}

const links = getElement(`.nav-links`)
const navBtnDom = getElement(`.nav-btn`)

navBtnDom.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })

  const date=getElement('#date');
  const currentYear = new Date() .getFullYear()
  date.textContent =currentYear

  document.getElementById('newsletter').addEventListener('submit', function(event){
    event.preventDefault();
    let email = document.getElementById('email').value;
    let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    if (subscribers.includes(email)){
        document.getElementById('message').textContent='You are already subscribed!';
    } else {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        document.getElementById('message').textContent = 'Thank you for subscribing!';
    }
    document.getElementById('email').value='';
  });

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("message", message);
    document.getElementById("contactForm").reset();
    alert("Message Delivered");
});