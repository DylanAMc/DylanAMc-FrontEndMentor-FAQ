
const question = document.querySelectorAll(".btn-question"); 
const btn = document.querySelectorAll(".question");



btn.forEach(btn => {
    btn.addEventListener("click", (e) => {

        const arrow = btn.querySelector(".arrow");
        const active_btn = document.querySelector(".question.active");
        
        if (active_btn && active_btn !== btn) {
            active_btn.classList.toggle("active");
            active_btn.nextElementSibling.classList.toggle("hidden");
        } 
        


        btn.classList.toggle("active");
        
        const answer = btn.nextElementSibling;

        if (btn.classList.contains("active")) {
            answer.classList.toggle("hidden");
            arrow.classList.toggle("arrow_active");
        } else {
            answer.classList.toggle("hidden");
            arrow.classList.toggle("arrow_active");
        }

        const active_arrow = active_btn.querySelector(".arrow.arrow_active")
        
        if (btn !== active_btn && active_arrow ) {
            active_arrow.classList.remove("arrow_active");
        }
    })

    
})









