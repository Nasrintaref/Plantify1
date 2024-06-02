const Page=[
    {   pageId: 0,
        pagename: "LandingPage",
        title: "Welcome to Plantify!🌿",
        subtitle: "",
        inputs: "",
        buttons: [{ text: "Login",href:"/loginPage" }, { text: "Sign Up for free",href:"/signUp"}, { text: "Continue As Guest",href:"/" }],
        images:[{src:"./LandingPage.png" ,class:"LandingPage1", alt:"LandingPage"},{src:"./logo+slogan.png", class:"logo", alt:"logo" }]
        
    },
    {
        pageId: 1,
        pagename: "SignUpPage",
        title: "Ready to give your green buddies the VIP treatment?  Sign up to Plantify and let's get growing together. Login now and let's grow🌿",
        subtitle1:"Create an account",
        subtitle2:"By creating an account, I agree to the Terms of use and Privacy Policy",
        inputs: [
            {type: "text", id: "EmailAddress", name: "EmailAddress", placeholder: "EmailAddress" },
            {type: "Password", id: "Password", name: "Password", placeholder: "Password" },
            {type:"checkbox", id: "Checkbox", name: "Checkbox" }
        ],
        buttons: [{ text: "Sign Up",href:"/home" }, { text: "Continue with Google",href:"#"}, { text: "Continue with Apple",href:"#" }],
        image1: {src: "./SignUP.jpg",class: "SignUPImg", alt: "SignUPImg" }
    },
    {
        pageId: 2,
        pagename: "LogInPage",
        title1: "Welcome back to Plantify!🌿 Let's dive back into the green magic. Login now and let's grow",
        title2:"Login",
        subtitle1:"To access your account",
        subtitle2:"Don't have an account?",
        inputs: [
            {type: "text", id: "EmailAddress", name: "EmailAddress", placeholder: "EmailAddress" },
            {type: "Password", id:"Password", name: "Password", placeholder: "Password"}
        ],
        recover: { text: "Forget your password?", href: "/forgotYourPass" },
        buttons: [
            { text: "Log in",href:"/homePage" },
            { text: "Create an account",href:"/signup" }],
        images: { src: "./Login.jpg", class: "LoginImg", alt: "LoginImg" }
    },
    {
        pageId: 3,
        pagename: "aboutUsPage",
        title: "Welcome to Plantify🌿",
        subtitle:"" ,  
        paragrphs:["We're a community of nature lovers and gardening enthusiasts, united by our shared passion for exploring and celebrating the beauty of the natural world. Our goal is to provide you with tools and knowledge to cultivate a deeper connection with nature, fostering a sense of appreciation and stewardship for our environment","Through our web, we aim to inspire and empower individuals to create lively green spaces and nurture their love for nature. We believe in nature's ability to lift our spirits, fuel creativity, and improve our well-being.","Click here to join us and cultivate your passion for plants today."],
        image1: {src: "./AboutUs.jpg", class: "img-top-right", alt: "AboutUs-Img1" }
        
        
    },
    {
        pageId: 4,
        pagename: "PlantIdPage",
        title: " Plant ID & Info",
        subtitle: "Please select one of the following options to identify your plant:",  
        buttons: [
            { text: "Select from gallery",href:"#" },
            { text: "Search by name",href:"#" }
        ],
        images:[{ src: "./Services.png", class: "PlantIdPage-img1", alt: "PlantIdPage" },
                { src: "./Services1.png", class: "PlantIdPage-img2", alt: "PlantIdPage" },
                { src: "./Services2.png", class: "PlantIdPage-img3", alt: "PlantIdPage" },
                { src: "./ScanImg.png", class: "PlantIdPage-img4", alt: "PlantIdPage" }]
        
    }
];
module.exports = Page;