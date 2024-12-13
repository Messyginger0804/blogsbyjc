import { allBlogs } from 'contentlayer/generated'; // Import your blogs source
import { sortBlogs } from '@/utils'; // Import the sort function

export async function GET(req) {
  try {
    const sortedBlogs = sortBlogs(allBlogs); // Sort blogs
    const blog = sortedBlogs[1]; // Get the second blog

    // Clean the image path
    const baseUrl = "https://blogsbyjc.vercel.app"; // Your site URL
    const cleanImagePath = blog.image.replace("../../public/", ""); // Remove "../../public/"
    const imageUrl = `${baseUrl}/${cleanImagePath}`; // Construct the full image URL

    // Construct the API response
    const latestBlog = {
      title: blog.title,
      snippet: blog.description,
      url: blog.url,
      image: imageUrl, // Use the cleaned and full image URL
      tags: blog.tags,
    };

    console.log("API Response:", latestBlog);

    return new Response(JSON.stringify(latestBlog), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error in GET /api/blogs:", error);

    return new Response(
      JSON.stringify({ message: "Failed to fetch blogs", error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
