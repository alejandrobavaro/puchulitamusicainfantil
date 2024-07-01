import React, { useEffect } from 'react';

function SearchBar({ categories, onCategoryChange }) {
  useEffect(() => {
    // Establecer "Todos" como la categoría por defecto
    onCategoryChange('Todos');
  }, [onCategoryChange]);

  return (
    <div className="search-navbar">
      <div className="btn-group objetoCentrado1" role="group">
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className="btn btn-category"
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
