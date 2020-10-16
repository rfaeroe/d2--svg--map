document.querySelectorAll("[id^=routeline_]")
    .forEach(function (routeline) {
        routeline.addEventListener("mouseover", function (event) {

            // move this line to the front
            event.currentTarget.parentElement.append(event.currentTarget);
        });
    });





document.querySelectorAll('[id^="terminal_"]')
    .forEach(function (terminalElem) {
        console.log(terminalElem.id, terminalElem)


        // creat popup ID based on terminal ID
        const popupId = "popup_" + terminalElem.id.split("_")[1];

        // select the popup from the page
        const popupElem = document.getElementById(popupId);

        // set up hover events
        terminalElem.addEventListener("mouseover", function (event) {
            popupElem.classList.add("popup-open");
        });
        terminalElem.addEventListener("mouseout", function (event) {
            popupElem.classList.remove("popup-open");
        });

    });


document.querySelectorAll('[id^="routestop_"]')
    .forEach(function (routeStopElem) {
        routeStopElem.addEventListener("moseover", function (event) {
            // move this line to the front
            event.currentTarget.parentElement.append(event.currentTarget);
        })



        const routeLineId = "routeline_" + routeStopElem.id.split("_")[1];

        const stopElem = document.getElementById(routeLineId);


        routeStopElem.addEventListener("mouseover", function (event) {
            if (routeStopElem) {
                stopElem.classList.add("show-route");
                // move this line to the front
                event.currentTarget.parentElement.append(event.currentTarget);
            }
            else {

            }
        });


    });