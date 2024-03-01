"use client"

import { useState } from "react";
import Logo from "./Logo";
import TopNav from "./TopNav";
import Burger from "./Burger";

function Header() {
	const [ menuOpen, setMenuOpen ] = useState(false);

	return (
		<header className="fixed w-full top-0 left-0 bg-[#f2f2f2] shadow-md">
			<div className="container">
				<div className="h-20 flex items-center justify-between">
					<Logo />
					<TopNav isOpen={menuOpen} />
					<Burger isOpen={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
				</div>
			</div>
		</header>
	)
}

export default Header;