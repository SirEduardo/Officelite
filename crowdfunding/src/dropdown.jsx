/*eslint-disable react/prop-types*/
import { useState } from "react";
import { ThanksModal } from "./thanksModal";

export function Dropdown({ minValue, closeModal }) {
  const [pledgeValue, setPledgeValue] = useState("");
  const [error, setError] = useState("");
  const [showThanksModal, setShowThanksModal] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (!isNaN(value) || value ==="") {
    setPledgeValue(value);
    if (value < minValue) {
      setError(`Please enter a pledge of at least $${minValue}.`);
    } else {
      setError("");
    }
    }else{
        setError("Please enter a valid number.")
    }
  };

  const handleSubmit = () => {
    if (!error && !processing) {
      setProcessing(true);
      setTimeout(() => {
        setShowThanksModal(true);
        setProcessing(false);
        setPledgeValue("");
        closeModal()
      }, 500);
    }
  };

  const closeModalThank = () => {
    setShowThanksModal(false);
    closeModal()
  };

  const isValidPledge = parseFloat(pledgeValue) >= minValue;

  return (
    <div className="dropdown">
      <h5>Enter your pledge</h5>
      <input
        type="number"
        placeholder={`$ ${minValue}`}
        min={minValue}
        value={pledgeValue}
        onChange={handleInputChange}
        required
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleSubmit} disabled={!isValidPledge || processing}>
        {processing ? "Processing..." : "Continue"}
      </button>
      {showThanksModal && <ThanksModal closeModalThank={closeModalThank} />}
    </div>
  );
}