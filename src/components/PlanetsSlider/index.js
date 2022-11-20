import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="slider-container" testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} details={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
