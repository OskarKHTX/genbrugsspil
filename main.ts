let mySprite: Sprite = null
let Game = 0
forever(function () {
    if (Game == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 f f 3 . . . . . . 
            . . . . . . 3 3 3 . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . 3 3 3 3 . . . 3 3 3 3 . . . 
            . . . . . 3 . . . 3 . . . . . . 
            . . . . . 3 . . . 3 . . . . . . 
            . . . . . 3 3 3 3 . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . 3 . . 3 . . . . . . 
            . . . . . 3 3 . . . 3 . . . . . 
            . . . . 3 . . . . . . 3 . . . . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, sprites.skillmap.islandTile4)
        scene.cameraFollowSprite(mySprite)
        controller.moveSprite(mySprite, 100, 100)
        pauseUntil(() => Game == 1)
    } else if (Game == 1) {
    	
    }
})
