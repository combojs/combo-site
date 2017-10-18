// # HeaderComponent
//
// Represents the Header component.
// 
var HeaderComponent = new Combo.Component({
	created: function() {
		this.update({
			links: []
		});
	},
	render: function() {
		var links = this.data.links.map((item) => {
            return `
                <a class="mat-menu__link" href="${item.url}"><small>${item.text}</small></a>
            `;
		}).join("");
		
		return `
			<header class="mat-dock mat-dock--t mat-section mat--color-primary" style="background-color: #A20039" role="banner">
				<div class="mat-section__body">
					<div class="mat-header">
						<div class="mat-header__item">
							<nav class="mat-menu">
								<a class="mat-menu__link" href="javascript:$toggle('#drawer')">
									<i class="material-icons mat-toolbar__icon">menu</i> Combo
								</a> 
							</nav>
						</div>		
						<div class="mat-header__item">
							<nav class="mat-menu">
								${links}
							</nav>
						</div>																				
					</div>
				</div>
			</header>

			<div style="height:51px"></div>
		`;
	}
});
