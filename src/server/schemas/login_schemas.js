

export default {
    add: {
      type: "object",
      properties: {
        email: {
          type: "string",
          minLength: 1
        },
        password: {
          type: "string",
          minLength: 1
        }
      },
    
    },
    
};