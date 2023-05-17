const maxHeight = document.querySelector(".settings-menu")

function settings(){
    maxHeight.classList.toggle("visible")
}

const themeSelectorButton = document.querySelector(".btn-out")


function changeTheme(){
    themeSelectorButton.classList.toggle("btn-on")
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") =="light"){
        localStorage.setItem("theme","dark")
    }
    else{
        localStorage.setItem("theme","light")
    }

}

if(localStorage.getItem("theme") == "light"){
    themeSelectorButton.classList.remove("btn-on")
    document.body.classList.remove("dark-theme")
}

else if(localStorage.getItem("theme") == "dark"){
    themeSelectorButton.classList.add("btn-on")
    document.body.classList.add("dark-theme")
}

else{
    localStorage.setItem("theme","light")
}


localStorage.setItem("theme","dark")
localStorage.getItem("theme")