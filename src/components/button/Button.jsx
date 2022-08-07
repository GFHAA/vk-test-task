import React, { Fragment } from "react";
import "./Button.css";
import addSvg from "../../assets/add.svg";
import closeSvg from "../../assets/cross.svg";
import Card from "../Card/Card";
import { useState } from "react";
const Button = () => {
  const [openAdd, setOpenAdd] = useState(false);
  return (
    <Fragment>
      {openAdd ? (
        <div className="add-card" >
          <Card>
            <textarea
              className="textarea"
              rows="3"
              placeholder="Введите название карточки"
            ></textarea>
          </Card>
          <div className="bottom">
            <button>Добавить карточку</button>
            <img src={closeSvg} alt="Картинка крестик" className="close" onClick={()=>setOpenAdd(false)}/>
          </div>
        </div>
      ) : (
        <div className="button-div" onClick={()=>setOpenAdd(true)}>
          <img src={addSvg} alt="Добавить карточку" />
          <span>Добавить еще одну карточку</span>
        </div>
      )}
    </Fragment>
  );
};

export default Button;
