import {test, expect} from "@jest/globals";
import supertest from "supertest";
import app from "../app.js"

describe(":GET -> get all resources", () => {
  test("when successfull should get all resources", async () => {
    const response = await supertest(app).get('/resources');
    console.log({response});
  });
});
