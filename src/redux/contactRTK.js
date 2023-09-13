// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6500aa1518c34dee0cd5455c.mockapi.io/api/v1',
//   }),
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contacts'],
//     }),
//     addContactsToList: builder.mutation({
//       query: body => ({
//         url: '/contacts',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContactsFromList: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//         id,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });
// export const {
//   useGetContactsQuery,
//   useAddContactsToListMutation,
//   useDeleteContactsFromListMutation,
// } = contactsApi;
