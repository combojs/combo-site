// ## LayoutPage
//
// Represents the Layout page. Mounts to #root.
//
var LayoutPage = new Combo.Component({
    render: function() {
        return `
           ${HeaderComponent.render()}                
           ${SidebarComponent.render()}		
           
           <main role="main" id="content"></main>
        `;
    }
});
