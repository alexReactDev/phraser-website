export interface IBlock {
	id?: string
}

export interface IImageBlock extends IBlock {
	type: "image",
	src: string,
	alt: string
}

export interface ITextBlock extends IBlock {
	type: "text",
	content: string
}

export interface ISubtitleBlock extends IBlock {
	type: "subtitle",
	content: string
}

export type TContent = (IImageBlock | ITextBlock | ISubtitleBlock)[];
export interface IArticle {
	id: string,
	title: string,
	preview: string | null,
	created: number,
	content: TContent
}

export interface ISupportArticle {
	title: string,
	updated: number,
	url: string,
	content: TContent
}