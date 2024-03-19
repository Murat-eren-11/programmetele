import Programmes from "./assets/programme.json";
import Programme from "./components/programme";
import "./App.css";

function App() {
  const programmation = Object.keys(Programmes);

  return (
    <div className="app">
      {programmation.map((programmationName) => (
        <Programme
          programme={Programmes[programmationName]}
          key={`programme-${programmationName}`}
        />
      ))}
    </div>
  );
}

export default App;
