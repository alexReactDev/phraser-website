import SupportNav from "@/components/SupportNav";

function SupportLayout({ children }: { children: React.ReactNode}) {
	return (
		<div className="pt-20">
			<div className="container">
				<div className="flex flex-col lg:flex-row py-5">
					<nav className="lg:w-1/4 shrink-0">
						<SupportNav />
					</nav>
					<div className="grow lg:pl-5">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SupportLayout;