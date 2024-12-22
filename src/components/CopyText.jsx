import React, { useState } from "react";
import image from "../images/copyIcon.svg";
import { ToastContainer, toast } from "react-toastify";
import imgSuccess from "../images/sucImg.svg";

function CopyText() {
    const [text, setText] = useState(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihildolores quos odit architecto nemo molestiae nesciunt dicta quinostrum magni beatae quisquam velit voluptatum"
    );
    const [copied, setCopied] = useState(false);

    function onCopy(e) {
        e.preventDefault();
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            toast("Text copied succesfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => setCopied(false), 1000);
        });
    }
    return (
        <div className="flex flex-col mt-10 text-center">
            <h1 className="text-center text-[40px] mb-5">Copy Text:</h1>
            <p className="text-[25px] mb-5">{text}</p>
            <button className="flex justify-center mb-5" onClick={onCopy}>
                <img
                    src={copied ? imgSuccess : image}
                    width={40}
                    height={40}
                    alt=""
                />
            </button>
            <textarea
                className="p-3 border-2 border-black rounded-md resize-none text-[25px]"
                placeholder="paste"
            ></textarea>
            <ToastContainer />
        </div>
    );
}

export default CopyText;
