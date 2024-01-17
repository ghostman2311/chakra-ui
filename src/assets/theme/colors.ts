import type { ThemeColors } from "./types";
import { generateColorPalette } from "./utils/generateColorPalette";

const BASE = { H: 220, S: 12 };
// const BASE = { H: 220, S: 16 };
const WORKING = { H: 47, S: 42 };
const GOLD = { H: 40, S: 70 };
const WARNING = { H: 28, S: 42 };
const OK = { H: 113, S: 42 };
const ERROR = { H: 0, S: 42 };
const INVOKE_YELLOW = { H: 66, S: 92 };
const INVOKE_BLUE = { H: 200, S: 76 };
const INVOKE_GREEN = { H: 110, S: 69 };
const INVOKE_RED = { H: 16, S: 92 };


export const Colors: ThemeColors = {
    base: generateColorPalette(BASE.H, BASE.S),
    baseAlpha: generateColorPalette(BASE.H, BASE.S, true),
    working: generateColorPalette(WORKING.H, WORKING.S),
    workingAlpha: generateColorPalette(WORKING.H, WORKING.S, true),
    gold: generateColorPalette(GOLD.H, GOLD.S),
    goldAlpha: generateColorPalette(GOLD.H, GOLD.S, true),
    warning: generateColorPalette(WARNING.H, WARNING.S),
    warningAlpha: generateColorPalette(WARNING.H, WARNING.S, true),
    ok: generateColorPalette(OK.H, OK.S),
    okAlpha: generateColorPalette(OK.H, OK.S, true),
    error: generateColorPalette(ERROR.H, ERROR.S),
    errorAlpha: generateColorPalette(ERROR.H, ERROR.S, true),
    yellow: generateColorPalette(INVOKE_YELLOW.H, INVOKE_YELLOW.S),
    yellowAlpha: generateColorPalette(
      INVOKE_YELLOW.H,
      INVOKE_YELLOW.S,
      true
    ),
    blue: generateColorPalette(INVOKE_BLUE.H, INVOKE_BLUE.S),
    blueAlpha: generateColorPalette(INVOKE_BLUE.H, INVOKE_BLUE.S, true),
    green: generateColorPalette(INVOKE_GREEN.H, INVOKE_GREEN.S),
    greenAlpha: generateColorPalette(INVOKE_GREEN.H, INVOKE_GREEN.S, true),
    red: generateColorPalette(INVOKE_RED.H, INVOKE_RED.S),
    redAlpha: generateColorPalette(INVOKE_RED.H, INVOKE_RED.S, true),
  };