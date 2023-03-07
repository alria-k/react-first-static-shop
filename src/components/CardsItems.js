import React from "react";

export function CardsItems(props) {
  return (
    <div className="popular-items__item">
      <img className="popular-items-img" src={props.image} alt="popular-item" />
      <div className="popular-items__text">
        <h5 className="card__title">{props.body}</h5>
        <p className="popular-items__price">{"$" + props.price}</p>
      </div>
    </div>
  );
}

export function ProOrderCards(props) {
  console.log(props);
  return (
    <div className="list-item__box">
      <img src={props.img} alt="card-img" />
      <div className="list-item__content">
        <p className="brand-text">{props.brand}</p>
        <p className="card__title">{props.body}</p>
        <div className="list-rate__box">
          {/*/ Сделать компонент оценки по звездам /*/}
        </div>
        <div className="list-item__bottom">
          <p className="card__price">{"$" + props.price}</p>
          <button className="card__add">Add +</button>
        </div>
      </div>
    </div>
  );
}
