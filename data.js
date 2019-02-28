var dinnerMaker=function(food, company, place)
{
  return{
    food: food,
    company: company,
    place: place
  }
}

var data = [
  dinnerMaker("pizza", "friends", "Papa John's"),
  dinnerMaker("pasta", "Wynnie", "Cowan"),
  dinnerMaker("soup", "family", "home"),
  dinnerMaker("dumpling", "Emma", "China")
];

var table=d3.select(".data").append("table");
var rows=table.selectAll("tr")
              .data(data)
              .enter()
              .append("tr");

rows.append("td")
  .text(function(d){return d.food});
  .text(function(d){return d.company});
  .text(function(d){return d.place});
