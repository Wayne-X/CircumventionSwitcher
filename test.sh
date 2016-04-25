echo "test"
folderName="$(ls ~/.mozilla/firefox | grep -m 1 '.default')"
cat " ~/.mozilla/firefox/$folderName/prefs.js"

# profiles.ini
