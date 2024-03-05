import db from "@/model/db";
import { ISupportLink } from "../../types/links";
import Link from "next/link";
import Drawer from "./Drawer";

async function SupportNav() {
	const cursor = await db.collection("support_links").find();
	const links = await cursor.toArray();

	function renderLinks(link: ISupportLink, level: number) {
		return (
			<li className={`mb-[10px] last:mb-0`}>
				<h3 className={`${level === 1 ? "mb-1 text-xl" : level === 2 ? "mb-[2px] text-lg" : ""} ${link.url ? "hover:underline hover:text-gray-700 active:relative active:top-[1px]" : ""} ${!link.content ? "list-disc" : "!list-none"} last:mb-0`}>
					{
						link.url ?
						<Link href={`/support/${link.url}`}>
							{link.title}
						</Link>
						:
						link.title
					}
				</h3>
				{
					link.content &&
					<ul className={`${link.content.find((link) => link.content) ? "pl-3" : "pl-5 list-disc"}`}>
						{link.content.map((link) => renderLinks(link, level + 1))}
					</ul>
				}
			</li>
		)
	}

	return (
		<Drawer>
			<ul className="mb-3 2xm:mb-5 lg:mb-0 border bg-[#f8f8f8] border-solid border-gray-200 p-3 shadow-sm">
				{
					links.map((link: ISupportLink) => renderLinks(link, 1))
				}
				<li className="">
					<h3 className={`text-xl hover:underline hover:text-gray-700 active:relative active:top-[1px]`}>
						<Link href={`/support`}>
							Contact support
						</Link>
					</h3>
				</li>
			</ul>
		</Drawer>
	)
}

export default SupportNav;