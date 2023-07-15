export const typeDefs = `
    type Link {
        id: ID
        title: String
        description: String
        url: String
        imageUrl: String
        category: String
        users: [User]
    }
    
    type User {
        id: ID
        name: String
        email: String
        image: String
        role: Role
        bookmarks: [Link]
    }
    
    enum Role {
        User
        Admin
        Customer
    }
    
    type Query {
        links: [Link]!
    }
`;
