import * as React from "react";
import { shallow } from "enzyme";
import SendInfoSmsForm from "../SendInfoSmsForm";

describe("SendInfoSmsForm", () => {
  const props = {
    sendingInfoSms: false,
    values: {
      phoneNumber: "phoneNumber"
    },
    errors: {
      phoneNumber: false
    },
    touched: {
      phoneNumber: false
    },
    handleSubmit: jest.fn(),
    displaySentSuccess: false,
    resetDisplaySentSuccess: jest.fn(),
    setFieldValue: jest.fn()
  };
  const wrapper = shallow(<SendInfoSmsForm {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls setFieldValue on input change", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "value" } });
    expect(props.setFieldValue).toHaveBeenCalledWith("phoneNumber", "value");
  });
  it("calls handleSubmit on form submit", () => {
    const form = wrapper.find("form");
    form.simulate("submit");
    expect(props.handleSubmit).toHaveBeenCalled();
  });
  it("shows the error message if touched and error are true", () => {
    const propsWithError = {
      ...props,
      errors: {
        phoneNumber: true
      },
      touched: {
        phoneNumber: true
      }
    };
    const wrapperWithError = shallow(<SendInfoSmsForm {...propsWithError} />);
    const errorMessage = wrapperWithError.find("#errors-streetNumber");
    const input = wrapperWithError.find("input");
    input.simulate("change", { target: { value: "value" } });
    expect(errorMessage.length).toEqual(1);
  });
  it("shows the sms sent succes correctly", () => {
    const propsWithSucces = {
      ...props,
      displaySentSuccess: true
    };
    const wrapperWithSuccess = shallow(
      <SendInfoSmsForm {...propsWithSucces} />
    );
    const successMessage = wrapperWithSuccess.find(".text-success");
    expect(successMessage.length).toEqual(1);
  });
});
