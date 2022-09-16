const data = {
    tab1: {
        title: "Tab 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    tab2: {
        title: "Tab 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    tab3: {
        title: "Tab 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tabWrapper = document.getElementById("tab-wrapper");
    const content = document.getElementById("content");
    const mobileContent = document.getElementById("mobile-content");

    // set the default content to the first tab content
    content.innerHTML = data.tab1.content;

    Object.keys(data).forEach(id => {
        const tabItem = data[id];

        // create the tab element and set its attributes
        const newTab = document.createElement('li');
        newTab.setAttribute('id', id);
        newTab.setAttribute('class', 'tab');

        // create the tab title element and set it's attributes
        const newTabTitle = document.createElement('div')
        newTabTitle.setAttribute('class', 'tab-title');
        newTabTitle.setAttribute('aria-selected', false);
        newTabTitle.setAttribute('aria-label', tabItem.title);
        newTabTitle.innerText = tabItem.title;

        // on click handler 
        newTab.addEventListener('click', () => {
            // create an array of tabs
            // loop through it 
            // remove the active class
            // set aria-selected to false
            Array.from(document.getElementsByClassName('tab')).forEach(element => {
                element.className = element.className.replace('active', '');
                element.setAttribute('aria-selected', false);
            });

            // active tab -- set active class and accessibility
            newTab.className += ' active';
            newTab.setAttribute('aria-selected', true);

            // MOBILE
            // set tab content
            mobileContent.className += ' show';
            mobileContent.innerHTML = tabItem.content;
            newTab.after(mobileContent);

            // LAPTOP
            // set tab content
            content.innerHTML = tabItem.content;
        })

        tabWrapper.appendChild(newTab);
        newTab.appendChild(newTabTitle);
    });

    // default first tab to active
    document.getElementsByClassName('tab')[0].className += ' active';
});