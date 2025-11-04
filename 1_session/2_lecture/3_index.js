const data = [
    {
      "id": 1,
      "title": "Wireless Headphone",
      "category": "electronics",
      "rating": 4.5,
      "price": 1200,
      "tags": ["audio", "gadget"]
    },
    {
      "id": 2,
      "title": "Gaming Mouse",
      "category": "electronics",
      "rating": 4.8,
      "price": 850,
      "tags": ["gaming", "accessories"]
    },
    {
      "id": 3,
      "title": "Yoga Mat",
      "category": "fitness",
      "rating": 4.2,
      "price": 600,
      "tags": ["gym", "exercise"]
    },
    {
      "id": 4,
      "title": "Running Shoes",
      "category": "fitness",
      "rating": 4.7,
      "price": 2200,
      "tags": ["shoes", "sport"]
    },
    {
      "id": 5,
      "title": "Water Bottle",
      "category": "fitness",
      "rating": 4,
      "price": 250,
      "tags": ["bottle", "gym"]
    },
    {
      "id": 6,
      "title": "Smart Watch",
      "category": "electronics",
      "rating": 4.6,
      "price": 3400,
      "tags": ["wearable", "smart"]
    },
    {
      "id": 7,
      "title": "Office Chair",
      "category": "furniture",
      "rating": 4.3,
      "price": 7000,
      "tags": ["chair", "office"]
    },
    {
      "id": 8,
      "title": "Study Table",
      "category": "furniture",
      "rating": 4.1,
      "price": 5500,
      "tags": ["table", "wood"]
    },
    {
      "id": 9,
      "title": "LED Lamp",
      "category": "home",
      "rating": 4.4,
      "price": 900,
      "tags": ["light", "decor"]
    },
    {
      "id": 10,
      "title": "Wall Clock",
      "category": "home",
      "rating": 3.9,
      "price": 500,
      "tags": ["clock", "decor"]
    },
    {
      "id": 11,
      "title": "Backpack",
      "category": "fashion",
      "rating": 4.5,
      "price": 1400,
      "tags": ["bag", "travel"]
    },
    {
      "id": 12,
      "title": "Sunglasses",
      "category": "fashion",
      "rating": 4.7,
      "price": 750,
      "tags": ["accessories", "style"]
    },
    {
      "id": 13,
      "title": "T-shirt",
      "category": "fashion",
      "rating": 4.1,
      "price": 300,
      "tags": ["clothes", "casual"]
    },
    {
      "id": 14,
      "title": "Blender",
      "category": "kitchen",
      "rating": 4.6,
      "price": 1800,
      "tags": ["cooking", "mix"]
    },
    {
      "id": 15,
      "title": "Rice Cooker",
      "category": "kitchen",
      "rating": 4.9,
      "price": 3200,
      "tags": ["cooking", "appliance"]
    },
    {
      "id": 16,
      "title": "Non-stick Frypan",
      "category": "kitchen",
      "rating": 4.2,
      "price": 650,
      "tags": ["cooking", "pan"]
    },
    {
      "id": 17,
      "title": "Children Story Book",
      "category": "books",
      "rating": 4.8,
      "price": 200,
      "tags": ["kids", "story"]
    },
    {
      "id": 18,
      "title": "Programming in JavaScript",
      "category": "books",
      "rating": 4.9,
      "price": 950,
      "tags": ["coding", "javascript"]
    },
    {
      "id": 19,
      "title": "Notebook",
      "category": "stationery",
      "rating": 4.3,
      "price": 120,
      "tags": ["writing", "paper"]
    },
    {
      "id": 20,
      "title": "Ball Pen",
      "category": "stationery",
      "rating": 4.1,
      "price": 25,
      "tags": ["pen", "writing"]
    }
  ]
  

  const needData = data
  .filter((d) => d.category === "electronics")
  .slice(0 , 3) 
  .sort((a,b)=> b.price - a.price)


  console.log(needData)