import Logo from "./Logo";
import Nav from "./Nav";
import Social from "./Social";

function Footer() {
	return (
		<footer className="py-3 border-t border-solid border-gray-200 bg-[#f2f2f2]">
			<div className="container">
				<div className="flex gap-4 flex-col items-center mb-4 md:mb-2 md:flex-row justify-between">
					<Logo />
					<Nav />
					<Social />
				</div>
				<div className="flex justify-center">
					<p className="text-sm text-gray-400 text-center">
						© Phraser by alexReactDev
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;