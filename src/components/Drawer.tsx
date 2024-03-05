'use client'

import React, { useState } from "react";

function Drawer({ children }: { children: React.ReactNode }) {
	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)} className="mb-2 text-lg lg:hidden active:text-gray-800 active:relative active:top-[1px]">
				{"Menu ›"}
			</button>
			<div className={`${isOpen ? "max-h-[9999px]" : "max-h-0"} lg:max-h-none overflow-hidden duration-1000`}>
				{children}
			</div>
		</div>
	)
}

export default Drawer;