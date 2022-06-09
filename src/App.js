import './App.css';
import CarItem from './components/CarItem';
import ListIncome from './components/ListIncome';
import food1 from './images/food1.jpg';

// JS
let cars = [
  {
    car: 'Audi',
    model: 'A4',
    year: 2021,
    img: 'images/food2.jpg'
  },
  {
    car: 'Audi',
    model: 'A7',
    year: 2018,
    img: 'images/food2.jpg'
  },
  {
    car: 'BMW',
    model: 'M3',
    year: 2022,
    img: 'images/food2.jpg'
  }
]

function App() {
  // JS
  return (
    // JSX
    <div className="App">
      {/* <CarItem
        car={'Audi'}
        carModel={'A3'}
        carYear={2009}
      />
      <CarItem
        car={cars[0].car}
        carModel={cars[0].model}
        carYear={cars[0].year}
      />
      <CarItem
        car={cars[1].car}
        carModel={cars[1].model}
        carYear={cars[1].year}
      /> */}
      {cars.map((elt, i) =>
        <CarItem
          key={i}
          car={elt.car}
          carModel={elt.model}
          carYear={elt.year}
          img={elt.img}
        />
      )}
      <ListIncome />
      {/* image aus public ordner (von HTML aus den Pfad) */}
      <img src="images/food2.jpg" alt="food" />
      {/* image aus src ordner */}
      <img src={food1} alt="" />
    </div>
  );
}

export default App;
