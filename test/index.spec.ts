import { env, createExecutionContext, waitOnExecutionContext } from "cloudflare:test";
import { describe, it, expect } from "vitest";
// Could import any other source file/function here
import worker from "../src";
import { Response } from "@cloudflare/workers-types/experimental";

describe("Hello World worker", () => {
  it("responds with Hello World!", async () => {
    const request = new Request("http://example.com/blah");
    // Create an empty context to pass to `worker.fetch()`
    const ctx = createExecutionContext();
    const response = (await worker.fetch(request, env, ctx)) as Response;
    // Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
    await waitOnExecutionContext(ctx);
    expect(response.status).toBe(404);
  });
});