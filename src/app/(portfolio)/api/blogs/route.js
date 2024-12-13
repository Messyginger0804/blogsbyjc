import { allBlogs } from 'contentlayer/generated'; // Import your blogs source
import { sortBlogs } from '@/utils'; // Import the sort function

// app/portfolio/api/blogs.js
export async function GET(req) {
  try {
    const sortedBlogs = sortBlogs(allBlogs); // Sort blogs
    const blog = sortedBlogs[1]; // Get the second blog

    // Convert relative image path to absolute URL
    const baseUrl = "https://blogsbyjc.vercel.app";
    const cleanPath = originalPath.replace("../../public/", "");

    // Construct the API response
    const latestBlog = {
      title: blog.title,
      snippet: blog.description,
      url: blog.url,
      image: `${baseUrl}${cleanPath}`, // Construct URL
    };
    

    console.log("API Response:", latestBlog);

    // Return the response with appropriate headers
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

    // Error handling
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
