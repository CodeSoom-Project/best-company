import { render } from "@testing-library/react";

import CompanysUi from "./CompanysUi";

describe("CompanysUi", () => {
  const handleClick = jest.fn();

  function renderCompanysUi() {
    const props = {
      handleClickOpenAdmin: handleClick,
    };

    return render(<CompanysUi {...props} />);
  }

  it("지원회사가 렌더링된다", () => {
    const { container } = renderCompanysUi();

    expect(container).toHaveTextContent("지원회사");
  });

  it("회사 관리가 렌더링된다", () => {
    const { container } = renderCompanysUi();

    expect(container).toHaveTextContent("회사 관리");
  });

  it("항목 관리가 렌더링된다", () => {
    const { container } = renderCompanysUi();

    expect(container).toHaveTextContent("항목 관리");
  });
});
