import Link from "next/link";
import { IArticle, ITextBlock } from "../../types/article";

function Article({ article }: { article: IArticle }) {
	const previewText = (article.content.find((block) => block.type === "text") as ITextBlock).content.slice(0, 380) + " ...";
	const date = new Date(article.created);

	return (
		<Link href={`/blog/article/${article.id}`} className="flex flex-col md:flex-row border border-solid border-gray-200 p-3 bg-gray-100 hover:border-gray-400 active:relative active:top-[1px]">
			{
				article.preview &&
				<div className="w-[150px] h-[140px] 2xm:w-[180px] 2xm:h-[160px] xm:w-[230px] xm:h-[210px] self-center mb-3 md:mb-0 md:w-[130px] md:h-[125px] shrink-0 border border-solid border-gray-400">
					<img src={article.preview} alt="article preview" className="h-full w-full object-cover object-center" />
				</div>
			}
			<div className="grow md:pl-5">
				<h3 className="mb-1 text-lg text-center md:text-start">
					{article.title}
				</h3>
				<p className="text-[14px] 2xm:text-[15px] mb-1">
					{previewText}
				</p>
				<div className="flex justify-end">
					<p className="text-sm text-gray-400">
						{`${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default Article;