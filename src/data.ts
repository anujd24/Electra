type Product = {
    id:number,
    title:string,
    desc?:string,
    img?:string,
    price:number,
    options?: {title:string; additionalPrice: number}[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        id:1,
        title: "air fryer",
        desc: "Fry your soggy foods to get original taste!",
        img:"/airf.jpg",
        price: 2500,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:2,
        title: "Headphones",
        desc: "Listen out your fav songs passionately!",
        img:"/headphones.jpeg",
        price: 1500,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:3,
        title: "Mouse",
        desc: "Smoother experience on your computer!",
        img:"/mouse.jpeg",
        price: 800,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:4,
        title: "Microwave",
        desc: "Hot, Hot and Hotter!",
        img:"/microwave.jpeg",
        price: 5000,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:1,
        title: "air fryer",
        desc: "Fry your soggy foods to get original taste!",
        img:"/airf.jpg",
        price: 2500,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:1,
        title: "air fryer",
        desc: "Fry your soggy foods to get original taste!",
        img:"/airf.jpg",
        price: 2500,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    }
]