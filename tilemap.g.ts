// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`05000a000101010201010101020101010102010000000000010000020101000002010100010201010101020100000000000101010201`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.skillmap.islandTile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
