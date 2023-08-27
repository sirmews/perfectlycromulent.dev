'use client'
import { FeatureContext } from '@/app/contexts';
import { Subscribe } from '@components/client/Subscribe';
import { useContext } from 'react';

export const SubscribeForm = () => {
	const { features } = useContext(FeatureContext);
	const allowSubscription = features['allow-subscription'];
	if (!allowSubscription) {
		return null;
	}
	return (
		<>
			<Subscribe />
		</>
	);
}