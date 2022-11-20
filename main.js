
    document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
    document.getElementById("close_menu").addEventListener("click", ocultar_menu);


    nav = document.getElementById("nav");
    close_menu = document.getElementById("close_menu");

    function mostrar_menu(){

        nav.style.right = "0px";
       close_menu.style.display = "block"

    }
    function ocultar_menu(){

        nav.style.right = "-300px"
        close_menu.style.display = "none"

    }






    alert("Pronto mas Antojitos, te esperamos")