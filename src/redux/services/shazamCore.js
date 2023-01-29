import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '23a54e6f62mshe76b4b981c05678p1ab864jsn6688f98d76ec')

            return headers;
        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}` }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;