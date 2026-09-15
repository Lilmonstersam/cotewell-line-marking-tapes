/* Cotewell: line marking tape & floor marking mock-up
   Category view + 13 product views, routed from the URL hash. */
(function () {
  'use strict';

  var UP = 'https://cotewell.com.au/wp-content/uploads/';

  /* ------------------------------------------------------------------ colours */
  var COLOURS = {
    yellow:                 { label: 'Yellow',                 hex: '#f2c200' },
    black:                  { label: 'Black',                  hex: '#17191b' },
    white:                  { label: 'White',                  hex: '#f1f0ec' },
    blue:                   { label: 'Blue',                   hex: '#0a5aa8' },
    green:                  { label: 'Green',                  hex: '#12874a' },
    red:                    { label: 'Red',                    hex: '#c8102e' },
    orange:                 { label: 'Orange',                 hex: '#ee7203' },
    gray:                   { label: 'Grey',                   hex: '#8b9095' },
    purple:                 { label: 'Purple',                 hex: '#6a3f9e' },
    brown:                  { label: 'Brown',                  hex: '#6a4526' },
    clear:                  { label: 'Clear',                  hex: '#d8dade', clear: true },
    'diagonal-black-yellow':{ label: 'Diagonal Black/Yellow',  hex: '#f2c200', hex2: '#17191b' },
    'diagonal-black-white': { label: 'Diagonal Black/White',   hex: '#f1f0ec', hex2: '#17191b' },
    'diagonal-red-white':   { label: 'Diagonal Red/White',     hex: '#f1f0ec', hex2: '#c8102e' },
    'diagonal-green-white': { label: 'Diagonal Green/White',   hex: '#f1f0ec', hex2: '#12874a' },
    'diagonal-orange-black':{ label: 'Diagonal Orange/Black',  hex: '#ee7203', hex2: '#17191b' }
  };

  var TAPE_COLOURS = ['yellow','white','red','blue','green','orange','black','gray','purple','brown','clear','diagonal-black-yellow','diagonal-black-white','diagonal-red-white'];
  var LEAN_COLOURS = ['yellow','white','red','blue','green','orange','black','diagonal-black-yellow','diagonal-black-white','diagonal-red-white','diagonal-green-white','diagonal-orange-black'];
  var SHAPE_COLOURS = ['yellow','blue','green','orange','red','black','white'];

  var APPLICATION_LIST = ['Product manufacturing facilities','Commercial warehouses','Commercial workshops','Food and beverage production facilities','Poultry and meat processing plants','Self storage facilities','Aircraft hangars','Theme parks','Large retail centres'];

  /* ------------------------------------------------------------------ category */
  var categoryData = {
    title: 'Line Marking Tape & Floor Marking Products | Cotewell',
    descriptionMeta: 'Industrial line marking tape, 5S floor shapes and safety floor signs for Australian warehouses. Peel-and-stick floor marking with no production downtime.',
    canonical: 'https://cotewell.com.au/product-category/tape/',
    image: 'assets/img/mightyline-marking-tape.jpg',
    contextHref: '#tape-products',
    contextText: 'All products',
    ctaHref: '#tape-products',
    ctaText: 'View products',
    footerText: 'Line marking tape & floor marking mock-up'
  };

  var GROUPS = {
    tape:   { label: 'Line marking tape',        heading: 'Line marking tape',        blurb: 'Rolls for walkways, forklift routes, aisle edges and exclusion zones. Choose by thickness and the traffic the line has to survive.' },
    shapes: { label: '5S shapes & footprints',   heading: '5S shapes and footprints', blurb: 'Pre-cut markers for pallet bays, storage locations and pedestrian routes. Faster than taping full boxes and they use far less material.' },
    signs:  { label: 'Safety floor signs',       heading: 'Safety floor signs',       blurb: 'Large-format floor stickers that carry a message people read from a distance. Other designs are available on request.' }
  };

  /* ------------------------------------------------------------------ products */
  var productData = {

    /* ---------------------------------------------------------- TAPE */
    'mightyline-tape': {
      keyMetrics: [['Thickness','1.3mm'],['Traffic rating','Heavy forklift'],['Warranty','3 years']],
      group: 'tape',
      slug: 'mighty-line-marking-tape',
      canonical: 'https://cotewell.com.au/product/mighty-line-marking-tape/',
      shortName: 'MightyLine Marking Tape',
      breadcrumb: 'MightyLine Marking Tape',
      title: 'MightyLine Marking Tape | 1.3mm Industrial Floor Tape | Cotewell',
      descriptionMeta: 'MightyLine floor marking tape is 1.3mm thick and built for constant forklift traffic. 14 colours, 50mm and 100mm widths, 3-year adhesion warranty.',
      eyebrow: 'Heavy-duty line marking tape',
      titleHtml: 'MightyLine<br><em>Marking</em><br>Tape',
      cardType: 'Heavy traffic · 1.3mm',
      cardCopy: 'The thickest tape in the range, built to take constant forklift and wheeled traffic without lifting.',
      badge: '1.3mm · 3 yr warranty',
      tag: '1.3mm bevelled-edge roll',
      description: 'Mighty Line Standard Floor Tape is a premium floor marking solution designed for busy industrial workplaces where durability matters. At 1.3mm thick – up to seven times thicker than many standard floor tapes – it’s built to withstand heavy forklift and industrial wheeled traffic while maintaining a clean, professional appearance.',
      descriptionSecondary: 'Unlike painted lines, Mighty Line installs quickly with no production downtime, requires minimal ongoing maintenance and can be easily removed or reconfigured as your workplace evolves. Its exceptional performance is backed by a 3-year limited adhesion warranty, giving you confidence in a long-lasting line marking solution.',
      colours: TAPE_COLOURS,
      widths: ['50mm', '100mm'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2019/07/tape-yellow-both.png',
        white: 'assets/img/tape-white-both.png',
        red: UP + '2019/07/tape-red-both.png',
        blue: UP + '2019/07/tape-blue-both.png',
        green: UP + '2019/07/tape-green-both.png',
        orange: UP + '2020/06/tape-orange-both.png',
        black: UP + '2020/06/tape-black-both.png',
        gray: UP + '2026/05/4-gray-solid-color-tape-100-roll-safety-floor-product-512_1024x1024-removebg-preview.png',
        purple: UP + '2026/05/4-purple-solid-color-tape-100-roll-safety-floor-product-335_1024x1024-removebg-preview.png',
        brown: UP + '2026/05/4-brown-solid-color-tape-100-roll-safety-floor-product-638_1024x1024-removebg-preview-1.png',
        clear: UP + '2026/05/4-clear-floor-tape-100-roll-product-182_1024x1024-removebg-preview.png',
        'diagonal-black-yellow': UP + '2019/07/tape-striped-both.png',
        'diagonal-black-white': UP + '2026/05/4-white-tape-with-black-chevrons-100-roll-safety-floor-product-570_1024x1024-removebg-preview.png',
        'diagonal-red-white': UP + '2022/12/4-white-tape-with-red-chevrons-100-roll-safety-floor-product-750_1024x1024-removebg-preview.png'
      },
      photos: [
        { src: UP + '2022/04/Factory-Line-Marking-QLD-1.jpg', thumb: UP + '2022/04/Factory-Line-Marking-QLD-1-300x200.jpg', alt: 'MightyLine tape marking aisles in a Queensland factory' },
        { src: UP + '2025/10/shared-image-17-1.jpg', thumb: UP + '2025/10/shared-image-17-1-768x1024.jpg', alt: 'MightyLine tape on a working warehouse floor' },
      ],
      prices: { 'default|50mm': 269, 'default|100mm': 314, 'diagonal-black-yellow|50mm': 326, 'diagonal-black-yellow|100mm': 365, 'diagonal-black-white|50mm': 326, 'diagonal-black-white|100mm': 365, 'diagonal-red-white|50mm': 326, 'diagonal-red-white|100mm': 365 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Confirm the floor is clean, dry and oil free. Call <a href="tel:1300590505">1300 590 505</a> if you are unsure whether your surface suits tape.',
      featuresTitle: 'Seven times thicker<br>than standard tape.',
      featuresIntro: 'MightyLine is the tape to specify when forklifts run the line every day. It costs more per roll and it stops the re-taping cycle.',
      features: [
        ['', '1.3mm thick – up to 7x thicker than many standard floor tapes'],
        ['', 'Built to withstand heavy industrial forklift and wheeled traffic'],
        ['', 'Bevelled edges help minimise lifting and provide a smooth transition'],
        ['', 'Fast peel-and-stick installation with no production downtime (DIY installation)'],
        ['', 'Easy to remove with minimal sticky residue'],
        ['', 'Saves up to 60% in ongoing maintenance compared to painted line marking'],
        ['', 'Smooth, easy-to-clean surface maintains a professional appearance'],
        ['', 'Suitable for pharmaceutical and food production environments with no contamination during installation'],
        ['', 'Backed by a 3-year limited adhesion warranty'],
        ['', 'Easy to repair damaged sections without replacing all of it']
      ],
      notes: [
        'Only suitable for applications where the ambient temperature is above 10°C',
        'Ensure surface is clean, dry and oil free before installation',
        'Do not apply tape lengthways on floor joints',
        'Not suitable for external use',
        'Do not apply over existing paint or tape',
        'Warranty does not cover damage',
        'Available in multiple colours and widths to suit your visual management system',
        'Continuous dragging of pallets or heavy wheel spinning may reduce product lifespan',
        'Not recommended for rough, damaged or uneven concrete surfaces.',
        'Length: 30m',
        'Widths: 50mm & 100mm'
      ],
      applications: ['Pedestrian walkways','Forklift routes','Pallet storage bays','Equipment parking areas','Material storage zones','Workstations','Production lines','Keep-clear zones','Safety and exclusion zones','Industrial facilities'],
      specs: [['Thickness','1.3mm'],['Widths','50mm and 100mm'],['Colours','14, including three diagonal hazard patterns'],['Warranty','3-year limited adhesion warranty'],['Traffic rating','Heavy forklift and wheeled traffic'],['Environment','Internal only'],['Edges','Bevelled'],['Installation','Peel and stick, no curing time']],
      extra: 'We also offer a range of customised shapes/barcodes/symbols - simply reach out to our team with your desired customisation and they will be happy to assist.',
      related: ['freezer-tape', 'lean-line-960', 'angle-shape']
    },

    'freezer-tape': {
      keyMetrics: [['Thickness','1.3mm'],['Traffic rating','Industrial wheeled'],['Warranty','2 years']],
      group: 'tape',
      slug: 'mighty-line-x-treme-freezer-tape',
      canonical: 'https://cotewell.com.au/product/mighty-line-x-treme-freezer-tape/',
      shortName: 'X-Treme Freezer Tape',
      breadcrumb: 'X-Treme Freezer Tape',
      title: 'MightyLine X-Treme Freezer Tape | Cold Store Floor Tape | Cotewell',
      descriptionMeta: 'Floor marking tape proven to -29°C for cold rooms, freezers and chilled storage. Peel-and-stick install, 2-year limited warranty, 50mm and 100mm widths.',
      eyebrow: 'Cold store line marking tape',
      titleHtml: 'X-Treme<br><em>Freezer</em><br>Tape',
      cardType: 'Sub-zero · proven to -29°C',
      cardCopy: 'The tape to use where standard floor markings peel, crack or lift in cold storage.',
      badge: 'Proven to -29°C',
      tag: 'Freezer-rated adhesive',
      description: 'The Mighty Line X-Treme Freezer Tape is specifically engineered for cold rooms, freezer warehouses and chilled environments where standard floor tapes often fail. Proven to perform in temperatures as low as -29°C, its freezer-grade adhesive and durable 1.3mm construction provide long-lasting floor markings that withstand heavy industrial wheeled traffic while maintaining a clean, professional appearance.',
      descriptionSecondary: 'Backed by a 2-year limited warranty, it’s the ideal solution for creating reliable floor markings in demanding cold storage environments.',
      colours: ['yellow', 'white', 'red'],
      widths: ['50mm', '100mm'],
      defaultColour: 'white',
      images: {
        yellow: UP + '2019/07/tape-yellow-both.png',
        white: 'assets/img/tape-white-both.png',
        red: UP + '2019/07/tape-red-both.png'
      },
      photos: [
        { src: UP + '2022/04/Food-Processing-Line-Marking-VIC.jpg', thumb: UP + '2022/04/Food-Processing-Line-Marking-VIC-300x200.jpg', alt: 'X-Treme Freezer tape in a Victorian food processing facility' },
      ],
      prices: { 'default|50mm': 417, 'default|100mm': 417 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Cold-store floors need to be dry and frost free at the point of installation. Call <a href="tel:1300590505">1300 590 505</a> and we will talk through the install window.',
      featuresTitle: 'Marking that holds<br>at -29&deg;C.',
      featuresIntro: 'Cold storage is the environment where most floor marking fails first. This is the product built for it.',
      features: [
        ['', 'Designed for temperatures as low as -29°C'],
        ['', '1.3mm thick – up to 7x thicker than many standard floor tapes'],
        ['', 'Freezer-grade adhesive for superior performance'],
        ['', 'Withstands heavy industrial wheeled traffic'],
        ['', 'Bevelled edges for a smooth transition of wheeled traffic'],
        ['', 'Quick peel-and-stick installation – no special equipment required'],
        ['', 'Easy to remove with minimal residue when layouts change'],
        ['', '2-year limited warranty'],
        ['', 'No production downtime required during installation'],
        ['', 'Suitable for pharmaceutical and food processing environments with no contamination concerns'],
        ['', 'Smooth, easy-to-clean surface that maintains a professional appearance'],
        ['', 'Can be cut to any length to create custom floor marking layouts.']
      ],
      notes: [
        'Surface must be clean, dry and free from contaminants before installation.',
        'Heavy wheel spinning, pallet dragging or excessive abrasion may reduce product lifespan.',
        'Do not apply over existing paint or floor tape.',
        'The manufacturer\'s warranty does not cover damage caused by misuse or incorrect installation.',
        'Length: 30m',
        'Widths: 50mm & 100mm'
      ],
      applications: ['Cold rooms', 'Freezer warehouses', 'Food processing facilities', 'Chilled storage areas', 'Distribution centres', 'Warehouse walkways', 'Forklift traffic lanes', 'Storage locations', 'Pick and pack areas'],
      specs: [['Temperature rating','Proven to -29&deg;C'],['Widths','50mm and 100mm'],['Colours','Yellow, white and red'],['Warranty','2-year limited warranty'],['Traffic rating','Industrial wheeled traffic'],['Environment','Cold rooms, freezers and chilled storage'],['Installation','Peel and stick, no curing time']],
      related: ['freezer-footprints', 'mightyline-tape', 'lean-line-960']
    },

    'lean-line-960': {
      keyMetrics: [['Thickness','0.9mm'],['Traffic rating','Medium'],['Warranty','2 years']],
      group: 'tape',
      slug: 'lean-line-960-floor-marking-tape-50mm-x-30m-roll',
      canonical: 'https://cotewell.com.au/product/lean-line-960-floor-marking-tape-50mm-x-30m-roll/',
      shortName: 'Lean Line 960',
      breadcrumb: 'Lean Line 960',
      title: 'Lean Line 960 Floor Marking Tape | 50mm x 30m | Cotewell',
      descriptionMeta: 'Lean Line 960 is a 0.9mm mid-range floor marking tape for medium foot and light wheeled traffic. 12 colours, 50mm x 30m rolls, 2-year warranty.',
      eyebrow: 'Mid-range floor marking tape',
      titleHtml: 'Lean Line 960<br><em>Floor Marking</em><br>Tape',
      longTitle: true,
      cardType: 'Medium traffic · 0.9mm',
      cardCopy: 'A 0.9mm roll for walkways, storage areas and workstation boundaries in medium-traffic environments.',
      badge: '0.9mm · 50mm x 30m',
      tag: '0.9mm · 50mm x 30m roll',
      description: 'The Lean Line 960 Floor Tape is designed for workplaces that need a durable yet flexible floor marking solution. Ideal for medium traffic environments, it provides clear visual boundaries for walkways, storage areas and workstations while allowing layouts to be easily updated as your operations evolve.',
      descriptionSecondary: 'With quick installation and no curing time, it’s a practical alternative to painted floor markings.',
      colours: LEAN_COLOURS,
      widths: ['50mm'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2023/02/Lean-Line-960-No-BG-Yellow.png',
        white: UP + '2023/02/Lean-Line-960-No-BG-White.png',
        red: UP + '2023/02/Lean-Line-960-No-BG-Red-.png',
        blue: UP + '2023/02/Lean-Line-960-No-BG-Blue.png',
        green: UP + '2023/02/Lean-Line-960-No-BG-Green.png',
        orange: UP + '2023/02/Lean-Line-960-No-BG-Orange.png',
        black: UP + '2023/02/Lean-Line-960-No-BG-Black.png',
        'diagonal-black-yellow': UP + '2023/02/Lean-Line-570-No-BG-Yellow-Black.png',
        'diagonal-black-white': UP + '2023/02/Lean-Line-960-No-BG-Black-White.png',
        'diagonal-red-white': UP + '2023/02/Lean-Line-960-No-BG-Red-White.png',
        'diagonal-green-white': UP + '2023/02/Lean-Line-960-No-BG-Green-White.png',
        'diagonal-orange-black': UP + '2023/02/Lean-Line-960-No-BG-Black-Orange.png'
      },
      prices: { 'default|50mm': 169 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Specify Lean Line 960 for medium foot traffic and light wheeled traffic only. For forklift routes, use MightyLine instead. Call <a href="tel:1300590505">1300 590 505</a> to check.',
      featuresTitle: 'The middle ground<br>between paint and MightyLine.',
      featuresIntro: 'A practical, lower-cost roll for the areas of a site that do not see forklift wheels every day.',
      features: [
        ['', '0.9mm thick floor tape designed for medium traffic applications'],
        ['', 'Quick peel-and-stick installation'],
        ['', 'No production downtime required during installation'],
        ['', 'Easily removed or replaced if layouts change'],
        ['', '2 year warranty'],
        ['', 'Smooth, easy-to-clean surface'],
        ['', 'Suitable for pharmaceutical and food production environments with no contamination concerns'],
        ['', 'Square-cut edges for a clean, professional finish']
      ],
      notes: [
        'Not suitable for external use',
        'Suitable for applications where the ambient temperature remains above 10°C.',
        'Best applied to clean, dry and oil-free surfaces.',
        'Not suitable for external environments.',
        'Do not apply over existing paint or floor tape.',
        'Avoid applying the tape lengthways across floor joints.',
        'Heavy forklift traffic or constant pallet dragging may reduce the product\'s lifespan.',
        'Warranty does not cover damage',
        'Length: 30m',
        'Width: 50mm'
      ],
      applications: ['Walkways', 'Storage locations', 'Workstation boundaries', 'Equipment storage areas', 'Medium foot traffic and light wheeled traffic environments'],
      specs: [['Thickness','0.9mm'],['Roll size','50mm x 30m'],['Colours','12, including five diagonal hazard patterns'],['Warranty','2 years'],['Traffic rating','Medium foot traffic, light wheeled traffic'],['Environment','Internal only'],['Edges','Square cut'],['Installation','Peel and stick, no curing time']],
      related: ['lean-line-570', 'mightyline-tape', 'external-tape']
    },

    'lean-line-570': {
      keyMetrics: [['Thickness','0.5mm'],['Traffic rating','Low'],['Warranty','1 year']],
      group: 'tape',
      slug: 'lean-line-570-floor-marking-tape-50mm-x-30m-roll',
      canonical: 'https://cotewell.com.au/product/lean-line-570-floor-marking-tape-50mm-x-30m-roll/',
      shortName: 'Lean Line 570',
      breadcrumb: 'Lean Line 570',
      title: 'Lean Line 570 Floor Marking Tape | 50mm x 30m | Cotewell',
      descriptionMeta: 'Lean Line 570 is a 0.5mm low-traffic floor marking tape for indoor walkways, pallet bays and workstations. 12 colours, 50mm x 30m rolls, from $79 + GST.',
      eyebrow: 'Entry-level floor marking tape',
      titleHtml: 'Lean Line 570<br><em>Floor Marking</em><br>Tape',
      longTitle: true,
      cardType: 'Low traffic · 0.5mm',
      cardCopy: 'An easy-to-install-yourself tape for low traffic areas, walkways, storage locations and workstations.',
      badge: '0.5mm · from $79',
      tag: '0.5mm · 50mm x 30m roll',
      description: 'The Lean Line 570 Floor Tape is a fast and effective way to create clear visual boundaries throughout your facility, however its only recommended for low traffic applications. If you’re improving your workplace organisation, this durable floor tape helps define work areas, walkways, storage locations and equipment zones without the downtime or mess of painted lines.',
      descriptionSecondary: '',
      colours: LEAN_COLOURS,
      widths: ['50mm'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2023/02/Lean-Line-570-No-BG-Yellow.png',
        white: UP + '2023/02/Lean-Line-570-No-BG-White.png',
        red: UP + '2023/02/Lean-Line-570-No-BG-Red-.png',
        blue: UP + '2023/02/Lean-Line-570-No-BG-Blue.png',
        green: UP + '2023/02/Lean-Line-570-No-BG-Green-.png',
        orange: UP + '2023/02/Lean-Line-570-No-BG-Orange.png',
        black: UP + '2023/02/Lean-Line-570-No-BG-Black.png',
        'diagonal-black-yellow': UP + '2023/02/Lean-Line-570-No-BG-Yellow-Black.png',
        'diagonal-black-white': UP + '2023/02/Lean-Line-960-No-BG-Black-White.png',
        'diagonal-red-white': UP + '2023/02/Lean-Line-570-No-BG-Red-White.png',
        'diagonal-green-white': UP + '2023/02/Lean-Line-960-No-BG-Green-White.png',
        'diagonal-orange-black': UP + '2023/02/Lean-Line-960-No-BG-Black-Orange.png'
      },
      prices: { 'default|50mm': 79 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Low traffic only. If forklifts cross the line, specify Lean Line 960 or MightyLine instead. Call <a href="tel:1300590505">1300 590 505</a> if you are unsure.',
      featuresTitle: 'Lay out the plan<br>before you commit.',
      featuresIntro: 'A fast, flexible option for organising a workplace through clear visual management in low traffic areas.',
      features: [
        ['', 'Low-range marking tape for indoor use'],
        ['', 'Quick peel-and-stick installation'],
        ['', '0.5mm thick – withstanding medium traffic'],
        ['', '1 year warranty'],
        ['', 'Square cut edges'],
        ['', 'No production downtime needed for install'],
        ['', 'No contamination issues for pharmaceutical or food produce'],
        ['', 'Easy to clean surface'],
        ['', 'Bright colours for maximum visibility'],
        ['', 'Easily replaced if layouts change'],
        ['', 'Helps improve workplace organisation and efficiency']
      ],
      notes: [
        'Not recommended for rough, damaged or porous concrete.',
        'Heavy forklift turning or dragging pallets across the tape may reduce its lifespan.',
        'Only suitable for applications where the ambient temperature is above 10°C',
        'Ensure surface is clean, dry and oil free before installation.',
        'Do not apply tape lengthways on floor joints',
        'Not suitable for external use',
        'Do not apply over existing paint or tape',
        'Warranty does not cover damage',
        'Ensure the floor is clean, dry and free from dust before installation.',
        'Can be cut to any length to suit your facility layout.',
        'Available in a range of colours to support visual management systems.',
        'Length: 30m',
        'Width: 50mm'
      ],
      applications: ['Walkways', 'Storage locations', 'Pallet bays', 'Equipment parking areas', 'Production lines', 'Workstations'],
      specs: [['Thickness','0.5mm'],['Roll size','50mm x 30m'],['Colours','12, including five diagonal hazard patterns'],['Warranty','1 year'],['Traffic rating','Low traffic, foot traffic'],['Environment','Internal only'],['Edges','Square cut'],['Installation','Peel and stick, no curing time']],
      related: ['lean-line-960', 'mightyline-tape', 'arrow']
    },

    'external-tape': {
      keyMetrics: [['Thickness','1.3mm'],['Traffic rating','Vehicle + pedestrian'],['Warranty','3 years']],
      group: 'tape',
      slug: 'cotewell-external-line-marking-tape',
      canonical: 'https://cotewell.com.au/product/cotewell-external-line-marking-tape/',
      shortName: 'External Line Marking Tape',
      breadcrumb: 'External Line Marking Tape',
      title: 'External Line Marking Tape | Outdoor Floor Tape | Cotewell',
      descriptionMeta: 'Outdoor line marking tape for asphalt and concrete. 1.3mm thick, P5 slip rated, reflective and UV resistant, with a 3-year warranty. Five colours.',
      eyebrow: 'Outdoor line marking tape',
      titleHtml: 'Cotewell<br><em>External Line</em><br>Marking Tape',
      longTitle: true,
      cardType: 'Outdoor · P5 slip rated',
      cardCopy: 'A 1.3mm reflective, UV-resistant tape for car parks, vehicle lanes and outdoor walkways on asphalt or concrete.',
      badge: 'Outdoor · reflective',
      tag: 'P5 slip rated · reflective',
      description: 'The Cotewell External Floor Tape is engineered to withstand the harsh conditions that outdoor environments throw at it. From rain and UV exposure to heavy pedestrian traffic, this premium tape provides a durable, highly visible alternative to painted lines on asphalt and concrete surfaces.',
      descriptionSecondary: 'One of the thickest quality external tapes on the market, we guarantee this will give you more control over your external line markings.',
      colours: ['yellow', 'white', 'red', 'blue', 'green'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2022/06/Cotewell-External-Tape-Yellow.png',
        white: UP + '2022/06/Cotewell-External-Tape-Yellow.png',
        red: UP + '2022/06/Cotewell-External-Tape-Yellow.png',
        blue: UP + '2022/06/Cotewell-External-Tape-Yellow.png',
        green: UP + '2022/06/Cotewell-External-Tape-Yellow.png'
      },
      photos: [
        { src: UP + '2022/07/External-Tape-1024x768.jpg', thumb: UP + '2022/07/External-Tape-300x225.jpg', alt: 'Cotewell external line marking tape on an outdoor asphalt surface' },
        { src: UP + '2022/07/External-Tape-Crossing-1024x768.jpg', thumb: UP + '2022/07/External-Tape-Crossing-300x225.jpg', alt: 'External line marking tape marking a pedestrian crossing' },
        { src: UP + '2022/07/External-Green-Red-1024x768.jpg', thumb: UP + '2022/07/External-Green-Red-300x225.jpg', alt: 'Green and red external line marking tape on concrete' },
      ],
      prices: { 'default|-': 259 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Surface preparation drives the result outdoors. Call <a href="tel:1300590505">1300 590 505</a> before ordering so we can check the surface is suitable.',
      featuresTitle: 'Marking that survives<br>the weather.',
      featuresIntro: 'The only tape in the range specified for outdoor asphalt and concrete. Everything else on this page is internal only.',
      features: [
        ['', 'Designed specifically for outdoor asphalt and concrete surfaces'],
        ['', '1.3mm thick – up to 7 times thicker than standard tapes and paint'],
        ['', 'Quick peel-and-stick installation'],
        ['', '3 year warranty'],
        ['', 'P5 slip-rated surface for enhanced pedestrian safety'],
        ['', 'Highly reflective for improved visibility in low-light and night-time conditions'],
        ['', 'Easily removed or replaced if layouts change'],
        ['', 'No production downtime required during installation'],
        ['', 'Weather and UV resistant for long-lasting performance']
      ],
      notes: [
        'Surface preparation is essential to achieve maximum adhesion and product lifespan.',
        'Continuous heavy turning movements, wheel spinning or dragging of equipment directly over the tape may reduce its lifespan.',
        'Designed to withstand outdoor weather conditions and UV exposure.',
        'Suitable for creating custom layouts, including pedestrian walkways, traffic lanes, storage areas and safety zones.',
        'Can be cut to any length or shape to suit your site\'s specific requirements.',
        'Do not apply over existing paint, tape or contaminated surfaces.',
        'Not suitable for loose, damaged or heavily textured surfaces.',
        'Not for internal use.',
        'Length: 25m'
      ],
      applications: ['Hazard identification', 'Exclusion zones', 'Keep-clear areas', 'Emergency access routes', 'Forklift routes', 'One-way traffic systems', 'Vehicle lanes', 'Shared traffic zones', 'Fire equipment boundaries', 'Pedestrian walkways', 'Pallet storage bays', 'Equipment parking areas', 'Material storage zones', 'Loading and unloading areas'],
      specs: [['Thickness','1.3mm'],['Slip rating','P5'],['Colours','Yellow, white, red, blue and green'],['Warranty','3 years'],['Visibility','Reflective face for low light'],['Environment','External asphalt and concrete only'],['Resistance','Weather and UV resistant'],['Installation','Peel and stick, no curing time']],
      related: ['mightyline-tape', 'lean-line-960', 'stop-sign']
    },

    /* ---------------------------------------------------------- SHAPES */
    'angle-shape': {
      keyMetrics: [['Size','152 x 50 / 75mm'],['Colours','7'],['Sold as','Individual']],
      group: 'shapes',
      slug: 'mightyline-5s-angle-shape',
      canonical: 'https://cotewell.com.au/product/mightyline-5s-angle-shape/',
      shortName: 'MightyLine 5S Angle Shape',
      breadcrumb: '5S Angle Shape',
      title: 'MightyLine 5S Angle Shape | Pallet Bay Corner Markers | Cotewell',
      descriptionMeta: 'L-shaped 5S floor markers that define pallet bays and storage locations using far less material than taped boxes. Seven colours, 50mm and 75mm widths.',
      eyebrow: '5S floor marking shape',
      titleHtml: 'MightyLine<br><em>5S Angle</em><br>Shape',
      cardType: 'Pallet bays · corner markers',
      cardCopy: 'L-shaped corner markers that define pallet bays with a fraction of the material a taped box needs.',
      badge: 'From $8.50 + GST',
      tag: '152 x 50mm and 152 x 75mm',
      description: 'The Mighty Line 5S Angle Shape makes it quick and easy to create clearly defined pallet bays, storage locations and equipment zones. Built from durable Mighty Line material, these highly visible corner markers provide a cleaner, more flexible alternative to full floor outlines while supporting an organised and efficient 5S workplace.',
      descriptionSecondary: '',
      colours: SHAPE_COLOURS,
      widths: ['50mm', '75mm'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2020/06/angle-shape-yellow.png',
        blue: UP + '2020/06/angle-shape-blue.png',
        green: UP + '2020/06/angle-shape-green.png',
        orange: UP + '2020/06/angle-shape-orange.png',
        red: UP + '2020/06/angle-shape-red.png',
        black: UP + '2020/06/angle-shape-black.png',
        white: UP + '2020/06/angle-shape-white.png'
      },
      prices: { 'default|50mm': 8.5, 'default|75mm': 12.5 },
      priceLabel: 'Price each',
      purchaseNote: 'Four angles mark one pallet bay. Call <a href="tel:1300590505">1300 590 505</a> and we will help you work out quantities from your rack layout.',
      featuresTitle: 'Mark the corners,<br>not the whole box.',
      featuresIntro: 'The fastest way to lay out a 5S floor: four corner markers per bay instead of a full taped rectangle.',
      features: [
        ['', 'Heavy-duty construction for demanding industrial environments'],
        ['', 'Clearly defines corners of pallet and storage bays'],
        ['', 'Withstands industrial wheeled traffic'],
        ['', 'Quick peel-and-stick installation'],
        ['', 'No production downtime required'],
        ['', 'Uses less material than marking complete boxes'],
        ['', 'Easy-to-clean surface'],
        ['', 'Easily replaced or repositioned as layouts change'],
        ['', '3 year warranty']
      ],
      notes: [
        'For internal use only',
        'Apply to a clean, dry and oil-free surface',
        'Do not apply over existing paint or tape',
        'Surface preparation is essential for maximum adhesion',
        'Heavy wheel spinning, sharp turning or dragging equipment directly over the shape may cause damage',
        'Available in 2 widths: 152 x 50mm & 152 x 75mm'
      ],
      applications: ['Pallet bays', 'Warehouse storage locations', 'Equipment parking areas', 'Workstations', 'Pick and pack areas', 'Production zones', 'Manufacturing facilities', 'Distribution centres', 'Warehouses'],
      specs: [['Sizes','152 x 50mm and 152 x 75mm'],['Colours','Yellow, blue, green, orange, red, black, white'],['Warranty','3 years'],['Sold as','Individual markers'],['Environment','Internal only, clean and dry floors'],['Installation','Peel and stick']],
      related: ['t-shape', 'arrow', 'mightyline-tape']
    },

    't-shape': {
      keyMetrics: [['Size','152 x 152mm'],['Colours','7'],['Sold as','Individual']],
      group: 'shapes',
      slug: 'mightyline-5s-t-shape',
      canonical: 'https://cotewell.com.au/product/mightyline-5s-t-shape/',
      shortName: 'MightyLine 5S T Shape',
      breadcrumb: '5S T Shape',
      title: 'MightyLine 5S T Shape | Floor Marking T Markers | Cotewell',
      descriptionMeta: 'MightyLine 5S T shapes for pallet and item marking in 5S environments. 152 x 152mm in 50mm and 75mm widths, seven colours, 3-year limited warranty.',
      eyebrow: '5S floor marking shape',
      titleHtml: 'MightyLine<br><em>5S T</em><br>Shape',
      cardType: 'Shared corners · 5S layouts',
      cardCopy: 'T markers for where two bays meet, so a run of pallet locations reads as one continuous grid.',
      badge: 'From $8.50 + GST',
      tag: '50mm and 75mm widths',
      description: 'The Mighty Line 5S T-Shape makes it easy to create clearly defined pallet bays, storage locations and work areas without marking complete boxes on the floor. Built from durable Mighty Line material, these highly visible markers help maintain consistent layouts and keep busy industrial workplaces organised, efficient and easy to navigate.',
      descriptionSecondary: '',
      colours: SHAPE_COLOURS,
      widths: ['50mm', '75mm'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2020/06/t-shape-yellow.png',
        blue: UP + '2020/06/t-shape-blue.png',
        green: UP + '2020/06/t-shape-green.png',
        orange: UP + '2020/06/t-shape-orange.png',
        red: UP + '2020/06/t-shape-red.png',
        black: UP + '2020/06/t-shape-black.png',
        white: UP + '2020/06/t-shape-white.png'
      },
      prices: { 'default|50mm': 8.5, 'default|75mm': 12.5 },
      priceLabel: 'Price each',
      purchaseNote: 'Most sites order T shapes and angle shapes together. Call <a href="tel:1300590505">1300 590 505</a> and we will work out the split from your layout.',
      featuresTitle: 'For where two<br>bays meet.',
      featuresIntro: 'Angles mark the ends of a run. T shapes mark every division in between.',
      features: [
        ['', 'Heavy-duty construction for demanding industrial environments'],
        ['', 'Ideal for creating multiple adjoining pallet or storage bays'],
        ['', 'Withstands industrial wheeled traffic'],
        ['', 'Quick peel-and-stick installation'],
        ['', 'No production downtime required'],
        ['', 'Highly visible for clear visual management'],
        ['', 'Easy-to-clean surface'],
        ['', 'Easily replaced or repositioned when layouts change'],
        ['', 'Supports Lean Manufacturing and 5S workplace organisation']
      ],
      notes: [
        'For internal use only',
        'Apply to a clean, dry and oil-free surface',
        'Do not apply over existing paint or tape',
        'Surface preparation is essential for maximum adhesion',
        'Heavy wheel spinning, sharp turning or dragging equipment directly over the shape may cause damage',
        'Ideal for marking adjoining bays where a shared boundary point is required'
      ],
      applications: ['Pallet bays', 'Storage locations', 'Equipment parking areas', 'Workstations', 'Pick and pack areas', 'Production zones', 'Warehouse organisation', 'Manufacturing facilities', 'Lean and 5S workplaces'],
      specs: [['Widths','50mm and 75mm'],['Colours','Yellow, blue, green, orange, red, black, white'],['Best for','Adjoining pallet or storage bays'],['Sold as','Individual markers'],['Environment','Internal only'],['Installation','Peel and stick']],
      related: ['angle-shape', 'arrow', 'footprints']
    },

    'arrow': {
      keyMetrics: [['Size','254 x 152mm'],['Colours','5'],['Sold as','Individual']],
      group: 'shapes',
      slug: 'mightyline-5s-arrow',
      canonical: 'https://cotewell.com.au/product/mightyline-5s-arrow/',
      shortName: 'MightyLine 5S Arrow',
      breadcrumb: '5S Arrow',
      title: 'MightyLine 5S Arrow | Floor Marking Arrows | Cotewell',
      descriptionMeta: 'Patented MightyLine floor marking arrows, 254mm long and 152mm at the widest point. Direct traffic flow and point to emergency exits. Five colours.',
      eyebrow: '5S floor marking shape',
      titleHtml: 'MightyLine<br><em>5S</em><br>Arrow',
      cardType: 'Direction · egress routes',
      cardCopy: 'Peel-and-stick arrows that direct pedestrian and vehicle movement along designated routes.',
      badge: '$12.50 + GST each',
      tag: '254mm long · 152mm wide',
      description: 'The MightyLine 5S Arrow provides a simple, highly visible way to direct pedestrian and vehicle movement throughout busy industrial workplaces. Built with Mighty Line’s heavy-duty construction, these durable floor arrows help create clear traffic flow, reinforce designated routes and support a safer, more organised 5S workplace.',
      descriptionSecondary: '',
      colours: ['yellow', 'green', 'red', 'blue', 'orange'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2020/06/arrow-shape-yellow.png',
        green: UP + '2020/06/arrow-shape-green.png',
        red: UP + '2020/06/arrow-shape-red.png',
        blue: UP + '2020/06/arrow-shape-blue.png',
        orange: UP + '2020/06/arrow-shape-orange.png'
      },
      prices: { 'default|-': 12.5 },
      priceLabel: 'Price each',
      purchaseNote: 'Available in five colours so arrows can be matched to your existing visual management system. Call <a href="tel:1300590505">1300 590 505</a> if you want the colour scheme checked.',
      featuresTitle: 'Point people<br>the right way.',
      featuresIntro: 'Reinforces designated routes and one-way systems so forklift and pedestrian flow stays predictable.',
      features: [
        ['', 'Highly visible directional arrow'],
        ['', 'Heavy-duty construction for demanding industrial environments'],
        ['', 'Designed to withstand industrial wheeled traffic'],
        ['', 'Quick peel-and-stick installation'],
        ['', 'No production downtime required'],
        ['', 'Durable, easy-to-clean surface'],
        ['', 'Helps reinforce traffic flow and visual management'],
        ['', 'Easy to replace or reposition as layouts change']
      ],
      notes: [
        'For internal use only',
        'Apply to a clean, dry and oil-free surface',
        'Do not apply over existing paint or tape',
        'Heavy wheel spinning, sharp turning or dragging equipment directly over the arrow may cause damage',
        'Surface preparation is essential for maximum adhesion',
        '254mm long & 152mm wide'
      ],
      applications: ['Forklift traffic routes', 'Pedestrian walkways', 'Warehouse aisles', 'One-way traffic systems', 'Loading and dispatch areas', 'Manufacturing facilities', 'Distribution centres'],
      specs: [['Length','254mm'],['Width','152mm at the widest point'],['Colours','Yellow, green, red, blue, orange'],['Sold as','Individual markers'],['Environment','Internal only'],['Installation','Peel and stick']],
      related: ['footprints', 'angle-shape', 'stop-sign']
    },

    'footprints': {
      keyMetrics: [['Size','241 x 89mm'],['Colours','5'],['Sold as','Pair']],
      group: 'shapes',
      slug: 'small-footprints-pair',
      canonical: 'https://cotewell.com.au/product/small-footprints-pair/',
      shortName: 'Small Footprints (Pair)',
      breadcrumb: 'Small Footprints',
      title: 'Mighty Line Small Footprints (Pair) | Walkway Markers | Cotewell',
      descriptionMeta: 'Patented Mighty Line footprint floor stickers, 241mm long and 89mm wide. Show pedestrians the safe walkway. Five colours.',
      eyebrow: 'Pedestrian walkway marker',
      titleHtml: 'Mighty Line<br><em>Small Footprints</em><br>(Pair)',
      longTitle: true,
      cardType: 'Walkways · sold in pairs',
      cardCopy: 'Footprint decals laid in the direction of travel to show pedestrians where the safe aisle runs.',
      badge: '$14.70 + GST per pair',
      tag: '241mm long · 89mm wide',
      description: 'The Mighty Line Small Footprints provide a simple, highly visible way to guide pedestrians along designated routes throughout your workplace. Durable and easy to install, they help separate pedestrian movement from operational areas. Mighty Line footprints are 241 mm long and 89 mm wide.',
      descriptionSecondary: '',
      colours: ['yellow', 'green', 'red', 'blue', 'orange'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2020/06/footprint-shape-yellow.png',
        green: UP + '2020/06/footprint-shape-green.png',
        red: UP + '2020/06/footprint-shape-red.png',
        blue: UP + '2020/06/footprint-shape-blue.png',
        orange: UP + '2020/06/footprint-shape-orange.png'
      },
      prices: { 'default|-': 14.7 },
      priceLabel: 'Price per pair',
      purchaseNote: 'Sold as a pair. Call <a href="tel:1300590505">1300 590 505</a> and we will help you work out spacing along the walkway.',
      featuresTitle: 'The walkway,<br>read at a glance.',
      featuresIntro: 'A line tells people where the aisle is. Footprints tell them which way to walk down it.',
      features: [
        ['', 'Highly visible footprint design'],
        ['', 'Durable construction for industrial environments'],
        ['', 'Quick peel-and-stick installation'],
        ['', 'No production downtime required'],
        ['', 'Helps clearly identify pedestrian routes'],
        ['', 'Easy-to-clean surface'],
        ['', 'Easily replaced or repositioned as layouts change'],
        ['', 'Supports Lean and 5S visual management']
      ],
      notes: [
        'For internal use only',
        'Apply to a clean, dry and oil-free surface',
        'Surface preparation is essential for maximum adhesion',
        'Do not apply over existing paint or tape',
        'Heavy wheel spinning, sharp turning or dragging equipment directly over the footprints may cause damage'
      ],
      applications: ['Pedestrian walkways', 'Warehouse aisles', 'Designated safe routes', 'Production areas', 'Pick and pack zones', 'Manufacturing facilities', 'Distribution centres'],
      specs: [['Length','241mm'],['Width','89mm'],['Sold as','Pair'],['Colours','Yellow, green, red, blue, orange'],['Environment','Internal only'],['Installation','Peel and stick']],
      related: ['freezer-footprints', 'arrow', 'lean-line-570']
    },

    'freezer-footprints': {
      keyMetrics: [['Size','241 x 89mm'],['Colours','3'],['Sold as','Pair']],
      group: 'shapes',
      slug: 'mighty-line-x-treme-freezer-small-footprints-pair',
      canonical: 'https://cotewell.com.au/product/mighty-line-x-treme-freezer-small-footprints-pair/',
      shortName: 'X-Treme Freezer Footprints (Pair)',
      breadcrumb: 'Freezer Footprints',
      title: 'X-Treme Freezer Footprints (Pair) | Cold Room Markers | Cotewell',
      descriptionMeta: 'Freezer-rated footprint floor stickers for cold rooms and sub-zero storage, where standard markings fail. 241 x 89mm, supplied in pairs, three colours.',
      eyebrow: 'Cold store walkway marker',
      titleHtml: 'X-Treme Freezer<br><em>Small Footprints</em><br>(Pair)',
      longTitle: true,
      cardType: 'Sub-zero · sold in pairs',
      cardCopy: 'Footprint markers with adhesive built for freezers and cold rooms, where standard decals lift.',
      badge: '$20.00 + GST per pair',
      tag: 'Sub-zero adhesive',
      description: 'The Mighty Line X-Treme Freezer Footprints provide a simple, highly visible way to guide pedestrian traffic through cold rooms and freezer facilities. Designed specifically for sub-zero environments, they maintain excellent adhesion where standard floor markings can fail. Just peel and stick the footprints in the direction of the safety aisle way.',
      descriptionSecondary: '',
      colours: ['yellow', 'white', 'red'],
      defaultColour: 'yellow',
      images: {
        yellow: UP + '2020/06/footprint-shape-yellow.png',
        white: UP + '2020/06/footprint-shape-white.png',
        red: UP + '2020/06/footprint-shape-red.png'
      },
      prices: { 'default|-': 20 },
      priceLabel: 'Price per pair',
      purchaseNote: 'Install onto dry, frost-free floors. Call <a href="tel:1300590505">1300 590 505</a> to plan the install window around your cold chain.',
      featuresTitle: 'Adhesion where<br>standard decals lift.',
      featuresIntro: 'Same footprint, different adhesive. This is the version to specify anywhere below freezing.',
      features: [
        ['', 'Designed specifically for freezer and cold room environments'],
        ['', 'Highly visible footprint design'],
        ['', 'Excellent adhesion in sub-zero temperatures'],
        ['', 'Quick peel-and-stick installation'],
        ['', 'Helps reinforce designated pedestrian walkways'],
        ['', 'Easy to replace if layouts change']
      ],
      notes: [
        'Designed for indoor freezer and cold room applications only',
        'Surface must be clean, dry and free from contaminants before installation',
        'Heavy dragging of pallets or equipment directly over the footprints may reduce product lifespan',
        '241mm long & 89mm wide'
      ],
      applications: ['Cold rooms', 'Freezer facilities', 'Food processing plants', 'Distribution centres', 'Warehouse walkways', 'Pedestrian routes', 'Pick and pack areas', 'Chilled storage facilities'],
      specs: [['Length','241mm'],['Width','89mm'],['Sold as','Pair'],['Colours','Yellow, white and red'],['Environment','Freezer and cold room, internal'],['Installation','Peel and stick']],
      related: ['freezer-tape', 'footprints', 'arrow']
    },

    /* ---------------------------------------------------------- SIGNS */
    'stop-sign': {
      keyMetrics: [['Size','910mm wide'],['Message','STOP'],['Finish','Laminated']],
      group: 'signs',
      slug: 'mightyline-floor-sticker-stop-sign',
      canonical: 'https://cotewell.com.au/product/mightyline-floor-sticker-stop-sign/',
      shortName: 'Stop Sign Floor Sticker',
      breadcrumb: 'Stop Sign Floor Sticker',
      title: 'Stop Sign Floor Sticker | 910mm Safety Floor Sign | Cotewell',
      descriptionMeta: 'A 910mm laminated stop sign floor sticker for warehouse intersections and forklift crossings. Durable peel-and-stick install for indoor industrial floors.',
      eyebrow: 'Safety floor sign',
      titleHtml: 'MightyLine<br><em>Stop Sign</em><br>Floor Sticker',
      longTitle: true,
      cardType: 'Intersections · 910mm',
      cardCopy: 'A 910mm stop sign on the floor, for intersections and forklift crossings where a wall sign is missed.',
      badge: '910mm wide',
      tag: '910mm wide · laminated',
      description: 'The Mighty Line Stop Sign Floor Sticker provides a bold visual reminder for pedestrians and vehicle operators to stop and assess their surroundings before proceeding. Ideal for warehouse intersections, forklift crossings and other high-risk areas, this durable floor sticker helps reinforce workplace safety procedures while reducing the need for constant verbal reminders. It’s a simple yet effective way to improve awareness and encourage safer movement throughout your facility.',
      descriptionSecondary: '',
      colours: [],
      defaultColour: null,
      images: { _default: UP + '2026/04/Stop-Sign-Sticker.png' },
      prices: { 'default|-': 304 },
      priceLabel: 'Price each',
      purchaseNote: 'Other designs and custom messages are available on request. Call <a href="tel:1300590505">1300 590 505</a> to discuss artwork.',
      featuresTitle: 'The sign people<br>actually look at.',
      featuresIntro: 'Wall-mounted signage gets missed. A 910mm floor sign sits in the operator line of sight at an intersection.',
      features: [
        ['', 'Highly visible stop sign design'],
        ['', 'Quick peel-and-stick installation'],
        ['', 'Durable laminated finish for long-lasting performance'],
        ['', 'Reinforces workplace safety procedures'],
        ['', 'Helps improve awareness at high-risk intersections'],
        ['', 'Professional, easy-to-read design'],
        ['', 'Suitable for a wide range of indoor industrial environments']
      ],
      notes: [
        'Designed for internal use only.',
        'Not recommended for rough, damaged or uneven surfaces.',
        'Excessive forklift traffic or dragging heavy objects directly over the sticker may reduce its lifespan.',
        'Ensure the surface is clean and dry before installation for maximum adhesion.',
        '910mm wide'
      ],
      applications: ['Intersections', 'Forklift crossings', 'Pedestrian walkways', 'Entrances and exits', 'Production areas', 'Loading docks', 'High-risk traffic zones'],
      specs: [['Width','910mm'],['Finish','Laminated'],['Message','STOP'],['Environment','Internal only'],['Custom designs','Available on request'],['Installation','Peel and stick']],
      related: ['forklift-sign', 'keep-clear', 'mightyline-tape']
    },

    'forklift-sign': {
      keyMetrics: [['Size','610mm wide'],['Message','Warning Forklift Traffic'],['Finish','Industrial strength']],
      group: 'signs',
      slug: 'mightyline-floor-sticker-warning-forklift-traffic',
      canonical: 'https://cotewell.com.au/product/mightyline-floor-sticker-warning-forklift-traffic/',
      shortName: 'Warning Forklift Traffic Sticker',
      breadcrumb: 'Warning Forklift Traffic',
      title: 'Warning Forklift Traffic Floor Sign | 610mm | Cotewell',
      descriptionMeta: 'A 610mm industrial-strength Warning Forklift Traffic floor sign for 5S facilities, lean operations and warehouse safety. Other designs on request.',
      eyebrow: 'Safety floor sign',
      titleHtml: 'MightyLine<br><em>Warning Forklift</em><br>Traffic Sticker',
      longTitle: true,
      cardType: 'Shared aisles · 610mm',
      cardCopy: 'A 610mm warning sign for the point where pedestrians walk into a forklift route.',
      badge: '610mm wide',
      tag: '610mm wide · industrial strength',
      description: 'The Warning Forklift Traffic Floor Sticker delivers a bold, highly visible reminder exactly where it matters most. Ideal for busy warehouses where it can alert pedestrians to forklift activity ahead, helping reinforce safe behaviour and improve awareness in shared traffic areas.',
      descriptionSecondary: '',
      colours: [],
      defaultColour: null,
      images: { _default: UP + '2020/06/warning-forklift-sticker.png' },
      prices: { 'default|-': 195 },
      priceLabel: 'Price each',
      purchaseNote: 'Other designs and custom messages are available on request. Call <a href="tel:1300590505">1300 590 505</a> to discuss artwork.',
      featuresTitle: 'Warn people before<br>they step in.',
      featuresIntro: 'The highest-value place for this sign is the threshold, not the middle of the aisle.',
      features: [
        ['', 'Bold, highly visible forklift warning'],
        ['', 'Helps alert pedestrians to approaching forklift traffic'],
        ['', 'Durable construction for industrial environments'],
        ['', 'Quick and easy peel-and-stick installation'],
        ['', 'No production downtime required'],
        ['', 'Easy-to-clean surface']
      ],
      notes: [
        'For internal use only',
        'Apply to a clean, dry and oil-free surface',
        'Best suited to smooth, sound floor surfaces',
        'Heavy wheel turning, pallet dragging or scraping may cause damage',
        'Do not apply over existing tape or damaged coatings',
        'Position where the warning is clearly visible to approaching pedestrians',
        '610m wide'
      ],
      applications: ['Forklift crossings', 'Pedestrian and forklift intersections', 'Warehouse aisles', 'Loading and dispatch areas', 'Manufacturing facilities', 'High-traffic warehouse areas'],
      specs: [['Width','610mm'],['Message','Warning Forklift Traffic'],['Finish','Industrial strength'],['Environment','Internal only'],['Custom designs','Available on request'],['Installation','Peel and stick']],
      related: ['stop-sign', 'keep-clear', 'footprints']
    },

    'keep-clear': {
      keyMetrics: [['Size','610mm wide'],['Message','Keep Clear, Do Not Block'],['Finish','Laminated']],
      group: 'signs',
      slug: 'mightyline-floor-sticker-keep-clear-do-not-block',
      canonical: 'https://cotewell.com.au/product/mightyline-floor-sticker-keep-clear-do-not-block/',
      shortName: 'Keep Clear Do Not Block Sticker',
      breadcrumb: 'Keep Clear Do Not Block',
      title: 'Keep Clear Do Not Block Floor Sticker | 610mm | Cotewell',
      descriptionMeta: 'A 610mm Keep Clear Do Not Block floor sticker for emergency exits, switchboards and fire equipment. Durable laminated finish, other designs on request.',
      eyebrow: 'Safety floor sign',
      titleHtml: 'MightyLine<br><em>Keep Clear</em><br>Floor Sticker',
      longTitle: true,
      cardType: 'Access points · 610mm',
      cardCopy: 'Marks the floor in front of exits, switchboards and fire equipment so nothing gets stored there.',
      badge: '610mm wide',
      tag: '610mm wide · laminated',
      description: 'The Keep Clear – Do Not Block Floor Sticker is industrial strength ensuring it can withstand a medium amount of traffic. It provides an instant visual reminder to keep important access points free from obstruction. Ideal for emergency exits, electrical switchboards, fire equipment and access zones, this durable floor sticker reinforces workplace safety by clearly communicating where items should never be stored. It’s a simple, professional solution that helps create safer, more organised industrial workplaces. Other designs are available on request.',
      descriptionSecondary: '',
      colours: [],
      defaultColour: null,
      images: { _default: UP + '2026/04/Keep-Clear-Sticker.png' },
      prices: { 'default|-': 195 },
      priceLabel: 'Price each',
      purchaseNote: 'Other designs and custom messages are available on request. Call <a href="tel:1300590505">1300 590 505</a> to discuss artwork.',
      featuresTitle: 'Stops the floor<br>becoming storage.',
      featuresIntro: 'Most blocked switchboards and exits are not deliberate. A marked floor removes the ambiguity.',
      features: [
        ['', 'Highly visible “Keep Clear – Do Not Block” safety message'],
        ['', 'Quick peel-and-stick installation'],
        ['', 'Durable laminated finish for long-lasting performance'],
        ['', 'Helps reinforce workplace safety procedures'],
        ['', 'Reduces the need for constant verbal reminders'],
        ['', 'Professional, easy-to-read design'],
        ['', 'Suitable for a variety of indoor industrial environments']
      ],
      notes: [
        'Designed for internal use only.',
        'Not recommended for rough, damaged or uneven surfaces.',
        'Excessive forklift traffic or dragging heavy objects directly over the sticker may reduce its lifespan.',
        'Ensure the surface is clean and dry before installation for maximum adhesion.',
        '610mm wide'
      ],
      applications: ['Emergency exits', 'Fire extinguishers and hose reels', 'Electrical switchboards', 'First aid stations', 'Safety equipment', 'Access panels', 'Walkways'],
      specs: [['Width','610mm'],['Message','Keep Clear, Do Not Block'],['Finish','Laminated'],['Traffic rating','Medium'],['Environment','Internal only'],['Custom designs','Available on request'],['Installation','Peel and stick']],
      related: ['stop-sign', 'forklift-sign', 'external-tape']
    }
  };

  // Live-checked copy reconciled before mirroring the revised mockups.
  var reviewedProductCopy = {








};
  Object.keys(reviewedProductCopy).forEach(function (key) {
    Object.assign(productData[key], reviewedProductCopy[key]);
  });

  var ORDER = ['mightyline-tape','freezer-tape','lean-line-960','lean-line-570','external-tape','angle-shape','t-shape','arrow','footprints','freezer-footprints','stop-sign','forklift-sign','keep-clear'];

  var COMPARE_ROWS = [
    { key: 'mightyline-tape', thickness: '1.3mm', traffic: 'Heavy forklift', warranty: '3 years', env: 'Internal' },
    { key: 'external-tape',   thickness: '1.3mm', traffic: 'Vehicle + pedestrian', warranty: '3 years', env: 'External' },
    { key: 'freezer-tape',    thickness: 'Freezer grade', traffic: 'Industrial wheeled', warranty: '2 years', env: 'To -29°C' },
    { key: 'lean-line-960',   thickness: '0.9mm', traffic: 'Medium', warranty: '2 years', env: 'Internal' },
    { key: 'lean-line-570',   thickness: '0.5mm', traffic: 'Low', warranty: '1 year', env: 'Internal' }
  ];

  /* Learning-centre articles that answer the questions the FAQ cannot cover in a
     paragraph. Placed under the FAQ so the next click stays on Cotewell. */
  var ARTICLES = [
    { href: 'https://cotewell.com.au/sick-of-repainting-your-lines-every-6-months-so-was-this-customer/',
      img: UP + '2026/08/Customer-Story-CAP-Line-Marking-for-Blog-1024x576.jpg',
      cat: 'Customer story',
      title: 'Sick of repainting your lines every 6 months? So was this customer',
      blurb: 'A concrete plant repainting every six months moved to Cold Applied Plastic. Eighteen months on, the lines are still doing the job.' },
    { href: 'https://cotewell.com.au/why-line-marking-tape-fails-and-how-to-make-it-last/',
      img: UP + '2025/11/shared-image-18-225x300.jpg',
      cat: 'Tape guide',
      title: 'Why line marking tape fails and how to make it last',
      blurb: 'Most tape failures are not the tape. They are surface preparation, environment or maintenance. Here is what to get right first.' },
    { href: 'https://cotewell.com.au/why-line-marking-fails-in-cold-facilities-the-product-you-need/',
      img: UP + '2025/10/shared-image-17-1-2-225x300.jpg',
      cat: 'Cold storage',
      title: 'Why line marking fails in cold facilities',
      blurb: 'Cold storage breaks standard adhesives. What peeling, cracking markings are telling you, and the product specified for it.' },
    { href: 'https://cotewell.com.au/what-colours-should-i-use-for-line-marking/',
      img: UP + '2022/01/Extinguisher-and-Walkway-300x203.jpg',
      cat: 'Colour standards',
      title: 'What colours should I use for line marking?',
      blurb: 'Which colour belongs on walkways, forklift routes, storage bays and fire equipment, with photographs from live sites.' }
  ];

  var FAQS = [
    { q: 'How long does line marking tape last?',
      a: 'It depends on the tape and the traffic. Lean Line 570 at 0.5mm carries a 1-year warranty and suits foot traffic. Lean Line 960 at 0.9mm carries 2 years for medium traffic. MightyLine at 1.3mm carries a 3-year limited adhesion warranty and is the one built to withstand heavy industrial forklift and wheeled traffic. Putting a light tape on a forklift route is the single most common reason tape fails early.' },
    { q: 'Is floor marking tape better than painted lines?',
      a: 'For most internal industrial floors, yes. Tape installs in hours with no curing time and no production downtime, and MightyLine saves up to 60% in ongoing maintenance compared with painted line marking. Paint still has a place on very rough or heavily contaminated surfaces where tape will not bond.' },
    { q: 'Can I use line marking tape outdoors?',
      a: 'Only the Cotewell External Line Marking Tape. Everything else on this page is specified for internal use only. The external tape is 1.3mm, P5 slip rated, reflective and UV resistant, and it is designed for asphalt and concrete.' },
    { q: 'How do I prepare the floor before installing tape?',
      a: 'The surface must be clean, dry and free from dust, grease and oil. Do not apply over existing paint or tape, and avoid running tape lengthways along floor joints. Adhesion and lifespan depend far more on preparation than on the product, so it is worth doing properly.' },
    { q: 'What width should I use for walkways?',
      a: 'Most internal walkway and aisle boundaries are marked at 50mm. Step up to 100mm where the line needs to read from a distance, for forklift routes, or where the site standard calls for a wider boundary. MightyLine and X-Treme Freezer Tape are both available in 50mm and 100mm.' },
    { q: 'Can I get a sample before ordering?',
      a: 'Yes. We will send a physical sample of the tape you are considering so you can test adhesion and visibility on your own floor before committing to a full site. Request one through the free samples link or call 1300 590 505.' }
  ];

  /* ------------------------------------------------------------------ helpers */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function money(n) {
    return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function colourStyle(key) {
    var c = COLOURS[key];
    if (!c) return '';
    if (c.hex2) return 'background:repeating-linear-gradient(135deg,' + c.hex + ' 0 6px,' + c.hex2 + ' 6px 12px)';
    if (c.clear) return 'background:repeating-linear-gradient(135deg,#e9eaec 0 5px,#c9ccd1 5px 10px)';
    return 'background:' + c.hex;
  }

  function priceFor(product, colour, width) {
    var p = product.prices || {};
    var w = width || '-';
    var k1 = (colour || 'default') + '|' + w;
    if (p[k1] != null) return p[k1];
    var k2 = 'default|' + w;
    if (p[k2] != null) return p[k2];
    var vals = [];
    for (var k in p) vals.push(p[k]);
    return vals.length ? Math.min.apply(null, vals) : 0;
  }

  function priceFrom(product) {
    var vals = [];
    for (var k in (product.prices || {})) vals.push(product.prices[k]);
    return vals.length ? Math.min.apply(null, vals) : 0;
  }

  function productImage(product, colour) {
    var i = product.images || {};
    if (colour && i[colour]) return i[colour];
    if (product.defaultColour && i[product.defaultColour]) return i[product.defaultColour];
    return i._default || '';
  }

  /* ------------------------------------------------------------------ elements */
  var header = $('[data-header]');
  var stickyCta = $('[data-sticky-cta]');
  var stickyLabel = $('[data-sticky-label]');
  var quantity = $('[data-quantity]');
  var cartCount = $('[data-cart-count]');
  var cartLink = $('[data-cart-link]');
  var confirmation = $('[data-cart-confirmation]');
  var views = $$('[data-view]');
  var contextLink = $('[data-context-link]');
  var headerCta = $('[data-header-cta]');
  var footerLabel = $('[data-footer-label]');
  var metaDescription = $('meta[name="description"]');
  var canonical = $('link[rel="canonical"]');
  var ogTitle = $('meta[property="og:title"]');
  var ogDescription = $('meta[property="og:description"]');
  var ogUrl = $('meta[property="og:url"]');
  var ogImage = $('meta[property="og:image"]');
  var productMedia = $('[data-product-media]');
  var productThumbs = $('[data-product-thumbs]');
  var productPhotos = $('[data-product-photos]');
  var productImg = $('[data-product-image]');
  var productTitle = $('[data-product-title]');
  var featureGrid = $('[data-feature-grid]');

  var activeView = 'category';
  var activeProduct = null;
  var selection = { colour: null, width: null, photo: null };
  var lastY = 0;
  var ticking = false;

  /* ------------------------------------------------------------------ category render */
  function cardMarkup(key) {
    var p = productData[key];
    var colour = p.defaultColour;
    var img = productImage(p, colour);
    return '<a class="tape-card" href="#' + key + '" data-group="' + p.group + '" data-product-route="' + key + '">' +
      '<div class="tape-card__media">' +
        '<span class="product-badge">' + p.badge + '</span>' +
        (img ? '<img src="' + img + '" alt="' + p.shortName + '" loading="lazy">' : '') +
      '</div>' +
      '<div class="tape-card__copy">' +
        '<p class="mono">' + p.cardType + '</p>' +
        '<h3>' + p.shortName + '</h3>' +
        '<p>' + p.cardCopy + '</p>' +
        (p.colours.length ? '<div class="mini-swatches" aria-hidden="true">' + p.colours.slice(0, 8).map(function (c) {
          return '<i style="' + colourStyle(c) + '"></i>';
        }).join('') + (p.colours.length > 8 ? '<em>+' + (p.colours.length - 8) + '</em>' : '') + '</div>' : '') +
        '<div class="tape-card__footer"><strong>' + (p.colours.length > 1 || p.widths ? 'From ' : '') + money(priceFrom(p)) + ' <small>+ GST</small></strong><span>View mock-up <b>&rarr;</b></span></div>' +
      '</div>' +
    '</a>';
  }

  function renderCategory() {
    var grid = $('[data-category-grid]');
    if (grid && !grid.dataset.rendered) {
      var html = '';
      ['tape', 'shapes', 'signs'].forEach(function (g) {
        var keys = ORDER.filter(function (k) { return productData[k].group === g; });
        html += '<div class="group-block" data-group-block="' + g + '">' +
          '<div class="group-head reveal"><h3>' + GROUPS[g].heading + ' <em>' + keys.length + '</em></h3><p>' + GROUPS[g].blurb + '</p></div>' +
          '<div class="group-grid">' + keys.map(cardMarkup).join('') + '</div>' +
        '</div>';
      });
      grid.innerHTML = html;
      grid.dataset.rendered = '1';
    }

    var body = $('[data-compare-body]');
    if (body && !body.dataset.rendered) {
      body.innerHTML = COMPARE_ROWS.map(function (r) {
        var p = productData[r.key];
        return '<tr><th scope="row"><a href="#' + r.key + '" data-product-route="' + r.key + '">' + p.shortName + '</a></th>' +
          '<td>' + r.thickness + '</td><td>' + r.traffic + '</td><td>' + r.warranty + '</td><td>' + r.env + '</td>' +
          '<td class="num">' + money(priceFrom(p)) + '<small>+ GST</small></td>' +
          '<td class="go"><a href="#' + r.key + '" data-product-route="' + r.key + '" aria-label="View ' + p.shortName + '">View <span aria-hidden="true">&rarr;</span></a></td></tr>';
      }).join('');
      body.dataset.rendered = '1';
    }

    var faq = $('[data-faq-list]');
    if (faq && !faq.dataset.rendered) {
      faq.innerHTML = FAQS.map(function (f, i) {
        return '<details class="faq-item reveal"' + (i === 0 ? ' open' : '') + '><summary><span>' + f.q + '</span></summary><p>' + f.a + '</p></details>';
      }).join('');
      faq.dataset.rendered = '1';
    }

    var articles = $('[data-article-grid]');
    if (articles && !articles.dataset.rendered) {
      articles.innerHTML = ARTICLES.map(function (a) {
        return '<a class="article-card reveal" href="' + a.href + '">' +
          '<div class="article-card__media"><img src="' + a.img + '" alt="' + a.title + '" loading="lazy"></div>' +
          '<div class="article-card__copy">' +
            '<p class="mono">' + a.cat + '</p>' +
            '<h3>' + a.title + '</h3>' +
            '<p>' + a.blurb + '</p>' +
            '<span class="text-link">Read the article</span>' +
          '</div></a>';
      }).join('');
      articles.dataset.rendered = '1';
    }
  }

  function applyFilter(group) {
    $$('.filter-chip').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-filter') === group);
      b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === group));
    });
    $$('[data-group-block]').forEach(function (block) {
      block.hidden = !(group === 'all' || block.getAttribute('data-group-block') === group);
    });
  }

  /* ------------------------------------------------------------------ product render */
  /* Colour thumbnails. Several products point every variant at one photograph
     (the live external tape does exactly this), so collapse duplicates and drop
     the rail entirely when there is only one distinct image left to show. */
  function renderThumbs(product) {
    if (!productThumbs) return;
    var imgs = product.images || {};
    var seen = {};
    var keys = (product.colours || []).filter(function (c) {
      if (!imgs[c] || seen[imgs[c]]) return false;
      seen[imgs[c]] = 1;
      return true;
    });
    if (keys.length < 2) { productThumbs.hidden = true; productThumbs.innerHTML = ''; return; }
    productThumbs.hidden = false;
    productThumbs.innerHTML =
      '<span class="gallery-label mono">Colours</span>' +
      '<div class="gallery-row">' + keys.map(function (c) {
        return '<button type="button" class="product-thumb" data-colour="' + c + '" aria-pressed="false" ' +
          'title="' + COLOURS[c].label + '" aria-label="' + product.shortName + ' in ' + COLOURS[c].label + '">' +
          '<img src="' + imgs[c] + '" alt="" loading="lazy"></button>';
      }).join('') + '</div>';
  }

  /* Photographs of the product installed on a real floor, taken from the live
     product gallery on cotewell.com.au. */
  function renderPhotos(product) {
    if (!productPhotos) return;
    var list = product.photos || [];
    if (!list.length) { productPhotos.hidden = true; productPhotos.innerHTML = ''; return; }
    productPhotos.hidden = false;
    productPhotos.innerHTML =
      '<span class="gallery-label mono">On site <b>' + list.length + '</b></span>' +
      '<div class="gallery-row gallery-row--photos">' + list.map(function (ph, i) {
        return '<button type="button" class="product-photo" data-photo="' + i + '" aria-pressed="false" ' +
          'title="' + ph.alt + '" aria-label="' + ph.alt + '">' +
          '<img src="' + (ph.thumb || ph.src) + '" alt="" loading="lazy"></button>';
      }).join('') + '</div>';
  }

  function renderVariants(product) {
    var colourBlock = $('[data-colour-block]');
    var widthBlock = $('[data-width-block]');
    var swatchRow = $('[data-swatch-row]');
    var widthRow = $('[data-width-row]');

    if (product.colours && product.colours.length) {
      colourBlock.hidden = false;
      swatchRow.innerHTML = product.colours.map(function (c) {
        return '<button type="button" class="swatch" role="radio" aria-checked="false" data-colour="' + c + '" title="' + COLOURS[c].label + '" aria-label="' + COLOURS[c].label + '"><i style="' + colourStyle(c) + '"></i></button>';
      }).join('');
    } else {
      colourBlock.hidden = true;
      swatchRow.innerHTML = '';
    }

    if (product.widths && product.widths.length > 1) {
      widthBlock.hidden = false;
      widthRow.innerHTML = product.widths.map(function (w) {
        return '<button type="button" class="pill" role="radio" aria-checked="false" data-width="' + w + '">' + w + '</button>';
      }).join('');
    } else {
      widthBlock.hidden = true;
      widthRow.innerHTML = '';
    }
  }

  function syncVariantUi(product) {
    var swatchLabel = $('[data-swatch-label]');
    var selected = $('[data-colour-selected]');

    $$('[data-swatch-row] .swatch').forEach(function (b) {
      var on = b.getAttribute('data-colour') === selection.colour;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-checked', String(on));
    });
    $$('[data-width-row] .pill').forEach(function (b) {
      var on = b.getAttribute('data-width') === selection.width;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-checked', String(on));
    });

    if (selected) selected.textContent = selection.colour ? COLOURS[selection.colour].label : '';
    if (swatchLabel) {
      var showingPhoto = selection.photo != null && product.photos && product.photos[selection.photo];
      swatchLabel.hidden = !selection.colour && !showingPhoto;
      swatchLabel.textContent = showingPhoto ? 'On site'
        : (selection.colour ? COLOURS[selection.colour].label + (selection.width ? ' · ' + selection.width : '') : '');
    }

    var photo = selection.photo != null && product.photos ? product.photos[selection.photo] : null;
    var src = photo ? photo.src : productImage(product, selection.colour);
    if (productImg && src) {
      productImg.src = src;
      productImg.alt = photo ? photo.alt
        : product.shortName + (selection.colour ? ' in ' + COLOURS[selection.colour].label : '');
    }
    if (productMedia) productMedia.classList.toggle('product-media--photo', !!photo);

    $$('[data-product-thumbs] .product-thumb').forEach(function (t) {
      var on = !photo && t.getAttribute('data-colour') === selection.colour;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-pressed', String(on));
    });
    $$('[data-product-photos] .product-photo').forEach(function (t) {
      var on = !!photo && Number(t.getAttribute('data-photo')) === selection.photo;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-pressed', String(on));
    });

    var zip = $('[data-zip-line]');
    if (zip) zip.hidden = false;

    var value = priceFor(product, selection.colour, selection.width);
    var valueEl = $('[data-purchase-value]');
    if (valueEl) valueEl.textContent = money(value);
    if (stickyLabel) stickyLabel.textContent = product.shortName + ' · ' + money(value) + ' + GST';
  }

  function applyProduct(key) {
    var p = productData[key];
    if (!p) return;

    $('[data-product-breadcrumb]').textContent = p.breadcrumb;
    $('[data-product-eyebrow]').textContent = p.eyebrow;
    $('[data-product-tag]').textContent = p.tag;
    $('[data-product-description]').innerHTML = p.description;
    $('[data-product-description-secondary]').innerHTML = p.descriptionSecondary;
    $('[data-purchase-label]').textContent = p.priceLabel;
    $('[data-features-intro]').textContent = p.featuresIntro;
    $('[data-features-title]').innerHTML = p.featuresTitle;
    $('[data-purchase-note]').innerHTML = p.purchaseNote;

    productTitle.innerHTML = p.titleHtml;
    productTitle.classList.toggle('is-long', !!p.longTitle);
    if (productMedia) productMedia.className = 'product-media';

    /* Three aligned key metrics, using the same three labels for every product in a
       group so like-for-like comparison across sibling products actually works. */
    $('[data-spec-strip]').hidden = true;
    $('[data-spec-strip]').innerHTML = (p.keyMetrics || p.specs.slice(0, 3)).map(function (s) {
      return '<span><b>' + s[1] + '</b>' + s[0] + '</span>';
    }).join('');

    featureGrid.innerHTML = p.features.map(function (f, i) {
      return '<article class="feature"><span>' + ('0' + (i + 1)).slice(-2) + '</span>' + (f[0] ? '<h3>' + f[0] + '</h3>' : '') + '<p>' + f[1] + '</p></article>';
    }).join('');

    $('[data-installation-notes]').innerHTML = p.notes.map(function (n) { return '<li>' + n + '</li>'; }).join('');
    $('[data-applications]').innerHTML = p.applications.map(function (a) { return '<li>' + a + '</li>'; }).join('');

    $('[data-spec-table]').innerHTML = p.specs.map(function (s) {
      return '<div class="spec-row"><span class="mono">' + s[0] + '</span><strong>' + s[1] + '</strong></div>';
    }).join('') + (p.extra ? '<p class="spec-extra">' + p.extra + '</p>' : '');

    $('[data-related-grid]').innerHTML = p.related.map(function (k) {
      var r = productData[k];
      var img = productImage(r, r.defaultColour);
      return '<a class="related-product" href="#' + k + '" data-product-route="' + k + '">' +
        '<div class="related-product__media">' +
          (img ? '<img src="' + img + '" alt="' + r.shortName + '" loading="lazy">' : '') +
        '</div>' +
        '<div class="related-product__copy"><p class="mono">' + r.cardType + '</p><h3>' + r.shortName + '</h3><p>' + r.cardCopy + '</p>' +
        '<span class="text-link">From ' + money(priceFrom(r)) + ' + GST</span></div></a>';
    }).join('');

    renderVariants(p);
    renderThumbs(p);
    renderPhotos(p);
    selection.colour = p.defaultColour || null;
    selection.width = p.widths && p.widths.length ? p.widths[0] : null;
    selection.photo = null;
    syncVariantUi(p);

    if (confirmation) confirmation.hidden = true;
    if (quantity) quantity.value = '1';
    if (stickyCta) stickyCta.setAttribute('aria-label', p.shortName + ' quick purchase');
  }

  /* ------------------------------------------------------------------ schema */
  function setSchema(sel, obj) {
    var el = $(sel);
    if (!el) return;
    el.textContent = obj ? JSON.stringify(obj, null, 2) : '';
  }

  function strip(s) { return String(s).replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').trim(); }

  function writeSchema(route) {
    var base = 'https://cotewell.com.au/product-category/tape/';
    if (route.view === 'category') {
      setSchema('[data-schema-collection]', {
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        '@id': base + '#collection',
        name: 'Line Marking Tape & Floor Marking Products',
        description: categoryData.descriptionMeta,
        url: base,
        isPartOf: { '@type': 'WebSite', name: 'Cotewell', url: 'https://cotewell.com.au/' }
      });
      setSchema('[data-schema-breadcrumb]', {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cotewell.com.au/' },
          { '@type': 'ListItem', position: 2, name: 'Shop', item: 'https://cotewell.com.au/shop/' },
          { '@type': 'ListItem', position: 3, name: 'Line Marking Tape & Floor Marking', item: base }
        ]
      });
      setSchema('[data-schema-itemlist]', {
        '@context': 'https://schema.org', '@type': 'ItemList',
        name: 'Line Marking Tape & Floor Marking Products',
        numberOfItems: ORDER.length,
        itemListElement: ORDER.map(function (k, i) {
          return { '@type': 'ListItem', position: i + 1, url: productData[k].canonical, name: productData[k].shortName };
        })
      });
      setSchema('[data-schema-faq]', {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: FAQS.map(function (f) {
          return { '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } };
        })
      });
      setSchema('[data-schema-product]', null);
      return;
    }

    var p = productData[route.product];
    var lo = priceFrom(p);
    var hi = lo;
    for (var k in (p.prices || {})) hi = Math.max(hi, p.prices[k]);

    setSchema('[data-schema-breadcrumb]', {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cotewell.com.au/' },
        { '@type': 'ListItem', position: 2, name: 'Line Marking Tape & Floor Marking', item: base },
        { '@type': 'ListItem', position: 3, name: p.shortName, item: p.canonical }
      ]
    });
    setSchema('[data-schema-product]', {
      '@context': 'https://schema.org', '@type': 'Product',
      '@id': p.canonical + '#product',
      name: p.shortName,
      description: strip(p.description),
      sku: p.slug,
      image: productImage(p, p.defaultColour),
      brand: { '@type': 'Brand', name: p.shortName.indexOf('Lean Line') === 0 ? 'Lean Line' : (p.shortName.indexOf('Cotewell') === 0 ? 'Cotewell' : 'Mighty Line') },
      category: GROUPS[p.group].label,
      offers: lo === hi
        ? { '@type': 'Offer', url: p.canonical, price: lo.toFixed(2), priceCurrency: 'AUD', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Cotewell' } }
        : { '@type': 'AggregateOffer', url: p.canonical, lowPrice: lo.toFixed(2), highPrice: hi.toFixed(2), priceCurrency: 'AUD', offerCount: Object.keys(p.prices).length, availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Cotewell' } }
    });
    setSchema('[data-schema-itemlist]', null);
    setSchema('[data-schema-faq]', null);
    setSchema('[data-schema-collection]', null);
  }

  /* ------------------------------------------------------------------ routing */
  var SECTIONS = ['buy', 'features', 'specs', 'projects', 'related-products'];

  function routeFromHash() {
    var hash = window.location.hash.replace(/^#/, '');
    var product = null, section = null;
    for (var i = 0; i < ORDER.length; i++) {
      var key = ORDER[i];
      if (hash === key) { product = key; break; }
      if (hash.indexOf(key + '-') === 0) {
        var s = hash.slice(key.length + 1);
        if (SECTIONS.indexOf(s) !== -1) { product = key; section = s; break; }
      }
    }
    return product ? { view: 'product', product: product, section: section } : { view: 'category', product: null, section: null };
  }

  function renderRoute() {
    var route = routeFromHash();
    var changed = route.view !== activeView || route.product !== activeProduct;
    var page = route.view === 'product' ? productData[route.product] : categoryData;

    activeView = route.view;
    activeProduct = route.product;

    views.forEach(function (v) { v.hidden = v.getAttribute('data-view') !== route.view; });

    if (route.view === 'product') applyProduct(route.product);
    else renderCategory();

    document.title = page.title;
    if (metaDescription) metaDescription.setAttribute('content', page.descriptionMeta);
    if (canonical) canonical.setAttribute('href', page.canonical);
    if (ogTitle) ogTitle.setAttribute('content', page.title);
    if (ogDescription) ogDescription.setAttribute('content', page.descriptionMeta);
    if (ogUrl) ogUrl.setAttribute('content', page.canonical);
    if (ogImage) ogImage.setAttribute('content', route.view === 'product' ? productImage(page, page.defaultColour) : categoryData.image);

    if (contextLink) {
      contextLink.href = route.view === 'product' ? '#' + route.product + '-features' : categoryData.contextHref;
      contextLink.textContent = route.view === 'product' ? 'Product details' : categoryData.contextText;
    }
    if (headerCta) {
      headerCta.href = route.view === 'product' ? '#' + route.product + '-buy' : categoryData.ctaHref;
      headerCta.textContent = route.view === 'product' ? 'Add to cart' : categoryData.ctaText;
    }
    if (footerLabel) {
      footerLabel.textContent = route.view === 'product' ? page.shortName + ' product page mock-up' : categoryData.footerText;
    }
    if (stickyCta) {
      // Hide sticky CTA immediately on route change, will re-eval on scroll
      stickyCta.classList.remove('is-visible');
      stickyCta.setAttribute('aria-hidden', 'true');
    }

    writeSchema(route);
    observeReveals();

    if (route.section) {
      requestAnimationFrame(function () {
        var el = document.getElementById(route.section);
        if (el) el.scrollIntoView({ behavior: changed ? 'auto' : 'smooth' });
      });
    } else if (changed) {
      requestAnimationFrame(function () { window.scrollTo({ top: 0, behavior: 'auto' }); });
    }

    requestAnimationFrame(updatePageUi);
  }

  /* ------------------------------------------------------------------ interactions */
  function clampQty(v) {
    var n = parseInt(v, 10);
    if (!isFinite(n)) n = 1;
    return Math.max(1, Math.min(99, n));
  }

  document.addEventListener('click', function (e) {
    var chip = e.target.closest ? e.target.closest('.filter-chip') : null;
    if (chip) { applyFilter(chip.getAttribute('data-filter')); return; }

    var thumb = e.target.closest ? e.target.closest('.product-thumb') : null;
    if (thumb && activeProduct) {
      selection.colour = thumb.getAttribute('data-colour');
      selection.photo = null;
      syncVariantUi(productData[activeProduct]);
      return;
    }

    var photoBtn = e.target.closest ? e.target.closest('.product-photo') : null;
    if (photoBtn && activeProduct) {
      selection.photo = Number(photoBtn.getAttribute('data-photo'));
      syncVariantUi(productData[activeProduct]);
      return;
    }

    var swatch = e.target.closest ? e.target.closest('.swatch') : null;
    if (swatch && activeProduct) {
      selection.colour = swatch.getAttribute('data-colour');
      selection.photo = null;
      syncVariantUi(productData[activeProduct]);
      return;
    }

    var pill = e.target.closest ? e.target.closest('.pill') : null;
    if (pill && activeProduct) {
      selection.width = pill.getAttribute('data-width');
      syncVariantUi(productData[activeProduct]);
      return;
    }

    if (e.target.closest && e.target.closest('[data-quantity-down]')) { quantity.value = clampQty(Number(quantity.value) - 1); return; }
    if (e.target.closest && e.target.closest('[data-quantity-up]')) { quantity.value = clampQty(Number(quantity.value) + 1); return; }

    if (e.target.closest && e.target.closest('[data-add-to-cart]')) {
      var added = clampQty(quantity ? quantity.value : 1);
      var total = (parseInt(cartCount ? cartCount.textContent : '0', 10) || 0) + added;
      var p = productData[activeProduct];
      if (cartCount) cartCount.textContent = String(total);
      if (cartLink) cartLink.setAttribute('aria-label', 'Cart, ' + total + (total === 1 ? ' item' : ' items'));
      if (confirmation) {
        confirmation.hidden = false;
        confirmation.textContent = added + ' × ' + p.shortName +
          (selection.colour ? ' (' + COLOURS[selection.colour].label + (selection.width ? ', ' + selection.width : '') + ')' : '') +
          ' added to the mock-up cart.';
      }
      return;
    }

    var catLink = e.target.closest ? e.target.closest('[data-category-link]') : null;
    if (catLink && activeView === 'category' && window.location.hash === '#category') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  if (quantity) quantity.addEventListener('change', function () { quantity.value = clampQty(quantity.value); });

  /* ------------------------------------------------------------------ scroll ui */
  /* ------------------------------------------------------------------ scroll ui */
  var header = document.querySelector('[data-site-header]');
  var menuBtn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.primary');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      var isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('is-open');
      document.body.classList.toggle('menu-open');
      menuBtn.textContent = isExpanded ? 'Menu' : 'Close';
    });
  }

  // Learning Centre Desktop Hover (Accessibility)
  var learningMenu = document.querySelector('.learning-menu');
  var learningBtn = learningMenu ? learningMenu.querySelector('button') : null;

  if (learningMenu && learningBtn) {
    learningMenu.addEventListener('mouseenter', function() { learningBtn.setAttribute('aria-expanded', 'true'); });
    learningMenu.addEventListener('mouseleave', function() { learningBtn.setAttribute('aria-expanded', 'false'); });
    learningBtn.addEventListener('click', function(e) {
      var isExpanded = learningBtn.getAttribute('aria-expanded') === 'true';
      learningBtn.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        var a = learningMenu.querySelector('.submenu a');
        if (a) a.focus();
      }
    });
  }

  function updatePageUi() {
    ticking = false;
    var y = window.scrollY || 0;
    if (header) {
      header.classList.toggle('is-compact', y > 40);
      if (y > 300 && y > lastY) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
    }
    
    if (stickyCta) {
      var show = false;
      if (activeView === 'product') {
        var hero = $('.product-hero');
        show = hero && hero.getBoundingClientRect().bottom <= 0;
      } else {
        show = y > 600;
      }
      stickyCta.classList.toggle('is-visible', show);
      stickyCta.setAttribute('aria-hidden', String(!show));
    }
    lastY = y;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updatePageUi); }
  }, { passive: true });

  window.addEventListener('hashchange', renderRoute);

  /* ------------------------------------------------------------------ reveals */
  var observer = null;
  function observeReveals() {
    var items = $$('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) { items.forEach(function (i) { i.classList.add('is-visible'); }); return; }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    }
    items.forEach(function (i) { observer.observe(i); });
  }

  renderRoute();
  applyFilter('all');
})();
