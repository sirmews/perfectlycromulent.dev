import { createSubscriber } from '@utils/novu';
import type { NextRequest } from 'next/server';

type PostData = {
	email: string;
	description: string;
}

export async function POST(req: NextRequest): Promise<Response> {
	try {
		const { email, description } = await req.json() as PostData;
		// TODO: better validation when its needed
		if (!email || !description) {
			return new Response('Missing email or description', { status: 400 });
		}
		await createSubscriber({ email, description });
		return new Response('Successfully subscribed', { status: 200 });
	} catch (error) {
		return new Response(`Subscription error`, { status: 500 });
	}
}