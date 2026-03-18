# Implementation Plan - Side-by-Side Layout

The goal is to place the "Name" (Hero component) and "About" (VisionaryAbout component) sections side by side on the landing page, instead of stacked vertically.

## User Review Required

> [!IMPORTANT]
> This change will significantly alter the landing page layout. The Hero section (Name) and VisionaryAbout section will now share the screen width (50/50 split on desktop).
>
> **Note**: I will adjust `Hero.module.css` and `VisionaryAbout.module.css` to remove large margins and fixed heights that would prevent this layout.

## Proposed Changes

### Component Structure
#### [MODIFY] [App.jsx](file:///c:/Users/RITURAJ/OneDrive/Desktop/Portfolio/src/App.jsx)
- Wrap `<Hero />` and `<VisionaryAbout />` components in a new container `div` with class `landing-wrapper`.
- Apply `id="home"` to this wrapper so navigation still works.

### CSS Styles
#### [MODIFY] [App.css](file:///c:/Users/RITURAJ/OneDrive/Desktop/Portfolio/src/App.css)
- Add `.landing-wrapper` class:
    - Display: Flex
    - Alignment: Center
    - Min-height: 100vh
    - Flex-wrap: wrap (for mobile responsiveness)

#### [MODIFY] [src/components/Hero.module.css](file:///c:/Users/RITURAJ/OneDrive/Desktop/Portfolio/src/components/Hero.module.css)
- Change `.hero` `min-height: 100vh` to `min-height: auto` or `height: 100%` so it fits within the wrapper.
- Adjust widths if necessary to `flex: 1`.

#### [MODIFY] [src/components/VisionaryAbout.module.css](file:///c:/Users/RITURAJ/OneDrive/Desktop/Portfolio/src/components/VisionaryAbout.module.css)
- Remove `margin: 100px auto` to allow better alignment in the split view.
- Adjust `max-width` to ensure it fits in the half-screen.

## Verification Plan

### Manual Verification
- **Layout Check**:
    1. Open the updated Portfolio in the browser (using `browser` tool if available, or just verify code structure).
    2. Confirm Name is on the Left (or Right) and About is on the other side.
    3. Confirm they take up the full screen height together (or appropriately).
- **Responsive Check**:
    1. Verify that on smaller screens (mobile), they stack vertically again (via `flex-wrap: wrap`).
