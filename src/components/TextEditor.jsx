import React, { useContext } from "react";
import { BoldContext, PasteContext, TextContext } from "../App";

function TextEditor() {
    const { bold, setBold } = useContext(BoldContext);
    const { text, setText } = useContext(TextContext);

    function handlePaste() {
        navigator.clipboard
            .readText()
            .then((text) => {
                setText(text);
                console.log(text);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function onCopy() {
        const copiedText = "Salom Hayr";
        navigator.clipboard.writeText(copiedText);
    }

    function onBold(e) {
        e.preventDefault();
        if (bold) {
            setBold(false);
        } else {
            setBold(true);
        }
    }
    return (
        <div>
            <button onClick={onCopy}>Copy</button>
            <button onClick={handlePaste}>Paste</button>
            <button onClick={onBold}>Bold</button>
            <textarea
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                placeholder=""
                className={
                    bold ? "font-normal text-[30px]" : "font-bold text-[30px]"
                }
            ></textarea>
            <h1
                className={
                    bold ? "font-normal text-[30px]" : "font-bold text-[30px]"
                }
            >
                Fromating text
            </h1>
        </div>
    );
}

export default TextEditor;
