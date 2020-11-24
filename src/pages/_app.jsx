import { ThemeProvider } from 'styled-components'

import '../styles/globals.css'
import Theme from '../Theme/Theme'

function MyApp({ Component, pageProps }) {
    return (
		<ThemeProvider theme={ Theme }>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
