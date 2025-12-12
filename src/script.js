const items = [
  {
    name: "bike front rack",
    url: "https://www.somafabshop.com/shop/soma-rack-lucas-3-front-4817",
    imgsrc:
      "https://www.somafabshop.com/web/image/product.product/9339/image_1024/%5B18516%5D%20Soma%20Rack%20Lucas%203%20Front%20%28Alloy%20Silver%20%29?unique=a11fc20",
    description: "a better front rack for the commuter; alloy silver",
  },
  {
    name: "bike rear rack",
    url: "https://www.somafabshop.com/shop/soma-rear-rack-rakku-2-alloy-6542?category=954&search=soma#attr=2505",
    imgsrc:
      "https://www.somafabshop.com/web/image/product.image/1363/image_1024/Soma%20Rear%20Rack%20Rakku%20II%20-%20Alloy?unique=ebdc756",
    description:
      "this would match the front rack, it is out of stock on Soma's site though :( it may be available elsewhere; silver",
  },
  {
    name: "bike light",
    url: "https://www.outboundlighting.com/products/detour",
    imgsrc:
      "https://www.outboundlighting.com/cdn/shop/products/road-bike-light-detour-bike-light-39947439505665_1800x1800.jpg?v=1764684425",
    description:
      "a nice bike light made in Chicago. my bike light is not great.",
  },
  {
    name: "tank top",
    url: "https://outlier.nyc/collections/shirts/dp-helix-loose-tank?Color=Matteblack&Size=M",
    imgsrc:
      "https://cdn.shopify.com/s/files/1/0065/5055/2666/files/LC_FLATS_OCT_30_DPHelix_TANK_Black0053.jpg?v=1762372364&width=1600&height=1600&crop=center",
    description: "for biking in and also wearing; black and medium",
  },
  {
    name: "patagonia baggies",
    url: "https://www.patagonia.com/product/mens-baggies-shorts-5-inch/57022.html?dwvar_57022_color=PMGR",
    imgsrc:
      "https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw9011000a/images/hi-res/57022_PMGR.jpg?sw=1024&sh=1024&sfrm=png&q=90&bgcolor=f3f4ef",
    description:
      "for biking in and also wearing; plume grey 'cause they're on sale I guess, 5in, medium",
  },
  {
    name: "LOK",
    url: "https://www.blazgracar.com/lok",
    imgsrc:
      "https://static.wixstatic.com/media/23d61b_61f6888456c74ba59f02b3d3fcfbe33b~mv2.jpg/v1/crop/x_0,y_58,w_1800,h_1507/fill/w_496,h_415,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Header3.jpg",
    description:
      "cool looking puzzle book, the shipping from slovenia is like 3x the cost of the book (thanks obama), but the pdf is free and could probably be printed in a nice spiral bound book domestically",
  },
  {
    name: "OXO Rapid Brewer",
    url: "https://www.oxo.com/rapid-brewer.html",
    imgsrc:
      "https://www.oxo.com/media/catalog/product/cache/d30d9849f326102f12e0e92b779dd408/b/r/brew_8722500_rapid-brewer_pdp_03_1.jpg",
    description:
      'coffee brewer that makes something between espresso and filter, a little like an aeropress. normal coffee people on the internet call the substance "soup"',
  },
  {
    name: "Curious Coffee",
    url: "https://www.curious-coffee.com/",
    imgsrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Fupload%2Fc_limit%2Cq_75%2Cw_1200%2Fv1%2Fcrm%2Fannarbor%2FIMG_6121_D0D1EE32-F7FF-EA09-92BB0FFDC403413D-d0d1ebdfb862c63_d0d1f6dc-b3e5-76ad-5a6110af936c2992.jpg&f=1&nofb=1&ipt=4c2083404d91761bcac2aa380bdc1a809b3a96ba4994657a86d8bccf53c448b1",
    description: "I trust any coffees from here",
  },
  {
    name: "Satantango",
    url: "https://unabridgedbookstore.com/book/9780811220897",
    imgsrc: "https://images.booksense.com/images/897/220/9780811220897.jpg",
    description:
      "I've seen the 7 and a half hour movie adaptation, maybe I can finish the book quicker than that. a farming commune collapses.",
  },
  {
    name: "House of Leaves",
    url: "https://unabridgedbookstore.com/book/9780375703768",
    imgsrc: "https://images.booksense.com/images/768/703/9780375703768.jpg",
    description:
      "tried reading this from the library, but it is both long and in-demand. spooky house book.",
  },
  {
    name: "Gérard Garouste | Exhibition Catalogue",
    url: "https://boutique.centrepompidou.fr/en/product/22630-gerard-garouste-exhibition-catalogue.html",
    imgsrc:
      "https://boutique.centrepompidou.fr/files/products/22630/40591-dcba2542-xl/products-40591.jpg",
    description:
      "regretted not getting this when I saw the exhibit at the Pompidou. no idea what the shipping to US situation is like; english please",
  },
  {
    name: "Daido Moriyama: Quartet",
    url: "https://shop.getty.edu/products/daido-moriyama-quartet-979-8887120096",
    imgsrc:
      "https://shop.getty.edu/cdn/shop/files/9798887120096_46a0fa2e-2d6e-48a8-a2e0-5c4dea4a0bf3_5000x.jpg?v=1755713296",
    description:
      "new compilation of photobooks from a famed Japanese photographer. crunchy, contrasty black and white images.",
  },
  {
    imgsrc:
      "https://www.shutterstock.com/shutterstock/photos/2401979743/display_1500/stock-photo-books-flying-over-stacks-on-white-background-2401979743.jpg",
    description:
      "any books or movies or cds or records you like and think I would maybe also like",
  },
  {
    name: "Donations to Chicago Food Depository",
    url: "https://www.chicagosfoodbank.org/",
    imgsrc:
      "https://www.chicagosfoodbank.org/wp-content/uploads/2022/08/logo-full-celery.svg",
    description: "food for Chicagoans :)",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#item-list");
  items.forEach((item) => {
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newBr = document.createElement("br");
    const newA = document.createElement("a");
    const newP = document.createElement("p");

    newImg.src = item.imgsrc;
    newA.href = item.url;
    newA.textContent = item.name;
    newP.textContent = item.description;

    newLi.appendChild(newImg);
    newLi.appendChild(newBr);
    newLi.appendChild(newA);
    newLi.appendChild(newP);

    list.appendChild(newLi);
  });
});
