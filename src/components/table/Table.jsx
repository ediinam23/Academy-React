import React from "react";
import classes from "./Table.module.scss";

const Table = ({header, data}) => {
    // header - niz objekata {title, index}
    // data - niz objekata

    //header
    // [
    // {title: "Opis", index: "description"},
    // {title: "Naslov", index: "title"},
    // ]

    //data
    //[
    //                 {
    //                     title: "Mobile apps development",
    //                     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...",
    //                     alt: "Mobile aps",
    //                     image: Topic1Image
    //                 },
    //                 {
    //                     title: "Website development",
    //                     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...",
    //                     alt: "Website development",
    //                     image: Topic1Image
    //                 }
    // ]

    //data.map (tableRow) => <tr>
    //                      header.map
    //                          => description - tableRow.description
    //                          => title - tableRow.title
    //          td
    //


    return <table className={classes["table"]}>
        <thead>
            <tr>
                {header?.map(item => <th className={item?.render ? classes["text-right"] : ""} key={`table-header-${item.index}`}>{item?.title}</th>)}
            </tr>
        </thead>
        <tbody>
            {
                data.length > 0
                    ? data.map((row, index) => <tr key={`table-row-${index}`}>
                        {
                            header?.map((header, headerIndex) => {
                                if(header.render){
                                    return <td className={classes["text-right"]} key={`table-row-${index}-item-${headerIndex}`}>{header.render(row)}</td>
                                }else return <td key={`table-row-${index}-item-${header?.index}`}>{row[header?.index] ? row[header?.index] : null}</td>
                            })
                        }
                    </tr>)
                    : <tr>No data</tr>
            }
        </tbody>
    </table>
}

export default Table;