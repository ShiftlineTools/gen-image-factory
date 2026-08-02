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

Gen Image Factory is not currently notarized by Apple (notarization requires a paid Apple Developer Program membership), so macOS Gatekeeper blocks it on first launch. On recent macOS versions, the old "right-click → Open" shortcut is often no longer enough by itself.

### Recommended: Allow apps from unidentified developers (do this *before* downloading)

**The order here matters.** macOS tags any file you download with a quarantine flag before you even open it — if you download the app first and change this setting afterward, it will still be blocked and you'll need to start over. Do these steps first, in order:

1. Open **Terminal** (Spotlight search → type "Terminal")
2. Run:
   ```bash
   sudo spctl --master-disable
   ```
3. Enter your Mac password when prompted (the cursor won't move as you type — that's normal for `sudo`). You should see a message about globally disabling the assessment system needing to be confirmed in System Settings — that's expected.
4. Open **System Settings → Privacy & Security**, scroll to **"Allow applications from"**, and switch it from "App Store & Known Developers" to **"Anywhere"** (you'll be asked for your password again to confirm). If "Anywhere" isn't available yet, go back and make sure step 2 actually ran successfully.

Only now, download and install:

5. Download the **DMG file** from [GitHub Releases](https://github.com/ShiftlineTools/gen-image-factory/releases)
6. Open the DMG file and drag the application to the Applications folder
7. Open the application — it should launch normally (you'll still get one "are you sure?" confirmation dialog, which is expected)

**Optional cleanup**: once the app is running, you can switch "Allow applications from" back to "App Store & Known Developers" in System Settings if you'd rather not leave the setting open for future downloads too.

### If you already downloaded the app first

If you downloaded before doing the above and now get "Apple could not verify..." or "is damaged and can't be opened," do steps 1-4 above (in that order), then fix the already-downloaded copy instead of re-downloading:

- **If you installed the DMG** (dragged the app into Applications): open **Terminal** and run
  ```bash
  xattr -rd com.apple.quarantine /Applications/GenImageFactory.app
  ```
- **If you downloaded and unzipped the `.zip` build**: unzipping can also strip the app's executable permission, so run this instead (drag the app's icon into the Terminal window after typing the command to fill in the exact path, then press Enter):
  ```bash
  sudo chmod -R 755 /path/to/GenImageFactory.app
  ```

Then try opening the app again.

**Note**: Unsigned macOS applications always show a security warning on first use — this is expected for GitHub Releases artifacts and reflects the lack of a paid Apple notarization certificate, not a problem with the app itself. See our [Privacy Policy](/docs/legal/privacy-policy) for what the app does and doesn't do with your data.

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

