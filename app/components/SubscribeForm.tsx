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
			<div className="pointer-events-auto w-full max-w-sm overflow-hidden text-gray-300 mt-4">
				<div className="py-6">
					<Subscribe />
				</div>
			</div>
		</>
	);
}