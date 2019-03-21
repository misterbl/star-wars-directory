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
    setFieldValue("selectedGenger", event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-group mb-0">
      <div className="custom-select" style={{ width: "200px" }}>
        <select onChange={onSelectChange}>
          <option value="0">Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default SelectGenderForm;
