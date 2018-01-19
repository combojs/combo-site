import {Corner} from "./com/corner.js";
import {Header} from "./com/header.js";

const Layout = new class extends Combo.Component {
	mounted() {
		this.data.page.mount(document.getElementById("content"));
	}
	render() {
		return `
			${Corner.render()}
			${Header.render()}

			<main id="content">/main>
		`;
	}
}();

export { Layout };
