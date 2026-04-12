// ===========================
//  MLB TEAMS EXPLORER · JS
// ===========================
 
const teams = [
  // ── AL EAST ──
  { name:"New York Yankees", city:"New York, NY", stadium:"Yankee Stadium", founded:1901, titles:27, division:"AL Este", lat:40.8296, lng:-73.9262, logo:"https://i.logocdn.com/mlb/current/new-york-yankees.svg", desc:"El equipo más ganador de la MLB con 27 Series Mundiales. Leyendas como Ruth, DiMaggio, Mantle y Jeter vistieron el uniforme de los Bronx Bombers." },
  { name:"Boston Red Sox", city:"Boston, MA", stadium:"Fenway Park", founded:1901, titles:9, division:"AL Este", lat:42.3467, lng:-71.0972, logo:"https://i.logocdn.com/mlb/current/boston-red-sox.svg", desc:"Uno de los clubes más históricos, con Fenway Park como estadio desde 1912. Rompieron la 'Maldición del Bambino' en 2004 después de 86 años." },
  { name:"Toronto Blue Jays", city:"Toronto, ON", stadium:"Rogers Centre", founded:1977, titles:2, division:"AL Este", lat:43.6414, lng:-79.3894, logo:"https://i.logocdn.com/mlb/current/toronto-blue-jays.svg", desc:"Único equipo canadiense en la MLB. Ganaron la Serie Mundial en 1992 y 1993 consecutivamente con jugadores como Roberto Alomar y Joe Carter." },
  { name:"Tampa Bay Rays", city:"St. Petersburg, FL", stadium:"Tropicana Field", founded:1998, titles:0, division:"AL Este", lat:27.7683, lng:-82.6534, logo:"https://i.logocdn.com/mlb/current/tampa-bay-rays.svg", desc:"Conocidos por su modelo analítico y desarrollo de talento. Llegaron a la Serie Mundial en 2020 pero cayeron ante los Dodgers." },
  { name:"Baltimore Orioles", city:"Baltimore, MD", stadium:"Oriole Park at Camden Yards", founded:1894, titles:3, division:"AL Este", lat:39.2838, lng:-76.6218, logo:"https://i.logocdn.com/mlb/current/baltimore-orioles.svg", desc:"Con un estadio icónico en Camden Yards, los Orioles han producido leyendas como Cal Ripken Jr., quien jugó 2,632 juegos consecutivos." },
 
  // ── AL CENTRAL ──
  { name:"Chicago White Sox", city:"Chicago, IL", stadium:"Guaranteed Rate Field", founded:1900, titles:3, division:"AL Central", lat:41.8299, lng:-87.6338, logo:"https://i.logocdn.com/mlb/current/chicago-white-sox.svg", desc:"Los White Sox ganaron su último campeonato en 2005. Comparten ciudad con los Cubs en una de las mayores rivalidades del béisbol." },
  { name:"Cleveland Guardians", city:"Cleveland, OH", stadium:"Progressive Field", founded:1894, titles:2, division:"AL Central", lat:41.4962, lng:-81.6852, logo:"https://i.logocdn.com/mlb/current/cleveland-guardians.svg", desc:"Antes conocidos como Indians, cambiaron su nombre en 2022. Tienen una rica historia y grandes jugadores como Bob Feller y Jim Thome." },
  { name:"Minnesota Twins", city:"Minneapolis, MN", stadium:"Target Field", founded:1901, titles:3, division:"AL Central", lat:44.9817, lng:-93.2781, logo:"https://i.logocdn.com/mlb/current/minnesota-twins.svg", desc:"Los Twins ganaron la Serie Mundial en 1987 y 1991. Su estadio al aire libre, Target Field, abrió en 2010 en el centro de Minneapolis." },
  { name:"Kansas City Royals", city:"Kansas City, MO", stadium:"Kauffman Stadium", founded:1969, titles:2, division:"AL Central", lat:39.0517, lng:-94.4803, logo:"https://i.logocdn.com/mlb/current/kansas-city-royals.svg", desc:"Los Royals tuvieron una era dorada en los 80s con George Brett. Regresaron al trono en 2015 tras 30 años sin campeonato." },
  { name:"Detroit Tigers", city:"Detroit, MI", stadium:"Comerica Park", founded:1894, titles:4, division:"AL Central", lat:42.3390, lng:-83.0485, logo:"https://i.logocdn.com/mlb/current/detroit-tigers.svg", desc:"Los Tigers son uno de los equipos fundadores de la AL. Grandes como Ty Cobb, Hank Greenberg y Miguel Cabrera han brillado con el uniforme atigrado." },
 
  // ── AL WEST ──
  { name:"Houston Astros", city:"Houston, TX", stadium:"Minute Maid Park", founded:1962, titles:2, division:"AL Oeste", lat:29.7573, lng:-95.3555, logo:"https://i.logocdn.com/mlb/current/houston-astros.svg", desc:"Los Astros ganaron la Serie Mundial en 2017 y 2022. Cuentan con uno de los sistemas de desarrollo de pitcheo más efectivos de la liga." },
  { name:"Los Angeles Angels", city:"Anaheim, CA", stadium:"Angel Stadium", founded:1961, titles:1, division:"AL Oeste", lat:33.8003, lng:-117.8827, logo:"https://i.logocdn.com/mlb/current/los-angeles-angels.svg", desc:"Los Angels ganaron su único campeonato en 2002. Shohei Ohtani fue su gran estrella, siendo considerado el mejor jugador two-way de la era moderna." },
  { name:"Seattle Mariners", city:"Seattle, WA", stadium:"T-Mobile Park", founded:1977, titles:0, division:"AL Oeste", lat:47.5914, lng:-122.3325, logo:"https://i.logocdn.com/mlb/current/seattle-mariners.svg", desc:"Los Mariners nunca han llegado a la Serie Mundial, pero tienen una de las aficiones más apasionadas. Ichiro Suzuki es su mayor leyenda." },
  { name:"Oakland Athletics", city:"Oakland, CA", stadium:"Oakland Coliseum", founded:1901, titles:9, division:"AL Oeste", lat:37.7516, lng:-122.2005, logo:"https://i.logocdn.com/mlb/1993/oakland-athletics@3x.png", desc:"Los A's son famosos por su filosofía Moneyball popularizada por Billy Beane. Con 9 Series Mundiales, son uno de los clubes más exitosos históricamente." },
  { name:"Texas Rangers", city:"Arlington, TX", stadium:"Globe Life Field", founded:1961, titles:1, division:"AL Oeste", lat:32.7473, lng:-97.0845, logo:"https://i.logocdn.com/mlb/current/texas-rangers.svg", desc:"Los Rangers ganaron su primera Serie Mundial en 2023 de forma dramática. Cuentan con un moderno estadio con techo retráctil inaugurado en 2020." },
 
  // ── NL EAST ──
  { name:"Atlanta Braves", city:"Atlanta, GA", stadium:"Truist Park", founded:1876, titles:4, division:"NL Este", lat:33.8908, lng:-84.4679, logo:"https://i.logocdn.com/mlb/current/atlanta-braves.svg", desc:"Los Braves son uno de los equipos más antiguos del béisbol. Dominaron la NL Este durante los 90s y ganaron la Serie Mundial en 2021." },
  { name:"New York Mets", city:"New York, NY", stadium:"Citi Field", founded:1962, titles:2, division:"NL Este", lat:40.7571, lng:-73.8458, logo:"https://i.logocdn.com/mlb/current/new-york-mets.svg", desc:"Los Mets son el equipo más joven de NYC. Sus campeonatos de 1969 y 1986 son considerados algunos de los más memorables en la historia del béisbol." },
  { name:"Philadelphia Phillies", city:"Philadelphia, PA", stadium:"Citizens Bank Park", founded:1883, titles:2, division:"NL Este", lat:39.9061, lng:-75.1665, logo:"https://i.logocdn.com/mlb/current/philadelphia-phillies.svg", desc:"Los Phillies tienen una de las aficiones más apasionadas del béisbol. Ganaron campeonatos en 1980 y 2008, con estrellas como Mike Schmidt y Ryan Howard." },
  { name:"Miami Marlins", city:"Miami, FL", stadium:"loanDepot park", founded:1993, titles:2, division:"NL Este", lat:25.7781, lng:-80.2197, logo:"https://i.logocdn.com/mlb/current/miami-marlins.svg", desc:"Los Marlins son el equipo más joven en ganar dos Series Mundiales (1997 y 2003). Ambas victorias llegaron como comodines, lo cual es único en la MLB." },
  { name:"Washington Nationals", city:"Washington, D.C.", stadium:"Nationals Park", founded:1969, titles:1, division:"NL Este", lat:38.8730, lng:-77.0074, logo:"https://i.logocdn.com/mlb/current/washington-nationals.svg", desc:"Los Nationals ganaron su primera Serie Mundial in 2019 con un equipo liderado por Max Scherzer y Anthony Rendon, como comodines salvajes." },
 
  // ── NL CENTRAL ──
  { name:"Chicago Cubs", city:"Chicago, IL", stadium:"Wrigley Field", founded:1876, titles:3, division:"NL Central", lat:41.9484, lng:-87.6553, logo:"https://i.logocdn.com/mlb/current/chicago-cubs.svg", desc:"Los Cubs rompieron la 'Maldición del Chivo' en 2016 tras 108 años sin campeonato. Wrigley Field, inaugurado en 1914, es uno de los estadios más icónicos." },
  { name:"St. Louis Cardinals", city:"St. Louis, MO", stadium:"Busch Stadium", founded:1882, titles:11, division:"NL Central", lat:38.6226, lng:-90.1928, logo:"https://i.logocdn.com/mlb/current/st-louis-cardinals.svg", desc:"Los Cardinals son el equipo más exitoso de la Liga Nacional con 11 campeonatos. Stan Musial, Bob Gibson y Albert Pujols son algunas de sus grandes leyendas." },
  { name:"Milwaukee Brewers", city:"Milwaukee, WI", stadium:"American Family Field", founded:1969, titles:0, division:"NL Central", lat:43.0280, lng:-87.9712, logo:"https://i.logocdn.com/mlb/current/milwaukee-brewers.svg", desc:"Los Brewers llegaron a la Serie Mundial en 1982. Cuentan con uno de los mejores ambientes en sus juegos en casa, con los fans conocidos como 'Bernie's Crew'." },
  { name:"Pittsburgh Pirates", city:"Pittsburgh, PA", stadium:"PNC Park", founded:1882, titles:5, division:"NL Central", lat:40.4469, lng:-80.0057, logo:"https://i.logocdn.com/mlb/current/pittsburgh-pirates.svg", desc:"Los Pirates tienen uno de los estadios más hermosos del béisbol, PNC Park. Ganaron 5 Series Mundiales y Roberto Clemente es su mayor leyenda histórica." },
  { name:"Cincinnati Reds", city:"Cincinnati, OH", stadium:"Great American Ball Park", founded:1882, titles:5, division:"NL Central", lat:39.0979, lng:-84.5082, logo:"https://i.logocdn.com/mlb/current/cincinnati-reds.svg", desc:"Los Reds son el equipo profesional de béisbol más antiguo en EE.UU. La legendaria 'Big Red Machine' de los 70s dominó el béisbol con Johnny Bench y Pete Rose." },
 
  // ── NL WEST ──
  { name:"Los Angeles Dodgers", city:"Los Angeles, CA", stadium:"Dodger Stadium", founded:1883, titles:8, division:"NL Oeste", lat:34.0739, lng:-118.2400, logo:"https://i.logocdn.com/mlb/current/los-angeles-dodgers.svg", desc:"Los Dodgers tienen el estadio más visitado del béisbol. Ganaron la Serie Mundial en 2020 y 2024, con Shohei Ohtani y Mookie Betts como sus estrellas actuales." },
  { name:"San Francisco Giants", city:"San Francisco, CA", stadium:"Oracle Park", founded:1883, titles:8, division:"NL Oeste", lat:37.7786, lng:-122.3893, logo:"https://i.logocdn.com/mlb/current/san-francisco-giants.svg", desc:"Los Giants ganaron 3 Series Mundiales en 5 años (2010, 2012, 2014). Buster Posey y Madison Bumgarner fueron los héroes de esa dinastía moderna." },
  { name:"Arizona Diamondbacks", city:"Phoenix, AZ", stadium:"Chase Field", founded:1998, titles:1, division:"NL Oeste", lat:33.4453, lng:-112.0667, logo:"https://i.logocdn.com/mlb/current/arizona-diamondbacks.svg", desc:"Los D-backs ganaron la Serie Mundial en 2001 en una de las series más dramáticas, venciendo a los Yankees en el séptimo juego con un hit de Luis González." },
  { name:"Colorado Rockies", city:"Denver, CO", stadium:"Coors Field", founded:1993, titles:0, division:"NL Oeste", lat:39.7559, lng:-104.9942, logo:"https://i.logocdn.com/mlb/current/colorado-rockies.svg", desc:"Jugar en la altitud de Denver (5,280 pies) hace de Coors Field el estadio con más jonrones en la MLB. Todd Helton es la mayor leyenda del equipo." },
  { name:"San Diego Padres", city:"San Diego, CA", stadium:"Petco Park", founded:1969, titles:0, division:"NL Oeste", lat:32.7073, lng:-117.1566, logo:"https://i.logocdn.com/mlb/current/san-diego-padres.svg", desc:"Los Padres han llegado dos veces a la Serie Mundial (1984 y 1998). Fernando Tatis Jr. y Juan Soto han sido sus grandes atracciones recientes." }
];
 
// ── Group by division ──
const divisions = {};
teams.forEach(t => {
  if (!divisions[t.division]) divisions[t.division] = [];
  divisions[t.division].push(t);
});
const divisionOrder = ["AL Este","AL Central","AL Oeste","NL Este","NL Central","NL Oeste"];
 
// ── Render ──
function renderTeams(filter = "") {
  const container = document.getElementById("divisionsContainer");
  container.innerHTML = "";
  const q = filter.toLowerCase().trim();
  let anyResult = false;
 
  divisionOrder.forEach(div => {
    const filtered = divisions[div].filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.city.toLowerCase().includes(q) ||
      t.stadium.toLowerCase().includes(q)
    );
    if (!filtered.length) return;
    anyResult = true;
 
    const block = document.createElement("div");
    block.className = "division-block";
    block.innerHTML = `<h2 class="division-title">${div}</h2><div class="teams-grid"></div>`;
    container.appendChild(block);
 
    const grid = block.querySelector(".teams-grid");
    filtered.forEach((team, i) => {
      const card = document.createElement("div");
      card.className = "team-card";
      card.style.animationDelay = `${i * 0.05}s`;
      card.innerHTML = `
        <img src="${team.logo}" alt="${team.name}" loading="lazy" onerror="this.style.opacity='0.3'"/>
        <div class="team-name">${team.name}</div>
        <div class="team-city">${team.city}</div>
      `;
      card.addEventListener("click", () => openModal(team));
      grid.appendChild(card);
    });
  });
 
  if (!anyResult) {
    container.innerHTML = `<p class="no-results">No se encontraron equipos para "<strong>${filter}</strong>"</p>`;
  }
}
 
// ── Modal ──
function openModal(team) {
  document.getElementById("modalLogo").src = team.logo;
  document.getElementById("modalLogo").alt = team.name;
  document.getElementById("modalName").textContent = team.name;
  document.getElementById("modalDivision").textContent = team.division;
  document.getElementById("modalCity").textContent = team.city;
  document.getElementById("modalStadium").textContent = team.stadium;
  document.getElementById("modalFounded").textContent = team.founded;
  document.getElementById("modalTitles").textContent = team.titles === 0 ? "Ninguno" : `${team.titles} 🏆`;
  document.getElementById("modalDesc").textContent = team.desc;
 
  // ── OpenStreetMap embed (sin API key) ──
  const mapFrame = document.getElementById("modalMap");
  const delta = 0.012;
  mapFrame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${team.lng-delta},${team.lat-delta*0.7},${team.lng+delta},${team.lat+delta*0.7}&layer=mapnik&marker=${team.lat},${team.lng}`;
  document.getElementById("mapLink").href = `https://www.openstreetmap.org/?mlat=${team.lat}&mlon=${team.lng}#map=16/${team.lat}/${team.lng}`;
 
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
 
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
  setTimeout(() => { document.getElementById("modalMap").src = ""; }, 300);
}
 
function filterTeams() {
  renderTeams(document.getElementById("searchInput").value);
}
 
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
 
renderTeams();