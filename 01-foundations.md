# Module 1: Foundations — Installation & First Wins

> **Goal:** Get Claude Code running and experience immediate value. Build confidence before diving deep.

**Prerequisites:** Complete [Module 0: Terminal Orientation](./00-terminal-orientation.md)

---

## 📚 Lesson 1.1: Understanding What Claude Code Is

### The One-Sentence Explanation

**Claude Code = "Claude that can take action."**

While regular Claude (the chatbot) can only talk about things, Claude Code can actually DO things on your computer.

### The Key Difference

| Feature | Regular Claude | Claude Code |
|---------|---------------|-------------|
| **Context** | Upload files manually | Sees your folder automatically |
| **Task Horizon** | One turn at a time | Multi-step plans |
| **Help Style** | Talks about things | Does things |
| **Works With** | Text in chat window | Files, folders, terminal commands |
| **Best For** | Brainstorming, questions | Making things happen |

### Real-World Analogy

- **Regular Claude** = Calling a knowledgeable friend for advice
- **Claude Code** = Having that friend come over and help you do the work

### What Makes It "Agentic"?

Claude Code is an **agent**, meaning it can:

1. **Read** your project files and understand structure
2. **Search** through files for patterns
3. **Plan** complex implementations before acting
4. **Execute** multi-file changes
5. **Run** shell commands, tests, and build processes
6. **Learn** your project rules via configuration
7. **Self-correct** when it hits roadblocks

Think of it as a senior developer in your terminal who:
- Never gets tired
- Never forgets your coding standards
- Can hold ~150,000 words of context in memory
- Works while you answer Slack messages

---

## 📚 Lesson 1.2: Getting Started

### Your Setup Is Already Done

Your company has already configured Claude Code via AWS Bedrock. A setup script handled:
- Installation
- Authentication  
- Connection to your company's Bedrock account

**Usage is covered by your company** — no personal subscription required.

---

### Starting Claude Code

1. **Open your terminal**

2. **Type `claude` and press Enter:**
   ```bash
   claude
   ```

3. **You're in!** You should see the Claude Code interface.

> 💡 If Claude Code doesn't start or shows errors, contact your IT team — the setup script may need to be re-run.

---

### First-Time Setup (If Prompted)

On first run, Claude Code may ask you to:
- Choose a theme (Dark mode recommended)
- Trust the current directory

Just follow the prompts — authentication is already handled via your company's Bedrock setup.

> **Note for Bedrock users:** The `/login` and `/logout` commands are disabled since authentication is managed through AWS credentials. If you see authentication errors, contact your IT team.

---

### Optional: Keyboard Optimization

Run this command immediately after first launch:

```
/terminal-setup
```

This fixes common keyboard issues (like Shift+Enter for new lines).

---

## 📚 Lesson 1.3: Your First Conversation

### The Golden Rule: Start in a Sandbox

**⚠️ CRITICAL:** Only run Claude Code in folders you're willing to let it modify.

Create a dedicated playground:
```bash
mkdir ~/claude-playground
cd ~/claude-playground
```

### Your First Prompt

Type this exactly:

```
Hello! I'm new to Claude Code. Can you:
1. Tell me what folder we're in
2. List what files are here (if any)
3. Create a file called "hello.txt" with a friendly message
```

**What to observe:**
- Claude will ask permission before creating the file
- You'll see the action it's about to take
- Press `y` to approve

### Check the Results

```bash
ls
cat hello.txt
```

**🎉 Congratulations!** You just made Claude Code do something real.

---

## 📚 Lesson 1.4: Your First Wins (Non-Coding Tasks)

These exercises prove Claude Code isn't just for programmers.

### Exercise 1: Discovery Mode

Add some files to your `claude-playground` folder (documents, images, anything), then:

```
I'm new to Claude Code and want to use it for things other than coding.

Look into this folder, analyze its contents, and suggest 
5 ways you can help me with what you find.
```

Claude will:
- Scan your files
- Understand their content
- Suggest practical tasks

### Exercise 2: Web Research to Local File

```
Research the top 5 productivity tips for remote workers.
Summarize each in 2-3 sentences.
Save the summary to a file called "productivity-tips.md"
```

Claude will:
- Search the web
- Synthesize information
- Create a local file with the results

### Exercise 3: File Organization

Put some messy files in a subfolder, then:

```
Look at the files in the "messy-stuff" folder.
Rename them based on their content.
Create logical subfolders and organize them.
Give me a summary of what you did.
```

Claude will:
- Analyze file contents
- Create meaningful names
- Organize into categories
- Report its actions

---

## 📚 Lesson 1.5: Essential Slash Commands

| Command | What It Does | Use Frequency |
|---------|--------------|---------------|
| `/clear` | Reset conversation | **Very often!** |
| `/terminal-setup` | Fix keyboard shortcuts | Once after install |
| `/help` | Show available commands | When lost |
| `/status` | Current session info | Occasionally |
| `/doctor` | Diagnose issues | When things break |
| `/memory` | Edit your preferences | To save preferences |
| `/cost` | See usage and costs | Track spending |

### The `/clear` Habit

**Use `/clear` every time you start something new.**

Why?
- Old context wastes tokens
- Prevents confusion between tasks
- Keeps Claude focused

Make it a reflex: New task → `/clear` → New prompt

---

## 📚 Lesson 1.6: Understanding Permission Prompts

Claude Code asks before it acts. Here's what you'll see:

### File Creation/Edit Permission
```
Claude wants to create: hello.txt

Contents preview:
  Hello! This is a test file...

Allow? [y/n/a/v]
```

### Command Execution Permission
```
Claude wants to run: npm install express

This will install packages to your project.

Allow? [y/n/a/v]
```

### Response Options

| Key | Meaning | When to Use |
|-----|---------|-------------|
| `y` | Yes, allow once | Default safe choice |
| `n` | No, don't do this | When you disagree |
| `a` | Always allow this type | For trusted, repetitive actions |
| `v` | View details/diff | When you want to see exactly what changes |

### Pro Tip: The "Always Allow" Sweet Spot

After you trust Claude in a session, you might want fewer interruptions:
- Type `a` for file edits you trust
- Type `a` for safe commands (like `ls`, `cat`)
- Keep `y` for anything destructive

---

## 🎯 Practical Exercises

### Exercise A: Personal Assistant Mode
```
Create a daily journal template with:
- Date header
- Sections for: Morning thoughts, Tasks, Gratitude, Evening reflection
- Save it as "journal-template.md"
- Then create today's journal entry from the template
```

### Exercise B: Research Assistant Mode
```
I'm planning a trip to Japan.
Research and create a file called "japan-trip-notes.md" with:
- Best time to visit
- Top 5 cities to visit with 2-sentence descriptions
- Estimated daily budget ranges
- 3 cultural tips for tourists
```

### Exercise C: File Management Mode

Create some test files first:
```bash
touch file1.txt file2.txt file3.txt photo1.jpg photo2.jpg doc.pdf
```

Then:
```
Organize all files in this folder:
- Create subfolders by file type
- Move each file to its appropriate folder
- Create a README.md listing what's in each folder
```

---

## ✅ Module 1 Checklist

Before moving to Module 2, confirm:

- [ ] Claude Code is installed and running
- [ ] Ran `/terminal-setup` for keyboard fixes
- [ ] Completed at least 1 non-coding exercise
- [ ] Understand permission prompts (y/n/a/v)
- [ ] Used `/clear` to reset a conversation
- [ ] Know that `Escape` or `Ctrl+C` stops Claude (`Ctrl+D` exits)
- [ ] Working only in your sandbox folder

---

## 🚨 Common Issues & Fixes

### "Command not found: claude"
**Fix:** The setup script may not have completed. Contact your IT team to re-run the setup.

### Authentication or connection errors
**Fix:** Your Bedrock connection may need refresh. Contact your IT team.

### Claude seems stuck
**Fix:** Press `Escape` to stop, then try again with simpler prompt

### Screen looks broken or garbled
**Fix:** Try making your terminal window bigger, or type `/clear` to reset

---

> **Next Up:** [Module 2: Core Skills](./02-core-skills.md)
