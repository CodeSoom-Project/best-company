import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  function renderApp(path: string) {
    return render(<App />);
  }

  it("path가 / 일때 Home이 렌더링된다", () => {
    const { container } = renderApp("/");

    expect(container).toHaveTextContent("HomeUi");
  });
});
