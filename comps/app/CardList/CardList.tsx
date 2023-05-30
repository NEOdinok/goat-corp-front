import ProductCard from '../ProductCard/ProductCard';
import styles from './card-list.module.scss';

const CardList: React.FC = () => {
	return (
		<div className={styles.cardList}>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
}
 
export default CardList;