import React, { useState } from "react";
import "../styles/add-property.css";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
    Type: "",
    bedrooms: "",
    bathrooms: "",
    email: "",
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h1>Add Property Page</h1>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
          Title
        </label>
        <label htmlFor="city">
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester"> Manchester</option>
            <option value="Leeds"> Leeds</option>
            <option value="Sheffield"> Sheffield</option>
            <option value="Liverpool"> Liverpool</option>
          </select>
          where property is based
        </label>
        <label htmlFor="type">
          <select
            id="type"
            name="type"
            value={fields.Type}
            onChange={handleFieldChange}
          >
            <option value="Flat"> Flat</option>
            <option value="Detached"> Detached</option>
            <option value="Semi-Detached"> Semi-Detached</option>
            <option value="End of Terrace"> End of Terrace</option>
            <option value="Terraced"> Terraced</option>
            <option value="Cottage"> Cottage</option>
            <option value="Bungalow"> Bungalow</option>
          </select>
          what type of property it is...flat, terrace etc
        </label>
        <label htmlFor="bedrooms">
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
          Number of bedrooms{" "}
        </label>
        <label htmlFor="bathrooms">
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
          Number of Bathrooms
        </label>
        <label htmlFor="price">
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
          Cost of Property
        </label>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
          E-mail of person to contact:
        </label>
        <br/>
        <br/>
        <button className="add-button" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
