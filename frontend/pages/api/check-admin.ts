// import { getAuth } from "@clerk/nextjs/server";

// export default async function handler(req, res) {
//   const { userId } = getAuth(req);

//   // Fetch user details from your database to check admin status
//   const user = await fetchUserFromDatabase(userId);

//   res.status(200).json({ is_admin: user.is_admin });
// }

// async function fetchUserFromDatabase(userId) {
//   // Replace this with your actual database fetch logic
//   return {
//     userId,
//     is_admin: true, // or false based on your database record
//   };
// }
