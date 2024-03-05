import db from "@/model/db";
import { IArticle } from "../../../../../../types/article";
import ArticleContent from "@/components/article/ArticleContent";
import { redirect } from "next/navigation";

async function BlogPage({ params }: { params: { id: string }}) {
	const article: IArticle = await db.collection("articles").findOne({ id: params.id });
	
	if(!article) redirect("/not-found");

	const date = new Date(article.created);

	return (
		<div className="pt-20">
			<div className="container">
				<div className="my-5 py-3 px-3 xm:px-5 border border-solid border-gray-200 bg-gray-50 shadow-sm">
					<h1 className="mb-2 text-xl 2xm:text-2xl">
						{article.title}
					</h1>
					{
						article.preview &&
						<div className="">
							<img src={article.preview} alt="article preview" className="w-full min-h-48 sm:h-96 object-cover object-center border border-solid border-gray-300" />
						</div>
					}
					<div className="my-4 xm:my-5 px-1 2xm:px-3 xm:px-5">
						{
							<ArticleContent content={article.content} />
						}
					</div>
					<div className="mt-3 flex justify-end">
						<p className="text-sm text-gray-400">
							{`${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPage;