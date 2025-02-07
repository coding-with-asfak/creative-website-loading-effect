import React from 'react';

// component
import Loader from "./Components/Loader.jsx";

const App = () => {
    return (
        <>
            <main className='flex flex-col items-center justify-center w-full min-h-screen bg-blue-100'>
                <h1 className='text-[3rem] font-[600] text-black'>Creative Website Loading Effect</h1>
                <h4 className='text-[1.5rem] font-[500] mt-4'>Coding With Asfak</h4>
            </main>

            <Loader/>
        </>
    );
};

export default App;
