export function getAppointment(){
    let myAppointment = localStorage.getItem("appointment");
    if(myAppointment){
        myAppointment = JSON.parse(myAppointment);
        return myAppointment;
    }else{
        return [];
    }
}
export function addAppointment(id, myAppointment){
    // console.log("This is the reg from addAppointment function",id);
    let newAppointment = [...myAppointment, id];
    // console.log("This the appointment list", newAppointment);
    newAppointment = JSON.stringify(newAppointment);
    // console.log("this is the new appointment", newAppointment);
    localStorage.setItem("appointment", newAppointment);
}