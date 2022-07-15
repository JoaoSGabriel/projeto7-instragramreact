function SidebarContent(props) {
    return (
        <div class="sidebar-Content">
            <div class="page">
                <img src={props.profileimg} alt="profile"/>
                <div>
                    <h1>{props.accountName}</h1>
                    <h5>Segue você</h5>
                </div>
            </div>
            <h6>Seguir</h6>
        </div>
    );
}

function SidebarTop(props) {
    return (
        <div class="sidebar-Top">
                <img src={props.profileimg} alt="profile"/>
                <div>
                    <h1>{props.accountName}</h1>
                    <h2>Seguindo</h2>
                </div>
            </div>
    );
}

const userSuggestion = [
    {profileimg: "https://love.doghero.com.br/wp-content/uploads/2019/05/american-staffordshire-terrier-6.png", accountName: "American Staffordshire Terrier"}];
const suggestion = [
    {profileimg: "https://love.doghero.com.br/wp-content/uploads/2018/08/ra%C3%A7a-de-cachorro-basset.webp", accountName: "Basset Hound"},
    {profileimg: "https://love.doghero.com.br/wp-content/uploads/2016/10/Beagle-6.webp", accountName: "Beagle"},
    {profileimg: "https://love.doghero.com.br/wp-content/uploads/2020/05/bernese-mountain-dog-caminhar-ao-ar-livre_157917-1.webp", accountName: "Bernese"},
    {profileimg: "https://love.doghero.com.br/wp-content/uploads/2018/07/shutterstock_378545317_Easy-Resize.com_-e1541520537977-1024x767.webp", accountName: "Bichon Frisé"},
    {profileimg: "https://love.doghero.com.br/wp-content/uploads/2019/12/Bloodhound-2.webp", accountName: "Bloodhound"}]

export default function Sidebar() {
    return (
        <div class="sidebar">
            {userSuggestion.map(item => <SidebarTop profileimg={item.profileimg} accountName={item.accountName}/>)}
            <div class="sidebar-Line">
                <h3>Sugestões para você</h3>
                <h4>Ver tudo</h4>
            </div>
            {suggestion.map(item => <SidebarContent profileimg={item.profileimg} accountName={item.accountName}/>)}
            <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma</p>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}