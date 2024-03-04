export interface IImageBlock {
	type: "image",
	src: string,
	alt: string
}

export interface ITextBlock {
	type: "text",
	content: string
}

export interface ISubtitleBlock {
	type: "subtitle",
	content: string
}

export interface IArticle {
	id: string,
	title: string,
	preview: string | null,
	created: number,
	content: (IImageBlock | ITextBlock | ISubtitleBlock)[]
}