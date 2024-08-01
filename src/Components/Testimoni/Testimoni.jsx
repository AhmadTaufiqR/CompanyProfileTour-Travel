import React from "react";
import TestimoniResources from "../../Resources/TestimoniResouces";

const Testimoni = () => {
  return (
    <>
      <div className="container">
        <div className="min-h-[600px] flex flex-wrap py-10">
          <h1 className="text-5xl font-poppins text-primary text-center mt-20 flex items-center justify-center w-[100%]">
            Testimoni
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {TestimoniResources.map(({id, name, testimoni}) => (
              <div className="bg-gray-200 p-4 rounded-md" key={id}>
                <p className="text-gray-500">
                  {testimoni}
                </p>
                <h1 className="text-primary font-bold mt-4">- {name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
