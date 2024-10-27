import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h2 className="text-4xl text-center">coffee house :{coffees.length}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id}
          coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </>
  );
}

export default App;
