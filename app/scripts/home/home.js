import {Features} from "./com/features.js";
import {Example} from "./com/example.js";

const Home = new class extends Combo.Component {
	mounted() {
		//
		// TODO: This doesn't need to be mounted. render instead: ${Features.render()}
		//
		Features.mount(document.getElementById("features"), {
			items: [
				{
					image: "/images/cog.png",
					title: "Component-based",
					text:  "Design interactive user interfaces from small components that encapsulate the template and logic."
				},
				{
					image: "/images/balance.png",
					title: "Lightweight",
					text:  "Combo is approximately 4KB when minified and gzipped. This means the framework will load chop-chop."
				},
				{
					image: "/images/poo.png",
					title: "No Bullshit",
					text:  "No need to use JSX. Combo uses standard ES2015 template literals to render your user interfaces. You're welcome."
				}
			]
		});
	}
	render() {
		return `
			<div id="features"></div>

			${Example.render()}
		`;
	}
}();

export { Home };
