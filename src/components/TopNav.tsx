import Nav from "./Nav";

function TopNav({ isOpen }: { isOpen: boolean }) {
	return (
		<nav className={`${!isOpen ? "-translate-y-full" : ""} flex flex-col justify-center fixed top-0 left-0 w-full h-full overflow-y-auto bg-[#ffffffee] md:translate-y-0 md:bg-inherit md:h-auto md:w-auto md:static duration-300`}>
			<Nav />
		</nav>
	)
}

export default TopNav;