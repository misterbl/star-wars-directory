import React, { PureComponent } from "react";
import { FormikProps } from "formik";
import moviesList from "../const/moviesList";

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
          {moviesList.map(({ value, text }) => (
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
