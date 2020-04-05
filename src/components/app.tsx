import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import RelativeTime from "../routes/relativetime";
import NewTime from "../routes/newTime";
import Header from "./header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            <Header />
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} />
                <Route path="/profile/" component={Profile} user="me" />
                <Route path="/profile/:user" component={Profile} />
                <Route path="/timestamp/" component={RelativeTime} />
                <Route
                    path="/timestamp/:microsecondsSinceUnix"
                    component={RelativeTime}
                />
                <Route path="/timestamp/new" component={NewTime} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
