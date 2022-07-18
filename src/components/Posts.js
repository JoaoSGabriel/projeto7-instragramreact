import React from "react";

function Post (props) {
    const [like, setLike] = React.useState('md hydrated');
    const [iconName, setIconName] = React.useState('heart-outline')
    function likePost () {
        if (like === 'md hydrated') {
            setLike('md hydrated like');
            setIconName('heart')
        } else {
            setLike('md hydrated');
            setIconName('heart-outline')
        }
    }

    return (
        <div class="post">
            <div class="post-Menu">
                <img src={props.profileimg} alt="profile"/>
                {props.name}
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img onDoubleClick={likePost} src={props.postimg} alt="post"/>
            <div>
                <div class="post-Icons">
                    <div class="icons-Left">
                        <ion-icon onClick={likePost} class={like} name={iconName}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="post-Comments">
                    <img src={props.likedimg} alt="liked"/>
                    <h1>Curtido por <strong>{props.person}</strong> e <strong>outras {props.number} pessoas</strong></h1>
                </div>
            </div>
        </div>
    );
}

const post_Content = [
    {name: "AKita Inu", profileimg: "https://love.doghero.com.br/wp-content/uploads/2018/03/akita-1-1024x576.webp", postimg: "https://love.doghero.com.br/wp-content/uploads/2018/03/akita-5-1024x735.jpg", likedimg: "https://love.doghero.com.br/wp-content/uploads/2019/12/American-bully-2.webp", person: "American Bully", number: "324.678"}, 
    {name: "Basenji", profileimg: "https://love.doghero.com.br/wp-content/uploads/2020/06/dogs-602890_960_720.jpg", postimg: "https://love.doghero.com.br/wp-content/uploads/2020/06/cao-basenji-na-coleira-retrato_231786-178.webp", likedimg: "https://love.doghero.com.br/wp-content/uploads/2020/05/bernese-mountain-dog-caminhar-ao-ar-livre_157917-1.webp", person: "Bernese", number: "315.678"}, 
    {name: "Afghan Hound", profileimg: "https://love.doghero.com.br/wp-content/uploads/2020/07/8219516661_0b3e160dc8_b.webp", postimg: "https://love.doghero.com.br/wp-content/uploads/2020/07/dog-white-portrait-face.jpg", likedimg: "https://love.doghero.com.br/wp-content/uploads/2019/12/Bloodhound-2.webp", person: "Bloodhound", number: "328.964"}]

export default function Posts() {

    return (
        <div class="posts">
            {post_Content.map(item => <Post name={item.name} profileimg={item.profileimg} postimg={item.postimg} likedimg={item.likedimg} person={item.person} number={item.number}/>)}
        </div>
    );
}
