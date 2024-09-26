
window.onload = function () {
        ScrollReveal().reveal('.expp', {
            distance: '50px',
            origin: 'bottom',
            duration: 800,
            opacity: 0,
            interval: 200 
        });
   
        ScrollReveal().reveal('.foto', {
            distance: '50px',
            origin: 'bottom',
            duration: 800,
            opacity: 0,
            interval: 200
        });
   
        ScrollReveal().reveal('.text-block', {
            distance: '50px',
            origin: 'bottom',
            duration: 800,
            opacity: 0
        });
   
        ScrollReveal().reveal('.informacoes', {
            distance: '50px',
            origin: 'bottom',
            duration: 800,
            opacity: 0
        });
   
        cycleText();
    };
   
    const texts = ["Breno Villela Da Silva", "Estudante de:", "C#", "HTML", "JavaScript"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const pauseBetween = 1000;
   
    function cycleText() {
        const element = document.getElementById("name");
        const currentText = texts[index];
        
        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(cycleText, typingSpeed);
            } else {
                setTimeout(cycleText, erasingSpeed);
            }
        } else {
            element.innerHTML = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(cycleText, pauseBetween);
            } else {
                setTimeout(cycleText, typingSpeed);
            }
        }
    }
   


    function darkmode() {
        var element = document.body;
        var icon = document.getElementById("icon");
        
        // Alterna a classe dark-mode no body
        element.classList.toggle("dark-mode");
        
        // Troca o ícone de Sol para Lua e vice-versa
        if (element.classList.contains("dark-mode")) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }
    






    