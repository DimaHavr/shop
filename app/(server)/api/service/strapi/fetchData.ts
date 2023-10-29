/* eslint-disable no-console */
/* eslint-disable consistent-return */
import axios from 'axios'

import getHeaders from '@/app/(utils)/getHeaders'

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const fetchData = async (url: string) => {
  try {
    const res = await axios.get(`https://shop-strapi.onrender.com/api${url}`, {
      headers: getHeaders(),
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
// export const postData = async (url, post, token) => {
//   const res = await fetch(`${baseUrl}/api/${url}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token,
//     },
//     body: JSON.stringify(post),
//   });

//   const data = await res.json();
//   return data;
// };

// export const putData = async (url, post, token) => {
//   const res = await fetch(`${baseUrl}/api/${url}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token,
//     },
//     body: JSON.stringify(post),
//   });

//   const data = await res.json();
//   return data;
// };

// export const patchData = async (url, post, token) => {
//   const res = await fetch(`${baseUrl}/api/${url}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token,
//     },
//     body: JSON.stringify(post),
//   });

//   const data = await res.json();
//   return data;
// };

// export const deleteData = async (url, token) => {
//   const res = await fetch(`${baseUrl}/api/${url}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token,
//     },
//   });

//   const data = await res.json();
//   return data;
// };
