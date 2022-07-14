function NavOne () {
    return (
        <div class="navOne">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="vertical-Bar"></div>   
            <img src="./img/logo.png" alt="logo"/>
        </div>
    );
}

function NavTwo () {
    return (
        <div class="navTwo">
            <input type="text" placeholder="Pesquisar"/>
        </div>
    );
}

function NavThree() {
    return (
        <div class="navThree">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

export default function Menu () {
    return (
        <div class="menu">
            <div class="navbar">
                <NavOne />
                <NavTwo />
                <NavThree />
            </div>
        </div>
    );
}