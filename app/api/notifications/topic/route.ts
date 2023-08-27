import { createTopic } from '@utils/novu';
import type { NextRequest } from 'next/server';

// This isn't exactly type safe on runtime, but it'll keep me honest
type PostData = {
	key: string;
	name: string;
}

export async function POST(req: NextRequest) {
	try {
		const { key, name } = await req.json() as PostData;
		if (!key) {
			return new Response('Missing topic key', { status: 400 });
		}
		const { data } = await createTopic({ key, name });
		return new Response('Successfully created a topic', { status: 200 });
	} catch (error) {
		return new Response('Error creating topic', { status: 405 });
	}
}