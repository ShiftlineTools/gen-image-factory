# Common Issues and Solutions

This guide helps you resolve common issues you may encounter when using Gen Image Factory.

## Installation Issues

### Windows: "Unknown Publisher" Warning

If you see an "Unknown Publisher" warning when installing from GitHub Releases:

1. Click "More info"
2. Click "Run anyway" to proceed

This warning appears because GitHub Releases artifacts are unsigned. This is expected and safe for GitHub Releases.

### macOS: "App is damaged" or "Cannot be opened" or "Apple could not verify..."

This happens because the application isn't notarized by Apple — expected for GitHub Releases artifacts. On recent macOS versions, right-click → Open is often no longer enough by itself, and the fix depends on which file you downloaded. Full step-by-step instructions (including the correct *order* of steps, which matters here) are in the [Installation Guide's macOS section](/docs/getting-started/installation#macos) — start there if you haven't already downloaded the app.

If you've already downloaded and hit the "damaged" message, open **Terminal** and run one of these:

- Downloaded the **DMG**: `xattr -rd com.apple.quarantine /Applications/GenImageFactory.app`
- Downloaded and unzipped the **`.zip`**: `sudo chmod -R 755 /path/to/GenImageFactory.app` (drag the app into the Terminal window after typing the command to fill in the path)

Then try opening the app again. If it's still blocked, see the full instructions linked above.

### Linux: AppImage won't run

If the AppImage file won't execute:

1. Ensure the file is executable:
   ```bash
   chmod +x Gen-Image-Factory-*.AppImage
   ```

2. Check if FUSE is installed (required for AppImage):
   ```bash
   sudo apt-get install fuse
   ```

## Application Issues

### Application won't start

1. Check that you have the latest version installed
2. Try restarting your computer
3. Check system requirements:
   - Windows 10 or later
   - macOS 10.13 or later
   - Linux with recent kernel

### Settings not saving

1. Ensure you have write permissions in the application directory
2. Check that your disk has sufficient space
3. Try restarting the application

### Jobs not starting

1. Verify your API keys are configured in Settings
2. Check that input files are accessible
3. Review the logs for error messages
4. Ensure you have an active internet connection

## Performance Issues

### Slow job execution

1. Check your internet connection speed
2. Verify API service status
3. Reduce the number of images per job if processing large batches
4. Close other resource-intensive applications

### High memory usage

1. Close other applications to free up memory
2. Process jobs in smaller batches
3. Restart the application periodically

## Getting Help

If you continue to experience issues:

1. Check the application logs (available in Settings → Debug mode)
2. Review the [User Guide](/docs/user-guide/settings) for detailed feature documentation
3. Visit the project's GitHub repository for additional support

