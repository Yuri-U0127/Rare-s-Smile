import React from 'react';
import MobileFooterItem from "../ui/MobileFooterItem.jsx";

const MobileFooter = () => {

  const mobileFooterItems = [
    { title: "ホーム", imgSrc: "/images/white_home.svg", link: "/" },
    { title: "証明書", imgSrc: "/images/white_idcard.svg", link: "/certificate" },
    { title: "医療費", imgSrc: "/images/white_calc.svg", link: "/pricelog" },
    { title: "メモ", imgSrc: "/images/white_memo.svg", link: "/memo" }
  ]

  return (

    < div style={{ backgroundImage: "var(--lightgradient)" }} className='flex justify-around gap-1 p-3'>
      {mobileFooterItems.map((item, index) => (
        <MobileFooterItem key={index} title={item.title} imgSrc={item.imgSrc} link={item.link} />
      ))}
    </div >

  );
};

export default MobileFooter;