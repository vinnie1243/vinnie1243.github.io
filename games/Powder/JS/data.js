function getCatElems(cat) {
    var catEle = {
        "wall": [
            {
                name: "Erase",
                description: "Erases walls",
                id: "erase",
                display: "ERSW"
            },
            {
                name: "ConductiveWall",
                description: "Blocks everything. Conductive",
                id: "conductivewall",
                display: "CNDW"
            },
            {
                name: "Ewall",
                description: "E-wall. Becomes transparent when electricity is connected",
                id: "ewall",
                display: "EWAL"
            },
            {
                name: "Detector",
                description: "Detector. Generates electricty when a particle is inside",
                id: "detector",
                display: "DETE"
            },
            {
                name: "Streamline",
                description: "Streamline. Set start point of a steamline",
                id: "streamline",
                display: "STRL"
            },
            {
                name: "Fan",
                description: "Fan. Accelerates Air. Use the line tool to set direction and strength",
                id: "fan",
                display: "FAN"
            },
            {
                name: "LiquidWall",
                description: "Blocks most particles but lets liquid through. Conductive",
                id: "liquidwall",
                display: "LQDW"
            },
            {
                name: "AbsorbWall",
                description: "Absorbs particles but lets air currents through",
                id: "absorbwall",
                display: "ABSW"
            },
            {
                name: "Wall",
                description: "Basic wall, blocks everything",
                id: "wall",
                display: "WALL"
            },
            {
                name: "AirOnlyWall",
                description: "Allows air, but blocks all particles",
                id: "aironlywall",
                display: "AROW"
            },
            {
                name: "PowderWall",
                description: "Allows powder, but blocks all particles",
                id: "powderwall",
                display: "POWL"
            },
            {
                name: "Conductor",
                description: "Allows all particles to pass through and conducts electricity",
                id: "conductor",
                display: "CNDW"
            },
            {
                name: "EHole",
                description: "E-Hole. Absorbs particles, Releases them when powered",
                id: "ehole",
                display: "EHOL"
            },
            {
                name: "GasWall",
                description: "Allows gases, blocks all other particles",
                id: "gaswall",
                display: "GASW"
            },
            {
                name: "GravityWall",
                description: "Gravity Wall. Newtonian gravity has no effect inside a box drawn with this",
                id: "gravitywall",
                display: "GRAW"
            },
            {
                name: "EnergyWall",
                description: "Allows energy particles, blocks all other particles",
                id: "energywall",
                display: "ENRW"
            },
            {
                name: "AirblockWall",
                description: "Allows all particles, but blocks air",
                id: "airblockwall",
                display: "ABLW"
            },
            {
                name: "Erase All",
                description: "Erases walls, particles, and signs",
                id: "eraseall",
                display: "ERAS"
            },
            {
                name: "StasisWall",
                description: "Stasis Wall. Freezes particles inside the wall in place until powered",
                id: "stasiswall",
                display: "STSW"
            }
        ],
        "electronic": [
            {
                name: "Metal",
                description: "The basic conductor. Meltable",
                id: "metal",
                display: "METL"
            },
            {
                name: "Spark",
                description: "Electricity. The basis of all electronics in PG, travels along wires and other conductive elements",
                id: "spark",
                display: "SPRK"
            },
            {
                name: "PTypeSilicon",
                description: "P-Type Silicon. Will transfer current to any conductor",
                id: "ptypesilicon",
                display: "PSCN"
            },
            {
                name: "NTypeSilicon",
                description: "N-Type Silicon. Will not transfer current to P-Type Silicon",
                id: "ntypesilicon",
                display: "NSCN"
            },
            {
                name: "Insulator", 
                description: "Insulator. does not conduct heat and blocks electricity",
                id: "insulator",
                display: "INSL"
            },
            {
                name: "SemiConductor",
                description: "Semi-Conductor. Only conducts electricity when hot (more than 100C)",
                id: "semiconductorhot",
                display: "NTCT"
            },
            {
                name: "SemiConductor",
                description: "Semi-Conductor. Only conducts electricity when cold (less than 100C)",
                id: "semiconductorcold",
                display: "PTCT"
            },
            {
                name: "Electrode",
                description: "Electrode. Creates a surface that allows Plasma arcs. (Use Sparingly)",
                id: "electrode",
                display: "ETRD"
            },
            {
                name: "Battery",
                description: "Battery. Generates infinite electricity",
                id: "battery",
                display: "BTRY"
            },
            {
                name: "Switch",
                description: "Switch. Only conducts when switched on. (PSCN switches on, NSCN switches off)",
                id: "switch",
                display: "SWCH"
            },
            {
                name: "Insulated Wire",
                description: "Insulated Wire. Dosent conduct to metal or semiconductors",
                id: "insulatedwire",
                display: "INWR"
            },
            {
                name: "Tesla Coil",
                description: "Tesla Coil. Creates lightning when sparked",
                id: "teslacoil",
                display: "TESC"
            },
            {
                name: "Instant Conductor",
                description: "Instantly Conducts, PSCN to charge, NSCN to take",
                id: "instantconductor",
                display: "INST"
            },
            {
                name: "Wireless Transmitter",
                description: "Wireless Transmitter, transfers spark to any other wifi on the same tempature channel",
                id: "wifi",
                display: "WIFI"   
            },
            {
                name: "Ray Emmiter",
                description: "Ray Emmiter, Rays create points when they collide",
                id: "rayemmiter",
                display: "ARAY"
            },
            {
                name: "Electromagenetic Pulse",
                description: "Electromagnetic Pulse, Breaks activated electronics",
                id: "emp",
                display: "EMP"
            },
            {
                name: "WireWorldWires",
                description: "WireWorld Wires, conducts based on a set of GOL like rules",
                id: "wireworldwires",
                display: "WWLD"
            },
            {
                name: "ParticleRayEmmiter",
                description: "Particle Ray Emmiter, Rays create points when they collide",
                id: "particlerayemmiter",
                display: "CRAY"
            },
            {
                name: "Tungsten",
                description: "Tungsten. Brittle metal with a very high melting point",
                id: "tungsten",
                display: "TUNG"
            },
            {
                name: "Duplicator Ray", 
                description: "Duplicator Ray. Replicates a line of particles infront of it",
                id: "duplicatorray",
                display: "DRAY"
            }
        ],
        "powered": [
            {
                name: "LiquidCrystal",
                description: "Liquid Crystal. Changes color when charged. (PSCN charges, NSCN discharges)",
                id: "liquidcrystal",
                display: "LCRY"
            },
            {
                name: "PoweredClone",
                description: "Powered Clone. When Activated, Duplicates any particles it touches",
                id: "poweredclone",
                display: "PCLN"
            },
            {
                name: "HeatSwitch",
                description: "Heat Switch. Conducts heat only when activated",
                id: "heatswitch",
                display: "HSWC"
            },
            {
                name: "Delay",
                description: "Conducts with tempature-dependent delay. (Use HEAT/COOL)",
                id: "delay",
                display: "DLAY"
            },
            {
                name: "Storage",
                description: "Storage. Captures and stores a single particle. Relases when charged with PSCN, also passes to PIPE",
                id: "storage",
                display: "STOR"
            },
            {
                name: "PoweredVoid",
                description: "Powered Void. When activated, destroys entering particles",
                id: "poweredvoid",
                display: "PVOD"
            },
            {
                name: "Pressure Pump",
                description: "Pressure Pump. Changes pressure to its temp when activated. (use HEAT/COOL)",
                id: "pressurepump",
                display: "PUMP"
            },
            {
                name: "PoweredBreakableClone",
                description: "Powered Breakable Clone",
                id: "poweredbreakableclone",
                display: "PBCN"
            },
            {
                name: "GravityPump",
                description: "Gravity Pump. Changes gravity to its temp when activated. (use HEAT/COOL)",
                id: "gravitypump",
                display: "GPMP"
            },
            {
                name: "PoweredPipe",
                description: "Powered version of PIPE, use PSCN/NSCN to activate/deactivate",
                id: "poweredpipe",
                display: "PPIP"
            }
        ],
        "sensor": [
            {
                name: "Invisible",
                description: "Invisible to particle while under pressure",
                id: "invisible",
                display: "INVS"
            },
            {
                name: "Detector",
                description: "Detector. Creates a spark when something with its ctype is nearby",
                id: "detector",
                display: "DTEC"
            },
            {
                name: "TempatureSensor",
                description: "Tempature Sensor. Creates a spark when there's a nearby particle with a greater tempature",
                id: "tempsensor",
                display: "TSNS"
            },
            {
                name: "PressureSensor",
                description: "Pressure Sensor. Creates a spark when the pressure is greater than its tempature",
                id: "pressuresensor",
                display: "PSNS"
            },
            {
                name: "Life Sensor",
                description: "Life Sensor. Creates a spark when there's a nearby particle with a life higher than its tempature",
                id: "lifesensor",
                display: "LSNS"
            },
            {
                name: "Linear Detector",
                description: "Linear Detector. Scans in 8 directions for particles with its ctype and creates a spark on the oppisite side",
                id: "lineardetector",
                display: "LDTC"
            },
            {
                name: "Velocity Sensor",
                description: "Velocity Sensor. Creates a spark when a there's a nearby particle with a velocity higher than its tempature",
                id: "velocitysensor",
                display: "VSNS"
            }
        ],
        "force": [
            {
                name: "Pipe",
                description: "Pipe. moves particles around. Once the BRCK Generates, erase some for the exit. Then the pipe generates and is useable",
                id: "pipe",
                display: "PIPE"
            },
            {
                name: "Accelerator",
                description: "Accelerator, speeds up nearby elements",
                id: "accelerator",
                display: "ACEL"
            },
            {
                name: "Decelerator",
                description: "Decelerator, slows down nearby elements",
                id: "decelerator",
                display: "DCEL"
            },
            {
                name: "GravityBomb",
                description: "Gravity Bomb. Sticks to the first object it touches then produces a strong gravity push",
                id: "gravitybomb",
                display: "GBMB"
            },
            {
                name: "ForceEmitter",
                description: "Force Emitter. Pushes or pulls objects based on its tempature. use like ARAY",
                id: "forceemitter",
                display: "FRAY"
            },
            {
                name: "Magnet",
                description: "Repels or attracts particles based on its tempature",
                id: "magnet",
                display: "REPL"
            },
            {
                name: "Damage",
                description: "Generates damaging pressure and breaks any elements it hits",
                id: "damage",
                display: "DMG"
            },
            {
                name: "Piston",
                description: "Piston. extends and pushes particles",
                id: "piston",
                display: "PSTN"
            },
            {
                name: "Frame",
                description: "Frame. can be used with pistons to push many particles",
                id: "frame",
                display: "FRME"
            }
        ],
        "explosive": [
            {
                name: "Fire",
                description: "Ignites flammable materials. Heats air",
                id: "fire",
                display: "FIRE"
            },
            {
                name: "Gunpowder",
                description: "Gunpowder. Light dust, explodes on contact with fire or spark",
                id: "gunpowder",
                display: "GUN"
            },
            {
                name: "Nitroglycerin",
                description: "Nitroglycerin. Pressure sensitive explosive. Mix with CLST to make TNT",
                id: "nitroglycerin",
                display: "NITR"
            },
            {
                name: "C4",
                description: "Solid pressure sensitive explosive",
                id: "c4",
                display: "C4"
            },
            {
                name: "Rubidium",
                description: "Rubidium. Explosive, especially on contact with water. Low melting point",
                id: "rubidium",
                display: "RBDM"
            },
            {
                name: "LiquidRubidium",
                description: "Liquid Rubidium",
                id: "liquidrubidium",
                display: "LRBD"
            },
            {
                name: "Thunder",
                description: "Lightning! Very hot, inflicts damage upon most materials, and transfers current to metals",
                id: "thunder",
                display: "THDR"
            },
            {
                name: "Thermite",
                description: "Thermite. Burns at extremely high tempature",
                id: "thermite",
                display: "THRM"
            },
            {
                name: "ColdFlame",
                description: "Subzero flame",
                id: "coldflame",
                display: "CFLM"
            },
            {
                name: "Fuse",
                description: "Burns slowly. Ignites at somewhat high tempatures or with electricity",
                id: "fuse",
                display: "FUSE"
            },
            {
                name: "FusePowder",
                description: "Fuse Powder. Burns slowly like FUSE",
                id: "fusepowder",
                display: "FSEP"
            },
            {
                name: "Lightning",
                description: "Lightning. Change the brush size to set the size of the lightning",
                id: "lightning",
                display: "LIGH"
            },
            {
                name: "DestructiveBomb",
                description: "More destructive Bomb, can break through virtually anything",
                id: "destructivebomb",
                display: "DEST"
            },
            {
                name: "Firework",
                description: "Firework. activated by heat/neutrons",
                id: "firework",
                display: "FWRK"
            },
            {
                name: "Bomb",
                description: "Bomb. Explodes and destorys all surrounding particles when it touches something",
                id: "bomb",
                display: "BOMB"
            },
            {
                name: "C5",
                description: "Cold Explosive, set off by anything cold",
                id: "c5",
                display: "C5"
            },
            {
                name: "TNT",
                description: "TNT. Explodes all at once",
                id: "tnt",
                display: "TNT"
            },
            {
                name: "IgnitionCord",
                description: "Ignition Cord. Burns slowly with fire and sparks",
                id: "ignitioncord",
                display: "IGNC"
            },
            {
                name: "Lithium",
                description: "Lithium. Reactive element that explodes on contact with water",
                id: "lithium",
                display: "LITH"
            },
        ],
        "gas": [
            {
                name: "Gasoline",
                description: "Diffuses quickly and is flammable. Liquifes into OIL under pressure",
                id: "gas",
                display: "GAS"
            },
            {
                name: "Steam",
                description: "Steam. Produced from hot water",
                id: "steam",
                display: "WTRV"
            },
            {
                name: "Plasma",
                description: "Plasma. Extremely hot",
                id: "plasma",
                display: "PLSM"
            },
            {
                name: "NobleGas",
                description: "Noble Gas. Diffuses and conductive. Ionises into plasma when introduced to electricity",
                id: "noble",
                display: "NBLE"
            },
            {
                name: "Smoke",
                description: "Smoke. Created by fire",
                id: "smoke",
                display: "SMKE"
            },
            {
                name: "Oxygen",
                description: "Oxygen gas. Ignites easily",
                id: "oxygen",
                display: "OXYG"
            },
            {
                name: "CarbonDioxide",
                description: "Carbon Dioxide. Heavy gas, drifts downwards. Carbonates water and turns into dry ice when cold",
                id: "carbon",
                display: "CO2"
            },
            {
                name: "CausticGas",
                description: "Caustic Gas, acts like ACID",
                id: "caustic",
                display: "CAUS"
            },
            {
                name: "Fog",
                description: "Fog, created when an electric current is passed through RIME",
                id: "fog",
                display: "FOG"
            },
            {
                name: "Boyle",
                description: "Boyle, varible pressure gas. Expands when heated",
                id: "boyle",
                display: "BOYL"
            },
            {
                name: "Hydrogen",
                description: "Hydrogen. Combusts with OXYG to make WATR. Undergoes fusion at high tempatures and pressure",
                id: "hydrogen",
                display: "HYGN"
            },
            {
                name: "Refrigerant", 
                description: "Refrigerant. Heats up and liquefies under pressure",
                id: "refrigerant",
                display: "RFRG"
            },
        ],
        "liquid": [
            {
                name: "Water",
                description: "Water. Conducts electricity, freezes, and extinguishes fires",
                id: "water",
                display: "WATR"
            },
            {
                name: "Oil",
                description: "Flammable, turns into GAS at low pressure or high tempature",
                id: "oil",
                display: "OIL"
            },
            {
                name: "Lava",
                description: "Molten Lava. Ignites flammable materials. Generated when metals and other materials melt, solidifies when cold",
                id: "lava",
                display: "LAVA"
            },
            {
                name: "Acid",
                description: "Dissolves almost everything",
                id: "acid",
                display: "ACID"
            },
            {
                name: "DistilledWater",
                description: "Distilled water, does not conduct electricity",
                id: "distilledwater",
                display: "DSTW"
            },  
            {
                name: "SaltWater",
                description: "Saltwater, conducts electricity, difficult to freeze",
                id: "saltwater",
                display: "SLTW"
            },
            {
                name: "MoltenWax",
                description: "Liquid Wax. Hardens into WAX at 45 degrees",
                id: "moltenwax",
                display: "MWAX"
            },
            {
                name: "LiquidNitrogen",
                description: "Liquid Nitrogen. Very cold, disappears whenever it touches anything warmer",
                id: "liquidnitrogen",
                display: "LN2"
            },
            {
                name: "Diesel",
                description: "Liquid Diesel. Explodes under high pressure and tempatures",
                id: "diesel",
                display: "DESL"
            },
            {
                name: "LiquidOxygen",
                description: "Liquid Oxygen. Very cold. Reacts with fire",
                id: "liquidoxygen",
                display: "LOXY"
            },
            {
                name: "Glow",
                description: "Glow, Glows under pressure",
                id: "glow",
                display: "GLOW"
            },
            {
                name: "CarbonatedWater",
                description: "Carbonated Water. Slowly releases CO2",
                id: "carbonatedwater",
                display: "BUBW"
            },
            {
                name: "Bizarre",
                description: "Bizarre... contradicts the normal state changes. Paints other elements with its deco color",
                id: "bizarre",
                display: "BIZR"
            },
            {
                name: "Paste",
                description: "Colloid, Hardens under pressure",
                id: "paste",
                display: "PSTE"
            },
            {
                name: "Gel",
                description: "Gel. A liquid with variable viscosity and heat conductivity",
                id: "gel",
                display: "GEL"
            },
            {
                name: "Soap",
                description: "Soap. Creates bubbles, washes off deco color, and cures virus",
                id: "soap",
                display: "SOAP"
            },
            {
                name: "Mercury",
                description: "Mercury. Volume changes with tempature, Conductive",
                id: "mercury",
                display: "MERC"
            },
            {
                name: "Virus",
                description: "Virus. Turns everything it touches into virus",
                id: "virus",
                display: "VIRS"
            },
            {
                name: "GreyGoo",
                description: "Grey goo. Nanorobots that turn everything into grey goo",
                id: "greygoo",
                display: "GGOO"
            },
            {
                name: "RedGoo",
                description: "Red goo. Nanorobots that turn everything into red goo spicy edition",
                id: "redgoo",
                display: "RGOO"
            },
            {
                name: "Resist",
                description: "Resist. Solidifies on contact with photons, is destroyed by electrons and spark",
                id: "resist",
                display: "RSST"
            },
        ],
        "powder": [
            {
                name: "Dust",
                description: "Very light dust. Flammable",
                id: "dust",
                display: "DUST"
            },
            {
                name: "Stone",
                description: "Heavy particles. Meltable",
                id: "stone",
                display: "STNE"
            },
            {
                name: "Snow",
                description: "Light particles. Created when ICE breaks under pressure",
                id: "snow",
                display: "SNOW"
            },
            {
                name: "Concrete",
                description: "Concrete. Stronger than stone",
                id: "concrete",
                display: "CNCT"
            },
            {
                name: "Salt",
                description: "Salt, dissolves in water",
                id: "salt",
                display: "SALT"
            },
            {
                name: "BrokenMetal",
                description: "Broken metal. Created when iron rusts or when metals break from pressure",
                id: "brokenmetal",
                display: "BRMT"
            },
            {
                name: "Sand",
                description: "Sand, heavy particles. Melts into glass",
                id: "sand",
                display: "SAND"
            },
            {
                name: "BrokenGlass",
                description: "Broken Glass, heavy particles formed when glass breaks under pressure. Meltable. Bagles",
                id: "brokenglass",
                display: "BGLA"
            },
            {
                name: "Yeast",
                description: "Yeast, grows when warm (~37C)",
                id: "yeast",
                display: "YEST"
            },
            {
                name: "BrokenCoal",
                description: "Broken Coal. Heavy particles, burns slowly",
                id: "brokencoal",
                display: "BCOL"
            },
            {
                name: "FreezePowder",
                description: "Freeze powder. When melted, forms ice that always cools. spreads with regular water",
                id: "freezepowder",
                display: "FRZZ"
            },
            {
                name: "GravityDust",
                description: "Very light dust. Changes color based on velocity",
                id: "gravitydust",
                display: "GRAV"
            },
            {
                name: "AntiAir",
                description: "Anti-Air. Very light dust, which behaves oppisite gravity",
                id: "antiair",
                display: "ANAR"
            },
            {
                name: "PowderedQuartz",
                description: "Powdered Quartz, broken form of QRTZ",
                id: "powderedquartz",
                display: "PQRT"
            },
            {
                name: "BrokenElectronics",
                description: "Broken Electronics. Formed from EMP blasts, and when constatly sparked while under pressure, turns into exot",
                id: "brokenelectronics",
                display: "BREL"
            },
            {
                name: "ClayDust",
                description: "Clay dust. Produces paste when mixed with water",
                id: "claydust",
                display: "CLST"
            },
            {
                name: "Sawdust",
                description: "Sawdust. Floats on water",
                id: "sawdust",
                display: "SAWD"
            },
            {
                name: "PowderedSilicon",
                description: "Powdered Silicon. A key ingredient in producing multiple materials",
                id: "powderedsilicon",
                display: "SLCN"
            },
        ],
        "solid": [
            {
                name: "Goo",
                description: "Deforms and disappers under pressure",
                id: "goo",
                display: "GOO"
            },
            {
                name: "Ice",
                description: "Crushes under pressure. Cools down air",
                id: "ice",
                display: "ICE"
            },
            {
                name: "wood",
                description: "Wood, flammable",
                id: "wood",
                display: "WOOD"
            },
            {
                name: "Plant",
                description: "Plant, drinks water and grows",
                id: "plant",
                display: "PLANT"
            },
            {
                name: "BreakableMetal",
                description: "Breakable metal. Common conductive building material, can melt and break under pressure",
                id: "breakablemetal",
                display: "BMTL"
            },
            {
                name: "Wax",
                description: "Wax. Melts at moderatly high tempatures",
                id: "wax",
                display: "WAX"
            },
            {
                name: "Glass",
                description: "Glass. Meltable. Shatters under pressure, and refracts photons",
                id: "glass",
                display: "GLAS"
            },
            {
                name: "NitrogenIce",
                description: "Nitrogen Ice. Very cold, will melt into LN2 when heated only slightly",
                id: "nitrogenice",
                display: "NICE"
            },
            {
                name: "Coal",
                description: "Coal, Burns very slowly. Gets red when hot",
                id: "coal",
                display: "COAL"
            },
            {
                name: "Brick",
                description: "Brick, breakable building material",
                id: "brick",
                display: "BRCK"
            },
            {
                name: "Iron",
                description: "Rusts with salt, can be used for electrolysis of water",
                id: "iron",
                display: "IRON"
            },
            {
                name: "DtyIce",
                description: "Dry Ice, formed when CO2 is cooled",
                id: "dryice",
                display: "DRIC"
            },
            {
                name: "Sponge",
                description: "Sponge, absorbs water. Is not a moving solid",
                id: "sponge",
                display: "SPNG"
            },
            {
                name: "Rime",
                description: "Solid, created when steam cools rapidly and goes through deposition, skipping the liquid phase",
                id: "rime",
                display: "RIME"
            },
            {
                name: "Vine",
                description: "Vine, can grow along WOOD",
                id: "vine",
                display: "VINE"
            },
            {
                name: "Shield",
                description: "Shield, spark it to grow",
                id: "shield",
                display: "SHLD"
            },
            {
                name: "Filter",
                description: "Filter for photons, changes the color",
                id: "filter",
                display: "FILT"
            },
            {
                name: "Quartz",
                description: "Quartz, breakable mineral. Conducts but becomes brittle at lower tempatures",
                id: "quartz",
                display: "QRTZ"
            },
            {
                name: "Titanium",
                description: "Titanium, Higher melting tempature then most other metals, blocks all air pressure",
                id: "titanium",
                display: "TTAN"
            },
            {
                name: "Gold",
                description: "Corrosion resistant metal, will reverse corrosion of iron",
                id: "gold",
                display: "GOLD"
            },
            {
                name: "Ceramic",
                description: "Ceramic. Gets stronger under pressure",
                id: "ceramic",
                display: "CRMC"
            },
            {
                name: "HeatConductor",
                description: "Rapid heat conductor",
                id: "heatconductor",
                display: "HEAC"
            },
            {
                name: "Platinum",
                description: "Platinum. Catalyzes certian reactions",
                id: "platinum",
                display: "PTNM"
            },
            {
                name: "Rock",
                description: "Rock. Solid material, CNCT can stack on top of it",
                id: "rock",
                display: "ROCK"
            },
            {
                name: "SolidifiedResist",
                description: "Solidified Resist. Blocks pressure and insulates electricity. Liquifies on contact with neutrons",
                id: "solidifiedresist",
                display: "RSSS"
            },
            {
                name: "Graphene",
                description: "Graphene, a strong and light material with high conductivity",
                id: "graphene",
                display: "GRAP"
            },
            {
                name: "EnergyTransfer",
                description: "Energy Transfer. Takes energy from above, and dumps it below. Extremely dangerous",
                id: "energytransfer",
                display: "ETRN"
            },
        ],
        "radioactive": [
            {
                name: "Neutron",
                description: "Neutrons. Interact with matter in odd ways",
                id: "neutron",
                display: "NEUT"
            },
            {
                name: "Plutonium",
                description: "Plutonium. Heavy, fissile particles. Generates neutrons under pressure",
                id: "plutonium",
                display: "PLUT"
            },
            {
                name: "Photons",
                description: "Photons. Refracts through glass, scattered by quartz, and color-changed by different elements. ignites flammable materials",
                id: "photons",
                display: "PHOT"
            },
            {
                name: "Uranium",
                description: "Uranium. Heavy particles. Generates heat under pressure",
                id: "uranium",
                display: "URAN"
            },
            {
                name: "Anitmatter",
                description: "Anti-Matter, destroys a majority of particles",
                id: "antimatter",
                display: "AMTR"
            },
            {
                name: "Deuterium",
                description: "Deuterium oxide. Volume changes with temp, radioactice with neutrons",
                id: "deuterium",
                display: "DEUT"
            },
            {
                name: "Warp",
                description: "Displaces other elements",
                id: "warp",
                display: "WARP"
            },
            {
                name: "IsotopeZLiquid",
                description: "Isotope-Z Radioactive liquid, decays into photons when touching PHOT or under negative pressure",
                id: "isotopezliquid",
                display: "ISOZ"
            },
            {
                name: "IsotopeZ",
                description: "Solid form of ISOZ, Slowly decays into PHOT",
                id: "isotopez",
                display: "ISZS"
            },
            {
                name: "Singularity",
                description: "Singularity. Creates huge ammounts of negative pressure and destroys everything",
                id: "singularity",
                display: "SING"
            },
            {
                name: "Electron",
                description: "Electrons. Sparks electronics,  reacts with NEUT and WATR",
                id: "electron",
                display: "ELEC"
            },
            {
                name: "Exotic",
                description: "Exotic matter. Explodes with excess exposure to electrons. has many other odd reactions",
                id: "exotic",
                display: "EXOT"
            },
            {
                name: "Vibranium",
                description: "Vibranium. Stores energy and relases it in violent explosions",
                id: "vibranium",
                display: "VIBR"
            },
            {
                name: "BrokenVibranium",
                description: "Broken vibranium",
                id: "brokenvibranium",
                display: "BVBR"
            },
            {
                name: "Proton",
                description: "Protons. Transfer heat to materials, and removes sparks",
                id: "proton",
                display: "PROT"
            },
            {
                name: "Graviton",
                description: "Graviton. Create Newtonian Gravity",
                id: "graviton",
                display: "GRVT"
            },
            {
                name: "Polonium",
                description: "Polonium, highly radioactive. Decays into NEUT and heats up",
                id: "polonium",
                display: "POLO"
            },
            {
                name: "Thorium",
                description: "Thorium. Heavy. Produces heat when struck by Neutrons",
                id: "thorium",
                display: "THOR"
            },
            {
                name: "Nihonium",
                description: "Nihonium. Extremly unstable. Generates heat",
                id: "nihonium",
                display: "NIH"
            },
            {
                name: "MoltenNihonium",
                description: "Molten Nihonium. Extremely unstable. Generates heat",
                id: "moltennihonium",
                display: "NIHM"
            },
        ],
        "biology": [
            {
                name: "Blood",
                description: "Blood. Absorbs oxygen and transfers it to other living pixels",
                id: "blood",
                display: "BLD"
            },
            {
                name: "DeadTissue",
                description: "Dead Tissue. Yuck",
                id: "deadtissue",
                display: "DT"
            },
            {
                name: "Lung",
                description: "Lung prefoms gas exchange with Blood (BLD)",
                id: "lung",
                display: "LUNG"
            },
            {
                name: "Meat",
                description: "Meat. Basic biological material",
                id: "meat",
                display: "MEAT"
            },
            {
                name: "BloodVessel",
                description: "Blood vessel. Use like PIPE, it will carry blood and distribute oxygen",
                id: "bloodvessel",
                display: "BVES"
            },
            {
                name: "Epidermis",
                description: "The Epidermis. The outermost layer of skin",
                id: "epidermis",
                display: "SKNE"
            },
            {
                name: "Dermis",
                description: "The Dermis. The middle layer of skin",
                id: "dermis",
                display: "SKND"
            },
            {
                name: "Subcutaneous",
                description: "The subcutaneous layer. The bottom layer of skin",
                id: "subcutaneous",
                display: "SKNS"
            },
            {
                name: "Tumor",
                description: "Tumor. Certian death/blobification for biology",
                id: "tumor",
                display: "TUMR"
            },
            {
                name: "Poison",
                description: "Poison. Cytotoxic sludge that kills tissue",
                id: "poison",
                display: "PSN"
            },
        ],
        "special": [
            {
                name: "",
                description: "",
                id: "",
                display: ""
            },
        ],
        "gol": [
            {
                name: "",
                description: "",
                id: "",
                display: ""
            },
        ],
        "tool": [
            {
                name: "",
                description: "",
                id: "",
                display: ""
            },
        ],
    }
    return catEle[cat];     
}