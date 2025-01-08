import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HookApp } from './HookApp.jsx'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
import { MultipleCutomHooks } from './03-examples/MultipleCutomHooks.jsx'
import { FocuesScreen } from './04-useRef/FocuesScreen.jsx'
import { Layout } from './05-UseLayoutEffect/Layout.jsx'
import { Memorize } from './06-UseMemo/Memorize.jsx'
import './08-useReducer/intro-reducer.js'
import { TodoApp } from './08-useReducer/TodoApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
)
