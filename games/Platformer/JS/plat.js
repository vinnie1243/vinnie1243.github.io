var offset = 0
function main() {    
    var tex = window.localStorage.getItem("TexFlip")
    if(tex == undefined) {
        window.localStorage.setItem("TexFlip", true)
        tex = true
    }
    if(tex == true || tex == "true") {
        var ele = document.getElementById("tex")
        ele.innerText = "Textures Off"
    } else {
        var ele = document.getElementById("tex")
        ele.innerText = "Textures On"
    }
    window.sessionStorage.setItem("texHold", tex)
    var lvl = window.localStorage.getItem("level")
    if(lvl == undefined) {
        window.localStorage.setItem("level", 1)
    }
    var bullet1 = document.getElementById("bullet1")
    bullet1.src = "../Media/bulletFull.png"
    const SW = window.sessionStorage.getItem("SW")
    const SH = window.sessionStorage.getItem("SH")
    var canvas = document.getElementById("playarea")
    var spawn = startlevel()
    canvas.style.width = window.innerWidth 
    canvas.style.height = window.innerHeight / 2
    canvas.width = SW 
    canvas.height = SH 
    var player = new Player(spawn, 600, "arSoldierIdle1", 0, 0, 10, 100, getAnimData("arSoldierIdle1", "width"), getAnimData("arSoldierIdle1", "height"), "right", 5, {
        run: false,
        shoot: false,
        idle: true,
        hipfire: false,
        walk: false,
        jump: false,
    })
    window.sessionStorage.setItem("bulletid", 0)
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("hasWon", false)
    window.sessionStorage.setItem("Dim", [window.innerWidth * 0.9, window.innerHeight, canvas.width, canvas.height])
    window.sessionStorage.setItem("jumping", false)
    window.sessionStorage.setItem("idleRunning", false)
    window.sessionStorage.setItem("walkRunning", false)
    window.sessionStorage.setItem("hanging", 0)
    window.sessionStorage.setItem("runRunning", false)
    window.sessionStorage.setItem("shootRunning", false)
    window.sessionStorage.setItem("hipfireRunning", false)
    window.sessionStorage.setItem("oldPosX", 500)
    window.sessionStorage.setItem("oldPosY", 20)
    window.sessionStorage.setItem("Keys", JSON.stringify({"a": false,"d": false,"shift": false,"space": false,}))
    window.sessionStorage.setItem("oldAnim", "arSoldierIdle1")
    //window.sessionStorage.setItem("platforms", JSON.stringify([[-50000, canvas.height * 0.95, 100000, 50], [0, canvas.height * 0.74, 100, 50, 2], [canvas.width - 100, canvas.height * 0.75, 100, 50, 3], [canvas.width - 100, canvas.height * 0.95, 100, 50, 4]]))
    window.sessionStorage.setItem("bullets", JSON.stringify([]))
    setInterval(() => {
        gameLoop()
    }, 16.6);
    setInterval(() => {
        hang()
    }, 200);
    clearBoard()
    //drawPlayer()    
}

function gotomenu() {
    location.href = "menu.html"
}

function startlevel() {
    var lvl = window.localStorage.getItem("level")
    if(lvl == undefined) {
        window.localStorage.setItem("level", 1)
    }
    var tex = window.localStorage.getItem("TexFlip")
    if(tex == undefined) {
        window.localStorage.setItem("TexFlip", true)
    }
    var data = level(lvl)
    if(tex == true || tex == "true") {
        var platforms = data.platformsTexOn
    } else {
        var platforms = data.platformsTexOff    
    }
    var backgrounds = data.backgrounds
    var enemys = data.enemys
    var paths = data.paths
    var follow = data.follow
    var spawn = data.spawnpoint
    const SW = data.SW
    const SH = data.SH
    const PSF = data.PSF
    window.sessionStorage.setItem("follow", JSON.stringify(follow))
    window.sessionStorage.setItem("paths", JSON.stringify(paths))
    window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
    window.sessionStorage.setItem("platforms", JSON.stringify(platforms))
    window.sessionStorage.setItem("SW", JSON.stringify(SW))
    window.sessionStorage.setItem("SH", JSON.stringify(SH))
    window.sessionStorage.setItem("PSF", JSON.stringify(PSF))
    return spawn
}

function clickChck(e) {
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    var jumping = JSON.parse(window.sessionStorage.getItem("jumping"))
    var bulletid = window.sessionStorage.getItem("bulletid")
    bulletid++
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    let x = e.clientX
    if(x < window.innerWidth / 2) {
        if(jumping == false) {
            bullets.push([player.x, player.y + 16, "left", 200, bulletid])
            player.direction = "left"
        } else {
            bullets.push([player.x, player.y + 40, "left", 200, bulletid])
            player.direction = "left"
        }
    } else if(x > window.innerWidth / 2) {
        if(jumping == false) {
            bullets.push([player.x + 70, player.y + 16, "right", 200, bulletid])
            player.direction = "right"
        } else {
            bullets.push([player.x + 70, player.y + 16, "right", 200, bulletid])
            player.direction = "right"
        }
    }
    window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
    window.sessionStorage.setItem("bulletid", bulletid)
    if(jumping == false) {
        player.anim = "arSoldierShoot1"
    } else {
        player.anim = "arSoldierHipfire1"
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function keyUp(e) {
    var keys = JSON.parse(window.sessionStorage.getItem("Keys"))
    var key; 
    if (window.event) { 
        key = e.keyCode; 
    } else if (e.which) { 
        key = e.which; 
    } 
    if(key == 16) {
        return
    }
    key = convert(key)
    if(key == "space") {
        keys.space = false
    } else if(key == "a" && e.shiftKey == true) {
        keys.a = false
        keys.shift = false
    } else if(key == "a") {
        keys.a = false
    } else if(key == "d" && e.shiftKey == true) {
        keys.d = false
        keys.shift = false
    } else if(key == "d") {
        keys.d = false
    }
    window.sessionStorage.setItem("Keys", JSON.stringify(keys))
}

function keyDown(e) {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var keys = JSON.parse(window.sessionStorage.getItem("Keys"))
    var key; 
    if (window.event) { 
        key = e.keyCode; 
    } else if (e.which) { 
        key = e.which; 
    } 
    if(key == 16) {
        return
    }
    key = convert(key)
    if(key == "space") {
        keys.space = true
    } else if(key == "a" && e.shiftKey == true) {
        keys.a = true 
        keys.shift = true
        player.direction = "left"
    } else if(key == "a") {
        keys.a = true
        player.direction = "left"
    } else if(key == "d" && e.shiftKey == true) {
        keys.d = true
        keys.shift = true
        player.direction = "right"
    } else if(key == "d") {
        keys.d = true
        player.direction = "right"
    } else if(key == "m") {
        randomPlatform()
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("Keys", JSON.stringify(keys))
}

function moveRight() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(player.velX <= 2) {
        player.velX += 0.75
    }
    player.direction = "right"
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function moveLeft() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(player.velX >= -2) {
        player.velX -= 0.75
    }
    player.direction = "left"
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function run() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(player.direction == "left"&& player.velX > - 4.5) {
        player.velX -= 1.5
    } else if(player.direction == "right" && player.velX < 4.5) {
        player.velX += 1.5
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}  

function jump() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    var jumping = window.sessionStorage.getItem("jumping")
    if(jumping == "false") {
        jumping = true
        player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
        //player.anim = "arSoldierJump1"
        //player.animations.hipfire = false
        //player.animations.jump = true
        //player.animations.run = false
        //player.animations.walk = false
        //player.animations.idle = false
        player.velY = -22.5
        player.velX *= 2.2
        window.sessionStorage.setItem("player", JSON.stringify(player))
        window.sessionStorage.setItem("jumping", jumping)
    }
}

function convert(key) {
    if(key == 32) {
        return "space"
    } else if(key == 65) {
        return "a"
    } else if(key == 16) {
        return "shift"
    } else if(key == 68) {
        return "d"
    } else if(key == 77) {
        return "m"
    } else {
        return key
    }
}

function keyed() {
    var keys = JSON.parse(window.sessionStorage.getItem("Keys"))
    var jumping = JSON.parse(window.sessionStorage.getItem("jumping"))
    if(keys.space == true && jumping == false) {
        jump()
    } else if(keys.a == true && keys.shift == true) {
        run()
    } else if(keys.a == true) {
        moveLeft()
    } else if(keys.d == true && keys.shift == true) {
        run()
    } else if(keys.d == true) {
        moveRight()
    }
}

function gameLoop() {
    window.sessionStorage.setItem("letMove", 4)
    keyed()
    move();
    drawHitboxes()
    updata()
    enemyAI()
    moveEnemy()
    physics()
    updateDisplay()
    animate()
    updata()
    center()
    slow();
    deathChck();
}

function updateDisplay() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var health = document.getElementById("healthbar")
    health.value = player.health    
}

function updata() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    const SW = window.sessionStorage.getItem("SW")
    const SH = window.sessionStorage.getItem("SH")
    const PSF = window.sessionStorage.getItem("PSF")
    player.width = getAnimData(player.anim, "width") * (PSF/1.2)
    player.height = getAnimData(player.anim, "height") * (PSF * 1.2)
    if(player.iframes != 0) {
        player.iframes -= 1
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function moveEnemy() {
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var holdArr = [] 
    for(var i = 0; i < enemys.length; i++) {
        if(enemys[i] != null) {
            holdArr.push(enemys[i])
        }
    }
    enemys = holdArr
    for(var i = 0; i < enemys.length; i++) {
        var enemy = new Enemy(enemys[i][0], enemys[i][1], enemys[i][2], enemys[i][3], enemys[i][4], enemys[i][5], enemys[i][6], enemys[i][7], enemys[i][8], enemys[i][9], enemys[i][10])
        enemy.y += enemy.velY
        enemy.x += enemy.velX
        enemys[i] = [enemy.x, enemy.y, enemy.type, enemy.health, enemy.damage, enemy.anim, enemy.velX, enemy.velY, enemy.rand, enemy.detect, enemy.direction]
    }
    window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
}

function hang() {
    var hanging = JSON.parse(window.sessionStorage.getItem("hanging"))
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(hanging == 1) {
        hanging = 2
    } else if(hanging == 2) {
        hanging = 3
    } else if(hanging == 3) {
        hanging = 4
    } else if(hanging == 4) {
        hanging = 5
    } else if(hanging == 5) {
        player.y -= (player.height + 60)
        player.x = player.x + 150
        hanging = 0
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("hanging", JSON.stringify(hanging))
}

function die() {
    //location.reload()
    console.log("you died")
}

function deathChck() {
    var canvas = document.getElementById("playarea")
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(player.y > canvas.height) {
        //window.location = "lose.html"
    }
    if(player.health <= 0) {
        //window.location = "lose.html"
        console.log(player.health)
    }
}

function center() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var middle = canvas.width / 2
    offset = Math.abs(middle-player.x)
    ctx.save();
    //ctx.translate((middle - player.x),(0));
    //player.x += middle
    //player.x = Math.round(100*player.x)/100;  
    drawPlatforms()
    drawEnemy()
    drawBullet()
    drawPlayer()
    ctx.restore();
 
}

function slow() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    if(player.velX < 0.35 && player.velX > -0.35) {
        player.velX = 0
    } else if(player.velX != 0 && player.velX > 0) {
        player.velX -= 0.35     
    } else if(player.velX != 0 && player.velX < 0) {
        player.velX += 0.35
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function winner() {
    //window.location = "win.html"
}

function animate() {
    //player
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    if(player.anim.includes("Idle")) {
        if(player.anim.includes("whiteCopMale")) {
            whiteCopIdle()
        } else if(player.anim.includes("arSoldier")) {
            arSoldierIdle()
        }
    } else if(player.anim.includes("Walk")) {
        if(player.anim.includes("whiteCopMale")) {
            whiteCopWalk()
        } else if(player.anim.includes("arSoldier")) {
            arSoldierWalk() 
        }
    
    } else if(player.anim.includes("Run")) {
        if(player.anim.includes("whiteCopMale")) {
            whiteCopRun()
        } else if(player.anim.includes("arSoldier")) {
            arSoldierRun()
        }
    } else if(player.anim.includes("Shoot")) {
        if(player.anim.includes("whiteCopMale")) {
            whiteCopShoot()
        } else if(player.anim.includes("arSoldier")) {
            arSoldierShoot()
        }
    } else if(player.anim.includes("Hipfire")) {
        if(player.anim.includes("arSoldier")) {
            arSoldierHipfire()
        }
    } else if(player.anim.includes("Hang")) {
        if(player.anim.includes("arSoldier")) {
            arSoldierHang()
        }
    }
}

function move() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    window.sessionStorage.setItem("oldPosX", player.x)
    window.sessionStorage.setItem("oldPosY", player.y) 
    window.sessionStorage.setItem("oldAnim", player.anim)
    player.x += player.velX
    player.y += player.velY
    player.x = Math.round(100*player.x) / 100;
    player.y = Math.round(100*player.y) / 100;    
    var num = 0
    var num2
    if(player.anim.includes("Jump")) {
        player.animations.jump = true
        if(player.anim.includes("1")) {
            num = 1
        } else if(player.anim.includes("2")) {
            num = 2
        } else if(player.anim.includes("3")) {
            num = 3
        } else if(player.anim.includes("4")) {
            num = 4
        } else if(player.anim.includes("5")) {
            num = 5
        } else if(player.anim.includes("6")) { 
            num = 6
        } else if(player.anim.includes("7")) {
            num = 7
        } else if(player.anim.includes("8")) {
            num = 8
        }
    }
    if(player.anim.includes("Shoot")) {
        player.animations.shoot = true
        if(player.anim.includes("1")) {
            num = 1
        } else if(player.anim.includes("2")) {
            num = 2
        } else if(player.anim.includes("3")) {
            num = 3
        } else if(player.anim.includes("4")) {
            num = 4
        }
    }
    if(player.velX > 3 || player.velX < -3) {
        player.animations.idle = false
        player.animations.walk = false
        player.animations.run = true
        if(player.anim.includes("Run") == false) {
            player.anim = "arSoldierRun1"
        }
    }
    if(player.velX > 1.5 && player.velX < 3 || player.velX < -1.5 && player.velX > -3) {
        player.animations.idle = false
        player.animations.run = false
        player.animations.walk = true
        if(player.anim.includes("Walk") == false) {
            player.anim = "arSoldierWalk1"
        }
    }
    if(player.velX < 0.1 && player.velX > -0.1) {
        player.animations.idle = true
        player.animations.run = false
        player.animations.walk = false
        if(player.anim.includes("Idle") == false) {
            player.anim = "arSoldierIdle1"
        }
    }
    /*if(player.velX > 0 && player.velX < 1.5 && player.anim.includes("Run") || player.velX > 0 && player.velX < 5 && player.anim.includes("Idle")) {
        player.animations.idle = false
        player.animations.run = false
        player.animations.walk = true
        if(player.anim.includes("Walk") == false) {
            player.anim = "arSoldierRun1"
        }
    }
    if(player.velX < -0 && player.velX > 0 && player.anim.includes("Run") || player.velX < 0 && player.velX > -1.5 && player.anim.includes("Idle")) {
        player.animations.idle = false
        player.animations.run = false
        player.animations.walk = true
        player.anim = "arSoldierWalk1"
    }
    if(player.velX < 0.1 && player.velX > -0.1 && player.anim.includes("Walk")) {
        player.animations.idle = true
        player.animations.run = false
        player.animations.walk = false
        player.anim = "arSoldierIdle1"
    }*/
    if(player.animations.shoot == true && num == 1) {
        player.anim = `arSoldierShoot1`
    } else if(player.animations.shoot == true && num == 2) {
        player.anim = `arSoldierShoot2`
    } else if(player.animations.shoot == true && num == 3) {
        player.anim = `arSoldierShoot3`
    } else if(player.animations.shoot == true && num == 4) {
        player.anim = `arSoldierShoot4`
    }
    if(player.animations.jump == true && num == 1) {
        player.anim = `arSoldierJump1`
    } else if(player.velY < 0 && player.animations.jump == true && num == 2) { 
        player.anim = `arSoldierJump2`
    } else if(player.velY < 0 && player.animations.jump == true && num == 3) {
        player.anim = `arSoldierJump3`
    } else if(player.velY < 0 && player.animations.jump == true && num == 4) {
        player.anim = `arSoldierJump4`
    } else if(player.velY < 0 && player.animations.jump == true && num == 5) {
        player.anim = `arSoldierJump5`
    } else if(player.velY < 0 && player.animations.jump == true && num == 6) {
        player.anim = `arSoldierJump6`
    } else if(player.velY < 0 && player.animations.jump == true && num == 7) {
        player.anim = `arSoldierJump7`
    } else if(player.velY < 0 && player.animations.jump == true && num == 8) {
        player.anim = `arSoldierJump8`
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}   

function drawEnemy() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')    
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var image = document.getElementById("test1")
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    for(var i = 0; i < enemys.length; i++) {
        var enemy = new Enemy(enemys[i][0], enemys[i][1], enemys[i][2], enemys[i][3], enemys[i][4], enemys[i][5], enemys[i][6], enemys[i][7], enemys[i][8], enemys[i][9], enemys[i][10])
        var short = `${enemy.type}${enemy.anim.charAt(0).toUpperCase()}${enemy.anim.substring(1)}`
        var direction = enemy.direction
        if(direction == "left") {
            ctx.save()
            ctx.scale(-1, 1);
            ctx.translate((-enemy.x * 2) , 0)
            ctx.drawImage(image, getData(short, "sx"), getData(short, "sy"), getData(short, "width"), getData(short, "height"), enemy.x, enemy.y, getData(short, "width") * 1.25, getData(short, "height") * 1.25)            
            ctx.restore()
        } else {
            ctx.drawImage(image, getData(short, "sx"), getData(short, "sy"), getData(short, "width"), getData(short, "height"), enemy.x, enemy.y, getData(short, "width") * 1.25, getData(short, "height") * 1.25)
        }
    }
}

function clearBoard() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.reset()
}

function drawPlayer() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')    
    var img = document.getElementById("spritesheet")
    ctx.moveTo(0, 0) 
    //ctx.fillStyle  = "red"
    //ctx.fillRect(player.x, player.y, 50, 100)
    ctx.save()
    ctx.translate(player.x, player.y)
    if(player.direction == "left") {
        ctx.scale(-1, 1); 
        ctx.translate(-player.width, 0)
    } 
    ctx.drawImage(img, getAnimData(player.anim, "sx"), getAnimData(player.anim, "sy"), getAnimData(player.anim, "width"), getAnimData(player.anim, "height"), 0, 0, player.width, player.height)
    ctx.restore();
}

function drawPlatforms() {
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    for(let i = 0; i < platforms.length; i++) {
        var platform = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3], platforms[i][4])
        var canvas = document.getElementById("playarea")
        var ctx = canvas.getContext('2d')    
        var texFlip = window.localStorage.getItem("TexFlip")
        if(platforms[i][4] == "black" || platforms[i][4] == "darkgray" || platforms[i][4] == "lightgray" || platforms[i][4] == "peru" || platforms[i][4] == "slategray" || platforms[i][4] == "orange" || platforms[i][4] == "saddlebrown" || platforms[i][4] == "green" || platforms[i][4] == "red" || platforms[i][4] == "dimgray" || platforms[i][4] == "ghostwhite" || platforms[i][4] == "azure" || platforms[i][4] == "gray" || platforms[i][4] == "#ADA587" || platforms[i][4] == "brown" || platforms[i][4] == "#54587B" || platforms[i][4] == "blue") {
                ctx.fillStyle = platforms[i][4]
                ctx.fillRect(platform.x, platform.y, platform.width, platform.height, platform.texture)
        } else {
            const X = getTextureData(platform.texture, "x")
            const Y = getTextureData(platform.texture, "y")
            const WIDTH = getTextureData(platform.texture, "width")
            const HEIGHT = getTextureData(platform.texture, "height")
            var img = document.getElementById("tileset")
            ctx.drawImage(img, X, Y, WIDTH, HEIGHT, platform.x, platform.y, platform.width, platform.height)   
        }       
    }       
}

function fig(tex) {
    switch(tex) {
        case "dirt1":
            return "peru"
        break;
        case "spike1":
            return "red"
        break;
    }
    return "green"
}

function drawBullet() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')
    var img = document.getElementById("spritesheet")
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    for(var i = 0; i < bullets.length; i++) {
        if(bullets[i][3] == 0) {
            bullets.splice(i, 1)
            window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
            return
        } else {
            bullets[i][3] -= 1
        }
        if(bullets[i][2] == "left") {
            var x = bullets[i][0] -= 10
        } else if(bullets[i][2] == "right") {
            var x = bullets[i][0] += 10
        }       
        var y = bullets[i][1]
        var direction = bullets[i][2]
        ctx.drawImage(img, getAnimData(`bullet${direction.charAt(0).toUpperCase()}`, "sx"), getAnimData(`bullet${direction.charAt(0).toUpperCase()}`, "sy"), getAnimData(`bullet${direction.charAt(0).toUpperCase()}`, "width"), getAnimData(`bullet${direction.charAt(0).toUpperCase()}`, "height"), x, y, getAnimData(`bullet${direction.charAt(0).toUpperCase()}`, "width")/2, getAnimData(`bullet${direction.charAt(0).toUpperCase()}`, "height")/2) 
    }   
    window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
}

function randomPlatform() {
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    platforms.push([Math.random() * 1500, Math.random() * (850 - 200) + 200, 50, 50, "gray"])
    window.sessionStorage.setItem("platforms", JSON.stringify(platforms))   
}

function drawHitboxes() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    ctx.strokeStyle = "red"
    ctx.strokeRect(0, 0, player.width, player.height)
    for(var i = 0; i < enemys.length; i++) {
        var enemy = new Enemy(enemys[i][0], enemys[i][1], enemys[i][2], enemys[i][3], enemys[i][4], enemys[i][5], enemys[i][6], enemys[i][7], enemys[i][8], enemys[i][9], enemys[i][10])
        ctx.strokeRect(enemy.x, enemy.y, 50, 100)
    }
    for(var i = 0; i < bullets.length; i++) {
        ctx.strokeRect(bullets[i][0], bullets[i][1], 10, 10)
    }
}

function pay() {
    var name = document.getElementById("name").value
    var payload = document.getElementById("payload").value
    window.sessionStorage.setItem(`${name}`, payload)
}

function text() {
    var texHold = window.sessionStorage.getItem("texHold")

    var button = document.getElementById("tex")
    if(button.innerText == "Textures Off") {
        button.innerText = "Textures On"    
        window.localStorage.setItem("TexFlip", false)
    } else {
        button.innerText = "Textures Off"
        window.localStorage.setItem("TexFlip", true)
    }
    var tex = window.localStorage.getItem("TexFlip")
    if(texHold != tex) {
        location.reload()
    }
}

class Enemy {
    constructor(x, y, type, health, damage, anim, velX, velY, rand, detect, direction) {
        this.x = x
        this.y = y
        this.type = type
        this.health = health
        this.damage = damage
        this.anim = anim
        this.velX = velX
        this.velY = velY
        this.rand = rand
        this.detect = detect
        this.direction = direction
    }

    getAnim() {

    }
}

class Ally {
    constructor(x, y, type, health, damage, anim, velX, velY, weapon) {
        this.x = x
        this.y = y
        this.type = type
        this.health = health
        this.damage = damage
        this.anim = anim
        this.velX = velX
        this.velY = velY
        this.weapon = weapon
    }

    getAnim() {

    }
}

class Player {
    constructor(x, y, anim, velX, velY, health, ammo, width, height, direction, iframes, animations) {
        this.x = x  
        this.y = y
        this.anim = anim
        this.velX = velX
        this.velY = velY
        this.health = health
        this.ammo = ammo
        this.width = width
        this.height = height
        this.direction = direction
        this.iframes = iframes
        this.animations = animations
    }

    isRunning(test) {
        if(this.animations[test] == true) {
            return true
        } 
    }

    getAnim() {
        if(this.anim.includes("Idle")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierIdle2"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierIdle3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierIdle4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierIdle5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierIdle6"
            } else if(this.anim.includes("6")) {
                this.anim = "arSoldierIdle1"
            }
        }
        if (this.anim.includes("Walk")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierWalk2"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierWalk3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierWalk4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierWalk5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierWalk6"
            } else if(this.anim.includes("6")) {
                this.anim = "arSoldierWalk7"
            } else if(this.anim.includes("7")) {
                this.anim = "arSoldierWalk1"
            }
        }
        if(this.anim.includes("Run")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierRun2"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierRun3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierRun4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierRun5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierRun6"
            } else if(this.anim.includes("6")) {
                this.anim = "arSoldierRun7"
            } else if(this.anim.includes("7")) {
                this.anim = "arSoldierRun8"
            } else if(this.anim.includes("8")) {
                this.anim = "arSoldierRun1"
            }
        }   
        if(this.anim.includes("Jump")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierJump1"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierJump3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierJump4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierJump5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierJump6"
            } else if(this.anim.includes("6")) {
                this.anim = "arSoldierIdle1"
            }
        }
        if(this.anim.includes("Shoot")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierShoot2"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierShoot3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierShoot4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierShoot5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierIdle1"
            }
        }
        if(this.anim.includes("Hipfire")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierHipfire2"
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierHipfire3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierHipfire4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierIdle1"
            }
        }
        if(this.anim.includes("Hang")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierHang1"
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierHang3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierHang4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierHang5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierPullup1"
            }
        }
        if(this.anim.includes("Pullup")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierPullup2"
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierPullup3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierPullup4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierPullup5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierIdle1"
            }
        }
        return this.anim
    }
}

class Platform {
    constructor(x, y, width, height, texture) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.texture = texture
    }
}   

class Bullet {
    constructor(x, y, direction, id) {
        this.x = x
        this.y = y
        this.direction = direction
        this.id = id
    }
}

class Path {
    constructor(x1, x2) {
        this.x1 = x1
        this.x2 = x2
    }
}

class Spike {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class movingPlatorm {
    constructor(x, y, width, height, velX, velY, pathx1, pathx2) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.velX = velX
        this.velY = velY
        this.pathx1 = pathx1
        this.pathx2 = pathx2
    }
}
