/**
 * Lore-Accurate Quizzes Data Repository for ThreshingQuiz.com
 * Built based on Rebecca Yarros's The Empyrean lore (Fourth Wing & Iron Flame)
 */

const QUIZZES_DATA = {
  // 1. FLAGSHIP: DRAGON BOND QUIZ
  dragon: {
    id: "dragon",
    title: "The Threshing Dragon Bond",
    subtitle: "Which ancient dragon species will claim your soul in the Vale?",
    questions: [
      {
        id: 1,
        question: "You stand before the precipice of the Vale. The wind whips violent and cold. What draws your gaze first?",
        answers: [
          { text: "The highest, storm-shrouded peak where lightning strikes without mercy.", value: "BLACK" },
          { text: "A sunlit meadow of tall grass where something small yet extraordinarily lethal sleeps.", value: "GOLD" },
          { text: "The jagged sea cliffs overlooking turbulent, unforgiving deep ocean tides.", value: "BLUE" },
          { text: "The ancient, moss-covered stone spires that demand tactical patience.", value: "GREEN" }
        ]
      },
      {
        id: 2,
        question: "During sparring, another cadet deliberately cheats and aims a fatal strike at your throat. How do you respond?",
        answers: [
          { text: "Overpower them with overwhelming, brutal force to prove mercy is a luxury they cannot afford.", value: "BLACK" },
          { text: "Use pure agility to evade, letting their own reckless momentum throw them off the mat.", value: "GOLD" },
          { text: "Disarm them with cold, calculated cruelty. Let them remember who owns this quadrant.", value: "BLUE" },
          { text: "Counter with perfect technique and report their tactical blunder to the leadership.", value: "GREEN" }
        ]
      },
      {
        id: 3,
        question: "A massive dragon descends right in front of you. Its golden slit-pupil locks onto your eyes. What do you do?",
        answers: [
          { text: "Refuse to bow. Stand tall, meeting its gaze until it acknowledges your spirit.", value: "BLACK" },
          { text: "Offer curiosity and calm serenity, respecting its independence.", value: "GOLD" },
          { text: "Stand firm with ruthless composure. Show you are worthy to command beside it.", value: "BLUE" },
          { text: "Observe its stance, wing positioning, and tail type to assess its temperament.", value: "GREEN" }
        ]
      },
      {
        id: 4,
        question: "What trait in another human makes your blood boil the most?",
        answers: [
          { text: "Cowardice masked as self-preservation.", value: "BLACK" },
          { text: "Cruelty toward those who cannot defend themselves.", value: "GOLD" },
          { text: "Incompetence and lack of conviction.", value: "BLUE" },
          { text: "Dishonesty and chaotic unpredictability.", value: "GREEN" }
        ]
      },
      {
        id: 5,
        question: "If you had to sacrifice one thing to survive the Riders Quadrant, what would it be?",
        answers: [
          { text: "Peace of mind. I am ready to carry the blood and the burden.", value: "BLACK" },
          { text: "My innocence. The world is rarely as gentle as we hoped.", value: "GOLD" },
          { text: "Mercy. Power honors those who are decisive.", value: "BLUE" },
          { text: "Personal comfort. Discipline and study always come first.", value: "GREEN" }
        ]
      },
      {
        id: 6,
        question: "The Gauntlet course is slick with torrential rain. What is your strategy?",
        answers: [
          { text: "Charge straight through the most perilous obstacles with relentless willpower.", value: "BLACK" },
          { text: "Find unorthodox shortcuts that others' rigid minds failed to notice.", value: "GOLD" },
          { text: "Climb aggressively, outpacing everyone before the rain turns to mud.", value: "BLUE" },
          { text: "Methodically time the moving traps, conserving energy for the final leap.", value: "GREEN" }
        ]
      },
      {
        id: 7,
        question: "What kind of power calls to your spirit?",
        answers: [
          { text: "Raw, unadulterated devastation that can protect an entire nation.", value: "BLACK" },
          { text: "Time-altering, impossible magic that defies all established laws.", value: "GOLD" },
          { text: "Darkness and lethal precision that strikes before enemies even breathe.", value: "BLUE" },
          { text: "Defense, healing, and strategic control that keeps allies alive.", value: "GREEN" }
        ]
      },
      {
        id: 8,
        question: "When the sky burns and war finally arrives, what will be your legacy?",
        answers: [
          { text: "They will remember that I stood between the monsters and the people I love.", value: "BLACK" },
          { text: "They will remember that I changed the world on my own terms.", value: "GOLD" },
          { text: "They will fear my shadow and revere my strength.", value: "BLUE" },
          { text: "They will study my battles and honor my unwavering loyalty.", value: "GREEN" }
        ]
      }
    ],
    results: {
      BLACK: {
        title: "TAIRN • BLACK DAGGERTAIL",
        subtitle: "The Ruthless Titan & Protector of Navarre",
        quote: "“I do not answer to human customs. But you, cadet... you do not shatter.”",
        description: "You have been claimed by a Black Daggertail, the largest, rarest, and most intimidating dragon breed on the continent. Black dragons demand fierce intellect, unbending moral backbone, and the sheer audacity to stand unbroken before terror. You will wield lightning or earth-shattering power.",
        stats: [
          { label: "BREED", value: "Black Daggertail" },
          { label: "SIGNET AFFINITY", value: "Lightning / Destruction" },
          { label: "TEMPERAMENT", value: "Fierce & Unyielding" },
          { label: "VALE STATUS", value: "Apex Champion" }
        ]
      },
      GOLD: {
        title: "ANDARNA • THE GOLDEN ONE",
        subtitle: "The Mythical Feathertail / Iridescent Scorpiontail",
        quote: "“I waited six hundred and fifty years for you. You were worth waiting for.”",
        description: "A Golden dragon has recognized your heart. Gentle at first glance, but harboring ancient, unprecedented magic capable of stopping time itself. You possess deep empathy, fearless bravery, and the willingness to protect the vulnerable. The Empyrean itself bows to this bond.",
        stats: [
          { label: "BREED", value: "Feathertail / Golden" },
          { label: "SIGNET AFFINITY", value: "Time Deceleration / Truth" },
          { label: "TEMPERAMENT", value: "Pure Loyalty & Fierce" },
          { label: "VALE STATUS", value: "Ancestral Legend" }
        ]
      },
      BLUE: {
        title: "SGAEYL • BLUE DAGGERTAIL",
        subtitle: "The Lethal Queen of the Skies",
        quote: "“Cross my rider, and there will not even be ashes left to bury.”",
        description: "A Blue Daggertail has claimed you. Notoriously ruthless, proud, and discerning, blue dragons tolerate no weakness. You are tactical, fiercely protective of your chosen circle, and harbor shadows that terrify your enemies. You pair well with shadow-wielders or mental prodigies.",
        stats: [
          { label: "BREED", value: "Blue Daggertail" },
          { label: "SIGNET AFFINITY", value: "Shadow Wielding / Combat" },
          { label: "TEMPERAMENT", value: "Cold & Decisive" },
          { label: "VALE STATUS", value: "Deadly Sovereign" }
        ]
      },
      GREEN: {
        title: "FEIRGE • GREEN SCORPIONTAIL",
        subtitle: "The Noble Tactician of Basgiath",
        quote: "“A battle is won long before the first spear is thrown.”",
        description: "A Green Scorpiontail has chosen you. Green dragons are renowned for their razor-sharp intelligence, rational balance, and deadly venomous tails in close combat. You are an indispensable strategist and leader who values loyalty, precision, and enduring brotherhood.",
        stats: [
          { label: "BREED", value: "Green Scorpiontail" },
          { label: "SIGNET AFFINITY", value: "Battle Sight / Wards" },
          { label: "TEMPERAMENT", value: "Calculated & Steadfast" },
          { label: "VALE STATUS", value: "Elite Vanguard" }
        ]
      }
    }
  },

  // 2. SIGNET RELIC QUIZ
  signet: {
    id: "signet",
    title: "Awakened Signet Quiz",
    subtitle: "What deadly power will manifest through your dragon's channel?",
    questions: [
      {
        id: 1,
        question: "The sky splits open with thunder as you stand on the training grounds. How do you react?",
        answers: [
          { text: "I reach for the storm, daring it to strike through my veins.", value: "A" },
          { text: "I melt into the shadows at the edge of the yard, unseen.", value: "B" },
          { text: "I calculate where it will hit next and anticipate the battlefield.", value: "C" },
          { text: "I locate my enemies and analyze their subtle reactions.", value: "D" }
        ]
      },
      {
        id: 2,
        question: "In sparring, your partner takes a blow and collapses, bleeding out. What do you do?",
        answers: [
          { text: "I call down destruction upon whoever violated the sparring rules.", value: "A" },
          { text: "I cloak them in shadows to shield them from further attacks.", value: "B" },
          { text: "I replay their moves in my mind, assessing the critical error.", value: "C" },
          { text: "I reach out for their thoughts—their pain, their fear—to steady their mind.", value: "D" }
        ]
      },
      {
        id: 3,
        question: "You discover a high-ranking officer is secretly trading information to enemy venin. How do you act?",
        answers: [
          { text: "Strike them down publicly with overwhelming power to set an example.", value: "A" },
          { text: "Assassinate them silently in the dead of night without leaving a trace.", value: "B" },
          { text: "Set a strategic trap that forces them to reveal their entire network.", value: "C" },
          { text: "Slip into their mind during dinner to uncover their full conspiracy.", value: "D" }
        ]
      },
      {
        id: 4,
        question: "During study hall, a forbidden scroll tumbles from the archives, glowing with banned magic.",
        answers: [
          { text: "I trace the glowing lines, letting raw energy spark through me.", value: "A" },
          { text: "I slip out of the Archives unseen to decipher it in secrecy.", value: "B" },
          { text: "I close the scroll carefully, patient enough until the right moment.", value: "C" },
          { text: "I sense a consciousness woven into the ink and listen to what it remembers.", value: "D" }
        ]
      },
      {
        id: 5,
        question: "On the battlefield, an enemy rider charges on their mount. You have only a heartbeat to react.",
        answers: [
          { text: "I call down the heavens—pure lightning crackling at my fingertips.", value: "A" },
          { text: "I manifest darkness to blind them and strike from their blind spot.", value: "B" },
          { text: "I predict their trajectory before they swing, countering flawlessly.", value: "C" },
          { text: "I seize their thoughts, bending their will and stopping their breath.", value: "D" }
        ]
      }
    ],
    results: {
      A: {
        title: "LIGHTNING WIELDER",
        subtitle: "Raw Sky Dominance & Pure Energy",
        quote: "“You train this ability, own it, and you will have the power to defend an entire kingdom.”",
        description: "You wield lightning—one of the most devastating and feared signets in Navarre history. You possess immense passion, an indomitable will, and the courage to fight for those you cherish most. Underestimate you, and they will burn in an instant.",
        stats: [
          { label: "POWER TIER", value: "Catastrophic Class" },
          { label: "PRIMARY ELEMENT", value: "Storm & Electric Flux" },
          { label: "CHARACTER INCLINATION", value: "Fierce Protector" },
          { label: "GREATEST RISK", value: "Burnout / Overheating" }
        ]
      },
      B: {
        title: "SHADOW WIELDER",
        subtitle: "Master of Night, Stealth & Absolute Lethality",
        quote: "“He has the kind of power that could end me without him having to so much as lift a finger.”",
        description: "You control shadows, shaping darkness into solid blades, armor, and surveillance. You prefer discretion over vanity, but when someone you love is threatened, you become an unstoppable nightmare to your enemies. Loyalty is your deepest anchor.",
        stats: [
          { label: "POWER TIER", value: "Lethal Apex" },
          { label: "PRIMARY ELEMENT", value: "Solidified Umbra" },
          { label: "CHARACTER INCLINATION", value: "Silent Guardian" },
          { label: "GREATEST RISK", value: "Being Consumed by Dark" }
        ]
      },
      C: {
        title: "BATTLE FORESIGHT",
        subtitle: "Tactical Prescience & Probability Mastery",
        quote: "“He can see the outcome of battles before they occur, leaving fate in his hands.”",
        description: "You possess Battle Foresight. You can read the threads of conflict seconds or minutes into the future, anticipating enemy maneuvers before muscles even twitch. Strategic, razor-sharp, and unshakeable, you turn slaughterhouses into calculated victories.",
        stats: [
          { label: "POWER TIER", value: "Strategic S-Rank" },
          { label: "PRIMARY ELEMENT", value: "Temporal Intuition" },
          { label: "CHARACTER INCLINATION", value: "Grand Strategist" },
          { label: "GREATEST RISK", value: "Fixation on Fixed Fate" }
        ]
      },
      D: {
        title: "INNTINNSIC (MIND READER)",
        subtitle: "The Forbidden Power of Consciousness",
        quote: "“He can read minds—an inntinnsic. His very existence is a death sentence in Navarre.”",
        description: "You are an Inntinnsic. You pierce mental barriers, hearing unspeakable truths, hidden desires, and treason before words are spoken. Navarre leadership executes inntinnsics on sight because no kingdom can keep secrets from you. Keep it hidden, or pay with your life.",
        stats: [
          { label: "POWER TIER", value: "Classified Forbidden" },
          { label: "PRIMARY ELEMENT", value: "Telepathic Resonance" },
          { label: "CHARACTER INCLINATION", value: "Enigmatic Infiltrator" },
          { label: "GREATEST RISK", value: "Navarrian Execution" }
        ]
      }
    }
  },

  // 3. QUADRANT PLACEMENT QUIZ
  quadrant: {
    id: "quadrant",
    title: "Basgiath Quadrant Placement",
    subtitle: "Where do you truly belong in the brutal halls of Basgiath?",
    questions: [
      {
        id: 1,
        question: "When Conscription Day arrives, what is your primary weapon of choice?",
        answers: [
          { text: "Twin daggers and lightning reflexes.", value: "RIDERS" },
          { text: "Books, ancient histories, and critical truths.", value: "SCRIBES" },
          { text: "Medical vials, bandages, and mending hands.", value: "HEALERS" },
          { text: "Shield, standard issue spear, and unbreakable formation.", value: "INFANTRY" }
        ]
      },
      {
        id: 2,
        question: "You are standing on the narrow Parapet above the raging chasm during a storm. What crosses your mind?",
        answers: [
          { text: "One foot after another. Death is just another spectator.", value: "RIDERS" },
          { text: "I should have stayed in the library where gravity is friendlier.", value: "SCRIBES" },
          { text: "I hope the poor souls falling survive with minor fractures.", value: "HEALERS" },
          { text: "Keep moving steadily, trust my comrades ahead.", value: "INFANTRY" }
        ]
      },
      {
        id: 3,
        question: "How do you view rules and military regulations?",
        answers: [
          { text: "Guidelines that are meant to be bent if survival demands it.", value: "RIDERS" },
          { text: "Sacred historical records that must be preserved exactly.", value: "SCRIBES" },
          { text: "Moral obligations to protect human life above all else.", value: "HEALERS" },
          { text: "The backbone of order and chain of command.", value: "INFANTRY" }
        ]
      },
      {
        id: 4,
        question: "What is your biggest fear?",
        answers: [
          { text: "Dying a coward on the ground instead of soaring.", value: "RIDERS" },
          { text: "History being erased and truth suppressed by tyrants.", value: "SCRIBES" },
          { text: "Watching a comrade bleed out while my hands are helpless.", value: "HEALERS" },
          { text: "Failing the front line and letting the kingdom fall.", value: "INFANTRY" }
        ]
      }
    ],
    results: {
      RIDERS: {
        title: "RIDERS QUADRANT",
        subtitle: "“We are the blood on the stones and the fire in the sky.”",
        quote: "“You do not survive the Riders Quadrant by playing safe. You survive by being deadliest.”",
        description: "You belong to the lethal elite: The Riders Quadrant. You thrive under adrenaline, spit in the face of mortal danger, and possess the grit to command multi-ton fire-breathing apex predators. More cadets die here than anywhere else, but the survivors rule the skies.",
        stats: [
          { label: "MORTALITY RATE", value: "Highest in Navarre" },
          { label: "CORE ATTRIBUTE", value: "Audacity & Grit" },
          { label: "WEAPONS", value: "Daggers & Dragon Magic" },
          { label: "STATUS", value: "Lethal Champions" }
        ]
      },
      SCRIBES: {
        title: "SCRIBES QUADRANT",
        subtitle: "Keepers of Truth & Unvarnished History",
        quote: "“Words outlive empires. The pen remembers what generals try to bury.”",
        description: "You belong in the Scribes Quadrant. Intelligent, observant, and deeply ethical, you recognize that true power lies in information and history. While riders fight battles, scribes shape what the world remembers—and what secrets remain locked in the Archives.",
        stats: [
          { label: "MORTALITY RATE", value: "Low / Intellectual" },
          { label: "CORE ATTRIBUTE", value: "Knowledge & Record" },
          { label: "WEAPONS", value: "Archives & Diplomacy" },
          { label: "STATUS", value: "Keepers of the Realm" }
        ]
      },
      HEALERS: {
        title: "HEALERS QUADRANT",
        subtitle: "The Lifeline of Basgiath",
        quote: "“When the fighting ends, our work is only beginning.”",
        description: "You belong in the Healers Quadrant. Compassionate, composed under extreme pressure, and gifted with mending arts. Without healers, the Riders Quadrant would collapse in a single week. You pull soldiers back from the very brink of the afterlife.",
        stats: [
          { label: "MORTALITY RATE", value: "Low / Essential" },
          { label: "CORE ATTRIBUTE", value: "Empathy & Mending" },
          { label: "WEAPONS", value: "Scalpel & Restorative Arts" },
          { label: "STATUS", value: "Sanctuary Keepers" }
        ]
      },
      INFANTRY: {
        title: "INFANTRY QUADRANT",
        subtitle: "The Unyielding Shield of Navarre",
        quote: "“The dragons hold the sky, but our boots hold the ground.”",
        description: "You belong in the Infantry. Resilient, disciplined, and bound by brotherhood, the infantry forms the indestructible spine of the Navarrian army. You value loyalty to comrades, tactical grit, and enduring stoicism on the brutal frontlines.",
        stats: [
          { label: "MORTALITY RATE", value: "High / Frontline" },
          { label: "CORE ATTRIBUTE", value: "Discipline & Unity" },
          { label: "WEAPONS", value: "Shield & Polearm" },
          { label: "STATUS", value: "Fortress Guardians" }
        ]
      }
    }
  }
};
