// # HeaderComponent
//
// Represents the header component. Does not mount.
//
var SidebarComponent = new Combo.Component({
	created: function() {
		this.update({ 
			group1: [],
            group2: []
		});
	},
	render: function() {
		var group1 = this.data.group1.map((item) => {
            return `
                <a class="mat-menu__link" href="${item.url}">${item.text}</a>
            `;
		}).join("");

        var group2 = this.data.group2.map((item) => {
            return `
                <a class="mat-menu__link" href="${item.url}">${item.text}</a>
            `;
        }).join("");

		return `
			<aside id="drawer" role="navigation" class="mat-drawer mat-drawer--flush">
				<div class="mat-card custom-card-sidebar">
                    <div class="mat-card__head">
                        <div class="mat-media mat-media--reverse mat-media--center mat-type--heading">
                            <div class="mat-media__image">
                                <a class="mat-button"><i class="material-icons">close</i></a>
                            </div>
                            <div class="mat-media__body mat-menu__title">
                                <div class="mat--type-title">Main Menu</div>
                            </div>
                        </div>
                    </div>
                    <div class="mat-card__body mat--divider-top">	
                        <nav class="mat-menu mat-menu--block">
					        ${group1}
				        </nav>
                    </div>
                    <div class="mat-card__body mat--divider-top">   
                        <nav class="mat-menu mat-menu--block">
                            ${group2}
                        </nav>
                    </div>                    
                </div>
			</aside>					
		`;
	}
});
