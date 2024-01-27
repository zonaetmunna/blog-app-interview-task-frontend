import { TBlog, TComment } from '../../../types/types';
import { baseApi } from '../../api/baseApi';

type TGetBlog = {
	success: boolean;
	message: string;
	data: TBlog[];
};

type TGetSingleBlog = {
	success: boolean;
	message: string;
	data: TBlog;
};

type TGetCommentsForBlog = {
	success: boolean;
	message: string;
	data: TComment[];
};

const blogApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getsBlog: builder.query<TGetBlog, void>({
			query: () => ({
				url: '/blog',
				method: 'GET',
			}),
			providesTags: ['blog'],
		}),
		getSingleBlog: builder.query<TGetSingleBlog, string | number>({
			query: (id) => ({
				url: `/blog/${id}`,
				method: 'GET',
			}),
			providesTags: ['blog'],
		}),
		getCommentsForBlog: builder.query<TGetCommentsForBlog, string | number>({
			query: (id) => ({
				url: `/blog/${id}/comments`,
				method: 'GET',
			}),
			providesTags: ['comment'],
		}),
	}),
});

export const { useGetsBlogQuery, useGetSingleBlogQuery, useGetCommentsForBlogQuery } = blogApi;
