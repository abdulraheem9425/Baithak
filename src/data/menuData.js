const menuSections = [


  // Starters
  {
    heading: 'Starters',
    items: [
      { title: 'Meat Samosa', price: '£1.40', image: '/assets/images/menu/five.jpeg' },
      { title: 'Vegetable Samosa', price: '£1.20', image: '/assets/images/menu/four.jpeg' },
      { title: 'Seekh Kebab ', price: '£1.50', image: '/assets/images/menu/nine.jpeg' },
      { title: 'Half Chicken', price: '£5.99', image: '/assets/images/menu/half.jpg' },
      { title: 'Papadam', price: '£1.99', image: '/assets/images/menu/first.jpeg' },
      { title: 'Pakora', price: '£3.50', image: '/assets/images/menu/third.jpeg' },
      { title: 'Chicken Wings', price: '£5.00', image: '/assets/images/menu/seven.jpeg' },
      { title: 'Chicken Tikka ', price: '£6.00', image: '/assets/images/menu/4tika.jpg' },
      { title: 'Masala Fish', price: '£5.50', image: '/assets/images/menu/fish.jpg' },
      { title: 'Lamb Chops', price: '£11.99', image: '/assets/images/menu/lampchop.jpg' },
      { title: 'Full Chicken', price: '£13.99', image: '/assets/images/menu/fullch.jpg' }
    ]
  },

  // Rice Dishes
  {
    heading: 'Rice Dishes',
    items: [
      { title: 'Chicken Biryani', price: '£6.99', image: '/assets/images/menu/biryani.jpg' },
      { title: 'Mutter Pilau', price: '£7.99', image: '/assets/images/menu/rice4.jpeg' },
      { title: 'Plain Rice', price: '£3.50', image: '/assets/images/menu/rice2.jpeg' },
      { title: 'Egg Fried Rice', price: '£4.50', image: '/assets/images/menu/rice3.jpeg' },
      { title: 'Zeera Rice', price: '£3.99', image: '/assets/images/menu/rice3.jpg' },
      { title: 'Mutter Pilau', price: '£3.99', image: '/assets/images/menu/rice10.jpg' },
      { title: 'Chicken Pilau', price: '£6.99', image: '/assets/images/menu/chickenpilau.jpg' },
    ]
  },

  // Special Offers
  {
    heading: 'Special Offers',
    items: [
      {
        title: 'Curry Rice, Naan Bread & Drink',
        price: '£6.50',
        description: 'Served with a free drink',
        image: '/assets/images/menu/special1.webp'
      },
      {
        title: 'Kebab Roll & Drink',
        price: '£5.00',
        description: 'Tender kebab wrapped in naan with a free drink',
        image: '/assets/images/menu/kabab.jpg'
      },
      {
        title: 'Chicken Tikka Roll & Drink',
        price: '£6.50',
        description: 'Spicy chicken tikka in naan bread served with a free drink',
        image: '/assets/images/menu/chtika.jpg'
      }
    ]
  },

  // Chef Specials
  {
    heading: 'Chef Specials',
    items: [
      { title: 'Chicken Namak Mandi Karahi', price: 'Half £12.99 / Full £25.99', image: '/assets/images/menu/specialoffer.jpeg' },
      { title: 'Lamb Namak Mandi Karahi', price: 'Half £15.99 / Full £29.99', image: '/assets/images/menu/specialoffer.jpg' },
      { title: 'Black Pepper Chicken Karahi', price: 'Half £12.99 / Full £25.99', image: '/assets/images/menu/blackpap.jpg' },
      { title: 'Black Pepper Lamb Karahi', price: 'Half £15.99 / Full £29.99', image: '/assets/images/menu/blacklamb.jpg' },
      { title: 'Haleem', price: '£8.99', image: '/assets/images/menu/haleem.jpeg' },
      { title: 'Nihari', price: '£11.99', image: '/assets/images/menu/nihari.jpeg' },
      { title: 'Paya', price: '£8.99', image: '/assets/images/menu/paya.jpeg' }
    ]
  },

  // Chicken Curries
  {
    heading: 'Chicken Curries',
    items: [
      { title: 'Chicken Curry', price: '£7.99', image: '/assets/images/menu/chicken.jpeg' },
      { title: 'Chicken Daal', price: '£7.99', image: '/assets/images/menu/chicken1.jpeg' },
      { title: 'Chicken Saag', price: '£7.99', image: '/assets/images/menu/chicken2.jpeg' },
      { title: 'Chicken Jalfrezi', price: '£7.99', image: '/assets/images/menu/chicken3.jpeg' },
      { title: 'Chicken Madras', price: '£7.99', image: '/assets/images/menu/chicken4.jpeg' },
      { title: 'Chicken Vindaloo', price: '£7.99', image: '/assets/images/menu/chicken5.jpeg' },
      { title: 'Chicken Balti', price: '£7.99', image: '/assets/images/menu/chicken6.jpeg' },
      { title: 'Butter Chicken', price: '£7.99', image: '/assets/images/menu/butter.jpg' }
    ]
  },

  // Meat Curries
  {
    heading: 'Meat Curries',
    items: [
      { title: 'Meat Curry', price: '£8.99', image: '/assets/images/menu/meat.png' },
      { title: 'Meat Daal', price: '£8.99', image: '/assets/images/menu/meat1.jpeg' },
      { title: 'Meat Saag', price: '£8.99', image: '/assets/images/menu/meat2.jpeg' },
      { title: 'Meat Bhindi', price: '£8.99', image: '/assets/images/menu/meat3.jpeg' },
      { title: 'Meat Madras', price: '£8.99', image: '/assets/images/menu/meat4.jpeg' },
      { title: 'Meat Balti', price: '£8.99', image: '/assets/images/menu/meatb.jpg' },
      { title: 'Meat Jalfrezi', price: '£8.99', image: '/assets/images/menu/meat6.jpeg' },
      { title: 'Meat Vindaloo', price: '£8.99', image: '/assets/images/menu/meat7.jpeg' }
    ]
  },

  // Mix Grill
  {
    heading: 'Mix Grill',
    items: [
      {
        title: 'Small Mix Grill',
        price: '£13.99',
        description: '2 Kebab, 2 Lamb Chops, 2 Wings, 4 Chicken Tikka',
        image: '/assets/images/menu/mix1.jpeg'
      },
      {
        title: 'Large Mix Grill',
        price: '£18.99',
        description: '3 Kebab, 3 Lamb Chops, 3 Wings, 6 Chicken Tikka',
        image: '/assets/images/menu/specialoffer5.jpg'
      },
      {
        title: 'Family Mix Grill',
        price: '£29.99',
        description: '5 Kebab, 5 Lamb Chops, 5 Wings, 10 Chicken Tikka',
        image: '/assets/images/menu/grid.jpeg'
      }
    ]
  },

  // Vegetable Dishes
  {
    heading: 'Vegetable Dishes',
    items: [
      { title: 'Tarka Daal', price: '£5.99', image: '/assets/images/menu/veg1.jpg' },
      { title: 'Saag Aloo', price: '£5.99', image: '/assets/images/menu/veg.jpeg' },
      { title: 'Daal Palak', price: '£5.99', image: '/assets/images/menu/veg3.jpeg' },
      { title: 'Bhindi', price: '£5.99', image: '/assets/images/menu/veg4.jpeg' },
      { title: 'Karela', price: '£5.99', image: '/assets/images/menu/veg5.webp' },
      { title: 'Mix Vegetable', price: '£5.99', image: '/assets/images/menu/veg6.jpeg' },
      { title: 'Chana Masala', price: '£5.99', image: '/assets/images/menu/chana.jpg' },
      { title: 'Bombay Aloo', price: '£5.99', image: '/assets/images/menu/alo.webp' }
    ]
  },

  // Breads 
  {
    heading: 'Breads ',
    items: [
      { title: 'Plain Naan', price: '£1.20', image: '/assets/images/menu/naan.jpeg' },
      { title: 'Butter Naan', price: '£1.30', image: '/assets/images/menu/naan1.jpeg' },
      { title: 'Roti', price: '£1.20', image: '/assets/images/menu/naan3.jpeg' },
      { title: 'Kulcha', price: '£2.50', image: '/assets/images/menu/naan4.jpeg' },
      { title: 'Roghni naan', price: '£2.50', image: '/assets/images/menu/roghni.jpeg' },     
      { title: 'Garlic Naan', price: '£2.00', image: '/assets/images/menu/naan5.png' },
      { title: 'Chilli Naan', price: '£2.50', image: '/assets/images/menu/naan6.jpeg' },
      { title: 'Keema Naan', price: '£3.50', image: '/assets/images/menu/naan7.png' },
    ]
  },
// Parathas
{
  heading: 'Parathas',
  items: [
    { title: 'Aloo Paratha', price: '£3.50', image: '/assets/images/menu/naan12.png' },
    { title: 'Plain Paratha', price: '£2.50', image: '/assets/images/menu/naan10.jpeg' },
    { title: 'Lachha Paratha', price: '£2.50', image: '/assets/images/menu/naan9.png' },
    { title: 'Sweet Paratha', price: '£2.50', image: '/assets/images/menu/naan11.png' }
  ]
},

  

  // Weekend Specials
  {
    heading: 'Weekend Specials',
    items: [
      { title: 'Halwa Puri', price: '£5.99', image: '/assets/images/menu/week.jpeg' },
      { title: 'Plain Omelette', price: '£3.50', image: '/assets/images/menu/week3.jpeg' },
      { title: 'Mix Omelette', price: '£4.50', image: '/assets/images/menu/week2.jpeg' },
      { title: 'Fried Eggs', price: '£2.50', image: '/assets/images/menu/week4.jpeg' }
    ]
  },

  // Kids Menu
  {
    heading: 'Kids Menu',
    items: [
      { title: 'Chicken Nuggets & Chips', price: '£5.50', image: '/assets/images/menu/kid.jpeg' },
      { title: 'Popcorn Chicken & Chips', price: '£5.50', image: '/assets/images/menu/kid1.jpeg' }
    ]
  },

  // Desserts
  {
    heading: 'Desserts',
    items: [
      { title: 'Kheer', price: '£4.50', image: '/assets/images/menu/sweet/1.png' },
      { title: 'Matanjan', price: '£4.50', image: '/assets/images/menu/sweet/2.png' },
      { title: 'Gulab Jamun', price: '£4.50', image: '/assets/images/menu/sweet/3.png' },
      { title: 'Rasmalai', price: '£4.50', image: '/assets/images/menu/sweet/4.png' }
    ]
  },



  // Drinks & Shakes
  {
    heading: 'Drinks',
    items: [
      { title: 'Pepsi', price: '£1.20', image: '/assets/images/menu/drink2.png' },
      { title: 'Diet Pepsi', price: '£1.20', image: '/assets/images/menu/drink1.png' },
      { title: '7up', price: '£1.20', image: '/assets/images/menu/drink5.png' },
      { title: 'Orange', price: '£1.20', image: '/assets/images/menu/drink4.png' },
      { title: 'Strawberry', price: '£1.20', image: '/assets/images/menu/drink3.png' },
      { title: 'Mango', price: '£1.20', image: '/assets/images/menu/drink6.png' },
      { title: 'Water', price: '£1.20', image: '/assets/images/menu/drink7.png' }
    ]
  },

  // Lassi
  {
    heading: ' Traditional Pakistani Drinks',
    items: [
      { title: 'Mango Lassi', price: '£2.50', image: '/assets/images/menu/lassi.png' },
      { title: 'Salt Lassi', price: '£2.50', image: '/assets/images/menu/lassi1.png' },
      { title: 'Sweet Lassi', price: '£2.50', image: '/assets/images/menu/lassi2.png' },
      { title: 'Jug of Lassi', price: '£8.00', image: '/assets/images/menu/jug.png' }
    ]
  },

  // Milkshakes
  {
    heading: 'Milkshakes',
    items: [
      { title: 'Oreo Milkshake', price: '£4.50', image: '/assets/images/menu/shake/1.png' },
      { title: 'Biscoff Milkshake', price: '£4.50', image: '/assets/images/menu/shake/2.png' },
      { title: 'Snickers Milkshake', price: '£4.50', image: '/assets/images/menu/shake/3.png' },
      { title: 'Mars Milkshake', price: '£4.50', image: '/assets/images/menu/shake/4.png' },
      { title: 'Kitkat Milkshake', price: '£4.50', image: '/assets/images/menu/shake/5.png' },
      { title: 'Bounty Milkshake', price: '£4.50', image: '/assets/images/menu/shake/6.png' },
      { title: 'Vanilla Milkshake', price: '£4.50', image: '/assets/images/menu/shake/7.png' },
      { title: 'Banana Milkshake', price: '£4.50', image: '/assets/images/menu/shake/8.png' },
      { title: 'Strawberry Milkshake', price: '£4.50', image: '/assets/images/menu/shake/9.png' },
      { title: 'Ferrero Rocher Milkshake', price: '£4.50', image: '/assets/images/menu/shake/10.png' }
    ]
  },

  // Chai
  {
    heading: 'Hot Drinks',
    items: [
      { title: 'Desi Karak Chai', price: '£2.50', image: '/assets/images/menu/chai/1.png' },
      { title: 'English Tea', price: '£2.50', image: '/assets/images/menu/english.jpg' }
    ]
  }
];

export default menuSections;
