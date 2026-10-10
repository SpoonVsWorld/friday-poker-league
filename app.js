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
    const whatsNewBanner = document.getElementById("whats-new-banner");
    const whatsNewText = document.getElementById("whats-new-text");
    const whatsNewDismiss = document.getElementById("whats-new-dismiss");

    const adminToggle = document.getElementById("admin-toggle");
    const publicView = document.getElementById("public-view");
    const adminView = document.getElementById("admin-view");
    const adminLogin = document.getElementById("admin-login");
    const adminDashboard = document.getElementById("admin-dashboard");
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");
    const adminEmailEl = document.getElementById("admin-email");
    const logoutBtn = document.getElementById("logout-btn");

    const announcementInput = document.getElementById("announcement-input");
    const saveAnnouncementBtn = document.getElementById("save-announcement-btn");
    const clearAnnouncementBtn = document.getElementById("clear-announcement-btn");
    const announcementStatus = document.getElementById("announcement-status");
    const announcementError = document.getElementById("announcement-error");

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
    const milestoneList = document.getElementById("milestone-list");
    const seasonProgressLine = document.getElementById("season-progress-line");
    const standingsBody = document.getElementById("standings-body");
    const awardsSection = document.getElementById("awards-section");
    const awardsGrid = document.getElementById("awards-grid");
    const publicPlayerList = document.getElementById("public-player-list");
    const hofSection = document.getElementById("hof-section");
    const hofList = document.getElementById("hof-list");
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
    const rivalrySection = document.getElementById("rivalry-section");
    const rivalrySelect = document.getElementById("rivalry-select");
    const rivalryResult = document.getElementById("rivalry-result");

    // Head-to-Head state: the currently-open profile's own id/name/history,
    // so switching the "Compare with" dropdown doesn't need to re-fetch it.
    let currentProfilePlayerId = null;
    let currentProfilePlayerName = "";
    let currentProfileAgg = null;
    let currentProfileHistory = [];

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
    const visitLogList = document.getElementById("visit-log-list");

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
      await Promise.all([loadPlayers(), loadSeasons(), loadPlayersForHighHand(), loadHighHandsAdmin(), loadSiteStats(), loadFeedbackAdmin(), loadAnnouncementAdmin()]);
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
        fetch("/api/log-view", { method: "POST" }).catch(() => {});
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
            <button class="btn btn-small btn-danger" data-action="delete">Delete</button>
          </div>
        `;
        li.querySelector('[data-action="rename"]').addEventListener("click", () => renamePlayer(p));
        li.querySelector('[data-action="toggle"]').addEventListener("click", () => togglePlayerActive(p));
        li.querySelector('[data-action="delete"]').addEventListener("click", () => deletePlayer(p));
        playerList.appendChild(li);
      }
    }

    addPlayerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      playerError.textContent = "";
      const name = document.getElementById("new-player-name").value.trim();
      const nickname = document.getElementById("new-player-nickname").value.trim();

      if (!name) return;

      // Catch the "I forgot I already added her" mistake before it
      // happens — a duplicate player splits their points/chips across two
      // records with no easy way to tell which one is "real" afterward.
      const { data: existingMatches, error: dupeCheckErr } = await supabaseClient
        .from("players")
        .select("id, name, is_active")
        .ilike("name", name);
      if (!dupeCheckErr && existingMatches && existingMatches.length) {
        const match = existingMatches[0];
        const proceed = window.confirm(
          `A player named "${match.name}" already exists${match.is_active ? "" : " (currently deactivated)"}. Add another player with the same name anyway?`
        );
        if (!proceed) return;
      }

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

    async function deletePlayer(player) {
      playerError.textContent = "";

      // Check what's actually attached to this player first, so the confirm
      // message tells the truth about what's at stake — rather than finding
      // out only after a foreign-key error (or, worse, silently losing data).
      const [resultsCount, highHandsCount, chipsRow, seatRow] = await Promise.all([
        supabaseClient.from("results").select("id", { count: "exact", head: true }).eq("player_id", player.id),
        supabaseClient.from("high_hands").select("id", { count: "exact", head: true }).eq("player_id", player.id),
        supabaseClient.from("blackjack_chips").select("balance").eq("player_id", player.id).maybeSingle(),
        supabaseClient.from("holdem_seats").select("seat_number").eq("player_id", player.id).maybeSingle(),
      ]);

      const fridaysPlayed = resultsCount.count || 0;
      const highHands = highHandsCount.count || 0;
      const chipBalance = chipsRow.data ? chipsRow.data.balance : null;
      const seated = !!seatRow.data;

      const hasHistory = fridaysPlayed > 0 || highHands > 0 || chipBalance !== null || seated;
      const detail = [];
      if (fridaysPlayed > 0) detail.push(`${fridaysPlayed} Friday result${fridaysPlayed === 1 ? "" : "s"}`);
      if (highHands > 0) detail.push(`${highHands} High Hand ${highHands === 1 ? "entry" : "entries"}`);
      if (chipBalance !== null) detail.push(`a Blackjack balance of ${chipBalance} chips`);
      if (seated) detail.push(`a live seat at the Hold'em table`);

      if (hasHistory) {
        window.alert(
          `${player.name} has ${detail.join(", ")}. Deleting a player with recorded history isn't offered here — ` +
            `it would either fail (results/high hands are protected from accidental deletion) or quietly erase real ` +
            `standings history. If this is genuinely the player to remove (e.g. a duplicate), ask me and I'll give you ` +
            `the merge-and-delete SQL instead, or use Deactivate to just hide them from new results without losing history.`
        );
        return;
      }

      if (
        !window.confirm(
          `Delete ${player.name}? This player has no recorded results, high hands, or chip balance, so deleting them is safe — but it can't be undone.`
        )
      )
        return;

      const { error } = await supabaseClient.from("players").delete().eq("id", player.id);
      if (error) {
        playerError.textContent = "Could not delete player: " + error.message;
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
            <span class="dates">${s.start_date}${s.end_date ? " – " + s.end_date : ""}${s.planned_games ? ` &middot; ${s.planned_games} games planned` : ""}</span>
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

      const newPlannedGames = window.prompt(
        "Planned games for the season (optional — leave blank for none, powers the \"games left\" milestone):",
        season.planned_games != null ? String(season.planned_games) : ""
      );
      if (newPlannedGames === null) return;
      const trimmedPlannedGames = newPlannedGames.trim();
      let planned_games = null;
      if (trimmedPlannedGames) {
        const parsed = parseInt(trimmedPlannedGames, 10);
        if (!Number.isInteger(parsed) || parsed < 1) {
          seasonError.textContent = "Planned games must be a whole number of 1 or more, or left blank.";
          return;
        }
        planned_games = parsed;
      }

      const { error } = await supabaseClient
        .from("seasons")
        .update({ name: trimmedName, start_date: trimmedDate, planned_games })
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

      const plannedGamesRaw = document.getElementById("new-season-planned-games").value.trim();
      const planned_games = plannedGamesRaw ? parseInt(plannedGamesRaw, 10) : null;

      const { error } = await supabaseClient
        .from("seasons")
        .insert({ name, start_date, planned_games });

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

    // Bold, hand-drawn suit shapes instead of the Unicode ♠♥♦♣ characters.
    // Rendering suits as plain <text> glyphs leaves them at the mercy of
    // whatever font/emoji set the device substitutes - on a lot of phones
    // that swaps them for mismatched, thin, or cartoonish color-emoji
    // glyphs instead of a clean card suit, which is exactly what reads as
    // "generic" and hard to read at a glance. Drawing them as plain vector
    // shapes renders identically (crisp, bold, correctly colored) on every
    // device, including scaled down to the tiny hole-card sizes. Each
    // shape is authored in a local 0-24 box; suitIconMarkup() below scales
    // and centers it wherever it's needed on the card.
    function suitShapeMarkup(suit, color) {
      switch (suit) {
        case "S":
          return `<path d="M12 1.5 C7 7 1.5 11.5 1.5 16.3 C1.5 19.9 4.4 22.3 7.7 22.3 C9.3 22.3 10.7 21.7 11.6 20.6 C11.2 24 9.3 26 5.8 27.5 L18.2 27.5 C14.7 26 12.8 24 12.4 20.6 C13.3 21.7 14.7 22.3 16.3 22.3 C19.6 22.3 22.5 19.9 22.5 16.3 C22.5 11.5 17 7 12 1.5 Z" fill="${color}"/>`;
        case "H":
          return `<path d="M12 25 C12 25 1.5 17.8 1.5 10 C1.5 5.6 5 2.8 8.4 2.8 C10.4 2.8 11.6 4 12 5.4 C12.4 4 13.6 2.8 15.6 2.8 C19 2.8 22.5 5.6 22.5 10 C22.5 17.8 12 25 12 25 Z" fill="${color}"/>`;
        case "D":
          return `<path d="M12 1 L22.5 13.5 L12 26 L1.5 13.5 Z" fill="${color}"/>`;
        case "C":
          return `<circle cx="7.7" cy="10.2" r="5.6" fill="${color}"/><circle cx="16.3" cy="10.2" r="5.6" fill="${color}"/><circle cx="12" cy="16.6" r="5.6" fill="${color}"/><path d="M10.1 18.8 L13.9 18.8 L16.6 27.5 L7.4 27.5 Z" fill="${color}"/>`;
        default:
          return "";
      }
    }

    // Centers a suit shape at (cx, cy) scaled to roughly `size` units wide.
    // Pass flip:true to render it upside-down (the bottom half of a pip
    // layout, exactly like a real deck's mirrored lower pips).
    function suitIconMarkup(suit, color, cx, cy, size, flip) {
      const scale = size / 24;
      const tx = cx - 12 * scale;
      const ty = cy - 14 * scale;
      const inner = `<g transform="translate(${tx} ${ty}) scale(${scale})">${suitShapeMarkup(suit, color)}</g>`;
      return flip ? `<g transform="rotate(180 ${cx} ${cy})">${inner}</g>` : inner;
    }

    // Realistic flipping card graphics, used just for the featured
    // "Season Best" high hand callout.
    const REAL_CARD_BACK_SVG = `
      <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="96" height="136" rx="10" fill="#123626" stroke="#d4af37" stroke-width="3"/>
        <rect x="10" y="10" width="80" height="120" rx="6" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="2 3"/>
        ${suitIconMarkup("S", "#d4af37", 50, 70, 46)}
      </svg>
    `;

    // Classic playing-card pip layouts for number cards (2-10): one suit
    // symbol per pip, arranged the way a real deck lays them out, so a 3 of
    // hearts actually shows 3 hearts instead of one big one you have to read
    // the corner number to tell apart from every other heart card. Face
    // cards (J/Q/K) and the Ace keep a single large centered symbol, same as
    // a real deck.
    const PIP_LAYOUTS = {
      2: [{ x: 50, y: 40 }, { x: 50, y: 100, flip: true }],
      3: [{ x: 50, y: 34 }, { x: 50, y: 70 }, { x: 50, y: 106, flip: true }],
      4: [
        { x: 32, y: 40 }, { x: 68, y: 40 },
        { x: 32, y: 100, flip: true }, { x: 68, y: 100, flip: true },
      ],
      5: [
        { x: 32, y: 40 }, { x: 68, y: 40 },
        { x: 50, y: 70 },
        { x: 32, y: 100, flip: true }, { x: 68, y: 100, flip: true },
      ],
      6: [
        { x: 32, y: 36 }, { x: 68, y: 36 },
        { x: 32, y: 70 }, { x: 68, y: 70 },
        { x: 32, y: 104, flip: true }, { x: 68, y: 104, flip: true },
      ],
      7: [
        { x: 32, y: 34 }, { x: 68, y: 34 },
        { x: 50, y: 50 },
        { x: 32, y: 70 }, { x: 68, y: 70 },
        { x: 32, y: 106, flip: true }, { x: 68, y: 106, flip: true },
      ],
      8: [
        { x: 32, y: 32 }, { x: 68, y: 32 },
        { x: 50, y: 48 },
        { x: 32, y: 70 }, { x: 68, y: 70 },
        { x: 50, y: 92, flip: true },
        { x: 32, y: 108, flip: true }, { x: 68, y: 108, flip: true },
      ],
      9: [
        { x: 32, y: 30 }, { x: 68, y: 30 },
        { x: 32, y: 56 }, { x: 68, y: 56 },
        { x: 50, y: 70 },
        { x: 32, y: 84, flip: true }, { x: 68, y: 84, flip: true },
        { x: 32, y: 110, flip: true }, { x: 68, y: 110, flip: true },
      ],
      10: [
        { x: 32, y: 28 }, { x: 68, y: 28 },
        { x: 50, y: 40 },
        { x: 32, y: 54 }, { x: 68, y: 54 },
        { x: 32, y: 86, flip: true }, { x: 68, y: 86, flip: true },
        { x: 50, y: 100, flip: true },
        { x: 32, y: 112, flip: true }, { x: 68, y: 112, flip: true },
      ],
    };

    // A stylized court-card portrait for J/Q/K: a robed royal figure with
    // rank-specific crown, hair, and a held emblem (scepter / flower /
    // halberd) - the actual markers that make a real deck's King, Queen,
    // and Jack instantly tell apart at a glance, not just a face with a
    // different hat. Suit pips flank the shoulders the way a real deck
    // prints them. Mirrored top/bottom the way a real deck's face cards
    // are drawn as two half-length figures back to back, meeting at the
    // card's center.
    function courtPortraitGroup(rank, suit, color) {
      const crown =
        rank === "K"
          ? // three-point crown with jewel tips, base band, and a short
            // pointed beard - the clearest "this is the king" markers
            `<path d="M35 25 L39 12 L44 21 L50 9 L56 21 L61 12 L65 25 Z" fill="${color}"/>
             <rect x="35" y="25" width="30" height="4" fill="${color}"/>
             <circle cx="39" cy="12" r="1.5" fill="#fdfdfd"/>
             <circle cx="50" cy="9" r="1.7" fill="#fdfdfd"/>
             <circle cx="61" cy="12" r="1.5" fill="#fdfdfd"/>`
          : rank === "Q"
            ? // tall, narrow pointed tiara with a single jewel at the peak
              `<path d="M36 25 Q50 7 64 25 Z" fill="${color}"/>
               <rect x="36" y="24" width="28" height="3" fill="${color}"/>
               <circle cx="50" cy="10" r="2.1" fill="#fdfdfd" stroke="${color}" stroke-width="1"/>`
            : // Jack: a flat soft cap with a side plume - no crown or jewels,
              // the youngest and plainest of the three
              `<path d="M35 26 Q50 14 65 26 L65 23 Q50 18 35 23 Z" fill="${color}"/>
               <path d="M62 19 L69 8" stroke="${color}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;

      // Hair: a short beard for the King, loose flowing locks for the
      // Queen and Jack - this alone does a lot to separate the three at
      // small sizes, before you even read the crown shape.
      const hair =
        rank === "K"
          ? `<path d="M43 39 Q50 44 57 39 L55 43 Q50 46.5 45 43 Z" fill="${color}"/>`
          : `<path d="M39 23 Q34 30 36 39 Q37 42 39 40" fill="${color}"/>
             <path d="M61 23 Q66 30 64 39 Q63 42 61 40" fill="${color}"/>`;

      // Each rank holds a different emblem to its side - a scepter for
      // the King, a flower for the Queen, a halberd for the Jack - mostly
      // along the card's outer edge so it doesn't crowd the face.
      const emblem =
        rank === "K"
          ? // a rod topped with an orb-and-cross - the classic royal
            // scepter silhouette, kept chunky so it doesn't read as a
            // barbell at small sizes
            `<line x1="28" y1="51" x2="28" y2="68" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
             <circle cx="28" cy="46.5" r="3" fill="${color}"/>
             <path d="M28 43.3 L28 49.7 M25.3 46.5 L30.7 46.5" stroke="#fdfdfd" stroke-width="1" stroke-linecap="round"/>`
          : rank === "Q"
            ? `<line x1="72" y1="54" x2="72" y2="68" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
               <circle cx="72" cy="48" r="2.1" fill="${color}"/>
               <circle cx="68.3" cy="50.3" r="1.7" fill="${color}"/>
               <circle cx="75.7" cy="50.3" r="1.7" fill="${color}"/>
               <circle cx="72" cy="52.2" r="1.7" fill="${color}"/>`
            : `<line x1="72" y1="46" x2="72" y2="68" stroke="${color}" stroke-width="1.7" stroke-linecap="round"/>
               <path d="M67.5 48.5 L76.5 48.5 L72 42 Z" fill="${color}"/>`;

      return `
        <path d="M38 70 L34.5 54 Q34 45 42 42 L58 42 Q66 45 65.5 54 L62 70 Z" fill="#fdfdfd" stroke="${color}" stroke-width="1.3"/>
        <path d="M44 42 L50 48 L56 42" fill="none" stroke="${color}" stroke-width="1.1"/>
        ${emblem}
        ${suitIconMarkup(suit, color, 28, 36, 8)}
        ${suitIconMarkup(suit, color, 72, 36, 8)}
        ${hair}
        ${crown}
        <ellipse cx="50" cy="30" rx="9" ry="10.5" fill="#fdfdfd" stroke="${color}" stroke-width="1.3"/>
        <circle cx="46" cy="29" r="1.1" fill="${color}"/>
        <circle cx="54" cy="29" r="1.1" fill="${color}"/>
        <path d="M46.5 35 Q50 37.2 53.5 35" fill="none" stroke="${color}" stroke-width="1.1" stroke-linecap="round"/>
      `;
    }

    function courtCardSvg(rank, suit, color) {
      const portrait = courtPortraitGroup(rank, suit, color);
      return `<g>${portrait}</g><g transform="rotate(180 50 70)">${portrait}</g>`;
    }

    // One corner index - a bold rank label plus a crisp vector suit icon
    // (see suitIconMarkup above). realCardFrontSvg stamps this at the
    // top-left and, rotated 180°, again at the bottom-right, the way a
    // real deck's cards read correctly from either end of a fanned hand.
    function cornerIndexMarkup(rankLabel, suit, color, rankFontSize) {
      return `
        <text x="12" y="26" font-family="Georgia, 'Times New Roman', serif" font-size="${rankFontSize}" font-weight="700" text-anchor="middle" fill="${color}">${escapeHtml(rankLabel)}</text>
        ${suitIconMarkup(suit, color, 12, 42, 17)}
      `;
    }

    // Real scanned card faces (cards/<rank><suit>.png - a classic bicycle-style
    // deck the user picked out) instead of the hand-drawn SVG. If an image
    // ever fails to load (renamed/missing file), the onerror handler hides
    // the broken <img> and reveals a sibling span holding the original
    // vector card as a fallback, so it degrades gracefully instead of
    // leaving a blank card.
    function realCardFrontImg(rank, suit) {
      const rankLabel = rank === "T" ? "10" : rank;
      const suitWord = { S: "Spades", H: "Hearts", D: "Diamonds", C: "Clubs" }[suit] || suit;
      return `
        <img class="real-card-img" src="cards/${rank}${suit}.png" alt="${rankLabel} of ${suitWord}" draggable="false"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <span class="real-card-fallback" style="display:none">${realCardFrontSvg(rank, suit)}</span>
      `;
    }

    function realCardFrontSvg(rank, suit) {
      const rankLabel = rank === "T" ? "10" : rank;
      const color = SUIT_COLOR[suit] === "red" ? "#c0392b" : "#1a1a1a";
      const rankFontSize = rankLabel.length > 1 ? 19 : 24;
      const pips = PIP_LAYOUTS[RANK_NUMERIC[rank]];
      const isCourtCard = rank === "J" || rank === "Q" || rank === "K";
      const faceMarkup = pips
        ? pips.map((p) => suitIconMarkup(suit, color, p.x, p.y, 17, p.flip)).join("")
        : isCourtCard
          ? courtCardSvg(rank, suit, color)
          : suitIconMarkup(suit, color, 50, 74, 62);
      return `
        <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="96" height="136" rx="10" fill="#fdfdfd" stroke="#1a1a1a" stroke-width="3"/>
          ${cornerIndexMarkup(rankLabel, suit, color, rankFontSize)}
          <g transform="rotate(180 50 70)">${cornerIndexMarkup(rankLabel, suit, color, rankFontSize)}</g>
          ${faceMarkup}
        </svg>
      `;
    }

    function renderRealCard(cardStr, index) {
      const rank = cardStr.slice(0, -1);
      const suit = cardStr.slice(-1);
      return `
        <span class="real-card">
          <span class="real-card-flip" style="animation-delay:${(index * 0.12).toFixed(2)}s">
            <span class="card-face card-front">${realCardFrontImg(rank, suit)}</span>
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

      const { data: recentVisits, error: recentErr } = await supabaseClient
        .from("page_views")
        .select("viewed_at, ip_address, city, region, country, user_agent")
        .order("viewed_at", { ascending: false })
        .limit(50);

      if (recentErr) {
        visitLogList.innerHTML = `<p class="error">Could not load recent visits: ${escapeHtml(recentErr.message)}</p>`;
        return;
      }
      renderRecentVisits(recentVisits || []);
    }

    // Approximate city/state from Vercel's geo headers - "Unknown" only
    // when we truly have nothing (e.g. rows logged before this feature,
    // or a visit where Vercel couldn't determine a location).
    function formatVisitLocation(row) {
      if (row.city && row.region) return `${row.city}, ${row.region}`;
      if (row.city) return row.city;
      if (row.region) return row.region;
      if (row.country) return row.country;
      return "Unknown location";
    }

    function formatVisitTime(iso) {
      const d = new Date(iso);
      if (isNaN(d)) return "";
      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      const time = d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
      if (d.toDateString() === now.toDateString()) return `Today, ${time}`;
      if (d.toDateString() === yesterday.toDateString()) return `Yesterday, ${time}`;
      return `${d.toLocaleDateString([], { month: "short", day: "numeric" })}, ${time}`;
    }

    // Rough, best-effort device/browser label parsed from the user-agent
    // string - just enough to help tell visits apart, not a precise
    // device-detection library.
    function summarizeUserAgent(ua) {
      if (!ua) return "Unknown device";
      let device = "Desktop";
      if (/iPhone/i.test(ua)) device = "iPhone";
      else if (/iPad/i.test(ua)) device = "iPad";
      else if (/Android/i.test(ua)) device = "Android";
      else if (/Macintosh/i.test(ua)) device = "Mac";
      else if (/Windows/i.test(ua)) device = "Windows";
      else if (/Linux/i.test(ua)) device = "Linux";

      let browser = "";
      if (/Edg\//i.test(ua)) browser = "Edge";
      else if (/OPR\//i.test(ua) || /Opera/i.test(ua)) browser = "Opera";
      else if (/CriOS/i.test(ua) || /Chrome\//i.test(ua)) browser = "Chrome";
      else if (/FxiOS/i.test(ua) || /Firefox\//i.test(ua)) browser = "Firefox";
      else if (/Safari\//i.test(ua)) browser = "Safari";

      return browser ? `${device} · ${browser}` : device;
    }

    function renderRecentVisits(rows) {
      if (!rows.length) {
        visitLogList.innerHTML = '<p class="muted">No visits recorded yet.</p>';
        return;
      }
      visitLogList.innerHTML = rows
        .map(
          (r) => `
        <div class="visit-row">
          <div class="visit-info">
            <span class="visit-location">${escapeHtml(formatVisitLocation(r))}</span>
            <span class="visit-ip">${escapeHtml(r.ip_address || "Unknown IP")}</span>
          </div>
          <div class="visit-meta">
            <span class="visit-time">${escapeHtml(formatVisitTime(r.viewed_at))}</span>
            <span class="visit-device">${escapeHtml(summarizeUserAgent(r.user_agent))}</span>
          </div>
        </div>
      `
        )
        .join("");
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
      loadAwards();
      loadMilestones();
      loadPublicPlayers();
      loadHallOfFame();
      loadPublicFridays();
      loadHighHandsPublic();
      loadNextGameBanner();
      loadPublicComments();
      loadPublicPot();
      loadLastUpdated();
      loadBjLeaderboard();
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
        else if (tab === "holdem") playCardSnap();
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

    // ------------------------------------------------------------------
    // Awards & Bragging Rights - fun, live-updating superlatives computed
    // entirely from this season's existing results/high_hands data (no
    // new tables, nothing to fill in). Sits at the bottom of the
    // Standings tab. Any award with no qualifying player yet is simply
    // left out, rather than shown empty. Ties are broken by whoever
    // reached that count/streak first (earliest date), per Matt's call.
    // ------------------------------------------------------------------
    function formatAwardDate(iso) {
      if (!iso) return "";
      return new Date(iso + "T00:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric" });
    }

    // Joins 1+ player names into a readable list ("Greg", "Greg & Don",
    // "Greg, Don & Ray") - used so a tied award can credit everyone who
    // qualifies instead of arbitrarily picking just one of them.
    function formatNameList(names) {
      if (names.length === 1) return names[0];
      if (names.length === 2) return `${names[0]} & ${names[1]}`;
      return `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`;
    }

    async function loadAwards() {
      if (!awardsSection || !awardsGrid) return;

      const { data: seasons, error: seasonErr } = await supabaseClient
        .from("seasons")
        .select("*")
        .eq("is_active", true)
        .limit(1);

      const season = !seasonErr && seasons ? seasons[0] : null;
      if (!season) {
        awardsSection.hidden = true;
        awardsGrid.innerHTML = "";
        return;
      }

      const { data: fridays, error: fridaysErr } = await supabaseClient
        .from("fridays")
        .select("id, game_date")
        .eq("season_id", season.id)
        .eq("status", "completed")
        .order("game_date", { ascending: true });

      if (fridaysErr || !fridays || !fridays.length) {
        awardsSection.hidden = true;
        awardsGrid.innerHTML = "";
        return;
      }

      const fridayIds = fridays.map((f) => f.id);
      const fridayDateById = new Map(fridays.map((f) => [f.id, f.game_date]));

      const [resultsRes, playersRes, handsRes] = await Promise.all([
        supabaseClient.from("results").select("player_id, friday_id, placement, bounty_winner").in("friday_id", fridayIds),
        supabaseClient.from("players").select("id, name"),
        supabaseClient.from("high_hands").select("player_id, friday_id, hand_category, tiebreak_ranks, description").in("friday_id", fridayIds),
      ]);

      if (resultsRes.error || playersRes.error || handsRes.error || !resultsRes.data || !playersRes.data) {
        awardsSection.hidden = true;
        awardsGrid.innerHTML = "";
        return;
      }

      const playerMap = new Map(playersRes.data.map((p) => [p.id, p]));

      // Each player's results, oldest to newest, so streaks and "who hit
      // this count first" tie-breaks can be read off in order.
      const byPlayer = new Map();
      for (const r of resultsRes.data) {
        if (!byPlayer.has(r.player_id)) byPlayer.set(r.player_id, []);
        byPlayer.get(r.player_id).push(r);
      }
      for (const list of byPlayer.values()) {
        list.sort((a, b) => (fridayDateById.get(a.friday_id) || "").localeCompare(fridayDateById.get(b.friday_id) || ""));
      }

      // Picks every player tied for the lead in a "most X" style award.
      // `countFor` returns the qualifying events for a player; the award
      // goes to whoever has the most, and anyone tied for that same
      // count is credited together instead of arbitrarily picking one.
      function pickMostAward(countFor) {
        let bestCount = 0;
        let leaders = [];
        for (const [playerId, list] of byPlayer) {
          const count = countFor(list).length;
          if (count === 0) continue;
          if (count > bestCount) {
            bestCount = count;
            leaders = [playerId];
          } else if (count === bestCount) {
            leaders.push(playerId);
          }
        }
        return leaders.length ? { playerIds: leaders, count: bestCount } : null;
      }

      const cards = [];

      // ---- Iron Man: most Fridays played this season ----
      {
        const best = pickMostAward((list) => list);
        if (best) {
          cards.push({
            icon: "🎯",
            title: "Iron Man",
            player: formatNameList(best.playerIds.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${best.count} of ${fridayIds.length} Friday${fridayIds.length === 1 ? "" : "s"} played`,
          });
        }
      }

      // ---- Bounty King: most bounty wins this season ----
      {
        const best = pickMostAward((list) => list.filter((r) => r.bounty_winner));
        if (best) {
          cards.push({
            icon: "💰",
            title: "Bounty King",
            player: formatNameList(best.playerIds.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${best.count} bount${best.count === 1 ? "y" : "ies"} won`,
          });
        }
      }

      // ---- Hot Streak / Cold Streak: current trailing streak, walking
      // backward from each player's most recent game this season ----
      {
        let bestHotCount = 0;
        let hotLeaders = [];
        let bestColdCount = 0;
        let coldLeaders = [];
        for (const [playerId, list] of byPlayer) {
          let hotCount = 0;
          for (let i = list.length - 1; i >= 0; i--) {
            if (list[i].placement != null && list[i].placement <= 3) hotCount++;
            else break;
          }
          let coldCount = 0;
          for (let i = list.length - 1; i >= 0; i--) {
            if (list[i].placement == null || list[i].placement > 3) coldCount++;
            else break;
          }
          if (hotCount >= 2) {
            if (hotCount > bestHotCount) {
              bestHotCount = hotCount;
              hotLeaders = [playerId];
            } else if (hotCount === bestHotCount) {
              hotLeaders.push(playerId);
            }
          }
          if (coldCount >= 2) {
            if (coldCount > bestColdCount) {
              bestColdCount = coldCount;
              coldLeaders = [playerId];
            } else if (coldCount === bestColdCount) {
              coldLeaders.push(playerId);
            }
          }
        }
        if (hotLeaders.length) {
          cards.push({
            icon: "🔥",
            title: "Hot Streak",
            player: formatNameList(hotLeaders.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${bestHotCount} straight top-3 finishes`,
          });
        }
        if (coldLeaders.length) {
          cards.push({
            icon: "🧊",
            title: "Cold Streak",
            player: formatNameList(coldLeaders.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${bestColdCount} games since a top-3`,
          });
        }
      }

      // ---- Best Hand of the Season (reuses the same hand-strength
      // comparison as the High Hands tab's "Season Best" callout) ----
      if (handsRes.data && handsRes.data.length) {
        let best = null;
        for (const hh of handsRes.data) {
          if (!best || compareHandStrength(hh, best) < 0) best = hh;
        }
        if (best) {
          const tiedPlayerIds = [
            ...new Set(handsRes.data.filter((hh) => compareHandStrength(hh, best) === 0).map((hh) => hh.player_id)),
          ];
          const dateLabel = formatAwardDate(fridayDateById.get(best.friday_id));
          cards.push({
            icon: "🃏",
            title: "Best Hand of the Season",
            player: formatNameList(tiedPlayerIds.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${best.description}${dateLabel ? " — " + dateLabel : ""}`,
          });
        }
      }

      // ---- The Bridesmaid: most 2nd-place finishes, with zero wins ----
      {
        const best = pickMostAward((list) => {
          const hasWin = list.some((r) => r.placement === 1);
          return hasWin ? [] : list.filter((r) => r.placement === 2);
        });
        if (best) {
          cards.push({
            icon: "🥈",
            title: "The Bridesmaid",
            player: formatNameList(best.playerIds.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${best.count} second-place finish${best.count === 1 ? "" : "es"}, still no win`,
          });
        }
      }

      // ---- The Bubble: most 4th-place finishes, just missing the top 3 ----
      {
        const best = pickMostAward((list) => list.filter((r) => r.placement === 4));
        if (best) {
          cards.push({
            icon: "😬",
            title: "The Bubble",
            player: formatNameList(best.playerIds.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${best.count} fourth-place finish${best.count === 1 ? "" : "es"}, so close`,
          });
        }
      }

      // ---- Comeback Player: biggest improvement in average placement
      // from the first half of a player's season to the second half.
      // Needs at least 4 recorded placements so each half is a real
      // sample, not noise from one or two games. ----
      {
        let bestImprovement = 0;
        let leaders = [];
        for (const [playerId, list] of byPlayer) {
          const placements = list.map((r) => r.placement).filter((p) => p != null);
          if (placements.length < 4) continue;
          const mid = Math.floor(placements.length / 2);
          const avg = (arr) => arr.reduce((sum, p) => sum + p, 0) / arr.length;
          const improvement = avg(placements.slice(0, mid)) - avg(placements.slice(mid));
          if (improvement <= 0) continue;
          if (improvement > bestImprovement + 0.0001) {
            bestImprovement = improvement;
            leaders = [playerId];
          } else if (Math.abs(improvement - bestImprovement) < 0.0001) {
            leaders.push(playerId);
          }
        }
        if (leaders.length) {
          cards.push({
            icon: "📈",
            title: "Comeback Player",
            player: formatNameList(leaders.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `Average finish improved by ${bestImprovement.toFixed(1)} spots this season`,
          });
        }
      }

      // ---- The Wall: longest streak of consecutive Fridays attended
      // this season, anywhere in the season (not just the current run -
      // that's what Iron Man and the trailing streaks above are for) ----
      {
        let bestStreak = 0;
        let leaders = [];
        for (const [playerId, list] of byPlayer) {
          const attended = new Set(list.map((r) => r.friday_id));
          let current = 0;
          let longest = 0;
          for (const fridayId of fridayIds) {
            if (attended.has(fridayId)) {
              current++;
              longest = Math.max(longest, current);
            } else {
              current = 0;
            }
          }
          if (longest >= 2) {
            if (longest > bestStreak) {
              bestStreak = longest;
              leaders = [playerId];
            } else if (longest === bestStreak) {
              leaders.push(playerId);
            }
          }
        }
        if (leaders.length) {
          cards.push({
            icon: "🧱",
            title: "The Wall",
            player: formatNameList(leaders.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${bestStreak} Fridays in a row, never missed one`,
          });
        }
      }

      // ---- Final Table Fixture: most total top-3 finishes this season,
      // cumulative - unlike Hot Streak above, which only looks at the
      // current trailing run ----
      {
        const best = pickMostAward((list) => list.filter((r) => r.placement != null && r.placement <= 3));
        if (best) {
          cards.push({
            icon: "🪑",
            title: "Final Table Fixture",
            player: formatNameList(best.playerIds.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `${best.count} top-3 finish${best.count === 1 ? "" : "es"} this season`,
          });
        }
      }

      // ---- Last Call: most last-place finishes this season. "Last
      // place" is whoever had the highest placement number recorded
      // that particular Friday, since the field size (and so what
      // counts as last) varies week to week. A fun, self-roasting one -
      // intentionally has no minimum count to qualify. ----
      {
        const maxPlacementByFriday = new Map();
        for (const r of resultsRes.data) {
          if (r.placement == null) continue;
          const current = maxPlacementByFriday.get(r.friday_id) || 0;
          if (r.placement > current) maxPlacementByFriday.set(r.friday_id, r.placement);
        }
        const best = pickMostAward((list) =>
          list.filter((r) => r.placement != null && r.placement === maxPlacementByFriday.get(r.friday_id))
        );
        if (best) {
          cards.push({
            icon: "🪦",
            title: "Last Call",
            player: formatNameList(best.playerIds.map((id) => playerMap.get(id)?.name || "Unknown")),
            stat: `Last out the door ${best.count} time${best.count === 1 ? "" : "s"} this season`,
          });
        }
      }

      if (!cards.length) {
        awardsSection.hidden = true;
        awardsGrid.innerHTML = "";
        return;
      }

      awardsSection.hidden = false;
      awardsGrid.innerHTML = cards
        .map(
          (c) => `
        <div class="award-card">
          <div class="award-icon">${c.icon}</div>
          <div class="award-body">
            <div class="award-title">${escapeHtml(c.title)}</div>
            <div class="award-player">${escapeHtml(c.player)}</div>
            <div class="award-stat">${escapeHtml(c.stat)}</div>
          </div>
        </div>
      `
        )
        .join("");
    }

    // ------------------------------------------------------------------
    // Milestone callouts - shows at the top of the Standings tab, but
    // only in the exact moment a round-number milestone is true: games
    // left in the season (only if you set a planned game count for it),
    // or the pot crossing a $100 mark. Once the next game/buy-in moves
    // past that number, the banner for it quietly goes away again -
    // this is meant to be a "just hit it" callout, not a running stat.
    // ------------------------------------------------------------------
    async function loadMilestones() {
      if (!milestoneList) return;

      const { data: seasons, error: seasonErr } = await supabaseClient
        .from("seasons")
        .select("*")
        .eq("is_active", true)
        .limit(1);

      const season = !seasonErr && seasons ? seasons[0] : null;
      if (!season) {
        milestoneList.innerHTML = "";
        return;
      }

      const { data: fridays, error: fridaysErr } = await supabaseClient
        .from("fridays")
        .select("id, pot_players")
        .eq("season_id", season.id)
        .eq("status", "completed");

      if (fridaysErr || !fridays) {
        milestoneList.innerHTML = "";
        return;
      }

      const gamesPlayed = fridays.length;
      const totalBuyins = fridays.reduce((sum, f) => sum + (f.pot_players || 0), 0);
      const potDollars = totalBuyins * 5;

      const banners = [];

      // ---- Games left in the season (only if a planned count is set) ----
      if (season.planned_games) {
        const gamesLeft = season.planned_games - gamesPlayed;
        const isMilestone = gamesLeft >= 0 && (gamesLeft === 0 || gamesLeft === 1 || gamesLeft % 5 === 0);
        if (isMilestone) {
          const headline =
            gamesLeft === 0
              ? "Final game of the season is in the books!"
              : `${gamesLeft} game${gamesLeft === 1 ? "" : "s"} left in the season!`;
          banners.push({
            headline,
            sub: `${gamesPlayed} of ${season.planned_games} games played`,
          });
        }
      }

      // ---- Pot crossing a $100 mark ----
      if (potDollars > 0 && potDollars % 100 === 0) {
        banners.push({
          headline: `Championship Pot just crossed $${potDollars.toLocaleString()}!`,
          sub: `${totalBuyins} player buy-in${totalBuyins === 1 ? "" : "s"} this season — $5 each`,
        });
      }

      if (!banners.length) {
        milestoneList.innerHTML = "";
        return;
      }

      milestoneList.innerHTML = banners
        .map(
          (b) => `
        <div class="milestone-banner">
          <div class="milestone-label">🎉 Milestone</div>
          <div class="milestone-headline">${escapeHtml(b.headline)}</div>
          <div class="milestone-sub">${escapeHtml(b.sub)}</div>
        </div>
      `
        )
        .join("");
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

    // ------------------------------------------------------------------
    // Hall of Fame - one entry per past (non-active) season, showing
    // whoever finished #1 in points that season. Sits at the bottom of
    // the Players tab. Ties break the same way Standings does (most
    // wins, then name) so there's always exactly one champion. A season
    // with no results recorded is skipped; the whole section is hidden
    // if there are no past seasons with a champion yet.
    // ------------------------------------------------------------------
    async function loadHallOfFame() {
      if (!hofSection || !hofList) return;

      const { data: pastSeasons, error: seasonsErr } = await supabaseClient
        .from("seasons")
        .select("id, name, start_date")
        .eq("is_active", false)
        .order("start_date", { ascending: false });

      if (seasonsErr || !pastSeasons || !pastSeasons.length) {
        hofSection.hidden = true;
        hofList.innerHTML = "";
        return;
      }

      const seasonIds = pastSeasons.map((s) => s.id);

      const [fridaysRes, playersRes] = await Promise.all([
        supabaseClient.from("fridays").select("id, season_id").eq("status", "completed").in("season_id", seasonIds),
        supabaseClient.from("players").select("id, name, photo_url"),
      ]);

      if (fridaysRes.error || playersRes.error || !fridaysRes.data || !playersRes.data || !fridaysRes.data.length) {
        hofSection.hidden = true;
        hofList.innerHTML = "";
        return;
      }

      const fridayIds = fridaysRes.data.map((f) => f.id);
      const seasonIdByFriday = new Map(fridaysRes.data.map((f) => [f.id, f.season_id]));
      const playerMap = new Map(playersRes.data.map((p) => [p.id, p]));

      const { data: results, error: resultsErr } = await supabaseClient
        .from("results")
        .select("player_id, friday_id, placement, total_points")
        .in("friday_id", fridayIds);

      if (resultsErr || !results) {
        hofSection.hidden = true;
        hofList.innerHTML = "";
        return;
      }

      // Aggregate points/wins per player, per season.
      const aggBySeasonPlayer = new Map(); // seasonId -> Map(playerId -> {points, wins})
      for (const r of results) {
        const seasonId = seasonIdByFriday.get(r.friday_id);
        if (!seasonId) continue;
        if (!aggBySeasonPlayer.has(seasonId)) aggBySeasonPlayer.set(seasonId, new Map());
        const seasonAgg = aggBySeasonPlayer.get(seasonId);
        if (!seasonAgg.has(r.player_id)) seasonAgg.set(r.player_id, { points: 0, wins: 0 });
        const a = seasonAgg.get(r.player_id);
        a.points += r.total_points;
        if (r.placement === 1) a.wins += 1;
      }

      const entries = [];
      for (const season of pastSeasons) {
        const seasonAgg = aggBySeasonPlayer.get(season.id);
        if (!seasonAgg || !seasonAgg.size) continue;

        const standings = [...seasonAgg.entries()].map(([playerId, stats]) => ({
          playerId,
          name: playerMap.get(playerId)?.name || "Unknown player",
          ...stats,
        }));
        standings.sort((a, b) => b.points - a.points || b.wins - a.wins || a.name.localeCompare(b.name));

        const champion = standings[0];
        entries.push({
          seasonName: season.name,
          player: playerMap.get(champion.playerId),
          playerName: champion.name,
          points: champion.points,
        });
      }

      if (!entries.length) {
        hofSection.hidden = true;
        hofList.innerHTML = "";
        return;
      }

      hofSection.hidden = false;
      hofList.innerHTML = entries
        .map((e) => {
          const initial = e.playerName ? e.playerName.trim().charAt(0).toUpperCase() : "?";
          const avatar = e.player?.photo_url
            ? `<img src="${escapeHtml(e.player.photo_url)}" alt="" />`
            : escapeHtml(initial);
          return `
        <div class="hof-entry">
          <div class="hof-avatar">${avatar}</div>
          <div class="hof-body">
            <div class="hof-season">${escapeHtml(e.seasonName)}</div>
            <div class="hof-name">${escapeHtml(e.playerName)}</div>
            <div class="hof-stat">${e.points} point${e.points === 1 ? "" : "s"}</div>
          </div>
          <div class="hof-trophy">🏆</div>
        </div>
      `;
        })
        .join("");
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
        .select("friday_id, placement, bounty_winner, total_points, fridays(game_date, status, seasons(name))")
        .eq("player_id", playerId)
        .order("game_date", { foreignTable: "fridays", ascending: false });

      if (historyErr) {
        profileHistoryBody.innerHTML = `<tr><td colspan="5" class="muted">Could not load history: ${escapeHtml(historyErr.message)}</td></tr>`;
        currentProfileHistory = [];
        currentProfileAgg = null;
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

        currentProfileHistory = history || [];
        currentProfileAgg = { totalPoints, played, wins, bounties };
      }

      currentProfilePlayerId = playerId;
      currentProfilePlayerName = player.name;
      await populateRivalrySelect(playerId);

      publicListView.hidden = true;
      publicFridayDetail.hidden = true;
      publicPlayerProfile.hidden = false;
    }

    // ------------------------------------------------------------------
    // Head-to-Head - a fun "tale of the tape" comparing the open profile
    // against another player of your choice: full all-time stats side by
    // side, plus who's had the better finish on nights they've both
    // actually played. Nothing here is written anywhere; it only reads
    // data already shown elsewhere on the site.
    // ------------------------------------------------------------------
    async function populateRivalrySelect(currentPlayerId) {
      if (!rivalrySection || !rivalrySelect || !rivalryResult) return;

      rivalryResult.innerHTML = "";
      rivalrySelect.value = "";

      const { data: players, error } = await supabaseClient
        .from("players")
        .select("id, name")
        .order("name", { ascending: true });

      const others = !error && players ? players.filter((p) => p.id !== currentPlayerId) : [];

      if (!others.length) {
        rivalrySection.hidden = true;
        return;
      }

      rivalrySelect.innerHTML =
        '<option value="">Choose a player…</option>' +
        others.map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("");
      rivalrySection.hidden = false;
    }

    async function computeRivalry(opponentId) {
      if (!opponentId || !currentProfilePlayerId || !currentProfileAgg) {
        rivalryResult.innerHTML = "";
        return;
      }

      rivalryResult.innerHTML = '<p class="muted">Loading…</p>';

      const { data: opponent, error: opponentErr } = await supabaseClient
        .from("players")
        .select("id, name")
        .eq("id", opponentId)
        .single();

      const { data: oppHistory, error: historyErr } = await supabaseClient
        .from("results")
        .select("friday_id, placement, bounty_winner, total_points")
        .eq("player_id", opponentId);

      if (opponentErr || historyErr || !opponent) {
        rivalryResult.innerHTML = '<p class="muted">Could not load that comparison.</p>';
        return;
      }

      const oppList = oppHistory || [];
      const oppAgg = {
        totalPoints: oppList.reduce((sum, r) => sum + r.total_points, 0),
        played: oppList.length,
        wins: oppList.filter((r) => r.placement === 1).length,
        bounties: oppList.filter((r) => r.bounty_winner).length,
      };

      const aName = currentProfilePlayerName;
      const bName = opponent.name;
      const aAgg = currentProfileAgg;
      const aAvg = aAgg.played ? aAgg.totalPoints / aAgg.played : 0;
      const bAvg = oppAgg.played ? oppAgg.totalPoints / oppAgg.played : 0;

      const lead = (a, b) => (a > b ? "lead" : "");

      let tape = `
        <table class="rivalry-tape">
          <thead><tr><th></th><th>${escapeHtml(aName)}</th><th>${escapeHtml(bName)}</th></tr></thead>
          <tbody>
            <tr><td>Total Points</td><td class="${lead(aAgg.totalPoints, oppAgg.totalPoints)}">${aAgg.totalPoints}</td><td class="${lead(oppAgg.totalPoints, aAgg.totalPoints)}">${oppAgg.totalPoints}</td></tr>
            <tr><td>Fridays Played</td><td class="${lead(aAgg.played, oppAgg.played)}">${aAgg.played}</td><td class="${lead(oppAgg.played, aAgg.played)}">${oppAgg.played}</td></tr>
            <tr><td>Avg Pts / Game</td><td class="${lead(aAvg, bAvg)}">${aAgg.played ? aAvg.toFixed(1) : "—"}</td><td class="${lead(bAvg, aAvg)}">${oppAgg.played ? bAvg.toFixed(1) : "—"}</td></tr>
            <tr><td>Wins</td><td class="${lead(aAgg.wins, oppAgg.wins)}">${aAgg.wins}</td><td class="${lead(oppAgg.wins, aAgg.wins)}">${oppAgg.wins}</td></tr>
            <tr><td>Bounties</td><td class="${lead(aAgg.bounties, oppAgg.bounties)}">${aAgg.bounties}</td><td class="${lead(oppAgg.bounties, aAgg.bounties)}">${oppAgg.bounties}</td></tr>
          </tbody>
        </table>
      `;

      // Shared nights: Fridays where both players have a recorded result.
      const oppByFriday = new Map(oppList.map((r) => [r.friday_id, r]));
      const shared = currentProfileHistory.filter((r) => oppByFriday.has(r.friday_id));

      if (!shared.length) {
        rivalryResult.innerHTML = tape + `<p class="muted">${escapeHtml(aName)} and ${escapeHtml(bName)} haven't played a Friday together yet.</p>`;
        return;
      }

      let aBetter = 0;
      let bBetter = 0;
      let aBounties = 0;
      let bBounties = 0;
      for (const r of shared) {
        const opp = oppByFriday.get(r.friday_id);
        if (r.placement != null && opp.placement != null && r.placement !== opp.placement) {
          if (r.placement < opp.placement) aBetter++;
          else bBetter++;
        }
        if (r.bounty_winner) aBounties++;
        if (opp.bounty_winner) bBounties++;
      }

      let leaderLine;
      if (aBetter === bBetter) {
        leaderLine = `Dead even — ${aBetter} of ${shared.length} nights decided each way`;
      } else {
        const [leadName, leadCount] = aBetter > bBetter ? [aName, aBetter] : [bName, bBetter];
        leaderLine = `${escapeHtml(leadName)} has the better finish in ${leadCount} of ${shared.length} night${shared.length === 1 ? "" : "s"} played together`;
      }

      rivalryResult.innerHTML =
        tape +
        `
        <div class="high-hand-callout">
          <div class="hh-callout-label">${escapeHtml(aName)} vs. ${escapeHtml(bName)} — Head to Head</div>
          <div class="rivalry-record">
            <span class="r-name">${escapeHtml(aName)}</span>
            <span class="r-score">${aBetter}</span>
            <span class="r-dash">&ndash;</span>
            <span class="r-score">${bBetter}</span>
            <span class="r-name">${escapeHtml(bName)}</span>
          </div>
          <div class="hh-callout-desc" style="font-size:0.9rem; font-weight:600;">${leaderLine}</div>
          <div class="hh-callout-meta">Bounties on shared nights: ${escapeHtml(aName)} ${aBounties} &middot; ${escapeHtml(bName)} ${bBounties}</div>
        </div>
      `;
    }

    if (rivalrySelect) {
      rivalrySelect.addEventListener("change", () => computeRivalry(rivalrySelect.value));
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
    // chips. The chip balance is tied to whichever league player you say
    // you are (picked once per device, remembered via localStorage) and
    // stored in the shared "blackjack_chips" Supabase table — so it's the
    // same balance no matter which device or browser you play from, and
    // everyone can see a public Chip Leaderboard. Nothing here touches
    // real scoring or the pot. Reuses the realistic flipping-card renderer
    // built for High Hands.
    // ------------------------------------------------------------------
    const bjPlayerPickerEl = document.getElementById("bj-player-picker");
    const bjPlayerSelectEl = document.getElementById("bj-player-select");
    const bjPlayerConfirmBtn = document.getElementById("bj-player-confirm-btn");
    const bjPlayerErrorEl = document.getElementById("bj-player-error");
    const bjPlayerBannerEl = document.getElementById("bj-player-banner");
    const bjPlayerNameEl = document.getElementById("bj-player-name");
    const bjSwitchPlayerBtn = document.getElementById("bj-switch-player-btn");
    const bjLeaderboardSection = document.getElementById("bj-leaderboard-section");
    const bjLeaderboardBody = document.getElementById("bj-leaderboard-body");

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

    const BJ_PLAYER_STORAGE_KEY = "pokerLeagueBlackjackPlayerId";
    const BJ_STARTING_BALANCE = 1000;
    const BJ_MIN_BET = 5;
    const BJ_RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    const BJ_SUITS = ["S", "H", "D", "C"];

    let bjPlayerId = null;
    let bjPlayerName = "";
    let bjBalance = 0;
    let bjDeck = [];
    let bjPlayerHand = [];
    let bjDealerHand = [];
    let bjCurrentBet = 0;
    let bjHandActive = false;

    // ---- Shared chip balance (Supabase-backed, keyed by player_id) ----

    async function fetchOrCreateBjBalance(playerId) {
      const { data, error } = await supabaseClient
        .from("blackjack_chips")
        .select("balance")
        .eq("player_id", playerId)
        .maybeSingle();

      if (error) throw error;
      if (data) return data.balance;

      const { data: inserted, error: insertErr } = await supabaseClient
        .from("blackjack_chips")
        .insert({ player_id: playerId, balance: BJ_STARTING_BALANCE })
        .select("balance")
        .single();
      if (insertErr) throw insertErr;
      return inserted.balance;
    }

    async function persistBjBalance(playerId, amount) {
      if (!playerId) return;
      const { error } = await supabaseClient
        .from("blackjack_chips")
        .upsert({ player_id: playerId, balance: amount, updated_at: new Date().toISOString() });
      if (error) {
        // Pretend chips only — if the shared save fails (offline, RLS, etc.)
        // the game keeps going locally rather than blocking play.
        console.error("Could not save Blackjack balance:", error.message);
      }
      loadBjLeaderboard();
    }

    // ---- Chip Leaderboard — everyone's balance, shared across devices ----

    async function loadBjLeaderboard() {
      if (!bjLeaderboardSection || !bjLeaderboardBody) return;

      const { data, error } = await supabaseClient
        .from("blackjack_chips")
        .select("player_id, balance, players(name)")
        .order("balance", { ascending: false })
        .limit(10);

      if (error || !data || !data.length) {
        bjLeaderboardSection.hidden = true;
        bjLeaderboardBody.innerHTML = "";
        return;
      }

      bjLeaderboardSection.hidden = false;
      bjLeaderboardBody.innerHTML = data
        .map(
          (row, i) => `
        <tr class="${row.player_id === bjPlayerId ? "bj-leaderboard-you" : ""}">
          <td>${i + 1}</td>
          <td>${escapeHtml(row.players?.name || "Unknown")}</td>
          <td>${row.balance.toLocaleString()}</td>
        </tr>
      `
        )
        .join("");
    }

    // ---- Who's playing? (picks which league player's chips this device uses) ----

    async function populateBjPlayerSelect() {
      const { data, error } = await supabaseClient
        .from("players")
        .select("id, name")
        .eq("is_active", true)
        .order("name", { ascending: true });

      if (error || !data) {
        bjPlayerErrorEl.textContent = "Could not load players: " + (error?.message || "unknown error");
        return [];
      }
      bjPlayerSelectEl.innerHTML = data.map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("");
      return data;
    }

    function showBjPlayerPicker(preselectId) {
      bjPlayerBannerEl.hidden = true;
      bjPlayerPickerEl.hidden = false;
      setBjBetControlsEnabled(false);
      bjDealBtn.disabled = true;
      if (preselectId) bjPlayerSelectEl.value = preselectId;
    }

    async function selectBjPlayer(id, name) {
      bjPlayerId = id;
      bjPlayerName = name;
      try {
        window.localStorage.setItem(BJ_PLAYER_STORAGE_KEY, id);
      } catch (err) {
        // localStorage unavailable (private browsing, etc.) — the device
        // just won't remember the choice next visit.
      }

      bjPlayerErrorEl.textContent = "";
      bjPlayerNameEl.textContent = name;
      bjPlayerPickerEl.hidden = true;
      bjPlayerBannerEl.hidden = false;

      bjBalanceEl.textContent = "…";
      try {
        bjBalance = await fetchOrCreateBjBalance(id);
      } catch (err) {
        bjErrorEl.textContent = "Could not load your chip balance: " + err.message;
        return;
      }

      updateBjBalanceDisplay();
      bjBetInput.max = bjBalance;
      if (!bjHandActive) {
        setBjBetControlsEnabled(true);
        bjDealBtn.disabled = bjBalance < BJ_MIN_BET;
        bjErrorEl.textContent = bjBalance < BJ_MIN_BET ? "Out of chips — hit Reset Chips to start over." : "";
      }
      loadBjLeaderboard();
    }

    if (bjPlayerConfirmBtn) {
      bjPlayerConfirmBtn.addEventListener("click", () => {
        const id = bjPlayerSelectEl.value;
        const name = bjPlayerSelectEl.selectedOptions[0]?.textContent || "";
        if (!id) {
          bjPlayerErrorEl.textContent = "Add at least one active player in Admin first.";
          return;
        }
        selectBjPlayer(id, name);
      });
    }

    if (bjSwitchPlayerBtn) {
      bjSwitchPlayerBtn.addEventListener("click", () => {
        if (bjHandActive) {
          bjErrorEl.textContent = "Finish this hand before switching players.";
          return;
        }
        showBjPlayerPicker(bjPlayerId);
      });
    }

    async function initBlackjackPlayer() {
      const players = await populateBjPlayerSelect();
      if (!players.length) {
        bjPlayerErrorEl.textContent = "Add at least one active player in Admin before playing Blackjack.";
        showBjPlayerPicker();
        return;
      }

      let rememberedId = null;
      try {
        rememberedId = window.localStorage.getItem(BJ_PLAYER_STORAGE_KEY);
      } catch (err) {
        rememberedId = null;
      }

      const remembered = rememberedId ? players.find((p) => p.id === rememberedId) : null;
      if (remembered) {
        selectBjPlayer(remembered.id, remembered.name);
      } else {
        showBjPlayerPicker();
      }
    }

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

      persistBjBalance(bjPlayerId, bjBalance);
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
      persistBjBalance(bjPlayerId, bjBalance);
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
      if (!bjPlayerId) {
        bjErrorEl.textContent = "Pick who's playing first.";
        return;
      }

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
      persistBjBalance(bjPlayerId, bjBalance);
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
        if (!bjPlayerId) {
          bjErrorEl.textContent = "Pick who's playing first.";
          return;
        }
        if (!window.confirm("Reset your Blackjack chips back to 1000?")) return;
        bjBalance = BJ_STARTING_BALANCE;
        persistBjBalance(bjPlayerId, bjBalance);
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
      initBlackjackPlayer();
    }

    // ------------------------------------------------------------------
    // Texas Hold'em — one shared table for the whole league. Every visitor's
    // browser reads/writes the same Supabase rows (holdem_table + the 8
    // holdem_seats), synced live via Realtime, so anyone who joins from any
    // device is playing at the same table together. One connected browser is
    // elected "host" at a time and is responsible for dealing, running AI
    // turns, and auto-folding anyone who goes quiet on their turn; everyone
    // else's browser writes only its own seat's own actions. Same realistic
    // card renderer, hand evaluator, and sound effects as the rest of the app.
    //
    // Trust note: like Feedback and the Blackjack chip balance, this site has
    // no visitor login, so nothing stops someone from editing any seat (or
    // reading anyone's hole cards) via the raw API. The UI never shows you
    // someone else's cards. Fine for a trusted friend group, not a real
    // security boundary.
    // ------------------------------------------------------------------
    const heLobbyBarEl = document.getElementById("he-lobby-bar");
    const heSeatsFilledTextEl = document.getElementById("he-seats-filled-text");
    const heFillAiToggleEl = document.getElementById("he-fill-ai-toggle");
    const heJoinRowEl = document.getElementById("he-join-row");
    const hePlayerSelectEl = document.getElementById("he-player-select");
    const heJoinBtn = document.getElementById("he-join-btn");
    const heYourSeatBarEl = document.getElementById("he-your-seat-bar");
    const heYourSeatNameEl = document.getElementById("he-your-seat-name");
    const heYourSeatStackEl = document.getElementById("he-your-seat-stack");
    const heLeaveBtn = document.getElementById("he-leave-btn");
    const heSitOutBtn = document.getElementById("he-sit-out-btn");
    const heReturnBtn = document.getElementById("he-return-btn");
    const heWaitingNoticeEl = document.getElementById("he-waiting-notice");
    const heBustedNoticeEl = document.getElementById("he-busted-notice");
    const heTableEl = document.getElementById("he-table");
    const heSeatsListEl = document.getElementById("he-seats-list");
    const hePotDisplayEl = document.getElementById("he-pot-display");
    const heCommunityCardsEl = document.getElementById("he-community-cards");
    const heStreetLabelEl = document.getElementById("he-street-label");
    const heActionsEl = document.getElementById("he-actions");
    const heFoldBtn = document.getElementById("he-fold-btn");
    const heCheckCallBtn = document.getElementById("he-check-call-btn");
    const heRaiseInput = document.getElementById("he-raise-input");
    const heRaiseSlider = document.getElementById("he-raise-slider");
    const heRaiseBtn = document.getElementById("he-raise-btn");
    const heLogEl = document.getElementById("he-log");
    const heShowdownEl = document.getElementById("he-showdown");
    const heOutcomeBannerEl = document.getElementById("he-outcome-banner");
    const heShowdownSummaryEl = document.getElementById("he-showdown-summary");
    const heNextHandCountdownEl = document.getElementById("he-next-hand-countdown");
    const heErrorEl = document.getElementById("he-error");

    const HOLDEM_SEAT_COUNT = 8;
    const HOLDEM_STARTING_STACK = 1000;
    const HOLDEM_SMALL_BLIND = 10;
    const HOLDEM_BIG_BLIND = 20;
    const HOLDEM_ACTION_TIMEOUT_MS = 45000; // humans get 45s to act before being auto-folded
    const HOLDEM_AI_THINK_MS = 1400; // AI seats "act" quickly instead of waiting out the timeout
    const HOLDEM_SHOWDOWN_PAUSE_MS = 6000; // pause after a hand ends before the next one is dealt
    const HOLDEM_HOST_STALE_MS = 8000; // how long before another seated browser can take over as host
    const HOLDEM_DISCONNECT_MS = 90000; // seated-but-quiet humans get freed up after ~90s between hands
    const HOLDEM_IDLE_HAND_LIMIT = 5; // auto-folded (never acted) this many hands in a row -> seat is freed up
    const HOLDEM_TICK_MS = 1000;
    const HOLDEM_SEAT_STORAGE_KEY = "pokerLeagueHoldemSeat";

    // Fallback names/personalities for AI-filled seats. Assigned deterministically
    // by seat number (seat 0 -> pool[0], etc.) so every browser agrees on who's
    // who without needing to coordinate the choice.
    const HOLDEM_AI_POOL = [
      { name: "Duke", personality: "aggressive" },
      { name: "Belle", personality: "loose" },
      { name: "Ace", personality: "tight" },
      { name: "Trix", personality: "loose" },
      { name: "Reed", personality: "tight" },
      { name: "Cruz", personality: "aggressive" },
      { name: "Nova", personality: "loose" },
      { name: "Hawk", personality: "tight" },
    ];

    // ---- Best-of-7 hand evaluation (built on the existing evaluatePokerHand) ----
    function compareEvaluatedHands(a, b) {
      if (a.category !== b.category) return a.category - b.category; // lower category number = better
      const len = Math.max(a.tiebreak.length, b.tiebreak.length);
      for (let i = 0; i < len; i++) {
        const va = a.tiebreak[i] ?? 0;
        const vb = b.tiebreak[i] ?? 0;
        if (va !== vb) return vb - va;
      }
      return 0;
    }

    function chooseK(arr, k) {
      const results = [];
      function combo(start, chosen) {
        if (chosen.length === k) {
          results.push(chosen.slice());
          return;
        }
        for (let i = start; i < arr.length; i++) {
          chosen.push(arr[i]);
          combo(i + 1, chosen);
          chosen.pop();
        }
      }
      combo(0, []);
      return results;
    }

    function evaluateBestHand(cards) {
      if (cards.length === 5) return evaluatePokerHand(cards);
      const combos = chooseK(cards, 5);
      let best = null;
      for (const combo of combos) {
        const evaluated = evaluatePokerHand(combo);
        if (!best || compareEvaluatedHands(evaluated, best) < 0) best = evaluated;
      }
      return best;
    }

    // ---- Side-pot math (handles uneven all-ins) ----
    function computeSidePots(players) {
      const withMoney = players.filter((p) => p.contributed > 0);
      const sorted = [...withMoney].sort((a, b) => a.contributed - b.contributed);
      const pots = [];
      let prevLevel = 0;
      for (let i = 0; i < sorted.length; i++) {
        const level = sorted[i].contributed;
        if (level > prevLevel) {
          const numContributors = sorted.length - i;
          const amount = (level - prevLevel) * numContributors;
          const eligible = sorted.slice(i).filter((p) => !p.folded).map((p) => p.id);
          if (amount > 0) pots.push({ amount, eligible });
          prevLevel = level;
        }
      }
      return pots;
    }

    // ---- Betting-round turn order / reopening logic ----
    function rotateAfter(seatOrder, afterId) {
      const idx = seatOrder.indexOf(afterId);
      return [...seatOrder.slice(idx + 1), ...seatOrder.slice(0, idx + 1)];
    }

    function nextActionOrder(seatOrder, fromId, players) {
      return rotateAfter(seatOrder, fromId).filter((id) => id !== fromId && !players[id].folded && !players[id].allIn);
    }

    // seatOrder is [dealer, sb, bb, ...]. Heads-up is special: preflop the
    // dealer (who also posts the small blind) acts first; postflop the
    // other player (big blind) acts first.
    function buildStreetOrder(seatOrder, activeIds, isPreflop) {
      const active = seatOrder.filter((id) => activeIds.includes(id));
      if (active.length === 2) {
        // Whichever of the two remaining active players sits closest to the
        // button (first in seat order) is treated as "the dealer" for
        // heads-up action purposes. Usually that's the literal hand dealer,
        // but if the actual dealer already folded this hand while two OTHER
        // players remain, seatOrder[0] itself would be inactive - active[0]
        // correctly falls back to whichever of the two live players is next
        // closest to the button instead.
        const dealer = active[0];
        const other = active[1];
        return isPreflop ? [dealer, other] : [other, dealer];
      }
      const anchor = isPreflop ? seatOrder[2] : seatOrder[0];
      return rotateAfter(seatOrder, anchor).filter((id) => activeIds.includes(id));
    }

    // ---- Simple AI opponents ----
    const AI_PERSONALITIES = {
      tight: { aggression: 0.12, looseness: 0.05, bluffRate: 0.03 },
      loose: { aggression: 0.03, looseness: 0.16, bluffRate: 0.09 },
      aggressive: { aggression: 0.22, looseness: 0.08, bluffRate: 0.14 },
    };

    function estimatePreflopStrength(hole) {
      const r1 = RANK_NUMERIC[hole[0].slice(0, -1)];
      const r2 = RANK_NUMERIC[hole[1].slice(0, -1)];
      const suited = hole[0].slice(-1) === hole[1].slice(-1);
      const pair = r1 === r2;
      const hi = Math.max(r1, r2);
      const lo = Math.min(r1, r2);
      let score = (hi / 14) * 0.55 + (lo / 14) * 0.25;
      if (pair) score += 0.25 + (hi / 14) * 0.15;
      if (suited) score += 0.08;
      if (!pair) score += Math.max(0, 5 - (hi - lo)) * 0.015;
      return Math.max(0, Math.min(1, score));
    }

    // Category number alone is a poor proxy for real equity (trips/two pair
    // are much stronger than a linear 1-10 scale implies), so use a rough
    // calibrated table of "typical equity vs a random continuing hand"
    // instead, nudged slightly by strength within the category.
    const CATEGORY_BASE_STRENGTH = { 1: 0.99, 2: 0.97, 3: 0.95, 4: 0.9, 5: 0.82, 6: 0.75, 7: 0.68, 8: 0.58, 9: 0.42, 10: 0.2 };
    function estimatePostflopStrength(hole, community) {
      const best = evaluateBestHand([...hole, ...community]);
      const base = CATEGORY_BASE_STRENGTH[best.category];
      const topTiebreak = best.tiebreak[0] || 2;
      const kickerBonus = ((topTiebreak - 2) / 12) * 0.08 - 0.04;
      return Math.max(0.05, Math.min(0.99, base + kickerBonus));
    }

    function computeAiBetAmount(potSize, strength, stack) {
      const raw = Math.round(potSize * (0.4 + strength * 0.35));
      return Math.max(1, Math.min(raw, stack));
    }

    function computeAiRaiseAmount(potSize, betToCall, minRaise, strength, stack) {
      const raw = betToCall + Math.round(potSize * (0.5 + strength * 0.4));
      const withFloor = Math.max(betToCall + minRaise, raw);
      return Math.min(withFloor, stack);
    }

    function aiDecideAction({ hole, community, street, betToCall, potSize, stack, minRaise, personality }) {
      const p = AI_PERSONALITIES[personality] || AI_PERSONALITIES.tight;
      let strength = street === "preflop" ? estimatePreflopStrength(hole) : estimatePostflopStrength(hole, community);
      strength = Math.max(0, Math.min(1, strength + (Math.random() - 0.5) * p.looseness));

      if (betToCall >= stack) {
        const requiredEquity = potSize > 0 ? stack / (potSize + stack) : 1;
        if (strength + 0.1 >= requiredEquity) return { action: "allin", amount: stack };
        return { action: "fold" };
      }

      if (Math.random() < p.bluffRate) {
        if (betToCall === 0) return { action: "bet", amount: computeAiBetAmount(potSize, 0.9, stack) };
        return { action: "raise", amount: computeAiRaiseAmount(potSize, betToCall, minRaise, 0.9, stack) };
      }

      if (betToCall === 0) {
        if (strength > 0.6 + p.aggression) return { action: "bet", amount: computeAiBetAmount(potSize, strength, stack) };
        return { action: "check" };
      }

      const requiredEquity = betToCall / (potSize + betToCall);
      if (strength < requiredEquity - 0.05) return { action: "fold" };
      if (strength > requiredEquity + 0.25 + p.aggression) {
        return { action: "raise", amount: computeAiRaiseAmount(potSize, betToCall, minRaise, strength, stack) };
      }
      return { action: "call" };
    }

    // ---- Shared table state (mirrors the holdem_table / holdem_seats rows) ----
    let heTableRow = null; // last-known holdem_table row (snake_case fields, straight from Supabase)
    let heSeats = new Array(HOLDEM_SEAT_COUNT).fill(null); // index = seat_number
    let heMySeat = null; // seat_number this browser currently occupies, or null
    let heMyPlayerId = null; // the league player id seated in heMySeat
    let heAmHost = false;
    let heChannel = null;
    let heTickTimer = null;
    let heLastHeartbeatAt = 0;
    let heLastResyncAt = 0;
    let heBusyAction = false; // guards against double-submitting while a write is in flight
    let heShowBustedNotice = false;
    let heRenderedSignatures = {};
    let heSeatsListSignature = "";
    let heLastHandNumberSeen = -1;

    // Cards only get (re-)rendered when what they show actually changes,
    // keyed by element id, so an action elsewhere on the table doesn't replay
    // the flip-in animation on cards that haven't changed.
    function renderCardsIfChanged(el, signature, htmlFn) {
      if (!el || heRenderedSignatures[el.id] === signature) return;
      heRenderedSignatures[el.id] = signature;
      el.innerHTML = htmlFn();
    }

    function heNowIso() {
      return new Date().toISOString();
    }

    function heFutureIso(ms) {
      return new Date(Date.now() + ms).toISOString();
    }

    function heIsStreetActive(street) {
      return street === "preflop" || street === "flop" || street === "turn" || street === "river";
    }

    function heRevealCount(street) {
      if (street === "flop") return 3;
      if (street === "turn") return 4;
      if (street === "river" || street === "showdown") return 5;
      return 0;
    }

    // Physical seat order starting at the dealer button, filtered down to just
    // the seats dealt into the current hand. Recomputed from dealer_seat +
    // hand_seats rather than stored separately, so there's nothing extra to
    // keep in sync.
    function heHandSeatOrder(table) {
      const order = [];
      for (let i = 0; i < HOLDEM_SEAT_COUNT; i++) order.push((table.dealer_seat + i) % HOLDEM_SEAT_COUNT);
      return order.filter((s) => table.hand_seats.includes(s));
    }

    function heNextDealerSeat(prevDealer, handSeats) {
      if (prevDealer === null || prevDealer === undefined) return handSeats[0];
      for (let i = 1; i <= HOLDEM_SEAT_COUNT; i++) {
        const candidate = (prevDealer + i) % HOLDEM_SEAT_COUNT;
        if (handSeats.includes(candidate)) return candidate;
      }
      return handSeats[0];
    }

    function heSeatFoldAllInMap(seatsArr, patchSeatNum, patch) {
      const map = {};
      seatsArr.forEach((s) => {
        if (!s) return;
        const merged = s.seat_number === patchSeatNum ? { ...s, ...patch } : s;
        map[s.seat_number] = { folded: !!merged.folded, allIn: !!merged.all_in };
      });
      return map;
    }

    function heAiProfileForSeat(seatNumber) {
      return HOLDEM_AI_POOL[seatNumber % HOLDEM_AI_POOL.length];
    }

    // ---- Loading + Realtime sync ----
    async function heLoadState() {
      const [{ data: tableRow, error: tableErr }, { data: seatRows, error: seatErr }] = await Promise.all([
        supabaseClient.from("holdem_table").select("*").eq("id", 1).single(),
        supabaseClient.from("holdem_seats").select("*").order("seat_number", { ascending: true }),
      ]);
      if (tableErr || seatErr) {
        heErrorEl.textContent = "Could not load the table: " + (tableErr?.message || seatErr?.message || "unknown error");
        return;
      }
      heTableRow = tableRow;
      heSeats = new Array(HOLDEM_SEAT_COUNT).fill(null);
      (seatRows || []).forEach((row) => {
        heSeats[row.seat_number] = row;
      });
      heReconcileMySeat();
      heRenderHoldem();
    }

    function heSubscribeRealtime() {
      if (heChannel) return;
      heChannel = supabaseClient
        .channel("holdem-table-sync")
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "holdem_table" }, (payload) => {
          if (payload.new) heTableRow = payload.new;
          heReconcileMySeat();
          heRenderHoldem();
        })
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "holdem_seats" }, (payload) => {
          if (payload.new && typeof payload.new.seat_number === "number") heSeats[payload.new.seat_number] = payload.new;
          heReconcileMySeat();
          heRenderHoldem();
        })
        .subscribe();
    }

    // If the seat we think is "ours" no longer has our player in it (someone
    // reset it — we left, got auto-removed for going stale, or busted out),
    // forget it locally and let the UI fall back to the join screen.
    function heReconcileMySeat() {
      if (heMySeat === null) return;
      const seat = heSeats[heMySeat];
      if (!seat || seat.player_id !== heMyPlayerId) {
        heShowBustedNotice = true;
        heMySeat = null;
        heMyPlayerId = null;
        try {
          window.localStorage.removeItem(HOLDEM_SEAT_STORAGE_KEY);
        } catch (err) {
          // ignore
        }
      }
    }

    async function populateHePlayerSelect() {
      const { data, error } = await supabaseClient.from("players").select("id, name").eq("is_active", true).order("name", { ascending: true });
      if (error || !data) {
        heErrorEl.textContent = "Could not load players: " + (error?.message || "unknown error");
        return [];
      }
      hePlayerSelectEl.innerHTML = data.map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("");
      return data;
    }

    // ---- Join / leave ----
    async function heJoinTable(playerId, playerName) {
      heErrorEl.textContent = "";
      heShowBustedNotice = false;

      // Already seated somewhere (e.g. this same player on another device, or
      // us after a reload)? Just reclaim it instead of taking a second seat.
      const already = heSeats.find((s) => s && s.player_id === playerId);
      if (already) {
        heMySeat = already.seat_number;
        heMyPlayerId = playerId;
        heRememberSeat(already.seat_number);
        // Picking your own name again while sitting out (e.g. from another
        // device, or after local storage forgot you) should bring you back
        // to the action, same as the "I'm Back" button.
        if (already.status === "sitting_out") {
          const { data } = await supabaseClient
            .from("holdem_seats")
            .update({ status: "seated", idle_hands: 0, last_seen: heNowIso() })
            .eq("seat_number", already.seat_number)
            .eq("player_id", playerId)
            .select();
          if (data && data.length) heSeats[already.seat_number] = data[0];
        }
        heRenderHoldem();
        heStartTickLoop();
        return;
      }

      for (let attempt = 0; attempt < 5; attempt++) {
        // Prefer a truly empty seat; if the table's full of AI, bump the
        // lowest-numbered AI seat to make room for a real person.
        let candidate = heSeats.findIndex((s) => s && s.status === "empty");
        let guardColumn = "status";
        let guardValue = "empty";
        if (candidate === -1) {
          candidate = heSeats.findIndex((s) => s && s.is_ai);
          guardColumn = "is_ai";
          guardValue = true;
        }
        if (candidate === -1) {
          heErrorEl.textContent = "The table is full — try again once a seat opens up.";
          return;
        }

        const patch = {
          player_id: playerId,
          player_name: playerName,
          is_ai: false,
          personality: null,
          status: "seated",
          stack: HOLDEM_STARTING_STACK,
          hole_cards: [],
          bet_this_street: 0,
          total_contributed: 0,
          folded: false,
          all_in: false,
          idle_hands: 0,
          last_seen: heNowIso(),
          joined_at: heNowIso(),
          updated_at: heNowIso(),
        };

        const { data, error } = await supabaseClient
          .from("holdem_seats")
          .update(patch)
          .eq("seat_number", candidate)
          .eq(guardColumn, guardValue)
          .select();

        if (!error && data && data.length) {
          heMySeat = candidate;
          heMyPlayerId = playerId;
          heSeats[candidate] = data[0];
          heRememberSeat(candidate);
          heRenderHoldem();
          heStartTickLoop();
          return;
        }
        // Lost the race for that seat — refresh and try again.
        await heLoadState();
      }
      heErrorEl.textContent = "Couldn't grab a seat just then — try again.";
    }

    async function heLeaveTable() {
      if (heMySeat === null) return;
      const seatNum = heMySeat;
      const seat = heSeats[seatNum];
      heMySeat = null;
      heMyPlayerId = null;
      try {
        window.localStorage.removeItem(HOLDEM_SEAT_STORAGE_KEY);
      } catch (err) {
        // ignore
      }

      if (seat && heTableRow && heIsStreetActive(heTableRow.street) && heTableRow.hand_seats.includes(seatNum) && !seat.folded) {
        // Mid-hand and still live — fold out first so the pot math stays
        // correct, then clear the seat so someone else (or an AI) can take it.
        await supabaseClient
          .from("holdem_seats")
          .update({ folded: true, status: "empty", player_id: null, player_name: null, last_seen: heNowIso() })
          .eq("seat_number", seatNum);
        if (heTableRow.action_seat === seatNum) {
          await heCommitAction(heTableRow, heSeats, seatNum, "fold");
        }
      } else {
        await supabaseClient
          .from("holdem_seats")
          .update({
            player_id: null,
            player_name: null,
            is_ai: false,
            personality: null,
            status: "empty",
            stack: HOLDEM_STARTING_STACK,
            hole_cards: [],
            bet_this_street: 0,
            total_contributed: 0,
            folded: false,
            all_in: false,
            last_seen: null,
            joined_at: null,
          })
          .eq("seat_number", seatNum);
      }

      if (heTableRow && heTableRow.host_seat === seatNum) {
        await supabaseClient.from("holdem_table").update({ host_seat: null, version: heTableRow.version + 1 }).eq("id", 1).eq("version", heTableRow.version);
      }
      heAmHost = false;

      // If that was the last human at the table, clear the AI seats out
      // too — otherwise they'd just sit there dangling with no one left to
      // run their turns, and the next visitor would find a table that
      // LOOKS full but isn't actually being played.
      await heClearTableIfNoHumansLeft(seatNum);

      heRenderHoldem();
    }

    // Shared by Leave and by busting out: if no human is left seated (or
    // sitting out) anywhere at the table, wipe every seat — including any
    // AI — and reset the table row to a clean waiting state. Without this,
    // AI seats a solo player leaves behind just sit there indefinitely:
    // nothing's left to drive their turns (host duties require a seated
    // human browser), so the table freezes mid-game instead of actually
    // clearing, and the next person to look finds seats "filled" by a game
    // that isn't really happening.
    async function heClearTableIfNoHumansLeft(excludeSeat) {
      const anyHumanLeft = heSeats.some(
        (s, n) => n !== excludeSeat && s && !s.is_ai && s.player_id && (s.status === "seated" || s.status === "sitting_out")
      );
      if (anyHumanLeft) return false;
      const anySeatOccupied = heSeats.some((s, n) => n !== excludeSeat && s && s.status !== "empty");
      if (!anySeatOccupied) return false;

      // Re-fetch the current row rather than trusting a locally-tracked
      // version number — a fold or a host-seat clear may have just
      // happened above, so we need whatever version is actually in the
      // database right now, not a stale guess.
      const { data: freshTable, error: fetchErr } = await supabaseClient.from("holdem_table").select("version, log").eq("id", 1).single();
      if (fetchErr || !freshTable) return false;

      await Promise.all(
        Array.from({ length: HOLDEM_SEAT_COUNT }, (_, n) =>
          supabaseClient
            .from("holdem_seats")
            .update({
              player_id: null,
              player_name: null,
              is_ai: false,
              personality: null,
              status: "empty",
              stack: HOLDEM_STARTING_STACK,
              hole_cards: [],
              bet_this_street: 0,
              total_contributed: 0,
              folded: false,
              all_in: false,
              last_seen: null,
              joined_at: null,
            })
            .eq("seat_number", n)
        )
      );

      const resetTablePatch = {
        street: "waiting",
        community_cards: [],
        current_bet: 0,
        min_raise: HOLDEM_BIG_BLIND,
        dealer_seat: null,
        action_seat: null,
        host_seat: null,
        host_last_beat: null,
        action_deadline: null,
        pending_seats: [],
        hand_seats: [],
        log: ["Table cleared — everyone left."],
        version: freshTable.version + 1,
        updated_at: heNowIso(),
      };

      await supabaseClient.from("holdem_table").update(resetTablePatch).eq("id", 1).eq("version", freshTable.version);

      for (let n = 0; n < HOLDEM_SEAT_COUNT; n++) {
        heSeats[n] = {
          ...(heSeats[n] || { seat_number: n }),
          player_id: null,
          player_name: null,
          is_ai: false,
          personality: null,
          status: "empty",
          stack: HOLDEM_STARTING_STACK,
          hole_cards: [],
          bet_this_street: 0,
          total_contributed: 0,
          folded: false,
          all_in: false,
        };
      }

      // Update the locally-cached table row too, not just the DB — whoever
      // called us is about to re-render right after this returns, and
      // without this it would render from the stale pre-clear row (for
      // example still showing "showdown" with the last hand's revealed
      // cards) until the next realtime update or periodic resync caught up.
      if (heTableRow) heTableRow = { ...heTableRow, ...resetTablePatch };

      return true;
    }

    // Sitting out keeps your seat and chips reserved — unlike Leave, nobody
    // (not even an AI) can take your spot, and new hands skip you until you
    // come back. If a hand's already live, fold out of just that one hand
    // first so the pot math stays correct.
    async function heSitOut() {
      if (heMySeat === null) return;
      const seatNum = heMySeat;
      const seat = heSeats[seatNum];
      if (!seat) return;

      const midHandLive = heTableRow && heIsStreetActive(heTableRow.street) && heTableRow.hand_seats.includes(seatNum) && !seat.folded;

      if (midHandLive) {
        await supabaseClient
          .from("holdem_seats")
          .update({ folded: true, status: "sitting_out", idle_hands: 0, last_seen: heNowIso() })
          .eq("seat_number", seatNum);
        if (heTableRow.action_seat === seatNum) {
          await heCommitAction(heTableRow, heSeats, seatNum, "fold");
        }
      } else {
        await supabaseClient.from("holdem_seats").update({ status: "sitting_out", idle_hands: 0, last_seen: heNowIso() }).eq("seat_number", seatNum);
      }
      // Reflect it locally right away rather than waiting on the realtime
      // round-trip, so the buttons/notice swap instantly.
      if (heSeats[seatNum]) heSeats[seatNum] = { ...heSeats[seatNum], status: "sitting_out", folded: midHandLive ? true : heSeats[seatNum].folded };
      heRenderHoldem();
    }

    // The companion to Sit Out — same seat, same chips, just marked active
    // again so you're dealt into the next hand.
    async function heReturnFromSitOut() {
      if (heMySeat === null) return;
      await supabaseClient
        .from("holdem_seats")
        .update({ status: "seated", idle_hands: 0, last_seen: heNowIso() })
        .eq("seat_number", heMySeat)
        .eq("player_id", heMyPlayerId);
      if (heSeats[heMySeat]) heSeats[heMySeat] = { ...heSeats[heMySeat], status: "seated" };
      heRenderHoldem();
    }

    function heRememberSeat(seatNum) {
      try {
        window.localStorage.setItem(HOLDEM_SEAT_STORAGE_KEY, String(seatNum));
      } catch (err) {
        // ignore — device just won't remember the seat next visit
      }
    }

    // ---- Host election + heartbeat ----
    async function heMaybeClaimHost() {
      if (heMySeat === null || !heTableRow) return;
      const stale = !heTableRow.host_seat || !heTableRow.host_last_beat || Date.now() - new Date(heTableRow.host_last_beat).getTime() > HOLDEM_HOST_STALE_MS;
      if (heTableRow.host_seat === heMySeat) {
        heAmHost = true;
        return;
      }
      if (!stale) {
        heAmHost = false;
        return;
      }
      const { data, error } = await supabaseClient
        .from("holdem_table")
        .update({ host_seat: heMySeat, host_last_beat: heNowIso(), version: heTableRow.version + 1 })
        .eq("id", 1)
        .eq("version", heTableRow.version)
        .select();
      if (!error && data && data.length) {
        heTableRow = data[0];
        heAmHost = true;
      }
    }

    async function heSendHostHeartbeat() {
      if (!heAmHost || heMySeat === null || !heTableRow || heTableRow.host_seat !== heMySeat) return;
      const { data, error } = await supabaseClient.from("holdem_table").update({ host_last_beat: heNowIso() }).eq("id", 1).eq("host_seat", heMySeat).select();
      if (error || !data || !data.length) heAmHost = false;
      else heTableRow = data[0];
    }

    // ---- Turn actions (fold / check / call / bet / raise) ----
    // Shared by the real human clicking their own buttons, and the host
    // acting on behalf of an AI seat or auto-folding someone who's gone
    // quiet. Always writes the table row (with a version guard) before
    // touching the seat row, so a race between a human's click and a
    // host-driven timeout can never both land. `opts.auto` marks the
    // host's timeout fold specifically (as opposed to a human's own
    // click, or the fold a human triggers by leaving/sitting out) - that's
    // what idle_hands counts, so heHostPruneIdleSeats can free up a seat
    // that's gone quiet for HOLDEM_IDLE_HAND_LIMIT hands in a row.
    async function heCommitAction(table, seatsArr, seatNum, action, amount, opts) {
      if (table.action_seat !== seatNum) return false;
      const seat = seatsArr[seatNum];
      if (!seat) return false;

      const seatPatch = { last_seen: heNowIso() };
      if (!seat.is_ai) {
        seatPatch.idle_hands = opts && opts.auto ? (seat.idle_hands || 0) + 1 : 0;
      }
      let newCurrentBet = table.current_bet;
      let newMinRaise = table.min_raise;
      let newPendingSeats = table.pending_seats.slice(1);
      let logMsg;

      if (action === "fold") {
        seatPatch.folded = true;
        logMsg = `${seat.player_name} folds.`;
      } else if (action === "check") {
        logMsg = `${seat.player_name} checks.`;
      } else {
        const chipsIn = action === "call" ? Math.max(0, table.current_bet - seat.bet_this_street) : amount;
        const actual = Math.max(0, Math.min(chipsIn, seat.stack));
        const wasOpen = table.current_bet === 0;
        seatPatch.stack = seat.stack - actual;
        seatPatch.bet_this_street = seat.bet_this_street + actual;
        seatPatch.total_contributed = seat.total_contributed + actual;
        if (seatPatch.stack === 0) seatPatch.all_in = true;
        const raised = seatPatch.bet_this_street > table.current_bet;
        if (raised) {
          newMinRaise = Math.max(HOLDEM_BIG_BLIND, seatPatch.bet_this_street - table.current_bet);
          newCurrentBet = seatPatch.bet_this_street;
          const seatOrder = heHandSeatOrder(table);
          const map = heSeatFoldAllInMap(seatsArr, seatNum, seatPatch);
          newPendingSeats = nextActionOrder(seatOrder, seatNum, map);
        }
        if (seatPatch.all_in) logMsg = `${seat.player_name} goes all-in for ${actual}!`;
        else if (raised && wasOpen) logMsg = `${seat.player_name} bets ${seatPatch.bet_this_street}.`;
        else if (raised) logMsg = `${seat.player_name} raises to ${seatPatch.bet_this_street}.`;
        else logMsg = `${seat.player_name} calls ${actual}.`;
      }

      const stillIn = table.hand_seats.filter((s) => (s === seatNum ? !seatPatch.folded : !(seatsArr[s] && seatsArr[s].folded)));
      const uncontested = stillIn.length <= 1;

      const tablePatch = {
        current_bet: newCurrentBet,
        min_raise: newMinRaise,
        pending_seats: uncontested ? [] : newPendingSeats,
        action_seat: uncontested ? null : newPendingSeats[0] ?? null,
        action_deadline: uncontested
          ? heFutureIso(HOLDEM_SHOWDOWN_PAUSE_MS)
          : newPendingSeats.length
            ? heFutureIso(seatsArr[newPendingSeats[0]] && seatsArr[newPendingSeats[0]].is_ai ? HOLDEM_AI_THINK_MS : HOLDEM_ACTION_TIMEOUT_MS)
            : heFutureIso(1), // street's done — let the host tick advance it almost immediately
        street: uncontested ? "showdown" : table.street,
        log: [...table.log, logMsg].slice(-30),
        version: table.version + 1,
        updated_at: heNowIso(),
      };

      const { data, error } = await supabaseClient.from("holdem_table").update(tablePatch).eq("id", 1).eq("version", table.version).select();
      if (error || !data || !data.length) return false;

      await supabaseClient.from("holdem_seats").update(seatPatch).eq("seat_number", seatNum);

      if (uncontested) {
        await heAwardUncontestedPot(stillIn[0], table, seatsArr, seatNum, seatPatch);
      }

      return true;
    }

    async function heAwardUncontestedPot(winnerSeatNum, table, seatsArr, patchSeatNum, patch) {
      const total = table.hand_seats.reduce((sum, s) => {
        if (s === patchSeatNum) return sum + (patch.total_contributed ?? (seatsArr[s] ? seatsArr[s].total_contributed : 0));
        return sum + (seatsArr[s] ? seatsArr[s].total_contributed : 0);
      }, 0);
      const winnerSeat = seatsArr[winnerSeatNum];
      const baseStack = winnerSeatNum === patchSeatNum ? patch.stack ?? winnerSeat.stack : winnerSeat.stack;
      await supabaseClient.from("holdem_seats").update({ stack: baseStack + total, total_contributed: 0 }).eq("seat_number", winnerSeatNum);
      if (winnerSeatNum === heMySeat) playCoinCascade();
    }

    // ---- Host-only duties: AI fill, dealing, advancing streets, timeouts ----
    async function heHostTick() {
      if (!heAmHost || !heTableRow) return;
      const table = heTableRow;
      const seats = heSeats;

      await heSyncAiSeats(table, seats);
      await heHostPruneStaleSeats(table, seats);
      await heHostPruneIdleSeats(table, seats);

      if (table.street === "waiting") {
        const seated = seats.filter((s) => s && s.status === "seated").length;
        if (seated >= 2) await heStartHand(table, seats);
        return;
      }

      if (table.street === "showdown") {
        if (table.action_deadline && Date.now() >= new Date(table.action_deadline).getTime()) {
          await heWrapUpHand(table, seats);
        }
        return;
      }

      // Active betting street.
      if (!table.pending_seats.length) {
        await heAdvanceStreet(table, seats);
        return;
      }

      if (table.action_deadline && Date.now() >= new Date(table.action_deadline).getTime()) {
        const actingSeatNum = table.action_seat;
        const actingSeat = seats[actingSeatNum];
        if (!actingSeat) return;
        if (actingSeat.is_ai) {
          const revealed = table.community_cards.slice(0, heRevealCount(table.street));
          const betToCall = Math.max(0, table.current_bet - actingSeat.bet_this_street);
          const potSize = table.hand_seats.reduce((sum, s) => sum + (seats[s] ? seats[s].total_contributed : 0), 0);
          const decision = aiDecideAction({
            hole: actingSeat.hole_cards,
            community: revealed,
            street: table.street,
            betToCall: Math.min(betToCall, actingSeat.stack),
            potSize,
            stack: actingSeat.stack,
            minRaise: table.min_raise,
            personality: actingSeat.personality,
          });
          await heCommitAction(table, seats, actingSeatNum, decision.action, decision.amount);
        } else {
          const name = actingSeat.player_name;
          const ok = await heCommitAction(table, seats, actingSeatNum, "fold", undefined, { auto: true });
          if (ok) {
            const { data } = await supabaseClient.from("holdem_table").select("log").eq("id", 1).single();
            if (data) await supabaseClient.from("holdem_table").update({ log: [...data.log, `${name} was auto-folded (inactive).`].slice(-30) }).eq("id", 1);
          }
        }
      }
    }

    async function heSyncAiSeats(table, seats) {
      if (table.fill_empty_with_ai) {
        for (let n = 0; n < HOLDEM_SEAT_COUNT; n++) {
          const seat = seats[n];
          if (!seat || seat.status !== "empty") continue;
          const profile = heAiProfileForSeat(n);
          await supabaseClient
            .from("holdem_seats")
            .update({
              player_id: null,
              player_name: profile.name,
              is_ai: true,
              personality: profile.personality,
              status: "seated",
              stack: HOLDEM_STARTING_STACK,
              hole_cards: [],
              bet_this_street: 0,
              total_contributed: 0,
              folded: false,
              all_in: false,
              last_seen: heNowIso(),
              joined_at: heNowIso(),
            })
            .eq("seat_number", n)
            .eq("status", "empty");
        }
      } else {
        for (let n = 0; n < HOLDEM_SEAT_COUNT; n++) {
          const seat = seats[n];
          if (!seat || !seat.is_ai || seat.status !== "seated") continue;
          if (table.hand_seats.includes(n)) continue; // let it finish the hand it's in
          await supabaseClient
            .from("holdem_seats")
            .update({
              player_id: null,
              player_name: null,
              is_ai: false,
              personality: null,
              status: "empty",
              stack: HOLDEM_STARTING_STACK,
              hole_cards: [],
              bet_this_street: 0,
              total_contributed: 0,
              folded: false,
              all_in: false,
              last_seen: null,
              joined_at: null,
            })
            .eq("seat_number", n)
            .eq("is_ai", true);
        }
      }
    }

    async function heHostPruneStaleSeats(table, seats) {
      for (let n = 0; n < HOLDEM_SEAT_COUNT; n++) {
        const seat = seats[n];
        if (!seat || seat.is_ai || seat.status !== "seated" || !seat.player_id) continue;
        if (table.hand_seats.includes(n)) continue; // don't yank someone out from under a live hand
        if (!seat.last_seen || Date.now() - new Date(seat.last_seen).getTime() <= HOLDEM_DISCONNECT_MS) continue;
        await supabaseClient
          .from("holdem_seats")
          .update({
            player_id: null,
            player_name: null,
            status: "empty",
            stack: HOLDEM_STARTING_STACK,
            hole_cards: [],
            bet_this_street: 0,
            total_contributed: 0,
            folded: false,
            all_in: false,
            idle_hands: 0,
            last_seen: null,
            joined_at: null,
          })
          .eq("seat_number", n)
          .eq("player_id", seat.player_id);
      }
    }

    // A seat that's seated (not sitting out - that's a deliberate, exempt
    // break) but gets auto-folded HOLDEM_IDLE_HAND_LIMIT hands in a row
    // without ever acting is someone who forgot to leave, not someone
    // mid-hand or mid-thought - free the seat so the table doesn't stay
    // propped open indefinitely. Any real action (fold/check/call/raise,
    // or returning from sitting out) resets idle_hands to 0, so a player
    // who's actually around never gets caught by this.
    async function heHostPruneIdleSeats(table, seats) {
      for (let n = 0; n < HOLDEM_SEAT_COUNT; n++) {
        const seat = seats[n];
        if (!seat || seat.is_ai || seat.status !== "seated" || !seat.player_id) continue;
        if (table.hand_seats.includes(n)) continue; // don't yank someone out from under a live hand
        if ((seat.idle_hands || 0) < HOLDEM_IDLE_HAND_LIMIT) continue;
        const name = seat.player_name;
        await supabaseClient
          .from("holdem_seats")
          .update({
            player_id: null,
            player_name: null,
            status: "empty",
            stack: HOLDEM_STARTING_STACK,
            hole_cards: [],
            bet_this_street: 0,
            total_contributed: 0,
            folded: false,
            all_in: false,
            idle_hands: 0,
            last_seen: null,
            joined_at: null,
          })
          .eq("seat_number", n)
          .eq("player_id", seat.player_id);
        const { data } = await supabaseClient.from("holdem_table").select("log").eq("id", 1).single();
        if (data) {
          await supabaseClient
            .from("holdem_table")
            .update({ log: [...data.log, `${name} was removed from the table after sitting idle for ${HOLDEM_IDLE_HAND_LIMIT} hands.`].slice(-30) })
            .eq("id", 1);
        }
      }
    }

    async function heStartHand(table, seats) {
      const handSeats = seats.filter((s) => s && s.status === "seated").map((s) => s.seat_number);
      if (handSeats.length < 2) return;

      const dealerSeat = heNextDealerSeat(table.dealer_seat, handSeats);
      const seatOrder = heHandSeatOrder({ dealer_seat: dealerSeat, hand_seats: handSeats });
      const deck = buildShuffledBjDeck();
      const holeCardsBySeat = {};
      seatOrder.forEach((s) => (holeCardsBySeat[s] = []));
      for (let round = 0; round < 2; round++) {
        seatOrder.forEach((s) => holeCardsBySeat[s].push(deck.pop()));
      }
      const community = [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];

      const blindOf = {};
      if (seatOrder.length === 2) {
        blindOf[seatOrder[0]] = HOLDEM_SMALL_BLIND;
        blindOf[seatOrder[1]] = HOLDEM_BIG_BLIND;
      } else {
        blindOf[seatOrder[1]] = HOLDEM_SMALL_BLIND;
        blindOf[seatOrder[2]] = HOLDEM_BIG_BLIND;
      }

      for (const s of seatOrder) {
        const seat = seats[s];
        const blind = Math.min(blindOf[s] || 0, seat.stack);
        await supabaseClient
          .from("holdem_seats")
          .update({
            hole_cards: holeCardsBySeat[s],
            folded: false,
            all_in: blind > 0 && blind === seat.stack,
            stack: seat.stack - blind,
            bet_this_street: blind,
            total_contributed: blind,
            last_seen: heNowIso(),
          })
          .eq("seat_number", s);
      }

      const currentBet = Math.max(...seatOrder.map((s) => blindOf[s] || 0), 0);
      const pendingSeats = buildStreetOrder(seatOrder, seatOrder, true).filter((s) => !((blindOf[s] || 0) >= seats[s].stack));
      const dealerSeatRow = seats[dealerSeat];

      await supabaseClient
        .from("holdem_table")
        .update({
          street: "preflop",
          community_cards: community,
          current_bet: currentBet,
          min_raise: HOLDEM_BIG_BLIND,
          dealer_seat: dealerSeat,
          action_seat: pendingSeats[0] ?? null,
          hand_number: table.hand_number + 1,
          pending_seats: pendingSeats,
          hand_seats: handSeats,
          action_deadline: pendingSeats.length ? heFutureIso(seats[pendingSeats[0]].is_ai ? HOLDEM_AI_THINK_MS : HOLDEM_ACTION_TIMEOUT_MS) : heFutureIso(HOLDEM_SHOWDOWN_PAUSE_MS),
          log: [...table.log, `— Hand ${table.hand_number + 1}: ${dealerSeatRow.player_name} is the dealer —`].slice(-30),
          version: table.version + 1,
          updated_at: heNowIso(),
        })
        .eq("id", 1)
        .eq("version", table.version);
    }

    async function heAdvanceStreet(table, seats) {
      let nextStreet;
      if (table.street === "preflop") nextStreet = "flop";
      else if (table.street === "flop") nextStreet = "turn";
      else if (table.street === "turn") nextStreet = "river";
      else {
        await supabaseClient
          .from("holdem_table")
          .update({ street: "showdown", action_deadline: heFutureIso(HOLDEM_SHOWDOWN_PAUSE_MS), version: table.version + 1 })
          .eq("id", 1)
          .eq("version", table.version);
        return;
      }

      for (const s of table.hand_seats) {
        await supabaseClient.from("holdem_seats").update({ bet_this_street: 0 }).eq("seat_number", s);
      }

      const seatOrder = heHandSeatOrder(table);
      const activeIds = table.hand_seats.filter((s) => seats[s] && !seats[s].folded);
      const pendingSeats = activeIds.length <= 1 ? [] : buildStreetOrder(seatOrder, activeIds, false).filter((s) => seats[s] && !seats[s].all_in);

      await supabaseClient
        .from("holdem_table")
        .update({
          street: nextStreet,
          current_bet: 0,
          min_raise: HOLDEM_BIG_BLIND,
          pending_seats: pendingSeats,
          action_seat: pendingSeats[0] ?? null,
          action_deadline: pendingSeats.length ? heFutureIso(seats[pendingSeats[0]].is_ai ? HOLDEM_AI_THINK_MS : HOLDEM_ACTION_TIMEOUT_MS) : heFutureIso(HOLDEM_SHOWDOWN_PAUSE_MS),
          log: [...table.log, `— ${nextStreet.charAt(0).toUpperCase()}${nextStreet.slice(1)} —`].slice(-30),
          version: table.version + 1,
          updated_at: heNowIso(),
        })
        .eq("id", 1)
        .eq("version", table.version);
    }

    async function heWrapUpHand(table, seats) {
      const contenders = table.hand_seats.filter((s) => seats[s] && !seats[s].folded);
      if (contenders.length > 1) {
        const results = contenders.map((s) => ({ id: s, hand: evaluateBestHand([...seats[s].hole_cards, ...table.community_cards]) }));
        const pots = computeSidePots(table.hand_seats.map((s) => ({ id: s, contributed: seats[s] ? seats[s].total_contributed : 0, folded: seats[s] ? seats[s].folded : true })));
        const winningsBySeat = {};
        pots.forEach((pot) => {
          const eligible = results.filter((r) => pot.eligible.includes(r.id));
          if (!eligible.length) return;
          let best = eligible[0].hand;
          eligible.forEach((r) => {
            if (compareEvaluatedHands(r.hand, best) < 0) best = r.hand;
          });
          const winners = eligible.filter((r) => compareEvaluatedHands(r.hand, best) === 0).map((r) => r.id);
          const share = Math.floor(pot.amount / winners.length);
          let remainder = pot.amount - share * winners.length;
          winners.forEach((id) => {
            winningsBySeat[id] = (winningsBySeat[id] || 0) + share + (remainder > 0 ? 1 : 0);
            if (remainder > 0) remainder--;
          });
        });
        for (const [seatStr, amt] of Object.entries(winningsBySeat)) {
          const s = parseInt(seatStr, 10);
          await supabaseClient.from("holdem_seats").update({ stack: seats[s].stack + amt, total_contributed: 0 }).eq("seat_number", s);
        }
        if (winningsBySeat[heMySeat]) playCoinCascade();
      }

      // Reset everyone's per-street/contribution fields, and clear out
      // anyone who busted while we were at it.
      const bustedSeatPatch = {
        player_id: null,
        player_name: null,
        is_ai: false,
        personality: null,
        status: "empty",
        stack: HOLDEM_STARTING_STACK,
        hole_cards: [],
        bet_this_street: 0,
        total_contributed: 0,
        folded: false,
        all_in: false,
        last_seen: null,
        joined_at: null,
      };
      for (const s of table.hand_seats) {
        const seat = seats[s];
        if (!seat) continue;
        if (seat.stack <= 0) {
          await supabaseClient.from("holdem_seats").update(bustedSeatPatch).eq("seat_number", s);
          // Reflect it locally right away rather than waiting on the
          // realtime round-trip — heClearTableIfNoHumansLeft (below) needs
          // an up-to-date view of who's actually still seated.
          seats[s] = { ...seat, ...bustedSeatPatch };
        } else {
          await supabaseClient.from("holdem_seats").update({ bet_this_street: 0, total_contributed: 0, folded: false, all_in: false, hole_cards: [] }).eq("seat_number", s);
        }
      }

      // If everyone human just busted out (solo vs. AI is the common case),
      // clear the AI seats too instead of leaving them playing to an empty
      // room — see heClearTableIfNoHumansLeft for why.
      const cleared = await heClearTableIfNoHumansLeft();
      if (!cleared) {
        await supabaseClient
          .from("holdem_table")
          .update({ street: "waiting", action_seat: null, pending_seats: [], action_deadline: null, current_bet: 0, version: table.version + 1, updated_at: heNowIso() })
          .eq("id", 1)
          .eq("version", table.version);
      }
    }

    // ---- Tick loop: heartbeats + host duties, driven by every connected browser ----
    function heStartTickLoop() {
      if (heTickTimer) return;
      heTickTimer = setInterval(heTick, HOLDEM_TICK_MS);
    }

    async function heTick() {
      if (heMySeat === null) return;
      if (Date.now() - heLastHeartbeatAt > 10000) {
        heLastHeartbeatAt = Date.now();
        supabaseClient.from("holdem_seats").update({ last_seen: heNowIso() }).eq("seat_number", heMySeat).then(() => {});
      }
      // Realtime websockets can silently drop — a backgrounded phone tab,
      // the screen locking, a flaky connection — with nothing on screen to
      // show it. Without this, a dead subscription means this browser just
      // stops getting updates, including "it's your turn now" ones, and the
      // only sign is getting auto-folded for a turn you never saw. A
      // periodic authoritative refetch caps how long that can go unnoticed
      // to a few seconds, well inside the action timeout.
      if (Date.now() - heLastResyncAt > 8000) {
        heLastResyncAt = Date.now();
        heLoadState();
      }
      await heMaybeClaimHost();
      if (heAmHost) {
        await heSendHostHeartbeat();
        if (heAmHost) await heHostTick();
      }
    }

    // ---- Rendering ----
    function heRenderHoldem() {
      if (!heTableRow) return;
      const table = heTableRow;
      const seats = heSeats;
      const seatedCount = seats.filter((s) => s && s.status === "seated").length;
      const sittingOutCount = seats.filter((s) => s && s.status === "sitting_out").length;

      heSeatsFilledTextEl.textContent = `${seatedCount} of ${HOLDEM_SEAT_COUNT} seats filled` + (sittingOutCount ? ` (${sittingOutCount} sitting out)` : "");
      heFillAiToggleEl.checked = !!table.fill_empty_with_ai;

      heJoinRowEl.hidden = heMySeat !== null;
      heYourSeatBarEl.hidden = heMySeat === null;
      heBustedNoticeEl.hidden = !(heShowBustedNotice && heMySeat === null);

      if (heMySeat !== null && seats[heMySeat]) {
        const mySeatRow = seats[heMySeat];
        const sittingOut = mySeatRow.status === "sitting_out";
        heYourSeatNameEl.textContent = mySeatRow.player_name || "";
        heYourSeatStackEl.textContent = sittingOut ? `— ${mySeatRow.stack} chips reserved, sitting out` : `— ${mySeatRow.stack} chips`;
        heWaitingNoticeEl.hidden = sittingOut || !(heIsStreetActive(table.street) && !table.hand_seats.includes(heMySeat));
        if (heSitOutBtn) heSitOutBtn.hidden = sittingOut;
        if (heReturnBtn) heReturnBtn.hidden = !sittingOut;
      } else {
        heWaitingNoticeEl.hidden = true;
      }

      heTableEl.hidden = false;

      // The action buttons are the one thing on this screen with a clock
      // attached — if it's your turn and they don't show, you get
      // auto-folded with no way to stop it. Render them FIRST, before
      // anything riskier (seat avatars, community cards, the log), and give
      // every piece its own try/catch so a problem in one can't cascade and
      // leave the buttons stuck hidden — the previous all-or-nothing call
      // chain meant one bad render anywhere upstream silently blocked them.
      heSafeRender("actions", () => heRenderHeActions(table, seats));
      heSafeRender("seats", () => heRenderHeSeatsList(table, seats));
      heSafeRender("pot", () => {
        hePotDisplayEl.innerHTML = `${heChipIconSvg()} Pot: ${table.hand_seats.reduce((sum, s) => sum + (seats[s] ? seats[s].total_contributed : 0), 0).toLocaleString()}`;
      });
      heSafeRender("community", () => heRenderHeCommunityCards(table));
      heSafeRender("street-label", () => {
        heStreetLabelEl.textContent = table.street === "waiting" ? "Waiting for players…" : table.street === "showdown" ? "Showdown" : table.street.charAt(0).toUpperCase() + table.street.slice(1);
      });
      heSafeRender("log", () => heRenderHeLog(table));
      heSafeRender("showdown", () => heRenderHeShowdown(table, seats));
    }

    function heSafeRender(label, fn) {
      try {
        fn();
      } catch (err) {
        console.error(`Hold'em render (${label}) failed:`, err);
      }
    }

    // Initials for a round avatar badge — "Duke" -> "DU", "Matt Smith" -> "MS".
    function heInitials(name) {
      if (!name) return "?";
      const parts = name.trim().split(/\s+/).filter(Boolean);
      if (!parts.length) return "?";
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    // A small inline poker-chip glyph used next to stack/pot numbers.
    function heChipIconSvg() {
      return (
        '<svg class="he-chip-icon" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.92"/>' +
        '<circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.6" stroke-dasharray="3 3" opacity="0.75"/>' +
        '<circle cx="12" cy="12" r="5.5" fill="none" stroke="#fff" stroke-width="1.3" opacity="0.9"/>' +
        "</svg>"
      );
    }

    // Who's on the button and in the blinds this hand, purely for display —
    // recomputed the same way heStartHand works out the actual blind seats.
    function heComputeBlindSeats(table) {
      if (!table.hand_seats || !table.hand_seats.length || table.dealer_seat === null || table.dealer_seat === undefined) {
        return { sb: null, bb: null };
      }
      const seatOrder = heHandSeatOrder(table);
      if (seatOrder.length < 2) return { sb: null, bb: null };
      if (seatOrder.length === 2) return { sb: seatOrder[0], bb: seatOrder[1] };
      return { sb: seatOrder[1], bb: seatOrder[2] };
    }

    function heRenderHeSeatsList(table, seats) {
      const seatedNums = [];
      for (let n = 0; n < HOLDEM_SEAT_COUNT; n++) if (seats[n] && seats[n].status === "seated") seatedNums.push(n);
      const signature = seatedNums.join(",");
      if (signature !== heSeatsListSignature) {
        heSeatsListSignature = signature;
        heSeatsListEl.innerHTML = seatedNums
          .map(
            (n) => `
          <div class="he-seat he-seat-pos-${n}" id="he-seat-${n}">
            <div class="he-position-badges" id="he-badges-${n}"></div>
            <div class="he-avatar-wrap">
              <div class="he-timer-ring" id="he-timer-ring-${n}"></div>
              <div class="he-avatar he-avatar-c${n % 8}" id="he-avatar-${n}"></div>
            </div>
            <div class="he-seat-name">${escapeHtml(seats[n].player_name || "")} <span class="he-seat-stack" id="he-seat-stack-${n}"></span></div>
            <div class="he-hand he-hand-small" id="he-seat-cards-${n}"></div>
            <div class="he-seat-bet" id="he-seat-bet-${n}"></div>
            <div class="he-seat-status" id="he-seat-status-${n}"></div>
          </div>
        `
          )
          .join("");
        seatedNums.forEach((n) => {
          const avatarEl = document.getElementById(`he-avatar-${n}`);
          if (avatarEl) avatarEl.textContent = heInitials(seats[n].player_name);
        });
      }

      const handActive = heIsStreetActive(table.street) || table.street === "showdown";
      const contenders = table.hand_seats.filter((s) => seats[s] && !seats[s].folded);
      const blinds = handActive ? heComputeBlindSeats(table) : { sb: null, bb: null };
      seatedNums.forEach((n) => {
        const seat = seats[n];
        const seatEl = document.getElementById(`he-seat-${n}`);
        if (!seatEl) return;
        seatEl.classList.toggle("he-active-seat", n === table.action_seat);
        seatEl.classList.toggle("he-folded-seat", handActive && seat.folded && table.hand_seats.includes(n));
        seatEl.classList.toggle("he-seat-you", n === heMySeat);
        seatEl.classList.toggle("he-seat-waiting", heIsStreetActive(table.street) && !table.hand_seats.includes(n));

        document.getElementById(`he-seat-stack-${n}`).innerHTML = `${heChipIconSvg()} ${seat.stack.toLocaleString()}`;
        document.getElementById(`he-seat-bet-${n}`).innerHTML = seat.bet_this_street > 0 ? `${heChipIconSvg()} ${seat.bet_this_street.toLocaleString()}` : "";
        const isAllIn = table.hand_seats.includes(n) && seat.all_in && !seat.folded;
        const statusEl = document.getElementById(`he-seat-status-${n}`);
        statusEl.textContent = !table.hand_seats.includes(n) ? "" : seat.folded ? "Folded" : isAllIn ? "All-In" : "";
        statusEl.classList.toggle("he-seat-allin", isAllIn);

        const badgesEl = document.getElementById(`he-badges-${n}`);
        if (badgesEl) {
          let badgeHtml = "";
          if (handActive && n === table.dealer_seat) badgeHtml += `<span class="he-badge-dealer">D</span>`;
          if (handActive && n === blinds.sb) badgeHtml += `<span class="he-badge-sb">SB</span>`;
          if (handActive && n === blinds.bb) badgeHtml += `<span class="he-badge-bb">BB</span>`;
          badgesEl.innerHTML = badgeHtml;
        }

        const dealt = table.hand_seats.includes(n) && seat.hole_cards && seat.hole_cards.length > 0;
        const isShowdownReveal = table.street === "showdown" && contenders.length > 1 && !seat.folded && table.hand_seats.includes(n);
        const isMine = n === heMySeat;
        const showFaceUp = isMine || isShowdownReveal;
        const cardsEl = document.getElementById(`he-seat-cards-${n}`);
        const sig = !dealt ? "none" : seat.folded ? "folded" : showFaceUp ? `shown:${seat.hole_cards.join(",")}` : `hidden:${seat.hole_cards.length}`;
        renderCardsIfChanged(cardsEl, sig, () =>
          !dealt || seat.folded ? "" : showFaceUp ? renderRealHandCards(seat.hole_cards) : seat.hole_cards.map(() => renderBjFaceDownCard()).join("")
        );
      });
    }

    // ---- Per-turn countdown ring around the acting seat's avatar ----
    let heTimerRingTimer = null;
    function heUpdateTimerRing() {
      document.querySelectorAll(".he-timer-ring").forEach((el) => {
        el.style.setProperty("--p", "0");
        el.classList.remove("he-timer-ring-active");
      });
      if (!heTableRow) return;
      const table = heTableRow;
      if (!heIsStreetActive(table.street) || table.action_seat === null || table.action_seat === undefined || !table.action_deadline) return;
      const seat = heSeats[table.action_seat];
      if (!seat) return;
      const total = seat.is_ai ? HOLDEM_AI_THINK_MS : HOLDEM_ACTION_TIMEOUT_MS;
      const remaining = new Date(table.action_deadline).getTime() - Date.now();
      const frac = Math.max(0, Math.min(1, remaining / total));
      const ringEl = document.getElementById(`he-timer-ring-${table.action_seat}`);
      if (ringEl) {
        ringEl.style.setProperty("--p", String(frac * 100));
        ringEl.classList.add("he-timer-ring-active");
      }
    }

    function heRenderHeCommunityCards(table) {
      if (table.hand_number !== heLastHandNumberSeen) {
        heLastHandNumberSeen = table.hand_number;
        delete heRenderedSignatures["he-community"];
        heCommunityCardsEl.innerHTML = "";
      }
      const revealCount = heRevealCount(table.street);
      const sig = `${table.hand_number}:${revealCount}`;
      if (heRenderedSignatures["he-community"] === sig) return;
      const prevCount = parseInt((heRenderedSignatures["he-community"] || "0:0").split(":")[1], 10) || 0;
      if (revealCount < prevCount) heCommunityCardsEl.innerHTML = "";
      const startAt = revealCount < prevCount ? 0 : prevCount;
      for (let i = startAt; i < revealCount; i++) {
        heCommunityCardsEl.insertAdjacentHTML("beforeend", renderRealCard(table.community_cards[i], i));
      }
      heRenderedSignatures["he-community"] = sig;
    }

    function heRenderHeLog(table) {
      const msgs = (table.log || []).slice(-8);
      heLogEl.innerHTML = msgs.map((m) => `<div>${escapeHtml(m)}</div>`).join("");
      heLogEl.scrollTop = heLogEl.scrollHeight;
    }

    function heRenderHeActions(table, seats) {
      const myTurn = heMySeat !== null && table.action_seat === heMySeat && heIsStreetActive(table.street);
      heActionsEl.hidden = !myTurn;
      if (!myTurn) return;
      const me = seats[heMySeat];
      // Guard against the table and seats realtime feeds momentarily
      // disagreeing (table says it's your turn, but this browser's local
      // seat data hasn't caught up yet) — bail out quietly rather than
      // throwing; the next realtime update retries this within a second.
      if (!me) return;
      const toCall = Math.max(0, table.current_bet - me.bet_this_street);
      heCheckCallBtn.textContent = toCall > 0 ? `Call ${Math.min(toCall, me.stack)}` : "Check";
      const minTotal = table.current_bet === 0 ? HOLDEM_BIG_BLIND : table.current_bet + table.min_raise;
      const maxTotal = me.bet_this_street + me.stack;
      const floorTotal = Math.min(minTotal, maxTotal);
      heRaiseInput.min = floorTotal;
      heRaiseInput.max = maxTotal;
      if (!heRaiseInput.value || parseInt(heRaiseInput.value, 10) < floorTotal) heRaiseInput.value = floorTotal;
      heRaiseBtn.textContent = table.current_bet === 0 ? "Bet" : "Raise";
      const canRaise = me.stack > toCall;
      heRaiseBtn.disabled = !canRaise;
      heRaiseInput.disabled = !canRaise;
      document.querySelectorAll("#he-actions [data-he-quick]").forEach((b) => {
        b.disabled = !canRaise;
      });

      if (heRaiseSlider) {
        heRaiseSlider.min = floorTotal;
        heRaiseSlider.max = maxTotal;
        heRaiseSlider.step = maxTotal - floorTotal > 400 ? 20 : 10;
        heRaiseSlider.disabled = !canRaise;
        if (parseInt(heRaiseSlider.value, 10) !== parseInt(heRaiseInput.value, 10)) heRaiseSlider.value = heRaiseInput.value;
      }
    }

    function heRenderHeShowdown(table, seats) {
      if (table.street !== "showdown") {
        heShowdownEl.hidden = true;
        return;
      }
      heShowdownEl.hidden = false;
      const contenders = table.hand_seats.filter((s) => seats[s] && !seats[s].folded);
      const wonByFold = contenders.length <= 1;

      if (heMySeat !== null) {
        const myInHand = table.hand_seats.includes(heMySeat);
        const mySeatRow = seats[heMySeat];
        if (!myInHand) {
          heOutcomeBannerEl.hidden = true;
        } else {
          heOutcomeBannerEl.hidden = false;
          const outcome = mySeatRow.folded ? "fold" : "lose";
          heOutcomeBannerEl.className = `he-outcome he-${outcome}`;
          heOutcomeBannerEl.textContent = mySeatRow.folded ? "You folded this hand." : "You lose this hand.";
        }
      } else {
        heOutcomeBannerEl.hidden = true;
      }

      const lines = [];
      if (wonByFold && contenders.length === 1) {
        const winner = seats[contenders[0]];
        lines.push(`<div class="he-showdown-line"><strong>${escapeHtml(winner.player_name)}</strong> wins the pot — everyone else folded.</div>`);
        if (contenders[0] === heMySeat && heOutcomeBannerEl) {
          heOutcomeBannerEl.hidden = false;
          heOutcomeBannerEl.className = "he-outcome he-win";
          heOutcomeBannerEl.textContent = "🎉 You win this hand!";
        }
      } else {
        contenders.forEach((s) => {
          const seat = seats[s];
          const hand = evaluateBestHand([...seat.hole_cards, ...table.community_cards]);
          lines.push(`<div class="he-showdown-line">${renderRealHandCards(seat.hole_cards)} <strong>${escapeHtml(seat.player_name)}</strong>: ${escapeHtml(hand.description)}</div>`);
          if (s === heMySeat && heOutcomeBannerEl) {
            heOutcomeBannerEl.hidden = false;
          }
        });
      }
      heShowdownSummaryEl.innerHTML = lines.join("");
      heNextHandCountdownEl.textContent = "Next hand starting shortly…";
    }

    // ---- Wiring ----
    if (heJoinBtn) {
      heJoinBtn.addEventListener("click", async () => {
        const id = hePlayerSelectEl.value;
        const name = hePlayerSelectEl.selectedOptions[0]?.textContent || "";
        if (!id) {
          heErrorEl.textContent = "Add at least one active player in Admin first.";
          return;
        }
        heJoinBtn.disabled = true;
        await heJoinTable(id, name);
        heJoinBtn.disabled = false;
      });
    }

    if (heLeaveBtn) {
      heLeaveBtn.addEventListener("click", async () => {
        const mySeatRow = heMySeat !== null ? heSeats[heMySeat] : null;
        const stackNote = mySeatRow ? ` and your ${mySeatRow.stack} chips` : "";
        const confirmed = window.confirm(
          `Leave the table for good? You'll give up your seat${stackNote} — next time you join, you'll start over with a fresh ${HOLDEM_STARTING_STACK}. Just need a break? Use "Sit Out" instead to keep your seat and chips reserved.`
        );
        if (!confirmed) return;
        heLeaveBtn.disabled = true;
        try {
          await heLeaveTable();
        } catch (err) {
          console.error("Leave table failed:", err);
          heErrorEl.textContent = "Couldn't leave the table: " + (err?.message || "unknown error");
        } finally {
          heLeaveBtn.disabled = false;
        }
      });
    }

    if (heSitOutBtn) {
      heSitOutBtn.addEventListener("click", async () => {
        heSitOutBtn.disabled = true;
        try {
          await heSitOut();
          heErrorEl.textContent = 'You\'re sitting out — your seat and chips are reserved. Click "I\'m Back" when you want in again.';
        } catch (err) {
          console.error("Sit out failed:", err);
          heErrorEl.textContent = "Couldn't sit out: " + (err?.message || "unknown error");
        } finally {
          heSitOutBtn.disabled = false;
        }
      });
    }

    if (heReturnBtn) {
      heReturnBtn.addEventListener("click", async () => {
        heReturnBtn.disabled = true;
        try {
          await heReturnFromSitOut();
          heErrorEl.textContent = "";
        } catch (err) {
          console.error("Return to table failed:", err);
          heErrorEl.textContent = "Couldn't return to the table: " + (err?.message || "unknown error");
        } finally {
          heReturnBtn.disabled = false;
        }
      });
    }

    if (heFillAiToggleEl) {
      heFillAiToggleEl.addEventListener("change", async () => {
        if (!heTableRow) return;
        await supabaseClient.from("holdem_table").update({ fill_empty_with_ai: heFillAiToggleEl.checked }).eq("id", 1);
      });
    }

    // Every handler below is wrapped in try/catch/finally so a bug never
    // shows up as a silent "nothing happened" — any failure surfaces as a
    // message near the table, and heBusyAction always gets released even if
    // something throws partway through.
    if (heFoldBtn) {
      heFoldBtn.addEventListener("click", async () => {
        if (heMySeat === null || heBusyAction || !heTableRow) return;
        heBusyAction = true;
        try {
          const ok = await heCommitAction(heTableRow, heSeats, heMySeat, "fold");
          if (!ok) heErrorEl.textContent = "That didn't go through — someone else may have just acted. Try again.";
        } catch (err) {
          console.error("Hold'em fold failed:", err);
          heErrorEl.textContent = "Fold failed: " + (err?.message || "unknown error");
        } finally {
          heBusyAction = false;
        }
      });
    }

    if (heCheckCallBtn) {
      heCheckCallBtn.addEventListener("click", async () => {
        if (heMySeat === null || heBusyAction || !heTableRow) return;
        heBusyAction = true;
        try {
          const me = heSeats[heMySeat];
          const toCall = heTableRow.current_bet - me.bet_this_street;
          const ok = await heCommitAction(heTableRow, heSeats, heMySeat, toCall > 0 ? "call" : "check");
          if (!ok) heErrorEl.textContent = "That didn't go through — someone else may have just acted. Try again.";
        } catch (err) {
          console.error("Hold'em check/call failed:", err);
          heErrorEl.textContent = "Check/call failed: " + (err?.message || "unknown error");
        } finally {
          heBusyAction = false;
        }
      });
    }

    if (heRaiseBtn) {
      heRaiseBtn.addEventListener("click", async () => {
        if (heMySeat === null || heBusyAction || !heTableRow) return;
        heErrorEl.textContent = "";
        try {
          const me = heSeats[heMySeat];
          if (!me) {
            heErrorEl.textContent = "Couldn't find your seat — try reloading.";
            return;
          }
          const targetTotal = parseInt(heRaiseInput.value, 10);
          const minTotal = heTableRow.current_bet === 0 ? HOLDEM_BIG_BLIND : heTableRow.current_bet + heTableRow.min_raise;
          const maxTotal = me.bet_this_street + me.stack;
          const floorTotal = Math.min(minTotal, maxTotal);
          if (!Number.isFinite(targetTotal) || targetTotal < floorTotal) {
            heErrorEl.textContent = `Minimum is ${floorTotal}.`;
            return;
          }
          const clampedTotal = Math.min(targetTotal, maxTotal);
          const incremental = clampedTotal - me.bet_this_street;
          heBusyAction = true;
          const ok = await heCommitAction(heTableRow, heSeats, heMySeat, heTableRow.current_bet === 0 ? "bet" : "raise", incremental);
          if (!ok) heErrorEl.textContent = "That didn't go through — someone else may have just acted. Try again.";
        } catch (err) {
          console.error("Hold'em bet/raise failed:", err);
          heErrorEl.textContent = "Bet/raise failed: " + (err?.message || "unknown error");
        } finally {
          heBusyAction = false;
        }
      });
    }

    // Slide-to-bet: the slider and the number field stay in sync either way.
    if (heRaiseSlider) {
      heRaiseSlider.addEventListener("input", () => {
        heRaiseInput.value = heRaiseSlider.value;
      });
    }
    if (heRaiseInput) {
      heRaiseInput.addEventListener("input", () => {
        if (heRaiseSlider) heRaiseSlider.value = heRaiseInput.value;
      });
    }

    document.querySelectorAll("#he-actions [data-he-quick]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (heMySeat === null || !heTableRow) return;
        try {
          const me = heSeats[heMySeat];
          if (!me) return;
          const pot = heTableRow.hand_seats.reduce((sum, s) => sum + (heSeats[s] ? heSeats[s].total_contributed : 0), 0);
          const maxTotal = me.bet_this_street + me.stack;
          let targetTotal;
          if (btn.dataset.heQuick === "allin") {
            targetTotal = maxTotal;
          } else {
            const toCall = Math.max(0, heTableRow.current_bet - me.bet_this_street);
            const potAfterCall = pot + toCall;
            const raiseSize = btn.dataset.heQuick === "half" ? Math.round(potAfterCall / 2) : potAfterCall;
            targetTotal = Math.min(maxTotal, heTableRow.current_bet + Math.max(heTableRow.min_raise, raiseSize));
          }
          heRaiseInput.value = targetTotal;
          if (heRaiseSlider) heRaiseSlider.value = targetTotal;
          heErrorEl.textContent = `Raise amount set to ${targetTotal} — click Bet/Raise to submit it.`;
          playChipClick();
        } catch (err) {
          console.error("Hold'em quick-bet failed:", err);
          heErrorEl.textContent = "Quick-bet failed: " + (err?.message || "unknown error");
        }
      });
    });

    async function initHoldemTable() {
      await populateHePlayerSelect();
      await heLoadState();
      heSubscribeRealtime();

      let rememberedSeat = null;
      try {
        const raw = window.localStorage.getItem(HOLDEM_SEAT_STORAGE_KEY);
        rememberedSeat = raw !== null ? parseInt(raw, 10) : null;
      } catch (err) {
        rememberedSeat = null;
      }
      if (
        rememberedSeat !== null &&
        heSeats[rememberedSeat] &&
        (heSeats[rememberedSeat].status === "seated" || heSeats[rememberedSeat].status === "sitting_out") &&
        !heSeats[rememberedSeat].is_ai
      ) {
        heMySeat = rememberedSeat;
        heMyPlayerId = heSeats[rememberedSeat].player_id;
      }
      heStartTickLoop();
      if (!heTimerRingTimer) heTimerRingTimer = setInterval(heUpdateTimerRing, 250);
      heRenderHoldem();
    }

    if (heTableEl) {
      initHoldemTable();
    }

    // Catch up immediately when the tab comes back to the foreground —
    // locking the phone or switching apps is exactly when a realtime
    // subscription is most likely to have silently dropped, and the
    // periodic resync in heTick() could otherwise take a few seconds to
    // notice. This fires the moment the player actually looks at the
    // screen again, instead of making them wait for the next tick.
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && heMySeat !== null) {
        heLoadState();
      }
    });


    refreshPublicView();

    // ------------------------------------------------------------------
    // "What's new" banner — a dismissible announcement pulled from a
    // single-row Supabase table (see supabase_announcements.sql). Posting
    // a new message (and bumping its updated_at) makes the banner
    // reappear for everyone, even players who dismissed an earlier one;
    // each browser just remembers locally which updated_at it last
    // dismissed, so re-dismissing is a one-tap no-op once they've seen it.
    // ------------------------------------------------------------------
    // Admin screen editor for the same `announcements` row. Loaded into
    // the textarea whenever the admin dashboard opens; saving here is
    // what players actually see in the banner above.
    async function loadAnnouncementAdmin() {
      if (!announcementInput) return;
      announcementError.textContent = "";
      const { data, error } = await supabaseClient
        .from("announcements")
        .select("message")
        .eq("id", 1)
        .maybeSingle();
      if (error) {
        announcementError.textContent = "Could not load current announcement: " + error.message;
        return;
      }
      announcementInput.value = (data && data.message) || "";
    }

    saveAnnouncementBtn?.addEventListener("click", async () => {
      announcementError.textContent = "";
      announcementStatus.textContent = "";
      const message = announcementInput.value.trim() || null;
      const { error } = await supabaseClient
        .from("announcements")
        .update({ message, updated_at: new Date().toISOString() })
        .eq("id", 1);
      if (error) {
        announcementError.textContent = "Could not save: " + error.message;
        return;
      }
      announcementStatus.textContent = message
        ? "Saved — players will see this next time they open the app."
        : "Saved — banner cleared.";
    });

    clearAnnouncementBtn?.addEventListener("click", async () => {
      announcementInput.value = "";
      saveAnnouncementBtn.click();
    });

    const WHATS_NEW_SEEN_KEY = "pokerWhatsNewSeenAt";

    async function initWhatsNewBanner() {
      if (!whatsNewBanner) return;
      try {
        const { data, error } = await supabaseClient
          .from("announcements")
          .select("message, updated_at")
          .eq("id", 1)
          .maybeSingle();
        if (error || !data || !data.message) return;

        let seenAt = null;
        try {
          seenAt = window.localStorage.getItem(WHATS_NEW_SEEN_KEY);
        } catch (err) {
          seenAt = null;
        }
        if (seenAt === data.updated_at) return;

        whatsNewText.textContent = data.message;
        whatsNewBanner.hidden = false;

        whatsNewDismiss.addEventListener("click", () => {
          whatsNewBanner.hidden = true;
          try {
            window.localStorage.setItem(WHATS_NEW_SEEN_KEY, data.updated_at);
          } catch (err) {
            // localStorage unavailable (private browsing, etc.) — the
            // banner will just show again next visit, harmless.
          }
        });
      } catch (err) {
        console.error("What's new banner failed to load:", err);
      }
    }

    initWhatsNewBanner();

    // ------------------------------------------------------------------
    // Utility
    // ------------------------------------------------------------------
    function escapeHtml(str) {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    }
