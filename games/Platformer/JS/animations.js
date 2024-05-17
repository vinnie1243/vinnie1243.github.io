/////IDLE/////
//speed = 200ms
function whiteCopIdle() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("idleRunning"))
    if(running != true) {
        window.sessionStorage.setItem("idleRunning", true)
        if(player.animations.idle == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                window.sessionStorage.setItem("idleRunning", false)
            }, 200);
        } else {
            window.sessionStorage.setItem("idleRunning", false)
        }
        window.sessionStorage.setItem("player", JSON.stringify(player))
    }
}
function arSoldierIdle() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("idleRunning"))
    if(running != true) {
        window.sessionStorage.setItem("idleRunning", true)
        if(player.animations.idle == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                window.sessionStorage.setItem("idleRunning", false)
            }, 200);
        } else {
            window.sessionStorage.setItem("idleRunning", false)
        }
        window.sessionStorage.setItem("player", JSON.stringify(player))
    }

}
/////WALK/////
//speed = 120ms
function whiteCopWalk() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("walkRunning"))
    if(running != true) {
        window.sessionStorage.setItem("walkRunning", true)
        if(player.animations.walk == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                window.sessionStorage.setItem("walkRunning", false)
            }, 120);
        } else {
            window.sessionStorage.setItem("walkRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

//speed = 200ms
function arSoldierWalk() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("walkRunning"))
    if(running != true) {
        window.sessionStorage.setItem("walkRunning", true)
        if(player.animations.walk == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                window.sessionStorage.setItem("walkRunning", false)
            }, 120);
        } else {
            window.sessionStorage.setItem("walkRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))

}

/////RUN/////
//speed = 120ms
function whiteCopRun() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("runRunning"))
    if(running != true) {
        window.sessionStorage.setItem("runRunning", true)
        if(player.animations.run == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                drawPlayer()
                window.sessionStorage.setItem("runRunning", false)
            }, 120);
        } else {
            window.sessionStorage.setItem("runRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}
function arSoldierRun() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("runRunning"))
    if(running != true) {
        window.sessionStorage.setItem("runRunning", true)
        if(player.animations.run == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                drawPlayer()
                window.sessionStorage.setItem("runRunning", false)
            }, 120);
        } else {
            window.sessionStorage.setItem("runRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))

}
/////SHOOT/////
//speed = 120
function whiteCopShoot() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("shootRunning"))
    if(running != true) {
        window.sessionStorage.setItem("shootRunning", true)
        if(player.animations.shoot == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                drawPlayer()
                window.sessionStorage.setItem("shootRunning", false)
            }, 120);
        } else {
            window.sessionStorage.setItem("shootRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}
//speed 100
function arSoldierShoot() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("shootRunning"))
    if(running != true) {
        window.sessionStorage.setItem("shootRunning", true)
        if(player.animations.shoot == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                //drawPlayer()
                window.sessionStorage.setItem("shootRunning", false)
            }, 100);
        } else {
            window.sessionStorage.setItem("shootRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}
/////HIPFIRE/////
//speed 100
function arSoldierHipfire() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var hipfire = JSON.parse(window.sessionStorage.getItem("hipfire"))
    var running = JSON.parse(window.sessionStorage.getItem("hipfireRunning"))
    if(running != true) {
        window.sessionStorage.setItem("hipfireRunning", true)
        if(hipfire == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                //drawPlayer()
                window.sessionStorage.setItem("hipfireRunning", false)
            }, 100);
        } else {
            window.sessionStorage.setItem("hipfireRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}
/////HANG/////
//speed 200
function arSoldierHang() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY, player.health, player.ammo, player.width, player.height, player.direction, player.iframes, player.animations)
    var running = JSON.parse(window.sessionStorage.getItem("hangRunning"))
    if(running != true) {
        window.sessionStorage.setItem("hangRunning", true)
        if(player.animations.hang == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                //drawPlayer()
                window.sessionStorage.setItem("hangRunning", false)
            }, 200);
        } else {
            window.sessionStorage.setItem("hangRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function whiteCopJump() {

}

function whiteCopTaser() {

}

function whiteCopDie() {

}

function whiteCopHurt() {

}

function clearArea(x, y, width, height) {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.clearRect(x, y, width, height)
}