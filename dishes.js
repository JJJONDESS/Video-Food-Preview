const RESTAURANT = {
  name: 'Melt9 Gulgasht Multan',       // shown in the browser tab title
  phone: '03160843627',                // "Call waiter" button
  whatsapp: '923160843627'             // WhatsApp contact number
};

const DISHES = {

  'Mr-Pizza': {                                                       
    name: 'MR-Pizza-Mayu',
    price: '1650', description: 'Creamy mayo garlic style signature crust', ingredients: 'Mayo Sauce, Grilled Chicken, Onions, Mozzarella', allergens: 'Gluten, Dairy',   
    glb:    'dishes/mr_pizza_small-v1.glb',                      
    glbIos: 'dishes/mr_pizza_ios-v1.glb',                       
    mind:   'dishes/mr-pizza-target.mind',                     
    poster: 'dishes/mr-pizza-poster.jpg'                      
  },

  'VegPizza': {                                                       
    name: 'MR-VegPizza',
    price: '1599', description: 'Fresh vegetables on a hand-stretched base', ingredients: 'Mushroom, capsicum, olives, onion, mozzarella', allergens: 'Gluten, Dairy',   
    glb:    'dishes/VegPizza_small-v1.glb',                      
    glbIos: 'dishes/VegPizza_ios-v1.glb',                       
    mind:   'dishes/VegPizza.mind',                     
    poster: 'dishes/VegPizzaimage.jpg'                      
  },
  
    'video-dish': {
    name: 'Special Video Pizza',
    price: '2000',
    description: 'Watch this pizza in action!',
    video:  'videos/Burgeranimitedvideo.webm', // <--- YOUR VIDEO LINK HERE
    mind:   'dishes/mcart-targets.mind', // Use an existing AR target image
    poster: 'dishes/mcart-poster.jpg'    // Use an existing image for the menu thumbnail
  }

};
