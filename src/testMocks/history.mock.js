const historyMock = {
  length: 123,
  action: "PUSH",
  location: {
    pathname: "",
    search: "",
    state: "",
    hash: "",
    key: ""
  },
  push: jest.fn(),
  replace: jest.fn(),
  go: jest.fn(),
  goBack: jest.fn(),
  goForward: jest.fn(),
  block: jest.fn(),
  listen: jest.fn(),
  createHref: jest.fn()
};

export default historyMock;
