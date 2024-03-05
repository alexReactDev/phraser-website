import db from "@/model/db";
import { ISupportArticle } from "../../../../../types/article";
import ArticleContent from "@/components/article/ArticleContent";
import { redirect } from "next/navigation";

async function Support({ params }: { params: { url: string } }) {
	const article: ISupportArticle = await db.collection("support_articles").findOne({ url: params.url });
	
	if(!article) redirect("/not-found");

	const date = new Date(article.updated);

	return (
		<div className="border border-solid border-gray-200 p-3 bg-gray-50 shadow-sm">
			<h1 className="mb-2 text-xl 2xm:text-2xl">
				{article.title}
			</h1>
			<div className="px-2">
				<ArticleContent content={article.content} />
			</div>
			<div className="mt-3 flex justify-end">
				<p className="text-sm text-gray-400">
					{`Last update: ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`}
				</p>
			</div>
		</div>
	)
}

export default Support;