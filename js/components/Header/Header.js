import greenThumb from '../../../images/icons/logo-white.svg'
import plantRight from '../../../images/hero/desktop/right-leaves.png'
import plantLeft from '../../../images/hero/desktop/left-leaves.png'
import plantPerson from '../../../images/hero/desktop/plantperson.png'

const Header = () => {
	const html = `
        <div class='header'>
            <div class="plant-left">
                <img src=${plantLeft} alt="Decorative plant bush">
            </div>
            <div class="hero">
                <img src=${plantPerson} alt="Decorative plant Hero">
            </div>
            <div class="plant-right">
                <img src=${plantRight} alt="Decorative plant bush">
            </div>
            <div class='content'>
                <svg><g>${greenThumb}</g></svg>
                <span>
                    Find your next green friend
                </span>
            </div>
        </div>
    `

	return html
}

export default Header