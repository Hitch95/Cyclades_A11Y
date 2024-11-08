import {
  RouterMiddleware,
  RouterContext,
} from 'https://deno.land/x/oak/mod.ts';
import { DB } from 'https://deno.land/x/sqlite@v3.9.1/mod.ts';
import { Candidate } from './types.ts';

const db = new DB('candidates.db');

// Define proper types for the route handler
export const candidatesRoute: RouterMiddleware<'/candidates/:id?'> = async (
  context: RouterContext<'/candidates/:id?'>
) => {
  const id = context.params.id;

  console.log('Request URL:', context.request.url);
  console.log('ID:', id);

  if (context.request.method === 'GET') {
    try {
      const candidates = await getCandidates(id);
      context.response.status = candidates.status;
      context.response.type = 'application/json';
      context.response.body = candidates.body;
    } catch (error) {
      console.error('Error fetching candidates:', error);
      context.response.status = 500;
      context.response.body = { error: 'Failed to fetch candidates' };
    }
    return;
  }

  context.response.status = 405;
  context.response.body = { error: 'Method not allowed' };
};

type ResponseBody = Candidate | Candidate[] | ErrorResponse | string;

interface CandidateResponse {
  status: number;
  body: ResponseBody;
}

interface ErrorResponse {
  error: string;
  [key: string]: any;
}

// Fix the getCandidates function
async function getCandidates(id?: string): Promise<CandidateResponse> {
  try {
    if (id) {
      // Fix the SQLite query result handling
      const result = [
        ...db.query('SELECT * FROM candidates WHERE id = ?', [id]),
      ];
      const candidate = result[0]; // Get the first row if it exists

      if (!candidate) {
        return {
          status: 404,
          body: { error: 'Candidate not found' },
        };
      }

      return {
        status: 200,
        body: JSON.stringify(candidate),
      };
    }

    const candidates = [...db.query('SELECT * FROM candidates')];
    return {
      status: candidates.length ? 200 : 404,
      body: JSON.stringify(candidates),
    };
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Database operation failed');
  }
}
