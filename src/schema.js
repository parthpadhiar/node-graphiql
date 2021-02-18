import buildSchema from "graphql";

const schema = buildSchema(`
    type Course {
        id:ID
        name: String
        email: String
        category: [Categories]
        price: Int
        stack: Stack
        language: String
    }

    type Categories {
        name: String
        code: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id:ID): Course
    }

    input CourseInput{
        id:ID
        name: String!
        email: String!
        category: [CategoriesInput]!
        price: Int
        stack: Stack
        language: String
    }

    input CategoriesInput{
        name: String
        code: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`);

export default schema;