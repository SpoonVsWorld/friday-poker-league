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
 
    const PLACEMENT_POINTS = { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 };
    const ORDINALS = { 1: "1st", 2: "2nd", 3: "3rd", 4: "4th", 5: "5th" };
 
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
    // Public view: Standings / Players / Fridays
    // ------------------------------------------------------------------
 
    function refreshPublicView() {
      loadStandings();
      loadPublicPlayers();
      loadPublicFridays();
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
          const badgeClass = f.status === "cancelled" ? "badge-cancelled" : "";
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
      fridayDetailMeta.textContent = `${friday.seasons?.name || ""} — ${
        friday.status === "cancelled" ? "Cancelled / No Game" : "Completed"
      }`;
 
      if (friday.status === "cancelled") {
        fridayDetailBody.innerHTML = '<tr><td colspan="4" class="muted">No game was played this night.</td></tr>';
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
 
    refreshPublicView();
 
    // ------------------------------------------------------------------
    // Utility
    // ------------------------------------------------------------------
    function escapeHtml(str) {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    }
