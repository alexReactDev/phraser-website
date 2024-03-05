interface INavLink {
	title: string,
	url: string,
	content?: ISupportLink[]
}

interface IContentLink {
	title: string,
	content: ISupportLink[],
	url?: string
}

export type ISupportLink = INavLink | IContentLink;