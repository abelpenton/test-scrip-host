import 'https://cdn.interactjs.io/v1.9.20/auto-start/index.js'
  import 'https://cdn.interactjs.io/v1.9.20/actions/drag/index.js'
  import 'https://cdn.interactjs.io/v1.9.20/actions/resize/index.js'
  import 'https://cdn.interactjs.io/v1.9.20/modifiers/index.js'
  import 'https://cdn.interactjs.io/v1.9.20/dev-tools/index.js'
  import interact from 'https://cdn.interactjs.io/v1.9.20/interactjs/index.js'


function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
  
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

document.addEventListener('click', function(event) {
const clickedElement = event.target;
console.log(clickedElement.htmlFor)
if (clickedElement.htmlFor !== '16-sold' && 
    clickedElement.htmlFor !== '16-not-sold' && 
    clickedElement.id !== '16-sold' && 
    clickedElement.id !== '16-not-sold') {
    event.stopPropagation();
    event.preventDefault();
}
}, true)

document.addEventListener('dblclick', function(event) {
  const clickedElement = event.target;
  const selector = clickedElement.classList[0] ? '.' + clickedElement.classList[0] : '#' + clickedElement.id;
      interact(selector)
      .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true},

    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)        
      }
    },    
    inertia: true
  })
      .draggable({
        listeners: { move: window.dragMoveListener },
        inertia: true,        
      })
}, true);
  
interact('#pgr-payment-container').resizable({
    // resize from all edges and corners
    edges: { left: true, right: true},

    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)        
      }
    },

    inertia: true
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,    
  })