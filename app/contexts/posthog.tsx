'use client';
import { usePathname, useSearchParams } from "next/navigation";
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import React, { Suspense, useEffect } from "react";


if (typeof window !== 'undefined') {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!
	})
}

export function PostHogPageview(): JSX.Element {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (pathname) {
			let url = window.origin + pathname;
			if (searchParams && searchParams.toString()) {
				url = url + `?${searchParams.toString()}`;
			}
			posthog.capture("$pageview", {
				$current_url: url,
			});
		}
	}, [pathname, searchParams]);

	return <></>;
}

type AnalyticsPostHogProviderProps = {
	children: React.ReactNode
}

export const AnalyticsPostHogProvider: React.FC<AnalyticsPostHogProviderProps> = ({
	children,
}) => (
	<Suspense>
		<PostHogProvider client={posthog}>{children}</PostHogProvider>
	</Suspense>
)