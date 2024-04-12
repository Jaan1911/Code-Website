import { Servicescard } from "./style";
import iconhealtimg from '../../assets/iconhealt.svg'
import iconcat from '../../assets/iconcat.svg'
import iconsecury from '../../assets/iconsecury.svg'

export function Cards() {
  return (
    <Servicescard>
      <div>
        <img src={iconcat} alt="cat" />
        <span>Vet services</span>
      </div>

      <div>
        <img src={iconhealtimg} alt="healt" />
        <span>Special care</span>
      </div>

      <div>
        <img src={iconsecury} alt="secury" />
        <span>High quality</span>
      </div>
    </Servicescard >
  )
}