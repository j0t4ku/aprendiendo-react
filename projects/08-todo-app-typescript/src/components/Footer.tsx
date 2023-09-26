import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCounts: number
  completedCounts: number
  onClearCompleted: () => void
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCounts = 0,
  completedCounts = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <footer className="footer">
      <span>
        <strong>{activeCounts}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {
        completedCounts > 0 && (
          <button
            className='clear-completed'
            onClick={onClearCompleted}
          >
            Borrar Completados
          </button>
        )
      }

    </footer>
  )
}
