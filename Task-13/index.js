const users = [
    {
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        name: "Lelah Nicols",
        place: "Troy, MI",
        tags: ["clothes", "stem"]
    },
    {
        img: "https://images.unsplash.com/photo-1604073536770-8a33e332f830?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "John Doe",
        place: "New York, NY",
        tags: ["tech", "startup"]
    },
    {
        img: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww",
        name: "Willy Smith",
        place: "Los Angeles, CA",
        tags: ["food", "travel","blog"]
    },
    {
        img: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",
        name: "Michael Johnson",
        place: "Chicago, IL",
        tags: ["sports", "fitness"]
    },
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        name: "Emily Davis",
        place: "Miami, FL",
        tags: ["art", "design","drawing"]
    },
    {
        img: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "Chris Brown",
        place: "Houston, TX",
        tags: ["music", "entertainment"]
    }
];

const reputation = [
    {
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        name: "Lelah Nicols",
        place: "Troy, MI",
        tags: ["clothes", "stem"]
    },
    {
        img: "https://images.unsplash.com/photo-1604073536770-8a33e332f830?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "John Doe",
        place: "New York, NY",
        tags: ["tech", "startup"]
    },
    {
        img: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "Chris Brown",
        place: "Houston, TX",
        tags: ["music", "entertainment"]
    }
]

const voters = [https://images
    {
        img: ".unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        name: "Lelah Nicols",
        place: "Troy, MI",
        tags: ["clothes", "stem"]
    },
    {
        img: "https://images.unsplash.com/photo-1604073536770-8a33e332f830?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "John Doe",
        place: "New York, NY",
        tags: ["tech", "startup"]
    },
    {
        img: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "Chris Brown",
        place: "Houston, TX",
        tags: ["music", "entertainment"]
    }
]
const editors = users.map(user => ({ ...user }));
const moderators = [
    {
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        name: "Lelah Nicols",
        place: "Troy, MI",
        tags: ["clothes", "stem"]
    },
    {
        img: "https://images.unsplash.com/photo-1604073536770-8a33e332f830?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "John Doe",
        place: "New York, NY",
        tags: ["tech", "startup"]
    },
    {
        img: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8fDA%3D",
        name: "Chris Brown",
        place: "Houston, TX",
        tags: ["music", "entertainment"]
    }
]

function populateUserDetails(items, container) {
    console.log(items)
    container.innerHTML = "";
    items.forEach(user => {
    const userDiv = document.createElement("div");
    userDiv.className = "cardItem";

    const userImg = document.createElement("img");
    userImg.src = user.img;
    userImg.alt = user.name;
  
    const userName = document.createElement("h2");
      userName.textContent = user.name;
      userName.id = "name";

    const userPlace = document.createElement("p");
      userPlace.textContent = user.place;
      userPlace.id = "place";
  
  const userTags = document.createElement("ul");
      
      userTags.className = "tags";
    user.tags.forEach(tag => {
      const tagItem = document.createElement("li");
      tagItem.textContent = tag;
        userTags.appendChild(tagItem);
    });
        
    userDiv.style.transition = 'cubic-bezier(0.075, 0.82, 0.165, 1)';

      // Append elements to userDiv
    userDiv.appendChild(userImg);
    userDiv.appendChild(userName);
    userDiv.appendChild(userPlace);
    userDiv.appendChild(userTags);
    // Append userDiv to container
    container.appendChild(userDiv);
   
    });

}

function handleMenuItemClick(category) {
    if (category === 'newUsers') {
        
        const container = document.querySelector(".userDetails");
        populateUserDetails(users, container);
    }
    else if (category === 'reputation') {
        const container = document.querySelector(".userDetails");
        populateUserDetails(reputation, container);
    }
    else if (category === 'voters') {
        const container = document.querySelector(".userDetails");
        populateUserDetails(voters, container);
    }
    else if (category === 'editors') {
        const container = document.querySelector(".userDetails");
        populateUserDetails(editors, container);
    }
    else if (category === 'moderators') {
        const container = document.querySelector(".userDetails");
        populateUserDetails(moderators, container);
    }
  }

document.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", function() {
        const category = this.textContent.trim();
        handleMenuItemClick(category);
    });
});
