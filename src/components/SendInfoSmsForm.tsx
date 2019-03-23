import React from "react";
import { FormikProps } from "formik";

interface ISendInfoSmsFormData {
  phoneNumber: string;
}
interface ISendInfoSmsForm {
  sendingInfoSms?: boolean;
  displaySentSuccess?: boolean;
  resetdisplaySentSuccess?: () => void;
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
    const {
      values,
      handleSubmit,
      sendingInfoSms,
      displaySentSuccess,
      resetdisplaySentSuccess
    } = this.props;
    return (
      <form
        onSubmit={handleSubmit}
        className="ml-5 pl-5 mt-3 mb-0 sms-form w-50"
      >
        <label htmlFor="phoneNumber" className="text-white">
          Send this information to your phone
        </label>
        <input
          placeholder="PHONE NUMBER"
          id="phoneNumber"
          className="form-control"
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onFocus={resetdisplaySentSuccess}
          onChange={this.onPhoneNumberChange}
        />
        {sendingInfoSms === false && displaySentSuccess && (
          <p className="text-success text-center">message sent!</p>
        )}
      </form>
    );
  }
}
export default SendInfoSmsForm;
