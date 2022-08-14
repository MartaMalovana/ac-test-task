const photos = [
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
    },
    {
        'name': 'pop-up-gazebo-large-event',
        'alt': 'Waterproof pop up gazebos for large events',
        'title': 'Waterproof pop up gazebos for large events',
        'id': '4'
    },
    {
        'name': 'pop-up-gazebo-rugby',
        'alt': 'Waterproof pop up gazebos for sport tournaments',
        'title': 'Waterproof pop up gazebos for sport tournaments',
        'id': '5'
    },
    {
        'name': 'pop-up-gazebo-equestrian-world-cup',
        'alt': 'Waterproof pop up gazebos for sporting events',
        'title': 'Waterproof pop up gazebos for sporting events',
        'id': '6'
    },

];

function Slider ({data = null, action}) {
    const photo = document.querySelector('#slider_image');
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