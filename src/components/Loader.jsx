
const Loader = () => {
    let circleCommonClasses = 'flex justify-center h-2.5 w-2.5 bg-gray-500 rounded-full';

    return (
   <div className='flex'>
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses}`}></div>
   </div>
    );
};

export default Loader;