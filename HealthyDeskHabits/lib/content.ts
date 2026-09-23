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
  reviewer: "healthydeskhabits-editorial-team",
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
}
  faq: [
    {question: "Should I sit perfectly upright all day?", answer: "No. A slight recline with good lumbar contact is often more sustainable than forced upright sitting. Changing position regularly matters more than holding one ideal angle."},
    {question: "When is lower back pain an emergency?", answer: "Seek urgent care for back pain with leg weakness, numbness in the saddle area, bowel or bladder changes, fever, unexplained weight loss, or pain after significant trauma."},
  ],

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
}
  faq: [
    {question: "Should I work in a dark room with a bright screen?", answer: "Usually no. A glowing screen in a dark room increases contrast and can increase fatigue. Raise ambient light modestly so the screen is not the only bright object in the room."},
  ],

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
}
  faq: [
    {question: "What if I do not have a separate room for work?", answer: "Use visual and routine boundaries instead: a defined desk corner, a lamp that signals work mode, and a shutdown cue such as closing the laptop and putting it away."},
  ],

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
}
  faq: [
    {question: "Does working from bed ruin sleep?", answer: "Using the bed for work can weaken the mental association between bed and sleep for some people. When possible, keep work in a separate space and use a shutdown routine before getting into bed."},
    {question: "How much sleep do adults need?", answer: "Most adults need about seven or more hours per night, though individual needs vary. Consistent timing and a dark, cool sleep environment support better rest."},
  ],

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
}
  faq: [
    {question: "Is 10,000 steps required for desk workers?", answer: "No. Step targets are tools, not medical rules. For many desk workers, interrupting long sits and adding short walks is a more realistic starting point than chasing a fixed number."},
  ],

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
