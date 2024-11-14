import { Application, Router } from "jsr:@oak/oak";
import { oakCors } from "@tajpouria/cors";
import "jsr:@std/dotenv/load";

import candidatesRoute from "./route/route.ts";

const app = new Application();
const router = new Router();

app.use(
  oakCors({
    origin: "*",
    // origin: Deno.env.get('FRONTEND_URL'), // In production, replace with your frontend domain
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200,
  }),
);

// Routes
app.use(router.routes());
app.use(router.allowedMethods());
candidatesRoute(router);

// 404 handler for unmatched routes
app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = { error: "Not Found" };
});

// Export the app instance for testing
export default app;
