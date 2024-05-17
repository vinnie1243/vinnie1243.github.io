function physics() {
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var leng = enemys.length
    clearBoard()
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    if(player.velY < 10) {
        player.velY += 1
    }
    var hangx = null
    var hangy = null
    var win = JSON.parse(window.sessionStorage.getItem("hasWon"))
    var jumping = JSON.parse(window.sessionStorage.getItem("jumping"))
    for(var i = 0; i < platforms.length; i++) {
        if(platforms[i][5] != "N") {
            var plat = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3], platforms[i][4])
            var checker = 0
            var chck1 = collisionSimple(player, plat)
            if(chck1 == true) {
                if(platforms[i][5] == "L") {
                    if(player.direction == platforms[i][6]) {
                        player.x = plat.x - player.width + 10
                        player.y = plat.y
                        player.velX = 0
                        player.velY = 0
                        checker = 1
                        player.anim = "arSoldierHang1"
                        player.animations.hang = true
                        player.animations.idle = false
                        player.animations.walk = false
                        player.animations.run = false
                        var hanging = JSON.parse(window.sessionStorage.getItem("hanging"))
                        console.log("Test")
                        if(hanging == 0) {
                            window.sessionStorage.setItem("hanging", 1)
                        }
                    }
                } else if(platforms[i][5] == "J") {
                    window.sessionStorage.setItem("jumping", false)
                    if(platforms[i][6] == "right") {
                        player.velX = (player.velX + 15)
                        player.velY = -30
                    } else if(platforms[i][6] == "left") {
                        player.velX = -(player.velX + 15)
                        player.velY = -30
                    }
                }
                if(platforms[i][5] == "W") {
                    if(win == false) {
                        window.sessionStorage.setItem("hasWon", true)
                        winner()
                    }
                } else if(platforms[i][5] == "K" || platforms[i][5] == "V") {
                    die()
                } else if(checker == 0 && platforms[i][5] != "J" && platforms[i][5] != "V"){
                    player.velY = -1
                    if(player.y < plat.y && player.y < plat.y + plat.height ) {
                        var jumping = false
                        window.sessionStorage.setItem("jumping", jumping)   
                    }

                    window.sessionStorage.setItem("hanging", 0)
                }
                checker = 0
            }
            var hanging = window.sessionStorage.getItem("hanging")
            if(hanging > 0) {
                player.velX = 0
                player.velY = 0
            }
            window.sessionStorage.setItem("player", JSON.stringify(player))
            var chck2 = collisionComplex(player, plat)
            if(chck2 == true) {
                var dist = distance(player, plat)
                var d1 = dist[0]
                var d2 = dist[1]
                var d3 = dist[2]
                var d4 = dist[3]
                if(d1 < d2 && d1 < d3 && d1 < d4) {
                    if(platforms[i][5] != "W" && platforms[i][5] != "K" && platforms[i][5] != "N" && platforms[i][5] != "J" && platforms[i][5] != "V") {
                        player.x = (plat.x + plat.width)
                        player.velX = 3 
                    } else if(platforms[i][5] == "K") {
                        die()
                    }
                } else if(d2 < d1 && d2 < d3 && d2 < d4) {
                    if(platforms[i][5] != "W" && platforms[i][5] != "K" && platforms[i][5] != "N" && platforms[i][5] != "J" && platforms[i][5] != "V") {
                        player.x = Math.abs(plat.x - player.width)
                        player.velX = -2
                    } else if(platforms[i][5] == "K") {
                        die()
                    }
                } else if(d3 < d1 && d3 < d2 && d3 < d4) {
                    if(platforms[i][5] != "W" && platforms[i][5] != "K" && platforms[i][5] != "N" && platforms[i][5] != "J" && platforms[i][5] != "V") {
                        player.y = plat.y - player.height * 1.009 
                    } else if(platforms[i][5] == "K") {
                        die()
                    } else if(platforms[i][5] == "W") {

                    }
                } else if(d4 < d1 && d4 < d2 && d4 < d3) {
                    if(platforms[i][5] != "W" && platforms[i][5] != "K" && platforms[i][5] != "N" && platforms[i][5] != "J" && platforms[i][5] != "V") {
                        player.y = plat.y + plat.height
                        player.velY = 0
                    } else if(platforms[i][5] == "K") {
                        die()
                    } else if(platforms[i][5] == "W") {

                    }
                }
                d1, d2, d3, d4 = null
            }
            window.sessionStorage.setItem("player", JSON.stringify(player))
        }
    }
    window.sessionStorage.setItem("jumping", jumping)  
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    for(var i = 0; i < bullets.length; i++) {
        var bull = new Bullet(bullets[i][0], bullets[i][1], bullets[i][2], bullets[i][3])
        var nbull = new Bullet(bullets[i][0], bullets[i][1], bullets[i][2], bullets[i][3])
        nbull.width = getAnimData(`bullet${bull.direction.charAt(0).toUpperCase()}`, "width") / 2
        nbull.height = getAnimData(`bullet${bull.direction.charAt(0).toUpperCase()}`, "height") / 2   
        for(var j = 0; j < platforms.length; j++) {
            var plat = new Platform(platforms[j][0], platforms[j][1], platforms[j][2], platforms[j][3])
            var chck1 = collisionSimple(nbull, plat)
            if(chck1 == true) {
                bullets.splice(i, 1)
            }
        }
        for(var j = 0; j < enemys.length; j++) {
            var enemy = new Enemy(enemys[j][0], enemys[j][1], enemys[j][2], enemys[j][3], enemys[j][4], enemys[j][5], enemys[j][6], enemys[j][7], enemys[j][8], enemys[j][9], enemys[j][10])
            enemy.width = getAnimData(`${enemy.type}${enemy.anim.charAt(0).toUpperCase()}${enemy.anim.slice(1)}`, "width") * 1.25
            enemy.height = getAnimData(`${enemy.type}${enemy.anim.charAt(0).toUpperCase()}${enemy.anim.slice(1)}`, "height") * 1.25
            var chck1 = collisionSimple(nbull, enemy)
            if(chck1 == true) {
                bullets.splice(i, 0)
            }
        }
    }
    window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
    window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
    //enemys
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    for(var i = 0; i < enemys.length; i++) {
        if(enemys[i][7] < 10) {
            enemys[i][7] += 1
        }
    }
    for(var j = 0; j < leng; j++) {
        var short = `${enemys[j][2]}${enemys[j][5].charAt(0).toUpperCase()}${enemys[j][5].substring(1)}`
        var enemy = new Enemy(enemys[j][0], enemys[j][1], enemys[j][2], enemys[j][3], enemys[j][4], enemys[j][5], enemys[j][6], enemys[j][7], enemys[j][8], enemys[j][9], enemys[j][10])
        var width2 = getAnimData(short, "width") * 1.25
        var height2 = getAnimData(short, "height") * 1.25
        var direction2
        if(enemy.x < plat.x + plat.width && enemy.x + width2 > plat.x && enemy.y < plat.y + plat.height && enemy.y + height2 > plat.y) {
            enemy.velY = 0
            enemy.y = plat.y - height2
            jumping = false
        }   
        if(player.x > enemys[j][0]) {
            direction2 = "left"
        } else {
            direction2 = "right"
        }
        for(var i = 0; i < platforms.length; i++) {
            var plat = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3])
            if(enemy.x < plat.x + plat.width && enemy.x + width2 > plat.x && enemy.y < plat.y + plat.height && enemy.y + height2 > plat.y) {
                enemy.velY = 0
                enemy.y -= 1
                jumping = false
            }   
            var right = 0
            var left = 0
            var top = 0
            var bottom = 0
            //rightFace
            if(direction2 == "right") {
                if(enemy.x - width2 < plat.x + plat.width) {
                    right = 1
                }
            } else {
                if(enemy.x < plat.x + plat.width) {
                    right = 1
                }
            }
            leng = enemys.length
            //leftFace
            if(direction2 == "right") {
                if(enemy.x + width2 > plat.x) {
                    left = 1
                }
            } else {
                if(enemy.x - width2 > plat.x) {
                    left = 1
                }
            }
            //topFace
            if(enemy.y + height2 > plat.y * 1.009) {
                top = 1
            }
            //bottomFace 
            if(enemy.y < plat.y + plat.height) {
                bottom = 1
            }
            var coll = 0
            if(right == 1 && left == 1 && top == 1 && bottom == 1) {
                coll = 1
            }
            //d1 = right
            //d2 = left
            //d3 = top
            //d4 = bottom
            var da1 = 0
            var da2 = 0
            var da3 = 0
            var da4 = 0
            if(coll == 1) {
                da1 = Math.abs(enemy.x - (plat.x + plat.width))
                da2 = Math.abs((enemy.x + width) - plat.x)
                da3 = Math.abs((enemy.x + height) - plat.y) 
                da4 = Math.abs(enemy.x - (plat.y + plat.height))
            }
            if(da1 < da2 && da1 < da3 && da1 < da4) {
                enemy.x = (plat.x + plat.width) + 4
                enemy.velX = 0
            } else if(da2 < da1 && da2 < da3 && da2 < da4) {
                enemy.x = (plat.x - width) - 4
                enemy.velX = 0
            } else if(da3 < da1 && da3 < da2 && da3 < da4) {
                enemy.y = plat.y - height2  
                enemy.velY = 0
            } else if(da4 < da1 && da4 < da2 && da4 < da3) {
                enemy.y = plat.y - height2
                enemy.velY = 0
            }
        }
        enemys[j] = [enemy.x, enemy.y, enemy.type, enemy.health, enemy.damage, enemy.anim, enemy.velX, enemy.velY, enemy.rand, enemy.detect, enemy.direction]
        if(enemys[j][1] > 1000) {
            enemys.splice(j, 1)
        }
        window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
    }
}

function collisionSimple(rect1, rect2) {
    if(rect1.width == undefined || rect1.height == undefined || rect1.x == undefined || rect1.y == undefined) {
        console.warn("rect1 data corruption")
    } else if(rect2.width == undefined || rect2.height == undefined || rect2.x == undefined || rect2.y == undefined) {
        console.warn("rect2 data corruption")
    }
    //each one needs x, y, width, height
    var collide = false
    if(rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y) {
        collide = true
    }   
    return collide
}

function collisionComplex(rect1, rect2) {
    var collide = false
    var right = 0
    var left = 0
    var top = 0
    var bottom = 0
    //rightFace
    if(rect1.x < rect2.x + rect2.width) {
        right = 1
    }
    //leftFace
    if(rect1.x + rect1.width > rect2.x) {
        left = 1
    }
    //topFace
    if(rect1.y + rect1.height > rect2.y * 1.009) {
        top = 1
    }
    //bottomFace 
    if(rect1.y < rect2.y + rect2.height) {
        bottom = 1
    }
    if(right == 1 && left == 1 && top == 1 && bottom == 1) {
        collide = true
    }
    return collide
}

function distance(rect1, rect2) {
    //d1 = right
    //d2 = left
    //d3 = top
    //d4 = bottom
    if(rect1.width == undefined || rect1.height == undefined || rect1.x == undefined || rect1.y == undefined) {
        console.warn("rect1 data corruption", rect1)
    } else if(rect2.width == undefined || rect2.height == undefined || rect2.x == undefined || rect2.y == undefined) {
        console.warn("rect2 data corruption")
    }
    d1 = Math.abs(rect1.x - (rect2.x + rect2.width))
    d2 = Math.abs((rect1.x + rect1.width) - rect2.x)
    d3 = Math.abs((rect1.y + rect1.height) - rect2.y) 
    d4 = Math.abs(rect1.y - (rect2.y + rect2.height))
    return [d1,d2,d3,d4]
}