import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App/> rendering", () => {

it("renders correctly without crashing", () => {
    render(<App />)
});

it("matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});

});