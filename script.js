let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {

    if (menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"
    }

    else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    iconeX.style.display = "inline"

    iconeBarras.style.display = "none"
}