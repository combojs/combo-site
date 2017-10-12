// ## HomePage
//
// Represents the Banner component. Does not mount.
//
var BannerComponent = new Combo.Component({
	created: function() {
		this.update({
			links: []
		});
	},
	render: function() {
		var links = this.data.links.map((item) => {
			return `
				<a href="${item.url}" class="mat-button custom-button--banner">${item.text}</a>
			`;
		}).join("");

		return `
			<section class="mat-section mat-section--xl mat--shadow-4 mat--color-primary mat--align-center">
				<div class="mat-section__body">
					<div class="mat-block mat-block--xs" style="margin-bottom:1.5em">
						<img class="mat-block__image" src="/images/glove.svg" alt="Logo">
						<div class="mat--type-display-2 custom-type--hero">Combo</div>
						<div class="mat--type-headline custom-type--tagline">A lightweight library for creating user interfaces.</div>
					</div>

					<p>${links}</p>
				</div>
			</section>			
		`;
	}
});