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
        id:5,
        title: "Laptop cooling pad",
        desc: "Cool down your device!",
        img:"/coolingPad.jpg",
        price: 3700,
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
        id:6,
        title: "Air Conditioner",
        desc: "Just Chill!",
        img:"/airCond.jpg",
        price: 35000,
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

type Menu = {
    id:number,
    slug:string,
    title:string,
    desc?:string,
    img?:string,
    color:string
}[];

export const menu: Menu = [
    {
        id:1,
        slug: "Laptops",
        title:"Dell Inspiron 15",
        desc:"start your coding career with Dell Inspiron 15!",
        img:"/menuLappy.jpg",
        color:"grey"
    },
    {
        id:2,
        slug: "Television",
        title:"Home Theatre",
        desc:"Watch your fav shows like in the theatres!",
        img:"/menuTv.jpg",
        color:"Black"
    },
    {
        id:3,
        slug: "Phone",
        title:"Vivo Y15s",
        desc:"Be yourself with Vivo Y15s",
        img:"/menuPhone.jpg",
        color:"Blue"
    },
]    