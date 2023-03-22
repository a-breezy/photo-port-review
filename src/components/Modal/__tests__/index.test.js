import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
	name: "Park bench",
	category: "landscape",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	index: 1,
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal renders", () => {
	it("renders", () => {
		render(
			<Modal currentPhoto={currentPhoto} mockToggleModal={mockToggleModal} />
		);
	});

	it("renders fragment", () => {
		const { asFragment } = render(
			<Modal currentPhoto={currentPhoto} mockToggleModal={mockToggleModal} />
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe("Click event", () => {
	it("calls onClose handler", () => {
		const { getByText } = render(
			<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
		);
		fireEvent.click(getByText("Close this modal"));

		expect(mockToggleModal).toHaveBeenCalledTimes(1);
	});
});
