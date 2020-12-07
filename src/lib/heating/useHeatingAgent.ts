import {useCallback, useEffect, useState} from 'react';
import {heatingStatus, heatingOn, heatingOff} from './api';

export default function useHeatingAgent() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const onMount = async () => setStatus(await heatingStatus());
    onMount();
  }, []);

  const on = useCallback(async () => {
    setStatus(await heatingOn());
  }, []);

  const off = useCallback(async () => {
    setStatus(await heatingOff());
  }, []);

  const toggle = useCallback(async () => {
    status ? await off() : await on();
  }, [status, on, off]);

  return {status, on, off, toggle};
}
