
// JavaScript array of JSON objects
const slides = [
    {
      title: 'Oferta saptamanii',
      description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      buttonText: 'Detalii',
      buttonLink: '/detalii',
      socials: [
        {
          facebook: 'https://https://www.facebook.com',
          twitter: 'https://www.twitter.com',
          youtube: 'https://www.youtube.com',
          google: 'https://www.google.com',
        }
      ],
      background: [
        {
          backgroundImage: 'bg-mountains.png',
          backgroundColor: '#444444'
        }
      ]
    },
    {
      title: '',
      description: '',
      buttonText: 'Detalii',
      buttonLink: '/detalii',
      socials: [
        {
          facebook: '',
          twitter: 'https://www.twitter.com',
          youtube: 'https://www.youtube.com',
          google: '',
        }
      ],
      background: [
        {
          backgroundImage: '',
          backgroundColor: '#444444'
        }
      ]
    },
    {
      title: 'Oferta saptamanii',
      description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      buttonText: 'Detalii',
      buttonLink: '/detalii',
      background: [
        {
          backgroundImage: 'bg-bora-bora.png',
          backgroundColor: '#444444'
        }
      ]
    },
    {
      title: 'Oferta saptamanii',
      description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      buttonText: '',
      buttonLink: '',
      socials: [
        {
          facebook: 'https://www.facebook.com',
          twitter: 'https://www.twitter.com',
          youtube: 'https://www.youtube.com',
          google: '',
        }
      ],
      background: [
        {
          backgroundImage: '',
          backgroundColor: '#444444'
        }
      ]
    }
  ];

  // Iterate over the array and create the HTML for each carousel item

  let html = '';
  slides.forEach(item => {
    html += '<div class="container g-0">';
    html += '<div class="slide-wrapper container g-0">';
    html += '<div class="elements-wrapper">';
    html += `<h3 style="display: ${item.title ? 'block' : 'none'}">${item.title || ''}</h3>`;
    html += `<p style="display: ${item.description ? 'block' : 'none'}">${item.description || ''}</p>`;
    html += `<a style="display: ${item.buttonLink ? 'block' : 'none'}" href="${item.buttonLink}"><i class="font-icon icon-star">&#xe802;</i> Detalii</a>`;
    html += '</div>';
    if (Array.isArray(item.socials)) {
      html += '<ul class="socials">';
      item.socials.forEach(social => {
        html += `<li style="display: ${social.facebook ? 'block' : 'none'}"><a href="${social.facebook}"><i class="font-icon icon-facebook">&#xf09a;</i></a></li>`;
        html += `<li style="display: ${social.twitter ? 'block' : 'none'}"><a href="${social.twitter}"><i class="font-icon icon-twitter">&#xf302;</i></a></li>`;
        html += `<li style="display: ${social.youtube ? 'block' : 'none'}"><a href="${social.youtube}"><i class="font-icon icon-youtube">&#xf167;</i></a></li>`;
        html += `<li style="display: ${social.google ? 'block' : 'none'}"><a href="${social.google}"><i class="font-icon icon-gplus">&#xf05a;</i></a></li>`;
      });
      html += '</ul>';
    }
    html += '</div>';
    item.background.forEach(nestedItem => {
      html += `<div class="bg-img img-responsive" style="background-image: url('assets/img/${nestedItem.backgroundImage}'); background-color: ${nestedItem.backgroundColor || '#444444'};"></div>`;
    });
    html += '</div>';
  });


  // Add the HTML for the carousel items to the container element
  document.getElementById('carousel').innerHTML = html;

  // Initialize the carousel
  $('#carousel').owlCarousel({
    loop: true,
    nav: true, 
    dots: false,
    navText: [
      "<div class='nav-button owl-prev'><i class='font-icon icon-left-open'>&#xe805;</i></div>",
      "<div class='nav-button owl-next'><i class='font-icon icon-right-open'>&#xe804;</i></div>",
    ],
    responsive: { 
      0: {
        items: 1 
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

// Menu dropdown 

  $('.dropdown-toggle').click((e) => {
    e.preventDefault();
    $('.dropdown-menu').slideToggle(500);
    $('.rotate').toggleClass('active');
    $('.dropdown-toggle').toggleClass('active');
  });

  // Form submitted 

  $('#submit-button').click((event) => {
    event.preventDefault(); // Prevent the form from submitting
    alert('Formularul a fost trimis!');
  });