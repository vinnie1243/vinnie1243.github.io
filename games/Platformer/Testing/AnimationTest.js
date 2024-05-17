function main() {
    var canvas = document.getElementById("playarea")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    setVals()
    setInterval(() => {
        loop()
    }, 16.6);
    //arSoldier
    window.sessionStorage.setItem("arSoldierIdleRunning", false)
    window.sessionStorage.setItem("arSoldierWalkRunning", false)
    window.sessionStorage.setItem("arSoldierRunRunning", false)
    window.sessionStorage.setItem("arSoldierHipfireRunning", false)
    window.sessionStorage.setItem("arSoldierHangRunning", false)
    window.sessionStorage.setItem("arSoldierShootRunning", false)
    //whiteCopMale
    window.sessionStorage.setItem("whiteCopMaleIdleRunning", false)
    window.sessionStorage.setItem("whiteCopMaleWalkRunning", false)
    window.sessionStorage.setItem("whiteCopMaleRunRunning", false)
    window.sessionStorage.setItem("whiteCopMaleJumpRunning", false)
    window.sessionStorage.setItem("whiteCopMaleShootRunning", false)
    window.sessionStorage.setItem("whiteCopMaleTaserRunning", false)
    window.sessionStorage.setItem("whiteCopMaleReloadGunRunning", false)
    window.sessionStorage.setItem("whiteCopMaleReloadTaserRunning", false)
    window.sessionStorage.setItem("whiteCopMaleHurtRunning", false)
    //zombieThree
    window.sessionStorage.setItem("zombieThreeIdleRunning", false)
}

function setVals() {
    //arSoldier
    window.sessionStorage.setItem("arSoldierIdle", JSON.stringify({x: 60, y: 5, anim: "arSoldierIdle1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierWalk", JSON.stringify({x: 95, y: 5, anim: "arSoldierWalk1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierRun", JSON.stringify({x: 125, y: 5, anim: "arSoldierRun1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierHipfire", JSON.stringify({x: 160, y: 5, anim: "arSoldierHipfire1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierHang", JSON.stringify({x: 210, y: 5, anim: "arSoldierHang1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierShoot", JSON.stringify({x: 230, y: 5, anim: "arSoldierShoot1", size: 0.5}))
    //whiteCopMale
    window.sessionStorage.setItem("whiteCopMaleIdle", JSON.stringify({x: 85, y: 70, anim: "whiteCopMaleIdle1", size: 0.5}))
    window.sessionStorage.setItem("whiteCopMaleWalk", JSON.stringify({x: 110, y: 70, anim: "whiteCopMaleWalk1", size: 0.5}))
    window.sessionStorage.setItem("whiteCopMaleRun", JSON.stringify({x: 130, y: 70, anim: "whiteCopMaleRun1", size: 0.5}))
    window.sessionStorage.setItem("whiteCopMaleJump", JSON.stringify({x: 160, y: 70, anim: "whiteCopMaleJump1", size: 0.5}))
    window.sessionStorage.setItem("whiteCopMaleShoot", JSON.stringify({x: 190, y: 70, anim: "whiteCopMaleShoot1", size: 0.5}))
    window.sessionStorage.setItem("whiteCopMaleTaser", JSON.stringify({x: 220, y: 70, anim: "whiteCopMaleTaser1", size: 0.5}))
    window.sessionStorage.setItem("whiteCopMaleReloadGun", JSON.stringify({x: 310, y: 70, anim: "whiteCopMaleReloadGun1", size: 0.5}))
    window.sessionStorage.setItem("whiteCopMaleReloadTaser", JSON.stringify({x: 340, y: 70, anim: "whiteCopMaleReloadTaser1", size: 0.5}))
    window.sessionStorage.setItem("whiteCopMaleHurt", JSON.stringify({x: 370, y: 70, anim: "whiteCopMaleHurt1", size: 2}))
    //zombieThree
    window.sessionStorage.setItem("zombieThreeIdle", JSON.stringify({x: 80, y: 135, anim: "zombieThreeIdle1", size: 0.5}))
}

function loop() {
    clearBoard()
    //arSoldier
    drawText("arSoldier", 4, 30)
    arSoldierIdle()
    arSoldierWalk()
    arSoldierRun()
    arSoldierHipfire()
    arSoldierHang()
    arSoldierShoot()
    //whiteCopMale
    drawText("whiteCopMale", 4, 96)
    whiteCopMaleIdle()
    whiteCopMaleWalk()
    whiteCopMaleRun()
    whiteCopMaleJump()
    whiteCopMaleShoot()
    whiteCopMaleTaser()
    whiteCopMaleReloadGun() 
    whiteCopMaleReloadTaser()
    whiteCopMaleHurt()
    //zombieThree
    drawText("zombieThree", 4, 162)
    zombieThreeIdle()
    display()
}

function drawText(text, x, y) {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.fontsize = "1px"
    ctx.font = "12px Arial";
    ctx.fillText(text, x, y);
}

function display() {
    //arSoldier
    var arSoldierIdle = JSON.parse(window.sessionStorage.getItem("arSoldierIdle"))
    var arSoldierWalk = JSON.parse(window.sessionStorage.getItem("arSoldierWalk"))
    var arSoldierRun = JSON.parse(window.sessionStorage.getItem("arSoldierRun"))
    var arSoldierHipfire = JSON.parse(window.sessionStorage.getItem("arSoldierHipfire"))
    var arSoldierHang = JSON.parse(window.sessionStorage.getItem("arSoldierHang"))
    var arSoldierShoot = JSON.parse(window.sessionStorage.getItem("arSoldierShoot"))
    //whiteCopMale
    var whiteCopMaleIdle = JSON.parse(window.sessionStorage.getItem("whiteCopMaleIdle"))
    var whiteCopMaleWalk = JSON.parse(window.sessionStorage.getItem("whiteCopMaleWalk"))
    var whiteCopMaleRun = JSON.parse(window.sessionStorage.getItem("whiteCopMaleRun"))
    var whiteCopMaleJump = JSON.parse(window.sessionStorage.getItem("whiteCopMaleJump"))
    var whiteCopMaleShoot = JSON.parse(window.sessionStorage.getItem("whiteCopMaleShoot"))
    var whiteCopMaleTaser = JSON.parse(window.sessionStorage.getItem("whiteCopMaleTaser"))
    var whiteCopMaleReloadGun = JSON.parse(window.sessionStorage.getItem("whiteCopMaleReloadGun"))
    var whiteCopMaleReloadTaser = JSON.parse(window.sessionStorage.getItem("whiteCopMaleReloadTaser"))
    var whiteCopMaleHurt = JSON.parse(window.sessionStorage.getItem("whiteCopMaleHurt"))
    //zombieThree
    var zombieThreeIdle = JSON.parse(window.sessionStorage.getItem("zombieThreeIdle"))
    //arSoldier
    displayAnimation(arSoldierIdle.anim, arSoldierIdle.x, arSoldierIdle.y, arSoldierIdle.size)
    displayAnimation(arSoldierWalk.anim, arSoldierWalk.x, arSoldierWalk.y, arSoldierWalk.size)
    displayAnimation(arSoldierRun.anim, arSoldierRun.x, arSoldierRun.y, arSoldierRun.size)
    displayAnimation(arSoldierHipfire.anim, arSoldierHipfire.x, arSoldierHipfire.y, arSoldierHipfire.size)
    displayAnimation(arSoldierHang.anim, arSoldierHang.x, arSoldierHang.y, arSoldierHang.size)
    displayAnimation(arSoldierShoot.anim, arSoldierShoot.x, arSoldierShoot.y, arSoldierShoot.size)
    //whiteCopMale
    displayAnimation(whiteCopMaleIdle.anim, whiteCopMaleIdle.x, whiteCopMaleIdle.y, whiteCopMaleIdle.size)
    displayAnimation(whiteCopMaleWalk.anim, whiteCopMaleWalk.x, whiteCopMaleWalk.y, whiteCopMaleWalk.size)
    displayAnimation(whiteCopMaleRun.anim, whiteCopMaleRun.x, whiteCopMaleRun.y, whiteCopMaleRun.size)
    displayAnimation(whiteCopMaleJump.anim, whiteCopMaleJump.x, whiteCopMaleJump.y, whiteCopMaleJump.size)
    displayAnimation(whiteCopMaleShoot.anim, whiteCopMaleShoot.x, whiteCopMaleShoot.y, whiteCopMaleShoot.size)
    displayAnimation(whiteCopMaleTaser.anim, whiteCopMaleTaser.x, whiteCopMaleTaser.y, whiteCopMaleTaser.size)
    displayAnimation(whiteCopMaleReloadGun.anim, whiteCopMaleReloadGun.x, whiteCopMaleReloadGun.y, whiteCopMaleReloadGun.size)
    displayAnimation(whiteCopMaleReloadTaser.anim, whiteCopMaleReloadTaser.x, whiteCopMaleReloadTaser.y, whiteCopMaleReloadTaser.size)
    displayAnimation(whiteCopMaleHurt.anim, whiteCopMaleHurt.x, whiteCopMaleHurt.y, whiteCopMaleHurt.size)
    //zombieThree
    displayAnimation(zombieThreeIdle.anim, zombieThreeIdle.x, zombieThreeIdle.y, zombieThreeIdle.size)
}

function displayAnimation(anim, x, y, size) {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')
    var img = document.getElementById("spritesheet")
    ctx.drawImage(img, getAnimData(anim, "sx"), getAnimData(anim, "sy"), getAnimData(anim, "width"), getAnimData(anim, "height"), x, y, getAnimData(anim, "width") * size, getAnimData(anim, "height") * size)
}

function clearBoard() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.reset()
}

class Animate {
    constructor(x, y, anim, size) {
        this.x = x
        this.y = y
        this.anim = anim
        this.size = size
    }

    getAnim() {
        //idle
        if(this.anim.includes("Idle")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle2" 
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle2"
                } else if(this.anim.includes("zombieThree")) {
                    this.anim = "zombieThreeIdle2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle3"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle3"
                } else if(this.anim.includes("zombieThree")) {
                    this.anim = "zombieThreeIdle3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle4"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle4"
                } else if(this.anim.includes("zombieThree")) {
                    this.anim = "zombieThreeIdle4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle5"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle5"
                } else if(this.anim.includes("zombieThree")) { 
                    this.anim = "zombieThreeIdle5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle6"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle6"
                } else if(this.anim.includes("zombieThree")) { 
                    this.anim = "zombieThreeIdle6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle7"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle1"
                } else if(this.anim.includes("zombieThree")) { 
                    this.anim = "zombieThreeIdle7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle1"
                } else if(this.anim.includes("whiteCopMale")) {
                    console.error("Error impossible animation")
                } else if(this.anim.includes("zombieThree")) { 
                    this.anim = "zombieThreeIdle8"
                }
            } else if(this.anim.includes("8")) {
                if(this.anim.includes("arSoldier")) {
                    console.error("Error impossible animation")
                } else if(this.anim.includes("whiteCopMale")) {
                    console.error("Error impossible animation")
                } else if(this.anim.includes("zombieThree")) { 
                    this.anim = "zombieThreeIdle1"
                }
            
            }
        }
        //walk
        if(this.anim.includes("Walk")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk2"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleWalk2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk3"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleWalk3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk4"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleWalk4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk5"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleWalk5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk6"
                } else if(this.anim.includes("whiteCopMale")) { 
                    this.anim = "whiteCopMaleWalk6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk7"
                } else if(this.anim.includes("whiteCopMale")) { 
                    this.anim = "whiteCopMaleWalk7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk1"
                } else if(this.anim.includes("whiteCopMale")) { 
                    this.anim = "whiteCopMaleWalk8"
                }
            } else if(this.anim.includes("8")) {
                if(this.anim.includes("arSoldier")) {
                    console.error("Error impossible animation")
                } else if(this.anim.includes("whiteCopMale")) { 
                    this.anim = "whiteCopMaleWalk1"
                }
            }
        }
        //run
        if(this.anim.includes("Run")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun2"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleRun2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun3"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleRun3"
                }  
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun4"
                } else if(this.anim.includes("whiteCopMale")) { 
                    this.anim = "whiteCopMaleRun4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun5"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleRun5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun6"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleRun6"
                }   
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun7"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleRun7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun8"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleRun8"
                }
            } else if(this.anim.includes("8")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun1"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleRun1"
                }
            }
        }
        //hipfire
        if(this.anim.includes("Hipfire")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHipfire2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHipfire3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHipfire4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHipfire1"
                }
            }
        }
        //taser
        if(this.anim.includes("Taser") && this.anim.includes("Reload") == false) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleTaser2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleTaser3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleTaser4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleTaser5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleTaser6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleTaser7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleTaser1"
                }
            }
        }
        //hang
        if(this.anim.includes("Hang")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang1"
                }
            }
        }
        //shoot
        if(this.anim.includes("Shoot")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierShoot2"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleShoot2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierShoot3"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleShoot3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierShoot4"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleShoot4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierShoot1"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleShoot1"
                }
            }
        }
        //jump
        if(this.anim.includes("Jump")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierJump2"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleJump2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierJump3"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleJump3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierJump4"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleJump4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierJump5"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleJump5"
                } 
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierJump6"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleJump6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierJump1"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleJump7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("arSoldier")) {
                    console.error("Error impossible animation")
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleJump8"
                }
            } else if(this.anim.includes("8")) {
                if(this.anim.includes("arSoldier")) {
                    console.error("Error impossible animation")
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleJump1"
                }
            }
        }
        //reloadgun
        if(this.anim.includes("ReloadGun")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadGun2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadGun3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadGun4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadGun5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadGun6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadGun7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadGun8"
                }
            } else if(this.anim.includes("8")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadGun1"
                }
            }
        }
        //reloadtaser
        if(this.anim.includes("ReloadTaser")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadTaser2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadTaser3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadTaser4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadTaser5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadTaser6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadTaser7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadTaser8"
                }
            } else if(this.anim.includes("8")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleReloadTaser1"
                }
            }
        }
        //hurt
        if(this.anim.includes("Hurt")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleHurt2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleHurt3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleHurt3"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleHurt1"
                }
            }
        }
        return this.anim
    }
} 