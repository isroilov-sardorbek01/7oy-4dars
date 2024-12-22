import React, { useContext, useEffect, useState } from "react";
import { ValueContext } from "../App";

function TodoList() {
    const { task, setTask } = useContext(ValueContext);
    const [res, setRes] = useState([]);

    function validate() {
        if (task === "") {
            alert("Enter the task!");
            return false;
        }
        if (task.length < 2) {
            alert("task name is too short!");
            return false;
        }
        return true;
    }
    function handleAdd(e) {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }
        const data = {
            id: Date.now(),
            task: task,
        };
        const copied = [...res, data];
        setRes(copied);
        localStorage.setItem("res", JSON.stringify(copied));
        setTask("");
    }
    useEffect(() => {
        const reFresh = JSON.parse(localStorage.getItem("res")) || [];
        setRes(reFresh);
        localStorage.setItem("res", JSON.stringify(reFresh));
    }, []);
    function onDel(id) {
        const con = confirm("Rostdanham ochirmoqchimisiz?");
        if (con) {
            const filtRes = res.filter((item) => item.id !== id);
            setRes(filtRes);
            localStorage.setItem("res", JSON.stringify(filtRes));
        }
    }
    return (
        <div>
            <div className="flex flex-col justify-center card w-[600px] bg-slate-300 p-4 rounded-md text-center">
                <h1 className="text-[40px] mb-4">TO DO List</h1>
                <input
                    className="w-full p-2 mb-4 rounded-md"
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter the task name"
                />
                <div className="mb-6 text-center">
                    <button
                        onClick={handleAdd}
                        className="p-2 w-[150px] active:scale-95 bg-slate-50 rounded-md"
                    >
                        Add a Task
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    {res.length > 0 ? (
                        res.map((data, index) => {
                            return (
                                <div
                                    className="flex items-center justify-between w-full p-2 rounded-md bg-slate-50"
                                    key={index}
                                >
                                    <h1>{data.task}</h1>
                                    <button
                                        className="p-1 text-white bg-red-500 rounded-md"
                                        onClick={() => {
                                            onDel(data.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <h1>No Tasks Yet</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
