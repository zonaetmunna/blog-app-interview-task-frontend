import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://blog-app-interview-task-backend.vercel.app/api/v1',
	}),
	endpoints: () => ({}),
	tagTypes: ['blog', 'comment'],
});
