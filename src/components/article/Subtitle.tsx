import { ISubtitleBlock } from "../../../types/article";

function Subtitle({ subtitle }: { subtitle: ISubtitleBlock }) {
	return (
		<h3 className="my-2 2xm:my-3 xm:my-4 text-lg 2xm:text-xl">
			{subtitle.content}
		</h3>
	)
}

export default Subtitle;