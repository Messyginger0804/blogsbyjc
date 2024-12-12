// app/portfolio/api/blogs.js
export async function GET(req) {
  // Example data for the current blog of the month
  const blogOfTheMonth = {
    title: "Blog of the Month: How to Drive Traffic to Your Site",
    snippet: "Discover proven strategies to increase website traffic and engage your audience.",
    url: "https://blogsbyjc.com/blog-of-the-month",
  };

  return new Response(JSON.stringify(blogOfTheMonth), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow all origins
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow all origins
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
