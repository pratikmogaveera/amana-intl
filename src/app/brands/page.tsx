import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Brands - Amana International Industrial Company",
};

const page = () => {
    const brands = [
        { img: "abb.webp", name: "ABB", products: "Suction Cups - metal detectable/x-ray visible, Retaining Clips for Vacuum Depanner Belts…" },
        { img: "allen_bradley.webp", name: "Allen-Bradley", products: "PLC, HMIs, sensors, safety components and systems, software, drive systems, contactors, motor control centers..." },
        { img: "alpha_wittenstein.webp", name: "Alpha Wittenstein", products: "Low backlash planetary gearheads, servo-right-angle gearheads, mechanical systems…" },
        { img: "aron.webp", name: "Aron", products: "Directional control, pressure control, flow control, modular valves and cartridge valves…" },
        { img: "baldor.webp", name: "Baldor", products: "AC controls, electric motors, bearings, servo motors, power transmission, industrial generators…" },
        { img: "beta.webp", name: "Beta", products: "Plumbing tools, vehicle and body repair tools, building tools, pneumatic tools, safety footwear…" },
        { img: "bonfiglioli.webp", name: "Bonfiglioli", products: "Speed Reducers, Fixed Speed Gearmotors, Electric Motors, Electric Drives, Gearboxes…" },
        { img: "brevini.webp", name: "Brevini", products: "Industrial gearboxes, slewing drives, hoisting winches, helical gearmotors, slewing rings…" },
        { img: "bst.webp", name: "BST", products: "Suction Cups - metal detectable/x-ray visible, Retaining Clips for Vacuum Depanner Belts…" },
        { img: "cemp.webp", name: "CEMP", products: "Flameproof eex-d motors, flameproof brake motors, flameproof eex-d pumps, immersion pumps… " },
        { img: "chiaravalli.webp", name: "Chiaravalli", products: "Power transmission components as sprockets, gears, bevel gears, pulleys, couplings, clamping…" },
        { img: "chiorino.webp", name: "Chiorino", products: "Conveyor and process belts, flat transmission belts, rubber aprons, roller coverings…" },
        { img: "comintec.webp", name: "Comintec", products: "Mechanic transmission components, torque limiters, pneumatic clutches, couplings, adjustable pulleys…" },
        { img: "control_techniques.webp", name: "Control Techniques", products: "AC drives, servo drives, DC drives, AC, DC and servo motors, drive options, drive systems…" },
        { img: "danaher.webp", name: "Danaher", products: "Motion and product identification. three niche businesses; aerospace and defense, power quality…" },
        { img: "debem.webp", name: "Debem", products: "Industrial pumps, air-operated double-diaphragm pumps, horizontal centrifugal pumps, vertical… " },
        { img: "deca.webp", name: "Deca", products: "Gear drives, motors, brakemotors, gearmotors, drive electronics, frequency inverters…" },
        { img: "dodgepng.webp", name: "Dodge", products: "Bearings, mounted ball bearings, gear reducers, gearing, pt components, catalogues…" },
        { img: "eagleburgmann.webp", name: "EagleBurgmann", products: "Mechanical seals, seal supply systems, carbon floating ring seals, compression packings and gaskets…" },
        { img: "effebi_valvole.webp", name: "Effebi Valvole", products: "Ball valves for drinkable, ball valves for fluids, manifold ball valves, ball valves for gas…" },
        { img: "fluid_power.webp", name: "Fluid Power", products: "Check valves, idrja check valves, ball valves, filters manifolds, power transmission, power units…" },
        { img: "fluorseals.webp", name: "Fluorseals", products: "The molecular structure of PTFE is similar to a long chain of carbon atoms, in industrial field…" },
        { img: "freudenberg_simrit.webp", name: "Freudenberg Simrit", products: "Gaskets, magnetic fluid seals, mechanical face seals, metal bellows, polyurethane o-rings…" },
        { img: "fuji-electric.webp", name: "Fuji Electric", products: "Motor controls, manual motor starters, case circuit breakers, blowers and pumps, ac drives…" },
        { img: "garlock.webp", name: "Garlock", products: "Sealing technologies, sealing concept, metal e-rings, seals, helicoflex, metal o-rings…" },
        { img: "gates.webp", name: "Gates", products: "Power transmission belts, synchronous belts, pulleys & sprockets, hydraulic hoses…" },
        { img: "grundfos.webp", name: "Grundfos", products: "Pumps, wastewater pumps, water supply pumps, high efficiency in-line pumps, pumping stations…" },
        { img: "hiwin.webp", name: "Hiwin", products: "Ballscrews, linear motors, linear stages, linear actuators, linear guideways, single axis…" },
        { img: "hydr_app.webp", name: "Hydr App", products: "Micro power packs group 05 pumps, reversible power pack, mini power packs group 1 pumps…" },
        { img: "intralox.webp", name: "Intralox", products: "All types of modular plastic conveyor belts and related services components..." },
        { img: "italvibras.webp", name: "Italvibras", products: "Electric vibrators, foot mounted electric vibrators, flanged electric vibrators, high-frequency…" },
        { img: "ksb.webp", name: "KSB", products: "Pumps and pump systems for any kind of application, mixers, agitators, valves, valve actuators…" },
        { img: "lenze.webp", name: "Lenze", products: "Speed Reducers, Fixed Speed Gearmotors, Electric Motors, Electric Drives, Gearboxes…" },
        { img: "marbett.webp", name: "Marbett", products: "Chains Thermoplastic, Conveyor Components, Supporting and Levelling Elements, Roller Guides…" },
        { img: "mgm.webp", name: "MGM", products: "Electric motors, asynchronous three-phase, drives and controls, electric actuators and adapter…" },
        { img: "mitsubishi.webp", name: "Mitsubishi", products: "Automation, PLC, and electrical equipments..." },
        { img: "motori.webp", name: "Motori", products: "Asynchronous generators, synchronous generators, induction motors, industrial motors…" },
        { img: "motovario.webp", name: "Motovario", products: "Worm gear reducers, electric motors, helical gear reducers, motoinverter, helical bevel gear reducers…" },
        { img: "nord.webp", name: "Nord", products: "Gear drives, motors, brakemotors, gearmotors, drive electronics, frequency inverters…" },
        { img: "rosta.webp", name: "Rosta", products: "Tensioning elements and motor bases, components for the elastic suspension, anti-vibration…" },
        { img: "saer_elettropompe.webp", name: "Saer Elettropompe", products: "Electric submersible pumps, waterpumps residential applications, wet-end Motors, bareshaft…" },
        { img: "samhydraulik.webp", name: "Samhydraulik", products: "Axial piston motors, axial piston pumps, orbital motors, geared motors, electronics…" },
        { img: "sarplast.webp", name: "Sarplast", products: "Pipes, fittings, joints, casings, screens & risers for water wells, pipes for shipbuilding…" },
        { img: "seim.webp", name: "Seim", products: "Wide range of screw pumps for low, medium and high pressure, valves, flow meter, coolers…" },
        { img: "sew.webp", name: "SEW", products: "Gearmotors and Frequency Inverters, Standard Gearmotors, Helical Gearmotor, Parallel Shaft…" },
        { img: "siemens.webp", name: "Siemens", products: "Converters, Electric Motors, Geared Motors, Gear Units, and Couplings for any kind of application…" },
        { img: "siti.webp", name: "SITI", products: "Wormgearboxes, coaxial gearboxes, bevel helical gearboxes, parallel shaft gearboxes, shaft mounted…" },
        { img: "skf_fag.webp", name: "SKF FAG", products: "Rolling bearings, bearing units, bearing housings, plain bearings, industrial shaft seals, hydraulic…" },
        { img: "technical_silicated.webp", name: "Technical Silicated", products: "Modified sodium lilicated, concrete glass filler for industrial floor, loading area, pool…" },
        { img: "teikoku.webp", name: "Teikoku", products: "Canned motor pumps design, basic type with hollow shaft, reverse circulation, full heating jacket…" },
        { img: "tellure_rota.webp", name: "Tellure Rota", products: "Injection moulded rubber wheels, standard rubber wheels, elastic rubber wheels, pneumatic wheels…" },
        { img: "valvole_mondeo.webp", name: "Valvole Mondeo", products: "Check valves, idrjacheck valves, ball valves, filters, manifolds – flanges, pressure gauge…" },
        { img: "wamgroup.webp", name: "WAMGROUP", products: "Screw conveyors, valves, valve actuators, rotary feeders, chain conveyors, solids discharging…" },
        { img: "warner_electric.webp", name: "Warner Electric", products: "Industrial clutches and brakes, tension system, torque limiter, linear actuators…" },
        { img: "watson_marlow.webp", name: "Watson Marlow", products: "Peristaltic tube pumps, heavy duty hose pumps, precision tubing for pumping, high purity valves…" },
        { img: "zmc.webp", name: "ZMC", products: "Conveyance chains, crowns, pinions, gear wheels, chains for special applications…" },
    ]

    const mdBrnds = [29, 45, 8, 0, 31, 34, 41, 52, 20, 15, 54, 30, 25, 17, 40, 22, 16, 5, 43, 24, 28, 53, 7]
    const smBrands = [44, 32, 10, 9, 11, 39, 12, 21, 50, 27, 7]

    return (
        <div>
            <Wrapper className='flex flex-col gap-8 py-16 items-center'>
                <h1 className='text-3xl font-bold text-company-secondary'>Our Brands & Products</h1>
                <div className='md:hidden flex flex-wrap gap-4 justify-center'>
                    {smBrands.map((item, index) => <BrandCard key={index} img={brands[item].img} name={brands[item].name} products={brands[item].products} />)}
                </div>
                <div className='hidden lg:hidden md:flex flex-wrap gap-4 justify-center'>
                    {mdBrnds.map((item, index) => <BrandCard key={index} img={brands[item].img} name={brands[item].name} products={brands[item].products} />)}
                </div>
                <div className='hidden lg:flex flex-wrap gap-4 justify-center'>
                    {brands.map((item, index) => <BrandCard key={index} img={item.img} name={item.name} products={item.products} />)}
                </div>
            </Wrapper>
        </div >
    )
}

const BrandCard = ({ img, name, products }: { img: string, name: string, products: string }) => {
    return (
        <div className='w-[280px] h-[275px] flex flex-col gap-4 p-4 rounded-lg relative overflow-hidden border border-muted bg-muted/50'>
            <div className='w-full h-[100px] relative bg-white rounded-t-md'>
                <Image
                    src={`/assets/brands/${img}`}
                    alt={name}
                    fill
                    className='object-contain mix-blend-multiply p-2'
                />
            </div>
            <h2 className='text-center text-lg font-medium'>
                {name}
            </h2>
            <p className='leading-tight text-center text-muted-foreground'>{products}</p>
        </div>
    )
}

export default page