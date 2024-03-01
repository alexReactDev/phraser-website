function AI() {
	return (
		<div>
			<div className="container">
				<div className="min-h-[100vh] py-8 flex flex-col items-center justify-center gap-5 2xm:gap-8 lg:flex-row lg:gap-0 lg:items-stretch">
					<div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-end pl-5">
						<h2 className="mb-3 2xm:mb-5 font-accent text-2xl 2xm:text-3xl text-center lg:text-end">
							Build your vocabulary with AI
						</h2>
						<p className="text-sm/[1.6em] 2xm:text-base text-center lg:text-end">
							Phraser offers you various ai-powered ways to build your vocabulary. Learn phrases in context, use interval repetition or classic flashcards - you can choose the way you like most or combine them all.
						</p>
					</div>
					<div className="w-3/4 2xm:w-2/3 sm:w-1/2 flex flex-col justify-center items-center lg:items-end">
						<div className="w-3/5">
							<img src="/images/ai/hero.png" alt="Learning with AI by phraser" className="w-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AI;