/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

import Counter from "../islands/Counter.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};
export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <a href="/Andew">Andrew page</a>
      <p>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
