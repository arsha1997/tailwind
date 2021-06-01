import ImageOne from '../images/pizza.jpg';
import ImageTwo from '../images/pizza2.jpg';
import React from 'react';

const Content = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src={ImageOne}
          alt="pizza"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Pizza World</h2>
          <p className="mb-2">Crispy,Delicious,Nutritious</p>
          <span>$250</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src={ImageTwo}
          alt="pizza"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Chicken Pizza</h2>
          <p className="mb-2">Crispy,Delicious,Nutritious</p>
          <span>$200</span>
        </div>
      </div>
    </>
  );
};
export default Content;
