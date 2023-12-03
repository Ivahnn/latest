import React from "react";
import { Link } from "react-router-dom";
import "./Medicine.css";
import Medicineitem from "./Medicineitem";


function Medicine() {
  
  return (
    <div className="cardsmed">
      <h1>MEDICINE INFORMATION</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Medicineitem
              src="images/gamot1.png"
              text="Pregabalin Funxion"
              label="Medicine"
              path="/med-info"
            />
            <Medicineitem
              src="images/gamot2.png"
              text="Gabapentin Reinin"
              label="Medicine"
              path="/med-info"
            />
            <Medicineitem
              src="images/gamot3.png"
              text="Paracetamol Biogesic Tablet"
              label="Medicine"
              external={true}
              path="https://www.mims.com/Philippines/drug/info/Biogesic/"
            />

            <Medicineitem
              src="images/gamot5.png"
              text="Paracetimol Biogesic Syrup"
              label="Medicine"
              external={true}
              path="https://www.mims.com/Philippines/drug/info/Biogesic/"
            />

            <Medicineitem
              src="images/gamot4.png"
              text="Aspirin"
              label="Medicine"
              external={true}
              path="https://www.mims.com/Philippines/drug/info/Biogesic/"
            />
          </ul>
        </div>
      </div>

      <Link to="/medicine-form" className="custom-button link-button">
        Add New Medicine
      </Link>
    </div>
  );
}

export default Medicine;
