'use client'

// import React from "react";

const CustomSelect = () => {
  return (

    <>
      <div className="flex border-[1px] w-[267px] h-[48px] with-transparency rounded-xl overflow-hidden">
        <div className="flex w-[210px] h-[100%] text-center pl-[14px]" style={{ backgroundImage: "linear-gradient(180deg, #75D1C1, #0D9890)" }}>
          <img src="/images/white_expansion.svg" alt="" />
          <span className="text-[white] text-lg pt-[9px] text-[23px]">データの広場</span>
        </div>
        <span className="text-[var(--darkc)] pl-2 text-[32px]">
          →
        </span>
        <style jsx>{`
.with-transparency {
  position: relative;
}
.with-transparency:before {
  content:"";
  position: absolute;
  inset: 0;
  padding: .3em; /* the border length */
  background: linear-gradient(180deg, #75D1C1, #0D9890);
  border-radius: inherit;
  --m:conic-gradient(#000 0 0);
  mask: var(--m) content-box exclude,var(--m);
  pointer-events: none;
}
          `}</style>
      </div>
    </>
  );
};

export default CustomSelect;
