var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
  //for-loop
  for(let i=0;i<obj.length;i++)
  {
      console.log(obj[i]);
  }
  //for in loop
  for(let x in obj)
  {
      console.log(obj[x]);
  }
  //for each loop
obj.forEach(function(){
    console.log(obj[1])
});
//for of loop
for(let objects of obj)
  {
      console.log(objects);
  }