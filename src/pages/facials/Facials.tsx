import { PageWrapper } from "../PageWrapper";
import { TreatmentCard } from "../../components/TreatmentCard.tsx/TreatmentCard";
import "./facials.scss";
import { useState } from 'react';

import { treatmentsList } from "./facials-utils";
const initialTreatments = [
  treatmentsList[0],
  treatmentsList[1],
  treatmentsList[2]
];

export const Facials = () => {
  const [ treatments, setTreatments ] = useState(initialTreatments);
  const [ showMoreVisible, setShowMoreVisible ] = useState(true);

  const handleShowMoreTreatments = () => {
    if (showMoreVisible) {
      setTreatments(treatmentsList);
      setShowMoreVisible(false);
    } else {
      setTreatments(initialTreatments);
      setShowMoreVisible(true);
    }  
  }

  return (
    <PageWrapper>
      <div className="container facials" id="facials">
        <h2>FACIAL TREATMENTS</h2>

        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="treatments" data-testid={showMoreVisible ? "reducedTreatments" : "expandedTreatments"}>
              {treatments.map((treatment) => (
                <TreatmentCard
                  key={treatment.id}
                  title={treatment.title}
                  img={treatment.img}
                  description={treatment.description}
                  time={treatment.time}
                  price={treatment.price}
                />
              ))}
            </div>

            
            <button className="btn btn-primary" onClick={handleShowMoreTreatments} data-testid="showMoreFacials">
              {showMoreVisible ? "Show more" : "Hide"}
            </button>
            
            <hr />
            
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
