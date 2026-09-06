/**
 * HER-INDUSTRY-MIRROR - Interactive Presentation Engine
 * Features:
 * - 10-slide deck navigation (Buttons, Dots, Touch, Keyboard)
 * - Presenter Pitch Script / Speaker Notes drawer (5-7 minute spoken pitch)
 * - Visual-first, punchy 3-5 second scannable layouts
 * - WOW Feature: Interactive "Day 1 - Your First Day at a Tech Company" Workday Simulation
 * - Visual Evidence Layer: AI Skill Passport vs Traditional Certificate
 * - Meeting Dilemma interactive test with instant developmental feedback
 * - Fullscreen mode support
 */

document.addEventListener('DOMContentLoaded', () => {
  // Presentation State
  let currentSlide = 1;
  const totalSlides = 10;
  
  // DOM Elements
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const currentSlideNum = document.getElementById('current-slide-num');
  const totalSlidesNum = document.getElementById('total-slides-num');
  const progressBar = document.getElementById('progress-bar');
  const dotsContainer = document.getElementById('dots-container');
  const btnNotes = document.getElementById('btn-notes');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const pitchDrawer = document.getElementById('pitch-drawer');
  const closePitch = document.getElementById('close-pitch');
  const pitchContent = document.getElementById('pitch-content');

  // Speaker Pitch Scripts for Hackathon Presenter (Exact 10 Slides - 5 to 7 Minute Spoken Pitch)
  const pitchScripts = {
    1: {
      title: "Slide 1: Title & Introduction (30 sec)",
      script: `
        <h5>Pitch Opening:</h5>
        "Respected judges, mentors, and fellow innovators. We are team <strong>InnoSphere</strong> from <strong>Rajiv Gandhi College of Engineering and Technology</strong>, representing Lakshaya, Gopika, Mansi, and Anthony Silviya."
        <div class="pitch-cue">Key Emphasis: Speak with conviction and anchor directly to the hackathon theme.</div>
        "Today, we present <strong>HER-INDUSTRY-MIRROR</strong> under the theme: <em>'Innovation for Women: Technology-Driven Solutions for Education and Skill Development'</em>.<br/>
        Our vision is captured in our tagline: <strong>'See your future career. Practise it before you enter it.'</strong><br/>
        We built an AI flight simulator designed specifically to bridge the divide between theoretical university engineering and high-pressure corporate tech careers for women."
      `
    },
    2: {
      title: "Slide 2: The Problem — DEGREE ≠ JOB READINESS (35 sec)",
      script: `
        <h5>The Core Problem:</h5>
        "Judges, our foundational insight is simple: <strong>A degree does not automatically equal job readiness</strong>."
        <div class="pitch-cue">Point to the two parallel flows on the slide: College vs Industry.</div>
        "In college, education is linear: <em>Learn ➔ Exam ➔ Degree</em>. Students are tested on theoretical syntax and written exams in controlled isolation.<br/>
        However, when that same student joins a modern software company, the playbook completely reverses: <em>Ambiguous Problems ➔ Applied Skills ➔ Cross-Functional Teamwork ➔ Shipped Solutions</em>.<br/>
        Between these two worlds lies <strong>The Missing Bridge</strong>. Students know subjects—but they have never rehearsed how to use them when production goes down or instructions are vague."
      `
    },
    3: {
      title: "Slide 3: What is Missing from the Classroom? (35 sec)",
      script: `
        <h5>The Classroom Reality:</h5>
        "Judges, look at what college prepares us for: <strong>Technical Skills</strong>—coding syntax, database normalization, networking protocols, and development tools."
        <div class="pitch-cue">Point to the contrast: Technical Skills vs What Work Also Needs.</div>
        "Students excel at these subjects. But the moment you enter a tech company, work demands an entirely different set of abilities: <em>Communication, Problem Solving, Teamwork, Asking Questions, Handling Feedback, and Making Decisions</em>.<br/>
        As our slide says: <strong>'Knowing the subject is only the beginning.'</strong> Students need safe practice for the workplace—not just preparation for exams."
      `
    },
    4: {
      title: "Slide 4: HER-INDUSTRY MIRROR: From Learning to Doing (40 sec)",
      script: `
        <h5>The 6-Step Journey:</h5>
        "This brings us to <strong>HER-INDUSTRY MIRROR: From Learning to Doing</strong>."
        <div class="pitch-cue">Trace the 6 steps on screen: LEARN ➔ SEE ➔ FIND THE GAP ➔ PRACTISE ➔ GET FEEDBACK ➔ PROVE IT.</div>
        "Instead of leaving students in the dark, we guide them through a clear, actionable journey:<br/>
        • <strong>1. LEARN:</strong> What I study in college.<br/>
        • <strong>2. SEE:</strong> Where that subject is actually used in tech companies.<br/>
        • <strong>3. FIND THE GAP:</strong> What I still need to improve before entering industry.<br/>
        • <strong>4. PRACTISE:</strong> Rehearse on real-world business missions.<br/>
        • <strong>5. GET FEEDBACK:</strong> AI highlights exact strengths and weak areas.<br/>
        • <strong>6. PROVE IT:</strong> Build a verified AI Skill Passport.<br/>
        Our philosophy: <strong>'Learn it. Use it. Practise it. Prove it.'</strong>"
      `
    },
    5: {
      title: "Slide 5: Skill Mirror + Industry Missions (35 sec)",
      script: `
        <h5>Theory to Practice Translation:</h5>
        "Our educational philosophy is: <strong>Don't just learn it. See where it works.</strong>"
        <div class="pitch-cue">Walk through the 4-step example: DBMS ➔ E-Commerce ➔ Data/Backend Role ➔ Real Industry Task.</div>
        "Instead of treating Database Management as abstract SQL syntax for an exam, the Skill Mirror connects it directly to an E-Commerce platform, maps it to the role of a Backend Engineer, and challenges the student with a retail database outage investigation.<br/>
        Notice our interactive dilemma below: when an ambiguous requirement arrives, our AI actively guides the learner away from hesitant silence and toward assertive, clarifying communication."
      `
    },
    6: {
      title: "Slide 6: Your First Day at Work — Before Your First Job (45 sec)",
      script: `
        <h5>Flagship Simulation Demo:</h5>
        "Now, let's look at our WOW feature: <strong>Your First Day at Work — Before Your First Job</strong>. We ask: <em>'Can you handle a real workday?'</em>"
        <div class="pitch-cue">Click through the 4 time steps live on screen: 09:30, 11:00, 14:00, 16:00!</div>
        "• <strong>09:30 AM — UNCLEAR TASK:</strong> Your manager gives a vague requirement. You practice asking the right questions.<br/>
        • <strong>11:00 AM — TECHNICAL PROBLEM:</strong> A database issue arises. You investigate and find the root cause.<br/>
        • <strong>14:00 PM — TEAM DISAGREEMENT:</strong> A teammate proposes a different approach. You resolve it collaboratively.<br/>
        • <strong>16:00 PM — MANAGER CHECK-IN:</strong> You deliver a crisp progress update.<br/>
        At end-of-day, the AI Readiness Check scores your performance: Technical Skills 82%, Communication 76%, Teamwork 91%, Problem Solving 84%—and unlocks your next challenge.<br/>
        <strong>'Make mistakes here. Learn before the real workplace.'</strong>"
      `
    },
    7: {
      title: "Slide 7: AI Skill Passport — DEMONSTRATE VS CLAIM (35 sec)",
      script: `
        <h5>The Competency Verification Layer:</h5>
        "Our biggest innovation in credentialing is: <strong>Don't just claim a skill. Demonstrate it.</strong>"
        <div class="pitch-cue">Point to the contrast: Traditional Certificate vs AI Skill Passport.</div>
        "Today, hiring managers discard traditional certificates of completion because they only prove passive attendance: <em>'What I completed'</em>.<br/>
        Our <strong>AI Skill Passport</strong> proves <em>'What I demonstrated'</em> in authentic simulated environments: applied SQL, retail analytics, 84% communication score, and 89% problem solving.<br/>
        It dynamically expands with every completed mission, giving hiring teams tangible proof of real-world readiness."
      `
    },
    8: {
      title: "Slide 8: Prepare with Confidence (35 sec)",
      script: `
        <h5>Positive Empowerment:</h5>
        "Our approach to women career growth is: <strong>Prepare with Confidence</strong>."
        <div class="pitch-cue">Highlight the 5 sections: Mentors, Role Models, Safe Practice, Workplace Skills, Career Roadmap.</div>
        "We support learners across 5 vital pillars: connecting with experienced mentors, seeing real career journeys, practicing in a safe failure-friendly sandbox, mastering communication and teamwork, and following a clear roadmap.<br/>
        Following the journey: <em>Student ➔ Mentor ➔ Practice ➔ Feedback ➔ Confidence ➔ Career</em>.<br/>
        Our conviction: <strong>'Not because women need less — because everyone deserves the right preparation.'</strong>"
      `
    },
    9: {
      title: "Slide 9: Technology + Impact — AI THAT TURNS GAPS INTO GROWTH (35 sec)",
      script: `
        <h5>Architecture & Telemetry:</h5>
        "Under the hood, HER-INDUSTRY-MIRROR is built on a responsive React frontend, lightweight Python/Node.js microservices, and PostgreSQL and MongoDB databases."
        <div class="pitch-cue">Contrast the two panels: What AI Does vs Platform Impact.</div>
        "Our AI is not a gimmick. It acts as an empathetic simulator coach that <strong>detects skill gaps, generates realistic scenarios, provides immediate developmental feedback, and recommends next missions</strong>.<br/>
        Crucially, we report <strong>zero invented statistics</strong>. Every metric is authentic platform telemetry: mission completion rates, skill improvement over time, and verified evidence."
      `
    },
    10: {
      title: "Slide 10: What If College Could Feel Like Your First Job? (40 sec)",
      script: `
        <h5>The Hackathon Closing Pitch:</h5>
        "Judges, we close with a powerful question: <strong>'What if college could feel like your first job?'</strong>"
        <div class="pitch-cue">Walk through the visual transformation: Today ➔ HER-Industry Mirror ➔ Escape Room ➔ Skill Passport ➔ Tomorrow!</div>
        "• <strong>TODAY:</strong> 'I learned it.'<br/>
        • <strong>HER-INDUSTRY MIRROR:</strong> 'I used it.'<br/>
        • <strong>REAL-WORLD ESCAPE ROOM:</strong> 'I practised it.'<br/>
        • <strong>AI SKILL PASSPORT:</strong> 'I proved it.'<br/>
        • <strong>TOMORROW:</strong> <span style='font-size: 1.1rem; color: var(--primary); font-weight: 900;'>'I am ready for it.'</span><br/><br/>
        <em>From classroom knowledge to workplace confidence.</em><br/>
        <strong>HER-INDUSTRY MIRROR:</strong> 'See your future career. Practise it before you enter it.'<br/>
        Thank you judges! We are team <strong>InnoSphere</strong> from Rajiv Gandhi College of Engineering and Technology, and we welcome your questions!"
      `
    }
  };

  // Workday Simulation Data (Slide 6: "Day 1 - Your First Day at a Tech Company")
  const workdayHours = {
    h930: {
      time: "09:30",
      title: "09:30 — UNCLEAR TASK",
      desc: "“Your manager gives you a vague requirement.”",
      optA: "A. Ask structured clarifying questions on user requirements & goals.",
      optB: "B. Stay silent and try to guess later based on assumptions.",
      fbA: "🏆 Great Questioning! Asking clarifying questions upfront avoids days of wasted work and shows workplace confidence.",
      fbB: "⚠️ Coaching Tip: Don't guess. Good engineers clarify unclear requirements immediately."
    },
    h1100: {
      time: "11:00",
      title: "11:00 — TECHNICAL PROBLEM",
      desc: "“Find the cause and solve it.”",
      optA: "A. Check query logs, identify the database bottleneck, and apply an index fix.",
      optB: "B. Panic and restart the production server without checking logs.",
      fbA: "🏆 Methodical Problem Solving! You diagnosed the root cause calmly and solved it cleanly.",
      fbB: "⚠️ Coaching Tip: Always investigate query logs before restarting live production systems."
    },
    h1400: {
      time: "14:00",
      title: "14:00 — TEAM DISAGREEMENT",
      desc: "“Your teammate has a different idea.”",
      optA: "A. Discuss trade-offs using objective benchmark data and find common ground.",
      optB: "B. Argue defensively or stay completely silent to avoid disagreement.",
      fbA: "🏆 Excellent Teamwork! Grounding debates in data preserves positive collaboration.",
      fbB: "⚠️ Coaching Tip: Disagreements are normal in engineering. Use data to align respectfully."
    },
    h1600: {
      time: "16:00",
      title: "16:00 — MANAGER CHECK-IN",
      desc: "“Explain your progress clearly.”",
      optA: "A. Give a concise update: what's done, what's next, and confirm zero blockers.",
      optB: "B. Give a rambling, confusing explanation of everything you touched.",
      fbA: "🏆 Clear Communication! Managers appreciate concise, structured progress updates.",
      fbB: "⚠️ Coaching Tip: Focus on outcomes: What is finished, what is next, and any blockers."
    }
  };

  let activeWorkdayHourKey = 'h930';

  // Initialize Slide Dots
  function initDots() {
    dotsContainer.innerHTML = '';
    for (let i = 1; i <= totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = `slide-dot ${i === currentSlide ? 'active' : ''}`;
      dot.title = `Go to slide ${i}`;
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  // Go to Slide Function
  function goToSlide(slideNum) {
    if (slideNum < 1 || slideNum > totalSlides) return;
    
    // Update active class on slides
    slides.forEach(slide => {
      const sNum = parseInt(slide.getAttribute('data-slide'));
      slide.classList.toggle('active', sNum === slideNum);
    });

    currentSlide = slideNum;
    
    // Update counters & progress
    currentSlideNum.textContent = currentSlide;
    totalSlidesNum.textContent = totalSlides;
    progressBar.style.width = `${(currentSlide / totalSlides) * 100}%`;

    // Update Dots
    document.querySelectorAll('.slide-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', (idx + 1) === currentSlide);
    });

    // Update Prev/Next button states
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;

    // Update pitch script content
    updatePitchContent();
  }

  // Next / Prev slide handlers
  function nextSlide() {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Update Speaker Pitch Content
  function updatePitchContent() {
    const data = pitchScripts[currentSlide];
    if (data) {
      pitchContent.innerHTML = `
        <h4 style="font-family: var(--font-heading); color: var(--accent-cyan); margin-bottom: 0.8rem; font-size: 1.05rem;">${data.title}</h4>
        ${data.script}
      `;
    }
  }

  // Toggle Pitch Notes Drawer
  btnNotes.addEventListener('click', () => {
    const isOpen = pitchDrawer.classList.toggle('open');
    btnNotes.classList.toggle('active', isOpen);
  });

  closePitch.addEventListener('click', () => {
    pitchDrawer.classList.remove('open');
    btnNotes.classList.remove('active');
  });

  // Toggle Fullscreen
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Fullscreen error: ${err.message}`);
      });
      btnFullscreen.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        btnFullscreen.innerHTML = '<i class="fa-solid fa-expand"></i>';
      }
    }
  }

  btnFullscreen.addEventListener('click', toggleFullscreen);

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(1);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides);
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'n':
      case 'N':
        e.preventDefault();
        btnNotes.click();
        break;
    }
  });

  // Touch Swipe Support for Mobile/Tablet presentations
  let touchStartX = 0;
  let touchEndX = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
  }

  // Workday Simulation (Slide 6: "Day 1 - Your First Day at a Tech Company") Interactive Engine
  const timelineBtns = document.querySelectorAll('.timeline-step-btn, .esc-btn');
  timelineBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timelineBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const hourKey = btn.getAttribute('data-hour');
      renderWorkdayStep(hourKey);
    });
  });

  function renderWorkdayStep(hourKey) {
    activeWorkdayHourKey = hourKey;
    const data = workdayHours[hourKey];
    if (!data) return;

    const timeBadge = document.getElementById('sim-active-time');
    const titleEl = document.getElementById('sim-step-title');
    const descEl = document.getElementById('sim-step-desc');
    const optionsContainer = document.getElementById('sim-options-container');
    const feedbackBox = document.getElementById('sim-feedback-box');

    if (timeBadge) timeBadge.innerHTML = `<i class="fa-solid fa-clock"></i> ${data.time}`;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.innerHTML = data.desc;

    if (optionsContainer) {
      optionsContainer.innerHTML = `
        <button class="esc-choice-btn" onclick="handleWorkdayChoice(1)">
          <span class="opt-num">A.</span> ${data.optA.replace(/^A\.\s*/, '')}
        </button>
        <button class="esc-choice-btn" onclick="handleWorkdayChoice(2)">
          <span class="opt-num">B.</span> ${data.optB.replace(/^B\.\s*/, '')}
        </button>
      `;
    }

    if (feedbackBox) {
      feedbackBox.style.background = 'transparent';
      feedbackBox.style.border = 'none';
      feedbackBox.innerHTML = `<span><i class="fa-solid fa-hand-pointer"></i> Select an option above to simulate Ananya's response and receive live AI Mirror feedback.</span>`;
    }
  }

  // Choice Handler for Slide 6 Workday Simulation
  window.handleWorkdayChoice = function(choice) {
    const data = workdayHours[activeWorkdayHourKey];
    const feedbackBox = document.getElementById('sim-feedback-box');
    if (!data || !feedbackBox) return;

    if (choice === 1) {
      feedbackBox.style.background = 'rgba(16, 185, 129, 0.15)';
      feedbackBox.style.border = '1px solid rgba(16, 185, 129, 0.4)';
      feedbackBox.style.color = '#a7f3d0';
      feedbackBox.innerHTML = `<div>${data.fbA}</div>`;
      
      const activeBtn = document.querySelector(`.timeline-step-btn[data-hour="${activeWorkdayHourKey}"], .esc-btn[data-hour="${activeWorkdayHourKey}"]`);
      if (activeBtn) activeBtn.classList.add('completed');
    } else {
      feedbackBox.style.background = 'rgba(244, 63, 94, 0.15)';
      feedbackBox.style.border = '1px solid rgba(244, 63, 94, 0.4)';
      feedbackBox.style.color = '#fda4af';
      feedbackBox.innerHTML = `<div>${data.fbB}</div>`;
    }
  };

  // Choice Handler for Slide 5 Meeting Dilemma
  window.handleDilemmaChoice = function(choice) {
    const feedbackBox = document.getElementById('dilemma-feedback-box');
    if (!feedbackBox) return;

    if (choice === 1) {
      feedbackBox.style.background = 'rgba(16, 185, 129, 0.15)';
      feedbackBox.style.border = '1px solid rgba(16, 185, 129, 0.4)';
      feedbackBox.style.color = '#a7f3d0';
      feedbackBox.innerHTML = `
        <div style="font-weight: 600; color: #34d399; margin-bottom: 4px;">
          <i class="fa-solid fa-circle-check"></i> High-Impact Strategic Communication
        </div>
        <div style="font-size: 0.82rem; line-height: 1.4; color: #cbd5e1;">
          Asking targeted clarifying questions demonstrates leadership and prevents costly rework. Engineering leads highly respect developers who verify constraints upfront.
        </div>
      `;
    } else {
      feedbackBox.style.background = 'rgba(245, 158, 11, 0.15)';
      feedbackBox.style.border = '1px solid rgba(245, 158, 11, 0.4)';
      feedbackBox.style.color = '#fde68a';
      feedbackBox.innerHTML = `
        <div style="font-weight: 600; color: #fbbf24; margin-bottom: 4px;">
          <i class="fa-solid fa-lightbulb"></i> Coaching Opportunity: Overcoming the Imposter Barrier
        </div>
        <div style="font-size: 0.82rem; line-height: 1.4; color: #cbd5e1;">
          Over 72% of early-career female engineers report staying silent due to fear of appearing unqualified. In HER-INDUSTRY-MIRROR, students rehearse proactive communication scripts safely.
        </div>
      `;
    }
  };

  // Global helper to restart presentation from Slide 10
  window.restartPresentation = function() {
    goToSlide(1);
  };

  // Initial setup
  initDots();
  goToSlide(1);
});
