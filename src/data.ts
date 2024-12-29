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
        id:1,
        title: "Headphones",
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