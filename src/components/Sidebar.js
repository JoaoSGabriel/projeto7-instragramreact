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

export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="sidebar-Top">
                <img src="https://t2.uc.ltmcdn.com/pt/posts/1/7/1/como_colocar_fundo_preto_nas_fotos_16171_600_square.jpg" alt="profile"/>
                <div>
                    <h1>Nome de Perfil</h1>
                    <h2>Seguindo</h2>
                </div>
            </div>
            <div class="sidebar-Line">
                <h3>Sugestões para você</h3>
                <h4>Ver tudo</h4>
            </div>
            <SidebarContent profileimg="https://t2.uc.ltmcdn.com/pt/posts/1/7/1/como_colocar_fundo_preto_nas_fotos_16171_600_square.jpg" accountName="Nome de perfil"/>
            <SidebarContent profileimg="https://t2.uc.ltmcdn.com/pt/posts/1/7/1/como_colocar_fundo_preto_nas_fotos_16171_600_square.jpg" accountName="Nome de perfil"/>
            <SidebarContent profileimg="https://t2.uc.ltmcdn.com/pt/posts/1/7/1/como_colocar_fundo_preto_nas_fotos_16171_600_square.jpg" accountName="Nome de perfil"/>
            <SidebarContent profileimg="https://t2.uc.ltmcdn.com/pt/posts/1/7/1/como_colocar_fundo_preto_nas_fotos_16171_600_square.jpg" accountName="Nome de perfil"/>
            <SidebarContent profileimg="https://t2.uc.ltmcdn.com/pt/posts/1/7/1/como_colocar_fundo_preto_nas_fotos_16171_600_square.jpg" accountName="Nome de perfil"/>
            <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma</p>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}