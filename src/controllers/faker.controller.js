import { faker } from '@faker-js/faker';

const generateHundredProducts = () => {
    let products = [];

    for (let i = 0; i < 100; i++) {
        let newProd = {
            title: faker.commerce.productName(),
            category: faker.commerce.department(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            code: faker.random.alphaNumeric(10),
            stock: faker.random.numeric(1),
            thumbnail: faker.image.image(),
            status: faker.datatype.boolean(),
            id: faker.database.mongodbObjectId()
        }
        products.push(newProd);
    }

    return products;
}

export default generateHundredProducts;