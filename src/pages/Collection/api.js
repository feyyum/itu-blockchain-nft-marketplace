// api.js (or any other appropriate file)

export async function getCollectionItems() {
    try {
      // Here, you would make an HTTP GET request to your backend API endpoint
      // For example:
      // const response = await fetch('/api/collection/items');
      // const data = await response.json();
      // return data;
  
      // For the sake of this example, we'll return mock data
      return [
        {
          id: 1,
          name: 'LOGO',
          description: 'LOGO',
          image: './img/logo.jpg',
        },
        {
          id: 2,
          name: 'NotDevcon',
          description: 'NotDevcon',
          image: './img/notdevcon.jpg',
        },
        {
         id: 3,
         name: 'b101',
         description: 'b101',
         image: './img/101.jpg',
          }
        // Add more items as needed
      ];
    } catch (error) {
      // Handle errors if any
      console.error('Error fetching collection items:', error);
      throw error;
    }
  }
  
  // eslint-disable-next-line
  