import React from "react";
import Input from "../../../components/formFields/input/Input";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";
import ProductForm from "./productForm/ProductForm.jsx";
import ListAdministration from "../../../components/listAdministration/ListAdministration.jsx";


const ProductsAdministration = ({data, changeData}) => {
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

    return <SectionWrapper title="Products section">
        <Input label="Section title"
               placeholder="Insert first part of title"
               value={data?.title[0]}
               onChange={(value) => changeData("title", [value, data?.title[1]])}
        />
        <Input label=""
               placeholder="Insert second part of title"
               value={data?.title[1]}
               onChange={(value) => changeData("title", [data?.title[0], value])}
        />
        <ListAdministration title={"Products list"}
                            header={header}
                            data={data?.items}
                            changeData={(value) => changeData("items", value)}
                            FormComponent={ProductForm}/>
    </SectionWrapper>
}

export default ProductsAdministration;