import { createFileRoute } from '@tanstack/react-router';
import { HiraganaPage } from '../components/HiraganaPage';

export const Route = createFileRoute('/hiragana')({
  component: HiraganaPage,
});
