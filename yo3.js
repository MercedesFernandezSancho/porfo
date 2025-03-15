document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Proyecto 1", image: "https://via.placeholder.com/150", link: "#" },
        { title: "Proyecto 2", image: "https://via.placeholder.com/150", link: "#" },
        { title: "Proyecto 3", image: "https://via.placeholder.com/150", link: "#" }
    ];

    const container = document.getElementById("projects-grid");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <a href="${project.link}">
                <img src="${project.image}" alt="${project.title}">
                <p>${project.title}</p>
            </a>
        `;
        container.appendChild(card);
    });
});
