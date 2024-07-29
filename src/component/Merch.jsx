import React from 'react';

function Merch() {
  const merchItems = [
    { name: 'T-Shirt', price: '$20', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F36014566%2Fr%2Fil%2Ffd4392%2F3976286198%2Fil_1588xN.3976286198_dy7m.jpg&f=1&nofb=1&ipt=b98969ac3f019101d536ca2f3ff7c5dd7db9902acf3fe39d4efb4635ea959398&ipo=images' },
    { name: 'Hoodie', price: '$40', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F34224898%2Fc%2F1735%2F1381%2F155%2F288%2Fil%2F3bd9a4%2F4601230202%2Fil_340x270.4601230202_lqfy.jpg&f=1&nofb=1&ipt=787c74b8bf579c8fba23b268532123a85fc926168fead186908e8500b18cc7d3&ipo=images' },
    { name: 'Water Bottle', price: '$10', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa2%2Fd6%2F85%2Fa2d685aeb5515dd572da603b0ede8bf4.jpg&f=1&nofb=1&ipt=d57a3cc597db1d5a13bbe221adff97fc43dbbde3b4b006b73801170eeebf0ac5&ipo=images' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Zyzz Gym Merchandise</h1>
      <div style={styles.grid}>
        {merchItems.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h2 style={styles.itemName}>{item.name}</h2>
            <p style={styles.itemPrice}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '150px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  itemName: {
    margin: '10px 0',
  },
  itemPrice: {
    color: '#555',
  },
};

export default Merch;
