import Get from "@/components/Get";

function GetScreen() {
	return (
		<div className="py-10 2xm:py-12 xm:py-14 bg-[url('/images/get/bg.jpg')] bg-cover bg-center bg-no-repeat">
			<div className="container">
				<div className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center mx-auto">
					<h2 className="mb-5 text-white text-4xl xm:text-5xl text-center">
						Get it now
					</h2>
					<Get />
				</div>
			</div>
		</div>
	)
}

export default GetScreen;