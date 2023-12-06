import 'https://cdn.interactjs.io/v1.9.20/auto-start/index.js'
import 'https://cdn.interactjs.io/v1.9.20/actions/drag/index.js'
import 'https://cdn.interactjs.io/v1.9.20/actions/resize/index.js'
import 'https://cdn.interactjs.io/v1.9.20/modifiers/index.js'
import 'https://cdn.interactjs.io/v1.9.20/dev-tools/index.js'
import interact from 'https://cdn.interactjs.io/v1.9.20/interactjs/index.js'

function dragMoveListener (event) {
    const target = event.target
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

window.dragMoveListener = dragMoveListener

document.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (!clickedElement.classList.contains('jsRpLabel')) {
        event.stopPropagation();
        event.preventDefault();
    }
}, true)

function addInteractFromSelector(selector) {
    if (!selector) {
        return
    }

    interact(selector)
        .resizable({
            edges: { left: true, right: true},

            listeners: {
                move (event) {
                    let target = event.target
                    let x = (parseFloat(target.getAttribute('data-x')) || 0)
                    let y = (parseFloat(target.getAttribute('data-y')) || 0)

                    target.style.width = event.rect.width + 'px'

                    x += event.deltaRect.left
                    y += event.deltaRect.top

                    target.style.transform = `translate(${x}px,${y}px)`

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
}

document.addEventListener('dblclick', function(event) {
    const clickedElement = event.target;
    const selector = clickedElement.classList[0] ? '.' + clickedElement.classList[0] : '#' + clickedElement.id;
    addInteractFromSelector(selector)
}, true);

addInteractFromSelector('#pgr-payment-container')