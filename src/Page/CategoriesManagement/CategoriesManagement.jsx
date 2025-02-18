import { useState } from "react";

const CategoriesManagement = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Food", isDefault: true },
    { id: 2, name: "Rent", isDefault: false },
    { id: 3, name: "Shopping", isDefault: false },
    { id: 4, name: "Tution", isDefault: false },
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [categoryToEdit, setCategoryToEdit] = useState(null);

  // Add Category
  const addCategory = () => {
    if (newCategory) {
      setCategories([
        ...categories,
        { id: categories.length + 1, name: newCategory, isDefault: false },
      ]);
      setNewCategory("");
    }
  };

  // Edit Category
  const handleEditCategory = (id, name) => {
    setCategoryToEdit({ id, name });
  };

  // Save Edit
  const saveEdit = () => {
    setCategories(categories.map((cat) =>
      cat.id === categoryToEdit.id ? { ...cat, name: categoryToEdit.name } : cat
    ));
    setCategoryToEdit(null);
  };

  // Delete Category
  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">বিভাগসমূহ</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add Custom Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border p-2 rounded-md w-2/3"
        />
        <button
          onClick={addCategory}
          className="bg-blue-500 text-white px-6 py-2 rounded-md ml-4"
        >
          Add Category
        </button>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="flex justify-between items-center mb-3">
              {categoryToEdit && categoryToEdit.id === category.id ? (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={categoryToEdit.name}
                    onChange={(e) =>
                      setCategoryToEdit({ ...categoryToEdit, name: e.target.value })
                    }
                    className="border p-2 rounded-md"
                  />
                  <button
                    onClick={saveEdit}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <span className="flex items-center">
                  {category.name}
                  {category.isDefault && (
                    <span className="bg-green-100 text-green-500 px-2 py-1 ml-2 text-xs rounded-full">
                      Default
                    </span>
                  )}
                </span>
              )}

              <div className="space-x-2">
                <button
                  onClick={() => handleEditCategory(category.id, category.name)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesManagement;
