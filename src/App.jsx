import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import CopyText from "./components/CopyText";
import TextEditor from "./components/TextEditor";
export const ValueContext = createContext(null);
export const PasteContext = createContext(null);
export const BoldContext = createContext(null);
export const TextContext = createContext(null);

function App() {
    const [task, setTask] = useState("");
    const [paste, setPaste] = useState("");
    const [bold, setBold] = useState(false);
    const [text, setText] = useState("");

    return (
        <div className="container">
            <TextContext.Provider value={{ text, setText }}>
                <BoldContext.Provider value={{ bold, setBold }}>
                    <PasteContext.Provider value={{ paste, setPaste }}>
                        <ValueContext.Provider value={{ task, setTask }}>
                            <Header></Header>
                            <Routes>
                                <Route
                                    index
                                    element={<TodoList></TodoList>}
                                ></Route>
                                <Route
                                    path="/2"
                                    element={<CopyText></CopyText>}
                                ></Route>
                                <Route
                                    path="/4"
                                    element={<TextEditor></TextEditor>}
                                ></Route>
                            </Routes>
                        </ValueContext.Provider>
                    </PasteContext.Provider>
                </BoldContext.Provider>
            </TextContext.Provider>
        </div>
    );
}

export default App;
