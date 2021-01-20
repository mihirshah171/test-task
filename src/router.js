

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import Test from './components/pages/Test';

const RouteLinks = () => {
    return (
        <Router>
            <Switch>
                <Test />
            </Switch>
        </Router>
    )
}

export default RouteLinks;