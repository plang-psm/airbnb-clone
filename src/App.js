import Navbar from './components/Navbar';
import Main from './components/Main.js';
import Card from './components/Card';
import data from './data';

function App() {
  // Mapping over all values provided in the data file. This is hardcoded and we will learn API req later
  const cards = data.map((value) => {
    return (
      <Card
        // Pass data down like attributes
        // Value is used to represent the prop item, can be called whatever u want
        key={value.id}
        img={value.coverImg}
        rating={value.stats.rating}
        reviewCount={value.stats.reviewCount}
        location={value.location}
        title={value.title}
        price={value.price}
        openSpots={value.openSpots}
      />
    );
  });

  return (
    <div className='App'>
      <Navbar />
      <Main />
      {/* Call {cards} to get data from the cards */}
      <section className='cards-list'>{cards}</section>
    </div>
  );
}

export default App;
