import { initializeCandidateDatabase } from "../database.ts";
import { ArtisticTeaching, Candidate, Position } from "../types.ts";

const supabase = initializeCandidateDatabase();

export const getAllCandidates = async () => {
  const { data, error } = await supabase.from("candidate_details").select("*");

  if (error) throw error;
  return data;
};

export const getCandidateById = async (id: string) => {
  const { data, error } = await supabase
    .from("candidate_details")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

export const addOneCandidate = async (candidate: Partial<Candidate>) => {
  const { data, error } = await supabase
    .from("candidates")
    .insert([candidate])
    .select();

  if (error) throw error;
  return data[0];
};

export const updateCandidate = async (
  id: number,
  updates: Partial<Candidate>,
) => {
  const { data, error } = await supabase
    .from("candidates")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) throw error;
  return data[0];
};

export const getAllPositions = async () => {
  const { data, error } = await supabase.from("positions").select("id, name");

  if (error) throw error;
  return data as Position[];
};

export const getAllArtisticTeachings = async () => {
  const { data, error } = await supabase
    .from("artistic_teachings")
    .select("id, name");

  if (error) throw error;
  return data as ArtisticTeaching[];
};
