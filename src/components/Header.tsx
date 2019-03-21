import React, { StatelessComponent } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import { ISearchForm, IHeaderComponent } from "./Header.d";
import searchFilmsAndPeople from "../actions/thunks/searchFilmsAndPeople";
import SearchForm from "./SearchForm";
import ROUTES from "../routes";

export const Header: StatelessComponent<IHeaderComponent> = ({
  searchFilmsAndPeople,
  history: { push }
}) => {
  const handleSubmit = async (data: ISearchForm) => {
    data && data.searchTerm && (await searchFilmsAndPeople(data.searchTerm));
    push(ROUTES.INDEX);
  };

  return (
    <div className="header">
      <Formik<ISearchForm>
        initialValues={{
          searchTerm: ""
        }}
        onSubmit={handleSubmit}
        render={formikProps => <SearchForm {...formikProps} />}
      />
    </div>
  );
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchFilmsAndPeople: bindActionCreators(searchFilmsAndPeople, dispatch)
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
