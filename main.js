const WIDTH = 720;
const HEIGHT = 360;

const ASSET_SPINE = "spine/01_hone.json";
const ASSET_BG = "images/pic_bg_flare.jpg";
const ANIMATION = "animation";

// init
let app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
let canvas = document.getElementById("canvas");
canvas.appendChild(app.view);
app.renderer.backgroundColor = 0x000000;
app.stage.interactive = true;
let bg, spine;

PIXI.loader
  .add("spine_data", ASSET_SPINE)
  .add("bg_data", ASSET_BG)
  .load(onAssetsLoaded)

/**
 * Asset load Complete
 * @param { object } loader object
 * @param { object} res asset data
 */
function onAssetsLoaded(loader, res) {

  bg = new PIXI.Sprite(res.bg_data.texture);
  app.stage.addChild(bg);
  bg.x = 0;
  bg.y = 0;

  spine = new PIXI.spine.Spine(res.spine_data.spineData);
  spine.scale.set(0.5);
  spine.x = 100;
  spine.y = 30;

  spine.state.setAnimation(0, ANIMATION, false);
  app.stage.addChild(spine);

}

/**
 * start spine animation
 */
function startAnimation() {
  spine.state.setAnimation(0, ANIMATION, false);
};
