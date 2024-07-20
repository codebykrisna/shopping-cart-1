import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const CATEGORIES = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];
  
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      setFilteredPosts(data);
    } catch (error) {
      console.log("There is an issue with the API");
      setPosts([]);
      setFilteredPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase()));
    }
  }, [selectedCategory, posts]);

  return (
    <div className="mt-[80px]">
      <div className="p-4">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {CATEGORIES.map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 ${selectedCategory === category ? "bg-gray-200 text-gray-800" : "bg-gray-800"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : filteredPosts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-5 min-h-[80px] mt-[20px]">
          {filteredPosts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen font-bold text-3xl">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
