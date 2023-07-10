import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/gifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["goku"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toLowerCase())) return;
    // setCategories([...categories,'Nueva Categoria'])
    setCategories((cat) => [newCategory, ...cat]);
  };
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {/* Listado de gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif items */}
    </>
  );
};
