import { ImageResponse } from 'next/server'
import { heading } from './page'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Perfectly Cromulent Software Engineer'
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
	return new ImageResponse(
		(

			<div tw="flex font-sans bg-neutral-900 text-white h-full w-full items-center justify-center px-10">
				<div tw="flex mx-auto max-w-7xl px-2 lg:px-6">
					<div tw="flex mx-auto lg:mx-0 flex-col">
						<p tw="text-4xl font-bold tracking-normal sm:text-7xl flex-col">
							{heading}
						</p>
					</div>
				</div>
			</div>

		),
		size
	)
}
