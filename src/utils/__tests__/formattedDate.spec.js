import formattedDate from "../formattedDate";

describe("formattedDate", () => {
  it("format the date properly", () => {
    const date1 = "2002-05-01";
    expect(formattedDate(date1)).toEqual("1st May 2002");
    const date2 = "2002-05-02";
    expect(formattedDate(date2)).toEqual("2nd May 2002");
    const date3 = "2002-05-03";
    expect(formattedDate(date3)).toEqual("3rd May 2002");
    const date16 = "2002-05-16";
    expect(formattedDate(date16)).toEqual("16th May 2002");
  });
});
