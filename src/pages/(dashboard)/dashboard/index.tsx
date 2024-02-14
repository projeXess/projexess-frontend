/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


type Props = object

function Index({ }: Props) {


  const navigate = useNavigate()
  useEffect(() => {
    navigate('/dashboard/timeline', { replace: true })
  }, [])
  return null
}

export default Index