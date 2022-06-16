import { useState } from "react";

function AddWorkerBtn() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <>
          <input type={"text"} placeholder={"Name"} />
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
