import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ route }) => {
	const { id } = route;
	if (id) {
		let path = id.slice(1);
		const firstLetter = path.slice(0, 1).toUpperCase();
		path = path.replace(path[0], firstLetter);
        
		return {
			path
		};
	}
};
