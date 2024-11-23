import { useEffect, useState } from 'react';
import { fetchAllArtisticTeachings, fetchAllPositions } from '../api/utils';

export interface Position {
  id: number;
  name: 'Inscrit' | 'Non inscrit';
}

export interface ArtisticTeaching {
  id: number | null;
  name:
    | 'Art - Cinéma audiovisuel'
    | 'Art - Histoire des arts'
    | 'Art - Théâtre'
    | 'Art - Arts du cirque'
    | 'Art - Musique'
    | 'Art - Danse'
    | 'Art - Arts plastiques';
}

const ArtisticTeaching = () => {
  // Frontend component
  const [positions, _setPositions] = useState<Position[]>([]);
  const [artisticTeachings, _setArtisticTeachings] = useState<
    ArtisticTeaching[]
  >([]);

  useEffect(() => {
    fetchAllPositions();
    fetchAllArtisticTeachings();
  }, []);

  const [formData, setFormData] = useState<{
    position_id: number;
    artistic_teaching_id: number | null;
  }>({
    position_id: 0,
    artistic_teaching_id: null,
  });

  return (
    <>
      <select
        value={formData.position_id}
        onChange={(e) =>
          setFormData({ ...formData, position_id: Number(e.target.value) })
        }
      >
        {positions.map((pos) => (
          <option key={pos.id} value={pos.id}>
            {pos.name}
          </option>
        ))}
      </select>

      <select
        value={formData.artistic_teaching_id || ''}
        onChange={(e) =>
          setFormData({
            ...formData,
            artistic_teaching_id: Number(e.target.value) || null,
          })
        }
      >
        <option value="">Select Teaching</option>
        {artisticTeachings.map((teaching) => (
          <option key={teaching.id}>{teaching.name}</option>
        ))}
      </select>
    </>
  );
};

export default ArtisticTeaching;
