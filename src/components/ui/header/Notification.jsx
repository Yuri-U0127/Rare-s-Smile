
const Bell = ({ yes }) => {

  const imgSrc = !yes ? "/images/bell.svg" : "/images/notif_bell.svg"

  return (
    <img src={imgSrc} alt="" />);
};

export default Bell;