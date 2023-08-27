import { addSubscriberToTopic, deleteTopic } from '@utils/novu';
import type { NextRequest } from 'next/server';

type Params = Record<'params', GeneralParam>;

type GeneralParam = {
	topicKey: string;
}

type PostData = {
	subscribers: string[];
}

// get topicKey and return error if not found
const getTopicKey = (params: GeneralParam): string => {
	const { topicKey } = params;
	if (!topicKey) {
		throw new Error('Missing topic key');
	}
	return topicKey;
}

export async function POST(req: NextRequest, { params }: Params): Promise<Response> {
	try {
		const { subscribers } = await req.json() as PostData;
		await addSubscriberToTopic({ topicKey: getTopicKey(params), subscribers });
		return new Response('Successfully added subscribers to topic', { status: 200 });
	} catch (error) {
		return new Response('Error adding subscribers to topic', { status: 500 });
	}
}

export async function DELETE(_: NextRequest, { params }: Params): Promise<Response> {
	try {
		await deleteTopic(getTopicKey(params));
		return new Response('Successfully deleted topic', { status: 200 });
	} catch (error) {
		return new Response('Error deleting topic', { status: 500 });
	}
}