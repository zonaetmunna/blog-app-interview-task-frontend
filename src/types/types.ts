export type TBlog = {
	userId: number;
	id: string;
	title: string;
	body: string;
};

export type TComment = {
	blogId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};
