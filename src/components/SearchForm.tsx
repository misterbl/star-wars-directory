import React from "react";
import { FormikProps } from "formik";
import { ISearchForm } from "../containers/Home.d";

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
      <form onSubmit={handleSubmit} className="form-group mb-0">
        <label className="font-weight-bold" htmlFor="activityName">
          Search
        </label>
        <input
          id="searchTerm"
          className="form-control mb-4"
          type="text"
          name="searchTerm"
          value={values.searchTerm}
          onChange={this.onsearchTermChange}
        />
      </form>
    );
  }
}
export default SearchForm;
