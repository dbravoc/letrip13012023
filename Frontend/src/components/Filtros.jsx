import React, { useContext } from 'react';
import TagFilter from './TagFilter';
import { FiltrosContext } from './FiltrosContext';

const Filtros = () => {
  const { tags, setTags } = useContext(FiltrosContext);

  return (
    <div>
      <TagFilter tags={tags} setTags={setTags} />
    </div>
  );
};

export default Filtros;
