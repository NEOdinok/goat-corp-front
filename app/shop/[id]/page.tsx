import { NextPage } from "next";
import styles from './product-page.module.scss';
import ImageSlider from "@/comps/app/ImageSlider/ImageSlider";
import ProductInfo from "@/comps/app/ProductInfo/ProductInfo";
import AmountSeletor from "@/comps/app/AmountSelector/AmountSelector";
import SizeSelector from "@/comps/app/SizeSelector/SizeSelector";
import Btn from "@/comps/app/Btn/Btn";
import FooterInfo from "@/comps/app/FooterInfo/FooterInfo";
import LinksTerms from "@/comps/app/LinksTerms/LinksTerms";

const ProductPage: NextPage = () => {
	return (
		<div className={styles.productPage}>
			<ImageSlider />
			<ProductInfo />

			<div className={styles.sizeAndQuantity}>
				<SizeSelector />
				<AmountSeletor />
			</div>
			<Btn text="добавить в корзину" />
			<FooterInfo />
			<LinksTerms />
		</div>
	);
}
 
export default ProductPage;