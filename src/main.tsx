import { App as AntdApp } from 'antd'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProviders } from './components/providers/AppProvider.tsx'
import { GeneralProvider } from './components/providers/GeneralProvider.tsx'
import './index.css'
import { AppRoutesProvider } from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProviders>
            <AntdApp>
                <GeneralProvider>
                    <AppRoutesProvider />
                </GeneralProvider>
            </AntdApp>
        </AppProviders>
    </StrictMode>
)
