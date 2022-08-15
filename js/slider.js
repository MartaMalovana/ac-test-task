const photos1 = [
    {
        'name': 'marquee-wedding',
        'alt': 'Waterproof Marquee for Wedding Parties',
        'title': 'Waterproof Marquee for Wedding Parties',
        'id': '1'
    },
    {
        'name': 'marquee-birthday',
        'alt': 'Waterproof Marquees for birthday parties in the garden',
        'title': 'Waterproof Marquees for birthday parties in the garden',
        'id': '2'
    },
    {
        'name': 'marquee-tie-downs',
        'alt': 'Secure waterproof marquees against wind and weather',
        'title': 'Secure waterproof marquees against wind and weather',
        'id': '3'
    }
];

const photos2 = [
    {
        'name': 'pop-up-gazebo-large-event',
        'alt': 'Waterproof pop up gazebos for large events',
        'title': 'Waterproof pop up gazebos for large events',
        'id': '1'
    },
    {
        'name': 'pop-up-gazebo-rugby',
        'alt': 'Waterproof pop up gazebos for sport tournaments',
        'title': 'Waterproof pop up gazebos for sport tournaments',
        'id': '2'
    },
    {
        'name': 'pop-up-gazebo-equestrian-world-cup',
        'alt': 'Waterproof pop up gazebos for sporting events',
        'title': 'Waterproof pop up gazebos for sporting events',
        'id': '3'
    }
];

const photos3 = [
    {
        'name': 'garden-gazebo-autumn',
        'alt': 'Waterproof garden gazebos for autumn',
        'title': 'Waterproof garden gazebos for autumn',
        'id': '1'
    },
    {
        'name': 'garden-gazebo-winter',
        'alt': 'Waterproof garden gazebos as shelter from the cold in winter',
        'title': 'Waterproof garden gazebos as shelter from the cold in winter',
        'id': '2'
    },
    {
        'name': 'garden-gazebo-summer',
        'alt': 'Waterproof garden gazebos to provide shade in summer',
        'title': 'Waterproof garden gazebos to provide shade in summer',
        'id': '3'
    }
];

function Slider ({data = null, action, block}) {
    let photo;
    switch (block) {
        case 1: 
            photo = document.querySelector('#slider1_image');
            break;
        case 2:
            photo = document.querySelector('#slider2_image');
            break;
        case 3:
            photo = document.querySelector('#slider3_image');
            break;
    };

    let photos = null;
    switch (block) {
        case 1: 
            photos = photos1;
            break;
        case 2: 
            photos = photos2;
            break;
        case 3: 
            photos = photos3;
            break;

    };

    const dot1 = document.querySelector('#button1');
    const dot2 = document.querySelector('#button2');
    const dot3 = document.querySelector('#button3');
    let selectedPhoto = null;

    if(data) {
        selectedPhoto = photos.find(({id}) => id === data);
    };

    if(action) {
        const currentPhoto = photos.find(({title}) => title === photo.title);
        let newPhoto = null;
        switch (action) {
            case 'next': 
                newPhoto = photos.find(({id}) => Number(id) === Number(currentPhoto.id) + 1);
                if(newPhoto) {
                    selectedPhoto = newPhoto;
                };
                break;
            case 'previous':
                newPhoto = photos.find(({id}) => Number(id) === Number(currentPhoto.id) - 1);
                if(newPhoto) {
                    selectedPhoto = newPhoto;
                };
                break;
        }
    };

    photo.src = `./images/${selectedPhoto.name}.jpg`;
    photo.alt = selectedPhoto.alt;
    photo.title = selectedPhoto.title;

    dot1.classList.remove('active');
    dot2.classList.remove('active');
    dot3.classList.remove('active');

    const dot = document.querySelector(`#button${selectedPhoto.id}`);
    dot.classList.add('active'); 

    return photo;
}