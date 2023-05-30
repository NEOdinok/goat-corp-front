import cn from 'classnames';
import styles from './product-card.module.scss';
import hoverImage from 'public/assets/imgs/prod/image2.jpg';
import previewImage from 'public/assets/imgs/prod/image1.jpg';
import Image from 'next/image';

const ProductCard = () => {
	return (
		<div className={styles.productCard}>
			<div className={styles.imageSection}>
				<Image
					className={styles.productImage}
					src={previewImage}
					alt=""
				/>
			</div>
			<div className={styles.textSection}>
				<div className={styles.productName}>
					<div className={styles.productHeader}>
						футболка
					</div>
					<div className={styles.productSubheader}>
						2020 REDSPRING GOAT STRASHNAYA
					</div>
				</div>
				<div className={styles.productPrice}>
					150 000 ₽
				</div>
			</div>
		</div>
	);
}
 
export default ProductCard;