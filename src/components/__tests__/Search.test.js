import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getAllByTestId("shimmer-box");
  expect(shimmer.length).toBe(5);
});

test("Restaurant should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getAllByTestId("res-list");
  //   console.log(resList);
  expect(resList.length).toBe(8);
});

test("Search for no data found on search of string on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "by",
    },
  });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("no-record-found");
  expect(resList.innerHTML).toBe("No Record found, try something else");
});

test("Search for string(by) should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resListData = body.getAllByTestId("res-list");
  console.log("resList::", resListData);

  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "D",
    },
  });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getAllByTestId("res-list");
  expect(resList.length).toBe(2);
});
