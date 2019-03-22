import React, { PureComponent } from "react";
import { FormikProps } from "formik";

const movieList = [
  { value: "https://swapi.co/api/films/1/", text: "A New Hope" },
  { value: "https://swapi.co/api/films/2/", text: "The Empire Strikes Back" },
  { value: "https://swapi.co/api/films/3/", text: "Return of the Jedi" },
  { value: "https://swapi.co/api/films/4/", text: "The Phantom Menace" },
  { value: "https://swapi.co/api/films/5/", text: "Attack of the Clones" },
  { value: "https://swapi.co/api/films/6/", text: "Revenge of the Sith" },
  { value: "https://swapi.co/api/films/7/", text: "The Force Awakens" }
];

export interface ISelectFilmForm {
  selectedFilm: string;
}

class SelectFilmForm extends PureComponent<FormikProps<ISelectFilmForm>> {
  onSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { setFieldValue, handleSubmit } = this.props;
    await setFieldValue("selectedFilm", event.target.value);
    handleSubmit();
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="form-group mb-0">
        <select
          className="custom-select"
          style={{ width: "200px" }}
          onChange={this.onSelectChange}
        >
          <option value="">See all</option>
          {movieList.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </form>
    );
  }
}
export default SelectFilmForm;
