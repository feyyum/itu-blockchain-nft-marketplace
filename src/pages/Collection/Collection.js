import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCollectionItems } from './api'; // You'll need to define this function to fetch collection items and trending items from your backend
import logoImage from './img/logo.jpg'; // Import the images
import notDevConImage from './img/notdevcon.jpg';
import b101Image from './img/101.jpg';
import rmImage from './img/rm.jpg';
import m1Image from './img/m1.jpg';
import m2Image from './img/m2.jpg';
import m3Image from './img/m3.jpg';
import m4Image from './img/m4.jpg';

function Collection() {
  const [collectionItems, setCollectionItems] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    // Fetch collection items when the component mounts
    const fetchCollectionItems = async () => {
      try {
        const items = await getCollectionItems();
        setCollectionItems(items);
      } catch (error) {
        console.error('Error fetching collection items:', error);
      }
    };

    fetchCollectionItems();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handlePrevClick = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (scrollIndex < collectionItems.length - 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mt-4 ml-4 mb-4">Collections</h1>
      {/* Gallery Section */}
      <div className="relative flex justify-center">
        {/* Left Arrow */}
        {scrollIndex > 0 && (
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={handlePrevClick}>
            &lt;
          </button>
        )}
        {/* Group collection items and show only 4 of them */}
        <div className="overflow-hidden flex">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${scrollIndex * 100}%)` }}>
            {/* Show collection items on the current page */}
            {collectionItems.slice(scrollIndex * 4, (scrollIndex + 1) * 4).map((item) => (
              <div key={item.id} className="w-64 p-4">
                <Link to={`/collection/${item.id}`}>
                  <img
                    src={
                      item.id === 1
                        ? logoImage
                        : item.id === 2
                        ? notDevConImage
                        : item.id === 3
                        ? b101Image
                        : item.id === 4
                        ? rmImage
                        : item.id === 5
                        ? m1Image
                        : item.id === 6
                        ? m2Image
                        : item.id === 7
                        ? m3Image
                        : m4Image
                    }
                    alt={item.name}
                    className="w-full h-auto"
                  />
                  <h2 className="text-xl font-bold my-2">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Right Arrow */}
        {scrollIndex < Math.ceil(collectionItems.length / 4) - 1 && (
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={handleNextClick}>
            &gt;
          </button>
        )}
      </div>
      {/* Trending Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 ml-4">Trending</h2>
        <div>
          {collectionItems.map((item, index) => (
            <div key={item.id} className="w-64 p-4 flex items-center mb-4">
              <span className="text-lg font-semibold mr-4">{index + 1}</span>
              <div className="flex items-center">
                <img
                  src={
                    item.id === 1
                      ? logoImage
                      : item.id === 2
                      ? notDevConImage
                      : item.id === 3
                      ? b101Image
                      : item.id === 4
                      ? rmImage
                      : item.id === 5
                      ? m1Image
                      : item.id === 6
                      ? m2Image
                      : item.id === 7
                      ? m3Image
                      : m4Image
                  }
                  alt={item.name}
                  className="w-16 h-auto mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
