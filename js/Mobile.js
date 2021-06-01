
import MobileHeader  from './components/Header/Header'
import MobileFilter from './components/Filter/Filter'



export const MobileApp = () => {
	const html = `<div class="container">
            ${MobileHeader()}
            ${MobileFilter()}
        </div>`

	return html
}