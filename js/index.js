const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav

const services = document.querySelector('a:nth-of-type(1)');
services.textContent = 'Services';
const product = document.querySelector('a:nth-of-type(2)');
product.textContent = 'Product';
const vision = document.querySelector('a:nth-of-type(3)');
vision.textContent = 'Vision';
const features = document.querySelector('a:nth-of-type(4)');
features.textContent = "Features";
const about = document.querySelector('a:nth-of-type(5)');
features.textContent = 'About';
const contact = document.querySelector('a:nth-of-type(6)');

//cta

const header = document.querySelector('h1');
header.textContent = (siteContent['cta']['h1']);
const button = document.querySelector('button');
button.textContent = (siteContent['cta']['button']);
const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);


const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//contenttitles

const topContent = document.querySelector('.top-content')
const topText = topContent.querySelector('.text-content')
const topText2 = topText.nextElementSibling
console.log(topText)
const featuresContent = topText.querySelector('p');
featuresContent.textContent = (siteContent['main-content']['features-content']);
const h4Content = topText.querySelector('h4')
h4Content.textContent = (siteContent['main-content']['features-h4'])
const aboutContent = topText2.querySelector('p');
aboutContent.textContent = (siteContent['main-content']['about-content']);
const h4about = topText2.querySelector('h4');
h4about.textContent = (siteContent['main-content']['about-h4'])



const botContent = document.querySelector('.bottom-content')
const botText = botContent.querySelector('.text-content')
const botText2 = botText.nextElementSibling
const botText3 = botText2.nextElementSibling

const servicesContent = botText.querySelector('p');
servicesContent.textContent = (siteContent['main-content']['services-content']);
const h4services = botText.querySelector('h4')
h4services.textContent = (siteContent['main-content']['services-h4'])
const productContent = botText2.querySelector('p');
productContent.textContent = (siteContent['main-content']['product-content']);
const h4product = botText2.querySelector('h4')
h4product.textContent = (siteContent['main-content']['product-h4'])
const visionContent = botText3.querySelector('p');
visionContent.textContent = (siteContent['main-content']['vision-content']);
const h4vision = botText3.querySelector('h4')
h4vision.textContent = (siteContent['main-content']['vision-h4'])

const footContract = document.querySelector('.contact')
const foot1 = footContract.querySelector('h4')
const foot2 = footContract.querySelector('p')
const foot3 = foot2.nextElementSibling
const foot4 = foot3.nextElementSibling

foot1.textContent = (siteContent['contact']['contact-h4'])
foot2.textContent = (siteContent['contact']['address'])
foot3.textContent = (siteContent['contact']['phone'])
foot4.textContent = (siteContent['contact']['email'])

const footfooter = document.querySelector('footer')
const footfooter2 = footfooter.querySelector('p')

footfooter2.textContent = (siteContent['footer']['copyright'])
