function Post (props) {
    return (
        <div class="post">
            <div class="post-Menu">
                <img src={props.profileimg} alt="profile"/>
                {props.name}
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img src={props.postimg} alt="post"/>
            <div>
                <div class="post-Icons">
                    <div class="icons-Left">
                        <ion-icon name="heart-outline"></ion-icon>
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

export default function Posts() {
    return (
        <div class="posts">
            <Post name="" profileimg="" postimg="" likedimg="" person="" number=""/>
            <Post name="" profileimg="" postimg="" likedimg="" person="" number=""/>
            <Post name="" profileimg="" postimg="" likedimg="" person="" number=""/>
        </div>
    );
}