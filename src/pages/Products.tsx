import productList from "../data/productList";
import SingleCardProducts from "../components/SingleCardProducts";

const Products = () => {
	return (
		<div className="container">
			<div className="row g-3 mt-3 ">
				{productList.map((fd: any, i: number) => (
					<SingleCardProducts
						id={fd.id}
						title={fd.title}
						price={fd.price}
						desc={fd.description}
						img={fd.image}
					/>
				))}
			</div>
		</div>
	);
};

export default Products;
