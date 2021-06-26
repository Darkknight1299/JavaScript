let input = [{
    "Team": "A",
    "Member": "James",
    "Leads": 305,
    "ClosedLeads":35
},{
    "Team": "C",
    "Member": "Maria",
    "Leads": 370,
    "ClosedLeads":51
},{
    "Team": "B",
    "Member": "Travis",
    "Leads": 240,
    "ClosedLeads":45
},{
    "Team": "A",
    "Member": "Jon",
    "Leads": 285,
    "ClosedLeads":39
},{
    "Team": "A",
    "Member": "Adams",
    "Leads": 190,
    "ClosedLeads":38
},{
    "Team": "B",
    "Member": "Irene",
    "Leads": 235,
    "ClosedLeads":40
},{
    "Team": "D",
    "Member": "Sarah",
    "Leads": 300,
    "ClosedLeads":53
},
{
    "Team": "C",
    "Member": "Mike",
    "Leads": 270,
    "ClosedLeads":40
}];
 
 
 
let team = []; 
let i,j;
 
for(i=0; i<input.length; i++){
    let found = false;
    for(j=0; j<team.length; j++){
        if(team[j][0].Team == input[i].Team){
            found = true;
            team[j].push(input[i]);
        }
        if(found)
            break;
    }
    if(!found)
    {
        team.push([]);
        team[team.length - 1].push(input[i]);
    }
    
}
 
 
 
let efficiency = [];
let count = 0;
let temp = 0;
for( i=0; i<team.length; i++){
    count = 0;
    for( j=0; j < team[i].length; j++){
        temp += (team[i][j].closedLeads/team[i][j].deads)*100;
        count += 1;
    }
 
    let ob = {
    "team": team[i][0].Team,
    "eff": temp/count
    }
    efficiency.push(ob);
}
 
 
let max = -1;
for(i=0; i<efficiency.length; i++){
	if(efficiency[i].efficiency > max){
		max = efficiency[i].Efficiency;
		Index = i;
}
}
 
console.log(efficiency);