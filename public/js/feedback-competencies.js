  // ---------- RATING SCALE SETUP ----------
  const scaleLevelsContainer = document.getElementById('scaleLevelsContainer');
  const addLevelBtn = document.getElementById('addLevelBtn');
  const scaleTableBody = document.getElementById('scaleTableBody');
  const ratingScaleSelect = document.getElementById('ratingScaleSelect');
  let scales = [];

  function createLevelRow() {
    const row = document.createElement('div');
    row.className = 'row g-3 mb-3 scale-level';
    row.innerHTML = `
      <div class="col-md-2"><input type="number" class="form-control levelValue" placeholder="Value" required></div>
      <div class="col-md-3"><input type="text" class="form-control levelName" placeholder="Name" required></div>
      <div class="col-md-6"><input type="text" class="form-control levelDescription" placeholder="Behavioral Description" required></div>
      <div class="col-md-1 d-flex align-items-center"><button type="button" class="btn btn-outline-danger btn-sm remove-level">&times;</button></div>
    `;
    row.querySelector('.remove-level').addEventListener('click', () => row.remove());
    return row;
  }
  addLevelBtn.addEventListener('click', () => scaleLevelsContainer.appendChild(createLevelRow()));
  document.getElementById('ratingScaleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const scaleName = document.getElementById('scaleName').value;
    const levels = Array.from(document.querySelectorAll('.scale-level')).map(row => ({
      value: row.querySelector('.levelValue').value,
      name: row.querySelector('.levelName').value,
      description: row.querySelector('.levelDescription').value
    }));
    const levelsHtml = levels.map(l => `<strong>${l.value} - ${l.name}:</strong> ${l.description}`).join('<br>');
    scaleTableBody.insertAdjacentHTML('beforeend', `
        <tr>
        <td><input type="checkbox" class="dt-checkboxes form-check-input"></td>
        <td>${scaleName}</td>
        <td>${levelsHtml}</td>
        <td></td>
        </tr>`);
    scales.push({ name: scaleName, levels });
    const option = document.createElement('option'); option.value = scaleName; option.textContent = scaleName; ratingScaleSelect.appendChild(option);
    this.reset(); scaleLevelsContainer.innerHTML = ''; scaleLevelsContainer.appendChild(createLevelRow());
  });
  scaleLevelsContainer.appendChild(createLevelRow());

  // ---------- COMPETENCY SETUP ----------
  const categorySelect = document.getElementById('categorySelect');
  const departmentsWrapper = document.getElementById('departmentsWrapper');
  const departmentsSelect = document.getElementById('departmentsSelect');
  const indicatorsContainer = document.getElementById('indicatorsContainer');
  const indicatorInput = document.getElementById('indicatorInput');
  const addIndicatorBtn = document.getElementById('addIndicatorBtn');
  const competencyTableBody = document.getElementById('competencyTableBody');
  let indicators = [];
  categorySelect.addEventListener('change', () => {
    categorySelect.value === 'functional' ? departmentsWrapper.classList.remove('hidden') : departmentsWrapper.classList.add('hidden');
  });
  function renderIndicators() {
    indicatorsContainer.innerHTML = '';
    const category = categorySelect.value;
    const chipClass = category ? `chip-${category}` : 'chip-core';
    indicators.forEach((text, index) => {
      const chip = document.createElement('span');
      chip.className = `chip ${chipClass}`;
      chip.innerHTML = `${text} <button type="button">&times;</button>`;
      chip.querySelector('button').addEventListener('click', () => { indicators.splice(index, 1); renderIndicators(); });
      indicatorsContainer.appendChild(chip);
    });
  }
  function addIndicator() {
    const value = indicatorInput.value.trim();
    if (value && !indicators.includes(value)) { indicators.push(value); renderIndicators(); indicatorInput.value = ''; }
  }
  addIndicatorBtn.addEventListener('click', addIndicator);
  indicatorInput.addEventListener('keypress', e => { if (e.key === 'Enter') { e.preventDefault(); addIndicator(); } });
  document.getElementById('competencyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('competencyName').value;
    const category = categorySelect.options[categorySelect.selectedIndex].text;
    const departments = Array.from(departmentsSelect.selectedOptions).map(opt => opt.text).join(', ') || '-';
    const roles = Array.from(document.getElementById('rolesSelect').selectedOptions).map(opt => opt.text).join(', ');
    const description = document.getElementById('competencyDescription').value;
    const indicatorsText = indicators.length ? indicators.join('; ') : '-';
    const ratingScale = document.getElementById('ratingScaleSelect').value;
    const weight = document.getElementById('competencyWeight').value + '%';
    competencyTableBody.insertAdjacentHTML('beforeend', `<tr><td>${name}</td><td>${category}</td><td>${departments}</td><td>${roles}</td><td>${description}</td><td>${indicatorsText}</td><td>${ratingScale}</td><td>${weight}</td></tr>`);
    this.reset(); indicators = []; renderIndicators(); departmentsWrapper.classList.add('hidden');
  });

  // ---------- FEEDBACK ACTIVITY SETUP ----------
  const feedbackForm = document.getElementById('feedbackForm');
  const weightError = document.getElementById('weightError');
  const feedbackTableBody = document.getElementById('feedbackTableBody');
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const manager = parseInt(document.getElementById('managerWeight').value) || 0;
    const peers = parseInt(document.getElementById('peersWeight').value) || 0;
    const directReports = parseInt(document.getElementById('directReportsWeight').value) || 0;
    const self = parseInt(document.getElementById('selfWeight').value) || 0;
    const total = manager + peers + directReports + self;
    if (total !== 100) { weightError.classList.remove('d-none'); return; } else { weightError.classList.add('d-none'); }
    feedbackTableBody.insertAdjacentHTML('beforeend', `<tr><td>${manager}%</td><td>${peers}%</td><td>${directReports}%</td><td>${self}%</td><td>${total}%</td></tr>`);
    this.reset();
  });
