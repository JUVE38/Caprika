const d = document;

function validarForm(){
    const $form = d.querySelector('.form-container'),
    $inputs = d.querySelectorAll('.form-container [required]');

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('form-error','hidden');
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",(e) => {   //keyup se dispara cuando se libera una tecla en el teclado
    if(e.target.matches('.form-container [required]')){
        let pattern = e.target.pattern;
        let valuePassword;
       if(pattern && e.target.value !== ""){
            let regExp = new RegExp(pattern);
            if (e.target.name === 'password'){
                valuePassword = e.target.value;
            }          
            //opeador ternario
            return !regExp.exec(e.target.value) 
            ? d.getElementById(e.target.name).classList.add("is-active")
            : d.getElementById(e.target.name).classList.remove("is-active");
        }
        
        if(pattern && e.target.value !== "" && e.target.name === "confirmPassword"){
            return e.target.value !== valuePassword
            ? d.getElementById(e.target.name).classList.add("is-active")
            : d.getElementById(e.target.name).classList.remove("is-active");
        }

        if(!pattern){
            return e.target.value ===""
            ? d.getElementById(e.target.name).classList.add("is-active")
            : d.getElementById(e.target.name).classList.remove("is-active");
        }
    }
});

d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Enviando Formulario");

    const $loader = d.querySelector(".form-loader"),
    $response = d.querySelector('.form-response');

    $loader.classList.remove("hidden");

    setTimeout(()=>{
        $loader.classList.add("hidden");
        $response.classList.remove("hidden");
        $form.reset();
        setTimeout(() => $response.classList.add("hidden"),3000);
    },3500)

});
}

d.addEventListener("DOMContentLoaded",(e)=> {
    validarForm();
})



