import { allBlogs } from 'contentlayer/generated'; // Import your blogs source
import { sortBlogs } from '@/utils'; // Import the sort function

// app/portfolio/api/blogs.js
export async function GET(req) {
  try {
    // Use the imported blogs and sort them
    const sortedBlogs = sortBlogs(allBlogs); // allBlogs should contain your blog data
    const blog = sortedBlogs[1]; // Get the second blog in the sorted list

    // Construct the response for the API
    const latestBlog = {
      title: blog.title,
      snippet: blog.description,
      url: blog.url,
      image: blog.image.filePath, // Include image if necessary
      tags: blog.tags, // Include tags if necessary
    };

    // Return the response with CORS headers
    return new Response(JSON.stringify(latestBlog), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error in GET /api/blogs:", error);

    // Handle errors
    return new Response(
      JSON.stringify({ message: "Failed to fetch blogs", error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        },
      }
    );
  }
}

// Handle preflight OPTIONS requests
export async function OPTIONS() {
  return new Response(null, {
    status: 204, // No content for preflight request
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
