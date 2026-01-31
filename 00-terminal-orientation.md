# Module 0: Getting Oriented in Claude Code

> **Before you dive in, let's make sure you know where you are and what you're looking at.**

This module is for people who:
- Have never used Claude Code before
- Feel intimidated by anything that isn't a normal app window
- Want to understand the screen before they start typing

**What you DON'T need to learn here:**
- Traditional terminal commands (cd, ls, mkdir, etc.)
- Programming
- Anything technical

**What you WILL learn:**
- How to start Claude Code
- What the screen looks like and where to look
- The few keys that matter
- How to talk to Claude and read its responses

---

## 🌟 The Golden Rule: Just Ask Claude

Here's the most important thing to know:

> **If you're confused about anything, just type your confusion to Claude.**

Claude Code is *agentic* — meaning it can figure things out and help you. You don't need to memorize commands or remember exact syntax. Just ask in plain language:

- **"How do I clear this conversation?"** → Claude tells you to use `/clear`
- **"What folder am I in?"** → Claude checks and tells you
- **"I want to organize my files but I don't know where to start"** → Claude guides you
- **"I'm lost, help me understand what's happening"** → Claude explains

### This Changes Everything

Traditional tools require you to learn them first. Claude Code *teaches you while you use it*.

| Traditional Tools | Claude Code |
|-------------------|-------------|
| Read the manual first | Ask as you go |
| Memorize commands | Describe what you want |
| Get error messages | Get explanations |
| Search for solutions | Ask Claude directly |

### When Stuck, Type This

Anytime you're confused:
```
I'm stuck. Help me understand what to do next.
```

Or:
```
Something went wrong. Can you explain what happened and fix it?
```

Claude will navigate for you, explain what's happening, and often fix the problem automatically.

**This is your safety net for the entire curriculum.** If any lesson confuses you, just ask Claude.

---

## 🚀 Starting Claude Code

### Step 1: Open Your Terminal

**macOS:**
- Press `Cmd + Space`, type "Terminal", press Enter

**Windows:**
- Press `Windows key`, type "Terminal" or "PowerShell", press Enter

**Linux:**
- Press `Ctrl + Alt + T`

You'll see a mostly empty window with a blinking cursor. That's normal!

### Step 2: Type `claude` and Press Enter

Just type this word:
```
claude
```

Then press **Enter**.

That's it. Claude Code starts.

> 💡 **This is the ONLY terminal command you need to remember.** Everything else happens inside Claude Code using its own commands.

---

## �️ What You're Looking At

Once Claude Code starts, here's what you'll see:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  ╭─────────────────────────────────────────────────────────────────╮    │
│  │                                                                  │    │
│  │                    CLAUDE'S RESPONSE AREA                        │    │
│  │                                                                  │    │
│  │  This is where Claude talks to you.                              │    │
│  │  When Claude works, you'll see what it's doing.                  │    │
│  │  When Claude asks a question, you'll see it here.                │    │
│  │                                                                  │    │
│  │  (You can scroll up with your mouse or arrow keys                │    │
│  │   to see older messages)                                         │    │
│  │                                                                  │    │
│  ╰─────────────────────────────────────────────────────────────────╯    │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │ >  YOUR INPUT AREA                                               │    │
│  │    ▲                                                             │    │
│  │    └── Type here. This is where you talk to Claude.              │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ◆ Auto │ Claude 3.5 Sonnet │ ████░░░░ 45% │ Status info here           │
│    ▲                                                                     │
│    └── STATUS BAR: Shows which mode you're in and other info            │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### The Three Areas That Matter

| Area | Where | What It Does |
|------|-------|--------------|
| **Response Area** | Top/middle (most of the screen) | Claude's messages, work progress, questions |
| **Input Area** | Bottom, starts with `>` | Where you type to Claude |
| **Status Bar** | Very bottom line | Mode indicator (Auto/Plan), model name, usage |

### Understanding the Status Bar Modes
- **"Auto Mode"** = Claude automatically approves safe actions (faster)
- **"Plan Mode"** = Read-only mode for planning complex tasks
- **No Label** = Normal mode (safest, asks for permission)

---

## ⌨️ The Keys That Matter

You only need to know these controls:

### 1. Enter — Send Your Message
Type something, press **Enter**, your message goes to Claude.

### 2. Escape — Stop Claude / Cancel Input
If Claude is doing something and you want it to stop: press **Escape**.

You can also press Escape to cancel your current input.

### 3. Up Arrow — See Previous Messages
Press **Up Arrow** to bring back what you typed before. Useful if you want to repeat or edit something.

### 4. Escape × 2 — Browse History
Press **Escape twice** quickly to see a list of all your previous conversations. Use arrow keys to pick one.

### 5. Shift + Tab — Cycle Permission Modes
Cycles between **Auto-Accept Mode**, **Plan Mode**, and **Normal Mode**. (You'll learn what these mean in Module 2.)

### 6. Ctrl + C and Ctrl + D
- **Ctrl + C** — Cancels current action (same as Escape)
- **Ctrl + D** — Exits Claude Code completely

### Quick Reference Card

Print this or keep it nearby:

```
┌────────────────────────────────────────────┐
│  CLAUDE CODE KEYBOARD CHEAT SHEET          │
├────────────────────────────────────────────┤
│                                            │
│  Enter        →  Send your message         │
│                                            │
│  Escape       →  Stop / Cancel             │
│                                            │
│  Up Arrow     →  Previous message          │
│                                            │
│  Esc + Esc    →  Browse all history        │
│                                            │
│  Shift + Tab  →  Switch modes              │
│                                            │
│  Ctrl + C     →  Cancel current action     │
│                                            │
│  Ctrl + D     →  Exit Claude Code          │
│                                            │
│  Ctrl + V     →  Paste an image            │
│                                            │
└────────────────────────────────────────────┘
```

---

## 💬 Slash Commands — Claude Code's Menu System

Instead of clicking menus, you type **slash commands**. They start with `/`.

### The Commands You'll Use Most

| Command | What It Does | When to Use It |
|---------|--------------|----------------|
| `/help` | Shows all available commands | When you're lost |
| `/clear` | Starts a fresh conversation | Before starting something new |
| `/status` | Shows current session info | When you're curious |
| `/doctor` | Diagnose connection/setup issues | If something seems broken |
| `/memory` | Edit your memory/preferences file | To add permanent preferences |
| `/cost` | Shows usage and costs for session | To track your spending |

### How to Use Them

Just type the command and press Enter:

```
/help
```

That's it. Claude shows you the help menu.

```
/clear
```

Your conversation resets. Fresh start.

### The `/clear` Habit

**This is important:** Use `/clear` every time you want to start something new.

Why?
- Old conversations can confuse Claude
- Fresh starts = better results
- It's like closing a browser tab and opening a new one

Make it reflexive: **New task → Type `/clear` → Then ask your question**

---

## � Reading Claude's Output

When Claude works, it tells you what it's doing. Here's what different messages mean:

### Reading Files
```
📖 Reading project files...
📖 Analyzing folder structure...
```
Claude is looking at your files to understand them.

### Thinking
```
🤔 Planning approach...
🤔 Considering options...
```
Claude is figuring out what to do.

### Taking Action
```
✏️  Creating file: notes.md
✏️  Editing: config.js
   + Added line 15: [code here]
   - Removed line 23: [old code]
```
Claude is making changes. The `+` shows additions, `-` shows removals.

### Running Commands
```
🔧 Running: npm test
   ✓ All tests passed
```
Claude ran something on your computer.

### Asking Questions
```
❓ Before I proceed, I need to know:
   Which file format do you prefer?
```
Claude needs your input. Type your answer and press Enter.

---

## ⚠️ Permission Prompts — Claude Asks Before Acting

This is important: **Claude always asks before doing things.**

When Claude wants to create, edit, or run something, you'll see:

```
╭──────────────────────────────────────────────────────────────╮
│                                                               │
│  Claude wants to create: notes.md                             │
│                                                               │
│  Allow? [y/n/a/v]                                             │
│                                                               │
╰──────────────────────────────────────────────────────────────╯
```

### Your Response Options

| Key | What It Means | When to Use |
|-----|---------------|-------------|
| `y` | **Yes**, do it this once | Default safe choice |
| `n` | **No**, don't do it | When you disagree |
| `a` | **Always** allow this type of action | When you trust Claude for similar actions |
| `v` | **View** more details first | When you want to see exactly what will change |

### Workflow

1. Claude asks permission
2. You press one key (`y`, `n`, `a`, or `v`)
3. Claude continues (or stops if you said no)

### Why This Exists

Claude Code can modify files on your computer. The permission system keeps you in control. You decide what happens.

---

## 🎯 Your First Conversation

Let's practice. After starting Claude Code, try this:

### Practice 1: Say Hello

Type:
```
Hello! Can you tell me what folder we're in?
```

Press **Enter**.

Watch Claude respond in the Response Area.

### Practice 2: Use /clear

Type:
```
/clear
```

Press **Enter**.

Notice the conversation resets.

### Practice 3: Ask Claude to Do Something Simple

Type:
```
Create a file called "test.txt" with the message "Hello World" inside it.
```

Press **Enter**.

Claude will ask permission. Press `y` to allow.

### Practice 4: Stop Claude

Start typing a long request, then press **Escape** before finishing.

Notice how Claude stops what it's doing.

---

## ✅ Module 0 Checklist

Before moving on, make sure you can:

- [ ] Start Claude Code by typing `claude` in Terminal
- [ ] Identify the Response Area, Input Area, and Status Bar
- [ ] Send a message with Enter
- [ ] Stop Claude with Escape
- [ ] Use `/clear` to reset conversation
- [ ] Use `/help` to see commands
- [ ] Navigate previous messages with Up Arrow
- [ ] Respond to permission prompts (y/n/a/v)

**If you checked all boxes, you're ready for Module 1!**

---

## � If You Get Stuck

### Claude Code won't start
- Make sure you typed `claude` correctly (all lowercase)
- Make sure Claude Code is installed (see Module 1 for installation)

### The screen looks weird
- Try making your Terminal window bigger
- Try typing `/clear` to reset

### Claude isn't responding
- Press **Escape** to cancel, then try again
- Type `/clear` and start fresh

### You accidentally exited
- Just type `claude` again to restart
- Your work in files is still there

---

## �️ How to Talk to Claude

You don't need special language. Just talk normally:

**Good:**
```
Can you help me organize my files?
```

```
Create a summary of what's in this folder.
```

```
I want to make a simple checklist for my morning routine.
```

**Also good (more specific = better results):**
```
Create a file called "morning-routine.md" with a checklist 
that includes: wake up, stretch, breakfast, check email.
```

The more specific you are, the better Claude understands what you want.

---

> **Next Up:** [Module 1: Installation & First Wins](./01-foundations.md)
