document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Proyecto 1", image: "https://via.placeholder.com/250", link: "#" },
        { title: "Proyecto 2", image: "https://via.placeholder.com/250", link: "#" },
        { title: "Proyecto 3", image: "https://via.placeholder.com/250", link: "#" },
        { title: "Proyecto 4", image: "https://via.placeholder.com/250", link: "#" }
    ];

    const container = document.getElementById("projects-grid");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <a href="${project.link}">
                <img src="${project.image}" alt="${project.title}">
                <div class="info">
                    <h5>${project.title}</h5>
                </div>
            </a>
        `;
        container.appendChild(card);
    });
});