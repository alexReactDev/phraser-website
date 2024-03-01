interface IProps {
	className?: string,
	isOpen: boolean,
	onChange: () => void
}

function Burger({ className = "", isOpen, onChange }: IProps) {
	return (
		<div 
			className={`${className} ${isOpen && "before:rotate-45 after:-rotate-45 before:top-[calc(50%-1px)] after:top-[calc(50%-1px)]"} md:hidden relative w-8 h-6 before:w-full after:w-full before:h-[2px] after:h-[2px] before:absolute after:absolute before:left-0 after:left-0 before:top-0 after:bottom-0 before:bg-[#333] after:bg-[#333] cursor-pointer before:duration-300 after:duration-300`}
			onClick={onChange}
		>
			<div className={`${isOpen && "hidden"} absolute w-full h-[2px] left-0 top-[calc(50%-1px)] bg-[#333]`} />
		</div>
	)
}

export default Burger;