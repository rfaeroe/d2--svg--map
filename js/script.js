document.querySelectorAll('[id^="terminal_"]')
    .forEach(function (terminalElem) {
        console.log(terminalElem.id, terminalElem)


        // creat popup ID based on terminal ID
        const popupId = "popup_" + terminalElem.id.split("_")[1];

        // select the popup from the page
        const popupElem = document.getElementById(popupId);

        // set up hover events
        terminalElem.addEventListener("mouseover", function (event) {
            console.log("hovered");
            popupElem.classList.add("popup-open");
        });
        terminalElem.addEventListener("mouseout", function (event) {
            console.log("unhovered");
            popupElem.classList.remove("popup-open");
        });

    });