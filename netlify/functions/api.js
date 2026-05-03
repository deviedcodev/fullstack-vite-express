const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
};

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });

export default async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const { pathname } = new URL(req.url);
  const route = pathname.replace(/^\/(\.netlify\/functions\/api|api)/, "") || "/";

  if (route === "/hello" && req.method === "GET") {
    return json(200, {
      message: "Hello dari Netlify Function! ✅",
      success: true,
    });
  }

  return json(404, {
    success: false,
    error: "Not Found",
    path: pathname,
  });
};

export const config = {
  path: ["/api/*", "/.netlify/functions/api/*"],
};
