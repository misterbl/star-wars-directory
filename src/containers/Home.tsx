import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";

import ROUTES from "../route";
import { IHomeDispatchToProps, IHomeComponent, ISearchForm } from "./Home.d";
import searchFilmsAndPeople from "../actions/thunks/searchFilmsAndPeople";
import { bindActionCreators, Dispatch } from "redux";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import { getPeopleList, getFilmsList } from "../selectors/apiSelectors";
import { IAppState } from "../state";

export class Home extends React.Component<IHomeComponent> {
  handleSubmit = (data: ISearchForm) => {
    this.props.searchFilmsAndPeople(data.searchTerm);
  };

  render() {
    return (
      <main className="bg-white form-container p-5">
        <Formik<ISearchForm>
          initialValues={{
            searchTerm: ""
          }}
          onSubmit={this.handleSubmit}
          render={
            /* istanbul ignore next */ formikProps => (
              <SearchForm {...formikProps} />
            )
          }
        />
        {this.props.peopleList.length > 0 && (
          <ResultList type="Characters" list={this.props.peopleList} />
        )}
        {this.props.filmsList.length > 0 && (
          <ResultList type="Films" list={this.props.filmsList} />
        )}
      </main>
    );
  }
}

export const mapStateToProps = (state: IAppState) => ({
  peopleList: getPeopleList(state),
  filmsList: getFilmsList(state)
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchFilmsAndPeople: bindActionCreators(searchFilmsAndPeople, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
