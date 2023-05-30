import 'styles/index.scss';
import { Roboto_Mono } from 'next/font/google';
import cn from 'classnames';
import { Metadata } from 'next';
import LanguageContextProvider from "@/contexts/LanguageContext";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const robotoMono = Roboto_Mono({ 
  subsets: ['latin', 'cyrillic'],
  weight: ["300", "400", "500", "700"],// lignt, regular, medium, bold
  preload: true,
})

export const metadata: Metadata = {
  title: 'GOAT.CORP',
  description: 'particularly scary',
}

interface Props {
	children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({children}) => {
  return (
    <html lang="en">
      <body className={cn(robotoMono.className)}>{/* styles.page */}
        <LanguageContextProvider>
          { children }
        </LanguageContextProvider>
      </body>
    </html>
  )
}

export default RootLayout;
