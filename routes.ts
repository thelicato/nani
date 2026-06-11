import { index, rootRoute, route } from '@tanstack/virtual-file-routes';

export const routes = rootRoute('root.tsx', [
  index('home.tsx'),
  route('/practice', 'practice.tsx'),
  route('/hiragana', 'hiragana.tsx'),
]);
