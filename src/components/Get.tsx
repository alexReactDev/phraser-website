function Get() {
	return (
		<div className="flex flex-col gap-3 xm:gap-4 sm:gap-5 items-center md:flex-row md:gap-10">
			<a href="https://play.google.com" className="w-4/5 2xm:w-2/3 sm:w-1/2 flex justify-center items-center gap-3 border border-solid border-gray-400 rounded-lg py-1 pr-3 pl-1 bg-[#ffffff99] shadow hover:bg-[#ffffffbb] active:shadow-sm active:relative active:top-[1px]">
				<img src="/images/icons/google-play.png" alt="google play" />
				<p className="text-lg">
					Get on Google play
				</p>
			</a>
			<a href="https://www.apple.com/app-store/" className="w-4/5 2xm:w-2/3 sm:w-1/2 flex justify-center items-center gap-3 border border-solid border-gray-400 rounded-lg py-1 pr-3 pl-1 bg-[#ffffff99] shadow hover:bg-[#ffffffbb] active:shadow-sm active:relative active:top-[1px]">
				<img src="/images/icons/appstore.png" alt="google play" />
				<p className="text-lg">
					Get on App store
				</p>
			</a>
		</div>
	)
}

export default Get;