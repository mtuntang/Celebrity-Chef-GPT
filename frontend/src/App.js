import "./App.css";
import FormQuery from './components/FormQuery';

function App() {
  return (
    <div className="flex">
      <div className="w-2/5">
        <FormQuery />
      </div>
      <div className="w-3/5">
        <h1 className="font-bold underline">CHAT</h1>
      </div>
    </div>
  );
}

export default App;
