function Nav() {
	return (
		<ul className="flex flex-col items-center text-gray-700 gap-[10px] md:flex-row md:gap-6">
			<li className="list-none">
				<a href="#home" className="hover:text-[#555] active:text-fontColor-0">
					Home
				</a>
			</li>
			<li className="list-none">
				<a href="#features" className="hover:text-[#555] active:text-fontColor-0">
					Features
				</a>
			</li>
			<li className="list-none">
				<a href="#download" className="hover:text-[#555] active:text-fontColor-0">
					Download
				</a>
			</li>
			<li className="list-none">
				<a href="/blog" className="hover:text-[#555] active:text-fontColor-0">
					Blog
				</a>
			</li>
			<li className="list-none">
				<a href="/support" className="hover:text-[#555] active:text-fontColor-0">
					Support
				</a>
			</li>
		</ul>
	)
}

export default Nav;