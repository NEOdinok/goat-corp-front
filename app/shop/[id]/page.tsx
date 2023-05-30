import { NextPage } from "next";
import styles from './product-page.module.scss';
import ImageSlider from "@/comps/app/ImageSlider/ImageSlider";
import ProductInfo from "@/comps/app/ProductInfo/ProductInfo";
import SizeSelector from "@/comps/app/SizeSelector/SizeSelector";

const ProductPage: NextPage = () => {
	return (
		<div className={styles.productPage}>
			<ImageSlider />
			<ProductInfo />

			<div className={styles.sizeAndQuantity}>
				<SizeSelector />
				<SizeSelector />
			</div>
		</div>
	);
}
 
export default ProductPage;