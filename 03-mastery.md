# Module 3: Mastery — Customization & Power Workflows

> **Goal:** Transform from user to power user. Automate your workflow, customize your experience.

**Prerequisites:** Complete [Module 2: Core Skills](./02-core-skills.md)

---

## 📚 Lesson 3.1: CLAUDE.md — Your Project's AI Brain

### What Is CLAUDE.md?

A markdown file at your project root that automatically loads when Claude starts. It's like onboarding documentation for Claude.

### Why It Matters

Without CLAUDE.md:
- Claude asks the same questions every session
- Makes assumptions about your preferences
- Uses patterns that don't match your style

With CLAUDE.md:
- Claude knows your stack instantly
- Follows your conventions
- Works like a trained team member

### The Three-Layer Structure

```markdown
# CLAUDE.md

## Layer 1: THE WHAT (Facts)
- Tech stack
- Project structure
- Key dependencies

## Layer 2: THE WHY (Context)
- Purpose of each component
- Architectural decisions
- Design rationale

## Layer 3: THE HOW (Rules)
- Coding standards
- Workflow requirements
- Do's and Don'ts
```

### Complete CLAUDE.md Template

```markdown
# CLAUDE.md — [Project Name]

## Project Overview
[1-2 sentence description of what this project does]

## Tech Stack
- Language: [e.g., TypeScript, Python, Go]
- Framework: [e.g., React, FastAPI, Gin]
- Database: [e.g., PostgreSQL, MongoDB]
- Key libraries: [list important ones]

## Project Structure
```
project/
├── src/           — Source code
│   ├── components/  — UI components
│   ├── utils/       — Helper functions
│   └── services/    — API integrations
├── tests/         — Test files
├── docs/          — Documentation
└── scripts/       — Build/deploy scripts
```

## Commands
- Build: `npm run build`
- Test: `npm test`
- Run dev: `npm run dev`
- Lint: `npm run lint`

## Coding Standards
- Use [style guide reference]
- Always include TypeScript types
- Maximum function length: 50 lines
- Prefer composition over inheritance

## Patterns We Use
- [Pattern 1]: When and how
- [Pattern 2]: When and how

## Patterns We DON'T Use (Never suggest these)
- [Anti-pattern 1]: Why we avoid it
- [Anti-pattern 2]: Why we avoid it

## Workflow Rules
- ALWAYS create a git branch before making changes
- Run tests before every commit
- Keep commits atomic and focused
- Never commit directly to main

## File Naming Conventions
- Components: PascalCase (UserProfile.tsx)
- Utilities: camelCase (formatDate.ts)
- Constants: UPPER_SNAKE_CASE

## Common Gotchas
- [Known issue or quirk to be aware of]
- [Environment-specific behavior]
```

### Auto-Generating CLAUDE.md

Let Claude create it:

```
Analyze this codebase and create a CLAUDE.md file that covers:
1. Tech stack and dependencies
2. Project structure with purpose of each folder
3. Build/test/run commands
4. Coding conventions you observe in the existing code
5. Suggested workflow rules

Keep it concise. Use progressive disclosure — put detailed
docs in /docs folder if needed.
```

Review and refine what Claude generates.

---

## 📚 Lesson 3.2: The Memory System

### Adding Memories with #

Quick way to store preferences — just type a `#` at the start of your message:

```
#always use async/await instead of .then()
#prefer named exports over default exports
#use 'const' by default, 'let' only when necessary
```

Claude automatically saves to the most relevant CLAUDE.md file.
    
> **Note:** This feature acts as a shortcut. If it doesn't work in your version, use the `/memory` command to edit your CLAUDE.md files directly.

### Memory File Hierarchy

```
~/.claude/                   ← Global (all projects)
├── CLAUDE.md                ← Your personal preferences

~/projects/my-app/           ← Project-level
├── CLAUDE.md                ← Team-shared project rules
├── CLAUDE.local.md          ← Personal project overrides (git-ignored)
├── src/
│   ├── components/
│   │   └── CLAUDE.md        ← Directory-specific rules
│   └── utils/
│       └── CLAUDE.md        ← Directory-specific rules
```

More specific files take precedence.

### Memory Types

| Type | Location | Scope |
|------|----------|-------|
| **User** | `~/.claude/CLAUDE.md` | All your projects |
| **Project** | `./CLAUDE.md` | Current project (shared with team) |
| **Local** | `./CLAUDE.local.md` | Personal project overrides (git-ignored) |
| **Nested** | `./src/component/CLAUDE.md` | Specific directories |

### Memory Best Practices

**Good memories:**
```
# Use 4-space indentation in this project
# All API responses should be wrapped in Result<T> type
# Never use 'any' type in TypeScript
```

**Avoid:**
```
# Remember to fix the login bug  ← Too specific, not a pattern
# Be a good coder  ← Too vague
```

---

## 📚 Lesson 3.3: Custom Slash Commands

### Creating Your First Command

1. Create the folder structure:
   ```bash
   mkdir -p .claude/commands
   ```

2. Create a command file:
   ```bash
   touch .claude/commands/review.md
   ```

3. Write the command template:
   ```markdown
   # .claude/commands/review.md
   
   Review the following code for:
   - Bugs and logic errors
   - Performance issues
   - Security vulnerabilities
   - Code style violations
   
   Be concise. Focus only on issues, not compliments.
   
   Code to review:
   $ARGUMENTS
   ```

4. Use it:
   ```
   /review src/utils/auth.js
   ```

### Command Template Variables

| Variable | Meaning |
|----------|---------|
| `$ARGUMENTS` | Everything after the command name |

### Useful Command Ideas

#### `/test` — Generate Tests
```markdown
# .claude/commands/test.md

Create comprehensive tests for: $ARGUMENTS

Requirements:
- Use the testing framework already in the project
- Cover happy path and edge cases
- Include error scenarios
- Mock external dependencies
- Aim for high coverage
```

#### `/docs` — Generate Documentation
```markdown
# .claude/commands/docs.md

Generate documentation for: $ARGUMENTS

Include:
- Purpose and use cases
- Parameters/props with types
- Return values
- Usage examples
- Edge cases and gotchas
```

#### `/refactor` — Smart Refactoring
```markdown
# .claude/commands/refactor.md

Refactor the following with these goals:
- Improve readability
- Reduce complexity
- Follow project conventions
- Maintain exact same behavior

Code to refactor: $ARGUMENTS

Show me the before/after diff and explain changes.
```

#### `/fix` — Bug Fix Mode
```markdown
# .claude/commands/fix.md

Debug and fix: $ARGUMENTS

Steps:
1. Identify the root cause
2. Explain why it's happening
3. Propose a fix
4. Implement the fix
5. Suggest a test to prevent regression
```

### Nested Commands

Organize commands in subfolders:

```
.claude/commands/
├── review.md        → /review
├── test.md          → /test
├── git/
│   ├── pr.md        → /git/pr
│   └── commit.md    → /git/commit
└── docs/
    ├── api.md       → /docs/api
    └── readme.md    → /docs/readme
```

---

## 📚 Lesson 3.4: Hooks — Automatic Quality Gates

### What Are Hooks?

Shell commands that run automatically at key moments:
- Before Claude uses a tool
- After Claude completes an action
- When Claude finishes a task

### Setting Up Hooks

Create `.claude/settings.json` (project-level) or `~/.claude/settings.json` (user-level):

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "prettier --write \"$CLAUDE_FILE_PATHS\""
          }
        ]
      }
    ]
  }
}
```

### Hook Events

| Event | Fires When | Use For |
|-------|------------|---------|
| `PreToolUse` | Before Claude acts | Validation, backups |
| `PostToolUse` | After Claude acts | Formatting, type-checking |
| `Notification` | Claude sends notice | Custom alerts |
| `Stop` | Claude finishes | Cleanup, summary |

### Hook Matchers (Patterns)

| Matcher | Matches |
|---------|---------|
| `"Edit"` | Exact match |
| `"Edit\|Write"` | Either one |
| `"Notebook.*"` | Regex pattern |

### Useful Hook Examples

#### Auto-Format After Edits
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "prettier --write \"$CLAUDE_FILE_PATHS\""
          }
        ]
      }
    ]
  }
}
```

#### Type-Check After TypeScript Changes
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "if [[ \"$CLAUDE_FILE_PATHS\" =~ \\.(ts|tsx)$ ]]; then npx tsc --noEmit; fi"
          }
        ]
      }
    ]
  }
}
```

#### Lint After Any File Change
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command", 
            "command": "npm run lint -- --fix \"$CLAUDE_FILE_PATHS\""
          }
        ]
      }
    ]
  }
}
```

### Interactive Hook Setup

There is no interactive command for hooks yet. You must edit the settings file directly:

1. Type `/config` or open `.claude/settings.json` manually
2. Add your hook configuration JSON
3. Save the file

Hooks will be active immediately.

---

## 📚 Lesson 3.5: GitHub Integration

### Setting Up PR Reviews

```
/install-github-app
```

Follow the prompts to connect Claude to your repositories.

### Customizing Review Behavior

Claude creates `claude-code-review.yml`. Customize it:

```yaml
# claude-code-review.yml

direct_prompt: |
  Review this pull request for:
  - Bugs and logic errors
  - Security vulnerabilities
  - Performance issues
  
  ONLY comment on actual problems.
  Be concise. No praise, no style nitpicks.
```

### What Claude Reviews

| Default Focus | Why It Matters |
|---------------|----------------|
| Logic errors | Catches bugs before humans |
| Security issues | Spots vulnerabilities |
| Performance problems | Flags inefficient code |
| (Ignore by default) | Style, formatting, naming |

### Working with PR Feedback

After Claude reviews:
```
Pull the comments from PR #123 and address them
```

Claude will:
1. Read the PR comments
2. Make the suggested fixes
3. Push updates to the branch

---

## 📚 Lesson 3.6: The Permission Bypass

### The Problem

Claude asks permission for EVERYTHING:
- "Can I read this file?"
- "Can I write this file?"
- "Can I run npm install?"

This is safe but interruptive.

### The Solution (For Trusted Environments)

```bash
claude --dangerously-skip-permissions
```

### Risk Assessment

| Environment | Recommendation |
|-------------|----------------|
| Personal sandbox | ✅ Safe to skip |
| Personal real project | ⚠️ Use with caution |
| Work/production code | ❌ Keep permissions on |
| Shared computer | ❌ Keep permissions on |

### Middle Ground: Session-Level Permissions

Instead of full bypass, use `a` (always allow) during session:
- Press `a` when prompted for trusted actions
- Still get prompted for new action types
- Resets each session

---

## 📚 Lesson 3.7: Power User Tips

### 1. Talk Like a Senior Engineer

❌ Vague and polite:
```
Could you maybe take a look at the user authentication 
and perhaps improve it a bit if you have time?
```

✅ Clear and direct:
```
AuthService.validateToken() throws on expired tokens 
instead of returning false. Fix it to:
1. Return { valid: false, reason: 'expired' }
2. Only throw on malformed tokens
3. Add test for expired token case
```

### 2. Commit Early, Commit Often

Before every Claude task:
```bash
git add -A && git commit -m "WIP: before Claude changes"
```

Rollback if needed:
```bash
git checkout HEAD~1 -- path/to/file  # Restore specific file
git reset --hard HEAD~1               # Full rollback
```

### 3. Scope Your Requests

❌ Unbounded:
```
Improve the codebase
```

✅ Bounded:
```
Refactor only UserService.ts. 
Don't touch other files.
Maintain exact same public API.
```

### 4. Review Everything

Claude is a teammate, not a replacement for code review.

Watch for:
- Unexpected dependencies added
- Patterns that don't match your architecture
- Working but non-idiomatic code

### 5. Say "No" and Iterate

```
No, don't use a class here. Use a functional approach instead.
```

```
I don't like this solution because [reason]. 
Try again with [constraint].
```

Claude adapts. Push back frequently.

### 6. Use Multiple Sessions

For long projects, break into focused sessions:

| Session | Focus | Duration |
|---------|-------|----------|
| 1 | Planning & architecture | 30 min |
| 2 | Core feature implementation | 45 min |
| 3 | Tests & edge cases | 30 min |
| 4 | Documentation & cleanup | 20 min |

`/clear` between major phases.

---

## 🎯 Mastery Exercises

### Exercise A: Create Your CLAUDE.md

1. Pick a real project you have
2. Use the template from Lesson 3.1
3. Fill in all sections
4. Test it by asking Claude about your project

### Exercise B: Build 3 Custom Commands

Create these commands:
1. `/explain` — Explain any code file in plain English
2. `/todo` — List all TODO comments in a file
3. `/optimize` — Suggest performance improvements

Test each command on real files.

### Exercise C: Set Up a Hook

1. Create `.claude/settings.json`
2. Add an auto-format hook
3. Make a file edit through Claude
4. Verify formatting ran automatically

### Exercise D: The Full Workflow

Complete a mini-project using everything:
1. Create CLAUDE.md
2. Use Plan Mode for initial design
3. Execute with Custom Commands
4. Let Hooks auto-format
5. Commit at each milestone

---

## ✅ Module 3 Checklist

Before considering yourself a power user:

- [ ] Have a CLAUDE.md in your main project
- [ ] Added at least 3 memories using #
- [ ] Created 3+ custom slash commands
- [ ] Configured at least one hook
- [ ] Used GitHub integration (if applicable)
- [ ] Developed your personal "safety workflow"
- [ ] Can scope requests precisely
- [ ] Know when to push back on Claude

---

## 🎓 Final Assessment: Power User Readiness

| Competency | Self-Rating (1-5) |
|------------|-------------------|
| CLAUDE.md configuration | |
| Memory system usage | |
| Custom command creation | |
| Hook configuration | |
| Git safety workflow | |
| Scoping and directing Claude | |
| Context and session management | |

**Power User threshold:** Average 4+ across all competencies

---

## 🎉 Congratulations!

You've completed the Claude Code & Terminal UI Mastery curriculum.

### Where to Go Next

1. **Join the community** — Reddit r/ClaudeAI, Discord servers
2. **Explore MCP servers** — Model Context Protocol extensions
3. **Share your workflows** — Blog about your custom setups
4. **Contribute examples** — Add to community command libraries

### Keep Learning

- [Anthropic's Official Docs](https://code.claude.com/docs/en)
- [Claude Code GitHub Discussions](https://github.com/anthropics/claude-code/discussions)
- [Community Custom Commands](https://github.com/search?q=claude+commands)

---

> **Remember:** Claude Code is a powerful tool, but YOU are the engineer. Stay in control, review everything, and keep learning.
