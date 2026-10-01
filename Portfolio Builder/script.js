// 🎵 Sounds

const clickSound =
document.getElementById("clickSound");

const successSound =
document.getElementById("successSound");

// 📱 Install App

let deferredPrompt;

const installBtn =
document.getElementById("installBtn");

window.addEventListener(
    "beforeinstallprompt",
    (e) => {

    e.preventDefault();

    deferredPrompt = e;

    installBtn.style.display = "block";
});

installBtn.addEventListener(
    "click",
    async () => {

    deferredPrompt.prompt();

    deferredPrompt.userChoice;
});

// 🔊 Play Sound

function playClick() {

    clickSound.play();
}

// 🚀 Go To Form

function goToFormPage() {

    playClick();

    document.getElementById(
        "welcome-page"
    ).classList.remove("active");

    document.getElementById(
        "form-page"
    ).classList.add("active");
}

// 🌐 Generate Portfolio

function generatePortfolio() {

    playClick();

    let name =
    document.getElementById("name").value;

    let role =
    document.getElementById("role").value;

    let about =
    document.getElementById("about").value;

    let skills =
    document.getElementById("skills").value;

    let project =
    document.getElementById("project").value;

    let photo =
    document.getElementById("photo").files[0];

    // Hide Form
    document.getElementById(
        "form-page"
    ).classList.remove("active");

    // Show Portfolio
    let portfolioPage =
    document.getElementById(
        "portfolio-page"
    );

    portfolioPage.classList.add(
        "active"
    );

    portfolioPage.classList.add(
        "fade-in"
    );

    // Set Data
    document.getElementById(
        "portfolio-name"
    ).innerText = name;

    document.getElementById(
        "portfolio-role"
    ).innerText = role;

    document.getElementById(
        "portfolio-about"
    ).innerText = about;

    // Skills
    let skillsContainer =
    document.getElementById(
        "portfolio-skills"
    );

    skillsContainer.innerHTML = "";

    let skillsArray =
    skills.split(",");

    skillsArray.forEach(skill => {

        let span =
        document.createElement("span");

        span.classList.add("skill");

        span.innerText = skill;

        skillsContainer.appendChild(span);
    });

    // Project
    let projectLink =
    document.getElementById(
        "portfolio-project"
    );

    projectLink.href = project;

    // 🎵 Success Sound
    successSound.play();

    // 🖼 Upload Image
    if (photo) {

        let reader =
        new FileReader();

        reader.onload = function(e) {

            document.getElementById(
                "profile-image"
            ).src = e.target.result;
        }

        reader.readAsDataURL(photo);
    }
}

// 🌙 Theme

function toggleTheme() {

    playClick();

    document.body.classList.toggle(
        "light-mode"
    );
}

// 📄 Download Resume

function downloadPortfolio() {

    playClick();

    window.print();
}