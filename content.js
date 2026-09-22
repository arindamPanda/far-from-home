/* content.js — everything the photography site shows lives in this file.
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
   Add an object to POSTS. `cover` is the lead photograph, `excerpt` the
   teaser shown in the list and on the front page, `paras` the body. The
   first POSTS entry is the front-page lead story, so keep the newest first.
   `id` becomes the address: #/journal/<id>.
*/

const SITE = {
  brand: 'Far From Home',   // the site's name, top-left and in the browser tab
  name: 'Arindam Panda',
  tagline: 'Travel & photography',
  since: '2017',
  // Shown in the dateline strip under the masthead. Leave '' to hide.
  place: '',
  // Where the "Main site" links point (the research site — a separate site
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

/* Photographs, newest year first. Each year's `note` is the one-line
   caption beside the big numeral on the Photography page. A group's label
   need not be a year — "Frames" below holds the undated gallery that moved
   here from the main site. */
const YEARS = [
  { label: 'Frames', note: 'Various dates. Light, water and small creatures, close to home.', photos: [
    { title: "Nature's tears are the most beautiful jewelry.", place: '', src: 'images/frames/image1.jpg', ar: '4/3' },
    { title: 'A winter gem waiting for the first light.', place: '', src: 'images/frames/image2.jpg', ar: '3/4' },
    { title: 'Turning a soft golden morning into cotton clouds ablaze.', place: '', src: 'images/frames/image3.jpg', ar: '3/4' },
    { title: 'Matching the scorching noon heat with a blaze of its own.', place: '', src: 'images/frames/image4.jpg', ar: '4/3' },
    { title: '"Nut-thing" to see here, just having a snack.', place: '', src: 'images/frames/image5.jpg', ar: '4/3' },
    { title: 'From spongy white calm to fiery red chaos.', place: '', src: 'images/frames/image6.jpg', ar: '3/4' },
    { title: 'Soaking in the final golden glow of the afternoon.', place: '', src: 'images/frames/image7.jpg', ar: '4/3' },
    { title: "The horizon holds the day's last burning ember, while the rest of world breathes cool.", place: '', src: 'images/frames/image8.jpeg', ar: '4/3' },
    { title: 'A warm glow breaking the silence of the dark.', place: '', src: 'images/frames/image9.jpg', ar: '4/3' },
  ]},
  { label: '2025', note: 'Bundela cenotaphs on the Betwa, and a spring meeting on the Danube.', photos: [
    { title: 'The chhatris of Orchha', place: 'Orchha', src: 'images/2025/orchha-chhatris.jpg', ar: '3/2' },
    { title: 'Raja Mahal from the Chaturbhuj Temple', place: 'Orchha', src: 'images/2025/orchha-raja-mahal.jpg', ar: '3/2' },
    { title: 'Rani Mahal', place: 'Jhansi', src: 'images/2025/jhansi-rani-mahal.jpg', ar: '2/3' },
    { title: 'Old Stone Bridge, Danube', place: 'Regensburg', src: 'images/2025/regensburg-bridge.jpg', ar: '3/2' },
    { title: 'Walhalla', place: 'Donaustauf', src: 'images/2025/walhalla.jpg', ar: '3/2' },
    { title: 'Nymphenburg Palace', place: 'Munich', src: 'images/2025/nymphenburg.jpg', ar: '16/9' },
  ]},
  { label: '2024', note: 'A monsoon climb to the hill fort at Raisen.', photos: [
    { title: 'Gateway, Raisen Fort', place: 'Raisen', src: 'images/2024/raisen-gateway.jpg', ar: '2/3' },
    { title: 'Ramparts in the rain', place: 'Raisen', src: 'images/2024/raisen-ramparts.jpg', ar: '3/2' },
    { title: 'The steps up', place: 'Raisen', src: 'images/2024/raisen-steps.jpg', ar: '2/3' },
  ]},
  { label: '2023', note: 'Temple towns of Tamil Nadu, down to the end of the land at Dhanushkodi.', photos: [
    { title: 'Brihadeeswara Temple', place: 'Thanjavur', src: 'images/2023/thanjavur.jpg', ar: '2/3' },
    { title: 'Meenakshi Amman Temple', place: 'Madurai', src: 'images/2023/madurai.jpg', ar: '2/3' },
    { title: 'Sri Ranganatha Swamy Temple', place: 'Tiruchirappalli', src: 'images/2023/trichy.jpg', ar: '3/2' },
    { title: 'Ramanathaswamy Temple', place: 'Rameswaram', src: 'images/2023/rameswaram.jpg', ar: '2/3' },
    { title: 'Where two seas meet', place: 'Dhanushkodi', src: 'images/2023/dhanushkodi.jpg', ar: '3/2' },
    { title: 'Shore Temple', place: 'Mahabalipuram', src: 'images/2023/mahabalipuram.jpg', ar: '3/2' },
  ]},
  { label: '2022', note: 'Snow at Hamta Pass in June; marble cliffs at Bhedaghat in December.', photos: [
    { title: 'Crossing the snowfield', place: 'Hamta Pass', src: 'images/2022/hamta-snowfield.jpg', ar: '3/2' },
    { title: 'Evening light on the ridge', place: 'Hamta Pass', src: 'images/2022/hamta-ridge.jpg', ar: '3/2' },
    { title: 'Camp, day two', place: 'Hamta Pass', src: 'images/2022/hamta-camp.jpg', ar: '3/2' },
    { title: 'Hadimba Temple', place: 'Manali', src: 'images/2022/manali-hadimba.jpg', ar: '2/3' },
    { title: 'Ranthambore', place: 'Rajasthan', src: 'images/2022/ranthambore.jpg', ar: '3/2' },
    { title: 'The marble rocks', place: 'Bhedaghat', src: 'images/2022/bhedaghat.jpg', ar: '3/2' },
    { title: 'Balancing Rock', place: 'Jabalpur', src: 'images/2022/balancing-rock.jpg', ar: '1/1' },
  ]},
  { label: '2021', note: 'A winter safari into the Churna range of Satpura.', photos: [
    { title: 'Sambar in the grass', place: 'Churna, Satpura', src: 'images/2021/churna-sambar.jpg', ar: '3/2' },
    { title: 'The river at Churna', place: 'Satpura', src: 'images/2021/churna-river.jpg', ar: '3/2' },
    { title: 'Water lily', place: 'Satpura', src: 'images/2021/churna-lily.jpg', ar: '3/2' },
  ]},
];

/* Journal entries, newest first. The first one is the front-page lead. */
const POSTS = [
  { id: 'orchha', title: 'Cenotaphs on the Betwa', date: 'September 2025', place: 'Orchha & Jhansi',
    cover: 'images/posts/orchha.jpg',
    excerpt: 'Rani Mahal in Jhansi on the way in; then Orchha — the Raja Mahal, the Chaturbhuj Temple seen from its terraces, and the chhatris of the Bundela kings along the river.',
    paras: [] },
  { id: 'regensburg', title: 'Spring meeting on the Danube', date: 'March 2025', place: 'Regensburg & Munich',
    cover: 'images/posts/regensburg.jpg',
    excerpt: 'Mumbai to Doha to Regensburg for the DPG Spring Meeting: the old stone bridge over the Danube, the Walhalla above it, and Nymphenburg Palace in Munich on the way home.',
    paras: [] },
  { id: 'raisen', title: 'Raisen Fort', date: 'August 2024', place: 'Raisen, Madhya Pradesh',
    cover: 'images/posts/raisen.jpg',
    excerpt: 'The hill fort above Raisen in the monsoon — gateways, ramparts and wet stone steps.',
    paras: [] },
  { id: 'tamil-nadu', title: 'Temple towns of the south', date: 'December 2023', place: 'Tamil Nadu',
    cover: 'images/posts/tamil-nadu.jpg',
    excerpt: 'Chennai, then the great temples — Thanjavur, Tiruchirappalli, Madurai, Rameswaram — out to Dhanushkodi where the Bay of Bengal meets the Indian Ocean, and back by way of Mahabalipuram.',
    paras: [] },
  { id: 'jabalpur', title: 'Marble rocks at Bhedaghat', date: 'December 2022', place: 'Jabalpur',
    cover: 'images/posts/jabalpur.jpg',
    excerpt: 'The Rani Durgavati Museum, the Balancing Rock, Madan Mahal Fort, and the Narmada between the marble cliffs of Bhedaghat.',
    paras: [] },
  { id: 'ranthambore', title: 'Ranthambore', date: 'October 2022', place: 'Ranthambore, Rajasthan',
    cover: 'images/posts/ranthambore.jpg',
    excerpt: 'A safari in Ranthambore National Park.',
    paras: [] },
  { id: 'hamta', title: 'Four days over Hamta Pass', date: 'June 2022', place: 'Himachal Pradesh',
    cover: 'images/posts/hamta.jpg',
    excerpt: 'The trek from the Kullu side over Hamta Pass into Lahaul — a waterfall on the first day, snowfields on the third, cairns and wildflowers on the way down.',
    paras: [] },
  { id: 'manali', title: 'Manali', date: 'June 2022', place: 'Manali, Himachal Pradesh',
    cover: 'images/posts/manali.jpg',
    excerpt: 'Before and after the trek: the Beas valley, the deodars, and the Hadimba Temple.',
    paras: [] },
  { id: 'churna', title: 'Churna safari', date: 'December 2021', place: 'Satpura Tiger Reserve',
    cover: 'images/posts/churna.jpg',
    excerpt: 'A winter safari into the Churna range of Satpura Tiger Reserve.',
    paras: [] },
];

const ABOUT = {
  portrait: 'images/about/portrait.jpg',
  lede: 'Frames from the road, arranged by the year they were made.',
  paras: [
    'By day I work on the non-equilibrium physics of active matter. The rest of the time I carry a camera and photograph what is already happening — a temple gopuram against a monsoon sky, a snowfield at four thousand metres, a squirrel with a snack.',
    'The pictures here are arranged by year rather than by theme, because that is honestly how they arrived. Some years are thin. That seems worth showing too.',
  ],
  facts: [
    ['Since', '2017'],
    ['Elsewhere', 'links'],   // rendered as the SITE.links icons
  ],
};

const CONTACT = {
  blurb: 'For prints, permissions, or just to say a picture reminded you of somewhere.',
};
