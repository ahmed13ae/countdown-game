import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemain, onReset },
  ref
) {
  const lost = timeRemain <= 0;
  const dialog = useRef();
  const score = Math.round((1 - timeRemain / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    // we add open because dialog is invisable by default
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {lost ? <h2>you lost!</h2> : <h2>your score is : {score}</h2>}
      <p>
        the target time was <strong>{targetTime}</strong>
      </p>
      <p>
        you stopped the timer with{" "}
        <strong>{timeRemain / 1000} seconds left</strong>
      </p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;
