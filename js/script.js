
document.querySelectorAll("[id^=routeline_]")
    .forEach(function (routeline) {
        routeline.addEventListener("mouseover", function (event) {

            // move this line to the front
            event.currentTarget.parentElement.append(event.currentTarget);
            console.log(event.currentTarget);
        });
    });



document.querySelectorAll('[id^="terminal_"]')
    .forEach(function (terminalElem) {
        console.log(terminalElem.id, terminalElem);



        // creat popup ID based on terminal ID
        const popupId = "popup_" + terminalElem.id.split("_")[1];

        // select the popup from the page
        const popupElem = document.getElementById(popupId);



        // set up hover events
        terminalElem.addEventListener("mouseover", function (event) {
            popupElem.classList.add("popup-open");
            event.currentTarget.parentElement.append(event.currentTarget);
        });
        terminalElem.addEventListener("mouseout", function (event) {
            popupElem.classList.remove("popup-open");
            event.currentTarget.parentElement.append(event.currentTarget);
        });

    });


document.querySelectorAll('[id^="routestop_"]')
    .forEach(function (routeStopElem) {


        const routeLineId = "routeline_" + routeStopElem.id.split("_")[1];
        const stopElem = document.getElementById(routeLineId);

        routeStopElem.addEventListener("mouseover", function (event) {
            stopElem.classList.add("show-route");
            event.currentTarget.parentElement.append(event.currentTarget);

        });

        routeStopElem.addEventListener("mouseout", function (event) {
            stopElem.classList.remove("show-route");

        });


    });

