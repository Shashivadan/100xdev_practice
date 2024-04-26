/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { withAccelerate } from '@prisma/extension-accelerate';

import { PrismaClient } from '@prisma/client/edge';

interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const prisma = new PrismaClient({ datasourceUrl: env.DATABASE_URL }).$extends(withAccelerate());
		const newPlayer = await prisma.logs.create({
			data: {
				levels: 'high',
				message: 'hii you at hights levels',
				meta: JSON.stringify('hello json'),
			},
			select: {
				id: true,
				message: true,
				meta: true,
				levels: true,
			},
		});

		console.log(newPlayer);
		return Response.json(newPlayer);
	},
};
