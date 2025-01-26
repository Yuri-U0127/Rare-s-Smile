import CustomBox from "./CustomBox";

const CustomGreenCard = ({ imgSrc, title, desc }) => {
  return (
    <CustomBox shadowColor="#ddd" borderRadius="15px" customPadding="0" minWidth="200px">
      <div className="bg-[var(--lightc)] flex min-h-30 justify-center items-center align-middle pt-2 pr-2">
        <img src={imgSrc} className="" alt="" />
        <span className="text-lg text-[var(--darkc)] font-bold">{title}</span>
      </div>
      <div className="mx-5 min-h-[8rem] pt-5 pb-5">{desc}</div>
    </CustomBox>);
};

export default CustomGreenCard;