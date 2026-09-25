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
  tagline: 'Travel & photography',
  since: '2017',
  // Shown in the dateline strip under the masthead. Leave '' to hide.
  place: '',
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
    { title: 'Waterfall, first day', place: 'Hamta Pass', src: 'images/2022/hamta-waterfall.jpg', ar: '3/4' },
    { title: 'The stream below the pass', place: 'Hamta Pass', src: 'images/2022/hamta-stream.jpg', ar: '3/4' },
    { title: 'Camp, second night', place: 'Hamta Pass', src: 'images/2022/hamta-camp.jpg', ar: '4/3' },
    { title: 'The valley below the pass', place: 'Hamta Pass', src: 'images/2022/hamta-valley.jpg', ar: '4/3' },
    { title: 'Crossing the snowfield', place: 'Hamta Pass', src: 'images/2022/hamta-snowfield.jpg', ar: '4/3' },
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
      'Orchha sits on the Betwa, a short drive from Jhansi, and the two places turn out to be one story. We came in through Jhansi, where a memorial to Rani Lakshmibai carries four lines of Subhadra Kumari Chauhan\'s poem cut into the stone: बुंदेले हरबोलों के मुँह हमने सुनी कहानी थी, खूब लड़ी मर्दानी वह तो झाँसी वाली रानी थी। Every stanza of that poem ends the same way, crediting the Bundela harbolas, the folk singers of Bundelkhand, as the source of the story rather than any record. The fort at Jhansi was built in 1613 by Bir Singh Deo, who ruled Orchha. Most of what is worth seeing in both towns comes back to him.',
      '## Two founding dates, both defensible',
      'One guidebook will tell you Orchha was founded in 1501 and the next will say 1531. Both numbers are real and they refer to different things. Rudra Pratap Singh\'s reign began in 1501, when the Bundela capital was still at Garh Kundar. He moved it to the bank of the Betwa in 1531 and died the same year, so 1501 belongs to the ruler and 1531 to the town.',
      '## The capital that left',
      'Orchha stayed the Bundela capital until 1783, when Vikramajit shifted the seat about forty miles south to Tehri and renamed it Tikamgarh, after Tikam, one of the names of Krishna. The court and the building money went with him. That departure is the reason so much of Orchha survives as a single period instead of being rebuilt over and over. India placed the historic ensemble of Orchha on the UNESCO tentative list on 15 April 2019, under cultural criteria (ii) and (iv), and the nomination dossier has since been recommended for the 2027 to 2028 cycle.',
      '## A god who holds the office of king',
      'The Ram Raja Temple is the thing most people remember about Orchha, and it is worth being exact about it. This is the only temple in India where Rama is worshipped as a king rather than as a deity alone, and the state treats him as one. Police are posted as his guard, an official guard of honour is given, and at the evening aarti the guards present a gun salute. Distinguished visitors are received with paan and ittar rather than the sweet prasad handed out almost everywhere else.',
      'The building is a palace and not a temple, and the reason for that is tradition rather than record. Queen Ganesh Kunwari, wife of Madhukar Shah, brought an image of Rama back from Ayodhya in about 1574 to 1575. From there the accounts split. One version holds that Rama set three conditions before agreeing to come, the last being that wherever he was first set down he would stay, and that the queen set him down inside her own palace. The government tourism account says instead that she put him in her kitchen, a kitchen being ritually pure, because the temple intended for him was not finished. Either way he was never moved again, and the palace became the temple.',
      '## The temple with nothing in its sanctum',
      'The temple intended for him is Chaturbhuj, the one standing over the town on its high platform. Madhukar Shah began it in 1558 for his queen and Bir Singh Deo completed it. The sanctum built for that image stayed empty, and images of Radha and Krishna were installed in it later. It is worth the climb for the view over the Raja Mahal and the chhatris, and worth remembering while you are inside that the largest religious building here was raised for an image that stayed a few hundred metres away.',
      '## What the palaces cost',
      'Bir Singh Deo built or finished most of what visitors photograph in Orchha, and the way he came by the throne is documented rather than legendary. On 12 August 1602 he ambushed Abul Fazl, Akbar\'s minister and the author of the Akbarnama, near Narwar. He did it on the instructions of Akbar\'s son, Prince Salim, who believed Abul Fazl was turning his father against him. Abul Fazl\'s head was sent to Salim. When Salim took the throne in 1605 as Jahangir, he made Bir Singh Deo the ruler of Orchha.',
      'The Jahangir Mahal was built to receive the emperor. The story every guide in Orchha tells is that Jahangir spent a single night in it. That detail is local tradition and I could not trace it to a contemporary record, so take the palace for what is certain: it was built for a guest by a man the guest had made a king.',
      '## The poet who argued her way home',
      'Rai Praveen was a poet and musician at the court of Raja Indrajit Singh. Akbar heard of her and summoned her to Agra in 1602. The verse she is said to have recited there makes its point without insulting the emperor: only crows, dogs and the lowest servants eat from a plate that someone else has already eaten from. Akbar sent her back to Orchha with honour. The two storey palace beside the garden was built for her to live in and to perform in.',
      '## The chhatris are memorials, not graves',
      'The cenotaphs along Kanchana Ghat hold no one. They stand on the stretch of the Betwa where the Bundela rulers were cremated, and they mark the cremations rather than any burial. Sources disagree on the count: the official tourism figure is roughly fourteen, while other accounts say fifteen, partly because a few of them stand apart from the main group. The shape is the interesting part. A cubic chamber that reads as a tomb carries a shikhara on top that reads as a temple, which is not a combination you see often. The tallest of them, three storeys with an open pavilion at the top, is Bir Singh Deo\'s own.',
      '## A temple painted with the 1857 uprising',
      'The Laxmi Narayan temple sits out of town at the end of a raised path, and it is the one most visitors skip. Its walls and ceilings are covered with murals in a mixture of Bundeli and Mughal styles, painted between the seventeenth and nineteenth centuries. The subjects run from the Ramayana and the Bhagavata to the uprising of 1857, and include British officials drinking with Indian kings, traders at their stalls and women cooking at a hearth. Guides point out a rider in one battle scene as the Rani of Jhansi. The building\'s own dating is muddled: it is usually credited to Bir Singh Deo with a date of 1662, which cannot be right, because he died in 1627, and Raja Prithvi Singh is recorded as adding to it in 1743.',
      '## What to see and when',
      'The chhatris photograph best late in the day, from the ghat or from the far bank, and that is the frame most people take home from Orchha. The rest of what makes the place unusual is smaller and easy to walk past: a god who holds the office of king, a temple whose sanctum was never filled, and a ruler whose palaces followed from a murder he was rewarded for.',
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
    paras: [] },
  { id: 'raisen', title: 'Raisen Fort', date: 'August 2024', place: 'Raisen, Madhya Pradesh',
    cover: 'images/posts/raisen.jpg', ar: '3/4',
    excerpt: 'The hill fort above Raisen in the monsoon: gateways, ramparts and wet stone steps.',
    paras: [] },
  { id: 'tamil-nadu', title: 'Temple towns of the south', date: 'December 2023', place: 'Tamil Nadu',
    cover: 'images/posts/tamil-nadu.jpg', ar: '3/4',
    excerpt: 'Chennai, then the great temples at Thanjavur, Tiruchirappalli, Madurai and Rameswaram, out to Dhanushkodi where the Bay of Bengal meets the Indian Ocean, and back by way of Mahabalipuram.',
    paras: [] },
  { id: 'jabalpur', title: 'Marble rocks at Bhedaghat', date: 'December 2022', place: 'Jabalpur',
    cover: 'images/posts/jabalpur.jpg', ar: '4/3',
    excerpt: 'The Rani Durgavati Museum, the Balancing Rock, Madan Mahal Fort, and the Narmada between the marble cliffs of Bhedaghat.',
    paras: [] },
  { id: 'ranthambore', title: 'Ranthambore', date: 'October 2022', place: 'Ranthambore, Rajasthan',
    cover: 'images/posts/ranthambore.jpg', ar: '16/9',
    excerpt: 'A safari in Ranthambore National Park.',
    paras: [] },
  { id: 'hamta', title: 'Four days over Hamta Pass', date: 'June 2022', place: 'Himachal Pradesh',
    cover: 'images/posts/hamta.jpg', ar: '4/3',
    excerpt: 'The trek from the Kullu side over Hamta Pass into Lahaul: a waterfall on the first day, snowfields on the third, cairns and wildflowers on the way down.',
    paras: [] },
  { id: 'manali', title: 'Manali', date: 'June 2022', place: 'Manali, Himachal Pradesh',
    cover: 'images/posts/manali.jpg', ar: '4/3',
    excerpt: 'Before and after the trek: the Beas valley, the deodars, and the Hadimba Temple.',
    paras: [] },
  { id: 'churna', title: 'Churna safari', date: 'December 2021', place: 'Satpura Tiger Reserve',
    cover: 'images/posts/churna.jpg', ar: '3/2',
    excerpt: 'A winter safari into the Churna range of Satpura Tiger Reserve.',
    paras: [] },
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
