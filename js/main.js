let pageDiv = document.getElementById("row");
//CREO ARRAY CON OGGETTO PER OGNI MEMBRO DEL TEAM
const ourTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto:"img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto:"img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto:"img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto:"img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto:"img/scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto:"img/barbara-ramos-graphic-designer.jpg"
    }

]
//CONSOLE LOG ALTERNATIVO
console.log("Our Team Member List:")
for (let i = 0; i < ourTeam.length; i++) {
    for (let key in ourTeam[i]) {
        console.log(`Membro numero ${[i]} ${key}: `, ourTeam[i][key]);
    }
}

//STAMPO E LOGGO I MEMBRI DEL TEAM
i = 0;
while (i < ourTeam.length) {
    const member = ourTeam[i];
    console.log(member);
    const col = document.createElement("div");
    col.classList.add("col-4");
    const card = document.createElement("div");
    card.classList.add("card")
    card.classList.add("mb-4")
    const image = document.createElement("img");
    image.src = `${member.foto}`;
    const memberName = document.createElement("h6");
    memberName.innerHTML = `${member.nome}`;
    memberName.classList.add("my-3");
    const memberRole = document.createElement("p");
    memberRole.innerHTML = `${member.ruolo}`;
    card.append(image);
    card.append(memberName);
    card.append(memberRole);
    col.append(card);
    pageDiv.append(col);
    i++;
}