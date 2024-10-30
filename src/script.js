//rolagem para inicio
document.getElementById("link-to-inicio").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById("inicio").scrollIntoView({
        behavior: "smooth" // Define rolagem suave
    })
});

//rolagem para serviços
document.getElementById("link-to-servicos").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById("servicos").scrollIntoView({
        behavior: "smooth" // Define rolagem suave
    })
});

//rolagem para contato
document.getElementById("link-to-contato").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById("contato").scrollIntoView({
        behavior: "smooth" // Define rolagem suave
    })
});

//rolagem para sobre
document.getElementById("link-to-sobre").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth" // Define rolagem suave
    })
});
