import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZvg0G0nd_xGltiCPM7rAfYZsLRlsCuyCmg&usqp=CAU"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurantData?.info;
  const { slaString } = restaurantData?.info?.sla;

  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
      </div>
      <h3>{name}</h3>
      <div className="res-cuisine">
        <span>{cuisines.join(', ')}</span>
      </div>
      <div className="rate-eta">
        <div className="rate">
          <span>{avgRating} ⭐</span>
        </div>
        <div className="eta">
          <span>{slaString}</span>
        </div>
      </div>
    </div>
  );
};

const restaurantObj = [
  {
    info: {
      id: '357912',
      name: 'KFC',
      cloudinaryImageId: 'f01666ac73626461d7455d9c24005cd4',
      locality: 'Royapuram Kalmandapam',
      areaName: 'Old Washermanpet',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      avgRating: 4.1,
      parentId: '547',
      avgRatingString: '4.1',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 39,
        lastMileTravel: 5.8,
        serviceability: 'SERVICEABLE',
        slaString: '39 mins',
        lastMileTravelString: '5.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '405476',
      name: 'Pizza Hut',
      cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
      locality: 'Perambur',
      areaName: 'Perambur',
      costForTwo: '₹300 for two',
      cuisines: ['Pizzas', 'Melts', 'Desserts'],
      avgRating: 4,
      parentId: '721',
      avgRatingString: '4.0',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 51,
        lastMileTravel: 7.4,
        serviceability: 'SERVICEABLE',
        slaString: '51 mins',
        lastMileTravelString: '7.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '410398',
      name: "McDonald's",
      cloudinaryImageId: 'bb7ae131544c7d37e10fc5faf76f09d6',
      locality: 'Thousand Lights',
      areaName: 'Nungambakkam',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
      avgRating: 4.3,
      parentId: '630',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5.5,
        serviceability: 'SERVICEABLE',
        slaString: '40 mins',
        lastMileTravelString: '5.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '31822',
      name: 'Chola Authentic',
      cloudinaryImageId: 'voazuw4ffrpftiel4mdp',
      locality: 'OPP Permabur Railway Station',
      areaName: 'Perambur',
      costForTwo: '₹300 for two',
      cuisines: ['South Indian', 'North Indian', 'Sweets', 'Chinese'],
      avgRating: 4.5,
      veg: true,
      parentId: '22',
      avgRatingString: '4.5',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '36 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '561677',
      name: 'Dindigul Thalappakatti',
      cloudinaryImageId: 'f75bed5b83ac0a8d50acc4b478f2f062',
      locality: 'Thiruvengadam Street',
      areaName: 'Egmore',
      costForTwo: '₹550 for two',
      cuisines: ['Biryani', 'South Indian'],
      avgRating: 4.1,
      parentId: '337996',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.5,
        serviceability: 'SERVICEABLE',
        slaString: '25 mins',
        lastMileTravelString: '0.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '14044',
      name: 'Roots',
      cloudinaryImageId: 'ufryw0c5fuxraq1zx1pq',
      locality: 'Opposite Commissioner Office',
      areaName: 'Egmore',
      costForTwo: '₹150 for two',
      cuisines: ['Juices', 'Beverages', 'Desserts'],
      avgRating: 4.6,
      veg: true,
      parentId: '401',
      avgRatingString: '4.6',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '33457',
      name: 'Elite Indian Restaurant',
      cloudinaryImageId: 'hwbeetykbqbudvijg6yd',
      locality: 'Purasawalkam - Buhari',
      areaName: 'Purasawalkam Buhari',
      costForTwo: '₹600 for two',
      cuisines: ['Biryani', 'North Indian', 'Chinese', 'South Indian', 'Arabian'],
      avgRating: 4.1,
      parentId: '164',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '28 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '12624',
      name: 'Baskin Robbins',
      cloudinaryImageId: 'kt7k7g31hdsqzfn85efq',
      locality: 'Wallace Garden',
      areaName: 'Thousand Lights',
      costForTwo: '₹300 for two',
      cuisines: ['Ice Cream', 'Desserts', 'Cakes and Pastries'],
      avgRating: 4.7,
      parentId: '30800',
      avgRatingString: '4.7',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.5,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '4.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '472731',
      name: 'Indulge Desserts',
      cloudinaryImageId: '49845b494b1e637209b7bd1c7ca184ad',
      locality: 'Chetty Thottam',
      areaName: 'Royapuram',
      costForTwo: '₹400 for two',
      cuisines: ['Ice Cream', 'Ice Cream Cakes', 'Desserts', 'Beverages'],
      avgRating: 4.5,
      veg: true,
      parentId: '94570',
      avgRatingString: '4.5',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.7,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '5.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '521294',
      name: 'Arabian Knights',
      cloudinaryImageId: '9a01f2935fcb5ae05426db8264062102',
      locality: 'Chinnasamy Raja Street',
      areaName: 'Perambur',
      costForTwo: '₹250 for two',
      cuisines: [
        'Mediterranean',
        'Snacks',
        'Biryani',
        'Grill',
        'Kebabs',
        'Arabian',
        'Lebanese',
        'Beverages',
        'Desserts',
        'Italian',
        'Turkish',
      ],
      avgRating: 4.3,
      parentId: '3518',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 40,
        lastMileTravel: 6.9,
        serviceability: 'SERVICEABLE',
        slaString: '40 mins',
        lastMileTravelString: '6.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />); // Rendering React Component
