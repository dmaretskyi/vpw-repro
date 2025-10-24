import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		projects: Array.from({ length: 10 }, (_, i) =>
			defineWorkersConfig({
				test: {
					name: `project-${i}`,
					poolOptions: {
						workers: {
							wrangler: { configPath: './wrangler.jsonc' },
						},
					},
				},
			})
		),
	},
});
