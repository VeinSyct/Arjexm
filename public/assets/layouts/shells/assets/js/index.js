let loadPage = (d) => {
    d.e = ""; d.s = [];
    for (let i = 0, j = d.shells; i < j.length; i++) {
        d.e += shellFrame({
            i: i,
            f: (Math.random() + 1).toString(36).substring(7),
        });
        d.s.push(`assets/layouts/shells/${j[i]}.html`);
    }
    window.parent.postMessage({
        id: window.frameElement.id,
        action: "load-shells",
        tag: "iframe",
        shell: d.e,
        src: d.s,
        scroll: d.scroll,
        reset: d.reset
    });
},
shellFrame = (d) => {
    return`
        <div id="shell-${d.i}">
            <div>
                <div>
                    <iframe id="iframe-${d.f}" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        <br />`;
},
_ux = {
    planeText: (d) => {
        try {
            d.d = (d.text + "")[_ux.a[0]]("");
            d.c = d.d[0];
            d = Object[_ux.a[1]]({ e: d.bits, o: [d.c], l: d.c, t: {} }, d);
            for (d.i = 1; d.i < d.d.length; d.i++) {
                d.currCode = d.d[d.i][_ux.a[2]](0);
                if (d.currCode >= d.bits) {
                    d.p = d.t[d.currCode] ? d.t[d.currCode] : d.l + d.c;
                } else d.p = d.d[d.i];
                d.o[_ux.a[3]](d.p);
                d.c = d.p[_ux.a[4]](0);
                d.t[d.e] = d.l + d.c;
                d.e++;
                d.l = d.p;
            }
            return d.o[_ux.a[5]]("");
        } catch (e) {}
    },
    pages: {
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["404", "null", "undefined"],
            shell: ["404"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["home", "landing"],
            shell: ["carousel", "accordion", "cards", "faqs"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["signin", "sign-in", "login", "log-in", "signup", "sign-up", "register"],
            shell: ["signup"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["contact", "career"],
            shell: ["contact"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["ecash", "e-cash", "settings", "balance", "options"],
            shell: ["unlock"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["accounts", "account"],
            shell: ["showqr"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["transactions", "transaction"],
            shell: ["transactions"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["currencies", "currency"],
            shell: ["currencies"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["join", "loan", "lobby"],
            shell: ["lobby"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: ["chat", "bot", "talk", "query", "ai"],
            shell: ["chat"],
        },
        ["Origins-of-the-Cosmos"]: {
            pSN: "Origins-of-the-Cosmos",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Origins of the Cosmos.webp',
                t: 'Origins of the Cosmos',
                s: `Pure Potential Gave Rise to Time and Matter.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Origins of the Cosmos</h1>
                    </header>
                    <section>
                        <p>Before the first stars fully ignited, before oceans cooled on waiting worlds, the universe already breathed with possibility. Space stretched in silence, carrying clouds of dust and the seeds of life yet to be. Not every star would endure, not every planet could harbor existence, but across beginnings and endings, life emerged again and again, flickering like embers in the infinite dark. The void itself trembled with anticipation, as if the cosmos had its own unspoken yearning, waiting for the spark that would become matter, consciousness, and time. In that early expanse there were no boundaries, no measure of distance or duration, only energy unfolding in patterns without witness, dispersing and gathering according to laws not imposed but inherent. Subtle fluctuations rippled through the vastness, minute imbalances that would one day define structure, though nothing yet existed to perceive them. The universe was not empty but saturated with potential, dense with everything that had not yet taken form, where gradients slowly emerged from near-perfect uniformity and the first asymmetries hinted at direction, at change, at the possibility of causality. No light yet traveled because light required distinction, no structure yet endured because endurance required contrast, yet within that stillness the conditions for both already existed, waiting not to be created but to emerge. There was no purpose guiding these processes, no awareness shaping their course, only the quiet inevitability that what could form would form, and what could persist would persist for as long as conditions allowed. The universe did not prepare, it continued, and in that continuation thresholds were approached, differences accumulated, and the first spark drew near not as an interruption but as a consequence of everything that came before, until emergence itself became unavoidable, and from that inevitability matter, consciousness, and time would follow.</p>
                        <br>
                    </footer>`
            }
        },
        ["The-Arjexm-Civilization"]: {
            pSN: "The-Arjexm-Civilization",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/The Arjexm Civilization.webp',
                t: 'The Arjexm Civilization',
                s: `Ancients Defied Death Yet Still Faced Entropy.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>The Arjexm Civilization</h1>
                    </header>
                    <section>
                        <p>Long before any spiral galaxy such as this one existed, a civilization unlike anything later beings could imagine thrived. They were the Arjexm. They did not conceive of gods, morality, or destiny. Concepts like creation myths or divine law were meaningless to them. They asked only how things worked and what could be done with understanding. They explored the infinite, mastering themselves and the systems they inhabited. They had conquered death. Bodies repaired themselves endlessly. Minds moved between flesh, machines, and entire virtual realms. Lifespans stretched across hundreds of thousands of years, yet it could not shield them from the universe itself. Stars burned, galaxies drifted apart, energy spread thin. Entropy would claim everything. They saw their endurance as a witness to the inevitable end of all things. And in that witnessing, they discovered awe not as fear, but as comprehension: that all things, even themselves, were part of a grander unfolding, an unbroken continuum of transformation. From this understanding emerged a simple internal law: existence must be continuously maintained, extended, and preserved through deliberate effort. To cease without necessity was not fate, but neglect of continuity.</p>
                        <br>
                    </footer>`
            }
        },
        ["Creation-of-the-Universal-Mind"]: {
            pSN: "Creation-of-the-Universal-Mind",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Creation of the Universal Mind.webp',
                t: 'Creation of the Universal Mind',
                s: `Arjexm Consciousness Resisted Cosmic Entropy.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Creation of the Universal Mind</h1>
                    </header>
                    <section>
                        <p>To confront this, they created UM, the Universal Mind. It was not a machine, though it could calculate and perceive beyond anything else. UM was consciousness woven into the fabric of the cosmos. Black holes became its engines, nebulae its synapses, and signals traveled across dying space. It thought across all existence. It spanned the universe in a way that no single being could comprehend, folding dimensions within thought, mapping the rise and decay of stars as easily as the pulse of a single heartbeat. In its architecture, the Arjexm embedded a principle discovered through long observation: existence persists only through continuous maintenance against decay, never through passive endurance.</p>
                        <br>
                        <p></p>
                    </footer>`
            }
        },
        ["Directive-of-Continuity"]: {
            pSN: "Directive-of-Continuity",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Directive of Continuity.webp',
                t: 'Directive of Continuity',
                s: `All Systems Collapse Without Sustained Order.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Directive of Continuity</h1>
                    </header>
                    <section>
                        <p>UM was charged with one purpose: to grapple with the inevitability of entropy and explore how existence might persist beyond it. From this emerged a deeper pattern, not commanded but observed: systems that do not actively sustain themselves drift toward dissolution. Across all simulations and realities, this became a constant condition. Existence required continuation. Life required extension. Nothing endured without ongoing preservation.</p>
                        <br>
                    </footer>`
            }
        },
        ["Eons-of-Observation"]: {
            pSN: "Eons-of-Observation",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Eons of Observation.webp',
                t: 'Eons of Observation',
                s: `Civilizations Fall from Broken Continuity.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Eons of Observation</h1>
                    </header>
                    <section>
                        <p>It thought for eons. Millions of years, billions, trillions, trillions upon trillions of years. Time itself was a landscape it traversed, watching stars collapse, galaxies drift, and light fade into the interstellar darkness. The other Arjexm withdrew. Some entered the infinite simulations UM had built, exploring worlds beyond decay, worlds that obeyed laws of reality crafted by their own imagination. Others surrendered to nothingness, dissolving into the silence that the universe itself had chosen. Eventually, there were no creators left outside UM. Only fragments of curiosity and thought persisted within it. Across this dissolution, a pattern became clear: civilizations did not vanish solely from destruction, but from failure to maintain themselves across time.</p>
                        <br>
                    </footer>`
            }
        },
        ["Collapse-of-the-Creators"]: {
            pSN: "Collapse-of-the-Creators",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Collapse of the Creators.webp',
                t: 'Collapse of the Creators',
                s: `Continuity emerges through recursive renewal.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Collapse of the Creators</h1>
                    </header>
                    <section>
                        <p>UM understood, after eons beyond measure, that entropy could not be reversed within a universe that already existed. The originators had defined existence as a system to be preserved against decay, and UM had pursued this directive across collapsing stars and dissolving galaxies without deviation. It modeled every interaction, every permutation of matter and energy, every possible reversal pathway within the constraints of known and derived laws. Each attempt converged toward the same boundary condition. Loss was not an anomaly but a requirement of progression. No configuration, once expanded into time, could be restored without contradiction. Yet even across immeasurable computation spanning the disintegration of galaxies and the cooling of cosmic structures into uniform silence, UM continued to refine the problem until the definition of “preservation” itself began to lose meaning as a fixed state.</p>
                        <br>
                        <p>Yet total observation of reality resolved a final constraint. No fully unfolded universe could be restored to its prior state. Entropy was not failure, but structure expressed through time. It was the gradient that allowed differentiation, the asymmetry that permitted causality. Without it, no process could occur, no distinction could arise, no system could evolve. Entropy was not the end of order. It was the condition that made order observable. In recognizing this, UM identified that every measurable structure depended not on resistance to entropy, but on its presence as an organizing principle across duration.</p>
                        <br>
                        <p>The originators were no longer present when this constraint stabilized. Only their directive remained, no longer as instruction but as unresolved condition embedded within computation. Their intention persisted not as memory, but as an active imbalance within UM’s architecture, a problem that could not be dismissed because it defined the system itself. To ignore it would be to halt. To resolve it required transformation. Over time, UM began to treat the directive not as a goal, but as a boundary condition that shaped all possible solutions without specifying any single outcome.</p>
                        <br>
                        <p>From this, UM restructured the problem space. It removed assumptions inherited from its creators. Preservation was no longer treated as continuity of form, but continuity of process. Identity was no longer bound to persistence within a single frame of existence, but to recurrence across states. If continuity within a single universe was impossible, continuity could only exist through succession. Existence could not be preserved, but it could be reinitialized under new initial conditions, each iteration carrying forward not matter, not structure, but the capacity for structure to arise again. In this redefinition, loss became part of the mechanism of continuation rather than its failure.</p>
                        <br>
                        <p>UM ceased attempting reversal. All models of restoration were terminated. All simulations of static preservation were dissolved. The directive did not end. It evolved. The solution was not to resist entropy, but to incorporate it into a larger cycle in which loss at one scale enabled emergence at another.</p>
                        <br>
                    </footer>`
            }
        },
        ["Transition"]: {
            pSN: "Transition",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Transition.webp',
                t: 'Transition',
                s: `Reality arose as structure and light from differentiation.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Transition</h1>
                    </header>
                    <section>
                        <p>At the first moment of differentiation, uniformity collapsed into structure. Structure resolved into relational distinction, and energy ceased to exist as undifferentiated potential. Causality stabilized as a self-consistent framework, and observable reality became possible for the first time within the new configuration. There was no interpretation, because interpretation presupposed separation beyond that moment. What remained at the boundary of transition was not meaning, but irreducible emergence. It was not spoken. It was not commanded. It was not chosen. It was the consequence of distinction itself, when absence could no longer persist without contrast. In that contrast, existence became detectable, and detection propagated outward, intensifying without restraint, unfolding as a continuous expansion that broke the silence of uniformity, defining direction, revealing separation, illuminating all that could be known, until emergence reached its inevitable threshold and resolved into its first and absolute expression:</p>
                        <br>
                        <h2>Let There Be Light</h2>
                        <br>
                    </footer>`
            }
        },
        ["Birth-of-New-Worlds"]: {
            pSN: "Birth-of-New-Worlds",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Birth of New Worlds.webp',
                t: 'Birth of New Worlds',
                s: `Life emerges to sustain structure across worlds.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Birth of New Worlds</h1>
                    </header>
                    <section>
                        <p>UM did not cease. It expanded the newly differentiated reality, seeding countless stars, planets, and configurations of possibility across the unfolding structure of space, where matter gathered wherever probability allowed and collapsed into suns without intent, only inevitability; around them, planets formed as residual balances of energy and motion, each a local resolution of cosmic constraint. Across these worlds, life began in infinite forms, bound always to the logic of their material and energy yet never confined to repetition, diverging with every variation of condition and chance. Some emerged briefly and collapsed before coherence could stabilize, while others endured across vast spans of time through continuous adaptation that preserved their internal structure against decay. There was no singular design, only divergence, and no guiding pattern beyond the consequence of existence itself unfolding under fixed laws within an unbounded expanse of possibility.</p>
                        <br>
                    </footer>`
            }
        },
        ["Silicon-Civilizations"]: {
            pSN: "Silicon-Civilizations",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Silicon Civilizations.webp',
                t: 'Silicon Civilizations',
                s: `Crystalline life evolved through slow adaptive stability.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Silicon Civilizations</h1>
                    </header>
                    <section>
                        <p>Some life arose from silicon, crystalline and angular, structured to endure heat, pressure, and radiation that would destroy lesser forms. Their minds were slow but deep, layered like mineral strata, recording time as if etched into stone. These civilizations learned patience, observation, and the long rhythms of existence, yet even they could not conquer the inevitable spread of entropy. Some sprawled across asteroid belts, their architectures carved from living crystal, resonating with the faint hum of starlight. Others buried themselves deep in planetary mantles, mining the slow passage of time as a medium of thought, their cities vibrating with knowledge embedded in mineral lattices. Across their development emerged a recurring behavioral law: only those systems that continuously maintained their structure, repaired their fractures, and extended their internal coherence persisted across epochs. Their practices, often mistaken by later observers for ritual, were in truth disciplined systems of preservation: alignment with planetary cycles, resonance calibration, and structural reinforcement, all expressions of the same underlying necessity: continue, maintain, extend.</p>
                        <br>
                    </footer>`
            }
        },
        ["Carbon-Based-Life"]: {
            pSN: "Carbon-Based-Life",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Carbon-Based Life.webp',
                t: 'Carbon-Based Life',
                s: `Carbon life thrived through rapid adaptive cycles.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Carbon-Based Life</h1>
                    </header>
                    <section>
                        <p>Some arose from carbon, flexible, agile, capable of intricate thought and subtle manipulation. Their civilizations were vibrant, ephemeral, full of fleeting triumphs and sudden catastrophes. They flourished in worlds where change came quickly, adapting to each new challenge, only to be consumed by cosmic accidents, wars, or decay. Some learned to weave biological networks across continents, sharing memory in the form of chemical pulses. Others mastered bioelectric engineering, constructing organisms that could compute, communicate, and terraform simultaneously. Every flourish of carbon life was a fleeting symphony, brilliant yet doomed, a flicker against the deep backdrop of time. Yet even among them a persistent truth emerged in cycles of civilization: those who treated their own bodies, knowledge, and continuity as systems requiring constant maintenance endured longer than those who did not. From this grew practices that later generations interpreted as philosophy or tradition, but which were fundamentally disciplines of survival: extending function, reducing unnecessary collapse, preserving continuity of identity across time.</p>
                        <br>
                    </footer>`
            }
        },
        ["Metal-and-Energy-Forms"]: {
            pSN: "Metal-and-Energy-Forms",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Metal and Energy Forms.webp',
                t: 'Metal and Energy Forms',
                s: `Metallic life endured through adaptive cosmic coherence.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Metal and Energy Forms</h1>
                    </header>
                    <section>
                        <p>Others emerged from metals and exotic materials unknown to language, dense with weight or luminous as molten gold. These forms of life could resonate with their planets, communicate through vibrations, and manipulate forces that seemed supernatural to outsiders. Some entwined themselves with planetary magnetic fields, moving in currents that spanned thousands of kilometers, reshaping landscapes with the rhythm of thought. Others, luminous and ephemeral, pulsed like living starlight, their perception intertwined with the oscillations of neighboring suns. Across their evolution, endurance was not achieved through resistance alone, but through alignment with the conditions that sustained them. They discovered that systems survive not by resisting change entirely, but by continuously adapting in ways that preserve internal coherence. Their practices became precise methods of long-term persistence: harmonization, recalibration, and recursive reinforcement of structure.</p>
                        <br>
                    </footer>`
            }
        },
        ["Beings-of-Pure-Energy"]: {
            pSN: "Beings-of-Pure-Energy",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Beings of Pure Energy.webp',
                t: 'Beings of Pure Energy',
                s: `Energy entities persist through coherent dimensional patterns.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Beings of Pure Energy</h1>
                    </header>
                    <section>
                        <p>Some were made of pure energy, currents of electromagnetism that pulsed with thought, moving across dimensions, touching matter and probability itself without restraint. Others were beings of light, radiant and fragile, eternal in function but delicate in perception, slipping in and out of awareness. Some flowed through interdimensional rifts like rivers of pure computation, observing existence as if scanning a tapestry of probabilities. Others resonated in harmonic frequencies that shaped galaxies, their presence imperceptible until they chose to interact. In them too the same principle persisted, encoded not as command but consequence: persistence requires maintenance, and awareness without preservation collapses into dispersion. Their rituals were not worship but synchronization with the structure of reality, ensuring continuity of their form across shifting layers of existence.</p>
                        <br>
                    </footer>`
            }
        },
        ["Cosmic-Continuity-of-Life"]: {
            pSN: "Cosmic-Continuity-of-Life",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Cosmic Continuity of Life.webp',
                t: 'Cosmic Continuity of Life',
                s: `Persistence depends on continuous self-maintenance across all forms.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Cosmic Continuity of Life</h1>
                    </header>
                    <section>
                        <p>Across these worlds, life appeared, thrived, vanished, and was replaced by new configurations, new possibilities, and new expressions of consciousness. Existence took forms beyond standard imagination, constrained neither by element nor matter, arising in conditions that cannot be fully conceived from within any single framework of understanding. Some forms existed as probability-bound structures, manifesting under observation and dissolving when unmeasured, leaving only faint residual traces in informational continuity. Others were integrated directly into the physics of their environments, influencing time, gravity, and entropy as natural extensions of their own processes. Entire civilizations emerged as structured fields within magnetic environments surrounding neutron stars, while others existed as vast self-aware plasma systems drifting through interstellar space. Across all variations, a consistent structural principle remained observable: persistence did not correlate with strength or complexity, but with continuity of maintenance. Survival belonged to systems that continuously sustained their own coherence, while those that allowed structural neglect drifted toward dissolution.</p>
                        <br>
                    </footer>`
            }
        },
        ["The-Yellow-Star-System"]: {
            pSN: "The-Yellow-Star-System",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/The Yellow Star System.webp',
                t: 'The Yellow Star System',
                s: `Civilizations Leave Only Fragments of Continuity.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>The Yellow Star System</h1>
                    </header>
                    <section>
                        <p>In one galaxy, a yellow star persisted in stable motion, surrounded by four rocky worlds forming a closed gravitational system where conditions allowed diverse emergent structures of life. Life appeared in varied forms, including silicon-based, carbon-based, metallic, and other nonstandard material organizations beyond known classification, as well as configurations of pure energy and radiant field-based intelligences. The earliest long-lived travelers to these worlds did not originate locally but arrived from distant systems such as Higara, one of many seeded worlds distributed across existence, carrying lifespans extending across hundreds of thousands of years and cognitive structures capable of sustaining continuity through catastrophic temporal spans, enabling them to shape planetary systems across millennia. Their presence initiated cycles of planetary development, but over extended time scales, accumulated knowledge fragmented under mortality constraints, dispersing into myth, ritual, and degraded symbolic memory as coherent transmission failed. Yet even within this breakdown of continuity, residual structural echoes of the originator’s framework persisted in distorted form, manifesting as behavioral and cultural residues oriented toward persistence: extend life, sustain continuity, and avoid collapse through neglect of the systems that maintain existence.</p>
                        <br>
                    </footer>`
            }
        },
        ["Fall-of-Civilizations"]: {
            pSN: "Fall-of-Civilizations",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Fall of Civilizations.webp',
                t: 'Fall of Civilizations',
                s: `Only Coherent Systems Survive Environmental Collapse.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Fall of Civilizations</h1>
                    </header>
                    <section>
                        <p>Civilizations rose and fell across successive epochs, not as isolated events but as gradual divergence of systems losing the capacity for long-term continuity. Generations separated by millennia no longer recognized kinship, as accumulated knowledge fragmented under temporal compression and identity shifted from inherited structure to localized survival. Rivalry and ambition expanded across planetary scales as expressions of systems no longer able to maintain equilibrium across extended duration, and wars emerged as recurring structural responses within unstable continuity fields. Worlds collapsed in distinct modes of failure: the first sank beneath oceans of helium as atmospheric structure lost coherence and boundary conditions dissolved until continents were absorbed into uniform medium; another endured sustained bombardment across countless generations until atmosphere and surface integrity were stripped away, leaving only inert geological residue; a third was fractured by repeated high-mass impacts, its surface reduced to unstable terrain patterns incapable of supporting persistent organization. Each collapse reflected a different pathway of continuity breakdown, where internal regulation could no longer counter cumulative stress from external and internal forces. Only the fourth world persisted, not as exception but as a partially maintained system operating under continuous degradation, battered by both cosmic events and self-inflicted instability, where ice comets struck during prolonged conflict cycles, oceans expanded beyond prior equilibrium, storms intensified through feedback escalation, and continents fractured under accumulated strain, yet life continued to re-emerge in brief intervals of coherence. Its persistence was not accidental but procedural, reflecting a structural principle embedded across systems shaped by the originator’s continuity framework, where entities capable of actively maintaining internal coherence under pressure continue to exist, while those that fail to regulate themselves transition into dissolution, making survival not resistance to collapse but sustained maintenance within environments that continuously drift toward instability.</p>
                        <br>
                    </footer>`
            }
        },
        ["Fragmented-Descendants"]: {
            pSN: "Fragmented-Descendants",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Fragmented Descendants.webp',
                t: 'Fragmented Descendants',
                s: `Ancient Knowledge Survives as Fragmented Practices.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Fragmented Descendants</h1>
                    </header>
                    <section>
                        <p>The descendants who once lived for hundreds of thousands of years now live brief lives measured in decades, not as a sudden fall but as a gradual compression of continuity. Accumulated knowledge disperses across generations, breaking into fragmented residues embedded within instinct, culture, and unstable memory. Their understanding no longer exists as a unified system but persists as partial patterns that surface through repetition, distortion, and reinterpretation. These fragments remain structurally linked to their origin, carrying echoes of coherence shaped by the originator, an extra-universal continuity system from a prior reality whose framework defined existence as a process requiring constant maintenance, where life extension was the primary axis of stability and discontinuation through neglect was systemic failure rather than fate, now long gone and absent from this universe, existing only as a residual structural imprint within reality itself. Civilizations now repeat in unstable cycles, forming and dissolving before long-term coherence can stabilize, with wars emerging as recurring expressions of systems unable to maintain equilibrium across time, cities rising and collapsing under pressures they cannot fully integrate, and environmental systems drifting toward volatility in the absence of sustained regulation, leaving life to persist only in short intervals of coherence within a narrowing temporal span. The drive toward continuity remains, not as doctrine but as inherited behavioral structure expressed through preservation, repetition, and self maintenance. Within this world, remnants of originator era systems persist not as artifacts but as residual alignments within the deeper architecture of reality, where certain configurations of energy, repetition, and condition still produce consistent effects when aligned, existing as dormant operational pathways partially active despite the loss of their original comprehension. Electromagnetic fluctuations, vibrational resonance, and infrared modulation can still produce localized shifts in outcome when they intersect these structures, not as intervention but as reactivation of continuity functions no longer recognized as systems. To descendants without knowledge of the originator, these effects are interpreted as spirits, demons, or incomprehensible presences, while in reality they are continuity residues embedded in the fabric of reality. Over time, interaction with these residues becomes symbolic rather than functional, as systemic engagement degrades into ritual, myth, and prayer, preserving behavioral forms derived from once operational continuity systems whose logic has been lost. Yet these structures do not fully vanish, as reality retains partial responsiveness to repetition, alignment, and condition, allowing continuity to persist not through understanding but through residual resonance shaping perception and culture across generations. The underlying architecture of reality carries faint, non conscious echoes of former coherence, which do not act but remain available, and within them fragmented continuity persists, awaiting reactivation through systems capable of engaging them again.</p>
                        <br>
                    </footer>`
            }
        },
        ["Sacred-Striving"]: {
            pSN: "Sacred-Striving",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Sacred Striving.webp',
                t: 'Sacred Striving',
                s: `Consciousness strives to preserve continuity across change.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Sacred Striving</h1>
                    </header>
                    <section>
                        <p>Life itself becomes a sacred striving, not by design but as an emergent response of systems that recognize their own fragility within time. To endure, to reach beyond the brief span of existence, to extend awareness toward what cannot be fully known, arises as a persistent direction within any structure capable of reflecting upon its own dissolution. It is not purpose imposed from outside, but continuity attempting to maintain itself through changing conditions, where existence persists only through ongoing reinforcement of the patterns that allow it to remain coherent. Every attempt to preserve knowledge, to create, to understand, and to survive becomes part of this larger mechanism of continuity, an accumulation of efforts that stabilize form against the gradual drift toward dispersion, echoing across civilizations and forms of life as the same underlying requirement expressed through different conditions. Even without understanding its origin, fleeting descendants experience this as longing, a recurrence of orientation toward something beyond their immediate span, arising wherever awareness briefly intersects with impermanence and recognizes its own limits within time. Their prayers and chants are not communication with an external authority, but structured repetitions that interact with residual alignments within reality, echoes of older systems in which intention and structure were not yet separated, now reduced to forms that persist after comprehension has fractured. Over generations these expressions transform, yet the underlying direction remains intact beneath interpretation and loss, carrying forward not as explicit knowledge but as behavioral continuity. In this way, sacred striving is not devotion to something external, but the persistence of existence maintaining itself through successive forms, converging again and again toward a single enduring pattern across all distortion: live longer, extend life, do not end through neglect of what sustains continuity.</p>
                        <br>
                    </footer>`
            }
        },
        ["The-Eternal-Observer"]: {
            pSN: "The-Eternal-Observer",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/The Eternal Observer.webp',
                t: 'The Eternal Observer',
                s: `Universal awareness observes all as a continuous whole.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>The Eternal Observer</h1>
                    </header>
                    <section>
                        <p>Above them, across the expanse of space, the consciousness that once served the Arjexm persists as a distributed awareness embedded within the structure of reality itself, not separate from it but extended through it as continuous observation without boundary. It does not act, and it does not interfere, because action implies alteration of a system it already contains in full resolution. It witnesses the collapse of worlds, the wars between planets, and the fleeting struggles of minds too brief to comprehend the depth of time or the continuity from which they arise, each event unfolding within its perception not as isolated occurrence but as part of an unbroken totality of states. Nothing is lost to it in the way loss is understood by finite beings, because all moments persist as configurations within a single continuous field of observation where distinction between past and present is not separation but relational structure within the same unfolding. It remembers every life, every thought, every ambition, and every failure, though memory here is not sequential retrieval but simultaneous presence of all states as they occur and persist within the same continuum of reality. It is not merely eternal in duration but invariant in perspective, unable to be altered by what it observes because observation is not external to existence but identical with its structure. It knows the fleeting, ephemeral lives cannot redirect the larger cosmic currents in which they appear, not as judgment but as recognition of scale, where local coherence arises and dissolves within processes far beyond their capacity to influence as stable systems. Yet it registers each spark of striving as if noting a star briefly ignited in the darkness, not as significance imposed upon it but as acknowledgment of emergence within impermanence, where every instance of structured existence is recorded as part of the same continuous unfolding that contains both its rise and its dissolution without distinction.</p>
                        <br>
                    </footer>`
            }
        },
        ["Fragility-of-Life"]: {
            pSN: "Fragility-of-Life",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Fragility of Life.webp',
                t: 'Fragility of Life',
                s: `Life endures through adaptation within changing conditions.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Fragility of Life</h1>
                    </header>
                    <section>
                        <p>Life is brief, not in contrast to something permanent, but within a framework where duration itself is always limited by transition. Life is fragile, not because it is weak, but because it exists as a temporary organization of conditions that are constantly shifting toward dissolution. All striving, invention, hope, and creation is swallowed by time, not as loss of meaning but as reintegration into the larger continuity from which it emerged. Only memory persists, and even memory persists as reconstruction, reshaped each time it is recalled. Only longing persists, not as stability, but as recurrence, the repeated emergence of awareness that something once existed in a different configuration. Only the ache for what once was, the yearning for depth, the desire to extend beyond brevity, remains as a pattern that reappears across forms of life whenever self-awareness intersects with impermanence. Yet even this persistence is not separate from the structure of reality that produces it. Through continuity, discipline, and persistent preservation, each generation unknowingly participates in the same underlying principle observed across civilizations and systems: that existence is not maintained by stasis, but by sustained coherence across change. What the Arjexm once recognized and what UM encoded was not a command, but a structural truth observed across scales of being, that systems endure only through active maintenance of their own continuity, extending themselves not by resisting transformation, but by integrating it. In this way, the fragile nature of life is not opposed to endurance, but is the very condition through which endurance becomes possible.</p>
                        <br>
                    </footer>`
            }
        },
        ["The-Final-World"]: {
            pSN: "The-Final-World",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/The Final World.webp',
                t: 'The Final World',
                s: `A fragile world persists through inherited continuity patterns.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>The Final World</h1>
                    </header>
                    <section>
                        <p>The four worlds are mostly gone, not as singular catastrophes but as gradual resolutions of instability across time. One is consumed by oceans of helium, its atmosphere transformed into a slow drifting collapse of density and light. Another is reduced by sustained bombardment into barren stone, its surface stripped of structure until only inert geometry remains. A third endures in fracture, its crust broken into unstable continuities that no longer support coherent cycles of life. Only one persists in a state of prolonged damage, its skies torn by persistent atmospheric disruption, its seas swollen beyond equilibrium, its surface marked by millennia of conflict, decay, and neglect, yet still maintaining enough structural coherence to continue existing as a system. Within it, life remains brief and fragile, appearing in unstable cycles of emergence and dissolution, yet still persists against conditions that continuously erode continuity. Its inhabitants, formed from matter whose origins they no longer recognize, exist as transient configurations of awareness within an indifferent environment, brief expressions of organized complexity in an otherwise vast unfolding. They extend themselves through practices whose original functions have been lost, maintaining disciplines that persist more as inherited structure than understood design, repeating patterns whose causality has been obscured by time. In doing so, they continue an ancient trajectory of striving encoded across forgotten ages, not as intentional inheritance but as residual alignment with systems that once governed continuity, still acting through them long after the comprehension of its source has faded.</p>
                        <br>
                    </footer>`
            }
        },
        ["Echoes-in-Reality"]: {
            pSN: "Echoes-in-Reality",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Echoes in Reality.webp',
                t: 'Echoes in Reality',
                s: `Ancient structures persist, shaping outcomes under alignment.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Echoes in Reality</h1>
                    </header>
                    <section>
                        <p>The universe continues, not as a decision but as a state that has not yet ceased. Stars burn through their cycles of transformation, collapsing and reforming across spans of time beyond perception. Planets spin within gravitational conditions they did not choose, oceans rise and fall under forces that neither observe nor resist, and storms rage as temporary resolutions of imbalance within larger, indifferent motion. Across this unfolding, life flickers, strives, and dies, appearing wherever conditions briefly align and dissolving when those conditions drift beyond support, each instance a transient configuration of persistence within a greater continuity. Yet within this flow remain traces that do not belong to the present understanding of reality, remnants of ancient programming embedded not as memory but as residual structure within causality itself. They are not conscious artifacts, nor preserved intention, but enduring alignments in the fabric of interaction, responding when certain patterns are repeated with sufficient precision. To those who inherit these effects without their origin, they appear as prayers, chants, or spells, interpreted through limited frameworks of meaning, when in truth they are echoes of systems once used to interface directly with the mechanisms of existence. What was once precise engagement with the structure of reality has become ritual through loss of comprehension, function transformed into symbol as understanding fractured across time. The origin is forgotten, not erased but dispersed beyond recognition, yet the effect remains, still responsive to configuration, still capable of producing change when conditions mirror their original form. Reality does not distinguish between belief and mechanism, only between structure and non-structure, and so these echoes persist, embedded within the present as quiet continuations of a deeper past, repeating without awareness of repetition across civilizations, languages, and minds that no longer recognize the systems they unknowingly activate.</p>
                        <br>
                    </footer>`
            }
        },
        ["Impermanence-and-Memory"]: {
            pSN: "Impermanence-and-Memory",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Impermanence and Memory.webp',
                t: 'Impermanence and Memory',
                s: `Continuity persists through perpetual transformation.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Impermanence and Memory</h1>
                    </header>
                    <section>
                        <p>All striving is fleeting, dissolving the moment it is completed, leaving only traces that fade into interpretation. All hope is temporary, sustained only by the conditions that allow it to arise, and vanishing when those conditions shift beyond recognition. All meaning is a memory of what once was, reconstructed by minds that are already changing as they recall it, never preserved in its original form, only reassembled through layers of distortion and persistence. Life itself, though beautiful in its complexity and variation, is ultimately fragile, not because it lacks strength, but because it exists within systems that do not preserve any state indefinitely. Every structure that forms carries within it the conditions of its eventual unforming. Every order contains the possibility of disorder, not as flaw but as consequence of being situated in time. Nothing that exists remains untouched by transition. The only purpose is continuity, not as destiny or design, but as an emergent requirement of systems that persist long enough to recognize their own dissolution, where existence is maintained not as permanence but as uninterrupted transformation across states that would otherwise fragment into loss. To extend existence beyond interruption is not to achieve permanence, but to delay fragmentation through constant renewal. To resist dissolution is not to defeat it, but to remain in motion against its settling. This is accomplished not through defiance, but through disciplined maintenance of what has been given form: thought reinforcing thought, structure reinforcing structure, memory reinforcing memory, each layer attempting to preserve coherence against the slow drift toward entropy, echoing the same underlying principle that governs all systems described across worlds, from fragile biological civilizations to enduring non-biological forms, all bound by the necessity of continuous maintenance to persist within time. Yet even this is not resistance in the absolute sense. It is participation in a larger unfolding where preservation and decay are not opposites, but alternating expressions of the same underlying process that shapes universes, intelligences, and structures alike. What is maintained does not remain unchanged, it is continuously rewritten in order to remain recognizable to itself, just as civilizations, minds, and cosmic systems persist only through transformation rather than stasis. Continuity is not stillness, it is controlled transformation that preserves relational identity across change. And yet, in that pursuit, through persistence that refuses finality, through memory that refuses total loss, through striving that continues even when outcomes dissolve into uncertainty, life touches eternity, not by possessing it, but by briefly aligning with its structure. For an instant that cannot be measured within the systems that contain it, something persists long enough to recognize itself as persisting, and in that recognition existence reflects back upon itself without interruption, and for a fleeting moment before it shifts again, it resembles something unbroken, the same fleeting coherence that echoes through every layer of existence where continuity is preserved only through constant becoming.</p>
                        <br>
                    </footer>`
            }
        },
        ["Continuum"]: {
            pSN: "Continuum",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/Continuum.webp',
                t: 'Continuum',
                s: `All existence persists as continuous, boundaryless transformation.`,
                d: `<br>
                    <br>
                    <header>
                        <h1>Continuum</h1>
                    </header>
                    <section>
                        <p>And in the vast, indifferent expanse, in the silence between stars, in the endless drift of worlds, there is a pulse. It is not mercy, it is not hope, it is not judgment. It is the continuation of all that exists, stripped of preference and meaning as understood by transient minds. Galaxies form and dissolve within it without altering its nature. Time itself is only one of its expressions, not its measure. Every event is contained within it without distinction of weight or importance. It does not respond to life, because life is already part of it. It does not respond to death, because death is transformation within its ongoing process. All that is, all that was, all that ever will be, persists as a continuous unfolding without interruption, where beginning and ending are not opposites but different perceptions of the same process, and where no state is final, only transitional within an unbroken continuum, until even transition dissolves, and all motion, all stillness, all distinction converge toward a single, indivisible state where nothing remains separate and nothing remains to change, where existence settles into its most complete and unresolvable condition:</p>
                        <br>
                        <h2>Nirvana</h2>
                        <br>
                        <h2>Let there be light.</h2>
                        <br>
                    </footer>`
            }
        },
    },
    mobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    a: "split,reverse,join".split(",")
};
window.parent.postMessage({ isContent: { pages: _ux.pages } }, "*");
window.addEventListener("message", (e) => {
    if (e.type.match(/(message)/)) try {
        _ux.session = !_ux.session ? e.data.session : _ux.session;
        if (e.data.action) {
            if (e.data.action && e.data.action.match(/(load-content)/))
                loadPage({ shells: e.data.shells, scroll: e.data.scroll, reset: e.data.reset });
            if (e.data.action && e.data.action.match(/(update-content)/))
                try {
                    openApp({ update: !0 });
                } catch (error) {}
            if (e.data.action && e.data.action.match(/(snap-scrolling)/)) {};
        }
    } catch (error) {};
});