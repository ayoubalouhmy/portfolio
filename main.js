
// NAV active
let links=document.querySelectorAll(".navbar-nav a")
links.forEach(link =>{
    link.addEventListener("click",()=>{
        if(document.querySelector(".navbar-nav a.active")){
            document.querySelector(".navbar-nav a.active").classList.remove("active")
        }
        link.classList.add("active")
    })
})






// dark mode


const mooon = document.querySelector(".dark-mode");
mooon.addEventListener("click", () => {
    document.body.classList.toggle("darkmode")
    if(mooon.classList.contains("bi-moon-stars")){
        mooon.classList.remove("bi-moon-stars")
        mooon.classList.add("bi-sun-fill")
    }else{
        mooon.classList.remove("bi-sun-fill")
        mooon.classList.add("bi-moon-stars")
 

    }
});

AOS.init({
    duration: 1200, 
    
});

// Form
let form=document.querySelector(".form")
let nom=form.querySelector("input[name='name']")
let email=form.querySelector("input[name='email']")
let message=form.querySelector("textarea[name='message']")
let regexName=/^[A-Za-zÀ-ÿ]+$/
let regexMessage=/^[A-Za-zÀ-ÿ\s.,;:""'']+$/
let regexEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/


document.querySelector(".send").addEventListener("click",(e)=>{
    e.preventDefault()
    if ( !regexName.test(nom.value.trim()) || !regexMessage.test(message.value.trim()) || !regexEmail.test(email.value.trim())){
        alert("Veuillez remplir correctement le formulaire : nom et message doivent contenir seulement des lettres, email valide.");
        DeleteData()
    } else {
      alert("Formulaire validé avec succès !");
      DeleteData()
    }
})

function DeleteData(){
    nom.value=""
    email.value=""
    message.value=""
    
}
