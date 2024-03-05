import { TContent } from "../../../types/article";
import Picture from "./Picture";
import Subtitle from "./Subtitle";

function ArticleContent({ content }: { content: TContent }) {
	return (
		<>
			{
				content.map((content, idx) => {
					if(content.type === "image") {
						return <Picture key={idx} image={content} />
					} else if(content.type === "subtitle") {
						return <Subtitle key={idx} subtitle={content} />
					} else {
						return (
							<p key={idx} className="text-[15px] text-center md:text-start 2xm:text-[16px]">
								{
									content.content
								}
							</p>
						)
					}
				})
			}
		</>
	)
}

export default ArticleContent;