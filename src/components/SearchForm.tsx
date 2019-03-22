import React, { PureComponent } from "react";
import { FormikProps } from "formik";
export interface ISearchForm {
  searchTerm: string;
}

class SearchForm extends PureComponent<FormikProps<ISearchForm>> {
  onsearchTermChange = (
    event: Pick<React.ChangeEvent<HTMLInputElement>, "target">
  ) => {
    this.props.setFieldValue("searchTerm", event.target.value);
  };

  render() {
    const { values, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm" />
        <input
          autoComplete="off"
          placeholder="SEARCH STAR WARS"
          id="searchTerm"
          className="form-control mb-4"
          type="text"
          name="searchTerm"
          value={values.searchTerm}
          onChange={this.onsearchTermChange}
        />
        <button type="submit" className="search-button" />
      </form>
    );
  }
}
export default SearchForm;
