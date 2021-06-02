import { Stats, ClearRefinements } from 'react-instantsearch-dom';

const ResultInfo = () => {
  return (
    <div className="d-flex justify-content-between mb-3">
      <Stats
        translations={{
          stats: nbHits => `${nbHits.toLocaleString()} results found`,
        }}
      />
      <div>
        <ClearRefinements />
      </div>
    </div>
  )
};

export default ResultInfo;
