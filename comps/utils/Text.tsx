'use client'
import { useContext } from 'react';
import { LanguageContext } from 'contexts/LanguageContext';

interface Props {
	contentID: string,
}

const MultiLingualContent: React.FC<Props> = ({contentID}) => {
	const { translations, currentLanguage } = useContext(LanguageContext);
  return translations[currentLanguage][contentID];
}

export default MultiLingualContent;
