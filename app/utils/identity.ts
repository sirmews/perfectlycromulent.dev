import { ANON_ID } from '@utils/constants';
import crypto from 'crypto';
import { cookies } from 'next/headers';

export const anonymousId = (): string => {
	return crypto.randomUUID();
};

export const getAnonymousId = (): string => {
	const cookieStore = cookies();
	return cookieStore.get(ANON_ID)?.value ?? anonymousId();
}