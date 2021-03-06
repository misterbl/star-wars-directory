import React from "react";
import { FormikProps } from "formik";

interface ISendInfoSmsFormData {
  phoneNumber: string;
}
class SendInfoSmsForm extends React.PureComponent<
  FormikProps<ISendInfoSmsFormData>
> {
  onPhoneNumberChange = (
    event: Pick<React.ChangeEvent<HTMLInputElement>, "target">
  ) => {
    this.props.setFieldValue("phoneNumber", event.target.value);
  };
  render() {
    const { values, handleSubmit, errors, touched } = this.props;
    const phoneNumberError = Boolean(errors.phoneNumber && touched.phoneNumber);
    return (
      <form onSubmit={handleSubmit} className="ml-5 mt-3 mb-0 sms-form w-50">
        <label htmlFor="phoneNumber" className="text-white">
          Enter your number to get this information sent to you
        </label>
        <input
          placeholder="MOBILE NUMBER"
          autoComplete="off"
          id="phoneNumber"
          className="form-control"
          type="number"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={this.onPhoneNumberChange}
          aria-invalid={phoneNumberError}
        />
        {phoneNumberError && (
          <span
            id="errors-streetNumber"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.phoneNumber}
          </span>
        )}
      </form>
    );
  }
}
export default SendInfoSmsForm;
