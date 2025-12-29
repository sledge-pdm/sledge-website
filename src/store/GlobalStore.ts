import { type Theme } from '@sledge-pdm/ui';
import { createStore } from 'solid-js/store';

export const [globalStore, setGlobalStore] = createStore<{
  theme: Theme;
  currentTellingPage: number;
}>({
  theme: (localStorage.getItem('theme') as Theme) || 'dark-gy-flip',
  currentTellingPage: 0,
});
