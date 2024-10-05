export interface FoodItem {
  id: number;
  image: string;
  title: string;
  category: string;
  rating: number;
  price: number;
}

export const foodItems = [
  {
    id: 1,
    image: "/images/food/burger.jpg",
    title: "Burger",
    category: "Hamburger",
    rating: 4.5,
    price: 10,
  },
  {
    id: 2,
    image: "/images/food/meat.jpg",
    title: "Meat",
    category: "Meat",
    rating: 4.5,
    price: 15,
  },
  {
    id: 3,
    image: "/images/food/noodles.jpg",
    title: "Noodles",
    category: "Noodles",
    rating: 4.5,
    price: 12,
  },
  {
    id: 4,
    image: "/images/food/salad.jpg",
    title: "Salad",
    category: "Salad",
    rating: 4.5,
    price: 8,
  },
  {
    id: 5,
    image: "/images/food/pizza.jpg",
    title: "Pizza",
    category: "pizza",
    rating: 4.5,
    price: 8,
  },
  {
    id: 6,
    image: "/images/food/mexican.jpg",
    title: "Mexican",
    category: "mexican",
    rating: 4.5,
    price: 8,
  },
  {
    id: 7,
    image: "/images/food/fish.jpg",
    title: "Fish",
    category: "fish",
    rating: 4.5,
    price: 8,
  },
  {
    id: 8,
    image: "/images/food/chicken.jpg",
    title: "Chicken",
    category: "chicken",
    rating: 4.5,
    price: 8,
  },
];

export interface Restaurant {
  name: string;
  slug: string;
  address: string;
  rating: number;
  imageIcon: string;
  image: string;
  products?: {
    image: string;
    title: string;
    category: string;
    rating: number;
    price: number;
  }[];
}

export const restaurants: Restaurant[] = [
  {
    name: "Mexican TacoMex",
    slug: "mexican-tacomex",
    address: "1234 Street Name, Casablanca",
    rating: 4.5,
    imageIcon: "/images/restaurant/mexican_restaurant.jpg",
    image: "/images/restaurant/mexican_restaurant_place.jpg",
    products: [
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
    ],
  },
  {
    name: "Sushi Gold",
    slug: "sushi-gold",
    address: "1234 Street Name, Casablanca",
    rating: 4.5,
    imageIcon: "/images/restaurant/japanesse_restaurant.jpg",
    image: "/images/restaurant/japanese_restaurant_place.jpg",
    products: [
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
    ],
  },
  {
    name: "Naples Pizza",
    slug: "naples-pizza",
    address: "1234 Street Name, Casablanca",
    rating: 4.5,
    imageIcon: "/images/restaurant/italian_restaurant.jpg",
    image: "/images/restaurant/italian_restaurant_place.jpg",
    products: [
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
    ],
  },
  {
    name: "Dragon Tower",
    slug: "dragon-tower",
    address: "1234 Street Name, Casablanca",
    rating: 4.5,
    imageIcon: "/images/restaurant/chinesse_restaurant.jpg",
    image: "/images/restaurant/chinesse_restaurant_place.jpg",
    products: [
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
    ],
  },
  {
    name: "Japan Food",
    slug: "japan-food",
    address: "1234 Street Name, Casablanca",
    rating: 4.5,
    imageIcon: "/images/restaurant/japanesse_restaurant_2.jpg",
    image: "/images/restaurant/japanese_restaurant_place.jpg",
    products: [
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
    ],
  },
  {
    name: "China Food",
    slug: "china-food",
    address: "1234 Street Name, Casablanca",
    rating: 4.5,
    imageIcon: "/images/restaurant/chinesse_restaurant_2.jpg",
    image: "/images/restaurant/chinesse_restaurant_place.jpg",
    products: [
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
      {
        image: "/images/food/burger.jpg",
        title: "Burger",
        category: "Hamburger",
        rating: 4.5,
        price: 10,
      },
    ],
  },
];
