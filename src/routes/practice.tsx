import { createFileRoute } from '@tanstack/react-router';
import { PracticePage } from '../components/PracticePage';

export const Route = createFileRoute('/practice')({
  component: PracticePage,
});
