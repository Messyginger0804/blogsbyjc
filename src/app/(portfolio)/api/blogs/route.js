// app/portfolio/api/blogs.js
export async function GET(req) {
    const latestBlog = {
      title: "Blog of the Month: How to Drive Traffic to Your Site",
      snippet: "Discover proven strategies to increase website traffic and engage your audience.",
      url: "https://blogsbyjc.com/blog-of-the-month",
    };
  
    // Return the response with CORS headers
    return new Response(JSON.stringify(latestBlog), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Access-Control-Allow-Methods": "GET, OPTIONS", // Allow GET and OPTIONS
        "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
      },
    });
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
  