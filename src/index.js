import App from './App'
import './scss/main.scss'
import store from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from "react-dom/client"
import ConnectionHandler from './components/socket/ConnectionHandler';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ConnectionHandler />
        <App />
    </Provider>,
)
