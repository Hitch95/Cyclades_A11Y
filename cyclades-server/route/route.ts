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
  router.get(basePath + '/candidates', (ctx) => {
    const candidates = getAllCandidates();
    ctx.response.body = candidates;
  });

  // Get specific candidate by ID
  router.get(basePath + '/candidate/:id', (ctx) => {
    const id = ctx.params.id;
    const candidate = getCandidateById(id);

    if (candidate) {
      ctx.response.body = candidate;
    } else {
      ctx.response.status = 204; // No Content for invalid ID
    }
  });

  // Add a new candidate
  router.post(basePath + '/candidates', async (ctx) => {
    const candidate: Candidate = await ctx.request.body.json();
    try {
      const lastId = addOneCandidate(candidate);
      ctx.response.status = 201; // Created status
      ctx.response.body = { ...candidate, id: lastId };
    } catch (error: unknown) {
      ctx.response.status = 500; // Internal Server Error
      ctx.response.body = {
        message: 'Error while adding the new candidate',
        error: (error as Error).message,
      };
    }
  });

  // Get all positions
  router.get(basePath + '/positions', (ctx) => {
    const positions = getAllPositions();
    ctx.response.body = positions;
  });

  // Get all artistic teachings
  router.get(basePath + '/artistic-teachings', (ctx) => {
    const artisticTeachings = getAllArtisticTeachings();
    ctx.response.body = artisticTeachings;
  });
};

export default candidatesRoute;
