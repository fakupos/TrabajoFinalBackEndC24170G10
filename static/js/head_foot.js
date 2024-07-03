let cabecera = `
    <nav class="navbar">
        <a href="index.html">
            <h1 class="logo">INVENTARIO CABAÑAS FANINA</h1>
        </a>
        <label class="label_hamburguesa" for="menu_hamburguesa">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="list_icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </label>

        <input class="menu_hamburguesa" type="checkbox" name="" id="menu_hamburguesa">

        <ul class="ul_links">
            <li class="li_links">
                <a href="index.html" class="link">INICIO</a>
            </li>
            <li class="li_links">
                <a href="altas.html" class="link">ALTAS</a>
            </li>
            <li class="li_links">
                <a href="listado.html" class="link">LISTADO</a>
            </li>
            <li class="li_links">
                <a href="modificaciones.html" class="link">MODIFICACIONES</a>
            </li>
            <li class="li_links">
                <a href="listadoEliminar.html" class="link">ELIMINACION</a>
            </li>
            
        </ul>
    </nav>
`;
document.getElementById("cabecera").innerHTML= cabecera;

let pie = `
    <div class="redsocial">
        <a href="https://www.facebook.com" target="_blank">
            <img src="static/imagenes/facebook.png" alt="facebook">
        </a>
        <a href="https://www.twitter.com" target="_blank">
            <img src="static/imagenes/twitter.png" alt="twitter">
        </a>
        <a href="https://www.instagram.com" target="_blank">
            <img src="static/imagenes/instagram.png" alt="instagram">
        </a>
    </div>
    <div class="derechos">
        <p>Derechos reservados @2024</p>
    </div>
`;
document.getElementById("pie").innerHTML = pie;