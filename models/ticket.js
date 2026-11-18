//Xaiver Leung

// creates a blueprint for a ticket
class Ticket{
    //runs when a new ticket is create and save it 
    constructor (title, category, location, priority, description){
        this.title = title;
        this.category = category;
        this.location = location;
        this.priority = priority;
        this.description = description;
        this.dateSubmitted = new Date();
    }
}

//ticket avaliable to other file
module.exports = Ticket;