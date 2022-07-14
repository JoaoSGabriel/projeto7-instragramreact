import BoxStories from "./BoxStories";
import Posts from "./Posts";

export default function Content () {
    return (
        <div class="content">
            <div class="left-Content">
                <BoxStories />
                <Posts />
            </div>
            <div class="fake-Sidebar"></div>
        </div>
    );
}