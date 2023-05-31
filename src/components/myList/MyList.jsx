import React from "react";

const MyList = ({list = [] }) => {
    return(
        <ul>
            {
                list.map((item, index) => {
                    console.log(item, index)
                    return <li key={index}>{item.title}</li>
                })
            }
        </ul>
    )
}

export default MyList;