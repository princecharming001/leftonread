#!/bin/bash
# Osmo one-line installer. Downloads the latest build, installs it to
# /Applications. The app is signed with a Developer ID and notarized by Apple,
# so it opens with no security warning; this just saves you the unzip/drag.
# Run with:
#
#   curl -fsSL https://leftonread.in/install.sh | bash
#
set -e

URL="https://github.com/princecharming001/leftonread/releases/download/v0.3.0/Osmo-0.3.0.zip"
DEST="/Applications/Osmo.app"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "→ Downloading Osmo…"
curl -fsSL "$URL" -o "$TMP/Osmo.zip"

echo "→ Installing to /Applications…"
ditto -x -k "$TMP/Osmo.zip" "$TMP/unpacked"
APP="$(/usr/bin/find "$TMP/unpacked" -maxdepth 2 -name '*.app' -print -quit)"
[ -n "$APP" ] || { echo "✗ Could not find Osmo.app in the download."; exit 1; }
rm -rf "$DEST"
mv "$APP" "$DEST"

echo "→ Clearing the download quarantine…"
xattr -dr com.apple.quarantine "$DEST" 2>/dev/null || true

echo "✓ Installed. Opening Osmo…"
open "$DEST"
