const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
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

submenuOpenBtn.addEventListener("click" , (e)=>{
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("submenu--open"); 
})