import React, {useEffect, useState} from 'react';

const Loader = () => {
    const [progress, setProgress] = useState(0)
    const [hasFinishLoading, setHasFinishLoading] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 100) {
                    clearInterval(interval)
                    setTimeout(()=> {
                        setHasFinishLoading(true)
                    }, 500)
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className={`${hasFinishLoading ? 'translate-y-[-500%]' : 'translate-y-0'} bg-black w-full h-[50vh] fixed top-0 left-0 transition-all duration-[2000ms]`}></div>

            <div className={`${hasFinishLoading ? 'hidden' : 'block'} w-full h-full absolute top-0 left-0 z-[1000] flex flex-col gap-3 justify-center transition-all duration-500`}>
                <div style={{width: progress + '%'}} className='rounded-full transition-all ease-linear duration-500 h-[3px] bg-blue-50/80'></div>
                <p className='text-[1rem] text-white font-[500] text-center'>{progress}%</p>
            </div>

            <div className={`${hasFinishLoading ? 'translate-y-[500%]' : 'translate-y-0'} bg-black w-full h-[50vh] fixed bottom-0 left-0 transition-all duration-[2000ms]`}></div>
        </>
    );
};

export default Loader;
