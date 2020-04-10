
export const environment = {
    server: { port: process.env.PORT || 3000 },
    db: { url: process.env.DB_URL || "mongodb://localhost/webservice" },
    security: { saltRounds: process.env.SALT_ROUNDS || 10 }
};