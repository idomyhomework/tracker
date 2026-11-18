import uiPreset from '@utp/ui/tailwind-preset'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [uiPreset],
  content: ['./index.html', './src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
}
