const letters = document.querySelectorAll(".letters")





letters.forEach( letter =>  {
    letter.classList.add("fall")

    setTimeout(() => {
        letter.classList.remove("fall")
    }, 3000)

    letter.addEventListener("mouseover", () => {
        if (!letter.classList.contains("fall")){
            letter.classList.add("hover")

            setTimeout(() => {
                letter.classList.remove("hover")
            }, 800)
        }
    })
})