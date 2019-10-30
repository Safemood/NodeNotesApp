const tasks = {
    tasks : [{
        text :'react Native',
        completed : true
    },
    {
        text :'mvc',
        completed : false
    },
    {
        text :'Php Design Pattern',
        completed : false
    }
],
getTasksToDo()  {
  return  this.tasks.filter((task) => task.completed === false )
      
}

}

console.log(tasks.getTasksToDo())