/* content.js: everything the photography site shows lives in this file.
   Edit here; index.html / site.js never need to change for new photos or
   entries.

   Adding a photograph
   -------------------
   1. Drop the file into images/<year>/ (any name, .jpg/.jpeg/.png/.webp).
   2. Add one line to the matching year in YEARS below:
        { title: 'Caption', place: 'Where', src: 'images/2025/file.jpg', ar: '3/2' }
      ar is the width/height ratio the frame reserves before the image
      loads: '3/2' landscape, '2/3' portrait, '1/1' square, '16/9' wide.
      Until the file exists the frame renders as a labelled empty slot, so
      the layout can be checked before the pictures arrive.

   Adding a journal entry
   ----------------------
   Add an object to POSTS. `cover` is the lead photograph (`ar` is its
   width/height, as for the photographs above), `excerpt` the
   teaser shown in the list and on the front page, `paras` the body. The
   first POSTS entry is the front-page lead story, so keep the newest first.
   `id` becomes the address: #/journal/<id>.
*/

const SITE = {
  brand: 'Far From Home',   // the site's name, top-left and in the browser tab
  name: 'Arindam',       // the byline, and the copyright line in the footer
  tagline: 'Travel & photography',   // the left half of the masthead strip
  // Where the "Main site" links point (the research site, a separate site
  // now, so this is its full URL).
  mainSite: 'https://arindampanda.github.io/website/',
  links: {
    instagram: 'https://www.instagram.com/toarindam/',
    x: 'https://x.com/arindam_p13',
    github: 'https://github.com/arindamPanda',
  },
  // Contact form posts to this address via the visitor's mail client.
  // Leave '' to hide the form and show the social links only.
  email: '',
};

/* Photographs, newest group first. `note` is the line beside the big
   heading on the Photography page. A group's label need not be a year:
   "Frames" at the end holds the undated gallery. `ar` is the frame's
   width/height, taken from the file itself so nothing is cropped. */
const YEARS = [
  { label: '2026', note: 'The IIT Bombay campus, August and September.', photos: [
    { title: 'A clearing in the canopy', place: 'IIT Bombay', src: 'images/2026/canopy-opening.jpg', ar: '3/4' },
    { title: 'Palms against a monsoon sky', place: 'IIT Bombay', src: 'images/2026/palms.jpg', ar: '3/4' },
    { title: 'Red leaves in the undergrowth', place: 'IIT Bombay', src: 'images/2026/red-leaves.jpg', ar: '1/1' },
    { title: 'Branches, looking up', place: 'IIT Bombay', src: 'images/2026/canopy.jpg', ar: '3/4' },
    { title: 'The road under the trees, evening', place: 'IIT Bombay', src: 'images/2026/road-evening.jpg', ar: '3/4' },
  ]},
  { label: '2025', note: 'Orchha and Jhansi in September, Regensburg and Munich in March.', photos: [
    { title: 'Chhatri, reflected', place: 'Orchha', src: 'images/2025/orchha-chhatri-pool.jpg', ar: '3/4' },
    { title: 'The chhatris of the Bundela kings', place: 'Orchha', src: 'images/2025/orchha-chhatris.jpg', ar: '3/4' },
    { title: 'Chhatri above the Betwa', place: 'Orchha', src: 'images/2025/orchha-betwa.jpg', ar: '89/100' },
    { title: 'Raja Mahal from the Chaturbhuj Temple', place: 'Orchha', src: 'images/2025/orchha-raja-mahal.jpg', ar: '4/3' },
    { title: 'The Chaturbhuj Temple from the Raja Mahal', place: 'Orchha', src: 'images/2025/orchha-from-raja-mahal.jpg', ar: '4/3' },
    { title: 'Corridor, Raja Mahal', place: 'Orchha', src: 'images/2025/orchha-corridor.jpg', ar: '3/4' },
    { title: 'Gateway, Rani Mahal', place: 'Jhansi', src: 'images/2025/jhansi-rani-mahal.jpg', ar: '3/4' },
    { title: 'The Danube at Regensburg', place: 'Regensburg', src: 'images/2025/regensburg-danube.jpg', ar: '4/3' },
    { title: 'The river through a ring', place: 'Regensburg', src: 'images/2025/regensburg-ring.jpg', ar: '3/4' },
    { title: 'Statue on the Old Stone Bridge', place: 'Regensburg', src: 'images/2025/regensburg-bridge-statue.jpg', ar: '3/4' },
    { title: 'Walhalla', place: 'Donaustauf', src: 'images/2025/walhalla.jpg', ar: '4/3' },
    { title: 'Sun through bare trees', place: 'Donaustauf', src: 'images/2025/walhalla-trees.jpg', ar: '3/4' },
    { title: 'Nymphenburg Palace', place: 'Munich', src: 'images/2025/nymphenburg.jpg', ar: '4/3' },
  ]},
  { label: '2024', note: 'Raisen Fort in the monsoon.', photos: [
    { title: 'Gateway, Raisen Fort', place: 'Raisen', src: 'images/2024/raisen-gateway.jpg', ar: '3/4' },
    { title: 'The steps up', place: 'Raisen', src: 'images/2024/raisen-steps.jpg', ar: '3/4' },
    { title: 'Arch and chhatri', place: 'Raisen', src: 'images/2024/raisen-arch.jpg', ar: '3/4' },
    { title: 'Ruins in the rain', place: 'Raisen', src: 'images/2024/raisen-ruins.jpg', ar: '3/4' },
    { title: 'Inside the walls', place: 'Raisen', src: 'images/2024/raisen-inside.jpg', ar: '3/4' },
    { title: 'Ramparts', place: 'Raisen', src: 'images/2024/raisen-ramparts.jpg', ar: '4/3' },
    { title: 'An offering on the rock', place: 'Raisen', src: 'images/2024/raisen-offering.jpg', ar: '3/4' },
  ]},
  { label: '2023', note: 'Temple towns of Tamil Nadu, and Dhanushkodi.', photos: [
    { title: 'Brihadeeswara Temple', place: 'Thanjavur', src: 'images/2023/thanjavur-vimana.jpg', ar: '3/4' },
    { title: 'The way in, Brihadeeswara Temple', place: 'Thanjavur', src: 'images/2023/thanjavur-gateway.jpg', ar: '4/3' },
    { title: 'Sri Ranganathaswamy Temple', place: 'Tiruchirappalli', src: 'images/2023/trichy-gopuram.jpg', ar: '150/139' },
    { title: 'Meenakshi Amman Temple over the street', place: 'Madurai', src: 'images/2023/madurai-1.jpg', ar: '3/4' },
    { title: 'At the gate, Meenakshi Amman Temple', place: 'Madurai', src: 'images/2023/madurai-2.jpg', ar: '4/3' },
    { title: 'Lunch on a banana leaf', place: 'Madurai', src: 'images/2023/madurai-meal.jpg', ar: '1800/1241' },
    { title: 'Ramanathaswamy Temple', place: 'Rameswaram', src: 'images/2023/rameswaram-gopuram.jpg', ar: '3/4' },
    { title: 'Gopuram at night', place: 'Rameswaram', src: 'images/2023/rameswaram-night.jpg', ar: '3/4' },
    { title: 'Where two seas meet', place: 'Dhanushkodi', src: 'images/2023/dhanushkodi.jpg', ar: '4/3' },
    { title: 'Shore Temple', place: 'Mahabalipuram', src: 'images/2023/mahabalipuram-1.jpg', ar: '3/4' },
    { title: 'The temple across the green', place: 'Mahabalipuram', src: 'images/2023/mahabalipuram-2.jpg', ar: '4/3' },
  ]},
  { label: '2022', note: 'Snow at Hamta Pass in June, Ranthambore in October, the marble cliffs of Bhedaghat in December.', photos: [
    { title: 'Into the Rani nallah valley', place: 'Hamta Pass', src: 'images/2022/hamta-chika.jpg', ar: '4/3' },
    { title: 'Waterfall, first day', place: 'Hamta Pass', src: 'images/2022/hamta-waterfall.jpg', ar: '3/4' },
    { title: 'The stream below the pass', place: 'Hamta Pass', src: 'images/2022/hamta-stream.jpg', ar: '3/4' },
    { title: 'Camp, second night', place: 'Hamta Pass', src: 'images/2022/hamta-camp.jpg', ar: '4/3' },
    { title: 'The valley below the pass', place: 'Hamta Pass', src: 'images/2022/hamta-valley.jpg', ar: '4/3' },
    { title: 'Crossing the snowfield', place: 'Hamta Pass', src: 'images/2022/hamta-snowfield.jpg', ar: '4/3' },
    { title: 'The ridge on the way to the pass', place: 'Hamta Pass', src: 'images/2022/hamta-ridge.jpg', ar: '475/514' },
    { title: 'The peak in cloud above the snow', place: 'Hamta Pass', src: 'images/2022/hamta-peak.jpg', ar: '483/520' },
    { title: 'From the pass, last light on the peaks', place: 'Hamta Pass', src: 'images/2022/hamta-pass-view.jpg', ar: '239/256' },
    { title: 'Down the Chandra valley', place: 'Hamta Pass', src: 'images/2022/hamta-descent.jpg', ar: '3/4' },
    { title: 'A cairn on the way down', place: 'Hamta Pass', src: 'images/2022/hamta-cairn.jpg', ar: '3/4' },
    { title: 'Wildflowers', place: 'Hamta Pass', src: 'images/2022/hamta-flowers.jpg', ar: '4/3' },
    { title: 'The Beas', place: 'Manali', src: 'images/2022/manali-beas.jpg', ar: '4/3' },
    { title: 'Snow above the valley', place: 'Manali', src: 'images/2022/manali-peaks.jpg', ar: '4/3' },
    { title: 'Hadimba Temple', place: 'Manali', src: 'images/2022/manali-hadimba.jpg', ar: '4/3' },
    { title: 'Deodars', place: 'Manali', src: 'images/2022/manali-deodars.jpg', ar: '3/4' },
    { title: 'Ruins in the jungle', place: 'Ranthambore', src: 'images/2022/ranthambore-ruins.jpg', ar: '4/3' },
    { title: 'Evening over the plateau', place: 'Ranthambore', src: 'images/2022/ranthambore-plateau.jpg', ar: '600/277' },
    { title: 'The lake at sunset', place: 'Ranthambore', src: 'images/2022/ranthambore-lake.jpg', ar: '600/277' },
    { title: 'Dhuandhar Falls', place: 'Bhedaghat', src: 'images/2022/bhedaghat-falls.jpg', ar: '4/3' },
    { title: 'The marble rocks', place: 'Bhedaghat', src: 'images/2022/bhedaghat-marble.jpg', ar: '4/3' },
    { title: 'Down the Narmada', place: 'Bhedaghat', src: 'images/2022/bhedaghat-narmada.jpg', ar: '3/4' },
    { title: 'Balancing Rock', place: 'Jabalpur', src: 'images/2022/jabalpur-balancing-rock.jpg', ar: '3/4' },
  ]},
  { label: '2021', note: 'A winter safari into the Churna range of Satpura.', photos: [
    { title: 'Sambar in the grass', place: 'Churna, Satpura', src: 'images/2021/churna-sambar.jpg', ar: '360/281' },
    { title: 'Deer in the open forest', place: 'Satpura', src: 'images/2021/churna-deer.jpg', ar: '1800/943' },
    { title: 'Water lily', place: 'Satpura', src: 'images/2021/churna-lily.jpg', ar: '225/184' },
    { title: 'The river at Churna', place: 'Satpura', src: 'images/2021/churna-river.jpg', ar: '3/2' },
    { title: 'Still water', place: 'Satpura', src: 'images/2021/churna-still-water.jpg', ar: '3/2' },
    { title: 'A tree in the dry forest', place: 'Satpura', src: 'images/2021/churna-tree.jpg', ar: '285/199' },
  ]},
  { label: 'Frames', note: 'Various dates. Skies, water and small creatures.', photos: [
    { title: 'Nature\'s tears are the most beautiful jewelry.', place: '', src: 'images/frames/image1.jpg', ar: '4/3' },
    { title: 'A winter gem waiting for the first light.', place: '', src: 'images/frames/image2.jpg', ar: '3/4' },
    { title: 'Turning a soft golden morning into cotton clouds ablaze.', place: '', src: 'images/frames/image3.jpg', ar: '3/4' },
    { title: 'Matching the scorching noon heat with a blaze of its own.', place: '', src: 'images/frames/image4.jpg', ar: '4/3' },
    { title: '"Nut-thing" to see here, just having a snack.', place: '', src: 'images/frames/image5.jpg', ar: '4/3' },
    { title: 'From spongy white calm to fiery red chaos.', place: '', src: 'images/frames/image6.jpg', ar: '3/4' },
    { title: 'Soaking in the final golden glow of the afternoon.', place: '', src: 'images/frames/image7.jpg', ar: '4/3' },
    { title: 'The horizon holds the day\'s last burning ember, while the rest of world breathes cool.', place: '', src: 'images/frames/image8.jpeg', ar: '4/3' },
    { title: 'A warm glow breaking the silence of the dark.', place: '', src: 'images/frames/image9.jpg', ar: '4/3' },
  ]},
];

/* Journal entries, newest first. The first one is the front-page lead. */
const POSTS = [
  { id: 'orchha', title: 'The chhatris of Orchha', date: 'September 2025', place: 'Orchha & Jhansi',
    cover: 'images/2025/orchha-chhatris.jpg', ar: '3/4',
    excerpt: 'Rani Mahal in Jhansi on the way in, then Orchha: the Raja Mahal, the Chaturbhuj Temple seen from its terraces, and the chhatris of the Bundela kings along the river.',
    paras: [
      'Orchha was the Bundela capital on the Betwa from 1531 until 1783, when the court moved to Tikamgarh and left the town much as it stood. Its Ram Raja Temple is the only temple in India where Rama is worshipped as a king: police are posted as his guard and an official guard of honour is given. The Chaturbhuj temple built to house that image still has an empty sanctum, because the image never left the palace. Bir Singh Deo, who raised the Jahangir Mahal here and the fort at Jhansi in 1613, was given the throne in 1605 for killing Akbar\'s minister Abul Fazl three years earlier. Along Kanchana Ghat stand the chhatris of the Bundela rulers, memorials rather than graves, counted as fourteen or fifteen depending on the source. India has placed the historic ensemble of Orchha on the UNESCO World Heritage tentative list.',
    ],
    sources: [
      { label: 'UNESCO World Heritage Centre, tentative list: Historic Ensemble of Orchha', url: 'https://whc.unesco.org/en/tentativelists/6404/' },
      { label: 'Ministry of Tourism, Incredible India: Ram Raja Mandir, Orchha', url: 'https://www.incredibleindia.gov.in/en/madhya-pradesh/orchha/ram-raja-mandir' },
      { label: 'Ministry of Tourism, Incredible India: the chhatris of Orchha', url: 'https://www.incredibleindia.gov.in/en/madhya-pradesh/orchha/chattris' },
      { label: 'Ministry of Tourism, Incredible India: Rai Parveen Mahal', url: 'https://www.incredibleindia.gov.in/en/madhya-pradesh/orchha/rai-parveen-mahal' },
      { label: 'District Administration, Jhansi: history of the fort', url: 'https://jhansi.nic.in/history/' },
      { label: 'Live History India: Orchha and the murder of Abul Fazl', url: 'https://www.livehistoryindia.com/story/places/dd-3' },
      { label: 'Outlook Traveller: the murals of Orchha\'s Laxmi Narayan temple', url: 'https://www.outlooktraveller.com/experiences/heritage/in-pictures-the-painterly-interiors-of-orchhas-lakshmi-temple' },
    ] },
  { id: 'regensburg', title: 'Spring meeting on the Danube', date: 'March 2025', place: 'Regensburg & Munich',
    cover: 'images/posts/regensburg.jpg', ar: '4/3',
    excerpt: 'Mumbai to Doha to Regensburg for the DPG Spring Meeting: the old stone bridge over the Danube, the Walhalla above it, and Nymphenburg Palace in Munich on the way home.',
    paras: [
      'The DPG Spring Meeting put us in a town whose old quarter, the bridge included, has been a UNESCO World Heritage Site since 2006. Work on the Stone Bridge began in 1135, which makes it the oldest surviving bridge in Germany; it runs about three hundred metres over the Danube on sixteen arches and was the only dependable crossing here for close to eight hundred years, until 1935. Halfway across, a small stone figure called the Bruckmandl sits on the parapet looking towards the cathedral. Local legend has the bridge builder and the cathedral builder racing each other, with the devil bargained into helping and then cheated of his payment. The figure there now went up in 1854 and is the third of its line, the first having been destroyed in 1579. Upriver at Donaustauf stands the Walhalla, built for Ludwig I of Bavaria by Leo von Klenze between 1830 and 1842, shaped after the Parthenon and named after the hall of the slain in Norse myth.',
    ],
    sources: [
      { label: 'Regensburg Tourism: the Stone Bridge', url: 'https://tourismus.regensburg.de/en/experience-discover/sightseeing-unesco-world-heritage/stone-bridge' },
      { label: 'Regensburg Tourism: the Bruckmandl and its legend', url: 'https://tourismus.regensburg.de/en/special-themes/attractions/regensburgs-originals/stone-bridge.html' },
      { label: 'Bavarian Palace Department: Walhalla', url: 'https://www.schloesser.bayern.de/deutsch/schloss/objekte/walhalla.htm' },
    ] },
  { id: 'raisen', title: 'Raisen Fort', date: 'August 2024', place: 'Raisen, Madhya Pradesh',
    cover: 'images/posts/raisen.jpg', ar: '3/4',
    excerpt: 'The hill fort above Raisen in the monsoon: gateways, ramparts and wet stone steps.',
    paras: [
      'The fort on the hill above Raisen was held in 1542 by Puran Mal when Sher Shah Suri laid siege to it, and the siege ran about six months into January 1543. Sher Shah\'s guns eventually forced terms, and he gave a written assurance that Puran Mal and his people would suffer no injury in person or property, on which they came out of the fort. What happened next is the part the chronicles disagree about. Sher Shah did withdraw as agreed, but petitioners from Chanderi then came to him with accusations against Puran Mal, and he sent troops after the departing party. Abbas Sarwani records that Puran Mal killed his own wife and ordered his captains to do the same before the Afghans fell on them; Badayuni puts the dead at around ten thousand. Raisen district also holds two UNESCO World Heritage sites, the stupas at Sanchi and the painted rock shelters at Bhimbetka.',
    ],
    sources: [
      { label: 'Siege of Raisen, 1542 to 1543', url: 'https://en.wikipedia.org/wiki/Siege_of_Raisen_(1542%E2%80%931543)' },
      { label: 'Puran Mal of Raisen', url: 'https://en.wikipedia.org/wiki/Puran_Mal' },
      { label: 'Madhya Pradesh Tourism: the state\'s UNESCO World Heritage sites', url: 'https://www.mptourism.com/UNESCO-world-heritage-sites-madhya-pradesh.html' },
    ] },
  { id: 'tamil-nadu', title: 'Temple towns of the south', date: 'December 2023', place: 'Tamil Nadu',
    cover: 'images/posts/tamil-nadu.jpg', ar: '3/4',
    excerpt: 'Chennai, then the great temples at Thanjavur, Tiruchirappalli, Madurai and Rameswaram, out to Dhanushkodi where the Bay of Bengal meets the Indian Ocean, and back by way of Mahabalipuram.',
    paras: [
      'The Brihadeeswara temple at Thanjavur was completed in 1010 under Rajaraja I and is the oldest of the three Great Living Chola Temples, inscribed by UNESCO in 1987 and extended in 2004. Its tower rises about 216 feet, and the cupola at the top sits on a single granite block weighing some eighty tonnes. Guides here will often tell you the tower casts no shadow on the ground at noon. It does: around midday the shadow falls on the temple\'s own plinth and walls rather than on the open ground beyond, which is a matter of how the courtyard was laid out rather than anything stranger. At the other end of the trip, Dhanushkodi is empty for a reason. A cyclone crossed on the night of 22 to 23 December 1964 with a storm surge over seven metres, took the Pamban to Dhanushkodi passenger train with about two hundred people aboard, killed at least eight hundred in the town, and the town was never rebuilt.',
    ],
    sources: [
      { label: 'UNESCO World Heritage Centre: Great Living Chola Temples', url: 'https://whc.unesco.org/en/list/250/' },
      { label: 'Brihadisvara Temple, Thanjavur', url: 'https://en.wikipedia.org/wiki/Brihadisvara_Temple,_Thanjavur' },
      { label: 'The 1964 Rameswaram cyclone', url: 'https://en.wikipedia.org/wiki/1964_Rameswaram_cyclone' },
      { label: 'On checking the shadowless claim at Thanjavur', url: 'https://anuragiyer.wordpress.com/2014/09/20/the-truth-behind-the-shadowless-big-temple/' },
    ] },
  { id: 'jabalpur', title: 'Marble rocks at Bhedaghat', date: 'December 2022', place: 'Jabalpur',
    cover: 'images/posts/jabalpur.jpg', ar: '4/3',
    excerpt: 'The Rani Durgavati Museum, the Balancing Rock, Madan Mahal Fort, and the Narmada between the marble cliffs of Bhedaghat.',
    paras: [
      'The Narmada runs for about three kilometres through a gorge of marble and dolomite at Bhedaghat, dropping into it at the Dhuandhar falls, and at one point, Bandar Kodini, the walls close in far enough that monkeys are said to cross overhead. The geology here did more than make a view. In 1828 William Sleeman collected a fossil from the Lameta beds nearby that became the holotype of Titanosaurus indicus, the first dinosaur named from India. India put Bhedaghat and Lametaghat on the UNESCO World Heritage tentative list in 2021 as a natural site, under criteria (vii) and (viii). On the hill above the river stands the Chausath Yogini temple, built early in the eleventh century under the Kalachuri king Yuvaraja II. It is the largest of the circular yogini temples, and although chausath means sixty-four, its ring of cells numbers eighty-one.',
    ],
    sources: [
      { label: 'UNESCO tentative list: Bhedaghat and Lametaghat in the Narmada Valley', url: 'https://whc.unesco.org/en/tentativelists/6531' },
      { label: 'Chausath Yogini Temple, Bhedaghat', url: 'https://en.wikipedia.org/wiki/Chausath_Yogini_Temple,_Bhedaghat' },
    ] },
  { id: 'ranthambore', title: 'Ranthambore', date: 'October 2022', place: 'Ranthambore, Rajasthan',
    cover: 'images/posts/ranthambore.jpg', ar: '16/9',
    excerpt: 'A safari in Ranthambore National Park.',
    paras: [
      'The park has a UNESCO World Heritage Site inside it. Ranthambore Fort, on the hill in the middle of the reserve, is one of the six Hill Forts of Rajasthan inscribed together in 2013. Within the fort is the Trinetra Ganesh temple, which has a postal habit attached to it: people send the first invitation for a wedding or a house blessing to Ganesha here by post, and thousands of cards arrive every year, some from outside India. The priests read them out at the shrine. Temple tradition puts its founding around 1300 under Hammir Dev Chauhan, though that belongs to the temple\'s own tradition rather than to established record.',
    ],
    sources: [
      { label: 'UNESCO World Heritage Centre: Hill Forts of Rajasthan', url: 'https://whc.unesco.org/en/list/247' },
      { label: 'Outlook Traveller: the wedding invitations sent to Trinetra Ganesh', url: 'https://www.outlooktraveller.com/experiences/places-of-interest/ganesh-chaturthi-2026-why-devotees-send-wedding-invitations-to-ranthambores-trinetra-ganesh-temple' },
    ] },
  { id: 'hamta', title: 'Four days over Hamta Pass', date: 'June 2022', place: 'Himachal Pradesh',
    cover: 'images/posts/hamta.jpg', ar: '4/3',
    excerpt: 'The trek from the Kullu side over Hamta Pass into Lahaul: a waterfall on the first day, snowfields on the third, cairns and wildflowers on the way down.',
    paras: [
      'Hamta Pass sits at about 4,270 metres, a little over fourteen thousand feet, on the Pir Panjal. The Pir Panjal is the range that walls the Kullu valley off from Lahaul, and the pass is one of the gaps in that wall. It takes its name from Hamta village, below Sethan, and long before it carried trekkers it carried flocks: shepherds from the lower hills bring animals up through it in summer to graze the high grassland, at the season when Lahaul on the far side is bare. Walking it is a four day crossing rather than a climb. The road ends at Jobra above Manali and the route goes up the Rani nallah valley to Chika, on to the wide basin of Balu ka Ghera, over the pass to Shea Goru on the Lahaul side, and down to Chatru on the Chandra river.',
      'What makes the crossing worth doing is that the two sides of the pass are two different countries. The Kullu approach is green the whole way, with pine and birch, meadows full of flowers in June, waterfalls coming off the valley walls and a river to be waded more than once. A few hours past the top, the colour has gone out of the landscape and you are walking in the cold desert of Lahaul, grey and brown and almost treeless. Nothing about the altitude prepares you for that; it is the line of the ridge that does it, holding the monsoon on one side and keeping the other dry.',
      '## Day one: Jobra to Chika',
      'The walk starts where the road stops, in the forest above Manali, and climbs into a broad green valley with the Rani nallah running down the middle of it. Chika is a meadow beside the stream at a little over three thousand metres, close enough to the valley wall that waterfalls come off it all day.',
      { image: 'images/2022/hamta-chika.jpg', caption: 'The valley above Jobra, on the first day\'s walk.' },
      { image: 'images/2022/hamta-waterfall.jpg', caption: 'One of the falls coming off the valley wall near Chika.' },
      '## Day two: Chika to Balu ka Ghera',
      'The second day follows the river up, crossing it on the way, and the valley opens out as the trees give up. Balu ka Ghera means a bed of sand, which is what the campsite is: a flat, stony basin at about 3,780 metres under rock walls, with snow peaks standing at the head of it. This is the camp you leave before dawn for the pass.',
      { image: 'images/2022/hamta-stream.jpg', caption: 'The stream below the pass, with the peaks at the head of the valley.' },
      { image: 'images/2022/hamta-camp.jpg', caption: 'Camp at the second night.' },
      '## Day three: over the pass to Shea Goru',
      'This is the long day and the reason for the trek. The route climbs the last of the valley and then goes up over snow, which in June is still lying thick on the approach and the pass itself. The top is a narrow saddle with a drop on the Lahaul side, and the descent from it is steep enough to be taken carefully before the ground eases into the Shea Goru valley, where the camp is at about 3,900 metres and everything has turned grey.',
      { image: 'images/2022/hamta-valley.jpg', caption: 'The valley below the pass.' },
      { image: 'images/2022/hamta-snowfield.jpg', caption: 'Crossing the snow on the way up to the pass.' },
      { image: 'images/2022/hamta-ridge.jpg', caption: 'The ridge on the climb, with the cloud coming over it.' },
      { image: 'images/2022/hamta-peak.jpg', caption: 'The peak above the snowfield, in and out of cloud all morning.' },
      { image: 'images/2022/hamta-pass-view.jpg', caption: 'From the pass, with the last of the light on the peaks at the head of the valley.' },
      '## Day four: Shea Goru to Chatru',
      'The last day runs down the Shea Goru valley to the Chandra river and the road at Chatru, with another cold stream crossing on the way. The walking is easier, and ahead of you the Chandra braids across a wide stony floor with the road cut along the far side. Green comes back in patches near the water, but the slopes above it stay bare, and none of it looks like the valley the trek started in. The flowers that turn up between the stones on the way down are a reminder of which side of the mountain you began on.',
      { image: 'images/2022/hamta-descent.jpg', caption: 'Down towards the Chandra valley on the last day.' },
      { image: 'images/2022/hamta-cairn.jpg', caption: 'A cairn on the way down.' },
      { image: 'images/2022/hamta-flowers.jpg', caption: 'Wildflowers among the stones.' },
    ],
    sources: [
      { label: 'Hamta Pass', url: 'https://en.wikipedia.org/wiki/Hamta_Pass' },
      { label: 'Himalaya Shelter: the Hampta Pass route, campsites and altitudes', url: 'https://www.himalayashelter.com/trek/hampta-pass-trek' },
      { label: 'Indiahikes: Hampta Pass', url: 'https://indiahikes.com/hampta-pass' },
    ] },
  { id: 'churna', title: 'Churna safari', date: 'December 2021', place: 'Satpura Tiger Reserve',
    cover: 'images/posts/churna.jpg', ar: '3/2',
    excerpt: 'A winter safari into the Churna range of Satpura Tiger Reserve.',
    paras: [
      'Satpura became a national park in 1981 and a tiger reserve in 1999, and it does one thing no other Indian park does: the official tourism account describes it as the only national park in the country where visitors may walk on foot through the core forest, with armed guards and a naturalist. You cross the Denwa by boat first and then walk in single file. Canoe and boat trips run on the river and its backwaters as well, so the reserve can be seen from the water as much as from a vehicle. Churna is one of its zones, well inside the forest. In 2021 India added Satpura Tiger Reserve to the UNESCO World Heritage tentative list as a natural site.',
    ],
    sources: [
      { label: 'Ministry of Tourism, Incredible India: Satpura National Park', url: 'https://www.incredibleindia.gov.in/en/madhya-pradesh/pachmarhi/satpura-national-park' },
      { label: 'The Week: Satpura and Bhedaghat added to the UNESCO tentative list', url: 'https://www.theweek.in/news/india/2021/05/19/satpura-tiger-reserve-bhedaghat-lamheta-ghat-of-mp-in-unesco-world-heritage-tentative-list.html' },
    ] },
];

const ABOUT = {
  portrait: 'images/about/portrait.jpg',
  portraitAr: '271/300',
  lede: 'Travel photographs, arranged by the year they were made.',
  paras: [
    'I am a physicist, working on the non-equilibrium physics of active matter. I photograph on the trips I take and around wherever I am living: temples, mountains, forests, and whatever else is in front of me.',
    'The pictures are arranged by year rather than by theme. Some years have more in them than others.',
  ],
  facts: [
    ['Since', '2017'],
    ['Elsewhere', 'links'],   // rendered as the SITE.links icons
  ],
};

const CONTACT = {
  blurb: 'For prints, permissions, or anything else about the photographs here.',
};
