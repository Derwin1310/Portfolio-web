import { Navbar } from '../navbar'
import './style.css'

export function BurgerBtn () {
    const responsiveBtn = () => {
        console.log('btn presionado');
        return <Navbar />
    }

  return (
    <div onClick={responsiveBtn} className="burger-btn">
        <div className="burger-btn__line" />
        <div className="burger-btn__line" />
        <div className="burger-btn__line" />
    </div>
  )
}
