import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("database.db");

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname;
  const id = path.split("/")[2];

  if (!path.startsWith("/candidates")) {
    return new Response("Not found", { status: 404 });
  }

  if (req.method === "GET" && !id) {
    try {
      const candidates = [...db.query("SELECT * FROM candidates")].map(([id, candidateNumber, inscriptionNumber, lastname, firstnames, birthdate, countryOfBirth, cityOfBirth, gender, nationality, number, country, city, schoolCode, classDivision, state, qualification, created]) => ({
        id,
        candidateNumber,
        inscriptionNumber,
        lastname,
        firstnames,
        birthdate,
        countryOfBirth,
        cityOfBirth,
        gender,
        nationality,
        number,
        country,
        city,
        schoolCode,
        classDivision,
        state,
        qualification,
        created,
      }));
      return new Response(JSON.stringify(candidates), {
        headers: { "Content-Type": "application/json" },
        status: candidates.length ? 200 : 404,
      });
    } catch (error) {
      return new Response("Failed to fetch candidates", { status: 500 });
    }
  }

  if (req.method === "GET" && id) {
    try {
      const candidate = db.query("SELECT * FROM candidates WHERE id = ?", [id]).map(([id, candidateNumber, inscriptionNumber, lastname, firstnames, birthdate, countryOfBirth, cityOfBirth, gender, nationality, number, country, city, schoolCode, classDivision, state, qualification, created]) => ({
        id,
        candidateNumber,
        inscriptionNumber,
        lastname,
        firstnames,
        birthdate,
        countryOfBirth,
        cityOfBirth,
        gender,
        nationality,
        number,
        country,
        city,
        schoolCode,
        classDivision,
        state,
        qualification,
        created,
      }))[0];

      if (!candidate) {
        return new Response("Candidate not found", { status: 404 });
      }

      return new Response(JSON.stringify(candidate), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    } catch (error) {
      return new Response("Failed to fetch candidate", { status: 500 });
    }
  }

  return new Response("Hello World!");
});

// Close the database when the server is terminated
addEventListener("unload", () => {
  db.close();
});
