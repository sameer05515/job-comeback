✅ Here's a practical **Git Commands Cheatsheet** – organized by category for fast reference:

---

### 🔹 **Configuration**

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list                      # Show config
```

---

### 🔹 **Repository**

```bash
git init                              # Create a new Git repo
git clone <repo-url>                  # Clone existing repo
```

---

### 🔹 **Basic Workflow**

```bash
git status                            # Check status
git add <file>                        # Stage a file
git add .                             # Stage all changes
git commit -m "your message"          # Commit staged changes
git log                               # View commit history
```

---

### 🔹 **Branching**

```bash
git branch                            # List branches
git branch <name>                     # Create branch
git checkout <name>                   # Switch branch
git checkout -b <name>                # Create & switch
git merge <branch>                    # Merge into current branch
git branch -d <name>                  # Delete branch
```

---

### 🔹 **Remote**

```bash
git remote -v                         # View remotes
git remote add origin <url>           # Add remote repo
git push -u origin main               # Push first time
git push                              # Push changes
git pull                              # Pull latest
```

---

### 🔹 **Undo**

```bash
git checkout -- <file>                # Discard unstaged file changes
git reset HEAD <file>                 # Unstage file
git revert <commit>                   # Undo a commit (safe)
git reset --hard <commit>             # Reset to commit (destructive)
```

---

### 🔹 **Stash (Temp Save)**

```bash
git stash                             # Save current dirty state
git stash list                        # View stash
git stash pop                         # Reapply and remove from stash
git stash apply                       # Reapply but keep in stash
```

---

### 🔹 **Tagging**

```bash
git tag                               # List tags
git tag v1.0                          # Create tag
git push origin v1.0                  # Push tag
```

---

### 🔹 **Logs & History**

```bash
git log --oneline --graph --all       # Compact history view
git diff                              # View file differences
```

---

### 🔹 **Shortcuts**

```bash
git shortlog                          # Summary by author
git cherry -v                         # Show unmerged commits
```

---

Let me know if you want a printable `.md` version or advanced Git scenarios (e.g., rebase, cherry-pick, bisect, submodules).


---
---

# advanced Git scenarios (e.g., rebase, cherry-pick, bisect, submodules)

✅ Here's a concise guide for **Advanced Git Scenarios** with **commands & usage**:

---

## 🔁 1. **Git Rebase**

Used to **replay commits** on top of another base — for a **clean linear history**.

### 🔹 Command:

```bash
git checkout feature
git rebase main
```

### 🔹 Common Options:

```bash
git rebase -i HEAD~3        # Interactive (edit, squash, reorder)
git rebase --abort          # Cancel rebase
git rebase --continue       # Continue after conflict resolution
```

---

## 🍒 2. **Git Cherry-pick**

Apply a **specific commit** from another branch into current branch.

### 🔹 Command:

```bash
git cherry-pick <commit-hash>
```

> Tip: Useful for hotfixes or small feature copying.

---

## 🔍 3. **Git Bisect**

Find the **commit that introduced a bug** via binary search.

### 🔹 Commands:

```bash
git bisect start
git bisect bad                      # Current version is bad
git bisect good <commit-hash>      # Known good commit
# Git checks out mid-commit → test and mark it
git bisect good / git bisect bad   # Keep marking till it finds
git bisect reset                   # End bisect session
```

---

## 📦 4. **Git Submodules**

Used to include **another Git repo inside your repo**.

### 🔹 Commands:

```bash
git submodule add <repo-url> path/to/submodule
git submodule init
git submodule update
```

### 🔹 Clone with submodules:

```bash
git clone --recurse-submodules <repo-url>
```

### 🔹 Pull submodule changes:

```bash
git submodule update --remote
```

---

## 🧹 5. **Git Clean**

Remove **untracked files/directories**.

### 🔹 Command:

```bash
git clean -fd                     # -f: force, -d: directories
git clean -n                      # Dry run
```

---

## 📎 6. **Git Worktree**

Work with **multiple branches simultaneously** in different directories.

### 🔹 Command:

```bash
git worktree add ../branch-dir branch-name
```

---

## 📌 7. **Git Stash Advanced**

```bash
git stash push -m "msg" -k        # Keep index staged
git stash branch <new-branch>     # Create branch from stash
git stash show -p stash@{0}       # View patch in stash
```

---

Let me know if you want real project use-cases or `.md` export!
