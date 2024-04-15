function GetAPKBtn() {
	return (
		<a href="/downloadable/phraser_beta_0.0.1.apk" download className="w-4/5 2xm:w-2/3 sm:w-1/2 flex justify-center items-center gap-3 border border-solid border-gray-400 rounded-lg py-2 pr-3 pl-1 bg-[#ffffff99] shadow uppercase hover:bg-[#ffffffbb] active:shadow-sm active:relative active:top-[1px]">
			<img src="/images/icons/android.png" width={45} height={45} alt="android" />
			<p className="">
				Get .apk
			</p>
		</a>
	)
}

export default GetAPKBtn;