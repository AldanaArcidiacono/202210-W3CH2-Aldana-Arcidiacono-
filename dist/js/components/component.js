export class Component {
    renderInner(selector, template) {
        const element = document.querySelector(selector);
        if (element === null) {
            return false;
        }
        element.innerHTML = template;
        return true;
    }
    renderOuter(selector, template) {
        const element = document.querySelector(selector);
        if (element === null) {
            return false;
        }
        element.outerHTML += template;
        return true;
    }
    renderAdd(selector, template) {
        const element = document.querySelector(selector);
        if (element === null) {
            return false;
        }
        element.innerHTML += template;
        return true;
    }
}
