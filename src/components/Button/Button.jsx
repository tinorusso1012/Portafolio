import React from "react";
import s from "./Button.module.css";
import Switch from "react-switch";
import ING from "../../Imagenes/ingles.png";
import ESP from "../../Imagenes/esp.png";

function Button({ functionChange, checkeded }) {
  return (
    <div className={s.DivPrincipal}>
      <label>
        <Switch
          onChange={functionChange}
          checked={checkeded}
          checkedIcon={<img src={ING} height="100%" width="100%" />}
          uncheckedIcon={<img src={ESP} height="100%" width="100%" />}
          onColor="#7ae582"
        />
      </label>
    </div>
  );
}

export default Button;
