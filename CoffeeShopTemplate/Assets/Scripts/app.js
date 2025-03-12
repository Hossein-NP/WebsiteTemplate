const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = Document . querySelector(".submenu-open-btn");
const submenu  = document.querySelector(".submenu")

toggleThemeBtn.forEach( btn =>{
    btn.addEventListener("click" , function() {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

submenuOpenBtn.addEventListener("click" , ()=>{
    submenu.classList.toggle("submenu--open")
})