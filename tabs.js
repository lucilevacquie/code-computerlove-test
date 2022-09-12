function onTabClick(event) {
    //class 'active' on the selected tab/content (first tab by default)
    let activeTab = document.querySelector('.active');

    //first, remove the active class that already exists
    //loop through all the tabs and replace 'active' by empty string
    activeTab.forEach(function (tab) {
        tab.className = tab.className.replace('active', '');
    })

    //then, add the 'active' class to the selected tab
    event.target.parentElement.className += ' active';
    //and add the 'active' class to the coresponding content element
    document.getElementById(event.target.id.split('button-')[1]).className += ' active';
}