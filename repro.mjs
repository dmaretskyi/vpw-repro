import { execSync } from 'node:child_process';

for (let i = 0; i < 10; i++) {
	execSync(`pnpm vitest run`, { stdio: 'inherit' });
}
