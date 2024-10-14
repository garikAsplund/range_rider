import type { LayoutServerLoad } from './$types';
import { checkIfOpen } from '$lib/checkIfOpen';

export const load: LayoutServerLoad = async ({ route }) => {
  const { id } = route;

  const isOpen = checkIfOpen();

  if (id) {
    let path = id.slice(1);
    const firstLetter = path.slice(0, 1).toUpperCase();
    path = path.replace(path[0], firstLetter);

    return {
      path,
      isOpen
    };
  }

  return {
    isOpen
  };
};
