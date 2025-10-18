
// <!-- 
// This is the JS Code for managing Key Result Area Questions
// This script will work for Questions on Blank Form Page, KRA Questions on Operational and Professional forms
//  -->

    let sectionCount = 0;

    // Add Section
    $("#addSection").on("click", function() {
      sectionCount++;
      const sectionHTML = `
        <div class="section-card" data-section="${sectionCount}">
          <div class="d-flex justify-content-between">
          <h5>Section ${sectionCount}</h5>
          <button class="btn btn-icon btn-outline-danger rounded-pill delete-section" title="Delete Section"><span class="tf-icons ri-close-line ri-24px"></span></button>
          </div>
          <div class="row">
            <div class="col-md-9 col-xs-12">
              <div class="form-floating form-floating-outline">
                <input type="text" class="form-control mb-2 sectionTitle" placeholder="Section Title" required>
                <label for="section-title">Section Title</label>
              </div>
            </div>
            <div class="col-md-3 col-xs-12">
              <div class="form-floating form-floating-outline">
                <input type="number" class="form-control mb-2 sectionMax" placeholder="Section Max Score" min="1" required>
                <label for="section-score">Maximum Score</label>
              </div>
            </div>
          </div>
          
          <div class="questions"></div>
          <button class="btn btn-sm rounded-pill btn-outline-primary addProQuestion">+ Add Question</button>
          
          <div class="mt-2 totals">
            Section Total: <span class="sectionTotal">0</span> /
            <span class="sectionAllocated">0</span>
          </div>
          <div class="sectionWarning warning"></div>
        </div>`;
      $("#sections").append(sectionHTML);
    });

    // Add Question
    $(document).on("click", ".addProQuestion", function() {
      const questionHTML = `
        <div class="question-card">
          <div class="row mb-2">
            <div class="col-md-6 col-xs-12">
              <div class="form-floating form-floating-outline">
                <input type="text" class="form-control mb-2 questionText" placeholder="Enter question text" required>
                <label for="">Question</label>
              </div>
            </div>
            <div class="col-md-3 col-sm-5">
              <div class="form-floating form-floating-outline">
                <select class="form-select mb-2 questionType">
                  <option value="text">Short Answer</option>
                  <option value="long">Long Answer</option>
                  <option value="mcq">Multiple Choice</option>
                  <option value="rating">Rating (1-5)</option>
                </select>
                <label for="">Question Type</label>
              </div>
            </div>
            <div class="col-md-2 col-sm-5">
              <div class="form-floating form-floating-outline">
                <input type="number" class="form-control mb-2 questionScore" placeholder="Question Score" min="1" required>
                <label for="">Score</label>
              </div>
            </div>
            <div class="col-md-1 col-sm-2">
              <button class="btn btn-icon btn-sm btn-outline-danger mb-2 rounded-pill delete-question" title="Delete Question"><span class="tf-icons ri-close-line ri-24px"></span></button>
            </div>
            <div class="col-md-12">
              <div class="form-floating form-floating-outline">
                <textarea class="form-control mb-2 questionDesc" placeholder="Question description (optional)"></textarea>
                <label for="">Description</label>
              </div>
            </div>
          
          <div class="options d-none">
            <div class="row mb-2">
              <div class="col-md-3 col-sm-7 col-sm-5">
              <input type="text" class="form-control form-control-sm mb-2 optionText" placeholder="Option text">
              </div>
              <div class="col-md-2 col-sm-4 col-sm-5">
              <input type="number" class="form-control form-control-sm mb-2 option-score" placeholder="Score" min="0">
              </div>
              <div class="col-md-1 col-sm-1 col-sm-2">
              <button class="btn btn-sm btn-icon btn-outline-danger rounded-pill mb-2 delete-option"><span class="tf-icons ri-close-line ri-24px"></span></button>
              </div>
            </div>
            <button class="btn rounded-pill btn-sm btn-outline-primary mb-4 addOption">+ Add Option</button>
          </div> 
          
        </div>`;
      $(this).siblings(".questions").append(questionHTML);
    });

    // Toggle options if MCQ selected
    $(document).on("change", ".questionType", function() {
      const optionsDiv = $(this).closest(".question-card").find(".options");
      if ($(this).val() === "mcq") optionsDiv.removeClass("d-none");
      else optionsDiv.addClass("d-none");
    });

    // Add extra options
    $(document).on("click", ".addOption", function(e) {
      e.preventDefault();
      $(this).before(`
            <div class="row mb-2">
              <div class="col-md-3 col-sm-7 col-sm-5">
              <input type="text" class="form-control form-control-sm optionText" placeholder="Option text">
              </div>
              <div class="col-md-2 col-sm-4 col-sm-5">
              <input type="number" class="form-control form-control-sm option-score" placeholder="Score" min="0">
              </div>
              <div class="col-md-1 col-sm-1 col-sm-2">
              <button class="btn btn-icon btn-outline-danger rounded-pill  delete-option"><span class="tf-icons ri-close-line ri-24px"></span></button>
              </div>
            </div>`);
    });

    // Delete Section
    $(document).on("click", ".delete-section", function() {
      if (confirm("Delete this section?")) {
        $(this).closest(".section-card").remove();
        updateTotals();
      }
    });

    // Delete Question
    $(document).on("click", ".delete-question", function() {
      if (confirm("Delete this question?")) {
        $(this).closest(".question-card").remove();
        updateTotals();
      }
    });

    // Delete Option
    $(document).on("click", ".delete-option", function(e) {
      e.preventDefault();
      $(this).closest(".option-row").remove();
    });

    // Auto-update totals when scores or max change
    $(document).on("input", ".questionScore, .option-score, .sectionMax", function() {
      updateTotals();
    });

    // Calculate totals
    function updateTotals() {
      let overallAllocated = 0;

      $(".section-card").each(function() {
        let sectionTotal = 0;
        let sectionMax = parseInt($(this).find(".sectionMax").val()) || 0;

        $(this).find(".question-card").each(function() {
          const qScore = parseInt($(this).find(".questionScore").val()) || 0;
          sectionTotal += qScore;
        });

        // Update UI
        $(this).find(".sectionTotal").text(sectionTotal);
        $(this).find(".sectionAllocated").text(sectionMax);

        // Warnings
        if (sectionTotal > sectionMax && sectionMax > 0) {
          $(this).find(".sectionWarning").text("⚠ Section total exceeds allocated max.");
        } else {
          $(this).find(".sectionWarning").text("");
        }

        overallAllocated += sectionMax;
      });

      $("#overallAllocated").text(overallAllocated);

      // Global warning
      if (overallAllocated !== 100) {
        $("#overallWarning").text("⚠ Overall allocated score must equal 100. Currently: " + overallAllocated);
      } else {
        $("#overallWarning").text("");
      }
    }

    // Validate before preview
    function validateForm() {
      let valid = true;
      let errorMsg = "";

      $(".section-card").each(function() {
        const sectionMax = parseInt($(this).find(".sectionMax").val());
        let sectionTotal = 0;

        if (!sectionMax || sectionMax <= 0) {
          valid = false;
          errorMsg = "Each section must have a valid max score.";
        }

        $(this).find(".question-card").each(function() {
          const qText = $(this).find(".questionText").val().trim();
          const qScore = parseInt($(this).find(".questionScore").val());
          const qType = $(this).find(".questionType").val();

          if (!qText) { valid = false; errorMsg = "Some questions are missing text."; }
          if (!qScore || qScore <= 0) { valid = false; errorMsg = "Each question must have a score > 0."; }
          sectionTotal += qScore;

          if (qType === "mcq") {
            let hasOption = false;
            $(this).find(".option-row").each(function() {
              const optText = $(this).find(".optionText").val().trim();
              const optScore = $(this).find(".option-score").val();
              if (optText && optScore !== "") hasOption = true;
            });
            if (!hasOption) { valid = false; errorMsg = "MCQ questions must have options with scores."; }
          }
        });

        if (sectionTotal > sectionMax) {
          valid = false;
          errorMsg = "Section total cannot exceed its allocated max.";
        }
      });

      const overallAllocated = parseInt($("#overallAllocated").text());
      if (overallAllocated !== 100) {
        valid = false;
        errorMsg = "Overall allocated score must equal 100.";
      }

      if (!valid) alert(errorMsg);
      return valid;
    }

    // Preview form
    $("#previewForm").on("click", function() {
      if (!validateForm()) return;
      updateTotals();

      let previewHTML = "<form>";
      $(".section-card").each(function() {
        const sectionTitle = $(this).find(".sectionTitle").val() || "Untitled Section";
        const sectionTotal = $(this).find(".sectionTotal").text();
        const sectionMax = $(this).find(".sectionMax").val();
        previewHTML += `<h4 class="mt-3">${sectionTitle} (Total: ${sectionTotal} / ${sectionMax})</h4>`;
        
        $(this).find(".question-card").each(function() {
          const qText = $(this).find(".questionText").val();
          const qType = $(this).find(".questionType").val();
          const score = $(this).find(".questionScore").val();
          previewHTML += `<p><strong>${qText}</strong> (Score: ${score})<br>`;

          if (qType === "text") {
            previewHTML += `<input type="text" class="form-control mb-2">`;
          } else if (qType === "long") {
            previewHTML += `<textarea class="form-control mb-2" rows="4"></textarea>`;
          } else if (qType === "mcq") {
            $(this).find(".option-row").each(function() {
              const opt = $(this).find(".optionText").val();
              const optScore = $(this).find(".option-score").val();
              if (opt) previewHTML += `<div><input type="radio" name="${qText}"> ${opt} (Score: ${optScore})</div>`;
            });
          } else if (qType === "rating") {
            for (let i=1;i<=5;i++) {
              previewHTML += `<label class="me-2"><input type="radio" name="${qText}"> ${i}</label>`;
            }
          }
          previewHTML += "</p>";
        });
      });
      previewHTML += `<div class="alert alert-info">Overall Allocated: ${$("#overallAllocated").text()} / 100</div></form>`;
      $("#previewBody").html(previewHTML);
      new bootstrap.Modal(document.getElementById('kraModal')).show();
    });



// =====================================================================================
// // This script is used to manage Core Value questions for all the appraisal forms
// =====================================================================================

    // Add Question
    $("#addCVQuestion").on("click", function() {
      const questionHTML = `
        <div class="question-card">
          <div class="row">
            <div class="col-md-8 col-xs-12">
              <div class="form-floating form-floating-outline">
                <input type="text" class="form-control mb-2 questionCVText" placeholder="Enter question text" required>
              </div>
            </div>
            <div class="col-md-3 col-xs-12">
              <div class="form-floating form-floating-outline">
                <input type="number" class="form-control mb-2 questionCVScore" placeholder="Total Score" min="1" required>
              </div>
            </div>
            <div class="col-md-1 col-xs-12">
              <button class="btn rounded-pill btn-icon btn-outline-primary deleteCVQuestion"><span class="tf-icons ri-close-line ri-24px"></span></button>
            </div>
            <div class="col-12">
              <div class="form-floating form-floating-outline">
                <textarea class="form-control mb-2 questionCVDesc" placeholder="Enter question description (optional)"></textarea>
              </div>
            </div>
          </div>
        </div>`;
      $("#cvQuestions").append(questionHTML);
    });

    // Delete question
    $(document).on("click", ".deleteCVQuestion", function() {
      $(this).closest(".question-card").remove();
      updateTotals();
    });

    // Auto-update totals
    $(document).on("input", ".questionCVScore", function() {
      updateTotals();
    });

    // Calculate totals
    function updateTotals() {
      let overallTotal = 0;
      $("#cvQuestions .question-card").each(function() {
        const qScore = parseInt($(this).find(".questionCVScore").val()) || 0;
        overallTotal += qScore;
      });
      $("#overallTotal").text(overallTotal);
      if (overallTotal > 100) {
        $("#overallTotal").css("color", "red");
      } else if (overallTotal < 100) {
        $("#overallTotal").css("color", "orange");
      } else {
        $("#overallTotal").css("color", "green");
      }
    }

    // Validate before preview
    function validateForm() {
      let valid = true;
      let errorMsg = "";

      $("#cvQuestions .question-card").each(function() {
        const qText = $(this).find(".questionCVText").val().trim();
        const qScore = $(this).find(".questionCVScore").val();

        if (!qText) { valid = false; errorMsg = "Some questions are missing text."; }
        if (!qScore || qScore <= 0) { valid = false; errorMsg = "Each question must have a score > 0."; }
      });

      const total = parseInt($("#overallTotal").text());
      if (total !== 100) {
        valid = false; 
        errorMsg = "Overall total score must equal 100.";
      }

      if (!valid) alert(errorMsg);
      return valid;
    }

    // Preview form
    $("#previewForm").on("click", function() {
      if (!validateForm()) return;
      updateTotals();

      let previewHTML = "<form>";
      $("#cvQuestions .question-card").each(function() {
        const qText = $(this).find(".questionCVText").val();
        const qDesc = $(this).find(".questionCVDesc").val();
        const score = $(this).find(".questionCVScore").val();

        previewHTML += `<p><strong>${qText}</strong> (Score: ${score})<br>`;
        if (qDesc) previewHTML += `<small>${qDesc}</small><br>`;
        previewHTML += `<textarea class="form-control mb-2" placeholder="Enter response"></textarea></p>`;
      });
      previewHTML += `<div class="alert alert-info">Overall Total: ${$("#overallTotal").text()} / 100</div></form>`;
      $("#previewBody").html(previewHTML);
      new bootstrap.Modal(document.getElementById('coreValueModal')).show();
    });




// ============================================================================
// // This is the Script for Operational Form Key Result Area.
// ============================================================================

    // Add Question
    $("#addKRAQuestion").on("click", function() {
      const questionHTML = `
        <div class="question-card">
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="form-floating form-floating-outline">
                <input type="text" class="form-control mb-2 questionKRAText" placeholder="Enter question text" required>
                <label for="">Question Text</label>
              </div>
            </div>
            <div class="col-md-3 col-sm-5">
              <div class="form-floating form-floating-outline">
                <select class="form-select mb-2 questionKRAType">
                  <option value="text">Short Answer</option>
                  <option value="long">Long Answer</option>
                  <option value="mcq">Multiple Choice</option>
                  <option value="rating">Rating (1-5)</option>
                </select>
                <label for="">Question Type</label>
              </div>
            </div>
            <div class="col-md-2 col-sm-5">
              <div class="form-floating form-floating-outline">
                <input type="number" class="form-control mb-2 questionKRAScore" placeholder="Total Score" min="1" required>
                <label for="">Maximum Score</label>
              </div>
            </div>
            <div class="col-md-1 col-sm-2">
                <button class="btn btn-icon btn-outline-danger rounded-pill deleteKRAQuestion"><span class="tf-icons ri-close-line ri-24px"></span></button>
            </div>
            <div class="col-md-12">
              <div class="form-floating form-floating-outline">
                <textarea class="form-control mb-2 questionKRADesc" placeholder="Enter question description (optional)"></textarea>
                <label for="">Description</label>
              </div>
            </div>
          </div>

          <div class="options d-none">
            <div class="option-row row mb-2">
              <div class="col-md-3 col-sm-7 col-sm-5">
                  <input type="text" class="form-control form-control-sm mb-2 optionKRAText" placeholder="Option text">
              </div>
              <div class="col-md-2 col-sm-4 col-sm-5">
                  <input type="number" class="form-control form-control-sm mb-2 option-kra-score" placeholder="Score" min="0">
              </div>
              <div class="col-md-1 col-sm-1 col-sm-2">
                <button class="btn btn-sm btn-icon btn-outline-danger rounded-pill mb-2 deleteKRAOption"><span class="tf-icons ri-close-line ri-24px"></span></button>
              </div>
            </div>
            <button class="btn btn-sm btn-outline-primary rounded-pill addKRAOption">+ Add Option</button>
          </div>
        </div>`;
      $("#kraQuestions").append(questionHTML);
    });

    // Toggle options for MCQ
    $(document).on("change", ".questionKRAType", function() {
      const optionsDiv = $(this).closest(".question-card").find(".options");
      if ($(this).val() === "mcq") optionsDiv.removeClass("d-none");
      else optionsDiv.addClass("d-none");
    });

    // Add extra option
    $(document).on("click", ".addKRAOption", function(e) {
      e.preventDefault();
      $(this).before(`
            <div class="option-row row mb-2">
              <div class="col-md-3 col-sm-7 col-sm-5">
                <div class="form-floating form-floating-outline">
                  <input type="text" class="form-control form-control-sm mb-2 optionKRAText" placeholder="Option text">
                </div>
              </div>
              <div class="col-md-2 col-sm-4 col-sm-5">
                <div class="form-floating form-floating-outline">
                  <input type="number" class="form-control form-control-sm mb-2 option-kra-score" placeholder="Score" min="0">
                </div>
              </div>
              <div class="col-md-1 col-sm-1 col-sm-2">
                <div class="form-floating form-floating-outline">
                  <button class="btn btn-sm btn-icon btn-outline-danger rounded-pill mb-2 deleteKRAOption"><span class="tf-icons ri-close-line ri-24px"></span></button>
                </div>
              </div>
        </div>`);
    });

    // Delete option
    $(document).on("click", ".deleteKRAOption", function(e) {
      e.preventDefault();
      $(this).closest(".option-row").remove();
    });

    // Delete question
    $(document).on("click", ".deleteKRAQuestion", function() {
      $(this).closest(".question-card").remove();
      updateTotals();
    });

    // Auto-update totals
    $(document).on("input", ".questionKRAScore", function() {
      updateTotals();
    });

    // Calculate totals
    function updateTotals() {
      let overallTotal = 0;
      $("#kraQuestions .question-card").each(function() {
        const qScore = parseInt($(this).find(".questionKRAScore").val()) || 0;
        overallTotal += qScore;
      });
      $("#overallTotal").text(overallTotal);
      if (overallTotal > 100) {
        $("#overallTotal").css("color", "red");
      } else if (overallTotal < 100) {
        $("#overallTotal").css("color", "orange");
      } else {
        $("#overallTotal").css("color", "green");
      }
    }

    // Validate before preview
    function validateForm() {
      let valid = true;
      let errorMsg = "";

      $("#kraQuestions .question-card").each(function() {
        const qText = $(this).find(".questionKRAText").val().trim();
        const qScore = $(this).find(".questionKRAScore").val();
        const qType = $(this).find(".questionKRAType").val();

        if (!qText) { valid = false; errorMsg = "Some questions are missing text."; }
        if (!qScore || qScore <= 0) { valid = false; errorMsg = "Each question must have a score > 0."; }

        if (qType === "mcq") {
          let hasOption = false;
          $(this).find(".option-row").each(function() {
            const optText = $(this).find(".optionKRAText").val().trim();
            const optScore = $(this).find(".option-kra-score").val();
            if (optText && optScore !== "") hasOption = true;
          });
          if (!hasOption) { valid = false; errorMsg = "MCQ questions must have options with scores."; }
        }
      });

      const total = parseInt($("#overallTotal").text());
      if (total !== 100) {
        valid = false; 
        errorMsg = "Overall total score must equal 100.";
      }

      if (!valid) alert(errorMsg);
      return valid;
    }

    // Preview form
    $("#previewForm").on("click", function() {
      if (!validateForm()) return;
      updateTotals();

      let previewHTML = "<form>";
      $("#kraQuestions .question-card").each(function() {
        const qText = $(this).find(".questionKRAText").val();
        const qDesc = $(this).find(".questionKRADesc").val();
        const qType = $(this).find(".questionKRAType").val();
        const score = $(this).find(".questionKRAScore").val();

        previewHTML += `<p><strong>${qText}</strong> (Score: ${score})<br>`;
        if (qDesc) previewHTML += `<small>${qDesc}</small><br>`;

        if (qType === "text") {
          previewHTML += `<input type="text" class="form-control mb-2">`;
        } else if (qType === "long") {
          previewHTML += `<textarea class="form-control mb-2" rows="4"></textarea>`;
        } else if (qType === "mcq") {
          $(this).find(".option-row").each(function() {
            const opt = $(this).find(".optionText").val();
            const optScore = $(this).find(".option-score").val();
            if (opt) previewHTML += `<div><input type="radio" name="${qText}"> ${opt} (Score: ${optScore})</div>`;
          });
        } else if (qType === "rating") {
          for (let i=1;i<=5;i++) {
            previewHTML += `<label class="me-2"><input type="radio" name="${qText}"> ${i}</label>`;
          }
        }
        previewHTML += "</p>";
      });
      previewHTML += `<div class="alert alert-info">Overall Total: ${$("#overallTotal").text()} / 100</div></form>`;
      $("#previewBody").html(previewHTML);
      new bootstrap.Modal(document.getElementById('kraModal')).show();
    });
