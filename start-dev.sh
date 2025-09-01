#!/bin/bash

# Start both development servers
echo "Starting 1199 Capital development servers..."

# Start main site on port 3000
echo "Starting main site on port 3000..."
cd "$(dirname "$0")" && npm run dev &
MAIN_PID=$!

# Start archive site on port 3001
echo "Starting archive site on port 3001..."
cd "$(dirname "$0")/archive" && npm run dev &
ARCHIVE_PID=$!

echo "Both servers started!"
echo "Main site: http://1199capital.com (port 3000)"
echo "Archive site: http://archive.1199capital.com (port 3001)"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait $MAIN_PID $ARCHIVE_PID 