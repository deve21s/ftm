const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-gray-500 rounded-full";

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses}`}></div>
    </div>
  );
};

export default Loader;
