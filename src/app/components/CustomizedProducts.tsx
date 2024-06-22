const CustomizedProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium"> Choose a colour</h4>
      <div className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          {/* the circle in colour  */}
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 "/>
        </li>

        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
        </li>

        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 "/>
        </li>

      </div>
      <h4 className="font-medium">Choose a size</h4>
      <div className="flex items-center gap-3"></div>
    </div>
  );
};

export default CustomizedProducts;
