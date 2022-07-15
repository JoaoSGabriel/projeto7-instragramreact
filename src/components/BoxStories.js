function Stories(props) {
    return (
        <div class="stories">
            <div><img class="profile" src={props.img} alt="accountimage"/></div>
            <p>{props.name}</p>
        </div>
    );
}

const stories = [
    {img: "https://love.doghero.com.br/wp-content/uploads/2018/03/shutterstock_1031976436-1024x695.webp", name: "Boiadeiro Australiano"},
    {img: "https://love.doghero.com.br/wp-content/uploads/2017/03/Destaque-Border-Collie.jpg", name: "Border Collie"},
    {img: "https://love.doghero.com.br/wp-content/uploads/2020/09/closeup-portrait-dog-borzoi-breed-smiling_218319-653.jpg", name: "Borzoi"},
    {img: "https://love.doghero.com.br/wp-content/uploads/2018/07/shutterstock_387858169-min-e1541520586958-1024x768.webp", name: "Boston Terrier"},
    {img: "https://love.doghero.com.br/wp-content/uploads/2018/12/boxer-15.png", name: "Boxer"},
    {img: "https://love.doghero.com.br/wp-content/uploads/2018/01/Buldogue-franceCC82s-3-1024x576.jpg", name: "Buldogue Francês"},
    {img: "https://love.doghero.com.br/wp-content/uploads/2017/04/Galeria-6-buldogue-ingleCC82s-1024x576.webp", name: "Buldogue Inglês"},
    {img: "https://love.doghero.com.br/wp-content/uploads/2018/03/shutterstock_154829555-1024x680.webp", name: "Bull Terrier"},
    {img: "https://love.doghero.com.br/wp-content/uploads/2018/03/cane_corso2-1024x768.jpg", name: "Cane Corso"},];

export default function BoxStories() {
    return (
        <div class="box-Stories">
            <div class="arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            {stories.map(item => <Stories img={item.img} name={item.name}/>)}
        </div>
    );
}