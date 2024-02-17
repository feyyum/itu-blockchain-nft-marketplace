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
        },
        {
         id: 4,
         name: 'rm',
         description: 'rm',
         image: './img/rm.jpg',
        },
        {
        id: 5,
        name: 'm1',
        description: 'm1',
        image: './img/m1.jpg',
        },
        {
        id: 6,
        name: 'm2',
        description: 'm2',
        image: './img/m2.jpg',
        },
        {
        id: 7,
        name: 'm3',
        description: 'm3',
        image: './img/m3.jpg',
        },
        {
        id: 8,
        name: 'm4',
        description: 'm4',
        image: './img/m4.jpg',
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
  