/**
 * Core Application Engine & Certificate Renderer for ThreshingQuiz.com
 */

// State variables
let currentQuizType = 'dragon';
let currentQuestionIndex = 0;
let userAnswers = [];
let currentResultData = null;
let customCadetName = "First Year Cadet";

// DOM Elements
const heroSection = document.getElementById('heroSection');
const quizPlaySection = document.getElementById('quizPlaySection');
const calculatingSection = document.getElementById('calculatingSection');
const resultSection = document.getElementById('resultSection');

const currentQuizLabel = document.getElementById('currentQuizLabel');
const currentStepNum = document.getElementById('currentStepNum');
const totalStepNum = document.getElementById('totalStepNum');
const progressBar = document.getElementById('progressBar');
const questionTitle = document.getElementById('questionTitle');
const answersGrid = document.getElementById('answersGrid');

const resultTitle = document.getElementById('resultTitle');
const resultSubtitle = document.getElementById('resultSubtitle');
const resultQuote = document.getElementById('resultQuote');
const resultDesc = document.getElementById('resultDesc');
const resultStatsGrid = document.getElementById('resultStatsGrid');
const downloadCertBtn = document.getElementById('downloadCertBtn');
const copyShareBtn = document.getElementById('copyShareBtn');
const copySuccessMsg = document.getElementById('copySuccessMsg');

const cadetNameInput = document.getElementById('cadetNameInput');
const updateCertNameBtn = document.getElementById('updateCertNameBtn');
const tickerBroadcastText = document.getElementById('tickerBroadcastText');

// Ambient Background Canvas - Floating Embers
const canvas = document.getElementById('ambientCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class EmberParticle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 50;
    this.size = Math.random() * 2.5 + 0.8;
    this.speedY = Math.random() * 1.2 + 0.4;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.opacity = Math.random() * 0.7 + 0.3;
    this.color = Math.random() > 0.4 ? '201, 167, 88' : '255, 107, 53';
  }
  update() {
    this.y -= this.speedY;
    this.x += this.speedX;
    this.opacity -= 0.002;
    if (this.y < -10 || this.opacity <= 0) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.shadowBlur = 6;
    ctx.shadowColor = `rgba(${this.color}, 0.8)`;
    ctx.fill();
  }
}

for (let i = 0; i < 45; i++) {
  particles.push(new EmberParticle());
}

function animateAmbient() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateAmbient);
}
animateAmbient();

// Dynamic Live Broadcast Ticker
const liveBroadcastPool = [
  "Cadet Maeve has bonded with a Blue Daggertail on the coastal cliff!",
  "A Black Daggertail was sighted descending toward the high peak!",
  "Cadet Liam survived the Gauntlet with record precision!",
  "A Green Scorpiontail has chosen an elite strategist cadet!",
  "Warning from Navarre: Unregistered Inntinnsics are subject to execution.",
  "Cadet Rhiannon has manifested an awakened summoning signet!",
  "A Golden Feathertail was glimpsed sleeping near the sunlit meadow!"
];
let tickerIndex = 0;
setInterval(() => {
  tickerIndex = (tickerIndex + 1) % liveBroadcastPool.length;
  if (tickerBroadcastText) {
    tickerBroadcastText.style.opacity = '0';
    setTimeout(() => {
      tickerBroadcastText.textContent = liveBroadcastPool[tickerIndex];
      tickerBroadcastText.style.opacity = '1';
    }, 400);
  }
}, 5500);

// Navigation & Tab Switching
document.querySelectorAll('.quiz-nav button.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.quiz-nav button.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const quizKey = btn.dataset.quiz;
    startSelectedQuiz(quizKey);
  });
});

function resetToHome() {
  heroSection.classList.add('active');
  quizPlaySection.classList.remove('active');
  calculatingSection.classList.remove('active');
  resultSection.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startSelectedQuiz(quizKey) {
  currentQuizType = quizKey;
  currentQuestionIndex = 0;
  userAnswers = [];
  
  document.querySelectorAll('.quiz-nav button.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.quiz === quizKey);
  });

  heroSection.classList.remove('active');
  calculatingSection.classList.remove('active');
  resultSection.classList.remove('active');
  quizPlaySection.classList.add('active');

  const quiz = QUIZZES_DATA[quizKey];
  currentQuizLabel.textContent = quiz.title;
  totalStepNum.textContent = quiz.questions.length;

  renderCurrentQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCurrentQuestion() {
  const quiz = QUIZZES_DATA[currentQuizType];
  const qData = quiz.questions[currentQuestionIndex];

  currentStepNum.textContent = currentQuestionIndex + 1;
  const progressPercent = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  questionTitle.textContent = qData.question;
  answersGrid.innerHTML = '';

  const optionLetters = ['A', 'B', 'C', 'D'];
  qData.answers.forEach((ans, idx) => {
    const btn = document.createElement('button');
    btn.className = 'answer-option-btn';
    btn.innerHTML = `
      <span class="option-letter">${optionLetters[idx]}</span>
      <span class="option-text">${ans.text}</span>
    `;
    btn.addEventListener('click', () => handleAnswerSelect(ans.value, btn));
    answersGrid.appendChild(btn);
  });
}

function handleAnswerSelect(val, clickedBtn) {
  const allBtns = answersGrid.querySelectorAll('.answer-option-btn');
  allBtns.forEach(b => b.style.pointerEvents = 'none');
  clickedBtn.classList.add('selected');

  userAnswers.push(val);

  setTimeout(() => {
    currentQuestionIndex++;
    const quiz = QUIZZES_DATA[currentQuizType];
    if (currentQuestionIndex < quiz.questions.length) {
      renderCurrentQuestion();
    } else {
      showCalculatingRitual();
    }
  }, 450);
}

function showCalculatingRitual() {
  quizPlaySection.classList.remove('active');
  calculatingSection.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 1.5 seconds suspense animation
  setTimeout(() => {
    calculatingSection.classList.remove('active');
    revealResults();
  }, 1600);
}

function calculateWinningKey() {
  const counts = {};
  userAnswers.forEach(ans => {
    counts[ans] = (counts[ans] || 0) + 1;
  });

  let highestKey = null;
  let maxCount = -1;
  for (const [key, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      highestKey = key;
    }
  }
  return highestKey || Object.keys(QUIZZES_DATA[currentQuizType].results)[0];
}

function revealResults() {
  const winningKey = calculateWinningKey();
  const quiz = QUIZZES_DATA[currentQuizType];
  const result = quiz.results[winningKey];
  currentResultData = result;

  resultTitle.textContent = result.title;
  resultSubtitle.textContent = result.subtitle;
  resultQuote.textContent = result.quote;
  resultDesc.textContent = result.description;

  // Stats grid
  resultStatsGrid.innerHTML = '';
  result.stats.forEach(st => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
      <div class="stat-label">${st.label}</div>
      <div class="stat-value">${st.value}</div>
    `;
    resultStatsGrid.appendChild(card);
  });

  resultSection.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render certificate with cadet name
  drawCertificateCanvas(result, customCadetName);
}

// Name Customizer Handlers
if (updateCertNameBtn && cadetNameInput) {
  updateCertNameBtn.addEventListener('click', () => {
    const entered = cadetNameInput.value.trim();
    customCadetName = entered || "First Year Cadet";
    if (currentResultData) {
      drawCertificateCanvas(currentResultData, customCadetName);
    }
  });

  cadetNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateCertNameBtn.click();
    }
  });
}

/**
 * High-Resolution HTML5 Canvas Certificate Generator
 */
function drawCertificateCanvas(result, riderName = "First Year Cadet") {
  const certCanvas = document.getElementById('certificateCanvas');
  const c = certCanvas.getContext('2d');
  const w = certCanvas.width;
  const h = certCanvas.height;

  // Background Parchment & Slate
  const bgGrad = c.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, '#10141d');
  bgGrad.addColorStop(0.5, '#171e2c');
  bgGrad.addColorStop(1, '#0b0e14');
  c.fillStyle = bgGrad;
  c.fillRect(0, 0, w, h);

  // Outer Golden Double Border
  c.lineWidth = 2;
  c.strokeStyle = '#c9a758';
  c.strokeRect(20, 20, w - 40, h - 40);

  c.lineWidth = 1;
  c.strokeStyle = 'rgba(201, 167, 88, 0.4)';
  c.strokeRect(28, 28, w - 56, h - 56);

  // Corner Gold Accents
  const corners = [
    [20, 20], [w - 20, 20], [20, h - 20], [w - 20, h - 20]
  ];
  c.fillStyle = '#c9a758';
  corners.forEach(([cx, cy]) => {
    c.fillRect(cx - 3, cy - 3, 6, 6);
  });

  // Top Title Seal
  c.textAlign = 'center';
  c.fillStyle = '#c9a758';
  c.font = 'bold 14px "Cinzel", Georgia, serif';
  c.letterSpacing = '4px';
  c.fillText('BASGIATH WAR COLLEGE • RECORD OF BOND', w / 2, 65);

  // Gold Divider Line
  c.strokeStyle = 'rgba(201, 167, 88, 0.5)';
  c.beginPath();
  c.moveTo(w / 2 - 200, 80);
  c.lineTo(w / 2 + 200, 80);
  c.stroke();

  // Cadet Declaration with Custom Name
  c.fillStyle = '#a6b0c2';
  c.font = 'italic 15px Georgia, serif';
  c.fillText(`Be it decreed by the Empyrean that Cadet`, w / 2, 115);

  c.fillStyle = '#ffd700';
  c.font = 'bold 20px "Cinzel", Georgia, serif';
  c.fillText(riderName.toUpperCase(), w / 2, 142);

  c.fillStyle = '#a6b0c2';
  c.font = 'italic 14px Georgia, serif';
  c.fillText('has proven their soul on Threshing Day and forged an eternal bond with:', w / 2, 168);

  // Big Hero Dragon / Signet Title
  c.fillStyle = '#ffffff';
  c.font = 'bold 28px "Cinzel", Georgia, serif';
  c.shadowColor = 'rgba(201, 167, 88, 0.6)';
  c.shadowBlur = 15;
  c.fillText(result.title, w / 2, 215);
  c.shadowBlur = 0;

  // Subtitle
  c.fillStyle = '#c9a758';
  c.font = 'italic 15px "Cinzel", Georgia, serif';
  c.fillText(result.subtitle, w / 2, 245);

  // Stats Box in Certificate
  c.fillStyle = 'rgba(25, 32, 46, 0.85)';
  c.strokeStyle = 'rgba(201, 167, 88, 0.3)';
  c.lineWidth = 1;
  const boxX = 60, boxY = 270, boxW = w - 120, boxH = 110;
  c.fillRect(boxX, boxY, boxW, boxH);
  c.strokeRect(boxX, boxY, boxW, boxH);

  const col1X = boxX + boxW * 0.25;
  const col2X = boxX + boxW * 0.75;
  
  if (result.stats && result.stats.length >= 4) {
    // Row 1
    c.fillStyle = '#8e9aa8';
    c.font = '11px "Cinzel", Georgia, serif';
    c.fillText(result.stats[0].label, col1X, boxY + 30);
    c.fillStyle = '#ffffff';
    c.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    c.fillText(result.stats[0].value, col1X, boxY + 50);

    c.fillStyle = '#8e9aa8';
    c.font = '11px "Cinzel", Georgia, serif';
    c.fillText(result.stats[1].label, col2X, boxY + 30);
    c.fillStyle = '#ffffff';
    c.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    c.fillText(result.stats[1].value, col2X, boxY + 50);

    // Row 2
    c.fillStyle = '#8e9aa8';
    c.font = '11px "Cinzel", Georgia, serif';
    c.fillText(result.stats[2].label, col1X, boxY + 78);
    c.fillStyle = '#ffffff';
    c.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    c.fillText(result.stats[2].value, col1X, boxY + 96);

    c.fillStyle = '#8e9aa8';
    c.font = '11px "Cinzel", Georgia, serif';
    c.fillText(result.stats[3].label, col2X, boxY + 78);
    c.fillStyle = '#ffffff';
    c.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    c.fillText(result.stats[3].value, col2X, boxY + 96);
  }

  // Quote
  c.fillStyle = '#f4e3c2';
  c.font = 'italic 13px Georgia, serif';
  c.fillText(result.quote, w / 2, 420);

  // Footer Watermark
  c.fillStyle = 'rgba(201, 167, 88, 0.75)';
  c.font = 'bold 11px "Cinzel", Georgia, serif';
  c.fillText('SEALED AT THE VALE • THRESHINGQUIZ.COM', w / 2, 470);
}

// Download Certificate
downloadCertBtn.addEventListener('click', () => {
  const certCanvas = document.getElementById('certificateCanvas');
  const link = document.createElement('a');
  const sanitizedName = customCadetName.replace(/[^a-zA-Z0-9]/g, '_');
  link.download = `Basgiath_Certificate_${sanitizedName}_${currentResultData ? currentResultData.title.replace(/[^a-zA-Z0-9]/g, '_') : 'Bond'}.png`;
  link.href = certCanvas.toDataURL('image/png');
  link.click();
});

// Copy Share Handler
copyShareBtn.addEventListener('click', () => {
  const shareText = `⚔️ Cadet ${customCadetName} has officially bonded with ${currentResultData ? currentResultData.title : 'their dragon'} on Threshing Day! Discover your bonded dragon and signet at https://threshingquiz.com`;
  navigator.clipboard.writeText(shareText).then(() => {
    copySuccessMsg.style.display = 'block';
    setTimeout(() => {
      copySuccessMsg.style.display = 'none';
    }, 4000);
  }).catch(() => {
    prompt('Copy your result:', shareText);
  });
});

function retakeCurrentQuiz() {
  startSelectedQuiz(currentQuizType);
}

function switchQuizFromResults() {
  const keys = ['dragon', 'signet', 'quadrant'];
  const nextIdx = (keys.indexOf(currentQuizType) + 1) % keys.length;
  startSelectedQuiz(keys[nextIdx]);
}
