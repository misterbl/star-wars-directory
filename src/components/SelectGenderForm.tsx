import React, { StatelessComponent } from "react";
import { FormikProps } from "formik";

export interface ISelectGenderForm {
  selectedGender: string;
}
const SelectGenderForm: StatelessComponent<FormikProps<ISelectGenderForm>> = ({
  setFieldValue,
  handleSubmit
}) => {
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFieldValue("selectedGender", event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-group mb-0">
      <select
        className="custom-select"
        style={{ width: "200px" }}
        onChange={onSelectChange}
      >
        <option value="see all">See all</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button className="ml-2 btn btn-dark" type="submit">
        Submit
      </button>
    </form>
  );
};
export default SelectGenderForm;
