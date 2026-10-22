with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line 220 (0-indexed 219): state.xp = Math.max(...)
# Line 221 (0-indexed 220): state.streak = Math.max(...)
# Line 222 (0-indexed 221): state.level = Math.max(...)
lines[219] = '  state.xp = cloudData.xp !== undefined ? cloudData.xp : (state.xp || 0);\r\n'
lines[220] = '  state.streak = cloudData.streak || state.streak || 1;\r\n'
lines[221] = '  state.level = cloudData.level || state.level || 1;\r\n'

# Line 134 (0-indexed 133): initApp — insert updateNavVisibility after updateProfileUI (line 135 = 0-indexed 134)
# Current line 135 is "  updateProfileUI();" — insert after it
for i, line in enumerate(lines):
    if 'function initApp()' in line:
        # find the updateProfileUI line right after
        for j in range(i+1, i+5):
            if 'updateProfileUI()' in lines[j] and 'updateNavVisibility' not in lines[j+1]:
                lines.insert(j+1, '  updateNavVisibility();\r\n')
                break
        break

# Sign-in: after closeModal('authModal') in handleSignInSubmit, add name refresh
# Find the line with "await authSignIn(email, password);"
for i, line in enumerate(lines):
    if "await authSignIn(email, password);" in line:
        # Check next lines — insert after closeModal line
        for j in range(i+1, i+4):
            if "closeModal('authModal')" in lines[j]:
                insert_block = (
                    "      if (typeof currentProfile !== 'undefined' && currentProfile) {\r\n"
                    "        state.name   = currentProfile.name   || state.name;\r\n"
                    "        state.avatar = currentProfile.avatar || state.avatar;\r\n"
                    "        state.role   = currentProfile.role   || state.role;\r\n"
                    "        state.xp     = currentProfile.xp !== undefined ? currentProfile.xp : state.xp;\r\n"
                    "        updateProfileUI();\r\n"
                    "        updateNavVisibility();\r\n"
                    "        renderDashboard();\r\n"
                    "        updateXPDisplay();\r\n"
                    "      }\r\n"
                )
                lines.insert(j+1, insert_block)
                # Replace the showFeedback line that follows
                for k in range(j+2, j+6):
                    if "showFeedback(true, 'Signed In!'" in lines[k]:
                        lines[k] = "      const _wn = (typeof currentProfile !== 'undefined' && currentProfile && currentProfile.name) ? currentProfile.name : 'Learner';\r\n      showFeedback(true, 'Welcome back, ' + _wn + '! \U0001f44b', 'Your cloud progress has synced.', 10);\r\n"
                        break
                break
        break

# Sign-up: after closeModal('authModal') in handleSignUpSubmit, apply name immediately
for i, line in enumerate(lines):
    if "await authSignUp(email, password, name, username, selectedSignUpAvatar);" in line:
        for j in range(i+1, i+4):
            if "closeModal('authModal')" in lines[j]:
                insert_block2 = (
                    "      state.name   = name;\r\n"
                    "      state.avatar = selectedSignUpAvatar;\r\n"
                    "      state.role   = 'student';\r\n"
                    "      state.xp     = 0;\r\n"
                    "      updateProfileUI();\r\n"
                    "      updateNavVisibility();\r\n"
                    "      renderDashboard();\r\n"
                    "      updateXPDisplay();\r\n"
                )
                lines.insert(j+1, insert_block2)
                for k in range(j+2, j+8):
                    if "showFeedback(true, 'Account Created!" in lines[k]:
                        lines[k] = "      showFeedback(true, 'Welcome, ' + name + '! \U0001f31f', 'Your account is ready. Start your first lesson!', 25);\r\n"
                        break
                break
        break

# tt-name and tt-count white text (lines 752-753, 0-indexed 751-752)
for i, line in enumerate(lines):
    if '<span class="tt-name">${t.name}</span>' in line and 'rgba' not in line:
        lines[i] = '        <span class="tt-name" style="color:rgba(255,255,255,0.9)">${t.name}</span>\r\n'
    if '<span class="tt-count">${doneCount}/${t.lessons.length}</span>' in line and 'rgba' not in line:
        lines[i] = '        <span class="tt-count" style="color:rgba(255,255,255,0.45)">${doneCount}/${t.lessons.length}</span>\r\n'

with open('app.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)

# Verify
content = ''.join(lines)
print('FIX1 XP direct:', 'cloudData.xp !== undefined' in content)
print('FIX2 initApp nav:', 'updateNavVisibility' in content and 'function initApp' in content)
print('FIX3 signin name:', 'currentProfile.name' in content)
print('FIX4 signup name:', "state.name   = name" in content)
print('FIX5 tt-name white:', 'rgba(255,255,255,0.9)' in content)
print('FIX6 tt-lesson white:', 'rgba(255,255,255,0.75)' in content)
print('DONE')
