/**
 * Split string into individual lines of text
 * @param haiku
 * @returns
 */
export const splitHaiku = (haiku: string) => {
	// split haiku into lines
	// and trim whitespace
	const lines = haiku.split('/').map(line => line.trim())
	return lines
}