import React from 'react';

const Agenda = ({ matches }) => {
  return (
    <>
      {matches ?
        <div className="max-h-[325px] w-[150px] ">
          <div className="h-[50px] border-b-2 border-[white] bg-[#22998D] rounded-t-[10px] text-white">
            <div className="w-fit mx-auto">累計開始日</div>
            <div className="w-fit mx-auto"><span className="font-bold">2021.03.05</span></div>
          </div>
          <div className="bg-[#D4F2EF] rounded-b-[10px]">
            <div className="w-fit mx-auto pt-10">累計金額</div>
            <div className="w-fit mx-auto"><span className="text-sm">(目安)</span></div>
            <div className="w-fit mx-auto pb-10 text-[#22998D]"><span className="text-3xl">12,460</span>円</div>
          </div>
        </div>
        :
        <div className="h-[70px] flex w-full justify-center mb-3">
          <div className=" border-b-1 border-[white] bg-[#22998D] rounded-l-[10px] text-white flex w-1/2 flex-col justify-center">
            <div className="w-fit mx-auto">累計開始日</div>
            <div className="w-fit mx-auto"><span className="font-bold">2021.03.05</span></div>
          </div>
          <div className="bg-[#D4F2EF] rounded-r-[10px] flex w-1/2 flex-col justify-center">
            <div className="w-fit mx-auto pt-10">累計金額(目安)</div>
            <div className="w-fit mx-auto"><span className="text-sm"></span></div>
            <div className="w-fit mx-auto pb-10 text-[#22998D]"><span className="text-3xl">12,460</span>円</div>
          </div>
        </div>
      }
    </>
  );
};

export default Agenda;