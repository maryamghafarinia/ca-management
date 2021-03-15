import React from "react";
import { render, cleanup } from  '@testing-library/react';
import Header from "../Header";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test('renders correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

it("inserts text in h2", () => {
  const { getByTestId, getByText } = render(<Header title="title" />);

  expect(getByTestId("h2HeaderTag")).toHaveTextContent("title");
});