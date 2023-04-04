const totalDolphinScore = 966+108+89;
const totalKoalasScore = 88+98+110;
const avgDolphinScore=totalDolphinScore/3;
const avgKoalasScore=totalKoalasScore/3;
console.log(avgDolphinScore,avgKoalasScore);
if(avgDolphinScore>avgKoalasScore && avgDolphinScore>=100 ) console.log("Dolphin Win the game");
else if(avgDolphinScore<avgKoalasScore && avgKoalasScore>=100 ) console.log("Koalas Win the game");
else console.log("Draw  the game");