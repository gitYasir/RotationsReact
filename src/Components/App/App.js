import AddWorkerBtn from "../AddWorkerBtn/AddWorkerBtn";
import ShuffleBtn from "../ShuffleBtn/ShuffleBtn";
import css from "./app.module.css";

function App() {
  return (
    <div className={css.main}>
      <h1>ROTATIONS</h1>
      <AddWorkerBtn />
      <ShuffleBtn />
    </div>
  );
}

export default App;
