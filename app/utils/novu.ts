import type { ISubscriberPayload, ITopicPayload, ITopicSubscribersPayload } from '@novu/node';
import { Novu } from '@novu/node';
import type { AxiosResponse } from 'axios';
import { getAnonymousId } from './identity';

// send Email type
interface CreateSubscriberInputs extends ISubscriberPayload { }

interface UpdateSubscriberInputs {
	subscriberId: string;
	data: ISubscriberPayload;
}

interface CreateTopicInputs extends ITopicPayload { }
interface ITopicsResponse {
	data: any
}

interface AddSubscriberToTopicInputs extends ITopicSubscribersPayload {
	topicKey: string;
	subscribers: string[];
}

interface CreateSubscriberResponse extends AxiosResponse<ISubscriberPayload> {
	subscriberId?: string;
}

interface AddSubscribersToTopicResponse extends AxiosResponse<{
	succeeded: string[];
	failed: Record<'notFound', string[]>;
}> { }

export const novu = new Novu(process.env.NOVU_API_KEY!);

/**
 * Create a subscriber in Novu
 * @see https://docs.novu.co/platform/subscribers#1-ahead-of-trigger
 */
export const createSubscriber = async (inputs: CreateSubscriberInputs): Promise<CreateSubscriberResponse> => {
	try {
		return await novu.subscribers.identify(getAnonymousId(), {
			email: inputs.email,
			firstName: "Subscriber",
		});
	} catch (error) {
		throw new Error('Error sending email subscriber');
	}
}

/**
 * Update a subscriber in Novu
 * @see https://docs.novu.co/platform/subscribers#update-a-subscriber
 */
export const updateSubscriber = async (inputs: UpdateSubscriberInputs): Promise<void> => {
	try {
		await novu.subscribers.update(inputs.subscriberId, inputs.data);
	} catch (error) {
		throw new Error('Error updating subscriber');
	}
}

/**
 * Delete a subscriber in Novu
 * @see https://docs.novu.co/platform/subscribers#delete-a-subscriber
 */
export const deleteSubscriber = async (subscriberId: string): Promise<void> => {
	try {
		await novu.subscribers.delete(subscriberId);
	} catch (error) {
		throw new Error('Error deleting subscriber');
	}
}

/**
 * Creates a topic in Novu
 * If successful this will return the internal ID generated by Novu and the topic key given by the user.
 * 
 * __Note:__ The topic key should be unique and can't be changed once chosen.
 * @see https://docs.novu.co/platform/topics/#create-a-topic
 */
export const createTopic = async (inputs: CreateTopicInputs): Promise<ITopicsResponse> => {
	try {
		return await novu.topics.create(inputs);
	} catch (error) {
		throw new Error('Error creating topic');
	}
}

/**
 * Delete a topic in Novu
 * 
 * __Note:__ A topic can only be deleted if it doesn't have any subscriber added. 
 * When trying to delete a topic with subscribers a conflict error will be returned. 
 * @see https://docs.novu.co/platform/topics#delete-a-topic
 */
export const deleteTopic = async (topicId: string): Promise<void> => {
	try {
		await novu.topics.delete(topicId);
	} catch (error) {
		throw new Error(`Error deleting topic: ${topicId}`);
	}
}

/**
 * Return the whole topic object from Novu
 * @see https://docs.novu.co/platform/topics/#create-a-topic
 */
export const getTopic = async (key: string): Promise<ITopicsResponse> => {
	try {
		return await novu.topics.get(key);
	} catch (error) {
		throw new Error(`Error getting topic: ${key}`);
	}
}

/**
 * Assign subscribers to a topic
 * @param inputs - { topicKey: string, subscribers: string[]}
 * 
 * @example adding subscribers to a specific topic 
 * ```ts
 * await addSubscriberToTopic({topicKey: 'my-topic', subscribers: ['subscriber-id-1', 'subscriber-id-2']})
 * ```
 * @see https://docs.novu.co/platform/topics/#subscribers-management-in-a-topic
 */
export const addSubscriberToTopic = async (inputs: AddSubscriberToTopicInputs): Promise<AddSubscribersToTopicResponse> => {
	try {
		return await novu.topics.addSubscribers(inputs.topicKey, { subscribers: inputs.subscribers });
	} catch (error) {
		throw new Error(`Error adding subscribers to topic`);
	}
}

/**
 * Create a subscriber and assign them to a topic immediately
 */
export const createSubscriberAndAddToTopic = async (inputs: CreateSubscriberInputs & { topicKey: string }): Promise<void> => {
	try {
		const subscriber = await createSubscriber(inputs);
		if (subscriber.subscriberId) {
			await addSubscriberToTopic({ topicKey: inputs.topicKey, subscribers: [subscriber.subscriberId] });
		}
	} catch (error) {
		throw new Error(`Error creating subscriber and adding to topic`);
	}
}