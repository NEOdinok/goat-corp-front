'use client'
import Link from 'next/link';
import styles from './header.module.scss';
import cn from 'classnames';
import menuDrawerStore from 'stores/UIStore';
// import { observer } from 'mobx-react-lite';
import MultiLingualContent from 'comps/utils/Text';

//observer
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<div className={cn(styles.linkContainerleft, styles.linkContainer)}>
					<div
						className={cn(styles.headerLink, styles.menuDrawerLink)}
						// onClick={() => menuDrawerStore.toggleMenuDrawerOpen(true)}
					>
						<span>
							<MultiLingualContent contentID="menu"/>
						</span>
					</div>
					<Link
						href="/"
						className={cn(styles.headerLink, styles.desktopLink)}
					>
						<span>
							<MultiLingualContent contentID="home"/>
						</span>
					</Link>
					<Link
						href="/"
						className={cn(styles.headerLink, styles.desktopLink)}
					>
						<span>
							<MultiLingualContent contentID="store"/>
						</span>
					</Link>
					<Link
						href="/"
						className={cn(styles.headerLink, styles.desktopLink)}
					>
						<span>
							<MultiLingualContent contentID="videos"/>
						</span>
					</Link>
				</div>
				<div className={cn(styles.rightContainerRight, styles.linkContainer)}>
					<Link href="/" className={cn(styles.headerLink, styles.desktopLink)}>Ru En</Link>
					<Link
						href="/"
						className={styles.headerLink}
					>
						<span>
							<MultiLingualContent contentID="cart"/> (0)
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
 
export default Header;