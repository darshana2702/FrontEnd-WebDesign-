const mainDiv = document.getElementById('main');
const cartoon = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWQ5snLzNeHXc8Bso4YCnGTf7WVV2_U74PA&s",
        name: "Doremoon",
        sound: "https://pagallworld.co.in/wp-content/uploads/2023/06/Doraemon.mp3",
    },
    {
        image: "https://hindi.economictimes.com/photo/msid-75216267,imgsize-10918/pic.jpg",
        name: "Chota bhim",
        sound: "https://pagallworld.co.in/wp-content/uploads/2023/04/Chhota-Bheem-Title.mp3",
    },
    {
        image: "https://www.shutterstock.com/image-vector/cute-funny-baby-panda-hanging-600nw-334228436.jpg",
        name: "Panda",
        sound: "C:/Users/darsh/Downloads/Doraemon.mp3",
    },
    {
        image: "https://www.animaker.com/hub/wp-content/uploads/2023/03/Mickey_Mouse_Disney_1.webp",
        name: "Mickey",
        sound: "C:/Users/darsh/Downloads/Doraemon.mp3",
    },
    {
        image: "https://rukminim2.flixcart.com/image/850/1000/kl5hh8w0/poster/6/n/z/medium-cute-cartoon-wall-sticker-poster-interior-wall-poster-original-imagycg3dxbt2kms.jpeg?q=90&crop=false",
        name: "Shinchan",
        sound: "https://pagallworld.co.in/wp-content/uploads/2023/08/Shin-Chan-Title.mp3",
    },
    {
        image: "https://www.dreamzone.co.in/blog/wp-content/uploads/2022/05/Sound-of-cartoon-characters-1.jpg",
        name: "Tom & Jeery",
        sound: "https://www.televisiontunes.com/uploads/audio/Tom%20and%20Jerry.mp3",
    },
    {
        image: "https://i.pinimg.com/originals/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg",
        name: "Motu_Patlu",
        sound: "https://www.zedge.net/ringtone/98d6668b-b97e-3fee-ad9a-603f581e893c",
    },
    {
        image: "https://imgix.ranker.com/list_img_v2/2095/362095/original/the-most-annoying-cartoon-characters-of-all-time-u1?w=817&h=427&fm=jpg&q=50&fit=crop",
        name: "Dora",
        sound: "https://www.televisiontunes.com/uploads/audio/Dora%20the%20Explorer.mp3",
    },
    {
        image: "https://www.arena-multimedia.com/uploads/blogs/posts/n-Mr-Bean.jpg",
        name: "Mr.Bean",
        sound: "https://dl.prokerala.com/downloads/ringtones/files/mp3/mr-bean-song-ringtoneshub-189-40967.mp3",
    },
];

let currentSound = null;

cartoon.forEach(function(c) {
    const divv = document.createElement('div');
    divv.classList.add('cartoon');
    const photo = document.createElement('img');
    photo.src = c.image;
    photo.alt = c.name;

    photo.addEventListener('click', function() {
        
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0; 
        }

        
        currentSound = new Audio(c.sound);
        currentSound.play().catch(function(error) {
            console.error('Failed to play sound:', error);
            alert('Unable to play the sound. Please check the sound file or try again later.');
        });
    });

    const title = document.createElement('h2');
    title.textContent = c.name;

    divv.append(photo, title);
    mainDiv.appendChild(divv);
});
