import { Navbar } from '../navbar/Navbar'
import './style.css'

export function BurgerBtn () {
    const responsiveBtn = () => {
        console.log('btn presionado');
        return <Navbar />
    }

  return (
    <div onClick={responsiveBtn} className="burger-btn">
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
    </div>
  )
}
