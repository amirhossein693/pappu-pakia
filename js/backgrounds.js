(function() {

  window.mit = window.mit || {};

  var W, H;

  // Background Moving Speed in pixels
  var cloud_bg_move_speed = 1;
  var cloud_bg_vx = 0;

  var drawClouds = function(ctx) {
    // Clouds
    var clouds = new Image();
    clouds.src = 'img/clouds.png';
    clouds.width = W;
    clouds.height = W;
    ctx.drawImage(clouds, cloud_bg_vx, 0, W, H);
    ctx.drawImage(clouds, W + cloud_bg_vx, 0, W, H);

    if (-cloud_bg_vx >= W) {
      cloud_bg_vx = 0;
    }

    cloud_bg_vx -= cloud_bg_move_speed;
  };


  var backtree_bg_move_speed = 2;
  var backtree_bg_vx = 0;

  var drawBackTrees = function(ctx) {
    // Back Trees
    var back_trees = new Image();
    back_trees.src = 'img/back_trees.png';
    back_trees.width = W;
    back_trees.height = W;
    ctx.drawImage(back_trees, backtree_bg_vx, 0, W, H);
    ctx.drawImage(back_trees, W + backtree_bg_vx, 0, W, H);

    if (-backtree_bg_vx >= W) {
      backtree_bg_vx = 0;
    }

    backtree_bg_vx -= backtree_bg_move_speed;
  };


  var fronttree_bg_move_speed = 3;
  var fronttree_bg_vx = 0;

  var drawFrontTrees = function(ctx) {
    // Front Trees
    var front_trees = new Image();
    front_trees.src = 'img/front_trees.png';
    front_trees.width = W;
    front_trees.height = W;
    ctx.drawImage(front_trees, fronttree_bg_vx, 0, W, H);
    ctx.drawImage(front_trees, W + fronttree_bg_vx, 0, W, H);

    if (-fronttree_bg_vx >= W) {
      fronttree_bg_vx = 0;
    }

    fronttree_bg_vx -= fronttree_bg_move_speed;
  };


  var ground_bg_move_speed = 4;
  var ground_bg_vx = 0;

  var drawGround = function(ctx) {
    // Ground
    var ground = new Image();
    ground.src = 'img/ground.png';
    ground.width = W;
    ground.height = H;
    ctx.drawImage(ground, ground_bg_vx, 0, W, H);
    ctx.drawImage(ground, W + ground_bg_vx, 0, W, H);

    if (-ground_bg_vx >= W) {
      ground_bg_vx = 0;
    }

    ground_bg_vx -= ground_bg_move_speed;
  };

  // Draw Awesome Backgrounds
  // Backgrounds have been made for 1000x500 dimensions
  var draw = function(ctx) {
    // Get Canvas width/height from config store
    W = mit.config.canvas_width;
    H = mit.config.canvas_height;

    // Draw Linear Gradient for real/pure BG (sky/water)
    var gradient = ctx.createLinearGradient(0, 0, 0, H);  
    gradient.addColorStop(0, '#06c4f4');
    gradient.addColorStop(1, '#7bd4f6');
    // Push to Stack
    ctx.save();
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    drawClouds(ctx);
    
    drawBackTrees(ctx);

    drawFrontTrees(ctx);

    drawGround(ctx);
  };


  window.mit.backgrounds = {
    draw: draw
  };

}());