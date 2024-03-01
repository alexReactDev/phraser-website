import Get from "@/components/Get";

function Home() {
	return (
		<div className="pt-20 bg-[url('/images/home/bg.jpg')] bg-cover bg-center bg-no-repeat">
			<div className="container">
				<div className="flex min-h-[100vh] justify-center">
					<div className="lg:w-1/2 flex flex-col justify-center">
						<h1 className="mb-12 font-accent text-4xl/[1.2em] xm:text-5xl/[1.2em] text-white text-center md:text-start">
							Phraser - AI vocabulary builder
						</h1>
						<Get />
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