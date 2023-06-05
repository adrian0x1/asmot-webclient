
import "./App.css"
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import { useState } from "react";

import "@fontsource/montserrat";

export default function App()
{
    const [view, setView] = useState("rtd");

    return (
        <div className="App">
            <SideBar setView={setView} />
            <Dashboard view={view} />
        </div>
    );
}
