import { Novu } from '@novu/node';
import { getAnonymousId } from './identity';

// send Email type
export type SendEmailInputs = {
	email: string;
	description: string;
}

export const novu = new Novu(process.env.NOVU_API_KEY!);

export const sendEmail = async (inputs: SendEmailInputs): Promise<void> => {
	await novu.subscribers.identify(getAnonymousId(), {
		email: inputs.email,
		firstName: "Subscriber",
	});
}