// ## ExampleComponent
//
// Represents the Example component. Does not mount.
//
var ExampleComponent = new Combo.Component({
    render: function(pen) {
        return `
            <iframe height='265' scrolling='no' title='A Simple Component' src='//codepen.io/combojs/embed/${pen}/?height=265&theme-id=31541&default-tab=js&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>
        `;
    }
});
