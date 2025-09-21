import { useState } from 'react';
import { FilterState } from './types';

export const useFilter = () => {
  const [filter, setFilter] = useState<FilterState>({
    month: new Date().toISOString().substr(0, 7),
    category: 'all'
  });

  const [appliedFilter, setAppliedFilter] = useState<FilterState>(filter);

  const updateFilter = (newFilter: FilterState) => {
    setFilter(newFilter);
  };

  const applyFilter = () => {
    setAppliedFilter(filter);
  };

  const resetFilter = () => {
    const defaultFilter = {
      month: new Date().toISOString().substr(0, 7),
      category: 'all'
    };
    setFilter(defaultFilter);
    setAppliedFilter(defaultFilter);
  };

  return {
    filter,
    appliedFilter,
    updateFilter,
    applyFilter,
    resetFilter
  };
};