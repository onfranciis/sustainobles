import { IGridPlugin } from "@/types";

export const GridStyle: IGridPlugin = {
  ".gallery-grid-item-a": {
    gridColumnStart: "1",
    gridColumnEnd: "5",
    opacity: 0,
  },

  ".gallery-grid-item-b": {
    gridColumnStart: "5",
    gridColumnEnd: "9",
  },

  ".gallery-grid-item-c": {
    gridColumnStart: "9",
    gridColumnEnd: "13",
  },

  ".gallery-grid-item-d": {
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".gallery-grid-item-e": {
    gridColumnStart: "4",
    gridColumnEnd: "7",
  },

  ".gallery-grid-item-f": {
    gridColumnStart: "7",
    gridColumnEnd: "10",
  },

  ".gallery-grid-item-g": {
    gridColumnStart: "10",
    gridColumnEnd: "13",
  },

  /* -------------------------------------------------------------------------- */
  /*                                      -                                     */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                   MEDIUM                                   */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                      -                                     */
  /* -------------------------------------------------------------------------- */

  ".gallery-grid-item-medium-a": {
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".gallery-grid-item-medium-b": {
    gridColumnStart: "4",
    gridColumnEnd: "7",
  },

  ".gallery-grid-item-medium-c": {
    gridColumnStart: "1",
    gridColumnEnd: "3",
  },

  ".gallery-grid-item-medium-d": {
    gridColumnStart: "3",
    gridColumnEnd: "5",
  },

  ".gallery-grid-item-medium-e": {
    gridColumnStart: "5",
    gridColumnEnd: "7",
  },
} as const;
