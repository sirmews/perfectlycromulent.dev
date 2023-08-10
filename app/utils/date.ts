const randomLocationsStrings = [
	'possibly on the dining table',
	'in bed',
	'on a staircase to nowhere',
	'at your moms',
	'outside your window'
]

export const formatDate = (dateString: string) => {
	// By using as const, you're using TypeScript's "const assertions". 
	// This is a way to signal to the TypeScript compiler that a value is immutable. 
	// In this context, it ensures that the properties of the options object are of a specific literal type, rather than a more general string type. 
	// This way, TypeScript can match the type more strictly against the DateTimeFormatOptions interface.
	const options = {
		year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const
	};
	return new Date(dateString).toLocaleDateString(undefined, options);
}

export const randomLocations = () => {
	const randomIndex = Math.floor(Math.random() * randomLocationsStrings.length);
	return randomLocationsStrings[randomIndex];
}