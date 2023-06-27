export const ProductErrorInfo = (user) => {
    //return
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
    Lista de propiedades requeridas:
        * title: type String, recibido: ${user.title}
        * category: type String, recibido: ${user.category}
        * price: type Number, recibido: ${user.price}
        * code: type String, recibido: ${user.code}
        * stock: type Number, recibido: ${user.stock}
    `
};