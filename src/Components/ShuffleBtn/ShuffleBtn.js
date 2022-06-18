import { useState } from "react";
import workers from "../../data/db";

function ShuffleBtn() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(workers);

  function removeWorker(name) {
    const newData = data.filter((worker) => {
      return worker.name !== name;
    });
    setData(newData);
  }

  function shuffleArr(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Shuffle
      </button>
      {show && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>1st Station</th>
              <th>2nd Station</th>
              <th>3rd Station</th>
              <th>4th Station</th>
            </tr>
            {data.map((worker) => {
              let stationsArr = shuffleArr(worker.stations);
              return (
                <tr key={worker.name}>
                  <td>{worker.name}</td>
                  {stationsArr[0] ? <td>{stationsArr[0]}</td> : <td></td>}
                  {stationsArr[1] ? (
                    <td>{stationsArr[1]}</td>
                  ) : (
                    <td>{stationsArr[0]}</td>
                  )}
                  {stationsArr[2] ? (
                    <td>{stationsArr[2]}</td>
                  ) : (
                    <td>{stationsArr[0]}</td>
                  )}
                  {stationsArr[3] ? (
                    <td>{stationsArr[3]}</td>
                  ) : stationsArr[1] ? (
                    <td>{stationsArr[1]}</td>
                  ) : (
                    <td>{stationsArr[0]}</td>
                  )}
                  <td onClick={() => removeWorker(worker.name)}>X</td>
                </tr>
              );
            })}
          </thead>
        </table>
      )}
    </>
  );
}

export default ShuffleBtn;
