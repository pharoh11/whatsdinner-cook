// Made-up test recipes for test.html (not from anyone's collection). Short keys match the viewer's packed format:
// t title, s serves, p prep min, c cook min, i ingredient groups [{g, l: [lines]}], r steps (strings) and headings ({h}).
window.TEST_RECIPES = {
  scones: {
    t: 'Lemon Blueberry Scones',
    s: 8,
    i: [
      { g: 'DRY', l: ['2 cups all-purpose flour', '1 tbsp baking powder', '3/4 tsp salt', '1/2 cup sugar'] },
      { g: 'WET', l: ['2/3 cup heavy cream', '1 egg', '1 tsp vanilla extract', '1 cup fresh blueberries'] },
      { g: 'LEMON GLAZE', l: ['1 cup powdered sugar', '1 tbsp melted butter', 'Zest and juice of 1 lemon'] }
    ],
    r: [
      'Heat the oven to 400\u00b0F and line a baking sheet with parchment.',
      'Whisk the flour, baking powder, salt and sugar in a large bowl.',
      'In another bowl, whisk the cream, egg and vanilla, then stir it into the dry ingredients until just combined. Fold in the blueberries.',
      'Pat the dough into an 8-inch round about 1 inch thick and cut it into 8 wedges.',
      'Bake for 18 to 20 minutes, until golden. Let cool for 10 minutes.',
      'Stir the powdered sugar, melted butter, lemon zest and juice into a smooth glaze and drizzle it over the scones.'
    ]
  },
  chili: {
    t: 'Weeknight Turkey Chili',
    s: 6, p: 15, c: 40,
    i: [{ g: null, l: [
      '1 tbsp olive oil',
      '1 large yellow onion, diced',
      '1 red bell pepper, diced',
      '4 cloves garlic, minced',
      '1 1/2 lb ground turkey (93% lean)',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 1/2 tsp kosher salt',
      '1 (28 oz) can crushed tomatoes',
      '1 (15 oz) can kidney beans, drained and rinsed',
      '1 (15 oz) can black beans, drained and rinsed',
      '1 cup low-sodium chicken broth',
      '1 tbsp brown sugar',
      'Shredded cheddar, sour cream and sliced green onions, for serving'
    ] }],
    r: [
      'Heat the olive oil in a large Dutch oven over medium-high heat. Add the onion and bell pepper and cook, stirring often, until softened, 5 to 6 minutes. Stir in the garlic and cook 30 seconds more.',
      'Add the turkey and break it up with a wooden spoon. Cook until no longer pink, about 6 minutes.',
      'Sprinkle in the chili powder, cumin, smoked paprika, oregano and salt. Stir for 1 minute so the spices toast in the fat.',
      'Pour in the crushed tomatoes and broth, then add both cans of beans and the brown sugar. Bring to a boil.',
      'Reduce the heat to low, partially cover, and simmer for 30 minutes, stirring every 10 minutes so nothing sticks to the bottom.',
      'Taste and adjust the salt. If it’s too thick, splash in a little more broth.',
      'Ladle into bowls and top with cheddar, sour cream and green onions.'
    ]
  },
  shortRibs: {
    t: 'Red Wine Braised Short Ribs with Creamy Parmesan Polenta',
    s: 6, p: 40, c: 210,
    i: [
      { g: 'For the short ribs', l: [
        '5 lb bone-in beef short ribs, English cut (about 8 pieces)',
        '2 1/2 tsp kosher salt, plus more to taste',
        '1 tsp freshly ground black pepper',
        '3 tbsp all-purpose flour',
        '3 tbsp vegetable oil, divided',
        '2 medium yellow onions, chopped',
        '3 medium carrots, peeled and chopped',
        '3 celery ribs, chopped',
        '8 cloves garlic, smashed',
        '3 tbsp tomato paste',
        '1 (750 ml) bottle dry red wine, such as Cabernet Sauvignon or Merlot',
        '3 cups low-sodium beef broth',
        '6 sprigs fresh thyme',
        '2 sprigs fresh rosemary',
        '2 bay leaves',
        '1 tbsp Worcestershire sauce',
        '1 tbsp balsamic vinegar'
      ] },
      { g: 'For the polenta', l: [
        '6 cups whole milk (or half milk, half water)',
        '1 1/2 tsp kosher salt',
        '1 1/2 cups coarse-ground polenta (not instant)',
        '4 tbsp unsalted butter',
        '1 1/2 cups finely grated Parmigiano-Reggiano',
        '1/2 tsp freshly ground black pepper'
      ] },
      { g: 'For the gremolata', l: [
        '1/2 cup packed flat-leaf parsley, finely chopped',
        'Zest of 1 lemon',
        '1 small clove garlic, grated',
        '1 tbsp extra-virgin olive oil',
        'Pinch of flaky salt'
      ] }
    ],
    r: [
      { h: 'Brown the ribs' },
      'Pat the short ribs completely dry with paper towels and season all over with the salt and pepper. If you have time, let them sit uncovered in the fridge for at least an hour or overnight; drier meat browns much better.',
      'Heat the oven to 325°F with a rack in the lower third. Dust the ribs lightly with the flour and shake off the excess.',
      'Heat 2 tablespoons of the oil in a large, heavy Dutch oven over medium-high heat until it shimmers. Working in batches so the pot isn’t crowded, brown the ribs well on all sides, 8 to 10 minutes per batch. Move them to a sheet pan as they finish.',
      { h: 'Build the braise' },
      'Pour off all but about 1 tablespoon of the fat. Add the remaining tablespoon of oil, then the onions, carrots and celery. Cook, scraping up the browned bits, until the vegetables soften and start to color, about 8 minutes.',
      'Add the garlic and tomato paste and cook, stirring constantly, until the paste darkens to a brick red, about 2 minutes.',
      'Pour in the wine, bring to a boil, and let it bubble until reduced by about half, 10 to 12 minutes. Stir in the broth, Worcestershire and balsamic.',
      'Tie the thyme and rosemary together with kitchen twine and add them to the pot with the bay leaves. Nestle the ribs back in, bone side up, along with any juices from the pan. The liquid should come about three quarters of the way up the meat; add a splash of water if needed.',
      'Bring to a simmer, cover tightly, and move to the oven. Braise until the meat is very tender and pulling away from the bone, 2 1/2 to 3 hours. Check once halfway and turn the ribs if the tops look dry.',
      { h: 'Make the polenta' },
      'About 45 minutes before the ribs are done, bring the milk and salt to a gentle simmer in a large heavy saucepan over medium heat. Watch it closely; milk boils over fast.',
      'Whisking constantly, pour in the polenta in a slow, steady stream. Keep whisking for 2 minutes until it starts to thicken, then turn the heat to low.',
      'Cook, stirring every few minutes with a wooden spoon and scraping the bottom and corners, until the grains are soft and creamy, 35 to 40 minutes. If it gets too stiff, loosen it with a splash of hot water.',
      'Off the heat, stir in the butter, Parmigiano and pepper. Cover to keep warm.',
      { h: 'Finish and serve' },
      'Move the ribs to a plate and tent with foil. Strain the braising liquid into a fat separator or bowl, pressing on the vegetables, and spoon off as much fat as you can. Simmer the liquid in a saucepan until it coats the back of a spoon, 10 to 15 minutes. Taste and add salt if needed.',
      'Stir together the parsley, lemon zest, garlic, olive oil and flaky salt for the gremolata.',
      'Spoon the polenta into shallow bowls, set a short rib on top, ladle over plenty of sauce, and finish with a little gremolata.'
    ]
  }
};
