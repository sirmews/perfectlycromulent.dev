/**
 * Inspired by Hypercolor
 * @see https://hypercolor.dev/generator
 * @see https://github.com/jordihales/hypercolor
 */

type GradientType = 'radial' | 'linear';

/**
 * Returns the luminance of a color in the sRGB color space.
 * Lumiance is a measure of the brightness of a color.
 */
const luminance = (r: number, g: number, b: number): number => {
	r = r / 255.0;
	g = g / 255.0;
	b = b / 255.0;

	r = (r <= 0.03928) ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
	g = (g <= 0.03928) ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
	b = (b <= 0.03928) ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Returns the contrast ratio between two colors.
 */
const contrastRatio = (l1: number, l2: number): number => {
	return (l1 + 0.05) / (l2 + 0.05);
}

/**
 * Returns a random color that has a contrast ratio of at least 4.5 with black.
 */
const generateRandomColor = (): string => {
	const minContrast: number = 4.5;
	const blackLuminance: number = 0.0;
	let r, g, b;

	while (true) {
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);

		const colorLuminance = luminance(r, g, b);
		if (contrastRatio(Math.max(colorLuminance, blackLuminance), Math.min(colorLuminance, blackLuminance)) >= minContrast) {
			return `rgb(${r}, ${g}, ${b})`;
		}
	}
}

/**
 * Returns a random gradient that has a contrast ratio of at least 4.5 with black.
 * The gradient can be either linear or radial.
 * 
 * @returns {string} A CSS gradient string
 */
export const generateRandomGradient = (): string => {
	const gradientType: GradientType = Math.random() > 0.5 ? 'radial' : 'linear';

	let gradientDirection: string;
	if (gradientType === 'linear') {
		const linearDirections: string[] = ['to right', 'to left', 'to top', 'to bottom', 'to right top', 'to right bottom', 'to left top', 'to left bottom'];
		gradientDirection = linearDirections[Math.floor(Math.random() * linearDirections.length)];
	} else {
		const radialDirections: string[] = ['at left bottom', 'at right bottom', 'at left top', 'at right top', 'at center'];
		gradientDirection = radialDirections[Math.floor(Math.random() * radialDirections.length)];
	}

	const colorCount: number = Math.floor(Math.random() * 3) + 2;  // between 2 and 4 colors
	const colors: string[] = [];
	for (let i = 0; i < colorCount; i++) {
		colors.push(generateRandomColor());
	}

	return `${gradientType}-gradient(${gradientDirection}, ${colors.join(', ')})`;
}