function GetOnGooglePlayBtn() {
	return (
		<a href="https://play.google.com" className="w-4/5 2xm:w-2/3 sm:w-1/2 flex justify-center items-center gap-3 border border-solid border-gray-400 rounded-lg py-2 pr-3 pl-1 bg-[#ffffff99] uppercase shadow hover:bg-[#ffffffbb] active:shadow-sm active:relative active:top-[1px]">
			<img src="/images/icons/google-play.png" width={40} height={40} alt="google play" />
			<p className="">
				Get on Google play
			</p>
		</a>
	)
}

export default GetOnGooglePlayBtn;