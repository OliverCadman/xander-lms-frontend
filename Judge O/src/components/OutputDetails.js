import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <>
    <h1 className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2'>
      Test Status:
    </h1>
      <div className='w-full h-full bg-[#212529] rounded-md text-white font-normal text-sm overflow-y-auto'>
      <p className="text-sm">
        Status:{" "}
        <span>
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span>
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span>
          {outputDetails?.time}
        </span>
      </p>
      <p className="text-sm">
        {/* Expected Output:{" "} */}
        <span>
          {/* {outputDetails?.expected_output} */}
        </span>
      </p>
      </div>
      </>
  );
};

export default OutputDetails;





{/* <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
{outputDetails?.status?.description}
</span> */}

// <div className="metrics-container mt-4 flex flex-col space-y-3">
      // <p className="text-sm">
      //   Status:{" "}
      //   <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
      //     {outputDetails?.status?.description}
      //   </span>
      // </p>
      // <p className="text-sm">
      //   Memory:{" "}
      //   <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
      //     {outputDetails?.memory}
      //   </span>
      // </p>
      // <p className="text-sm">
      //   Time:{" "}
      //   <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
      //     {outputDetails?.time}
      //   </span>
      // </p>
      // <p className="text-sm">
      //   Expected Output:{" "}
      //   <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
      //     {outputDetails?.expected_output}
      //   </span>
      // </p>
//     </div>