import Logo from "./Logo";
import TopNav from "./TopNav";

function Header() {
	return (
		<header className="fixed w-full top-0 left-0 bg-[#f2f2f2]">
			<div className="container">
				<div className="h-20 flex items-center justify-between">
					<Logo />
					<TopNav />
				</div>
			</div>
		</header>
	)
}

export default Header;