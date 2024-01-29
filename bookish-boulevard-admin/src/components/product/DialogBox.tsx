import React, { FC } from 'react';

const CreateItem: FC<{ setBoxOpen: any }> = ({ setBoxOpen }) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the click event from propagating to the parent div
    e.stopPropagation();
    
  };

  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 cursor-pointer"
      onClick={() => setBoxOpen(false)}
    >
      <div
        className="block w-[50%] h-[50%] bg-white z-10 p-4 rounded-md cursor-default"
        onClick={handleModalClick}
      >
       
      </div>
    </div>
  );
};

export default CreateItem;
