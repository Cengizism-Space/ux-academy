export const title = 'Alten Decks'

export const description = [
  {
    _key: '9f1a629887fd',
    _type: 'block',
    children: [
      {
        _key: '4a58edd077880',
        _type: 'span',
        marks: [],
        text: 'A ',
      },
      {
        _key: '4a58edd077881',
        _type: 'span',
        marks: ['ec5b66c9b1e0'],
        text: 'company-scoped',
      },
      {
        _key: '4a58edd077882',
        _type: 'span',
        marks: [],
        text: ' online community training applicaiton.',
      },
    ],
    markDefs: [
      {
        _key: 'ec5b66c9b1e0',
        _type: 'link',
        href: 'https//alten.nl',
      },
    ],
    style: 'normal',
  },
]

export const mockDecks = [
  {
    _type: 'deck',
    id: 100,
    parent: 'User Experience',
    title: 'UI Patterns',
    slug: 'ui-patterns',
    image: 'deck-ui-patterns.png',
    description:
      'User Interface Design patterns are recurring solutions that solve common design problems. Design patterns are standard reference points for the experienced user interface designer.',
    totals: 60,
    footnote: 'cards in total',
  },
  {
    _type: 'deck',
    id: 102,
    parent: 'User Experience',
    title: 'Validation patterns',
    slug: 'validation-patterns',
    image: 'validation-patterns.png',
    description:
      'Validation patterns is a collection of 60 of the most common lean product experiments regulary used by product professionals at companies like Spotify, Booking.com, Facebook, Amazon and Google and recommended by top universities like HArvard, MIT and Stanford.',
    totals: 60,
    footnote: 'cards in total',
  },
  {
    _type: 'deck',
    id: 103,
    parent: 'User Experience',
    title: 'Persuasive patterns',
    slug: 'persuasive-patterns',
    image: 'persuasive-patterns.png',
    description:
      'The persuasive patterns is aa collection of 60 design patterns driven by psychology, presented in a manner easily referenced and used as a brainstorming tool.',
    totals: 60,
    footnote: 'cards in total',
  },
]

export const mockCards = [
  {
    _type: 'card',
    id: 1,
    deck: 100,
    parent: 'Getting input',
    title: 'Forgiving format',
    slug: 'forgiving-format',
    image: 'forgiving-format.png',
    description:
      'Allow users to enter text in their own format and syntax, and let the system interpret it intelligently',
    totals: 3,
    footnote: 'times bookmarked',
  },
  {
    _type: 'card',
    id: 2,
    deck: 100,
    parent: 'Getting input',
    title: 'Good defaults',
    slug: 'good-defaults',
    image: 'good-defaults.png',
    description:
      'Pre-fill form fields with best guesses at what the user wants',
    totals: 51,
    footnote: 'times bookmarked',
  },
  {
    _type: 'card',
    id: 3,
    deck: 100,
    parent: 'Onboarding',
    title: 'Paywall',
    slug: 'paywall',
    image: 'paywall.png',
    description:
      'Restrict access to users who have paid',
  },
  {
    _type: 'card',
    id: 4,
    deck: 102,
    parent: 'Problem, Market demand',
    title: 'Fake door testing',
    slug: 'fake-door-testing',
    image: 'fake-door-testing.png',
    description:
      'Pretend to provide a product or feature without actually developing it',
  },
  {
    _type: 'card',
    id: 5,
    deck: 102,
    parent: 'Product',
    title: 'Lego prototype',
    slug: 'lego-prototype',
    image: 'lego-prototype.png',
    description:
      'Quickly assemble and tweak a rough model of a physical product',
  },
  {
    _type: 'card',
    id: 6,
    deck: 102,
    parent: 'Problem',
    title: 'Find the watering hole',
    slug: 'find-the-watering-hole',
    image: 'find-the-watering-hole.png',
    description:
      'Seek out where prospects gather for informal face-to-face validation',
  },
  {
    _type: 'card',
    id: 7,
    deck: 102,
    parent: 'Product',
    title: 'Impersonator',
    slug: 'impersonator',
    image: 'impersonator.png',
    description:
      'Serve a competing product to your customers as if it was your own',
  },
  {
    _type: 'card',
    id: 8,
    deck: 102,
    parent: 'Product',
    title: 'Takeaway test',
    slug: 'takeaway-test',
    image: 'takeaway-test.png',
    description:
      'Remove or disable a feature to see if it is valued',
  },
  {
    _type: 'card',
    id: 9,
    deck: 103,
    parent: 'Social biases',
    title: 'Social proof',
    slug: 'social-proof',
    image: 'social-proof.png',
    description:
      'We assume the actions of others in new or unfamiliar situations',
  },
  {
    _type: 'card',
    id: 10,
    deck: 103,
    parent: 'Social biases',
    title: 'Reputation',
    slug: 'reputation',
    image: 'reputation.png',
    description:
      'We adjust our personal behaviour to reflect positively on how peers or the public perceive us',
  },
  {
    _type: 'card',
    id: 11,
    deck: 103,
    parent: 'Loss aversion',
    title: 'Scarcity',
    slug: 'scarcity',
    image: 'scarcity.png',
    description:
      'If something is promoted as being scarce, we perceive it as more desirable and more valuable',
  },
  {
    _type: 'card',
    id: 12,
    deck: 103,
    parent: 'Loss aversion',
    title: 'Appointment Dynamics',
    slug: 'appointment-dynamics',
    image: 'appointment-dynamics.png',
    description:
      'Let users commit to returning to collect a reward at a predetermined time',
  },
  {
    _type: 'card',
    id: 13,
    deck: 103,
    parent: 'Communities',
    title: 'Competition',
    slug: 'competition',
    image: 'competition.png',
    description:
      'We strive to attain things that cannot be shared',
  },
  {
    _type: 'card',
    id: 14,
    deck: 103,
    parent: 'Perception and comprehension',
    title: 'Recognition over recall',
    slug: 'recognition-over-recall',
    image: 'recognition-over-recall.png',
    description:
      'We are better at recognizing things previously experienced than we are at recalling them from memory',
  },
  {
    _type: 'card',
    id: 15,
    deck: 103,
    parent: 'Perception and comprehension',
    title: 'Priming effect',
    slug: 'priming-effect',
    image: 'priming-effect.png',
    description:
      'Access to a particular item information in memory is enhanced as a result of recent exposure to a related stimulus',
  },
  {
    _type: 'card',
    id: 16,
    deck: 103,
    parent: 'Gameplay design',
    title: 'Storytelling',
    slug: 'storytelling',
    image: 'storytelling.png',
    description:
      'Use the narrative qualities of storytelling to let the user engage in a perspective',
  },
]
