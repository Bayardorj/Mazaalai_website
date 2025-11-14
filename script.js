function loadPage(page) {
  let content = document.getElementById('content');
  let body = document.body;

  // Change background based on section
  switch (page) {
    case 'facts':
      body.style.backgroundImage = "url('image_fact.png')";
      break;
    case 'conservation':
      body.style.backgroundImage = "url('conservation.png')";
      break;
    case 'history':
      body.style.backgroundImage = "url('history.png')";
      break;
    case 'biology':
      body.style.backgroundImage = "url('biology.png')";
      break;
    case 'habitat':
      body.style.backgroundImage = "url('habitat.png')";
      break;
    default:
      body.style.backgroundImage = "url('mazaalai_2.png')";
      break;
  }

  if (page === 'home') {
      content.innerHTML = `
    <h1>This Web page introduces Mazaalai bear and the Gobi Bear Foundation which has the mission to protect the Mongolian Mazaalai bear.</h1>
    <p>This website is dedicated to raising awareness about the Mazaalai, the rare and remarkable Gobi bear of Mongolia,
       believed to be the world’s only bear subspecies adapted to life in a true desert. As one of the most endangered large mammals on the planet,
       with fewer than 60 individuals remaining in the wild, the Mazaalai’s survival hangs in a delicate balance.
       Here, you can explore in-depth information about the bear’s unique biology, including its physical adaptations, diet, and behavior that allow it to endure the extreme conditions of the Gobi Desert.</p>
       <p>You will also learn about its habitat—an unforgiving yet beautiful landscape of rocky mountains, vast gravel plains,
       and scattered oases—as well as the deep cultural significance the Mazaalai holds in Mongolian folklore and tradition,
       where it is seen as a symbol of strength, resilience, and sacred guardianship of the desert. This site also highlights
       the dedicated conservation efforts underway to protect the Mazaalai from threats such as climate change, habitat loss, and human encroachment.</p>
       <img src="org.png" alt="Home" style="height: 200px;">
  `;
    } else if (page === 'biology') {
      content.innerHTML = `<h1>Biology</h1>
      <p>The Mazaalai (Gobi bear) is a small, desert-adapted subspecies of the brown bear (Ursus arctos gobiensis), distinguished by its relatively light body weight, long legs, and pale, often sandy-colored fur that provides camouflage in the desert environment.
         Adult males weigh around 96–138 kg (210–304 lbs), while females are smaller, weighing 51–78 kg (112–172 lbs), making them notably smaller than other brown bears.
         Their diet is primarily herbivorous, consisting of roots, berries, wild rhubarb, grasses, and occasional insects or small animals, reflecting the limited food resources of the Gobi Desert.</p>
         <p>Unlike other bears that hibernate in deep dens, the Mazaalai digs shallow shelters or uses natural caves to reduce energy use during the harsh winter months, though they may not enter full hibernation due to the desert’s unpredictable climate.
         They are solitary animals with large home ranges, using their acute sense of smell to locate food and water across vast, barren landscapes. The Mazaalai reproduces slowly, with females giving birth to 1–2 cubs every 2–4 years, which contributes to their critically endangered status.
         Adapted for survival in extreme conditions, their biology reflects both the resilience and vulnerability of life in one of the world’s toughest habitats.</p>`;
    } else if (page === 'history') {
      content.innerHTML = `<h1>History</h1>
      <p>The Mazaalai, or Gobi bear, has been part of Mongolian culture and folklore for centuries, revered as a symbol of endurance, strength, and harmony with the harsh desert environment.
         Ancient nomadic tribes of the Gobi considered the bear a sacred guardian of the desert’s water sources, and traditional stories often describe the bear as a wise and elusive spirit.
         Historical accounts from travelers and explorers mention sightings of mysterious desert bears, though scientific recognition of the Mazaalai as a distinct population of brown bears came only in the 20th century.</p>
        <p> The bear’s elusive nature and rare sightings have contributed to its near-mythical status in local lore. In modern times, the Mazaalai has become a national symbol of conservation in Mongolia, protected by strict laws and the focus of research and recovery programs.
         Its presence is a point of pride for Mongolians, reflecting both the country’s natural heritage and the delicate balance between human activity and wildlife survival in one of the world’s most unforgiving landscapes.</p>`;
    } else if (page === 'facts') {
      content.innerHTML = `<h1>Fun Facts</h1> 
      <p>&#128205 World's Rarest Bear: </p>
      <p>The Mazaalai is considered the rarest bear species in the world, with an estimated population of only 40–60 individuals left in the wild.</p>
      <p>&#128205 Desert Dweller:</p>
      <p>Unlike most bears that live in forests or mountains, the Mazaalai is the only bear that lives exclusively in a desert ecosystem—the harsh Gobi Desert of Mongolia.</p>
      <p>&#128205 Extreme Survivors:</p>
      <p>These bears have adapted to survive in one of the harshest environments on Earth, where temperatures can swing from -40°C in winter to 40°C in summer, and water is scarce.</p>
      <p>&#128205 Mostly Vegetarian:</p>
      <p>Their diet is 90% plant-based, consisting mainly of roots, berries, wild rhubarb, and grasses, although they will occasionally eat insects or small animals.</p>
      <p>&#128205 Smaller and Lighter:</p>
      <p>Mazaalai bears are smaller than other brown bear subspecies, weighing about 90–120 kg (200–260 lbs), helping them conserve energy in the desert.</p>
      <p>&#128205 Sacred Symbol:</p>
      <p>In Mongolian culture, the Mazaalai is a symbol of resilience and strength and is considered a national treasure.</p>
    `;
    } else if (page === 'habitat') {
      content.innerHTML = `<h1>Habitat</h1>
      <p>The Mazaalai, or Gobi bear, inhabits the remote and arid regions of the Great Gobi Desert in southwestern Mongolia, specifically within the Great Gobi Strictly Protected Area – Zone A.
         This harsh environment is characterized by rocky mountains, gravel plains, sparse desert steppe vegetation, and extreme temperature fluctuations ranging from over 40°C in summer to below -40°C in winter.</p>
         <p>Unlike most bear species, the Mazaalai survives in a true desert ecosystem, relying heavily on a few scattered springs and oases such as Atas Bogd and Bayantooroi for water.
         Vegetation is limited and primarily consists of drought-tolerant plants like wild rhubarb, grasses, and saxaul shrubs, concentrated near seasonal water sources. The scarcity of food and water forces the bears to roam vast areas—often over thousands of square kilometers—to survive.
         This unique and fragile habitat, threatened by climate change and human activities, supports the world's only desert-adapted bear and is critical to its continued survival.</p>
      `;
    } else if (page === 'conservation') {
      content.innerHTML = `
    <h1>Conservation and research</h1>
    <p>    The Gobi bear population is restricted to 23,600 km2 in areas that are in close proximity to water sources,
     and the population is isolated from other populations by inhospitable low elevation deserts, pastoral activities,
     and human settlements. A conservation measure for the Gobi Bear has been in place since 1985, which is a supplemental feeding program involving pellets containing wheat,
     corn, and turnips which are provided in spring and autumn at feeders located near selected waterholes throughout the Great Gobi Strictly Protected Area (GGSPA). </p>
    <p>Previously, the Gobi brown bear has sometimes been classified as being in the same subspecies as the Tibetan blue bear based on geography or the Himalayan brown bear based on mitochondrial short fragments studies.
     However, the recent whole-genome and larger mitochondrial DNA analyses revealed that Gobi and Himalayan brown bears are already diverged lineages and have a shared ancestry, the oldest lineage of all other brown bears.
     A 263 base-pair segment of the mitochondrial DNA was sequenced for three bears and a single haplotype was gained. This haplotype was closely related to brown bear haplotypes from Pakistan. The low levels of genetic diversity supports the idea that the Gobi bears are isolated from other brown bear populations.
    A total of 51 bears were found during 2007–2018 based on the systematic sampling, but the population size is a relatively stable 31 based on the long-term study.</p><p>According to the Gobi Bear Project, there are fewer than 40 bears remaining in the wild and none in captivity.
    </p>
    `;
    } else if (page === 'contact') {
      content.innerHTML = `<h1>Contact</h1>
      <img src="image.png" alt="Contact" style="height: 300px;">
      <p class="contact"> &#128222 +976 9021 6767</p>
      <p class="contact"> &#128231 gobibearfoundation100@gmail.com</p>
      <p class="contact"> &#128205 Ulaanbaatar, Mongolia</p>
    <div class="social-buttons">
    <a href="https://www.facebook.com/GobibearFoundation" target="_blank" class="facebook-button">
    <i class="fab fa-facebook-f"></i> Facebook
    </a>
    <a href="https://www.instagram.com/gobi_bear_foundation" target="_blank" class="instagram-button">
    <i class="fab fa-instagram"></i> Instagram
    </a>
    </div>
    <h1>Send us a message</h1>
    <form class="contact-form" action="https://formspree.io/f/mkgrqgqw" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="_replyto" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Send Message</button>
  </form>
`;
    }
}
