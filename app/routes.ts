import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // Work Routes
  route("/work/anobs", "routes/work/anobs.tsx"),
  route("/work/living-life-fearless", "routes/work/living-life-fearless.tsx"),
  route("/work/shop-llf", "routes/work/shop-llf.tsx"),
  route("/work/uptymistx", "routes/work/uptymistx.tsx"),

  // Project Routes
  route("/projects/collectivv", "routes/projects/collectivv.tsx"),
  route("/projects/mememachine3000", "routes/projects/meme-machine-3000.tsx"),
] satisfies RouteConfig;
