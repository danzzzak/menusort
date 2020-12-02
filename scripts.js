const menu = [
    {
      id: 1,
      title: "item1",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "item2",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "item3",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "item4",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "item5",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "item6",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "item7",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "item8",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "item9",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "item10",
      category: "new cat",
      price: 16.99,
      img: "./images/item-10.jpeg",
      desc: `askdgasdh asdgasdj asdgashugd jasgdja sdgajsdg.`,
    },
  ];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');


window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  const categories = menu.reduce(function(values, item) {
    if(!values.includes(item.category) ) {
      values.push(item.category);
    }
    return values;
  }, ['all']);
  console.log(categories);
});

//filter
filterBtns.forEach(function(btn) {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
      if(menuItem.category === category) {
      return(menuItem); // Заполняем массив нужными объектами
      }
    });

    if(category === 'all') {
      displayMenuItems(menu);
    }
    else {
      displayMenuItems(menuCategory);
    }

  });
});


function displayMenuItems(items) {
  let displayMenu = items.map(function(item) {
    return `
    <article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title}>
      <div class="item-info">
          <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
      </div>
    </article>
    `;
  });

  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

