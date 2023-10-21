import { Provider } from "react-redux";
import store from "../store/store";
import App from "../App";

export const renderApp = () => {
    return <Provider store={store}><App/></Provider>;
}