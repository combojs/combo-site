// ## AboutPage
//
// Represents the About page. Mounts to #content.
//
var AboutPage = new Combo.Component({
    render: function() {
        return `
        	${BannerComponent.render()}
        	<div class="mat-section mat-section--xl" style="margin-top: -6rem;">
        		<div class="mat-section__body">
        			<div class="mat-grid mat-grid--1-1 mat-grid--l-1-3">
        				<div class="mat-grid__item">
        					<div class="mat-block mat-block--s mat--align-center">
        						<img class="mat-block__image custom-media--round" src="/images/cog.png">
        						<h2 class="mat--type-headline">Component-based</h2>
    						</div>
    						<p>Design interactive user interfaces from small components that encapsulate the template and logic.</p>
						</div>
        				<div class="mat-grid__item">
        					<div class="mat-block mat-block--s mat--align-center">
        						<img class="mat-block__image custom-media--round" src="/images/balance.png">
        						<h2 class="mat--type-headline">Lightweight</h2>
    						</div>
    						<p>Combo is approximately 2KB when minified and gzipped. This means the framework will load chop-chop.</p>
						</div>
        				<div class="mat-grid__item">
        					<div class="mat-block mat-block--s mat--align-center">
        						<img class="mat-block__image custom-media--round" src="/images/poo.png">
        						<h2 class="mat--type-headline">No Bullshit</h2>
    						</div>
    						<p>No need to write JSX. Combo uses standard ES2015 template literals to render your user interfaces. You're welcome.</p> 
						</div>
    				</div>
				</div>    				
    		</div>

        	<div class="mat-section mat-section--xl mat--color-accent">
        		<div class="mat-section__body">
    				<div class="mat-grid mat-grid--1-1 mat-grid--l-1-3">
        				<div class="mat-grid__item">				
                    <h1 class="mat--type-headline mat-box mat-box--s mat--color-secondary">Quick Start</h1>                                        
        					<h2 class="mat--type-title">Rendering</h2>
                            Each component needs a render method. This method returns a template literal that contains what to display.</p>
        				</div>
        				<div class="mat-grid__item mat-grid__item--auto">
        					${ExampleComponent.render("pWWJoG")}
        				</div>        				
    				</div>
                </div>
            </div>
            
            <div class="mat-section mat-section--xl">
                <div class="mat-section__body">
                    <div class="mat-grid mat-grid--1-1 mat-grid--l-1-3">
                        <div class="mat-grid__item">                
                            <h2 class="mat--type-title">Mounting</h2>
                            <p>Parent components need to be mounted to a container element using the mount() method.</p>
                        </div>
                        <div class="mat-grid__item mat-grid__item--auto">
                            ${ExampleComponent.render("BwPmwL")}
                        </div>                      
                    </div>
                </div>
            </div>
            
            <div class="mat-section mat-section--xl mat--color-accent">
                <div class="mat-section__body">
        			<div class="mat-grid mat-grid--1-1 mat-grid--l-1-3">
        				<div class="mat-grid__item">
        					<h2 class="mat--type-title">Properties</h2>
        					<p>Properties are stored in the data object. Calling update() will update their values, and redraw the component if it's mounted.</p>
        				</div>
        				<div class="mat-grid__item mat-grid__item--auto">
        					${ExampleComponent.render("KXXVLr")}
        				</div>        				
    				</div>
                </div>
            </div>
                
            <div class="mat-section mat-section--xl">
                <div class="mat-section__body">
        			<div class="mat-grid mat-grid--1-1 mat-grid--l-1-3">
        				<div class="mat-grid__item">
        					<h2 class="mat--type-title">Child Components</h2>
        					<p>Child components are drawn when their parent component mounts them, or calls their render method.</p>
        				</div>
        				<div class="mat-grid__item mat-grid__item--auto">
        					${ExampleComponent.render("yzELgE")}
        				</div>        				
    				</div>
        		</div>
    		</div>
        `;
    }
});
