import { IImageBlock } from "../../../types/article";

function Picture({ image }: { image: IImageBlock }) {
	return (
		<div className="mx-auto my-2 2xm:my-3 xm:my-4 flex justify-center max-w-[300px] max-h-[280px] xm:max-w-[420px] xm:max-h-[400px] md:max-w-[760px] lg:max-w-[980px] md:max-h-[600px]">
			<img src={image.src} alt={image.alt} className="max-w-full max-h-full object-contain" />
		</div>
	)
}

export default Picture;