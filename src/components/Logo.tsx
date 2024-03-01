function Logo() {
	return (
		<a href="/" className="flex items-center gap-[5px]">
			<div className="w-[64px] h-[64px] flex items-center justify-center">
				<img src="/images/logo/logo.png" alt="logo" />
			</div>
			<p className="font-accent text-[20px]">
				Phraser
			</p>
		</a>
	)
}

export default Logo;