
// services/api.js

// Mock data hotels
const mockHotels = [
  {
    id: 1,
    name: "Sunrise Hotel",
    city: "Hanoi",
    price: 800000,
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    name: "Saigon Luxury",
    city: "Ho Chi Minh",
    price: 1200000,
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    name: "Beach Resort",
    city: "Da Nang",
    price: 1500000,
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    id: 4,
    name: "Budget Stay",
    city: "Hanoi",
    price: 500000,
    image: "https://picsum.photos/400/250?random=4",
  },
];

// Giả lập gọi API fetchHotels
export async function fetchHotels({ city = "", minPrice = "" }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [...mockHotels];

      if (city) {
        result = result.filter((h) =>
          h.city.toLowerCase().includes(city.toLowerCase())
        );
      }

      if (minPrice) {
        result = result.filter((h) => h.price >= Number(minPrice));
      }

      resolve(result);
    }, 500); // giả lập delay 0.5s
  });
}

