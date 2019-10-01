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
    "h1": "DOM<br> Is<br> Awesome",
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

//////////////////header/////////////////////////

const links = document.querySelectorAll('header a');
links.forEach(link => {
  link.style.color = 'green';
})
for(let i = 0; i <= links.length -1; i++){
  links[i].textContent = siteContent['nav'][`nav-item-${i+1}`]
}

// links.style.color= 'green';

// hero////////////////////////////////////////

const heroImg = document.getElementById('cta-img');
heroImg.setAttribute('src', siteContent['cta']['img-src'])

const heroText = document.querySelector('.cta-text h1');
heroText.innerHTML = siteContent['cta']['h1']

const heroBtn = document.querySelector('.cta-text button');
heroBtn.textContent = siteContent['cta']['button']

// main content///////////////////////////////////

const featuresHeader = document.querySelectorAll(".top-content .text-content h4")[0];
featuresHeader.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelectorAll(".top-content .text-content p")[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutHeader = document.querySelectorAll(".top-content .text-content h4")[1];
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelectorAll(".top-content .text-content p")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];



//// img ///////////////////////////////////////////

const contentImg = document.getElementById('middle-img');
contentImg.src = siteContent['main-content']['middle-img-src']

// bottom content//////////////////////////////

const servicesHeader = document.querySelectorAll('.bottom-content .text-content h4')[0];
servicesHeader.textContent = siteContent['main-content']['services-h4'];
const servicesP = document.querySelectorAll('.bottom-content .text-content p')[0];
servicesP.textContent = siteContent['main-content']['services-content'];

const productHeader = document.querySelectorAll('.bottom-content .text-content h4')[1];
productHeader.textContent = siteContent['main-content']['product-h4'];
const productP = document.querySelectorAll('.bottom-content .text-content p')[1];
productP.textContent = siteContent['main-content']['product-content'];

const visionHeader = document.querySelectorAll('.bottom-content .text-content h4')[2];
visionHeader.textContent = siteContent['main-content']['vision-h4'];
const visionP = document.querySelectorAll('.bottom-content .text-content p')[2];
visionP.textContent = siteContent['main-content']['vision-content'];

// contact////////////////////////////////////////////////////////////////

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

const contactAdress = document.querySelectorAll('.contact p')[0];
contactAdress.textContent = siteContent['contact']['address']

const contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.textContent = siteContent['contact']['phone']

const contactEmail = document.querySelectorAll('.contact p')[2];
contactEmail.textContent = siteContent['contact']['email']

///footer//////////////////////////////////////////////////

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];



///task 3//////////////////////////////////////
const nav = document.querySelector('header nav');

const newLink1 = document.createElement('a');
newLink1.textContent = 'Hello';
newLink1.style.color = 'green';
nav.prepend(newLink1);

const newLink2= document.createElement('a');
newLink2.textContent = 'GoodBye';
newLink2.style.color = 'green';
nav.append(newLink2);