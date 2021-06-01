
import noResultsImg from '../../../images/illustrations/no-results.png'
import PickImg from '../../../images/illustrations/pick.png'

import toxicImg from '../../../images/icons/toxic.svg'
import petFriendlyImg from '../../../images/icons/pet.svg'

import waterRarelyImg from '../../../images/icons/1-drop.svg'
import waterRegularlyImg from '../../../images/icons/2-drops.svg'
import waterDailyImg from '../../../images/icons/3-drops.svg'

import noSunImg from '../../../images/icons/no-sun.svg'
import lowSunImg from '../../../images/icons/low-sun.svg'
import highSunImg from '../../../images/icons/logo-white.svg'



const Plants = (plants) => {
	if(plants && plants.length) {
        
		return `<div class="plants filled">
                <div class='content'>
                    <img src=${PickImg} alt="Pick" class="pickImg">
                    <span class="title">
                        Our picks for you
                    </span>
                </div>
            </div>`
	}

    
	return `<div class="plants" id="plants">
        <div class='content'>
            <div>
                <h2>
                    No results yet…
                </h2>
                <span>Use the filters above to find the plant that best fits your environment :)  </span>
            </div>
            <img src=${noResultsImg} alt="No results found" class="no-results">
        </div>
    </div>`
}

const PlantsGrid = (plants) => {
	const html = `
        <div class="plants-grid">
        </div>
    `
}

const PlantCard = ({id, name, sun, url, water, price, toxicity, staff_favorite}) => {

	const petImg = toxicity ? toxicImg : petFriendlyImg
	const petAlt = toxicity ? 'Toxic' : 'Pet Friendly'

	const waterImg = water == 'daily' && waterDailyImg || water == 'regularly' ? waterRegularlyImg : waterRarelyImg
	const sunImg = sun == 'no' && noSunImg || sun == 'low' ? lowSunImg : highSunImg

	return `
        <div class="plant-card">
            <img src=${url} alt=${name}>
            <div>
                <span>${name}</span>
                <span>${price}</span>
            </div>
            <div class="icons">
                <img src=${petImg} class="pet icon" alt=${petAlt}>
                <img src=${waterImg} class="water icon" alt=${'Water ' + water}
                <img src=${sunImg} class="water icon" alt=${'Should take sun ' + sun}
            </div>
        </div>
    `
}

export const LoadPlants = async (plantsList) => {
	console.log({plantsList})
	if(plantsList && plantsList.length) {
		document.getElementById('plants').innerHTML = Plants(plantsList)
	} else{
		document.getElementById('plants').innerHTML = Plants()
	}       
    
}

export default Plants