import React, { useState } from "react";

const Input = ({ errors, type = "text", name, placeholder, isRequired = false }) => {
  return (
    <>
      <input type={type} name={name} className="form-control position-relative my-4 mb-3 form-control__input" placeholder={placeholder} required={isRequired} />
      {errors[name] && <span>{errors[name]}</span>}
    </>
  );
};

export default function Form() {
  const [validationErrors, setValidationErrors] = useState({});
  return (
    <form
      className="container"
      noValidate={true}
      onSubmit={(e) => {
        // Zamez refreshi stránky
        e.preventDefault();

        // Všechny form elementy dám do pole a vyfiltruju jen ty které chci validovat
        const inputs = [...e.target.elements].filter((input) => input.tagName !== "BUTTON");
        console.log(inputs);

        const errors = {};
        inputs.forEach((input) => {
          // Validace na povinné pole
          if (input.required && !input.value) {
            errors[input.name] = "Toto pole je povinné";
          }

          // Validace na telefonní číslo (Musí mít 9 písmen nebo 13 když je předvolba)
          if (input.type === "tel" && (input.value.length !== 9 || input.value.length !== 13)) {
            errors[input.name] = "Pole musí mít tvar telefonního čísla.";
          }
        });

        // Pokud existuje nějaký error tak nasetuju error state
        if (Object.keys(errors).length > 0) {
          setValidationErrors(errors);
        } else {
          setValidationErrors({});
        }
      }}
    >
      <div className="p-3 p-md-5 w-100">
        <div className="d-flex justify-content-center align-items-center p-2">
          <svg className="me-3" width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.7188 10.2656C13.5625 11.4219 12.1562 12 10.5 12C8.84375 12 7.42188 11.4219 6.23438 10.2656C5.07812 9.07812 4.5 7.65625 4.5 6C4.5 4.34375 5.07812 2.9375 6.23438 1.78125C7.42188 0.59375 8.84375 0 10.5 0C12.1562 0 13.5625 0.59375 14.7188 1.78125C15.9062 2.9375 16.5 4.34375 16.5 6C16.5 7.65625 15.9062 9.07812 14.7188 10.2656ZM14.7188 13.5C16.4375 13.5 17.9062 14.125 19.125 15.375C20.375 16.5938 21 18.0625 21 19.7812V21.75C21 22.375 20.7812 22.9062 20.3438 23.3438C19.9062 23.7812 19.375 24 18.75 24H2.25C1.625 24 1.09375 23.7812 0.65625 23.3438C0.21875 22.9062 0 22.375 0 21.75V19.7812C0 18.0625 0.609375 16.5938 1.82812 15.375C3.07812 14.125 4.5625 13.5 6.28125 13.5H7.07812C8.17188 14 9.3125 14.25 10.5 14.25C11.6875 14.25 12.8281 14 13.9219 13.5H14.7188Z"
              fill="#929BA3"
            />
          </svg>
          <h2 className="m-0">Základní informace</h2>
        </div>
        <Input type={"text"} name={"firstname"} placeholder="Jméno *" isRequired={true} errors={validationErrors} />
        <Input type={"text"} name={"lastname"} placeholder="Příjmení *" isRequired={true} errors={validationErrors} />
        <Input type={"email"} name={"email"} placeholder="Email *" isRequired={true} errors={validationErrors} />
        <Input type={"tel"} name={"phone"} placeholder="Telefon *" isRequired={true} errors={validationErrors} />
        <div>* Údaje s hvězdičkou jsou povinné</div>
      </div>
      <div className="p-3 p-md-5 w-100">
        <div className="d-flex justify-content-center align-items-center p-2">
          <svg className="me-3" width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.9531 16.0469C16.6406 16.1094 18.0625 16.75 19.2188 17.9688C20.4062 19.1562 21 20.5938 21 22.2812V22.75C21 23.375 20.7812 23.9062 20.3438 24.3438C19.9062 24.7812 19.375 25 18.75 25H2.25C1.625 25 1.09375 24.7812 0.65625 24.3438C0.21875 23.9062 0 23.375 0 22.75V22.2812C0 20.5938 0.578125 19.1562 1.73438 17.9688C2.92188 16.75 4.35938 16.1094 6.04688 16.0469L10.5 20.5L14.9531 16.0469ZM0.65625 4.75C0.21875 4.65625 0 4.40625 0 4C0 3.59375 0.21875 3.34375 0.65625 3.25L9.5625 1.09375C10.1875 0.96875 10.8125 0.96875 11.4375 1.09375L20.3438 3.25C20.7812 3.375 21 3.64062 21 4.04688C21 4.42188 20.7812 4.65625 20.3438 4.75L15.8438 5.82812C16.2812 6.70313 16.5 7.59375 16.5 8.5C16.5 10.1562 15.9062 11.5781 14.7188 12.7656C13.5625 13.9219 12.1562 14.5 10.5 14.5C8.84375 14.5 7.42188 13.9219 6.23438 12.7656C5.07812 11.5781 4.5 10.1562 4.5 8.5C4.5 7.59375 4.71875 6.70313 5.15625 5.82812L2.0625 5.07812V7.5625C2.4375 7.78125 2.625 8.09375 2.625 8.5C2.625 8.875 2.45312 9.1875 2.10938 9.4375L2.8125 12.3438C2.84375 12.4688 2.84375 12.5781 2.8125 12.6719C2.8125 12.7656 2.78125 12.8438 2.71875 12.9062C2.65625 12.9688 2.57812 13 2.48438 13H0.515625C0.390625 13 0.28125 12.9375 0.1875 12.8125C0.125 12.6562 0.125 12.5 0.1875 12.3438L0.890625 9.4375C0.546875 9.1875 0.375 8.875 0.375 8.5C0.375 8.09375 0.5625 7.78125 0.9375 7.5625V4.79688L0.65625 4.75Z"
              fill="#929BA3"
            />
          </svg>
          <h2 className="m-0">Vzdělání</h2>
        </div>
        <textarea className="w-100 my-4" placeholder="Střední škola (obor, roky studia, ...)"></textarea>
        <textarea className="w-100" placeholder="Vysoká škola (obor, roky studia, ...)"></textarea>
      </div>
      <div className="p-3 p-md-5 w-100">
        <div className="d-flex justify-content-center align-items-center p-2">
          <svg className="me-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.6719 20.7656C23.8906 20.9844 24 21.25 24 21.5625C24 21.875 23.8906 22.1406 23.6719 22.3594L22.3594 23.6719C22.1406 23.8906 21.875 24 21.5625 24C21.25 24 20.9844 23.8906 20.7656 23.6719L16.0781 18.9844C15.8594 18.7656 15.75 18.5 15.75 18.1875V17.4375C14 18.8125 12 19.5 9.75 19.5C7.0625 19.5 4.76562 18.5469 2.85938 16.6406C0.953125 14.7344 0 12.4375 0 9.75C0 7.0625 0.953125 4.76562 2.85938 2.85938C4.76562 0.953125 7.0625 0 9.75 0C12.4375 0 14.7344 0.953125 16.6406 2.85938C18.5469 4.76562 19.5 7.0625 19.5 9.75C19.5 12 18.8125 14 17.4375 15.75H18.1875C18.5 15.75 18.7656 15.8594 18.9844 16.0781L23.6719 20.7656ZM4.96875 14.5312C6.28125 15.8438 7.875 16.5 9.75 16.5C11.625 16.5 13.2188 15.8438 14.5312 14.5312C15.8438 13.2188 16.5 11.625 16.5 9.75C16.5 8.53125 16.1875 7.40625 15.5625 6.375C14.9688 5.3125 14.1562 4.48438 13.125 3.89062C12.0938 3.29688 10.9688 3 9.75 3C7.875 3 6.28125 3.65625 4.96875 4.96875C3.65625 6.28125 3 7.875 3 9.75C3 11.625 3.65625 13.2188 4.96875 14.5312ZM11.0156 9.32812C11.4531 9.48438 11.8125 9.75 12.0938 10.125C12.375 10.5 12.5156 10.9219 12.5156 11.3906C12.5156 11.9531 12.3125 12.4375 11.9062 12.8438C11.5312 13.25 11.0625 13.4688 10.5 13.5V14.25C10.5 14.5 10.375 14.625 10.125 14.625H9.375C9.125 14.625 9 14.5 9 14.25V13.5C8.46875 13.4688 7.98438 13.2812 7.54688 12.9375C7.29688 12.7812 7.28125 12.5938 7.5 12.375L8.0625 11.8594C8.1875 11.7344 8.34375 11.7188 8.53125 11.8125C8.71875 11.9375 8.92188 12 9.14062 12H10.4531C10.6094 12 10.7344 11.9375 10.8281 11.8125C10.9531 11.6875 11.0156 11.5469 11.0156 11.3906C11.0156 11.0781 10.875 10.875 10.5938 10.7812L8.48438 10.1719C8.04688 10.0156 7.6875 9.75 7.40625 9.375C7.125 9 6.98438 8.57812 6.98438 8.10938C6.98438 7.73438 7.07812 7.39062 7.26562 7.07812C7.45312 6.76562 7.6875 6.51562 7.96875 6.32812C8.28125 6.10938 8.625 6 9 6V5.25C9 5 9.125 4.875 9.375 4.875H10.125C10.375 4.875 10.5 5 10.5 5.25V6C11.0312 6.03125 11.5156 6.21875 11.9531 6.5625C12.2031 6.71875 12.2188 6.90625 12 7.125L11.4375 7.64062C11.3125 7.76562 11.1562 7.78125 10.9688 7.6875C10.7812 7.5625 10.5781 7.5 10.3594 7.5H9.04688C8.89062 7.5 8.75 7.5625 8.625 7.6875C8.53125 7.8125 8.48438 7.95312 8.48438 8.10938C8.48438 8.42188 8.625 8.625 8.90625 8.71875L11.0156 9.32812Z"
              fill="#0D1321"
            />
          </svg>
          <h2 className="m-0">Aktivně hledám práci</h2>
        </div>
        <div className="my-3">
          <input type="checkbox" className="me-3" />
          <span>Chci dostávat newslettery se zajímavými nabídkami</span>
        </div>
        <select className="my-3 w-100 form-control__input fw-normal">
          <option value="disabled selected">Město, kde hledám práci</option>
          <option value="praha">Praha</option>
          <option value="brno">Brno</option>
          <option value="ostrava">Ostrava</option>
          <option value="liberec">Liberec</option>
        </select>
        <div className="d-flex justify-content-between my-5">
          <button type="reset" className="btn btn--reset py-3 px-5">
            Zrušit
          </button>
          <button type="submit" className="btn btn--submit text-white py-3 px-5">
            Uložit
          </button>
        </div>
      </div>
    </form>
  );
}
