import Sun from '../../../images/illustrations/sun.png'
import Dog from '../../../images/illustrations/dog.png'
import WateringCan from '../../../images/illustrations/wateringcan.png'

const Filter = () => {

	const Cards = [
		{imageUrl: Sun, imageAlt: 'Smiling sun', question: '<b>1.</b> Set the amount of <b>sunlight</b> your plant will get.', options: ['no', 'low', 'high']},
		{imageUrl: WateringCan, imageAlt: 'Watering can', question: '<b>2.</b> How often do you want to <b>water</b> your plant?.', options: ['regularly', 'daily', 'rarely'] },
		{imageUrl: Dog, imageAlt: 'Dog', question: '<b>3.</b> Do you have pets? Do they <b>chew</b> plants? ', options: [false, true] },
	]

	const html = `
        <div class='filter'>
            <div class='content'>
                ${Cards.map(e => Card({...e}))}
            </div>
        </div>
    `

	return html
}

const Card = ({imageUrl, imageAlt, question, options }) => {
	let cardOptions = ''
	options.map((e) => cardOptions+=`<option value=${e}>${e}</option>`)

	return `
        <div class="card">
        <img src=${imageUrl} alt=${imageAlt}>
        <span>${question}</span>
        <select name="sun" id="sun" onChange="onChangeFilter()">
            <option value=""> Select an option . . </option>
            ${cardOptions}
        </select>
        </div>
    `
}

export default Filter