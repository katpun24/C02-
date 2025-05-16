// popup.js - C02🌿 Chrome Extension
// Main logic for estimating and displaying real-time carbon emissions

// --- CONFIGURABLE CONSTANTS ---
// Estimated average power usage for a laptop while browsing (in watts)
const AVERAGE_POWER_WATTS = 20; // Typical laptop browsing power
// Carbon intensity of electricity (grams CO2 per kWh, global average)
const CARBON_INTENSITY = 475; // gCO2/kWh
// Calculate grams CO2 per second
const CO2_PER_SECOND = (AVERAGE_POWER_WATTS / 1000) * CARBON_INTENSITY / 3600;

// --- STORAGE KEYS ---
const STORAGE_KEY = 'co2_total_grams';
const TIME_KEY = 'co2_last_timestamp';

// --- DOM ELEMENTS ---
const co2ValueEl = document.getElementById('co2-value');
const resetBtn = document.getElementById('reset-btn');

// --- STATE ---
let co2Total = 0;
let lastTimestamp = Date.now();
let timer = null;

// --- STORAGE HELPERS ---
function saveState() {
  localStorage.setItem(STORAGE_KEY, co2Total.toString());
  localStorage.setItem(TIME_KEY, lastTimestamp.toString());
}

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const storedTime = localStorage.getItem(TIME_KEY);
  co2Total = stored ? parseFloat(stored) : 0;
  lastTimestamp = storedTime ? parseInt(storedTime) : Date.now();
}

// --- UI UPDATE ---
function updateDisplay() {
  co2ValueEl.textContent = co2Total.toFixed(2);
}

// --- MAIN TIMER LOGIC ---
function startTimer() {
  timer = setInterval(() => {
    // Calculate elapsed time since last update (in seconds)
    const now = Date.now();
    const elapsed = (now - lastTimestamp) / 1000;
    lastTimestamp = now;
    // Increment CO2 total
    co2Total += CO2_PER_SECOND * elapsed;
    updateDisplay();
    saveState();
  }, 1000);
}

function stopTimer() {
  if (timer) clearInterval(timer);
}

// --- RESET HANDLER ---
resetBtn.addEventListener('click', () => {
  stopTimer();
  co2Total = 0;
  lastTimestamp = Date.now();
  updateDisplay();
  saveState();
  startTimer();
});

// --- INIT ---
function init() {
  loadState();
  updateDisplay();
  stopTimer();
  lastTimestamp = Date.now(); // Reset timer to now for accuracy
  startTimer();
}

document.addEventListener('DOMContentLoaded', init);

// --- ARCHITECTURE NOTE ---
// All logic is modular and can be expanded (e.g., to use real power data, sync with background, or add charts) 