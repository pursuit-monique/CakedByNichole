import Logo from "./Logo";
import Nav from "./Nav";
import Nav2 from "./Nav2";

export default function Header() {
    return (
        <header className="fixed top-0 w-screen bg-transparent z-50">
            <div className="flex justify-center items-center h-20">
                <Nav />
                <div className="flex items-center">
                    <Logo />
                </div>
                <Nav2 />
            </div>
        </header>
    );
}