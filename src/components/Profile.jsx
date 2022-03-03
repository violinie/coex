import React from "react";
import Form from "./Form";

export default function Profile() {
  return (
    <div>
      <div className="profile__header d-flex align-items-center">
        <div>
          <h1 className="text-center profile__title m-0">Profil uchazeče</h1>
        </div>
      </div>
      <Form />
    </div>
  );
}
