import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode}) {
	return (
		<>
			<Header />		
			<div className="h-full flex flex-col">
				<main className="grow">
					{children}
				</main>
				<Footer />
			</div>
		</>
	)
}

export default MainLayout;