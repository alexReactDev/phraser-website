function GetOnAppStoreBtn() {
	return (
		<a href="https://www.apple.com/app-store/" className="w-4/5 2xm:w-2/3 sm:w-1/2 flex justify-center items-center gap-3 border border-solid border-gray-400 rounded-lg py-2 pr-3 pl-1 bg-[#ffffff99] uppercase shadow hover:bg-[#ffffffbb] active:shadow-sm active:relative active:top-[1px]">
			<img src="/images/icons/appstore.png" width={40} height={40} alt="google play" />
			<p className="">
				Get on App store
			</p>
		</a>
	)
}

export default GetOnAppStoreBtn;