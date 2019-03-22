import React, { PureComponent } from "react";
import { FormikProps } from "formik";

export interface ISelectGenderForm {
  selectedGender: string;
}
class SelectGenderForm extends PureComponent<FormikProps<ISelectGenderForm>> {
  onSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { setFieldValue, handleSubmit } = this.props;
    await setFieldValue("selectedGender", event.target.value);
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
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </form>
    );
  }
}
export default SelectGenderForm;
