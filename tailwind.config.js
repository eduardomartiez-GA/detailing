/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{html,js}', './node_modules/tw-elements/js/**/*.js']
import twElements from 'tw-elements/plugin.cjs'
export const plugins = [twElements]
export const darkMode = 'class'
