import styles from './amount-selector.module.scss';
import cn from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface Props {
}

const AmountSeletor: React.FC<Props> = ({ }) => {
	return (
		<div className={styles.sizeSelector}>
			<div className={styles.alwaysVisibleSection}>
				<button className={cn(styles.amountBtn)}>
					<span className={styles.btnIcon}>-</span>
					{/* <FontAwesomeIcon className={styles.btnIcon} icon={faMinus} /> */}
				</button>
				<span className={styles.productAmount}>3</span>
				<button className={cn(styles.amountBtn)}>
					{/* <FontAwesomeIcon className={styles.btnIcon} icon={faPlus} /> */}
					<span className={styles.btnIcon}>+</span>
				</button>
			</div>
		</div>
	)
}
 
export default AmountSeletor;