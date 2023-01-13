(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 10 },
    max: { assetKey: "max", points: 20 },
    steve: { assetKey: "steve", points: 30 },
    grace: { assetKey: "grace", points: 40 },
    kennedi: { assetKey: "kennedi", points: 50 },
    diamond: { assetKey: "diamond", points: 50 },
  };

  window.opspark.collectable.type = type;

  /**
   * init: Initialize all collectables.
   *
   * GOAL: Add as many collectables as necessary to make your level challenging.
   *
   * Use the createCollectable() Function to create collectables for the level.
   * See the type Object, above, for the types of collectables and their point values.
   *
   * createCollectable() takes these arguments:
   *
   *      createCollectable(type, x, y, gravity, bounce);
   *
   *      type: The type of the collectable, use the type Object above.
   *      x: The x coordineate for the collectable.
   *      y: The y coordineate for the collectable.
   *      gravity: OPTIONAL The gravitational pull on the collectable.
   *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
   */
  function init(game) {
    let createCollectable = collectable.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    createCollectable(type.max, 750, 600, 6, 0.7);
    createCollectable(type.grace, 750, 590, 6, 0.7);
    createCollectable(type.max, 790, 600, 6, 0.7);
    createCollectable(type.kennedi, 790, 590, 6, 0.7);
    createCollectable(type.db, 830, 600, 6, 0.7);
    createCollectable(type.max, 830, 590, 6, 0.7);
    createCollectable(type.steve, 200, 170, 6, 0.7);
    createCollectable(type.max, 100, 170, 6, 0.7);
    createCollectable(type.max, 750, 600, 6, 0.7);
    createCollectable(type.grace, 750, 590, 6, 0.7);
    createCollectable(type.max, 790, 600, 6, 0.7);
    createCollectable(type.max, 790, 590, 6, 0.7);
    createCollectable(type.kennedi, 830, 600, 6, 0.7);
    createCollectable(type.db, 830, 590, 6, 0.7);
    createCollectable(type.steve, 500, 420, 6, 0.7);
    createCollectable(type.kennedi, 500, 270, 6, 0.7);
    createCollectable(type.kennedi, 670, 100, 6, 0.7);
    createCollectable(type.diamond, 450, 100, 6, 0.7);
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  collectable.init = init;
})(window);
