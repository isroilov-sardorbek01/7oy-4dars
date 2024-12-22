import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import CopyText from "./components/CopyText";
export const ValueContext = createContext(null);

function App() {
    const [task, setTask] = useState("");

    return (
        <div className="container">
            <ValueContext.Provider value={{ task, setTask }}>
                <Header></Header>
                <Routes>
                    <Route index element={<TodoList></TodoList>}></Route>
                    <Route path="/2" element={<CopyText></CopyText>}></Route>
                </Routes>
            </ValueContext.Provider>
        </div>
    );
}

export default App;
