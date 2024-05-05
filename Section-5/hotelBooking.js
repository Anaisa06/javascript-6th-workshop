//Hotel reservation system
//Global variables
const url = "/Section-5/data.json"
const bookings = []
let bookingId = 1
let bookingExists = true

//Interactive menu
function interactiveMenu(){
   return `Bienvenido al sistema de reservas del hotel
    
    1. Hacer una reserva
    2. Ver reservas
    3. Cancelar reservas
    4. Editar reservas
    5. Ver todas las habitaciones
    6. Salir `
}

function showRooms(roomList, roomTypesList){
    let rooms = "Esta es una lista de las habitaciones:\n"
    roomList.forEach((room) => {        
         rooms += `- Número: ${room.number} - Precio: $${room.priceNight}  - Capacidad: ${roomTypesList.find((type) => type.id === room.roomTypeId).capacity} (${roomTypesList.find((type) => type.id === room.roomTypeId).name})\n`
    });
    return rooms
}

//Function to verify if the number is valid
const verifyNumber = function(variable){
    while(isNaN(variable)){            
        variable = prompt("Por favor, ingresa solo números")
    }
    variable = parseInt(variable)
    return variable 
}

//Function to make a booking
function makeBooking(roomList, roomTypesList){   
    //Ask the number of people
    const people = verifyNumber(prompt("¿Cuántas personas se alojarán?"))
    
    //Show available rooms with the right capacity    
    let availableRooms = ""
    const availableRoomsList = []
    roomList.forEach((room) => {
        const roomCapacity = roomTypesList.find((type) => type.id === room.roomTypeId).capacity
        const roomName = roomTypesList.find((type) => type.id === room.roomTypeId).name
        const roomDescription = roomTypesList.find((type) => type.id === room.roomTypeId).description

        //Check capacity and availability of each room
        if(roomCapacity >= people && room.availability){
            availableRooms += `- Número de habitación: ${room.number} (${roomName}) - Precio: $${room.priceNight} - Descripción: ${roomDescription}\n`
            //Add the available rooms to a list
            availableRoomsList.push(room.number)
        }
    })
    //If there are no available rooms, show an alert
    if(!availableRooms){
        alert("No hay habitaciones disponibles para esa cantidad de personas.")
    }  else {
            //Ask the number of the room
        let roomNumber = verifyNumber(prompt(`Las habitaciones disponibles son:\n${availableRooms}\n¿Qué habitación desea?`))

        //Check if the user input is correct
        if(availableRoomsList.includes(roomNumber)){
            //Ask the name of the main guest
            const guestName = prompt("Ingrese el nombre del huésped principal:").toLowerCase()
            //Ask the dates
            const startDate = prompt("Ingresa la fecha de inicio (dd/mm/aaaa)")
            const endDate = prompt("Ingresa la fecha de salida (dd/mm/aaaa)")
                    
            //Add booking to a list
            bookings.push({
                bookingId: bookingId++,
                roomNumber,
                guestName,
                startDate,
                endDate
            })
            //Change availability of the room
            roomList.forEach(room => {
                if(room.number == roomNumber){
                    room.availability = false
                }
            })
        } else {
            alert("La habitación no está disponible.")
        }
    }
}

//Function to search a booking
function bookingSearch(guestNameSearch){     
    let guestBooking = ""
    //Search for the booking
    bookings.forEach(booking => {
        if(booking.guestName == guestNameSearch){
            //If the booking is found, show the booking
            guestBooking += `\n- Id: ${booking.bookingId}\n- Habitación: ${booking.roomNumber}\n- Fecha de entrada: ${booking.startDate}\n- Fecha de salida: ${booking.endDate}`
        }
    })
    //If the booking is not found, show an error message
    if(!guestBooking){
        bookingExists = false
        return "No se encontró ninguna reserva con ese nombre."
    } else {
        bookingExists = true
        return `Reserva(s) encontrada(s) para ${guestNameSearch}:\n${guestBooking}\n`
    }
}

//Cancel a booking
function bookingCancel(guestBookings, guestName){    
    guestBookings(guestName)
    if (!bookingExists){
        alert(guestBookings(guestName))
    } else { //Ask for the booking id
        const bookingIdToCancel = verifyNumber(prompt(guestBookings(guestName) + "\nIngresa el id de la reserva que deseas cancelar"))       
        bookings.forEach(booking => {
            //If the booking is found, cancel it
            if(booking.bookingId == bookingIdToCancel){
                //Ask for the confirmation
                if(confirm("¿Está seguro que desea cancelar su reserva?")){
                    bookings.splice(bookings.indexOf(booking), 1)
                    alert("Reserva cancelada exitosamente")
                } 
            //If the booking is not found, show an error message
            } else {
                alert("Reserva no encontrada")
            }
        }) 
    }    
}

//Update booking
function bookingUpdate(guestBookings, guestName){
    guestBookings(guestName)
    if (!bookingExists){
        alert(guestBookings(guestName))
    } else { //Ask for the booking id
        const bookingIdToUpdate = verifyNumber(prompt(guestBookings(guestName) + "\nIngresa el id de la reserva que deseas cancelar"))       
        let bookingToUpdate = bookings.find(booking => booking.bookingId == bookingIdToUpdate)
        if(!bookingToUpdate){
            alert("Reserva no encontrada")
        } else {
            const newStartDate = prompt("Ingresa la nueva fecha de ingreso")
            const newEndDate = prompt("Ingresa la nueva fecha de salida")
            bookingToUpdate.startDate = newStartDate
            bookingToUpdate.endDate = newEndDate
            alert("Reserva actualizada exitosamente")
        }
    }
}

//Import data from json file
function importData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    //If the response is not ok, throw an error
                    if (!response.ok){
                        throw new Error("Error al cargar los datos de las habitaciones.")
                    }
                    //If the response is ok, return the json file
                    return response.json()
                })
                //If the json file is loaded, resolve the promise with the data
                .then((data) => {    
                    console.log(data.rooms)
                    console.log(data.roomTypes)                
                    resolve(data)
                })
                .catch((error) => {
                    console.error(error)
                    reject(error)
                })
        }, 3000)
    })
}

importData()
    .then(({rooms, roomTypes}) => {
        let menu = true
        while (menu){
            //Show the menu
            let option = prompt(interactiveMenu())
            switch (option){
                //Exit
                case "6":
                    alert("Hasta pronto!")
                    menu = false
                    break                 
                //Make a booking
                case "1":                    
                    makeBooking(rooms, roomTypes)                    
                    break  
                //Show bookings
                case "2":                     
                    if (!bookings.length){
                        alert("No hay ninguna reserva")
                    } else {
                    alert(bookingSearch(prompt("Ingresa el nombre del huesped principal").toLowerCase()))}
                    break
                //Cancel booking
                case "3":  
                    if (!bookings.length){
                        alert("No hay ninguna reserva")
                    } else {                  
                    bookingCancel(bookingSearch, prompt("Ingresa el nombre del huesped principal").toLowerCase())}
                    break
                //Edit reservation
                case "4":
                    if (!bookings.length){
                        alert("No hay ninguna reserva")
                    } else {                  
                    bookingUpdate(bookingSearch, prompt("Ingresa el nombre del huesped principal").toLowerCase())}
                    break
                //Show rooms
                case "5":                    
                    alert(showRooms(rooms, roomTypes))
                    break
                default:
                    alert("No es una opción válida, intenta de nuevo")    
            }            
        }        
    })
    .catch(error => {
        console.error("Hubo un error en la promesa" + error)
    })