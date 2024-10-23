interface MenuItem {
    name: string;
    price: string;
    description?: string;
}

const appetizers: MenuItem[] = [
    { name: "Onion Rings", price: "$10.50" },
    { name: "Poppers", price: "$9.00" },
    { name: "Fried Pickles", price: "$8.00" },
    { name: "Chicken Wings", price: "$2.50 per wing" },
    { name: "French Fries", price: "$6.00" },
    { name: "Sweet Potato Fries", price: "$9.00" },
    { name: "Sidewinders", price: "$6.00" },
    { name: "Appetizer Sampler", price: "$14.00", description: "mix of deep fried pickles, poppers and onion rings" }
];

const sauces: MenuItem[] = [
    { name: "Ranch, Jalapeno Ranch, Fry Sauce, Tarter, BBQ", price: "$0.75" },
    { name: "Sweet & Sour Aioli, Mae Ploy", price: "$1.25" },
    { name: "Blue Cheese Dressing & A1", price: "$1.75" }
];

const soupAndSalad: MenuItem[] = [
    { name: "Cup of Soup", price: "$5.00" },
    { name: "Bowl of Soup", price: "$8.00" },
    { name: "Side Salad and Bowl of Soup with Toast", price: "$12.00" },
    { name: "Dinner Salad with Toast", price: "$12.00" },
    { name: "Side Salad", price: "$7.00" },
    { name: "Caesar Salad", price: "$11.00", description: "Creamy Caesar salad with croutons and parmesan with toast" }
];

const saladAddOns: MenuItem[] = [
    { name: "Add Grilled Chicken", price: "$5.50" },
    { name: "Shrimp", price: "$5.50" },
    { name: "Steak", price: "$9.00" },
    { name: "Bison", price: "$15" },
    { name: "Bacon", price: "$2.00" },
    { name: "Portabella Mushroom", price: "$5.00" }
];

const entrees: MenuItem[] = [
    { name: "Chicken Strips", price: "$11.00", description: "Hand-cut and buttermilk battered to order. Served with sweet & sour sauce." },
    { name: "Coconut Chicken Strips", price: "$14.00", description: "Hand-cut and breaded with coconut and panko. Served with Sweet & Sour Aioli." },
    { name: "Steak Strips", price: "$14.00", description: "Charbroiled hand-cut tender steak strips" },
    { name: "Bison Bites", price: "$19.00", description: "Charbroiled hand-cut bison strips" },
    { name: "Fish & Chips", price: "$17.00", description: "Six crispy golden pieces of Alaskan cod served with Lemon Caper Dill Aioli & lemon." },
    { name: "Carman Ranch Minute Steak", price: "$27.00", description: "Two 4 oz charbroiled tenderloin cuts" },
    { name: "Coconut Shrimp", price: "$14.00", description: "Crispy and delicious- served with creamy sweet & sour sauce." }
];

const burgers: MenuItem[] = [
    { name: "Beef Burger", price: "$14.00", description: "6 Ranch hand-formed charbroiled burger topped with mayo, lettuce, tomato, onion, pickle on a Tuscan bun" },
    { name: "Cheeseburger", price: "$15.50", description: "6 Ranch hand-formed charbroiled beef burger with your choice of pepper jack, cheddar, swiss or blue cheese. Topped with mayo, lettuce, tomato, onion, pickle on a Tuscan bun" },
    { name: "Bacon Cheeseburger", price: "$17.50", description: "6 Ranch hand-formed charbroiled beef patty with Honey Smoked Bacon and your choice of pepper jack, cheddar, swiss or blue cheese. Topped with mayo, lettuce, tomato, onion and pickle on a Tuscan bun" },
    { name: "Range Rider Burger", price: "$19.50", description: "6 Ranch hand-formed charbroiled beef burger topped with pepper jack cheese, jalapeños, bacon, onion rings, pickle, lettuce, tomato and mayo on a Tuscan bun" },
    { name: "Black Bean Burger", price: "$12.50", description: "Grilled black bean burger on ciabatta with garlic aioli and served with lettuce, tomato, onion and pickle on a Tuscan bun" }
];

const sandwiches: MenuItem[] = [
    { name: "Chicken Breast Sandwich", price: "$11.50", description: "Charbroiled and topped with mayo, lettuce, tomato, onion and pickles on a ciabatta" },
    { name: "Coconut Chicken Sandwich", price: "$14.00", description: "Hand-breaded coconut and panko chicken served on a toasted Tuscan bun, topped with a creamy sweet and sour aioli, cucumber, cilantro and siracha" },
    { name: "Reuben Sandwich", price: "$17.00", description: "Corned beef with sauerkraut and Swiss cheese with Russian dressing on toasted marbled rye." },
    { name: "Fried Cod Sandwich", price: "$16.00", description: "Hand-breaded and fried, served on toasted Tuscan bun with cucumbers and lemon caper dill aioli" },
    { name: "Portabella Mushroom Sandwich", price: "$15.00", description: "Balsamic glazed portabella mushroom on a Tuscan bun with garlic aioli, roasted red pepper and goat cheese" },
    { name: "Turkey Sandwich", price: "$15.50", description: "Deli sliced turkey breast served on sourdough with lettuce, tomato, onion, pickle, mayo and choice of cheese (Cheddar, Pepper Jack, or Swiss)" },
    { name: "B.L.T.", price: "$11.00", description: "Bacon, lettuce, tomato, and mayo on toasted sourdough" }
];

const kids: MenuItem[] = [
    { name: "Mini Corn Dogs", price: "$7", description: "with choice of side" },
    { name: "Grilled Cheese", price: "$9", description: "with choice of side" },
    { name: "Chicken Strips", price: "$8", description: "with choice of side" },
    { name: "Plain Kid's Burger", price: "$10", description: "plain buttered bun with choice of side" }
];

const dessert: MenuItem[] = [
    { name: "Sugartime Bakery selections", price: "$5.00", description: "Ask us for our current selections" }
];

export {
    appetizers,
    sauces,
    soupAndSalad,
    saladAddOns,
    entrees,
    burgers,
    sandwiches,
    kids,
    dessert
};