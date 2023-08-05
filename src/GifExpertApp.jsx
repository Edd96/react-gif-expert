import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (value) => {
        //Principio de inmutabilidad!!! React evitar mutar arreglos
        // const newCategories = [...categories];

        // newCategories.push('CS Go xD');
        if (categories.includes(value)) return;
        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />{/*Evento padre llamado*/}

            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category} category={category} />
                    )
                }
            </ol>
        </>
    )
}