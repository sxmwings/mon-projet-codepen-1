document.addEventListener('DOMContentLoaded', () => {
    // --- CONSTANTS & DATA ---
    const svgFront = `<svg viewBox="0 0 263 564" xmlns="http://www.w3.org/2000/svg"><g class="muscle-group"><path class="muscle" data-muscle="Deltoïde antérieur" d="M109.5 136.5s-2-3-3-4-5-6-5-11-2-12 1-14 1-5 2-5 3-1 3-1-3 1-3 4-2 11 0 13 4 10 5 9z"/><path class="muscle" data-muscle="Deltoïde latéral" d="M110.5 137.5s-4 1-5-1-1-6 0-10 1-5 2-7-1-7-1-7-2-2-2 1-2 5-2 9-1 10 2 13 5 4 4 2z"/><path class="muscle" data-muscle="Pectoraux" d="M109.5 136.5s-1-2-1-3 0-6 1-8 2-6 5-8 9-6 15-6h1s-1 1-5 4-8 5-11 8-4 5-5 5z"/><path class="muscle" data-muscle="Biceps" d="M112.5 167.5s-1 8-1 11-1 9-1 11 0 5 1 5 3-1 3-4-1-10-1-15 1-8 0-8z"/><path class="muscle" data-muscle="Avant-bras" d="M114.5 208.5s0 13 0 16-1 8 0 9 2 2 3 0 1-13 1-18 0-12-2-11-2 4-2 4z"/><path class="muscle" data-muscle="Dentelé" d="M111.5 174.5s4 14 5 17 0 6 0 6-1-10-1-15-2-10-4-8z"/><path class="muscle" data-muscle="Abdominaux" d="M131.5 167.5s0 16 0 28 0 25-1 27-2 4-2 4h1s2-2 3-5 1-27 1-42-1-12-1-12z"/><path class="muscle" data-muscle="Quadriceps" d="M113.5 285.5s-2 23-2 37 1 45 1 54 2 15 2 15s1-18 1-57-1-50-2-49zM149.5 285.5s-1 17-1 33 0 45 1 57 2 15 2 15s1-22 1-60-1-46-3-45z"/><path class="muscle" data-muscle="Brachioradial" d="M113.5 194.5s0 14 0 17 2 6 3 4 1-13 1-16 0-10-2-9-2 4-2 4z"/><path class="muscle" data-muscle="Trapèze" d="M110.5 125.5s3-11 4-13 4-3 6-3 6 1 8 4 4 13 4 13l-5-1s-3-4-6-4-5 1-6 2-1 2-1 2z"/></g></svg>`;
    const svgBack = `<svg viewBox="0 0 263 564" xmlns="http://www.w3.org/2000/svg"><g class="muscle-group"><path class="muscle" data-muscle="Trapèze" d="m154,124s3-10,5-12,4-2,6-2,5,1,7,4,3,12,3,12l-5-1s-2-4-5-4-4,1-5,2-2,2-2,2Z"/><path class="muscle" data-muscle="Deltoïde postérieur" d="m156,137s4,1,5-1,1-6,0-10-1-5,0-7,1-7,1-7,2-2,2,1,2,5,2,9,1,10-2,13-5,4-4,2Z"/><path class="muscle" data-muscle="Grand dorsal" d="m154,161s10,2,13,5,6,9,6,15-2,19-2,19-2-7-3-15-4-14-9-17-5-7-5-7Z"/><path class="muscle" data-muscle="Dos" d="M132.5 158.5s0 10 0 20-1 20-1 26 0 10 0 10h1s1-10 1-26-1-20 0-30z"/><path class="muscle" data-muscle="Rhomboïdes" d="M141.5 142.5s3,7,3,12-1,8-1,8-1-6-1-11,0-9-1-9z"/><path class="muscle" data-muscle="Triceps" d="m152,168s1,8,1,11,1,9,1,11,0,5-1,5-3-1-3-4,1-10,1-15,0-8,0-8Z"/><path class="muscle" data-muscle="Avant-bras" d="m150,209s0,13,0,16,1,8,0,9-2,2-3,0-1-13-1-18,0-12,2-11,2,4,2,4Z"/><path class="muscle" data-muscle="Fessiers" d="m151,257s9,3,13,5,7,10,7,17-2,15-2,15l-1-2s-3-8-6-13-7-12-11-12Z"/><path class="muscle" data-muscle="Ischios" d="m151,298s0,15,0,29-1,40,0,48,1,15,1,15,0-20,0-52-1-40,0-40Z"/><path class="muscle" data-muscle="Mollets" d="m151,410s0,17,0,27,0,25,1,28,2,5,2,5-2-5-2-25,0-32-1-35Z"/></g></svg>`;
    const EXERCISE_VISUALS={'Dumbbell Press':'https://i.imgur.com/0343g78.gif','Lat Pulldown':'https://i.imgur.com/GaM04g4.gif','Leg Press':'https://i.imgur.com/f20ffVj.gif','Leg Curl':'https://i.imgur.com/cmWS3B5.gif','Leg Extension':'https://i.imgur.com/P2BUd5l.gif','Cable Curl':'https://i.imgur.com/4q0o24g.gif','Triceps Pushdown':'https://i.imgur.com/m3NQY9q.gif','Lateral Raises':'https://i.imgur.com/uFdedo2.gif'};
    const PROGRAM = { dimanche: { key:'dimanche', title: "Dos + Jambes Lourdes", exercises: [ { name:"Trap Bar Deadlift", sets:4, reps:"6-8", rest:150, weight:75, type:"barre", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Rest-Pause dernière série", Bloc3:"Cluster sets série 4" }, muscles:{direct:['Ischios','Fessiers','Dos'], indirect:['Quadriceps']} }, { name:"Goblet Squat", sets:3, reps:10, rest:90, weight:25, type:"haltères", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Drop-set dernière série" }, muscles:{direct:['Quadriceps', 'Fessiers'], indirect:['Ischios']} }, { name:"Leg Press", sets:3, reps:10, rest:90, weight:110, type:"machine", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Myo-reps dernière série" }, muscles:{direct:['Quadriceps','Fessiers'], indirect:['Ischios']} }, { name:"Lat Pulldown", sets:3, reps:10, rest:90, weight:60, type:"machine", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Rest-Pause série 3", Bloc3:"Drop-set -20% série 3" }, muscles:{direct:['Grand dorsal'], indirect:['Biceps','Trapèze']} }, { name:"Rowing Poulie", sets:3, reps:10, rest:90, weight:65, type:"machine", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Rest-Pause série 3" }, muscles:{direct:['Dos', 'Grand dorsal'], indirect:['Biceps', 'Deltoïde postérieur']} }, { name:"Landmine Press", sets:3, reps:10, rest:90, weight:35, type:"barre", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Myo-reps série 3" }, muscles:{direct:['Pectoraux','Deltoïde antérieur'], indirect:['Triceps']} }, { name:"Incline Curl", sets:3, reps:12, rest:60, weight:12, type:"haltères", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Standard" }, muscles:{direct:['Biceps'], indirect:['Avant-bras']} } ] }, mardi: { key:'mardi', title: "Pecs + Épaules + Triceps", exercises: [ { name:"Dumbbell Press", sets:4, reps:10, rest:120, weight:22, type:"haltères", techniques:{ Bloc1:"Tempo 2-1-2", Bloc2:"Rest-Pause série 4", Bloc3:"Drop-set série 4" }, muscles:{direct:['Pectoraux'], indirect:['Triceps','Deltoïde antérieur']} }, { name:"Leg Press Léger", sets:3, reps:15, rest:75, weight:80, type:"machine", techniques:{ Bloc1:"Tempo 2-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Myo-reps série 3" }, muscles:{direct:['Quadriceps'], indirect:['Fessiers']} }, { name:"Close-Grip Bench", sets:3, reps:10, rest:90, weight:45, type:"barre", techniques:{ Bloc1:"Tempo 2-1-2", Bloc2:"Rest-Pause série 3", Bloc3:"Cluster série 3" }, muscles:{direct:['Triceps', 'Pectoraux'], indirect:['Deltoïde antérieur']} }, { name:"Lateral Raises", sets:3, reps:15, rest:60, weight:8, type:"haltères", techniques:{ Bloc1:"Tempo 2-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Myo-reps série 3" }, muscles:{direct:['Deltoïde latéral'], indirect:['Trapèze']} }, { name:"Face Pull", sets:4, reps:15, rest:60, weight:20, type:"machine", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 3-1-2", Bloc3:"Rest-Pause série 4" }, muscles:{direct:['Deltoïde postérieur','Rhomboïdes'], indirect:['Trapèze']} }, { name:"Bent-Over Raises", sets:3, reps:12, rest:60, weight:8, type:"haltères", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 3-1-2", Bloc3:"Drop-set série 3" }, muscles:{direct:['Deltoïde postérieur'], indirect:['Dos']} }, { name:"Cable Pushdown", sets:3, reps:12, rest:60, weight:20, type:"machine", techniques:{ Bloc1:"Tempo 2-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Myo-reps série 3" }, muscles:{direct:['Triceps'], indirect:[]} } ] }, vendredi: { key:'vendredi', title: "Dos + Jambes Légères + Bras", exercises: [ { name:"Landmine Row", sets:4, reps:10, rest:120, weight:55, type:"barre", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Rest-Pause série 4", Bloc3:"Cluster série 4" }, muscles:{direct:['Grand dorsal','Trapèze'], indirect:['Biceps']} }, { name:"Leg Curl", sets:3, reps:12, rest:75, weight:40, type:"machine", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 3-1-2", Bloc3:"Myo-reps série 3" }, muscles:{direct:['Ischios'], indirect:['Mollets']} }, { name:"Romanian Deadlift", sets:3, reps:10, rest:90, weight:30, type:"haltères", techniques:{ Bloc1:"Tempo 3-1-2 STRICT", Bloc2:"Tempo 2-1-2", Bloc3:"Rest-Pause série 3" }, securite:["Dos neutre uniquement","Barre contre cuisses","Descente mi-tibias","STOP si douleur"], muscles:{direct:['Ischios', 'Fessiers'], indirect:['Dos']} }, { name:"Leg Extension", sets:3, reps:15, rest:60, weight:35, type:"machine", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Drop-set série 3" }, muscles:{direct:['Quadriceps'], indirect:[]} }, { name:"Dumbbell Fly", sets:3, reps:12, rest:75, weight:10, type:"haltères", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 3-1-2", Bloc3:"Myo-reps série 3" }, muscles:{direct:['Pectoraux'], indirect:['Deltoïde antérieur']} }, { name:"EZ Bar Curl", sets:3, reps:12, rest:60, weight:20, type:"barre", techniques:{ Bloc1:"Tempo 3-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Rest-Pause série 3" }, muscles:{direct:['Biceps'], indirect:['Avant-bras']} }, { name:"Hammer Curl", sets:3, reps:12, rest:60, weight:12, type:"haltères", techniques:{ Bloc1:"Tempo 2-1-2", Bloc2:"Tempo 2-1-2", Bloc3:"Drop-set série 3" }, muscles:{direct:['Brachioradial', 'Biceps'], indirect:['Avant-bras']} }, { name:"Wrist Curl", sets:3, reps:20, rest:45, weight:30, type:"barre", techniques:"Standard", muscles:{direct:['Avant-bras'], indirect:[]} } ] } };
    const STATE_KEY = 'hybrid_master_51_app_vanilla_js_1';
    const PROG_HALTERE = 2.5, PROG_BARRE = 5, MIN_RECORDS = 2;
    
    // --- STATE MANAGEMENT ---
    let state, currentSessionKey, timerInterval;
    const timerSound = new Audio("data:audio/mpeg;base64,SUQzBAAAAAAAI1RTSEhLa...//ZHiKAAAA//6x4hwAAAP/oA//9aQZgA=");

    function defaultState() {
        const weights = {};
        Object.values(PROGRAM).forEach(session => {
            session.exercises.forEach(ex => {
                weights[ex.name] = ex.weight;
            });
        });
        return { week:1, weights, hist:{}, program:JSON.parse(JSON.stringify(PROGRAM)) };
    }

    function loadState() {
        try {
            const raw = localStorage.getItem(STATE_KEY);
            const s = raw ? JSON.parse(raw) : defaultState();
            if (!s.program || !s.program.dimanche || !s.program.dimanche.exercises[0].techniques) {
                return defaultState();
            }
            return s;
        } catch (e) {
            console.error("Error loading state:", e);
            return defaultState();
        }
    }

    function saveState() {
        localStorage.setItem(STATE_KEY, JSON.stringify(state));
    }
    
    // --- DOM ELEMENTS ---
    const progList = document.getElementById('progList');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const muscleSelect = document.getElementById('muscleSelect');

    // --- UTILITY FUNCTIONS ---
    const findBlock = (w) => {
        if ([6,12,18,24,26].includes(w)) return "DELOAD";
        if (w <= 5) return "Fondation (B1)";
        if (w <= 11) return "Surcharge (B2)";
        if (w <= 25) return "Intensification (B3)";
        return "Cycle Terminé";
    };
    const getCurrentBlockName = (w) => {
        if (w <= 5) return 'Bloc1';
        if (w <= 11) return 'Bloc2';
        return 'Bloc3';
    };
    let msgTimeout;
    function showQuickMsg(msg) {
        const el = document.getElementById('quickMsg');
        el.textContent = msg;
        clearTimeout(msgTimeout);
        msgTimeout = setTimeout(() => {
            el.textContent = 'Prêt.';
        }, 3000);
    }
    function showScreen(id){
        document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
        document.getElementById(id).classList.add("active");
    }

    // --- ANATOMY VIEW ---
    function initAnatomyView() {
        document.getElementById('anatomy-front').innerHTML = svgFront;
        document.getElementById('anatomy-back').innerHTML = svgBack;
    }
    function highlightMuscles(muscles = { direct: [], indirect: [] }) {
        document.querySelectorAll('.muscle').forEach(m => {
            m.classList.remove('direct', 'indirect');
            const muscleName = m.dataset.muscle;
            if (muscles.direct && muscles.direct.includes(muscleName)) m.classList.add('direct');
            if (muscles.indirect && muscles.indirect.includes(muscleName)) m.classList.add('indirect');
        });
    }
    function buildMuscleSelector(){
        const muscleSet = new Set(Object.values(state.program).flatMap(s => s.exercises.flatMap(e => [...(e.muscles.direct||[]), ...(e.muscles.indirect||[])])));
        const muscles = Array.from(muscleSet).sort();
        muscleSelect.innerHTML = '<option value="">Choisir un muscle...</option>';
        muscles.forEach(m => {
            const o = document.createElement('option');
            o.value = m;
            o.textContent = m;
            muscleSelect.appendChild(o);
        });
    }

    // --- RENDER FUNCTIONS ---
    function renderHeader(){
        document.getElementById('weekDisplay').textContent = state.week;
        document.getElementById('blockName').textContent = findBlock(state.week);
    }

    function renderProgramList(){
        progList.innerHTML = '';
        Object.values(state.program).forEach(session => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = session.title;
            btn.onclick = () => openSession(session.key);
            progList.appendChild(btn);
        });
    }
    
    window.backHome = function(){
        showScreen("home");
        renderHeader();
        renderProgramList();
        highlightMuscles();
    }
    
    function openSession(key) {
        currentSessionKey = key;
        showScreen('session');
        document.getElementById('sessionTitle').textContent = state.program[key].title;
        const list = document.getElementById('exerciseList');
        list.innerHTML = '';
        state.program[key].exercises.forEach(ex => {
            const card = document.createElement('div');
            card.className = 'card';
            const exId = ex.name.replace(/[^a-zA-Z0-9]/g, '');
            card.innerHTML = `
                <div class="flex justify-between items-center cursor-pointer" onclick="toggleExerciseDetails('${exId}')">
                    <div class="flex items-center gap-4">
                        <img src="${EXERCISE_VISUALS[ex.name] || 'https://i.imgur.com/p3xQvRB.png'}" alt="${ex.name}" class="exercise-visual">
                        <div>
                            <div class="font-semibold text-amber-400">${ex.name}</div>
                            <div class="small muted">${ex.sets}×${ex.reps} • ${ex.rest}s repos</div>
                        </div>
                    </div>
                    <div id="arrow-${exId}" class="text-2xl muted transition-transform">▼</div>
                </div>
                <div class="exercise-details" id="details-${exId}"></div>`;
            list.appendChild(card);
            card.addEventListener('mouseenter', () => highlightMuscles(ex.muscles));
            card.addEventListener('mouseleave', () => highlightMuscles());
        });
    }

    window.toggleExerciseDetails = (exId) => {
        const details = document.getElementById(`details-${exId}`);
        const arrow = document.getElementById(`arrow-${exId}`);
        const wasOpen = details.classList.contains('open');
        
        document.querySelectorAll('.exercise-details.open').forEach(d => {
            if (d.id !== `details-${exId}`) {
                d.classList.remove('open');
                d.style.borderTop = 'none';
                const otherArrow = document.getElementById(`arrow-${d.id.substring(8)}`);
                if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
            }
        });

        if (!wasOpen) {
            const exName = details.previousElementSibling.querySelector('.font-semibold').textContent;
            const ex = state.program[currentSessionKey].exercises.find(e => e.name === exName);
            renderExerciseDetails(ex);
            details.classList.add('open');
            details.style.borderTop = '1px solid var(--border-color)';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            details.innerHTML = '';
            details.classList.remove('open');
            details.style.borderTop = 'none';
            arrow.style.transform = 'rotate(0deg)';
        }
    }

    function renderExerciseDetails(ex) {
        const exId = ex.name.replace(/[^a-zA-Z0-9]/g, '');
        const detailsContainer = document.getElementById(`details-${exId}`);
        let setsHtml = '';
        const currentWeight = state.weights[ex.name] !== undefined ? state.weights[ex.name] : ex.weight;
        const block = getCurrentBlockName(state.week);
        const tech = typeof ex.techniques === 'string' ? ex.techniques : (ex.techniques[block] || 'Standard');

        for (let i = 1; i <= ex.sets; i++) {
            setsHtml += `
                <div class="grid grid-cols-5 gap-2 items-center mb-2">
                    <div class="small muted col-span-1">Série ${i}</div>
                    <div class="col-span-2 grid grid-cols-2 gap-1 items-center">
                        <input type="number" placeholder="kg" value="${currentWeight}" class="text-center p-1 text-sm">
                        <input type="number" placeholder="reps" class="text-center p-1 text-sm">
                    </div>
                    <div class="col-span-1 text-center">
                        <input type="checkbox" id="set-${i}-${exId}" class="set-checkbox" onchange="handleSetCompletion(this, '${ex.name}', ${ex.rest}, ${i === ex.sets})">
                        <label for="set-${i}-${exId}"></label>
                    </div>
                    <div class="small muted col-span-1 text-right truncate" title="${tech}">${tech}</div>
                </div>`;
        }

        let safetyHtml = '';
        if (ex.securite) {
            safetyHtml = `<div class="mt-4 p-2 border-l-4 border-red-500 bg-red-500/10 text-red-300 small">
                <div class="font-bold mb-1">⚠️ Sécurité</div>
                <ul class="list-disc pl-5">${ex.securite.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>`;
        }
        detailsContainer.innerHTML = `${setsHtml}${safetyHtml}
            <div class="mt-4 flex justify-end gap-2">
                <button class="btn-ghost" onclick="openEditExerciseModal('${ex.name}')">Modifier</button>
                <button class="btn" onclick="savePerf('${ex.name}')">Enregistrer & Valider</button>
            </div>`;
    }

    // --- MODAL FUNCTIONS ---
    function openModal(html) {
        modal.classList.add('active');
        modalContent.innerHTML = html;
    }

    window.closeModal = function() {
        modal.classList.remove('active');
        modalContent.innerHTML = '';
    }
    
    window.openAddExerciseModal = (sessionKey) => {
        openModal(`
            <div class="font-bold mb-4">Ajouter un Exercice</div>
            <div class="space-y-3">
                <input id="addName" placeholder="Nom de l'exercice">
                <div class="grid grid-cols-2 gap-3">
                    <input id="addSets" type="number" placeholder="Séries" value="3">
                    <input id="addReps" type="text" placeholder="Reps (ex: 10-12)" value="10">
                    <input id="addWeight" type="number" placeholder="Poids (kg)" value="20">
                    <input id="addRest" type="number" placeholder="Repos (sec)" value="90">
                </div>
                <input id="addType" placeholder="Type (barre, haltères...)">
                <textarea id="addTech" placeholder="Techniques (JSON format)" rows="3">{"Bloc1":"Standard", "Bloc2":"Standard", "Bloc3":"Standard"}</textarea>
                <input id="addMusclesDirect" placeholder="Muscles directs (séparés par virgule)">
                <input id="addMusclesIndirect" placeholder="Muscles indirects (séparés par virgule)">
            </div>
            <div class="mt-6 flex justify-end gap-2">
                <button class="btn-ghost" onclick="closeModal()">Annuler</button>
                <button class="btn" onclick="addExercise('${sessionKey}')">Ajouter</button>
            </div>`);
    }

    window.addExercise = (sessionKey) => {
        let techniques;
        try { techniques = JSON.parse(document.getElementById('addTech').value); } 
        catch { techniques = document.getElementById('addTech').value.trim(); }
        const newEx = {
            name: document.getElementById('addName').value.trim(),
            sets: parseInt(document.getElementById('addSets').value) || 3,
            reps: document.getElementById('addReps').value || "10",
            rest: parseInt(document.getElementById('addRest').value) || 90,
            weight: parseFloat(document.getElementById('addWeight').value) || 20,
            type: document.getElementById('addType').value.trim(),
            techniques,
            muscles: { 
                direct: document.getElementById('addMusclesDirect').value.split(',').map(m=>m.trim()).filter(Boolean),
                indirect: document.getElementById('addMusclesIndirect').value.split(',').map(m=>m.trim()).filter(Boolean)
            }
        };
        if (!newEx.name) return;
        state.program[sessionKey].exercises.push(newEx);
        if (state.weights[newEx.name] === undefined) state.weights[newEx.name] = newEx.weight;
        saveState();
        closeModal();
        openSession(sessionKey);
        showQuickMsg(`${newEx.name} ajouté.`);
    };

    window.openEditExerciseModal = (exName) => {
        const ex = state.program[currentSessionKey].exercises.find(e => e.name === exName);
        const techString = typeof ex.techniques === 'object' ? JSON.stringify(ex.techniques, null, 2) : ex.techniques;
        openModal(`
            <div class="font-bold mb-4">Modifier: ${ex.name}</div>
            <div class="space-y-3">
                <input id="editName" value="${ex.name}">
                <div class="grid grid-cols-2 gap-3">
                    <input id="editSets" type="number" value="${ex.sets}">
                    <input id="editReps" type="text" value="${ex.reps}">
                    <input id="editWeight" type="number" value="${ex.weight}">
                    <input id="editRest" type="number" value="${ex.rest}">
                </div>
                <input id="editType" value="${ex.type}">
                <textarea id="editTech" rows="3">${techString}</textarea>
                <input id="editMusclesDirect" value="${(ex.muscles.direct || []).join(', ')}">
                <input id="editMusclesIndirect" value="${(ex.muscles.indirect || []).join(', ')}">
            </div>
            <div class="mt-6 flex justify-between">
                <button class="btn-ghost text-red-500 border-red-500" onclick="deleteExercise('${exName}')">Supprimer</button>
                <div>
                    <button class="btn-ghost mr-2" onclick="closeModal()">Annuler</button>
                    <button class="btn" onclick="updateExercise('${exName}')">Sauvegarder</button>
                </div>
            </div>`);
    }

    window.updateExercise = (oldName) => {
        let techniques;
        try { techniques = JSON.parse(document.getElementById('editTech').value); } 
        catch { techniques = document.getElementById('editTech').value.trim(); }
        
        const exIndex = state.program[currentSessionKey].exercises.findIndex(e => e.name === oldName);
        const updatedEx = {
            name: document.getElementById('editName').value.trim(),
            sets: parseInt(document.getElementById('editSets').value),
            reps: document.getElementById('editReps').value,
            rest: parseInt(document.getElementById('editRest').value),
            weight: parseFloat(document.getElementById('editWeight').value),
            type: document.getElementById('editType').value.trim(),
            techniques,
            muscles: { 
                direct: document.getElementById('editMusclesDirect').value.split(',').map(m=>m.trim()).filter(Boolean),
                indirect: document.getElementById('editMusclesIndirect').value.split(',').map(m=>m.trim()).filter(Boolean)
            }
        };
        if (!updatedEx.name) return;
        state.program[currentSessionKey].exercises[exIndex] = updatedEx;

        if (oldName !== updatedEx.name) {
            state.weights[updatedEx.name] = state.weights[oldName];
            delete state.weights[oldName];
            if(state.hist[oldName]) {
                state.hist[updatedEx.name] = state.hist[oldName];
                delete state.hist[oldName];
            }
        }
        state.weights[updatedEx.name] = updatedEx.weight;
        
        saveState();
        closeModal();
        openSession(currentSessionKey);
        showQuickMsg(`${updatedEx.name} mis à jour.`);
    };

    window.deleteExercise = (exName) => {
        if (!confirm(`Vraiment supprimer ${exName}?`)) return;
        state.program[currentSessionKey].exercises = state.program[currentSessionKey].exercises.filter(e => e.name !== exName);
        saveState();
        closeModal();
        openSession(currentSessionKey);
        showQuickMsg(`${exName} supprimé.`);
    }

    // --- CORE LOGIC ---
    window.savePerf = function(exName) {
        const exId = exName.replace(/[^a-zA-Z0-9]/g, '');
        const inputs = document.querySelectorAll(`#details-${exId} input[type="number"]`);
        const weights = Array.from(inputs).filter(i => i.placeholder === 'kg').map(i => parseFloat(i.value) || 0);
        const reps = Array.from(inputs).filter(i => i.placeholder === 'reps').map(i => parseInt(i.value) || 0);
        
        const validSets = reps.map((r, i) => ({ reps: r, weight: weights[i] })).filter(s => s.reps > 0);
        if (validSets.length === 0) {
            showQuickMsg("Entrez au moins une répétition.");
            return;
        }
        
        const bestSet = validSets.reduce((best, current) => current.reps > best.reps ? current : best);

        state.hist[exName] = state.hist[exName] || [];
        state.hist[exName].push({ week: state.week, weight: bestSet.weight, reps: bestSet.reps, ts: Date.now() });
        state.weights[exName] = bestSet.weight;
        showQuickMsg(`${exName}: ${bestSet.reps} reps @ ${bestSet.weight}kg enregistré.`);
        validateProgression(exName);
        saveState();
    }

    function validateProgression(exName) {
        const ex = Object.values(state.program).flatMap(s => s.exercises).find(e => e.name === exName);
        if (!ex) return;

        const hist = (state.hist[exName] || []).filter(h => h.week === state.week || h.week === state.week - 1);
        if (hist.length < MIN_RECORDS) return;

        const last = hist[hist.length - 1];
        const prev = hist[hist.length - 2];
        const upperReps = parseInt(ex.reps.toString().split('-').pop());

        if ((last.reps >= upperReps && prev.reps >= upperReps && last.weight === prev.weight) || (last.reps >= upperReps + 2)) {
            tryApplyIncrement(exName, ex.type);
        }
    };

    function tryApplyIncrement(exName, type) {
        const inc = (type||'').toLowerCase().includes('halt') ? PROG_HALTERE : PROG_BARRE;
        const newW = (state.weights[exName] || 0) + inc;
        state.weights[exName] = newW;
        showQuickMsg(`Bravo! +${inc}kg sur ${exName} → ${newW}kg`);
    }

    window.handleSetCompletion = function(checkbox, exName, restTime, isLastSet) {
        if (checkbox.checked && isLastSet) {
            const currentExercises = state.program[currentSessionKey].exercises;
            const nextExIndex = currentExercises.findIndex(e => e.name === exName) + 1;
            const nextEx = currentExercises[nextExIndex];
            startTimer(restTime, nextEx ? nextEx.name : "Fin de séance");
        }
    }

    function startTimer(duration, nextExerciseNameStr) {
        clearInterval(timerInterval);
        const timerEl = document.getElementById('restTimer');
        const timerText = document.getElementById('timerText');
        const progressCircle = document.getElementById('timerProgress');
        document.getElementById('nextExerciseName').textContent = nextExerciseNameStr;
        timerEl.classList.add('visible');
        let timeLeft = duration;
        const updateTimer = () => {
            timerText.textContent = `${Math.floor(timeLeft/60)}:${(timeLeft%60).toString().padStart(2,'0')}`;
            progressCircle.style.strokeDashoffset = 283 * (1 - timeLeft / duration);
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerEl.classList.remove('visible');
                timerSound.play().catch(e => {});
            }
            timeLeft--;
        };
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }
    window.skipTimer = () => {
        clearInterval(timerInterval);
        document.getElementById('restTimer').classList.remove('visible');
    }

    // --- DASHBOARD FUNCTIONS ---
    function openStats(){
        let html = `<div class="font-bold mb-3">Poids Actuels (S${state.week})</div>`;
        Object.keys(state.weights).sort().forEach(k => {
            html += `<div class="flex justify-between p-2 border-b border-gray-800"><span>${k}</span><span class="small">${state.weights[k]} kg</span></div>`;
        });
        html += `<div class="mt-4 flex justify-end"><button class="btn-ghost" onclick="closeModal()">Fermer</button></div>`;
        openModal(html);
    }

    function exportWeightsCSV(){
        const rows = [["exercise", "weight"]];
        for(const k in state.weights) {
            rows.push([`"${k.replace(/"/g, '""')}"`, state.weights[k]]);
        }
        downloadCSV(rows.map(c => c.join(",")).join("\n"), "weights.csv");
    }

    function downloadCSV(content, fileName){
        const blob = new Blob([content], {type:"text/csv"}), a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        a.click();
        a.remove();
    }

    // --- EVENT LISTENERS ---
    document.getElementById("openStats").addEventListener("click", openStats);
    document.getElementById("exportWeights").addEventListener("click", exportWeightsCSV);
    document.getElementById("openAllGraphs").addEventListener("click", () => {
        openModal(`<div>
            <div class="font-bold">Graphes de Performance</div>
            <hr class="my-3 border-gray-800"/>
            <div style="height:320px"><canvas id="allMusclesChart"></canvas></div>
            <div class="mt-3 flex justify-end"><button class="btn-ghost" onclick="closeModal()">Fermer</button></div>
        </div>`);
        const ctx = document.getElementById("allMusclesChart").getContext("2d");
        const exercises = Object.keys(state.hist).slice(0, 5); // Limit for readability
        const labels = Array.from({length: state.week}, (v,i) => "S" + (i+1));
        const datasets = exercises.map((exName, i) => {
            const data = labels.map((label, weekIndex) => {
                const weekNum = weekIndex + 1;
                const weekHistory = (state.hist[exName] || []).filter(h => h.week === weekNum);
                if (weekHistory.length === 0) return null;
                return weekHistory.reduce((max, h) => Math.max(max, h.weight), 0);
            });
            const colors=["#f59e0b","#667eea","#34d399","#ef4444","#a855f7"];
            const color=colors[i%colors.length];
            return { label: exName, data, borderColor: color, fill: false, tension: 0.1 };
        });
        new Chart(ctx, {type:"line", data:{labels, datasets}, options:{maintainAspectRatio:false, scales:{y:{ticks:{color:"var(--muted)"}}, x:{ticks:{color:"var(--muted)"}}}, plugins:{legend:{labels:{color:"var(--muted)"}}}}});
    });
    document.getElementById("advanceWeek").addEventListener("click", () => {
        if(state.week < 26) {
            state.week++;
            saveState();
            renderHeader();
            showQuickMsg(`Passage à la semaine ${state.week}`);
        } else {
            alert("Fin du cycle.");
        }
    });
    document.getElementById("prevWeek").addEventListener("click", () => {
        if(state.week > 1) {
            state.week--;
            saveState();
            renderHeader();
            showQuickMsg(`Retour à la semaine ${state.week}`);
        }
    });
    document.getElementById("resetApp").addEventListener("click", () => {
        if(confirm("Supprimer toutes les données?")) {
            localStorage.removeItem(STATE_KEY);
            state = loadState();
            initApp();
        }
    });
    muscleSelect.addEventListener('change', (e) => {
        highlightMuscles({ direct: e.target.value ? [e.target.value] : [], indirect: [] });
    });
    modal.addEventListener("click", (e) => {
        if(e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if(e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
    document.getElementById('backHomeBtn').addEventListener('click', backHome);
    document.getElementById('skipTimerBtn').addEventListener('click', skipTimer);
    document.getElementById('addExerciseBtn').addEventListener('click', () => openAddExerciseModal(currentSessionKey));

    // --- INITIALIZATION ---
    function initApp() {
        state = loadState();
        initAnatomyView();
        renderHeader();
        renderProgramList();
        buildMuscleSelector();
        showQuickMsg("Prêt à dominer.");
    }
    
    initApp();
});