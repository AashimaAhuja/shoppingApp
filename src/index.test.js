import ReactDOM from "react-dom";
import { renderToApp } from "./index";

describe("test ReactDOM.render", () => {
  const originalRender = ReactDOM.render;

  beforeEach(() => {
    ReactDOM.render = jest.fn();
  });

  afterAll(() => {
    ReactDOM.render = originalRender;
  });

  it("should not call ReactDOM.render", () => {
    renderToApp();
    expect(ReactDOM.render).toHaveBeenCalledTimes(0);
  });
  
  it("should call ReactDOM.render", () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    renderToApp(rootElement);
    expect(ReactDOM.render).toHaveBeenCalledTimes(1);
  });
});
