import GetAPKBtn from "./get-buttons/GetAPK";


function Get({ itemsCenter = false }) {
	return (
		<div>
			<div className={`flex flex-col gap-3 xm:gap-4 sm:gap-5 items-center justify-center ${itemsCenter ? "" : "lg:justify-start"} md:flex-row md:gap-10 mb-4`}>
				<GetAPKBtn />
			</div>
			<a href="/download" className={`block text-center text-sm underline text-gray-200 ${itemsCenter ? "" : "lg:text-start"}`}>Other downloads</a>
		</div>
	)
}

export default Get;