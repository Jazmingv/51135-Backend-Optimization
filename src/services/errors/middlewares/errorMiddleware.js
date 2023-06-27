import EnumErrors from '../errorEnums.js';

export default (err, req, res, next) => {
    //Logica
    console.error("Error detectado entrando al Error Handler");
    console.error(err.cause);
    switch (err.code) {
        case EnumErrors.ROUTING_ERROR:
            res.status(400).send({ status: "Error", error: err.message });
            next();
        case EnumErrors.INVALID_TYPES_ERROR:
            res.status(400).send({ status: "Error", error: err.message });
             next();
            break;
        case EnumErrors.DATABASE_ERROR:
            res.status(500).send({ status: "Error", error: err.message });
             next();
            break;
        default:
            res.status(500).send({ status: "Error", error: "Unhandeld error!" })
            break;
    }
};