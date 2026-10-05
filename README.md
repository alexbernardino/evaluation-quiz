# Evaluation Quiz

A separate, static formative quiz matching the visual style of the KNN, regression and regularization quizzes. Twenty-four questions provide immediate feedback, conceptual reflections, progress, a question map, section scores, answer review and restart. No backend or external dependencies.

## Lecture alignment

Source: the supplied `0_Machine_Learning_Slides.pdf`, Evaluation & Generalization chapter. The PDF is not copied into the public repository.

| Questions | Section | Coverage |
|---|---|---|
| 1–6 | Evaluation basics | Squared loss; empirical and population risk; training optimism; population mismatch; dataset roles; generalization gap |
| 7–12 | Bias & variance | Repeated training; pointwise bias; predictor variance; decomposition; degree and overfitting; irreducible noise |
| 13–18 | Test-score uncertainty | Fixed-predictor evaluation; loss-based SE; test size; evaluation precision versus predictor variance; dependent observations; explicit population-risk calculation |
| 19–24 | Model selection | Parameters vs. hyperparameters; test reuse; weighted CV; preprocessing leakage; nested CV; refitting after assessment |

Questions are self-contained and based on the Evaluation & Generalization chapter. All numerical assumptions are stated in the questions. Feedback provides explanations and conceptual reflections, with no dependency on external demonstrations, interface controls or plots. No precision/recall, kernel or regularization-specific questions are included.

Bias and predictor variance are distinguished from sampling uncertainty of test MSE. Independent evaluation samples are distinguished from overlapping cross-validation folds.

Feedback states the conditional-noise assumptions of the squared-error decomposition, the non-universal nature of complexity trends, and the dependence of CV scores. Nested CV assesses the selection-and-fitting procedure at the outer training size. CV selection plus an independent test set is also valid.

## Test locally

```bash
cd /Users/alex/Documents/Codex/2026-07-28/evaluation-quiz
python3 -m http.server 3005
```

Open http://localhost:3005/. Do not open `index.html` directly; ES modules need a local server. Alternatively, `npm run dev` runs the same server. No `npm install` is required.

With Node.js 22 or later:

```bash
npm test
npm run build
```

The build writes a GitHub Pages-ready `dist/` folder, including a UTC build timestamp. All internal asset paths are relative, so repository subpaths work without configuration.

## Editing questions

Edit **`questions.js`**. Each item has a unique id, section, category, prompt, four options, zero-based answer index (0–3), explanation, activity type and activity. Run `npm test` after edits. Update the structural tests and displayed question-count text if you change the quiz length or section sizes.

Answers lock after first selection; returning to a question does not change the score. Students can jump between questions and see results after answering all of them. Restarting begins a fresh attempt. Progress is held only in memory and resets on reload. No names, scores, cookies, analytics or browser storage are collected. Correct answers ship with the browser code: this is formative practice, not a secure examination system.

## Publish to GitHub Pages

Create an **empty public** repository named `evaluation-quiz` under `alexbernardino` (no initial README, license or .gitignore), then run:

```bash
cd /Users/alex/Documents/Codex/2026-07-28/evaluation-quiz
git init
git add .
git commit -m "Create evaluation and generalization quiz"
git branch -M main
git remote add origin https://github.com/alexbernardino/evaluation-quiz.git
git push -u origin main
```

In the repository, select **Settings → Pages → GitHub Actions**. The included workflow tests, builds and deploys on pushes to main. If the first run failed before Pages was enabled, rerun it from Actions.

Expected public address after deployment: https://alexbernardino.github.io/evaluation-quiz/.

Nothing is pushed automatically by creating this project.

## Student QR code

Scan this code to open https://alexbernardino.github.io/evaluation-quiz/ once deployed. The PNG is also included in the published site for slides and handouts.

![Evaluation Quiz QR code](evaluation-quiz-qr.png)
