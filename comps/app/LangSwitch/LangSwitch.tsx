'use client'
import { LanguageContext } from 'contexts/LanguageContext';
import { useContext } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

interface Props {
	orient: string,
}

const LangSwitch: React.FC<Props> = ({orient}) => {
	const {changeLanguage, currentLanguage} = useContext(LanguageContext);

	return (
		<div className={styles.langSwitch}>
			<ul className={cn(styles.ul, orient == 'row'? styles.row: styles.col)}>
				<li 
					className={cn(
						styles.item,
						currentLanguage == 'ru'? styles.active: ''
					)}
					onClick={() => changeLanguage('ru')}
				>RU</li>

				<li 
					className={cn(
						styles.item,
						currentLanguage == 'en'? styles.active: ''
					)}
					onClick={() => changeLanguage('en')}
				>EN</li>
			</ul>
		</div>
	);
}
 
export default LangSwitch;