import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The output variable needs to be set to <span> James is <strong>12</strong> years old </span>", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<h1>
  Hello 
  <strong>
    World!
  </strong>
</h1>
`);
});