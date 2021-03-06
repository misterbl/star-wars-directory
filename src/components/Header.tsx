import React, { PureComponent } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import { IHeaderComponent } from "./Header.d";
import { searchFilmsAndPeople } from "../actions/actionCreators/actions";
import SearchForm, { ISearchForm } from "./SearchForm";
import ROUTES from "../const/routes";

export class Header extends PureComponent<IHeaderComponent> {
  handleSubmit = async (data: ISearchForm) => {
    const {
      searchFilmsAndPeople,
      history: { push }
    } = this.props;
    await searchFilmsAndPeople(data.searchTerm);
    push(ROUTES.INDEX);
  };

  render() {
    return (
      <header>
        <div className="form-group mb-0 search-form search-form__header">
          <Formik<ISearchForm>
            initialValues={{
              searchTerm: ""
            }}
            onSubmit={this.handleSubmit}
            render={formikProps => <SearchForm {...formikProps} />}
          />
        </div>
      </header>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchFilmsAndPeople: bindActionCreators(searchFilmsAndPeople, dispatch)
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
