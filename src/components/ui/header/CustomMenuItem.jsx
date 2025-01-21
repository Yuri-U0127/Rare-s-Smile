
import MenuItem from '@mui/material/MenuItem'

export default function CustomMenuItem({ title, imgSrc, handleDropdownClose }) {

  return (
    <MenuItem className='gap-3'
      onClick={e => handleDropdownClose(e)} sx={{ color: "inherit" }}
    >
      <img src={imgSrc} />
      <span className='text-[#5A5A5A]'>{title}</span>
      <img src='images/arrow.svg' className='block mr-0 ml-auto' />
    </MenuItem>
  )
}