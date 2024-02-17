
const users = [
    {
        img: "https://images.unsplash.com/photo-1604073536770-8a33e332f830?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "John Smith",
        position: "Manager",
        btn1: "View Profile",
        btn2: "Add Account",
        settings: ["Upgrade to ", "Invite team member", "Feedback", "Help", "Sign Out"],
    },
    {
        img: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "Dexter",
        position: "CEO",
        btn1: "View Profile",
        btn2: "Add Account",
        settings: ["Upgrade to ", "Invite team member", "Feedback", "Help", "Sign Out"],

    }
];
document.addEventListener('DOMContentLoaded', function () {

    const user = document.getElementById('select')

    user.addEventListener('change', function () {
        const selectedValue = this.value;
        console.log("Selected value:", selectedValue);
        console.log(users[0]);
        if (selectedValue === "John") {
            createUser(users[0]);
        }
        else {
            createUser(users[1]);
        }
    })
})

function createUser(user) {
    const existingUserDiv = document.querySelector('.user');
    if (existingUserDiv) {
        existingUserDiv.remove();
    }
    const userDiv = document.createElement('div');
    userDiv.className = "user";
    const profileDiv = document.createElement('div');
    profileDiv.className = "userDetails";
    const settingDiv = document.createElement('div');
    settingDiv.className = "settingDetails";



    const pChild1 = document.createElement('div');
    pChild1.className = "child1"
    const pChild2 = document.createElement('div');
    pChild1.className = "child2"

    const pImg = document.createElement('img');
    pImg.id = "img";
    pImg.src = user.img;
    pChild1.appendChild(pImg);

    const pName = document.createElement('p');
    pName.id = "name";
    pName.textContent = user.name;
    pChild2.appendChild(pName);


    const pPosition = document.createElement('p');
    pPosition.id = "position";
    pPosition.textContent = user.position;
    pChild2.appendChild(pPosition);

    const btn1 = document.createElement('button');
    btn1.id = "btn1";
    btn1.textContent = user.btn1;
    pChild2.appendChild(btn1);

    const btn2 = document.createElement('button');
    btn2.id = "btn2";
    btn2.textContent = user.btn2;
    pChild2.appendChild(btn2);

    profileDiv.appendChild(pChild1);
    profileDiv.appendChild(pChild2);


    console.log(user.settings[0])
    const s1 = document.createElement('p');
    const textPro = document.createElement('span');
    textPro.id = "highlight";
    textPro.textContent = "PRO";
    s1.id = "pro";
    s1.appendChild(textPro);
    const text = user.settings[0];
    s1.textContent = text;
    s1.appendChild(textPro);
    settingDiv.appendChild(s1);

    const s2 = document.createElement('p');
    s2.textContent = user.settings[1];
    settingDiv.appendChild(s2);

    const s3 = document.createElement('p');
    s3.textContent = user.settings[2];
    settingDiv.appendChild(s3);

    const s4 = document.createElement('p');
    s4.textContent = user.settings[3];
    settingDiv.appendChild(s4);

    const s5 = document.createElement('p');
    s5.textContent = user.settings[4];
    settingDiv.appendChild(s5);





    userDiv.appendChild(profileDiv);
    userDiv.appendChild(settingDiv);

    document.body.appendChild(userDiv);

}
