import React, { useState } from 'react'
import { data } from "./data"
import NavBar from '../../../pages/NavBar'
const Quiz = () => {
    const [curr, setCurr] = useState(0)
    const [select, setSelect] = useState("");
    const [total, setTotal] = useState(0);

    const onSubmitHandler = () => {
        if (data[curr] && data[curr].answer == select) {
            setTotal(total + 1);
        }
        setCurr((prev) => {
            if (prev === data.length) {
                setTotal(0);
                return 0
            } else {
                return prev + 1
            }
        })
        setSelect("");

    }
    // console.log(curr,data.length);
    return (
        <>
           

            <div className='w-full mx-auto flex flex-col justify-center items-center'>
                <h2 className='text-2xl font-serif text-yellow-500 mb-8'>QuizTime</h2>
                {data[curr] ? (
                    data.map((data, index) => (
                        <div key={index} className={`${curr === index ? "block" : "hidden"} flex flex-col justify-center items-center p-4 my-4 rounded-md max-w-md w-full mx-auto`}>
                            <div className="font-bold mb-2">Q{index + 1}: {data.question}</div>
                            <ul className='w-full'>
                                {data.options.map((d, i) => (
                                    <li key={i} className="mb-2">
                                        <button
                                            className={`${select === d ? "bg-green-500" : "bg-gray-200"} text-left hover:bg-gray-800 hover:text-gray-50 text-gray-800 font-bold py-2 px-4 rounded-md w-full`}
                                            onClick={() => setSelect(d)}
                                        >{d}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <div className="text-center max-w-md w-full mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
                        <div className="text-lg mb-8">Your total score is: {total} / {data.length}</div>
                        <p className="text-blue-400 mb-5">Thank you for participating!</p>
                    </div>
                )}
                <button
                    onClick={onSubmitHandler}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-8">
                    {data[curr] ? "Submit" : "Restart"}
                </button>
            </div>

        </>

    )
}

export default Quiz