import type { Config } from "tailwindcss";
import { radixThemePreset } from "radix-themes-tw";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{tsx,ts,js,jsx,html}"],
  presets: [radixThemePreset],
};

export default config;
