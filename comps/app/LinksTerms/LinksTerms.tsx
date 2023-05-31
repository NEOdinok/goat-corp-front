import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import MultiLingualContent from 'comps/utils/Text';
import styles from './links-terms.module.scss';

const LinksTerms: React.FC = () => {
	return (
		<div className={styles.linksTerms}>
			<section className={styles.socialSection}>
				<Link href="https://www.youtube.com/@goat7480" target="_blank" >
					<FontAwesomeIcon className={styles.socialIcon} icon={faYoutube}/>
				</Link>
				<Link href="https://www.instagram.com/goat__corp/?hl=en" target="_blank">
					<FontAwesomeIcon className={styles.socialIcon} icon={faInstagram}/>
				</Link>
			</section>
			<section className={styles.termsSection}>
				<span className={styles.terms}><MultiLingualContent contentID="terms"/></span>
			</section>
		</div>
	);
}
 
export default LinksTerms;