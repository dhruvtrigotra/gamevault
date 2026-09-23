const entries = [
 ['Eclipse: Beyond the Void','RPG','space',59.99,30,4.9,'Chart a course beyond the known. Uncover the secrets of a silent galaxy in this story-rich space odyssey.'],
 ['The Hollow Crown','Adventure','forest',49.99,25,4.8,'A forgotten kingdom. A stolen crown. Find your path through an ancient forest where every choice leaves a mark.'],
 ['Neon Overdrive','Racing','racing',39.99,50,4.7,'Own the night. Tune your dream machine and chase the perfect line through the streets of Nova City.'],
 ['Starfall Protocol','FPS','space',44.99,20,4.6,'Lead your squad into the last outpost of a fractured solar system.'],
 ['Wildwood Chronicles','RPG','forest',34.99,0,4.8,'Gather your companions and discover the living stories of a magical woodland.'],
 ['Midnight Circuit','Racing','racing',29.99,40,4.5,'From mountain passes to neon tunnels, build your underground racing legacy.'],
 ['Orbital Frontier','Simulation','space',39.99,15,4.4,'Design a thriving orbital settlement and keep its community alive among the stars.'],
 ['Ashen Pact','Action','forest',59.99,35,4.9,'Master the blade and confront the guardians of a world consumed by ancient magic.'],
 ['Velocity Underground','Sports','racing',24.99,20,4.3,'Take on time trials, team tournaments and precision driving challenges.'],
 ['Voidwalkers','Multiplayer','space',29.99,0,4.6,'Join a crew of explorers for cooperative expeditions across alien worlds.'],
 ['Whispers in the Pines','Horror','forest',24.99,60,4.7,'Follow a lost radio signal deep into a forest that remembers everything.'],
 ['Chrome District','Action','racing',49.99,30,4.5,'Navigate a neon metropolis and unravel the conspiracy behind its perfect facade.'],
 ['Cosmic Dominion','Strategy','space',34.99,45,4.6,'Forge alliances and guide your civilization across a procedurally generated galaxy.'],
 ['Evergreen Valley','Simulation','forest',19.99,0,4.8,'Restore a quiet valley with a little gardening, a little crafting and a lot of heart.'],
 ['Apex Rush','Sports','racing',39.99,25,4.4,'Compete in a world championship where every split second counts.'],
 ['Signal Lost','Horror','space',29.99,50,4.7,'You are alone on a research station. The incoming transmission says otherwise.'],
 ['Kingdoms of Moss','Strategy','forest',29.99,30,4.5,'Build a tiny kingdom among towering roots and lead it through changing seasons.'],
 ['Drift Syndicate','Multiplayer','racing',34.99,20,4.6,'Find your crew and take over the city in cooperative street-racing events.'],
 ['Lunar Echoes','Adventure','space',24.99,0,4.8,'Piece together the memories of a vanished civilization on a beautiful distant moon.'],
 ['Ironroot Legends','FPS','forest',44.99,40,4.4,'Defend the last forest fortress with tactical combat and elemental abilities.'],
 ['Solaris Rising','Action','space',54.99,10,4.7,'Harness the power of a dying star in a fast-paced interstellar adventure.'],
 ['Rally Afterlight','Racing','racing',29.99,35,4.5,'Race across rain-swept cities and desert highways in a new rally adventure.'],
 ['Fable of the Ancients','Adventure','forest',39.99,15,4.9,'A handwoven tale of courage and discovery among the ruins of the old world.'],
 ['Deep Space Tactics','Strategy','space',19.99,50,4.3,'Outsmart rival fleets in thoughtful turn-based encounters at the edge of the galaxy.']
];
export const categories=['Action','Adventure','RPG','Racing','Sports','FPS','Strategy','Simulation','Horror','Multiplayer'];
export const games=entries.map((e,i)=>({id:String(i+1),title:e[0],slug:e[0].toLowerCase().replace(/[^a-z0-9]+/g,'-'),description:e[6]+' Explore richly detailed environments, discover hidden stories, and play your own way. A carefully crafted adventure with memorable characters, atmospheric sound and rewarding progression awaits.',shortDescription:e[6],genre:[e[1],...(i%4===0?['Adventure']:[])].filter((v,i,a)=>a.indexOf(v)===i),platforms:i%3===0?['PC','PlayStation','Xbox']:i%3===1?['PC','PlayStation']:['PC','Xbox'],developer:['Nova Forge','Moonlit Studios','Octane Collective'][i%3],publisher:'Vault Interactive',releaseDate:`${i<6?'2026':i<15?'2025':'2024'}-${String(i%8+1).padStart(2,'0')}-15`,price:e[3],discount:e[4],rating:e[5],reviewCount:Math.round(24800/(i+1)),coverImage:`art/${e[2]}.webp`,bannerImage:`art/${e[2]}.webp`,screenshots:[`art/${e[2]}.webp`],art:e[2],systemRequirements:{minimum:{OS:'Windows 10 (64-bit)',Processor:'Intel Core i5-8400 / AMD Ryzen 5 2600',Memory:'8 GB RAM',Graphics:'NVIDIA GTX 1060 / AMD RX 580',Storage:'45 GB available space'},recommended:{OS:'Windows 11 (64-bit)',Processor:'Intel Core i7-10700 / AMD Ryzen 7 3700X',Memory:'16 GB RAM',Graphics:'NVIDIA RTX 3060 / AMD RX 6700 XT',Storage:'45 GB SSD space'}},featured:i===0,trending:i<4}));
export const findGame=id=>games.find(g=>g.id===id);
