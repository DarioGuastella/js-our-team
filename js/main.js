let pageDiv = document.getElementById("container");
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
console.log("Our Team Member List:")
for (let i = 0; i < ourTeam.length; i++) {
    for (let key in ourTeam[i]) {
        console.log(`Membro numero ${[i]} ${key}: `, ourTeam[i][key]);
    }
}

//CONSOLE LOG ALTERNATIVO
// let element;
// for (let i = 0; i < ourTeam.length; i++) {
//     element = ourTeam[i];
//     console.log(element);   
// }
//STAMPO E LOGGO I MEMBRI DEL TEAM
i = 0;
while (i < ourTeam.length) {
    element = ourTeam[i];
    console.log(element);
    let member = document.createElement("p");
    member.innerHTML = (`Membro numero ${[i]}: Nome: ${element.nome} - Ruolo: ${element.ruolo} - Foto: ${element.foto}`);
    pageDiv.append(member);
    i++;
}