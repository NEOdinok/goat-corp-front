'use client'
import { createContext, Component, ReactNode} from 'react';
import { translations } from 'languages';

export const LanguageContext = createContext({
	currentLanguage: 'ru',
	translations,
	changeLanguage: (lang: string) => {}
});

interface ITranslations {
	[key: string]: string,
 }

interface LanguageContextState {
	currentLanguage: string,
	translations: ITranslations,
}

interface LanguageContextProps {
	children: ReactNode,
}

class LanguageContextProvider extends Component<LanguageContextProps, LanguageContextState> {
	state: LanguageContextState = {
		currentLanguage: 'ru',
		translations,
	}
	changeLanguage = (lang: string) => {
		this.setState({currentLanguage: lang});
	}
	render() {
		return( 
			<LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}

export default LanguageContextProvider;