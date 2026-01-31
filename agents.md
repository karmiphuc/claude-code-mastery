# 🤖 Agents.md: Meta-Documentation for AI Assistants

> **Purpose:** This file guides AI agents (Claude, ChatGPT, Gemini, etc.) on how to understand, maintain, and expand this `Claude Code Mastery` curriculum.

---

## 📂 Repository Structure

This project is a **Terminal UI (TUI) based interactive curriculum**.

### Core Modules (The "Truth")
*   **`00-terminal-orientation.md`**: The absolute basics (TUI layout, shortcuts).
*   **`01-foundations.md`**: Installation, first wins, "just ask" philosophy.
*   **`02-core-skills.md`**: Keyboard mastery, Modes (Auto vs Plan), Context management.
*   **`03-mastery.md`**: Configuration (`CLAUDE.md`), custom commands, power features.
*   **`04-bonus-workflows.md`**: 10 Productivity Workflows for non-engineers (Starter + Power).

### Interactive Site
*   **`site/`**: A Single Page Application (SPA) that dynamically loads the core markdown files.
*   **`start_site.sh`**: Helper script to launch the local Python server.

### Metadata
*   **`progress-tracker.md`**: A checklist for users to track their journey.
*   **`samples/`**: Dummy files used in exercises (messy files, raw meeting notes).

---

## 🧠 Curriculum Philosophy

When generating new content or updating this repo, adhere to these principles:

1.  **"Just Ask Claude"**: We teach users to lean on the AI, not memorize commands.
    *   *Bad:* "Type `git status` to check changes."
    *   *Good:* "Ask Claude: 'What changed in my files?'"
2.  **Bedrock-First Context**:
    *   Authentication is pre-handled via AWS credentials.
    *   `/login` and `/logout` commands are **disabled**.
    *   Users are in a corporate environment; setup is handled by IT scripts.
3.  **No "Edit Mode"**:
    *   Claude Code has **Normal** (ask permission), **Auto-Accept** (fast), and **Plan** (read-only) modes.
    *   It does *not* have a distinct "Edit Mode".
4.  **TUI over CLI**:
    *   Focus on keyboard shortcuts (`Shift+Tab`, `Escape`) over typing bash commands.

---

## 🛠️ Maintenance Tasks for Agents

If you are an agent reading this, here is how you can help:

### 1. Expanding the Curriculum
*   **New Modules**: Create `05-topic-name.md`.
*   **Registering**: You MUST add the new file to:
    *   `README.md` (Table of Contents)
    *   `progress-tracker.md` (Checklist)
    *   `site/app.js` (`moduleOrder` array) — *Critical for the interactive site!*

### 2. Updating Exercises
*   If you create new exercises, try to add corresponding "dummy files" to the `samples/` folder so users can practice immediately.

### 3. Site Updates
*   The `site/` depends on the root markdown files. Do not duplicate content into `site/`. The JS fetches `../filename.md`.

---

## 🔗 Quick Context Injection

If you need to get up to speed quickly, read these files in order:
1.  `agents.md` (This file)
2.  `README.md` (Project overview)
3.  `02-core-skills.md` (Deep dive into tool mechanics)
