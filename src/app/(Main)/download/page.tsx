import GetAPKBtn from "@/components/get-buttons/GetAPK";

function download() {
	return (
		<div className="pt-20">
			<div className="container">
				<div className="my-5 p-4 border border-solid border-gray-200">
					<h1 className="mb-3 text-center text-2xl">
						Downloads
					</h1>
					<div className="flex flex-col items-center gap-5">
						<GetAPKBtn />
					</div>
				</div>
			</div>
		</div>
	)
}

export default download;