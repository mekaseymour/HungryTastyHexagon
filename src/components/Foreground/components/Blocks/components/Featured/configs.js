import featuredLeft from "../../../../../../assets/featuredLeft.jpeg";
import featuredRight from "../../../../../../assets/featuredRight.jpeg";
import featuredMain from "../../../../../../assets/featuredMain.png";

export const FEATURE_BLOCK_IDS = {
  left: 'LEFT',
  right: 'RIGHT',
  main: 'MAIN',
}

const CONFIGS = {
  [FEATURE_BLOCK_IDS.left]: {
    img: featuredLeft,
    title: 'Designing personal portfolios',
  },
  [FEATURE_BLOCK_IDS.right]: {
    img: featuredRight,
    title: 'Crafting custom websites',
  },
  [FEATURE_BLOCK_IDS.main]: {
    img: featuredMain,
    title: 'Website assets',
  },
}

export default CONFIGS