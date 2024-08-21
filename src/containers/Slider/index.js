import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = [...(data?.focus || [])].sort((evtA, evtB) =>
    // Changement du < pour trier les dates en ordre décroissant
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(prevIndex =>
        // Index revient à zéro une fois qu'il atteint la fin du tableau afin de ne pas dépasser la longueur évitant l'affichage d'une image blanche
        prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearTimeout(timer); // Nettoyage du timeout
  }, [index, byDateDesc.length]);

  return (
    <div className="SlideCardList">
      {byDateDesc.map((event, idx) => (
        // Utilisation soit de l'id si disponible soit de idx (index de l'élément dans le tableau)
        <div key={event.id || idx} className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc.map((event, radioIdx) => (
            <input
              // Utilisation d'une clé unique pour chaque élément de la pagination principalement basée sur event.id, mais utilise radioIdx(index de l'élément dans la liste) en fallback si event.id est indisponible
              key={`pagination-${event.id || radioIdx}`}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              // onChange = permet à l'utilisateur de changer manuellement l'événement affiché en cliquant sur les boutons radio
              onChange={() => setIndex(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

