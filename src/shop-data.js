//creo un file JSON per i dati (array di oggetti)
export const categories = [
    {
        title:'smartphone',
        id: 1,
        image: './categories_images/smartphone.jpg',
        url: 'shop/smartphone',
        items: [
            {
                id: 1,
                name: 'Smartphone n. 1',
                imageUrl: './items_images/smartphones/smatphone_1.jpg',
                price: 250
            },
            {
                id: 2,
                name: 'Smartphone n. 2',
                imageUrl: './items_images/smartphones/smatphone_2.jpg',
                price: 300
            },
            {
                id: 3,
                name: 'Smartphone n. 3',
                imageUrl: './items_images/smartphones/smatphone_3.jpg',
                price: 800
            },
            {
                id: 4,
                name: 'Smartphone n. 4',
                imageUrl: './items_images/smartphones/smatphone_4.jpg',
                price: 350
            },
            {
                id: 5,
                name: 'Smartphone n. 5',
                imageUrl: './items_images/smartphones/smatphone_5.jpeg',
                price: 999
            }
        ]
    },
    {
        title:'tablet',
        id: 2,
        image: './categories_images/tablet.jpg',
        url: 'shop/tablet',
        items: [
            {
                id: 6,
                name: 'Tablet n. 1',
                imageUrl: './items_images/tablet/tablet_1.avif',
                price: 500
            },
            {
                id: 7,
                name: 'Tablet n. 2',
                imageUrl: './items_images/tablet/tablet_2.jpg',
                price: 750
            },
            {
                id: 8,
                name: 'Tablet n. 3',
                imageUrl: './items_images/tablet/tablet_3.jpg',
                price: 650
            },
            {
                id: 9,
                name: 'Tablet n. 4',
                imageUrl: './items_images/tablet/tablet_4.webp',
                price: 320
            },
            {
                id: 10,
                name: 'Tablet n. 5',
                imageUrl: './items_images/tablet/tablet_5.webp',
                price: 900
            }
        ]
    },
    {
        title:'accessori',
        id: 3, 
        image: './categories_images/mobile-accessories.jpg',
        url: 'shop/accessori',
        items: [
            {
                id: 11,
                name: 'Accessorio n. 1',
                imageUrl: './items_images/accessories/caricatore.webp',
                price: 20
            },
            {
                id: 12,
                name: 'Accessorio n. 2',
                imageUrl: './items_images/accessories/caricatore_portatile.jpg',
                price: 35
            },
            {
                id: 13,
                name: 'Accessorio n. 3',
                imageUrl: './items_images/accessories/case.webp',
                price: 30
            },
            {
                id: 14,
                name: 'Accessorio n. 4',
                imageUrl: './items_images/accessories/cuffie_1.jpg',
                price: 35
            },
            {
                id: 15,
                name: 'Accessorio n. 5',
                imageUrl: './items_images/accessories/cuffie_2.jpg',
                price: 50
            }
        ]
    },
    {
        title:'fotocamere',
        id: 4,
        image: './categories_images/photocameras.jpg',
        url: 'shop/fotocamere',
        items: [
            {
                id: 16,
                name: 'Fotocamera n. 1',
                imageUrl: './items_images/photos/fotocamera_1.jpg',
                price: 800
            },
            {
                id: 17,
                name: 'Fotocamera n. 2',
                imageUrl: './items_images/photos/fotocamera_2.jpg',
                price: 950
            },
            {
                id: 18,
                name: 'Fotocamera n. 3',
                imageUrl: './items_images/photos/fotocamera_3.jpg',
                price: 1100
            },
            {
                id: 19,
                name: 'Fotocamera n. 4',
                imageUrl: './items_images/photos/fotocamera_4.jpg',
                price: 1200
            },
            {
                id: 20,
                name: 'Fotocamera n. 5',
                imageUrl: './items_images/photos/fotocamera_5.jpg',
                price: 1000
            }
        ]
    }
]