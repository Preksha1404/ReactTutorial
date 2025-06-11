function renderElement(reactElement, container) {
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // Skip children as they are already set
        element.setAttribute(prop, reactElement.props[prop]);
    }
    // element.setAttribute('href', reactElement.props.href);
    // element.setAttribute('target', reactElement.props.target);
    container.appendChild(element);
}

const reactElement={
    type: 'a',
    props: {
        href: 'https://react.dev',
        target: '_blank',
    },
    children:"Learn React",
}

const mainContainer = document.getElementById('root');

renderElement(reactElement, mainContainer);