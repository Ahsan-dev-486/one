
// 
const words = ["developer", "Designer", "youtuber"];
const span = document.querySelector(".span");

let word = 0;
let letter = 0;

function type() {
    let currentword = words[word];
    
    letter++;
    span.textContent = currentword.substring(0 , letter)
    if (letter === currentword.length) {
        setTimeout(erase , 1000)
    }else{
        setTimeout(type , 100);
    }
}

function erase() {
    let currentword = words[word];
    letter--;
    span.textContent = currentword.substring(0, letter);
    if (letter === 0) {
        word = (word + 1) % words.length;
        setTimeout(type, 200)
    }else{
        setTimeout(erase, 100)
    }
}
type();

// Existing Navbar Logic
let navLivks = document.querySelectorAll(".navlink");
let content = document.querySelectorAll(".content");
let manuToggle = document.getElementById("manu-toggle"); // Checkbox select kiya

navLivks.forEach((link) => {
    link.addEventListener("click", (p) => {
        // p.preventDefault(); // Isse active rakhein agar single page application hai

        // 1. Menu band karne ke liye (Important Line)
        if (manuToggle) {
            manuToggle.checked = false; 
        }

        // 2. Active class toggle logic
        navLivks.forEach((a) => {
            a.classList.remove("active");
        });
        link.classList.add("active");

        // 3. Content switch logic
        const activeContent = link.dataset.sect;
        content.forEach((c) => {
            if (c.id === activeContent) {
                c.classList.add("active");
            } else {
                c.classList.remove("active");
            }
        });
    });
});

const servicesList = document.getElementById("services-list");
let servicesItem = [
    {   
        id : 1,
        icon1: "fa-solid fa-code",
        icon2: "fa-solid fa-arrow-down",
        title: "Frontend Development",
        desc: "I build clean and responsive user interfaces using HTML, CSS, and modern JavaScript Personal mentorship for beginners to advanced learners in web development, including live coding ."
    },
    {
        id : 2,
        icon1: "fa-solid fa-mobile-screen",
        icon2: "fa-solid fa-arrow-down",
        title: "Responsive Design",
        desc: "Websites that look stunning on every screen, from mobile phones to large desktops Personal mentorship for beginners to advanced learners in web development, including live coding ."
    },
    {
        id : 3,
        icon1: "fa-solid fa-gears",
        icon2: "fa-solid fa-arrow-down",
        title: "Web Logic",
        desc: "Creating interactive features and handling complex logic for smooth user experience Personal mentorship for beginners to advanced learners in web development, including live coding ."
    },
    {
        id : 4,
        icon1: "fa-solid fa-code",
        icon2: "fa-solid fa-arrow-down",
        title: "Photography",
        desc: "End-to-end delivery of freelance projects — from planning to deployment — with quality assurance and post Personal mentorship for beginners to advanced learners in web development, including live coding -"
    },
];
const serciceContent = servicesItem.map((ele)=>{
    return`
    <div class="service-card" key=${ele.id}>
                    <div class="icon">
                        <a href=""><i class="${ele.icon1}"></i></a>
                        <a href="" class="arrow">
                            <i class="${ele.icon2}"></i>
                        </a>
                    </div>
                    <h2>${ele.title}</h2>
                    <p>${ele.desc}</p>
                </div>
    `;
}).join("");

        servicesList.innerHTML = serciceContent;


let aboutTab = document.querySelectorAll(".tab");
let aboutcontent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if (aboutTab.length > 0) {
        aboutTab[0].click(); // Pehle tab ko auto-click karega
    }
});

aboutTab.forEach((tab) => {
    tab.addEventListener("click", (a) => {
        a.preventDefault();

        // 1. Remove active class from tabs (Fix: removed the dot '.')
        aboutTab.forEach((b) => b.classList.remove("active"));
        tab.classList.add("active");

        // 2. Hide all tab contents
        aboutcontent.forEach((c) => c.classList.remove("active"));

        // 3. Show targeted content
        const activeTabId = tab.dataset.tab;
        const targetContent = document.getElementById(activeTabId);
        
        if (targetContent) {
            targetContent.classList.add("active");
        }

        // 4. Dynamic Content Rendering (Experience)
        if (activeTabId === "experiance") {
            // Fix: Use querySelector to get the actual element, not a collection
            const experianceContainer = document.querySelector(".experiance-list");

            if (experianceContainer) {
                const experianceList = [
                    {
                        id: 1,
                        date: "2022 - 2024",
                        position: "Frontend Developer",
                        company: "Youtube Company",
                        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    },
                    {
                        id: 2,
                        date: "2022 - 2024",
                        position: "UI Designer",
                        company: "Creative Studio",
                        detail: "Molestias inventore consequatur officia. Sed, praesentium recusandae."
                    },
                    {   
                        id: 3,
                        date: "2022 - 2024",
                        position: "UI Designer",
                        company: "Creative Studio",
                        detail: "Molestias inventore consequatur officia. Sed, praesentium recusandae."
                    }
                ];

                const htmlContent = experianceList.map((ele) => {
                    return `
                    <div class="experiance-box" data-key="${ele.id}">
                        <h4>${ele.date}</h4>
                        <h3>${ele.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele.company}</p>
                        </div>
                        <p>${ele.detail}</p>
                    </div>`;
                }).join("");

                // Data insert kar rahe hain
                experianceContainer.innerHTML = htmlContent;
            }
        }else if (activeTabId === "education") {
    const educationContainer = document.querySelector(".education-list");

    if (educationContainer) {
        // Fix 1: Spelling theek ki (educationList)
        const educationList = [
            {
                id: 1,
                date: "2018 - 2022",
                position: "Computer Science Degree",
                company: "ABC University",
                detail: "Focused on software engineering and data structures."
            },
            {
                id: 2,
                date: "2016 - 2018",
                position: "Higher Secondary",
                company: "XYZ College",
                detail: "Studied Mathematics and Physics with high honors."
            }
        ];

        // Fix 2: Variable name consistency (educationList use kiya)
        const htmlCont = educationList.map((ele) => {
            return `
            <div class="education-box" data-key="${ele.id}">
                <h4>${ele.date}</h4>
                <h3>${ele.position}</h3>
                <div class="company-name">
                    <span></span>
                    <p>${ele.company}</p>
                </div>
                <p>${ele.detail}</p>
            </div>`;
        }).join("");

        // Data insert kar rahe hain
        educationContainer.innerHTML = htmlCont;
    }
}else if (activeTabId === "skill") {
    const skillContainer = document.querySelector(".skill-list");

    if (skillContainer) {
        // Fix 1: Spelling theek ki (educationList)
        const skillList = [
            {
                id: 1,
                img: "assets/html.png",
            },
            {
                id: 2,
                img: "assets/css.png",
            },
            {
                id: 3,
                img: "assets/js.png",
            },
        ];

        // Fix 2: Variable name consistency (educationList use kiya)
        const htmlContI = skillList.map((ele) => {
            return `
            <div class="skill-box" key=${ele.id}>
                        <img src="${ele.img}" alt="">
                    </div>
                    
            `;
        }).join("");

        // Data insert kar rahe hain
        skillContainer.innerHTML = htmlContI;
    }
}
    });
});