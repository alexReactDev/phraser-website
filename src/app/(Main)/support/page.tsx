import Link from "next/link";

function Support() {
	return (
		<div className="border border-solid border-gray-200 p-3 bg-gray-50 shadow-sm">
			<h1 className="mb-2 text-xl 2xm:text-2xl">
				Contact support
			</h1>
			<p>
				If you experience problems with phraser app, complete following steps first:
			</p>
			<ol className="my-3 pl-8 list-decimal">
				<li className="mb-2">
					Make sure that problem persists in latest version of the app
				</li>
				<li className="mb-2">
					Try reinstall the app (sometimes it actually helps)
				</li>
				<li className="mb-2">
					Check FAQ section
				</li>
			</ol>
			<p>
				If you still have questions, you can contact support via email:
				<span> </span>
				<Link href="mailto:support@phraser365.com" className="text-gray-800 underline">
					support@phraser365.com
				</Link>
			</p>
		</div>
	)
}

export default Support;