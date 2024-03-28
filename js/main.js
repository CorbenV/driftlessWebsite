window.addEventListener('load', () => {
    // navbar
    const logoBtn = document.getElementById("logoBtn");
    const homeBtn = document.getElementById("homeBtn");
    const programsBtn = document.getElementById("programsBtn");
    const scheduleBtn = document.getElementById("scheduleBtn");
    const faqBtn = document.getElementById("faqBtn");
    const contactBtn = document.getElementById("contactBtn");
    const contactUpsellBtns = document.getElementsByClassName("contactBtnUpsell");
    const bannerBtn = document.getElementById("bannerBtn");

    for(let i = 0; i < contactUpsellBtns.length; i++){
        contactUpsellBtns[i].addEventListener("click", () => {
            const contact = document.getElementById("contact");
            contact.scrollIntoView();
        });
    }

    logoBtn.addEventListener("click", () => {
        const homeTxt = document.getElementById("homeTxt");
        homeTxt.scrollIntoView(false);
    });

    homeBtn.addEventListener("click", () => {
        const homeTxt = document.getElementById("homeTxt");
        homeTxt.scrollIntoView(false);
    });

    programsBtn.addEventListener("click", () => {
        const programDisplay = document.getElementById("programDisplay");
        programDisplay.scrollIntoView();
    });

    scheduleBtn.addEventListener("click", () => {
        const scheduleHeader = document.getElementById("scheduleHeader");
        scheduleHeader.scrollIntoView();
    });

    faqBtn.addEventListener("click", () => {
        const faq = document.getElementById("faq");
        faq.scrollIntoView();
    });

    contactBtn.addEventListener("click", () => {
        const contact = document.getElementById("contact");
        contact.scrollIntoView();
    });

    bannerBtn.addEventListener("click", () => {
        const contact = document.getElementById("contact");
        contact.scrollIntoView();
    });

    // schedule
    const classTimes = [
        {time: "5:00 AM", days: ["Monday", "Wednesday", "Friday"]},
        {time: "6:00 AM", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
        {time: "9:00 AM", days: ["Saturday"]},
        {time: "12:00 PM", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
        {time: "4:45 PM", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
        {time: "5:45 PM", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
    ];

    const table = document.getElementById("schedule");
    const tbody = table.getElementsByTagName("tbody")[0];

    function clearTable(){
        let elementsToRemove = [];
        let currentRows = tbody.children;
        for(let c of currentRows){
            if(!c.classList.contains("stay")){
                elementsToRemove.push(c);
            }
        }
        while(elementsToRemove.length != 0){
            elementsToRemove[0].parentElement.removeChild(elementsToRemove[0]);
            elementsToRemove.splice(0,1);
        }
    }

    function displayClassTimes(weekday){
        console.log(2);
        for(let i = 0; i < classTimes.length;i++){
            let weekdays = classTimes[i].days;
            if(weekdays.includes(weekday)){
                let tr = document.createElement("tr");
                tr.innerHTML = "<td>Crossfit Class</td><td></td><td></td><td></td><td></td><td>"+classTimes[i].time+"</td>";
                tbody.appendChild(tr);
            }
        }
    }

    const dayHandles = table.getElementsByTagName("th");
    for(let i = 0; i < dayHandles.length; i++){
        const el = dayHandles[i];
        el.addEventListener("click", () => {
            if(!el.classList.contains("theadSelected")){
                let oldEl = document.getElementsByClassName("theadSelected")[0];
                el.classList.add("theadSelected");
                oldEl.classList.remove("theadSelected");
                clearTable();
                displayClassTimes(el.innerText);
            }
        });
    }

    // faq boxes
    const faqBoxes = document.getElementsByClassName("faqBox");
    for (let i = 0; i < faqBoxes.length; i++){
        let box = faqBoxes[i];
        let innerBox = box.querySelector(".faqBoxInner");
        let plus = box.querySelector(".fa-plus");
        let minus = box.querySelector(".fa-minus");
        box.addEventListener("click", () => {
            if (minus.classList.contains("hidden")){
                innerBox.style.maxHeight = innerBox.scrollHeight+"px";
                minus.classList.remove("hidden");
                plus.classList.add("hidden");
                box.style.marginBottom = innerBox.scrollHeight+"px";
            }else{
                innerBox.style.maxHeight = "0px";
                minus.classList.add("hidden");
                plus.classList.remove("hidden");
                box.style.marginBottom = "1vw";
            }
        });
    }

    // parameters
    const query = window.location.search;
    if(query == "?src=qr"){
        console.log("Deal");
    }
});