import { createSubscriber, deleteSubscriber } from '@utils/novu';
import { NextRequest } from 'next/server';

type PostData = {
	email: string;
	description: string;
}

type DeleteData = {
	subscriberId: string;
}

export async function POST(req: NextRequest) {
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

export async function DELETE(req: Request) {
	try {
		const { subscriberId } = await req.json() as DeleteData;
		await deleteSubscriber(subscriberId);
		return new Response('Successfully deleted subscriber', { status: 200 });
	} catch (error) {
		return new Response(`Deletion error`, { status: 500 });
	}
}