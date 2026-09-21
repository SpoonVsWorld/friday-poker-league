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
    const fridayLocationInput = document.getElementById("friday-location-input");
    const saveLocationBtn = document.getElementById("save-location-btn");
    const locationError = document.getElementById("location-error");
    const fridayPotPlayersInput = document.getElementById("friday-pot-players-input");
    const savePotBtn = document.getElementById("save-pot-btn");
    const potError = document.getElementById("pot-error");
    const potTotalBuyins = document.getElementById("pot-total-buyins");
    const potTotalDollars = document.getElementById("pot-total-dollars");
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
    const nextGameBanner = document.getElementById("next-game-banner");
    const nextGameText = document.getElementById("next-game-text");
    const publicPotDollars = document.getElementById("public-pot-dollars");
    const publicPotMeta = document.getElementById("public-pot-meta");
    const footerLastUpdated = document.getElementById("footer-last-updated");
 
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
 
    const statTotalViews = document.getElementById("stat-total-views");
    const statWeekViews = document.getElementById("stat-week-views");
    const resetViewsBtn = document.getElementById("reset-views-btn");
    const statsError = document.getElementById("stats-error");
 
    const adminProblemList = document.getElementById("admin-problem-list");
    const adminCommentList = document.getElementById("admin-comment-list");
    const feedbackAdminError = document.getElementById("feedback-admin-error");
 
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackNameInput = document.getElementById("feedback-name-input");
    const feedbackMessageInput = document.getElementById("feedback-message-input");
    const feedbackFormMsg = document.getElementById("feedback-form-msg");
    const publicCommentList = document.getElementById("public-comment-list");
 
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
      await Promise.all([loadPlayers(), loadSeasons(), loadPlayersForHighHand(), loadHighHandsAdmin(), loadSiteStats(), loadFeedbackAdmin()]);
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
 
    // Check for an already-active session on page load. Only log a "view"
    // when nobody is logged in as admin, so the counter reflects visitors
    // checking the app rather than the admin's own repeated visits.
    supabaseClient.auth.getSession().then(({ data }) => {
      if (data.session) {
        showLoggedIn(data.session);
      } else {
        supabaseClient.from("page_views").insert({}).then(() => {});
      }
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
      loadPotTotal();
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
 
    saveLocationBtn.addEventListener("click", async () => {
      locationError.textContent = "";
      const date = fridayDateInput.value;
      if (!date) {
        locationError.textContent = "Pick a date first.";
        return;
      }
      if (!activeSeason) {
        locationError.textContent = "Create and activate a season first.";
        return;
      }
 
      const location = fridayLocationInput.value.trim() || null;
 
      if (!currentFridayId) {
        const { data: inserted, error: insertErr } = await supabaseClient
          .from("fridays")
          .insert({ season_id: activeSeason.id, game_date: date, status: "scheduled", location })
          .select()
          .single();
        if (insertErr) {
          locationError.textContent = "Could not save location: " + insertErr.message;
          return;
        }
        currentFridayId = inserted.id;
      } else {
        const { error: updateErr } = await supabaseClient
          .from("fridays")
          .update({ location })
          .eq("id", currentFridayId);
        if (updateErr) {
          locationError.textContent = "Could not save location: " + updateErr.message;
          return;
        }
      }
 
      await loadResultsForSelectedDate();
      await loadFridayList();
      refreshPublicView();
 
      locationError.classList.add("ok");
      locationError.textContent = "Location saved.";
      setTimeout(() => {
        locationError.textContent = "";
        locationError.classList.remove("ok");
      }, 2500);
    });
 
    savePotBtn.addEventListener("click", async () => {
      potError.textContent = "";
      potError.classList.remove("ok");
      const date = fridayDateInput.value;
      if (!date) {
        potError.textContent = "Pick a date first.";
        return;
      }
      if (!activeSeason) {
        potError.textContent = "Create and activate a season first.";
        return;
      }
 
      const raw = fridayPotPlayersInput.value.trim();
      if (raw === "") {
        potError.textContent = "Enter how many players played.";
        return;
      }
      const potPlayers = Number(raw);
      if (!Number.isInteger(potPlayers) || potPlayers < 0) {
        potError.textContent = "Enter a whole number, 0 or higher.";
        return;
      }
 
      if (!currentFridayId) {
        const { data: inserted, error: insertErr } = await supabaseClient
          .from("fridays")
          .insert({ season_id: activeSeason.id, game_date: date, status: "scheduled", pot_players: potPlayers })
          .select()
          .single();
        if (insertErr) {
          potError.textContent = "Could not save player count: " + insertErr.message;
          return;
        }
        currentFridayId = inserted.id;
      } else {
        const { error: updateErr } = await supabaseClient
          .from("fridays")
          .update({ pot_players: potPlayers })
          .eq("id", currentFridayId);
        if (updateErr) {
          potError.textContent = "Could not save player count: " + updateErr.message;
          return;
        }
      }
 
      await loadResultsForSelectedDate();
      await loadFridayList();
      loadPotTotal();
 
      potError.classList.add("ok");
      potError.textContent = "Player count saved.";
      setTimeout(() => {
        potError.textContent = "";
        potError.classList.remove("ok");
      }, 2500);
    });
 
    async function loadPotTotal() {
      if (!activeSeason) {
        potTotalBuyins.textContent = "—";
        potTotalDollars.textContent = "—";
        return;
      }
 
      const { data, error } = await supabaseClient
        .from("fridays")
        .select("pot_players")
        .eq("season_id", activeSeason.id);
 
      if (error) {
        potTotalBuyins.textContent = "—";
        potTotalDollars.textContent = "—";
        return;
      }
 
      const totalBuyins = (data || []).reduce((sum, f) => sum + (f.pot_players || 0), 0);
      potTotalBuyins.textContent = totalBuyins;
      potTotalDollars.textContent = "$" + (totalBuyins * 5).toLocaleString();
    }
 
    async function loadResultsForSelectedDate() {
      resultsError.textContent = "";
      locationError.textContent = "";
      potError.textContent = "";
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
        fridayLocationInput.value = "";
        fridayPotPlayersInput.value = "";
        fridayStatusLine.textContent = "Not yet recorded — fill in results below and click Save.";
        return;
      }
 
      currentFridayId = friday.id;
      fridayLocationInput.value = friday.location || "";
      fridayPotPlayersInput.value = friday.pot_players ?? "";
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
      const location = fridayLocationInput.value.trim() || null;
      const potPlayersRaw = fridayPotPlayersInput.value.trim();
      const potPlayers = potPlayersRaw === "" ? null : Number(potPlayersRaw);
      let fridayId = currentFridayId;
      if (!fridayId) {
        const { data: inserted, error: insertErr } = await supabaseClient
          .from("fridays")
          .insert({ season_id: activeSeason.id, game_date: date, status: "completed", location, pot_players: potPlayers })
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
          .update({ status: "completed", location, pot_players: potPlayers })
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
      loadPotTotal();
    });
 
    cancelFridayBtn.addEventListener("click", async () => {
      resultsError.textContent = "";
      const date = fridayDateInput.value;
      if (!date) {
        resultsError.textContent = "Pick a date first.";
        return;
      }
      if (
        !window.confirm(
          "Mark this Friday as cancelled / no game? Any recorded results and pot player count for it will be removed."
        )
      ) {
        return;
      }
 
      const location = fridayLocationInput.value.trim() || null;
      let fridayId = currentFridayId;
      if (!fridayId) {
        const { data: inserted, error: insertErr } = await supabaseClient
          .from("fridays")
          .insert({ season_id: activeSeason.id, game_date: date, status: "cancelled", location, pot_players: null })
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
          .update({ status: "cancelled", location, pot_players: null })
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
      loadPotTotal();
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
 
    // Realistic flipping card graphics, used just for the featured
    // "Season Best" high hand callout.
    const REAL_CARD_BACK_SVG = `
      <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="96" height="136" rx="10" fill="#123626" stroke="#d4af37" stroke-width="3"/>
        <rect x="10" y="10" width="80" height="120" rx="6" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="2 3"/>
        <text x="50" y="82" font-size="42" text-anchor="middle" fill="#d4af37">♠</text>
      </svg>
    `;
 
    function realCardFrontSvg(rank, suit) {
      const rankLabel = rank === "T" ? "10" : rank;
      const symbol = SUIT_SYMBOL[suit] || suit;
      const color = SUIT_COLOR[suit] === "red" ? "#c0392b" : "#1a1a1a";
      const rankFontSize = rankLabel.length > 1 ? 16 : 21;
      return `
        <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="96" height="136" rx="10" fill="#fdfdfd" stroke="#1a1a1a" stroke-width="3"/>
          <text x="11" y="27" font-family="Georgia, 'Times New Roman', serif" font-size="${rankFontSize}" font-weight="700" fill="${color}">${escapeHtml(rankLabel)}</text>
          <text x="10.5" y="44" font-size="16" fill="${color}">${symbol}</text>
          <text x="50" y="94" font-size="56" text-anchor="middle" fill="${color}">${symbol}</text>
        </svg>
      `;
    }
 
    function renderRealCard(cardStr, index) {
      const rank = cardStr.slice(0, -1);
      const suit = cardStr.slice(-1);
      return `
        <span class="real-card">
          <span class="real-card-flip" style="animation-delay:${(index * 0.12).toFixed(2)}s">
            <span class="card-face card-front">${realCardFrontSvg(rank, suit)}</span>
            <span class="card-face card-back">${REAL_CARD_BACK_SVG}</span>
          </span>
        </span>
      `;
    }
 
    function renderRealHandCards(cards) {
      return cards.map((c, i) => renderRealCard(c, i)).join("");
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
    // Site Stats — a simple page-view counter, admin-only.
    // ------------------------------------------------------------------
 
    async function loadSiteStats() {
      statsError.textContent = "";
 
      const { count: totalCount, error: totalErr } = await supabaseClient
        .from("page_views")
        .select("*", { count: "exact", head: true });
 
      if (totalErr) {
        statsError.textContent = "Could not load view stats: " + totalErr.message;
        return;
      }
 
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const { count: weekCount, error: weekErr } = await supabaseClient
        .from("page_views")
        .select("*", { count: "exact", head: true })
        .gte("viewed_at", oneDayAgo);
 
      statTotalViews.textContent = totalCount ?? 0;
      statWeekViews.textContent = weekErr ? "—" : weekCount ?? 0;
    }
 
    resetViewsBtn.addEventListener("click", async () => {
      statsError.textContent = "";
      if (
        !window.confirm(
          "Reset the view counter to zero? This permanently deletes all recorded page views and cannot be undone."
        )
      ) {
        return;
      }
 
      const { error } = await supabaseClient.from("page_views").delete().gt("viewed_at", "1970-01-01");
      if (error) {
        statsError.textContent = "Could not reset counter: " + error.message;
        return;
      }
      loadSiteStats();
    });
 
    // ------------------------------------------------------------------
    // Feedback — public comments (visible to everyone) and problem
    // reports (admin-only), both submitted from the public site.
    // ------------------------------------------------------------------
 
    function renderFeedbackRow(item) {
      const when = new Date(item.created_at).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      const who = item.name ? escapeHtml(item.name) : "Anonymous";
      return `
        <li class="feedback-row" data-id="${item.id}">
          <div class="feedback-info">
            <div class="feedback-message">${escapeHtml(item.message)}</div>
            <div class="feedback-meta">${who} &middot; ${when}</div>
          </div>
          <div class="row-actions">
            <button class="btn btn-small btn-danger delete-feedback-btn" data-id="${item.id}" type="button">Delete</button>
          </div>
        </li>
      `;
    }
 
    async function loadFeedbackAdmin() {
      feedbackAdminError.textContent = "";
      const { data, error } = await supabaseClient
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });
 
      if (error) {
        feedbackAdminError.textContent = "Could not load feedback: " + error.message;
        return;
      }
 
      const problems = (data || []).filter((f) => f.type === "problem");
      const comments = (data || []).filter((f) => f.type === "comment");
 
      adminProblemList.innerHTML = problems.length
        ? problems.map(renderFeedbackRow).join("")
        : '<li class="muted">No problems reported.</li>';
 
      adminCommentList.innerHTML = comments.length
        ? comments.map(renderFeedbackRow).join("")
        : '<li class="muted">No comments yet.</li>';
 
      document.querySelectorAll(".delete-feedback-btn").forEach((btn) => {
        btn.addEventListener("click", async () => {
          if (!window.confirm("Delete this permanently?")) return;
          const { error: delErr } = await supabaseClient.from("feedback").delete().eq("id", btn.dataset.id);
          if (delErr) {
            feedbackAdminError.textContent = "Could not delete: " + delErr.message;
            return;
          }
          loadFeedbackAdmin();
          loadPublicComments();
        });
      });
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
 
      rows.forEach((r, i) => {
        r.rank = i + 1;
        r.avg = r.played ? (r.points / r.played).toFixed(1) : "";
      });
 
      const csv = rowsToCSV(
        [
          { key: "rank", label: "Rank" },
          { key: "name", label: "Player" },
          { key: "points", label: "Points" },
          { key: "played", label: "Fridays Played" },
          { key: "avg", label: "Avg Points / Game" },
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
      loadNextGameBanner();
      loadPublicComments();
      loadPublicPot();
      loadLastUpdated();
    }
 
    async function loadLastUpdated() {
      const { data, error } = await supabaseClient
        .from("app_meta")
        .select("last_updated")
        .eq("id", 1)
        .maybeSingle();
 
      if (error || !data) {
        footerLastUpdated.textContent = "";
        return;
      }
 
      const when = new Date(data.last_updated).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
      footerLastUpdated.textContent = `Data last updated: ${when}`;
    }
 
    async function loadPublicPot() {
      const { data: seasons, error: seasonErr } = await supabaseClient
        .from("seasons")
        .select("*")
        .eq("is_active", true)
        .limit(1);
 
      if (seasonErr || !seasons || !seasons.length) {
        publicPotDollars.textContent = "$0";
        publicPotMeta.textContent = "No active season right now.";
        return;
      }
 
      const { data: fridays, error } = await supabaseClient
        .from("fridays")
        .select("pot_players")
        .eq("season_id", seasons[0].id);
 
      if (error) {
        publicPotDollars.textContent = "—";
        publicPotMeta.textContent = "Could not load the pot total.";
        return;
      }
 
      const totalBuyins = (fridays || []).reduce((sum, f) => sum + (f.pot_players || 0), 0);
      publicPotDollars.textContent = "$" + (totalBuyins * 5).toLocaleString();
      publicPotMeta.textContent = `${totalBuyins} player buy-in${totalBuyins === 1 ? "" : "s"} so far this season — $5 each`;
    }
 
    async function loadPublicComments() {
      const { data, error } = await supabaseClient
        .from("feedback")
        .select("*")
        .eq("type", "comment")
        .order("created_at", { ascending: false });
 
      if (error) {
        publicCommentList.innerHTML = `<li class="muted">Could not load comments: ${escapeHtml(error.message)}</li>`;
        return;
      }
 
      publicCommentList.innerHTML = (data || []).length
        ? data
            .map((c) => {
              const when = new Date(c.created_at).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              });
              const who = c.name ? escapeHtml(c.name) : "Anonymous";
              return `
            <li class="feedback-row">
              <div class="feedback-info">
                <div class="feedback-message">${escapeHtml(c.message)}</div>
                <div class="feedback-meta">${who} &middot; ${when}</div>
              </div>
            </li>
          `;
            })
            .join("")
        : '<li class="muted">No comments yet — be the first!</li>';
    }
 
    feedbackForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      feedbackFormMsg.textContent = "";
      feedbackFormMsg.classList.remove("error", "ok");
 
      const message = feedbackMessageInput.value.trim();
      if (!message) return;
 
      const name = feedbackNameInput.value.trim() || null;
      const type = document.querySelector('input[name="feedback-type"]:checked').value;
 
      const { error } = await supabaseClient.from("feedback").insert({ type, name, message });
 
      if (error) {
        feedbackFormMsg.classList.add("error");
        feedbackFormMsg.textContent = "Could not submit: " + error.message;
        return;
      }
 
      feedbackForm.reset();
      feedbackFormMsg.classList.add("ok");
      feedbackFormMsg.textContent = type === "problem" ? "Thanks — Spoon will see this." : "Thanks for the comment!";
      setTimeout(() => {
        feedbackFormMsg.textContent = "";
        feedbackFormMsg.classList.remove("ok");
      }, 3000);
 
      if (type === "comment") loadPublicComments();
    });
 
    async function loadNextGameBanner() {
      const { data: seasons, error: seasonErr } = await supabaseClient
        .from("seasons")
        .select("*")
        .eq("is_active", true)
        .limit(1);
 
      if (seasonErr || !seasons || !seasons.length) {
        nextGameBanner.hidden = true;
        return;
      }
 
      const today = new Date().toISOString().slice(0, 10);
 
      const { data: fridays, error } = await supabaseClient
        .from("fridays")
        .select("game_date, location")
        .eq("season_id", seasons[0].id)
        .neq("status", "cancelled")
        .gte("game_date", today)
        .not("location", "is", null)
        .order("game_date", { ascending: true })
        .limit(1);
 
      if (error || !fridays || !fridays.length || !fridays[0].location) {
        nextGameBanner.hidden = true;
        return;
      }
 
      const next = fridays[0];
      const dateLabel = new Date(next.game_date + "T00:00:00").toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      nextGameText.textContent = `${dateLabel} — ${next.location}`;
      nextGameBanner.hidden = false;
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
 
    // ------------------------------------------------------------------
    // Sound effects — synthesized sounds (no audio files to upload),
    // built with layered tones/noise plus a touch of algorithmic
    // reverb so they read as "real" instead of flat beeps. They only
    // ever play from directly inside a tap, since that's the only
    // time phones allow a web page to make sound.
    // ------------------------------------------------------------------
    let audioCtx = null;
    let audioGraph = null;
 
    function getAudioCtx() {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === "suspended") audioCtx.resume();
      return audioCtx;
    }
 
    // A synthetic "impulse response" (decaying noise) fed into a
    // ConvolverNode gives a cheap, file-free room reverb.
    function createImpulseResponse(ctx, duration, decay) {
      const rate = ctx.sampleRate;
      const length = Math.floor(rate * duration);
      const impulse = ctx.createBuffer(2, length, rate);
      for (let ch = 0; ch < 2; ch++) {
        const data = impulse.getChannelData(ch);
        for (let i = 0; i < length; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
        }
      }
      return impulse;
    }
 
    // Shared output chain every sound routes through: a dry path and
    // a reverb ("wet") path, both glued together by a limiter so
    // nothing clips.
    function getAudioGraph(ctx) {
      if (audioGraph) return audioGraph;
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -20;
      compressor.knee.value = 24;
      compressor.ratio.value = 4;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.18;
      compressor.connect(ctx.destination);
 
      const convolver = ctx.createConvolver();
      convolver.buffer = createImpulseResponse(ctx, 1.1, 3.2);
      const wetSend = ctx.createGain();
      wetSend.gain.value = 0.32;
      wetSend.connect(convolver);
      convolver.connect(compressor);
 
      audioGraph = { compressor, wetSend };
      return audioGraph;
    }
 
    // Connects a gain node to both the dry and reverb paths.
    function routeToOutput(ctx, gainNode) {
      const { compressor, wetSend } = getAudioGraph(ctx);
      gainNode.connect(compressor);
      gainNode.connect(wetSend);
    }
 
    function playChipClick() {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
 
      // Sharp plastic "clack" — bandpassed noise transient.
      const bufferSize = Math.floor(ctx.sampleRate * 0.045);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 6);
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 3200;
      bp.Q.value = 1.4;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.55, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
      noise.connect(bp).connect(noiseGain);
 
      // Short damped "thock" underneath, for a bit of body/resonance.
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.05);
      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.16, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(oscGain);
 
      routeToOutput(ctx, noiseGain);
      routeToOutput(ctx, oscGain);
 
      noise.start(now);
      osc.start(now);
      osc.stop(now + 0.07);
    }
 
    function playCardSnap() {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
 
      const bufferSize = Math.floor(ctx.sampleRate * 0.08);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 4);
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.setValueAtTime(2600, now);
      bp.frequency.exponentialRampToValueAtTime(1300, now + 0.07);
      bp.Q.value = 0.9;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
 
      noise.connect(bp).connect(gain);
      routeToOutput(ctx, gain);
      noise.start(now);
    }
 
    // The Pot tab plays an actual recorded cash-register sound
    // (sounds/cha-ching.mp3) rather than a synthesized one — cached
    // after the first play so repeat taps are instant.
    let chaChingAudio = null;
    function playCoinCascade() {
      if (!chaChingAudio) {
        chaChingAudio = new Audio("sounds/cha-ching.mp3");
        chaChingAudio.volume = 0.85;
      }
      chaChingAudio.currentTime = 0;
      chaChingAudio.play().catch(() => {});
    }
 
    // The High Hands tab plays real recorded card sounds (card fan +
    // pack-open, layered) instead of the synthesized card-snap — same
    // cache-after-first-play pattern as the Pot tab's cha-ching sound.
    let cardFanAudio = null;
    let cardsPackOpenAudio = null;
    function playHighHandReveal() {
      if (!cardFanAudio) {
        cardFanAudio = new Audio("sounds/card-fan.mp3");
        cardFanAudio.volume = 0.8;
      }
      if (!cardsPackOpenAudio) {
        cardsPackOpenAudio = new Audio("sounds/cards-pack-open.mp3");
        cardsPackOpenAudio.volume = 0.8;
      }
      cardFanAudio.currentTime = 0;
      cardFanAudio.play().catch(() => {});
      cardsPackOpenAudio.currentTime = 0;
      cardsPackOpenAudio.play().catch(() => {});
    }
 
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        if (tab === "pot") playCoinCascade();
        else if (tab === "highhands") playHighHandReveal();
        else if (tab === "blackjack") playCardSnap();
        else playChipClick();
        switchPublicTab(tab);
      });
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
        standingsBody.innerHTML = '<tr><td colspan="7" class="muted">No results recorded yet this season.</td></tr>';
        return;
      }
 
      const { data: results, error: resultsErr } = await supabaseClient
        .from("results")
        .select("player_id, placement, bounty_winner, total_points")
        .in("friday_id", fridayIds);
 
      if (resultsErr) {
        standingsBody.innerHTML = `<tr><td colspan="7" class="muted">Could not load results: ${escapeHtml(resultsErr.message)}</td></tr>`;
        return;
      }
 
      const { data: players, error: playersErr } = await supabaseClient.from("players").select("id, name");
      if (playersErr) {
        standingsBody.innerHTML = `<tr><td colspan="7" class="muted">Could not load players: ${escapeHtml(playersErr.message)}</td></tr>`;
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
        standingsBody.innerHTML = '<tr><td colspan="7" class="muted">No results recorded yet this season.</td></tr>';
        return;
      }
 
      const leaderPoints = rows[0].points;
 
      standingsBody.innerHTML = rows
        .map(
          (r, i) => `
        <tr class="clickable-row" data-player-id="${r.playerId}">
          <td>${i + 1}</td>
          <td>${r.points > 0 && r.points === leaderPoints ? '<span class="crown" title="Leader">👑</span> ' : ""}${escapeHtml(r.name)}</td>
          <td>${r.points}</td>
          <td>${r.played}</td>
          <td>${r.played ? (r.points / r.played).toFixed(1) : "—"}</td>
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
          <span>${f.game_date} <span class="muted">(${escapeHtml(f.seasons?.name || "")})</span>${
            f.location ? `<br><span class="muted">📍 ${escapeHtml(f.location)}</span>` : ""
          }</span>
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
          <div class="stat-box"><div class="value">${played ? (totalPoints / played).toFixed(1) : "—"}</div><div class="label">Avg Pts / Game</div></div>
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
      fridayDetailMeta.textContent = `${friday.seasons?.name || ""} — ${statusLabel}${
        friday.location ? ` — 📍 ${friday.location}` : ""
      }`;
 
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
              <div class="hh-callout-cards">${renderRealHandCards(best.cards)}</div>
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
 
    // ------------------------------------------------------------------
    // Random Roaster Machine — a just-for-fun feature. Spins three reels,
    // picks a random active player from the real player list, and
    // generates a procedural, offline roast. Nothing here touches
    // scoring, results, or any other real data — it only reads the
    // player list and writes nothing back.
    // ------------------------------------------------------------------
    const SLOT_SYMBOLS = ["♠", "♥", "♦", "♣", "🃏", "🎰", "🔥", "💀", "🍺", "💸"];
 
    const slotReelEls = [
      document.getElementById("slot-reel-1"),
      document.getElementById("slot-reel-2"),
      document.getElementById("slot-reel-3"),
    ];
    const slotSpinBtn = document.getElementById("slot-spin-btn");
    const slotJackpotBanner = document.getElementById("slot-jackpot-banner");
    const slotFireworksCanvas = document.getElementById("slot-fireworks-canvas");
    const slotResultPlayer = document.getElementById("slot-result-player");
    const slotResultInsult = document.getElementById("slot-result-insult");
    const slotReplayBtn = document.getElementById("slot-replay-btn");
    const slotErrorEl = document.getElementById("slot-error");
    let lastSlotInsult = "";
 
    // Reads the insult out loud with the browser's built-in speech
    // synthesis. Purely a nice-to-have — if the browser doesn't support
    // it, or speaking fails for any reason, we just stay silent instead
    // of breaking the rest of the machine.
    function speakSlotInsult(text) {
      if (!("speechSynthesis" in window) || !text) return;
      try {
        const speakable = text
          .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
          .replace(/\s+/g, " ")
          .trim();
        if (!speakable) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(speakable);
        utterance.rate = 1;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        // Speech is optional; ignore failures silently.
      }
    }
 
    if (slotReplayBtn) {
      slotReplayBtn.addEventListener("click", () => speakSlotInsult(lastSlotInsult));
    }
 
    // Setup + punchline halves, combined and randomized, so the same
    // joke doesn't show up every time. {name} is swapped for the
    // chosen player's name in both halves.
    const INSULT_COMPONENTS = {
      playful: {
        setups: [
          "{name} plays poker like the cards personally offended them",
          "{name} has the confidence of a champion and the strategy of a confused tourist",
          "{name} bluffs so badly that even the chips look nervous",
          "{name}'s poker face has all the mystery of a screen door",
          "{name} treats every hand like a coin flip and every coin flip like a life decision",
          "{name} folds more than a laundromat on a Sunday",
          "{name} calls every bet like it's a dare, not a decision",
          "{name} reads the table about as well as a menu in the dark",
          "{name} stares at their cards like they're doing long division",
          "{name} shuffles like it's an Olympic event and plays like it isn't",
          "{name} has a tell so obvious it should come with subtitles",
          "{name} approaches the river card like it owes them an apology",
          "{name} counts chips slower than a toddler counts to ten",
          "{name} raises with the enthusiasm of someone who has never seen a flop before",
          "{name} plays each hand like it's a surprise party for their own money",
          "{name} checks their cards more times than a nervous flyer checks the exit rows",
          "{name} has the table talk of a motivational speaker and the results of an infomercial",
          "{name} treats a pair of twos like a royal flush",
          "{name} negotiates with the deck like it's going to change its mind",
          "{name} plays so slow the dealer could retire between hands",
          "{name} goes into the tank longer than a submarine crew",
          "{name} celebrates small pots like they just won the lottery",
          "{name} has more \"just one more hand\" than a Vegas buffet has plates",
          "{name} treats every bluff like a surprise party nobody wanted",
          "{name} plays with the focus of someone watching TV in the next room",
          "{name} squints at the flop like it's written in a foreign language",
          "{name} treats every river card like a plot twist nobody asked for",
          "{name} has more nervous energy than a rookie on their first hand",
          "{name} plays it so safe the deck could nap between turns",
          "{name} peeks at their cards like they're hoping for a different answer",
          "{name} bets like they're rounding to the nearest guess",
          "{name} has the poker instincts of someone who just learned the rules five minutes ago",
          "{name} treats a small pair like it's already the winning hand",
          "{name} announces every move like it's a big reveal",
          "{name} plays with the energy of someone who just remembered they left the stove on",
          "{name} shuffles chips like a nervous habit, not a flex",
          "{name} takes so long to decide the ice in everyone's drink melts",
          "{name} calls every raise on pure vibes and good intentions",
          "{name} has a poker strategy built entirely on gut feelings and snack breaks",
          "{name} reacts to every card flip like it's the season finale",
          "{name} plays defense like the pot is a hot stove",
          "{name} treats bluffing like a party trick they haven't quite mastered",
          "{name} double-checks their cards more than a proofreader",
          "{name} has the patience of a saint and the results of a rookie",
          "{name} plays like every hand is their Super Bowl moment",
          "{name} folds with the drama of a soap opera exit",
          "{name} treats small talk at the table like a distraction tactic — mostly on themselves",
          "{name} has never once bluffed convincingly, and everyone loves them for it",
          "{name} plays like the deck is just suggesting ideas, not giving orders",
          "{name} approaches every hand with the seriousness of a chess grandmaster and the results of tic-tac-toe",
        ],
        punchlines: [
          "— and somehow still asks for a rebuy.",
          "— but hey, at least the snacks are good.",
          "— truly a masterclass in optimism.",
          "— the rest of the table just nods and smiles.",
          "— it's honestly kind of impressive.",
          "— everyone respects the chaos.",
          "— and calls it 'strategy.'",
          "— bless their heart.",
          "— the dealer's seen it all and still can't look away.",
          "— it's a whole personality at this point.",
          "— somewhere, a poker coach is quietly crying.",
          "— and yet somehow they're smiling the whole time.",
          "— the table's entertainment budget just went up.",
          "— honestly, commitment like that deserves a trophy.",
          "— nobody has the heart to tell them.",
          "— it's not a strategy, it's a personality trait.",
          "— the chips just keep finding new owners.",
          "— and they'll do it again next hand, guaranteed.",
          "— somehow it works about as often as it doesn't.",
          "— the whole table's taking notes on what not to do.",
          "— pure chaos, zero regrets.",
          "— a legend in their own mind.",
          "— the snacks table has seen more strategy.",
          "— and they'll tell the story like they won.",
          "— everyone's just here for the show at this point.",
          "— the table's seen worse, but not by much.",
          "— it's basically performance art at this point.",
          "— and everyone's here for the reveal.",
          "— a slow and steady approach to absolutely nothing.",
          "— the deck just isn't cooperating tonight, apparently.",
          "— precision isn't really the goal here.",
          "— and somehow it's endearing every single time.",
          "— the confidence-to-results ratio is truly something.",
          "— big buildup, smaller payoff.",
          "— everyone's just along for the ride at this point.",
          "— a nervous habit that's become a whole bit.",
          "— patience is a virtue, apparently a very slow one.",
          "— vibes over strategy, every single time.",
          "— snack breaks are doing more work than the strategy.",
          "— the drama alone deserves a standing ovation.",
          "— the pot's never really in danger.",
          "— the trick's still a work in progress.",
          "— the cards haven't changed, promise.",
          "— saintly patience, rookie numbers.",
          "— the stakes were never actually that high.",
          "— an exit worthy of its own credits scene.",
          "— mostly talking themselves out of good hands.",
          "— unconvincing and lovable in equal measure.",
          "— the deck's just making suggestions tonight.",
          "— grandmaster energy, tic-tac-toe outcomes.",
        ],
      },
      savage: {
        setups: [
          "{name} has donated so many chips to this table it should be tax-deductible",
          "{name} plays poker like the strategy guide got left at home",
          "{name}'s poker face has all the secrecy of a billboard",
          "{name} goes all-in with the confidence of someone who has never once won",
          "{name} has bluffed their way into exactly zero good outcomes tonight",
          "{name} treats the pot like it's a charity they personally started",
          "{name} plays every hand like it owes them money",
          "{name}'s betting pattern has more red flags than a parade",
          "{name} has the card sense of a houseplant and twice the stillness",
          "{name} plays so predictably the deck could deal itself",
          "{name} has folded winning hands more times than they'd like to admit",
          "{name}'s bankroll is on a first-name basis with the dealer's tip jar",
          "{name} calls every raise like they're allergic to thinking",
          "{name} has lost more pots tonight than they've won all year",
          "{name} plays like the odds are just a rumor",
          "{name}'s all-in face and their losing face are the exact same face",
          "{name} has turned \"pot committed\" into a lifestyle",
          "{name} bluffs like they're trying to lose on purpose",
          "{name} has the table position of a pro and the results of a rookie",
          "{name} keeps chasing draws that left the building an hour ago",
          "{name} plays every session like it's a going-out-of-business sale",
          "{name}'s stack is shrinking faster than their excuses can keep up",
          "{name} has never met a bad beat story they didn't cause themselves",
          "{name} treats bankroll management like a suggestion, not a rule",
          "{name} plays with the discipline of a toddler in a candy aisle",
          "{name} has turned bad reads into a full-time occupation",
          "{name} plays like the odds personally wronged them and they're getting even",
          "{name}'s stack has been on a one-way trip to the middle of the table all night",
          "{name} calls raises like folding is a personal insult",
          "{name} has the risk tolerance of someone with nothing left to lose, and it shows",
          "{name} treats every session like a warm-up for an even bigger loss",
          "{name}'s bluffs have a tell you can see from across the room",
          "{name} plays every hand like the last one didn't teach them anything",
          "{name} has the patience of a saint and the bankroll of a cautionary tale",
          "{name} keeps chasing the one hand that's never actually going to hit",
          "{name}'s betting size doesn't match their actual conviction, or their actual hand",
          "{name} treats every fold like a personal failure instead of a smart choice",
          "{name} has out-bluffed themselves more times tonight than anyone else at the table",
          "{name} plays like the deck owes them an apology it's never going to give",
          "{name}'s confidence and their win rate have officially stopped talking to each other",
          "{name} keeps making the same read wrong, with impressive consistency",
          "{name} has donated to this table so generously it deserves a plaque",
          "{name} treats every pot like a hill worth dying on, repeatedly",
          "{name}'s strategy tonight has been mostly hope with a side of denial",
          "{name} plays like the river card is going to personally apologize for the last one",
          "{name} has the table read of someone who just walked in",
          "{name} keeps doubling down on decisions that already cost them once",
          "{name}'s all-in decisions have the accuracy of a coin that's rigged against them",
          "{name} treats the short stack life like a lifestyle choice, not a warning sign",
          "{name} has made peace with losing faster than anyone should be comfortable with",
        ],
        punchlines: [
          "— and the table thanks them for their service.",
          "— send flowers, it's basically a funeral.",
          "— someone start a GoFundMe.",
          "— the chips have seen better days, and so has the ego.",
          "— it's a lifestyle choice at this point.",
          "— truly dedicated to the craft of losing.",
          "— at this rate they'll need a loan by midnight.",
          "— a real inspiration to bad decisions everywhere.",
          "— the rest of the table is basically playing charity poker now.",
          "— someone alert the local news, it's that bad.",
          "— the chips aren't just gone, they're on vacation.",
          "— this is why we can't have nice things.",
          "— a cautionary tale, live and in person.",
          "— the house doesn't even need a rake tonight.",
          "— legendary, in the worst possible way.",
          "— the other players are just here to collect.",
          "— somebody get this on tape for next year's highlight reel.",
          "— the buy-in was really more of a donation.",
          "— it's not gambling if you always lose, it's a subscription.",
          "— the felt has seen less damage from a spilled drink.",
          "— even the deck feels bad at this point.",
          "— future {name} is going to have questions for tonight's {name}.",
          "— the dealer's starting to feel guilty taking the chips.",
          "— someone check if they're okay, emotionally and financially.",
          "— a masterclass in how not to do this.",
          "— a résumé nobody asked to see.",
          "— the deck's just doing its job, though.",
          "— one-way ticket, no refunds.",
          "— folding's not the insult here.",
          "— nothing left to lose tends to show.",
          "— the real loss is still coming.",
          "— subtlety left the building hours ago.",
          "— some lessons just don't land.",
          "— saintly patience, tragic numbers.",
          "— that hand isn't coming, and everyone knows it but them.",
          "— conviction and hand strength, both missing.",
          "— a fold is a gift to your own chip stack.",
          "— self-inflicted, and thoroughly documented.",
          "— the deck owes nobody anything.",
          "— a breakup nobody saw coming, except everybody.",
          "— consistency is a virtue, technically.",
          "— someone get the engraving started.",
          "— the hill was never worth it, and neither was the last one.",
          "— hope's doing a lot of unpaid overtime.",
          "— the river doesn't apologize, it never has.",
          "— first day at the table energy, every day.",
          "— the definition of insanity, basically.",
          "— heads they lose, tails they also lose.",
          "— a lifestyle nobody should aspire to.",
          "— acceptance this fast should probably concern someone.",
        ],
      },
      adult: {
        setups: [
          "{name} plays poker like their fourth beer made all the decisions",
          "{name}'s bankroll and their liver are both filing for early retirement tonight",
          "{name} bets like the whiskey is doing the math",
          "{name} has made more bad calls tonight than a drunk dial at 2am",
          "{name}'s strategy tonight has been 90% vibes and 10% regret",
          "{name} keeps going all-in like the rent isn't due Monday",
          "{name} is one bad beat away from selling something they'll miss tomorrow",
          "{name} is playing this hand like it's the last bad decision they'll make tonight — spoiler, it isn't",
          "{name} has had enough drinks tonight to make every hand feel like a great idea",
          "{name}'s poker strategy and their bar tab are both spiraling at the same rate",
          "{name} is negotiating with the dealer like last call is in five minutes",
          "{name} treats every raise like a toast they forgot to finish",
          "{name} is one more round away from explaining this loss to somebody tomorrow",
          "{name}'s chip stack is disappearing faster than the appetizers",
          "{name} plays like tomorrow's problems are a completely different person's job",
          "{name} has convinced themselves this hand is \"basically an investment\"",
          "{name} is one bad call away from a very awkward conversation with their bank app",
          "{name}'s judgment left the table two rounds ago and hasn't come back",
          "{name} keeps saying \"one more hand\" like it's a New Year's resolution",
          "{name} is playing this pot like it owes them rent money",
          "{name} has the financial confidence of someone who hasn't checked their balance in weeks",
          "{name}'s decision-making tonight is being run entirely by the open bar",
          "{name} is about to learn the hard way what \"pot committed\" really means",
          "{name} keeps doubling down like the ATM in the other room isn't a warning sign",
          "{name} is playing so loose tonight even the ice in their drink looks concerned",
          "{name}'s tab and their chip stack are in a race to zero, and the tab's winning",
          "{name} keeps ordering \"one more\" like it applies to drinks and bad calls equally",
          "{name} is playing this hand like the bar tab isn't going to be a group project tomorrow",
          "{name}'s filter left sometime around the second round and never came back",
          "{name} is one more shot away from explaining tonight's losses in great detail to a total stranger",
          "{name} has officially entered the \"it's fine, everything's fine\" phase of the night",
          "{name}'s betting decisions and their empty glass are directly correlated at this point",
          "{name} is playing like the overdraft alert is just a suggestion",
          "{name} keeps toasting to hands they haven't actually won yet",
          "{name} is one bad beat away from a very public financial confession",
          "{name}'s strategy tonight reads like a highlight reel of things not to do sober",
          "{name} has convinced the whole table this next bet is \"basically a sure thing\"",
          "{name} is treating the rebuy like a round of drinks, not a real decision",
          "{name}'s judgment and their empty chip rack arrived at the same time",
          "{name} keeps calling it \"one more hand\" with the same conviction as \"one more drink\"",
          "{name} is playing like tomorrow's regrets are somebody else's problem entirely",
          "{name}'s bankroll is having a rougher night than the whiskey glass",
          "{name} is about to find out the hard way what \"sunk cost\" really means",
          "{name} has the financial planning of someone three drinks past good decisions",
          "{name} keeps going all-in like there's a rebuy fairy on standby",
          "{name}'s night has officially become a lesson for everyone else at the table",
          "{name} is playing this pot like the tab closes at sunrise, not before",
          "{name} has the confidence of someone who hasn't done the math tonight, on purpose",
          "{name} is one more round away from a very honest conversation with themselves tomorrow",
          "{name}'s decision-making tonight is a group effort between them and the open bar",
        ],
        punchlines: [
          "— pour another round, this is entertainment now.",
          "— someone hide the car keys and the debit card.",
          "— truly a financial cry for help, but make it fun.",
          "— tomorrow's hangover is going to hurt less than tonight's bankroll.",
          "— someone's going to need a second job by sunrise.",
          "— the chips are gone, but the stories will be legendary.",
          "— Vegas has nothing on this level of poor judgment.",
          "— the house doesn't need to cheat when {name} is doing the work for them.",
          "— somebody cut them off, for their wallet's sake.",
          "— this is why the group chat exists tomorrow.",
          "— the bartender's getting a bigger tip than the dealer.",
          "— future {name} is not going to thank present {name}.",
          "— this is a story for the ages, and a warning for the wallet.",
          "— the only thing going all-in tonight is the tab.",
          "— somebody screenshot this for accountability purposes.",
          "— the bank app is going to need a moment tomorrow.",
          "— this is what a financial plot twist looks like.",
          "— the designated driver just became the designated banker too.",
          "— nobody's stopping this train, so grab some popcorn.",
          "— nothing left to lose except everything already lost.",
          "— the receipts tonight are going to read like a horror story.",
          "— Monday morning is going to have some questions.",
          "— the open bar is undefeated tonight.",
          "— this is peak \"seemed like a good idea at the time\" energy.",
          "— someone's definitely telling this story at Thanksgiving.",
          "— the tab's undefeated so far.",
          "— \"one more\" is doing a lot of heavy lifting tonight.",
          "— everyone's splitting that bill, apparently.",
          "— the filter's not walking back through that door.",
          "— a stranger's about to get an earful.",
          "— everything is, in fact, not fine.",
          "— direct correlation, zero coincidence.",
          "— the bank's not going to see it that way.",
          "— premature celebrations, a house specialty tonight.",
          "— a confession nobody's ready for.",
          "— not exactly a highlight reel anyone's proud of.",
          "— the table's heard that one before.",
          "— round's on them, apparently, forever.",
          "— arrived together, leaving together.",
          "— same conviction, same outcome, every time.",
          "— tomorrow's going to have some questions.",
          "— the whiskey's holding up better, honestly.",
          "— sunk cost doesn't care about feelings.",
          "— three drinks past good decisions and counting.",
          "— there's no fairy, there's just an ATM.",
          "— a cautionary tale in real time.",
          "— the tab doesn't actually work that way.",
          "— ignorance is doing a lot of the confidence here.",
          "— tomorrow's going to be a long conversation.",
          "— the open bar's calling the shots now.",
        ],
      },
    };
 
    function pickRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
 
    function randomSlotSymbol() {
      return pickRandom(SLOT_SYMBOLS);
    }
 
    // Remembers the last several setup+punchline combos (per intensity)
    // that have already come up this session, so the machine avoids
    // repeating one you just heard even when luck would otherwise
    // pick it again soon.
    const SLOT_RECENT_LIMIT = 15;
    let slotRecentCombos = [];
 
    function generateInsult(playerName, intensity) {
      const tier = INSULT_COMPONENTS[intensity] || INSULT_COMPONENTS.playful;
      let rawSetup, rawPunchline, comboKey;
      let attempts = 0;
      do {
        rawSetup = pickRandom(tier.setups);
        rawPunchline = pickRandom(tier.punchlines);
        comboKey = `${intensity}::${rawSetup}::${rawPunchline}`;
        attempts++;
      } while (slotRecentCombos.includes(comboKey) && attempts < 20);
 
      slotRecentCombos.push(comboKey);
      if (slotRecentCombos.length > SLOT_RECENT_LIMIT) {
        slotRecentCombos.shift();
      }
 
      const setup = rawSetup.replace(/\{name\}/g, playerName);
      const punchline = rawPunchline.replace(/\{name\}/g, playerName);
      return `${setup} ${punchline}`;
    }
 
    async function getEligibleSlotPlayers() {
      const { data, error } = await supabaseClient
        .from("players")
        .select("id, name, is_active")
        .order("name", { ascending: true });
      if (error || !data) return [];
      return data.filter((p) => p.is_active && p.name && p.name.trim());
    }
 
    // Picks the next player like dealing through a shuffled deck: everyone
    // in the eligible list gets picked once before anyone repeats, then
    // the "deck" reshuffles. This is what keeps the same one or two
    // people from getting roasted over and over by pure bad luck.
    let slotPlayerBag = [];
    let slotLastPickedId = null;
 
    function pickSlotPlayer(players) {
      const eligibleIds = new Set(players.map((p) => p.id));
      slotPlayerBag = slotPlayerBag.filter((id) => eligibleIds.has(id));
 
      if (slotPlayerBag.length === 0) {
        slotPlayerBag = players.map((p) => p.id);
        for (let i = slotPlayerBag.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [slotPlayerBag[i], slotPlayerBag[j]] = [slotPlayerBag[j], slotPlayerBag[i]];
        }
        // A fresh shuffle can coincidentally start with whoever was just
        // picked from the old one — swap them out so a reshuffle never
        // causes a back-to-back repeat either.
        if (slotPlayerBag.length > 1 && slotPlayerBag[0] === slotLastPickedId) {
          const swapWith = 1 + Math.floor(Math.random() * (slotPlayerBag.length - 1));
          [slotPlayerBag[0], slotPlayerBag[swapWith]] = [slotPlayerBag[swapWith], slotPlayerBag[0]];
        }
      }
 
      const nextId = slotPlayerBag.shift();
      slotLastPickedId = nextId;
      return players.find((p) => p.id === nextId) || pickRandom(players);
    }
 
    function playReelTick() {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(500, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.connect(gain);
      routeToOutput(ctx, gain);
      osc.start(now);
      osc.stop(now + 0.03);
    }
 
    function playJackpotFanfare() {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const t = now + i * 0.12;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.22, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.connect(gain);
        routeToOutput(ctx, gain);
        osc.start(t);
        osc.stop(t + 0.36);
      });
    }
 
    // Jackpot wins play this real recorded sound instead of the
    // synthesized fanfare above — same cache-after-first-play pattern
    // as the other real sounds in the app.
    let jackpotWinAudio = null;
    function playJackpotWinSound() {
      if (!jackpotWinAudio) {
        jackpotWinAudio = new Audio("sounds/jackpot-win.mp3");
        jackpotWinAudio.volume = 0.85;
      }
      jackpotWinAudio.currentTime = 0;
      jackpotWinAudio.play().catch(() => {});
    }
 
    // Jackpot fireworks — a small dependency-free particle burst drawn on
    // a full-screen canvas overlay. Purely decorative: it sits above
    // everything with pointer-events disabled so it never blocks taps,
    // clears itself after a couple seconds, and is skipped entirely for
    // anyone who prefers reduced motion.
    const slotFireworksCtx = slotFireworksCanvas ? slotFireworksCanvas.getContext("2d") : null;
    let slotFireworksParticles = [];
    let slotFireworksAnimId = null;
    const SLOT_FIREWORK_COLORS = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93", "#d4af37"];
 
    function spawnFireworkBurst(x, y) {
      const particleCount = 36;
      const color = SLOT_FIREWORK_COLORS[Math.floor(Math.random() * SLOT_FIREWORK_COLORS.length)];
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.2;
        const speed = 2 + Math.random() * 3;
        slotFireworksParticles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          color,
        });
      }
    }
 
    function playJackpotFireworks() {
      if (!slotFireworksCanvas || !slotFireworksCtx) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
 
      slotFireworksCanvas.width = window.innerWidth;
      slotFireworksCanvas.height = window.innerHeight;
      slotFireworksCanvas.hidden = false;
      slotFireworksParticles = [];
 
      const w = slotFireworksCanvas.width;
      const h = slotFireworksCanvas.height;
      const burstPoints = [
        [w * 0.25, h * 0.3],
        [w * 0.5, h * 0.22],
        [w * 0.75, h * 0.32],
      ];
      const burstTimeouts = burstPoints.map(([x, y], i) =>
        setTimeout(() => spawnFireworkBurst(x, y), i * 220)
      );
 
      const startTime = performance.now();
      const duration = 2600;
 
      function tick(now) {
        slotFireworksCtx.clearRect(0, 0, w, h);
        slotFireworksParticles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.05;
          p.life -= 0.015;
          slotFireworksCtx.globalAlpha = Math.max(p.life, 0);
          slotFireworksCtx.fillStyle = p.color;
          slotFireworksCtx.beginPath();
          slotFireworksCtx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          slotFireworksCtx.fill();
        });
        slotFireworksCtx.globalAlpha = 1;
        slotFireworksParticles = slotFireworksParticles.filter((p) => p.life > 0);
 
        if (now - startTime < duration) {
          slotFireworksAnimId = requestAnimationFrame(tick);
        } else {
          slotFireworksCtx.clearRect(0, 0, w, h);
          slotFireworksCanvas.hidden = true;
          burstTimeouts.forEach(clearTimeout);
        }
      }
 
      if (slotFireworksAnimId) cancelAnimationFrame(slotFireworksAnimId);
      slotFireworksAnimId = requestAnimationFrame(tick);
    }
 
    // A real recorded chip-clatter sound, played right as the reels lock
    // in — same cache-after-first-play pattern as the other real (not
    // synthesized) sounds elsewhere in the app.
    let chipsCollideAudio = null;
    function playRoastLanding() {
      if (!chipsCollideAudio) {
        chipsCollideAudio = new Audio("sounds/chips-collide.mp3");
        chipsCollideAudio.volume = 0.8;
      }
      chipsCollideAudio.currentTime = 0;
      chipsCollideAudio.play().catch(() => {});
    }
 
    let slotSpinning = false;
 
    async function spinSlotMachine() {
      if (slotSpinning || !slotSpinBtn) return;
 
      slotErrorEl.textContent = "";
      const players = await getEligibleSlotPlayers();
      if (!players.length) {
        slotErrorEl.textContent = "Add at least one active player before using the Random Roaster Machine.";
        return;
      }
 
      slotSpinning = true;
      slotSpinBtn.disabled = true;
      slotJackpotBanner.hidden = true;
      slotResultPlayer.textContent = "";
      slotResultInsult.textContent = "";
      if (slotReplayBtn) slotReplayBtn.hidden = true;
 
      const chosenPlayer = pickSlotPlayer(players);
      const finalSymbols = [randomSlotSymbol(), randomSlotSymbol(), randomSlotSymbol()];
      const isJackpot = finalSymbols[0] === finalSymbols[1] && finalSymbols[1] === finalSymbols[2];
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const stopDelays = [700, 1000, 1400];
 
      if (prefersReducedMotion) {
        slotReelEls.forEach((el, i) => {
          el.textContent = finalSymbols[i];
        });
        playReelTick();
      } else {
        slotReelEls.forEach((el) => el.classList.add("spinning"));
        const tickers = slotReelEls.map((el) =>
          setInterval(() => {
            el.textContent = randomSlotSymbol();
          }, 80)
        );
        await Promise.all(
          slotReelEls.map(
            (el, i) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  clearInterval(tickers[i]);
                  el.classList.remove("spinning");
                  el.textContent = finalSymbols[i];
                  playReelTick();
                  resolve();
                }, stopDelays[i]);
              })
          )
        );
      }
 
      playRoastLanding();
 
      const intensityInput = document.querySelector('input[name="slot-intensity"]:checked');
      const intensity = intensityInput ? intensityInput.value : "playful";
      let insult = generateInsult(chosenPlayer.name, intensity);
 
      slotResultPlayer.textContent = chosenPlayer.name;
 
      if (isJackpot) {
        slotJackpotBanner.hidden = false;
        insult = `🎰 ROAST JACKPOT! ${insult}`;
        playJackpotWinSound();
        playJackpotFireworks();
      }
 
      slotResultInsult.textContent = insult;
 
      lastSlotInsult = `${chosenPlayer.name}. ${insult}`;
      speakSlotInsult(lastSlotInsult);
      if (slotReplayBtn) slotReplayBtn.hidden = false;
 
      slotSpinning = false;
      slotSpinBtn.disabled = false;
    }
 
    if (slotSpinBtn) {
      slotSpinBtn.addEventListener("click", spinSlotMachine);
    }
 
    // ------------------------------------------------------------------
    // Blackjack — single-player against the dealer, played with pretend
    // chips stored on this device only (localStorage, not Supabase — this
    // is just for fun, nothing here touches real scoring or the pot).
    // Reuses the realistic flipping-card renderer built for High Hands.
    // ------------------------------------------------------------------
    const bjBalanceEl = document.getElementById("bj-balance");
    const bjCurrentBetEl = document.getElementById("bj-current-bet");
    const bjBetInput = document.getElementById("bj-bet-input");
    const bjBetMaxBtn = document.getElementById("bj-bet-max");
    const bjBetChipBtns = document.querySelectorAll("#bj-bet-controls [data-chip]");
    const bjDealBtn = document.getElementById("bj-deal-btn");
    const bjTable = document.getElementById("bj-table");
    const bjDealerCardsEl = document.getElementById("bj-dealer-cards");
    const bjDealerTotalEl = document.getElementById("bj-dealer-total");
    const bjPlayerCardsEl = document.getElementById("bj-player-cards");
    const bjPlayerTotalEl = document.getElementById("bj-player-total");
    const bjHitBtn = document.getElementById("bj-hit-btn");
    const bjStandBtn = document.getElementById("bj-stand-btn");
    const bjDoubleBtn = document.getElementById("bj-double-btn");
    const bjResultEl = document.getElementById("bj-result");
    const bjResetBtn = document.getElementById("bj-reset-btn");
    const bjErrorEl = document.getElementById("bj-error");
 
    const BJ_STORAGE_KEY = "pokerLeagueBlackjackChips";
    const BJ_STARTING_BALANCE = 1000;
    const BJ_MIN_BET = 5;
    const BJ_RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    const BJ_SUITS = ["S", "H", "D", "C"];
 
    function loadBjBalance() {
      try {
        const saved = window.localStorage.getItem(BJ_STORAGE_KEY);
        const parsed = saved === null ? NaN : parseInt(saved, 10);
        return Number.isFinite(parsed) && parsed >= 0 ? parsed : BJ_STARTING_BALANCE;
      } catch (err) {
        return BJ_STARTING_BALANCE;
      }
    }
 
    function saveBjBalance(amount) {
      try {
        window.localStorage.setItem(BJ_STORAGE_KEY, String(amount));
      } catch (err) {
        // localStorage unavailable (private browsing, etc.) — the balance
        // just won't persist across reloads. It's only pretend chips.
      }
    }
 
    let bjBalance = loadBjBalance();
    let bjDeck = [];
    let bjPlayerHand = [];
    let bjDealerHand = [];
    let bjCurrentBet = 0;
    let bjHandActive = false;
 
    function buildShuffledBjDeck() {
      const deck = [];
      BJ_SUITS.forEach((suit) => {
        BJ_RANKS.forEach((rank) => deck.push(rank + suit));
      });
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }
 
    function bjDrawCard() {
      if (bjDeck.length === 0) bjDeck = buildShuffledBjDeck();
      return bjDeck.pop();
    }
 
    function bjCardValue(rank) {
      if (rank === "A") return 11;
      if (rank === "T" || rank === "J" || rank === "Q" || rank === "K") return 10;
      return parseInt(rank, 10);
    }
 
    function bjHandTotal(cards) {
      let total = 0;
      let aces = 0;
      cards.forEach((c) => {
        const rank = c.slice(0, -1);
        total += bjCardValue(rank);
        if (rank === "A") aces++;
      });
      while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
      }
      return total;
    }
 
    function bjIsBlackjack(cards) {
      return cards.length === 2 && bjHandTotal(cards) === 21;
    }
 
    // A static face-down card, styled with the same card back used
    // elsewhere — no reveal animation, since it's meant to stay hidden.
    function renderBjFaceDownCard() {
      return `<span class="real-card"><span class="real-card-flip" style="animation:none; transform:rotateY(360deg);"><span class="card-face card-front">${REAL_CARD_BACK_SVG}</span></span></span>`;
    }
 
    function renderBjHand(container, cards, hideSecondCard) {
      container.innerHTML = cards
        .map((c, i) => (hideSecondCard && i === 1 ? renderBjFaceDownCard() : renderRealCard(c, i)))
        .join("");
    }
 
    function bjTotalLabel(cards, hideSecondCard) {
      if (hideSecondCard) {
        return `(${bjHandTotal([cards[0]])} + ?)`;
      }
      const total = bjHandTotal(cards);
      return bjIsBlackjack(cards) ? `(${total} — Blackjack!)` : `(${total})`;
    }
 
    function updateBjBalanceDisplay() {
      bjBalanceEl.textContent = bjBalance;
    }
 
    function setBjBetControlsEnabled(enabled) {
      bjBetInput.disabled = !enabled;
      bjBetMaxBtn.disabled = !enabled;
      bjBetChipBtns.forEach((btn) => {
        btn.disabled = !enabled;
      });
    }
 
    function setBjActionsEnabled(enabled) {
      bjHitBtn.disabled = !enabled;
      bjStandBtn.disabled = !enabled;
      bjDoubleBtn.disabled = !enabled || bjBalance < bjCurrentBet;
    }
 
    bjBetChipBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const add = parseInt(btn.dataset.chip, 10) || 0;
        const current = parseInt(bjBetInput.value, 10) || 0;
        bjBetInput.value = Math.min(current + add, Math.max(bjBalance, BJ_MIN_BET));
        playChipClick();
      });
    });
 
    if (bjBetMaxBtn) {
      bjBetMaxBtn.addEventListener("click", () => {
        bjBetInput.value = Math.max(bjBalance, BJ_MIN_BET);
        playChipClick();
      });
    }
 
    function determineBjOutcome(dealerTotal, playerTotal) {
      if (dealerTotal > 21) return "win";
      if (playerTotal > dealerTotal) return "win";
      if (playerTotal < dealerTotal) return "lose";
      return "push";
    }
 
    function settleBjHand(outcome) {
      bjHandActive = false;
      let message = "";
 
      if (outcome === "blackjack") {
        const winnings = Math.floor(bjCurrentBet * 1.5);
        bjBalance += bjCurrentBet + winnings;
        message = `🂡 Blackjack! You win ${winnings} chips.`;
        bjResultEl.className = "bj-result bj-win";
        playCoinCascade();
      } else if (outcome === "win") {
        bjBalance += bjCurrentBet * 2;
        message = `You win ${bjCurrentBet} chips!`;
        bjResultEl.className = "bj-result bj-win";
        playCoinCascade();
      } else if (outcome === "push") {
        bjBalance += bjCurrentBet;
        message = "Push — bet returned.";
        bjResultEl.className = "bj-result bj-push";
      } else {
        message = `You lose ${bjCurrentBet} chips.`;
        bjResultEl.className = "bj-result bj-lose";
      }
 
      saveBjBalance(bjBalance);
      updateBjBalanceDisplay();
      bjCurrentBetEl.textContent = "—";
      bjResultEl.textContent = message;
      bjResultEl.hidden = false;
 
      setBjBetControlsEnabled(true);
      bjBetInput.max = bjBalance;
      if (parseInt(bjBetInput.value, 10) > bjBalance) {
        bjBetInput.value = Math.max(Math.min(BJ_MIN_BET, bjBalance), 0);
      }
 
      if (bjBalance < BJ_MIN_BET) {
        bjDealBtn.disabled = true;
        bjErrorEl.textContent = "Out of chips — hit Reset Chips to start over.";
      } else {
        bjDealBtn.disabled = false;
      }
    }
 
    function finishBjHand() {
      setBjActionsEnabled(false);
      const playerTotal = bjHandTotal(bjPlayerHand);
 
      renderBjHand(bjDealerCardsEl, bjDealerHand, false);
      bjDealerTotalEl.textContent = bjTotalLabel(bjDealerHand, false);
 
      if (playerTotal > 21) {
        setTimeout(() => settleBjHand("lose"), 400);
        return;
      }
 
      function dealerStep() {
        const dealerTotal = bjHandTotal(bjDealerHand);
        if (dealerTotal < 17) {
          bjDealerHand.push(bjDrawCard());
          playCardSnap();
          renderBjHand(bjDealerCardsEl, bjDealerHand, false);
          bjDealerTotalEl.textContent = bjTotalLabel(bjDealerHand, false);
          setTimeout(dealerStep, 700);
          return;
        }
        settleBjHand(determineBjOutcome(dealerTotal, playerTotal));
      }
 
      setTimeout(dealerStep, 500);
    }
 
    function bjHit() {
      if (!bjHandActive) return;
      bjPlayerHand.push(bjDrawCard());
      playCardSnap();
      renderBjHand(bjPlayerCardsEl, bjPlayerHand, false);
      const total = bjHandTotal(bjPlayerHand);
      bjPlayerTotalEl.textContent = bjTotalLabel(bjPlayerHand, false);
      bjDoubleBtn.disabled = true;
 
      if (total > 21) {
        finishBjHand();
      } else if (total === 21) {
        bjStand();
      }
    }
 
    function bjStand() {
      if (!bjHandActive) return;
      setBjActionsEnabled(false);
      finishBjHand();
    }
 
    function bjDoubleDown() {
      if (!bjHandActive || bjPlayerHand.length !== 2) return;
      if (bjBalance < bjCurrentBet) {
        bjErrorEl.textContent = "Not enough chips to double down.";
        return;
      }
      bjBalance -= bjCurrentBet;
      bjCurrentBet *= 2;
      saveBjBalance(bjBalance);
      updateBjBalanceDisplay();
      bjCurrentBetEl.textContent = bjCurrentBet;
 
      bjPlayerHand.push(bjDrawCard());
      playCardSnap();
      renderBjHand(bjPlayerCardsEl, bjPlayerHand, false);
      bjPlayerTotalEl.textContent = bjTotalLabel(bjPlayerHand, false);
 
      setBjActionsEnabled(false);
      finishBjHand();
    }
 
    function startBjHand() {
      bjErrorEl.textContent = "";
      if (bjHandActive) return;
 
      const bet = parseInt(bjBetInput.value, 10);
      if (!Number.isFinite(bet) || bet < BJ_MIN_BET) {
        bjErrorEl.textContent = `Minimum bet is ${BJ_MIN_BET} chips.`;
        return;
      }
      if (bet > bjBalance) {
        bjErrorEl.textContent = "You don't have enough chips for that bet.";
        return;
      }
 
      bjCurrentBet = bet;
      bjBalance -= bet;
      saveBjBalance(bjBalance);
      updateBjBalanceDisplay();
      bjCurrentBetEl.textContent = bjCurrentBet;
      setBjBetControlsEnabled(false);
      bjDealBtn.disabled = true;
 
      bjDeck = buildShuffledBjDeck();
      bjPlayerHand = [bjDrawCard(), bjDrawCard()];
      bjDealerHand = [bjDrawCard(), bjDrawCard()];
      bjHandActive = true;
 
      bjTable.hidden = false;
      bjResultEl.hidden = true;
      bjResultEl.className = "bj-result";
 
      playCardSnap();
      renderBjHand(bjPlayerCardsEl, bjPlayerHand, false);
      renderBjHand(bjDealerCardsEl, bjDealerHand, true);
      bjPlayerTotalEl.textContent = bjTotalLabel(bjPlayerHand, false);
      bjDealerTotalEl.textContent = bjTotalLabel(bjDealerHand, true);
 
      if (bjIsBlackjack(bjPlayerHand)) {
        setBjActionsEnabled(false);
        setTimeout(() => {
          renderBjHand(bjDealerCardsEl, bjDealerHand, false);
          bjDealerTotalEl.textContent = bjTotalLabel(bjDealerHand, false);
          settleBjHand(bjIsBlackjack(bjDealerHand) ? "push" : "blackjack");
        }, 500);
        return;
      }
 
      setBjActionsEnabled(true);
    }
 
    if (bjDealBtn) bjDealBtn.addEventListener("click", startBjHand);
    if (bjHitBtn) bjHitBtn.addEventListener("click", bjHit);
    if (bjStandBtn) bjStandBtn.addEventListener("click", bjStand);
    if (bjDoubleBtn) bjDoubleBtn.addEventListener("click", bjDoubleDown);
 
    if (bjResetBtn) {
      bjResetBtn.addEventListener("click", () => {
        if (bjHandActive) return;
        if (!window.confirm("Reset your Blackjack chips back to 1000?")) return;
        bjBalance = BJ_STARTING_BALANCE;
        saveBjBalance(bjBalance);
        updateBjBalanceDisplay();
        bjBetInput.max = bjBalance;
        bjBetInput.value = Math.min(25, bjBalance);
        setBjBetControlsEnabled(true);
        bjDealBtn.disabled = false;
        bjErrorEl.textContent = "";
        bjResultEl.hidden = true;
        bjTable.hidden = true;
      });
    }
 
    if (bjBalanceEl) {
      updateBjBalanceDisplay();
      bjBetInput.max = bjBalance;
      if (bjBalance < BJ_MIN_BET) {
        bjDealBtn.disabled = true;
        bjErrorEl.textContent = "Out of chips — hit Reset Chips to start over.";
      }
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
 
