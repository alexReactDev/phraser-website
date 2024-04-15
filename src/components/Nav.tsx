function Nav() {
	return (
		<ul className="grow md:grow-0 justify-evenly flex flex-col items-stretch md:items-center text-gray-700 gap-[10px] md:flex-row md:gap-6">
			<li className="flex justify-center items-center grow list-none active:bg-gray-100 md:active:bg-inherit">
				<a href="/#home" className="hover:text-[#555] active:text-fontColor-0">
					Home
				</a>
			</li>
			<li className="flex justify-center items-center grow list-none active:bg-gray-100 md:active:bg-inherit">
				<a href="/#features" className="hover:text-[#555] active:text-fontColor-0">
					Features
				</a>
			</li>
			<li className="flex justify-center items-center grow list-none active:bg-gray-100 md:active:bg-inherit">
				<a href="/download" className="hover:text-[#555] active:text-fontColor-0">
					Download
				</a>
			</li>
			<li className="flex justify-center items-center grow list-none active:bg-gray-100 md:active:bg-inherit">
				<a href="/blog" className="hover:text-[#555] active:text-fontColor-0">
					Blog
				</a>
			</li>
			<li className="flex justify-center items-center grow list-none active:bg-gray-100 md:active:bg-inherit">
				<a href="/support" className="hover:text-[#555] active:text-fontColor-0">
					Support
				</a>
			</li>
		</ul>
	)
}

export default Nav;