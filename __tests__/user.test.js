import request from "supertest";

const baseURL = "http://localhost:6000";

describe("Test /api/v1/users", () => {
  test("Test /users end point, ensure first user ID is 1", async () => {
    const response = await request(baseURL).get("/api/v1/users");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body[0].id).toBe(1);
  });
  test("Test getting user by ID", async () => {
    const response = await request(baseURL).get("/api/v1/users/1");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.name).toBe("koboldpress");
  });
});
