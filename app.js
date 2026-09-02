
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
 
    const publicListView = document.getElementById("public-list-view");
    const seasonProgressLine = document.getElementById("season-progress-line");
    const standingsBody = document.getElementById("standings-body");
    const publicPlayerList = document.getElementById("public-player-list");
    const publicFridayList = document.getElementById("public-friday-list");
 
    const publicPlayerProfile = document.getElementById("public-player-profile");
    const profileName = document.getElementById("profile-name");
    const profileNickname = document.getElementById("profile-nickname");
    const profileStats = document.getElementById("profile-stats");
    const profileHistoryBody = document.getElementById("profile-history-body");
 
    const publicFridayDetail = document.getElementById("public-friday-detail");
    const fridayDetailDate = document.getElementById("friday-detail-date");
    const fridayDetailMeta = document.getElementById("friday-detail-meta");
    const fridayDetailBody = document.getElementById("friday-detail-body");
 
    const seasonHighHandBox = document.getElementById("season-high-hand-box");
    const publicHighHandList = document.getElementById("public-highhand-list");
 
    const hhDateInput = document.getElementById("hh-date-input");
    const hhPlayerSelect = document.getElementById("hh-player-select");
    const hhPreview = document.getElementById("hh-preview");
    const addHighHandForm = document.getElementById("add-highhand-form");
    const highHandError = document.getElementById("highhand-error");
    const hhCancelEditBtn = document.getElementById("hh-cancel-edit-btn");
    const highHandList = document.getElementById("highhand-list");
    const hhCardRows = [...document.querySelectorAll(".card-input-row")];
 
    const exportSeasonSelect = document.getElementById("export-season-select");
    const exportStandingsBtn = document.getElementById("export-standings-btn");
    const exportResultsBtn = document.getElementById("export-results-btn");
    const exportHighHandsBtn = document.getElementById("export-highhands-btn");
    const exportPlayersBtn = document.getElementById("export-players-btn");
    const exportBackupBtn = document.getElementById("export-backup-btn");
    const exportError = document.getElementById("export-error");
 
    const PLACEMENT_POINTS = { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 };
    const ORDINALS = { 1: "1st", 2: "2nd", 3: "3rd", 4: "4th", 5: "5th" };
 
    // Card ranks/suits used for High Hand entry. Cards are stored as short
    // codes like "AS" (Ace of Spades) or "TD" (Ten of Diamonds).
    const RANK_OPTIONS = [
      { value: "2", label: "2", numeric: 2 },
      { value: "3", label: "3", numeric: 3 },
      { value: "4", label: "4", numeric: 4 },
      { value: "5", label: "5", numeric: 5 },
      { value: "6", label: "6", numeric: 6 },
      { value: "7", label: "7", numeric: 7 },
      { value: "8", label: "8", numeric: 8 },
      { value: "9", label: "9", numeric: 9 },
      { value: "T", label: "10", numeric: 10 },
      { value: "J", label: "J", numeric: 11 },
      { value: "Q", label: "Q", numeric: 12 },
      { value: "K", label: "K", numeric: 13 },
      { value: "A", label: "A", numeric: 14 },
    ];
    const RANK_NUMERIC = Object.fromEntries(RANK_OPTIONS.map((r) => [r.value, r.numeric]));
    const RANK_NAME_SINGULAR = {
      2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven",
      8: "Eight", 9: "Nine", 10: "Ten", 11: "Jack", 12: "Queen", 13: "King", 14: "Ace",
    };
    const RANK_NAME_PLURAL = {
      2: "Twos", 3: "Threes", 4: "Fours", 5: "Fives", 6: "Sixes", 7: "Sevens",
      8: "Eights", 9: "Nines", 10: "Tens", 11: "Jacks", 12: "Queens", 13: "Kings", 14: "Aces",
    };
    const SUIT_OPTIONS = [
      { value: "S", label: "♠ Spades" },
      { value: "H", label: "♥ Hearts" },
      { value: "D", label: "♦ Diamonds" },
      { value: "C", label: "♣ Clubs" },
    ];
    const SUIT_SYMBOL = { S: "♠", H: "♥", D: "♦", C: "♣" };
    const SUIT_COLOR = { S: "black", H: "red", D: "red", C: "black" };
 
    let adminViewOpen = false;
    let activeSeason = null;
    let currentFridayId = null;
    let editingHighHandId = null;
 
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
      await Promise.all([loadPlayers(), loadSeasons(), loadPlayersForHighHand(), loadHighHandsAdmin()]);
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
      loadPlayersForHighHand();
      refreshPublicView();
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
      loadPlayersForHighHand();
      refreshPublicView();
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
      loadPlayersForHighHand();
      refreshPublicView();
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
      refreshPublicView();
      populateExportSeasonSelect(data);
    }
 
    function populateExportSeasonSelect(seasons) {
      if (!exportSeasonSelect) return;
      const previousValue = exportSeasonSelect.value;
      exportSeasonSelect.innerHTML = seasons
        .map((s) => `<option value="${s.id}">${escapeHtml(s.name)}${s.is_active ? " (active)" : ""}</option>`)
        .join("");
      if (previousValue && seasons.some((s) => s.id === previousValue)) {
        exportSeasonSelect.value = previousValue;
      } else if (activeSeason) {
        exportSeasonSelect.value = activeSeason.id;
      }
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
            <button class="btn btn-small btn-secondary" data-action="edit">Edit</button>
            <button class="btn btn-small btn-danger" data-action="delete">Delete</button>
          </div>
        `;
        const activateBtn = li.querySelector('[data-action="activate"]');
        if (activateBtn) activateBtn.addEventListener("click", () => makeSeasonActive(s));
        li.querySelector('[data-action="edit"]').addEventListener("click", () => editSeason(s));
        li.querySelector('[data-action="delete"]').addEventListener("click", () => deleteSeason(s));
        seasonList.appendChild(li);
      }
    }
 
    async function editSeason(season) {
      seasonError.textContent = "";
      const newName = window.prompt("Season name:", season.name);
      if (newName === null) return;
      const trimmedName = newName.trim();
      if (!trimmedName) {
        seasonError.textContent = "Season name can't be blank.";
        return;
      }
 
      const newStartDate = window.prompt("Start date (YYYY-MM-DD):", season.start_date);
      if (newStartDate === null) return;
      const trimmedDate = newStartDate.trim();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmedDate) || isNaN(Date.parse(trimmedDate))) {
        seasonError.textContent = "Start date must be in YYYY-MM-DD format, like 2026-07-03.";
        return;
      }
 
      const { error } = await supabaseClient
        .from("seasons")
        .update({ name: trimmedName, start_date: trimmedDate })
        .eq("id", season.id);
 
      if (error) {
        seasonError.textContent = "Could not update season: " + error.message;
        return;
      }
      loadSeasons();
    }
 
    async function deleteSeason(season) {
      seasonError.textContent = "";
      const typed = window.prompt(
        `This permanently deletes "${season.name}" AND every Friday, result, and high hand recorded under it. This cannot be undone.\n\nIf you want a copy first, cancel this and use Export & Backup below.\n\nTo confirm, type the season name exactly: ${season.name}`
      );
      if (typed === null) return;
      if (typed.trim() !== season.name) {
        seasonError.textContent = "That didn't match the season name exactly, so nothing was deleted.";
        return;
      }
 
      const { error } = await supabaseClient.from("seasons").delete().eq("id", season.id);
      if (error) {
        seasonError.textContent = "Could not delete season: " + error.message;
        return;
      }
      loadSeasons();
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
            <input type="radio" name="bounty-winner" class="bounty-radio"> Bounty (+1)
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
      refreshPublicView();
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
      refreshPublicView();
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
    // High Hands — poker hand evaluation + admin entry
    // ------------------------------------------------------------------
 
    // Works out what a 5-card hand is (Royal Flush ... High Card), its
    // tiebreak ranks (for comparing two hands of the same category), and a
    // human-readable description — all calculated automatically so no one
    // has to type in "Full House" by hand and get it wrong.
    function evaluatePokerHand(cards) {
      const parsed = cards.map((c) => ({ rank: RANK_NUMERIC[c.slice(0, -1)], suit: c.slice(-1) }));
      const ranks = parsed.map((c) => c.rank).sort((a, b) => b - a);
      const isFlush = parsed.every((c) => c.suit === parsed[0].suit);
 
      const uniqueRanks = [...new Set(ranks)];
      let isStraight = false;
      let straightHigh = null;
      if (uniqueRanks.length === 5) {
        if (uniqueRanks[0] - uniqueRanks[4] === 4) {
          isStraight = true;
          straightHigh = uniqueRanks[0];
        } else if (uniqueRanks.join(",") === "14,5,4,3,2") {
          // wheel: Ace-2-3-4-5, Ace plays low, straight is "5 high"
          isStraight = true;
          straightHigh = 5;
        }
      }
 
      const countMap = new Map();
      for (const r of ranks) countMap.set(r, (countMap.get(r) || 0) + 1);
      const groups = [...countMap.entries()]
        .map(([rank, count]) => ({ rank, count }))
        .sort((a, b) => b.count - a.count || b.rank - a.rank);
      const counts = groups.map((g) => g.count);
 
      let category, tiebreak, description;
 
      if (isStraight && isFlush && straightHigh === 14) {
        category = 1;
        tiebreak = [14];
        description = "Royal Flush";
      } else if (isStraight && isFlush) {
        category = 2;
        tiebreak = [straightHigh];
        description = `Straight Flush, ${RANK_NAME_SINGULAR[straightHigh]} High`;
      } else if (counts[0] === 4) {
        category = 3;
        tiebreak = [groups[0].rank, groups[1].rank];
        description = `Four of a Kind, ${RANK_NAME_PLURAL[groups[0].rank]}`;
      } else if (counts[0] === 3 && counts[1] === 2) {
        category = 4;
        tiebreak = [groups[0].rank, groups[1].rank];
        description = `Full House, ${RANK_NAME_PLURAL[groups[0].rank]} full of ${RANK_NAME_PLURAL[groups[1].rank]}`;
      } else if (isFlush) {
        category = 5;
        tiebreak = [...ranks];
        description = `Flush, ${RANK_NAME_SINGULAR[ranks[0]]} High`;
      } else if (isStraight) {
        category = 6;
        tiebreak = [straightHigh];
        description = `Straight, ${RANK_NAME_SINGULAR[straightHigh]} High`;
      } else if (counts[0] === 3) {
        category = 7;
        tiebreak = [groups[0].rank, groups[1].rank, groups[2].rank];
        description = `Three of a Kind, ${RANK_NAME_PLURAL[groups[0].rank]}`;
      } else if (counts[0] === 2 && counts[1] === 2) {
        category = 8;
        tiebreak = [groups[0].rank, groups[1].rank, groups[2].rank];
        description = `Two Pair, ${RANK_NAME_PLURAL[groups[0].rank]} and ${RANK_NAME_PLURAL[groups[1].rank]}`;
      } else if (counts[0] === 2) {
        category = 9;
        tiebreak = [groups[0].rank, groups[1].rank, groups[2].rank, groups[3].rank];
        description = `Pair of ${RANK_NAME_PLURAL[groups[0].rank]}`;
      } else {
        category = 10;
        tiebreak = [...ranks];
        description = `High Card, ${RANK_NAME_SINGULAR[ranks[0]]}`;
      }
 
      return { category, tiebreak, description };
    }
 
    // Compares two hands (each with hand_category + tiebreak_ranks). Negative
    // means "a" is the better hand — sorting an array with this puts the best
    // hand first.
    function compareHandStrength(a, b) {
      if (a.hand_category !== b.hand_category) return a.hand_category - b.hand_category;
      const len = Math.max(a.tiebreak_ranks.length, b.tiebreak_ranks.length);
      for (let i = 0; i < len; i++) {
        const va = a.tiebreak_ranks[i] ?? 0;
        const vb = b.tiebreak_ranks[i] ?? 0;
        if (va !== vb) return vb - va;
      }
      return 0;
    }
 
    function renderCardsInline(cards) {
      return cards
        .map((c) => {
          const rank = c.slice(0, -1);
          const suit = c.slice(-1);
          const rankLabel = rank === "T" ? "10" : rank;
          const color = SUIT_COLOR[suit] || "black";
          return `<span class="card-chip card-${color}">${rankLabel}${SUIT_SYMBOL[suit] || suit}</span>`;
        })
        .join(" ");
    }
 
    // Populate the rank/suit dropdowns for each of the 5 card rows, once.
    for (const row of hhCardRows) {
      const rankSelect = row.querySelector(".hh-rank-select");
      const suitSelect = row.querySelector(".hh-suit-select");
      rankSelect.innerHTML =
        '<option value="">Rank</option>' + RANK_OPTIONS.map((r) => `<option value="${r.value}">${r.label}</option>`).join("");
      suitSelect.innerHTML =
        '<option value="">Suit</option>' + SUIT_OPTIONS.map((s) => `<option value="${s.value}">${s.label}</option>`).join("");
      rankSelect.addEventListener("change", updateHighHandPreview);
      suitSelect.addEventListener("change", updateHighHandPreview);
    }
 
    if (hhDateInput) hhDateInput.value = todayIso();
 
    function getSelectedCards() {
      return hhCardRows.map((row) => {
        const rank = row.querySelector(".hh-rank-select").value;
        const suit = row.querySelector(".hh-suit-select").value;
        return rank && suit ? rank + suit : null;
      });
    }
 
    function updateHighHandPreview() {
      const cards = getSelectedCards();
      highHandError.textContent = "";
      if (cards.some((c) => !c)) {
        hhPreview.textContent = "Pick all 5 cards to see the hand.";
        return;
      }
      if (new Set(cards).size !== 5) {
        hhPreview.textContent = "";
        highHandError.textContent = "Each card can only be used once.";
        return;
      }
      const evalResult = evaluatePokerHand(cards);
      hhPreview.innerHTML = `${renderCardsInline(cards)} &nbsp; <strong>${escapeHtml(evalResult.description)}</strong>`;
    }
 
    async function loadPlayersForHighHand() {
      const { data, error } = await supabaseClient
        .from("players")
        .select("*")
        .order("is_active", { ascending: false })
        .order("name", { ascending: true });
 
      if (error) {
        highHandError.textContent = "Could not load players: " + error.message;
        return;
      }
      const previousValue = hhPlayerSelect.value;
      hhPlayerSelect.innerHTML = data
        .map((p) => `<option value="${p.id}">${escapeHtml(p.name)}${p.is_active ? "" : " (inactive)"}</option>`)
        .join("");
      if (previousValue) hhPlayerSelect.value = previousValue;
    }
 
    function resetHighHandForm() {
      editingHighHandId = null;
      addHighHandForm.reset();
      hhDateInput.value = todayIso();
      for (const row of hhCardRows) {
        row.querySelector(".hh-rank-select").value = "";
        row.querySelector(".hh-suit-select").value = "";
      }
      hhCancelEditBtn.hidden = true;
      highHandError.textContent = "";
      updateHighHandPreview();
    }
 
    hhCancelEditBtn.addEventListener("click", resetHighHandForm);
 
    addHighHandForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      highHandError.textContent = "";
      const date = hhDateInput.value;
      const playerId = hhPlayerSelect.value;
      const cards = getSelectedCards();
 
      if (!date) {
        highHandError.textContent = "Pick a date.";
        return;
      }
      if (!playerId) {
        highHandError.textContent = "Pick a player.";
        return;
      }
      if (cards.some((c) => !c)) {
        highHandError.textContent = "Pick all 5 cards.";
        return;
      }
      if (new Set(cards).size !== 5) {
        highHandError.textContent = "Each card can only be used once.";
        return;
      }
      if (!activeSeason) {
        highHandError.textContent = "Create and activate a season first.";
        return;
      }
 
      const evalResult = evaluatePokerHand(cards);
 
      // Find or create the Friday this hand happened on.
      const { data: existingFriday, error: fridayLookupErr } = await supabaseClient
        .from("fridays")
        .select("*")
        .eq("season_id", activeSeason.id)
        .eq("game_date", date)
        .maybeSingle();
 
      if (fridayLookupErr) {
        highHandError.textContent = "Could not check this date: " + fridayLookupErr.message;
        return;
      }
 
      let fridayId;
      if (existingFriday) {
        fridayId = existingFriday.id;
      } else {
        const { data: inserted, error: insertFridayErr } = await supabaseClient
          .from("fridays")
          .insert({ season_id: activeSeason.id, game_date: date, status: "scheduled" })
          .select()
          .single();
        if (insertFridayErr) {
          highHandError.textContent = "Could not save this date: " + insertFridayErr.message;
          return;
        }
        fridayId = inserted.id;
      }
 
      const payload = {
        friday_id: fridayId,
        player_id: playerId,
        cards,
        hand_category: evalResult.category,
        tiebreak_ranks: evalResult.tiebreak,
        description: evalResult.description,
      };
 
      if (editingHighHandId) {
        const { error } = await supabaseClient.from("high_hands").update(payload).eq("id", editingHighHandId);
        if (error) {
          highHandError.textContent = "Could not update: " + error.message;
          return;
        }
      } else {
        const { error } = await supabaseClient.from("high_hands").insert(payload);
        if (error) {
          highHandError.textContent = "Could not save: " + error.message;
          return;
        }
      }
 
      resetHighHandForm();
      loadHighHandsAdmin();
      refreshPublicView();
    });
 
    async function loadHighHandsAdmin() {
      const { data, error } = await supabaseClient
        .from("high_hands")
        .select("*, fridays(game_date, seasons(name)), players(name)")
        .order("recorded_at", { ascending: false });
 
      if (error) {
        highHandList.innerHTML = `<li class="muted">Could not load high hands: ${escapeHtml(error.message)}</li>`;
        return;
      }
      if (!data.length) {
        highHandList.innerHTML = '<li class="muted">No high hands recorded yet.</li>';
        return;
      }
 
      highHandList.innerHTML = "";
      for (const hh of data) {
        const li = document.createElement("li");
        li.className = "friday-row";
        li.innerHTML = `
          <div class="player-info">
            <span class="name">${escapeHtml(hh.players?.name || "Unknown")} &mdash; ${escapeHtml(hh.description)}</span>
            <span class="nickname">${hh.fridays?.game_date || ""} &middot; ${escapeHtml(hh.fridays?.seasons?.name || "")}</span>
          </div>
          <div class="row-actions">
            <button class="btn btn-small btn-secondary" data-action="edit">Edit</button>
            <button class="btn btn-small btn-danger" data-action="delete">Delete</button>
          </div>
        `;
        li.querySelector('[data-action="edit"]').addEventListener("click", () => editHighHand(hh));
        li.querySelector('[data-action="delete"]').addEventListener("click", () => deleteHighHand(hh));
        highHandList.appendChild(li);
      }
    }
 
    function editHighHand(hh) {
      editingHighHandId = hh.id;
      hhDateInput.value = hh.fridays?.game_date || todayIso();
      hhPlayerSelect.value = hh.player_id;
      hh.cards.forEach((card, i) => {
        const row = hhCardRows[i];
        if (!row) return;
        row.querySelector(".hh-rank-select").value = card.slice(0, -1);
        row.querySelector(".hh-suit-select").value = card.slice(-1);
      });
      updateHighHandPreview();
      hhCancelEditBtn.hidden = false;
      window.scrollTo({ top: addHighHandForm.offsetTop, behavior: "smooth" });
    }
 
    async function deleteHighHand(hh) {
      if (
        !window.confirm(
          `Delete this high hand — ${hh.description} by ${hh.players?.name || "Unknown"}? This cannot be undone.`
        )
      ) {
        return;
      }
      const { error } = await supabaseClient.from("high_hands").delete().eq("id", hh.id);
      if (error) {
        highHandError.textContent = "Could not delete: " + error.message;
        return;
      }
      if (editingHighHandId === hh.id) resetHighHandForm();
      loadHighHandsAdmin();
      refreshPublicView();
    }
 
    // ------------------------------------------------------------------
    // Export & Backup — everything downloads straight to the admin's
    // device as a file. Nothing here is emailed or sent anywhere.
    // ------------------------------------------------------------------
 
    function csvEscape(value) {
      if (value === null || value === undefined) return "";
      const s = String(value);
      if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
      return s;
    }
 
    function rowsToCSV(columns, rows) {
      const header = columns.map((c) => csvEscape(c.label)).join(",");
      const lines = rows.map((row) => columns.map((c) => csvEscape(row[c.key])).join(","));
      return [header, ...lines].join("\r\n");
    }
 
    function slugify(str) {
      return (
        String(str || "")
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "") || "export"
      );
    }
 
    function downloadFile(filename, content, mimeType) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
 
    function getSelectedExportSeasonId() {
      if (!exportSeasonSelect || !exportSeasonSelect.value) {
        exportError.textContent = "Create a season first.";
        return null;
      }
      return exportSeasonSelect.value;
    }
 
    exportStandingsBtn.addEventListener("click", async () => {
      exportError.textContent = "";
      const seasonId = getSelectedExportSeasonId();
      if (!seasonId) return;
 
      const { data: season, error: seasonErr } = await supabaseClient.from("seasons").select("*").eq("id", seasonId).single();
      if (seasonErr || !season) {
        exportError.textContent = "Could not load that season: " + (seasonErr?.message || "not found");
        return;
      }
 
      const { data: fridays, error: fridaysErr } = await supabaseClient
        .from("fridays")
        .select("id")
        .eq("season_id", seasonId)
        .eq("status", "completed");
      if (fridaysErr) {
        exportError.textContent = "Could not load Fridays: " + fridaysErr.message;
        return;
      }
 
      const fridayIds = (fridays || []).map((f) => f.id);
      let results = [];
      if (fridayIds.length) {
        const { data, error } = await supabaseClient
          .from("results")
          .select("player_id, placement, bounty_winner, total_points")
          .in("friday_id", fridayIds);
        if (error) {
          exportError.textContent = "Could not load results: " + error.message;
          return;
        }
        results = data || [];
      }
 
      const { data: players, error: playersErr } = await supabaseClient.from("players").select("id, name");
      if (playersErr) {
        exportError.textContent = "Could not load players: " + playersErr.message;
        return;
      }
      const playerMap = new Map(players.map((p) => [p.id, p]));
 
      const agg = new Map();
      for (const r of results) {
        if (!agg.has(r.player_id)) agg.set(r.player_id, { points: 0, played: 0, wins: 0, bounties: 0 });
        const a = agg.get(r.player_id);
        a.points += r.total_points;
        a.played += 1;
        if (r.placement === 1) a.wins += 1;
        if (r.bounty_winner) a.bounties += 1;
      }
 
      const rows = [...agg.entries()]
        .map(([playerId, stats]) => ({
          name: playerMap.get(playerId)?.name || "Unknown player",
          ...stats,
        }))
        .sort((a, b) => b.points - a.points || b.wins - a.wins || a.name.localeCompare(b.name));
 
      rows.forEach((r, i) => (r.rank = i + 1));
 
      const csv = rowsToCSV(
        [
          { key: "rank", label: "Rank" },
          { key: "name", label: "Player" },
          { key: "points", label: "Points" },
          { key: "played", label: "Fridays Played" },
          { key: "wins", label: "Wins" },
          { key: "bounties", label: "Bounties" },
        ],
        rows
      );
 
      downloadFile(`standings-${slugify(season.name)}-${todayIso()}.csv`, csv, "text/csv");
    });
 
    exportResultsBtn.addEventListener("click", async () => {
      exportError.textContent = "";
      const seasonId = getSelectedExportSeasonId();
      if (!seasonId) return;
 
      const { data: season, error: seasonErr } = await supabaseClient.from("seasons").select("*").eq("id", seasonId).single();
      if (seasonErr || !season) {
        exportError.textContent = "Could not load that season: " + (seasonErr?.message || "not found");
        return;
      }
 
      const { data: fridays, error: fridaysErr } = await supabaseClient
        .from("fridays")
        .select("id, game_date, status")
        .eq("season_id", seasonId)
        .order("game_date", { ascending: true });
      if (fridaysErr) {
        exportError.textContent = "Could not load Fridays: " + fridaysErr.message;
        return;
      }
 
      const fridayMap = new Map((fridays || []).map((f) => [f.id, f]));
      const fridayIds = [...fridayMap.keys()];
 
      let results = [];
      if (fridayIds.length) {
        const { data, error } = await supabaseClient
          .from("results")
          .select("friday_id, player_id, placement, bounty_winner, total_points, players(name)")
          .in("friday_id", fridayIds);
        if (error) {
          exportError.textContent = "Could not load results: " + error.message;
          return;
        }
        results = data || [];
      }
 
      const rows = results
        .map((r) => {
          const friday = fridayMap.get(r.friday_id);
          return {
            date: friday?.game_date || "",
            player: r.players?.name || "Unknown",
            finish: r.placement ? ORDINALS[r.placement] || r.placement : "",
            bounty: r.bounty_winner ? "Yes" : "No",
            points: r.total_points,
          };
        })
        .sort((a, b) => a.date.localeCompare(b.date) || (a.finish || "zzz").localeCompare(b.finish || "zzz"));
 
      const csv = rowsToCSV(
        [
          { key: "date", label: "Date" },
          { key: "player", label: "Player" },
          { key: "finish", label: "Finish" },
          { key: "bounty", label: "Bounty" },
          { key: "points", label: "Points" },
        ],
        rows
      );
 
      downloadFile(`results-history-${slugify(season.name)}-${todayIso()}.csv`, csv, "text/csv");
    });
 
    exportHighHandsBtn.addEventListener("click", async () => {
      exportError.textContent = "";
      const seasonId = getSelectedExportSeasonId();
      if (!seasonId) return;
 
      const { data: season, error: seasonErr } = await supabaseClient.from("seasons").select("*").eq("id", seasonId).single();
      if (seasonErr || !season) {
        exportError.textContent = "Could not load that season: " + (seasonErr?.message || "not found");
        return;
      }
 
      const { data: hands, error } = await supabaseClient
        .from("high_hands")
        .select("*, fridays!inner(game_date, season_id), players(name)")
        .eq("fridays.season_id", seasonId)
        .order("recorded_at", { ascending: true });
 
      if (error) {
        exportError.textContent = "Could not load high hands: " + error.message;
        return;
      }
 
      const rows = (hands || []).map((hh) => ({
        date: hh.fridays?.game_date || "",
        player: hh.players?.name || "Unknown",
        hand: hh.description,
        cards: hh.cards.join(" "),
      }));
 
      const csv = rowsToCSV(
        [
          { key: "date", label: "Date" },
          { key: "player", label: "Player" },
          { key: "hand", label: "Hand" },
          { key: "cards", label: "Cards" },
        ],
        rows
      );
 
      downloadFile(`high-hands-${slugify(season.name)}-${todayIso()}.csv`, csv, "text/csv");
    });
 
    exportPlayersBtn.addEventListener("click", async () => {
      exportError.textContent = "";
      const { data: players, error } = await supabaseClient.from("players").select("*").order("name", { ascending: true });
      if (error) {
        exportError.textContent = "Could not load players: " + error.message;
        return;
      }
 
      const rows = players.map((p) => ({
        name: p.name,
        nickname: p.nickname || "",
        status: p.is_active ? "Active" : "Inactive",
        joined: p.joined_date,
      }));
 
      const csv = rowsToCSV(
        [
          { key: "name", label: "Name" },
          { key: "nickname", label: "Nickname" },
          { key: "status", label: "Status" },
          { key: "joined", label: "Joined" },
        ],
        rows
      );
 
      downloadFile(`players-${todayIso()}.csv`, csv, "text/csv");
    });
 
    exportBackupBtn.addEventListener("click", async () => {
      exportError.textContent = "";
      const tables = ["seasons", "players", "fridays", "results", "high_hands"];
      const backup = { exported_at: new Date().toISOString() };
 
      for (const table of tables) {
        const { data, error } = await supabaseClient.from(table).select("*");
        if (error) {
          exportError.textContent = `Could not back up "${table}": ` + error.message;
          return;
        }
        backup[table] = data;
      }
 
      downloadFile(`poker-league-full-backup-${todayIso()}.json`, JSON.stringify(backup, null, 2), "application/json");
    });
 
    // ------------------------------------------------------------------
    // Public view: Standings / Players / Fridays
    // ------------------------------------------------------------------
 
    function refreshPublicView() {
      loadStandings();
      loadPublicPlayers();
      loadPublicFridays();
      loadHighHandsPublic();
    }
 
    function showPublicList() {
      publicListView.hidden = false;
      publicPlayerProfile.hidden = true;
      publicFridayDetail.hidden = true;
    }
 
    function switchPublicTab(tab) {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
      document.querySelectorAll(".public-tab").forEach((el) => {
        el.hidden = el.id !== `public-tab-${tab}`;
      });
      showPublicList();
    }
 
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchPublicTab(btn.dataset.tab));
    });
 
    document.querySelectorAll(".back-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchPublicTab(btn.dataset.back));
    });
 
    async function loadStandings() {
      const { data: seasons, error: seasonErr } = await supabaseClient
        .from("seasons")
        .select("*")
        .eq("is_active", true)
        .limit(1);
 
      if (seasonErr) {
        seasonProgressLine.textContent = "Could not load the season: " + seasonErr.message;
        standingsBody.innerHTML = "";
        return;
      }
 
      const season = seasons && seasons[0];
      if (!season) {
        seasonProgressLine.textContent = "No active season right now.";
        standingsBody.innerHTML = "";
        return;
      }
 
      const { data: fridays, error: fridaysErr } = await supabaseClient
        .from("fridays")
        .select("id")
        .eq("season_id", season.id)
        .eq("status", "completed");
 
      if (fridaysErr) {
        seasonProgressLine.textContent = "Could not load Fridays: " + fridaysErr.message;
        return;
      }
 
      const fridayIds = (fridays || []).map((f) => f.id);
      seasonProgressLine.textContent = `${season.name} — ${fridayIds.length} Friday${fridayIds.length === 1 ? "" : "s"} played so far`;
 
      if (!fridayIds.length) {
        standingsBody.innerHTML = '<tr><td colspan="6" class="muted">No results recorded yet this season.</td></tr>';
        return;
      }
 
      const { data: results, error: resultsErr } = await supabaseClient
        .from("results")
        .select("player_id, placement, bounty_winner, total_points")
        .in("friday_id", fridayIds);
 
      if (resultsErr) {
        standingsBody.innerHTML = `<tr><td colspan="6" class="muted">Could not load results: ${escapeHtml(resultsErr.message)}</td></tr>`;
        return;
      }
 
      const { data: players, error: playersErr } = await supabaseClient.from("players").select("id, name");
      if (playersErr) {
        standingsBody.innerHTML = `<tr><td colspan="6" class="muted">Could not load players: ${escapeHtml(playersErr.message)}</td></tr>`;
        return;
      }
      const playerMap = new Map(players.map((p) => [p.id, p]));
 
      const agg = new Map();
      for (const r of results || []) {
        if (!agg.has(r.player_id)) agg.set(r.player_id, { points: 0, played: 0, wins: 0, bounties: 0 });
        const a = agg.get(r.player_id);
        a.points += r.total_points;
        a.played += 1;
        if (r.placement === 1) a.wins += 1;
        if (r.bounty_winner) a.bounties += 1;
      }
 
      const rows = [...agg.entries()].map(([playerId, stats]) => ({
        playerId,
        name: playerMap.get(playerId)?.name || "Unknown player",
        ...stats,
      }));
      rows.sort((a, b) => b.points - a.points || b.wins - a.wins || a.name.localeCompare(b.name));
 
      if (!rows.length) {
        standingsBody.innerHTML = '<tr><td colspan="6" class="muted">No results recorded yet this season.</td></tr>';
        return;
      }
 
      standingsBody.innerHTML = rows
        .map(
          (r, i) => `
        <tr class="clickable-row" data-player-id="${r.playerId}">
          <td>${i + 1}</td>
          <td>${escapeHtml(r.name)}</td>
          <td>${r.points}</td>
          <td>${r.played}</td>
          <td>${r.wins}</td>
          <td>${r.bounties}</td>
        </tr>
      `
        )
        .join("");
 
      standingsBody.querySelectorAll("tr[data-player-id]").forEach((tr) => {
        tr.addEventListener("click", () => showPlayerProfile(tr.dataset.playerId));
      });
    }
 
    async function loadPublicPlayers() {
      const { data: players, error } = await supabaseClient.from("players").select("*").order("name", { ascending: true });
 
      if (error) {
        publicPlayerList.innerHTML = `<li class="muted">Could not load players: ${escapeHtml(error.message)}</li>`;
        return;
      }
      if (!players.length) {
        publicPlayerList.innerHTML = '<li class="muted">No players yet.</li>';
        return;
      }
 
      publicPlayerList.innerHTML = players
        .map(
          (p) => `
        <li data-player-id="${p.id}">
          <span>${escapeHtml(p.name)}${p.nickname ? ` <span class="muted">"${escapeHtml(p.nickname)}"</span>` : ""}${p.is_active ? "" : ' <span class="badge badge-muted">INACTIVE</span>'}</span>
          <span class="muted">&rsaquo;</span>
        </li>
      `
        )
        .join("");
 
      publicPlayerList.querySelectorAll("li[data-player-id]").forEach((li) => {
        li.addEventListener("click", () => showPlayerProfile(li.dataset.playerId));
      });
    }
 
    async function loadPublicFridays() {
      const { data: fridays, error } = await supabaseClient
        .from("fridays")
        .select("*, seasons(name)")
        .order("game_date", { ascending: false });
 
      if (error) {
        publicFridayList.innerHTML = `<li class="muted">Could not load Fridays: ${escapeHtml(error.message)}</li>`;
        return;
      }
      if (!fridays.length) {
        publicFridayList.innerHTML = '<li class="muted">No Fridays recorded yet.</li>';
        return;
      }
 
      publicFridayList.innerHTML = fridays
        .map((f) => {
          const badgeClass =
            f.status === "cancelled" ? "badge-cancelled" : f.status === "scheduled" ? "badge-muted" : "";
          return `
        <li data-friday-id="${f.id}">
          <span>${f.game_date} <span class="muted">(${escapeHtml(f.seasons?.name || "")})</span></span>
          <span class="badge ${badgeClass}">${f.status.toUpperCase()}</span>
        </li>
      `;
        })
        .join("");
 
      publicFridayList.querySelectorAll("li[data-friday-id]").forEach((li) => {
        li.addEventListener("click", () => showFridayDetail(li.dataset.fridayId));
      });
    }
 
    async function showPlayerProfile(playerId) {
      const { data: player, error: playerErr } = await supabaseClient
        .from("players")
        .select("*")
        .eq("id", playerId)
        .single();
 
      if (playerErr || !player) return;
 
      profileName.textContent = player.name;
      profileNickname.textContent = player.nickname ? `"${player.nickname}"` : "";
      profileNickname.hidden = !player.nickname;
 
      const { data: history, error: historyErr } = await supabaseClient
        .from("results")
        .select("placement, bounty_winner, total_points, fridays(game_date, status, seasons(name))")
        .eq("player_id", playerId)
        .order("game_date", { foreignTable: "fridays", ascending: false });
 
      if (historyErr) {
        profileHistoryBody.innerHTML = `<tr><td colspan="5" class="muted">Could not load history: ${escapeHtml(historyErr.message)}</td></tr>`;
      } else {
        const totalPoints = (history || []).reduce((sum, r) => sum + r.total_points, 0);
        const played = (history || []).length;
        const wins = (history || []).filter((r) => r.placement === 1).length;
        const bounties = (history || []).filter((r) => r.bounty_winner).length;
 
        profileStats.innerHTML = `
          <div class="stat-box"><div class="value">${totalPoints}</div><div class="label">Total Points</div></div>
          <div class="stat-box"><div class="value">${played}</div><div class="label">Fridays Played</div></div>
          <div class="stat-box"><div class="value">${wins}</div><div class="label">Wins</div></div>
          <div class="stat-box"><div class="value">${bounties}</div><div class="label">Bounties</div></div>
        `;
 
        profileHistoryBody.innerHTML = (history || []).length
          ? history
              .map(
                (r) => `
          <tr>
            <td>${r.fridays?.game_date || ""}</td>
            <td>${escapeHtml(r.fridays?.seasons?.name || "")}</td>
            <td>${r.placement ? ORDINALS[r.placement] : "—"}</td>
            <td>${r.bounty_winner ? "✓" : ""}</td>
            <td>${r.total_points}</td>
          </tr>
        `
              )
              .join("")
          : '<tr><td colspan="5" class="muted">No Fridays played yet.</td></tr>';
      }
 
      publicListView.hidden = true;
      publicFridayDetail.hidden = true;
      publicPlayerProfile.hidden = false;
    }
 
    async function showFridayDetail(fridayId) {
      const { data: friday, error: fridayErr } = await supabaseClient
        .from("fridays")
        .select("*, seasons(name)")
        .eq("id", fridayId)
        .single();
 
      if (fridayErr || !friday) return;
 
      fridayDetailDate.textContent = friday.game_date;
      const statusLabel =
        friday.status === "cancelled" ? "Cancelled / No Game" : friday.status === "scheduled" ? "Not Played Yet" : "Completed";
      fridayDetailMeta.textContent = `${friday.seasons?.name || ""} — ${statusLabel}`;
 
      if (friday.status === "cancelled") {
        fridayDetailBody.innerHTML = '<tr><td colspan="4" class="muted">No game was played this night.</td></tr>';
      } else if (friday.status === "scheduled") {
        fridayDetailBody.innerHTML = '<tr><td colspan="4" class="muted">Results haven\'t been recorded for this night yet.</td></tr>';
      } else {
        const { data: results, error: resultsErr } = await supabaseClient
          .from("results")
          .select("placement, bounty_winner, total_points, players(name, nickname)")
          .eq("friday_id", fridayId)
          .order("total_points", { ascending: false });
 
        if (resultsErr) {
          fridayDetailBody.innerHTML = `<tr><td colspan="4" class="muted">Could not load results: ${escapeHtml(resultsErr.message)}</td></tr>`;
        } else {
          fridayDetailBody.innerHTML = (results || []).length
            ? results
                .map(
                  (r) => `
            <tr>
              <td>${r.placement ? ORDINALS[r.placement] : "—"}</td>
              <td>${escapeHtml(r.players?.name || "Unknown")}</td>
              <td>${r.bounty_winner ? "✓" : ""}</td>
              <td>${r.total_points}</td>
            </tr>
          `
                )
                .join("")
            : '<tr><td colspan="4" class="muted">No results recorded.</td></tr>';
        }
      }
 
      publicListView.hidden = true;
      publicPlayerProfile.hidden = true;
      publicFridayDetail.hidden = false;
    }
 
    async function loadHighHandsPublic() {
      const { data: seasons, error: seasonErr } = await supabaseClient
        .from("seasons")
        .select("*")
        .eq("is_active", true)
        .limit(1);
 
      const activeSeasonRow = !seasonErr && seasons ? seasons[0] : null;
 
      const { data: allHands, error } = await supabaseClient
        .from("high_hands")
        .select("*, fridays(game_date, season_id, seasons(name)), players(name, nickname)")
        .order("recorded_at", { ascending: false });
 
      if (error) {
        publicHighHandList.innerHTML = `<li class="muted">Could not load high hands: ${escapeHtml(error.message)}</li>`;
        seasonHighHandBox.innerHTML = "";
        return;
      }
 
      const hands = allHands || [];
 
      // Work out the best hand within each season, so we can show the
      // current season's best up top, and mark it in the full history below
      // (which stays visible even after a new season high is recorded).
      const bestBySeasonId = new Map();
      for (const hh of hands) {
        const seasonId = hh.fridays?.season_id;
        if (!seasonId) continue;
        const current = bestBySeasonId.get(seasonId);
        if (!current || compareHandStrength(hh, current) < 0) {
          bestBySeasonId.set(seasonId, hh);
        }
      }
 
      if (!activeSeasonRow) {
        seasonHighHandBox.innerHTML = '<p class="muted">No active season right now.</p>';
      } else {
        const best = bestBySeasonId.get(activeSeasonRow.id);
        if (!best) {
          seasonHighHandBox.innerHTML = `<p class="muted">No high hand recorded yet for ${escapeHtml(activeSeasonRow.name)}.</p>`;
        } else {
          seasonHighHandBox.innerHTML = `
            <div class="high-hand-callout">
              <div class="hh-callout-label">🏆 ${escapeHtml(activeSeasonRow.name)} High Hand</div>
              <div class="hh-callout-cards">${renderCardsInline(best.cards)}</div>
              <div class="hh-callout-desc">${escapeHtml(best.description)}</div>
              <div class="hh-callout-meta">${escapeHtml(best.players?.name || "Unknown")} &middot; ${best.fridays?.game_date || ""}</div>
            </div>
          `;
        }
      }
 
      if (!hands.length) {
        publicHighHandList.innerHTML = '<li class="muted">No high hands recorded yet.</li>';
        return;
      }
 
      publicHighHandList.innerHTML = hands
        .map((hh) => {
          const seasonBest = bestBySeasonId.get(hh.fridays?.season_id);
          const isBest = seasonBest && seasonBest.id === hh.id;
          return `
        <li class="high-hand-item">
          <div class="hh-item-cards">${renderCardsInline(hh.cards)}</div>
          <div class="hh-item-desc">${escapeHtml(hh.description)}${isBest ? ' <span class="badge">SEASON BEST</span>' : ""}</div>
          <div class="hh-item-meta muted">${escapeHtml(hh.players?.name || "Unknown")} &middot; ${hh.fridays?.game_date || ""} &middot; ${escapeHtml(hh.fridays?.seasons?.name || "")}</div>
        </li>
      `;
        })
        .join("");
    }
 
    refreshPublicView();
 
    // ------------------------------------------------------------------
    // Utility
    // ------------------------------------------------------------------
    function escapeHtml(str) {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    }
 
