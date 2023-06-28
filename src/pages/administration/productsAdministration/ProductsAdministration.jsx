import React from "react";
import Input from "../../../components/formFields/input/Input";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";
import ProductForm from "./productForm/ProductForm.jsx";
import ListAdministration from "../../../components/listAdministration/ListAdministration.jsx";
import {useAppData} from "../../../context/AppContext.jsx";


const ProductsAdministration = () => {
    const {pageData, dispatch} = useAppData();
    const {products} = pageData;
    const header = [
        {
            title: "Title",
            index: "title"
        },
        {
            title: "Description",
            index: "description"
        }
    ]

    const handleDispatch = (property, value) => {
        dispatch({type: 'products', data: value, property: property})
    }

    return <SectionWrapper title="Products section">
        <Input label="Section title"
               placeholder="Insert first part of title"
               value={products?.title[0]}
               onChange={(value) => handleDispatch("title", [value, products?.title[1]])}
        />
        <Input label=""
               placeholder="Insert second part of title"
               value={products?.title[1]}
               onChange={(value) => handleDispatch("title", [products?.title[0], value])}
        />
        <ListAdministration title={"Products list"}
                            header={header}
                            data={products?.items}
                            changeData={(value) => handleDispatch("items", value)}
                            FormComponent={ProductForm}/>
    </SectionWrapper>
}

export default ProductsAdministration;