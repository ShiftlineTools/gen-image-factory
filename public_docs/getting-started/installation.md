# Installation Guide

This guide will help you install Gen Image Factory on your system.

**Gen Image Factory** is developed by an individual developer under the **Shiftline Tools** brand.

## Windows

### Microsoft Store

Gen Image Factory is available on the Microsoft Store. This provides the easiest installation method with automatic updates.

[**Get it from Microsoft Store**](https://apps.microsoft.com/detail/9P761655KPBW) (Requires MS Account)

### Direct Download (GitHub Releases)

If you prefer to install manually or use the portable version:

1. Download the NSIS installer (`.exe`) from [GitHub Releases](https://github.com/ShiftlineTools/gen-image-factory/releases)
2. Run the installer
3. Follow the installation wizard

### Power Users (winget)

You can also install via command line:

```bash
winget install "Gen Image Factory"
```

**Note**: Unsigned installers will trigger Windows SmartScreen warnings. This is expected for GitHub Releases artifacts.

## macOS

1. **Download the DMG**:
   Go to the [GitHub Releases page](https://github.com/ShiftlineTools/gen-image-factory/releases/latest) and look for the release marked with the green "Latest" badge. Download the file matching this exact naming pattern:
   `GenImageFactory-[Version]-arm64.dmg` (e.g., `GenImageFactory-1.3.4-arm64.dmg`)

2. **Open and Drag**:
   Double-click the downloaded `.dmg` file to mount it, then drag **Gen Image Factory** directly into your Applications folder.

3. **Handle Overwrites**:
   If prompted that the app already exists, click **Replace** to update to the latest version.

4. **Eject the DMG**:
   Close or eject the disk image from your desktop so you are working strictly out of the system folder.

5. **Open Terminal**:
   Hit `Cmd + Space`, type **Terminal**, and hit Enter.

6. **Run the Fix**:
   Paste the following quarantine removal command, hit Enter, and type your Mac password when prompted:
   ```bash
   sudo xattr -cr /Applications/GenImageFactory.app
   ```

7. **Create Shortcut**:
   Go into the Applications folder, right-click (or drag while holding `Option + Command`) to create a fresh desktop shortcut or add it to your Dock.

   **NB! Crucial for Updates**:
   If you are updating from an older version, delete your old desktop shortcut or Dock icon first. Then, go into the Applications folder, right-click (or drag while holding `Option + Command`) the fresh app to recreate your desktop shortcut or re-add it to your Dock so it doesn't point to cached paths.

8. **Final Launch**:
   Double-click the app to launch it instantly with zero errors or security warnings.

## Linux

### AppImage

1. Download the AppImage file from [GitHub Releases](https://github.com/ShiftlineTools/gen-image-factory/releases)
2. Make it executable:
   ```bash
   chmod +x Gen-Image-Factory-*.AppImage
   ```
3. Run the application:
   ```bash
   ./Gen-Image-Factory-*.AppImage
   ```

### DEB (Ubuntu/Debian)

1. Download the DEB package from [GitHub Releases](https://github.com/ShiftlineTools/gen-image-factory/releases)
2. Install using:
   ```bash
   sudo dpkg -i gen-image-factory_*.deb
   ```
3. Fix any dependency issues:
   ```bash
   sudo apt-get install -f
   ```

## Verifying Installation

After installation, you can verify the installation by:

1. Launching the application
2. Checking that the main dashboard appears
3. Verifying you can access the Settings panel

## Next Steps

Once installed, see the [User Guide](/docs/user-guide/settings) for information on:
- Configuring your settings
- Starting your first job
- Managing job history
- Exporting results

## Legal Information

For information about how Gen Image Factory handles your data and the terms of use, please review:
- [Privacy Policy](/docs/legal/privacy-policy) - Learn how we handle your data and protect your privacy
- [Terms of Service](/docs/legal/terms-of-service) - Review the terms and conditions for using Gen Image Factory

