import db from "@/model/db";
import { IArticle } from "../../../../types/article";
import Article from "@/components/Article";
import Pagination from "@/components/Pagination";

async function Blog({ searchParams }: { searchParams: { page?: string }}) {
	const currentPage = +(searchParams.page || 1);
	const cursor = await db.collection("articles").find();
	const articles = await cursor.sort({ created: -1 }).limit(20).skip(20 * (currentPage - 1)).toArray();

	return (
		<div className="pt-20 h-full">
			<div className="container h-full flex flex-col">
				<div className="grow flex flex-col my-5 p-3 border border-solid border-gray-200">
					<h1 className="mb-3 text-2xl text-center">
						Blog
					</h1>
					<div className="grow flex flex-col gap-3 2xm:gap-5 2xm:px-2 mb-5">
						{
							articles.map((a: IArticle) => <Article key={a.id} article={a} />)
						}
					</div>
					<Pagination currentPage={currentPage} />
				</div>
			</div>
		</div>
	)
}

export default Blog;