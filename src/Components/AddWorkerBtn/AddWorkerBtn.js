import { useState } from "react";

function AddWorkerBtn() {
  const [show, setShow] = useState(false);
  const [workerName, setWorkerName] = useState("");
  const [workerStations, setWorkerStations] = useState([]);

  function saveWorker() {}

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
          <button>Save</button>
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
