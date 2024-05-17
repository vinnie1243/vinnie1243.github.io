function enemyAI() {
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    for(var i = 0; i < enemys.length; i++) {
        var enemy = new Enemy(enemys[i][0], enemys[i][1], enemys[i][2], enemys[i][3], enemys[i][4], enemys[i][5], enemys[i][6], enemys[i][7], enemys[i][8], enemys[i][9], enemys[i][10])
        if(enemy.rand == undefined) {
            enemy.rand = randomPoint(i)
        }
        enemy.direction = determineDirection(enemy.x, enemy.rand, player.x, enemy.detect)
        if(enemy.type == "zombieThree") {
            if(enemy.health > 0) {
                if(enemy.velX == 0) {
                    if(enemy.anim == "idle1") {
                        //enemy.anim = "idle2"
                    } else {
                        enemy.anim = "idle1"
                    }
                } else {
                    if(enemy.anim == "walk1") {
                        //enemy.anim = "walk2"
                    } else {
                        //enemy.anim = "walk1"
                    }
                }
                enemy.detect = detectPlayer(enemy)
                if(enemy.detect == false) {
                    if(enemy.x < enemy.rand) {
                        enemy.velX = 0.5
                        enemy.direction = "right"
                        //enemy.anim = "walk1"
                    } else if(enemy.x > enemy.rand) {
                        enemy.velX = -0.5
                        enemy.direction = "left"
                        //enemy.anim = "walk1" 
                    } else {
                        enemy.rand = randomPoint(i)
                        enemy.velX = 0
                    }
                } else {
                    enemy = followPlayer(enemy)
                    if(enemy.x + 100 > player.x && enemy.x - 100 < player.x) {
                        attackPlayer(enemy)
                    }
                }
            } else {
                //enemy.anim = "dead"
            }
        }
        enemys[i] = [enemy.x, enemy.y, enemy.type, enemy.health, enemy.damage, enemy.anim, enemy.velX, enemy.velY, enemy.rand, enemy.detect, enemy.direction]
    }
    window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
}
//selects random point to walk to on enemys path
function randomPoint(num) {
    var paths = JSON.parse(window.sessionStorage.getItem("paths"))
    var pathS = paths[num][0]
    var pathE = paths[num][1]
    var rand = Math.floor(Math.random() * (pathS - pathE) + pathE)
    return rand
}
//attacks player if it is close enough
function attackPlayer(enemy) {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    console.log(enemy.damage)
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(player.iframes <= 0) {
        player.health -= enemy.damage
        player.iframes = 100
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}
//detects if player is close enough to the enemy to be seen depending on enemys type
function detectPlayer(enemy) {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(enemy.x + 200 > player.x && enemy.x - 200 < player.x) {
        enemy.detect = true
    } else {
        enemy.detect = false
    }
    return enemy.detect
}
//follows player if they have been detected
function followPlayer(enemy) {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(enemy.x < player.x) {
        enemy.velX = 2
        enemy.direction = "right"
        //enemy.anim = "run1"
    } else {
        enemy.velX = -2
        enemy.direction = "left"
        //enemy.anim = "run1"
    }
    return enemy
}
//figures out the direction that the enemy needs to face
function determineDirection(enemyx, enemyrand, playerx, detect) {
    if(detect == true) {
        if(enemyx < playerx) {
            return "right"
        } else {
            return "left"
        }
    } else {
        if(enemyx < enemyrand) {
            return "right"
        } else {
            return "left"
        }
    }
    
}