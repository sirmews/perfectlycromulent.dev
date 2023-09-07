import { generateRandomGradient } from '@utils/colors';
import { splitHaiku } from '@utils/haiku';
import { getHaiku } from '@utils/supabase';
import { ImageResponse } from 'next/server';

export const runtime = 'edge'

export async function GET(request: Request) {

	const { searchParams } = new URL(request.url)

	const slug = searchParams.get('slug')

	if (!slug) {
		return new Response('Not found', { status: 404 })
	}

	const { data } = await getHaiku(slug)

	const haikuLines = splitHaiku(data?.haiku_text || '')

	// truncate text
	const description = data?.description || ''
	const truncatedDescription = description.length > 100 ? description.slice(0, 100) + '...' : description

	const randomGradient = generateRandomGradient();

	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					color: 'white',
					width: '100%',
					display: 'flex',
					textAlign: 'left',
					flexDirection: 'column',
					backgroundColor: 'black',
					padding: '10px 40px',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						fontSize: 60,
						fontStyle: 'normal',
						color: 'white',
						marginTop: 30,
						lineHeight: 1.2,
						whiteSpace: 'pre',
						flexGrow: 1,
					}}
				>
					<div style={{ fontSize: 25, marginBottom: '50px' }}>A Perfectly Cromulent Haiku</div>
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						fontWeight: 'bold',
						backgroundImage: randomGradient,
						backgroundClip: 'text',
						color: 'transparent',
					}}>
						{haikuLines.map((line, index) => (
							<div style={{
								display: 'flex',
								padding: '0px',
								margin: '0px',
								flexGrow: 1,
								fontWeight: 'bold',
							}} key={index}>
								{line}
							</div>
						))}
						<div style={{ fontSize: 25, marginTop: '70px' }}>

						</div>
					</div>
					<div style={{ marginTop: 'auto', marginBottom: '20px', fontSize: 20, justifyContent: 'flex-end' }}>
						www.perfectlycromulent.dev
					</div>
				</div>
			</div>
		),
		{
			width: 964,
			height: 1204,
			debug: false,
			status: 200,
			headers: {
				contentType: 'image/png',
			}
		}
	)
}