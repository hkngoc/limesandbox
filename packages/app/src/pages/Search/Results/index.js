import { Hits, Pagination } from 'react-instantsearch-dom';

import ResultInfo from '../ResultInfo';
import SandboxCard from '../SandboxCard';

const Results = () => {
  return (
    <div className="border-top py-3">
      <ResultInfo />
      <div>
        <Hits
          hitComponent={({ hit }) => {
            const {
              name,
              objectID: id,
              template,
              category,
            } = hit

            return (
              <SandboxCard
                sandbox={{ name, id, template, category }}
              />
            )
          }}
        />
        <div className="d-flex justify-content-center mt-3">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Results;
