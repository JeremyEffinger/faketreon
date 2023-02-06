import request from "supertest";

const baseURL = "http://localhost:6000";

describe("/api/v1 end point testing", () => {
  test("gets the base api endpoint", async () => {
    const response = await request(baseURL).get("/api/v1");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello!");
  });
});

describe("test 404 end point", () => {
  test("Should fail over to 404 route", async () => {
    const response = await request(baseURL).get("/fourohfour");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Not Found");
  });
});
