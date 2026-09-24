export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Source = {
  name: string;
  url?: string;
  note?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  updated: string;
  featured?: boolean;
  editorsPick?: boolean;
  series?: string;
  image?: string;
  imageAlt?: string;
  author: string;
  reviewer?: string;
  sections: Section[];
  tags: string[];
  sources?: Source[];
  faq?: FAQItem[];
  quickAnswer?: string;
};

export const authors: Author[] = [
  {
    slug: 'maya-chen',
    name: 'Maya Chen',
    role: 'Editor, Desk Health and Ergonomics',
    bio: 'Maya focuses on workstation setup, posture and movement for remote workers. She translates public ergonomics guidance from sources such as OSHA and NIOSH into practical home office advice, and reviews Desk Health stories for clarity and accuracy.',
    initials: 'MC',
  },
  {
    slug: 'jordan-reed',
    name: 'Jordan Reed',
    role: 'Editor, Screen Health and Digital Habits',
    bio: 'Jordan covers eye comfort, lighting and screen routines. Stories are cross checked against guidance from organizations such as the American Optometric Association and the American Academy of Ophthalmology before publication.',
    initials: 'JR',
  },
  {
    slug: 'samira-okonkwo',
    name: 'Samira Okonkwo',
    role: 'Editor, Mental Wellness and Remote Work Life',
    bio: 'Samira writes about burnout, boundaries, sleep and social connection for people who work from home. She emphasizes practical habits over perfection and flags when readers should seek professional support.',
    initials: 'SO',
  },
  {
    slug: 'healthydeskhabits-editorial-team',
    name: 'HealthyDeskHabits Editorial Team',
    role: 'Health and Remote Work Editors',
    bio: 'The HealthyDeskHabits editorial team researches practical ways to make remote work healthier, more comfortable and more sustainable. Content is reviewed against public guidance from major health authorities and updated when recommendations change.',
    initials: 'HD',
  },
];

export const articles: Article[] = [
{
  slug: "fix-neck-pain-working-laptop",
  title: "How to Fix Neck Pain From Working on a Laptop",
  excerpt: "A practical guide to laptop height, chair position, screen distance and movement breaks that reduce the downward gaze that often drives desk related neck discomfort.",
  category: "Desk Health",
  readTime: "9 min read",
  date: "Sep 22, 2026",
  updated: "Sep 22, 2026",
  featured: true,
  editorsPick: true,
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["neck pain", "ergonomics", "laptop setup"],
  quickAnswer: "Neck discomfort from laptop work often comes from looking down for long stretches. Raise the screen toward eye level, use a separate keyboard and mouse when you can, and interrupt long sits with brief movement. Persistent or worsening pain should be assessed by a clinician.",
  sections: [
  {
    id: "why-laptops-strain-the-neck",
    title: "Why laptops often strain the neck",
    paragraphs: ["A laptop keeps the display and keyboard in one compact unit. When the keyboard is at a comfortable typing height, the screen is usually too low for neutral neck posture. Looking down for hours increases load on the cervical muscles.", "Occupational health guidance from OSHA emphasizes neutral postures: head balanced over the spine, shoulders relaxed, and elbows near the sides. Laptops make that harder unless you separate the screen from the input devices."],
  },
  {
    id: "raise-the-screen",
    title: "Raise the screen toward eye level",
    paragraphs: ["Bring the top of the display roughly to eye level and keep the screen about an arm length away. A stable laptop stand or external monitor can achieve this. Once the screen is higher, a separate keyboard and mouse let your hands stay lower."],
  },
  {
    id: "change-position-often",
    title: "Change position often",
    paragraphs: ["Even a well arranged desk does not make uninterrupted sitting ideal. Use natural transitions as cues to stand, walk or reset your position."],
    bullets: ["Stand up between focused work blocks.", "Gently move your shoulders and neck.", "Keep frequently used items within easy reach."],
  },
  {
    id: "key-takeaways",
    title: "Key takeaways",
    paragraphs: [],
    bullets: ["Raise the screen when its low position encourages prolonged downward viewing.", "Use a separate keyboard and mouse if you need the laptop higher.", "Break up long periods in one position.", "Persistent or worsening pain deserves professional assessment."],
  },
  {
    id: "when-to-seek-help",
    title: "When to seek professional help",
    paragraphs: ["This article is general information, not a diagnosis. If pain is severe, persistent, worsening, or accompanied by numbness or weakness, seek advice from a qualified healthcare professional."],
  }
  ],
  sources: [
    {name: "OSHA Computer Workstations eTool", url: "https://www.osha.gov/etools/computer-workstations"},
    {name: "Mayo Clinic: Neck pain", url: "https://www.mayoclinic.org/diseases-conditions/neck-pain"},
    {name: "CDC / NIOSH Ergonomics", url: "https://www.cdc.gov/niosh/topics/ergonomics/"},
  ],
  faq: [
    {question: "Can a laptop stand alone fix neck pain?", answer: "A stand helps by raising the screen, but you also need a separate keyboard and mouse so your arms stay comfortable."},
    {question: "How often should I take breaks?", answer: "Many recommendations encourage changing posture at least every 30 to 60 minutes. Short, frequent breaks are usually more realistic."},
  ],
},
{
  slug: "best-ergonomic-desk-setup-home",
  title: "The Best Ergonomic Desk Setup for Working From Home",
  excerpt: "A checklist for monitor height, chair fit, keyboard position and lighting for longer home workdays.",
  category: "Desk Health",
  readTime: "10 min read",
  date: "Sep 21, 2026",
  updated: "Sep 21, 2026",
  editorsPick: true,
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["ergonomics", "desk setup"],
  quickAnswer: "Keep the monitor near eye level, keyboard at elbow height, chair supporting a neutral spine, and lighting free of harsh glare.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Map your dominant tasks before buying gear. Neck strain often tracks screen height; wrist ache tracks keyboard and mouse position."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Place the top of the screen at or slightly below eye level about an arm length away. Elevate laptops and add external input devices."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Keep the keyboard close with elbows near the body. Place the mouse adjacent at the same height."],
  },
  {
    id: "section-4",
    title: "When to seek help",
    paragraphs: ["Fit the chair so feet are flat and the lower back has contact. A slight recline is often more sustainable than forced upright sitting."],
  },
  {
    id: "section-5",
    title: "Key points",
    paragraphs: ["Build movement in: stand for calls, walk after meals, and change position regularly."],
  }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
    {name: "NIOSH Ergonomics", url: "https://www.cdc.gov/niosh/topics/ergonomics/"},
  ],
  faq: [
    {question: "Do I need an expensive chair?", answer: "Fit and adjustability matter more than brand."},
    {question: "What is the most important ergonomic change to make first?", answer: "Raise the screen toward eye level and keep the keyboard close at roughly elbow height. Those two changes prevent a large share of the forward lean and downward gaze that drive desk discomfort."},
    {question: "How do I know if my chair is the problem?", answer: "If your feet dangle, your lower back has no contact with the chair, or you slide forward into a slumped position within minutes, the chair fit is likely contributing. Seat height, lumbar support and a slight recline are the first adjustments to try."},
  ],
},
{
  slug: "standing-desk-benefits-mistakes",
  title: "Standing Desk Benefits and the Mistakes That Undo Them",
  excerpt: "How sit stand desks help, how long to stand, and setup errors that create new discomfort.",
  category: "Desk Health",
  readTime: "8 min read",
  date: "Sep 19, 2026",
  updated: "Sep 19, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["standing desk", "ergonomics"],
  quickAnswer: "Standing desks help most when used to alternate positions, not to stand all day. Match monitor height while standing and change posture regularly.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Sit stand desks make it easier to interrupt long sitting. Prolonged static standing can load feet, knees and lower back differently."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Common mistakes include raising only the keyboard while leaving the screen low, standing on hard floors in unsupportive shoes, and treating standing as a full day replacement for sitting."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Many people do well with 15 to 30 minute standing blocks mixed into the day. Sharp pain or significant leg swelling is a signal to sit and seek care if needed."],
  }
  ],
  sources: [
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/basics/"},
    {name: "Mayo Clinic Office ergonomics", url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/office-ergonomics/art-20046162"},
  ],
  faq: [
    {question: "Can standing replace exercise?", answer: "No. Standing is not a substitute for moderate to vigorous physical activity."},
    {question: "How long should I stand at a standing desk?", answer: "There is no single ideal duration. Many people do well alternating 15 to 30 minute standing blocks with seated work, adjusted for comfort and the type of task."},
    {question: "Why do my feet hurt when I stand to work?", answer: "Hard floors, unsupportive shoes and standing too long without breaks are common causes. Use a mat or supportive footwear, start with shorter standing intervals, and keep shifting weight rather than locking your knees."},
  ],
},
{
  slug: "lower-back-pain-sitting-all-day",
  title: "Lower Back Pain From Sitting All Day: What Actually Helps",
  excerpt: "Chair support, posture variety and movement for the lower back load of long desk days.",
  category: "Desk Health",
  readTime: "9 min read",
  date: "Sep 17, 2026",
  updated: "Sep 17, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["lower back pain", "sitting"],
  quickAnswer: "Improve lumbar support, take regular standing and walking breaks, and avoid prolonged slumped postures. Severe or nerve related symptoms need clinical evaluation.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Sitting increases load on the lumbar region for many people, especially with prolonged forward flexion and rare position changes."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Aim for contact with the lower back curve. Seat height should allow feet flat and thighs roughly parallel to the floor."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Changing position usually matters more than one ideal angle. Stand for calls and walk after meals."],
  },
  {
    id: "section-4",
    title: "When to seek help",
    paragraphs: ["Seek prompt care for weakness, saddle numbness, bowel or bladder changes, fever, or pain after trauma."],
  }
  ],
  sources: [
    {name: "Mayo Clinic Back pain", url: "https://www.mayoclinic.org/diseases-conditions/back-pain"},
    {name: "AAOS Low back pain", url: "https://orthoinfo.aaos.org/en/diseases--conditions/low-back-pain/"},
  ],
  faq: [
    {question: "Should I sit perfectly upright all day?", answer: "No. A slight recline with good lumbar contact is often more sustainable than forced upright sitting. Changing position regularly matters more than holding one ideal angle."},
    {question: "When is lower back pain an emergency?", answer: "Seek urgent care for back pain with leg weakness, numbness in the saddle area, bowel or bladder changes, fever, unexplained weight loss, or pain after significant trauma."},
  ],
},
{
  slug: "wrist-pain-mouse-keyboard",
  title: "Wrist and Forearm Pain From Mouse and Keyboard Use",
  excerpt: "Hand position, reach distance and break patterns for desk related wrist discomfort.",
  category: "Desk Health",
  readTime: "8 min read",
  date: "Sep 15, 2026",
  updated: "Sep 15, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["wrist pain", "keyboard", "mouse"],
  quickAnswer: "Keep wrists relatively straight, bring the mouse closer, reduce hard pressure on the wrist edge, and interrupt repetitive motions.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Extended wrist extension, long mouse reaches, hard edge contact and tight grips are frequent contributors."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Flatten the keyboard toward neutral, keep the mouse adjacent, and avoid planting wrists on a hard edge while actively typing."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Micro breaks to open the hands and change grip reduce cumulative load."],
  },
  {
    id: "section-4",
    title: "When to seek help",
    paragraphs: ["Numbness, night symptoms or grip weakness warrant clinical evaluation."],
  }
  ],
  sources: [
    {name: "Mayo Clinic Carpal tunnel", url: "https://www.mayoclinic.org/diseases-conditions/carpal-tunnel-syndrome"},
    {name: "NIOSH Ergonomics", url: "https://www.cdc.gov/niosh/topics/ergonomics/"},
  ],
},
{
  slug: "monitor-height-eye-level-guide",
  title: "Monitor Height and Eye Level: A Practical Setup Guide",
  excerpt: "How high and how far your screen should sit, including dual monitor layouts for neck comfort.",
  category: "Desk Health",
  readTime: "7 min read",
  date: "Sep 13, 2026",
  updated: "Sep 13, 2026",
  author: "maya-chen",
  reviewer: "jordan-reed",
  tags: ["monitor setup", "eye level"],
  quickAnswer: "Place the top of the primary screen at or slightly below eye level, about an arm length away. Center the main display.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["The top of the visible screen should land near eye level. Viewing distance is often comfortable around 20 to 40 inches depending on size and acuity."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["For dual monitors, put the primary directly in front and angle the secondary inward. Match heights to reduce vertical neck motion."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["If you lean forward, enlarge text, bring the display closer, or raise it before replacing the chair."],
  }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
  ],
},
{
  slug: "how-to-stretch-at-desk",
  title: "How to Stretch at Your Desk Without Looking Ridiculous",
  excerpt: "Short mobility moves for neck, shoulders, hips and wrists between meetings.",
  category: "Desk Health",
  readTime: "6 min read",
  date: "Sep 11, 2026",
  updated: "Sep 11, 2026",
  series: "The 10-Minute Fix",
  author: "maya-chen",
  tags: ["stretching", "mobility"],
  quickAnswer: "Focus on gentle neck mobility, shoulder rolls, chest opening, hip flexor length and wrist circles within a comfortable range.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Brief mobility restores motion and interrupts stillness. It is not a substitute for broader exercise."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Move slowly through neck turns, shoulder rolls, gentle chest opening, wrist circles and a standing hip flexor stretch."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Pair mobility with existing cues such as the end of a meeting or finishing a document."],
  }
  ],
  sources: [
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/"},
  ],
},
{
  slug: "reduce-eye-strain-computer",
  title: "How to Reduce Eye Strain From Working on a Computer",
  excerpt: "Screen distance, lighting, blink habits and break patterns that ease digital eye strain.",
  category: "Screen Health",
  readTime: "8 min read",
  date: "Sep 20, 2026",
  updated: "Sep 20, 2026",
  editorsPick: true,
  author: "jordan-reed",
  reviewer: "jordan-reed",
  tags: ["eye strain", "screen time"],
  quickAnswer: "Place the screen at a comfortable distance, balance room lighting, blink fully, and look away at regular intervals.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Digital eye strain includes fatigue, dryness, blurred vision and headaches linked to prolonged screen use. Reduced blink rate and glare increase demand."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Place the screen about an arm length away with the center slightly below eye level."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Reduce glare, match screen brightness to the room, and avoid a glowing screen in a dark room."],
  },
  {
    id: "section-4",
    title: "When to seek help",
    paragraphs: ["Use short distant gazes and fuller blinks. Persistent symptoms need an eye care professional."],
  }
  ],
  sources: [
    {name: "AOA Computer vision syndrome", url: "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome"},
    {name: "AAO Computers and eyes", url: "https://www.aao.org/eye-health/tips-prevention/computer-usage"},
    {name: "Mayo Clinic Eyestrain", url: "https://www.mayoclinic.org/diseases-conditions/eyestrain"},
  ],
  faq: [
    {question: "Do blue light glasses fix eye strain?", answer: "Evidence for meaningful benefit in typical office use is limited. Breaks, lighting and position usually matter more."},
  ],
},
{
  slug: "blue-light-glasses-do-they-work",
  title: "Do Blue Light Glasses Work for Computer Eye Strain?",
  excerpt: "What evidence says about blue light lenses, sleep claims and better alternatives.",
  category: "Screen Health",
  readTime: "7 min read",
  date: "Sep 18, 2026",
  updated: "Sep 18, 2026",
  author: "jordan-reed",
  reviewer: "jordan-reed",
  tags: ["blue light", "glasses"],
  quickAnswer: "Blue light glasses are unlikely to be a primary solution for typical computer eye strain. Screen habits and breaks have stronger support.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["High quality reviews have not shown strong consistent eye strain benefits from blue light filters for daytime computer use."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Evening bright light can affect circadian timing for some people. Lower brightness and night modes are more direct strategies."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Optimize distance, height, glare and breaks. Keep prescriptions current."],
  }
  ],
  sources: [
    {name: "American Academy of Ophthalmology", url: "https://www.aao.org/eye-health/tips-prevention/computer-usage"},
  ],
},
{
  slug: "20-20-20-rule-explained",
  title: "The 20-20-20 Rule Explained for Screen Workers",
  excerpt: "How the popular eye break guideline works and how to adapt it on busy days.",
  category: "Screen Health",
  readTime: "5 min read",
  date: "Sep 16, 2026",
  updated: "Sep 16, 2026",
  series: "The 10-Minute Fix",
  author: "jordan-reed",
  tags: ["20-20-20 rule", "eye breaks"],
  quickAnswer: "Every 20 minutes, look at something about 20 feet away for about 20 seconds as a simple reminder pattern.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["The rule is a memory aid for interrupting sustained near focus, not a rigid medical prescription."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Distant viewing lets focusing muscles relax briefly. Fuller blinks can reduce dryness."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Attach the habit to meetings ending or standing for water if a timer is impractical."],
  }
  ],
  sources: [
    {name: "American Optometric Association", url: "https://www.aoa.org/"},
  ],
},
{
  slug: "best-lighting-for-computer-work",
  title: "Best Lighting for Computer Work at Home",
  excerpt: "Reduce glare, balance brightness and place lamps for long screen sessions.",
  category: "Screen Health",
  readTime: "7 min read",
  date: "Sep 14, 2026",
  updated: "Sep 14, 2026",
  author: "jordan-reed",
  reviewer: "jordan-reed",
  tags: ["lighting", "glare"],
  quickAnswer: "Use even ambient light, avoid bright reflections on the screen, and keep display brightness similar to the room.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Bright reflections force constant pupil adjustment. Place monitors perpendicular to windows when possible."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Match screen and room brightness. Task lamps should light paper without shining into the display."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Cooler light can feel more alerting by day; warmer light is often preferred in the evening."],
  }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
  ],
  faq: [
    {question: "Should I work in a dark room with a bright screen?", answer: "Usually no. A glowing screen in a dark room increases contrast and can increase fatigue. Raise ambient light modestly so the screen is not the only bright object in the room."},
  ],
},
{
  slug: "digital-eye-strain-symptoms",
  title: "Digital Eye Strain Symptoms and When to See an Eye Doctor",
  excerpt: "Recognize common screen related symptoms and red flags that need care.",
  category: "Screen Health",
  readTime: "6 min read",
  date: "Sep 12, 2026",
  updated: "Sep 12, 2026",
  author: "jordan-reed",
  reviewer: "jordan-reed",
  tags: ["eye strain", "symptoms"],
  quickAnswer: "Typical symptoms include tired eyes, dryness, intermittent blur and mild headaches. Sudden vision loss or severe pain need prompt evaluation.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Burning, gritty eyes, dryness and difficulty refocusing are common after long sessions."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Adjust distance and height, reduce glare, take breaks, and update prescriptions when due."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Seek urgent care for sudden vision changes, flashes, curtains in vision or severe pain."],
  }
  ],
  sources: [
    {name: "Mayo Clinic Eyestrain", url: "https://www.mayoclinic.org/diseases-conditions/eyestrain"},
    {name: "AAO", url: "https://www.aao.org/"},
  ],
},
{
  slug: "dual-monitor-setup-eye-comfort",
  title: "Dual Monitor Setup for Better Eye and Neck Comfort",
  excerpt: "Place two screens to reduce head turning and mismatched distances.",
  category: "Screen Health",
  readTime: "6 min read",
  date: "Sep 10, 2026",
  updated: "Sep 10, 2026",
  author: "jordan-reed",
  reviewer: "maya-chen",
  tags: ["dual monitors", "setup"],
  quickAnswer: "Center the primary monitor, match heights, angle the secondary inward, and keep both at a similar viewing distance.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Put the main task screen directly in front. Use the second for reference material."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Match top edges and depth so the eyes and neck move less when switching focus."],
  }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
  ],
},
{
  slug: "avoid-burnout-working-home",
  title: "How to Avoid Burnout When Working From Home",
  excerpt: "Boundaries, recovery time and realistic routines for the always on feeling of remote work.",
  category: "Mental Wellness",
  readTime: "10 min read",
  date: "Sep 18, 2026",
  updated: "Sep 18, 2026",
  editorsPick: true,
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["burnout", "stress"],
  quickAnswer: "Protect a defined end to the workday, schedule recovery, reduce unnecessary notifications, and watch for persistent exhaustion that may need support.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["WHO describes burnout as energy depletion, mental distance from the job, and reduced efficacy. Remote work can expand work into evenings when boundaries fade."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Track first login, last message and after hours checks to see the real pattern."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Schedule meals, movement, social connection and sleep rather than treating recovery as leftover time."],
  },
  {
    id: "section-4",
    title: "When to seek help",
    paragraphs: ["Choose a few realistic boundaries: a stopping point, fewer notifications, and a workspace you can close down."],
  }
  ],
  sources: [
    {name: "WHO Burn-out", url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases"},
    {name: "Mayo Clinic Job burnout", url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/burnout/art-20046642"},
  ],
  faq: [
    {question: "Is burnout the same as depression?", answer: "No. Burnout is framed as occupational; depression is clinical and can affect all life areas. They can overlap and deserve professional evaluation."},
  ],
},
{
  slug: "separate-work-personal-life",
  title: "How to Separate Work and Personal Life When Working From Home",
  excerpt: "Start and stop cues for when home is also the office.",
  category: "Mental Wellness",
  readTime: "8 min read",
  date: "Sep 12, 2026",
  updated: "Sep 12, 2026",
  editorsPick: true,
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["boundaries", "remote work"],
  quickAnswer: "Use consistent start and shutdown cues, limit work apps on personal devices when possible, and visually close down the workspace.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["A repeatable morning action signals that work has begun: a task list, desk lamp or short walk."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["At the end of work, close the laptop, tidy the desk or write tomorrow first task."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Set boundaries around when work messages are checked. Separate browser profiles can reduce spillover."],
  },
  {
    id: "section-4",
    title: "When to seek help",
    paragraphs: ["In shared homes, communicate focus hours and use simple visual signals."],
  }
  ],
  sources: [
    {name: "CDC Workplace Stress", url: "https://www.cdc.gov/niosh/topics/stress/"},
  ],
  faq: [
    {question: "What if I do not have a separate room for work?", answer: "Use visual and routine boundaries instead: a defined desk corner, a lamp that signals work mode, and a shutdown cue such as closing the laptop and putting it away."},
  ],
},
{
  slug: "improve-sleep-when-working-from-home",
  title: "How to Improve Sleep When You Work From Home",
  excerpt: "Evening routines, light exposure and boundaries that protect sleep.",
  category: "Mental Wellness",
  readTime: "8 min read",
  date: "Sep 9, 2026",
  updated: "Sep 9, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["sleep", "recovery"],
  quickAnswer: "Keep a consistent sleep schedule, get daylight earlier, dim evening screens, and create a clear stop to work.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Flexible schedules and late work can shift circadian timing. Working and sleeping in the same space blurs wind down cues."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Anchor wake time, seek morning outdoor light, and keep the bedroom cool and mainly for sleep."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["End work with a shutdown routine rather than drifting into bed with the laptop."],
  },
  {
    id: "section-4",
    title: "When to seek help",
    paragraphs: ["Chronic insomnia or loud snoring with gasping deserves clinical evaluation."],
  }
  ],
  sources: [
    {name: "CDC Sleep", url: "https://www.cdc.gov/sleep/"},
    {name: "Mayo Clinic Sleep tips", url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379"},
  ],
  faq: [
    {question: "Does working from bed ruin sleep?", answer: "Using the bed for work can weaken the mental association between bed and sleep for some people. When possible, keep work in a separate space and use a shutdown routine before getting into bed."},
    {question: "How much sleep do adults need?", answer: "Most adults need about seven or more hours per night, though individual needs vary. Consistent timing and a dark, cool sleep environment support better rest."},
  ],
},
{
  slug: "combat-loneliness-remote-work",
  title: "How to Combat Loneliness While Working Remotely",
  excerpt: "Social connection strategies that fit real remote schedules.",
  category: "Mental Wellness",
  readTime: "7 min read",
  date: "Sep 8, 2026",
  updated: "Sep 8, 2026",
  author: "samira-okonkwo",
  tags: ["loneliness", "social connection"],
  quickAnswer: "Schedule real offline contact when possible, use intentional team rituals, and treat connection as a health habit.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Remote work reduces low effort hallway interactions. Loneliness is a gap between desired and actual connection."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Plan in person meetups, coworking days or regular non work calls. Short structured team check ins often beat long optional social hours."],
  }
  ],
  sources: [
    {name: "CDC Social connectedness", url: "https://www.cdc.gov/emotional-wellbeing/social-connectedness/"},
  ],
},
{
  slug: "manage-work-stress-simple-habits",
  title: "Simple Habits to Manage Work Stress at a Desk Job",
  excerpt: "Realistic stress practices that do not require an hour of free time.",
  category: "Mental Wellness",
  readTime: "7 min read",
  date: "Sep 7, 2026",
  updated: "Sep 7, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["stress", "habits"],
  quickAnswer: "Prioritize sleep, brief movement, realistic task scoping and short recovery breaks. Reduce notification noise.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Context switching and always on messaging elevate stress load and tension."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Use two minute resets between meetings, a short priority list per block, and outdoor walks after hard calls."],
  }
  ],
  sources: [
    {name: "CDC Stress at work", url: "https://www.cdc.gov/niosh/topics/stress/"},
  ],
},
{
  slug: "focus-deep-work-remote",
  title: "How to Protect Focus and Deep Work When Working Remotely",
  excerpt: "Calendar and notification tactics for concentration without ignoring collaboration.",
  category: "Mental Wellness",
  readTime: "8 min read",
  date: "Sep 6, 2026",
  updated: "Sep 6, 2026",
  author: "samira-okonkwo",
  tags: ["focus", "deep work"],
  quickAnswer: "Block focus time, batch communication, reduce notification noise and protect sleep so energy is available.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Home mixes domestic cues with work tools. Always responsive norms fragment deep work."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Schedule focus blocks like meetings, silence non essential notifications, and batch email when the role allows."],
  }
  ],
  sources: [
    {name: "APA", url: "https://www.apa.org/"},
  ],
},
{
  slug: "afternoon-slump-energy",
  title: "How to Handle the Afternoon Energy Slump at Your Desk",
  excerpt: "Light, movement and break strategies when focus fades after lunch.",
  category: "Mental Wellness",
  readTime: "6 min read",
  date: "Sep 5, 2026",
  updated: "Sep 5, 2026",
  series: "The 10-Minute Fix",
  author: "samira-okonkwo",
  tags: ["energy", "afternoon slump"],
  quickAnswer: "A short walk, outdoor light and a brief task change often help more than another large late coffee.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Circadian alertness often dips in the afternoon. Heavy meals and unbroken sitting amplify it."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Stand and walk five to ten minutes, step outside if you can, and keep late caffeine moderate."],
  }
  ],
  sources: [
    {name: "CDC Sleep", url: "https://www.cdc.gov/sleep/"},
  ],
},
{
  slug: "track-daily-movement-home",
  title: "How to Track Daily Movement While Working From Home",
  excerpt: "Simple movement cues and technology to notice sedentary stretches.",
  category: "Health Tech",
  readTime: "7 min read",
  date: "Sep 16, 2026",
  updated: "Sep 16, 2026",
  author: "healthydeskhabits-editorial-team",
  reviewer: "maya-chen",
  tags: ["wearables", "movement"],
  quickAnswer: "Use a watch or phone as a cue to stand and walk, look for patterns, and keep goals simple enough to sustain.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["The useful part of tracking is often the reminder that prompts a short walk, not the number itself."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Use data to notice when meetings or long writing blocks suppress movement."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["One sustainable cue beats a complicated system you abandon."],
  }
  ],
  sources: [
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/"},
  ],
  faq: [
    {question: "Is 10,000 steps required for desk workers?", answer: "No. Step targets are tools, not medical rules. For many desk workers, interrupting long sits and adding short walks is a more realistic starting point than chasing a fixed number."},
  ],
},
{
  slug: "best-wearables-for-desk-workers",
  title: "Wearables That Actually Help Desk Workers Move More",
  excerpt: "What to look for if the goal is interrupting long sits.",
  category: "Health Tech",
  readTime: "8 min read",
  date: "Sep 4, 2026",
  updated: "Sep 4, 2026",
  author: "healthydeskhabits-editorial-team",
  tags: ["wearables", "smartwatch"],
  quickAnswer: "Prioritize stand reminders, comfortable all day wear and simple data you will review.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Stand reminders and quiet haptic nudges matter more for sedentary jobs than niche sport metrics."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Avoid overtracking that becomes another stress source. Use weekly pattern review instead of minute by minute judgment."],
  }
  ],
  sources: [
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/"},
  ],
},
{
  slug: "posture-reminder-apps",
  title: "Do Posture Reminder Apps and Devices Help?",
  excerpt: "A realistic look at posture apps and timers.",
  category: "Health Tech",
  readTime: "6 min read",
  date: "Sep 3, 2026",
  updated: "Sep 3, 2026",
  author: "maya-chen",
  tags: ["posture", "apps"],
  quickAnswer: "Reminders help if they trigger real position changes. Fixing monitor height and chair support still matters more.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Timers interrupt automatic slouching when paired with a workable setup."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["If reminders create guilt, simplify to a few scheduled breaks instead."],
  }
  ],
  sources: [
    {name: "OSHA Ergonomics", url: "https://www.osha.gov/ergonomics"},
  ],
},
{
  slug: "standing-desk-converters-guide",
  title: "Standing Desk Converters: A Practical Buying and Setup Guide",
  excerpt: "Choose and set up a converter that improves posture variety.",
  category: "Health Tech",
  readTime: "8 min read",
  date: "Sep 2, 2026",
  updated: "Sep 2, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["standing desk", "converter"],
  quickAnswer: "Choose a stable converter that raises screen and keyboard together and keeps the monitor near eye level when standing.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Converters cost less up front; full desks often feel more stable. Either works with correct height."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Check monitor top near eye level, neutral elbows, minimal wobble and enough depth."],
  }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
  ],
},
{
  slug: "productivity-apps-that-support-health",
  title: "Productivity Apps That Support Healthier Workdays",
  excerpt: "Tools for focus blocks and break reminders that protect energy.",
  category: "Health Tech",
  readTime: "7 min read",
  date: "Sep 1, 2026",
  updated: "Sep 1, 2026",
  author: "samira-okonkwo",
  tags: ["apps", "productivity"],
  quickAnswer: "Look for calendar blocking and gentle break reminders. Avoid stacking so many systems that managing tools becomes the job.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Calendar holds for focus and recovery support healthier days more than busyness dashboards."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Keep one calendar, one task list and one reminder system when possible."],
  }
  ],
  sources: [
    {name: "APA", url: "https://www.apa.org/"},
  ],
},
{
  slug: "ten-minute-desk-reset",
  title: "The 10-Minute Desk Reset",
  excerpt: "A short routine for posture, screen position, workspace and body before the next work block.",
  category: "The 10-Minute Fix",
  readTime: "5 min read",
  date: "Sep 14, 2026",
  updated: "Sep 14, 2026",
  series: "The 10-Minute Fix",
  author: "maya-chen",
  tags: ["desk setup", "routine"],
  quickAnswer: "Clear the surface, reset screen and keyboard height, move for a few minutes, then plan the next block with a movement cue.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Minute 1: remove distractions from the work surface."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Minutes 2 to 4: check screen height, distance and keyboard position. Elevate low laptops when possible."],
  },
  {
    id: "section-3",
    title: "Building the habit",
    paragraphs: ["Minutes 5 to 8: stand, walk and gently change position."],
  },
  {
    id: "section-4",
    title: "When to seek help",
    paragraphs: ["Minutes 9 to 10: choose one task and decide when you will next stand or walk."],
  }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
  ],
},
{
  slug: "five-minute-eye-break-routine",
  title: "A 5-Minute Eye Break Routine for Screen Heavy Days",
  excerpt: "Distant viewing, blinking and light mobility between meetings.",
  category: "The 10-Minute Fix",
  readTime: "4 min read",
  date: "Aug 30, 2026",
  updated: "Aug 30, 2026",
  series: "The 10-Minute Fix",
  author: "jordan-reed",
  tags: ["eye break", "routine"],
  quickAnswer: "Look far away, blink fully, relax the shoulders and step away from the screen briefly.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Minute 1: look at a distant object. Minute 2: blink slowly and fully ten times. Minutes 3 to 4: stand and walk. Minute 5: check screen distance and resume."],
  }
  ],
  sources: [
    {name: "American Optometric Association", url: "https://www.aoa.org/"},
  ],
},
{
  slug: "quick-morning-mobility-routine",
  title: "A Quick Morning Mobility Routine Before Desk Work",
  excerpt: "Five to ten minutes of gentle movement before the first login.",
  category: "The 10-Minute Fix",
  readTime: "5 min read",
  date: "Aug 28, 2026",
  updated: "Aug 28, 2026",
  series: "The 10-Minute Fix",
  author: "maya-chen",
  tags: ["mobility", "morning routine"],
  quickAnswer: "Move through easy hip openers, thoracic rotations and shoulder circles before sitting. Keep intensity low and consistency high.",
  sections: [
  {
    id: "section-1",
    title: "Overview",
    paragraphs: ["Starting stiff from sleep then sitting immediately can leave the body compressed by mid morning."],
  },
  {
    id: "section-2",
    title: "What to change",
    paragraphs: ["Use gentle spinal waves, a comfortable hip opener, thoracic rotations and shoulder circles without forcing depth."],
  }
  ],
  sources: [
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/"},
  ],
}
,
{
  slug: "laptop-stand-vs-external-monitor",
  title: "Laptop Stand vs External Monitor: Which Is Better for Your Neck?",
  excerpt: "How to choose between raising your laptop and adding a separate display so your neck and shoulders stop taking the load.",
  category: "Desk Health",
  readTime: "9 min read",
  date: "Sep 20, 2026",
  updated: "Sep 20, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["laptop stand", "monitor", "neck pain", "ergonomics"],
  quickAnswer: "A laptop stand plus external keyboard and mouse is a strong minimum. A separate external monitor is often more comfortable for long days because you can place the top of the screen near eye level without tilting the keyboard up.",
  sections: [
    {
      id: "why-laptop-posture-fails",
      title: "Why laptop only posture fails",
      paragraphs: [
        "A laptop locks the screen and keyboard together. If the keyboard is at a comfortable height, the screen is usually too low. If you raise the laptop so the screen is higher, your wrists and shoulders often suffer.",
        "That tradeoff is why neck and upper back discomfort are so common among remote workers who use a laptop alone for hours."
      ]
    },
    {
      id: "when-a-stand-is-enough",
      title: "When a laptop stand is enough",
      paragraphs: [
        "A sturdy stand can raise the display toward eye level. Pair it with a separate keyboard and mouse so your arms stay relaxed at your sides.",
        "This setup works well for travel days, smaller desks, and people who already type comfortably on an external keyboard."
      ],
      bullets: [
        "Raise the top of the screen near eye level",
        "Keep wrists straight while typing",
        "Avoid stacking unstable books that can tip"
      ]
    },
    {
      id: "when-to-add-a-monitor",
      title: "When an external monitor is worth it",
      paragraphs: [
        "If you write, code, design, or compare documents all day, a dedicated monitor usually feels easier on the neck and eyes. You can place it farther away, match height more precisely, and keep the laptop closed or off to the side.",
        "Look for a monitor with adjustable height or a quality arm so you are not stuck with a fixed low position."
      ]
    },
    {
      id: "practical-recommendation",
      title: "A practical recommendation",
      paragraphs: [
        "Start with a stand plus external keyboard and mouse if budget is tight. Upgrade to an external monitor if you still look down, lean forward, or work more than about six focused hours a day at the same setup."
      ]
    }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
    {name: "NIOSH Ergonomics", url: "https://www.cdc.gov/niosh/topics/ergonomics/"}
  ],
  faq: [
    {question: "Can I keep the laptop open next to a monitor?", answer: "Yes. Place the primary screen directly in front of you and keep the laptop as a secondary display to the side so you are not turning your neck for long stretches."},
    {question: "Do I need an expensive stand?", answer: "No. Stability and height matter more than brand. Avoid wobbly stacks that encourage constant micro adjustments."}
  ]
},
{
  slug: "lumbar-support-office-chair-guide",
  title: "Lumbar Support for Office Chairs: What Actually Helps",
  excerpt: "How to use built in or add on lumbar support so your lower back stays comfortable during long sitting blocks.",
  category: "Desk Health",
  readTime: "8 min read",
  date: "Sep 20, 2026",
  updated: "Sep 20, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["lumbar support", "chair", "lower back", "sitting"],
  quickAnswer: "Good lumbar support fills the natural curve of your lower back without pushing you into an exaggerated arch. Combine it with occasional standing and short walks rather than treating the chair as a cure all.",
  sections: [
    {
      id: "what-lumbar-support-is",
      title: "What lumbar support is supposed to do",
      paragraphs: [
        "Your lower spine has a gentle inward curve. Long sitting often flattens that curve and loads the discs and muscles differently than standing.",
        "Support that meets the small of the back can reduce the feeling of collapsing into a C shape, especially when the seat is adjusted so your feet are supported."
      ]
    },
    {
      id: "built-in-vs-add-on",
      title: "Built in support versus cushions",
      paragraphs: [
        "Adjustable chairs let you move the lumbar pad up or down. If your chair has no support, a firm small cushion or rolled towel can help, but it should not shove you forward off the seat.",
        "Soft oversized pillows often compress into nothing after twenty minutes, so firmer shapes usually work better."
      ]
    },
    {
      id: "setup-checklist",
      title: "Setup checklist",
      paragraphs: ["Use this sequence before buying new gear."],
      bullets: [
        "Sit back so your shoulder blades touch the backrest",
        "Place support in the lower curve, not mid back",
        "Keep hips slightly higher than or level with knees when possible",
        "Stand or walk for a minute every 30 to 45 minutes"
      ]
    },
    {
      id: "when-to-get-help",
      title: "When to get clinical help",
      paragraphs: [
        "Support is not a substitute for care when pain includes leg weakness, numbness in the saddle area, bowel or bladder changes, fever, or pain after trauma. Seek urgent evaluation in those cases."
      ]
    }
  ],
  sources: [
    {name: "Mayo Clinic Back pain", url: "https://www.mayoclinic.org/diseases-conditions/back-pain"},
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"}
  ],
  faq: [
    {question: "Should lumbar support feel forceful?", answer: "No. It should feel like gentle contact that lets you sit tall without strain. Painful pressure means the pad is too aggressive or too high."},
    {question: "Is a kneeling chair better?", answer: "Some people like variety. It is not automatically healthier. Change of position matters more than any single chair style."}
  ]
},
{
  slug: "footrest-desk-circulation",
  title: "Do You Need a Footrest at Your Desk?",
  excerpt: "When a footrest improves comfort, circulation and posture, and when adjusting chair height is the better first step.",
  category: "Desk Health",
  readTime: "7 min read",
  date: "Sep 21, 2026",
  updated: "Sep 21, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["footrest", "circulation", "desk setup", "posture"],
  quickAnswer: "If your feet dangle or only your toes touch the floor after the chair is set for your desk height, a footrest can reduce pressure on the backs of your thighs and help you sit more stably.",
  sections: [
    {
      id: "why-feet-matter",
      title: "Why foot support matters",
      paragraphs: [
        "Unstable feet often lead to perching on the seat edge, crossing legs for long periods, or sliding forward so the lower back rounds.",
        "Solid foot contact makes it easier to keep an upright yet relaxed posture without gripping the chair with your legs."
      ]
    },
    {
      id: "try-chair-first",
      title: "Try chair and desk height first",
      paragraphs: [
        "If the chair can go low enough that both feet rest flat while elbows stay near desk height, fix that first. A footrest is most useful when the desk forces a higher seat."
      ]
    },
    {
      id: "how-to-use-a-footrest",
      title: "How to use a footrest well",
      paragraphs: [
        "Choose a stable platform wide enough for both feet. Slight angle adjustments are fine. Avoid a surface so high that your knees rise far above your hips for the whole day."
      ]
    }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"}
  ],
  faq: [
    {question: "Can a box work as a footrest?", answer: "Yes, if it is sturdy and does not slide. Non slip material helps."},
    {question: "Is crossing my legs harmful?", answer: "Occasional crossing is common. Staying locked in one crossed position for hours is less ideal because it can reduce movement and create uneven load."}
  ]
},
{
  slug: "rsi-prevention-remote-workers",
  title: "RSI Prevention for Remote Workers: Hands, Wrists and Forearms",
  excerpt: "Practical steps to lower repetitive strain risk from typing, clicking and trackpad use at home.",
  category: "Desk Health",
  readTime: "10 min read",
  date: "Sep 21, 2026",
  updated: "Sep 21, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["RSI", "wrist pain", "repetitive strain", "keyboard"],
  quickAnswer: "Reduce force, keep wrists nearer to neutral, bring the mouse closer, and interrupt long input sessions with short movement breaks. Persistent numbness, weakness or night pain deserves clinical assessment.",
  sections: [
    {
      id: "what-rsi-means",
      title: "What people mean by RSI",
      paragraphs: [
        "Repetitive strain injury is a broad label for overuse related discomfort in muscles, tendons and nerves. At a desk it often shows up in the hands, wrists, forearms, elbows or shoulders.",
        "Risk rises with high repetition, awkward postures, hard key presses and few pauses."
      ]
    },
    {
      id: "setup-changes",
      title: "Setup changes that help",
      paragraphs: ["Small equipment changes reduce load even before symptoms appear."],
      bullets: [
        "Keep keyboard near elbow height with wrists straight",
        "Move the mouse close to the keyboard",
        "Lighten your keystrokes and grip",
        "Consider keyboard shortcuts to cut extra clicking"
      ]
    },
    {
      id: "work-pattern-changes",
      title: "Work pattern changes",
      paragraphs: [
        "Alternate tasks when you can. Use a brief stretch or walk every half hour during intense typing blocks. Do not push through sharp pain, progressive numbness or grip weakness."
      ]
    },
    {
      id: "when-to-seek-care",
      title: "When to seek care",
      paragraphs: [
        "See a clinician if symptoms wake you at night, travel into the fingers with tingling, or limit daily tasks. Early advice can prevent longer recovery."
      ]
    }
  ],
  sources: [
    {name: "NIOSH Ergonomics", url: "https://www.cdc.gov/niosh/topics/ergonomics/"},
    {name: "Mayo Clinic Carpal tunnel syndrome", url: "https://www.mayoclinic.org/diseases-conditions/carpal-tunnel-syndrome"}
  ],
  faq: [
    {question: "Are gel wrist rests required?", answer: "They can help some people during pauses, but resting the wrist heavily on a hard edge while actively typing is still worth avoiding."},
    {question: "Should I switch to a vertical mouse?", answer: "Some users find a different mouse shape more comfortable. It is optional. Closer placement and lighter clicking help regardless of mouse style."}
  ]
},
{
  slug: "zoom-fatigue-reduce-video-meetings",
  title: "How to Reduce Zoom Fatigue Without Quitting Meetings",
  excerpt: "Why video calls drain energy and how to change defaults, camera habits and schedules so meetings cost less.",
  category: "Mental Wellness",
  readTime: "9 min read",
  date: "Sep 21, 2026",
  updated: "Sep 21, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["zoom fatigue", "video meetings", "remote work", "energy"],
  quickAnswer: "Zoom fatigue often comes from prolonged close up eye contact, self view, multitasking pressure and back to back calls. Reduce on camera time when possible, take short breaks between meetings, and hide self view if it distracts you.",
  sections: [
    {
      id: "why-video-is-tiring",
      title: "Why video calls feel harder than in person chats",
      paragraphs: [
        "On video, faces appear closer than in a normal conversation. You also monitor your own image, manage lag, and lose some of the body language that makes in person talk easier.",
        "Stacked meetings without recovery time multiply the load."
      ]
    },
    {
      id: "meeting-defaults",
      title: "Change meeting defaults",
      paragraphs: [
        "Suggest audio only when the agenda is simple. End meetings five minutes early. Block buffer time on your calendar after heavy call clusters."
      ],
      bullets: [
        "Turn off self view if it increases self consciousness",
        "Sit a bit farther from the camera when possible",
        "Use walking audio calls for 1:1 updates when appropriate"
      ]
    },
    {
      id: "personal-recovery",
      title: "Personal recovery habits",
      paragraphs: [
        "Stand up between calls. Look out a window. Drink water. Avoid filling every gap with chat and email so your nervous system gets a true pause."
      ]
    }
  ],
  sources: [
    {name: "Stanford Zoom fatigue research overview", url: "https://news.stanford.edu/2021/02/23/four-causes-zoom-fatigue-solutions/"},
    {name: "CDC Workplace Stress", url: "https://www.cdc.gov/niosh/topics/stress/"}
  ],
  faq: [
    {question: "Is it rude to go camera off?", answer: "It depends on team norms. Many teams accept camera off for longer sessions or status updates. Align with your group rather than guessing."},
    {question: "Does multitasking during calls help?", answer: "It usually increases fatigue and reduces listening quality. If the call does not need you, ask whether you must attend."}
  ]
},
{
  slug: "dark-mode-vs-light-mode-eyes",
  title: "Dark Mode vs Light Mode: Which Is Better for Your Eyes?",
  excerpt: "What research and clinical guidance suggest about dark interfaces, light interfaces and visual comfort.",
  category: "Screen Health",
  readTime: "8 min read",
  date: "Sep 22, 2026",
  updated: "Sep 22, 2026",
  author: "jordan-reed",
  reviewer: "jordan-reed",
  tags: ["dark mode", "light mode", "eye strain", "display"],
  quickAnswer: "Neither mode is universally best. Match screen brightness to the room, keep text sharp and large enough, and use the mode that feels clearer for the task. Light mode often helps with long form reading in bright rooms; dark mode can feel easier in dim rooms for some people.",
  sections: [
    {
      id: "comfort-is-contextual",
      title: "Comfort depends on context",
      paragraphs: [
        "Visual comfort is influenced by ambient light, text size, contrast, glare and how long you stare without breaks. Mode alone rarely fixes digital eye strain.",
        "In a bright room, a very dark screen can create harsh contrast. In a dark room, a bright white page can feel like a lamp in your face."
      ]
    },
    {
      id: "practical-rules",
      title: "Practical rules that matter more than mode",
      paragraphs: ["Prioritize these before debating themes."],
      bullets: [
        "Match display brightness to the room",
        "Increase text size before squinting",
        "Reduce glare from windows and lamps",
        "Follow regular near work breaks"
      ]
    },
    {
      id: "try-both",
      title: "How to experiment",
      paragraphs: [
        "Spend a few days on each mode for the same tasks. Note headaches, dryness and whether you lean toward the screen. Keep the option that stays clearer with less effort."
      ]
    }
  ],
  sources: [
    {name: "American Optometric Association Computer vision syndrome", url: "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome"},
    {name: "American Academy of Ophthalmology Eye strain", url: "https://www.aao.org/eye-health/diseases/what-is-eye-strain"}
  ],
  faq: [
    {question: "Does dark mode save battery?", answer: "On some OLED screens, yes. On many LCD laptop panels, savings are small. Comfort should lead the decision."},
    {question: "Should I use night shift all day?", answer: "Warm tint features can feel easier in the evening for some people. They do not replace brightness control or breaks."}
  ]
},
{
  slug: "walking-meetings-remote-work",
  title: "Walking Meetings for Remote Workers: How to Do Them Well",
  excerpt: "When to take calls on the move, how to stay professional, and how walking supports energy and mood.",
  category: "The 10-Minute Fix",
  readTime: "7 min read",
  date: "Sep 22, 2026",
  updated: "Sep 22, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  series: "The 10-Minute Fix",
  tags: ["walking meetings", "movement", "calls", "energy"],
  quickAnswer: "Use walking meetings for conversations that do not require screen sharing. Tell the other person you are on a walk, wear stable shoes, and choose a quiet route so audio stays clear.",
  sections: [
    {
      id: "why-walk",
      title: "Why walking helps",
      paragraphs: [
        "Light movement can lift energy and mood compared with another hour of sitting. Even a short loop around the block is a break from static posture."
      ]
    },
    {
      id: "best-fit-calls",
      title: "Best fit call types",
      paragraphs: [
        "1:1 check ins, coaching chats and brainstorms without documents work well. Avoid walking during detailed design reviews or anything that needs your full screen."
      ]
    },
    {
      id: "etiquette",
      title: "Simple etiquette",
      paragraphs: [
        "Ask first if the other person is comfortable with a walking call. Keep headphones secure. Step aside if traffic noise rises. Return to your desk when notes or screen share become necessary."
      ]
    }
  ],
  sources: [
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/"},
    {name: "WHO Physical activity", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity"}
  ],
  faq: [
    {question: "What if I get dizzy looking at my phone while walking?", answer: "Do not stare at the screen while moving. Use earbuds and keep your eyes on the path."},
    {question: "Is indoor pacing enough?", answer: "Yes. A hallway or treadmill desk session still breaks continuous sitting."}
  ]
},
{
  slug: "hydration-focus-desk-work",
  title: "Hydration and Focus for Desk Workers",
  excerpt: "How mild dehydration can affect concentration and a simple water routine that does not interrupt deep work.",
  category: "Mental Wellness",
  readTime: "6 min read",
  date: "Sep 22, 2026",
  updated: "Sep 22, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["hydration", "focus", "energy", "habits"],
  quickAnswer: "Keep water within reach and drink regularly through the day rather than waiting until you feel very thirsty. Pair refills with natural breaks so hydration supports focus instead of becoming another rigid rule.",
  sections: [
    {
      id: "why-water-matters",
      title: "Why water matters at a desk",
      paragraphs: [
        "Even mild dehydration can contribute to fatigue and reduced alertness for some people. Desk workers also forget to drink when meetings stack up."
      ]
    },
    {
      id: "simple-routine",
      title: "A simple routine",
      paragraphs: [
        "Start the morning with a glass of water. Keep a bottle on the desk. Refill when you stand up after a work block. Adjust for climate, activity and medical advice from your clinician."
      ]
    },
    {
      id: "coffee-context",
      title: "Coffee and context",
      paragraphs: [
        "Coffee can be part of a workday. It is not a full substitute for water. If caffeine disrupts sleep, shift intake earlier."
      ]
    }
  ],
  sources: [
    {name: "CDC Water and healthier drinks", url: "https://www.cdc.gov/healthyweight/healthy_eating/water-and-healthier-drinks.html"},
    {name: "Mayo Clinic Water: How much should you drink", url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256"}
  ],
  faq: [
    {question: "How much water do I need?", answer: "Needs vary by body size, climate and activity. Use thirst, urine color and clinician guidance rather than a single viral number."},
    {question: "Does tea count?", answer: "Unsweetened tea contributes fluid for most healthy people. Extremely high caffeine intake still deserves moderation."}
  ]
},
{
  slug: "home-office-air-quality-focus",
  title: "Home Office Air Quality: Small Changes for Clearer Thinking",
  excerpt: "Ventilation, dust and temperature basics that make a small office feel easier to work in.",
  category: "Desk Health",
  readTime: "8 min read",
  date: "Sep 22, 2026",
  updated: "Sep 22, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["air quality", "ventilation", "home office", "comfort"],
  quickAnswer: "Open a window when outdoor air is reasonable, control dust, keep temperature comfortable, and service HVAC filters on schedule. Persistent mold, strong chemical smells or breathing symptoms need proper investigation.",
  sections: [
    {
      id: "why-air-matters",
      title: "Why air quality shows up in workdays",
      paragraphs: [
        "Stuffy rooms can increase discomfort and the sense of fatigue. Dry air may aggravate eyes and throat during long screen sessions."
      ]
    },
    {
      id: "practical-steps",
      title: "Practical steps",
      paragraphs: ["You do not need expensive gadgets to start."],
      bullets: [
        "Air the room daily when outdoor conditions allow",
        "Vacuum and wipe surfaces that collect dust near the desk",
        "Replace HVAC filters as recommended",
        "Avoid working next to strong cleaning fumes"
      ]
    },
    {
      id: "plants-and-purifiers",
      title: "Plants and purifiers",
      paragraphs: [
        "Houseplants can improve how a room feels, but they are not a complete air cleaning system. Purifiers may help with particles for some households. Choose evidence based expectations over marketing claims."
      ]
    }
  ],
  sources: [
    {name: "EPA Indoor Air Quality", url: "https://www.epa.gov/indoor-air-quality-iaq"},
    {name: "CDC Indoor environmental quality", url: "https://www.cdc.gov/niosh/topics/indoorenv/"}
  ],
  faq: [
    {question: "Is an open window always better?", answer: "Not when outdoor pollution, pollen or extreme heat is high. Use judgment and local air quality information."},
    {question: "Can poor air cause headaches?", answer: "Many factors cause headaches. If symptoms improve with ventilation and worsen in a stuffy room, air and temperature are worth addressing."}
  ]
},
{
  slug: "keyboard-shortcuts-reduce-strain",
  title: "Keyboard Shortcuts That Reduce Mouse Strain",
  excerpt: "High value shortcuts and workflow habits that cut repetitive reaching and clicking.",
  category: "Desk Health",
  readTime: "7 min read",
  date: "Sep 23, 2026",
  updated: "Sep 23, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["keyboard shortcuts", "mouse strain", "productivity", "RSI"],
  quickAnswer: "Learn a small set of shortcuts for the apps you use daily. Reducing long reaches to the mouse can lower forearm load without a full equipment overhaul.",
  sections: [
    {
      id: "why-shortcuts-help-bodies",
      title: "Why shortcuts help your body",
      paragraphs: [
        "Every mouse reach is a small shoulder and forearm demand. Multiplied across thousands of clicks, those reaches add up, especially when the mouse sits far to the right."
      ]
    },
    {
      id: "starter-set",
      title: "A starter set most people use",
      paragraphs: ["Master a few before chasing exotic combinations."],
      bullets: [
        "Copy, paste, undo, save",
        "Switch windows and browser tabs",
        "Bold, italic and link in writing tools",
        "App specific command palettes where available"
      ]
    },
    {
      id: "learning-method",
      title: "How to learn without frustration",
      paragraphs: [
        "Pick three shortcuts this week. Put a sticky note near the monitor. Add three more next week. Consistency beats memorizing a giant list in one night."
      ]
    }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
    {name: "NIOSH Ergonomics", url: "https://www.cdc.gov/niosh/topics/ergonomics/"}
  ],
  faq: [
    {question: "Should I stop using the mouse entirely?", answer: "No. Aim for less forced reaching and lighter effort, not perfection."},
    {question: "Do ergonomic keyboards replace shortcuts?", answer: "Equipment and technique both help. Shortcuts remain useful on any keyboard."}
  ]
},
{
  slug: "weekend-recovery-remote-workers",
  title: "Weekend Recovery Habits for Remote Workers",
  excerpt: "How to rest well when your office is also your home so Monday does not start already depleted.",
  category: "Mental Wellness",
  readTime: "9 min read",
  date: "Sep 23, 2026",
  updated: "Sep 23, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["recovery", "weekend", "boundaries", "burnout"],
  quickAnswer: "Protect at least one longer block of true off time, move your body outdoors if you can, reduce work chat on personal devices, and plan a gentle Sunday evening shutdown so Monday is not a shock.",
  sections: [
    {
      id: "why-weekends-blur",
      title: "Why weekends blur for remote workers",
      paragraphs: [
        "When the laptop is always nearby, unfinished tasks invite quick checks. Those checks prevent full recovery even if total hours look reasonable on paper."
      ]
    },
    {
      id: "recovery-ingredients",
      title: "Recovery ingredients that help",
      paragraphs: [
        "Sleep, social contact, physical movement and mental distance from work all matter. You do not need a perfect wellness retreat. You need enough separation to feel human again."
      ],
      bullets: [
        "Set a shutdown time on Friday",
        "Mute work apps on personal phones",
        "Schedule one enjoyable non work activity",
        "Get daylight exposure when possible"
      ]
    },
    {
      id: "sunday-scaries",
      title: "Easing the Sunday scaries",
      paragraphs: [
        "A short planning review can reduce anxiety if it stays short. Write the top three tasks for Monday, then close the laptop. Endless reorganizing is still work."
      ]
    }
  ],
  sources: [
    {name: "CDC Workplace Stress", url: "https://www.cdc.gov/niosh/topics/stress/"},
    {name: "WHO Burn-out an occupational phenomenon", url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases"}
  ],
  faq: [
    {question: "What if my job requires weekend coverage?", answer: "Negotiate clear on call windows when possible so the entire weekend is not lived in alert mode."},
    {question: "Is sleeping in always best?", answer: "Extra sleep can help if you are depleted, but shifting schedule by many hours may make Monday harder. Find a middle ground that still feels restorative."}
  ]
},
{
  slug: "pomodoro-technique-health-focus",
  title: "The Pomodoro Technique for Healthier Focus Days",
  excerpt: "How timed work intervals can protect attention and create natural movement breaks without rigid productivity theater.",
  category: "The 10-Minute Fix",
  readTime: "8 min read",
  date: "Sep 23, 2026",
  updated: "Sep 23, 2026",
  author: "jordan-reed",
  reviewer: "jordan-reed",
  series: "The 10-Minute Fix",
  tags: ["pomodoro", "focus", "breaks", "productivity"],
  quickAnswer: "Work in focused intervals with short breaks, then take a longer break after several cycles. Use the breaks to stand, look far away and breathe rather than only scrolling.",
  sections: [
    {
      id: "basic-method",
      title: "The basic method",
      paragraphs: [
        "A common pattern is 25 minutes of focus and 5 minutes of rest, with a longer break after four cycles. You can adjust interval length to match your task and attention span."
      ]
    },
    {
      id: "health-angle",
      title: "The health angle",
      paragraphs: [
        "Timers create permission to pause. That pause is valuable for eyes, posture and mental reset if you use it well."
      ],
      bullets: [
        "Stand or stretch during short breaks",
        "Look at something distant for eye relief",
        "Avoid filling every break with more screen time"
      ]
    },
    {
      id: "when-to-flex",
      title: "When to flex the rules",
      paragraphs: [
        "Deep creative flow sometimes needs longer blocks. Meetings interrupt cycles. Treat Pomodoro as a tool, not a moral scoreboard."
      ]
    }
  ],
  sources: [
    {name: "American Optometric Association Computer vision syndrome", url: "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome"},
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/"}
  ],
  faq: [
    {question: "Is 25 minutes mandatory?", answer: "No. Try 40 and 10 or 50 and 10 if that fits your work better."},
    {question: "What if breaks make me lose the thread?", answer: "Write a one line next action before the break so restarting is easier."}
  ]
},
{
  slug: "headphones-neck-tension-remote",
  title: "Headphones, Earbuds and Neck Tension During Long Calls",
  excerpt: "How audio gear and call posture interact, and how to reduce neck and shoulder strain on heavy meeting days.",
  category: "Desk Health",
  readTime: "7 min read",
  date: "Sep 23, 2026",
  updated: "Sep 23, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["headphones", "neck tension", "meetings", "posture"],
  quickAnswer: "Use light comfortable audio gear, keep the screen at eye level, and avoid cradling a phone between ear and shoulder. Alternate sitting and standing on heavy call days.",
  sections: [
    {
      id: "common-patterns",
      title: "Common tension patterns",
      paragraphs: [
        "People lean into the laptop camera, hike one shoulder to hold a device, or clench the jaw during stressful conversations. Those habits show up as neck and upper trapezius tightness."
      ]
    },
    {
      id: "gear-tips",
      title: "Gear tips",
      paragraphs: [
        "Choose headphones that do not clamp painfully. Earbuds should stay put without constant readjustment. Wireless options reduce cable tugs that pull your head to one side."
      ]
    },
    {
      id: "posture-tips",
      title: "Posture tips during calls",
      paragraphs: [
        "Sit back in the chair. Keep the camera at eye level so you are not looking down for hours. Unclench your hands when you notice fists on the desk."
      ]
    }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
    {name: "Mayo Clinic Neck pain", url: "https://www.mayoclinic.org/diseases-conditions/neck-pain"}
  ],
  faq: [
    {question: "Are noise cancelling headphones worth it?", answer: "They can reduce strain from a loud environment. Comfort and fit still matter more than features alone."},
    {question: "Should I stretch mid call?", answer: "Subtle shoulder drops and gentle neck movements are fine. Save bigger mobility work for breaks."}
  ]
},
{
  slug: "meal-timing-energy-remote-work",
  title: "Meal Timing and Energy for Remote Workdays",
  excerpt: "Simple eating patterns that support steadier energy when the kitchen is always a few steps away.",
  category: "Mental Wellness",
  readTime: "8 min read",
  date: "Sep 23, 2026",
  updated: "Sep 23, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["meals", "energy", "habits", "remote work"],
  quickAnswer: "Plan regular meals and protein rich snacks instead of grazing on convenience foods all afternoon. Pair lunch with a short walk when you can, and notice how late heavy meals affect sleep.",
  sections: [
    {
      id: "home-kitchen-trap",
      title: "The home kitchen trap",
      paragraphs: [
        "Working near food can lead to constant snacking that leaves you sluggish. It can also lead to skipped meals until hunger hits hard late in the day."
      ]
    },
    {
      id: "steady-energy",
      title: "Building steadier energy",
      paragraphs: [
        "Most people do better with predictable meal times and balanced plates rather than perfection. Include protein, fiber and fluids. Limit making every break a dessert break."
      ]
    },
    {
      id: "lunch-walk",
      title: "The lunch walk advantage",
      paragraphs: [
        "A short walk after eating can help you return clearer than scrolling at the desk. Even ten minutes counts."
      ]
    }
  ],
  sources: [
    {name: "CDC Healthy Eating", url: "https://www.cdc.gov/healthyweight/healthy_eating/"},
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/"}
  ],
  faq: [
    {question: "Is intermittent fasting required for focus?", answer: "No. Some people like it; others feel worse. Choose a pattern you can sustain and that fits medical advice for your situation."},
    {question: "What about coffee as a meal replacement?", answer: "Caffeine is not a meal. If appetite is low from stress, start with a small balanced plate rather than only stimulants."}
  ]
},
{
  slug: "noise-concentration-home-office",
  title: "Noise and Concentration in a Home Office",
  excerpt: "How to handle household noise, street sound and open plan living when you need to focus.",
  category: "Mental Wellness",
  readTime: "8 min read",
  date: "Sep 24, 2026",
  updated: "Sep 24, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["noise", "focus", "home office", "concentration"],
  quickAnswer: "Combine simple sound control with clear household norms. Headphones, a door, scheduled deep work blocks and written agreements with housemates often help more than willpower alone.",
  sections: [
    {
      id: "noise-tax",
      title: "The concentration tax of noise",
      paragraphs: [
        "Unpredictable noise is more disruptive than steady background sound for many people. Interruptions force costly attention switches."
      ]
    },
    {
      id: "tools",
      title: "Tools that help",
      paragraphs: [
        "Soft furnishings absorb some sound. A closed door helps. Noise cancelling headphones or consistent ambient audio can mask spikes. White noise is optional, not magic."
      ]
    },
    {
      id: "social-solutions",
      title: "Social solutions",
      paragraphs: [
        "Agree on quiet hours when possible. Use a visual signal that you are on a deadline. Take calls in the most private corner you have."
      ]
    }
  ],
  sources: [
    {name: "CDC Workplace Stress", url: "https://www.cdc.gov/niosh/topics/stress/"},
    {name: "EPA Noise pollution", url: "https://www.epa.gov/clean-air-act-overview/clean-air-act-title-iv-noise-pollution"}
  ],
  faq: [
    {question: "Is complete silence required?", answer: "No. Many people focus well with steady low level sound. Aim to reduce sudden interruptions."},
    {question: "What if I share a small apartment?", answer: "Use time splitting, headphones and outdoor work sessions when feasible. Perfect isolation is not always possible."}
  ]
},
{
  slug: "cold-hands-desk-circulation",
  title: "Cold Hands at the Desk: Circulation and Comfort Tips",
  excerpt: "Why hands feel cold during computer work and what to try before assuming the worst.",
  category: "Desk Health",
  readTime: "6 min read",
  date: "Sep 24, 2026",
  updated: "Sep 24, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["circulation", "cold hands", "comfort", "desk"],
  quickAnswer: "Warm the room, keep wrists neutral, move regularly and avoid tight sleeves that press on the forearms. See a clinician if color changes, pain or numbness is severe or persistent.",
  sections: [
    {
      id: "common-causes",
      title: "Common causes at a desk",
      paragraphs: [
        "Cool rooms, limited movement and awkward wrist postures can all make hands feel cold. Stress related circulation changes can also play a role for some people."
      ]
    },
    {
      id: "comfort-steps",
      title: "Comfort steps",
      paragraphs: ["Start with low effort changes."],
      bullets: [
        "Raise room temperature slightly if it is low",
        "Move fingers and shoulders each break",
        "Keep wrists from pressing hard on desk edges",
        "Use a warm drink break as a natural pause"
      ]
    },
    {
      id: "medical-flags",
      title: "Medical flags",
      paragraphs: [
        "Fingers that turn white or blue with pain, sores that heal poorly, or sudden one sided symptoms need professional evaluation rather than only lifestyle tips."
      ]
    }
  ],
  sources: [
    {name: "Mayo Clinic Cold hands causes", url: "https://www.mayoclinic.org/symptoms/cold-hands/basics/causes/sym-20050831"},
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"}
  ],
  faq: [
    {question: "Do fingerless gloves help?", answer: "Some people like them in cold rooms. They should not replace movement or medical care when symptoms are concerning."},
    {question: "Is cold always poor circulation?", answer: "Not always. Environment and normal variation matter. Persistent or dramatic symptoms deserve a clinical conversation."}
  ]
},
{
  slug: "micro-workouts-between-meetings",
  title: "Micro Workouts Between Meetings",
  excerpt: "Short strength and mobility ideas that fit into five to ten minute gaps without needing a gym.",
  category: "The 10-Minute Fix",
  readTime: "8 min read",
  date: "Sep 24, 2026",
  updated: "Sep 24, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  series: "The 10-Minute Fix",
  tags: ["micro workout", "movement", "strength", "meetings"],
  quickAnswer: "Use meeting gaps for a few bodyweight moves: sit to stand, wall push ups, hip hinges and easy core work. Consistency across the week beats rare intense sessions that leave you sore.",
  sections: [
    {
      id: "why-micro",
      title: "Why micro sessions work for desk people",
      paragraphs: [
        "Remote schedules fragment the day. Small movement blocks are easier to keep than a daily hour that never appears."
      ]
    },
    {
      id: "sample-circuit",
      title: "A sample five minute circuit",
      paragraphs: ["Move smoothly. Stop if anything hurts sharply."],
      bullets: [
        "10 sit to stands from a chair",
        "8 to 12 wall push ups",
        "10 hip hinges with a soft knee bend",
        "20 to 30 second tall plank or elevated plank"
      ]
    },
    {
      id: "safety",
      title: "Safety notes",
      paragraphs: [
        "If you have medical conditions or injuries, ask a qualified professional which moves are appropriate. Micro workouts complement walking and regular exercise guidelines; they do not replace all activity."
      ]
    }
  ],
  sources: [
    {name: "CDC Physical Activity", url: "https://www.cdc.gov/physicalactivity/"},
    {name: "WHO Physical activity", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity"}
  ],
  faq: [
    {question: "Will micro workouts build much muscle?", answer: "They support movement and can maintain some strength, especially for beginners. Progressive training still needs planned sessions over time."},
    {question: "What if I sweat before a call?", answer: "Choose lower intensity mobility and posture resets before camera heavy meetings."}
  ]
},
{
  slug: "always-on-culture-boundaries",
  title: "Always On Culture: Setting Boundaries Without Burning Bridges",
  excerpt: "How to reduce after hours message pressure while staying reliable on the work that matters.",
  category: "Mental Wellness",
  readTime: "10 min read",
  date: "Sep 24, 2026",
  updated: "Sep 24, 2026",
  author: "samira-okonkwo",
  reviewer: "samira-okonkwo",
  tags: ["boundaries", "always on", "email", "burnout"],
  quickAnswer: "Clarify response expectations, use delayed send, mute non urgent channels after hours, and talk with your manager about true emergencies versus habit driven pings.",
  sections: [
    {
      id: "always-on-cost",
      title: "The cost of always on habits",
      paragraphs: [
        "Constant availability fragments rest and trains everyone to expect instant replies. Over time that pattern raises burnout risk."
      ]
    },
    {
      id: "practical-boundaries",
      title: "Practical boundaries",
      paragraphs: ["Boundaries work best when they are specific and visible."],
      bullets: [
        "Set status messages with response windows",
        "Use scheduled send for late night thoughts",
        "Agree on what counts as urgent",
        "Protect first and last parts of the day when possible"
      ]
    },
    {
      id: "team-level",
      title: "Team level change",
      paragraphs: [
        "Individual habits help, but norms matter. Leaders who avoid late night pings make it safer for everyone else to rest."
      ]
    }
  ],
  sources: [
    {name: "WHO Burn-out an occupational phenomenon", url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases"},
    {name: "CDC Workplace Stress", url: "https://www.cdc.gov/niosh/topics/stress/"}
  ],
  faq: [
    {question: "What if my boss messages at night?", answer: "Ask whether a reply is needed immediately. Propose a daytime follow up. Document patterns if the load becomes unsustainable."},
    {question: "Do boundaries hurt careers?", answer: "Clear reliable boundaries often sustain performance longer than silent overwork that ends in exhaustion."}
  ]
},
{
  slug: "second-monitor-posture-tips",
  title: "Second Monitor Setup Tips for Better Posture",
  excerpt: "How to place dual displays so your neck is not stuck turning one direction all day.",
  category: "Desk Health",
  readTime: "8 min read",
  date: "Sep 24, 2026",
  updated: "Sep 24, 2026",
  author: "maya-chen",
  reviewer: "maya-chen",
  tags: ["dual monitor", "posture", "setup", "neck"],
  quickAnswer: "Put the primary monitor directly in front of you and the secondary to the side with a small angle. Match heights and keep both screens close enough that you are not leaning forward.",
  sections: [
    {
      id: "primary-center",
      title: "Primary screen in the center",
      paragraphs: [
        "If one display does most of the work, center it. A secondary screen far to the side forces chronic neck rotation."
      ]
    },
    {
      id: "match-heights",
      title: "Match heights and distance",
      paragraphs: [
        "Tops of both screens near eye level works for many people. Keep distance consistent so your eyes are not constantly refocusing between near and far displays."
      ]
    },
    {
      id: "laptop-plus-monitor",
      title: "Laptop plus monitor",
      paragraphs: [
        "Raise the laptop or close it and use an external keyboard. A low laptop beside a high monitor creates a constant up down problem."
      ]
    }
  ],
  sources: [
    {name: "OSHA Computer Workstations", url: "https://www.osha.gov/etools/computer-workstations"},
    {name: "NIOSH Ergonomics", url: "https://www.cdc.gov/niosh/topics/ergonomics/"}
  ],
  faq: [
    {question: "Is ultrawide better than dual monitors?", answer: "Either can work. Ultrawide reduces the center gap. Dual monitors can be cheaper to expand. Posture setup matters more than the form factor."},
    {question: "Should screens be angled like a V?", answer: "A gentle angle is fine. Avoid a sharp wrap that twists your torso."}
  ]
},
{
  slug: "digital-notes-anxiety-overload",
  title: "Digital Notes and Anxiety: Capture Tasks Without Overwhelm",
  excerpt: "A simple approach to notes and tasks so your tools reduce stress instead of creating another inbox.",
  category: "Health Tech",
  readTime: "9 min read",
  date: "Sep 24, 2026",
  updated: "Sep 24, 2026",
  author: "jordan-reed",
  reviewer: "jordan-reed",
  tags: ["notes", "productivity", "anxiety", "tools"],
  quickAnswer: "Use one trusted capture place, review it on a schedule, and keep daily lists short. Tool hopping and perfect systems often increase anxiety rather than reducing it.",
  sections: [
    {
      id: "why-tools-backfire",
      title: "Why note tools backfire",
      paragraphs: [
        "When every app becomes a partial brain, you spend energy remembering where things live. Unreviewed notes create background guilt."
      ]
    },
    {
      id: "minimum-system",
      title: "A minimum viable system",
      paragraphs: ["Keep structure light."],
      bullets: [
        "One inbox for quick capture",
        "One daily list with a few priorities",
        "A weekly review to clear leftovers",
        "Archive or delete without guilt"
      ]
    },
    {
      id: "health-connection",
      title: "Connection to mental load",
      paragraphs: [
        "Externalizing tasks can free attention. The goal is fewer open loops, not more elaborate dashboards."
      ]
    }
  ],
  sources: [
    {name: "CDC Workplace Stress", url: "https://www.cdc.gov/niosh/topics/stress/"},
    {name: "APA Stress resources", url: "https://www.apa.org/topics/stress"}
  ],
  faq: [
    {question: "Which app is best?", answer: "The one you will open daily. Features matter less than consistent use."},
    {question: "Should I track everything?", answer: "No. Track commitments that create stress if forgotten. Let low value noise go."}
  ]
}

];

export const categories = [
  {slug: 'desk-health', name: 'Desk Health', desc: 'Ergonomics, posture, movement and healthier ways to work at a desk.'},
  {slug: 'screen-health', name: 'Screen Health', desc: 'Practical guidance for eye comfort, screen habits, lighting and digital fatigue.'},
  {slug: 'mental-wellness', name: 'Mental Wellness', desc: 'Burnout, stress, sleep, isolation and healthier boundaries around remote work.'},
  {slug: 'health-tech', name: 'Health Tech', desc: 'Wearables, apps and technology that can support healthier workdays.'},
  {slug: 'the-10-minute-fix', name: 'The 10-Minute Fix', desc: 'Short, practical routines you can complete between meetings.'}
];

export const sourceNames = [
  'Mayo Clinic',
  'American Academy of Ophthalmology',
  'American Optometric Association',
  'Centers for Disease Control and Prevention',
  'OSHA',
  'NIOSH',
  'World Health Organization'
];
