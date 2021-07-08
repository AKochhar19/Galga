controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart0`, spaceplane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let boogey: Sprite = null
let projectile: Sprite = null
let spaceplane: Sprite = null
spaceplane = sprites.create(assets.image`galgaPlane1`, SpriteKind.Player)
controller.moveSprite(spaceplane, 200, 200)
spaceplane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    boogey = sprites.create(assets.image`Blue Rocket0`, SpriteKind.Enemy)
    boogey.setPosition(160, randint(5, 300))
    boogey.setVelocity(-250, 0)
    boogey.setFlag(SpriteFlag.AutoDestroy, true)
})
