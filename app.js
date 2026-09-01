// ------------------------------------------------------------------
// Shared configuration
// The URL and "anon" key below are safe to be public: they only ever
// let a visitor READ data. All write access is enforced by database
// rules (row-level security), not by anything in this file.
// ------------------------------------------------------------------
const SUPABASE_URL = "https://kvdsmrlzsjzovbegdalq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZHNtcmx6c2p6b3ZiZWdkYWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxOTQ4MzAsImV4cCI6MjEwMzc3MDgzMH0.gGIFNPXR7b4Iq_eRiFIEr4-TF6UE53HKvwXnKX8caxM";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ------------------------------------------------------------------
// Elements
// ------------------------------------------------------------------
const adminToggle = document.getElementById("admin-toggle");
const publicView = document.getElementById("public-view");
const adminView = document.getElementById("admin-view");
const adminLogin = document.getElementById("admin-login");
const adminDashboard = document.getElementById("admin-dashboard");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const adminEmailEl = document.getElementById("admin-email");
const logoutBtn = document.getElementById("logout-btn");

const addPlayerForm = document.getElementById("add-player-form");
const playerError = document.getElementById("player-error");
const playerList = document.getElementById("player-list");

const addSeasonForm = document.getElementById("add-season-form");
const seasonError = document.getElementById("season-error");
const seasonList = document.getElementById("season-list");

const resultsNoSeason = document.getElementById("results-no-season");
const resultsEditor = document.getElementById("results-editor");
const fridayDateInput = document.getElementById("friday-date-input");
const fridayStatusLine = document.getElementById("friday-status-line");
const resultsPlayerRows = document.getElementById("results-player-rows");
const resultsError = document.getElementById("results-error");
const saveResultsBtn = document.getElementById("save-results-btn");
const cancelFridayBtn = document.getElementById("cancel-friday-btn");
const fridayList = document.getElementById("friday-list");

const PLACEMENT_POINTS = { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 };

let adminViewOpen = false;
let activeSeason = null;
let currentFridayId = null;

// ------------------------------------------------------------------
// Navigation: toggle between the public view and the admin panel
// ------------------------------------------------------------------
adminToggle.addEventListener("click", () => {
  adminViewOpen = !adminViewOpen;
  publicView.hidden = adminViewOpen;
  adminView.hidden = !adminViewOpen;
  adminToggle.textContent = adminViewOpen ? "Close" : "Admin";
});

// ------------------------------------------------------------------
// Auth
// ------------------------------------------------------------------
async function showLoggedIn(session) {
  adminLogin.hidden = true;
  adminDashboard.hidden = false;
  adminEmailEl.textContent = session.user.email;
  await Promise.all([loadPlayers(), loadSeasons()]);
}

function showLoggedOut() {
  adminLogin.hidden = false;
  adminDashboard.hidden = true;
  loginForm.reset();
}

supabaseClient.auth.onAuthStateChange((_event, session) => {
  if (session) showLoggedIn(session);
  else showLoggedOut();
});

// Check for an already-active session on page load
supabaseClient.auth.getSession().then(({ data }) => {
  if (data.session) showLoggedIn(data.session);
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginError.textContent = "";
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    loginError.textContent = error.message;
    return;
  }
  await showLoggedIn(data.session);
});

logoutBtn.addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  showLoggedOut();
});

// ------------------------------------------------------------------
// Players
// ------------------------------------------------------------------
async function loadPlayers() {
  playerError.textContent = "";
  const { data, error } = await supabaseClient
    .from("players")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    playerError.textContent = "Could not load players: " + error.message;
    return;
  }
  renderPlayers(data);
}

function renderPlayers(players) {
  playerList.innerHTML = "";
  if (!players.length) {
    playerList.innerHTML = '<li class="muted">No players yet. Add your first player above.</li>';
    return;
  }
  for (const p of players) {
    const li = document.createElement("li");
    li.className = "player-row";
    li.innerHTML = `
      <div class="player-info ${p.is_active ? "" : "inactive"}">
        <span class="name">${escapeHtml(p.name)}</span>
        ${p.nickname ? `<span class="nickname">"${escapeHtml(p.nickname)}"</span>` : ""}
      </div>
      <div class="row-actions">
        <button class="btn btn-small btn-secondary" data-action="rename">Rename</button>
        <button class="btn btn-small ${p.is_active ? "btn-danger" : ""}" data-action="toggle">
          ${p.is_active ? "Deactivate" : "Reactivate"}
        </button>
      </div>
    `;
    li.querySelector('[data-action="rename"]').addEventListener("click", () => renamePlayer(p));
    li.querySelector('[data-action="toggle"]').addEventListener("click", () => togglePlayerActive(p));
    playerList.appendChild(li);
  }
}

addPlayerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  playerError.textContent = "";
  const name = document.getElementById("new-player-name").value.trim();
  const nickname = document.getElementById("new-player-nickname").value.trim();

  if (!name) return;

  const { error } = await supabaseClient
    .from("players")
    .insert({ name, nickname: nickname || null });

  if (error) {
    playerError.textContent = "Could not add player: " + error.message;
    return;
  }
  addPlayerForm.reset();
  loadPlayers();
  if (activeSeason) loadActivePlayersForResults().then(loadResultsForSelectedDate);
});

async function renamePlayer(player) {
  const newName = window.prompt("Player name:", player.name);
  if (newName === null) return;
  const newNickname = window.prompt("Nickname (leave blank for none):", player.nickname || "");
  if (newNickname === null) return;

  const { error } = await supabaseClient
    .from("players")
    .update({ name: newName.trim(), nickname: newNickname.trim() || null })
    .eq("id", player.id);

  if (error) {
    playerError.textContent = "Could not update player: " + error.message;
    return;
  }
  loadPlayers();
  if (activeSeason) loadActivePlayersForResults().then(loadResultsForSelectedDate);
}

async function togglePlayerActive(player) {
  const verb = player.is_active ? "deactivate" : "reactivate";
  if (!window.confirm(`Are you sure you want to ${verb} ${player.name}?`)) return;

  const { error } = await supabaseClient
    .from("players")
    .update({ is_active: !player.is_active })
    .eq("id", player.id);

  if (error) {
    playerError.textContent = "Could not update player: " + error.message;
    return;
  }
  loadPlayers();
  if (activeSeason) loadActivePlayersForResults().then(loadResultsForSelectedDate);
}

// ------------------------------------------------------------------
// Seasons
// ------------------------------------------------------------------
async function loadSeasons() {
  seasonError.textContent = "";
  const { data, error } = await supabaseClient
    .from("seasons")
    .select("*")
    .order("start_date", { ascending: false });

  if (error) {
    seasonError.textContent = "Could not load seasons: " + error.message;
    return;
  }
  renderSeasons(data);
  activeSeason = data.find((s) => s.is_active) || null;
  refreshResultsAvailability();
}

function renderSeasons(seasons) {
  seasonList.innerHTML = "";
  if (!seasons.length) {
    seasonList.innerHTML = '<li class="muted">No seasons yet. Create your first season above.</li>';
    return;
  }
  for (const s of seasons) {
    const li = document.createElement("li");
    li.className = "season-row";
    li.innerHTML = `
      <div class="season-info">
        <span class="name">${escapeHtml(s.name)} ${s.is_active ? '<span class="badge">ACTIVE</span>' : ""}</span>
        <span class="dates">${s.start_date}${s.end_date ? " – " + s.end_date : ""}</span>
      </div>
      <div class="row-actions">
        ${s.is_active ? "" : '<button class="btn btn-small btn-secondary" data-action="activate">Make Active</button>'}
      </div>
    `;
    const activateBtn = li.querySelector('[data-action="activate"]');
    if (activateBtn) activateBtn.addEventListener("click", () => makeSeasonActive(s));
    seasonList.appendChild(li);
  }
}

addSeasonForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  seasonError.textContent = "";
  const name = document.getElementById("new-season-name").value.trim();
  const start_date = document.getElementById("new-season-start").value;
  if (!name || !start_date) return;

  const { error } = await supabaseClient
    .from("seasons")
    .insert({ name, start_date });

  if (error) {
    seasonError.textContent = "Could not create season: " + error.message;
    return;
  }
  addSeasonForm.reset();
  loadSeasons();
});

async function makeSeasonActive(season) {
  if (!window.confirm(`Make "${season.name}" the active season? Any currently active season will be closed.`)) return;

  // Step 1: deactivate whichever season is currently active
  const { error: clearError } = await supabaseClient
    .from("seasons")
    .update({ is_active: false })
    .eq("is_active", true);

  if (clearError) {
    seasonError.textContent = "Could not update seasons: " + clearError.message;
    return;
  }

  // Step 2: activate the chosen season
  const { error: setError } = await supabaseClient
    .from("seasons")
    .update({ is_active: true })
    .eq("id", season.id);

  if (setError) {
    seasonError.textContent = "Could not activate season: " + setError.message;
    return;
  }
  loadSeasons();
}

// ------------------------------------------------------------------
// Friday Results
// ------------------------------------------------------------------

function todayIso() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

async function refreshResultsAvailability() {
  if (!activeSeason) {
    resultsNoSeason.hidden = false;
    resultsEditor.hidden = true;
    return;
  }
  resultsNoSeason.hidden = true;
  resultsEditor.hidden = false;

  if (!fridayDateInput.value) fridayDateInput.value = todayIso();

  await loadActivePlayersForResults();
  await loadResultsForSelectedDate();
  await loadFridayList();
}

async function loadActivePlayersForResults() {
  const { data, error } = await supabaseClient
    .from("players")
    .select("*")
    .eq("is_active", true)
    .order("name", { ascending: true });

  if (error) {
    resultsError.textContent = "Could not load players: " + error.message;
    return;
  }
  renderResultPlayerRows(data);
}

function renderResultPlayerRows(players) {
  resultsPlayerRows.innerHTML = "";
  if (!players.length) {
    resultsPlayerRows.innerHTML = '<p class="muted">No active players yet — add players below first.</p>';
    return;
  }
  for (const p of players) {
    const row = document.createElement("div");
    row.className = "result-row";
    row.dataset.playerId = p.id;
    row.innerHTML = `
      <label class="played-label">
        <input type="checkbox" class="played-checkbox">
        ${escapeHtml(p.name)}
      </label>
      <select class="placement-select">
        <option value="">No placement</option>
        <option value="1">1st (5 pts)</option>
        <option value="2">2nd (4 pts)</option>
        <option value="3">3rd (3 pts)</option>
        <option value="4">4th (2 pts)</option>
        <option value="5">5th (1 pt)</option>
      </select>
      <label class="bounty-label">
        <input type="radio" name="bounty-winner" class="bounty-radio"> Bounty
      </label>
      <span class="points-preview">0 pts</span>
    `;

    const playedCheckbox = row.querySelector(".played-checkbox");
    const placementSelect = row.querySelector(".placement-select");
    const bountyRadio = row.querySelector(".bounty-radio");
    const pointsPreview = row.querySelector(".points-preview");

    function updateRowState() {
      const enabled = playedCheckbox.checked;
      placementSelect.disabled = !enabled;
      bountyRadio.disabled = !enabled;
      row.classList.toggle("disabled", !enabled);
      if (!enabled) {
        placementSelect.value = "";
        bountyRadio.checked = false;
      }
      const placementPts = PLACEMENT_POINTS[placementSelect.value] || 0;
      const bountyPts = bountyRadio.checked ? 1 : 0;
      pointsPreview.textContent = `${placementPts + bountyPts} pts`;
    }

    playedCheckbox.addEventListener("change", updateRowState);
    placementSelect.addEventListener("change", updateRowState);
    bountyRadio.addEventListener("change", updateRowState);
    updateRowState();

    resultsPlayerRows.appendChild(row);
  }
}

fridayDateInput.addEventListener("change", loadResultsForSelectedDate);

async function loadResultsForSelectedDate() {
  resultsError.textContent = "";
  const date = fridayDateInput.value;
  if (!date || !activeSeason) return;

  // reset all rows to blank before loading
  for (const row of resultsPlayerRows.querySelectorAll(".result-row")) {
    row.querySelector(".played-checkbox").checked = false;
    row.querySelector(".placement-select").value = "";
    row.querySelector(".bounty-radio").checked = false;
    row.querySelector(".placement-select").dispatchEvent(new Event("change"));
  }

  const { data: friday, error: fridayError } = await supabaseClient
    .from("fridays")
    .select("*")
    .eq("season_id", activeSeason.id)
    .eq("game_date", date)
    .maybeSingle();

  if (fridayError) {
    resultsError.textContent = "Could not check this date: " + fridayError.message;
    return;
  }

  if (!friday) {
    currentFridayId = null;
    fridayStatusLine.textContent = "Not yet recorded — fill in results below and click Save.";
    return;
  }

  currentFridayId = friday.id;
  fridayStatusLine.textContent =
    friday.status === "cancelled"
      ? "This Friday is marked cancelled. Entering results below and saving will reactivate it."
      : `Status: ${friday.status}`;

  const { data: results, error: resultsErr } = await supabaseClient
    .from("results")
    .select("*")
    .eq("friday_id", friday.id);

  if (resultsErr) {
    resultsError.textContent = "Could not load results: " + resultsErr.message;
    return;
  }

  for (const r of results) {
    const row = resultsPlayerRows.querySelector(`.result-row[data-player-id="${r.player_id}"]`);
    if (!row) continue; // player may have since been deactivated
    row.querySelector(".played-checkbox").checked = true;
    row.querySelector(".placement-select").value = r.placement || "";
    row.querySelector(".bounty-radio").checked = r.bounty_winner;
    row.querySelector(".played-checkbox").dispatchEvent(new Event("change"));
  }
}

saveResultsBtn.addEventListener("click", async () => {
  resultsError.textContent = "";
  const date = fridayDateInput.value;
  if (!date) {
    resultsError.textContent = "Pick a date first.";
    return;
  }

  const rows = [...resultsPlayerRows.querySelectorAll(".result-row")];
  const placementsUsed = new Set();
  for (const row of rows) {
    const played = row.querySelector(".played-checkbox").checked;
    const placement = row.querySelector(".placement-select").value;
    if (played && placement) {
      if (placementsUsed.has(placement)) {
        resultsError.textContent = `Two players can't both finish in position ${placement}. Fix that before saving.`;
        return;
      }
      placementsUsed.add(placement);
    }
  }

  const playedRows = rows
    .filter((row) => row.querySelector(".played-checkbox").checked)
    .map((row) => ({
      player_id: row.dataset.playerId,
      placement: row.querySelector(".placement-select").value
        ? Number(row.querySelector(".placement-select").value)
        : null,
      bounty_winner: row.querySelector(".bounty-radio").checked,
    }));

  if (!playedRows.length && !window.confirm("No players are marked as played. Save anyway?")) {
    return;
  }

  // Step 1: make sure a fridays row exists for this date, and it's marked completed
  let fridayId = currentFridayId;
  if (!fridayId) {
    const { data: inserted, error: insertErr } = await supabaseClient
      .from("fridays")
      .insert({ season_id: activeSeason.id, game_date: date, status: "completed" })
      .select()
      .single();
    if (insertErr) {
      resultsError.textContent = "Could not create this Friday: " + insertErr.message;
      return;
    }
    fridayId = inserted.id;
  } else {
    const { error: updateErr } = await supabaseClient
      .from("fridays")
      .update({ status: "completed" })
      .eq("id", fridayId);
    if (updateErr) {
      resultsError.textContent = "Could not update this Friday: " + updateErr.message;
      return;
    }
  }

  // Step 2: replace any existing results for this Friday with the new set
  const { error: deleteErr } = await supabaseClient.from("results").delete().eq("friday_id", fridayId);
  if (deleteErr) {
    resultsError.textContent = "Could not clear old results: " + deleteErr.message;
    return;
  }

  if (playedRows.length) {
    const { error: insertResultsErr } = await supabaseClient
      .from("results")
      .insert(playedRows.map((r) => ({ ...r, friday_id: fridayId })));
    if (insertResultsErr) {
      resultsError.textContent = "Could not save results: " + insertResultsErr.message;
      return;
    }
  }

  currentFridayId = fridayId;
  await loadResultsForSelectedDate();
  await loadFridayList();
});

cancelFridayBtn.addEventListener("click", async () => {
  resultsError.textContent = "";
  const date = fridayDateInput.value;
  if (!date) {
    resultsError.textContent = "Pick a date first.";
    return;
  }
  if (!window.confirm("Mark this Friday as cancelled / no game? Any recorded results for it will be removed.")) {
    return;
  }

  let fridayId = currentFridayId;
  if (!fridayId) {
    const { data: inserted, error: insertErr } = await supabaseClient
      .from("fridays")
      .insert({ season_id: activeSeason.id, game_date: date, status: "cancelled" })
      .select()
      .single();
    if (insertErr) {
      resultsError.textContent = "Could not save: " + insertErr.message;
      return;
    }
    fridayId = inserted.id;
  } else {
    const { error: deleteErr } = await supabaseClient.from("results").delete().eq("friday_id", fridayId);
    if (deleteErr) {
      resultsError.textContent = "Could not clear results: " + deleteErr.message;
      return;
    }
    const { error: updateErr } = await supabaseClient
      .from("fridays")
      .update({ status: "cancelled" })
      .eq("id", fridayId);
    if (updateErr) {
      resultsError.textContent = "Could not update this Friday: " + updateErr.message;
      return;
    }
  }

  currentFridayId = fridayId;
  await loadResultsForSelectedDate();
  await loadFridayList();
});

async function loadFridayList() {
  if (!activeSeason) return;
  const { data, error } = await supabaseClient
    .from("fridays")
    .select("*")
    .eq("season_id", activeSeason.id)
    .order("game_date", { ascending: false });

  if (error) {
    fridayList.innerHTML = `<li class="muted">Could not load Fridays: ${escapeHtml(error.message)}</li>`;
    return;
  }

  fridayList.innerHTML = "";
  if (!data.length) {
    fridayList.innerHTML = '<li class="muted">No Fridays recorded yet this season.</li>';
    return;
  }

  for (const f of data) {
    const li = document.createElement("li");
    li.className = "friday-row";
    const badgeClass =
      f.status === "cancelled" ? "badge-cancelled" : f.status === "scheduled" ? "badge-muted" : "";
    li.innerHTML = `
      <span>${f.game_date} <span class="badge ${badgeClass}">${f.status.toUpperCase()}</span></span>
      <button class="btn btn-small btn-secondary" data-action="edit">Edit</button>
    `;
    li.querySelector('[data-action="edit"]').addEventListener("click", () => {
      fridayDateInput.value = f.game_date;
      loadResultsForSelectedDate();
      window.scrollTo({ top: resultsEditor.offsetTop, behavior: "smooth" });
    });
    fridayList.appendChild(li);
  }
}

// ------------------------------------------------------------------
// Utility
// ------------------------------------------------------------------
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
