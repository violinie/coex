import React from "react";
import Form from "./Form";

export default function Profile() {
  return (
    <div>
      <div className="profile__header d-flex justify-content-center align-items-center">
        <div>
          <h1 className="d-flex align-items-center m-0">Profil uchazeče</h1>
        </div>
      </div>
      <Form />
    </div>
  );
}
