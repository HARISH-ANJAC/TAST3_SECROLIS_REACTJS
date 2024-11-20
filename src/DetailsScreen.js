import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetailsScreen.css";

const DetailsPage = ({ services }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((item) => item.id === parseInt(id));

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div>

          <div className="details-page">
          <img src={service.img} alt={service.title} className="details-image" />
          <h2>{service.title}</h2>
          <p>{service.details}</p>
        </div>
    </div>
  );
};

export default DetailsPage;
