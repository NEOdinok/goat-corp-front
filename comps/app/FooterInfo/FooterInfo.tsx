import cn from 'classnames';
import styles from './footer-info.module.scss';

interface Props {

}

const FooterInfo:React.FC<Props>= () => {
	return (
		<div className={styles.footerInfo}>
			<span className={styles.infoHeader}>КАКАЯТО ВАЖНАЯ ИНФА ПРО ОПЛАТУ, ДОСТАВКУ, КОНТАКТЫ</span>
			<div className={styles.listSection}>
				<ul className={styles.infoList}>
					<li className={styles.listItem}>Меленьким меленьким шрифтом</li>
					<li className={styles.listItem}>Доставка долгая </li>
					<li className={styles.listItem}>Возврата нет, можете написать нам в телеграм</li>
					<li className={styles.listItem}>Идите нахуй</li>
				</ul>
			</div>
		</div>
	);
}
 
export default FooterInfo;