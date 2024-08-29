import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should be loading on rendered header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png")
});

test("Online status should be green on rendered header", () => {
    // load header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    const onlineStatus = header.getByTestId("online-status");
    // console.log(onlineStatus);
    expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart item should have 0 items on rendered header", () => {
    // load header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    const cart = header.getByTestId("cart");
    // console.log(onlineStatus);
    expect(cart.innerHTML).toBe("Cart - 0 items");
});
