import Menu from "./Menu";
import Content from "./Content";
import BaseboardMobile from "./Baseboard-Mobile";
import MenuMobile from "./Menu-Mobile"

export default function App() {
    return (
        <div>
            <Menu />
            <Content />
            <MenuMobile />
            <BaseboardMobile />
        </div>
    );
}