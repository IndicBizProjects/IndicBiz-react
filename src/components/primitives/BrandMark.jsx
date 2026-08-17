import logo from '../../assets/logo/IndicBiz logo-01.svg'

export default function BrandMark({ className = '' }) {
  return (
    <span className={`ib-brand ${className}`.trim()}>
      <img src={logo} alt="" className="ib-brand-mark" width="36" height="36" />
      <span className="ib-brand-word">
        indicbiz<span className="brand-dot">.</span>
      </span>
    </span>
  )
}
