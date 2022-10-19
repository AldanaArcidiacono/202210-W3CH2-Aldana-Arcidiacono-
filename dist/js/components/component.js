export class Component {
    renderInner(selector, template) {
        if (!selector)
            return false;
        const element = document.querySelector(selector);
        if (element === null) {
            return false;
        }
        element.innerHTML = template;
        return true;
    }
    renderOuter(selector, template) {
        if (!selector)
            return false;
        const element = document.querySelector(selector);
        if (element === null) {
            return false;
        }
        element.outerHTML += template;
        return true;
    }
    renderAdd(selector, template) {
        if (!selector)
            return false;
        const element = document.querySelector(selector);
        if (element === null) {
            return false;
        }
        element.innerHTML += template;
        return true;
    }
}
