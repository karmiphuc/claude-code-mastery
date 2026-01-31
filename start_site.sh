#!/bin/bash
echo "🚀 Starting Claude Code Interactive Site..."
echo "📂 Serving from $(pwd)"
echo "🌍 Opening http://localhost:8000/site/index.html"

# Check if python3 is available
if command -v python3 &>/dev/null; then
    # Open browser after 1 second (background)
    (sleep 1 && open "http://localhost:8000/site/index.html") &
    
    # Start server
    python3 -m http.server 8000
else
    echo "❌ Python3 not found. Please run a local server manually."
    echo "Example: npx serve ."
fi
