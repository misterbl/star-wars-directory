import React, { StatelessComponent } from "react";
import { FormikProps } from "formik";

export interface ISelectFilmForm {
  selectedFilm: string;
}

const SelectFilmForm: StatelessComponent<FormikProps<ISelectFilmForm>> = ({
  setFieldValue,
  handleSubmit
}) => {
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFieldValue("selectedFilm", event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-group mb-0">
      <select
        className="custom-select"
        style={{ width: "200px" }}
        onChange={onSelectChange}
      >
        <option value="see all">See all</option>
        <option value="https://swapi.co/api/films/1/">A New Hope</option>
        <option value="https://swapi.co/api/films/5/">
          Attack of the Clones
        </option>
        <option value="https://swapi.co/api/films/4/">
          The Phantom Menace
        </option>
        <option value="https://swapi.co/api/films/6/">
          Revenge of the Sith
        </option>
        <option value="https://swapi.co/api/films/3/">
          Return of the Jedi
        </option>
        <option value="https://swapi.co/api/films/2/">
          The Empire Strikes Back
        </option>
        <option value="https://swapi.co/api/films/7/">The Force Awakens</option>
      </select>

      <button className="ml-2 btn btn-dark" type="submit">
        Submit
      </button>
    </form>
  );
};
export default SelectFilmForm;
