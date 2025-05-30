import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<AppContextProvider>
				<App />
				<Toaster position="top-center" reverseOrder={false} />
			</AppContextProvider>
		</BrowserRouter>
	</StrictMode>,
)
