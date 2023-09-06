import { useContext } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Excofy" />
        <option value="Aventurebox" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos</span>

      <label htmlFor="category">para o</label>
      <TaskInput
        id="category"
        list="category-suggestions"
        placeholder="Categoria"
        disabled={!!activeCycle}
        {...register('category')}
      />

      <datalist id="category-suggestions">
        <option value="Trabalho" />
        <option value="Rocketseat" />
      </datalist>
    </FormContainer>
  )
}
