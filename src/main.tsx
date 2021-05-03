import '@/styles/global.css'

import { h, render } from 'preact'

import { App } from '@/app'

const entryPoint = document.getElementById('app')

if (entryPoint) render(<App />, entryPoint)
