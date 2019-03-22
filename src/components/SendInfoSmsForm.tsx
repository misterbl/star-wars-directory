import React from "react";
import { FormikProps } from "formik";

interface ISendInfoSmsFormData {
  phoneNumber: string;
}
interface ISendInfoSmsForm {
  sendingInfoSms?: boolean;
}
class SendInfoSmsForm extends React.PureComponent<
  FormikProps<ISendInfoSmsFormData> & ISendInfoSmsForm
> {
  onPhoneNumberChange = (
    event: Pick<React.ChangeEvent<HTMLInputElement>, "target">
  ) => {
    this.props.setFieldValue("phoneNumber", event.target.value);
  };
  render() {
    const { values, handleSubmit, sendingInfoSms } = this.props;
    return (
      <form
        onSubmit={handleSubmit}
        className="form-group ml-5 pl-5 mt-3 mb-0 send-info-form"
      >
        <label htmlFor="phoneNumber" className="text-white">
          Send this information to your phone
        </label>
        <input
          placeholder="ENTER PHONE NUMBER"
          id="phoneNumber"
          className="form-control"
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={this.onPhoneNumberChange}
        />
        {!sendingInfoSms && (
          <p className="text-success text-center">message sent!</p>
        )}
      </form>
    );
  }
}
export default SendInfoSmsForm;
