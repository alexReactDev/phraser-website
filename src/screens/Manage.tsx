function Manage() {
	return (
		<div className="bg-white">
			<div className="container">
				<div className="min-h-[100vh] py-8 flex flex-col-reverse items-center justify-center gap-5 2xm:gap-8 lg:flex-row lg:gap-0 lg:items-stretch">
					<div className="w-3/4 2xm:w-2/3 sm:w-1/2 flex flex-col justify-center items-center lg:items-start">
						<div className="w-3/5">
							<img src="/images/manage/hero.png" alt="Phraser collections on a phone" className="w-full" />
						</div>
					</div>
					<div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start pl-5">
						<h2 className="mb-3 2xm:mb-5 font-accent text-2xl 2xm:text-3xl text-center lg:text-start">
							Keep and manage phrases in a convenient way
						</h2>
						<p className="text-sm/[1.6em] 2xm:text-base text-center lg:text-start">
							Forget about piles of notebooks. With Phraser you can conveniently store and manage phrases right on your phone.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Manage;