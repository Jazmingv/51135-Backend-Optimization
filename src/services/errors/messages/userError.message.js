export const UserErrorInfo = (user) => {
    //return
    return `Una o m�s propiedades fueron enviadas incompletas o no son v�lidas.
    Lista de propiedades requeridas:
        * fist_name: type String, recibido: ${user.first_name}
        * last_name: type String, recibido: ${user.last_name}
        * email: type String, recibido: ${user.email}
        * password: type String
    `
};