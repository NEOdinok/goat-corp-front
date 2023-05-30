import styles from './description-list.module.scss'

interface Props {

}

const DescriptionList: React.FC<Props> = () => {
	return (
		<div className={styles.descriptionList}>
			<div className={styles.descriptionHead}>
				<span className={styles.descriptionHeadText}>Описание</span>
			</div>
			<div className={styles.descriptionBody}>
				<ul className={styles.descriptionList}>
					<li className={styles.listItem}>Страшная</li>
					<li className={styles.listItem}>Свободный крой - не нужно выбирать на размер больше. Футболка и тк большая</li>
					<li className={styles.listItem}>Рост модели на фото - 180см. Размер на модели - L</li>
					<li className={styles.listItem}>Мягкая вязаная ткань со сплошным леопардовым паттерном</li>
					<li className={styles.listItem}>Гид по размерам</li>
				</ul>
			</div>
		</div>
	);
}
 
export default DescriptionList;