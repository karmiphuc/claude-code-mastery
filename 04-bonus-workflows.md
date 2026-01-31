# 🎁 Bonus: 10 Productivity Wins for Non-Engineers

> **Goal:** Immediate productivity wins without writing code.

This module combines **Starter Flight Plans** (for getting started) and **Power Workflows** (for complex tasks).

---

## ✈️ Part 1: Starter Flight Plans
*Focus: File manipulation, research, and content creation.*

### 🧹 Exercise 1: The "Digital Janitor" (File Organization)
**Goal:** Clean up a messy folder automatically.
**Setup:** Create some dummy files or use a cluttered download folder.
**Prompt:**
```
Look at all the files in this directory. Create a new folder structure based on file type (e.g., 'Images', 'Docs', 'Data') and move the files into their respective folders. Propose the structure first.
```

### 📊 Exercise 2: The "Excel Killer" (Data Analysis)
**Goal:** Analyze a spreadsheet without opening Excel.
**Setup:** Have a `sales_data.csv` or similar CSV file.
**Prompt:**
```
Read sales_data.csv. Calculate the total revenue per month and identify which product category had the highest growth. Output the results as a new Markdown file called report.md with a summary table.
```

### 📚 Exercise 3: The "Local Wikipedia" (Knowledge Management)
**Goal:** Turn a folder of documents into a searchable answer engine.
**Setup:** Put 3-4 PDFs/text docs in a `docs/` folder.
**Prompt:**
```
Read every file in the docs/ folder. Create a new file called comparison.md that lists the top 3 risks mentioned across all documents. Then, verify if any document contradicts another.
```

### 👻 Exercise 4: The "Ghostwriter" (Content Repurposing)
**Goal:** Convert content format (e.g., Text -> HTML/Blog).
**Setup:** A `transcript.txt` file.
**Prompt:**
```
Read transcript.txt. Write a detailed blog post titled 'How to Use AI'. Use H2 headers for main points. Crucial: Create a file called blog_post.html with clean HTML formatting.
```

### 🕷️ Exercise 5: The "Scraper" (Market Research)
**Goal:** Fetch data from the web.
**Setup:** Internet connection.
**Prompt:**
```
I want to track the latest headlines from [https://news.ycombinator.com]. Write and run a script to fetch the titles of the top 5 articles from their homepage and save them into headlines_YYYY-MM-DD.txt.
```

---

## 🚀 Part 2: Power Workflows
*Focus: System management, scaffolding, and synthesis.*

### 🏗️ Exercise 6: The "Project Architect" (Instant Setup)
**Goal:** Create a standardized, complex folder structure in seconds.
**Prompt:**
```
I'm starting a new 'Q3 Marketing Campaign'. Create a project structure for me:
1. Root folder 'q3-marketing'
2. Subfolders: /briefs, /assets/images, /financials
3. A 'README.md' with a project kickoff template
4. A placeholder 'budget.csv' in /financials
```
**Why:** Perfect for event planners and project managers.

### 📝 Exercise 7: The "Meeting Secretary" (Synthesis)
**Goal:** Synthesize multiple meeting notes into one action plan.
**Setup:** `notes_monday.txt` and `notes_tuesday.txt`.
**Prompt:**
```
Read 'notes_monday.txt' and 'notes_tuesday.txt'.
1. Extract all 'Action Items' into a single list
2. Group by person assigned
3. Flag conflicting deadlines
4. Save to 'weekly_action_plan.md'
```

### 🧹 Exercise 8: The "Text Polisher" (Data Cleaning)
**Goal:** Clean and reformat messy text data.
**Setup:** `raw_data.txt` with messy list.
**Prompt:**
```
Read 'raw_data.txt'. Convert this into a clean Markdown table in 'clean_report.md'.
- Columns: Name, Department, Email
- Fix capitalization (Title Case)
- Sort by Department
```

### 🔍 Exercise 9: The "Tech Translator" (Understanding)
**Goal:** Explain technical files in plain English.
**Setup:** Any config file (e.g., `package.json`, `.config`).
**Prompt:**
```
Read the file 'package.json'. Explain in simple non-technical language:
1. What does this project do?
2. What key tools does it use?
3. Save explanation to 'executive_summary.txt'
```

### 🕵️ Exercise 10: The "System Scout" (Safe Exploration)
**Goal:** Analyze disk usage without risk.
**Prompt:**
```
Look at my current folder.
1. List top 5 largest files with size in MB
2. Identify duplicates
3. Write a report to 'cleanup_plan.md' (DO NOT delete anything)
```

---

## 🎯 Pro Tip: The "Safety First" Approach

For non-engineers, always add this phrase to your prompt when doing file operations:

> **"...Plan this out first, and ask for my confirmation before creating, moving, or deleting any files."**
