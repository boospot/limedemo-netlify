'use client'

import { useEffect, useRef } from 'react'
import CMS from 'decap-cms-app'

export default function CMSInitializer() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    CMS.init()
  }, [])

  return <div id="nc-root" />
}