import LogoIcon from '../../assets/logo.svg'

export default function Header({ size = 50, showText = true }) {
  return (
    <div className="flex items-center px-4">
      <img
        src={LogoIcon}
        alt="SplitEase logo"
        style={{ width: size, height: size }}
      />

      {showText && (
        <span className="text-xl font-semibold ml-1 tracking-wide">
          SplitMate
        </span>
      )}
    </div>
  )
}
