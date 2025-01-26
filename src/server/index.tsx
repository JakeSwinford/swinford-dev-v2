import { serve } from "bun";

import index from "../../src/client/pages/index/index.html";
import blog from "../../src/client/pages/blog/index.html";
import howIBuiltMyFirstOpenSourceProject from "../../src/client/pages/blog/entries/how-i-built-my-first-open-source-project/index.html";
import fiveTipsToImproveYourCodeQuality from "../../src/client/pages/blog/entries/5-tips-to-improve-your-code-quality/index.html";

const server = serve({
  development: true,
  static: {
    "/": index,
    "/blog": blog,
    "/blog/how-i-built-my-first-open-source-project": howIBuiltMyFirstOpenSourceProject,
    "/blog/5-tips-to-improve-your-code-quality": fiveTipsToImproveYourCodeQuality
    },
  
  async fetch(_req) {
    return new Response("Fallback response", {
      headers: { "Content-Type": "text/plain" },
    });
  },
});


console.log(`Server started at http://localhost:${server.port}`);