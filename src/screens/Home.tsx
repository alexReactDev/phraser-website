function Home() {
	return (
		<div className="box-border h-[100vh] pt-20 bg-[url('/images/home/bg.jpg')] bg-cover bg-center bg-no-repeat">
			<div className="container h-full">
				<div className="flex h-full justify-center">
					<div className="lg:w-1/2 flex flex-col justify-center">
						<h1 className="mb-12 font-accent text-4xl/[1.2em] xm:text-5xl/[1.2em] text-white text-center md:text-start">
							Phraser - AI vocabulary builder
						</h1>
						<div className="flex flex-col gap-3 xm:gap-4 sm:gap-5 items-center md:flex-row md:gap-10">
							<a href="https://play.google.com" className="w-4/5 2xm:w-2/3 sm:w-1/2 flex justify-center items-center gap-3 border border-solid border-gray-400 rounded-lg py-1 pr-3 pl-1 bg-[#ffffff77] shadow hover:bg-[#ffffffaa] active:shadow-sm active:relative active:top-[1px]">
								<img src="/images/icons/google-play.png" alt="google play" />
								<p className="text-lg">
									Get on Google play
								</p>
							</a>
							<a href="https://www.apple.com/app-store/" className="w-4/5 2xm:w-2/3 sm:w-1/2 flex justify-center items-center gap-3 border border-solid border-gray-400 rounded-lg py-1 pr-3 pl-1 bg-[#ffffff77] shadow hover:bg-[#ffffffaa] active:shadow-sm active:relative active:top-[1px]">
								<img src="/images/icons/appstore.png" alt="google play" />
								<p className="text-lg">
									Get on App store
								</p>
							</a>
						</div>
					</div>
					<div className="hidden lg:flex w-1/2 justify-end items-center">
						<div className="w-3/5">
							<img src="/images/home/hero.png" alt="phraser on phone" className="w-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;