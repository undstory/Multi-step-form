import styled from 'styled-components'
import { InputState } from './types'

export const BaseInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`

export const InputField = styled.input<{ state: InputState }>`
  border: 0.5px solid ${({ theme: { colors } }) => colors.marineBlue};
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.marineBlue};
  font-size: 12px;
  width: 100%;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.pastelBlue};
    font-size: 12px;
  }
`

export const ActiveField = styled(BaseInputContainer)`
  ${InputField} {
    border: 1px solid ${({ theme: { colors } }) => colors.purplishBlue};
  }
`

export const ErrorField = styled(BaseInputContainer)`
  ${InputField} {
    border: 1px solid ${({ theme: { colors } }) => colors.strawberryRed};
  }
`

export const InactiveField = styled(BaseInputContainer)`
  ${InputField} {
    border: 1px solid ${({ theme: { colors } }) => colors.pastelBlue};
  }
`

export const SuccessField = styled(BaseInputContainer)`
  ${InputField} {
    border: 1px solid ${({ theme: { colors } }) => colors.pastelBlue};
  }
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
  justify-content: space-between;
`
