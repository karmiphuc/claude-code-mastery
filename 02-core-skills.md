# Module 2: Core Skills — Day-to-Day Usage Patterns

> **Goal:** Develop muscle memory for common operations. Move from tentative to confident.

**Prerequisites:** Complete [Module 1: Foundations](./01-foundations.md)

---

## 📚 Lesson 2.1: Terminal UI Deep Dive

Now that you've used Claude Code, let's master its interface.

### The Full Interface Breakdown

```
┌──────────────────────────────────────────────────────────────────────────┐
│  Claude Code v1.x                                            username   │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ╭─ Claude ──────────────────────────────────────────────────────────╮  │
│  │                                                                    │  │
│  │  I'll help you organize those files. Let me first look at        │  │
│  │  what's in the folder...                                          │  │
│  │                                                                    │  │
│  │  📖 Reading: ./documents/                                          │  │
│  │  📖 Reading: ./images/                                             │  │
│  │                                                                    │  │
│  │  Found 23 files. Here's my plan:                                   │  │
│  │  1. Create category folders                                        │  │
│  │  2. Move files by type                                             │  │
│  │  3. Generate an index                                              │  │
│  │                                                                    │  │
│  │  Shall I proceed? [y/n]                                            │  │
│  │                                                                    │  │
│  ╰────────────────────────────────────────────────────────────────────╯  │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │ > Type your message here...                                        │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ◆ Auto Mode │ Claude 3.5 Sonnet │ ████░░░░ 45% used │ /clear for new   │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Status Bar Elements

| Element | Meaning |
|---------|---------|
| **Mode** | Auto/Plan/Edit — current operational mode |
| **Model** | Which Claude model is active |
| **Usage bar** | Token/request usage this session |
| **Hints** | Helpful reminders like `/clear for new` |

---

## 📚 Lesson 2.2: Keyboard Mastery

### Essential Shortcuts (Memorize These!)

| Shortcut | Action | Memory Trick |
|----------|--------|--------------|
| `Escape` | **Stop Claude** | "Escape from this task" |
| `Escape` × 2 | Browse message history | "Escape twice = time travel" |
| `Shift + Tab` | Cycle permission modes | "Shift your mode" |
| `Up Arrow` | Previous prompt | Like terminal history |
| `Ctrl + V` | Paste image | NOT Cmd+V on Mac! |
| `Shift + Drag` | Reference a file | "Shift = special drag" |

### The Terminal Quirks Table

| What You Want | Wrong Way | Right Way |
|--------------|-----------|-----------|
| New line in prompt | Shift+Enter (fails) | Run `/terminal-setup` first |
| Stop Claude | `Ctrl+D` (exits app!) | Use `Escape` or `Ctrl+C` |
| Paste image | Cmd+V (fails on Mac) | Use `Ctrl+V` |
| Reference file | Drag into window | `Shift+Drag` |
| Navigate history | Scroll up | `Up Arrow` or `Escape×2` |

### Practice Drill: Keyboard Confidence

Do each of these 3 times:

1. Start a prompt, then press `Escape` to cancel
2. Press `Up Arrow` to recall your last prompt
3. Press `Escape` twice to see message history
4. Press `Shift + Tab` to cycle through modes (watch status bar change)

---

## 📚 Lesson 2.3: The Three Modes Explained

### Understanding Mode Transitions

```


                    Shift+Tab
         ┌────────────────────────────┐
         │                            │
         ▼                            │
    ┌─────────┐   Shift+Tab   ┌───────────┐
    │  Auto   │ ───────────▶ │   Plan    │
    │  Mode   │              │   Mode    │
    └─────────┘              └───────────┘
         ▲                            │
         │                            │
         │         Shift+Tab          │
         │       (Normal Mode)        │
         └────────────────────────────┘
```

### Mode Comparison

**Auto Mode vs Plan Mode:**

| Capability | Normal/Auto Mode | Plan Mode |
|------------|------------------|-----------|
| **Read files** | ✅ Yes | ✅ Yes |
| **Search codebase** | ✅ Yes | ✅ Yes |
| **Browse web** | ✅ Yes | ✅ Yes |
| **Ask questions** | ✅ Yes | ✅ Yes |
| **Create/edit files** | ✅ Yes (with permission) | ❌ No (read-only) |
| **Run commands** | ✅ Yes (with permission) | ❌ No (read-only) |
| **Best for** | Execution & making changes | Planning complex tasks |

**Note:** Normal mode asks for permission before editing. Auto-Accept mode automatically approves safe actions. Use Plan Mode when you want to review a plan before any changes are made.

### When to Use Each Mode

**Use Auto Mode when:**
- You know exactly what you want
- Making simple, single-file changes
- Running routine commands
- You trust Claude's judgment

**Use Plan Mode when:**
- Starting a new complex feature
- Making architectural decisions
- Working on unfamiliar code
- You want to review before executing

---

## 📚 Lesson 2.4: Plan Mode Deep Dive

### Entering Plan Mode

Press `Shift + Tab` until status bar shows **"Plan Mode"**

Windows note: If cycling skips Plan Mode, try `Alt + M` instead.

### The Plan Mode Workflow

```
1. ENTER Plan Mode (Shift+Tab)
        │
        ▼
2. DESCRIBE what you want (complex prompt)
        │
        ▼
3. ANSWER Claude's clarifying questions
        │
        ▼
4. REVIEW the generated plan
        │
        ▼
5. REQUEST changes if needed
        │
        ▼
6. APPROVE the plan
        │
        ▼
7. SWITCH to Auto Mode (Shift+Tab)
        │
        ▼
8. EXECUTE the approved plan
```

### Plan Mode Example Prompt

```
I want to build a personal expense tracker.

Requirements:
- Command line interface
- Add expenses with amount, category, and date
- View expenses by category or date range
- Store data in a local JSON file
- Generate monthly summary reports

Ask me questions to clarify requirements, tech preferences,
and any constraints before creating a plan.
```

Claude will ask questions like:
- "What programming language do you prefer?"
- "Should amounts support decimals or cents?"
- "Do you need multi-currency support?"

After your answers, Claude generates a detailed plan covering:
- File structure
- Data models
- Feature implementation order
- Edge cases to handle

**Only then do you approve and execute.**

### Plan Mode Practice Exercise

1. Switch to Plan Mode
2. Describe a simple project (todo app, note organizer, recipe book)
3. Answer Claude's questions
4. Review the plan
5. Ask Claude to modify one aspect
6. See how the plan updates

---

## 📚 Lesson 2.5: Message Queuing (Batch Tasks)

### What Is Message Queuing?

Type multiple prompts without waiting — Claude processes them intelligently.

### How It Works

```
> Fix the typo in README.md
> Add a table of contents to README.md  
> Also check if there are any broken links
> Generate a changelog entry for today
```

Claude will:
1. Process each task in sequence
2. Pause if it needs your input
3. Continue with queued tasks when ready

### Queuing Strategy

**Good for queuing:**
- Independent, non-conflicting tasks
- Known, routine operations
- Tasks where order doesn't matter much

**Bad for queuing:**
- Tasks that depend on each other's results
- Complex decisions needing your review
- Anything requiring mid-task input

### Practice: Queue Three Tasks

```
> Create a file called notes.md with a nice header
> Add today's date as the first entry
> Add a random inspirational quote as content
```

Watch Claude work through all three automatically.

---

## 📚 Lesson 2.6: Context Management

### How Claude's Memory Works

```
Session Start
     │
     ▼
┌─────────────────┐
│ Read CLAUDE.md  │ ← Loaded first (if exists)
└─────────────────┘
     │
     ▼
┌─────────────────┐
│ Scan project    │ ← Gets folder structure
└─────────────────┘
     │
     ▼
┌─────────────────┐
│ Load on-demand  │ ← Reads files as needed
└─────────────────┘
     │
     ▼
┌─────────────────┐
│ Keep history    │ ← Conversation accumulates
└─────────────────┘
```

### The `/clear` Discipline

**When to use `/clear`:**
- Starting a completely new task
- Claude seems confused or stuck
- You see "context getting full" warnings
- Every 30-45 minutes of intensive work

**After `/clear`, if continuing related work:**
```
We were working on [project name].
I've completed [what's done].
Next I need to [what's next].
```

This 3-line summary restores essential context efficiently.

### Context Pro Tips

1. **Keep sessions focused** — One major task per session
2. **Break long work into sessions** — Natural stopping points = `/clear`
3. **Summarize before continuing** — Give Claude the "story so far"
4. **Don't over-share** — Only mention what's relevant

---

## 📚 Lesson 2.7: Referencing Files and Content

### Method 1: File Paths in Prompts

```
Fix the bug in src/utils/helpers.js where the date parsing fails
```

Claude will read that file automatically.

### Method 2: Shift+Drag

Hold `Shift` and drag a file from Finder/Explorer into the terminal.
Claude will reference it directly.

### Method 3: Paste Images (Ctrl+V)

Copy an image to clipboard, then press `Ctrl+V` (not Cmd+V on Mac).

Use cases:
- "Fix my UI to match this screenshot"
- "What's wrong with this error message?"
- "Recreate this design"

### Method 4: @ References

```
Look at @src/app.js and @src/config.js and tell me how they interact
```

The `@` prefix tells Claude to specifically load those files.

---

## 🎯 Practical Exercises

### Exercise A: Mode Switching Practice

1. Start in Auto Mode
2. Switch to Plan Mode (Shift+Tab)
3. Ask Claude to plan a simple script
4. Review the plan
5. Approve it
6. Switch back to Auto Mode
7. Tell Claude to execute the plan

### Exercise B: Context Reset Flow

1. Have a conversation about any topic
2. Use `/clear`
3. See that Claude doesn't remember the previous talk
4. Practice the 3-line summary technique

### Exercise C: Queue Mastery

Queue these as one block:
```
> Create a folder called 'project-template'
> Inside it, create a README.md with a title
> Create a folder called 'src' inside project-template
> Create an empty file called 'main.js' in src
> List the final structure in the terminal
```

Watch Claude execute all steps.

### Exercise D: File Reference Methods

1. Create a test file with some content
2. Reference it by path in a prompt
3. Try Shift+Drag with a different file
4. Copy a screenshot and paste with Ctrl+V

---

## ✅ Module 2 Checklist

Before moving to Module 3, confirm:

- [ ] Know all essential keyboard shortcuts
- [ ] Can switch between Auto and Plan modes
- [ ] Used Plan Mode for at least one complex task
- [ ] Queued multiple tasks successfully
- [ ] Used `/clear` and the 3-line summary
- [ ] Referenced files using multiple methods
- [ ] Comfortable with permission prompts

---

## 🎓 Skills Self-Assessment

Rate yourself 1-5 on each:

| Skill | 1=Struggle | 5=Confident |
|-------|------------|-------------|
| Stopping Claude with Escape | |
| Switching modes | |
| Using Plan Mode for complex tasks | |
| Queuing multiple tasks | |
| Managing context with /clear | |
| Referencing files | |

**Target:** All 4+ before moving to Module 3

---

> **Next Up:** [Module 3: Mastery & Customization](./03-mastery.md)
