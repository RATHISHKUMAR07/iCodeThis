const users = [
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPUDZZS0xkdmNtSXx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxPUDZZS0xkdmNtSXx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
const userDisplay = document.getElementById("c2");
const addUser = document.getElementById('add');
const imagesToShow = 3;
let currentIndex = 0;

function displayImages() {
    userDisplay.innerHTML = ''; // Clear previous content
    const imgDiv = document.createElement('div');
    imgDiv.className = "imgDiv";
    const arrowDiv = document.createElement('div');
    for (let i = currentIndex; i < currentIndex + imagesToShow && i < users.length; i++) {
        const img = document.createElement('img');
        img.src = users[i];
        img.addEventListener('click', function () {
            highlightImage(this);
        });
        imgDiv.appendChild(img);
        userDisplay.appendChild(imgDiv);
        console.log(i +""+ users.length);
        if (i === users.length-1) {
            btn.remove();
        }
    }
    
    const btn = document.createElement('button');
    btn.className = 'fa fa-sharp fa-solid fa-greater-than';
    btn.id = "btn";

    userDisplay.appendChild(arrowDiv.appendChild(btn));
    
    btn.addEventListener('click', function () {
        currentIndex += imagesToShow;
        displayImages();
    });
}

// Initial display
displayImages();

const card = document.querySelector(".card");
const text = document.createElement('input');
const button = document.createElement('button');

addUser.addEventListener('click', function (bool) {
    text.innerHTML = "";
    text.value = "";
    const newDiv = document.createElement('div');
    newDiv.className = "newDiv";
    text.className = "newUser";
    text.placeholder = "New User Link";
    button.textContent = "Add User";
    button.className = "newU";
    
    newDiv.appendChild(text);
    newDiv.appendChild(button);
    card.appendChild(newDiv);
    const new1 = document.querySelector(".newU");
    new1.addEventListener('click', function () {
        users.push(text.value);
        console.log(text.value);
        displayImages();
    })
    button.addEventListener('click', function () {
        newDiv.remove();
    })
    
})

function highlightImage(image) {
    const allImages = document.querySelectorAll('#c2 img');
    allImages.forEach(img => img.classList.remove('highlighted'));
    image.classList.add('highlighted');
}
