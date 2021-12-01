import React from 'react'

function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-4xl font-black absolute z-50 text-blue-400"> Loading... </p>
            <div className="animate-spin overflow-hidden h-96 w-96 border-white rounded-full border-white flex justify-center items-center relative">
                <div className="w-screen h-60 bg-blue-500 flex justify-center items-center"> 
                    <div className="w-80 h-80 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
