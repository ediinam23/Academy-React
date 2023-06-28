import React from "react";
import classes from "./Products.module.scss";
import ArtiscticTitle from "../../../components/title/artisticTitle/ArtiscticTitle.jsx";
import ProductCard from "./productCard/ProductCard.jsx";
import {useAppData} from "../../../context/AppContext.jsx";

const Products = () => {
    const {pageData} = useAppData();
    const {products: productsSection} = pageData;
    const {title, items: products} = productsSection;

    return <section className={classes['container']}>
        <ArtiscticTitle title={title}/>
        <div className={classes['products-list']}>
            {Array.isArray(products) && products.length > 0 ?
                products.map((item, index) => <ProductCard key={`products-${index}`}
                                                       title={item?.title}
                                                       description={item?.description}
                                                       image={item?.image}
                                                       imageAltText={item?.title}/>)
                :
                <div>There are no products.</div>
            }
        </div>
    </section>
}

export default Products;