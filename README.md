# C02-
C02🌿 is a browser extension that tracks and visualizes your real-time digital carbon emissions, helping you understand and reduce your online environmental impact.

---

## Features
- **Real-time CO₂ estimation**: See your estimated carbon emissions (in grams) update every second.
- **Minimalist, green-themed UI**: Inspired by modern eco design and your Figma prototype.
- **Persistent tracking**: Emissions total is saved between sessions using localStorage.
- **Reset button**: Start your emissions timer from zero at any time.
- **Modular, well-commented code**: Easy to expand or customize.

---

## Installation
1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/katpun24/C02-.git
   ```
2. **Open Chrome** and go to `chrome://extensions`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the `C02-extension` folder inside this repo.
5. The C02🌿 icon will appear in your Chrome toolbar. Click it to open the popup.
6. 
---

## How It Works
- The extension uses a simple model: it estimates your device's power usage while browsing and multiplies it by a global average carbon intensity to estimate grams of CO₂ per second.
- The total is updated every second and saved in your browser.
- Click **Reset** to start over at any time.

---

## Customization
- **UI**: Easily update colors, fonts, or layout in `popup.css` and `popup.html`.
- **Icon**: Replace `icon128.png` with your own SVG/PNG for a custom look.
- **Estimation model**: Adjust the constants in `popup.js` for your device or region.

---

## Credits
- Designed and developed by [katpun24](https://github.com/katpun24)
- Figma prototype: [View here](https://www.figma.com/design/As80fu7lN9LNrbCvaVc0NM/C02%F0%9F%8C%BF?node-id=0-1&t=NebSizWTeDhF2kFI-1)

---

## License
[MIT](../LICENSE) 
