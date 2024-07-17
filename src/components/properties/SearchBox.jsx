import React, { useState } from "react";
import Select from 'react-select';
const SearchBox = () => {
  const [selectedCategory, setSelectedCategory] = useState("PG");
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Find a home away from home
      </h1>
      <div className="flex justify-center mb-4">
        <div className="relative bg-gray-100 rounded-full p-2 flex">
          <CategoryButton
            category="PG"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category="Rent"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category="Plot"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
      <SearchBar category={selectedCategory} />
    </div>
  );
};
function CategoryButton({ category, selectedCategory, setSelectedCategory }) {
  const isSelected = selectedCategory === category;

  return (
    <button
      className={`px-4 py-2 mx-1 transition-all duration-300 ease-in-out ${
        isSelected ? 'text-red-500' : 'text-gray-500'
      }`}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
      <div
        className={`border-b-4 transition-all duration-300 ease-in-out ${
          isSelected ? 'border-red-500' : 'border-transparent'
        }`}
      ></div>
    </button>
  );
}

function SearchBar({ category }) {
  const locationOptions = [
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Ahmedabad', label: 'Ahmedabad' },
    { value: 'Noida', label: 'Noida' },
    { value: 'Dehradun', label: 'Dehradun' },
    // Add more locations as needed
  ];

  return (
    <div className="flex justify-center">
      <div className="relative w-full md:w-1/2 bg-gray-100 p-4 rounded-full flex items-center">
        {category === 'Rent' ? (
          <>
            <Select
              className="w-1/3 mr-2"
              options={locationOptions}
              placeholder="Location"
              isClearable
            />
            <select className="border-2 border-gray-300 rounded-full p-2 w-1/3 mr-2">
              <option value="">Select BHK/Type</option>
              <option value="1BHK">1 BHK</option>
              <option value="2BHK">2 BHK</option>
              <option value="3BHK">3 BHK</option>
              <option value="4BHK">4 BHK</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
            </select>
            <select className="border-2 border-gray-300 rounded-full p-2 w-1/3 mr-2">
              <option value="">Select Budget</option>
              <option value="3000">3k</option>
              <option value="5000">5k</option>
              <option value="10000">10k</option>
              <option value="50000">50k</option>
              <option value="100000">1 lakh</option>
              <option value="300000">3 lakh</option>
              <option value="400000">4 lakh</option>
            </select>
          </>
        ) : (
          <input
            type="text"
            className="border-2 border-gray-300 rounded-full p-2 w-full"
            placeholder={`Search ${category}...`}
          />
        )}
        <button className="bg-red-500 text-white px-4 py-2 rounded-full ml-2">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
