
import Logo from "./Logo"
import Nav from "./Nav";
const Header = () => {
    return (
        <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-full flex-wrap items-center justify-between border-b border-gray-100 bg-[#DFEBE9] p-[2em] font-sans font-bold text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
        <Logo />
        <Nav />

        {/* <h1>Header</h1> */}
    </header>
    );
};

export default Header;