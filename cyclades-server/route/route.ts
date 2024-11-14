import { Router } from 'jsr:@oak/oak';

import {
  getAllCandidates,
  getCandidateById,
  addOneCandidate,
  getAllPositions,
  getAllArtisticTeachings,
} from '../repositories/candidatesRepository.ts';
import { Candidate } from '../types.ts';

export const basePath = '/api';

const candidatesRoute = (router: Router) => {
  // Health check endpoints
  router.options(basePath + '/healthz', (ctx) => {
    ctx.response.body = { message: 'health check verified' };
  });

  router.get(basePath + '/healthz', (ctx) => {
    ctx.response.body = { message: 'health check verified' };
  });

  // Get all candidates
  router.get(basePath + '/candidates', async (ctx) => {
    try {
      const candidates = await getAllCandidates();
      ctx.response.body = candidates;
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        message: 'Error fetching candidates',
        error: (error as Error).message,
      };
    }
  });

  // Get a specific candidate by ID
  router.get(basePath + '/candidate/:id', async (ctx) => {
    const id = ctx.params.id;
    try {
      const candidate = await getCandidateById(id);
      if (candidate) {
        ctx.response.body = candidate;
      } else {
        ctx.response.status = 404; // Not Found for invalid ID
        ctx.response.body = { message: 'Candidate not found' };
      }
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        message: 'Error fetching candidate',
        error: (error as Error).message,
      };
    }
  });

  // Add a new candidate
  router.post(basePath + '/candidates', async (ctx) => {
    try {
      const candidate: Candidate = await ctx.request.body.json();
      const newCandidate = await addOneCandidate(candidate);
      ctx.response.status = 201;
      ctx.response.body = newCandidate;
    } catch (error: unknown) {
      ctx.response.status = 500;
      ctx.response.body = {
        message: 'Error while adding the new candidate',
        error: (error as Error).message,
      };
    }
  });

  // Get all positions
  router.get(basePath + '/positions', async (ctx) => {
    try {
      const positions = await getAllPositions();
      ctx.response.body = positions;
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        message: 'Error fetching positions',
        error: (error as Error).message,
      };
    }
  });

  // Get all artistic teachings
  router.get(basePath + '/artistic-teachings', async (ctx) => {
    try {
      const artisticTeachings = await getAllArtisticTeachings();
      ctx.response.body = artisticTeachings;
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        message: 'Error fetching artistic teachings',
        error: (error as Error).message,
      };
    }
  });
};

export default candidatesRoute;
