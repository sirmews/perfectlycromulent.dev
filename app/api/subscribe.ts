import { sendEmail } from '@utils/novu';
import { NextApiRequest, NextApiResponse } from 'next';

// This isn't exactly type safe on runtime, but it'll keep me honest
type NextRequestWithBody = NextApiRequest & {
	body: {
		email: string;
		description: string;
	}
}

type ResponseData = {
	message: string
}

export default async function handler(req: NextRequestWithBody, res: NextApiResponse<ResponseData>) {
	try {
		if (req.method === 'POST') {
			const { email, description } = req.body;
			await sendEmail({ email, description });
			await res.status(200).json({
				message: `successfully subscribed`
			});
		}
	} catch (error) {
		console.error('Subscription error: ', error);
		return res.status(405).json({ message: 'Subscription error' });
	}
}