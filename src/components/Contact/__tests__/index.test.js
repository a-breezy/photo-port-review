import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Contact component", () => {
	it("renders", () => {
		render(<Contact />);
	});

	it("matches snapshot", () => {
		const { asFragment } = render(<Contact />);

		expect(asFragment()).toMatchSnapshot();
	});
});

describe("H1 is visible", () => {
	it("Checks that header is 'Contact Me'", () => {
		const { getByTestId } = render(<Contact />);

		expect(getByTestId("h1")).toHaveTextContent("Contact Me");
	});
});

describe("Button works", () => {
	it("Checks there's a button in contact form", () => {
		const { getByTestId } = render(<Contact />);

		expect(getByTestId("button")).toHaveTextContent("Submit");
	});
});
