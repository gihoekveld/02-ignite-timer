import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { Trash } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import { HistoryContainer, HistoryList, Status, TrashIcon } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles, deleteCycle } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        {cycles.length === 0 && <p>Nenhum ciclo registrado.</p>}
        {cycles.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Categoria</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.category}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                  <td>
                    <TrashIcon onClick={() => deleteCycle(cycle.id)}>
                      <Trash size={16} />
                    </TrashIcon>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </HistoryList>
    </HistoryContainer>
  )
}
