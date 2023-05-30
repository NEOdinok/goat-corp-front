import styles from './size-selector.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
}

const SizeSelector: React.FC<Props> = ({ }) => {
	return (
		<div className={styles.sizeSelector}>
			<div className={styles.alwaysVisibleSection}>
				<span className={styles.selectedSize}>XL</span>
				<FontAwesomeIcon className={styles.angle} icon={faAngleDown} />
			</div>
			<div className={styles.expandableSection}>
				<p>Test text</p>
				<p>Test text</p>
				<p>Test text</p>
				<p>Test text</p>
			</div>
		</div>
	)
}
 
export default SizeSelector;