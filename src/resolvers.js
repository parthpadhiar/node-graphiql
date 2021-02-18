import nanoid from "nanoid";

class Course {
    constructor(id, { name, category, email, price, stack, language }) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.email = email;
        this.stack = stack;
        this.language = language;
    }
}

const courseholder = {};

const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseholder[id]);
    },
    createCourse: ({ input }) => {
        let id = nanoid();
        courseholder[id] = input;
        return new Course(id, input);
    },
};

export default resolvers;