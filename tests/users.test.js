const request = require("supertest");
const app = require("../index");

describe("API TEST - PERMISSIONS ", () => {
  it("/GET users route", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toEqual(200);
  });
  it("/GET admins route", async () => {
    const response = await request(app).get("/admins");
    expect(response.status).toEqual(200);
  });
});
