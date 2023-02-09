import { useLocation } from 'react-router-dom';
import { NavLinkActive, NavLinkInactive } from './styles';

interface ActiveLinkProps {
  to: string;
  name: string;
}

export function ActiveLink({ to, name }: ActiveLinkProps) {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname === to) {
    return (
      <NavLinkActive to={to}>
        {name}
      </NavLinkActive>
    )
  }

  return (
    <NavLinkInactive to={to}>
      {name}
    </NavLinkInactive>
  )
}