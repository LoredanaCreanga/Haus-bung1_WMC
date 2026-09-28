import { useEffect, useState } from 'react';

function CategorySelect({ selectedCategory, onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Kategorien aus der API laden
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="category-select">
      <label htmlFor="category">Choose category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All Categories (Random)</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelect;