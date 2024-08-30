import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_MENU_DATA } from "../../mocks/data";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU_DATA);
    },
  });
});

test("Add items in cart on restaurant details page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 2 items");
});
