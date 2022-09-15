const data = {
    tab1: {
        title: "Tab 1",
        content: "Hello"
    },
    tab2: {
        title: "Tab 2",
        content: "Hola"
    },
    tab3: {
        title: "Tab 3",
        content: "Bonjour"
    },
    tab4: {
        title: "Tab 4",
        content: "Guten Tag"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tabWrapper = document.getElementById("tab-wrapper");
    const content = document.getElementById("content");

    // set the default content to the first tab content
    content.innerHTML = data.tab1.content;

    Object.keys(data).forEach(id => {
        const tabItem = data[id];
        //create the tab element and set its attributes
        const newTab = document.createElement('li');
        newTab.setAttribute('id', id);
        newTab.setAttribute('class', 'tab');
        newTab.setAttribute('aria-selected', false);
        newTab.setAttribute('aria-label', tabItem.title);
        newTab.innerText = tabItem.title;

        newTab.addEventListener('click', () => {
            Array.from(document.getElementsByClassName('tab')).forEach(element => {
                element.className = element.className.replace('active', '');
                element.setAttribute('aria-selected', false);
            })
            newTab.className += ' active';
            newTab.setAttribute('aria-selected', true);
            content.innerHTML = tabItem.content;
        })

        tabWrapper.appendChild(newTab);
    });

    // default first tab to active
    document.getElementsByClassName('tab')[0].className += ' active';
});