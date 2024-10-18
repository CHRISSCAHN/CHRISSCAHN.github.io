AOS.init({
    duration: 1000,
    once: true
});

const captions = [
    {
        title: "Colosseum Rome",
        description: "The Colosseum, an ancient amphitheater in the heart of Rome, is a monumental symbol of the Roman Empire's architectural and engineering prowess. Completed in AD 80, this iconic structure once hosted gladiatorial contests and public spectacles, captivating visitors with its rich history and enduring grandeur.",
        image: "images/IMG_4.jpg"
    },
    {
        title: "Osteria Francescana (Modena)",
        description: "Osteria Francescana, located in Modena, Italy, is a world-renowned three-Michelin-starred restaurant led by chef Massimo Bottura. Known for its innovative approach to Italian cuisine, it offers a blend of traditional flavors and modern techniques, creating a unique dining experience.",
        image: "images/IMG_3.jpg"
    },
    {
        title: "Vatican",
        description: "The Vatican, the smallest independent state in the world, serves as the spiritual and administrative center of the Roman Catholic Church. Home to St. Peter's Basilica, the Sistine Chapel, and the Vatican Museums, it is a treasure trove of art and history that attracts millions of pilgrims and tourists alike each year.",
        image: "images/IMG_6.jpg"
    }
];
const destination = document.getElementById("destination");

for (let i = 0; i < captions.length; i++) {
    destination.innerHTML += ` <div class="col-md-4" data-aos="fade-up" data-aos-delay="${(i + 1) * 100}">
            <div class="card">
                <div class="img">
                    <img src="` + captions[i].image + `" alt="" class="img-fluid">
                    <div class="icon"><i class="bi bi-hdd-stack"></i></div>
                </div>
                <h2 class="title"><a href="#" class="">` + captions[i].title + `</a></h2>
                <p>` + captions[i].description + `
                </p>
            </div>
        </div>`;
}

const services = [
    {
        icon: "bi bi-compass",
        title: "Exciting Adventures",
        description: "Discover thrilling outdoor activities like hiking through scenic landscapes, cycling along historical routes, and more. Italy offers endless adventure opportunities for nature lovers and thrill-seekers alike."
    },
    {
        icon: "bi bi-bank",
        title: "Explore Cultural Heritage",
        description: "Immerse yourself in Italy’s rich cultural heritage by visiting ancient ruins, world-class museums, and iconic historical landmarks that tell the story of this incredible country."
    },
    {
        icon: "bi bi-brush",
        title: "Art & Architecture Tours",
        description: "Marvel at Italy's Renaissance masterpieces, impressive cathedrals, and iconic architectural designs. From Florence to Rome, the country is a treasure trove for art and architecture enthusiasts."
    },
    {
        icon: "bi bi-bag",
        title: "Luxury Shopping",
        description: "Shop at world-famous fashion districts in Milan, Rome, and Florence. Experience Italian craftsmanship and treat yourself to high-end fashion, bespoke accessories, and timeless luxury goods."
    },
    {
        icon: "bi bi-cup",
        title: "Gourmet Culinary Experiences",
        description: "Indulge in Italy’s culinary delights, from authentic pizza and pasta to decadent gelato. Join cooking classes or explore food tours through Italy's culinary capitals and charming local markets."
    },
    {
        icon: "bi bi-people",
        title: "Local Cultural Immersion",
        description: "Engage with locals and experience authentic Italian life through festivals, traditional performances, and local cultural tours. Discover the true essence of Italy beyond the tourist attractions."
    }
];

const service = document.getElementById("services1");

for (let i = 0; i < services.length; i++) {
    service.innerHTML += ` <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(i + 1) * 100}">
            <div class="service-item  position-relative">
                <div class="icon">
                    <i class="` + services[i].icon + `"></i>
                </div>
                <a href="" class="stretched-link">
                    <h3>` + services[i].title + `</h3>
                </a>
                <p>` + services[i].description + `</p>
            </div>
        </div>`;
}

let nav = document.getElementById("nav1");
let navbar1 = document.getElementById("navbar1");
function  openNav() {
    if (navbar1.style.backgroundColor == "")
    navbar1.style.backgroundColor = "#404C56";
    else  {
        navbar1.style.backgroundColor = "";
    }
}

function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);