import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Plants from './components/Plants/Plants'



const DesktopApp = () => {

	const html = `<div class="container">
            ${Header()}
            ${Filter()}
            ${Plants()}
        </div>`

	return html
}

export default DesktopApp