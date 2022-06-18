import { useState } from "react";
import workers from "../../data/db";

function AddWorkerBtn() {
  const [show, setShow] = useState(false);
  const [workerName, setWorkerName] = useState("");
  const [workerStations, setWorkerStations] = useState();

  function saveWorker() {
    workers.push({
      name: workerName,
      stations: workerStations.split(" ").map(Number),
    });
  }

  return (
    <>
      {show && (
        <>
          <input
            type={"text"}
            placeholder={"Name"}
            onChange={(e) => {
              setWorkerName(e.target.value);
            }}
          />
          <input
            type="text"
            pattern="[0-9 ]+"
            placeholder="Stations: eg, 20 22 24"
            onChange={(e) => {
              setWorkerStations(e.target.value);
            }}
          />
          <button onClick={saveWorker}>Save</button>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Cancel
          </button>
        </>
      )}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Add Worker
      </button>
    </>
  );
}

export default AddWorkerBtn;
