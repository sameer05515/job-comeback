# What is difference between `git fetch` and `git pull`

**Difference between `git fetch` and `git pull`:**

| Command         | What it Does                                                                                                                   | Updates Local Branch? | Merges Changes? | Safe to Run Without Changing Code?     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------- | --------------- | -------------------------------------- |
| **`git fetch`** | Downloads new commits, branches, and tags from remote into your local repo's *remote-tracking branches* (e.g., `origin/main`). | ❌ No                  | ❌ No            | ✅ Yes                                  |
| **`git pull`**  | Does a `git fetch` **+** automatically merges (or rebases) those changes into your current branch.                             | ✅ Yes                 | ✅ Yes           | ⚠️ Might change your working directory |

**In short:**

* `git fetch` = *"Go get the latest changes, but don’t touch my files yet."*
* `git pull` = *"Get the latest changes and also apply them to my current branch now."*

**Example:**

```bash
git fetch       # Remote changes are downloaded, but you stay as-is
git merge origin/main  # Manually merge fetched changes into local main

# OR directly:
git pull        # Does both fetch + merge automatically
```

If you like, I can make you a **5-line ASCII flow diagram** showing exactly where each command stops in the workflow. That’s really useful in interviews.
