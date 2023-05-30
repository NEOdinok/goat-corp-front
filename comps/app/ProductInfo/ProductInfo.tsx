import styles from './product-info.module.scss'
import DescriptionList from '../DescriptionList/DescriptionList';

interface Props {
}

const ProductInfo: React.FC<Props> = ({ }) => {
	return (
		<div className={styles.productInfo}>
			<h1 className={styles.productTitle}>
				GOAT [RED SPRING 2022] НАЗВАНИЕ КРУПНО ТИПА ТАКОГО...
			</h1>
			<span className={styles.productPrice}>
				150 000 ₽
			</span>

			<DescriptionList />
		</div>
	);
}
 
export default ProductInfo;