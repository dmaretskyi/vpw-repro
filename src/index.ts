// pad bundle size.
import * as effect from 'effect';
import * as effectAiOpenai from '@effect/ai-openai';

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { DurableObject, WorkerEntrypoint } from 'cloudflare:workers';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hello World!' + (await env.MY_ENTRYPOINT.foo()));
	},
} satisfies ExportedHandler<Env>;

export class MyEntrypoint extends WorkerEntrypoint {
	foo() {
		// I think those just need to be in the bundle
		JSON.stringify(effect);
		JSON.stringify(effectAiOpenai);

		return 'foo';
	}
}
