import React, { PureComponent } from "react";
import { FormikProps } from "formik";

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
          <option value="https://swapi.co/api/films/7/">
            The Force Awakens
          </option>
        </select>
      </form>
    );
  }
}
export default SelectFilmForm;
