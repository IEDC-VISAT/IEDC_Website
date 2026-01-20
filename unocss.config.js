import { defineConfig, presetUno, presetTypography, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetTypography(),
        presetIcons({
            scale: 1.2,
            cdn: 'https://esm.sh/',
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
        }),
        presetWebFonts({
            fonts: {
                sans: 'Poppins:300,400,500,600,700,800',
            },
        }),
    ],
    theme: {
        colors: {
            // Primary accents - Cyan/Neon Blue
            primary: '#00CFFF',
            secondary: '#00f0ff',
            accent: '#33FFFF',
            cyan: {
                DEFAULT: '#00d4ff',
                light: '#33FFFF',
                dark: '#00CFFF',
            },
            // Dark backgrounds
            dark: '#0A0F1C',
            darker: '#0b0d1a',
            surface: '#111827',
            card: '#101828',
            // Neutrals / text
            light: '#FFFFFF',
            muted: '#D9D9D9',
            subtle: '#C0C0C0',
            gray: '#ADB9C9',
            // Glow extras
            glow: {
                cyan: 'rgba(0,207,255,0.2)',
                purple: 'rgba(138,43,226,0.2)',
            },
        },
    },
    shortcuts: {
        'btn': 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer',
        'btn-primary': 'btn bg-primary text-dark hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25',
        'btn-secondary': 'btn bg-secondary text-dark hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/25',
        'btn-accent': 'btn bg-accent text-dark hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25',
        'btn-outline': 'btn border-2 border-primary text-primary hover:bg-primary hover:text-dark',
        'card': 'bg-surface rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl',
        'card-dark': 'bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden',
        'section-padding': 'px-4 md:px-8 lg:px-16 py-16 md:py-24',
        'container-main': 'max-w-7xl mx-auto',
        'gradient-primary': 'bg-gradient-to-r from-primary to-secondary',
        'gradient-dark': 'bg-gradient-to-br from-dark via-dark/95 to-primary/10',
        'text-gradient': 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent',
        'glass': 'bg-white/5 backdrop-blur-md border border-white/10',
        'glass-dark': 'bg-dark/70 backdrop-blur-md border border-white/10',
        'neon-glow': 'shadow-lg shadow-primary/30',
    },
})
