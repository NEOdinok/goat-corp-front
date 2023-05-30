import Header from 'comps/layout/Header/Header';
import MenuDrawer from 'comps/layout/MenuDrawer/MenuDrawer';
import styles from './layout.module.scss';
import cn from 'classnames';

interface Props {
	children: React.ReactNode
}

const ShopLayout: React.FC<Props> = ({children}) => {
	return (
		<main className={cn(styles.page)}>
			<Header />
			<div className={styles.content}>
				{children}
			</div>
			<MenuDrawer />
		</main>
	);
}

export default ShopLayout;