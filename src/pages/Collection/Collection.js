import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCollectionItems} from './api'; // You'll need to define this function to fetch collection items and trending items from your backend
import logoImage from './img/logo.jpg'; // Import the images
import notDevConImage from './img/notdevcon.jpg';
import b101Image from './img/101.jpg';

function Collection() {
  const [collectionItems, setCollectionItems] = useState([]);

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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mt-4 ml-4 mb-4">Collections</h1>
      <div className="flex mb-4 justify-start">
        <div className="mr-8">
          <h2 className="text-lg font-semibold ml-4">All</h2>
        </div>
        <div className="mr-8">
          <Link to="/collection/art" className="text-lg font-semibold">
            Art
          </Link>
        </div>
        <div>
          <Link to="/collection/gaming" className="text-lg font-semibold">
            Gaming
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-start">
        {collectionItems.map((item, index) => (
          <div key={item.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
            <Link to={`/collection/${item.id}`}>
              <img
                src={
                  item.id === 1
                    ? logoImage
                    : item.id === 2
                    ? notDevConImage
                    : b101Image
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
                      : b101Image
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