// Función anónima --> Intercambio clase hidden entre botón hamburguesa y botón de cierre
//--> Agrego clase is-active al menú para  mostrarlo mediante opacity = 1 

((d) => {
    const $btnBurguer = d.querySelector('.menu-burguer'),
          $menu = d.querySelector('.menu');
    
    $btnBurguer.addEventListener('click',(e)=> {
        $btnBurguer.firstElementChild.classList.toggle('hidden');
        $btnBurguer.lastElementChild.classList.toggle('hidden');
        $menu.classList.toggle('is-active');
    });
})(document);