export default function Hamburger({ onClick, children }) {
  return (
    <div className="relative cursor-pointer	">
      <img className="relative" onClick={onClick} src="/images/icon.svg" />
      {children}
    </div>
  )
}