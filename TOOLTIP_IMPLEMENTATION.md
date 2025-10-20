# Spell Tooltip Implementation

## Overview

This project implements an interactive tooltip system for displaying spell information when hovering over spell names in text descriptions.

## Architecture

### Files

1. **`src/utils/spellTooltip.ts`** - Main tooltip class that handles:
   - Event delegation for `.spell-link` elements
   - Tooltip positioning with viewport boundary detection
   - Show/hide animations with configurable delays
   - Hover state management for tooltip and links

2. **`src/utils/linkifySpells.ts`** - Utility function to convert spell names in text to interactive links

3. **`src/styles/theme.css`** - Global tooltip styles:
   - `#spell-tooltip` - Main tooltip container
   - `.spell-link` - Interactive spell link styling
   - Responsive styles for mobile devices

4. **`src/layouts/Layout.astro`** - Global layout includes the tooltip element

## How It Works

### 1. Initialization

The tooltip is initialized in the page's script:

```javascript
import { SpellTooltip } from '../../utils/spellTooltip';
import { spells } from '../../data/spells';

const tooltip = document.getElementById('spell-tooltip');
const spellTooltip = new SpellTooltip({
  offsetX: 16,
  offsetY: 16,
  fadeInDelay: 300,
  fadeOutDelay: 150
});

spellTooltip.init(tooltip, spells);
```

### 2. Text Linkification

Spell names in text are automatically converted to interactive links:

```javascript
function linkifyText(text) {
  let linked = text;
  SPELLS_FOR_LINKIFY.forEach(spell => {
    const name = spell.name;
    const re = new RegExp(escapeRegExp(name), 'g');
    linked = linked.replace(
      re,
      `<a href="/spells" class="spell-link" data-spell-id="${spell.id}">${spell.name}</a>`
    );
  });
  return linked;
}
```

### 3. Event Handling

The `SpellTooltip` class uses event delegation:
- `mouseover` - Shows tooltip when hovering over `.spell-link`
- `mousemove` - Updates tooltip position as mouse moves
- `mouseout` - Hides tooltip when leaving link (with delay)
- Tooltip itself can be hovered without hiding

### 4. Positioning

Tooltip automatically adjusts position to stay within viewport:
- Default: offset from cursor by `offsetX` and `offsetY`
- If overflow right edge: shift left
- If overflow bottom edge: shift up
- Minimum distance from viewport edges: 8px

## Configuration

### TooltipConfig Options

```typescript
interface TooltipConfig {
  offsetX?: number;      // Horizontal offset from cursor (default: 16)
  offsetY?: number;      // Vertical offset from cursor (default: 16)
  fadeInDelay?: number;  // Delay before showing tooltip in ms (default: 300)
  fadeOutDelay?: number; // Delay before hiding tooltip in ms (default: 150)
}
```

## Usage in Pages

To use tooltips in a page:

1. Import required modules:
```javascript
import { spells } from '../../data/spells';
import { SpellTooltip } from '../../utils/spellTooltip';
```

2. Initialize tooltip:
```javascript
const tooltip = document.getElementById('spell-tooltip');
const spellTooltip = new SpellTooltip();
spellTooltip.init(tooltip, spells);
```

3. Create spell links in HTML:
```html
<a href="/spells" class="spell-link" data-spell-id="fireball">Огненный шар</a>
```

Or use linkifyText() function to automatically convert spell names.

## Responsive Behavior

On mobile (max-width: 768px):
- Tooltip is fixed to bottom of viewport
- Full width (minus 32px padding)
- Prevents off-screen positioning issues

## Styling

Tooltip uses CSS variables from theme:
- `--card-bg` - Background color
- `--text` - Text color
- `--primary` - Accent color
- `--card-border` - Border color

Dark/light theme support is automatic through CSS variables.

## Browser Compatibility

- Uses modern JavaScript (ES6+)
- Event delegation for performance
- No external dependencies
- Works in all modern browsers

## Future Enhancements

Possible improvements:
- Touch device support
- Keyboard navigation
- Animation transitions
- Cached tooltip content
- Multiple tooltip instances
