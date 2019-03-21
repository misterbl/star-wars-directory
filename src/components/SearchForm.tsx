import React from "react";
import { FormikProps } from "formik";
import { ISearchForm } from "./Header.d";

//TODO all hardcoded test could be move to react intl
class SearchForm extends React.PureComponent<FormikProps<ISearchForm>> {
  onsearchTermChange = (
    event: Pick<React.ChangeEvent<HTMLInputElement>, "target">
  ) => {
    const { setFieldValue } = this.props;
    setFieldValue("searchTerm", event.target.value);
  };

  render() {
    const { values, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="form-group mb-0 search-form">
        <label htmlFor="searchTerm" />
        <input
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
