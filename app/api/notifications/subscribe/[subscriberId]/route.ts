import { deleteSubscriber } from '@utils/novu';
import type { NextRequest } from 'next/server';

type Params = Record<'params', DeleteSubscriber>;

type DeleteSubscriber = {
	subscriberId: string;
}

export async function DELETE(_: NextRequest, { params }: Params): Promise<Response> {
	try {
		const { subscriberId } = params;
		await deleteSubscriber(subscriberId);
		return new Response('Successfully deleted subscriber', { status: 200 });
	} catch (error) {
		return new Response('Error deleting subscriber', { status: 405 });
	}
}