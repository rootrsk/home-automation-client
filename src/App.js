import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Arduino from "./components/Arduino";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProjectDetails from "./components/ProjectDetails";
import './styles/styles.css'
function App() {
    return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Dashboard} exact/>
				<Route path='/arduino' component={Arduino} />
				<Route path='/login' component={Login} />
				<Route path='/details' component={ProjectDetails} />
				<Route path='/about-us' component={About} />
			</Switch>
		</BrowserRouter>
    );
}
export default App;
