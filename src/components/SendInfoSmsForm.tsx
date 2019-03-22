import React from "react";
import { FormikProps } from "formik";

interface ISendInfoSmsForm {
  phoneNumber: string;
}
class SendInfoSmsForm extends React.PureComponent<
  FormikProps<ISendInfoSmsForm>
> {
  onPhoneNumberChange = (
    event: Pick<React.ChangeEvent<HTMLInputElement>, "target">
  ) => {
    this.props.setFieldValue("phoneNumber", event.target.value);
  };
  render() {
    const { values, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="form-group mb-0 search-form">
        <label htmlFor="phoneNumber">Send this information to your phone</label>
        <input
          placeholder="PHONE NUMBER"
          id="phoneNumber"
          className="form-control mb-4"
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={this.onPhoneNumberChange}
        />
        <button type="submit" className="phoneNumber-button">
          Send
        </button>
      </form>
    );
  }
}
export default SendInfoSmsForm;
