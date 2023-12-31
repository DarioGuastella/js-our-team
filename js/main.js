let pageDiv = document.getElementById("row");
//CREO ARRAY CON OGGETTO PER OGNI MEMBRO DEL TEAM
const ourTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto:"walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto:"scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
    }

]
//CONSOLE LOG ALTERNATIVO
console.log("Our Team Member List:")
for (let i = 0; i < ourTeam.length; i++) {
    for (let key in ourTeam[i]) {
        console.log(`Membro numero ${[i]} ${key}: `, ourTeam[i][key]);
    }
    //STAMPO IN PAGINA LE CARDS E LOGGO I MEMBRI DEL TEAM
    const member = ourTeam[i];
    const col = document.createElement("div");
    col.classList.add("col-4");
    const card = document.createElement("div");
    card.classList.add("card", "mb-4")
    const image = document.createElement("img");
    image.src = `img/${member.foto}`;
    const memberName = document.createElement("h6");
    memberName.innerHTML = `${member.nome}`;
    memberName.classList.add("my-3");
    const memberRole = document.createElement("p");
    memberRole.innerHTML = `${member.ruolo}`;
    card.append(image, memberName, memberRole);
    col.append(card);
    pageDiv.append(col);
    console.log(member);
}

