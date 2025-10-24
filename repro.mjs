import { execSync } from 'node:child_process';

for (let i = 0; i < 30; i++) {
	execSync(`pnpm vitest run`, { stdio: 'inherit' });
}
