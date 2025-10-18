let questionCount = 0;

// Function to create a question block with accordion and dynamic fields
function createQuestion() {
  questionCount++;
  const container = document.getElementById('questionsContainer');
  const questionId = `question${questionCount}`;

  const div = document.createElement('div');
  div.classList.add('accordion-item', 'question-item', 'mb-2');
  div.dataset.index = questionCount;

  div.innerHTML = `
    <h2 class="accordion-header" id="heading${questionId}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${questionId}" aria-expanded="false" aria-controls="collapse${questionId}">
        Question ${questionCount}
      </button>
    </h2>
    <div id="collapse${questionId}" class="accordion-collapse collapse" aria-labelledby="heading${questionId}" data-bs-parent="#questionsContainer">
      <div class="accordion-body">
        <div class="mb-3">
          <label class="form-label">Question</label>
          <input type="text" class="form-control question-title" name="questions[]" placeholder="Enter question" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Description (optional)</label>
          <input type="text" class="form-control" name="descriptions[]" placeholder="Enter description">
        </div>
        <div class="mb-3">
          <label class="form-label">Question Type</label>
          <select class="form-select question-type" name="questionTypes[]" required>
            <option value="" disabled selected>Select type</option>
            <option value="rating">Rating (1–5)</option>
            <option value="yesno">Yes / No</option>
            <option value="text">Text Response</option>
            <option value="multichoice">Multiple Choice</option>
          </select>
        </div>
        <div class="dynamic-fields"></div>
        <button class="btn btn-danger remove-question" type="button">Remove Question</button>
      </div>
    </div>
  `;

  container.appendChild(div);
}

// Add question button
document.getElementById('addQuestion').addEventListener('click', createQuestion);

// Remove question
document.addEventListener('click', function(e) {
  if(e.target && e.target.classList.contains('remove-question')) {
    e.target.closest('.accordion-item').remove();
  }
});

// Update accordion header when typing question text
document.addEventListener('input', function(e) {
  if(e.target && e.target.classList.contains('question-title')) {
    const input = e.target;
    const headerButton = input.closest('.accordion-item').querySelector('.accordion-button');
    headerButton.textContent = input.value.trim() || 'Untitled Question';
  }
});

// Dynamic fields based on question type
document.addEventListener('change', function(e) {
  if(e.target && e.target.classList.contains('question-type')) {
    const type = e.target.value;
    const dynamicContainer = e.target.closest('.accordion-body').querySelector('.dynamic-fields');
    dynamicContainer.innerHTML = '';

    if(type === 'rating') {
      dynamicContainer.innerHTML = `
        <div class="mb-3">
          <label class="form-label">Rating Scale (min - max)</label>
          <div class="d-flex gap-2">
            <input type="number" class="form-control" name="ratingMin[]" value="1" min="1" placeholder="Min" required>
            <input type="number" class="form-control" name="ratingMax[]" value="5" min="1" placeholder="Max" required>
          </div>
        </div>
      `;
    } else if(type === 'yesno') {
      dynamicContainer.innerHTML = `
        <div class="mb-3">
          <label class="form-label">Custom Labels (optional)</label>
          <div class="d-flex gap-2">
            <input type="text" class="form-control" name="yesLabel[]" placeholder="Yes" value="Yes">
            <input type="text" class="form-control" name="noLabel[]" placeholder="No" value="No">
          </div>
        </div>
      `;
    } else if(type === 'text') {
      dynamicContainer.innerHTML = `
        <div class="mb-3">
          <label class="form-label">Max Characters (optional)</label>
          <input type="number" class="form-control" name="textMaxLength[]" placeholder="e.g. 200">
        </div>
      `;
    } else if(type === 'multichoice') {
      dynamicContainer.innerHTML = `
        <div class="mb-3">
          <label class="form-label">Options</label>
          <div class="options-container"></div>
          <button type="button" class="btn btn-secondary btn-sm add-option">Add Option</button>
        </div>
      `;
    }
  }
});

// Handle adding/removing/reordering multi-choice options
document.addEventListener('click', function(e) {
  if(e.target && e.target.classList.contains('add-option')) {
    const container = e.target.closest('.dynamic-fields').querySelector('.options-container');
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('option-item');
    optionDiv.innerHTML = `
      <input type="text" class="form-control" name="multiOptions[]" placeholder="Option text" required>
      <button type="button" class="btn btn-danger btn-sm remove-option">X</button>
    `;
    container.appendChild(optionDiv);

    if(!container.classList.contains('sortable-enabled')) {
      Sortable.create(container, { animation: 150 });
      container.classList.add('sortable-enabled');
    }
  }

  if(e.target && e.target.classList.contains('remove-option')) {
    e.target.closest('.option-item').remove();
  }
});

// Enable drag-and-drop sorting for questions
Sortable.create(document.getElementById('questionsContainer'), { animation: 150 });

// Form submission
document.getElementById('adminForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = [];
  document.querySelectorAll('#questionsContainer .question-item').forEach(q => {
    const questionText = q.querySelector('input[name="questions[]"]').value;
    const description = q.querySelector('input[name="descriptions[]"]').value;
    const type = q.querySelector('select[name="questionTypes[]"]').value;
    const questionData = { question: questionText, description, type };

    if(type === 'rating') {
      questionData.min = q.querySelector('input[name="ratingMin[]"]').value;
      questionData.max = q.querySelector('input[name="ratingMax[]"]').value;
    } else if(type === 'yesno') {
      questionData.yesLabel = q.querySelector('input[name="yesLabel[]"]').value;
      questionData.noLabel = q.querySelector('input[name="noLabel[]"]').value;
    } else if(type === 'text') {
      questionData.maxLength = q.querySelector('input[name="textMaxLength[]"]')?.value || null;
    } else if(type === 'multichoice') {
      const options = [...q.querySelectorAll('.option-item input')].map(opt => opt.value);
      questionData.options = options;
    }
    data.push(questionData);
  });
  console.log('Survey Data:', JSON.stringify(data, null, 2));
  alert('Survey setup saved successfully! Check console for JSON output.');
});

// Initialize with one question
createQuestion();
