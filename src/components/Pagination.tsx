import db from "@/model/db";
import Link from "next/link";

async function Pagination({ currentPage }: { currentPage: number }) {
	const cursor = await db.collection("articles").find();
	const pages = Math.ceil((await cursor.count()) / 20);

	function renderPages() {
		const pageElements = [];

		for(let page = 1; page <= pages; page++) {
			pageElements.push(
				<li key={page} className={`${page === currentPage ? "border border-dashed border-gray-400 bg-gray-200" : ""} flex justify-center items-center w-5 h-5 list-none hover:bg-gray-300 active:bg-gray-400`}>
					<Link href={`/blog?page=${page}`}>
						{page}
					</Link>
				</li>
			)
		}

		return pageElements;
	}

	return (
		<div className="flex justify-center">
			<ol className="flex justify-center items-center gap-1">
				{renderPages()}
			</ol>
		</div>
	)
}

export default Pagination;