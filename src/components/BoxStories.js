function Stories(props) {
    return (
        <div class="stories">
            <div><img class="profile" src={props.img} alt="accountimage"/></div>
            <p>{props.name}</p>
        </div>
    );
}

export default function BoxStories() {
    return (
        <div class="box-Stories">
            <div class="arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            <Stories img="./img/logo.png" name="Nome legal"/>
            <Stories img="./img/logo.png" name="Nome legal"/>
            <Stories img="./img/logo.png" name="Nome legal"/>
            <Stories img="./img/logo.png" name="Nome legal"/>
            <Stories img="./img/logo.png" name="Nome legal"/>
            <Stories img="./img/logo.png" name="Nome legal"/>
            <Stories img="./img/logo.png" name="Nome legal"/>
            <Stories img="./img/logo.png" name="Nome legal"/>
        </div>
    );
}