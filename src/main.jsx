import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";
import GlobalStyle from "./GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
