/////IDLE/////
function arSoldierIdle() {
    var arSoldierIdle = JSON.parse(window.sessionStorage.getItem("arSoldierIdle"))
    arSoldierIdle = new Animate(arSoldierIdle.x, arSoldierIdle.y, arSoldierIdle.anim, arSoldierIdle.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierIdleRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierIdleRunning", true)
        setTimeout(() => {
            arSoldierIdle.anim = arSoldierIdle.getAnim()
            window.sessionStorage.setItem("arSoldierIdle", JSON.stringify(arSoldierIdle))
            window.sessionStorage.setItem("arSoldierIdleRunning", false) 
        }, 200);
    }
}
function whiteCopMaleIdle() {
    var whiteCopMaleIdle = JSON.parse(window.sessionStorage.getItem("whiteCopMaleIdle"))
    whiteCopMaleIdle = new Animate(whiteCopMaleIdle.x, whiteCopMaleIdle.y, whiteCopMaleIdle.anim, whiteCopMaleIdle.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleIdleRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleIdleRunning", true)
        setTimeout(() => {
            whiteCopMaleIdle.anim = whiteCopMaleIdle.getAnim()
            window.sessionStorage.setItem("whiteCopMaleIdle", JSON.stringify(whiteCopMaleIdle))
            window.sessionStorage.setItem("whiteCopMaleIdleRunning", false) 
        }, 200);
    }
}
function zombieThreeIdle() {
    var zombieThreeIdle = JSON.parse(window.sessionStorage.getItem("zombieThreeIdle"))
    zombieThreeIdle = new Animate(zombieThreeIdle.x, zombieThreeIdle.y, zombieThreeIdle.anim, zombieThreeIdle.size)
    var running = JSON.parse(window.sessionStorage.getItem("zombieThreeIdleRunning"))
    if(running == false) {
        window.sessionStorage.setItem("zombieThreeIdleRunning", true)
        setTimeout(() => {
            zombieThreeIdle.anim = zombieThreeIdle.getAnim()
            window.sessionStorage.setItem("zombieThreeIdle", JSON.stringify(zombieThreeIdle))
            window.sessionStorage.setItem("zombieThreeIdleRunning", false) 
        }, 200);
    }

}
/////WALK/////
function arSoldierWalk() {
    var arSoldierWalk = JSON.parse(window.sessionStorage.getItem("arSoldierWalk"))
    arSoldierWalk = new Animate(arSoldierWalk.x, arSoldierWalk.y, arSoldierWalk.anim, arSoldierWalk.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierWalkRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierWalkRunning", true)
        setTimeout(() => {
            arSoldierWalk.anim = arSoldierWalk.getAnim()
            window.sessionStorage.setItem("arSoldierWalk", JSON.stringify(arSoldierWalk))
            window.sessionStorage.setItem("arSoldierWalkRunning", false) 
        }, 200);
    }
}

function whiteCopMaleWalk() {
    var whiteCopMaleWalk = JSON.parse(window.sessionStorage.getItem("whiteCopMaleWalk"))
    whiteCopMaleWalk = new Animate(whiteCopMaleWalk.x, whiteCopMaleWalk.y, whiteCopMaleWalk.anim, whiteCopMaleWalk.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleWalkRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleWalkRunning", true)
        setTimeout(() => {
            whiteCopMaleWalk.anim = whiteCopMaleWalk.getAnim()
            window.sessionStorage.setItem("whiteCopMaleWalk", JSON.stringify(whiteCopMaleWalk))
            window.sessionStorage.setItem("whiteCopMaleWalkRunning", false) 
        }, 200);
    }
}

/////RUN/////
function arSoldierRun() {
    var arSoldierRun = JSON.parse(window.sessionStorage.getItem("arSoldierRun"))
    arSoldierRun = new Animate(arSoldierRun.x, arSoldierRun.y, arSoldierRun.anim, arSoldierRun.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierRunRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierRunRunning", true)
        setTimeout(() => {
            arSoldierRun.anim = arSoldierRun.getAnim()
            window.sessionStorage.setItem("arSoldierRun", JSON.stringify(arSoldierRun))
            window.sessionStorage.setItem("arSoldierRunRunning", false) 
        }, 200);
    }
}

function whiteCopMaleRun() {
    var whiteCopMaleRun = JSON.parse(window.sessionStorage.getItem("whiteCopMaleRun"))
    whiteCopMaleRun = new Animate(whiteCopMaleRun.x, whiteCopMaleRun.y, whiteCopMaleRun.anim, whiteCopMaleRun.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleRunRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleRunRunning", true)
        setTimeout(() => {
            whiteCopMaleRun.anim = whiteCopMaleRun.getAnim()
            window.sessionStorage.setItem("whiteCopMaleRun", JSON.stringify(whiteCopMaleRun))
            window.sessionStorage.setItem("whiteCopMaleRunRunning", false) 
        }, 200);
    }
}
/////SHOOT/////
function arSoldierShoot() {
    var arSoldierShoot = JSON.parse(window.sessionStorage.getItem("arSoldierShoot"))
    arSoldierShoot = new Animate(arSoldierShoot.x, arSoldierShoot.y, arSoldierShoot.anim, arSoldierShoot.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierShootRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierShootRunning", true)
        setTimeout(() => {
            arSoldierShoot.anim = arSoldierShoot.getAnim()
            window.sessionStorage.setItem("arSoldierShoot", JSON.stringify(arSoldierShoot))
            window.sessionStorage.setItem("arSoldierShootRunning", false) 
        }, 200);
    }
}
function whiteCopMaleShoot() {
    var whiteCopMaleShoot = JSON.parse(window.sessionStorage.getItem("whiteCopMaleShoot"))
    whiteCopMaleShoot = new Animate(whiteCopMaleShoot.x, whiteCopMaleShoot.y, whiteCopMaleShoot.anim, whiteCopMaleShoot.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleShootRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleShootRunning", true)
        setTimeout(() => {
            whiteCopMaleShoot.anim = whiteCopMaleShoot.getAnim()
            window.sessionStorage.setItem("whiteCopMaleShoot", JSON.stringify(whiteCopMaleShoot))
            window.sessionStorage.setItem("whiteCopMaleShootRunning", false) 
        }, 200);
    }

}
/////HIPFIRE/////
function arSoldierHipfire() {
    var arSoldierHipfire = JSON.parse(window.sessionStorage.getItem("arSoldierHipfire"))
    arSoldierHipfire = new Animate(arSoldierHipfire.x, arSoldierHipfire.y, arSoldierHipfire.anim, arSoldierHipfire.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierHipfireRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierHipfireRunning", true)
        setTimeout(() => {
            arSoldierHipfire.anim = arSoldierHipfire.getAnim()
            window.sessionStorage.setItem("arSoldierHipfire", JSON.stringify(arSoldierHipfire))
            window.sessionStorage.setItem("arSoldierHipfireRunning", false) 
        }, 200);
    }
}
/////TASER/////
function whiteCopMaleTaser() {
    var whiteCopMaleTaser = JSON.parse(window.sessionStorage.getItem("whiteCopMaleTaser"))
    whiteCopMaleTaser = new Animate(whiteCopMaleTaser.x, whiteCopMaleTaser.y, whiteCopMaleTaser.anim, whiteCopMaleTaser.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleTaserRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleTaserRunning", true)
        setTimeout(() => {
            whiteCopMaleTaser.anim = whiteCopMaleTaser.getAnim()
            window.sessionStorage.setItem("whiteCopMaleTaser", JSON.stringify(whiteCopMaleTaser))
            window.sessionStorage.setItem("whiteCopMaleTaserRunning", false) 
        }, 200);
    }

}
/////RELOADGUN/////
function whiteCopMaleReloadGun() {
    var whiteCopMaleReloadGun = JSON.parse(window.sessionStorage.getItem("whiteCopMaleReloadGun"))
    whiteCopMaleReloadGun = new Animate(whiteCopMaleReloadGun.x, whiteCopMaleReloadGun.y, whiteCopMaleReloadGun.anim, whiteCopMaleReloadGun.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleReloadGunRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleReloadGunRunning", true)
        setTimeout(() => {
            whiteCopMaleReloadGun.anim = whiteCopMaleReloadGun.getAnim()
            window.sessionStorage.setItem("whiteCopMaleReloadGun", JSON.stringify(whiteCopMaleReloadGun))
            window.sessionStorage.setItem("whiteCopMaleReloadGunRunning", false) 
        }, 200);
    }

}
/////RELOADTASER/////
function whiteCopMaleReloadTaser() {
    var whiteCopMaleReloadTaser = JSON.parse(window.sessionStorage.getItem("whiteCopMaleReloadTaser"))
    whiteCopMaleReloadTaser = new Animate(whiteCopMaleReloadTaser.x, whiteCopMaleReloadTaser.y, whiteCopMaleReloadTaser.anim, whiteCopMaleReloadTaser.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleReloadTaserRunning"))
    if(running == false) {
        console.log("Test")
        window.sessionStorage.setItem("whiteCopMaleReloadTaserRunning", true)
        setTimeout(() => {
            whiteCopMaleReloadTaser.anim = whiteCopMaleReloadTaser.getAnim()
            window.sessionStorage.setItem("whiteCopMaleReloadTaser", JSON.stringify(whiteCopMaleReloadTaser))
            window.sessionStorage.setItem("whiteCopMaleReloadTaserRunning", false) 
        }, 200);
    }


}
/////HANG/////
function arSoldierHang() {
    var arSoldierHang = JSON.parse(window.sessionStorage.getItem("arSoldierHang"))
    arSoldierHang = new Animate(arSoldierHang.x, arSoldierHang.y, arSoldierHang.anim, arSoldierHang.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierHangRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierHangRunning", true)
        setTimeout(() => {
            arSoldierHang.anim = arSoldierHang.getAnim()
            window.sessionStorage.setItem("arSoldierHang", JSON.stringify(arSoldierHang))
            window.sessionStorage.setItem("arSoldierHangRunning", false) 
        }, 200);
    }
}
/////JUMP/////
function arSoldierJump() {
    var arSoldierJump = JSON.parse(window.sessionStorage.getItem("arSoldierJump"))
    arSoldierJump = new Animate(arSoldierJump.x, arSoldierJump.y, arSoldierJump.anim, arSoldierJump.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierJumpRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierJumpRunning", true)
        setTimeout(() => {
            arSoldierJump.anim = arSoldierJump.getAnim()
            window.sessionStorage.setItem("arSoldierJump", JSON.stringify(arSoldierJump))
            window.sessionStorage.setItem("arSoldierJumpRunning", false) 
        }, 200);
    }
}

function whiteCopMaleJump() {
    var whiteCopMaleJump = JSON.parse(window.sessionStorage.getItem("whiteCopMaleJump"))
    whiteCopMaleJump = new Animate(whiteCopMaleJump.x, whiteCopMaleJump.y, whiteCopMaleJump.anim, whiteCopMaleJump.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleJumpRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleJumpRunning", true)
        setTimeout(() => {
            whiteCopMaleJump.anim = whiteCopMaleJump.getAnim()
            window.sessionStorage.setItem("whiteCopMaleJump", JSON.stringify(whiteCopMaleJump))
            window.sessionStorage.setItem("whiteCopMaleJumpRunning", false) 
        }, 200);
    }
}
/////HURT/////
function whiteCopMaleHurt() {
    var whiteCopMaleHurt = JSON.parse(window.sessionStorage.getItem("whiteCopMaleHurt"))
    whiteCopMaleHurt = new Animate(whiteCopMaleHurt.x, whiteCopMaleHurt.y, whiteCopMaleHurt.anim, whiteCopMaleHurt.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleHurtRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleHurtRunning", true)
        setTimeout(() => {
            whiteCopMaleHurt.anim = whiteCopMaleHurt.getAnim()
            window.sessionStorage.setItem("whiteCopMaleHurt", JSON.stringify(whiteCopMaleHurt))
            window.sessionStorage.setItem("whiteCopMaleHurtRunning", false) 
        }, 200);
    }
}