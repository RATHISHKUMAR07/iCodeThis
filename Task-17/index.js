function render() {
    const emails = [
        "rathish@gmail.com",
        "dexter@gmail.com"
    ]


    const addEmail = document.getElementById('add');
    const card1 = document.querySelector('.card1');
    const primary = document.querySelector('.primary');
    const emailOthers = document.querySelector('.email_others')

    function primaryEmail() {
        const emailDiv = document.createElement('div');
        primary.innerHTML = "";
        console.log(emails)
        if (emails.length > 0) {
            emailDiv.className = "emailDiv";
            const p1 = document.createElement('p');
            p1.textContent = emails[0];
    
            const p2 = document.createElement('p');
            p2.textContent = "PRIMARY"
            p2.className = "primary_tag";
    
            emailDiv.appendChild(p1);
            emailDiv.appendChild(p2);
            primary.appendChild(emailDiv);
        }
    }

    primaryEmail();
    



    function otherEmail() {
        emailOthers.innerHTML = "";
        if (emails.length > 1) {
            for (let i = 1; i < emails.length; i++) {
                const otherDiv = document.createElement('div');

                otherDiv.className = `otherDiv${i}`;
                const style = document.createElement('style');
                style.textContent = `.otherDiv${i}{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            `;
                otherDiv.appendChild(style);
                const email = document.createElement('p');
                email.textContent = emails[i];
    
                const email_btn = document.createElement('button');
                const itag = document.createElement('i');
                itag.className = "fa-solid fa-ellipsis";
    
                email_btn.appendChild(itag);
            
                otherDiv.appendChild(email);
                otherDiv.appendChild(email_btn);
    
                emailOthers.appendChild(otherDiv);
            
                otherDiv.addEventListener('dblclick', function () {
                    primaryEmail.innerHTML = "";
                    const split = parseInt(otherDiv.className.match(/\d+/)[0]);
                    
                    const temp = emails[0];
                    emails[0] = emails[split];
                    emails[split] = temp;

                    primaryEmail();
                    otherEmail();
                    console.log(split + " " + emails[split] )
                })
            }
        }
    }
    otherEmail();




    addEmail.addEventListener('click', function () {
        const newEmailDiv = document.createElement('div');
        const newEmail = document.createElement('input');
        newEmail.placeholder = "New Email";
        newEmailDiv.className = 'newEmail';
    
        console.log(emails);
        const btn = document.createElement('button');
        btn.textContent = "Add Email";
    
        btn.addEventListener('click', function () {
            if (newEmail.value !== null) {
                emails.push(newEmail.value);
                otherEmail();
                console.log(emails)
            }
        })
        console.log(newEmail.value);
        newEmailDiv.appendChild(newEmail);
        newEmailDiv.appendChild(btn);
        card1.appendChild(newEmailDiv);
    })

}

render();


const phone = [

];

const phoneNumbers = document.querySelector('.phone');
const card2 = document.querySelector('.card2');

function phoneNum() {
    
    if (phone.length === 0) {
    
        const p1 = document.createElement('p');
        p1.textContent = "You haven't added any phone numbers yet.";

        const p2 = document.createElement('p');
        p2.textContent = "Your phone number helps us keep your account secure. It also helps people who already have your number discover and connect with you."

        phoneNumbers.appendChild(p1);
        phoneNumbers.appendChild(p2);
    }
    else {
        phoneNumbers.innerHTML = "";
        const style = document.createElement('style');
        style.textContent = `
            .phone {
                 background-color: white;
                 color: grey;
                 border: 2px solid grey;
                 text-align:left;
            }`;
        
        phoneNumbers.appendChild(style);
        for (let i = 0; i < phone.length; i++){
            const p = document.createElement('p');
            p.textContent = i+1 + " - " + phone[i];
            phoneNumbers.appendChild(p);
        }
    }
    
    const addPhone = document.getElementById('addPhone');

    const addPhoneDiv = document.getElementById('add_phone');

    addPhone.addEventListener('click', function () {
        const newPhoneDiv = document.createElement('div');
        const newPhone = document.createElement('input');
        newPhone.placeholder = "New Phone Number";
        newPhoneDiv.className = 'newPhone';

        console.log(phone);
        const btn = document.createElement('button');
        btn.textContent = "Add Phone Number";

        btn.addEventListener('click', function () {
            if (newPhone.value !== null) {
                phone.push(newPhone.value);
                console.log(phone)
                phoneNum();
            }
        })
        newPhoneDiv.appendChild(newPhone);
        newPhoneDiv.appendChild(btn);
        card2.appendChild(newPhoneDiv);
    })
    
}

phoneNum();

