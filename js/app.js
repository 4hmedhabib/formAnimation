function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down")

    arrows.forEach(arrows => {
        arrows.addEventListener('click', () => {
            const input = arrows.previousElementSibling;
            console.log(input)
        })
    })
}

animatedForm();