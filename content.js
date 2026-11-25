/* =====================================================================
   SALIN WEBSITE CONTENT  ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT
   =====================================================================

   HOW TO EDIT (on GitHub):
   1. Open this file (content.js) in your repository.
   2. Tap the pencil icon ✏️ to edit.
   3. Change the text between the quotes "like this".
   4. Tap "Commit changes". The website updates in 1–2 minutes.

   RULES SO YOU DON'T BREAK ANYTHING:
   - Keep the quotes " " around every piece of text.
   - Keep the comma , after every item (except where there's none already).
   - If your text has a quote inside it, use ' instead of ".
   - Lines that start with // are notes. The website ignores them.

   HIGHLIGHTING WORDS in Filipino lines:
   [word]   → highlights the word (the grammar point)
   [!word]  → highlights the word in red (a mistake)
   Example:  "Tumakbo siya [!ng] mabilis."
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. SITE INFO  (shows on the Home and About pages)
   --------------------------------------------------------------------- */
const SITE = {
  name: "Salin",
  tagline: "Learn Filipino the way people actually speak it.",
  intro: "Watch short clips from Filipino reality shows and YouTubers, read the English translation, and learn the grammar and vocabulary behind every line.",

  researchTitle: "[Ng or Nang? Common Grammar Difficulties in Filipino and How Media Clips Can Help Learners]",
  researchers: "[Cale Dimaculangan, Nikka Academia, Seowoo Park, 11-Micah, GCFSMCS]",
  aboutText: "Many learners have trouble with Filipino vocabulary and grammar. This project tests whether real, everyday clips from Filipino media can make these lessons easier to understand than textbook examples alone.",
  method: "Clips are taken from Filipino reality shows and YouTube vlogs. Each line is transcribed, translated into English, and analyzed for the grammar and vocabulary it uses. Respondents' difficulties are gathered through a Google Forms survey.",

  // Paste your Google Form link between the quotes. Leave "" to hide the button.
  surveyLink: "",

  // 📊 CLIPS FROM GOOGLE SHEETS (recommended for your 3 editors)
  // Paste your sheet's "Publish to web" CSV link here. Clips from the sheet
  // show on the website automatically. Leave "" to use only the CLIPS list below.
  clipsSheet: "",
};


/* ---------------------------------------------------------------------
   2. CLIPS
   💡 Easier way: add clips in your Google Sheet instead (see clipsSheet above).
   Clips written here AND clips from the sheet both show on the website.

   Copy the BLANK CLIP TEMPLATE at the very bottom of this file,
   paste it inside the [ ] below, and fill it in.

   id:       a short unique name, no spaces (clip-1, clip-2, ...)
   topic:    one of the lesson names from section 3
             (ngnang, rindin, verbs, particles, po, taglish, slang)
   source:   "show" for reality shows, "youtuber" for YouTubers
   channel:  the show or YouTuber's name (for credit)
   url:      the YouTube link
   start:    when the line starts in the video, like "1:23"
   end:      when it ends, like "1:30" (or "" to let it keep playing)
   filipino: the exact line (use [ ] to highlight)
   english:  a natural English translation
   literal:  word-for-word translation (or "" to hide)
   correct:  true if the grammar is used correctly, false if it's a mistake
   fix:      if it's a mistake, the correct word (otherwise "")
   lessonTitle / explanation: the short lesson for this clip
   vocab:    key words as ["word", "meaning"] pairs
   question / choices / answer / answerWhy: the mini check question.
             Use ___ for the blank. answer must match one of the choices.
   --------------------------------------------------------------------- */
const CLIPS = [

  // Paste clips here (see the BLANK CLIP TEMPLATE at the bottom),
  // or just add them in the Google Sheet.

];


/* ---------------------------------------------------------------------
   3. LESSONS
   CATEGORIES groups the lessons on the Lessons page.
   Each lesson has a short code name (like ngnang) used by clips.

   category: one of the category codes below
   color:    blue, teal, purple, orange, pink, sky, green, or red
   keywords: extra words people might search for (optional)
   rules:    each rule can have text, examples, and/or a table
     examples: ["Filipino line with [highlight]", "English meaning"]
     table:    first row = headings, next rows = content
   mistakes: common mistakes as ["wrong", "right", "why"] (optional)
   tip:      a highlighted box ("" to hide)
   practice: quick questions at the end of the lesson
             (these are also added to the Quiz page)
   --------------------------------------------------------------------- */
const CATEGORIES = [
  ["mixed",     "Easily Mixed Up",      "Words that look or sound alike but do different jobs."],
  ["pronouns",  "Pronouns & Markers",   "Who is doing what: siya, niya, kaniya, ang, ng, sa, and more."],
  ["sentences", "Building Sentences",   "How words connect and how Filipino verbs work."],
  ["everyday",  "Everyday Filipino",    "Respect, Taglish, slang, and how people really write online."],
];

const LESSONS = {

  /* =========================== EASILY MIXED UP =========================== */

  ngnang: {
    name: "Ng vs Nang", category: "mixed", color: "blue",
    intro: "Two words that sound the same but do different jobs.",
    rules: [
      { label: "Use ng", title: "Before a noun: an object, an owner, or a doer", text: "",
        examples: [
          ["Bumili siya [ng] tinapay.", "She bought bread. (object)"],
          ["Ang bahay [ng] lola ko.", "My grandmother's house. (owner)"],
          ["Kinain [ng] aso ang tinapay.", "The dog ate the bread. (doer)"],
        ] },
      { label: "Use nang", title: "For how, when, so that, how much, or repeated verbs", text: "",
        examples: [
          ["Kumanta siya [nang] malakas.", "He sang loudly. (how)"],
          ["[Nang] dumating si Mama, kumain na kami.", "When Mom arrived, we ate. (when)"],
          ["Tawa [nang] tawa sila.", "They kept laughing. (repeated verb)"],
          ["Mag-aral ka [nang] pumasa ka.", "Study so that you pass. (so that)"],
          ["Tumaas [nang] sampung piso ang pamasahe.", "The fare went up by ten pesos. (how much)"],
        ] },
    ],
    mistakes: [
      ["Tumakbo siya ng mabilis.", "Tumakbo siya nang mabilis.", "Mabilis tells how he ran."],
      ["Kain ng kain.", "Kain nang kain.", "Repeated verbs use nang."],
    ],
    tip: "If the next word is a thing or person, use ng. If it tells how, when, why, or how much, or the verb repeats, use nang.",
    practice: [
      { question: "Bumili ako ___ gatas.", choices: ["ng", "nang"], answer: "ng", answerWhy: "Gatas (milk) is the thing bought." },
      { question: "Sumigaw siya ___ malakas.", choices: ["ng", "nang"], answer: "nang", answerWhy: "Malakas tells how he shouted." },
      { question: "___ umalis siya, umiyak ang bata.", choices: ["Ng", "Nang"], answer: "Nang", answerWhy: "It means \"when.\"" },
    ],
  },

  kungkong: {
    name: "Kung vs Kong", category: "mixed", color: "red",
    keywords: "if my ko",
    intro: "One means \"if.\" The other means \"my\" or \"I.\"",
    rules: [
      { label: "Kung", title: "Means \"if\" or \"when\" (a condition)", text: "",
        examples: [
          ["[Kung] uulan bukas, hindi ako aalis.", "If it rains tomorrow, I won't leave."],
          ["Hindi ko alam [kung] saan siya pumunta.", "I don't know where she went."],
        ] },
      { label: "Kong", title: "Ko + -ng: \"my\" or \"I\" linked to the next word", text: "Kong is just ko (my, I) with the linker -ng attached.",
        examples: [
          ["Gusto [kong] kumain.", "I want to eat."],
          ["Ang bago [kong] cellphone.", "My new cellphone."],
        ] },
    ],
    mistakes: [
      ["Gusto kung matulog.", "Gusto kong matulog.", "It means \"I want,\" so it's ko + -ng."],
    ],
    tip: "Try replacing it with \"ko.\" If it still makes sense (gusto ko), write kong. If it means \"if,\" write kung.",
    practice: [
      { question: "___ may oras ka, tulungan mo ako.", choices: ["Kung", "Kong"], answer: "Kung", answerWhy: "It means \"if you have time.\"" },
      { question: "Ito ang paborito ___ kanta.", choices: ["kung", "kong"], answer: "kong", answerWhy: "It means \"my favorite,\" so ko + -ng." },
    ],
  },

  maymayroon: {
    name: "May vs Mayroon", category: "mixed", color: "teal",
    keywords: "meron there is have",
    intro: "Both mean \"there is\" or \"to have,\" but they go before different words.",
    rules: [
      { label: "May", title: "Directly before a noun, verb, adjective, or number", text: "",
        examples: [
          ["[May] pasok bukas.", "There's school tomorrow."],
          ["[May] kumakatok sa pinto.", "Someone is knocking at the door."],
          ["[May] dalawa akong kapatid.", "I have two siblings."],
        ] },
      { label: "Mayroon", title: "Before a pronoun or a little word like ba, pa, nga, or as a short answer", text: "",
        examples: [
          ["[Mayroon] siyang bagong sapatos.", "He has new shoes."],
          ["[Mayroon] ba kayong tubig?", "Do you have water?"],
          ["— Mayroon ka bang ballpen? — [Mayroon].", "— Do you have a pen? — I do."],
        ] },
    ],
    mistakes: [
      ["May siyang kotse.", "Mayroon siyang kotse.", "Siya is a pronoun, so use mayroon."],
    ],
    tip: "Meron is the casual way of saying mayroon. You'll hear it all the time in vlogs, but formal writing uses mayroon.",
    practice: [
      { question: "___ ba tayong assignment?", choices: ["May", "Mayroon"], answer: "Mayroon", answerWhy: "Ba comes next, so use mayroon." },
      { question: "___ bagyo raw bukas.", choices: ["May", "Mayroon"], answer: "May", answerWhy: "Bagyo is a noun right after it." },
    ],
  },

  hindihuwag: {
    name: "Hindi vs Huwag", category: "mixed", color: "purple",
    keywords: "not dont wag",
    intro: "Both mean \"no\" or \"not,\" but one is for commands.",
    rules: [
      { label: "Hindi", title: "Not: for statements and questions", text: "",
        examples: [
          ["[Hindi] ako kumain.", "I didn't eat."],
          ["[Hindi] ba siya darating?", "Isn't she coming?"],
        ] },
      { label: "Huwag", title: "Don't: for commands and requests", text: "",
        examples: [
          ["[Huwag] kang maingay.", "Don't be noisy."],
          ["[Huwag] na nating pag-usapan.", "Let's not talk about it."],
        ] },
    ],
    mistakes: [
      ["Hindi kang tumakbo!", "Huwag kang tumakbo!", "It's a command, so use huwag."],
    ],
    tip: "If you're telling someone not to do something, it's huwag ('wag in casual talk).",
    practice: [
      { question: "___ mong kalimutan ang baon mo.", choices: ["Hindi", "Huwag"], answer: "Huwag", answerWhy: "It's a command: don't forget." },
      { question: "___ ko alam ang sagot.", choices: ["Hindi", "Huwag"], answer: "Hindi", answerWhy: "It's a statement: I don't know." },
    ],
  },

  rindin: {
    name: "Rin/Din & Raw/Daw", category: "mixed", color: "teal",
    keywords: "also too reportedly",
    intro: "Which form to use depends on the word before it.",
    rules: [
      { label: "The rule", title: "Look at how the word before it ends", text: "",
        table: [
          ["Word before ends in…", "Use"],
          ["a vowel (a, e, i, o, u) or w, y", "rin, raw"],
          ["a consonant (other letters)", "din, daw"],
        ],
        examples: [
          ["Masaya [rin] ako.", "I'm happy too. (masaya ends in a)"],
          ["Pagod [din] siya.", "She's tired too. (pagod ends in d)"],
        ] },
      { label: "Meaning", title: "Rin/din = also, too · Raw/daw = they say, reportedly", text: "",
        examples: [
          ["Uuwi [raw] si Kuya bukas.", "Kuya is coming home tomorrow, they say."],
          ["Masarap [daw] ang lechon dito.", "They say the lechon here is good."],
        ] },
    ],
    mistakes: [
      ["Masaya din ako.", "Masaya rin ako.", "Masaya ends in a vowel."],
    ],
    tip: "In everyday speech, many people ignore this rule. That's why real clips are great for spotting it.",
    practice: [
      { question: "Pagod ___ siya.", choices: ["rin", "din"], answer: "din", answerWhy: "Pagod ends in d, a consonant." },
      { question: "Aalis ___ sila mamaya.", choices: ["raw", "daw"], answer: "daw", answerWhy: "Aalis ends in s, a consonant." },
      { question: "Ako ___ ang mananalo.", choices: ["raw", "daw"], answer: "raw", answerWhy: "Ako ends in a vowel." },
    ],
  },

  confused: {
    name: "Commonly Confused Words", category: "mixed", color: "orange",
    keywords: "subukin subukan pahirin pahiran walisin walisan pinto pintuan hagdan hagdanan iwan iwanan operahin operahan",
    intro: "Pairs that look almost the same but mean different things.",
    rules: [
      { label: "Word pairs", title: "One small ending changes the meaning", text: "",
        table: [
          ["Word", "Meaning", "Example"],
          ["subukin", "to test or try something", "Subukin mo ang bagong recipe."],
          ["subukan", "to secretly watch someone", "Subukan mo kung saan siya pupunta."],
          ["pahirin", "to wipe something off", "Pahirin mo ang luha mo."],
          ["pahiran", "to put something on", "Pahiran mo ng butter ang tinapay."],
          ["walisin", "to sweep away (the dirt)", "Walisin mo ang mga dahon."],
          ["walisan", "to sweep (the place)", "Walisan mo ang sahig."],
          ["iwan", "to leave something behind", "Iwan mo na ang bag dito."],
          ["iwanan", "to leave something for someone", "Iwanan mo ako ng ulam."],
        ] },
      { label: "Places vs things", title: "Pinto vs pintuan · Hagdan vs hagdanan", text: "",
        table: [
          ["Word", "Meaning"],
          ["pinto", "the door itself"],
          ["pintuan", "the doorway (the space where the door is)"],
          ["hagdan", "the stairs or steps"],
          ["hagdanan", "the stairway (where the stairs are)"],
        ] },
    ],
    tip: "Notice the pattern: -in often points to the thing itself, while -an points to the place or the person.",
    practice: [
      { question: "___ mo ang sahig bago umalis.", choices: ["Walisin", "Walisan"], answer: "Walisan", answerWhy: "The floor is the place being swept." },
      { question: "___ mo ang bagong sapatos kung kasya.", choices: ["Subukin", "Subukan"], answer: "Subukin", answerWhy: "You're testing or trying the shoes." },
      { question: "May tao sa ___, buksan mo ang pinto.", choices: ["pinto", "pintuan"], answer: "pintuan", answerWhy: "Someone is at the doorway." },
    ],
  },

  /* ========================= PRONOUNS & MARKERS ========================== */

  pronouns: {
    name: "Siya, Niya, Kaniya", category: "pronouns", color: "pink",
    keywords: "kanya kaniyang kanyang ako ko akin ikaw mo iyo pronoun",
    intro: "Why one person can be siya, niya, kaniya, or kaniyang.",
    rules: [
      { label: "The big idea", title: "Filipino pronouns change form depending on their job", text: "Each pronoun has three forms. You pick one based on where it sits in the sentence.",
        table: [
          ["Ang-form (subject)", "Ng-form (after a noun)", "Sa-form (before a noun / with sa)"],
          ["ako", "ko", "akin"],
          ["ikaw / ka", "mo", "iyo"],
          ["siya", "niya", "kaniya"],
          ["kami", "namin", "amin"],
          ["tayo", "natin", "atin"],
          ["kayo", "ninyo", "inyo"],
          ["sila", "nila", "kanila"],
        ] },
      { label: "Siya", title: "The one doing the action or being described", text: "",
        examples: [
          ["Kumain [siya].", "He/she ate."],
          ["Mabait [siya].", "He/she is kind."],
        ] },
      { label: "Niya vs kaniya", title: "Same meaning, different position", text: "Niya comes after the noun. Kaniya comes before it, with -ng attached.",
        examples: [
          ["Aklat [niya] ito.", "This is his/her book."],
          ["[Kaniyang] aklat ito.", "This is his/her book. (same meaning)"],
          ["Para sa [kaniya] ang regalo.", "The gift is for him/her."],
        ] },
      { label: "Kaniyang", title: "Kaniya + -ng before a noun", text: "Kaniyang = kaniya + the linker -ng. It works the same way as akin → aking and iyo → iyong.",
        examples: [
          ["Ang [kaniyang] ina ay guro.", "His/her mother is a teacher."],
          ["Ang [aking] kaibigan.", "My friend."],
        ] },
      { label: "Kanya vs kaniya", title: "Two spellings of the same word", text: "Kanya is a shortened spelling you'll see a lot online. The Komisyon sa Wikang Filipino's writing guide uses kaniya, so use kaniya in school papers and formal writing.",
        table: [
          ["Casual spelling", "Formal spelling"],
          ["kanya / kanyang", "kaniya / kaniyang"],
          ["sya / nya", "siya / niya"],
        ] },
    ],
    mistakes: [
      ["Para kay siya.", "Para sa kaniya.", "After sa, use the sa-form."],
      ["Ang bag siya.", "Ang bag niya.", "After a noun, use the ng-form."],
    ],
    tip: "Ask: Is the person doing the action? Siya. Does it come right after a thing they own? Niya. Is it after sa, or before the thing with -ng? Kaniya / kaniyang.",
    practice: [
      { question: "Ito ang bahay ___.", choices: ["siya", "niya", "kaniya"], answer: "niya", answerWhy: "It comes right after the noun bahay." },
      { question: "Ibigay mo sa ___ ang sulat.", choices: ["siya", "niya", "kaniya"], answer: "kaniya", answerWhy: "After sa, use kaniya." },
      { question: "Sumayaw ___ sa stage.", choices: ["siya", "niya", "kaniya"], answer: "siya", answerWhy: "She is the one doing the action." },
      { question: "Mahal ko ang ___ ngiti.", choices: ["niya", "kaniyang", "siya"], answer: "kaniyang", answerWhy: "Before the noun, use kaniya + -ng." },
    ],
  },

  tayokami: {
    name: "Tayo vs Kami", category: "pronouns", color: "sky",
    keywords: "we us natin namin atin amin",
    intro: "English has one \"we.\" Filipino has two.",
    rules: [
      { label: "The rule", title: "Does \"we\" include the person you're talking to?", text: "",
        table: [
          ["", "Includes the listener", "Does NOT include the listener"],
          ["we", "tayo", "kami"],
          ["our (after noun)", "natin", "namin"],
          ["our (before noun)", "atin / ating", "amin / aming"],
        ],
        examples: [
          ["Kumain na [tayo].", "Let's eat. (you and me)"],
          ["Kumain na [kami].", "We already ate. (not you)"],
          ["Ang [ating] bansa.", "Our country. (yours and mine)"],
        ] },
    ],
    mistakes: [
      ["(Talking to your teacher about your group) Tapos na tayo, Ma'am.", "Tapos na kami, Ma'am.", "The teacher isn't part of the group."],
    ],
    tip: "Vloggers often say \"guys, tara na tayo!\" to make viewers feel included. That's tayo on purpose.",
    practice: [
      { question: "(To a friend) Manood ___ ng sine mamaya!", choices: ["tayo", "kami"], answer: "tayo", answerWhy: "Your friend is included." },
      { question: "(To a guest) Pasensya na, kumain na ___.", choices: ["tayo", "kami"], answer: "kami", answerWhy: "The guest didn't eat with you." },
    ],
  },

  markers: {
    name: "Ang, Ng, Sa & Si, Ni, Kay", category: "pronouns", color: "blue",
    keywords: "sina nina kina markers names",
    intro: "Little words that show each noun's role in the sentence.",
    rules: [
      { label: "For common nouns", title: "Ang, ng, sa", text: "",
        table: [
          ["Marker", "Job", "Example"],
          ["ang", "the topic (who/what the sentence is about)", "Umiyak ang bata."],
          ["ng", "the doer or the object (not the topic)", "Kumain ng mangga ang bata."],
          ["sa", "place, direction, or receiver", "Pumunta sa palengke ang bata."],
        ] },
      { label: "For names", title: "Si, ni, kay (and sina, nina, kina for groups)", text: "",
        table: [
          ["Common noun", "Name (one)", "Names (group)"],
          ["ang", "si", "sina"],
          ["ng", "ni", "nina"],
          ["sa", "kay", "kina"],
        ],
        examples: [
          ["Umalis [si] Ana.", "Ana left."],
          ["Ang bag [ni] Ben.", "Ben's bag."],
          ["Ibigay mo [kay] Lola.", "Give it to Grandma."],
          ["Pupunta kami [kina] Carlo.", "We're going to Carlo's (family's) place."],
        ] },
    ],
    mistakes: [
      ["Ibigay mo sa Lola.", "Ibigay mo kay Lola.", "Lola is used like a name here, so use kay."],
      ["Ang bag ng Ben.", "Ang bag ni Ben.", "Ben is a name, so use ni."],
    ],
    tip: "Kina can also mean \"at their house\": \"Kina Lola tayo matutulog\" = We'll sleep at Grandma's.",
    practice: [
      { question: "Tumawag ___ Maria kanina.", choices: ["si", "ni", "kay"], answer: "si", answerWhy: "Maria is the topic and a name." },
      { question: "Ipadala mo ito ___ Jose.", choices: ["si", "ni", "kay"], answer: "kay", answerWhy: "Jose is the receiver, so use kay." },
      { question: "Ang cellphone ___ Kuya ay bago.", choices: ["si", "ni", "kay"], answer: "ni", answerWhy: "It shows whose phone it is." },
    ],
  },

  demonstratives: {
    name: "Ito, Iyan, Iyon", category: "pronouns", color: "green",
    keywords: "this that dito diyan doon yan yun to",
    intro: "Filipino has three ways to say \"this\" and \"that.\"",
    rules: [
      { label: "The rule", title: "It depends on who it's close to", text: "",
        table: [
          ["Thing", "Place", "Where it is"],
          ["ito (this)", "dito (here)", "near the speaker"],
          ["iyan (that)", "diyan (there)", "near the listener"],
          ["iyon (that, over there)", "doon (over there)", "far from both"],
        ],
        examples: [
          ["Sa akin [ito].", "This is mine."],
          ["Ano [iyan] sa kamay mo?", "What's that in your hand?"],
          ["Tingnan mo [iyon]!", "Look at that (over there)!"],
        ] },
      { label: "Casual forms", title: "What you'll hear in vlogs", text: "",
        table: [
          ["Casual", "Formal"],
          ["'to", "ito"],
          ["'yan", "iyan"],
          ["'yun / 'yon", "iyon"],
          ["dun", "doon"],
        ] },
    ],
    tip: "English \"that\" covers both iyan and iyon, so translators have to guess the distance from the video.",
    practice: [
      { question: "(Pointing at the moon) Ang ganda ng buwan ___.", choices: ["ito", "iyan", "iyon"], answer: "iyon", answerWhy: "The moon is far from both people." },
      { question: "(Holding your own phone) Bago ___.", choices: ["ito", "iyan", "iyon"], answer: "ito", answerWhy: "It's in your hand, near you." },
    ],
  },

  /* ========================= BUILDING SENTENCES ========================== */

  linkers: {
    name: "Linkers: -ng, -g, na", category: "sentences", color: "purple",
    keywords: "pang-angkop magandang na",
    intro: "The glue between a describing word and the word it describes.",
    rules: [
      { label: "The rule", title: "Look at the last letter of the first word", text: "",
        table: [
          ["First word ends in…", "Add", "Example"],
          ["a vowel", "-ng", "maganda → magandang bahay"],
          ["n", "-g", "bayan → bayang magiliw"],
          ["any other consonant", "na (separate word)", "mabait na bata"],
        ],
        examples: [
          ["Ang [magandang] dalaga.", "The beautiful young woman."],
          ["Isang [matapang na] sundalo.", "A brave soldier."],
        ] },
      { label: "Where else", title: "Linkers are everywhere", text: "They're the reason we get words like kaniyang, aking, kong, and isang.",
        examples: [
          ["Isa[ng] tanong.", "One question."],
          ["Gusto ko[ng] umuwi.", "I want to go home."],
        ] },
    ],
    mistakes: [
      ["masarap ng pagkain", "masarap na pagkain", "Masarap ends in p, so use na."],
    ],
    tip: "The first line of the national anthem, \"Bayang magiliw,\" uses the -g linker: bayan + g.",
    practice: [
      { question: "Malinis ___ kwarto.", choices: ["-ng", "-g", "na"], answer: "na", answerWhy: "Malinis ends in s, a consonant." },
      { question: "Mabuti___ tao.", choices: ["-ng", "-g", "na"], answer: "-ng", answerWhy: "Mabuti ends in a vowel." },
      { question: "Kaibigan___ tapat.", choices: ["-ng", "-g", "na"], answer: "-g", answerWhy: "Kaibigan ends in n." },
    ],
  },

  wordorder: {
    name: "Word Order & Ay", category: "sentences", color: "orange",
    keywords: "ay sentence order inverted",
    intro: "Filipino usually puts the action or description first.",
    rules: [
      { label: "Normal order", title: "Action or description first, topic last", text: "This is how people normally talk.",
        examples: [
          ["Maganda ang panahon.", "The weather is nice."],
          ["Umalis na si Mama.", "Mom already left."],
        ] },
      { label: "Ay order", title: "Topic first, then ay", text: "This sounds more formal. You'll see it in essays, news, and speeches.",
        examples: [
          ["Ang panahon [ay] maganda.", "The weather is nice."],
          ["Si Mama [ay] umalis na.", "Mom already left."],
        ] },
    ],
    mistakes: [
      ["Ang panahon ay is maganda.", "Ang panahon ay maganda.", "Ay is not the same as English \"is.\" It only flips the order."],
    ],
    tip: "In clips, people almost never use ay. If a YouTuber uses it, they're often joking or sounding extra formal.",
    practice: [
      { question: "Which sounds more formal?", choices: ["Pagod ako.", "Ako ay pagod."], answer: "Ako ay pagod.", answerWhy: "The ay order is used in formal writing and speeches." },
      { question: "Flip it: \"Masipag si Ana.\"", choices: ["Si Ana ay masipag.", "Ay masipag si Ana.", "Masipag ay si Ana."], answer: "Si Ana ay masipag.", answerWhy: "Topic first, then ay, then the description." },
    ],
  },

  verbs: {
    name: "Verb Aspects", category: "sentences", color: "purple",
    keywords: "tense past present future kumain kumakain kakain",
    intro: "How Filipino verbs show done, ongoing, and future actions.",
    rules: [
      { label: "The idea", title: "Filipino verbs show aspect, not just tense", text: "Aspect tells you if an action is done, ongoing, or not yet started.",
        table: [
          ["Root", "Done", "Ongoing", "Not yet"],
          ["kain (eat)", "kumain", "kumakain", "kakain"],
          ["luto (cook)", "nagluto", "nagluluto", "magluluto"],
          ["basa (read)", "binasa", "binabasa", "babasahin"],
          ["sulat (write)", "sumulat", "sumusulat", "susulat"],
        ] },
      { label: "Pattern", title: "Repeat the first syllable for ongoing and future", text: "",
        examples: [
          ["Nag[lu]luto si Papa.", "Papa is cooking."],
          ["[Ka]kain na tayo.", "We're about to eat."],
        ] },
      { label: "Just did it", title: "Ka- + repeated syllable = just finished", text: "",
        examples: [
          ["[Kakakain] ko lang.", "I just ate."],
          ["[Kararating] lang niya.", "She just arrived."],
        ] },
    ],
    tip: "English uses words like \"will\" and \"was.\" Filipino builds the time right into the verb.",
    practice: [
      { question: "Which means \"is cooking\"?", choices: ["nagluto", "nagluluto", "magluluto"], answer: "nagluluto", answerWhy: "Nagluluto is the ongoing aspect." },
      { question: "Which means \"will write\"?", choices: ["sumulat", "sumusulat", "susulat"], answer: "susulat", answerWhy: "Susulat hasn't started yet." },
      { question: "\"I just woke up\" =", choices: ["Gumising ako.", "Kagigising ko lang.", "Gigising ako."], answer: "Kagigising ko lang.", answerWhy: "Ka- + repeated syllable means just finished." },
    ],
  },

  verbfocus: {
    name: "Verb Focus", category: "sentences", color: "red",
    keywords: "actor object um mag in an i focus pokus",
    intro: "The verb tells you which noun the sentence is about.",
    rules: [
      { label: "Actor focus", title: "um- / mag-: the sentence is about the doer", text: "The doer gets ang.",
        examples: [
          ["Kumain [ang bata] ng mangga.", "The child ate a mango."],
          ["Nagluto [si Lola] ng adobo.", "Grandma cooked adobo."],
        ] },
      { label: "Object focus", title: "-in: the sentence is about the thing", text: "The thing gets ang, and the doer gets ng.",
        examples: [
          ["Kinain ng bata [ang mangga].", "The child ate the mango."],
          ["Niluto ni Lola [ang adobo].", "Grandma cooked the adobo."],
        ] },
      { label: "Other focuses", title: "-an and i-", text: "",
        table: [
          ["Affix", "Focus on", "Example"],
          ["-an", "the place or receiver", "Pinuntahan namin ang mall."],
          ["i-", "the thing moved or given", "Ibinigay niya ang regalo."],
          ["i- / ipag-", "who it's done for", "Ipinagluto niya ako."],
        ] },
    ],
    tip: "Actor focus often feels like \"a mango\" (any mango). Object focus feels like \"the mango\" (a specific one).",
    practice: [
      { question: "Which one is about the cake?", choices: ["Gumawa siya ng cake.", "Ginawa niya ang cake."], answer: "Ginawa niya ang cake.", answerWhy: "The cake has ang, and the verb uses -in." },
      { question: "Binili ___ Ana ang libro.", choices: ["si", "ni"], answer: "ni", answerWhy: "In object focus, the doer gets ng/ni." },
    ],
  },

  /* =========================== EVERYDAY FILIPINO ========================= */

  po: {
    name: "Po & Opo", category: "everyday", color: "pink",
    keywords: "respect ho oho kayo polite",
    intro: "Showing respect when you talk.",
    rules: [
      { label: "Po", title: "Added to show respect", text: "Used with elders, teachers, strangers, and people in authority.",
        examples: [
          ["Salamat [po].", "Thank you (respectful)."],
          ["Saan [po] kayo pupunta?", "Where are you going, sir/ma'am?"],
        ] },
      { label: "Opo", title: "A respectful yes", text: "Ho and oho are softer versions of po and opo.",
        examples: [ ["[Opo], Lola.", "Yes, Grandma."] ] },
      { label: "Kayo", title: "Plural \"you\" to one person = respect", text: "Using kayo/ninyo instead of ikaw/mo is another way to be polite.",
        examples: [ ["Kumain na po ba [kayo]?", "Have you eaten? (to an elder)"] ] },
    ],
    tip: "English has no single word for po, so translations often show respect through tone, like adding sir, ma'am, or polite phrasing.",
    practice: [
      { question: "(To your teacher) Tapos na ___ ako.", choices: ["po", "nga", "lang"], answer: "po", answerWhy: "Po shows respect to the teacher." },
      { question: "A respectful \"yes\" is…", choices: ["oo", "opo", "sige"], answer: "opo", answerWhy: "Opo is the respectful yes." },
    ],
  },

  particles: {
    name: "Little Words", category: "everyday", color: "orange",
    keywords: "na pa naman kasi lang nga ba yata sana pala particles",
    intro: "Na, pa, naman, kasi, lang, nga: small words with big meaning.",
    rules: [
      { label: "Common particles", title: "Small words that change the feeling of a sentence", text: "",
        table: [
          ["Word", "Rough meaning", "Example"],
          ["na", "already, now", "Tara na! (Let's go now!)"],
          ["pa", "still, yet, more", "Gising pa siya. (He's still awake.)"],
          ["naman", "softens or adds emphasis", "Ang ganda naman! (How pretty!)"],
          ["kasi", "because", "Late ako, traffic kasi."],
          ["lang", "only, just", "Isa lang. (Just one.)"],
          ["nga", "really, indeed; please", "Pakiabot nga. (Please pass it.)"],
          ["ba", "turns it into a question", "Kumain ka na ba?"],
          ["yata", "I think, maybe", "Uulan yata. (I think it'll rain.)"],
          ["pala", "oh, so it turns out", "Ikaw pala! (Oh, it's you!)"],
          ["sana", "hopefully, I wish", "Sana pumasa ako."],
        ] },
    ],
    tip: "These words rarely translate word for word. They change the tone, so translations need to capture the feeling, not just the words.",
    practice: [
      { question: "Late ako, traffic ___.", choices: ["lang", "kasi", "pa"], answer: "kasi", answerWhy: "Kasi gives the reason." },
      { question: "(Surprised) Ikaw ___ ang nanalo!", choices: ["pala", "ba", "na"], answer: "pala", answerWhy: "Pala shows surprise: so it was you!" },
      { question: "Gising ka ___?", choices: ["pa", "lang", "yata"], answer: "pa", answerWhy: "Pa means still: are you still awake?" },
    ],
  },

  taglish: {
    name: "Taglish", category: "everyday", color: "sky",
    keywords: "code switching english mag nag i na",
    intro: "Mixing English words with Filipino grammar.",
    rules: [
      { label: "The idea", title: "English words, Filipino grammar", text: "Speakers attach Filipino affixes to English words so they work like Filipino verbs.",
        table: [
          ["Affix", "Example", "Meaning"],
          ["mag-", "mag-shopping", "to go shopping"],
          ["nag-", "nag-text", "texted"],
          ["i-", "i-share", "to share (it)"],
          ["na-", "na-bash", "got bashed"],
          ["-in", "i-edit-in → in-edit", "edited (it)"],
        ] },
      { label: "Aspects work too", title: "Repeat the first syllable, even in English", text: "",
        examples: [
          ["Nag-[a]-aral ako. / Nag-[ste]-study ako.", "I'm studying."],
          ["Magda-[drive] ako mamaya.", "I'll drive later."],
        ] },
    ],
    tip: "Taglish is how many Filipinos really talk, especially online, so learners need to understand it, not just pure Filipino.",
    practice: [
      { question: "Which means \"to share (it)\"?", choices: ["nag-share", "i-share", "na-share"], answer: "i-share", answerWhy: "I- makes a verb about the thing being shared." },
      { question: "\"I'm reviewing\" in Taglish =", choices: ["Nag-review ako.", "Nagre-review ako.", "Magre-review ako."], answer: "Nagre-review ako.", answerWhy: "The repeated \"re\" shows it's ongoing." },
    ],
  },

  slang: {
    name: "Slang & Expressions", category: "everyday", color: "green",
    keywords: "sana all jowa charot lodi petmalu awit",
    intro: "Words you hear online but won't find in textbooks.",
    rules: [
      { label: "Common slang", title: "Words you'll hear in vlogs and shows", text: "",
        table: [
          ["Word", "Meaning"],
          ["sana all", "I wish everyone had that (playful envy)"],
          ["jowa", "boyfriend or girlfriend"],
          ["charot", "just kidding"],
          ["lodi", "idol (spelled backwards)"],
          ["petmalu", "awesome (from malupit, reversed)"],
          ["G", "game, I'm in"],
          ["awit", "an expression of disappointment"],
          ["chika", "gossip, or a story"],
          ["arat", "let's go (tara, reversed)"],
        ] },
    ],
    tip: "A lot of Filipino slang comes from reversing syllables, like lodi from idol and arat from tara.",
    practice: [
      { question: "What does lodi mean?", choices: ["idol", "friend", "crush"], answer: "idol", answerWhy: "Lodi is idol spelled backwards." },
      { question: "\"G ka ba mamaya?\" means…", choices: ["Are you free later?", "Are you down later?", "Are you angry later?"], answer: "Are you down later?", answerWhy: "G (game) means you're in." },
    ],
  },

  spelling: {
    name: "Formal vs Online Spelling", category: "everyday", color: "blue",
    keywords: "sya nya kanya yung ganun dun nyo meron pano wag spelling KWF",
    intro: "How people type in comments vs how to write in school.",
    rules: [
      { label: "The difference", title: "Online shortcuts and their formal spelling", text: "Online spellings are fine for chatting, but school papers should use the formal forms.",
        table: [
          ["Online", "Formal", "Meaning"],
          ["sya / nya", "siya / niya", "he, she"],
          ["kanya", "kaniya", "his, hers"],
          ["yung", "iyong / ang", "the, that"],
          ["ganun", "ganoon", "like that"],
          ["dun", "doon", "over there"],
          ["nyo", "ninyo", "your (plural)"],
          ["meron", "mayroon", "there is, have"],
          ["pano", "paano", "how"],
          ["wag", "huwag", "don't"],
          ["di / hnd", "hindi", "not"],
        ] },
    ],
    tip: "When you transcribe a clip for research, write what the person said, but note the formal spelling so readers can learn both.",
    practice: [
      { question: "Formal spelling of \"ganun\"?", choices: ["ganoon", "ganon", "ganun"], answer: "ganoon", answerWhy: "Ganoon is the formal spelling." },
      { question: "Formal spelling of \"sya\"?", choices: ["sya", "siya", "shia"], answer: "siya", answerWhy: "Siya is the formal spelling." },
    ],
  },

};


/* ---------------------------------------------------------------------
   4. EXTRA QUIZ QUESTIONS
   The quiz already includes every clip's mini check question
   and every lesson's practice questions.
   Add more here. topic must be a lesson code name from section 3.
   --------------------------------------------------------------------- */
const EXTRA_QUIZ = [
  // Example (copy this line, remove the // at the start, and fill it in):
  // { topic: "ngnang", question: "Kumain kami ___ sinigang.", choices: ["ng", "nang"], answer: "ng", answerWhy: "Sinigang is the object." },
];


/* =====================================================================
   BLANK CLIP TEMPLATE — copy everything from { to }, (including the comma)
   and paste it inside the CLIPS list in section 2.
   =====================================================================

  {
    id: "clip-3",
    topic: "ngnang",
    source: "youtuber",
    channel: "",
    url: "",
    start: "0:00",
    end: "",
    filipino: "",
    english: "",
    literal: "",
    correct: true,
    fix: "",
    lessonTitle: "",
    explanation: "",
    vocab: [
      ["", ""],
    ],
    question: "",
    choices: ["", ""],
    answer: "",
    answerWhy: "",
  },

   ===================================================================== */
