const Categories = ({ categories, filterItem }) => {
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => {
              filterItem(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
