import { fireEvent, render } from "@testing-library/react";

import Companys from "./Companys";

describe("Companys", () => {
  function renderCompanys() {
    return render(<Companys />);
  }

  it("회사 추가 , 삭제를 누르면 handleClickOpenAdmin가 호출된다", () => {
    const { getByText } = renderCompanys();

    fireEvent.click(getByText("회사 관리"));
  });

  it("handleClickOpenAdmin가 호출된다", () => {
    const { getByText } = renderCompanys();

    fireEvent.click(getByText("항목 관리"));
  });
});
