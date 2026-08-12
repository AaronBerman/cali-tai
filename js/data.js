/**
 * Workout content for Cali-Tai.
 * Safety notes and external links point to public health / medical authorities.
 * This site is educational only — not medical advice.
 */
window.CALI_TAI = {
  sources: [
    {
      id: "pag",
      title: "Physical Activity Guidelines for Americans (2nd ed.)",
      org: "U.S. HHS / health.gov",
      url: "https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines",
      note: "Start low and go slow; increase gradually; seek care for chronic conditions.",
    },
    {
      id: "cdc-adults",
      title: "Adult Activity Overview",
      org: "CDC",
      url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html",
      note: "≥150 min moderate activity/week + muscle strengthening ≥2 days/week.",
    },
    {
      id: "cdc-counts",
      title: "What Counts as Physical Activity for Adults",
      org: "CDC",
      url: "https://www.cdc.gov/physical-activity-basics/adding-adults/what-counts.html",
      note: "Bodyweight moves (e.g. push-ups) count as muscle strengthening.",
    },
    {
      id: "acsm-rt",
      title: "Updated Resistance Training Guidelines",
      org: "ACSM",
      url: "https://acsm.org/resistance-training-guidelines-update-2026/",
      note: "Bodyweight and home-based training can improve strength and function.",
    },
    {
      id: "nccih-tai",
      title: "Tai Chi: What You Need To Know",
      org: "NCCIH (NIH)",
      url: "https://www.nccih.nih.gov/health/tai-chi-what-you-need-to-know",
      note: "Generally safe; minor aches possible; talk with a clinician if pregnant or managing conditions.",
    },
    {
      id: "nccih-tips",
      title: "5 Tips: Tai Chi for Health",
      org: "NCCIH (NIH)",
      url: "https://www.nccih.nih.gov/health/tips/tips-what-you-should-know-about-tai-chi-for-health",
      note: "Evidence strongest for balance/falls; discuss complementary approaches with your providers.",
    },
    {
      id: "mayo-tai",
      title: "Tai Chi Is a Gentle Way to Fight Stress",
      org: "Mayo Clinic",
      url: "https://newsnetwork.mayoclinic.org/discussion/mayo-mindfulness-tai-chi-is-a-gentle-way-to-fight-stress/",
      note: "Low impact; consult a clinician for joint, spine, heart issues, pregnancy, or osteoporosis.",
    },
  ],

  /**
   * Per-exercise how-tos. Prefer reputable videos; otherwise clear written instructions
   * from ACE, NASM, NHS, Harvard Health, Mayo Clinic, etc.
   * type: "video" | "article"
   */
  howTos: [
    {
      id: "nhs-taichi",
      type: "video",
      title: "Adapted Tai Chi (Part 1)",
      org: "Worcestershire Health and Care NHS Trust",
      url: "https://www.youtube.com/watch?v=ZbGvYXB08uk",
    },
    {
      id: "nhs-pilates-1",
      type: "video",
      title: "Introduction to Pilates — Workout 1 (knee push-up & core cues)",
      org: "NHS / InstructorLive",
      url: "https://www.youtube.com/watch?v=44HquH6QyXc",
    },
    {
      id: "nhs-pilates-2",
      type: "video",
      title: "Introduction to Pilates — Workout 2 (push-up alignment)",
      org: "NHS / InstructorLive",
      url: "https://www.youtube.com/watch?v=fGGC9WLsI3U",
    },
    {
      id: "mayo-warmup",
      type: "article",
      title: "Aerobic exercise: How to warm up and cool down",
      org: "Mayo Clinic",
      url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20045517",
    },
    {
      id: "ace-pushup-levels",
      type: "article",
      title: "Perfecting the Push-up for All Levels (wall → full)",
      org: "ACE",
      url: "https://www.acefitness.org/resources/pros/expert-articles/7265/perfecting-the-push-up-for-all-levels/",
    },
    {
      id: "harvard-pushup",
      type: "article",
      title: "Modify your push-ups to meet your fitness level",
      org: "Harvard Health",
      url: "https://www.health.harvard.edu/exercise-and-fitness/modify-your-push-ups-to-meet-your-fitness-level",
    },
    {
      id: "ace-pushup",
      type: "article",
      title: "How to do a push-up",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/41/push-up/",
    },
    {
      id: "ace-knee-pushup",
      type: "article",
      title: "How to do a bent-knee push-up",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/13/bent-knee-push-up/",
    },
    {
      id: "ace-squat",
      type: "article",
      title: "How to do a bodyweight squat",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/",
    },
    {
      id: "ace-reverse-lunge",
      type: "article",
      title: "How to do a reverse lunge",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/319/reverse-lunge/",
    },
    {
      id: "ace-single-leg-squat",
      type: "article",
      title: "How to do a single-leg squat (assisted balance cues)",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/136/single-leg-squat/",
    },
    {
      id: "nasm-single-leg",
      type: "article",
      title: "Single-leg squat touchdown (assisted progression)",
      org: "NASM",
      url: "https://www.nasm.org/resource-center/exercise-library/single-leg-squat-touchdown",
    },
    {
      id: "ace-glute-bridge",
      type: "article",
      title: "How to do a glute bridge",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/",
    },
    {
      id: "nerdfit-inverted-row",
      type: "article",
      title: "How to do an inverted / bodyweight row",
      org: "Nerd Fitness (clear step-by-step)",
      url: "https://www.nerdfitness.com/blog/inverted-row-are-you-missing-out-on-this-great-exercise/",
    },
    {
      id: "ace-pullup",
      type: "article",
      title: "How to do a pull-up (use slow lowering for negatives)",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/191/pull-ups/",
    },
    {
      id: "ace-plank",
      type: "article",
      title: "How to do a front plank",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/32/front-plank/",
    },
    {
      id: "ace-side-plank",
      type: "article",
      title: "How to do a side plank",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/101/side-plank-with-straight-leg/",
    },
    {
      id: "ace-side-plank-mod",
      type: "article",
      title: "How to do a modified (knee) side plank",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/99/side-plank-modified/",
    },
    {
      id: "nasm-pike",
      type: "article",
      title: "How to do a pike push-up",
      org: "NASM",
      url: "https://www.nasm.org/resource-center/exercise-library/pike-push-up",
    },
    {
      id: "puregym-cali",
      type: "article",
      title: "Calisthenics home guide (includes hollow body hold cues)",
      org: "PureGym",
      url: "https://www.puregym.com/blog/calisthenics-workout-guide/",
    },
    {
      id: "ace-hip-flexor",
      type: "article",
      title: "Kneeling hip-flexor stretch",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/142/kneeling-hip-flexor-stretch/",
    },
    {
      id: "ace-standing-lunge",
      type: "article",
      title: "Standing lunge stretch (hip flexor opener)",
      org: "ACE Exercise Library",
      url: "https://www.acefitness.org/resources/everyone/exercise-library/137/standing-lunge-stretch/",
    },
    {
      id: "mayo-stretch",
      type: "article",
      title: "A guide to basic stretches (includes hip flexor stretch)",
      org: "Mayo Clinic",
      url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/stretching/art-20546848",
    },
    {
      id: "cleveland-hips",
      type: "article",
      title: "Hip-opening stretches",
      org: "Cleveland Clinic",
      url: "https://health.clevelandclinic.org/hip-opening-stretches",
    },
    {
      id: "nhs-cooldown",
      type: "article",
      title: "Cool down & stretching (chest stretch, forward bend)",
      org: "NHS Inside Guide",
      url: "https://insideguide.nhs.uk/hospitals/helping-yourself/healthy-body/exercise/cool-down-and-stretching/",
    },
    {
      id: "mayo-tai-howto",
      type: "article",
      title: "Tai chi overview & getting started safely",
      org: "Mayo Clinic",
      url: "https://newsnetwork.mayoclinic.org/discussion/mayo-mindfulness-tai-chi-is-a-gentle-way-to-fight-stress/",
    },
  ],

  safetyBullets: [
    "This site is educational, not medical advice. Stop if you feel sharp pain, dizziness, chest pain, or unusual shortness of breath, and seek urgent care when needed.",
    "If you are pregnant, have heart, joint, spine, balance, or bone-density concerns, talk with a clinician before starting (Mayo Clinic; NCCIH).",
    "U.S. guidelines: build up gradually (“start low and go slow”) and include muscle-strengthening work on 2+ days per week (HHS / CDC).",
    "Prefer quality reps over failure early on; end a set when form breaks down (ACSM resistance-training guidance).",
    "For tai chi, consider learning key postures from a qualified instructor when possible (Mayo Clinic; NCCIH).",
  ],

  exercises: {
    /* Warm-ups */
    march: {
      name: "Easy march in place",
      kind: "warmup",
      cue: "Soft knees, relaxed shoulders, steady breathing for 1–2 minutes.",
      howToIds: ["mayo-warmup"],
    },
    armCircles: {
      name: "Arm circles",
      kind: "warmup",
      cue: "Small to medium circles; keep ribs stacked over pelvis.",
      howToIds: ["mayo-warmup"],
    },
    hipOpeners: {
      name: "Gentle hip openers",
      kind: "warmup",
      cue: "Slow side-to-side weight shifts or a gentle hip-flexor stretch; no forcing, no bouncing.",
      howToIds: ["mayo-stretch", "cleveland-hips", "ace-hip-flexor", "ace-standing-lunge"],
    },

    /* Calisthenics */
    wallPush: {
      name: "Wall or incline push-up",
      kind: "calisthenics",
      cue: "Hands under shoulders; body in one line; elbows track ~45° from torso.",
      howToIds: ["ace-pushup-levels", "harvard-pushup", "nhs-pilates-1"],
    },
    kneePush: {
      name: "Knee push-up",
      kind: "calisthenics",
      cue: "Keep hips level; do not sag the low back (NHS form cues).",
      howToIds: ["ace-knee-pushup", "nhs-pilates-1"],
    },
    pushUp: {
      name: "Push-up",
      kind: "calisthenics",
      cue: "Full plank line; stop before form collapses.",
      howToIds: ["ace-pushup", "harvard-pushup", "nhs-pilates-2"],
    },
    diamondPush: {
      name: "Close-grip / diamond push-up",
      kind: "calisthenics",
      cue: "Hands closer; elbows near ribs; control the descent; stop short of elbow pain.",
      howToIds: ["ace-pushup", "nhs-pilates-2"],
    },
    squat: {
      name: "Bodyweight squat",
      kind: "calisthenics",
      cue: "Feet about hip–shoulder width; knees track over mid-foot; chest tall.",
      howToIds: ["ace-squat"],
    },
    splitSquat: {
      name: "Split squat / reverse lunge",
      kind: "calisthenics",
      cue: "Shorten stance if balance falters; front knee tracks over mid-foot.",
      howToIds: ["ace-reverse-lunge"],
    },
    pistolAssist: {
      name: "Assisted single-leg squat",
      kind: "calisthenics",
      cue: "Hold a doorframe or chair; control depth; no knee collapse.",
      howToIds: ["ace-single-leg-squat", "nasm-single-leg"],
    },
    gluteBridge: {
      name: "Glute bridge",
      kind: "calisthenics",
      cue: "Ribs down; squeeze glutes at the top without overarching the back.",
      howToIds: ["ace-glute-bridge"],
    },
    singleBridge: {
      name: "Single-leg bridge",
      kind: "calisthenics",
      cue: "Hips level; shorter range if hamstrings cramp. ACE bridge page covers the single-leg progression.",
      howToIds: ["ace-glute-bridge"],
    },
    row: {
      name: "Table / towel row",
      kind: "calisthenics",
      cue: "Pull shoulder blades down and back; neck long. Only use furniture rated for your weight.",
      howToIds: ["nerdfit-inverted-row"],
    },
    australian: {
      name: "Inverted row (bar or sturdy table)",
      kind: "calisthenics",
      cue: "Body rigid; pull chest to bar; only use furniture rated for your weight.",
      howToIds: ["nerdfit-inverted-row"],
    },
    pullUpNeg: {
      name: "Pull-up negatives or assisted pull-up",
      kind: "calisthenics",
      cue: "Jump or step to the top, then lower for 3–5 seconds using the ACE pull-up setup cues.",
      howToIds: ["ace-pullup"],
    },
    plank: {
      name: "Front plank",
      kind: "calisthenics",
      cue: "Brace as if preparing for a light poke to the belly; breathe steadily.",
      howToIds: ["ace-plank", "nhs-pilates-1"],
    },
    sidePlank: {
      name: "Side plank (knees or feet)",
      kind: "calisthenics",
      cue: "Stack hips; stop if shoulder pinches. Use the modified version if needed.",
      howToIds: ["ace-side-plank-mod", "ace-side-plank"],
    },
    hollow: {
      name: "Hollow body hold",
      kind: "calisthenics",
      cue: "Low back pressed gently to floor; shorten levers if needed.",
      howToIds: ["puregym-cali"],
    },
    pike: {
      name: "Pike / elevated pike push-up prep",
      kind: "calisthenics",
      cue: "Hips high; light pressure through shoulders; no neck strain.",
      howToIds: ["nasm-pike"],
    },

    /* Tai chi */
    standingBreath: {
      name: "Standing breath + posture reset",
      kind: "tai-chi",
      cue: "Feet parallel; soft knees; crown lifted; inhale/exhale smoothly.",
      howToIds: ["nhs-taichi", "mayo-tai-howto"],
    },
    weightShift: {
      name: "Weight shifting (empty / full)",
      kind: "tai-chi",
      cue: "Shift fully onto one leg before stepping; keep knees soft.",
      howToIds: ["nhs-taichi", "mayo-tai-howto"],
    },
    cloudHands: {
      name: "Cloud hands (simplified)",
      kind: "tai-chi",
      cue: "Slow waist turns; arms float; eyes soft. Sit if balance is limited.",
      howToIds: ["nhs-taichi"],
    },
    brushKnee: {
      name: "Brush knee (simplified)",
      kind: "tai-chi",
      cue: "Step carefully; opposing arm brushes past the knee line without forcing.",
      howToIds: ["nhs-taichi"],
    },
    pushHandsSolo: {
      name: "Push (solo pattern)",
      kind: "tai-chi",
      cue: "Exhale on the push; keep shoulders down; no locking elbows.",
      howToIds: ["nhs-taichi"],
    },
    formShort: {
      name: "Short form flow (5–8 minutes)",
      kind: "tai-chi",
      cue: "Link familiar moves slowly; prioritize balance over memorizing new steps.",
      howToIds: ["nhs-taichi", "mayo-tai-howto"],
    },
    formLong: {
      name: "Longer form practice (10–15 minutes)",
      kind: "tai-chi",
      cue: "Continuous soft movement; rest if dizziness appears.",
      howToIds: ["nhs-taichi", "mayo-tai-howto"],
    },

    /* Cool-down */
    forwardFold: {
      name: "Soft forward fold (or seated hinge)",
      kind: "cooldown",
      cue: "Bend knees freely; hang or sit; no bouncing.",
      howToIds: ["nhs-cooldown"],
    },
    chestOpen: {
      name: "Chest opener + shoulder rolls",
      kind: "cooldown",
      cue: "Gentle only; breathe into the ribs.",
      howToIds: ["nhs-cooldown"],
    },
  },

  levels: {
    beginner: {
      id: "beginner",
      title: "Beginner",
      tagline: "Build easy strength and calm balance.",
      blurb:
        "Focus on joint-friendly progressions, short sessions, and recovery days. Strength work lands on non-consecutive days when possible, matching public guidance to train major muscle groups at least twice weekly while starting gradually.",
      sessionMinutes: "25–40",
      prescriptions: {
        wallPush: "2×6–10",
        kneePush: "2×5–8",
        squat: "2×8–12",
        gluteBridge: "2×10–12",
        row: "2×8–10",
        plank: "2×15–30s",
        standingBreath: "2–3 min",
        weightShift: "2–3 min each side",
        cloudHands: "3–5 min",
        march: "1–2 min",
        armCircles: "30–45s each way",
        hipOpeners: "1–2 min",
        forwardFold: "45–60s",
        chestOpen: "45–60s",
      },
    },
    intermediate: {
      id: "intermediate",
      title: "Intermediate",
      tagline: "Link strength days with flowing practice.",
      blurb:
        "You can already do solid bodyweight basics. Add controlled volume, unilateral work, and longer tai chi sequences—still leaving recovery between harder strength days.",
      sessionMinutes: "35–50",
      prescriptions: {
        kneePush: "3×8–12",
        pushUp: "3×6–10",
        squat: "3×10–15",
        splitSquat: "3×6–8/leg",
        gluteBridge: "3×12",
        singleBridge: "2×8/leg",
        australian: "3×6–10",
        plank: "3×30–45s",
        sidePlank: "2×20–30s/side",
        hollow: "2×20–30s",
        standingBreath: "2 min",
        weightShift: "3 min",
        cloudHands: "4–6 min",
        brushKnee: "4–6 min",
        pushHandsSolo: "3–5 min",
        formShort: "5–8 min",
        march: "2 min",
        armCircles: "1 min",
        hipOpeners: "2 min",
        forwardFold: "1 min",
        chestOpen: "1 min",
      },
    },
    skilled: {
      id: "skilled",
      title: "Skilled",
      tagline: "Higher skill under control—never at the cost of form.",
      blurb:
        "Advanced leverage and longer forms. Keep at least one lighter tai-chi-focused day in the 5-day plan. Stop sets when technique slips.",
      sessionMinutes: "45–60",
      prescriptions: {
        pushUp: "4×8–12",
        diamondPush: "3×6–10",
        pistolAssist: "3×4–6/leg",
        splitSquat: "3×8/leg",
        singleBridge: "3×8–10/leg",
        pullUpNeg: "4×3–5",
        australian: "3×8–12",
        hollow: "3×20–40s",
        sidePlank: "3×30–40s/side",
        pike: "3×5–8",
        standingBreath: "2 min",
        formShort: "8 min",
        formLong: "10–15 min",
        brushKnee: "5 min",
        pushHandsSolo: "5 min",
        cloudHands: "5 min",
        march: "2 min",
        hipOpeners: "2 min",
        armCircles: "1 min",
        forwardFold: "1–2 min",
        chestOpen: "1–2 min",
      },
    },
  },

  /**
   * Day templates reference exercise keys.
   * 3-day plans emphasize full-body strength + short tai chi, with rest between days.
   * 5-day plans add extra tai chi / mobility days so strength still has recovery space.
   */
  plans: {
    beginner: {
      3: [
        {
          name: "Day 1 — Push + roots",
          focus: "Upper body + standing tai chi",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["wallPush", "kneePush", "squat", "plank"],
            taiChi: ["standingBreath", "weightShift", "cloudHands"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 2 — Legs + flow",
          focus: "Lower body + weight shifting",
          blocks: {
            warmup: ["march", "hipOpeners"],
            strength: ["squat", "gluteBridge", "row", "plank"],
            taiChi: ["standingBreath", "weightShift", "cloudHands"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 3 — Full blend",
          focus: "Full-body strength + short flow",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["wallPush", "squat", "row", "gluteBridge"],
            taiChi: ["standingBreath", "cloudHands"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
      ],
      5: [
        {
          name: "Day 1 — Strength A",
          focus: "Push + squat pattern",
          blocks: {
            warmup: ["march", "armCircles"],
            strength: ["wallPush", "kneePush", "squat", "plank"],
            taiChi: ["standingBreath"],
            cooldown: ["chestOpen"],
          },
        },
        {
          name: "Day 2 — Tai chi focus",
          focus: "Balance and breathing (lighter day)",
          blocks: {
            warmup: ["march", "hipOpeners"],
            strength: ["gluteBridge"],
            taiChi: ["standingBreath", "weightShift", "cloudHands"],
            cooldown: ["forwardFold"],
          },
        },
        {
          name: "Day 3 — Strength B",
          focus: "Pull + hinge pattern",
          blocks: {
            warmup: ["march", "armCircles"],
            strength: ["row", "gluteBridge", "squat", "plank"],
            taiChi: ["weightShift"],
            cooldown: ["chestOpen"],
          },
        },
        {
          name: "Day 4 — Tai chi focus",
          focus: "Soft flow and posture",
          blocks: {
            warmup: ["hipOpeners"],
            strength: [],
            taiChi: ["standingBreath", "cloudHands", "weightShift"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 5 — Full blend",
          focus: "Light full-body + flow",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["wallPush", "squat", "row"],
            taiChi: ["standingBreath", "cloudHands"],
            cooldown: ["forwardFold"],
          },
        },
      ],
    },
    intermediate: {
      3: [
        {
          name: "Day 1 — Push emphasis",
          focus: "Push-ups, split stance, short form",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["pushUp", "splitSquat", "australian", "plank"],
            taiChi: ["standingBreath", "brushKnee", "formShort"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 2 — Pull & unilateral",
          focus: "Rows, bridges, cloud hands",
          blocks: {
            warmup: ["march", "hipOpeners"],
            strength: ["australian", "singleBridge", "squat", "sidePlank"],
            taiChi: ["cloudHands", "pushHandsSolo", "formShort"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 3 — Full power + flow",
          focus: "Mixed strength + longer tai chi",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["pushUp", "splitSquat", "australian", "hollow"],
            taiChi: ["brushKnee", "formShort"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
      ],
      5: [
        {
          name: "Day 1 — Strength A",
          focus: "Horizontal push + legs",
          blocks: {
            warmup: ["march", "armCircles"],
            strength: ["pushUp", "squat", "sidePlank"],
            taiChi: ["standingBreath"],
            cooldown: ["chestOpen"],
          },
        },
        {
          name: "Day 2 — Tai chi skill",
          focus: "Brush knee + short form",
          blocks: {
            warmup: ["hipOpeners"],
            strength: ["gluteBridge"],
            taiChi: ["weightShift", "brushKnee", "formShort"],
            cooldown: ["forwardFold"],
          },
        },
        {
          name: "Day 3 — Strength B",
          focus: "Pull + unilateral",
          blocks: {
            warmup: ["march", "armCircles"],
            strength: ["australian", "splitSquat", "singleBridge", "plank"],
            taiChi: ["cloudHands"],
            cooldown: ["chestOpen"],
          },
        },
        {
          name: "Day 4 — Flow recovery",
          focus: "Longer soft practice",
          blocks: {
            warmup: ["hipOpeners"],
            strength: [],
            taiChi: ["standingBreath", "pushHandsSolo", "formShort"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 5 — Blend",
          focus: "Moderate strength + form",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["kneePush", "squat", "australian"],
            taiChi: ["brushKnee", "formShort"],
            cooldown: ["forwardFold"],
          },
        },
      ],
    },
    skilled: {
      3: [
        {
          name: "Day 1 — Vertical + unilateral",
          focus: "Pike, pistol assist, long form",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["pike", "pistolAssist", "pullUpNeg", "hollow"],
            taiChi: ["standingBreath", "formLong"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 2 — Horizontal power",
          focus: "Push variants + rows",
          blocks: {
            warmup: ["march", "hipOpeners"],
            strength: ["diamondPush", "australian", "splitSquat", "sidePlank"],
            taiChi: ["brushKnee", "pushHandsSolo", "formShort"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 3 — Skill blend",
          focus: "Mixed leverage + form",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["pushUp", "pistolAssist", "pullUpNeg", "hollow"],
            taiChi: ["formLong"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
      ],
      5: [
        {
          name: "Day 1 — Strength A",
          focus: "Push + core",
          blocks: {
            warmup: ["march", "armCircles"],
            strength: ["diamondPush", "pike", "hollow", "sidePlank"],
            taiChi: ["standingBreath"],
            cooldown: ["chestOpen"],
          },
        },
        {
          name: "Day 2 — Form day",
          focus: "Extended tai chi",
          blocks: {
            warmup: ["hipOpeners"],
            strength: [],
            taiChi: ["cloudHands", "brushKnee", "formLong"],
            cooldown: ["forwardFold"],
          },
        },
        {
          name: "Day 3 — Strength B",
          focus: "Pull + single-leg",
          blocks: {
            warmup: ["march", "armCircles"],
            strength: ["pullUpNeg", "pistolAssist", "singleBridge", "australian"],
            taiChi: ["pushHandsSolo"],
            cooldown: ["chestOpen"],
          },
        },
        {
          name: "Day 4 — Soft skill",
          focus: "Precision flow",
          blocks: {
            warmup: ["hipOpeners", "armCircles"],
            strength: ["hollow"],
            taiChi: ["formShort", "formLong"],
            cooldown: ["forwardFold", "chestOpen"],
          },
        },
        {
          name: "Day 5 — Peak blend",
          focus: "Controlled intensity + form",
          blocks: {
            warmup: ["march", "armCircles", "hipOpeners"],
            strength: ["pushUp", "splitSquat", "pullUpNeg"],
            taiChi: ["formShort"],
            cooldown: ["forwardFold"],
          },
        },
      ],
    },
  },
};
